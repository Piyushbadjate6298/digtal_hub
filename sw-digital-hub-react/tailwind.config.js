/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        navy: '#0b1224',
        royal: '#2563eb',
        cyan: '#22d3ee',
        violet: '#7c3aed'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(34, 211, 238, 0.22)',
        panel: '0 18px 60px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'tech-grid': 'linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
