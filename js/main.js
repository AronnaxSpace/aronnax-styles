// Aronnax Styles - Mode Toggle Functionality (Dark/Light Mode)
console.log("Aronnax Styles loaded");

// Mode Toggle Function
function toggleMode() {
  const currentMode = document.documentElement.getAttribute('data-mode');
  const newMode = currentMode === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-mode', newMode);
  localStorage.setItem('mode', newMode);
  
  // Update toggle button text if it exists
  const toggleBtn = document.querySelector('.mode-toggle');
  if (toggleBtn) {
    const icon = toggleBtn.querySelector('i');
    const text = toggleBtn.querySelector('.toggle-text');
    
    if (newMode === 'dark') {
      if (icon) icon.className = 'fas fa-sun';
      if (text) text.textContent = 'Light Mode';
    } else {
      if (icon) icon.className = 'fas fa-moon';
      if (text) text.textContent = 'Dark Mode';
    }
  }
}

// Initialize mode on page load
function initializeMode() {
  // Prevent transition flash
  document.body.classList.add('no-transition');
  
  // Check for saved mode preference or default to system preference
  const savedMode = localStorage.getItem('mode');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const mode = savedMode || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-mode', mode);
  
  // Update toggle button if it exists
  const toggleBtn = document.querySelector('.mode-toggle');
  if (toggleBtn) {
    const icon = toggleBtn.querySelector('i');
    const text = toggleBtn.querySelector('.toggle-text');
    
    if (mode === 'dark') {
      if (icon) icon.className = 'fas fa-sun';
      if (text) text.textContent = 'Light Mode';
    } else {
      if (icon) icon.className = 'fas fa-moon';
      if (text) text.textContent = 'Dark Mode';
    }
  }
  
  // Re-enable transitions after a brief delay
  setTimeout(() => {
    document.body.classList.remove('no-transition');
  }, 100);
}

// Listen for system mode changes
window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
  if (!localStorage.getItem('mode')) {
    document.documentElement.setAttribute('data-mode', e.matches ? 'dark' : 'light');
  }
});

// Initialize mode when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeMode);

// Make toggleMode globally available
window.toggleMode = toggleMode;
