import plugin from 'tailwindcss/plugin'
import { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config'

export default plugin.withOptions(() => ({ addUtilities }: PluginAPI) => {
  const bgs = {
    '.bg-striped': {
      'background-image':
        'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
      'background-size': '1rem 1rem',
    },
  } as CSSRuleObject

  addUtilities(bgs)
})
