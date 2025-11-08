# MyBlog — Simple React Blog

A minimal React blog template using Tailwind CSS for styling, Supabase for backend/auth, and React Query for remote state/data fetching.

## Quick links

- Main app component: [`App`](src/App.jsx) — [src/App.jsx](src/App.jsx)
- App bootstrap: [src/main.jsx](src/main.jsx)
- Global styles: [src/index.css](src/index.css)
- Dev entry: [index.html](index.html)
- Vite + Tailwind config: [vite.config.js](vite.config.js)
- Package scripts & deps: [package.json](package.json)
- ESLint config: [eslint.config.js](eslint.config.js)
- Git ignore: [.gitignore](.gitignore)
- Static assets: [public/](public/)

## Features

- React 19 app scaffolded with Vite
- Tailwind CSS integration
- Designed to use Supabase for user auth and data
- Designed to use React Query for remote data fetching and caching

## Tech stack

- React
- Vite
- Tailwind CSS
- Supabase (recommended)
- React Query (recommended)

## Getting started

1. Install dependencies

```sh
npm install
```

2. Run dev server

```sh
npm run dev
```

3. Build for production

```sh
npm run build
```

4. Preview production build

```sh
npm run preview
```

(Scripts above come from [package.json](package.json).)

## Adding Supabase and React Query

This template does not yet include Supabase or React Query packages. To add them:

```sh
npm install @supabase/supabase-js @tanstack/react-query
```

- Create a Supabase project and get your API URL and anon key.
- Add environment variables (e.g. in a `.env` file) and initialize Supabase in your app.
- Use React Query to fetch and cache data from Supabase.

## Project structure

- [src/App.jsx](src/App.jsx) — main UI (`App`)
- [src/main.jsx](src/main.jsx) — app entry that mounts [`App`](src/App.jsx)
- [src/index.css](src/index.css) — Tailwind & global styles
- [public/] — static assets served as-is
- [index.html](index.html) — Vite dev entry

## Tailwind CSS

Tailwind is configured via the Vite plugin in [vite.config.js](vite.config.js) and the stylesheet import in [src/index.css](src/index.css).


