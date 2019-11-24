<template>
  <div class="list">
    <ul>
      <li v-for="item in shopList3" :key="item.id"  :id="`shopId${item.id}`">
        <router-link :to="`/detail?id=${item.id}`">
          <div class="shopImg">
            <img :src="item.img" alt="">
          </div>
          <div class="shopTxt">
            <p class="shopName">{{item.title}}</p>
            <p class="shopDes">{{item.desc}}</p>
            <div class="pricList">
              <p class="price">￥{{item.price}}</p>
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
  data(){
      return {
        noticeFlag:0,
        shopList3:[],
      }
    },
     methods:{
      getIndexData(){
        this.$axios({
          url:"/api/json/mobile/topic-home.json?c=h5&s=20000&t=1573991185314&v=1.0",
      })
      .then(res => {
        let data = res.data.data
        this.data = data
        this.shopList3 = data.mods[19].list
      }).catch(err => {
        console.log(err)
     })
    },
  },
  created(){
    this.getIndexData()
  }
}
</script>

<style scoped lang="stylus">
</style>