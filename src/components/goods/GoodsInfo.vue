<template>
    <div class="good-info-container">
        <transition
         @before-enter="beforeEnter"
         @enter="enter"
         @after-enter="afterEnter" >
            <div class="ball" v-show="ballFlag"></div>
        </transition>

       <!--商品轮播图区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="urls" isfull="false"></swiper>
                </div>
            </div>
        </div>

        <!--商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header">Apple/苹果 iPhone 11 4G全网通智能手机正品苏宁易购官方旗舰店苹果11</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价: <del>$660</del>&nbsp;&nbsp; 销售价：<span class="now-price">$606</span>
                    </p>
                    <div class="buy-num">
                        <h5 class="mui-content-padded">购买数量:</h5>
                        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input id="test" class="mui-input-numbox" type="number" value="1" />
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                    </div>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar()">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>

       <!-- 商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号: YON77FGO64U6IH65OGF1561678</p>
                    <p>库存情况: 4156件</p>
                    <p>商家事件: 2020-2-16 00:00:00</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="danger" size="large" plain @click = "goDesc">图文介绍</mt-button>
                <mt-button type="primary" size="large" plain @click="goComment">商品评轮</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import swiper from "../subcomponets/swiper.vue";
    export default {
        data(){
            return{
                urls: [
                    {url:"https://img.alicdn.com/imgextra/i4/2616970884/O1CN01u2U0UE1IOuj5BPb9J_!!0-item_pic.jpg_430x430q90.jpg"},
                    {url:"https://img.alicdn.com/imgextra/i1/2616970884/O1CN01H0DfwL1IOugYXyBGr_!!2616970884.jpg_430x430q90.jpg"},
                    {url:"https://img.alicdn.com/imgextra/i2/2616970884/O1CN019LI7ft1IOuhqKW2kw_!!0-item_pic.jpg_430x430q90.jpg"},
                    {url:"https://img.alicdn.com/imgextra/i4/2616970884/O1CN01vL8yjw1IOugXap1wM_!!2616970884.jpg_430x430q90.jpg"},
                    {url:"https://img.alicdn.com/imgextra/i2/2616970884/O1CN01KEknJ71IOuj0hku1J_!!2616970884.jpg_430x430q90.jpg"}
                ],
                ballFlag : false
            }
        },
        methods:{
            goDesc(){
                this.$router.push({name:"goodsdesc"})
            },
            goComment(){
                this.$router.push({name:"goodscomment"})
            },
            addToShopCar(){
                this.ballFlag = !this.ballFlag;
                console.log(this.ballFlag)
            },
            beforeEnter(el){
                el.style.transform = "translate(0,0)"
                console.log(this.ballFlag)
            },
            enter(el,done){
                el.offsetHeight
                el.style.transform = "translate(85px,219px)";
                el.style.transition = "all 100s ease";
                console.log(this.ballFlag)
                done();

            },
            afterEnter(el){
                this.ballFlag = !this.ballFlag;
                console.log(this.ballFlag)
            }
        },
        components: {
            swiper
        }
    }

</script>

<style lang="scss" scoped>
    .good-info-container {
        background-color: #eee;
        overflow: hidden;
        .now-price{
            color: red;
            font-size: 16px;
            font-weight: 700;
        }
        .buy-num {
            display: flex;
            justify-content: left;
            h5 {
                font-size: 13px;
            }
            .mui-numbox {
                font-size: 14px;
                float: left;
                height: 25px;
            }

        }
        .mui-card-footer {
            display: block;
            button {
                margin: 4px 0;
            }
        }
        .ball{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 999;
            left: 152px;
            top: 402px;
        }

    }

</style>