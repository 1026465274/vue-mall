<template>
 <div class="recommend">
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

.recommend{
  display: flex;
  text-align: center;
}

.recommend div{
 flex : 1
  /* height: 45px; */
}
.recommend img{
  width: 42.67px;
  height: 42.67px;
}
</style>