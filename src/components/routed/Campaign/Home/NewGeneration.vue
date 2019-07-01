<script>
export default {
  name: 'NewGeneration',
}
</script>

<template lang="pug">
  .new-generation-main
    .new-generation-container
      .content
        a(
          href='https://www.youtube.com/watch?v=DUAnhpXculo'
          target='_blank'
        )
          .photo-holder
            .gradient
            .play-button
              img(
                src='@/assets/img/btn-play.png'
              )
              .copy.pfa-industry WATCH
        .copy-holder
          .header.pfa-aktiv It’s time for a new generation of American leadership.
          p America is more than a broken Washington, D.C. and 2020 is about more than the next four years. Our country is changing, and what matters most is how we will rise to meet the challenges ahead in our economy, our society, and our politics.
          p When Pete makes a decision, he doesn’t focus on how it will play out over the next news cycle or the next election. He thinks about how our choices today will impact everyday life in our country, tomorrow, and in 2054 — the year he will reach the current age of the current president.
          p That’s the kind of vision America needs right now.
          router-link.pfa-a(
            :to='{name: "CampaignHome"}'
          )
            .pfa-button.bg-light-blue MEET PEET
</template>

<style lang="sass" scoped>
  @import 'vars'
  @import 'common'
  .new-generation-main
    .new-generation-container
      background-color: white
      padding: 139px 0 150px
      .content
        max-width: 1210px
        padding: 0 15px
        margin: 0 auto
        display: grid
        grid-template-columns: 390px 820px
        .photo-holder
          width: 390px
          height: 500px
          background-image: url('../../../../assets/img/home_our-generation.jpg')
          background-size: cover
          position: relative
          z-index: 2
          .gradient
            height: 100%
            width: 100%
            position: absolute
            top: 0
            background: linear-gradient(0deg,#000,transparent 46%)
        .copy-holder
          padding: 0 0 0 50px
          background-color: $pfa-light-blue
          position: relative
          z-index: 1
          .header
            font-size: 3.7em
            line-height: 1.33
          > p
            font-size: 1.35em
            font-weight: 400
            line-height: 1.8
            margin-bottom: 40px
        .copy-holder:before
          position: absolute
          top: -200px
          bottom: -200px
          left: -300px
          z-index: -1
          width: 100vw
          height: auto
          content: ""
          background: $pfa-light-blue
          opacity: 1!important

</style>
