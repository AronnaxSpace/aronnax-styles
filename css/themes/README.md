# Theme System Organization

The theme system has been reorganized for better maintainability and separation of concerns.

## Structure

```
css/themes/
├── main.css                    # Entry point - imports all themes
├── minimal/
│   ├── variables.css          # Minimal theme design tokens
│   ├── components.css         # Minimal theme component overrides
│   └── dark.css               # Minimal theme dark mode (uses global dark mode)
├── modern/
│   ├── variables.css          # Modern theme design tokens
│   ├── components.css         # Modern theme component overrides
│   └── dark.css               # Modern theme custom dark mode
└── sharp/
    ├── variables.css          # Sharp theme design tokens
    ├── components.css         # Sharp theme component overrides
    └── dark.css               # Sharp theme custom dark mode
```

## Theme Organization

### Variables Files (`variables.css`)
Each theme's variables file contains:
- **Typography**: Font families and text styling
- **Spacing**: Padding, margins, border radius, border width
- **Shadows**: Shadow usage for components
- **Semantic Colors**: Theme-specific color overrides

### Component Files (`components.css`)
Each theme's components file contains:
- **Component Overrides**: Theme-specific styling for components
- **Form Styling**: Theme-specific form appearances
- **Interactive States**: Hover, focus, and active states
- **Layout Adjustments**: Theme-specific layout modifications

### Dark Mode Files (`dark.css`)
Each theme's dark mode file contains:
- **Dark Mode Overrides**: Theme-specific dark mode color schemes
- **Component Dark Styling**: Dark mode adjustments for components
- **Accessibility**: High contrast and readability improvements
- **Theme Consistency**: Maintains each theme's design philosophy in dark mode

## Benefits

### 🎯 **Separation of Concerns**
- **Variables**: Design tokens are separate from styling
- **Components**: Visual styles are separate from tokens
- **Maintainability**: Easy to modify tokens without affecting component logic

### 📈 **Scalability**
- **New Themes**: Add new themes by creating variable + component files
- **Theme Variants**: Create theme variations easily
- **Inheritance**: Themes can inherit and override base tokens

### 🔧 **Developer Experience**
- **Find Variables**: All theme tokens in one place
- **Find Styles**: All component overrides in one place
- **Debug Themes**: Clear separation makes debugging easier

## Usage

### Base Theme System
The minimal theme serves as the base and is applied by default:
```css
[data-theme="minimal"], :root {
  /* Base theme variables */
}
```

### Theme Switching
Themes are activated using data attributes:
```html
<html data-theme="modern">
<html data-theme="sharp">
```

### Theme-Managed Dark Mode
Each theme can define its own dark mode styling. Dark mode is activated by combining theme and mode attributes:
```html
<!-- Global dark mode (uses css/modes/dark.css) -->
<html data-mode="dark">

<!-- Theme-specific dark mode (uses theme's dark.css file) -->
<html data-theme="modern" data-mode="dark">
<html data-theme="sharp" data-mode="dark">
```

**Dark Mode Behavior:**
- **Minimal theme**: Uses global dark mode from `css/modes/dark.css`
- **Modern theme**: Uses custom tech-focused dark mode with GitHub-like colors
- **Sharp theme**: Uses ultra-minimal high-contrast dark mode with pure blacks/whites

### Creating New Themes
1. Create theme directory: `css/themes/mytheme/`
2. Add `variables.css` with theme tokens
3. Add `components.css` with component overrides
4. Add `dark.css` with theme-specific dark mode (or leave empty to use global dark mode)
5. Import all files in `css/themes/main.css`
6. Update JavaScript theme list

## Migration

The old monolithic theme files have been backed up:
- `modern.css.backup`
- `sharp.css.backup`

All functionality is preserved in the new organized structure.
