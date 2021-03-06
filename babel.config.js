module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: {
          node: '12.14',
        },
        modules: 'cjs',
      },
    ],
  ],

  // Optional Plugins -> Proposals. Property does not have to be used. Plugins have to be installed via npm.
  // "plugins": [
  // ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
  // ]
};
