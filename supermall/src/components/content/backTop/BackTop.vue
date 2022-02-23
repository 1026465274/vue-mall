<template>
  <div class="back-top" @click="backClick">
    <img src="~assets/img/backTop.jpg" alt="">
  </div>
</template>

<script>
export default {
  setup() {
    
  },
  methods:{
    backClick(){
      // 回到顶部
      
    }
  },
  name:"backTop"
}
</script>

<style scoped>
.back-top img{
  width: 43px;
  height: 43px;
  transform: rotate(90deg);
}
.back-top{
  position: fixed;
  right: 10px;
  bottom: 55px;
}

</style>