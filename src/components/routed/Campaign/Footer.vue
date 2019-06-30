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
    }
  },
}
</script>

<template lang="pug">
  .campaign-footer-main
    .campaign-footer-container
      .content
        .footer-nav
        .misc
        .emblem
</template>

<style lang="sass" scoped>
  .campaign-footer-main
    .campaign-footer-container
      padding: 94px 0 50px
      .content
        padding: 0 15px
        margin: 0 auto
        display: grid
        grid-template-columns: 33% 33% 33%
</style>
