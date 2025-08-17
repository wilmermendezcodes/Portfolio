# Task Playbook (for Agents)

Use these checklists to make common changes safely and consistently.

## 1) Add a new section
- [ ] Create `src/components/papercomponents/NewSection.jsx`
- [ ] Import and stack in `FrontPaper.jsx` with a unique `id`
- [ ] Insert theme-specific divider before/after (wave for cozy, magma for rocket)
- [ ] Add to `pages` in `ResponsiveAppBar.jsx` if it should appear in nav

## 2) Update skills / add categories
- [ ] Edit the `skills` structure in `Skills.jsx`
- [ ] Use existing UI (ListItemButton, Dialog, LinearProgress) and theme colors
- [ ] Keep hover/press effects subtle in cozy and glowing in rocket

## 3) Adjust theme colors/typography
- [ ] Cozy: `src/theme.js`; Rocket: `src/rocketTheme.js`
- [ ] Prefer `palette.*`, `typography.*`, and `components` overrides over inline hex
- [ ] Keep transitions ~600ms (both themes) unless asked to change

## 4) Change parallax intensity
- [ ] `FrontPaper.jsx`: `ParallaxLayer` speeds (hero ~0.06; ornaments ~0.12)
- [ ] `MagmaDivider.jsx`: shimmer parallax and transition durations

## 5) Footer/Header tweaks
- [ ] Footer gradient + edge glows in `Footer.jsx` (rocket)
- [ ] No divider under header in rocket; glam glow strip only
- [ ] Cozy uses `SectionDivider` under header

## 6) Theme toggle UX
- [ ] Toggle Chip labels in `ResponsiveAppBar.jsx` (desktop + mobile)
- [ ] Temporary indicator text in `ThemeIndicator.jsx`
- [ ] Cross-fade overlay in `App.jsx`

## 7) Accessibility & performance
- [ ] Keep `aria-label`s accurate; `focus-visible` rings stay enabled (rocket theme)
- [ ] Avoid heavy reflows. Use rAF in parallax and keep transforms lightweight

