<template>
    <div class="index">
      <Banner :bannerImg="bannerImg"/>
      <IndexContent/>      
    </div>
</template>
<script>
import bus from '.././../../bus'
import Banner from '../publicCom/banner.vue'
import IndexContent from './indexContent.vue'
export default {
  name:"index",
  data(){
    return {
      bannerImg: []
    }
  },
  components:{
    Banner,
    IndexContent
  },
   methods:{
      getIndexData(){
        this.$axios({
          url:"/api/json/mobile/topic-home.json?c=h5&s=20000&t=1573991185314&v=1.0",
      })
      .then(res => {
        let data = res.data.data
        
        this.bannerImg = data.mods[0].list
        
        
      }).catch(err => {
        console.log(err)
     })
    }
  },
  mounted(){
    bus.$emit("ShowBack" ,{data:false,data1:"搜狗有品",data2:true})
    this.getIndexData()    
  },  
}
</script>
<style lang="stylus" scoped>
  .index
    padding-bottom .48rem
    pading 0 .1rem
    flex 1
    overflow auto
    
</style>