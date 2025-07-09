# Theme System Organization

The theme system has been reorganized for better maintainability and separation of concerns.

## Structure

```
css/themes/
├── main.css                    # Entry point - imports all themes
├── minimal/
│   ├── variables.css          # Minimal theme design tokens
│   └── components.css         # Minimal theme component overrides
├── modern/
│   ├── variables.css          # Modern theme design tokens
│   └── components.css         # Modern theme component overrides
└── sharp/
    ├── variables.css          # Sharp theme design tokens
    └── components.css         # Sharp theme component overrides
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

### Creating New Themes
1. Create theme directory: `css/themes/mytheme/`
2. Add `variables.css` with theme tokens
3. Add `components.css` with component overrides
4. Import both files in `css/themes/main.css`
5. Update JavaScript theme list

## Migration

The old monolithic theme files have been backed up:
- `modern.css.backup`
- `sharp.css.backup`

All functionality is preserved in the new organized structure.
