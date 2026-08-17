---
name: Auto Peças São Matheus — v1
description: Landing page de conversão em direção editorial-industrial (mundo pinado pela referência NEXUS Automotive International)
colors:
  amber-signal:
    value: "#f7b500"
  amber-signal-hover:
    value: "#ffcc33"
  amber-signal-press:
    value: "#d99a00"
  amber-ink:
    value: "#120d00"
  asphalt-black:
    value: "#0a0a0a"
  asphalt-black-elevated:
    value: "#141414"
  asphalt-black-elevated-2:
    value: "#1c1c1c"
  paper-white:
    value: "#f5f5f0"
  pure-white:
    value: "#ffffff"
  steel-gray:
    value: "#9a9a92"
  steel-gray-dim:
    value: "#86867d"
  hairline-border:
    value: "rgba(255, 255, 255, 0.12)"
typography:
  display:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.75rem, 10vw, 8.25rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'IBM Plex Sans', -apple-system, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'IBM Plex Mono', 'Courier New', monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    letterSpacing: "0.14em"
  quote:
    fontFamily: "'IBM Plex Sans', -apple-system, sans-serif"
    fontSize: "clamp(1.5rem, 3.4vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.45
  watermark:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "clamp(3.5rem, 16vw, 11rem)"
    fontWeight: 800
    lineHeight: 0.8
    letterSpacing: "-0.02em"
rounded:
  sharp:
    value: "2px"
  pill:
    value: "999px"
spacing:
  container-pad:
    value: "clamp(1.25rem, 4vw, 3rem)"
  section-pad:
    value: "clamp(4.5rem, 9vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.amber-signal}"
    textColor: "{colors.amber-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sharp}"
    padding: "0.9rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.amber-signal-hover}"
  button-primary-active:
    backgroundColor: "{colors.amber-signal-press}"
  logo-pill:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.asphalt-black}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1rem 1.5rem"
---

# Design System: Auto Peças São Matheus — v1

## Overview

**Creative North Star: "O Catálogo Industrial"**

Esta é a primeira de três versões independentes da landing page da Auto Peças São Matheus, cada uma com um mundo visual próprio. A v1 assume por completo a linguagem editorial-industrial da referência fornecida pelo usuário (NEXUS Automotive International): autoridade construída por escala tipográfica e respiro de cor cheia, nunca por selos, ícones ou grades genéricas de "feature card". A sensação-alvo é a de um catálogo técnico de peças que também é uma peça gráfica: preciso, denso quando precisa ser denso, silencioso quando precisa respirar.

O sistema recusa deliberadamente qualquer coisa que pareça "vitrine de e-commerce genérica" ou "SaaS": nada de gradientes, glassmorphism decorativo, ícones fofos ou cards uniformes de ícone+título+texto. A confiança é comunicada por peso tipográfico, por espaço negativo generoso e por um único acento de cor usado com disciplina — não por badges de "confiança" ou selos de garantia.

**Key Characteristics:**
- Fundo quase-preto dominante, um único acento âmbar, sem paleta secundária.
- Títulos gigantes empilhados (Big Shoulders Display) como argumento visual central, não como decoração de topo de seção.
- Rótulos "eyebrow" em mono tracked — citação deliberada da linguagem da referência pinada, não um kicker genérico (ver Named Rule em Typography).
- Blocos de texto+mídia alternados de ponta a ponta (edge-to-edge), sem cards, sem sombra, sem borda decorativa.
- Toda mídia ainda não recebida é marcada com o mesmo motivo de "cantos de mira" — nunca uma imagem de banco, nunca um retângulo cinza mudo.

## Colors

Paleta extremamente enxuta e comprometida: preto quase puro, branco quente, um único âmbar de sinalização, e cinzas mornos só para hierarquia secundária.

### Primary
- **Âmbar de Sinalização** (`#f7b500`): CTA principal, acentos de headline, rótulos eyebrow, números de estatística, e o respiro full-bleed central da página. É a única cor saturada do sistema — se algo mais precisar de destaque, o âmbar já está sendo usado em excesso na tela.

