import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Campaign = {
  home: () => import('./components/routed/Campaign/Home/Main.vue'),
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'CampaignHome',
      component: Campaign.home,
    },
  ],
})
