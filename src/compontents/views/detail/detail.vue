<template>
  <div class="detail" :class="{hasFixed:flagGray}" :id = "`id${product.productId}`">
    <div class="shopDetail" :class="{coverGray:flagGray}">
      <div class="Content">
        <div class="comeBack">
          <i class="iconfont icon-houtui" @click="comeBack"></i>
        </div>
        <div class="bannerNum">
          <span class="presentIndex">1</span>/<span class="totalSize">12</span>
        </div>
        <div class="shopImg" :class="{coverGray1:flagGray}"  @click="TypeNone">
          <mt-swipe :show-indicators="false" :auto="0" class="imgBox" :class="{coverGray1:flagGray}" >
            <mt-swipe-item v-for="(item,i) in arrImg" :key="item" >
              <img :src="item" alt="" :class="`index${i}`" @touchmove="dragImg($event)" >
            </mt-swipe-item>
          </mt-swipe> 
        </div>
        <div class="shopText" v-if="product">
          <div class="shopTitle" ref="shopTitle">{{product.name}}</div>
          <div class="shopDes">{{product.desc}}</div>
          <div class="shopPriceList flex">
            <span v-if="shopPrice">￥{{shopPrice}}.00</span>
            <span class="free flex_center">包邮</span>
            <span></span>
          </div>
        </div>
        <div class="shopSelect" v-if="shopType['61:257']">
          <div class="hasSelected">
            <div class="selectText flex">
              <span class="flex_center">已选</span>
                <p class="shopColor" @click="displayType" ref="shopColor">
                  {{shopType['61:257'].sku.skuName}}
                </p>
            </div>
            <span class="clickShow flex_center"  @click="displayType">
              <i class="iconfont icon-dayuhao-copy-copy"></i>
            </span>
          </div>
          <div class="policy">
              <ul>
                <li v-for="item in product.guaranteeTags" :key="item">
                  <i class="iconfont icon-queren1"></i>
                  <span>{{item}}</span>
                </li>
              </ul>
          </div>
        </div>
        <div class="discuss" >
          <p class="discussTitle">
            <span class="leftT">商家评价
              <a href="javascript:;">({{discussData.totalCount}})</a>
            </span>
            <router-link :to="`/discuss?id=${this.$route.query.id}`">
              <span class="rightT" >  满意度
                <a href="javascript:;">{{discussData.satisfaction}}%</a>
                <i class="iconfont icon-dayuhao-copy-copy"></i>
              </span>
            </router-link>
           
          </p>
          <div class="discussCon" v-if="show">
            <div class="userInf">
              <div class="userImg">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAABU1BMVEUAAADY6f+QxP/Y6f/Y6f/Y6f/Y6f+01//G4P/Y6f/Y6f/Y6f/Y6f/Y6f/Y6f/Y6f/Y6f/Z6v+PxP/Y6f+QxP+QxP/Y6f/Y6f/Y6f/Y6f+QxP/Y6f+QxP/Y6f/Y6f/Y6f+QxP/Y6f/Y6f/Y6f/Y6f/Y6f/Y6f+PxP/Y6f+y1f/Y6f/Y6f/Y6f+QxP/Y6f/Y6f/Y6f+QxP/Y6f+QxP+QxP/Y6f/Y6f+QxP/Y6f/Y6f+QxP+QxP/Y6f+l0P+QxP/Y6f+QxP/////y9/+Mwv+Pw//e7P/b6v/c7P/U5/+IwP+Kwf/W6P+Hv/+Txv/7/P/x9//0+f/Q5f+Fvv/2+v/j7/+YyP+Vx//5/P/S5v/F4P/C3v+hzf/9/v+dy//n8v/g7v+n0P+jzv/t9f/q8//K4v/H4f+t0/+/3f+42f+q0v+01/+w1f+byv+KwP/N5P+82/+AvP/XtIJwAAAAP3RSTlMAXfK3ryIOCgTE99y9TUX7kX548+bY16KFdVM/IRvw55tXOjft5OBEJxjqxpuPamRT79C9qahtE+vKyjEsZ2dL5EUFAAAIPklEQVRo3rWaV1fbMBSATRlhldlCgbZ0Mjoo3buSI9nyzCR7ESAhYf//pyYskdoaDun30tOT9nznXl/p2rpSgjK0ttQ3/WZgZO7l8uPHyy/nRgbeTPctrQ0p/5OhiYX5D7PAh9kP8wsT/0k+uDEwBriMDWwM9tza1z8KJBjt7+ule2LqG5Dm8ZuJ3liHN8dBQMY3h2/v3RwBXfD66W2T3C+jITrw0D9xm5Kal9Hq8Vxc17zu+a7L7J1cSZE9F27niOb54dtGV9o1mmWh2LKsalbzyfdacG/fKyDJ1r6FIXbcWgV4eNUXdA1NAVl0bduELSx3T7OBh6lAK+vRuLy3so/gOWYqS/wW9SN577MxtkcnV2htiL4PEbzAaRLdbwt/Jr14XzCj2yLANrLZ+DknJ3v5RhVdeSFGexrw4YXkkr7LaAdEy+YPmtVC6ego1SbtQmRaCMNrrKbu3zruSpUzQ0v2minsOJaFrsGwE+xm/c1Aorg3gS9atgmPLQy5YLxPgD+bIu+Sf54rubSJoRDrUGM16iW+9/msf7yn2IISmFWWGMw+53mH5vy9NerliwsEsJgb4uxX/r2X2EcmlBRXiM4yj7D3sClGYTVEXlrW9RzQWOoplvcpY9uwjxCUNVuolGOanzLa/guGOIcxhAHUB4QhfjHoK2b1X+0AwSAg84BV2/2cHctLZduCwcwopwHpHezRC2ajL5gwGGYJ6Ixke3vkZ2bANRfBgFh5VsifPS2Y5dX2vF7knCX44m3mav6nOQ+Ps1pwNmX9U7VOwm3mD0zEXc9xlnl8uLMHMwPeNjtjxdW8thNR1X0r0VWbAp29eYTlreGbkTnmIYmoF9ilM4dd2HWNuXPKBVx3ICWR0lVKplZKmAhhfBEjMk1PmxKGPM7yxtM0YJyoh9UOkqRxBJFlOo5p4XQjZ13/4+MjwCyv8RtdeJIlzh/f8B5GVA+ZslE7bTROa3pMVU8T+KqsU3HCEk8+Y3Ulin5AS5p6mUS2rx4McukLJ7tLrS+zvGAbXXvrRVXIjmtdimGOLV5ep+2Q1RBLV2KnFFMlOElcienexW6PA2xxCl9WqbujyhApXJgx5okHLtvDLFOcdS/E2LRVOYCDxOLZi1bxjvOtfyl26qokxUJCLAbvaKa5YozKqiw1k4r5uR5aAaJUJw5UaXZcRKuaxcpQS7w0yRYb6bYYm0CVp3oudms88eRSS7wAAKeq0fkLRSaAOO9cbCAEcFhoiecBEKzjxKEaAJJoi1MnXPG8ooS+gxa8nQtbe0HE5WPc3quzOk/8PaQMzgKO+RC1C6USRBxtP57jEtcLZgeVJcCBnB63xOlYEHGyYLY/ojTAZUnpAxy0nNUSH2WCiIvtFmU1BeI+ZZorPnERPG71pSA0WtWFDgXiaeUN4KAbJQua+2og9s4gxqeEL36jDHDFWtOBZi2Y2HAwhic6XzygjAAOdrlmYicbTEwQQqWoQDyizAEOxk7UdRIkmLicRolTdcvgiueUl9yId9T9s7OtYOJY+swpqztZrvilsgx4hNVi7TigWG3AuKpG+REvK48Bj2i70SUDiovJ9v/iix/zxcau2i3lrEC8zBWTYpfeiG5zxa/4xQWMcrcBG0BQXIJBpd1Vsou7NuAzprwGfIxKNFMMlORIJloxROLXSj8QmW2dBKjrJCG6bQAR/Yp4mGYb8XKQajZsGwiZVx4AMTaIyFezAWR4QL8jerOed+W84J0yAaRCzgRavmImlLVRqZAl9+styYBH1+ihvKDAdmS8O+J46XH9AJBLdkyiIQKxmH61TQNJs3AxZ4ABJJmmZ1xCDFHMMW9hcc+6Hr2SNkd53qh8vODVI3oyL4FtlyPMtlBm7Feck/oFIG02yE7Rv5yJEcALFs7Fv4A8hrEV8aiLyYptgCD88hzdis0kHE5mbsgjmWSMlWbRAe4XII+hxaLRaDgciyVbxGKxcOtvuyAYX64GTpOAIhaHwy0ZJRwOKp4cZAxCRGIPAcWfPefkvRaLT8o/ACa9F39QKBtAAr0NqPiJ9csfpdhQKKEVgVPTSHv/MIy47ic2Wtg20ImmCe0rIeoVrCitAuK5RrNwlEq7ZjPi8SZt13XTqaNqvZGL61tEvJYooTFmsEQ7OaimTQu1wPhs20ds4NYvqIVppqsHJxrhhD0WkhtaayBfdR2TTgh8xRDTGa7pVvN0ai4eXr/2TbKWK2CrY+RViHoecmYPtcXUjQo5orG+ICjsEZAWb6J/Lp0gSDwhRw4dz9R8O+4f9HOP2PtmT8ip63iG9IlGsTPkaGTL9Uy2senuE+L3Hu9laOwfLzi0LOgBQU3tfMKRwwT0Yll13WMeG/K9xdWRbM2u+l+ysY62irGb3rwF/cBmwdY8MzZfpm96jZKDoS9OykhGIpk2rT92D0zMnNhnO83T1MWaXhObczHAQvXs1gV6PuUgyMIp2aRzZs1gfeX6hNw/z3RqjtNtoHmlZWVbp+aVdc7lptELr1Z3RFe30DlQgFm/Fo8+F19f0/YtBHsCRvua+BLb1bsuoePqW2O5cY2+0fJ4QC8k9ARnm+h05+AxVckh1DsxtnIanVXzY26tpB5iFWi8AmZgL8EoP61I8qen5uPfijSr93rnvbeqBODhx155Pz5UAhF62xvv25ASlMV7PUjzotIFD5/c1vvkodIdi/dvo72/qHRNaOZ9t9r3MyHlNjx8e6cb7Z234iyL1fcC1xTj4QZlfeZHEO2PmXWlV4RWn9yTDXY1pPSUr4uf7gvr+NPiV+U/MLw605IzpTOrw8r/4+vPxZknH++/v3PN+/sfn8ws/gwa6l9G/T2ssrs6KgAAAABJRU5ErkJggg==" alt="">
              </div>
              <div class="userName" v-if="discussData.pageList">
                <p>{{discussData.pageList[0].nickName}}</p>
                <span>{{discussData.pageList[0].productScore}}&nbsp;&nbsp;星</span>
              </div>
            </div>

            <div class="discussTxt">
              {{discussData.pageList[0].content}}
            </div>
            <ul class="discussImg">
              <li v-for="(item,i) in discussData.pageList[0].imageList" :key="i"><img :src="item" alt=""></li>
            </ul>
          </div>
        </div>

        <div class="DetailTab">
          <div class="shopDetailTit">商品详情</div>
          <div class="detailImgBox">
          </div>
        </div>
      </div>
      <div class="shopType">
        <div class="displayArea">
          <div class="shopShort">
            <div class="shopShortImg" v-if="shopType['61:257']">
              <img :src="shopType['61:257'].sku.image" alt="" v-if="!typeImgAndImg.sku">
              <img :src=" typeImgAndImg.sku.image" alt="" v-if="typeImgAndImg.sku" class="index" ref="indexImg">
            </div>
            <div class="shopShortTxt">
              <p class="shopShortTit" ref="shopShortTit">{{!typeImgAndImg.sku ? product.name : typeImgAndImg.sku.productName}} </p>
              <span class="shopShortPrice" ref="shopShortPrice">￥{{!typeImgAndImg.sku ? shopPrice : typeImgAndImg.sku.linePrice/100}}.00</span>
            </div>
            <div class="close" @click="TypeNone">
              <i class="iconfont" style="font-size:0.14rem">X</i>
            </div>
          </div>
          <div class="shopModel">
            <p class="type_color">颜色</p>
            <ul class="selectList" ref="selectList" @click="selectBorderRed($event)">
              <li  v-for="(item ,i) in shopType" :key="i" :id="i" ref="shoptype">
                {{item.sku.skuName}}
              </li>
            </ul>
          </div>
          <div class="buyNum">
            <p>数量</p>
            <div class="workToNum">
              <span class="flex_center reduce" @click="reduce" :class="{notReduce:isReduce}">-</span>
              <input type="number" value="1" class="shopNum" ref="shopNum">
              <span class="flex_center add" @click="add()" :class="{notReduce:isReduce1}">+</span>
            </div>
          </div>
        </div>
        <div class="addCar " :class="{addCarBottom:flagGray}">
          <div class="toAddCar flex_center" v-show="!flagGray">加入购物车</div>
          <div class="toBuy flex_center" v-show="!flagGray">立即购买</div>
          <div class="buyOrAdd flex_center" v-show="flagGray" @click="sendMyData">{{this.toBuy ? "立即购买" : '加入购物车'}}</div>
        </div>
      </div>
    </div>
    <footer>
      <div class="footerLeft flex">
        <div class="index flex_column" @click="toIndex">
          <i class="iconfont icon-shouye-weixuanzhong"></i>
          <p>首页</p>
        </div>
        <div class="service flex_column">
          <i class="iconfont icon-kefu"></i>
          <p>客服</p>
        </div>
        <div class="shopCar flex_column" @click="toShopCar">
          <i class="iconfont icon-icon1"></i>
          <p>购物车</p>
        </div>
      </div>
      <div class="footerRight flex">
        <div class="appendCar flex_center" @click="displayType($event)">加入购物车</div>
        <div class="buy flex_center" @click="displayType($event)">立即购买</div>
      </div>
    </footer>
  </div>
