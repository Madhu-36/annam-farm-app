# Style Guide

## CSS Style Guidelines

1. **Variables First:** Always use CSS variables (`var(--bg-color)`) for colors, fonts, and spacing to maintain theme consistency.
2. **Glassmorphism:** Use `backdrop-filter: blur(10px)` and semi-transparent RGBA backgrounds for overlay panels.
3. **No `!important`:** Avoid using `!important`. Fix specificity issues by writing better selectors.
4. **Mobile First:** Write default styles for mobile, then use `@media (min-width: 768px)` for desktop overrides.

## JavaScript Style Guidelines

1. **ES6+ Features:** Use `const` and `let` (never `var`). Use arrow functions `() => {}` and template literals `` `${var}` ``.
2. **Strict Equality:** Always use `===` and `!==`.
3. **Async/Await:** Prefer `async/await` over `.then()` chains for cleaner asynchronous code.
4. **DOM Queries:** Cache DOM queries in constants at the top of functions if used multiple times.

## Python Style Guidelines

1. **PEP 8:** Follow standard PEP 8 formatting.
2. **Type Hints:** Use type hints for all function arguments and return values.
3. **Black Formatter:** Code must pass through the `black` formatter before being merged.
