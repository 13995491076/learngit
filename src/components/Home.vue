<template>
    <div class="home">
        <Header></Header>
        <section><router-view></router-view></section>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './home/Header'
import Footer from './home/Footer'

export default {
    components:{Header,Footer}
}
</script>

<style lang="scss">
.home{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    section{
        width: 100%;
        flex: 1;overflow:scroll;
    }




}
</style>