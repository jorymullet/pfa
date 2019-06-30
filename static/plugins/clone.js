export default {
  install: function (Vue, options) {
    Vue.prototype.$clone = function (val) {
      return JSON.parse(JSON.stringify(val))
    }
  },
}