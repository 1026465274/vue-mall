import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
  Vue.use(Vuex);

  // 创建store对象

  const store =  new Vuex.Store({
    state:{
      cartList:[]
    },
    // mutations 就是为了修改state里面的数据 
    //  里面的方法尽量单一 所以新增商品的操作做在action里面
    mutations:{

      // 使用这里面的方法是 $store.commit('addCart')   用提交的方式去使用而不是 直接$store.mutations.addCart
      // addCart(state,payload){
      //   // payload新添加的商品
      //   for(let item of state.cartList){

      //   }  
      //   state.cartList.push(payload);
      // }

      addCount(state,payload){
        console.log(state)
        payload++;
      },
      addToCart(state,payload){
        state.cartList.push(payload);
      }

    },
    // 使用这里面的方法是 $store.dispatch('addCart')   
    active:{
      addCart(context,payload){
        // payload新添加的商品
        
        context.commit('addCount',payload);
        state.cartList.push(payload);
      }
    }
  });


  //  vuex中getter 封装成计算属性 可以 导入vuex 中的 mapgetters 属性然后放在computed里面直接使用

  /*
    比如 gette里面封装了 getLength 方法 和getSum方法 就可以按照下面这个方法使用
    
      computed:{
        //  两种语法 1.
        ...mapGetters({
          length:'getLength',
           sum:'getSum'
        })
        // 2.
        ...mapGetters(['getLength','getSum'])
      }


  */





  // 3。挂载到vue实例上
  export default store