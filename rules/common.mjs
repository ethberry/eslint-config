import js from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin-js";

export default [
  // base
  js.configs.recommended,

  // overrides
  {
    rules: {
      "no-console": [
        "error",
        {
          allow: ["error", "warn", "info"],
        },
      ],
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          args: "after-used",
          vars: "all",
        },
      ],
      "no-void": "off",
    }
  },

  // stylistic
  {
    plugins: {
      "@stylistic/js": stylisticJs,
    },
    rules: {
      "max-len": [
        "error",
        {
          code: 120,
          ignoreRegExpLiterals: true,
          ignoreTemplateLiterals: true,
          ignorePattern: "^\\s+d=\"", // ignore path in svg icons
        },
      ],
      "arrow-parens": ["error", "as-needed"],
      "comma-dangle": ["error", "always-multiline"],
      indent: [
        "error",
        2,
        {
          MemberExpression: 1,
          SwitchCase: 1,
        },
      ],
      "linebreak-style": ["error", "unix"],
      "multiline-ternary": ["error", "always-multiline"],
      "no-multiple-empty-lines": [
        "error",
        {
          max: 2,
          maxEOF: 1,
        },
      ],
      "object-curly-spacing": ["error", "never"],
      "operator-linebreak": ["error", "before"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
]
