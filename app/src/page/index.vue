<template>
    <div id="index" >
        <div class="cover_title">个人简历</div>
        <div class="catalog">
            <p v-for="(catalog,index) in catalog_liat" :key="index" @click="goto(catalog)">{{catalog.title}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
          catalog_liat : [{title:'基础信息',url:'base'},{title:'工作经历',url:'experience'},{title:'个人评价',url:'appraise'}]  
        }
		},
		methods:{
			goto(catalog){
				this.$router.push(catalog.url)
			}
		}
}
</script>
<style lang="stylus" scoped>
	.cover_title
		text-align center
		margin-top 200px
		margin-bottom 50px
		font-size 40px
		font-weight 600
		color  #3385ff
	.catalog
		p
			text-align center
			font-size 20px
			cursor pointer
			line-height 30px 
        
         
</style>
