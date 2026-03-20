import { defineConfig, globalIgnores } from "eslint/config";
import javascriptRules from "./presets/js.mjs";

export default defineConfig([
  globalIgnores([
    "**/node_modules/**",
    "dist/**",
    // JS-only preset here; add `parserOptions.projectService` + TS preset to lint `.ts` fixtures
    "test.ts",
  ]),
  ...javascriptRules,
]);
