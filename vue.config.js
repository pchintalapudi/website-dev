const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('yaml')
        .test(/\.ya?ml?$/)
        .use('json-loader')
          .loader('json-loader')
          .end()
        .use('js-yaml-loader')
          .loader('js-yaml-loader')
  },
  outputDir: path.resolve(__dirname, "docs"),
  assetsDir: "static"
})
