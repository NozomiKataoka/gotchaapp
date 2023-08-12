module.exports = function override(config, env) {
    config.entry = './src/index.js';  // エントリーポイントを変更
    return config;
  };