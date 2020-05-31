import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewList.vue'
import NewsInfo from './components/news/newsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'


// 3. 创建路由对象
const router = new VueRouter({
  routes: [
      {path: '/',redirect: "/home"},
      {path: '/home',component: HomeContainer},
      {path: '/member',component: MemberContainer},
      {path: '/shopcar',component: ShopcarContainer},
      {path: '/search',component: SearchContainer},
      {path: '/home/newslist',component: NewsList},
      {path: '/home/newsInfo/:id',component: NewsInfo},
      {path: '/home/photolist',component: PhotoList},
      {path: '/home/goodslist',component: GoodsList},
      {path: '/home/goodsinfo',component: GoodsInfo},
      {path: '/home/goodscomment',component: GoodsComment,name:"goodscomment"},
      {path: '/home/goodsdesc',component: GoodsDesc,name: "goodsdesc"}
  ],
    linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router