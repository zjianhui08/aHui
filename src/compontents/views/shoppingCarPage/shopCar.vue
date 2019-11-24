<template>

  <div class="car">
    <div class="carContent">
      <div class="carEdit">
        <div class="carEditLeft">
          <input type="checkbox" value="全选" class="allCheck" ref='allCheck' checked @click="myInpStatus">
          <p class="allSelect">全选</p>
        </div>
        <p>编辑</p>
      </div>
      <div class="carlist" v-if="!show" ref="carlist">
        <div class="carlistTop">
          <div class="carImg"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAh1BMVEUAAADQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDdwyU6AAAALHRSTlMAzDO8RAP7LQ3x9gfTdVw4UB21JxftpprcwpVXPeOuhemPi2cR131ibUrIoFwGRlEAAAMzSURBVGje7dnZlqIwEAbgQiQQkEVZREEQ9+V//+ebPp7TA+meCMTJHd+VfUH/R6uSSpQmk8lk0mODv7jRxKTFBl3sYJFeTti4yEi7WYobaXdH6pB2Jq6k3RUVabdEapF2OULSbosLaXfHg7RzXHYi7UwUpJ2PJ2lnY0f67WAT0XKmYDl4ja3hE8UMKvjTpkEKmETOylCwA9hxWBMz5pCipGZsPnBaRqTMH7iYL9h+sphxGjQfkdNwFonOsAc9tkdMHV5C8j+PbkmCxbAQysRJ/2RC5prZ4merFhJgJYTA/7mOWiEWaiEJcz15ZiBMaM9FohRCBubCSOaWOKElu/a4kBqNOJJn4uYWi0VRCylxlleBMhyFopzVQjyOpbwoR2SSoowKoQrHH0WRT5wVCrWQKyp5UaxUeJ8+1tRyOEsGn/G4Jy/KCoG0KBeYNNQCpbwovtBQFmdem+iipKEOqKmViEUpxVU+j9qMFA0NNochbq0htTzZ2SxwUfWOebEx5UXZ4E6/WQdg25shL24hFqXGgX45rdoBP9ANmbwo93+0UHzGvqRxYqSWvCjZlX64cxjLDy8qW/j0js+QOZ9eVCKsSc7LgIvaRWVD3ZQTSSUP8EjzRSXcIbeVLyoRDRG4ME+kKFrE1KNdgVrF7QrUw7JvJmtXoKq4Nh+mzMIF4GZL+oizxnv5M3DowwwDfBuUcxnboc9lWCxJsxBcewatcSDdrBQz0i1GSppZhQleHXv753SrjMc6skhBmeMlDXpmNMfLIqTRAoaFX5TXDVC/n2swg7D0c7ijx8mMoba+04I37+P7f3sN3JjG2aBpD957R1qPtB04T1Q0it39AtpAIT/5m+0AdjFu5R6RifcCiQxX8ZIyRt09eEQwZHj39trApzEu3f0kgAGpe3cTuo2b7Xh0u/Qwk8i6/X3GfNwc4e3ZMeHyG2DZ6bw7Uo9GFiVP6MUzUb1r9cqjl+UO/viRuHttR+HXizedGe+xsV8b3dcLj0ZKHsB+tcqBnf12a9gD52q1B0yFUWwdd/iS1j3Png4cX/KrpThPomI24FEvLKJ4zE+AzfdOoq7pDTn8j5DJZDKZ9PsDXqZ9A+EwPHgAAAAASUVORK5CYII=" alt=""></div>
          <span>您的购物车还是空的</span>
        </div>
        <p class="carlistBtn" @click="toIndex">
          <a href="">去逛逛</a>
        </p>
      </div>
      <div class="shooList" v-if="show">
        <ul ref="shopBox">
          <li class="aShop" v-for="item in shopList" :key="item.shopId" v-if="item.shopId">
            <div class="selectInp">
              <input type="checkBox" class="checkInp" ref="aCheckInp" checked>
            </div>
            <div class="shopImg">
              <img :src="item.shopImg" alt="">
            </div>
            <div class="shopCon">
              <p class="shopName">{{item.shopTitle}}</p>
              <p class="Type">{{item.shopType}}</p>
              <div class="price_num">
                <span class="price ">￥{{item.shopPrice}}</span>
                <div class="workToNum">
                  <span class="flex_center reduce" @click="reduce($event)" :class="{notReduce:isReduce}">-</span>
                  <input type="number" value="1" class="shopNum" ref="shopNum">
                  <span class="flex_center add" @click="add($event)" :class="{notReduce:isReduce1}">+</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="gap"></div>
      <div class="carRecommend">
        <p class="recommend">为你推荐</p>
          <keep-alive>
            <ShopList />
          </keep-alive>
      </div>
      <div class="noMore">
        没有更多了
      </div>
    </div> 
    <div class="count">
      <div class="countBox">
        <div class="ipn">
          <input type="checkbox" class="allCheck" value="全选" @click="myInpStatus" ref='allCheck1' checked>
          <p class="allSelect">全选</p>
        </div>
        <div class="totalCount">
          <span class="mount">合计:</span>
          <span class="price" ref="totalPrice">￥<span>0.00</span></span>
          <div class="btn">结算</div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import bus from '../../../bus'
