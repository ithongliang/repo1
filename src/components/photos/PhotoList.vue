<template>
    <div>
        <!--顶部滑动条区域-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedContr ol" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id === 0 ? 'mui-active': '']" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in cates" :key="item.id">
                        {{item.title}}
                    </a>

                </div>
            </div>
        </div>

        <!--图片列表区域-->
        <ul class="img-container">
            <li v-for="item in list">
                <img v-lazy="item.img_url" >
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    import  mui from '../../lib/mui/js/mui.min.js'

    export default {
        data(){
            return {
                cates : [],
                cateObjs : [
                    {title: "全部",id: 0},
                    {title: "家具生活",id: 1},
                    {title: "摄影设计",id: 2},
                    {title: "明星美女",id: 3},
                    {title: "明星写真",id: 4},
                    {title: "清纯甜美",id: 5},
                    {title: "古典美女",id: 6},
                    {title: "古装美女",id: 7},
                    {title: "校服美女",id: 8},
                    {title: "游戏动漫",id: 9},
                ],
                list: [
                    {id: 50,title: "有气质且可爱的美女组图",img_url: "http://test.cullian.com/webapi10/img/m1.jpg",zhaiyao: "有气质且可爱的美女组图有气质且可爱的美有气质且可爱的美女组图有气质且可爱的美女组图女组图有气质且可爱的美女组图有气质且可爱的美女组图"},
                    {id: 51,title: "有气质且可爱的美女组图",img_url: "http://test.cullian.com/webapi10/img/m2.jpg",zhaiyao: "有气质且可爱的美女组图有气质且可爱的美女有气质且可爱的美女组图有气质且可爱的美女组图组图有气质且可爱的美女组图有气质且可爱的美女组图"},
                    {id: 52,title: "有气质且可爱的美女组图",img_url: "http://test.cullian.com/webapi10/img/m3.jpg",zhaiyao: "有气质且可爱的美女组图有气质且可爱的美有气质且可爱的美女组图有气质且可爱的美女组图女组图有气质且可爱的美女组图有气质且可爱的美女组图"},
                    {id: 53,title: "有气质且可爱的美女组图",img_url: "http://test.cullian.com/webapi10/img/m4.jpg",zhaiyao: "有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图"},
                    {id: 54,title: "有气质且可爱的美女组图",img_url: "http://test.cullian.com/webapi10/img/m5.jpg",zhaiyao: "有气质且可爱的美女组图有气质且可爱的美有气质且可爱的美女组图有气质且可爱的美女组图女组图有气质且可爱的美女组图有气质且可爱的美女组图"},
                    {id: 55,title: "有气质且可爱的美女组图",img_url: "http://test.cullian.com/webapi10/img/m6.jpg",zhaiyao: "有气质且可爱的美女组图有气质且可爱的美有气质且可爱的美女组图有气质且可爱的美女组图女组图有气质且可爱的美女组图有气质且可爱的美女组图"},
                    {id: 56,title: "有气质且可爱的美女组图",img_url: "http://test.cullian.com/webapi10/img/m7.jpg",zhaiyao: "有气质且可爱的美女组图有气质且可爱的美女有气质且可爱的美女组图有气质且可爱的美女组图 组图有气质且可爱的美女组图有气质且可爱的美女组图"},
                    {id: 57,title: "有气质且可爱的美女组图",img_url: "http://test.cullian.com/webapi10/img/m8.jpg",zhaiyao: "有气质且可爱的美女组图有气质且可爱的美有气质且可爱的美女组图有气质且可爱的美女组图女组图有气质且可爱的美女组图有气质且可爱的美女组图"},
                    {id: 58,title: "有气质且可爱的美女组图",img_url: "http://test.cullian.com/webapi10/img/m9.jpg",zhaiyao: "有气质且可爱的美女组图有气质且可爱的美有气质且可爱的美女组图有气质且可爱的美女组图女组图有气质且可爱的美女组图有气质且可爱的美女组图"},
                    {id: 59,title: "有气质且可爱的美女组图",img_url: "http://test.cullian.com/webapi10/img/m10.jpg",zhaiyao: "有气质且可爱的美女组图有气质且可爱的美有气质且可爱的美女组图有气质且可爱的美女组图女组图有气质且可爱的美女组图有气质且可爱的美女组图"},
                ]  //图片列表的数组
            }
        },
        created(){
            this.getAllCategory();
        },
        mounted(){
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            getAllCategory(){
                this.cates = this.cateObjs;
            }

        }
    }


</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        touch-action: pan-y;
    }

    .img-container {
        padding: 0 10px;
        background-color: #fff;
        li {
            list-style: none;
            box-shadow: 0 0 2px #999;
            position: relative;
            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            img {
                width: 100%;
            }

            .info {
                width: 100%;
                max-height: 84px;
                z-index: 999;
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0,0,0,0.4);
                .info-title {
                    font-size: 14px;

                }
                .info-body {
                    font-size: 13px;
                }
            }
        }


    }
</style>