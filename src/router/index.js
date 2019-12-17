import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//导入组件
//一级导航
import Home from '../components/Home'
import Detail from '../components/Detail'
import List from '../components/List'

//二级导航
import Shelf from '../components/home/Shelf'
import Cate from '../components/home/Cate'
import Pai from '../components/home/Pai'
import Search from '../components/home/Search'

export default new Router({
    mode:"history",
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home",
            name:"home",
            component:Home,
            children:[
                {
                    path:"/home",
                    redirect:"/home/shelf"
                },
                {
                    path:"/home/shelf",
                    name:"shelf",
                    component:Shelf
                },
                {
                    path:"/home/cate",
                    name:"cate",
                    component:Cate
                },
                {
                    path:"/home/pai",
                    name:"pai",
                    component:Pai
                },
                {
                    path:"/home/search",
                    name:"search",
                    component:Search
                }
            ]
        },
        {
            path:"/list",
            name:"list",
            component:List
        },
        {
            path:"/detail",
            name:"detail",
            component:Detail
        }
    ]
})