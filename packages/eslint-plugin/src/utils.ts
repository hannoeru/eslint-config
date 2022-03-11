import type { TSESLint } from '@typescript-eslint/utils'

export function defineConfig(config: TSESLint.Linter.Config): TSESLint.Linter.Config {
  return config
}

export function defineRules(rules: TSESLint.Linter.Config['rules']): TSESLint.Linter.Config['rules'] {
  return rules
}

export function definePlugin(plugin: TSESLint.Linter.Plugin): TSESLint.Linter.Plugin {
  return plugin
}
