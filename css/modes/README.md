# Mode System

The mode system handles light and dark color variations for Aronnax Styles.

## Structure

```
css/modes/
├── main.css    # Entry point - imports light and dark modes
├── light.css   # Light mode color definitions (default)
└── dark.css    # Dark mode color definitions
```

## How It Works

### Light Mode (Default)
- Defined in `light.css`
- Applied by default through `:root` selector
- Contains all base color definitions

### Dark Mode
- Defined in `dark.css`
- Applied in two ways:
  - **System preference**: `@media (prefers-color-scheme: dark)`
  - **Manual toggle**: `[data-mode="dark"]` attribute on `<html>` element

## Usage

### Automatic (System Preference)
The dark mode automatically activates when the user's system is set to dark mode.

### Manual Toggle
Use JavaScript to toggle modes:

```javascript
// Toggle between light and dark
toggleMode();

// Set specific mode
document.documentElement.setAttribute('data-mode', 'dark');
document.documentElement.setAttribute('data-mode', 'light');
```

## Benefits

1. **Clean Separation**: Light and dark mode colors are in separate files
2. **Easy Maintenance**: Modify mode-specific colors without affecting other modes
3. **Extensibility**: Easy to add new modes (e.g., high contrast, sepia)
4. **Flexibility**: Supports both automatic and manual mode switching
5. **Performance**: No duplicated color definitions

## Adding New Modes

To add a new mode (e.g., high contrast):

1. Create `css/modes/high-contrast.css`
2. Define colors using `[data-mode="high-contrast"]` selector
3. Import in `css/modes/main.css`
4. Update JavaScript to support the new mode
