import {
  // Mode functions
  toggleMode,
  initializeMode,
  
  // Theme functions  
  setTheme,
  getCurrentTheme,
  getAvailableThemes,
  initializeTheme,
  
  // Combined functions
  setAppearance,
  updateCurrentDisplay
} from './js/main.js';

/**
 * Aronnax Styles API
 * Main export object containing all available functions
 */
export const Aronnax = {
  // Mode management
  mode: {
    toggle: toggleMode,
    initialize: initializeMode
  },
  
  // Theme management
  theme: {
    set: setTheme,
    get: getCurrentTheme,
    getAvailable: getAvailableThemes,
    initialize: initializeTheme
  },
  
  // Combined functionality
  setAppearance,
  updateDisplay: updateCurrentDisplay,
  
  // Legacy flat API for backward compatibility
  toggleMode,
  setTheme,
  getCurrentTheme,
  getAvailableThemes,
  initializeMode,
  initializeTheme,
  updateCurrentDisplay
};

// Also export individual functions for tree-shaking
export {
  toggleMode,
  setTheme,
  getCurrentTheme,
  getAvailableThemes,
  setAppearance,
  initializeMode,
  initializeTheme,
  updateCurrentDisplay
};
