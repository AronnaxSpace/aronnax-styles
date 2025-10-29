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
 * SPA Routing for sections
 */
function initializeRouter() {
  const sections = ['welcome', 'buttons', 'forms', 'cards', 'lists', 'badges', 'loader', 'table', 'pagination', 'sidebar_static'];

  function showSection(sectionName) {
    // Get all section elements
    const allSections = sections.map(s => document.getElementById(s)).filter(Boolean);

    // Hide all sections first
    allSections.forEach(section => {
      if (section) section.style.display = 'none';
    });

    if (sectionName === 'all' || !sectionName) {
      // Show only welcome section on home page
      const welcomeSection = document.getElementById('welcome');
      if (welcomeSection) {
        welcomeSection.style.display = 'block';
      }
    } else {
      // Show only the requested section
      const targetSection = document.getElementById(sectionName);
      if (targetSection) {
        targetSection.style.display = 'block';
        // Scroll to top
        window.scrollTo(0, 0);
      }
    }

    // Update active link in sidebar
    updateActiveLink(sectionName);

    // Close sidebar on mobile after navigation
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle && window.innerWidth <= 768) {
      sidebarToggle.checked = false;
    }
  }

  function updateActiveLink(sectionName) {
    // Remove active class from all links
    document.querySelectorAll('.sidebar-nav-link').forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to current link
    const activeLink = document.querySelector(`.sidebar-nav-link[data-section="${sectionName || 'all'}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  function handleRouteChange() {
    const hash = window.location.hash.slice(1); // Remove the #

    showSection(hash || 'all');
  }

  // Listen for hash changes
  window.addEventListener('hashchange', handleRouteChange);

  // Handle initial route
  handleRouteChange();
}

/**
 * Initialize both mode and router when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  initializeMode();
  initializeRouter();
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
  initializeMode,
  // Router functions
  initializeRouter
};
