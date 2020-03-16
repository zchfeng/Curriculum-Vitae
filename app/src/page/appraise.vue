<template>
    <div id="appraise">
		<div class="h_title">个人评价</div>
        <div class="appraise_text">
            <label class="label">个人评价：</label>
            <span class="value">111111111111</span>
        </div>
        <div id="chart" style="width: 500px;height:400px;"></div>
        <goto :goto_title="'工作经验'" :to="'left'" url="experience"></goto>
		<goto :goto_title="'首页'" :to="'right'" url="index"></goto>
    </div>
</template>
<script>
import echarts from 'echarts'
import Goto from '@/components/goto.vue'
export default {
    components:{
        Goto
    },
    data(){
        return {
            echarts_date:{
                title:{
                    text: '个人评价'
                },
                yAxis:{
                    type:"category",
                    data:['JS(ES6)','HTML(5)','CSS(3)','Vue','React','uni-app','node']
                },
                xAxis:{
                    type:'value'
                },
                series:[{
                    data:[4,3,3,4,1,2,1],
                    type:'bar'
                }],
                grid: {
                    left: '2%',
                    right: '2%',
                    bottom: '3%',
                    containLabel: true
                },
            }
        }
    },
    mounted(){
        var myChart = echarts.init(document.getElementById('chart'))
        myChart.setOption(this.echarts_date)
    },
    methods:{}
}
</script>
<style lang="stylus" scoped>
    #appraise
        .value
            display block
            margin-left 20px
        #chart
            margin-top 40px
</style>