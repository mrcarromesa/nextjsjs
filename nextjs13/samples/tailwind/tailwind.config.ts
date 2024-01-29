import type { Config } from 'tailwindcss'
import alertStylesPlugin from './tailwind/plugins/alertStylesPlugin'
import { themeColors } from './tailwind/plugins/defaultColorsStylesPlugin'
import { animations } from './tailwind/animations'
import { animationsProgressBar } from './tailwind/animations/progressBarStripedAnimation'
import { animationsPlaceholder } from './tailwind/animations/placeholderAnimation'

import buttonStylesPlugin from './tailwind/plugins/buttonStylesPlugin'
import badgeStylesPlugin from './tailwind/plugins/badgeStylesPlugin'
import bgStripedPlugin from './tailwind/plugins/bgStripedPlugin'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...themeColors?.colors,
        // 'alert-primary': {
        //   'color': 'rgb(5, 44, 101)',
        //   'background': 'rgb(207, 226, 255)',
        //   'border-color': 'rgb(158, 197, 254)'
        // },
        // 'alert-secondary': {
        //   'color': 'rgb(43, 47, 50)',
        //   'background': 'rgb(226, 227, 229)',
        //   'border-color': 'rgb(196, 200, 203)'
        // },
      },
      gridTemplateAreas: {
        docPagesDefault: ['intro rightSide', 'content rightSide'],
        docPagesXS: ['intro', 'rightSide', 'content'],
      },
      keyframes: {
        ...animations?.keyframes,
        ...animationsProgressBar?.keyframes,
        ...animationsPlaceholder?.keyframes,
      },
      animation: {
        ...animations?.animation,
        ...animationsProgressBar?.animation,
        ...animationsPlaceholder?.animation,
      },
    },
  },
  plugins: [
    alertStylesPlugin,
    buttonStylesPlugin,
    badgeStylesPlugin,
    bgStripedPlugin,
    require('@savvywombat/tailwindcss-grid-areas'),
    // ({ addUtilities, theme }: PluginAPI) => {
    //   addUtilities({
    //     '.alert-primary': {
    //       'background': theme('colors.alert-primary.background'),
    //       'color': theme('colors.alert-primary.color'),
    //       'border-color': theme('colors.alert-primary.border-color'),
    //       'border-width': "1px"
    //     },
    //     '.alert-secondary': {
    //       'background': theme('colors.alert-secondary.background'),
    //       'color': theme('colors.alert-secondary.color'),
    //       'border-color': theme('colors.alert-secondary.border-color'),
    //       'border-width': "1px"
    //     }
    //   })
    // }
  ],
  variants: {
    gridTemplateAreas: ['responsive'],
  },
}
export default config
