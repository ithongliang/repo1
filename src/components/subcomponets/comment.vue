<template>
   <div class="cmt-container">
       <h3>发表评论</h3>
       <hr>
       <textarea  v-model="message" placeholder="请输入评论的内容(最多输入120字)" maxlength="120"></textarea>
       <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
       <div class="cmt-list">
           <div class="cmt-item" v-for="(item,i) in comments" :key="i">
               <div class="cmt-title">
                   第{{i+1}}楼&nbsp;&nbsp;用户: {{item.user_name}}&nbsp;&nbsp;发表时间: {{item.add_time}}
               </div>
               <div class="cmt-body">
                   {{item.content}}
               </div>
           </div>

       </div>
       <mt-button type="danger" size="large" @click="getMoreComment()" plain>加载更多</mt-button>
   </div>
</template>



<script>
    import { Toast } from  "mint-ui"
    export default {
        data(){
            return {
                commentsList: [
                    {add_time: "2020-5-28 14:26:30",user_name:"匿名用户",content: "纵观美国这些年,这么不靠谱的总统恐怕还是头一个"},
                    {add_time: "2020-5-28 15:38:26",user_name:"See ing",content: "特普朗是典型的美国人,只享受权利,不想承担责任"},
                    {add_time: "2020-5-28 19:06:56",user_name:"自由如风",content: "各州独立吧,支持!!!"},
                    {add_time: "2020-5-28 23:29:47",user_name:"1700651",content: "掩耳盗铃的故事"},
                    {add_time: "2020-5-29 09:03:28",user_name:"谁与我共春风",content: "看着美国人民争取的明主自由行动,我也热血沸腾了"},
                    {add_time: "2020-5-29 11:26:31",user_name:"达克",content: "支持民众的合理要求,谴责警察开枪"},
                    {add_time: "2020-5-29 18:00:52",user_name:"按剧本,我不该辜负你",content: "支持特普朗连任,唯一能够让人们看到一样的总统"},
                    {add_time: "2020-5-30 00:47:39",user_name:"匿名用户",content: "美国人民加油,我们特别纸币你们追求民主和自由的理想"},
                    {add_time: "2020-5-30 04:00:14",user_name:"潜行者",content: "想想这一切是谁引起的,特没谱"}
                    ],
                comments: [],
                message: ""
            }
        },
        created() {
            this.getComments();
        },
        methods: {
            getComments(){
                this.comments = this.commentsList;
            },
            getMoreComment(){
                this.comments = this.comments.concat(this.commentsList)
            },
            postComment(){
                if (this.message.trim().length === 0){
                    return Toast("评论内容不能为空!")
                }
                var cmt  = {add_time: this.getTime(),user_name:"匿名用户",content: this.message.trim()};
                this.comments.unshift(cmt);
                this.message = ""
            },
            getTime(){
                const dd = new Date();
                return dd.getFullYear() + "-" + dd.getMonth() + "-" + dd.getDate() + "  "+ dd.getHours()+ ":" + dd.getMinutes() + ":" + dd.getSeconds()
            }

        }
    }

</script>

<style lang="scss" scoped>
    .cmt-container {
        h3{
            font-size: 18px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list {
            margin: 5px 0;
            .cmt-item {
                font-size: 13px;

                .cmt-title {
                    background-color: #ccc;
                    line-height: 30px;
                }
                .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }

</style>