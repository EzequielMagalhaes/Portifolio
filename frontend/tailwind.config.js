/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'red-glow': '0 0 10px 2px rgba(239, 68, 68, 0.8)', // Vermelho
        'yellow-glow': '0 0 10px 2px rgba(234, 179, 8, 0.8)', // Amarelo
        'green-glow': '0 0 10px 2px rgba(34, 197, 94, 0.8)', // Verde
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ['responsive'],
      transitionProperty: {
        'width': 'width',
      },
      spacing: {
        '85': '85%'
      }
    }
  },
  safelist: [
    'w-[85vw]',
    'max-w-[300px]',
    '-translate-x-1/2'
  ]
}
