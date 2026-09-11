# ConveGenius CLMS — Design System

> Internal design system for the **ConveGenius Content & Learning Management System** (CLMS) — an enterprise SaaS used by content teams to author, review, translate, approve, publish and archive learning content (question banks, test papers, learning material) at scale.

This folder is a living source of truth for anyone designing or building CLMS surfaces. It contains brand fundamentals, raw tokens, an HTML/CSS implementation of those tokens, and a UI kit of high-fidelity React components that mirror the production Figma file.

---

## 1. Product context

**Brand**: ConveGenius — an Indian ed-tech company whose flagship CLMS supports curriculum, assessment and translation workflows for K-12 boards and partners.

**Product**: CLMS — Content & Learning Management System. An enterprise admin tool. **Not** a consumer-facing app, not a marketing site.

**Primary users**:
- **Content authors** — write questions, upload bulk question banks, create test papers
- **Reviewers** — approve, request changes, request translations
- **Admins** — manage users, roles, branding, credit usage, master data
- **Translators** — convert approved content into target languages

**Core surfaces** documented in the Figma file:
- **Auth** — Login, first-time login, set password, forgot password
- **Question Library** — search, filter, view, edit, archive
- **Add Question flows** — 8+ question types (MCQ, Fill-in-the-blanks, Match-the-following, Sequencing, One-word, Arrange, Subjective, Error analysis)
- **Bulk Upload Questions**
- **Reviewer Flow** — review, approve, publish, archive
- **Translation flows** — request, perform, view in target language
- **Test Paper management**, **Calendar**, **Build-your-Own**
- **User Management** (admin + role-specific), **Switch role**, **T&C**
- **Admin** — Master Data Management, Knowledge Graph, Credit System, Branding
- **AI Features** — Quick Generation, AI-assisted authoring

**Design intent** (from `uploads/CLMS_Design_System.md`): trustworthy, efficient, operational, readable at a glance, scalable for large datasets. Clarity over novelty; one dominant primary action per region; semantic colour for system messages — never decoration.

---

## 2. Sources

The system was distilled from:

- **Figma file** — `CLMS-Design-system` / `UI CLMS.fig` (mounted as virtual filesystem)
  - Pages: `Phase-1-Dev-Ready` (49 frames), `Phase-2-Dev-ready` (30), `Style-Guide` (22), `Phase-2-draft` (345), `Review-final-screens` (94), `Page-7` (44), `drafts` (102)
  - Key style-guide nodes: `2999:4044` (Color System), `2999:4379` (Typography System), `2999:3521` (Button System)
- **`uploads/CLMS_Design_System.md`** — written constraint file with token names, component inventory, content rules and AI prompt patterns
- **`/Phase-1-Dev-Ready/Login`** — only frame with the ConveGenius logo asset (`3fecd96f2687.png`) and login-side image (`bbf68af06bae.jpg`), both copied into `assets/`

If you have access to the original Figma file, prefer it over screenshots when iterating. The pseudocode JSX in the VFS is a faithful structural reconstruction but skips per-character text styles, variable aliases and a few effects.

---

## 3. Content fundamentals

CLMS copy is **operational software English** — written for an admin doing a job, not a consumer being marketed to.

**Tone**
- Plainspoken, declarative, calm. No marketing flourish, no exclamation marks (the one exception is the Login welcome screen).
- Second-person implicit ("Save Draft", "Approve Content") — never "Let's…" or "Click here to…".
- System voice: factual ("3 questions failed validation"), not chatty ("Oops! Something went wrong 😅").

**Casing**
- **Title Case** for page titles, modal titles, primary buttons: *Question Library*, *Save Draft*, *Bulk Upload Questions*
- **Sentence case** for helper text, descriptions, table column subtitles: *Complete typography scale and guidelines for the Content & Learning Management System*
- **UPPERCASE** never used decoratively — only inside chips/status with letter-spacing if at all

**Person**
- Labels and CTAs: no person at all — verbs only (*Publish*, *Archive*, *Resolve Error*)
- Empty states and helper text: address the user as "you" — *You haven't created any questions yet*
- System messages refer to the system in third person — *Content & Learning Management System sent the question for review*
- Never first person plural ("we", "our").

**Action labels — good vs. bad** (from the constraint file):
- ✅ `Publish`, `Save Draft`, `Request Review`, `Approve Content`, `Archive`, `Upload File`, `Resolve Error`
- ❌ `Continue`, `Proceed`, `Manage`, `Submit` (unless context makes it obvious)

**Microcopy patterns**
- Breadcrumb: `Home / Question Library / Add Question` — slash separators, space-padded
- Status chips: single word — *Draft*, *In Review*, *Approved*, *Published*, *Archived*
- Helper text under inputs reduces uncertainty, never restates the label
- Empty states explain the next step: *You haven't created any questions yet. Add your first question to get started.*

