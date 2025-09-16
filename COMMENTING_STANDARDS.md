# Aronnax Styles - Commenting Standards

This document outlines the unified commenting approach used throughout the Aronnax Styles project.

## Commenting Philosophy

All comments should be clear, concise, and helpful. They should explain **why** something is done, not just **what** is done. Comments should help maintainers understand the purpose and context of code.

## Unified Standards

### CSS Files

#### File Headers
All CSS files should start with a file header comment using JSDoc-style block comments:

```css
/**
 * Aronnax Styles: [Component/Module Name]
 * [Optional description if needed]
 */
```

**Examples:**
```css
/**
 * Aronnax Styles: Buttons
 */

/**
 * Aronnax Styles: Modal Component (pure CSS)
 */

/**
 * Aronnax Styles: Base CSS
 * Resets and globals
 */
```

#### Subsection Headers
For smaller subsections, use simple JSDoc-style comments:

```css
/** Subsection name */
```

**Examples:**
```css
/** Base Colors */
/** Text Colors */
/** Button Variants */
```

#### Inline Comments
For explaining specific rules or properties:

```css
/** Prevent transition flash during mode switching */
.no-transition * {
  transition: none !important;
}
```

### JavaScript Files

#### File Headers
All JavaScript files should start with a JSDoc-style block comment:

```javascript
/**
 * Aronnax Styles - [Functionality Description]
 */
```

**Example:**
```javascript
/**
 * Aronnax Styles - Mode Toggle Functionality (Dark/Light Mode)
 */
```

#### Function Headers
Each function should have a JSDoc-style comment describing its purpose:

```javascript
/**
 * Function description
 */
function functionName() {
  // Implementation
}
```

**Example:**
```javascript
/**
 * Initialize mode on page load
 */
function initializeMode() {
  // Implementation
}
```

#### Inline Comments
For explaining specific logic, use JSDoc-style single-line comments:

```javascript
/** Check for saved mode preference or default to system preference */
const savedMode = localStorage.getItem('mode');

/** Update toggle button text if it exists */
const toggleBtn = document.querySelector('#mode-toggle');
```

## Migration Notes

### Before (Mixed Styles)
```css
/* Aronnax Styles: Buttons */
/* Base Colors */
// Single line comment in JS
```

### After (Unified Style)
```css
/**
 * Aronnax Styles: Buttons
 */
/** Base Colors */
```

```javascript
/**
 * Function description
 */
/** Inline explanation */
```

## Benefits of This Approach

1. **Consistency**: All comments follow the same format across CSS and JavaScript
2. **JSDoc Compatibility**: JavaScript comments are already JSDoc-ready
3. **IDE Support**: Better syntax highlighting and folding in most editors
4. **Readability**: Clear hierarchy with different comment levels
5. **Maintainability**: Easy to identify and update comments
6. **Professional**: Modern, clean appearance that matches contemporary coding standards

## Tools and Editor Support

Most modern editors (VS Code, WebStorm, Sublime Text) provide excellent syntax highlighting and code folding for JSDoc-style comments, making the codebase more navigable and professional-looking.
