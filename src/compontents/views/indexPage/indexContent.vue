<template>
  <div>
    <div class="navs">
      <ul>
        <li v-for="item in navs" :key="item.link">
          <router-link :to="item.link">
            <div class="productImg">
              <img :src="item.img" alt="">
            </div>
            <p class="pdoductTxt">
              {{item.title}}
            </p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="notice">
      <ul class="noticeUl" ref="noticeUl" >
        <li v-for="item in notice" :key="item.title" :to="item.link">
          <!-- <vouter-link > -->
            <div class="ico">
              <i class="iconfont icon-laba"></i>
            </div>
            <span class="noticeTxt ellipsis">
              {{item.title}}
            </span>
            <span class="look">查看</span>
          <!-- </vouter-link> -->
        </li>

      </ul>
    </div>

    <IndexList/>

    <div class="centerEl">
      <!-- <vouter-link :to="title1.link"> -->
        <p class="centerElTxt" >
          <span class="products">{{title1.title}}</span>
          <span class="tolook">查看更多</span>
        </p>
        <div class="centerImg">
          <img :src="title1Bac.img" alt="">
        </div>
      <!-- </vouter-link> -->
    </div>

    <IndexList2/>

    <div class="centerEl">
      <p class="centerElTxt" >
          <span class="products">{{title2.title}}</span>
          <span class="tolook">查看更多</span>
        </p>
        <div class="centerImg">
          <img :src="title2Bac.img" alt="">
        </div>
    </div>

    <IndexList3/>

  </div>
</template>

<script>
  import '../../../../assets/indexList.styl'
  import IndexList from '../publicCom/indexList.vue'
  import IndexList2 from '../publicCom/indexList2.vue'
  import IndexList3 from '../publicCom/indexList3.vue'
export default {
    components:{
      IndexList,
      IndexList2,
      IndexList3,
      },
    data(){
      return {
        noticeFlag:0,
        bannerImg : [],
        navs:[],
        notice:[],
        title1:[],
        title1Bac:[],
        title2:[],
        title2Bac:[],
        start:false,
        timeId:null
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
        this.navs = data.mods[2].list
        this.notice = data.mods[4].list
        this.title1 = data.mods[9]
        this.title2 = data.mods[15]
        this.title1Bac = data.mods[11].list[0]
        this.title2Bac = data.mods[17].list[0]
      }).catch(err => {
        console.log(err)
     })
    },
    noticeBanner(){
       this.timeId =setInterval(()=>{
        if(this.noticeFlag%2){
          this.$refs.noticeUl.style.top = '0px'
          this.noticeFlag++
        }
        else{
           this.$refs.noticeUl.style.top = '-30px'
           this.noticeFlag++
        }
      },4000)
    }
  },
    created(){
      this.getIndexData()
      
    },
    mounted(){
      
      if(this.$route.path == '/index'){
        this.noticeBanner()
      }
    },
    beforeDestroy(){  // 组件销毁前调用
     clearTimeout(this.timeId)
   }
}
</script>

<style scoped lang="stylus">
    .icon-laba
      font-size .15rem
      color #EC7774
    .icon-cart1 
      color #EE6C68
      font-size .16rem
    .navs
      height 0.65rem
      padding  0 .12667rem
      ul
        width 100%
        height 100%
        display flex
        justify-content space-around
        align-items center
        overflow hidden
        li 
          .productImg
            width 0.42rem
            height 0.42rem
            margin 0 auto
            img 
              width 100%
              height 100%
              display block
          .pdoductTxt
            font-size .14rem
    .notice 
      height 0.26rem
      margin .03rem 0
      position relative
      overflow hidden
      .noticeUl 
        line-height 0.26rem
        width auto
        background-color #F2F2F2
        border-radius .05rem
        padding-left .05rem
        padding-right .05rem
        position absolute
        margin-left .05rem
        left 0
        top 0
        transition top .5s
        li
          display flex
          justify-content space-between
          align-items center
           width .4rem
          .ico
            font-size .12rem
          .noticeTxt
            padding 0 .1rem
            font-size .1rem
            color #262626
            text-align center
            font-weight 200
            width 2.6rem
            display block
          .look
            font-size .11rem
            color #8c8c8c
            width .4rem
    .centerEl
      height 1.7rem
      background-color #F8F8F8
      padding 0 0.1rem
      .centerElTxt
        display flex
        justify-content space-between
        align-items center
        height 0.4rem
        .products
          font-size .192rem
          color #262626
          font-weight 700
        .tolook
          text-align right
          font-size .13rem
          color #8c8c8c
      .centerImg
        width 100%
        height 1.35rem
        img 
          width 100%
          height 100%
</style>