**Emoji**
- Never in product UI. (Decorative `✏️` glyphs appear in early Figma drafts but are not part of the system.)

**Vibe**
- Enterprise SaaS that respects an experienced user's time. Think Linear, Asana admin, Notion's settings — not Slack, not Duolingo.

---

## 4. Visual foundations

### Colour
- **Brand palette is restrained** — one indigo blue (`#4964AD`), one mint accent (`#8ED4CF`, from the logo crest), one warm yellow (`#EFA12B`). Everything else is functional.
- **Neutrals are bluish-grey, not pure grey** — `#344054` body text, `#57637C` secondary, `#738CA5` tertiary, descending to `#EAECF0` for borders and `#F9FAFC` for the page background. This is the strongest visual signature of the system.
- **Hero brand gradient** (used on auth, hero strips, occasional banners): vertical `#4A4C9F → #8ED4CF`. Used sparingly — never on functional cards.
- **Status / chip colours** are saturated mid-tone hues over a pale tinted background of the same hue. Never use a raw saturated colour as a background fill.
- **Surfaces are mostly white on a near-white page** (`#F9FAFC`). Card differentiation comes from a hairline border (`#EAECF0`) + the lightest possible shadow, not from background tinting.

### Type
- **Inter throughout.** Display, body, captions, mono fallback — all Inter. (Manrope and Montserrat appear in some draft Style-Guide frames but are not used in product screens.)
- Hierarchy is driven by **size + weight**, not by colour or case. 700 for headings, 600 for sub-headings and emphasised body, 500 for labels, 400 for body.
- No marketing-style hero text inside product flows — the largest type in the product is `display-lg` (40px), reserved for auth and rare full-bleed landing strips. Most page titles are 30px / `h1`.
- Letter spacing is normal except for tight on the largest display sizes.

### Spacing
- **8pt rhythm.** Tokens are 0 / 2 / 4 / 6 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 56.
- Generous but disciplined — typical card padding is 24–32px; section gaps 28–40px; row padding 12–16px vertical.
- Page max-width hovers around 1280–1440px with 80px horizontal gutters.

### Backgrounds, imagery, illustration
- **Backgrounds are flat.** No textures, no noise, no repeating patterns. Page = `#F9FAFC`, surface = `#FFFFFF`.
- **The only real imagery** in the file is the auth-side panel — a photographic image (students in a classroom) treated at 8% opacity over the brand blue. Not used elsewhere.
- **No hand-drawn illustrations.** Empty states use a simple line-icon glyph (e.g. an empty inbox) at 60–80% size in `--grey-300`, with a heading + helper line — that's it.
- **Gradients** are reserved for one or two moments (auth hero band, the very top of some library headers). Never on buttons, never on cards.

### Borders
- **Hairline borders everywhere** — `1px solid #EAECF0` is the default. `#D4DAE5` for emphasised. `#A3AAB8` for inputs that need to read as obviously interactive. Never thick borders.
- **No coloured left-border accent cards.** (Avoided as AI-slop trope.)

### Shadows / elevation
- **Shadows are almost imperceptible**, used to lift a surface a single half-step. Default card shadow is `0 1px 2px rgba(0,0,0,0.05)` — that's the most you'll see on a card.
- Popovers and dropdowns step up: `0 4px 5.2px rgba(193,193,193,0.25)`.
- Modals get a slightly larger but still soft shadow.
- **No inner shadows. No coloured shadows.**

### Corner radii
- `4px` for buttons and inputs
- `8px` for cards, modals, sidebar panels
- `2px` for tiny chips and dividers
- `9999px` (pill) for status chips and avatar wells
- The system feels squared-off, not rounded — radii are small and consistent.

### Cards
- White surface, `8px` radius, `1px #EAECF0` border, near-zero shadow. Internal padding 24–32px. Header inside the card uses `h3` (20px / 600). That's the whole recipe.
- Cards group related content; they are **not** used decoratively to separate every cluster.

### Animation
- **Restrained.** 150–200ms `ease-out` on hover/focus colour shifts and modal/dropdown entry. No bounces, no parallax, no scroll-driven motion.
- Buttons don't scale on press — they darken.
- Tabs and route transitions are instant.

### Hover / focus / press states
- **Hover** — darken by one step on the primary scale (`--primary-300` → `--primary-500`), or shift bg from `--white` to `--primary-50` on tertiary/ghost surfaces. Cursor `pointer`, no movement.
- **Focus** — a `2px` outline in `--border-focus` (`#1565D8`) with a 2px offset, or a `0 0 0 3px rgba(54,92,194,0.25)` ring inside form fields. Visible focus is non-negotiable.
- **Pressed/active** — go one step darker again; no transform.
- **Disabled** — `opacity: 0.4`, `cursor: not-allowed`, no other visual change.

