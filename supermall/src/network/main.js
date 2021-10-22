
import axios from 'axios'

export function  request(config){
  // 创建andriod 的实例
  const instance  =  axios.create({
    baseURL: "",
    timeout: 5000
  })
  // 发送真正的请求

  return instance(config).then(res =>{
    success(res);
  }).catch(err =>{
    failure(err)
  })
}