### Neutral
- **Preto Asfalto** (`#0a0a0a`): fundo base de toda a página.
- **Preto Asfalto Elevado** (`#141414`): fundo dos blocos de mídia reservada e da grade de logos parceiras — um degrau acima do fundo base, nunca um card com sombra.
- **Preto Asfalto Elevado 2** (`#1c1c1c`): reservado para um segundo degrau de elevação, ainda não usado em componente shipado nesta v1.
- **Branco Papel** (`#f5f5f0`): cor de texto padrão sobre fundo escuro (parágrafos, lede da hero).
- **Branco Puro** (`#ffffff`): reservado para os títulos gigantes (huge-title) e headlines — o único uso de branco 100%, para que o título sempre leia como o elemento de maior contraste da tela.
- **Cinza Aço** (`#9a9a92`): texto secundário — corpo de parágrafo em blocos de conteúdo, navegação.
- **Cinza Aço Esmaecido** (`#86867d`): legendas e texto de rodapé (copyright, nota de disclaimer de números ilustrativos, legenda de logos). Calibrado para manter ≥4.5:1 de contraste sobre `#0a0a0a` — a versão original mais escura (`#6f6f68`) ficava em ~3.9:1 e foi corrigida durante a revisão de acabamento.
- **Tinta sobre Âmbar** (`#120d00`): única cor de texto usada sobre o respiro âmbar full-bleed e sobre o CTA primário — nunca branco ou preto puro sobre a cor de acento.

### Named Rules
**The One Accent Rule.** Existe exatamente um acento saturado na página — o âmbar. Nenhum segundo tom (azul, verde, vermelho) é introduzido para "variar". Se uma seção parece precisar de uma segunda cor, a resposta é ajustar peso tipográfico ou espaço, não adicionar cor.

## Typography

**Display Font:** Big Shoulders Display (com fallback Arial Narrow, sans-serif)
**Body Font:** IBM Plex Sans (com fallback -apple-system, sans-serif)
**Label/Mono Font:** IBM Plex Mono (com fallback Courier New, monospace)

**Character:** Big Shoulders Display é uma fonte condensada e industrial (desenhada evocando sinalização urbana/industrial de Chicago) — carrega sozinha o argumento de "estrutura" da marca nos títulos gigantes. IBM Plex Sans mantém o corpo do texto legível e neutro. IBM Plex Mono nos rótulos e números remete deliberadamente a numeração de peça/catálogo técnico — reforça "loja que sabe exatamente o que tem em estoque".

### Hierarchy
- **Display** (800, `clamp(2.75rem, 10vw, 8.25rem)`, line-height 0.92): título da hero, empilhado em 2-3 linhas curtas, uppercase, tracking -0.02em. Usa `.huge-title--hero`.
- **Headline** (700, `clamp(2rem, 4.2vw, 3.25rem)`, line-height 1.02): títulos de seção (`.h2`) em cada bloco texto+mídia e no CTA final.
- **Interlude Display** (800, `clamp(2.25rem, 7.5vw, 6.25rem)`): variação do título gigante usada apenas dentro do respiro âmbar full-bleed, em tinta escura sobre âmbar.
- **Body** (400, 1.0625rem, line-height 1.7-1.8, max-width ~46ch em blocos curtos / 68ch em prosa longa como a página de trajetória): parágrafos de conteúdo.
- **Quote** (400, `clamp(1.5rem, 3.4vw, 2.5rem)`, line-height 1.45, max-width 26ch): citação de destaque isolada (ex.: o versículo de abertura da página de trajetória) — corpo em escala ampliada com aspas tipográficas automáticas (`::before`/`::after`), nunca itálico serifado (o sistema não tem serifa).
- **Watermark** (800, `clamp(3.5rem, 16vw, 11rem)`, line-height 0.8): o wordmark gigante que sangra atrás do rodapé (`.footer-atmosphere__wordmark`) — cor sólida esmaecida por `mask-image`, nunca gradiente de cor no texto. Uso único e reservado a esse componente; não é uma escala genérica para "textos grandes decorativos".
- **Label** (400-600, letter-spacing 0.06-0.14em, uppercase): eyebrows, navegação, links sublinhados, números de estatística (peso 600), legendas de placeholder de mídia, texto de botão. Ver The Label Micro-Scale Rule abaixo.

### Named Rules
**The Stacked Claim Rule.** Todo huge-title é composto de 2-3 linhas curtas empilhadas (uma frase/palavra por linha), nunca um parágrafo corrido em escala gigante. A última linha pode receber a cor de acento para fechar a leitura com ênfase.

