<template>
<div class="nav-bar">
 <div class="left"><solt name="left"></solt></div>
 <div class="center"><solt name ="center">购物车</solt></div>
 <div class="right"><slot name="right"> </slot></div>

</div>
  
</template>

<script>
export default {
  name: "Navbar",
  setup() {
    
  },
}
</script>

<style scoped>
  .nav-bar{
    display: fiex;
    height: 44px;
    line-height: 44px;
    box-shadow: 0 1px 1px rgb(100,100,100,.1);
  }

  .left,.right{
    width: 60px;
    background-color: skybule;
  }

.center{
  flex: 1;
  text-align: center;
}

</style>