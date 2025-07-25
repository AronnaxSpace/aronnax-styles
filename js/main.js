/**
 * Aronnax Styles - Mode Toggle Functionality (Dark/Light Mode)
 */
console.log("Aronnax Styles loaded");

/**
 * Mode Toggle Function
 */
function toggleMode() {
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
 * Initialize mode on page load
 */
function initializeMode() {
  /** Prevent transition flash */
  document.body.classList.add('no-transition');
  
  /** Check for saved mode preference or default to system preference */
  const savedMode = localStorage.getItem('mode');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const mode = savedMode || (systemPrefersDark ? 'dark' : 'light');
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

/** Available themes */
const availableThemes = ['minimal', 'modern', 'sharp'];

/**
 * Set specific theme
 */
function setTheme(themeName) {
  if (!availableThemes.includes(themeName)) {
    console.warn(`Theme "${themeName}" not available. Available themes:`, availableThemes);
    return;
  }
  
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('theme', themeName);
  
  console.log(`Theme changed to: ${themeName}`);
}

/**
 * Get current theme
 */
function getCurrentTheme() {
  return document.documentElement.getAttribute('data-theme') || 'minimal';
}

/**
 * Get available themes
 */
function getAvailableThemes() {
  return [...availableThemes];
}

/**
 * Initialize theme on page load
 */
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'minimal';
  setTheme(savedTheme);
}

/**
 * Combined appearance function (theme + mode)
 */
function setAppearance(theme, mode) {
  setTheme(theme);
  
  const currentMode = document.documentElement.getAttribute('data-mode');
  if (currentMode !== mode) {
    document.documentElement.setAttribute('data-mode', mode);
    localStorage.setItem('mode', mode);
  }
  
  console.log(`Appearance set to: ${theme} theme, ${mode} mode`);
}

/**
 * Update display of current theme and mode
 */
function updateCurrentDisplay() {
  const currentTheme = getCurrentTheme();
  const currentMode = document.documentElement.getAttribute('data-mode') || 'light';
  
  const themeDisplay = document.getElementById('current-theme');
  const modeDisplay = document.getElementById('current-mode');
  
  if (themeDisplay) {
    themeDisplay.textContent = currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1);
  }
  
  if (modeDisplay) {
    modeDisplay.textContent = currentMode.charAt(0).toUpperCase() + currentMode.slice(1);
  }
}

/**
 * Override setTheme to update display
 */
const originalSetTheme = setTheme;
setTheme = function(themeName) {
  originalSetTheme(themeName);
  updateCurrentDisplay();
}

/**
 * Override toggleMode to update display
 */
const originalToggleMode = toggleMode;
toggleMode = function() {
  originalToggleMode();
  updateCurrentDisplay();
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
 * Initialize both mode and theme when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  initializeMode();
  initializeTheme();
  updateCurrentDisplay();
});

/**
 * Make functions globally available
 */
window.toggleMode = toggleMode;
window.setTheme = setTheme;
window.getCurrentTheme = getCurrentTheme;
window.getAvailableThemes = getAvailableThemes;
window.setAppearance = setAppearance;
