const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    // 기본 SVG 로더 제거
    svgRule.uses.clear()

    // vue-svg-loader 추가
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
})
