<template>
  <div class="discussBox" v-if="discussData.pageList">
    <div class="discuss" v-if="discussData.pageList">
      <p class="discussTitle">
        <span class="leftT">商家评价
          <a href="javascript:;">({{discussData.totalCount}})</a>
        </span>
        <span class="rightT">  满意度
          <a href="javascript:;">{{discussData.satisfaction}}%</a>
          &gt;
        </span>
      </p>
      <div class="discussCon"  v-for="(item,i) in discussData.pageList" :key="i">
        <div class="userInf">
          <div class="userImg">
            <img src="data:image/png;base64,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" alt="">
          </div>
          <div class="userName" >
            <p>{{item.nickName}}</p>
            <span>{{item.productScore}}&nbsp;&nbsp;星</span>
          </div>
        </div>

        <div class="discussTxt">
          {{item.content}}
        </div>
        <ul class="discussImg">
          <li v-for="(item,i) in item.imageList" :key="i"><img :src="item" alt=""></li>
        </ul>
      </div>
    </div>
  </div>
  
</template>

<script>
import bus from '../../../bus'
export default {
   data(){
    return {
      discussData:{},
    }
  },
  methods:{
    getDiscussData(){
      this.$axios({
        url:`/api/api/comment/list?c=h5&s=20000&t=1574428962311&v=1.0&productId=${this.$route.query.id}&pn=2&ps=10`
      }).then(res => {
        this.discussData = res.data.data
      }).catch( err => {
        console.log(err)
      })
    }
  },
  created(){
    this.getDiscussData()
  },
  mounted(){
    bus.$emit("ShowBack" ,{data:true,data1:"商品评价",data2:false})
  }
}
</script>

<style scoped lang='stylus'>
  .discussBox
    .discuss
        width 100%
        padding .1rem 0
        font-size .14rem
        .discussTitle
          // width 14.72rem
          height .5rem
          display flex
          justify-content space-between
          align-items center
          margin 0 .16rem
          .leftT
            font-size .12rem
            color #262626
            a
              color #262626
          .rightT
            font-size: .11rem;
            color #8c8c8c
            a
              color #ea413c
        .discussCon
           margin 0 .16rem
           margin-bottom .2rem
          .userInf
            display flex
            .userImg
              width .32rem
              height .32rem
              img
                width 100%
                height 100%
            .userName
              margin-left .06rem 
              font-size .12rem
              color:#262626
              span
                color: rgb(234, 65, 60) 
          .discussTxt
            font-size .128rem
            color #262626
            line-height .18rem
            margin-top .08rem
          .discussImg
            margin-top: .105rem
            clear both
            overflow hidden
            li
              float left
              width 0.98rem
              height .98rem
              margin-right .08rem
              img
                width 100%
                height 100%

</style>