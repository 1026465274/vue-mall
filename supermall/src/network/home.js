import { request } from "./request";

export function getHoemMultidata(){
  return  request({
    url:"/home/mutidata"
  })
}