module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  chainWebpack: config => {
    const path = require('path')
    config.module.rule('js').exclude.add(path.join(__dirname, './dist'))
    config.module.rule('ts').exclude.add(path.join(__dirname, './dist'))

    config.resolve.alias.set(
      'portal-vue$',
      path.join(__dirname, './dist/portal-vue.esm.js')
    )
  },
}