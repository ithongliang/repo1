<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.uniquekey">
                <a :href="item.url">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间: {{item.date}}</span>
                            <span>作者: {{item.author}}</span>
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
            getTime(){
                let  d = new Date();
                let H = d.getHours();
              	let m = d.getMinutes();
              	let s = d.getSeconds();
              	var dd = "";
              	switch ( d.getDay()) {
										case 1:
										    dd = "一";
												break;
                    case 2:
                        dd = "二";
                        break;
                    case 3:
                        dd = "三";
                        break;
                    case 4:
                        dd = "四";
                        break;
                    case 5:
                        dd = "五";
                        break;
                    case 6:
                        dd = "六";
                        break;
										case 0:
                        dd = "日";
                        break;
                }
              	return H+":"+m+":"+s+" 星期"+dd
						},
            getNewList(){
              /* this.$http.get("https://v.juhe.cn/toutiao/index?type=top&key=3dc86b09a2ee2477a5baa80ee70fcdf5").then(
               		ret => {
               		    if(ret.error_code===0){
               		        this.newList = ret.result.data;
										}else {
                          Toast("获取新闻列表失败!")
											}
									}
							 )*/
              this.newList = [
									{img_url: "https://juheimgs.oss-cn-beijing.aliyuncs.com/banner/202003/d8376e7e3010cc3f.png",title: "全球新冠肺炎COVID-19实时追踪，关注全球疫情动态", date:this.getTime(),author:"健康资讯",url: "https://covid-19.juheapi.com/?s=toutiao"},
									{img_url: "https://02imgmini.eastday.com/mobile/20200529/2020052915_566637d1658a4ca98c3209e6f35a6558_2286_mwpm_03200403.jpg",title: "它长在大山里，见到别躲开，遇到是走运，现今600元1斤不好买", date:this.getTime(),author:"顶厨速递",url: "https://mini.eastday.com/a/200529160412553.html?qid=02263"},
									{img_url: "https://03imgmini.eastday.com/mobile/20200529/20200529155953_bd042631b5d955d11bfccc70edb067ae_4_mwpm_03200403.jpg",title: "原创 赵雅芝演过的4个角色，别只知道白娘子，图四才是颜值巅峰", date:this.getTime(),author:"德琴聊娱乐",url:"https://mini.eastday.com/a/200529155953226.html?qid=02263"},
									{img_url: "https://05imgmini.eastday.com/mobile/20200529/2020052915_cc2e5211fa9040bdb30d9b99c2f5706f_7848_mwpm_03200403.jpg",title: "西游记中元始天尊和菩提老祖单挑，谁能获胜？你听玉帝说啥！", date:this.getTime(),author:"颠覆历史",url:"https://mini.eastday.com/a/200529155241147.html?qid=02263"},
									{img_url: "https://01imgmini.eastday.com/mobile/20200529/2020052915_1a5aa167a0864305b008157b1b7906ca_5703_mwpm_03200403.jpg",title: "现役NBA最传统的阵容：保罗、莱昂纳德领衔，马刺独占2人！", date:this.getTime(),author:"林夕篮球",url:"http://v.juhe.cn/toutiao/index?type=top&key=3dc86b09a2ee2477a5baa80ee70fcdf5"},
									{img_url: "https://09imgmini.eastday.com/mobile/20200529/20200529155223_8ae3687f2180f0cc8df1a955c185c912_4_mwpm_03200403.jpg",title: "右键的神奇用法？快点进来涨姿势", date:this.getTime(),author:"ASUS华硕东南",url:"http://v.juhe.cn/toutiao/index?type=top&key=3dc86b09a2ee2477a5baa80ee70fcdf5"},
									{img_url: "https://00imgmini.eastday.com/mobile/20200529/20200529153652_568604a4e3b7a0f3417773a78f9db5a3_3_mwpm_03200403.jpg",title: "韦江与自治区住房城乡建设厅领导座谈", date:this.getTime(),author:"广西大数据发展局",url:"https://mini.eastday.com/a/200529153652542.html?qid=02263"},
									{img_url: "https://00imgmini.eastday.com/mobile/20200529/20200529153557_8fa811b2e902701c9bcc27e75b664646_1_mwpm_03200403.jpg",title: "杜绝群租房安全隐患，第三方安全生产专家来监督", date:this.getTime(),author:"北青网",url:"https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200529153557832.html"},
									{img_url: "https://08imgmini.eastday.com/mobile/20200529/20200529152628_0f83b0e0074f3cb94ddecab2150a053a_6_mwpm_03200403.jpg",title: "订单已破6000辆 五菱宏光MINI EV预售2.98万起", date:this.getTime(),author:"EV车世界",url:"https://v.juhe.cn/toutiao/s?id=https%3A%2F%2Fmini.eastday.com%2Fmobile%2F200529152628229.html"},
									{img_url: "https://08imgmini.eastday.com/mobile/20200529/20200529152623_d43df210141b1ad32fb14764bb1da015_1_mwpm_03200403.jpg",title: "意大利防疫官员：从9月开始口罩将不再依赖进口", date:this.getTime(),author:"中国新闻网",url:"https://mini.eastday.com/mobile/200529152623747.html"},
									{img_url: "https://05imgmini.eastday.com/mobile/20200529/20200529152546_53e192aa2eeecf9cd438ce5b24e2dab2_2_mwpm_03200403.jpg",title: "湖南省众善公益基金会联合爱心企业开展公益慰问活动", date:this.getTime(),author:"中国公益新闻网",url:"https://mini.eastday.com/a/200529152546619.html?qid=02263"},
									{img_url: "https://06imgmini.eastday.com/mobile/20200529/20200529152233_137fd10dc07ec19eb7265bf66adf38be_1_mwpm_03200403.jpg",title: "进博会举办场所“四叶草”下周开“夜市”，7月复展", date:this.getTime(),author:"解放网",url:"https://mini.eastday.com/a/200529152233066.html?qid=02263"},
									{img_url: "https://06imgmini.eastday.com/mobile/20200529/20200529152111_b4ac1aeba1d2553cdee9253daca631e4_2_mwpm_03200403.jpg",title: "太萌了！儿童节一起看“宝贝们的演唱会”，最小表演者才3岁", date:this.getTime(),author:"上观新闻",url:"https://mini.eastday.com/a/200529152111607.html?qid=02263"},
									{img_url: "http://09imgmini.eastday.com/mobile/20200529/20200529151759_d820ea30793f69ebdba5bbd8d43238b3_3_mwpm_03200403.jpg",title: "荣耀再发新机，麒麟990+矩形四摄，性能与价格都很满意", date:this.getTime(),author:"科技加速度",url:"https://mini.eastday.com/a/200529152047231.html?qid=02263"},
									{img_url: "https://09imgmini.eastday.com/mobile/20200529/20200529151207_f7f3b3b1d19af54139d9e5da6957fbb9_1_mwpm_03200403.jpg",title: "美驱逐舰非法闯入我西沙领海，解放军海空兵力全程监视查证、警告驱离！", date:this.getTime(),author:"解放网",url:"https://mini.eastday.com/a/200529151207901.html?qid=02263"},
									{img_url: "https://03imgmini.eastday.com/mobile/20200529/20200529150906_4c31a3660b93f27593f2e31016954dd4_1_mwpm_03200403.jpg",title: "我们回来了！明年再见", date:this.getTime(),author:"广州日报",url:"https://mini.eastday.com/a/200529150906366.html?qid=02263"},
							]
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