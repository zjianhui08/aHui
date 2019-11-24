<template>
  <div class="tabs">
      <div class="tabsTitle" :class="{isFixed :isFixed }">
        <mt-navbar v-model="selected" >
            <mt-tab-item id="1" >
              <a href="#1" @click="toggleData($event)" >
                <span class="back" v-show = 'isFixed' @click="backToTop($event)">back</span>
                默认
              </a>
            </mt-tab-item>
            <mt-tab-item id="2" >
              <a href="#2" @click="toggleData($event)">销量</a>
            </mt-tab-item>
            <mt-tab-item id="3" >
              <a href="#3" @click="toggleData($event)">价格</a>
            </mt-tab-item>
        </mt-navbar>
      </div>
      <div class="tabsCon">
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <ShopList :currTabsTitle="currTabsTitle" @sendPageLoad = "sendPageLoad"/>
          </mt-tab-container-item>

          <mt-tab-container-item id="2">
             <getIndexClassSalesNum :currTabsTitle="currTabsTitle" />
          </mt-tab-container-item>

          <mt-tab-container-item id="3">
             <getIndexClassPrice :currTabsTitle="currTabsTitle" />
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      
  </div>
</template>

<script>
  import ShopList from '../publicCom/shopList.vue'
  import getIndexClassSalesNum from '../publicCom/getIndexClassSalesNum.vue'
  import getIndexClassPrice from '../publicCom/getIndexClassPrice.vue'
  import BScroll from "better-scroll"
export default {
  components:{
     ShopList,
     getIndexClassSalesNum,
     getIndexClassPrice,
     sendpageLoad:false
     
  },
  data(){
    return {
      selected :"1",
      currTabsTitle:'默认',
      isFixed:false
    }
  },
  methods:{
    backToTop(e){
      document.querySelector('.indexClass').scrollTop = 0
    },
    sendPageLoad(data){
      this.sendpageLoad = data
      if(this.sendpageLoad){
        this.sendpageLoad = true
      }
    },
    // 上拉的回弹效果
    scrollY(){
      if(this.isFixed){
        const indexClass = document.querySelector('.indexClass')
          if( !this.scroll ){
              this.scroll = new BScroll(indexClass,{
                  scrollY : true,
                  click: true,
              })
              
          }else{
              this.scroll.refresh()
              
          }
        }
      },
      // 吸顶
    handleScroll(){
        const indexScroll = document.querySelector('.indexClass').scrollTop
          if(indexScroll >= 5){
              this.isFixed = true
          }else{
              this.isFixed = false
          }
      },
    sendpageLoad(){
      this.$emit('sendPageLoad',this.sendpageLoad)
    },
    toggleData(e){
      this.currTabsTitle = e.toElement.innerText
    },
  },
  mounted(){
    this.sendpageLoad()
    if(this.$route.path == '/pages/cate/cate-list'){
        document.querySelector('.indexClass').addEventListener("scroll",this.handleScroll)
      } 
  },
  updated(){
    this.scrollY()
  }
}
</script>

<style scoped lang="stylus">
  .mint-navbar 
    border none
  .mint-navbar .mint-tab-item>a.is-selected   
    border none
    color #ea413c
    .mint-tab-item-label
      font-size .16rem!important
      line-height .2rem

a.isSelected
  color #ea413c
.tabs
  position relative
  .tabsTitle
    width 100%
    height .5rem
  .tabsCon
    z-index 100
  .isFixed
    position fixed
    top 0rem
    // z-index 1000

.back
  font-size .11rem
  margin-right .1rem
</style>