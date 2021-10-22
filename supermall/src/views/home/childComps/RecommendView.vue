<template>
 <div class=" ">
   <div v-for = "item in recommends" :key="item.text">
      <a :href="item.url"><img :src="item.img" alt="">
       <div>  {{item.text}} </div>
      </a>
   </div>
 </div>
  
</template>

<script>
export default {
  name:"RecommendView",
  setup() {
    
  },
  props:{
      recommends: {
        type : Array,
        default(){
          return []
        }
      }
  }
}
</script>

<style>
.recommend img{
  width: 100%;
  height: 100%;
}
</style>