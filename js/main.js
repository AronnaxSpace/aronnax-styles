/**
 * Aronnax Styles - Mode Toggle Functionality (Dark/Light Mode)
 */
console.log("Aronnax Styles loaded");

/**
 * Mode Toggle Function (internal implementation)
 */
function _toggleMode() {
  const currentMode = document.documentElement.getAttribute('data-mode');
  const newMode = currentMode === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-mode', newMode);
  localStorage.setItem('mode', newMode);

  /** Update toggle button text if it exists */
  const toggleBtn = document.querySelector('#mode-toggle');
  if (toggleBtn) {
    const icon = toggleBtn.querySelector('i');
    const text = toggleBtn.querySelector('#mode-toggle-text');

    if (newMode === 'dark') {
      if (icon) icon.className = 'fas fa-sun';
      if (text) text.textContent = 'Light Mode';
    } else {
      if (icon) icon.className = 'fas fa-moon';
      if (text) text.textContent = 'Dark Mode';
    }
  }
}

/**
 * Mode Toggle Function (public API with display update)
 */
function toggleMode() {
  _toggleMode();
}

/**
 * Initialize mode on page load
 */
function initializeMode() {
  /** Prevent transition flash */
  document.body.classList.add('no-transition');

  /** Check for saved mode preference or default to system preference */
  const savedMode = localStorage.getItem('mode');
  // const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // const mode = savedMode || (systemPrefersDark ? 'dark' : 'light');
  const mode = savedMode || 'light';
  document.documentElement.setAttribute('data-mode', mode);

  /** Update toggle button if it exists */
  const toggleBtn = document.querySelector('#mode-toggle');
  if (toggleBtn) {
    const icon = toggleBtn.querySelector('i');
    const text = toggleBtn.querySelector('#mode-toggle-text');
    
    if (mode === 'dark') {
      if (icon) icon.className = 'fas fa-sun';
      if (text) text.textContent = 'Light Mode';
    } else {
      if (icon) icon.className = 'fas fa-moon';
      if (text) text.textContent = 'Dark Mode';
    }
  }

  /** Re-enable transitions after a brief delay */
  setTimeout(() => {
    document.body.classList.remove('no-transition');
  }, 100);
}

/**
 * Listen for system mode changes
 */
window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
  if (!localStorage.getItem('mode')) {
    document.documentElement.setAttribute('data-mode', e.matches ? 'dark' : 'light');
  }
});

/**
 * Initialize both mode when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  initializeMode();
});

/**
 * Make functions globally available for HTML onclick handlers
 */
if (typeof window !== 'undefined') {
  window.toggleMode = toggleMode;
}

/**
 * Export functions for module usage
 * Organized by category for better maintainability
 */
export {
  // Mode functions
  toggleMode,
  initializeMode
};
