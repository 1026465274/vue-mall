<template>
<div class="nav-bar">
 <div class="left"><solt name="left"></solt></div>
 <div class="center"><solt name ="center"></solt></div>
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
    line-height: 44px;
  }

  .left,.right{
    width: 60px;
    background-color: skybule;
  }

.center{
  flex: 1;
}

</style>