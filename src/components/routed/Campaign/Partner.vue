<script>
import { test } from '@/utils/js/regex.js'
export default {
  name: 'Partner',
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
      amounts: [
        {
          display: '$10',
          URL: this.getAmountURL(10),
        },
        {
          display: '$25',
          URL: this.getAmountURL(25),
        },
        {
          display: '$50',
          URL: this.getAmountURL(50),
        },
        {
          display: '$100',
          URL: this.getAmountURL(100),
        },
        {
          display: '$250',
          URL: this.getAmountURL(250),
        },
        {
          display: 'OTHER',
          URL: 'https://secure.actblue.com/donate/pete-buttigieg-announcement-day?refcode=website&_gl=1*q57cyo*_gcl_aw*R0NMLjE1NjE0NjU5NDcuRUFJYUlRb2JDaE1JanFQajl0R0U0d0lWQTdqQUNoMmtzd05ORUFBWUFTQUFFZ0pjSmZEX0J3RQ..',
        },
      ],
    }
  },
  methods: {
    getAmountURL (amount) {
      return `https://secure.actblue.com/donate/pete-buttigieg-announcement-day?refcode=website&amount=${amount}&_gl=1*1abl9dv*_gcl_aw*R0NMLjE1NjE0NjU5NDcuRUFJYUlRb2JDaE1JanFQajl0R0U0d0lWQTdqQUNoMmtzd05ORUFBWUFTQUFFZ0pjSmZEX0J3RQ..`
    },
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
  .partner-main
    .partner-container
      .join-us.partner-section
        .partner-form
          .title.pfa-industry JOIN US
          .form.pro-form
            .form-row
              input(
                :class='isErrored("email") ? "error" : ""'
                placeholder='Email address*'
                v-model='form.email'
              )
            .form-row.has-2
              input(
                :class='isErrored("zip") ? "error" : ""'
                placeholder='ZIP code*'
                v-model='form.zip'
              )
              .space
              input(
                :class='isErrored("phone") ? "error" : ""'
                placeholder='Phone (optional)'
                v-model='form.phone'
              )
            .pfa-button.submit.bg-light-blue(
              @click='submit'
            ) SUBMIT
            .disclaimer By providing your cell phone number you consent to receive periodic campaign updates from Pete for America. You can text STOP to 25859 at anytime. Message and data rates may apply. 
              a(
                href='https://peteforamerica.com/privacy-policy/'
              ) TCs & Privacy Policy
      .donate.partner-section
        .partner-form
          .title.pfa-industry DONATE
          .form
            .disclaimer We’re building an organization that can compete, and we’re doing it without accepting contributions from corporate PACs or executives of the fossil fuel industry.
            .amount-grid
              a.amount.pfa-a(
                v-for='amount in amounts'
                :href='amount.URL'
              )
                .pfa-button.bg-yellow {{amount.display}}

</template>

<style lang="sass" scoped>
  @import 'vars'
  @import 'common'
  .partner-main
    .partner-container
      display: grid
      grid-template-columns: 50% 50%
      .partner-section
        padding: 97px 0 81px
        display: grid
        .partner-form
          width: 600px
          display: grid
          box-sizing: border-box
          .title
            justify-self: center
            font-size: 1.4em
      .donate
        background-color: $pfa-yellow
        .partner-form
          padding: 0 120px
          .title
            margin-bottom: 10px
          .form
            max-width: 100%
            .disclaimer
              padding: 0
              font-size: 1em
              margin: 14px 0 11px
            .amount-grid
              display: grid
              grid-template-columns: auto auto
              .amount
                .pfa-button
                  min-width: unset
                  font-size: 1.2em
                  width: 180px
                  margin: 0 10px 10px 0
      .join-us
        background-color: $pfa-light-blue
        .partner-form
          justify-self: end
          padding: 0 110px
          .title
            margin-bottom: 37px
          .form
            .submit
              width: 100%
          .disclaimer
            padding: 0
            font-size: 1em
            margin-top: 14px
</style>
