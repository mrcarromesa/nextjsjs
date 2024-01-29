import plugin from 'tailwindcss/plugin'
import { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config'

export default plugin.withOptions(
  () =>
    ({ addUtilities, theme }: PluginAPI) => {
      const colors = {
        /** @light */
        '.button-primary': {
          background: theme('colors.primary.background'),
          color: theme('colors.primary.color'),
          'border-color': theme('colors.primary.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.primary-hover.background'),
            color: theme('colors.primary-hover.color'),
            'border-color': theme('colors.primary-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.primary-active.background'),
            color: theme('colors.primary-active.color'),
            'border-color': theme('colors.primary-active.border-color'),
          },
        },
        '.button-secondary': {
          background: theme('colors.secondary.background'),
          color: theme('colors.secondary.color'),
          'border-color': theme('colors.secondary.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.secondary-hover.background'),
            color: theme('colors.secondary-hover.color'),
            'border-color': theme('colors.secondary-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.secondary-active.background'),
            color: theme('colors.secondary-active.color'),
            'border-color': theme('colors.secondary-active.border-color'),
          },
        },
        '.button-success': {
          background: theme('colors.success.background'),
          color: theme('colors.success.color'),
          'border-color': theme('colors.success.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.success-hover.background'),
            color: theme('colors.success-hover.color'),
            'border-color': theme('colors.success-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.success-active.background'),
            color: theme('colors.success-active.color'),
            'border-color': theme('colors.success-active.border-color'),
          },
        },
        '.button-danger': {
          background: theme('colors.danger.background'),
          color: theme('colors.danger.color'),
          'border-color': theme('colors.danger.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.danger-hover.background'),
            color: theme('colors.danger-hover.color'),
            'border-color': theme('colors.danger-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.danger-active.background'),
            color: theme('colors.danger-active.color'),
            'border-color': theme('colors.danger-active.border-color'),
          },
        },
        '.button-warning': {
          background: theme('colors.warning.background'),
          color: theme('colors.warning.color'),
          'border-color': theme('colors.warning.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.warning-hover.background'),
            color: theme('colors.warning-hover.color'),
            'border-color': theme('colors.warning-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.warning-active.background'),
            color: theme('colors.warning-active.color'),
            'border-color': theme('colors.warning-active.border-color'),
          },
        },
        '.button-info': {
          background: theme('colors.info.background'),
          color: theme('colors.info.color'),
          'border-color': theme('colors.info.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.info-hover.background'),
            color: theme('colors.info-hover.color'),
            'border-color': theme('colors.info-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.info-active.background'),
            color: theme('colors.info-active.color'),
            'border-color': theme('colors.info-active.border-color'),
          },
        },
        '.button-light': {
          background: theme('colors.light.background'),
          color: theme('colors.light.color'),
          'border-color': theme('colors.light.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.light-hover.background'),
            color: theme('colors.light-hover.color'),
            'border-color': theme('colors.light-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.light-active.background'),
            color: theme('colors.light-active.color'),
            'border-color': theme('colors.light-active.border-color'),
          },
        },
        '.button-dark': {
          background: theme('colors.dark.background'),
          color: theme('colors.dark.color'),
          'border-color': theme('colors.dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.dark-hover.background'),
            color: theme('colors.dark-hover.color'),
            'border-color': theme('colors.dark-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.dark-active.background'),
            color: theme('colors.dark-active.color'),
            'border-color': theme('colors.dark-active.border-color'),
          },
        },

        /** @lightOutline */
        '.button-primary-outline': {
          background: 'transparent',
          color: theme('colors.primary.border-color'),
          'border-color': theme('colors.primary.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.primary-hover.background'),
            color: theme('colors.primary-hover.color'),
            'border-color': theme('colors.primary-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.primary-active.background'),
            color: theme('colors.primary-active.color'),
            'border-color': theme('colors.primary-active.border-color'),
          },
        },
        '.button-secondary-outline': {
          background: 'transparent',
          color: theme('colors.secondary.border-color'),
          'border-color': theme('colors.secondary.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.secondary-hover.background'),
            color: theme('colors.secondary-hover.color'),
            'border-color': theme('colors.secondary-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.secondary-active.background'),
            color: theme('colors.secondary-active.color'),
            'border-color': theme('colors.secondary-active.border-color'),
          },
        },
        '.button-success-outline': {
          background: 'transparent',
          color: theme('colors.success.border-color'),
          'border-color': theme('colors.success.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.success-hover.background'),
            color: theme('colors.success-hover.color'),
            'border-color': theme('colors.success-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.success-active.background'),
            color: theme('colors.success-active.color'),
            'border-color': theme('colors.success-active.border-color'),
          },
        },
        '.button-danger-outline': {
          background: 'transparent',
          color: theme('colors.danger.border-color'),
          'border-color': theme('colors.danger.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.danger-hover.background'),
            color: theme('colors.danger-hover.color'),
            'border-color': theme('colors.danger-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.danger-active.background'),
            color: theme('colors.danger-active.color'),
            'border-color': theme('colors.danger-active.border-color'),
          },
        },
        '.button-warning-outline': {
          background: 'transparent',
          color: theme('colors.warning.border-color'),
          'border-color': theme('colors.warning.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.warning-hover.background'),
            color: theme('colors.warning-hover.color'),
            'border-color': theme('colors.warning-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.warning-active.background'),
            color: theme('colors.warning-active.color'),
            'border-color': theme('colors.warning-active.border-color'),
          },
        },
        '.button-info-outline': {
          background: 'transparent',
          color: theme('colors.info.border-color'),
          'border-color': theme('colors.info.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.info-hover.background'),
            color: theme('colors.info-hover.color'),
            'border-color': theme('colors.info-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.info-active.background'),
            color: theme('colors.info-active.color'),
            'border-color': theme('colors.info-active.border-color'),
          },
        },
        '.button-light-outline': {
          background: 'transparent',
          color: theme('colors.light.border-color'),
          'border-color': theme('colors.light.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.light-hover.background'),
            color: theme('colors.light-hover.color'),
            'border-color': theme('colors.light-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.light-active.background'),
            color: theme('colors.light-active.color'),
            'border-color': theme('colors.light-active.border-color'),
          },
        },
        '.button-dark-outline': {
          background: 'transparent',
          color: theme('colors.dark.border-color'),
          'border-color': theme('colors.dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.dark-hover.background'),
            color: theme('colors.dark-hover.color'),
            'border-color': theme('colors.dark-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.dark-active.background'),
            color: theme('colors.dark-active.color'),
            'border-color': theme('colors.dark-active.border-color'),
          },
        },

        /** @dark */
        '.dark .button-primary': {
          background: theme('colors.primary-dark.background'),
          color: theme('colors.primary-dark.color'),
          'border-color': theme('colors.primary-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.primary-dark-hover.background'),
            color: theme('colors.primary-dark-hover.color'),
            'border-color': theme('colors.primary-dark-hover.border-color'),
          },
        },
        '.dark .button-secondary': {
          background: theme('colors.secondary-dark.background'),
          color: theme('colors.secondary-dark.color'),
          'border-color': theme('colors.secondary-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.secondary-dark-hover.background'),
            color: theme('colors.secondary-dark-hover.color'),
            'border-color': theme('colors.secondary-dark-hover.border-color'),
          },
        },
        '.dark .button-success': {
          background: theme('colors.success-dark.background'),
          color: theme('colors.success-dark.color'),
          'border-color': theme('colors.success-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.success-dark-hover.background'),
            color: theme('colors.success-dark-hover.color'),
            'border-color': theme('colors.success-dark-hover.border-color'),
          },
        },
        '.dark .button-danger': {
          background: theme('colors.danger-dark.background'),
          color: theme('colors.danger-dark.color'),
          'border-color': theme('colors.danger-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.danger-dark-hover.background'),
            color: theme('colors.danger-dark-hover.color'),
            'border-color': theme('colors.danger-dark-hover.border-color'),
          },
        },
        '.dark .button-warning': {
          background: theme('colors.warning-dark.background'),
          color: theme('colors.warning-dark.color'),
          'border-color': theme('colors.warning-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.warning-dark-hover.background'),
            color: theme('colors.warning-dark-hover.color'),
            'border-color': theme('colors.warning-dark-hover.border-color'),
          },
        },
        '.dark .button-info': {
          background: theme('colors.info-dark.background'),
          color: theme('colors.info-dark.color'),
          'border-color': theme('colors.info-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.info-dark-hover.background'),
            color: theme('colors.info-dark-hover.color'),
            'border-color': theme('colors.info-dark-hover.border-color'),
          },
        },
        '.dark .button-light': {
          background: theme('colors.light-dark.background'),
          color: theme('colors.light-dark.color'),
          'border-color': theme('colors.light-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.light-dark-hover.background'),
            color: theme('colors.light-dark-hover.color'),
            'border-color': theme('colors.light-dark-hover.border-color'),
          },
        },
        '.dark .button-dark': {
          background: theme('colors.dark-dark.background'),
          color: theme('colors.dark-dark.color'),
          'border-color': theme('colors.dark-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.dark-dark-hover.background'),
            color: theme('colors.dark-dark-hover.color'),
            'border-color': theme('colors.dark-dark-hover.border-color'),
          },
        },

        /** @darkOutline */
        '.dark .button-primary-outline': {
          background: 'transparent',
          color: theme('colors.primary-dark.border-color'),
          'border-color': theme('colors.primary-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.primary-dark-hover.background'),
            color: theme('colors.primary-dark-hover.color'),
            'border-color': theme('colors.primary-dark-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.primary-active.background'),
            color: theme('colors.primary-active.color'),
            'border-color': theme('colors.primary-active.border-color'),
          },
        },
        '.dark .button-secondary-outline': {
          background: 'transparent',
          color: theme('colors.secondary-dark.border-color'),
          'border-color': theme('colors.secondary-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.secondary-dark-hover.background'),
            color: theme('colors.secondary-dark-hover.color'),
            'border-color': theme('colors.secondary-dark-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.secondary-active.background'),
            color: theme('colors.secondary-active.color'),
            'border-color': theme('colors.secondary-active.border-color'),
          },
        },
        '.dark .button-success-outline': {
          background: 'transparent',
          color: theme('colors.success-dark.border-color'),
          'border-color': theme('colors.success-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.success-dark-hover.background'),
            color: theme('colors.success-dark-hover.color'),
            'border-color': theme('colors.success-dark-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.success-active.background'),
            color: theme('colors.success-active.color'),
            'border-color': theme('colors.success-active.border-color'),
          },
        },
        '.dark .button-danger-outline': {
          background: 'transparent',
          color: theme('colors.danger-dark.border-color'),
          'border-color': theme('colors.danger-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.danger-dark-hover.background'),
            color: theme('colors.danger-dark-hover.color'),
            'border-color': theme('colors.danger-dark-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.danger-active.background'),
            color: theme('colors.danger-active.color'),
            'border-color': theme('colors.danger-active.border-color'),
          },
        },
        '.dark .button-warning-outline': {
          background: 'transparent',
          color: theme('colors.warning-dark.border-color'),
          'border-color': theme('colors.warning-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.warning-dark-hover.background'),
            color: theme('colors.warning-dark-hover.color'),
            'border-color': theme('colors.warning-dark-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.warning-active.background'),
            color: theme('colors.warning-active.color'),
            'border-color': theme('colors.warning-active.border-color'),
          },
        },
        '.dark .button-info-outline': {
          background: 'transparent',
          color: theme('colors.info-dark.border-color'),
          'border-color': theme('colors.info-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.info-dark-hover.background'),
            color: theme('colors.info-dark-hover.color'),
            'border-color': theme('colors.info-dark-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.info-active.background'),
            color: theme('colors.info-active.color'),
            'border-color': theme('colors.info-active.border-color'),
          },
        },
        '.dark .button-light-outline': {
          background: 'transparent',
          color: theme('colors.light-dark.border-color'),
          'border-color': theme('colors.light-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.light-dark-hover.background'),
            color: theme('colors.light-dark-hover.color'),
            'border-color': theme('colors.light-dark-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.light-active.background'),
            color: theme('colors.light-active.color'),
            'border-color': theme('colors.light-active.border-color'),
          },
        },
        '.dark .button-dark-outline': {
          background: 'transparent',
          color: theme('colors.dark-dark.border-color'),
          'border-color': theme('colors.dark-dark.border-color'),
          'border-width': '1px',

          '&:hover:not([disabled])': {
            background: theme('colors.dark-dark-hover.background'),
            color: theme('colors.dark-dark-hover.color'),
            'border-color': theme('colors.dark-dark-hover.border-color'),
          },

          '&.active, &:active:not([disabled])': {
            background: theme('colors.dark-active.background'),
            color: theme('colors.dark-active.color'),
            'border-color': theme('colors.dark-active.border-color'),
          },
        },
      } as CSSRuleObject

      addUtilities(colors)
    }
)
