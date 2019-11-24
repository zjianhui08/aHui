<template>
    <footer>
      <ul>
        <li>
          <router-link to="/index">
            <div class="index">
              <i class="iconfont icon-sougou1"></i>
              <p>首页</p>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to='{name:"classify",params:{id : 123},query:{a:1}}'>
            <i class="iconfont icon-leimupinleifenleileibie"></i>
            <p>分类</p>
          </router-link>
        </li>
        <li>
          <router-link to="/cart">
            <i class="iconfont icon-icon1"></i>
            <p>购物车</p>
          </router-link>
        </li>
        <li>
          <router-link to="/my">
            <i class="iconfont icon-wode1"></i>
            <p>我的</p>
          </router-link>
        </li>
      </ul>
    </footer>
</template>
<script>

export default {

}
</script>
<style lang="stylus" scoped>
footer
    position fixed
    bottom 0
    left 0
    height .48rem
    width 100%
    ul  
      width 100%
      display flex
      justify-content space-around
      align-items center
      height .48rem
      border-top .005rem solid #d8d8d8
      font-size .15rem
      background #fff
      padding 0 .1rem
      a 
        flex 1
        text-align center
        color #B7B7B7
        display flex
        flex-direction column
        justify-content space-around
        align-items center
        i 
          display inline-block
          width .27rem
          height .27rem
          font-size .18rem
          color #888
          font-weight 700
        p
          font-size .12rem
</style>