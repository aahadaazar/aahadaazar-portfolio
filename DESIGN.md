---
name: "Aahad Aazar — The Product Engineer's Almanac"
description: "A cool-paper technical portfolio built around structured evidence, quiet confidence, and earned creative detail."
colors:
  signal-blue: "oklch(38% 0.135 250)"
  signal-blue-dark: "oklch(62% 0.115 250)"
  cool-paper: "oklch(94% 0.008 245)"
  archive-sheet: "oklch(91% 0.010 245)"
  pressed-sheet: "oklch(86% 0.012 240)"
  slate-rule: "oklch(74% 0.012 240)"
  quiet-slate: "oklch(46% 0.014 245)"
  deep-slate: "oklch(28% 0.016 245)"
  graphite-ink: "oklch(16% 0.020 245)"
  night-paper: "oklch(14% 0.008 245)"
  night-sheet: "oklch(18% 0.010 245)"
  night-rule: "oklch(32% 0.012 245)"
  night-muted: "oklch(60% 0.010 245)"
  chalk-ink: "oklch(94% 0.006 245)"
typography:
  display:
    fontFamily: "var(--font-fira), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "clamp(3.4rem, 9vw, 7.5rem)"
    fontWeight: 500
    lineHeight: 0.82
    letterSpacing: "-0.04em"
  feature-display:
    fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 4.75rem)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.75
    letterSpacing: "-0.025em"
  title:
    fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.75
  supporting-project-title:
    fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  body:
    fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "var(--font-fira), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.333
    letterSpacing: "0.1em"
rounded:
  chip: "4px"
  card: "12px"
  dialog: "16px"
  pill: "9999px"
spacing:
  micro: "4px"
  xs: "8px"
  sm: "12px"
  grid: "16px"
  card: "24px"
  section: "48px"
components:
  card:
    backgroundColor: "{colors.archive-sheet}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  chip:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.quiet-slate}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "4px 10px"
  icon-dock:
    backgroundColor: "{colors.archive-sheet}"
    textColor: "{colors.quiet-slate}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm}"
  chat-launcher:
    backgroundColor: "{colors.archive-sheet}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.pill}"
    padding: "{spacing.grid}"
    size: "56px"
  chat-panel:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.dialog}"
    width: "400px"
    height: "600px"
---

# Design System: Aahad Aazar

## Overview

**Creative North Star: "The Product Engineer's Almanac"**

The portfolio behaves like a carefully maintained technical almanac: a cool-paper record where experience, systems, projects, and writing accumulate into one inspectable body of evidence. Its restraint gives the work authority; its bento composition makes different kinds of expertise legible without flattening them into a résumé table.

The voice is curious, practical, and collaborative, but never tentative. Confidence comes through lucid structure, specific technical detail, and the quiet rhythm of Inter paired with Fira Code. Creative departures are welcome when they illuminate software, data, AI, or product thinking; decoration without that connection does not belong.

**Key Characteristics:**

- Cool, paper-like surfaces with a complete dark counterpart.
- An asymmetric editorial hero paired with a numbered portfolio index.
- A four-column project field that collapses deliberately to two columns and then one.
- Inter for explanatory content and Fira Code for identity, metadata, and technical signals.
- Signal Blue used sparingly to orient attention and identify interaction.
- Creativity tied to engineering content, behavior, or evidence rather than fashionable decoration.

## Colors

The Almanac palette combines pale blue-slate paper, graphite text, and a single disciplined Signal Blue; dark mode inverts the tonal hierarchy without changing its hue family.

### Primary

- **Signal Blue** (`oklch(38% 0.135 250)`; dark: `oklch(62% 0.115 250)`): highlights names, roles, icons, interactive hover states, the cursor mark, and focus-worthy technical terms. The brighter dark-mode value maintains readable contrast on all Almanac surfaces.

### Neutral

