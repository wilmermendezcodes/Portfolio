# Theme Guide

Two themes are provided and must stay coherent across the app.

## Cozy (default)
- File: `src/theme.js`
- Palette: sage/moss greens, soft backgrounds
- Dividers: `SectionDivider` (wavy) between sections and under header
- Footer: soft green gradient, compact height
- Cursor: leaf with gentle glow
- Motion: subtle; 600ms color/background transitions

## Rocket
- File: `src/rocketTheme.js`
- Palette: glossy red, deep black, electric blue
- Dividers: `MagmaDivider` with glow and slight parallax; no divider under header (use soft glow instead)
- Footer: fiery gradient with blurred glow on edges
- Cursor: metallic-hot flame with stronger glow
- Motion: 600ms transitions; neon focus rings; pronounced hover glows

## Components mapped to theme
- AppBar/Footer: gradients configured in respective theme overrides
- Paper: glossy/soft shadows via `MuiPaper` overrides
- Buttons: hover/focus rings (stronger in rocket)
- Links/List items: theme-aware hover states and focus rings in rocket

## Adding a new theme (optional)
1) Duplicate `rocketTheme.js` as `newTheme.js` and adjust `palette`, `typography`, `components`
2) Wire it in `App.jsx` (add a third mode) and in `ResponsiveAppBar` toggle/labels
3) Provide matching dividers (cozy uses waves, rocket uses magma lines)

