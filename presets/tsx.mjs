import typescriptRules from "../rules/typescript.mjs";
import commonRules from "../rules/common.mjs";
import promiseRules from "../rules/promise.mjs";
import nodeRules from "../rules/node.mjs";
import reactRules from "../rules/react.mjs";
import prettierRules from "../rules/prettier.mjs";
import importRules from "../rules/import.mjs";

export default [
  ...commonRules,
  ...typescriptRules,
  ...promiseRules,
  ...nodeRules,
  ...reactRules,
  ...prettierRules,
  ...importRules,
];