- **Cool Paper** (`oklch(94% 0.008 245)`): the light-mode page and inset-chip ground.
- **Archive Sheet** (`oklch(91% 0.010 245)`): primary card, dock, and control surface.
- **Pressed Sheet** (`oklch(86% 0.012 240)`): reserved third-level light surface.
- **Slate Rule** (`oklch(74% 0.012 240)`): borders, dividers, and structural separators.
- **Quiet Slate** (`oklch(46% 0.014 245)`): secondary copy and metadata.
- **Deep Slate** (`oklch(28% 0.016 245)`): stronger neutral interaction state.
- **Graphite Ink** (`oklch(16% 0.020 245)`): primary light-mode text.
- **Night Paper** (`oklch(14% 0.008 245)`), **Night Sheet** (`oklch(18% 0.010 245)`), **Night Rule** (`oklch(32% 0.012 245)`), **Night Muted** (`oklch(60% 0.010 245)`), and **Chalk Ink** (`oklch(94% 0.006 245)`): dark-mode equivalents that preserve the same semantic hierarchy.

### Named Rules

**The Signal Discipline Rule.** Signal Blue identifies meaning or interaction; it is never a general-purpose wash, decorative glow, or large background field.

## Typography

**Display Font:** Fira Code (with the system monospace stack)
**Body Font:** Inter (with the system sans-serif stack)
**Label/Mono Font:** Fira Code

**Character:** Inter keeps dense professional information approachable and fast to scan. Fira Code introduces an engineering register through the wordmark, roles, dates, labels, technologies, and small directional cues.

### Hierarchy

- **Display** (500, `clamp(3.4rem, 9vw, 7.5rem)`, tight line height): the left-aligned, two-line name wordmark; use extreme tracking only at this scale.
- **Feature Display** (500, `clamp(2.75rem, 6vw, 4.75rem)`, `0.92` line height): the lead project title on its inverted ink plate.
- **Headline** (500, `1.25rem`, `1.75` line height, tight tracking): section and major card headings.
- **Title** (500, `1rem`, `1.125rem`, or `1.5rem`): company, supporting-project, and article titles.
- **Body** (400, `0.875rem`, `1.625` line height): descriptions and supporting copy; the introduction expands to `1.25rem–1.5rem` at light weight.
- **Label** (400–500, `0.75rem–0.875rem`, wide tracking when uppercase): dates, roles, technologies, header descriptors, and assistant chrome.

### Named Rules

**The Two-Voice Rule.** Inter explains; Fira Code identifies, indexes, or signals technical context. Do not set long descriptive passages in monospace.

## Layout

The main canvas is centered at a maximum width of `72rem`, with `1rem` side gutters and `2.5rem` vertical page padding. The opening is an asymmetric editorial grid: the identity and positioning statement occupy the broad left field while current role, profile links, and theme control form a numbered right-hand index. The project field remains a four-column bento grid with a `16px` gap and implicit rows no shorter than `140px`; the lead project occupies a two-by-two inverted ink plate while supporting work stays on Archive Sheet.

Below `1024px`, the hero becomes a single column and the index moves beneath the introduction. At `768px` and below, evidence layouts simplify; at `480px` and below, project spans are released into one column. Standard card padding is `24px`. Major sections use `64–96px` of rhythm, while internal component spacing works primarily in `4px`, `8px`, `12px`, and `16px` increments.

## Elevation & Depth

The system is tonal and structural. Most depth comes from adjacent paper tones, `1px` Slate Rule borders, clipping, and tiny hover translation—not persistent card shadows. True shadows are reserved for floating utilities: the chat launcher uses a medium ambient shadow and its window uses a large overlay shadow. Backdrop blur is confined to the assistant overlay where it clarifies layering.

### Shadow Vocabulary

- **Control Lift** (`0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`): the theme-switch thumb.
- **Floating Utility** (`0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`): the fixed assistant launcher.
- **Overlay Depth** (`0 25px 50px -12px rgb(0 0 0 / 0.25)`): the open assistant panel only.

### Named Rules

**The Tonal Structure Rule.** Cards stay flat at rest; reserve visible shadows and blur for controls that truly float above the document.

## Shapes

The form language moves from precise to soft according to scale: compact technology chips use `4px` corners, bento cards use `12px`, the assistant panel uses `16px`, and docks, toggles, icon buttons, and status dots use full pills or circles. All core cards clip their contents and carry a `1px` rule. Geometry stays simple and quiet so layout, type, and content carry the identity.

## Components

### Wordmark

