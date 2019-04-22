<template lang="html">
  <div class="">

    <Today_Recommend  title="今日榜单" type="24"/>
    <News_Music />
    <Swiper_Banner />
    <Music_ListNav/>
  <keep-alive>
    <router-view/>
  </keep-alive>

    <Today_Recommend  title="热门歌单" type="2"/>
  </div>
</template>

<script>
  import Today_Recommend from '../components/Today_Recommend'
  import News_Music from '../components/News_Music'
  import Swiper_Banner from '../components/Swiper_Banner'
  import Music_ListNav from './music_list/music_listnav'

export default {
  name:"home",
  components:{
    Today_Recommend,
    News_Music,
    Swiper_Banner,
    Music_ListNav
  }
}
</script>

<style>
</style>
