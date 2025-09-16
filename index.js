import {
  // Mode functions
  toggleMode,
  initializeMode
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
  
  // Legacy flat API for backward compatibility
  toggleMode,
  initializeMode
};

// Also export individual functions for tree-shaking
export {
  toggleMode,
  initializeMode
};