**The Pinned Eyebrow Rule.** Rótulos eyebrow (mono, uppercase, tracked, cor âmbar) são citação deliberada da linguagem da referência visual pinada pelo usuário (NEXUS Automotive International) — não um kicker genérico adicionado por hábito. Usam-se com moderação: acima da hero, do bloco de estatísticas, de cada bloco texto+mídia e do CTA final — nunca duplicado dentro do mesmo agrupamento de conteúdo.

**The Label Micro-Scale Rule.** O papel "Label" não é um único tamanho fixo — é uma escala micro deliberada de seis degraus, todos mono ou body conforme o componente, tracked e usados por peso semântico do elemento (não por acaso): `0.6875rem` (legenda de media-frame, nota de logo-pill), `0.75rem` (nota de rodapé, disclaimer de números), `0.8125rem` (eyebrow, navegação, citação de versículo, legenda de foto de evolução), `0.875rem` (link sublinhado, número da sequência de fotos), `0.9375rem` (texto de botão, valor de rodapé), `1rem` (botão grande). Um novo componente de rótulo deve escolher o degrau mais próximo desta escala em vez de inventar um valor livre.

## Layout

Container com `max-width: 1360px`, padding lateral fluido `clamp(1.25rem, 4vw, 3rem)`. Ritmo vertical generoso: `--section-pad: clamp(4.5rem, 9vw, 9rem)` entre grandes seções, separadas por hairlines de 1px (`rgba(255,255,255,0.12)`) em vez de bordas fortes ou sombras.

Blocos de conteúdo (`.grid-block`) usam grid 50/50 em desktop, mídia sempre edge-to-edge (sem padding lateral no lado da mídia), texto com padding generoso do lado oposto. A ordem texto/mídia alterna a cada bloco (`.grid-block--reverse`). Abaixo de 860px, todo `.grid-block` colapsa para uma coluna, com a mídia sempre posicionada acima do texto (`order: -1`) para manter a mesma leitura "prova visual primeiro, argumento depois" em mobile.

Header fixo com hairline inferior; navegação completa em desktop (≥1025px), menu hambúrguer full-screen abaixo disso. CTA do header some em telas estreitas — o menu mobile carrega seu próprio CTA para não duplicar hierarquia.

## Elevation & Depth

Sistema majoritariamente plano. Não há cards, não há sombras decorativas espalhadas pela página. As únicas exceções:

### Shadow Vocabulary
- **Header glass** (`backdrop-filter: blur(10px)` sobre `rgba(10,10,10,0.82)`): tratamento funcional para manter o header legível sobre o conteúdo da hero ao rolar — não é decoração, é o único uso de "vidro" do sistema.
- **CTA hover glow** (`box-shadow: 0 10px 24px -12px rgba(247,181,0,0.55)`): resposta de hover do botão primário — sombra com offset e blur suaves tingida da própria cor do acento, nunca cinza genérica.

**Histórico: um gradiente opaco chegou a substituir o glass, depois voltou atrás.** Quando a marca ainda usava uma logo com fundo sólido colado num badge circular, o glass do header criava uma emenda visível — a cor efetiva do header variava com o shader animado da hero por baixo, e o retângulo de fundo da logo nunca batia exatamente. A correção original trocou o header por um gradiente opaco fixo. O cliente pediu pra reverter o header e, em vez disso, trocou a logo por uma versão com fundo transparente de verdade (ver Components > Brand Mark) — isso resolve o problema na raiz, porque uma logo sem retângulo de fundo não tem emenda pra combinar com nada. O glass do header voltou a ser seguro de usar.

### Named Rules
**The Flat-By-Default Rule.** Nenhum elemento tem sombra em repouso. Sombra só aparece como resposta a um estado de interação (hover do CTA) ou como recurso funcional (glass do header fixo).

**The Transparent-Mark Rule.** Qualquer logo/badge colocado sobre uma superfície cuja cor pode variar (o header glass, um futuro fundo animado) deve ter fundo transparente de verdade — nunca um retângulo de cor sólida "quase igual" ao fundo. Uma emenda de cor entre a arte e o fundo é sempre mais fácil de eliminar removendo o fundo da arte do que perseguindo uma cor de fundo que combine perfeitamente com uma superfície que muda.

## Shapes

