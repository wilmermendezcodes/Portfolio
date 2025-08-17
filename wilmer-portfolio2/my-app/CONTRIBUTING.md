# Contributing

Thanks for helping improve this portfolio. Please keep changes aligned with the established themes and interaction patterns.

## Principles
- Use MUI components + theme tokens; avoid raw hex values in components
- Keep cozy theme calm and pastel; keep rocket theme vivid with neon accents
- Ensure accessibility (focus-visible, aria labels) and responsiveness across breakpoints

## Code Style
- Prefer `sx` and theme callbacks: `sx={{ color: 'text.secondary' }}` or `sx={{ borderColor: (t) => t.palette.primary.main }}`
- Keep components small and focused; colocate small UI primitives in `src/components`
- Avoid adding new global CSS files; prefer component-level styles or MUI overrides

## Performance
- Use requestAnimationFrame for scroll effects; avoid large listeners
- Limit re-renders; memoize where needed

## Testing
- CRA warnings may appear in build; do not eject without explicit approval
- Manually verify theme toggle, nav smooth scroll, scroll-spy, dialogs, and footer/header visuals in both themes

## Where to start
- Read `AGENTS.md`, `THEME_GUIDE.md`, `COMPONENT_MAP.md`, `TASK_PLAYBOOK.md`

