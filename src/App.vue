<template>
  <div id="app">
    <div id="circlecursor" v-drag></div>
    <div id="cursor"></div>


  </div>
</template>

<script>
//import $ from 'jquery'
import {TweenMax} from 'gsap'

export default {
  name: 'App',
  directives:{
    drag(el){
      let small=el;
      let cursor=document.getElementById('cursor')
      window.onmousemove = function(e){
          //通过事件委托，计算移动的距离
          TweenMax.to(cursor,1,{x:e.pageX-5,y:e.pageY-30})
          TweenMax.to(small,0,{x:e.pageX-10,y:e.pageY-32})
      }
    }
  },
  methods:{

  }

}




 
</script>

<style>
body {
  cursor: none;
}
#app {  
  position: fixed;
  height: 200%;
  width: 200%;
  cursor: none;
	background:black;
  margin-top: -10%;
  margin-left: -10%;

}
#Snow{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background: rgba(0, 191, 255,0.4);
  pointer-events: none;
}

#circlecursor{
  content: '';
  position: absolute;
  z-index: 1000;
  height: 7px;
  width: 7px;
  border-radius: 100%;
  background-color: white;
}
#cursor {
  backface-visibility: hidden;
  z-index: 100;
  position: fixed;
  width: 40px;
  height: 40px;
  border: 2px solid white;
  transition: .1s;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0ms;
  transition-timing-function: ease-out;
}

/*
#cursor::before {
  content: '';
  position: absolute;
  height: 7px;
  width: 7px;
  border-radius: 100%;
  background-color: white;
}*/
</style>