Linguagem de forma majoritariamente reta: 2px de raio em botões (praticamente uma quina viva), 0px em blocos de mídia e cards. Quatro exceções deliberadas e só essas quatro — nunca generalizadas para botões ou blocos de conteúdo genéricos:
- **Brand mark** (`rounded: 50%`, círculo total): reservado exclusivamente para o badge da logo no header/rodapé (ver Components > Brand Mark).
- **Brand card** (`rounded: 14px`, ver Components > Brand Marquee): cantos moderadamente arredondados, card claramente retangular (nunca quadrado, nunca um círculo/pílula) — a proporção de um cartão de visita ou selo de produto, não um chip de UI. Substituiu a antiga pílula de logo (`rounded: 999px`) quando as marcas parceiras reais entraram no site — o componente de pílula não existe mais no código.
- **Logo node** (`rounded: 50%`, círculo de 9px): os marcadores da linha do tempo de evolução (ver Components > Evolution Timeline).
- **Compare handle** (`rounded: 50%`, círculo de 2.75rem): a alça de arraste do comparador antes/depois (ver Components > Compare Reveal) — convenção universal de controle deslizante, mesmo raciocínio do logo node.

O motivo de "cantos de mira" (`.media-frame__corner`) marca todo espaço de mídia reservado com quatro traços em L de 22px na cor de acento — funciona tanto como assinatura visual quanto como indicação prática de "aqui entra uma imagem depois".

## Components

### Buttons
- **Shape:** quase reto (`border-radius: 2px`).
- **Primary:** fundo âmbar (`#f7b500`), texto tinta escura (`#120d00`), padding `0.9rem 1.75rem` (variante grande: `1.15rem 2.5rem`). É o único botão preenchido do sistema — reservado para o CTA de conversão "Cotar peças agora", nunca usado para navegação secundária.
- **Hover / Focus:** hover clareia para `#ffcc33` e levanta 1px (`translateY(-1px)`) com glow âmbar; active escurece para `#d99a00`; foco usa outline âmbar de 2px (`:focus-visible`), nunca suprimido.
- **Secondary:** não é um botão — é o `link-underline`, texto + borda inferior de 1px, mono uppercase tracked, cor branca ou âmbar conforme contexto. A hierarquia é sempre: um botão preenchido por seção no máximo, tudo o mais é link sublinhado.

### Brand Marquee (Signature Component)
Substituiu a pílula placeholder "MARCA" quando as 45 logos reais de fabricantes parceiros entraram no site. Três linhas (`.brand-marquee__row`) empilhadas, cada uma um carrossel infinito só de CSS (mesma técnica do marquee do rodapé: track duplicado 1x, `translateX(0 → -50%)`, `linear infinite`) — linhas alternam direção (normal/reverse) para parecer orgânico, e pausam no hover/foco pra dar tempo de ler um logo específico. As bordas de cada linha têm uma máscara em gradiente (`::before`/`::after`, `var(--bg-elevated)` → transparente) que esmaece os logos que entram/saem, em vez de um corte seco.

Cada logo vira um **Brand card**: fundo branco sólido, `border-radius: 14px`, altura fixa e responsiva (`clamp(2.75rem, 6vw, 3.75rem)`), largura automática pela proporção natural da imagem — nunca um quadrado. As imagens-fonte foram pré-processadas (não croppadas ao vivo): a proporção natural de cada logo é presa entre 1.4:1 e 2.3:1 (`fit: contain` sobre uma tela branca, nunca `cover`), garantindo que nenhuma logo seja cortada mesmo vindo de fontes com proporções muito diferentes (de logos quadrados a wordmarks ultra-largos) — onde a proporção natural já cai dentro da faixa, não há nenhum preenchimento extra.

### Named Rules
**The Never-Crop-a-Logo Rule.** Logos de marcas parceiras (ou qualquer ativo de marca de terceiros) nunca são recortados por `object-fit: cover` ou por um crop de proporção fixa. Sempre `contain` sobre uma tela branca, com a proporção de saída presa numa faixa razoável (não quadrada, não absurdamente larga) — perder parte de um logo ou texto de marca é sempre pior do que uma pequena margem branca extra.

### Verse Quote (Signature Component)
Citação de destaque isolada, usada para abrir a página de trajetória (versículo de Zacarias 4:10). Tipografia `quote` (ver Typography), aspas tipográficas curvas automáticas via `::before`/`::after`, atribuição em `Label` mono uppercase âmbar logo abaixo (`.verse-cite`). Reservado para uma citação por página — não é um padrão de "testemunho de cliente" repetível em grade.

