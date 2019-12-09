import babelRules from "../rules/babel"
import commonRules from "../rules/common"
import importRules from "../rules/import"
import prettierRules from "../rules/prettier"
import overrideRules from "../rules/override"

export default {
  extends: [babelRules, commonRules, importRules, prettierRules, overrideRules],
};
