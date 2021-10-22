<template>
  <!-- <h2>首页</h2> -->
  <nav-bar class="home-nav"> 
    <template v-slot:center>购物车</template></nav-bar>
    <recommend-view :recommends="recommends"/>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
import RecommendView from './childComps/RecommendView.vue';

import {getHoemMultidata} from "network/home";


export default {
  setup() {
    
  },
  name:"Home",
  components: {
    NavBar,
    RecommendView
    },
    data(){
      return {
        banners:[],
        recommends:[  
          {url:"https://m.mogu.com/wall/s?q=%E5%A5%B3%E8%A3%85",
           img: "~assets/img/recommend/女装.webp",
           text:"女装"
          },
          {
            url:"https://s10.mogucdn.com/mlcdn/c45406/210127_28lafia2el07d272h21h0dk09dcgb_150x150.webp_999x999.v1c0.100.jpg",
           img: "~assets/img/recommend/福利.jpg",
           text:"新人福利"
          },
          {
            url:"2",
            img:"~assets/img/recommend/上衣.webp",
            text :"上衣"
          },
           {
            url:"",
            img:"~assets/img/recommend/鞋子.webp",
            text :"女鞋"
          },
          {
            url:"",
            img:"~assets/img/recommend/下装.webp",
            text :"裤子"
          }
        ]
      }
    },
    created(){
      // 1.请求多个数据
      getHoemMultidata().then(res =>{
        
        // this.banners = res.data.banner.list ;
        // this.recommends = res.data,this.recommend.list  
        console.log(res)
      })
    }
}
</script>

<style scoped>
 .home-nav{
   background-color: #ea68a2;
 }
</style>