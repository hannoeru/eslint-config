# ESlint Config

My ESLint config preset

## Packages

- eslint-config: default config
- eslint-plugin:
  - esnext: basic config
  - vue: vue support
  - react: react support
  - next: default config + next eslint config
  - json: parse json + package.json sort
  - yml: parse yml
  - typescript: typescript support
  - typescript-type-checking: typescript type checking

## Development

```bash
# install pnpm
npm i -g pnpm

# install deps
pnpm i

# run release script
pnpm release

# lint
pnpm lint
pnpm lint:fix
```

## License

MIT License © 2021 [hannoeru](https://github.com/hannoeru)
