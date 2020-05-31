//入口文件
import Vue from 'vue'
//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

//vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//导入MUI组件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入Mint-UI中的组件
/*import {Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);*/
import MintUI from "mint-ui"
Vue.use(MintUI);
import 'mint-ui/lib/style.min.css'


//导入App根组件
import app from './App.vue'

const vm = new Vue({
    el: "#app",
    render: c=>c(app),
    router
})
