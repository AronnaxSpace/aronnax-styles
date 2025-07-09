# Design Tokens Structure

This document describes the organized design token system for Aronnax Styles.

## Token Organization

The design tokens have been organized into logical files within the `css/tokens/` directory:

### 📄 File Structure

```
css/tokens/
├── main.css          # Main entry point - imports all token files
├── breakpoints.css   # Responsive breakpoint references
├── colors.css        # Color system foundation
├── typography.css    # Font families, sizes, weights, line heights
├── spacing.css       # Spacing scale, padding, margins, border radius
├── shadows.css       # Shadow definitions and theme-specific usage
├── animations.css    # Transition and animation timing
└── z-index.css       # Z-index scale for stacking context

css/modes/
├── main.css          # Mode system entry point
├── light.css         # Light mode color definitions
└── dark.css          # Dark mode color definitions
```

### 🎨 Colors (`colors.css`)
- **Base system**: Foundation for the color system
- **Mode separation**: Actual colors defined in `css/modes/`
  - Light mode: `css/modes/light.css`
  - Dark mode: `css/modes/dark.css`
- **Automatic switching**: System preference support
- **Manual toggle**: JavaScript-controlled mode switching

### 🔤 Typography (`typography.css`)
- **Font families**: System fonts and monospace
- **Font sizes**: Base sizes and heading scale (h1-h6)
- **Line heights**: Base, tight, and relaxed
- **Font weights**: Normal through bold

### 📏 Spacing (`spacing.css`)
- **Space scale**: 0-6 spacing units (0 to 2rem)
- **Padding/Margins**: Small, medium, large variants
- **Border radius**: Small, medium, large, and full round
- **Border width**: Standard border thickness
- **Component sizes**: Sidebar, modal, container widths
- **Grid gaps**: Small, base, and large gaps

### 🌘 Shadows (`shadows.css`)
- **Base shadows**: Small, medium, large definitions
- **Theme usage**: Component-specific shadow applications

### ⚡ Animations (`animations.css`)
- **Transitions**: Fast and normal timing for smooth interactions

### 📱 Breakpoints (`breakpoints.css`)
- **Responsive scale**: sm (640px), md (768px), lg (1024px), xl (1280px)
- Note: Reference only - use in @media queries as needed

### 🗂️ Z-Index (`z-index.css`)
- **Stacking layers**: Overlay and modal z-index values

## Usage

The tokens are automatically imported through `css/main.css`:

```css
@import './tokens/main.css';
```

All CSS custom properties are available globally and can be used in any component:

```css
.my-component {
  padding: var(--padding-sm);
  background-color: var(--bg-color);
  border-radius: var(--border-radius);
  transition: all var(--transition-normal);
}
```

## Benefits

1. **Better Organization**: Related tokens are grouped together
2. **Easier Maintenance**: Find and modify specific token types quickly
3. **Clearer Documentation**: Each file has focused responsibility
4. **Scalability**: Easy to add new token categories
5. **Theme Support**: Separation makes theme overrides cleaner

## Migration

The old `variables.css` file has been backed up as `variables.css.backup` and replaced with the new modular token structure. All existing functionality is preserved.
