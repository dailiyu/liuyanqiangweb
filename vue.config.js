const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    overlay: {
      warnings: false,
      errors: false,
    },
    lintOnSave: false,
  },
});

const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/styles/commons.less")], //引入全局less文件
    },
  },
};
