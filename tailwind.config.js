/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--primary-50, 245 243 255) / <alpha-value>)',
          100: 'rgb(var(--primary-100, 237 233 254) / <alpha-value>)',
          200: 'rgb(var(--primary-200, 221 214 254) / <alpha-value>)',
          300: 'rgb(var(--primary-300, 196 181 253) / <alpha-value>)',
          400: 'rgb(var(--primary-400, 167 139 250) / <alpha-value>)',
          500: 'rgb(var(--primary-500, 139 92 246) / <alpha-value>)',
          600: 'rgb(var(--primary-600, 124 58 237) / <alpha-value>)',
          700: 'rgb(var(--primary-700, 109 40 217) / <alpha-value>)',
          800: 'rgb(var(--primary-800, 91 33 182) / <alpha-value>)',
          900: 'rgb(var(--primary-900, 76 29 149) / <alpha-value>)',
          950: 'rgb(var(--primary-950, 46 16 101) / <alpha-value>)',
        },
        secondary: {
          50: 'rgb(var(--secondary-50, 240 253 250) / <alpha-value>)',
          100: 'rgb(var(--secondary-100, 204 251 241) / <alpha-value>)',
          200: 'rgb(var(--secondary-200, 153 246 228) / <alpha-value>)',
          300: 'rgb(var(--secondary-300, 94 234 212) / <alpha-value>)',
          400: 'rgb(var(--secondary-400, 45 212 191) / <alpha-value>)',
          500: 'rgb(var(--secondary-500, 20 184 166) / <alpha-value>)',
          600: 'rgb(var(--secondary-600, 13 148 136) / <alpha-value>)',
          700: 'rgb(var(--secondary-700, 15 118 110) / <alpha-value>)',
          800: 'rgb(var(--secondary-800, 17 94 89) / <alpha-value>)',
          900: 'rgb(var(--secondary-900, 19 78 74) / <alpha-value>)',
          950: 'rgb(var(--secondary-950, 4 47 46) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.700'),
            a: {
              color: 'rgb(var(--primary-600, 124 58 237))',
              '&:hover': {
                color: 'rgb(var(--primary-700, 109 40 217))',
              },
            },
            h1: {
              color: theme('colors.gray.900'),
            },
            h2: {
              color: theme('colors.gray.900'),
            },
            h3: {
              color: theme('colors.gray.900'),
            },
            h4: {
              color: theme('colors.gray.900'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
