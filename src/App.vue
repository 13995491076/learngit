<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script> 

export default {
  name: 'app',
  components: {
     
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;font-size: 0.3rem;
}
html,body,#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
section{
  width: 100%;
  flex: 1;
  overflow: hidden;
}
</style>
