module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    "react-native/react-native": true,
  },
  plugins: ["react", "react-native"],
  extends: ["plugin:react-native/all"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".ts",
          ".jsx",
          ".tsx",
          ".android.js",
          ".android.jsx",
          ".android.ts",
          ".android.tsx",
          ".ios.js",
          ".ios.jsx",
          ".ios.ts",
          ".ios.tsx",
        ],
      },
    },
  },
  globals: {
    __DEV__: true,
  },
};
