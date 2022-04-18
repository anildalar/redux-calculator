import { NUMBER } from "../constant"

export const number = (n)=>{  //Action Creator //
    //alert(n);
    return {
      type:NUMBER,
      number:n
    }
  }