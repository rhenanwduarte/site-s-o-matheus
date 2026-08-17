// Auto Peças São Matheus — v1
// Menu mobile (abrir/fechar) + fechamento automático ao navegar/ESC.

(function () {
  var trigger = document.getElementById("menu-trigger");
  var menu = document.getElementById("mobile-menu");

  if (!trigger || !menu) return;

  function openMenu() {
    menu.dataset.state = "open";
    trigger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.dataset.state = "closed";
    trigger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  trigger.addEventListener("click", function () {
    var isOpen = menu.dataset.state === "open";
    isOpen ? closeMenu() : openMenu();
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.dataset.state === "open") {
      closeMenu();
    }
  });
})();

// Ano corrente no rodapé
var yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Reveal em scroll — um único momento autoral reaproveitado na página inteira.
// .reveal-curtain (o rodapé) usa a mesma classe .is-visible, mas o CSS aplica
// um clip-path em vez de fade+translate — é o fechamento cinematográfico da
// página, ver DESIGN.md "The Closing Signature Rule".
// Elementos já visíveis no carregamento (hero) disparam imediatamente, pois o
// IntersectionObserver avalia a interseção atual na primeira observação.
(function () {
  var targets = document.querySelectorAll(".reveal, .reveal-curtain");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach(function (el) { observer.observe(el); });
})();

// Efeito magnético — leve atração do elemento em direção ao cursor, com
// retorno elástico ao sair. Desativado em touch (sem hover) e quando o
// visitante prefere menos movimento.
(function () {
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasHover = window.matchMedia("(hover: hover)").matches;
  if (prefersReducedMotion || !hasHover) return;

  var strength = 0.35;

  document.querySelectorAll(".js-magnetic").forEach(function (el) {
    el.addEventListener("mousemove", function (event) {
      var rect = el.getBoundingClientRect();
      var x = event.clientX - rect.left - rect.width / 2;
      var y = event.clientY - rect.top - rect.height / 2;
      el.style.transition = "transform 0.15s ease-out";
      el.style.transform = "translate(" + (x * strength).toFixed(1) + "px, " + (y * strength).toFixed(1) + "px)";
    });

    el.addEventListener("mouseleave", function () {
      el.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.transform = "translate(0, 0)";
    });
  });
})();

