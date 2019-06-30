var path = require('path')
const capture = (dir) => path.resolve(__dirname, dir)

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': capture('src/'),
        'vars': capture('src/assets/styles/vars.sass'),
        'common': capture('src/assets/styles/common.sass'),
        'transitions': capture('src/assets/styles/transitions.sass'),
        '$campaign': capture('src/components/routed/Campaign/')
      }
    }
  },
}