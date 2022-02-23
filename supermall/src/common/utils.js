      // 防抖函数  func:要防抖的方法， delay:要等待多久
     export function debounce(func,delay){
        let timer = null;
        return function(...args){
          if(timer) clearTimeout(timer);
          timer = setTimeout(()=>{
            func.apply(args)
          },delay)
        }
      }