import ShopList from '../publicCom/shopList.vue'
export default {
  components:{
    ShopList,
   
    
  },
  data(){
    return {
      isReduce:true,
      isReduce1:false,
      flag:false,
      ShopList:true,
      show:false
    }
  },
  methods:{
    // 获取购物车数据
    getShopData(){
      this.$axios({
        url:'/ips/shopInf',
        method: 'post'
      }).then(res => {
        var shopList = res.data.shopInf
        this.shopList = shopList
        if(this.shopList.length >= 1){
          this.show = true
        }
      }).catch(err => {
        console.log(err)
      })
    },
    toIndex(){
      this.$router.push('/index')
    },
    myInpStatus(){
      this.flag = !this.flag
      this.$refs.allCheck1.checked = this.$refs.allCheck.checked = this.flag
      this.$refs.aCheckInp.checked = this.flag 
   },
    reduce(e){
      let val = Number(e.target.nextElementSibling.value)
      if(val <= 2){
        val = 1
        this.isReduce = true
      }else if (val <= 10){
        this.isReduce1 = false
        val--
      }
      e.target.nextElementSibling.value = val
    },
    add(e){
       let val = Number(e.target.previousElementSibling.value)
        if(val >= 9){
        val = 10
        this.isReduce1 = true
      }else if(val>=1 ){
         val++
          this.isReduce = false
      }
       e.target.previousElementSibling.value = val
    },
  },
  update(){
    this.getShopData()
  },
  mounted(){
    this.getShopData()
    if(this.$route.name == 'shopCar'){
      bus.$emit("ShowBack" ,{data:false,data1:"购物车",data2:false})
    }
  }
}
</script>

<style lang="stylus" scoped>
  .car{
      padding-bottom :.98rem;
      flex: 1;
      overflow auto
    .carContent{
      position: relative;
      padding-bottom: 0;
      font-size: .14rem;
      color: #262626;
      .carEdit{
        margin-top: -0.15rem;
        padding: .1rem .05rem .1rem .1rem;
        height: 0.35rem;
        line-height 0.35rem;
        margin  auto 0;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f5f5f5;
        .carEditLeft{
          display flex
          align-items center
          .allSelect{
             margin-left .1rem
          }
        }
        p{
          margin-right .1rem
          color: #595959;
          font-size .16rem
        }
      }
      .carlist{
        background-color: blue;
        padding: .11rem 0 0.11rem;
        margin-bottom: .42667rem;
        background: #fff;
        font-size: .14rem;
        color: #595959;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        .carlistTop{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width 1.9rem
          height .5rem
          .carImg{
            width: 0.5rem;
            height: 0.5rem;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .carlistBtn{
          width: 0.86rem;
          height: 0.24rem;
          line-height: 0.32rem;
          border: 1px solid #ea413c;
          border-radius: .02rem;
          font-size: .14rem;
          color: #ea413c;
          outline: 0;
          margin-top: .11rem;
          display flex
          justify-content: center;
          align-items: center;
          a{
            color: #ea413c;
          }
        }
      }
      .shooList{
        margin  0 .1rem
        ul{
          width 100%
          li.aShop{
            height 1.1rem
            width 100%
            display flex
            justify-content space-around
            align-items center
          }
          .selectInp{
            width 8%
            margin-left .1rem
          }
          .shopImg{
            width: .8rem;
            height: .8rem;
            border: solid #dbdbdb .01rem
            img{
              width 100%
              height 100%
            }
          }
          .shopCon{
            width 2.4rem
            margin-left: .15rem
            .shopName{
              
              font-size: .13rem;
              line-height: .17rem;
              overflow: hidden;
              margin-top: -0.01rem;
              color: #262626;
            }
            .Type{
              font-size: .12rem;
              line-height: .19rem;
              color: #595959;
              padding-top: .0 4rem;
            }
            .price_num{
              display flex
              justify-content space-between
              align-items center
              .price{
                font-size: .14rem;
                color: #ea413c;
              }
              .workToNum{
                display flex
                align-items center
                span{
                  font-weight 800
                }
                span,input{
                  font-size .2rem
                  width .4rem
                  height  .4rem
                  border 1px solid #f5f5f5
                  display inline-block
                  text-align center
                  line-height .4rem
                  padding 0
                  margin  0
                }  
                
              }
              
              .notReduce{
                color rgb(191, 191, 191)
              }
               
             
            }
          }
        }
           
      }

      .gap{
        width 100%
        height 0.1rem
        background-color #F5F5F5
      }
      .carRecommend{
        height: 5rem;
      }
    } 
  }
  .recommend
    margin-left .12rem
    font-size .16rem
  .noMore
    color #bfbfbf
    background #f5f5f5
    text-align center
    height 0.26rem
    line-height 0.26rem
    font-size .12rem
    width 100%
  .count 
    width 100%
    height .5rem 
    position fixed
    bottom .47rem
    font-size .16rem
    background-color #fff
    .countBox
      position fixed
      width 100%
      line-height .5rem 
      display flex
      justify-content space-between
      align-items center
      .ipn
        padding-left .3rem
        .allSelect
          color #595959
          margin-left .1rem
      .ipn,.totalCount
        display flex
        justify-content space-between
        align-items center
      .totalCount
        .btn
          color #fff
          text-align center
          width 1.2rem
          background #ea413c
        .price
          color #ea413c
          margin: 0 .105rem 0 .08rem
      
</style>