- **Character:** A left-aligned, two-line Fira Code name at medium weight with tight tracking and a Signal Blue underscore cursor.
- **Supporting structure:** A small uppercase portfolio label, plain-language positioning statement, discipline index, and two direct actions.
- **Arrival:** The top rule performs a single `640ms` read across the folio while the two name lines resolve through clipped document windows. The content remains visible by default and the sequence never delays interaction.
- **Discovery:** On fine-pointer devices, the settled five-rem Signal Blue rule follows the pointer across the hero and returns to the left margin on exit. Touch keeps the marker static; reduced-motion removes the scan and name reveal entirely.
- **Continuity:** In-page navigation scrolls smoothly and acknowledges arrival by drawing the destination rule once. Theme changes use a `220ms` View Transition crossfade when supported; capability disclosures reveal their content over the same short token.
- **Restraint:** The hero remains the only page-load choreography. Sections do not fade on scroll, cards do not animate as a repeated list, and reduced-motion makes navigation, theme changes, and disclosures immediate.

### Portfolio Index

- **Shape:** A ruled, numbered column attached to the hero rather than a floating widget.
- **Surface:** Archive Sheet separated from the identity field by a single Slate Rule.
- **State:** Full text-and-icon rows move from Quiet Slate to Signal Blue on hover; external destinations keep directional arrows.

### Theme Switch

- **Shape:** A full-width labeled index row with a compact `32px` square icon control.
- **State:** The label names the active theme; Sun and Moon icons make the state visible beyond color.

### Cards / Containers

- **Corner Style:** Soft rectangular (`12px`).
- **Background:** Archive Sheet against Cool Paper, with Graphite Ink inversion reserved for the lead project and final contact band. Experience uses an open ruled ledger rather than an enclosing card.
- **Shadow Strategy:** Flat at rest; hover translates upward `2px` and adjusts the rule color.
- **Border:** `1px` Slate Rule.
- **Internal Padding:** `24px` standard.

### Project Cards

- **Structure:** Number, mono role label, large title, concise description, discipline index, and technology chips.
- **Hierarchy:** The lead project uses an inverted ink plate and feature display scale; supporting projects remain quieter Archive Sheet cards. Every project remains a single link target.

### Chips

- **Style:** Cool Paper ground, Quiet Slate mono label, `1px` Slate Rule border, `4px` radius, and `4px 8–10px` padding.
- **State:** Interactive skill chips shift border to Signal Blue and text toward Graphite Ink; informational project chips remain quiet.

### Section Dividers

- **Structure:** A `20px` Signal Blue outline icon, a `1.25rem` heading, and a Slate Rule line that consumes the remaining width.
- **Purpose:** Reset rhythm between bento groups without adding another boxed surface.

### AI Assistant

- **Launcher:** A fixed `56px` circular Archive Sheet button with a Slate Rule border, Floating Utility shadow, and subtle upward icon motion on hover.
- **Panel:** `400px × 600px` on medium screens and `90vw` on small screens, with a `16px` radius, Overlay Depth shadow, and paper-toned header.
- **Motion:** Opens with opacity, `16px` vertical movement, and a `0.95` scale over `420ms`; closes by reversing the same transformation.

## Do's and Don'ts

### Do:

- **Do** make creative choices earn their place by revealing engineering work, product thinking, data relationships, or meaningful interaction.
- **Do** preserve the paper-and-ink hierarchy, with Signal Blue acting as a scarce navigational and semantic cue.
- **Do** vary bento spans according to information weight and keep the mobile collapse intentional.
- **Do** use precise details—labels, states, transitions, and evidence—to create personality.
- **Do** honor reduced-motion preferences and keep icon-only controls accessible by name.

### Don't:

- **Don't** default to generic AI-portfolio motifs such as gradient-mesh heroes, neon orbs, code rain, faux terminal windows, or decorative 3D objects.
- **Don't** introduce glass panels, glows, shadows, or gradients unless they communicate a real layer, state, or product concept.
- **Don't** turn every idea into an equal rounded card; preserve hierarchy through scale, span, whitespace, and selective border removal.
- **Don't** decorate with invented metrics, client logos, dashboards, testimonials, or technical claims.
- **Don't** confuse software-engineering creativity with cyberpunk styling; this portfolio should feel authored, credible, and specific to Aahad's work.
