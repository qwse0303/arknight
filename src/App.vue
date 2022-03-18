<template>
  <div id="app">
    12321321 
    <div id="cursor" v-drag></div>


  </div>
</template>

<script>
//import $ from 'jquery'

export default {
  name: 'App',
  directives:{
    drag(el){
      let cursor=el;
      window.onmousemove = function(e){
          //通过事件委托，计算移动的距离
          let x = e.clientX ;
          let y = e.clientY;
          //移动当前元素
          cursor.style.left = x + "px";
          cursor.style.top = y + "px";
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
  height: 50%;
  width: 50%;
  cursor: default;

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
div
{
	background:red;
}

#cursor {
  backface-visibility: hidden;
  z-index: 1000000000;
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

#cursor::before {
  content: '';
  position: absolute;
  height: 7px;
  width: 7px;
  border-radius: 100%;
  background-color: white;
}

</style>
