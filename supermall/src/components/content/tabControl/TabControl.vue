<template>
  <div class="tab-control">
    <div class="tab-control-item "   v-for= "(item,index) in titles" 
    :key="item" :class="{active:index==currentIndex}"  @click="itemClick(index)" > 
      <span>{{item}}</span>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
  },
  name:"TabControl",
  props:{
    titles:{
      typeof:Array,
      default(){
        return [];
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      // console.log(index)
      this.currentIndex = index;
      this.$emit("tabClick",index);
    }
  },
  mounted(){
    // 吸顶效果
    // 获取到offsetTop
  }

}
</script>

<style scoped>

.tab-control{
  display: flex;
  margin-top: 5px;
  width: 100%;
  text-align: center;
  top:43px;
  background-color: #fff;
  height: 45px;
  z-index:9
}
.tab-control-item{
  flex:1
}
.tab-control-item span{
  padding: 5px;

}

.active {
  color: pink;
}
.active span{
  border-bottom: .1875rem solid pink;
}

</style>