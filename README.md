# Ilm Wasooli - Next.js (JSX + Tailwind CSS)

File structure only. No page logic/content included yet — each file has a
placeholder comment marking where the actual component/page code goes.

## Stack
- Next.js (App Router)
- React (JSX only, no TypeScript)
- Tailwind CSS only (no other CSS/UI library)

## Structure
- app/               -> routes (App Router)
- app/(marketing)/    -> route group for all public marketing pages
- components/        -> reusable UI split by section
- public/            -> static assets (images, icons)
- lib/                -> helper functions
- hooks/              -> custom React hooks
- data/               -> static content (e.g. features list, pricing plans, blog data)
- styles/             -> global tailwind css

Run:
```
npm install
npm run dev
```
