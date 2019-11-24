<template>
  <div class="indexClass">
    <Tabs @sendPageLoad="sendPageLoad"/>
  </div>
</template>
<script>
import Tabs from '../publicCom/tabs.vue'
import bus from '../../../bus'
import '../../../../assets/shopList.styl'
export default {
  components:{
     Tabs,
  },
  data(){
    return {
      pageLoad : ''
    }
  },
  methods:{
    sendPageLoad(data){
      this.pageLoad = data
    }
  },
  mounted(){
    bus.$emit("ShowBack" ,{data:true,data1:"分类",data2:false})
  },
}
</script>
<style lang='stylus' scoped>
.indexClass
  flex 1
  padding-bottom .48rem
  overflow auto 
</style>