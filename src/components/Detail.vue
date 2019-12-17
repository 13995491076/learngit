<template>
    <div class="detail">
        <header>
            <router-link to="/home/cate?n=分类"><i class="el-icon-back"></i></router-link>
            <span>{{ detail.bname}}</span><span></span>
        </header>
        <div>
            <img :src="publicPath+detail.img" />
            <div>
                <span>{{detail.bname}}</span>
                <span>{{detail.author}}</span>
                <span>
                    {{detail.gentime}}|
                    {{detail.ding}}|
                    {{detail.cate[detail.cate.length-1]}}
                </span>
            </div>
        </div>
        <div>
            <button>追更新</button>
            <button>开始阅读</button>
        </div>
        <ul>
            <li>追书人气<br>{{detail.ren2}}</li>
            <li>读者留存率<br>{{detail.liu}}%</li>
            <li>日更新字数<br>{{detail.rig}}</li>
        </ul>
        <ul>
            <li v-for="(item,index) in detail.cate" :key="index">{{item}}</li>
        </ul>
        <div>{{detail.jianjie}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        list:[],
        detail:[],
        id:this.$route.query.id,
        publicPath:process.env.BASE_URL
        }
    },
    mounted(){
        this.$axios.get("/books.json").then((res)=>{
        this.list=res.data
        for(var i in this.list){
            if(this.list[i].id==this.id){
                this.detail=this.list[i]
            }
        }

        window.console.log(this.id)
        window.console.log(this.detail)
        })
    }
}
</script>

<style lang="scss">
.detail{
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
            margin:0 0.2rem;color:white;
        }
        span{
            margin-left: -1rem;
            font-size:0.4rem;
        }
    }
}
</style>