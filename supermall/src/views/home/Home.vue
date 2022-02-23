<template>
  <!-- <h2>首页</h2> -->
  <div class="home">
  <nav-bar class="home-nav"> 
    <template v-slot:center>购物车</template></nav-bar>
    <recommend-view  :recommends="recommends"/>
    <tab-control :titles="titles" @tabClick="tabClick"  ref="tabControl" />
    <goods-list :goods = "getList" />
      <scroll class="content1" ref="scroll" :propbe-type="3" 
  @scroll-emit="contentscroll" @pullingUp ="loadMore"  :pull-up-load ="true">
   <template v-slot:content>
     <ul>
       <li @click ="liClick">列表1</li>
       <li>列表2</li>
       <li>列表3</li>
       <li>列表4</li>
       <li>列表5</li>
       <li>列表6</li>
     </ul>
   </template>
  </scroll>
  </div>
  <back-top v-show="isShowBackTop" @click="backClick"/>
</template>
<script>

import RecommendView from './childComps/RecommendView.vue';

import NavBar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"
import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import BackTop from "components/content/backTop/BackTop"

import {getHoemMultidata,getHomeGoods} from "network/home";
import {debounce} from "common/utils"


export default {
  setup() {
    
  },
  name:"Home",
  components: {
    RecommendView,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop
    },
    computed:{
      getList(){
        return this.goods[this.currentType].list
      }
    },
    data(){
      return {
        banners:[],
        recommends:[  
          {url:"https://m.mogu.com/wall/s?q=%E5%A5%B3%E8%A3%85",
           img: "https://s10.mogucdn.com/mlcdn/c45406/210218_1ldikaae13k9be2kc2860h3l2kc5i_150x150.png_640x640.v1cAC.40.webp",
           text:"女装"
          },
          {
            url:"https://s10.mogucdn.com/mlcdn/c45406/210127_28lafia2el07d272h21h0dk09dcgb_150x150.webp_999x999.v1c0.100.jpg",
           img: "https://s10.mogucdn.com/mlcdn/c45406/210127_28lafia2el07d272h21h0dk09dcgb_150x150.webp_999x999.v1c0.100.jpg",
           text:"新人福利"
          },
          {
            url:"2",
            img:"https://s10.mogucdn.com/mlcdn/c45406/210218_7llgl01h7l8la47ki60g90ij4ib1i_150x150.png_640x640.v1cAC.40.webp",
            text :"上衣"
          },
           {
            url:"",
            img:"https://s10.mogucdn.com/mlcdn/c45406/210218_33aak1kgeegijhi3g4dl4l1d069h7_150x150.png_640x640.v1cAC.40.webp",
            text :"女鞋"
          },
          {
            url:"",
            img:"https://s10.mogucdn.com/mlcdn/c45406/210218_1ahlj8kbk6fc3gk4ch980d91f84jk_150x150.png_640x640.v1cAC.40.webp",
            text :"裤子"
          }
        ],
        titles:["流行","新款","精选"],
        goods:{
          'pop' :{'page':0,'list':[]},
          'new' :{'page':0,'list':[]},
          'sell' :{'page':0,'list':[]}
        },
        currentType:"pop",
        isShowBackTop:false,
        tabOffsetTop: 0
      }
    },
    created(){
      // 1.请求多个数据
      this.getHoemMultidatas();
     
   //  请求商品数据
   this.getHomeGoods('pop',1);
   this.getHomeGoods('new',1);
   this.getHomeGoods('sell',1);
    
    //给tabControl赋值
    this.tabOffsetTop = this.$refs.tabControl 
    },
    mounted(){

      // 监听图片刷新
      const refresh = debounce(this.$refs.scroll.finishPullUp)
     this.$bus.$on('itemFlash',()=>{
      //  刷新 对于refresh非常频繁的问题,进行防抖操作（防抖debounce/节流throttle）
        refresh(200);
     })

      // 获取tabControl的offsetTop
      // 所有的组件都有一个属性$el:用于获取组件中的元素的
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;


    },
    methods:{

      // 事件监听相关的方法
      tabClick(index){
        console.log(index);
        switch (index){
          case 0 :
            this.currentType = "pop"
            break;
          case 1 :
            this.currentType = "new"
            break;
          case 2 :
            this.currentType = "sell"
            break      
        }
         
        console.log(index);
      },
    contentscroll(posation){
      // 判断是否显示
      this.isShowBackTop =  -(posation.y) >1000

      // console.log(posation);
     },
     backClick(){
      console.log(this.$refs.scroll.scroll);
      this.$refs.scroll.scrollTo(0,0);
    },
    loadMore(){
      console.log('上拉加载更多');
      this.getHomeGoods(this.currentType);
    },

    liClick(){
    //  
    },
    
      // 网络请求相关方法
      getHoemMultidatas(){
        getHoemMultidata().then(res =>{
        
        // this.banners = res.data.banner.list ;
        // this.recommends = res.data,this.recommend.list  
        console.log(res)
      })
      },

     getHomeGoods(type){
       const page = this.goods[type].page +1;
       getHomeGoods(type,page).then(res=>{
      console.log(res);
      //  this.goods[type].list.push(...res.data.list);  
      //  this.goods[type].page +=1;
      this.$refs.scroll.finshUp();
      this.$refs.scroll.scroll.refresh();
    })
      },
    


    }
}
</script>

<style scoped>
.home{
  height: 100vh;
}
 .home-nav{
   background-color: #ea68a2;
   position:fixed ;
   width: 100%;
 }
  recommend-view{
    margin-top: 45px;
  }
  tab-control{
    background-color: #fff;
  }
  .content1{
    /* height: calc(100%-98px); */
    overflow: hidden;
  }
 
</style>