### Evolution Timeline (Signature Component)
Substituiu a grade `1fr 1fr 1fr` original de fotos chapadas. Uma linha de base (`.timeline__track`, 1px `var(--border)`) conecta três molduras de foto que crescem da esquerda pra direita (22% / 31% / 42% de largura em desktop) — o próprio tamanho crescente conta a evolução, sem nenhuma data. Cada nó (`.timeline__node`, círculo de 9px em âmbar) marca o ponto de conexão entre a linha e a legenda numerada (`01`/`02`/`03`) — a mesma exceção documentada à proibição geral de "números de seção", porque aqui a ordem numérica é o próprio conteúdo (evolução cronológica da loja).

Cada foto é um mockup, não um retângulo cru: moldura tipo passe-partout (`padding: 0.5rem`, fundo `--bg-elevated`, borda 1px `--border-strong`), rotação alternada sutil (-2.2°/1.6°/-1.2°) e glow âmbar suave (`box-shadow` offset+blur, nunca um drop-shadow escuro — não renderiza sobre fundo quase-preto). No hover/focus, a foto cresce (`scale(1.08)`), se endireita (`rotate: 0`) e o glow intensifica — única superfície do site fora do rodapé com uma resposta de hover elevada além de cor/sublinhado, justificada por ser conteúdo fotográfico real (não um placeholder) que ganha destaque editorial deliberado.

**Cuidado de implementação:** a legenda (`.timeline__label`) tem `min-height` reservado para 2 linhas. Sem isso, itens cujo texto quebra em 2 linhas ficam com altura total diferente dos que cabem em 1 linha e, como o grupo é alinhado por `align-items: flex-end`, os nós saem da linha em telas mais estreitas (o texto empurra a foto pra cima de forma desigual entre os itens).

Em `<640px` a linha vira vertical (`.timeline__track` reposicionado), os itens empilham a 100% de largura (max 360px) e a proporção da foto muda para `4/3` — sem o crescimento progressivo de largura, que não cabe numa coluna estreita.

Ao receber novas fotos reais em qualquer bloco do site (ex.: os `.media-frame` ainda pendentes na home), a imagem substitui o conteúdo do frame mantendo a proporção do componente e, se for uma sequência com ordem que importa, adota o mesmo padrão de linha do tempo — nunca a grade quadrada original.

### Brand Mark (Signature Component)
**v3 — logo com fundo transparente de verdade, tamanho médio-grande.** A marca passou por três estágios: (1) ícone vetor plano com fundo removido por chroma-key, num badge circular; (2) um render 3D em ouro com fundo quase-preto sólido, recortado e colado direto (sem badge) — esse estágio criou uma emenda retangular visível contra o glass do header (ver Elevation & Depth); (3) **a versão atual**, o mesmo render 3D em ouro mas com **alpha real** (`public/logo/logo fundo trasparente.png`, fonte 1672×941, nome da loja embutido na própria arte). Fundo transparente elimina a emenda na raiz — não existe mais retângulo nenhum pra combinar com o que está por trás, então o header pôde voltar a ser "vidro" (glass) sem nenhum efeito colateral.

- **`logo-2d-full.png`** (ícone + nome, recortado ao alpha, 1638×922, proporção ≈1.78:1): o `<img class="brand__logo">` único do header (`height: 4.5rem`, `3.25rem` em ≤640px) e do rodapé (`brand__logo--footer`, `height: 6.5rem`). Tamanho deliberadamente médio-grande — abaixo de ~4rem o nome da loja embutido na arte fica ilegível. `width: auto` preserva a proporção nativa.
- **`logo-2d-icon.png`** (só ícone, sem o nome, recorte separado acima da faixa de texto): fonte da favicon (`favicon-2d.png`, 512×512, ícone centralizado a 82% da largura sobre fundo `#0a0a0a`) — sem texto porque favicon não tem resolução pra tipografia.
- **Artefatos de recorte de fundo, avaliados contra o fundo real antes de "corrigir".** A remoção de fundo da fonte deixou um leve halo de cor (vermelho/verde) em alguns contornos — visível contra um fundo branco/xadrez de visualizador, mas testado e confirmado **imperceptível** contra o preto real do site (`#0a0a0a`). Antes de aplicar qualquer correção de pixel (erosão de alpha, despill de cor — ambas arriscam corroer os traços finos do ícone, como a chave de boca), a imagem foi composta sobre o fundo real do site pra verificar se o problema existia de fato no contexto de uso. Não existia. Lição: avalie artefatos de imagem no fundo onde a imagem realmente vai aparecer, não no fundo do visualizador.
- **Header voltou a usar glass.** Ver Elevation & Depth — com a logo transparente, o header fixo pode voltar a `backdrop-filter: blur(10px)` sobre `rgba(10,10,10,0.82)` com segurança, porque não há mais nenhum retângulo de cor fixa pra destoar do que está por trás.

