/**
 * Template data for Pug templates
 */

module.exports = {
  // Button configurations
  buttons: {
    primary: [
      { icon: 'fas fa-arrow-right', text: 'Primary' },
      { icon: 'fas fa-check', text: 'Success', class: 'btn-success' },
      { icon: 'fas fa-times', text: 'Danger', class: 'btn-danger' },
      { icon: 'fas fa-exclamation-triangle', text: 'Warning', class: 'btn-warning' },
      { icon: 'fas fa-info-circle', text: 'Info', class: 'btn-info' },
      { icon: 'fas fa-cog', text: 'Secondary', class: 'btn-secondary' },
      { icon: 'fas fa-ban', text: 'Disabled', disabled: true }
    ],
    small: [
      { icon: 'fas fa-arrow-right', text: 'Primary' },
      { icon: 'fas fa-check', text: 'Success', class: 'btn-success' },
      { icon: 'fas fa-times', text: 'Danger', class: 'btn-danger' },
      { icon: 'fas fa-exclamation-triangle', text: 'Warning', class: 'btn-warning' },
      { icon: 'fas fa-info-circle', text: 'Info', class: 'btn-info' },
      { icon: 'fas fa-cog', text: 'Secondary', class: 'btn-secondary' },
      { icon: 'fas fa-ban', text: 'Disabled', disabled: true }
    ],
    outline: [
      { icon: 'fas fa-arrow-right', text: 'Primary Outline' },
      { icon: 'fas fa-check', text: 'Success Outline', class: 'btn-success' },
      { icon: 'fas fa-times', text: 'Danger Outline', class: 'btn-danger' },
      { icon: 'fas fa-exclamation-triangle', text: 'Warning Outline', class: 'btn-warning' },
      { icon: 'fas fa-info-circle', text: 'Info Outline', class: 'btn-info' },
      { icon: 'fas fa-cog', text: 'Secondary Outline', class: 'btn-secondary' }
    ],
    special: [
      { type: 'modal', icon: 'fas fa-info-circle', text: 'Open Modal' },
      { type: 'sidebar', icon: 'fas fa-bars', text: 'Open Sidebar' },
      { type: 'mode-toggle', icon: 'fas fa-moon', text: 'Dark Mode' }
    ]
  },

  // Form options
  formOptions: {
    subjects: [
      { value: 'general', text: 'General Inquiry' },
      { value: 'support', text: 'Technical Support' },
      { value: 'billing', text: 'Billing Question' },
      { value: 'feedback', text: 'Feedback' }
    ]
  },

  // Form inputs
  formInputs: {
    sizes: [
      { id: 'small-input', label: 'Small Input', class: 'form-input-sm', placeholder: 'Small size' },
      { id: 'normal-input', label: 'Normal Input', placeholder: 'Normal size' },
      { id: 'large-input', label: 'Large Input', class: 'form-input-lg', placeholder: 'Large size' }
    ],
    checkboxes: [
      { text: 'Email notifications', checked: true },
      { text: 'SMS notifications', checked: false },
      { text: 'Newsletter subscription', checked: true }
    ],
    radios: [
      { value: 'personal', text: 'Personal', checked: true },
      { value: 'business', text: 'Business', checked: false },
      { value: 'enterprise', text: 'Enterprise', checked: false }
    ]
  },

  // Cards data
  cards: [
    {
      title: 'Understanding CSS Grid',
      description: 'Learn how to use CSS Grid to build responsive layouts easily and intuitively.',
      class: 'card-post'
    },
    {
      title: 'Design Conference',
      description: 'Join 1000+ creatives for talks, workshops, and networking.',
      meta: 'March 18, 2025 · San Francisco, CA',
      class: 'card-event'
    },
    {
      title: 'Minimalist Lamp',
      description: '',
      price: '$49.99',
      image: 'images/nautilus.webp',
      imageAlt: 'Product Image',
      class: 'card-shop-item'
    }
  ],

  // Sidebar items
  sidebarItems: [
    { href: '#', text: 'Dashboard' },
    { href: '#', text: 'Profile' },
    { href: '#', text: 'Settings' }
  ]
};
