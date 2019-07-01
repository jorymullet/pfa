<script>
export default {
  name: 'CampaignFooter',
  data () {
    return {
      footerLinks: [
        {
          name: 'HOME',
          to: 'CampaignHome',
        },
        {
          name: 'ISSUES',
          to: 'CampaignHome',
        },
        {
          name: 'MEET PETE',
          to: 'CampaignHome',
        },
        {
          name: 'EVENTS',
          to: 'CampaignHome',
        },
        {
          name: 'STORE',
          to: 'CampaignHome',
        },
        {
          name: 'DONATE',
          to: 'CampaignHome',
        },
      ],
      socialMediaLinks: [
        {
          icon: 'instagram',
          to: 'https://www.instagram.com/pete.buttigieg/',
          hovered: false,
        },
        {
          icon: 'facebook',
          to: 'https://www.facebook.com/petebuttigieg1/',
          hovered: false,
        },
        {
          icon: 'twitter',
          to: 'https://twitter.com/PeteButtigieg',
          hovered: false,
        },
      ],
      miscLinks: [
        {
          name: 'Jobs',
          to: 'https://jobs.lever.co/peteforamerica',
        },
        {
          name: 'Contact Us',
          to: 'mailto:info@peteforamerica.com'
        },
        {
          name: 'Design Toolkit',
          to: 'https://design.peteforamerica.com/?_gl=1*17ggotp*_gcl_aw*R0NMLjE1NjE0NjU5NDcuRUFJYUlRb2JDaE1JanFQajl0R0U0d0lWQTdqQUNoMmtzd05ORUFBWUFTQUFFZ0pjSmZEX0J3RQ..',
        },
        {
          name: 'Privacy Policy & Terms',
          to: 'https://peteforamerica.com/privacy-policy/',
        }
      ],
    }
  },
}
</script>

<template lang="pug">
  .campaign-footer-main
    .campaign-footer-container
      .content
        .footer-nav
          .footer-site-links
            router-link.site-link.pfa-a.pfa-industry(
              v-for='link in footerLinks'
              :to='{name: link.to}'
              :key='link.name'
            ) {{link.name}}
          .social-media-links
            a.link(
              v-for='(link, socialIdx) in socialMediaLinks'
              :href='link.to'
              target='_blank'
            )
              .link-box(
                @mouseover='socialMediaLinks[socialIdx].hovered = true'
                @mouseleave='socialMediaLinks[socialIdx].hovered = false'
              )
                .image.dead-center(
                  :style="{backgroundImage: 'url(' + require(`../../../assets/img/${link.icon}-${link.hovered ? 'dark-blue' : 'yellow'}.svg`) + ')'}"
                )
        .misc
          .misc-links
            a.pfa-a.misc-link(
              v-for='link in miscLinks'
              :href='link.to'
            ) {{link.name}}
          .navy-disclaimer Mayor Pete Buttigieg is a former member of the Navy Reserve. Use of Mayor Buttigieg’s military rank, job titles, and photographs in uniform does not imply endorsement by the Department of the Navy or the Department of Defense.
          a.pfa-a(
            href='https://peteforamerica.com/#'
          )
            .pfa-button.paid-for.pfa-aktiv PAID FOR BY PETE FOR AMERICA
        .emblem
          .image.x-align
            img(
              src='../../../assets/img/pete-for-president.svg'
            )
</template>

<style lang="sass" scoped>
  @import 'vars'
  @import 'transitions'
  .campaign-footer-main
    .campaign-footer-container
      padding: 94px 0 50px
      .content
        padding: 0 15px
        margin: 0 auto
        max-width: 1215px
        display: grid
        grid-template-columns: 33% 33% 33%
        .footer-nav
          .footer-site-links
            margin-bottom: 36px
            .site-link
              display: block
              color: $pfa-peach
              font-size: 1.4em
              transition: .25s all
              &:hover
                color: $pfa-yellow
          .social-media-links
            .link
              display: inline-block
              margin-right: 15px
              .link-box
                height: 52px
                width: 52px
                border: $pfa-yellow 2px solid
                box-sizing: border-box
                cursor: pointer
                transition: .5s all
                &:hover
                  background-color: $pfa-yellow
                .image
                  width: 30px
                  height: 30px
                  transition: all .25s
                  background-repeat: no-repeat
                  background-position: 50% 50%
                  > img
                    width: 100%
                    height: 100%
        .misc
          .misc-links
            margin-bottom: 25px
            .misc-link
              color: $pfa-peach
              line-height: 1.8
              width: fit-content
              &:hover
                text-decoration: underline
          .navy-disclaimer
            color: $pfa-peach
            line-height: 1.5
            margin-bottom: 65px
          .paid-for
            color: $pfa-peach
            border-color: $pfa-peach
            padding: 3px 10px
            font-size: 1em
            &:hover
              background-color: $pfa-peach
              color: $pfa-dark-blue
        .emblem
          .image
            width: 242px
            > img
              width: 100%
</style>
