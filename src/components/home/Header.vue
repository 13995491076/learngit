<template>
  <header>
      <span>{{$route.query.n}}</span>
  </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
header{
        width:100%;
        height:1rem;
        background:#409EFF;
        color:white;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;line-height:1rem;
        span{
            margin: 0 0.2rem;font-size:0.4rem;
        }
    }
</style>