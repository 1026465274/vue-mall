<template>
  <div class="goods">
    
    <goods-list-item class="goodsItem" :v-for =" item in goods"  :goodsItem="item"  :key="item"/>
  </div>
</template>


<script>

  import GoodsListItem from "./goodsListItem/GoodsListItem"

export default {
  setup() {
    
  },
  name:"GoodsList",
  components:{
    GoodsListItem
   
  },
  props:{
    goods:{
      type: Array,
      default(){
        return [];
      }
    }
  }

}
</script>


<style scoped>
 .goods{
   display: flex;
   /* 规定灵活的项目在必要的时候拆分行或列  需要提前设置宽度
   */
   flex-wrap: wrap;
   /*    justify-content：内容判定 ; space-around均等分开设置隔开间距一样 */
   justify-content: space-around;
 }

 .goodsItem{
   width:48%
 }

</style>