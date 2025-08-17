# Agent Onboarding Guide

This repo is a Create React App (React 18) project styled with MUI v5 and react-spring. It ships two visual themes and a few custom UI primitives. Follow this guide to make coherent changes without breaking the style language.

## Stack and Entry Points
- App shell: `src/App.jsx`
- Theme toggle: cozy ↔ rocket via state in `App.jsx`, surfaced in `ResponsiveAppBar`
- Themes: `src/theme.js` (cozy), `src/rocketTheme.js` (rocket)
- Routing: single-page sections stacked in `FrontPaper.jsx` with IDs for smooth scroll/scroll‑spy
- Key components:
  - AppBar and nav: `src/components/ResponsiveAppBar.jsx`
  - Sections container: `src/components/FrontPaper.jsx`
  - Dividers: `src/components/SectionDivider.jsx` (cozy waves), `src/components/MagmaDivider.jsx` (rocket glowing lines)
  - Cursor: `src/components/CursorGlow.jsx`
  - Parallax: `src/components/ParallaxLayer.jsx`
  - Side ornaments: `src/components/SideOrnaments.jsx`
  - Footer: `src/components/Footer.jsx`
  - Sections: `src/components/papercomponents/{AboutMe,Experience,Skills,Projects}.jsx`

## Design System (must‑follow)
- Use theme tokens, not hexes in components: `sx={{ color: 'text.secondary' }}` etc.
- Cozy theme
  - Palette: sage/moss pastels; background waves between sections
  - Divider: `SectionDivider` (wavy)
- Rocket theme
  - Palette: glossy red, deep black, electric blue; neon glow accents
  - Divider: `MagmaDivider` (no divider under the header); footer/header edges glow
- Cursor: `CursorGlow` is mandatory (leaf in cozy, flame in rocket)
- Transitions: already configured in `theme.js` and `rocketTheme.js` (600 ms ease)

## Do / Don’t
Do
- Keep wave dividers in cozy and magma dividers in rocket
- Keep Projects as a single GitHub CTA (no project list unless asked)
- Respect nav behavior: smooth scroll + scroll‑spy in `FrontPaper.jsx`
- Add skills/content via existing structures (Chips, Lists, MUI)
- Maintain accessibility: `aria-label`, focus-visible rings (rocket adds neon rings)

Don’t
- Reintroduce character illustrations; use line‑based accents only
- Add a divider under the header in rocket theme
- Hard‑code colors; use `theme.palette.*`
- Remove or bypass the theme toggle and indicator

## Common Tasks (short recipes)
Add a new section
1) Create component in `src/components/papercomponents/NewSection.jsx`
2) Import and stack in `FrontPaper.jsx` with an `id` and proper divider
3) Update `pages` array in `ResponsiveAppBar.jsx` if it should be navigable

Adjust theme colors or typography
1) Edit `src/theme.js` (cozy) or `src/rocketTheme.js`
2) Prefer adjusting `palette`, `typography`, or `components` overrides

Tune transitions
1) Cozy: `MuiCssBaseline` transitions in `src/theme.js`
2) Rocket: same in `src/rocketTheme.js`; AppBar/Paper also have transitions

Change parallax strength
1) In `FrontPaper.jsx`, tweak `ParallaxLayer` props: hero ~0.06, ornaments ~0.12
2) Magma line scroll shimmer in `MagmaDivider.jsx` (parallax + transitions)

Update skills/hobbies
1) Edit arrays in `Skills.jsx` and `AboutMe.jsx` (Hobbies Chips)

## Build/Run Notes
- CRA is deprecated; warnings may appear. Local `npm start` works for dev. If build issues occur, avoid ejecting unless requested.

