<script>
import { test } from '@/utils/js/regex.js'
export default {
  name: 'FreshStart',
  data () {
    return {
      form: {
        email: '',
        zip: '',
        phone: '',
      },
      formOptions: {
        email: {
          errorIf: (val) => test('email', val) ? '' : 'Enter actual email',
        },
        zip: {
          errorIf: (val) => test('zip', val) ? '' : 'Enter actual zip',
        },
        phone: {
          errorIf: (val) => !val || test('phone', val) ? '' : 'Enter actual phone number',
        },
      },
      errors: {},
    }
  },
  methods: {
    getErrors () {
      const errObj = {}
      Object.keys(this.formOptions).forEach(key => {
        const error = this.formOptions[key].errorIf(this.form[key])
        if (!error) return
        errObj[key] = error
      })
      return errObj
    },
    clearForm () {
      Object.keys(this.form).forEach(key => this.form[key] = '')
    },
    submit () {
      this.errors = this.getErrors()
      if (Object.keys(this.errors).length) return

      alert('Success')
      this.clearForm()
    },
    isErrored (key) {
      return Object.keys(this.errors).find(errorKey => errorKey === key)
    },
  },
}
</script>

<template lang="pug">
  .fresh-start-main
    .fresh-start-container
      .pete-holder
        .pete
          img.dead-center(
            src='@/assets/img/pete-home.jpg'
          )
      .copy-form-column
        .copy-holder.pfa-aktiv
          .copy-container
            .copy A 
              span FRESH START
            .copy FOR AMERICA
        .form
          .form-container
            .title.pfa-industry JOIN TEAM PETE
            .inputs-holder.pro-form
              input.margin-bottom(
                :class='isErrored("email") ? "error" : ""'
                placeholder='Email address*'
                v-model='form.email'
              )
              .space.margin-bottom
              input.margin-bottom(
                :class='isErrored("zip") ? "error" : ""'
                placeholder='ZIP code*'
                v-model='form.zip'
              )
              input(
                :class='isErrored("phone") ? "error" : ""'
                placeholder='Cell phone (optional)'
                v-model='form.phone'
              )
              .space
              .pfa-button.bg-yellow(
                @click='submit'
              ) SUBMIT
          .disclaimer By providing your cell phone number you consent to receive periodic campaign updates from Pete for America. You can text STOP to 25859 at anytime. Message and data rates may apply. 
            a(
              href='https://peteforamerica.com/privacy-policy/'
            ) TCs & Privacy Policy

</template>

<style lang="sass" scoped>
  @import 'vars'
  @import 'common'
  .fresh-start-main
    position: relative
    z-index: 2
    .fresh-start-container
      height: 100vh
      background-color: $pfa-dark-blue
      display: grid
      grid-template-columns: 33% auto
      .pete-holder
        display: grid
        .pete
          height: calc(100vh - 180px)
          overflow: hidden
          align-self: center
          > img
            height: 124%
      .copy-form-column
        color: $pfa-peach
        height: calc(100vh - 180px)
        align-self: center
        width: 50vw
        justify-self: end
        display: grid
        grid-template-rows: auto 310px
        margin-right: 104px
        .copy-holder
          display: grid
          align-items: center
          .copy
            font-size: 4.6vw
            > span
              color: $pfa-yellow
        .form
          background-color: $pfa-yellow
          .form-container
            padding: 47px 51px 15px
            .title
              color: $pfa-dark-blue
              font-size: 1.5em
              letter-spacing: 2.4px
              margin-bottom: 10px
            .inputs-holder
              display: grid
              grid-template-columns: calc(70% - 20px) 20px 30%
              .margin-bottom
                margin-bottom: 10px
              .pfa-button
                min-width: 100%

</style>
