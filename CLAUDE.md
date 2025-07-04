# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 application built with TypeScript, using the App Router architecture. The project uses shadcn/ui components, Tailwind CSS for styling, and Framer Motion for animations.

## Development Commands

```bash
# Install dependencies (using pnpm)
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture & Structure

### Core Technologies
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS variables
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Theme**: next-themes for dark/light mode support

### Directory Structure
- `/app` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with theme provider
  - `page.tsx` - Main landing page (client component)
  - `/download` - Download page route
- `/components` - React components
  - `/ui` - shadcn/ui components (auto-generated)
  - `theme-provider.tsx` - Theme context provider
- `/lib` - Utility functions
  - `utils.ts` - Contains `cn()` helper for className merging
- `/styles` - Global styles
  - `globals.css` - Tailwind imports and CSS variables
- `/public` - Static assets
- `/hooks` - Custom React hooks

### Key Patterns

1. **Component Structure**: The project uses shadcn/ui components which are copied into the `/components/ui` directory. These are built on Radix UI primitives and styled with Tailwind CSS.

2. **Styling Approach**: Uses Tailwind CSS with the `cn()` utility function from `/lib/utils.ts` for conditional class merging. CSS variables are used for theming.

3. **Client Components**: The main page (`app/page.tsx`) is marked as a client component (`"use client"`) to support interactive features and animations.

4. **Theme Support**: Dark/light mode is implemented using next-themes with system preference detection.

### Import Aliases
The project uses the following path aliases:
- `@/components` → `/components`
- `@/lib` → `/lib`
- `@/hooks` → `/hooks`
- `@/styles` → `/styles`

### Component Library
This project uses shadcn/ui components configured via `components.json`. To add new components:
```bash
npx shadcn-ui@latest add <component-name>
```

### Notes
- No test framework is currently configured
- Uses pnpm as the package manager (based on pnpm-lock.yaml)
- The project appears to be a SaaS landing page template with features for clinics/healthcare
- Git branch is `version-10` with main branch as `main`