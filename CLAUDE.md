# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MYCURE is a healthcare management SaaS application built with Next.js 14, TypeScript, and the App Router architecture. The project is a modern clinic management system landing page with download options for multiple platforms.

## Development Commands

**Important**: This project is not using pnpm. Use npm for all package management:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
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
- Tailwind config: `tailwind.config.js` (not .ts as referenced in components.json)
- CSS file: `app/globals.css`
- Base color: neutral
- CSS variables: enabled
- Icon library: Lucide React

**Component Architecture**: The project has a comprehensive set of 47+ shadcn/ui components already installed, including advanced components like charts, carousels, and data tables.

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
- All shadcn/ui components are in `/components/ui/` (47+ components)
- Custom hooks are duplicated in both `/hooks/` and `/components/ui/` (e.g., `use-toast.ts`, `use-mobile.tsx`)
- Theme provider wraps the entire application in the root layout
- Global CSS imports in layout: `@/styles/globals.css` (note: actual path is `app/globals.css`)

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
- Package manager: **npm** (not pnpm)
- Project name: "my-v0-project" (likely generated from v0.dev)

### Path Aliases
Configured in `tsconfig.json`:
- `@/*` maps to the project root

### Static Assets
- Logo: `/mycure-logo.svg`
- Service worker: `/static/sw.js`
- Various placeholder images in `/public/`

### Key Dependencies
- **UI Framework**: React 18 with Next.js 14 App Router
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Icons**: Lucide React (extensive icon set)
- **Animation**: Framer Motion for complex animations
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Theme**: next-themes for dark/light mode switching
- **Toast Notifications**: Sonner for user notifications

### Component System Architecture
The project follows a layered component architecture:
1. **Base UI Components** (`/components/ui/`): shadcn/ui primitives
2. **Custom Components** (`/components/`): Application-specific components
3. **Page Components** (`/app/`): Route-level components with App Router
4. **Shared Utilities** (`/lib/`): Common utilities and helpers
5. **Custom Hooks** (`/hooks/`): Reusable React hooks