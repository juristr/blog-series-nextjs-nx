const { createGlobPatternsOfDependentProjects } = require('@nrwl/next');

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  purge: [
    './apps/site/pages/**/*.{js,ts,jsx,tsx}',
    './apps/site/components/**/*.{js,ts,jsx,tsx}',
    ...createGlobPatternsOfDependentProjects('site'),
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
