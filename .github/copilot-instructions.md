# Copilot instructions for shop-app (React + TypeScript + Vite)

This project is a small Vite + React + TypeScript app using Tailwind, Headless UI and React Router.
Keep suggestions focused, concrete, and tied to the files listed below.

Key commands (from `package.json`):
- Development: `npm run dev` (runs `vite`).
- Build: `npm run build` (runs `tsc -b && vite build`). Ensure any new TS types pass `tsc`.
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (runs `eslint .`).

Big picture / architecture hints:
- Entry: `src/main.tsx` sets up `createBrowserRouter` and `RouterProvider`. Routes: `/`, `/about-us`, `/products` and a dynamic `products/:id` path (note: dynamic route currently has no element assigned).
- Pages/components: `src/Home.tsx`, `src/About.tsx`, `src/404.tsx`, `src/products.tsx`, `src/product.tsx`, and `src/App.tsx` (App renders `Home`). Use these files as examples when adding pages.
- Styling: Tailwind via `tailwindcss` and `@tailwindcss/vite` plugin in `vite.config.ts`. Keep utility classNames intact; avoid refactoring away Tailwind classes into CSS modules unless adding a clear migration.
- Data flow: `src/products.tsx` contains an inline product array and maps to the `Product` component (`src/product.tsx`). New product data should follow the ProductProps shape (id, name, href, imageSrc, imageAlt, price, color).

Project-specific conventions and patterns:
- TypeScript is strict: `tsconfig.app.json` enables `strict`, `noUnusedLocals`, `noUnusedParameters`. New code must satisfy these settings or update tsconfig thoughtfully.
- Linting: ESLint config is in `eslint.config.js` and includes `typescript-eslint` and react hooks rules. Follow existing rule patterns (prefer named exports for React components when the file currently uses defaults only where present).
- Routing: app uses React Router v7 `createBrowserRouter`. Prefer returning route elements (JSX) rather than using side-effects in route definitions.

Integration points / external dependencies to be aware of:
- `@vitejs/plugin-react-swc` (fast refresh via SWC) — keep transforms compatible with JSX runtime in `tsconfig` (`jsx: react-jsx`).
- `tailwindcss`, `@headlessui/react`, `@heroicons/react` — UI components rely on headlessui/dialog and heroicons. When changing markup, verify classes and ARIA attributes remain correct for accessibility.

Examples to reference:
- Product props: `src/product.tsx` shows the expected prop shape and rendering pattern.
- Routes: `src/main.tsx` demonstrates router setup and errorElement usage (`404.tsx`).
- Build pipeline: `package.json` build runs `tsc -b` first — new TS project references must not break the build.

If you modify routes or add pages, update `src/main.tsx` routing array and ensure any new dynamic routes provide an `element`.

When unsure, prefer minimal, incremental changes and include a one-line test plan in the PR (how to run `npm run dev`, which page to open, and any inputs to reproduce).

If anything here is unclear or you want more examples (tests, CI rules, or adding a products detail page), tell me which area to expand.
