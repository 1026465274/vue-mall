<template>

    <div class="tab-bar-item" @click="itemClick">
      <slot v-if="!isActive" name="item-icon" :key="A"> </slot>
      <slot v-else name="item-active-icon" :key="b"> </slot>
      <div :style="activeStyle">   <slot   name="item-text"> </slot>
      </div> </div>
    
</template>
<script>
export default {
 name: "TabbarItem",
 props:{
  path: String,
  activeColor:{
    type:String,
    default: "red"
  }
 },
 data(){
 
 },
 computed:{
   isActive(){
     return this.$route.path.indexOf(this.path)!==-1;
    // return 0;
   },
   activeStyle(){
     return this.isActive ?{color:this.activeColor} :{}
   }
 },
 methods:{
   itemClick(){
     console.log('itemClick');
     this.$router.replace(this.path);
   }
 }
}
</script>

<style scoped>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    line-height: 22px;
    box-shadow: 0px -3px 1px rgba(100, 100, 100,0.3);
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
  }
  .active{
    color: red;
  }
</style>