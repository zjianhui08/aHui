<template>
  <div class="my">
    <div class="muContent">
      <div class="log">
      </div>
      <div class="loginPage">
        <form >
          <div class="userInfo">
            <div class="tel">
              <input type="text" placeholder="请输入手机号" autocomplete='tel' ref="tel">
            </div>
            <div class="psw">
              <input type="text" placeholder="请输入短信验证码" >
              <a class="idCode" href="javascript:;">获取验证码</a>
            </div>
            <div class="psw1">
              <input type="password" placeholder="设置6-16位密码（区分大小写）" autocomplete='password' ref="isType">
              <a class="idCode1" href="javascript:;" >
                <i class="hidePsw iconfont icon-yanjing" v-show="toggleHide" @click="toggleShow"></i>
                <i class="showPsw iconfont icon-yanjing11"  @click="toggleShow" v-show="!toggleHide"></i>
              </a>
            </div>
          </div>
        </form>
          <div class="loginBtn">
            <button class="notAgree Btns" @click="register" :class="{ loginBtns:notAgree}">快速注册</button>
          </div>
          <div class="poilcy">
            <input type="checkbox" ref="isAgree" @click="clickAgree">
            <span>我已阅读并同意</span>
            <a href="javascript:;">《用户协议》</a>
            <span>和</span>
            <a href="javascript:;">《隐私政策》</a>
          </div>
      </div>
      <p class="haveUser">
        <router-link to='/login'>
           已有账号？去登录&gt;
        </router-link>
      </p>
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
      notAgree : false
    }
  },
  methods:{
    toggleBtn(){
      this.toggleRegister = !this.toggleRegister
    },
    toggleShow(){
      this.toggleHide = !this.toggleHide
       if(this.toggleHide){
        this.$refs.isType.type = 'text'
      }else{
        this.$refs.isType.type = 'password'
      }
    },
    clickAgree(){
      let tel = this.$refs.tel.value
      let psw = this.$refs.isType.value
      let isAgree = this.$refs.isAgree.checked
      if(isAgree == true && psw.length >= 6 && /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(tel)){
        this.notAgree = true
      }else{
        this.notAgree = false
      }
    },
    register(){
        let tel = this.$refs.tel.value
        let psw = this.$refs.isType.value
        let isAgree = this.$refs.isAgree.checked
        const aUserIfo = {
          "userName" : tel,
          "psw" : psw
        }
        if(isAgree == true && psw.length >= 6 && /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(tel)){
          this.$axios({
          url:"/ips/register",
          method:'post',
          data:aUserIfo
        }).then(res => {
          if(res.data.error === 1){
            alert("账户已存在")
          }else if (res.data.success === 1){
            alert("注册成功")
            this.$router.push(`/my?user=${res.data.userName}`)
            this.$store.commit('userName',tel.substr(0,3)+'****'+tel.substr(7,4))
          }else{
            alert("服务端错误")
          }
        }).catch(err => {
          console.log(err)
        })
        }else if(isAgree == false){
          alert('勾选同意才能注册哦！')
        }else{
          alert('请输入正确的手机号或至少六位的密码')
        }
        
        
    },
  },
  mounted(){
    bus.$emit("ShowBack" ,{data:true,data1:"注册",data2:true})
    
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
          .tel,.psw,.psw1
            padding 5px 8px
            border 1px solid #d9d9d9
            border-width 0 0 .01rem
            background-color #fff!important
            input 
              border-radius 0
              width 2.3rem
              height .43rem
              box-sizing border-box
              font-size 0.14rem
              background-color #fff!important
              border-radius .1rem
              paddng-left .05rem
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

          .psw1
            .idCode1
              margin-left .23rem
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
          margin-top .16rem
          .Btns
            border  none 
            width 100%
            height .48rem
            line-height .48rem
            font-size 0.16rem
            border-radius .04rem
            outline none
           
          .notAgree
            background-color #666
          .loginBtns
            color rgba(255,255,255,0.5)
            background #ea413c
        .poilcy
          font-size .11rem
          margin-top -0.1rem
          a
            color #595959
      .haveUser
        position absolute
        bottom .3rem
        display flex
        justify-content center
        width calc(100% - 0.48rem)
        a
          font-size .13rem
          color #8c8c8c
          text-align center
          margin 0 auto

            
</style>