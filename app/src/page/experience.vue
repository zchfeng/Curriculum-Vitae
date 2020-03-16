<template>
    <div id="experience">
		<div class="h_title">工作经历</div>
       <div class="experience_text" v-for="(experience,index) in experience_list" :key="index">
            <label class="label">经验{{++index}}</label>
            <div v-for="(item,key) in experience" :key="key">
                <span class="title">{{key}}：</span>
                <span class="value">{{item}}</span>
            </div>
        </div>
        <goto :goto_title="'基础资料'" :to="'left'" url="base"></goto>
		<goto :goto_title="'个人评价'" :to="'right'" url="appraise"></goto>
    </div>
</template>
<script>
import Goto from '@/components/goto.vue'
export default {
    components:{
        Goto
    },
    data(){
        return { 
          experience_list:[
            {
                '公司名': '1111',  
                '工作时间': '222',
                '职责': '333',
            }
            ] 
        }
    }
}
</script>
<style lang="stylus" scoped>
    .experience_text
        .label
            margin-bottom 20px
            display inline-block
        .title
            margin-left 20px
</style>