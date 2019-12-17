<template>
    <footer>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <router-link :to="'/home'+item.url+'?n='+item.name">{{item.name}}</router-link>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {name:"书架",url:"/shelf"},
                {name:"分类",url:"/cate"},
                {name:"排行",url:"/pai"},
                {name:"搜索",url:"/search"}
            ]
        }
    },

}
</script>

<style lang='scss'>
footer{
    width: 100%;
    height: 1rem;
    border-top: 0.01rem solid #ccc;
    ul{
        width: 100%;
        height:1rem;
        display:flex;
        li{
            flex:1;
            text-align: center;
            a{
                display: inline-block;
                width: 100%;
                height: 100%;
                text-decoration: none;
                line-height: 1rem;
                font-size: 0.3rem;
                color: #ccc;
                &.router-link-active{
                    color: red;
                }
            }
        }
    }
}
</style>