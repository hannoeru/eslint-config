import { execSync } from 'child_process'
import fs from 'fs-extra'
import { $ } from 'zx'

await $`pnpm changelog`

execSync('pnpm dlx bumpp package.json packages/*/package.json --tag --commit', { stdio: 'inherit' })

await $`pnpm -r publish --access public --no-git-checks`

const { version } = await fs.readJSON('package.json')

await $`git push`
await $`git push origin v${version}`
