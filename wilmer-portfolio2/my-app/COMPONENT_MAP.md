# Component Map

Key files and responsibilities.

- `src/App.jsx`
  - Applies `ThemeProvider`, `CssBaseline`, noise overlay, `CursorGlow`, and `ThemeIndicator`
  - Holds theme state and cross-fade overlay

- `src/components/ResponsiveAppBar.jsx`
  - AppBar with desktop/mobile nav, smooth scroll to section IDs
  - Theme toggle (Chip only) and always-visible switch indicator
  - Cozy header uses `SectionDivider`; rocket uses a glow strip (no divider)

- `src/components/FrontPaper.jsx`
  - Stacks sections with IDs: `about`, `experience`, `skills`, `projects`
  - Inserts theme-specific dividers between sections
  - Adds `SideOrnaments` and wraps select blocks with `ParallaxLayer`
  - ScrollSpy via IntersectionObserver updates active nav

- `src/components/MagmaDivider.jsx`
  - Rocket glowing line with smooth transitions and slight parallax shimmer

- `src/components/SectionDivider.jsx`
  - Cozy wave divider (SVG)

- `src/components/SideOrnaments.jsx`
  - Line-based side ornaments; theme-aware

- `src/components/ParallaxLayer.jsx`
  - Lightweight, rAF-based parallax wrapper for children

- `src/components/CursorGlow.jsx`
  - Theme-aware custom cursor (leaf/flame) with glow

- `src/components/ThemeIndicator.jsx`
  - Temporary indicator announcing the destination theme on toggle

- `src/components/Footer.jsx`
  - CTA, contact, social links; gradient + glows; rocket adds edge glows

- `src/components/papercomponents/`
  - `AboutMe.jsx`: Avatar, bio, education, languages, hobbies (emoji Chips)
  - `Experience.jsx`: Section heading, company (ShoreCloud Corp., Part of Thermofisher, 2020–present), bullets
  - `Skills.jsx`: Categories, items, details dialog, linear progress etc.
  - `Projects.jsx`: Single GitHub CTA card

