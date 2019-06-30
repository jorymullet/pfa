<script>
import Nav from '$campaign/Nav'
import FreshStart from '$campaign/Home/FreshStart'
import NewGeneration from '$campaign/Home/NewGeneration'
import GetInvolved from '$campaign/Home/GetInvolved'
import Greatness from '$campaign/Home/Greatness'
import Partner from '$campaign/Partner'
import Footer from '$campaign/Footer'
export default {
  name: 'HomeMain',
  components: {
    'top-nav': Nav,
    'fresh-start': FreshStart,
    'new-generation': NewGeneration,
    'get-involved': GetInvolved,
    'greatness': Greatness,
    'partner': Partner,
    'campaign-footer': Footer,
  },
}
</script>

<template lang='pug'>
  .home-main-main
    .home-main-container
      top-nav
      fresh-start
      new-generation
      get-involved
      greatness
      partner
      campaign-footer
</template>

<style lang='sass' scoped>
  @import 'vars'
  .home-main-main
    .home-main-container
      height: 110vh
</style>
