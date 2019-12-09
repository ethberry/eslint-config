import jsPreset from "./js"
import reactRules from "../rules/react"
import prettierReactRules from "../rules/prettier-react"
import overrideRules from "../rules/override"


export default {
  extends: [jsPreset, reactRules, prettierReactRules, overrideRules],
};