### Media placeholders (Signature Component)
Todo espaço reservado para imagem real (`.media-frame`) recebe o mesmo tratamento: fundo com hairline diagonal sutil (`repeating-linear-gradient` a 115°, opacidade 3-6%) sobre o preto elevado, quatro cantos em L na cor de acento (`.media-frame__corner`), e uma legenda mono discreta indicando o que deve entrar ali (ex. "Imagem — estoque / prateleiras"). Nunca uma imagem de banco, nunca um retângulo cinza mudo sem indicação. Não usado na hero — ver Hero Shader abaixo, que substituiu esse placeholder por um tratamento definitivo (não é mais um "espaço reservado para depois").

### Tilt Media (Signature Component)
Quando uma foto real do negócio substitui um `.media-frame`, ela recebe `.tilt-media` em vez do motivo de cantos de mira — as duas classes nunca coexistem no mesmo elemento (uma marca "espaço reservado", a outra marca "conteúdo real"). O container ganha `perspective: 1200px`; a imagem (`.tilt-media__img`) se inclina em direção ao cursor (`rotateX`/`rotateY`, até ±7°, mais contido que o material de referência) com leve zoom (`scale(1.035)`), e um brilho radial sutil (`.tilt-media__glare`, `rgba(255,255,255,0.16)`) acompanha a posição do cursor — nunca glass/blur, é só um gradiente. Segue instantaneamente enquanto o mouse se move (`transition-duration: 0.05s`) e volta suave pela curva padrão do site (`0.6s ease-out-expo`) no mouseleave. Em uso em `#estoque` e `#agilidade`.

- **Escopo:** reservado a fotos reais do negócio — nunca aos placeholders de `.media-frame`, nunca ao Evolution Timeline (que já tem seu próprio tratamento de hover documentado) nem ao Hero Shader.
- **Acessibilidade:** ao contrário dos placeholders (`aria-hidden`), uma foto real carrega `alt` descritivo e não é escondida de leitor de tela — o container `.tilt-media` não leva `aria-hidden`.
- **Robustez:** desativado inteiramente em `prefers-reduced-motion` e em dispositivos sem hover (`(hover: hover)` falso) — nesses casos a foto fica estática na posição de repouso, sem nenhum listener de mousemove registrado.

### Compare Reveal (Signature Component)
Comparador antes/depois de arraste, com física de mola (`stiffness: 140`, `damping: 18`) — o divisor persegue o cursor com resistência elástica em vez de seguir 1:1. Em `#tradicao`, substituindo o `.media-frame`: `antes.jpg`/`depois.jpg` (`public/img/historia/`) empilhadas, a foto "antes" clipada por `clip-path: inset()` que o JS atualiza a cada frame. Ao entrar no viewport pela primeira vez, faz uma demonstração automática de 2,6s (50% → 96% → 4% → 50%, três trechos com easing cúbico) — se a seção sair de tela no meio da demonstração, ela re-arma e demonstra de novo na próxima entrada.

- **Cor de assinatura é o âmbar único do sistema** (`var(--accent)`), nunca a cor coral/vermelha do material de referência — ver The One Accent Rule.
- **Sem glass:** os chips "Antes"/"Depois" e a alça central são opacos (`rgba(10,10,10,0.78)` e `var(--bg)` respectivamente, com borda), nunca `backdrop-filter`. A alça é a quarta exceção documentada ao raio zero (ver Shapes) — um controle circular de arraste, convenção universal de UI, mesmo raciocínio do nó da Evolution Timeline.
- **Acessível de verdade, não só visualmente:** a alça é um `<button role="slider">` real com `aria-valuemin/max/now/text`, e responde a `←/→` (2%), `Shift+←/→` (10%) e `Home/End`. Duplo clique recentraliza em 50%.
- **Robustez:** pausa o laço de `requestAnimationFrame` via `IntersectionObserver` (fora de tela) e `visibilitychange` (aba em segundo plano) — nunca roda física de mola sem necessidade. Em `prefers-reduced-motion`, a demonstração automática nunca toca e o arraste vira posicionamento direto 1:1, sem mola.
- **Múltiplas instâncias independentes:** o JS itera todo `.compare-reveal` da página (`document.querySelectorAll`), cada uma com seu próprio estado fechado em closure — pode reaparecer em qualquer novo par antes/depois sem colisão de estado.

