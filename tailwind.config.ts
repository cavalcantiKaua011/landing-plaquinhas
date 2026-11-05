import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0A0B0F', 900: '#0A0B0F', 800: '#111319', 700: '#181B23', 600: '#23262F' },
        paper: '#F4F3EF',
        mute: '#9AA0AC',
        brand: { blue: '#75A7FF', coral: '#FF7A52', green: '#25D366' },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: { page: '1160px' },
      keyframes: {
        pulseRing: { '0%': { transform: 'scale(.6)', opacity: '.8' }, '100%': { transform: 'scale(1.8)', opacity: '0' } },
      },
      animation: { pulseRing: 'pulseRing 1.6s ease-out infinite' },
    },
  },
  plugins: [],
};

export default config;
