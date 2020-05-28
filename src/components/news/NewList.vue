<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newList">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间: {{item.add_time}}</span>
                            <span>点击次数: {item.click}</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        data(){
            return{
                newList: []
            }
        },
        created(){
            this.getNewList();
        },
        methods: {
            getNewList(){
                this.newList = [];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mui-table-view {
        li {
            h1{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>