### Hero Shader (Signature Component)
Fundo animado em WebGL (`#hero-shader`, plasma de linhas geradas por shader) escopado à própria seção `.hero` — não à viewport inteira, para não ficar fixo atrás do resto da página ao rolar. As linhas usam a cor de acento única (`#f7b500`) e o fundo é um gradiente entre dois tons quase-pretos aquecidos (nunca azul/roxo — a paleta original do efeito foi inteiramente recalibrada para o sistema da marca). Passa atrás do `huge-title` da hero (via `.hero__scrim` por cima, `z-index: 1`) para dar profundidade sem comprometer a legibilidade do texto, que fica na faixa mais escura do scrim. Regras de robustez, tratadas como parte do componente, não como extra opcional:
- **Nunca inicia** se `prefers-reduced-motion: reduce` ou se `WebGL` não está disponível — nesses casos o gradiente/hairline estático original de `.hero__media` (já no CSS) permanece visível como o fundo da seção.
- **Pausa via `IntersectionObserver`** quando a hero sai do viewport (`cancelAnimationFrame`) e retoma ao voltar — evita gastar GPU/bateria com a página rolada bem além da primeira seção.
- **Redimensiona pelo próprio `.hero`**, nunca por `window.innerWidth/innerHeight` — o canvas original do material de referência era fixo à viewport; aqui ele é posicionado (`position: absolute; inset: 0`) dentro de `.hero__media` e dimensionado pelo `getBoundingClientRect()` da seção.
- **Limita o pixel ratio a 1.5x** (`Math.min(devicePixelRatio, 1.5)`) para não pagar o custo de renderização em resolução nativa de telas retina/mobile sem ganho visual perceptível.

### Navigation
- Header: logo + marca (mono, uppercase) à esquerda, navegação mono tracked ao centro-direita, CTA âmbar à direita, hairline inferior de 1px. Link ativo/hover sobe uma barra âmbar da esquerda (`::after`) e o texto vai de cinza a branco.
- Mobile: menu full-screen preto, links em Big Shoulders Display grande, CTA âmbar no rodapé do menu.

### Cinematic Footer (Signature Component)
O rodapé é o único momento "elevado" de motion do site — o fechamento cinematográfico da página. Composição, de trás pra frente:

- **Atmosfera** (`.footer-atmosphere`, `aria-hidden`): um glow radial de acento único (`radial-gradient` âmbar a 10% de opacidade, `blur(10px)`) respirando lentamente (`footer-breathe`, 9s ease-in-out infinite alternate, escala 1→1.15), mais o wordmark da marca ("São Matheus") gigante (tipografia `watermark`, ver Typography), sangrando atrás do conteúdo. O preenchimento é uma cor sólida (`color-mix` branco a 8%) com contorno de 1px em `--border-strong`, esmaecida por um `mask-image` vertical (alpha, não cor) — nunca `background-clip: text` com gradiente de cor: texto em gradiente é uma das recusas do craft floor, e a variação aqui vem de opacidade/máscara, não de pintar um degradê nos glifos. Nunca é um gradiente multi-cor — é o mesmo âmbar único do resto do sistema, só que muito diluído.
- **Marquee** (`.footer-marquee`): faixa horizontal com hairline, loop infinito em `translateX` (32s linear) dos diferenciais reais da loja ("Estoque completo ✦ Atendimento ágil ✦ Tradição de décadas ✦ Peças originais ✦ Cotação na hora"), duplicada uma vez no DOM para o loop ficar contínuo. Reta, sem rotação — a inclinação diagonal do material de referência foi descartada por destoar da geometria reta do resto do sistema.
- **Sinal de pulso** (`.footer-signal`): um ponto âmbar de 7px com um anel (`::after`) que expande e desaparece (`footer-pulse`, 2.2s) ao lado de "Resposta rápida no WhatsApp". É puramente atmosférico — nunca deve ser ligado a um horário real de funcionamento (placeholder ou não): um indicador "aberto agora" calculado sobre dados de horário fictícios induziria o cliente ao erro sobre se a loja está mesmo aberta.
- **Entrada em cortina** (`.reveal-curtain` no `<footer>`, clip-path em um wrapper interno `.footer-curtain`): ao entrar no viewport, o rodapé "sobe" via `clip-path: inset(0 0 100% 0) → inset(0 0 0% 0)`, 1.1s `ease-out-expo`, disparado pelo mesmo `IntersectionObserver` do `.reveal` do resto do site.

