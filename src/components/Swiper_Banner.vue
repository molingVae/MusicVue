<template lang="html">
  <div class="banner">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_15556891485c5f8c4c2f27f9560f84c53c1a9f503f.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_1555469239e6178d93d5a1abab77930362d082bd70.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_1555319129bd899824292f18550ab3684ea8ec6cce.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data(){
    return{
      swiperOption:{
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay:true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>

.banner{
  padding: 10px;
}

</style>
