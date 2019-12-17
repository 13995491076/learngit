<template>
    <div class="list">
        <header>
            <router-link to="/home/cate?n=分类"><i class="el-icon-back"></i></router-link>
            <span>{{ $route.query.p}}</span><span></span>
        </header>
        <section>
            <div>
                <ul>
                    <li>热门</li>
                    <li>新书</li>
                    <li>好评</li>
                    <li>完结</li>
                    <li>包月</li>
                </ul>
                <ul>
                    <li>全部</li>
                    <li>东方玄幻</li>
                    <li>异界大陆</li>
                    <li>异界争霸</li>
                    <li>远古神话</li>
                </ul>
            </div>
            <ul>
                <li v-for="(v,i) in list" :key="i" v-show="v.pid==id">
                    <router-link :to="'/detail?id='+v.id">
                        <img :src="publicPath+v.img" alt />
                        <div>
                            <span>{{v.bname}}</span><br>
                            <span>{{v.author}}</span><br>
                            <p>{{v.jianjie}}</p>
                            <span>{{v.ren}}万人气|{{v.liu}}%读者留存</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>

    </div>
</template>

<script>
export default {
    data() {
        return {
        list:[],
        id:this.$route.query.id,
        publicPath:process.env.BASE_URL
        }
    },
    mounted(){
        this.$axios.get("/books.json").then((res)=>{
        this.list=res.data
        })
    }
}
</script>

<style lang="scss">
.list{
    width:100%;
    height:100%;
    header{
        width:100%;
        height:1rem;
        background:#409EFF;
        color:white;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height:1rem;
        a{
            text-decoration: none;
            color: black;margin:auto 0;
        }
        i{
            font-size:0.4rem;
            margin:0 0.2rem;
        }
        span{
            margin-left: -1rem;
            font-size:0.4rem;
        }
    }
    section{
        width:100%;
        div{
            width:100%;
            ul{
                width:100%;
                height:0.8rem;
                border-bottom:0.01rem solid #ccc;
                li{
                    float:left;
                    line-height:0.8rem;
                    font-weight: 700;
                    padding:0 0 0 0.2rem;
                }
            }
        }
        &>ul{
            width:100%;
            padding:0.05rem 0.2rem;
            li{
                width:100%;
                height:2.5rem;
                display:flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                a{
                    display:block;
                    width:100%;
                    height:100%;
                    display:flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    text-decoration: none;
                    color: black;

                    img{
                        width:1.8rem;
                    }
                    div{
                        padding:0.2rem;
                        span:nth-of-type(1){
                            font-weight:700;
                        }
                        p{
                            width:90%; 
                            white-space:nowrap; 
                            text-overflow:ellipsis; 
                            overflow:hidden;
                        }
                    }
            
            
            

                }
            }
        }
    }
}

</style>