### Named Rules
**The Closing Signature Rule.** O resto da página usa um único momento de motion (fade + translateY, ver `.reveal`); o rodapé é a única exceção deliberada — o "fechamento" da experiência ganha uma camada extra (atmosfera + marquee + cortina + hover magnético) para funcionar como o beat final da página. Nenhuma outra seção deve herdar essa camada extra — se um novo bloco "parece que merece" o tratamento do rodapé, a resposta é reforçar o `.reveal` padrão, não duplicar a cortina.

**The Magnetic Touch Rule.** Hover magnético (`.js-magnetic` — o elemento segue o cursor a 35% da distância, com retorno elástico `cubic-bezier(0.16, 1, 0.3, 1)` ao sair) é reservado para alvos que já são a ação principal de sua seção: os CTAs grandes ("Cotar peças agora" na hero e nos fechamentos), os links de redes sociais e "Voltar ao topo" do rodapé. Nunca em texto corrido, nunca em mais de um elemento por agrupamento visual. Desativado em `prefers-reduced-motion` e em dispositivos sem hover (`(hover: hover)`).

**Implementation note.** O `clip-path` de uma entrada em cortina nunca deve viver no mesmo elemento observado pelo `IntersectionObserver` — um elemento com `clip-path` de área zero relata `intersectionRatio` zero para sempre, e o reveal nunca dispara. A classe de estado (`.reveal-curtain` → `.is-visible`) fica no elemento observado (sem clip); o `clip-path` real vive num wrapper filho, estilizado via `.reveal-curtain.is-visible .footer-curtain`.

## Do's and Don'ts

### Do:
- **Do** manter exatamente um acento saturado (âmbar) por toda a página — ver The One Accent Rule.
- **Do** empilhar huge-titles em 2-3 linhas curtas, nunca como parágrafo corrido em escala gigante.
- **Do** marcar todo espaço de mídia ainda não recebida com o motivo de cantos de mira + legenda mono, nunca com uma imagem de banco ou um placeholder mudo.
- **Do** alternar a ordem texto/mídia a cada bloco de conteúdo consecutivo.
- **Do** aplicar o único momento de motion autoral (`.reveal` / `.is-visible`, fade + translateY(28px→0), 0.85s `cubic-bezier(0.16,1,0.3,1)`, stagger por nth-child até 0.24s) a qualquer novo bloco de conteúdo que entrar na página — nunca inventar uma segunda curva de easing ou um segundo tipo de entrada.
- **Do** manter a camada extra de motion (atmosfera, marquee, cortina, hover magnético) exclusiva do rodapé — ver The Closing Signature Rule.
- **Do** escopar qualquer efeito WebGL/canvas à sua própria seção (`getBoundingClientRect` do elemento pai) e pausar via `IntersectionObserver` quando fora da tela — nunca fixo à viewport inteira.
- **Do** aplicar `.tilt-media` a toda foto real do negócio que substituir um `.media-frame` (nunca aos dois ao mesmo tempo) — ver Components > Tilt Media.

### Don't:
- **Don't** introduzir cards de ícone+título+texto para comunicar "diferenciais" — a prova de estrutura vem de escala tipográfica e blocos texto+mídia, nunca de grade de ícones.
- **Don't** usar sombra em repouso em qualquer componente — sombra só existe como resposta a hover ou como o glass funcional do header.
- **Don't** aplicar `border-radius: 999px` fora do componente de logo pill — é uma exceção pontual, não um padrão de botão ou card.
- **Don't** adicionar uma segunda cor de acento saturada, mesmo que pareça "só um detalhe".
- **Don't** apresentar números ou dados reais da loja (estoque, anos de tradição, endereço, telefone) sem o colchete de placeholder até que o cliente forneça os dados verdadeiros — ver PRODUCT.md § Evidence on Hand.
- **Don't** deixar um efeito animado (shader, motion) rodando sem checar `prefers-reduced-motion` e sem um fallback estático — todo motion do site tem que degradar com elegância.
