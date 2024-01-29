import type { Config } from 'tailwindcss'

export const animationsProgressBar: Config['theme'] = {
  keyframes: {
    progressBarAnimated: {
      from: { 'background-position-x': '1rem' },
    },
  },
  animation: {
    progressBarAnimated: 'progressBarAnimated 1s linear infinite',
  },
}