</template>
<script>
  import bus from  '../../../bus'
export default {
  data(){
    return {
      flagGray: false,
      toBuy: false,
      DetailData:{},
      product:{},
      DetailData1:{},
      shopType:{},
      shopPrice:'',
      typeImgAndImg:[],
      arrImg:[],
      discussData:{},
      isReduce:true,
      isReduce1:false,
      show:false
    }
  },

  methods:{
    // 发送给后台的加购信息
    sendMyData(){
        var shopInf = {
          shopId :this.$route.query.id ,
          shopTitle:this.$refs.shopShortTit.innerText,
          shopType:this.$refs.shoptype.innerText ,
          shopNum :this.$refs.shopNum.value,
          shopImg : this.$refs.indexImg.src ? this.$refs.indexImg.src : '',
          shopPrice:this.$refs.shopShortPrice.innerText.slice(1)
        }
        this.$axios({
          url:'/ips/shopInf',
          method:'post',
          data:shopInf
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
    },
    comeBack(){
      this.$router.go(-1)
    },
    toIndex(){
      this.$router.push("/index")
    },
    toShopCar(){
      this.$router.push("/cart")
    },
    displayType(e){
      const shopType = document.querySelector('.shopType')
      const click  = document.querySelector('.clickShow')
      const close  = document.querySelector('.close')
      shopType.style.bottom = ".5rem"
      this.flagGray = true
      if(e.target.innerText == '立即购买'){
        
        this.toBuy = true
      }else if(e.target.innerText == '加入购物车'){
        this.toBuy = false
      }   
    },
    TypeNone(){
      const shopType = document.querySelector('.shopType')
      const close  = document.querySelector('.close')
      shopType.style.bottom = "-3.5rem"
      this.flagGray = false
      return false
    },
    reduce(){
      const shopNum = document.querySelector(".shopNum")
      let val = Number(shopNum.value)
      if(val <= 2){
        val = 1
        this.isReduce = true
        this.isReduce1 = false
      }else{
        val--
        this.isReduce = false
        this.isReduce1 = true
      }
      shopNum.value = val
    },
    add(){
       const shopNum = document.querySelector(".shopNum")
       let val = Number(shopNum.value)
       
        if(val >= 9){
        val = 10
        this.isReduce1 = true
        this.isReduce = false
        
      }else{
         val++
         this.isReduce1 = false
         this.isReduce = true
      }
      shopNum.value = val
    },
    dragImg(e){
      const len = Number(this.product.image.length)
      document.querySelector('.presentIndex').innerText = e.target.className.slice(5)  - 0 + 1
      document.querySelector('.totalSize').innerText = len  - 0
        
    },
    selectBorderRed(e){
      const shopColor = document.querySelector('.shopColor')
      const selectList = document.querySelector('.selectList')   
      if(e.target.tagName == 'LI'){
        let arr = this.$refs.selectList.children
        for(let i = 0 ,len = arr.length;i < len; i++){
          arr[i].className = ''
        }
        e.target.className = 'active'
        let id = e.target.id
        this.typeImgAndImg = this.shopType[id]
        if(this.typeImgAndImg.sku){
          if(shopColor){
             shopColor.innerText =  e.target.innerText
          }
         
        }
      }
    },
    // 取数据
    getDetailData(){
      this.$axios({
        url:`/api/api/product/product/product_detail?c=h5&s=20000&t=1574233589531&v=1.0&product_id=${this.$route.query.id}`
      }).then(res => {
        this.DetailData = res.data.data
        this.product = res.data.data.product
        const arrImg = this.product.image
        const arr = []
        for(var i = 0,len = arrImg.length; i < len; i++){
            arr.push(arrImg[i])
        }
        this.arrImg = arr
        // this.product.image 商品页的10几张图
        // this.product.pcDetailDesc //下面的详情图
          const detailImgBox = document.querySelector('.detailImgBox')
          detailImgBox.innerHTML = this.product.pcDetailDesc
      }).catch(err => {
        console.log(err)
      })
    },
    getDetailData1(){
      this.$axios({
        url:`/api/api/product/sku/sku_stock_detail?c=h5&s=20000&t=1574235183784&v=1.0&product_id=${this.$route.query.id}&stock_type=1`
      }).then(res => {
        this.DetailData1 = res.data.data
        this.shopPrice = this.DetailData1.skuLinePriceRange[0]/100
        this.shopType = res.data.data.skuMap
      }).catch(err => {
        console.log(err)
      })
    },
    getDiscussData(){
      this.$axios({
        url:`/api/api/comment/list?c=h5&s=20000&t=1574421325301&v=1.0&productId=${this.$route.query.id}&pn=1&ps=1`
      }).then(res => {
        console.log(res)
        this.discussData = res.data.data
        if (this.this.discussData.pageList.length === 0){
          this.show = false
        }else{
          this.show = true
        }
      }).catch( err => {
        console.log(err)
      })
    }
  },
  created(){
    this.getDiscussData()
    this.getDetailData()
    this.getDetailData1()
},
}
</script>
<style lang='stylus' scoped>
  .detail
    width 100%
    display flex 
    flex-direction column
    justify-content space-between
  
    .shopDetail
      flex 1
      widht 100%
      overflow auto
      position relative
      .coverGray
        background-color rgba(0,0,0,.3)!important
        transition opacity 150ms ease-in
        z-index 100
      .comeBack
          position absolute
          top 0.2rem
          left .2rem
          z-index 1000
        i
          font-size .3rem
          width .3rem
          height .3rem
          display block
      .bannerNum  
        position absolute
        z-index 1000
        top 3.5rem
        right .17rem
        width .425rem
        height .19rem
        line-height .19rem
        text-align center
        border-radius .905rem
        background rgba(0,0,0,.5)
        font-size .1rem
        color: #fff
      .shopImg
        position relative
        height 3.75rem
        width 100%
        // overflow-x auto
        .imgBox
          height 3.75rem
          width 100%
          display flex
          align-items center
          img
            width 100%
            height 100%
        
      .shopText
        padding 0 .1rem  
        margin-top .1rem
        .shopTitle
          font-size .2rem
          color #262626
        .shopDes
          font-size .135rem
          line-height .2rem
          color #8c8c8c
          margin-top .08rem
        .shopPriceList  
          color #ea413c
          font-size .2rem
          padding .1rem 0
          width 40%
          .free
            width .4rem
            height .16rem
            border-radius .021rem
            background #ffe6de
            font-size .12rem
            color #ea413c
            margin-left .2rem
            line-height .16rem
      .shopSelect
        border .1rem solid #f5f5f5
        border-left none 
        border-right none 
        padding 0 .1rem
        font-size .14rem
        .hasSelected
          height .503rem
          line-height 0.502rem
          border-bottom .01rem solid #f5f5f5
          font-size .14rem
          display flex
          align-items center
          justify-content space-between
          .selectText
            span 
              color #8c8c8c
              height .3rem
              line-height .3rem
            .shopColor
              margin-left .3rem
              color #262626
              font-size .16rem
          .clickShow
            width .3rem
            height .3rem
            display block
            line-height .3rem
            i
              font-size .14rem
        
        .policy
          ul
            overflow hidden
            li
              float left
              margin-right .16rem
              height .425rem
              line-height .425rem
              display flex
              justify-content space-between
              i 
                color red
                font-size .14rem
              span 
                font-size .11rem
                color #8c8c8c
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
            font-size .11rem
            display flex
            justify-content space-around
            align-items center
            color #8c8c8c
            a
              color #ea413c
            i 
              font-size .12rem
              line-height .3rem
        .discussCon
           margin 0 .16rem
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
      .DetailTab
        width 100%
        .shopDetailTit
          height  .51rem
          line-height .51rem
          text-align center
          color #262626
          font-size .15rem
          color #ea413c
        .detailImgBox
          ul
            li 
              width 100%
              height auto
              img 
                width 100%
                height 100%
      
      .shopType
        transition all .5s 
        width 100%
        height 3rem
        max-height 3rem
        font-size .14rem
        position fixed
        left 0
        z-index 1000
        bottom -3rem
        background-color #fff
        overflow-y auto 
        .displayArea
          height auto
          
          .shopShort
            padding .16rem
            box-sizing border-box
            display flex
            justify-content space-between  
            .shopShortImg
              width .85rem
              height .85rem
              img 
                width 100%
                height 100%
            .shopShortTxt
              margin-left 0.15rem
              margin-top .2rem
              .shopShortPrice
                font-size .185rem
                color #ea413c
                line-height 1.5
            .close 
              font-size .14rem
          .shopModel
            border-left .16rem solid #fff
            display flex
            flex-direction column
            justify-content space-between
            box-sizing border-box  
            .type_color
            ul 
              background-color #fff
              li 
                float left
                min-width .75rem
                height .4rem
                line-height .4rem
                box-sizing border-box
                border .01rem solid #e8e8e8
                border-radius .021rem
                background #fff
                color #262626
                font-size .14rem
                margin .16rem .16rem 0 0
                text-align center
                padding 0 .105rem
              .active
                color #color
                border .01rem solid #ea413c
          .buyNum   
            padding 0 .16rem .214rem
            background-color #fff
            p 
            font-size .17rem
            color #262626
            line-height .5rem
            .workToNum
              display flex
              align-items center
              .notReduce
                color rgb(191, 191, 191)
              span 
                font-weight 800
              span,input  
                font-size .2rem
                width .4rem
                height  .4rem
                border 1px solid #f5f5f5
                display inline-block
                text-align center
                line-height .4rem
                padding 0
                margin  0
        .buyOrAdd 
          width 100%
          border-top .01rem solid #e8e8e8
          border-bottom .01rem solid #e8e8e8
          background #ea413c
          color #fff
        .addCar
          width 100%
          height 0.51rem
          display flex
          justify-content space-between
          align center
          position fixed
          left 0
          bottom -0.6rem
          z-index -1
        
          .toBuy,.toAddCar
            width 50%
         
          .toAddCar
            border-top .01rem solid #e8e8e8
            border-bottom .01rem solid #e8e8e8
            background #fff
            color #595959
          .toBuy
            background #ea413c
            margin 0
            border-top .01rem solid #ea413c
            border-bottom .01rem solid #ea413c
            color: #fff

    footer  
      border-top .01rem solid #e8e8e8
      font-size .16rem
      width 100%
      height .5rem
      position fixed
      bottom 0
      left 0
      display  flex
      justify-content space-between
      align-items center
      background-color #fff
      .footerLeft
        width 42%
        p 
          font-size .14rem
        i 
          font-size .18rem
      .footerRight
        width 58%
        .appendCar
          width 45%
          border-left .01rem solid #e8e8e8
          line-height .5rem
        .buy  
          width 50%
          justify-content: center
          background #ea413c
          color #fff
          font-size .17rem
          height .5rem

  .flex
    display flex 
    justify-content space-between
    align-items center
  .flex_column
    display flex 
    flex-direction column
    justify-content space-around
    align-items center
    padding .05rem
  
  .flex_center
    display flex 
    justify-content center
    align-items center
.coverGray
  background-color rgba(0,0,0,.3)!important
  transition opacity 150ms ease-in
  width: 100%;
  height: 100%;
.coverGray1
  background-color rgba(0,0,0,.3)!important
  transition opacity 150ms ease-in
  top: 0;
  left: 0;
  z-index 1000
  width: 100%;
  height: 100%;
  position: absolute;
  opacity .5
.hasFixed
    position fixed
.addCarBottom 
  bottom 0rem!important
  z-index 1000!important
</style>