# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MYCURE is a healthcare management SaaS application built with Next.js 14, TypeScript, and the App Router architecture. The project is a modern clinic management system landing page with download options for multiple platforms.

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

## Important Configuration

### Build Settings
The project has the following build configurations in `next.config.mjs`:
- **ESLint errors are ignored during builds** (`ignoreDuringBuilds: true`)
- **TypeScript errors are ignored during builds** (`ignoreBuildErrors: true`)
- **Images are unoptimized** (`unoptimized: true`)

These settings suggest the project prioritizes rapid development over strict type safety during builds.

### shadcn/ui Components
This project uses shadcn/ui components configured via `components.json`:
- Style: default
- RSC: true (React Server Components enabled)
- TypeScript: true
- Tailwind config points to `tailwind.config.ts` (though actual file is `.js`)
- CSS file: `app/globals.css`
- Base color: neutral
- CSS variables: enabled

To add new shadcn/ui components:
```bash
npx shadcn-ui@latest add <component-name>
```

## Architecture Patterns

### Page Structure
- **Landing Page** (`app/page.tsx`): Client component with extensive animations using Framer Motion
- **Download Page** (`app/download/page.tsx`): Platform-specific download options (Desktop, Mobile, Tablet, Web)

### Styling System
- **Primary Color**: `#0099CC` (defined in `tailwind.config.js`)
- **CSS Variables**: Used for theming with HSL color values
- **Dark Mode**: Implemented using `next-themes` with system preference detection
- **Utility Function**: `cn()` in `/lib/utils.ts` for conditional class merging

### Component Organization
- All shadcn/ui components are in `/components/ui/`
- Custom hooks are duplicated in both `/hooks/` and `/components/ui/` (e.g., `use-toast.ts`, `use-mobile.tsx`)
- Theme provider wraps the entire application in the root layout

## Key Features

### Platform Support
The application promotes availability across:
- Desktop (Windows, macOS, Linux)
- Mobile (iOS, Android)
- Tablet (iPad, Android tablets)
- Web (Browser-based access)

### Healthcare-Specific Elements
- HIPAA compliance messaging
- Patient management features
- Clinic operation streamlining
- Healthcare provider testimonials
- Multi-stage onboarding workflow

## Development Notes

### Current State
- Git branch: `version-10` (main branch: `main`)
- No test framework configured
- No ESLint configuration file present (using Next.js defaults)
- Package manager: pnpm

### Path Aliases
Configured in `tsconfig.json`:
- `@/*` maps to the project root

### Static Assets
- Logo: `/mycure-logo.svg`
- Service worker: `/static/sw.js`
- Various placeholder images in `/public/`