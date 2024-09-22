# ESLint config

This is sharable ESLint config which we use across of all our repositories. It is amazing.

### Usage

eslint.config.mjs

```js
import typescriptRules from "./presets/tsx.mjs";

export default [
  ...typescriptRules,
];
```
