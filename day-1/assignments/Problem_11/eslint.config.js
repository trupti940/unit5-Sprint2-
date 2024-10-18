import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  {
    files: ["/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      ...pluginPrettier.configs.recommended.rules,
      "prettier/prettier": ["error"], // Enforce Prettier formatting as ESLint errors
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier,
];