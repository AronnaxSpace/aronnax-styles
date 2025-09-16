# Aronnax Styles

A lightweight, modern, customizable CSS component library with dark/light mode support.

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

// Or import individual functions
import { toggleMode } from 'aronnax-styles';
toggleMode();
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
}
```

#### HTML (Direct Usage)

```html
<!-- The bundled version makes functions globally available -->
<script src="node_modules/aronnax-styles/dist/aronnax-styles.min.js"></script>
<button onclick="toggleMode()">Toggle Dark Mode</button>
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

### Dark/Light Mode

Aronnax Styles supports both global dark mode.

**Global Dark Mode:**
```html
<html data-mode="dark">
  <!-- Uses global dark mode colors -->
</html>
```

**JavaScript:**
```javascript
// Toggle between dark and light
toggleMode();

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
