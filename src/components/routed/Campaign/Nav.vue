<script>
export default {
  name: 'CampaignNav',
  data () {
    return {
      seeNav: true,
      lastScrollY: 0,
    }
  },
  computed: {
    navClasses () {
      return 'yeet'
    },
  },
  methods: {
    startTopListener () {
      document.addEventListener('scroll', e => {
        const movingDownQuickly = window.scrollY - this.lastScrollY > 0
        this.seeNav = !movingDownQuickly
        this.lastScrollY = window.scrollY
      })
    },
  },
  mounted () {
    this.startTopListener()
  },
}
</script>

<template lang='pug'>
  .nav-main
    transition(
      name='from-top'
    )
      .nav-container(
        v-if='seeNav'
      )
        .top-nav
          .top-container
            .links.left
              router-link.pfa-industry(
                :to='{name: "CampaignHome"}'
              ) ISSUES
              router-link.pfa-industry(
                :to='{name: "CampaignHome"}'
              ) MEET PEET
              router-link.pfa-industry(
                :to='{name: "CampaignHome"}'
              ) EVENTS
            .logo
              img(
                src='@/assets/img/logo-peach.png'
              )
            .links.right
              router-link.pfa-industry(
                :to='{name: "CampaignHome"}'
              ) STORE
              router-link.pfa-industry.gold-bottom(
                :to='{name: "CampaignHome"}'
              ) DONATE
              router-link.pfa-industry.langs(
                :to='{name: "CampaignHome"}'
              )
                span.active ENG
                span.bar |
                span ES
</template>

<style lang="sass" scoped>
  @import 'vars'
  @import 'transitions'
  @import 'src/assets/styles/vars.sass'
  .nav-main
    .nav-container
      background-color: $pfa-dark-blue
      position: fixed
      z-index: 100
      width: 100%
      .top-nav
        .top-container
          display: grid
          grid-template-columns: 450px auto 450px
          height: 100px
          .logo
            display: grid
            justify-items: center
            align-items: center
            height: 100px
            > img
              width: 430px
              position: relative
              top: -60px
          .links
            display: grid
            grid-template-columns: 33% 33% 33%
            justify-items: center
            align-items: center
            padding: 0px 45px 10px
            > a
              color: $pfa-peach
              text-decoration: none
              font-size: 1em
              &.gold-bottom
                border-bottom: 2px $pfa-yellow solid
                padding: 4px 0 2px
              &.langs
                .active
                  color: $pfa-yellow
                .bar
                  margin: 0 2px
                

</style>

