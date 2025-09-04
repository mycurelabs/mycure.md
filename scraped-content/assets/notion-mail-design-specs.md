# Notion Mail Design Specifications

## Typography Scale

### Headlines
- **Hero H1**: `text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight`
  - Mobile: 48px
  - Tablet: 60px  
  - Desktop: 72px

- **Section H2**: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight`
  - Mobile: 36px
  - Tablet: 48px
  - Desktop: 60px

- **Subsection H3**: `text-2xl md:text-3xl font-bold`
  - Mobile: 24px
  - Tablet: 30px

### Body Text
- **Subheadlines**: `text-xl md:text-2xl text-muted-foreground leading-relaxed`
  - Mobile: 20px
  - Tablet: 24px

- **Body**: `text-lg text-muted-foreground leading-relaxed`
  - Default: 18px
  - Line height: 1.75

- **Small Text**: `text-sm text-muted-foreground`
  - Default: 14px

## Spacing System

### Section Spacing
- **Large Sections**: `py-20 md:py-32` (80px mobile, 128px desktop)
- **Medium Sections**: `py-16 md:py-24` (64px mobile, 96px desktop)  
- **Small Sections**: `py-12 md:py-20` (48px mobile, 80px desktop)

### Container Padding
- **Default**: `px-4 md:px-6` (16px mobile, 24px desktop)
- **Wide**: `px-4 md:px-8` (16px mobile, 32px desktop)

### Component Spacing
- **Large Gap**: `space-y-12` (48px)
- **Medium Gap**: `space-y-8` (32px)
- **Small Gap**: `space-y-4` (16px)

## Layout Patterns

### Container Widths
- **Wide Container**: `max-w-7xl mx-auto`
- **Standard Container**: `max-w-5xl mx-auto`
- **Text Container**: `max-w-3xl mx-auto`
- **Narrow Container**: `max-w-2xl mx-auto`

### Grid Systems
- **Feature Grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Two Column**: `grid lg:grid-cols-2 gap-12 lg:gap-16`
- **Responsive Stack**: `flex flex-col lg:flex-row gap-12`

## Component Patterns

### Cards
```css
- Border: `border border-gray-200 dark:border-gray-800`
- Radius: `rounded-xl` or `rounded-2xl`
- Padding: `p-6 md:p-8`
- Shadow: `shadow-sm hover:shadow-md transition-shadow`
```

### Buttons
```css
Primary CTA:
- Size: `h-12 px-6 py-3`
- Text: `text-base font-semibold`
- Style: `bg-black text-white dark:bg-white dark:text-black`
- Radius: `rounded-full`

Secondary CTA:
- Border: `border border-gray-300`
- Hover: `hover:bg-gray-50`
```

### Testimonials
```css
- Layout: Horizontal scroll with overflow
- Card: `bg-white dark:bg-gray-900 rounded-xl p-6`
- Quote: `text-lg leading-relaxed`
- Attribution: `text-sm text-muted-foreground`
```

## Color Palette

### Light Mode
- Background: `#ffffff`
- Muted Background: `#f9fafb`
- Text: `#000000`
- Muted Text: `#6b7280`
- Border: `#e5e7eb`

### Dark Mode
- Background: `#000000`
- Muted Background: `#111111`
- Text: `#ffffff`
- Muted Text: `#9ca3af`
- Border: `#374151`

## Animation Patterns

### Scroll Animations
- Fade In: `opacity: 0 → 1, y: 20px → 0`
- Duration: `0.5s - 0.7s`
- Easing: `ease-out`

### Hover Effects
- Cards: `hover:shadow-md transition-shadow duration-200`
- Buttons: `hover:scale-105 transition-transform duration-200`
- Links: `hover:opacity-80 transition-opacity`

## Mobile Responsive Design

### Mobile Typography Scale
- **Hero H1**: `text-4xl` → `sm:text-5xl` → `md:text-6xl` → `lg:text-7xl`
  - Mobile: 36px → Tablet: 48px → Desktop: 72px
  - Progressive enhancement with `sm:` breakpoint

- **Section H2**: `text-3xl` → `sm:text-4xl` → `md:text-5xl` → `lg:text-6xl`
  - Mobile: 30px → Small: 36px → Tablet: 48px → Desktop: 60px

- **Subsection H3**: `text-2xl` → `sm:text-3xl` → `md:text-4xl`
  - Mobile: 24px → Small: 30px → Tablet: 36px

- **Body Text**: `text-base` → `sm:text-lg` → `md:text-xl` → `lg:text-2xl`
  - Mobile: 16px → Small: 18px → Tablet: 20px → Large: 24px

### Mobile Spacing
- **Section Padding**: `py-12` → `sm:py-16` → `md:py-20` → `lg:py-32`
  - Mobile: 48px → Small: 64px → Tablet: 80px → Desktop: 128px

- **Container Padding**: `px-4` → `sm:px-6` → `md:px-8`
  - Mobile: 16px → Small: 24px → Tablet: 32px

### Mobile Components
- **Buttons**: `h-11 px-5 text-sm` → `sm:h-12 sm:px-6 sm:text-base`
  - Smaller touch targets on mobile but still accessible (44px height)
  - Progressive text size increase

### Mobile-First Approach
- Start with smallest viable text sizes
- Add `sm:` breakpoint for phones in landscape
- Progressive enhancement through breakpoints
- Ensure touch targets meet 44px minimum

## Key Design Principles

1. **Generous Whitespace**: Large padding between sections creates visual breathing room
2. **Clear Hierarchy**: Dramatic size differences between heading levels
3. **Centered Content**: Most text content is center-aligned with constrained widths
4. **Minimal Decoration**: Focus on typography and spacing rather than visual embellishments
5. **Consistent Patterns**: Reusable component patterns throughout the page