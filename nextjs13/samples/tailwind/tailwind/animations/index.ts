import type { Config } from 'tailwindcss'

export const animations: Config['theme'] = {
  keyframes: {
    ariseFromTopToBottom: {
      from: { transform: 'translateY(-100%)', opacity: '0' },
      to: { transform: 'none', opacity: '1' },
    },
    hideFromBottomToTop: {
      from: { transform: 'none', opacity: '1' },
      to: { transform: 'translateY(-100%)', opacity: '0' },
    },
    'ariseFromTopToBottom-centered': {
      from: { transform: 'translateY(-100%)', opacity: '0' },
      to: { transform: 'translateY(-50%)', opacity: '1' },
    },
    'hideFromBottomToTop-centered': {
      from: { transform: 'translateY(-50%)', opacity: '1' },
      to: { transform: 'translateY(-100%)', opacity: '0' },
    },
    ariseFromLeftToRight: {
      from: { transform: 'translateX(-100%)', opacity: '0' },
      to: { transform: 'none', opacity: '1' },
    },
    hideFromRightToLeft: {
      from: { transform: 'none', opacity: '1' },
      to: { transform: 'translateX(-100%)', opacity: '0' },
    },
    ariseFromRightToLeft: {
      from: { transform: 'translateX(100%)', opacity: '0' },
      to: { transform: 'none', opacity: '1' },
    },
    hideFromLeftToRight: {
      from: { transform: 'none', opacity: '1' },
      to: { transform: 'translateX(100%)', opacity: '0' },
    },
    ariseFromBottomToTop: {
      from: { transform: 'translateY(100%)', opacity: '0' },
      to: { transform: 'none', opacity: '1' },
    },
    hideFromTopToBottom: {
      from: { transform: 'none', opacity: '1' },
      to: { transform: 'translateY(100%)', opacity: '0' },
    },
  },
  animation: {
    ariseFromTopToBottom: 'ariseFromTopToBottom 0.25s ease-out',
    hideFromBottomToTop:
      'hideFromBottomToTop 0.25s ease-out 0s normal forwards',

    'ariseFromTopToBottom-centered':
      'ariseFromTopToBottom-centered 0.25s ease-out',
    'hideFromBottomToTop-centered':
      'hideFromBottomToTop-centered 0.25s ease-out 0s normal forwards',
    ariseFromLeftToRight: 'ariseFromLeftToRight 0.25s ease-out',
    hideFromRightToLeft:
      'hideFromRightToLeft 0.25s ease-out 0s normal forwards',
    ariseFromRightToLeft: 'ariseFromRightToLeft 0.25s ease-out',
    hideFromLeftToRight:
      'hideFromLeftToRight 0.25s ease-out 0s normal forwards',
    ariseFromBottomToTop: 'ariseFromBottomToTop 0.25s ease-out',
    hideFromTopToBottom:
      'hideFromTopToBottom 0.25s ease-out 0s normal forwards',
  },
}
