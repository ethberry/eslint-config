# ESLint config

This is sharable ESLint config which we use across of all our repositories. It is amazing.

### TypeScript

.eslintrc
```json
{
  "extends": [
    "@gemunion/eslint-config/presets/ts",
    "@gemunion/eslint-config/rules/jest"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "root": true
}
```

### JavaScript (ESNext+Babel)

```json
{
  "extends": [
    "@gemunion/eslint-config/presets/js"
  ],
  "parserOptions": {
    "babelOptions": {
      "configFile": "./.babelrc"
    }
  },
  "root": true
}
```