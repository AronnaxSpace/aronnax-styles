# Aronnax Styles

A lightweight, modern, customizable CSS component library with a minimalist design philosophy.

## 🚀 Quick Start

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Build for development:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

### Usage

Include the CSS in your HTML:

```html
<!-- Development -->
<link rel="stylesheet" href="css/main.css">

<!-- Or use the compiled version -->
<link rel="stylesheet" href="dist/aronnax.css">

<!-- Production (minified) -->
<link rel="stylesheet" href="dist/aronnax.min.css">
```

For icons, include Font Awesome:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
```

## 🛠️ Build Scripts

- `npm run dev` - Build CSS and JS for development
- `npm run build` - Build minified CSS and JS for production
- `npm run dev:css` - Build CSS only (development)
- `npm run build:css` - Build CSS only (production)
- `npm run dev:js` - Build JS only (development)
- `npm run build:js` - Build JS only (production)

## 📄 Demo

Open `index.html` in your browser to see all components in action and explore the complete component showcase.

## 🎨 Themes

Aronnax Styles includes multiple themes, each with its own design personality:

### Available Themes

- **Minimal** (default) - Clean and simple with basic styling
- **Elegant** - Refined serif fonts, subtle shadows, sophisticated feel
- **Modern** - Tech-focused, pronounced shadows, sharp and efficient
- **Playful** - Vibrant colors, bouncy animations, gradients, and creative effects
- **Sharp** - Ultra-minimal with zero border radius, clean lines, and angular precision

### Using Themes

**HTML Attribute:**
```html
<html data-theme="sharp">
  <!-- Your content -->
</html>
```

**JavaScript:**
```javascript
// Set a theme
setTheme('sharp');

// Get current theme
const current = getCurrentTheme();

// Get all available themes
const themes = getAvailableThemes();
```

### Dark/Light Mode

**HTML Attribute:**
```html
<html data-mode="dark">
  <!-- Your content -->
</html>
```

**JavaScript:**
```javascript
// Toggle between dark and light
toggleMode();

// Set specific appearance (theme + mode)
setAppearance('sharp', 'dark');
```

## 📦 Components

### Buttons
- Basic buttons with variants (success, danger, warning, info, secondary)
- Outline button style
- Disabled state
- Icon support

### Forms
- Input fields (text, email, tel, file, etc.)
- Textarea and select elements
- Validation states (error, success, warning)
- Checkboxes and radio buttons
- Form layout helpers

### Cards
- Basic card component
- Card variants for different content types

### Layout
- Responsive grid system
- Flexbox utilities
- Container and spacing classes

### Modals & Sidebars
- Pure CSS modal (no JavaScript required)
- Sliding sidebar component
