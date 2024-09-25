import reactPlugin from "eslint-plugin-react";
import globals from "globals";
import stylisticJsx from "@stylistic/eslint-plugin-jsx";

export default [
  // config
  {
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.serviceworker,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // base
  {
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    ...reactPlugin.configs.flat.recommended,
  },

  // overrides
  {
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
