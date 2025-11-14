# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 portfolio website using the App Router, React 19, TypeScript, and Tailwind CSS v4. The project was bootstrapped with `create-next-app`.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint with Next.js config

## Architecture

### Framework & Routing
- **Next.js App Router**: Uses the `app/` directory structure (not Pages Router)
- **File-based routing**: Routes are defined by the folder structure in `app/`
- **Server Components by default**: Components in `app/` are React Server Components unless marked with 'use client'

### Styling
- **Tailwind CSS v4**: Uses the new `@tailwindcss/postcss` plugin
- **Global styles**: Located in `app/globals.css`
- **Fonts**: Uses Next.js font optimization with Geist Sans and Geist Mono via `next/font/google`
- **Dark mode**: Supports dark mode via Tailwind's `dark:` modifier (system preference based)

### TypeScript Configuration
- **Path aliases**: `@/*` maps to the root directory for imports (e.g., `import { foo } from '@/lib/utils'`)
- **Strict mode**: TypeScript strict mode is enabled
- **Target**: ES2017 with ESNext modules

### Project Structure
```
app/
├── layout.tsx      # Root layout with fonts and metadata
├── page.tsx        # Homepage
├── globals.css     # Global styles and Tailwind imports
└── favicon.ico

public/             # Static assets served from root
```

## Key Patterns

### React Server Components
By default, all components in the `app/` directory are Server Components. Use the `'use client'` directive at the top of files that need:
- Browser APIs (window, document, etc.)
- Event handlers (onClick, onChange, etc.)
- Hooks (useState, useEffect, etc.)
- Context providers

### Images
Use the `next/image` component from `next/image` for optimized image loading. Static images in `public/` are referenced with paths starting from `/` (e.g., `/next.svg`).

### Metadata
Define metadata in `layout.tsx` or `page.tsx` using the `metadata` export (for static metadata) or `generateMetadata` function (for dynamic metadata).
