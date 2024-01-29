import plugin from 'tailwindcss/plugin'
import { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config'

export default plugin.withOptions(
  () =>
    ({ addUtilities, theme }: PluginAPI) => {
      const colors = {
        /** @light */
        '.badge-primary': {
          background: theme('colors.primary.background'),
          color: theme('colors.primary.color'),
        },
        '.badge-secondary': {
          background: theme('colors.secondary.background'),
          color: theme('colors.secondary.color'),
        },
        '.badge-success': {
          background: theme('colors.success.background'),
          color: theme('colors.success.color'),
        },
        '.badge-danger': {
          background: theme('colors.danger.background'),
          color: theme('colors.danger.color'),
        },
        '.badge-warning': {
          background: theme('colors.warning.background'),
          color: theme('colors.warning.color'),
        },
        '.badge-info': {
          background: theme('colors.info.background'),
          color: theme('colors.info.color'),
        },
        '.badge-light': {
          background: theme('colors.light.background'),
          color: theme('colors.light.color'),
        },
        '.badge-dark': {
          background: theme('colors.dark.background'),
          color: theme('colors.dark.color'),
        },

        /** @dark */
        '.dark .badge-primary': {
          background: theme('colors.primary-dark.background'),
          color: theme('colors.primary-dark.color'),
        },
        '.dark .badge-secondary': {
          background: theme('colors.secondary-dark.background'),
          color: theme('colors.secondary-dark.color'),
        },
        '.dark .badge-success': {
          background: theme('colors.success-dark.background'),
          color: theme('colors.success-dark.color'),
        },
        '.dark .badge-danger': {
          background: theme('colors.danger-dark.background'),
          color: theme('colors.danger-dark.color'),
        },
        '.dark .badge-warning': {
          background: theme('colors.warning-dark.background'),
          color: theme('colors.warning-dark.color'),
        },
        '.dark .badge-info': {
          background: theme('colors.info-dark.background'),
          color: theme('colors.info-dark.color'),
        },
        '.dark .badge-light': {
          background: theme('colors.light-dark.background'),
          color: theme('colors.light-dark.color'),
        },
        '.dark .badge-dark': {
          background: theme('colors.dark-dark.background'),
          color: theme('colors.dark-dark.color'),
        },
      } as CSSRuleObject

      addUtilities(colors)
    }
)
