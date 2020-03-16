<template>
    <div id="goto" :class="to" @click="goto">
        <div class="to_left" v-if="to == 'left'"></div>
        {{goto_title}}
        <div class="to_right" v-if="to == 'right'"></div>
    </div>
</template>
<script>
export default {
    name:'goto',
    props:{
        goto_title:String,
        to:String,
        url:String
    },
    methods:{
        goto(){
            this.$router.push(this.url)
        }
    }
}
</script>
<style lang="stylus" scoped>
    #goto
        position absolute
        bottom 200px
        background #3385ff
        border-bottom 1px solid #2d78f4
        padding 5px
        color #fff
        display flex
        line-height 20px
        cursor pointer
        width 100px
        justify-content center
        .to_left
            width 0
            height 0
            border-right 10px solid #ccc
            border-top 10px solid transparent
            border-bottom 10px solid transparent
            margin 0 5px
        .to_right
            width 0
            height 0
            border-left 10px solid #ccc
            border-top 10px solid transparent
            border-bottom 10px solid transparent
            margin 0 5px
            cursor pointer
    .left
        left 20px
    .right
        right 20px
</style>