import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.strict,
      tseslint.configs.stylistic,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      prettierRecommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    rules: {
      "prettier/prettier": ["error", { trailingComma: "es5" }],
    },
  },
]);
