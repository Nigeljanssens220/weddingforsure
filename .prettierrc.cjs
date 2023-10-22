/** @typedef  {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig } */
const config = {
  endOfLine: 'lf',
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
}

module.exports = config
