import plugin from 'tailwindcss/plugin'
import { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config'

export default plugin.withOptions(
  () =>
    ({ addUtilities, theme }: PluginAPI) => {
      const colors = {
        /** @light */
        '.alert-primary': {
          background: theme('colors.primary-light.background'),
          color: theme('colors.primary-light.color'),
          'border-color': theme('colors.primary-light.border-color'),
          'border-width': '1px',
        },
        '.alert-secondary': {
          background: theme('colors.secondary-light.background'),
          color: theme('colors.secondary-light.color'),
          'border-color': theme('colors.secondary-light.border-color'),
          'border-width': '1px',
        },
        '.alert-success': {
          background: theme('colors.success-light.background'),
          color: theme('colors.success-light.color'),
          'border-color': theme('colors.success-light.border-color'),
          'border-width': '1px',
        },
        '.alert-danger': {
          background: theme('colors.danger-light.background'),
          color: theme('colors.danger-light.color'),
          'border-color': theme('colors.danger-light.border-color'),
          'border-width': '1px',
        },
        '.alert-warning': {
          background: theme('colors.warning-light.background'),
          color: theme('colors.warning-light.color'),
          'border-color': theme('colors.warning-light.border-color'),
          'border-width': '1px',
        },
        '.alert-info': {
          background: theme('colors.info-light.background'),
          color: theme('colors.info-light.color'),
          'border-color': theme('colors.info-light.border-color'),
          'border-width': '1px',
        },
        '.alert-light': {
          background: theme('colors.light-light.background'),
          color: theme('colors.light-light.color'),
          'border-color': theme('colors.light-light.border-color'),
          'border-width': '1px',
        },
        '.alert-dark': {
          background: theme('colors.dark-light.background'),
          color: theme('colors.dark-light.color'),
          'border-color': theme('colors.dark-light.border-color'),
          'border-width': '1px',
        },

        /** @dark */
        '.dark .alert-primary': {
          background: theme('colors.primary-dark.background'),
          color: theme('colors.primary-dark.color'),
          'border-color': theme('colors.primary-dark.border-color'),
          'border-width': '1px',
        },
        '.dark .alert-secondary': {
          background: theme('colors.secondary-dark.background'),
          color: theme('colors.secondary-dark.color'),
          'border-color': theme('colors.secondary-dark.border-color'),
          'border-width': '1px',
        },
        '.dark .alert-success': {
          background: theme('colors.success-dark.background'),
          color: theme('colors.success-dark.color'),
          'border-color': theme('colors.success-dark.border-color'),
          'border-width': '1px',
        },
        '.dark .alert-danger': {
          background: theme('colors.danger-dark.background'),
          color: theme('colors.danger-dark.color'),
          'border-color': theme('colors.danger-dark.border-color'),
          'border-width': '1px',
        },
        '.dark .alert-warning': {
          background: theme('colors.warning-dark.background'),
          color: theme('colors.warning-dark.color'),
          'border-color': theme('colors.warning-dark.border-color'),
          'border-width': '1px',
        },
        '.dark .alert-info': {
          background: theme('colors.info-dark.background'),
          color: theme('colors.info-dark.color'),
          'border-color': theme('colors.info-dark.border-color'),
          'border-width': '1px',
        },
        '.dark .alert-light': {
          background: theme('colors.light-dark.background'),
          color: theme('colors.light-dark.color'),
          'border-color': theme('colors.light-dark.border-color'),
          'border-width': '1px',
        },
        '.dark .alert-dark': {
          background: theme('colors.dark-dark.background'),
          color: theme('colors.dark-dark.color'),
          'border-color': theme('colors.dark-dark.border-color'),
          'border-width': '1px',
        },
      } as CSSRuleObject

      addUtilities(colors)
    }
)
