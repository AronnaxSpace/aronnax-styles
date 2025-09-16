# Development Guide

## Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm start
# or
npm run serve
```

This will:
1. Build the CSS and JS files
2. Start a local server on http://localhost:3000
3. Open the demo page in your browser

### Development with Auto-reload
```bash
npm run dev:watch
```

This will:
1. Watch for changes in CSS and JS files
2. Automatically rebuild when files change
3. Serve the files on http://localhost:3000
4. Auto-reload the browser when changes are detected

## Available Scripts

- `npm start` - Build and serve the demo on localhost:3000
- `npm run serve` - Same as start
- `npm run dev:watch` - Development mode with auto-reload
- `npm run dev` - Build CSS and JS once
- `npm run build` - Build production versions
- `npm run dev:css` - Build CSS only
- `npm run dev:js` - Build JS only

## File Structure

```
aronnax-styles/
├── css/                 # Source CSS files
│   ├── main.css        # Main entry point
│   ├── components/     # Component styles
│   ├── layout/         # Layout utilities
│   ├── tokens/         # Design tokens
│   └── utilities/      # Utility classes
├── js/                 # Source JavaScript
│   └── main.js         # Main JS file
├── dist/               # Built files
│   ├── aronnax-styles.css
│   ├── aronnax-styles.js
│   ├── aronnax-styles.min.css
│   └── aronnax-styles.min.js
├── index.html          # Demo page
└── package.json        # Dependencies and scripts
```

## Development Workflow

1. **Make changes** to CSS files in `css/` directory
2. **Make changes** to JS files in `js/` directory
3. **View changes** in browser at http://localhost:3000
4. **Files auto-rebuild** when using `npm run dev:watch`

## Browser Support

The development server works in all modern browsers. The CSS and JS are built with:
- PostCSS with autoprefixer for CSS
- esbuild for JavaScript bundling
- Modern browser support via browserslist config
