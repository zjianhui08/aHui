<template>
  <div class="swiper" >
      <mt-swipe :auto="4000" >
        <mt-swipe-item class="imgBox" v-for="(item,i) in bannerImg" :key='i'> 
          <img :src="item.img" alt=""> 
        </mt-swipe-item>
      </mt-swipe>
  </div>
</template>


<script>
export default {
  props:{
  bannerImg : {
    type : Array,
    required : true
  }
},
  mounted(){
  }
}
</script>
<style scoped lang="stylus">
   .swiper
        width 100%
        height 1.6rem
        line-height 1.6rem
        text-align center
        font-size .24rem
        .imgBox,img
          width 100%
          height 1.6rem
          img
            margin-left -0.04rem

</style>