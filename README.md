# Aronnax Styles

A lightweight, modern, customizable CSS component library with multiple themes and dark/light mode support.

## 🚀 Quick Start

### Installation

```bash
npm install aronnax-styles
# or
yarn add aronnax-styles
```

### Usage

#### CSS

```html
<!-- Include the CSS -->
<link rel="stylesheet" href="node_modules/aronnax-styles/css/main.css">

<!-- Or use the minified version -->
<link rel="stylesheet" href="node_modules/aronnax-styles/dist/aronnax-styles.min.css">
```

#### JavaScript (ES6 Modules)

```javascript
// Import the main API object
import { Aronnax } from 'aronnax-styles';

// Use structured API (recommended)
Aronnax.mode.toggle();
Aronnax.theme.set('modern');

// Or import individual functions
import { toggleMode, setTheme } from 'aronnax-styles';
toggleMode();
setTheme('modern');
```

#### Rails/Stimulus Integration

```javascript
// In your Rails Stimulus controller
import { Controller } from "@hotwired/stimulus";
import { Aronnax } from 'aronnax-styles';

export default class extends Controller {
  switch() {
    Aronnax.mode.toggle();
  }
  
  changeTheme() {
    Aronnax.theme.set('modern');
  }
}
```

#### HTML (Direct Usage)

```html
<!-- The bundled version makes functions globally available -->
<script src="node_modules/aronnax-styles/dist/aronnax-styles.min.js"></script>
<button onclick="toggleMode()">Toggle Dark Mode</button>
<button onclick="setTheme('modern')">Modern Theme</button>
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
- **Modern** - Tech-focused, pronounced shadows, sharp and efficient
- **Sharp** - Ultra-minimal with zero border radius, clean lines, and angular precision
- **Terminal** - Hacker-style minimalistic terminal aesthetic with monospace fonts and matrix-green glow

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

Aronnax Styles supports both global dark mode and theme-managed dark mode.

**Global Dark Mode:**
```html
<html data-mode="dark">
  <!-- Uses global dark mode colors -->
</html>
```

**Theme-Managed Dark Mode:**
```html
<html data-theme="modern" data-mode="dark">
  <!-- Uses modern theme's custom dark mode -->
</html>
<html data-theme="sharp" data-mode="dark">
  <!-- Uses sharp theme's custom dark mode -->
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
