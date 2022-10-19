import React from 'react'
import Child from './Child';


export default function Parent() {
    function alert1(){
        alert("calling a child");
    }
  return (
    <Child alertHandler = {alert1}/>
  )
}
