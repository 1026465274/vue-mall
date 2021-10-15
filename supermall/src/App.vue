<template>
<div id="app">
  <router-view></router-view>
  <router-link to="/"></router-link>
  <main-tabbar> </main-tabbar>
</div>


</template>

<script>

import MainTabbar from './components/content/MainTabbar.vue'

export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>

</style>
