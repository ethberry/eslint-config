import typescriptPreset from "./ts";
import reactRules from "../rules/react";
import prettierReactRules from "../rules/prettier-react";
import overrideRules from "../rules/override";

export default {
  extends: [
    typescriptPreset,
    reactRules,
    prettierReactRules,
    overrideRules,
  ],
  rules: {
    "react/prop-types": "off",
  },
};
