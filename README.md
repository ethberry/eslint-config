# ESLint config

This is sharable ESLint config which we use across of all our repositories. It is amazing.

### Requirements

- **ESLint 10** and **Node.js** [supported by ESLint 10](https://eslint.org/docs/latest/use/migrate-to-10.0.0#nodejs--v2019-v21-v23-are-no-longer-supported) (this package declares `engines.node` `>=22.13.0`).
- **Flat config only** — `.eslintrc` / `ESLINT_USE_FLAT_CONFIG=false` are not supported in ESLint 10.

### Prettier at lint time

Presets include [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) (`prettier/prettier` as `error`) plus [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) so formatting rules do not fight Prettier. Run **`eslint --fix`** (this repo’s `npm run lint`) to apply Prettier’s output. Add a [Prettier config](https://prettier.io/docs/configuration) in consuming projects when you need options beyond defaults.

### ESLint 10 notes for consumers

- **Config lookup** starts from each **linted file’s directory** and walks up (not from the current working directory). In monorepos, put an `eslint.config.*` in each package or pass `--config` explicitly when needed.
- **`eslint:recommended`** enables [`no-unassigned-vars`](https://eslint.org/docs/latest/rules/no-unassigned-vars), [`no-useless-assignment`](https://eslint.org/docs/latest/rules/no-useless-assignment), and [`preserve-caught-error`](https://eslint.org/docs/latest/rules/preserve-caught-error). Fix new findings or turn rules off in your overlay config if you need stricter control.
- Remove **`/* eslint-env … */`** comments; ESLint 10 reports them as errors. Use `languageOptions.globals` (e.g. from the [`globals`](https://www.npmjs.com/package/globals) package) instead.
- **Type-checked TypeScript** (`recommendedTypeChecked` in this preset): merge a block that sets parser options, for example:

```js
import {defineConfig} from "eslint/config";
import typescriptRules from "./presets/ts.mjs"; // or your path to this preset

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

eslint.config.mjs

```js
import {defineConfig} from "eslint/config";
import typescriptRules from "./presets/tsx.mjs";

export default defineConfig([...typescriptRules]);
```
