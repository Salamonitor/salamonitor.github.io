# Design System: Salamonitor Landing Page

Page scope: `/`

This file describes the visual system for the current Salamonitor marketing page. It is intentionally written in natural language so designers, developers, and coding agents can all use it as the same source of truth when extending the page or building adjacent screens.

## 1. Visual Theme & Atmosphere

Salamonitor should feel like a sharp operations product presented with editorial restraint. The page is clean and light, but not soft or lifestyle-oriented. It should communicate technical competence, operational clarity, and a bit of dry confidence.

The visual personality sits between three references:

* A calm product marketing page with generous whitespace.
* An observability dashboard with real system signals and structured data.
* A GitHub pull request and code review surface with small, legible, trustworthy details.

The tone is direct and slightly provocative. It should feel like an engineer describing a boring, useful system that quietly removes work from the backlog. Avoid hype, playful startup whimsy, and decorative clutter.

Key characteristics:

* Spacious but not luxurious for its own sake.
* Structured grids, dashed dividers, bordered cards, and monospace metadata.
* Strong headlines with tight tracking and restrained color use.
* White or near-white surfaces with one controlled accent family.
* Product proof shown through artifacts: error streams, PR diffs, stats, labels, and pipelines.

## 2. Color Palette & Roles

### Foundation

* Cloud Paper (`#FBFBFE`) is the primary page background. It should read lighter and cleaner than gray, but less sterile than pure white.
* Quiet Panel (`#F4F4FB`) is the subtle supporting background for layered surfaces.
* Elevated White (`#FFFFFF`) is used for cards, panels, pricing tiers, and most bounded UI containers.

### Text

* Midnight Ink (`#0B0B18`) is the primary text color. Headlines, important numbers, and high-contrast UI elements should use it.
* Graphite Slate (`#52525B`) is the secondary text color for paragraph copy and supporting labels.
* Soft Zinc (`#A1A1AA`) is reserved for tertiary text, helper text, and low-priority metadata.

### Borders, Rules, and Structure

* Mist Line (`#E7E7EE`) is the default divider and rule color.
* Strong Border (`rgba(15, 15, 40, 0.08)`) is used for card outlines and more visible separators.
* Soft Border (`rgba(15, 15, 40, 0.04)`) supports chip shadows and light edge definition.

### Accent System

* Signal Violet (`#7C3AED`) is the primary brand accent.
* Deep Violet (`#5B21B6`) strengthens the primary accent in gradients and active emphasis.
* Signal Cyan (`#06B6D4`) is a supporting accent used mainly in gradients, texture, and emphasis pairings.

Use the accent family with discipline:

* Primary call-to-action buttons may use the violet gradient.
* Gradient text emphasis is acceptable for one punchline or one highlighted fragment in a section.
* Cyan should rarely appear alone. It works best as the second stop in a violet-to-cyan gradient.
* Do not turn whole sections into saturated accent backgrounds.

### Functional Colors

* Success Green (`#059669`) is used for healthy states, fixed rows, and successful outcomes.
* Warning Amber (`#D97706`) is used for cautionary indicators and medium-priority alerts.
* Danger Red (`#DC2626`) is used for live error states and critical problem indicators.

## 3. Typography Rules

### Font Families

* Display font: Space Grotesk
* Body font: Inter
* Technical and metadata font: JetBrains Mono

### Typographic Character

* Display text should feel compact, confident, and slightly mechanical.
* Body text should stay neutral and readable, never ornamental.
* Monospace is part of the brand language. It signals evidence, labels, code, counts, and machine-readable context.

### Hierarchy

* H1 uses a fluid range from roughly `2.75rem` to `6.75rem`, with very tight line height and negative tracking. It should stay bold and compressed, not airy.
* H2 uses a fluid range from roughly `2.25rem` to `5.25rem`. Section heads should feel substantial, but secondary to the hero and manifesto statements.
* H3 uses a fluid range from roughly `1.5rem` to `2.75rem` for card titles, tier names, and other mid-level anchors.
* Body copy uses roughly `1rem` to `1.25rem`, with a relaxed `1.6` line height and max measure near `62ch`.
* Small labels, eyebrow text, chips, and metadata should use JetBrains Mono in compact sizes with expanded tracking.

### Special Cases

* The manifesto headline may split into two lines, with the second line used as the emotional punch.
* Eyebrows are uppercase or near-uppercase in mono, with generous tracking and a small leading line.
* Numbers in stats and KPIs should use display typography, not monospace.

## 4. Layout Principles

### Overall Structure

The page is a single, long-form marketing narrative with this order:

1. Hero
2. Manifesto / before-after proof
3. Architecture + PR illustration
4. Pipeline steps
5. Pricing
6. FAQ
7. Final waitlist CTA

