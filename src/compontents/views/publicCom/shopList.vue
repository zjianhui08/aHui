<template>
    <div class="list" ref="indexEle" v-show="arrStrGroup">
      <ul>
        <li v-for="(item,i) in Data" :key="i" :id="`shopId${item.productId}`">
          <router-link :to="`/detail?id=${item.productId}`"> 
            <div class="shopImg">
              <img :src="item.image" alt="">
            </div>
            <div class="shopTxt">
              <p class="shopName">{{item.name}}</p>
              <p class="shopDes">{{item.desc}}</p>
              <div class="pricList">
                <p class="price">￥{{item.salePrice/100}}</p>
                <span class="">
                  <i class="iconfont icon-cart1"></i>
                </span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>  
    </div>
</template>

<script>
  import arrStrGroup from '../../../data/cxProdectNormal'
  import BScroll from "better-scroll"
export default {
  props:['currTabsTitle'],
    data(){
      return {
        Data:[],
        arrStrGroup:[],
        pageIndex:1,
        pageLoad:false,
        
      }
    },
    methods:{
      sendpageLoad(){
        this.$emit('sendPageLoad',this.pageLoad)
      },
      // 渲染购物车推荐
      getShopcarData(){
        this.$axios({
          url:"/api/api/product/product/product_list?c=h5&s=20000&t=1574049236480&v=1.0&category_id=0&sort_field=1&sort_order=2&pn=1&ps=4"
        }).then(res => {
          let data = res.data.data
          this.Data = data.pageList
        }).catch(err => {
          console.log(err)
        })
      },
      // 上拉加载 条件：滚动高度+ 最外层高度>= 当前元素的容器高度
      handleScroll(){
        const appHeight = document.querySelector('.indexClass').clientHeight,
              tabTileH = document.querySelector('.tabsTitle').clientHeight,
              indexScroll = document.querySelector('.indexClass').scrollTop,
              clientHeight = document.querySelector('.tabs').clientHeight,
              headerH = document.querySelector('.header'),
              tabsTitleScrollTop = document.querySelector('.tabsTitle').offsetTop
        // console.log('手机高度'+ appHeight,'滚动高度'+ indexScroll,'容器高度'+ clientHeight)

              if(appHeight + indexScroll >= clientHeight){
                if(this.pageIndex >= this.arrStrGroup.length){
                  console.log('慢点滑，都没数据了呢~')
                }else{
                  this.getIndexClassNormal0()
                }
              }

      },
      // 畅销产品的默认页
      getIndexClassNormal0(){
        this.$axios({
          url:`/api/api/product/product/product_list?c=h5&s=20000&t=${this.arrStrGroup[this.pageIndex-1]}&v=1.0&category_id=0&sort_field=1&sort_order=2&pn=${this.pageIndex}&ps=6`,
        }).then(res => {
          let data = res.data.data.pageList
           ++this.pageIndex
          this.pageLoad = true
          this.sendpageLoad()
          this.Data = this.Data.concat(data)
        }).catch(err => {
          console.log(err)
        })
      },
      // 翻译产品的默认页
      getIndexClassNormal57(){
        this.$axios({
          url:"/api/api/product/product/product_list?c=h5&s=20000&t=1574148991310&v=1.0&category_id=57&sort_field=1&sort_order=2&pn=1&ps=6",
        }).then(res => {
          let data = res.data.data
          this.Data = data.pageList
        }).catch(err => {
          console.log(err)
        })
      },
      // 糖猫产品的默认页
      getIndexClassNormal59(){
        this.$axios({
          url:"/api/api/product/product/product_list?c=h5&s=20000&t=1574149131895&v=1.0&category_id=59&sort_field=1&sort_order=2&pn=1&ps=6",
        }).then(res => {
          let data = res.data.data
          this.Data = data.pageList
        }).catch(err => {
          console.log(err)
        })
      },
      // 糖猫配件的默认页
      getIndexClassNormal61(){
        this.$axios({
          url:"/api/api/product/product/product_list?c=h5&s=20000&t=1574149096455&v=1.0&category_id=61&sort_field=1&sort_order=2&pn=1&ps=6",
        }).then(res => {
          let data = res.data.data
          this.Data = data.pageList
        }).catch(err => {
          console.log(err)
        })
      },
    },
    mounted(){
        this.arrStrGroup = arrStrGroup
      if(this.$route.path == '/pages/cate/cate-list'){
        document.querySelector('.indexClass').addEventListener("scroll",this.handleScroll)
      }  
      if(this.$route.name == 'shopCar'){
        this.getShopcarData()
      }
      if(this.$route.fullPath == '/pages/cate/cate-list?id=0'){
        this.getIndexClassNormal0()
      }
      if(this.$route.fullPath == '/pages/cate/cate-list?id=57'){
        this.getIndexClassNormal57()
      }
      if(this.$route.fullPath == '/pages/cate/cate-list?id=59'){
        this.getIndexClassNormal59()
      }
      if(this.$route.fullPath == '/pages/cate/cate-list?id=61'){
        this.getIndexClassNormal61()
      }
    },
    beforeDestory(){
       document.querySelector('.indexClass').removeEventListener("scroll",this.handleScroll)
    }
}
</script>

<style scoped lang="stylus">
    .list
      overflow scroll  
</style>
<