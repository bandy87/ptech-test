<template>
  <div id="app">
    <app-header></app-header>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
import Header from './Header';
import router from './router'

export default {
  router,
  data: function(){
      return {
          loaded: false
      }
  },
  components: {
    appHeader: Header
  },
  created() {
      this.loaded = true;
  }
}
</script>
