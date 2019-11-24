<template>
    <div class="list">
      <ul>
        <li v-for="item in Data" :key="item.productId">
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
export default {
  props:['currTabsTitle'],
    data(){
      return {
        Data:[]
      }
    },
    methods:{
      // 畅销产品
      getIndexClassPrice0(){
        this.$axios({
          url:"/api/api/product/product/product_list?c=h5&s=20000&t=1574154535426&v=1.0&category_id=0&sort_field=2&sort_order=1&pn=1&ps=6",
        }).then(res => {
          let data = res.data.data
          this.Data = data.pageList
        }).catch(err => {
          console.log(err)
        })
      },
      // 翻译产品
      getIndexClassPrice57(){
        this.$axios({
          url:"/api/api/product/product/product_list?c=h5&s=20000&t=1574154603547&v=1.0&category_id=57&sort_field=2&sort_order=1&pn=1&ps=6",
        }).then(res => {
          let data = res.data.data
          this.Data = data.pageList
        }).catch(err => {
          console.log(err)
        })
      },
      // 糖猫产品
      getIndexClassPrice59(){
        this.$axios({
          url:"/api/api/product/product/product_list?c=h5&s=20000&t=1574154809429&v=1.0&category_id=59&sort_field=2&sort_order=1&pn=1&ps=6",
        }).then(res => {
          let data = res.data.data
          this.Data = data.pageList
        }).catch(err => {
          console.log(err)
        })
      },
      // 糖猫配件
      getIndexClassPrice61(){
        this.$axios({
          url:"/api/api/product/product/product_list?c=h5&s=20000&t=1574155080654&v=1.0&category_id=61&sort_field=2&sort_order=1&pn=1&ps=6",
        }).then(res => {
          let data = res.data.data
          this.Data = data.pageList
        }).catch(err => {
          console.log(err)
        })
      },
    },
    mounted(){
      if(this.$route.fullPath == '/pages/cate/cate-list?id=0'){
        this.getIndexClassPrice0()
      }
      if(this.$route.fullPath == '/pages/cate/cate-list?id=57'){
        this.getIndexClassPrice57()
      }
      if(this.$route.fullPath == '/pages/cate/cate-list?id=59'){
        this.getIndexClassPrice59()
      }
      if(this.$route.fullPath == '/pages/cate/cate-list?id=61'){
        this.getIndexClassPrice61()
      }
    }
}
</script>

<style scoped lang="stylus">

</style>
<