Each section should feel discrete and well-paced, separated by dashed rules and generous vertical spacing.

### Width and Rhythm

* Max page width is `125rem`.
* Horizontal gutters are fluid and should widen significantly on large displays.
* Section padding should scale fluidly, but the page must remain bounded on 4K rather than expanding forever.
* Body copy generally stays between `55ch` and `62ch`.
* Large display text should cap before it becomes billboard-sized.

### Responsive Behavior

The page is desktop-forward but must collapse cleanly:

* The before/after manifesto grid becomes a single-column stack on smaller screens.
* The architecture section shifts from two columns to one.
* The pipeline runs as 6 columns on large screens, 3 columns on medium screens, and 2 columns on small screens.
* Pricing collapses from 3 columns to 2, then to 1.
* FAQ collapses from 2 columns to 1.

### Large Screens

Large screens should gain breathing room, not inflated chaos:

* Root font size scales upward on very wide displays.
* Headline sizes use `clamp()` with explicit caps.
* Section spacing can grow, but card widths, text measure, and CTA groupings should remain intentional.

## 5. Component Stylings

### Navigation

* The top nav is sticky, translucent, and lightly blurred.
* It should feel light and almost infrastructural, not heavy or app-like.
* On scroll, it tightens vertically rather than dramatically changing state.

### Buttons

* Buttons use the body font, not the display font.
* Shape is crisp and compact: around `4px` radius, bordered, with a small offset shadow.
* Primary buttons use the violet gradient and white text.
* Secondary buttons use transparent or white surfaces with visible borders.
* Hover behavior should reduce or shift the offset shadow rather than introducing dramatic transforms.

### Cards and Panels

The site relies heavily on a shared card language:

* White or near-white background.
* `1.5px` visible border.
* Subtle offset shadow, not diffuse SaaS blur.
* Rounded corners in the `8px` to `10px` range.
* Internal spacing that leaves enough room for dense technical content to breathe.

This card language should apply consistently to:

* Observability mock panels
* PR illustration card
* Pipeline step cards
* Pricing tiers
* FAQ rows

### Chips and Labels

* Small labels should feel machine-readable and filter-like.
* Use mono text, rounded pill shapes, light tinted backgrounds, and thin borders.
* Labels are supportive proof, not visual decoration.

### Stats

* Stats are large display numbers paired with small mono labels.
* They should sit inside a clean, centered band between section dividers.
* The row should feel balanced horizontally and vertically, not crowded against copy above.

### Pipeline Cards

* Each pipeline step is its own bordered card with a circular icon chip.
* Icons are line-based, simple, and technical rather than playful.
* The cards should read as a quiet system, not a loud feature grid.

### Pricing

* Pricing tiers should match the card system.
* The featured middle tier can get a slightly stronger surface treatment, but not a radically different shape language.
* The ribbon is acceptable as a small accent interruption.

## 6. Motion & Interaction

Motion should be small, useful, and tied to interface state:

* Sticky nav compresses on scroll.
* Live status dots can pulse.
* Buttons and cards can shift shadow or color subtly on hover.
* FAQ rows open without theatrical motion.

Avoid:

* Large parallax behavior
* Floating decorative motion
* Bouncy or playful easing
* Over-animated entrance sequences

## 7. Content Tone

Copy should sound like a competent engineer talking to another competent engineer.

Preferred tone:

* Plainspoken
* Slightly dry
* Confident without chest-beating
* Specific when describing behavior and outputs

Avoid:

* Generic startup optimism
* Marketing superlatives without evidence
* Cute jokes
* Vague AI language about "unlocking potential"

The strongest lines on the page are short, blunt, and consequence-driven.

## 8. Rules for Future Screens and Iterations

When extending this landing page or building adjacent marketing screens:

* Reuse the same font stack: Space Grotesk, Inter, JetBrains Mono.
* Stay inside the same light theme family before introducing any alternate theme.
* Keep accent color concentrated in CTAs, punchline emphasis, and selective UI signals.
* Show proof through structured artifacts: metrics, traces, code, system labels, and real-looking operational context.
* Prefer bordered cards and dashed rules over soft, glow-heavy, generic SaaS surfaces.
* Preserve the current responsive logic. Do not add desktop-only compositions that collapse poorly.
* Keep large-screen layouts bounded. More width should create composure, not oversized text blocks and empty space.

If prompting a design tool or coding agent, useful phrases for this project are:

* "light editorial ops landing page"
* "infra tooling marketing page with observability and PR artifacts"
* "clean white surfaces, dashed dividers, mono metadata, restrained violet-cyan accent"
* "bold, tight display typography with quiet technical detail"
* "structured, trustworthy, engineer-facing, not cheerful SaaS"
