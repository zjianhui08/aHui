<template>
  <div class="my">
    <div class="muContent">
      <div class="log">
      </div>
      <div class="loginPage">
        <div class="userInfo">
          <div class="tel">
            <input type="text" placeholder="请输入手机号" ref="tel">
          </div>
          <div class="psw">
            <input type="text" placeholder="请输入短信验证码" v-if="toggleRegister" >
            <input type="password" placeholder="请输入密码" v-else ref="isType">
            <a class="idCode" href="" v-if="toggleRegister">获取验证码</a>
            <a class="idCode1" href="javascript:;" v-else>
              <i class="hidePsw iconfont icon-yanjing" v-show="toggleHide" @click="toggleShow($event)"></i>
              <i class="showPsw iconfont icon-yanjing11"  @click="toggleShow($event)" v-show="!toggleHide"></i>
            </a>
          </div>
        </div>
        <div class="loginBtn">
          <button class="loginBtns Btns" ref="loginBtns " @click="login">登录</button>
          <button class="pswBtn Btns" @click="toggleBtn"  v-if="toggleRegister">账号密码登录</button>
          <button class="pswBtn Btns" @click="toggleBtn" v-else>手机短信登录</button>
        </div>
        <div class="qucikEegistraion">
          <a href="javascript:;" v-if="toggleRegister" >
            <router-link to="/register">手机号快速注册&gt;</router-link>
          </a>
          <a href="javascript:;" v-else>
            <router-link to="/register">立即注册</router-link> | 找回密码&gt;
          </a>
        </div>
        <div class="poilcy">
          <span>登录即代表您已经同意</span>
          <a href="javascript:;">《用户协议》</a>
          <span>和</span>
          <a href="javascript:;">《隐私政策》</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '.././../../bus'
export default {
  data(){
    return {
      toggleRegister: true,
      toggleHide: false,
      uersIfo:[]
    }
  },
  methods:{
    toggleBtn(){
      this.toggleRegister = !this.toggleRegister
    },
    toggleShow(e){
      this.toggleHide = !this.toggleHide
      if(this.toggleHide){
        this.$refs.isType.type = 'text'
      }else{
        this.$refs.isType.type = 'password'
      }
    },
    // 查看用户信息
    login(){
      let userName = this.$refs.tel.value
      let psw = this.$refs.isType.value
      const login = this.$refs.login
      const aUserIfo = {
          "userName" : userName,
          "psw" : psw
        }
      this.$axios({
        url:"/ips/login",
        params:aUserIfo
      }).then(res => {
        if(res.data.success === 1){
          alert('登录成功')
          this.$store.commit('userName',userName)
          this.$router.push(`/my?user=${res.config.params.userName}`)
        }else if(res.data.error === 1){
          alert('密码错误')
        }else if(res.data.error === 2){
          alert('当前账号不存在')
        }else{
          alert('服务端错误')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created(){
  },
  mounted(){
    bus.$emit("ShowBack" ,{data:true,data1:"登录",data2:true})
  }
}
</script>
<style lang="stylus" scoped>
  .my
    padding-bottom .48rem
    flex 1
    overflow auto
    font-size .12rem
    .muContent
      padding .24rem
      padding-top .46rem
      .log
        width 1.1rem
        height 0.26rem
        background url(https://mall01.sogoucdn.com/cdn/pc/img/mobile/logo@2x.png?v=f9c05) no-repeat
        background-size 1.1rem
        margin 0 auto .25rem
      .loginPage
        margin 0
        padding 0
        background #fff
        height auto
        color #bfbfbf
        .userInfo
          color #bfbfbf
          .tel,.psw
            padding 5px 8px
            border 1px solid #d9d9d9
            border-width 0 0 .01rem
            input 
              border-radius 0
              width 2.3rem
              height .43rem
              box-sizing border-box
              font-size 0.14rem
             
          .psw  
            .idCode
              color #bfbfbf
              border-color #bfbfbf
              width 0.54rem
              height 0.2rem
              line-height 0.2rem
              border 1px solid #8c8c8c
              border-radius 4px
              font-size 0.08rem
              padding .05rem
            .idCode1
              margin-left .3rem
              .hidePsw,.showPsw
                color #666
                font-size .1rem
        .loginBtn
          display flex
          flex-direction column
          justify-content space-around
          align-items center
          height 1rem
          width 100%
          margin-top .4rem
          .Btns
            border  none 
            width 100%
            height .48rem
            line-height .48rem
            font-size 0.16rem
            border-radius .04rem
            outline none
          .loginBtns
            color rgba(255,255,255,0.5)
            background #ea413c !important
          .pswBtn
            background-color #fff
            border .01rem solid #ea413c
            color #ea413c
            margin-top .12rem
        .qucikEegistraion
          height .2rem
          margin-bottom .35rem
          font-size .14rem
          text-align center
          padding-top .2rem
          a
            color #bfbfbf
        .poilcy
          position absolute
          bottom .8rem
          font-size .11rem
          left .5rem 
          a
            color #595959
</style>