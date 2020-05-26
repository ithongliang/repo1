//入口文件
import Vue from 'vue'

//导入MUI组件
import './lib/mui/css/mui.min.css'

//导入Mint-UI中的组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

//导入App根组件
import app from './App.vue'

var vm = new Vue({
    el: "#app",
    render: c=>c(app)
})
