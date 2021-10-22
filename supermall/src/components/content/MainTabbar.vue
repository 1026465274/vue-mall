<template>
   <tab-bar> 
       <tab-bar-item path="/home" >
       <template v-slot:item-icon>
       <img  src="~assets/img/tabbar/购物车.svg" alt="" class="" >
       </template>
        <template v-slot:item-active-icon>
        <img  src="~assets/img/tabbar/购物车.svg" alt="" class="">
        </template>
        <template v-slot:item-text>
      <div class="">首页</div>
        </template>
        </tab-bar-item>
       <tab-bar-item path="/category">
       <template v-slot:item-icon>
        <img  src="~assets/img/tabbar/门户.svg" alt="" class="">
       </template>
       <template v-slot:item-active-icon>
            <img  src="~assets/img/tabbar/门户.svg" alt="" class="">
       </template>
        <template v-slot:item-text>
      <div   class="">类别</div>   
        </template>
       </tab-bar-item>
            </tab-bar> 
</template>


<script>
import TabBar from 'components/common/tabbar/Tabbar';
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name:"MainTabbar",
  components:{
    TabBar,
    TabBarItem
  },
  setup() {
    
  },

}
</script>


<style>
.tab-bar-item img{
  width: 24px;
}
</style>