# Component Patterns Documentation

This document outlines the standard component patterns and usage guidelines established by the product-style layout (clinics page).

## Core Component Patterns

### 1. AnimatedShinyText Badge
**Purpose**: Product positioning and feature highlighting
**Usage**:
```tsx
<AnimatedShinyText className="inline-flex items-center justify-center px-3 py-1 text-xs transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 h-8">
  <span>MYCURE for Clinics</span>
</AnimatedShinyText>
```
**Styling Standards**:
- Padding: `px-3 py-1`
- Font size: `text-xs`
- Height: `h-8`
- No emojis unless explicitly requested

### 2. ShimmerButton
**Purpose**: Primary call-to-action buttons
**Usage**:
```tsx
<ShimmerButton className="shadow-2xl" size="lg">
  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
    Start Your Digital Transformation
  </span>
</ShimmerButton>
```
**Variants**:
- Primary: With shimmer effect
- Secondary: Outline variant

### 3. NumberTicker
**Purpose**: Animated statistics display
**Usage**:
```tsx
<NumberTicker value={13239859} delay={0.3} className="font-bold text-primary" />
```
**Implementation**:
- Progressive delays (0.3, 0.4, 0.5) for stagger effect
- Always use with descriptive labels
- Wrap in motion containers for viewport triggers

### 4. Scrollytelling
**Purpose**: Sticky scroll with progressive content reveal
**Usage**:
```tsx
<Scrollytelling.Root start="top bottom" end="bottom top" scrub={true}>
  <Scrollytelling.Pin>
    {/* Sticky content */}
  </Scrollytelling.Pin>
  <Scrollytelling.Container>
    <Scrollytelling.Waypoint at={0}>
      {/* Content revealed at waypoint */}
    </Scrollytelling.Waypoint>
  </Scrollytelling.Container>
</Scrollytelling.Root>
```

### 5. Card Grids
**Purpose**: Display multiple features/solutions
**Layout Patterns**:
```tsx
// 6-card grid (2x3 responsive)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 4-card grid (2x2)
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

// 3-card grid (1x3)
<div className="grid md:grid-cols-3 gap-8">
```

## Animation Patterns

### Viewport-Triggered Animations
**Standard Pattern**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

### Stagger Effects
**For Lists/Grids**:
```tsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
```

### Progressive Reveals
**For Sequential Content**:
```tsx
transition={{ duration: 0.5, delay: 0.2 }} // First item
transition={{ duration: 0.5, delay: 0.3 }} // Second item
transition={{ duration: 0.5, delay: 0.4 }} // Third item
```

## Layout Patterns

### Hero Section
**Structure**:
1. AnimatedShinyText badge (optional)
2. Main headline (text-4xl to text-6xl)
3. Supporting description (max-w-[600px])
4. Dual CTA buttons (ShimmerButton)
5. Centered alignment with padding

### Problem-to-Solution Cards
**Structure**:
```tsx
<Card className="p-6 hover:shadow-lg transition-shadow">
  <div className="space-y-3">
    <div className="flex items-start gap-3">
      {React.createElement(icon, { className: "size-6 text-primary mt-1" })}
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <p className="text-muted-foreground">{description}</p>
  </div>
</Card>
```

### Alternating Image + Content
**Structure**:
```tsx
<div className="grid lg:grid-cols-2 gap-12 items-center">
  <div className="space-y-4 lg:order-2"> {/* Content */}
  <div className="lg:order-1"> {/* Image */}
</div>
// Next row: swap order-1 and order-2
```

### Statistics Section
**Structure**:
```tsx
<section className="brand-gradient-bg">
  <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10">
    <div className="grid md:grid-cols-3 gap-8">
      {/* NumberTicker items */}
    </div>
  </div>
</section>
```

## Color & Styling Guidelines

### Brand Colors
- Primary: `#0099CC` (brand blue)
- Use `text-[#0099CC]` for inline emphasis
- Background gradients: `brand-gradient-bg` class

### Glass Morphism
```tsx
className="bg-background/95 backdrop-blur-sm border border-white/10"
```

### Text Hierarchy
- Headlines: `font-bold tracking-tight`
- Body: `text-muted-foreground`
- Emphasis: `text-primary` or brand color

### Spacing Standards
- Sections: `py-20 md:py-32`
- Container: `container px-4 md:px-6`
- Card padding: `p-6`
- Content gaps: `space-y-4` or `gap-6`

## Responsive Design

### Breakpoint Usage
- Mobile-first approach
- `md:` (768px+) for tablet
- `lg:` (1024px+) for desktop
- `xl:` (1280px+) for large screens (rare)

### Grid Responsiveness
```tsx
// Standard responsive grid
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Two-column max
"grid grid-cols-1 lg:grid-cols-2"

// Single column on mobile
"flex flex-col md:flex-row"
```

## Image Handling

### Next.js Image Component
```tsx
<Image
  src="/path/to/image.webp"
  width={600}
  height={400}
  alt="Descriptive alt text"
  className="rounded-xl"
/>
```

### Aspect Ratios
- Hero images: 16:9 or 4:3
- Feature images: Flexible based on content
- Icons: Square (1:1)

## Icon Usage

### Dynamic Icon Rendering
```tsx
// When icon is stored as component reference
{React.createElement(iconComponent, { className: "size-6 text-primary" })}

// Direct usage
<Clock className="size-5 text-muted-foreground" />
```

### Standard Sizes
- Small: `size-4` or `size-5`
- Medium: `size-6`
- Large: `size-8` or `size-10`

## Best Practices

### Performance
1. Use `viewport={{ once: true }}` for animations
2. Lazy load images below the fold
3. Minimize animation complexity on mobile

### Accessibility
1. Always include descriptive alt text
2. Use semantic HTML elements
3. Ensure proper heading hierarchy
4. Maintain color contrast ratios

### Consistency
1. Follow established patterns from clinics page
2. Maintain consistent spacing and sizing
3. Use the same animation timings
4. Keep CTAs prominent and clear

### Content Guidelines
1. Short, impactful headlines
2. Problem-to-solution narrative flow
3. Specific benefits over generic features
4. Multiple conversion points throughout page

## Component Combinations

### Hero + Badge + CTAs
Badge ’ Headline ’ Description ’ Two ShimmerButtons

### Cards + Stagger Animation
Grid layout ’ Motion wrapper per card ’ Progressive delays

### Sticky Scroll + Waypoints
Left sticky content ’ Right scrolling features ’ Waypoint reveals

### Statistics + NumberTicker
Background gradient ’ Glass container ’ Grid of tickers

## File Organization

### Import Order
1. React/Next.js imports
2. UI component imports
3. Icon imports
4. Utility imports
5. Type imports

### Component Structure
1. Imports
2. Data/constants
3. Component definition
4. Sections in logical flow
5. Export statement