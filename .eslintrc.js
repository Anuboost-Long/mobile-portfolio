module.exports = {
  extends: ["@react-native-community", "plugin:prettier/recommended"],
  plugins: ["simple-import-sort"],
  root: true,
  rules: {
    // "no-console": "error",
    "import/order": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "sort-imports": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react-hooks/rules-of-hooks": "off"
  }
}
