# ESLint config

This is sharable ESLint config which we use across of all our repositories. It is amazing.

### Requirements

- **ESLint 9** (flat config) and **Node.js** `>=22` (see `engines` in `package.json`).
- **Flat config only** — use `eslint.config.mjs` (or `.js` / `.cjs`). Legacy `.eslintrc` is not supported by this preset layout.

### Prettier at lint time

Presets include [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) via its **recommended** preset (runs `prettier/prettier` as an ESLint rule) together with [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) so other style rules do not fight Prettier. Run **`eslint --fix`** (this repo’s `npm run lint`) to apply Prettier’s output. Add a [Prettier config](https://prettier.io/docs/configuration) in consuming projects when you need options beyond defaults.

Import and plugin order in TS presets puts **`import` rules before `prettier`**, so formatting wins on overlaps.

### Type-checked TypeScript

These presets use `typescript-eslint` **type-checked** configs. Merge a block that sets parser options for your project root, for example:

```js
import {defineConfig} from "eslint/config";
import typescriptRules from "./presets/ts.mjs";

export default defineConfig([
  ...typescriptRules,
  {
    files: ["**/*.{ts,mts,tsx,mtsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

### Usage

`eslint.config.mjs`

```js
import {defineConfig} from "eslint/config";
import typescriptRules from "./presets/tsx.mjs";

export default defineConfig([...typescriptRules]);
```
