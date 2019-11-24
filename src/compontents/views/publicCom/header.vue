<template>
      <div class="header">
         <!-- <i class="iconfont icon-sougou1" style="z-index:1000" :class="{icoTitle:haslog}"></i> -->
        <header>
          <mt-header :title="title" :class="{hasBac:hasBac}">
            <router-link to="/" slot="left">
              <mt-button icon="back" v-show="ShowBack" @click="returnPre"></mt-button>
            </router-link>
          </mt-header>
        </header>
      </div>

</template>
<script>
import bus from '../../../bus'
export default {
  data(){
    return {
      title: '搜狗有品',
      ShowBack:false,
      hasBac:true,
      haslog: true
    }
  },
   methods:{
    returnPre(){
      this.$router.go(-1)//回到上一个页面
    }
  },
   mounted(data){
    //  实现有无箭头
     // data是控制有无返回箭头，data1是控制标题，data2是控制有无背景
      bus.$on("ShowBack",data=>{
          this.ShowBack = data.data
          this.title = data.data1
          this.hasBac = data.data2
      })
  }
}
</script>
<style lang="stylus" scoped>
  .header 
    width 100%
    height .48rem
    overflow hidden
    line-height 0.48rem
    header 
      width 100%
      height .48rem
      position fixed
      top 0
      left 0
      text-align center
      line-height 0.48rem
      color #000
      font-size .17rem
    .hasBac
      background-color #202020!important
      color #fff
</style>