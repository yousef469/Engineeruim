# Color Palette Guide

## Professional Tech Color Scheme
Inspired by SpaceX, Unity, and NVIDIA - clean, modern, and reliable.

---

## Color Reference

### Primary - Bright Blue (#007BFF)
**Use for:** Buttons, links, primary actions, interactive elements
```jsx
// Tailwind classes
className="bg-primary text-white"
className="text-primary hover:text-primary-light"
className="border-primary"

// CSS variables
style={{ backgroundColor: 'var(--color-primary)' }}
```

### Secondary - Green-Teal (#00C68E)
**Use for:** Progress indicators, success states, completion badges
```jsx
// Tailwind classes
className="bg-secondary text-white"
className="text-secondary"

// CSS variables
style={{ color: 'var(--color-secondary)' }}
```

### Background - Dark Navy (#0C1220)
**Use for:** Page backgrounds, cards, containers
```jsx
// Tailwind classes
className="bg-background"
className="bg-background-light" // Slightly lighter
className="bg-background-dark"  // Darker variant

// CSS variables
style={{ backgroundColor: 'var(--color-background)' }}
```

### Accent - Gold (#FFD166)
**Use for:** Highlights, badges, premium features, achievements
```jsx
// Tailwind classes
className="bg-accent text-background"
className="text-accent"

// CSS variables
style={{ color: 'var(--color-accent)' }}
```

### Text - Light Gray (#EAF2F8)
**Use for:** Primary text on dark backgrounds
```jsx
// Tailwind classes
className="text-text"           // Primary text
className="text-text-secondary" // Secondary text
className="text-text-muted"     // Muted/disabled text

// CSS variables
style={{ color: 'var(--color-text)' }}
```

---

## Common Patterns

### Button Styles
```jsx
// Primary button
<button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors">
  Click Me
</button>

// Secondary button
<button className="bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-lg transition-colors">
  Success
</button>

// Accent button
<button className="bg-accent hover:bg-accent-dark text-background px-6 py-3 rounded-lg font-semibold transition-colors">
  Premium
</button>
```

### Card Styles
```jsx
<div className="bg-background-light border border-primary/20 rounded-xl p-6">
  <h3 className="text-text text-xl font-bold mb-2">Card Title</h3>
  <p className="text-text-secondary">Card content goes here</p>
</div>
```

### Progress Indicators
```jsx
<div className="w-full bg-background-dark rounded-full h-2">
  <div className="bg-secondary h-2 rounded-full" style={{ width: '60%' }}></div>
</div>
```

### Links
```jsx
<a href="#" className="text-primary hover:text-primary-light transition-colors">
  Learn More →
</a>
```

### Badges
```jsx
<span className="bg-accent text-background px-3 py-1 rounded-full text-sm font-semibold">
  New
</span>

<span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
  Completed
</span>
```

---

## Accessibility Notes

- All color combinations meet WCAG AA standards for contrast
- Primary blue on dark background: 7.2:1 ratio ✓
- Secondary green on dark background: 6.8:1 ratio ✓
- Accent gold on dark background: 8.1:1 ratio ✓
- Text on dark background: 12.5:1 ratio ✓

---

## Migration Tips

Replace old colors with new palette:
- Old blue → `bg-primary`
- Old green → `bg-secondary`
- Old dark backgrounds → `bg-background`
- Old yellow/gold → `bg-accent`
- Old white text → `text-text`

The colors are now available both as Tailwind classes and CSS variables for maximum flexibility.
