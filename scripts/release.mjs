import { execSync } from 'child_process'
import { $ } from 'zx'

execSync('pnpm dlx bumpp package.json packages/*/package.json --no-commit --no-push', { stdio: 'inherit' })

await $`pnpm changelog`

await $`pnpm -r publish --access public --no-git-checks`

const { version } = await fs.readJSON('package.json')
await $`git add .`
await $`git commit -m "chore: release v${version}"`
await $`git push`
await $`git push origin v${version}`