// Shader de fundo da hero — plasma de linhas em WebGL, escopado à própria
// seção (não à viewport inteira, para não ficar fixo atrás do resto da
// página ao rolar). Cores recalibradas para a paleta preto+âmbar do
// DESIGN.md (nunca o roxo/azul do efeito original). Pausa via
// IntersectionObserver quando a hero sai da tela, e nunca inicia se o
// visitante prefere menos movimento — nesses casos o gradiente/hairline
// estático de .hero__media (já no CSS) permanece como o visual da seção.
(function () {
  var canvas = document.getElementById("hero-shader");
  if (!canvas) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) return;

  var heroEl = canvas.closest(".hero");

  var vsSource = [
    "attribute vec4 aVertexPosition;",
    "void main() {",
    "  gl_Position = aVertexPosition;",
    "}",
  ].join("\n");

  // Mesma lógica de plasma do componente original; apenas as três cores
  // (fundo 1, fundo 2, linhas) foram recalibradas para a paleta da marca.
  var fsSource = [
    "precision highp float;",
    "uniform vec2 iResolution;",
    "uniform float iTime;",
    "",
    "const float overallSpeed = 0.2;",
    "const vec4 lineColor = vec4(0.969, 0.710, 0.0, 1.0);", // --accent (#f7b500)
    "const float minLineWidth = 0.01;",
    "const float maxLineWidth = 0.2;",
    "const float lineSpeed = 1.0 * overallSpeed;",
    "const float lineAmplitude = 1.0;",
    "const float lineFrequency = 0.2;",
    "const float warpSpeed = 0.2 * overallSpeed;",
    "const float warpFrequency = 0.5;",
    "const float warpAmplitude = 1.0;",
    "const float offsetFrequency = 0.5;",
    "const float offsetSpeed = 1.33 * overallSpeed;",
    "const float minOffsetSpread = 0.6;",
    "const float maxOffsetSpread = 2.0;",
    "const int linesPerGroup = 16;",
    "const float scale = 5.0;",
    "",
    "#define drawCircle(pos, radius, coord) smoothstep(radius + 0.015, radius, length(coord - (pos)))",
    "#define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))",
    "#define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + 0.015, halfWidth, abs(pos - (t)))",
    "",
    "float random(float t) {",
    "  return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;",
    "}",
    "",
    "float getPlasmaY(float x, float horizontalFade, float offset) {",
    "  return random(x * lineFrequency + iTime * lineSpeed) * horizontalFade * lineAmplitude + offset;",
    "}",
    "",
    "void main() {",
    "  vec2 fragCoord = gl_FragCoord.xy;",
    "  vec4 fragColor;",
    "  vec2 uv = fragCoord.xy / iResolution.xy;",
    "  vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;",
    "",
    "  float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);",
    "  float verticalFade = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);",
    "",
    "  space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);",
    "  space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * horizontalFade;",
    "",
    "  vec4 lines = vec4(0.0);",
    "  vec4 bgColor1 = vec4(0.035, 0.03, 0.02, 1.0);", // --bg, aquecido
    "  vec4 bgColor2 = vec4(0.07, 0.055, 0.02, 1.0);", // tom do gradiente de .hero__media
    "",
    "  for(int l = 0; l < linesPerGroup; l++) {",
    "    float normalizedLineIndex = float(l) / float(linesPerGroup);",
    "    float offsetTime = iTime * offsetSpeed;",
    "    float offsetPosition = float(l) + space.x * offsetFrequency;",
    "    float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;",
    "    float halfWidth = mix(minLineWidth, maxLineWidth, rand * horizontalFade) / 2.0;",
    "    float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex)) * mix(minOffsetSpread, maxOffsetSpread, horizontalFade);",
    "    float linePosition = getPlasmaY(space.x, horizontalFade, offset);",
    "    float line = drawSmoothLine(linePosition, halfWidth, space.y) / 2.0 + drawCrispLine(linePosition, halfWidth * 0.15, space.y);",
    "",
    "    float circleX = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;",
    "    vec2 circlePosition = vec2(circleX, getPlasmaY(circleX, horizontalFade, offset));",
    "    float circle = drawCircle(circlePosition, 0.01, space) * 4.0;",
    "",
    "    line = line + circle;",
    "    lines += line * lineColor * rand;",
    "  }",
    "",
    "  fragColor = mix(bgColor1, bgColor2, uv.x);",
    "  fragColor *= verticalFade;",
    "  fragColor.a = 1.0;",
    "  fragColor += lines;",
    "",
    "  gl_FragColor = fragColor;",
    "}",
  ].join("\n");

  function loadShader(type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn("Hero shader compile error:", gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  var vertexShader = loadShader(gl.VERTEX_SHADER, vsSource);
  var fragmentShader = loadShader(gl.FRAGMENT_SHADER, fsSource);
  if (!vertexShader || !fragmentShader) return;

  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn("Hero shader link error:", gl.getProgramInfoLog(program));
    return;
  }

  var positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW
  );

  var vertexPositionLoc = gl.getAttribLocation(program, "aVertexPosition");
  var resolutionLoc = gl.getUniformLocation(program, "iResolution");
  var timeLoc = gl.getUniformLocation(program, "iTime");

  function resizeCanvas() {
    var rect = (heroEl || canvas).getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeCanvas, 150);
  });
  resizeCanvas();

  var rafId = null;
  var startTime = Date.now();

  function render() {
    var currentTime = (Date.now() - startTime) / 1000;

    gl.useProgram(program);
    gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
    gl.uniform1f(timeLoc, currentTime);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(vertexPositionLoc, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vertexPositionLoc);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    rafId = requestAnimationFrame(render);
  }

  function start() {
    if (rafId === null) {
      startTime = Date.now();
      rafId = requestAnimationFrame(render);
    }
  }

  function stop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  // Só anima enquanto a hero estiver visível — evita gastar GPU/bateria
  // com a página rolada bem além da primeira seção.
  if (heroEl && "IntersectionObserver" in window) {
    var visibilityObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          entry.isIntersecting ? start() : stop();
        });
      },
      { threshold: 0 }
    );
    visibilityObserver.observe(heroEl);
  } else {
    start();
  }
})();

