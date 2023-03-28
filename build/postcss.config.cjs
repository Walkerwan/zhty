const plugins = {
  autoprefixer: {},
  // '@unocss/postcss': {
  // // Optional
  //   content: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
  // },
};

if (process.env.NODE_ENV === 'production')
  plugins.cssnano = {};

module.exports = { plugins };
