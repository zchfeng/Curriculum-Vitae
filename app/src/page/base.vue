<template>
	<div id="base">
		<div class="h_title">基础信息</div>
		<div class="base_list">
			<div class="img">
				<img src="./img/logo.png">
			</div>
			<div class="text" v-for="(base,index) in base_list" :key="index">
				<label class="label">{{base.label}}：</label>
				<span class="value">{{base.value}}</span>
			</div>
		</div>
		<goto :goto_title="goto_title" :to="'right'" url="experience"></goto>
		<goto :goto_title="'首页'" :to="'left'" url="index"></goto>
	</div>
</template>
<script>
import Goto from '../components/goto.vue'
export default {
	components:{
		Goto
	},
    data(){
			return {
				base_list: [
					{label:"姓名",value:'123'},
					{label:'年龄',value:'123'},
					{label:'籍贯',value:'123'},
					{label:'工作年限',value:'123'},
					{label:'身份证号码',value:'123'},
					{label:'毕业学校',value:'123'},
					{label:'专业',value:'123'},
					{label:'岗位',value:'123'},
					{label:'电话号码',value:'123'},
					{label:'电子邮箱',value:'123'},
				],
				goto_title: "工作经历"
			}
		},
	mounted(){
		
	},
	computed:{},
	methods:{}
}
</script>
<style lang="stylus" scoped>
	.base_list
		flex-wrap wrap
		div.img 
			width 50%
			max-height 200px
			img 
				width 200px
			float left
		div.text
			width 50%
			overflow hidden
			white-space nowrap
			text-overflow ellipsis
			word-break break-all
			margin-bottom 10px
			float left
</style>