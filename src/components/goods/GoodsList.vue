<template>
    <div class="goods-list">
        <router-link to="/home/goodsinfo" tag="div" class="goods-item" v-for="(item,i) in goodslist" :key="i">
            <img :src="item.url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.now_price}}</span>
                    <span class="old">￥{{item.old_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{item.stock_quantity}}件</span>
                </p>
            </div>
        </router-link>

        <mt-button type="danger" size="large" @click="getMoreGoodsList">加载更多</mt-button>
    </div>
</template>


<script>
    export default {
        data(){
            return {
                goodslist: [
                    {id:"1",url:"https://img12.360buyimg.com/n7/jfs/t1/136517/31/707/214541/5ed0ce32E7e483194/569aced681eb72d1.jpg",now_price:4999,old_price: 5699,title: "Apple iPhone 11 (A2223) 128GB 红色 移动联通电信4G手机 双卡双待",stock_quantity: 60},
                    {id:"2",url:"https://img13.360buyimg.com/n7/jfs/t1/123967/26/3004/402027/5ecd11ceE7c7c0ad6/ade9ebab1d927055.jpg",now_price:2299,old_price: 2898 ,title: "华为 HUAWEI 畅享 4GB+64GB幻夜黑全",stock_quantity: 453},
                    {id:"3",url:"https://img10.360buyimg.com/n7/jfs/t1/94597/14/13680/228577/5e5b59d3E5b72beed/c7d1b178447cf7e9.jpg",now_price:999,old_price: 1299,title: "华为 HUAWEI 畅享 4GB+64GB幻夜黑全",stock_quantity: 75323},
                    {id:"4",url:"https://img13.360buyimg.com/n7/jfs/t1/35828/26/5078/324781/5cbea100Eb22bb637/4d2d5e3bcd86fba4.jpg",now_price:4299,old_price: 5699,title: "佳能（Canon）EOS 200D II 200D2 迷你单反相机 数码相机（EF-S18-55mm f/4-5.6 IS STM）黑色 Vlog相机视频 ",stock_quantity: 7532},
                    {id:"5",url:"https://img14.360buyimg.com/n7/jfs/t1/125343/15/3352/168135/5ed0806bEbf0902fb/f98de6686f14a86c.jpg",now_price:13899,old_price: 14299,title: "Apple 2020新款 MacBook Pro 13.3【带触控栏】十代i5 16G 512G 2.0GHz 银色 笔记本电脑 轻薄本 MWP72CH/A ",stock_quantity: 757},
                    {id:"6",url:"https://img12.360buyimg.com/n7/jfs/t1/113018/27/6716/248610/5ebca1a5Eb27bbfd4/6f5d92077caf224a.jpg",now_price:999,old_price: 1399,title: "华为 HUAWEI 畅享 10e 6.3英寸大屏幕1300万像素后置双摄 5000mAh大电池4GB+64GB幻夜黑全网通4G手机",stock_quantity: 23},
                    {id:"7",url:"https://img.alicdn.com/bao/uploaded/i2/TB18OzkkKL2gK0jSZFmErE7iXXa_033757.jpg",now_price:1299,old_price: 1699,title: "honor/荣耀 荣耀play3",stock_quantity: 573},
                    {id:"8",url:"https://img.alicdn.com/bao/uploaded/i2/TB18OzkkKL2gK0jSZFmErE7iXXa_033757.jpg",now_price:1299,old_price: 1699,title: "honor/荣耀 荣耀play3",stock_quantity: 573},
                    {id:"9",url:"https://img.alicdn.com/bao/uploaded/i2/TB18OzkkKL2gK0jSZFmErE7iXXa_033757.jpg",now_price:1299,old_price: 1699,title: "honor/荣耀 荣耀play3",stock_quantity: 573},
                    {id:"10",url:"https://img.alicdn.com/bao/uploaded/i2/TB18OzkkKL2gK0jSZFmErE7iXXa_033757.jpg",now_price:1299,old_price: 1699,title: "honor/荣耀 荣耀play3",stock_quantity: 573},
                    {id:"72",url:"https://img.alicdn.com/bao/uploaded/i2/TB18OzkkKL2gK0jSZFmErE7iXXa_033757.jpg",now_price:1299,old_price: 1699,title: "honor/荣耀 荣耀play3",stock_quantity: 573},
                    {id:"746",url:"https://img.alicdn.com/bao/uploaded/i2/TB18OzkkKL2gK0jSZFmErE7iXXa_033757.jpg",now_price:1299,old_price: 1699,title: "honor/荣耀 荣耀play3",stock_quantity: 573},
                    {id:"7576",url:"https://img.alicdn.com/bao/uploaded/i2/TB18OzkkKL2gK0jSZFmErE7iXXa_033757.jpg",now_price:1299,old_price: 1699,title: "honor/荣耀 荣耀play3",stock_quantity: 573},
                    {id:"726",url:"https://img.alicdn.com/bao/uploaded/i2/TB18OzkkKL2gK0jSZFmErE7iXXa_033757.jpg",now_price:1299,old_price: 1699,title: "honor/荣耀 荣耀play3",stock_quantity: 573},
                    {id:"45",url:"https://img.alicdn.com/bao/uploaded/i2/TB18OzkkKL2gK0jSZFmErE7iXXa_033757.jpg",now_price:1299,old_price: 1699,title: "honor/荣耀 荣耀play3",stock_quantity: 573},
                    {id:"756",url:"https://img.alicdn.com/bao/uploaded/i2/TB18OzkkKL2gK0jSZFmErE7iXXa_033757.jpg",now_price:1299,old_price: 1699,title: "honor/荣耀 荣耀play3",stock_quantity: 573},
                    {id:"577",url:"https://img.alicdn.com/bao/uploaded/i2/TB18OzkkKL2gK0jSZFmErE7iXXa_033757.jpg",now_price:1299,old_price: 1699,title: "honor/荣耀 荣耀play3",stock_quantity: 573},
                    {id:"57",url:"https://img.alicdn.com/bao/uploaded/i2/TB18OzkkKL2gK0jSZFmErE7iXXa_033757.jpg",now_price:1299,old_price: 1699,title: "honor/荣耀 荣耀play3",stock_quantity: 573},
                ]
            }
        },
        methods:{
            getMoreGoodsList() {
               this.goodslist = this.goodslist.concat(this.goodslist)
            }

        }
    }

</script>

<style lang="scss" scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        padding: 8px;
        justify-content: space-between;
        .goods-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 2px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px ;
            img {
                width: 100%;
            }
            .title {
                font-size: 14px;
            }
            .info {
                background-color: #ddd;
                p{
                    margin: 0;
                    padding: 0;
                }
                .price {
                    .now {
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old {
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }


</style>