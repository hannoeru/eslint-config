import { execSync } from 'child_process'
import { $ } from 'zx'

await $`pnpm changelog`

execSync('pnpm dlx bumpp package.json packages/*/package.json --tag --commit', { stdio: 'inherit' })

await $`pnpm -r publish --access public --no-git-checks`
