<script>
export default {
  name: 'GetInvolved',
}
</script>

<template lang="pug">
  .get-involved-main
    .get-involved-container
      .content
        .copy-holder
          router-link.top.pfa-industry.pfa-a(
            :to='{name: "CampaignHome"}'
          )
            .copy GET INVOLVED
            img.arrow(
              src='@/assets/img/arrow-right-yellow.png'
            )
          .main.pfa-aktiv It’s about more than winning an election. It’s about winning an era.
        .image-holder
          .image
</template>

<style lang="sass" scoped>
  @import 'vars'
  .get-involved-main
    background-color: white
    .get-involved-container
      padding: 365px 0 150px
      display: grid
      justify-items: center
      .content
        display: grid
        grid-template-columns: 880px 300px
        .copy-holder
          width: 880px
          z-index: 2
          .top
            background-color: $pfa-dark-blue
            color: $pfa-yellow
            width: 488px
            padding: 26px 0 16px 26px
            font-size: 1.4em
            align-items: center
            transition: all .25s
            display: flex
            &:hover
              .arrow
                right: 2px
            > *
              display: inline-block
            .copy
              width: 500px
            .arrow
              position: relative
              width: 18px
              padding-bottom: 5px
              right: 20px
              transition: all .5s
          .main
            padding: 88px 100px 84px
            color: $pfa-dark-blue
            background-color: $pfa-yellow
            font-size: 3.78em
            line-height: 1.33
        .image-holder
          width: 680px
          height: 506px
          justify-self: end
          position: relative
          top: -205px
          .image
            height: 100%
            background-image: url('../../../../assets/img/home_get-involved.jpg')
            background-size: cover

</style>

