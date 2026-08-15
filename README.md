# Nidhi Agarwal — Portfolio

A responsive personal portfolio for Nidhi Agarwal, Senior Software Engineer.
Built with React, Vite and modern CSS.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy

The site is ready for Vercel, Netlify, or any static host.

### Vercel

1. Push this folder to a GitHub repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Keep the detected Vite settings and deploy.

### Netlify

1. Run `npm run build`.
2. Deploy the generated `dist` directory.

## Customize

Portfolio content lives in `src/App.jsx`, visual styling in `src/App.css`, and
the downloadable résumé at `public/Nidhi_Agarwal_Resume.pdf`.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
