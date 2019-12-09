import typescriptRules from "../rules/typescript";
import commonRules from "../rules/common";
import importRules from "../rules/import";
import importTsRules from "../rules/import-ts";
import prettierRules from "../rules/prettier";
import prettierTsRules from "../rules/prettier-ts";
import overrideRules from "../rules/override";

export default {
  extends: [
    typescriptRules,
    commonRules,
    importRules,
    importTsRules,
    prettierRules,
    prettierTsRules,
    overrideRules,
  ],
  rules: {
    "no-useless-constructor": "off",
  },
};
