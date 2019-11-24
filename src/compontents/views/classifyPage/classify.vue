<template>
    <div class="classBox">
      <ul class="cateBox">
        <li v-for="item in classData" :key="item.categoryId"  >
          <div class="imgBox">
            <img :src="item.categoryImage" alt="">
          </div>
          <div class="shopList">
            <ul>
              <li v-for="item1 in item.productList" :key="item1.productId" :id="`shopId${item1.productId}`">
                <router-link :to="`/detail?id=${item1.productId}`">
                  <div class="shopImg">
                    <img :src="item1.image" alt="">
                  </div>
                  <div class="shopText">
                    <p class="shopTitle">{{item1.name}}</p>
                    <p class="shopPrice">￥{{item1.salePrice}}</p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import bus from '.././../../bus'
export default {
  data(){
    return {
      classData:[]
    }
  },
  methods:{
    getClassData(){
      this.$axios({
        url:"/api/json/mobile/cate-home.json?c=h5&s=20000&t=1574046872431&v=1.0"
      })
      .then(res => {
        let data = res.data.data
        this.classData = data.cateHome
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted(){
    bus.$emit("ShowBack" ,{data:false,data1:"分类",data2:false})
  },
  created(){
      this.getClassData()
    }

}
</script>

<style lang="stylus" scoped>
  .classBox
    flex 1
    overflow auto
    padding: 0 .1rem 
    padding-bottom .48rem
    .cateBox
      width 100%
      .imgBox
        margin-top .1rem
        margin-bottom .04rem
        text-align center
        height 1.05rem
        img 
          width 100%
          height 100%
          display block
      .shopList
        margin-top .1rem
        margin 0 auto
        height auto
        margin-top .1rem
        ul 
          width 100%
          overflow hidden
         li
          float left 
          text-align center
          width 33.33333%
          margin-bottom .16rem
          height 1.65rem
          a
          .shopImg
            width 100%
            height 65%
            img
              width 100%
              height 100%
          .shopText
            height 35%
            .shopTitle
              font-size .12rem
              margin .1rem 0 .06rem
              color #262626
            .shopPrice 
              color #eb4949
              font-weight 700
              font-size .12rem
              // margin-top -0.5rem
</style>