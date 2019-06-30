export default {
  install: function (Vue, options) {
    Vue.prototype.$isFormReady = function () {
      if (!this.formOptions || !this.form) return false

      return !Object.keys(this.formOptions).find(key => {
        const keys = key.split('.')
        const value = keys.reduce((acc, current) => {
          return !(acc === null || acc === undefined) ? acc[current] : null
        }, this.form)
        return this.formOptions[key].errorIf(value)
      })
    }
    Vue.prototype.$getFormErrors = function () {
      const fo = this.formOptions || {}
      return Object.keys(fo).map(keyString => {
        const keys = keyString.split('.')
        const value = keys.reduce((acc, current) => {
          return !(acc === null || acc === undefined) ? acc[current] : null
        }, this.form)
        const error = fo[keyString].errorIf && fo[keyString].errorIf(value)
        return error
      }).filter(val => val)
    }
  },
}