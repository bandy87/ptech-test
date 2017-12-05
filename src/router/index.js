import Vue from 'vue'
import Router from 'vue-router'
import Chat from '../components/chat/Chat.vue';
import Carousel from '../components/carousel/Carousel.vue';
import Settings from '../components/settings/Settings.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: Chat,
      meta: {keepAlive: true}
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: Carousel,
      meta: {keepAlive: false}
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: {keepAlive: false}
    },
  ]
})
