<template>
  <div class="app">
      <Header v-if="$route.meta.flagHeader"/>
      <transition name="fade">
          <router-view ></router-view>
      </transition>  

      <Footer v-if="$route.meta.flagFooter"/>
  </div>
</template>

<script>
import Header from "./views/publicCom/header.vue"
import Footer from "./views/publicCom/footer.vue"
export default {
  components:{
    Header,
    Footer
  },
  created(){
    let load = document.getElementById("loading")
    if(load){
        document.body.removeChild(load)
    }
  }
}
</script>
<style lang="stylus" scoped>
  *
    margin 0
    padding 0
  .app 
    width 100%
    height 100%
    display flex
    flex-direction  column
    .mint-header
      background-color #fff!important

</style>