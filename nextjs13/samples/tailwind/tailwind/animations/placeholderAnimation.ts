import type { Config } from 'tailwindcss'

export const animationsPlaceholder: Config['theme'] = {
  keyframes: {
    placeholderAnimation: {
      '50%': { opacity: '0.2' },
    },
  },
  animation: {
    placeholderAnimation: 'placeholderAnimation 2s ease-in-out infinite',
  },
}