// Tilt de mídia — paralaxe 3D seguindo o cursor, reservado a fotos reais do
// negócio (ver .tilt-media em style.css). Desativado em touch e
// prefers-reduced-motion, como todo o resto do motion do site.
(function () {
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasHover = window.matchMedia("(hover: hover)").matches;
  if (prefersReducedMotion || !hasHover) return;

  var MAX_TILT_DEG = 7;

  document.querySelectorAll(".tilt-media").forEach(function (el) {
    var img = el.querySelector(".tilt-media__img");
    if (!img) return;

    el.addEventListener("mousemove", function (event) {
      var rect = el.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width;
      var y = (event.clientY - rect.top) / rect.height;
      var ry = ((x - 0.5) * MAX_TILT_DEG * 2).toFixed(2) + "deg";
      var rx = ((0.5 - y) * MAX_TILT_DEG * 2).toFixed(2) + "deg";

      el.classList.add("is-active");
      img.style.transitionDuration = "0.05s";
      img.style.setProperty("--rx", rx);
      img.style.setProperty("--ry", ry);
      img.style.setProperty("--s", "1.035");
      el.style.setProperty("--tilt-x", (x * 100).toFixed(1) + "%");
      el.style.setProperty("--tilt-y", (y * 100).toFixed(1) + "%");
    });

    el.addEventListener("mouseleave", function () {
      el.classList.remove("is-active");
      img.style.transitionDuration = "0.6s";
      img.style.setProperty("--rx", "0deg");
      img.style.setProperty("--ry", "0deg");
      img.style.setProperty("--s", "1");
    });
  });
})();

