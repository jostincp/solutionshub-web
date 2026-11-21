/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0B',
        'bg-elev': '#111113',
        surface: '#17171A',
        line: 'rgba(232, 236, 240, 0.10)',
        'line-strong': 'rgba(232, 236, 240, 0.22)',
        fg: '#E8ECF0',
        'fg-muted': '#8E969F',
        'fg-dim': '#5C636B',
        accent: '#38BDF8',
        'accent-dim': '#0284C7',
        'light-bg': '#F2F2EF',
        'light-fg': '#0A0A0B',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
