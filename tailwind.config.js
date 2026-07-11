/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '480px' },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          soft: 'var(--primary-soft)',
          deep: 'var(--primary-deep)',
        },
        accent: 'var(--accent)',
        surface: {
          DEFAULT: 'var(--surface)',
          hover: 'var(--surface-hover)',
        },
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
        },
        text: {
          heading: 'var(--text-heading)',
          body: 'var(--text-body)',
          subtle: 'var(--text-subtle)',
          muted: 'var(--text-muted)',
        },
        border: {
          DEFAULT: 'var(--border)',
          subtle: 'var(--border-subtle)',
        },
        tag: {
          bg: 'var(--tag-bg)',
          text: 'var(--tag-text)',
        },
        icon: 'var(--icon-color)'
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-primary': 'var(--gradient-primary)',
      },
      boxShadow: {
        'soft': '0 4px 16px var(--shadow-color)',
        'strong': '0 8px 24px var(--shadow-strong)',
        'photo': '0 20px 50px var(--shadow-strong)',
      }
    },
  },
  plugins: [],
}