// Compare Reveal — comparador antes/depois com física de mola no arraste
// (porta em JS puro do componente de referência). Ver DESIGN.md >
// Components > Compare Reveal. Cada instância roda independente; a
// demonstração automática (sweep) toca uma vez ao entrar na tela e é
// desativada inteiramente em prefers-reduced-motion (o arraste manual
// continua funcionando, só sem a mola).
(function () {
  var STIFFNESS = 140;
  var DAMPING = 18;
  var SWEEP_SECONDS = 2.6;
  var KEY_STEP = 2;
  var KEY_STEP_LARGE = 10;
  var LABEL_FADE = 12;

  function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function sweepAt(u) {
    if (u < 0.38) return lerp(50, 96, easeInOutCubic(u / 0.38));
    if (u < 0.78) return lerp(96, 4, easeInOutCubic((u - 0.38) / 0.4));
    return lerp(4, 50, easeInOutCubic((u - 0.78) / 0.22));
  }

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setup(root) {
    var beforeSide = root.querySelector(".compare-reveal__side--before");
    var divider = root.querySelector(".compare-reveal__divider");
    var handle = root.querySelector(".compare-reveal__handle");
    var labelBefore = root.querySelector(".compare-reveal__label--before");
    var labelAfter = root.querySelector(".compare-reveal__label--after");
    if (!beforeSide || !divider || !handle) return;

    var sim = { x: 50, v: 0, target: 50, dragging: false, pointerId: null, introActive: false, introDone: reducedMotion, introStart: 0 };
    var raf = null;
    var last = 0;
    var onScreen = false;
    var tabVisible = document.visibilityState !== "hidden";

    function paint() {
      var x = clamp(sim.x, 0, 100);
      beforeSide.style.clipPath = "inset(0 " + (100 - x).toFixed(3) + "% 0 0)";
      divider.style.left = x.toFixed(3) + "%";
      handle.setAttribute("aria-valuenow", String(Math.round(x)));
      handle.setAttribute("aria-valuetext", Math.round(x) + "%, antes");
      if (labelBefore) labelBefore.style.opacity = x > LABEL_FADE ? "1" : "0";
      if (labelAfter) labelAfter.style.opacity = x < 100 - LABEL_FADE ? "1" : "0";
    }
    paint();

    function commit(next) {
      sim.introActive = false;
      sim.introDone = true;
      sim.target = clamp(next, 0, 100);
    }

    function frame(ts) {
      var dt = Math.min(0.05, Math.max(0.001, (ts - last) / 1000));
      last = ts;
      var now = ts / 1000;

      if (sim.introActive) {
        var u = (now - sim.introStart) / SWEEP_SECONDS;
        if (u >= 1) {
          sim.introActive = false;
          sim.introDone = true;
          sim.target = sim.x;
        } else {
          sim.target = sweepAt(u);
        }
      }

      sim.v += ((sim.target - sim.x) * STIFFNESS - sim.v * DAMPING) * dt;
      sim.x += sim.v * dt;
      if (sim.x < 0) { sim.x = 0; sim.v = 0; }
      if (sim.x > 100) { sim.x = 100; sim.v = 0; }

      paint();
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (raf !== null) return;
      if (!sim.introDone) {
        sim.introActive = true;
        sim.introStart = performance.now() / 1000;
      }
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }
    function stop() {
      if (raf === null) return;
      cancelAnimationFrame(raf);
      raf = null;
      if (sim.introActive) {
        sim.introActive = false;
        sim.introDone = false; // reentrar na tela demonstra de novo
      }
    }
    function updateRunning() {
      if (onScreen && tabVisible) start(); else stop();
    }

    if (!reducedMotion) {
      if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            onScreen = entry.isIntersecting;
            updateRunning();
          });
        }, { threshold: 0.2 });
        io.observe(root);
      } else {
        onScreen = true;
        start();
      }
      document.addEventListener("visibilitychange", function () {
        tabVisible = document.visibilityState !== "hidden";
        updateRunning();
      });
    }

    function positionFromEvent(clientX) {
      var rect = root.getBoundingClientRect();
      var pct = ((clientX - rect.left) / Math.max(1, rect.width)) * 100;
      if (reducedMotion) {
        sim.x = clamp(pct, 0, 100);
        sim.v = 0;
        sim.target = sim.x;
        paint();
      } else {
        commit(pct);
      }
    }

    root.addEventListener("pointerdown", function (event) {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      sim.dragging = true;
      sim.pointerId = event.pointerId;
      if (root.setPointerCapture) root.setPointerCapture(event.pointerId);
      positionFromEvent(event.clientX);
    });
    root.addEventListener("pointermove", function (event) {
      if (!sim.dragging || event.pointerId !== sim.pointerId) return;
      positionFromEvent(event.clientX);
    });
    function endDrag() { sim.dragging = false; sim.pointerId = null; }
    root.addEventListener("pointerup", endDrag);
    root.addEventListener("pointercancel", endDrag);

    root.addEventListener("dblclick", function () {
      if (reducedMotion) { sim.x = 50; sim.v = 0; sim.target = 50; paint(); }
      else commit(50);
    });

    handle.addEventListener("keydown", function (event) {
      var step = event.shiftKey ? KEY_STEP_LARGE : KEY_STEP;
      var base = reducedMotion ? sim.x : sim.target;
      var next = base;
      if (event.key === "ArrowRight" || event.key === "ArrowUp") next = base + step;
      else if (event.key === "ArrowLeft" || event.key === "ArrowDown") next = base - step;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = 100;
      else return;
      event.preventDefault();
      if (reducedMotion) { sim.x = clamp(next, 0, 100); sim.v = 0; sim.target = sim.x; paint(); }
      else commit(next);
    });
  }

  document.querySelectorAll(".compare-reveal").forEach(setup);
})();
