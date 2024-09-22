import reactPlugin from "eslint-plugin-react";
import globals from "globals";
import stylisticJsx from "@stylistic/eslint-plugin-jsx";

export default [
  // base
  reactPlugin.configs.flat.recommended,

  // overrides
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/display-name": "off",
      "react/prop-types": "off",
    },
  },

  // stylistic
  {
    plugins: {
      "@stylistic/jsx": stylisticJsx,
    },
    rules: {
      "@stylistic/jsx/jsx-indent": ["error", 2],
    },
  },
]
