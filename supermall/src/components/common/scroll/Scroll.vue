<template>
<!-- ref/children  如果ref是绑定在组件中的，
那么通过this.$refs.refname获取到的是一个组件对象 

ref绑定在元素中，那么通过this.$refs.refname获取到的是一个元素对象
-->

  <div class="warpper" ref="warpper">
    <div class="content">
    <slot name="content"> </slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  setup() {
    
  },
  name:"Scroll",
      props:{
        probeType:{
        type: Number,
        default:0
        },
        pullUpLoad:{
          type: Boolean,
          default :false
         }
      },
  data(){
    return{
      scroll:null,
    }
  },
  mounted(){
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.warpper,{
      //  是否监听组件下的点击事件
       click:true,
      //  监听类型
       probeType:this.probeType,
      //  监听上拉事件
       pullUpLoad :this.pullUpLoad
    });
    // 2.监听滚动位置
    this.scroll.on('scroll',(posation)=>{
      this.$emit("scrollEmit",posation)
    })
    // 3.监听上拉事件
  this.scroll.on("pullingUp",()=>{
    
    this.$.emit("pullingUp",)
     console.log("上拉加载更多"); 
  })

  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y);
      console.log(time);
    },
    finishPullUp(){
     this.scroll && this.scroll.finishPullUp();
    }
  }
}
</script>