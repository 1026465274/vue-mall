<template>
<div id="app">
  <keep-alive exclude="Detail">
  <router-view/>
    </keep-alive>
  <router-link to="/"></router-link>
  <main-tabbar> </main-tabbar>
</div>


</template>

<script>

import MainTabbar from 'components/content/MainTabbar'

export default {
  name: 'App',
  components: {
    MainTabbar
  }
}



</script>

<style>
     @import "assets/css/base.css";

</style>