### Transparency + blur
- Used **only** for true overlays: modal scrim (`rgba(0,0,0,0.4)`), the photo behind the auth panel (8% opacity over brand blue).
- No frosted-glass surfaces. No translucent cards.

### Imagery colour vibe
- Cool. The only product photo is treated with the brand blue overlay. Avoid warm/grainy/filmic treatments.

### Layout rules
- Persistent **left sidebar** (213px expanded / 57px collapsed) holds the logo + primary nav + user profile pinned bottom.
- **Top breadcrumb** under the sidebar header on every interior page.
- **One dominant primary action** per page or region — the rest are secondary or tertiary.
- Tables, filter zones, banners and toasts follow the inventory in `uploads/CLMS_Design_System.md` — defer to it for state coverage.

---

## 5. Iconography

CLMS uses a **single line-icon family at 1.5px stroke**, sized 16px or 24px. The Figma file pulls from a mix of:

- **Remix Icon** (`edit-box-line`, `lock-password-line`, `pencil-line`) — the dominant source
- **Material Symbols / MDI** (`mdi-content-save-edit`, `iconamoon-profile`, `mingcute-*`) — used for nav and account
- A handful of one-off custom SVGs for branded glyphs (the search-bar icon, the chevrons)

**Implementation in this design system**

- Production CLMS code should keep using the existing Remix + MDI sprites the engineers already have. This system **does not bundle** them as files.
- For prototypes and mocks built from this kit, we link **Remix Icon via CDN** (`https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css`) — it covers ~95% of icons used in the Figma file at the same weights.
- For the few MDI-only icons (notification bell, profile silhouette), we substitute the nearest Remix equivalent and note it in the component. **Substitution flagged for review.**

**Emoji**: never used.
**Unicode**: never used as an icon. (Dividers may use `•` or `/` as content separators only.)
**Logo**: see `assets/logo.png` (ConveGenius wordmark + crest). Use at 36px tall in sidebar, 43px tall on auth.

---

## 6. Fonts

- **Inter** — production face. We do not ship the TTFs here; load from Google Fonts in HTML mocks:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  ```
- No substitutions required — Inter is the original face used in the Figma file.

---

## 7. Index of this folder

```
README.md                         You are here.
SKILL.md                          Agent-skill entry point.
colors_and_type.css               All tokens as CSS custom properties.
assets/
  logo.png                        ConveGenius wordmark + crest
  login-bg.jpg                    Hero-panel photograph used on auth
preview/                          Cards rendered in the Design System tab.
  type-*.html
  color-*.html
  spacing-*.html
  components-*.html
  brand-*.html
ui_kits/
  clms-web/                       The CLMS admin web product UI kit.
    README.md
    index.html                    Interactive click-thru prototype
    *.jsx                         React components
uploads/
  CLMS_Design_System.md           Original constraint file (read-only)
```

UI kits available:
- **`ui_kits/clms-web/`** — the CLMS admin web app (login → question library → view question → add question → bulk upload).

---

## 7a. Components

Reusable React primitives compiled into `_ds_bundle.js` and exposed on `window.CLMSDesignSystem_205a7b`. Each lives in `components/<Name>/` with its `.jsx`, a `.d.ts` type contract, and a `@dsCard` preview.

- **Button** — primary action button; variants (primary / secondary / tertiary / soft / ghost / danger), sizes (sm / md / lg), optional leading & trailing icons.
- **IconBtn** — square icon-only button sharing the Button variants.
- **Input** — text input with optional leading icon and an error state.
- **Textarea** — multi-line text input.
- **Field** — label + control wrapper with hint and error text.
- **Chip** — workflow status chip (Draft / In Review / Approved / Published / Archived).
- **Tag** — neutral or brand-tinted categorical tag.
- **Card** — white surface with hairline border and near-zero shadow.
- **EmptyState** — line-icon empty state with heading, helper text and optional action.


---

## 8. Caveats & known gaps

- **Logo asset** is only available at the resolution found in the Login frame (`1046×240`). High-res vector not in the file.
- **Brand mint (`#8ED4CF`)** and **violet (`#4A4C9F`)** are extracted from the logo by colour-picking; they're consistent with the gradient bands used in the file but not formally tokenised in the constraint markdown.
- **MDI / Material Symbols icons** in the Figma are substituted with the nearest Remix Icon glyph in mocks — flagged inline where it matters.
- **Manrope / Montserrat** appear in a handful of draft Style-Guide frames but are not used in any Phase-1 or Phase-2 product screen — treated as orphan and dropped.
- **Phase-2-draft** (345 frames) was sampled, not exhaustively read — newer flows there may have patterns not yet codified here.
