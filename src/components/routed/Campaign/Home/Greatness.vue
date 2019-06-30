<script>
export default {
  name: 'Greatness',
}
</script>

<template lang="pug">
  .greatness-main
    .greatness-container
      .content
        .copy-holder
          .copy.pfa-aktiv
            .words We can’t look for 
            .words.orange greatness 
            .words in the past
        a.image-holder(
          href='https://www.youtube.com/watch?v=_1FhKQHDJi0'
          target='_blank'
        )
          .gradient
          .play-button
            img(
              src='@/assets/img/btn-play.png'
            )
            .copy.pfa-industry WATCH
          .image
</template>

<style lang="sass" scoped>
  @import 'vars'
  @import 'common'
  .greatness-main
    .greatness-container
      padding: 100px 0 150px
      background-color: white
      .content
        max-width: 1210px
        margin: 0 auto
        display: grid
        grid-template-columns: 800px 380px
        .copy-holder
          background-color: $pfa-blue
          width: 800px
          padding: 92px 0 100px
          position: relative
          .copy
            padding: 0 250px 38px 0px
            font-size: 3.5em
            color: white
            border-bottom: $pfa-yellow 5px solid
            .orange
              color: $pfa-yellow
        .copy-holder:before
          position: absolute
          top: 0
          bottom: 0
          right: 99.9%
          width: 100vw
          height: auto
          display: block
          content: ""
          background: $pfa-blue
        .image-holder
          width: 580px
          height: 387px
          justify-self: end
          position: relative
          top: -100px
          .gradient
            height: 100%
            width: 100%
            position: absolute
            top: 0
            background: linear-gradient(0deg,#000,transparent 46%)
          .image
            height: 100%
            background-image: url('../../../../assets/img/home_greatness.jpg')
            background-size: cover
</style>
