<template>
  <yd-layout>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <yd-tabbar slot="tabbar" activeColor="#3f69f7" v-if="showTab">
      <yd-tabbar-item title="买车" link="/BuyIndex" :active="activePath == '/BuyIndex'">
        <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="养车" link="/KeepIndex" :active="activePath == '/KeepIndex'">
        <yd-icon name="shopcart" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="发现" link="/DiscoveryIndex" :active="activePath == '/DiscoveryIndex'">
        <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </yd-layout>

</template>

<script>

  export default {
    data(){
      return {
        activePath: '/BuyIndex',
        showTab: false,
      }
    },
    watch:{
      '$route' (to, from){
        //记录活跃路由名称
        this.activePath = to.path;
        // 当前路由包含'Index'则显示tabbar
        //this.showTab = to.path.match('Index')?true:false;
        if(to.path == '/BuyIndex' || to.path == '/KeepIndex' || to.path == '/DiscoveryIndex'){
          this.showTab = true;
        }else{
          this.showTab = false;
        }
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  /*a {
    text-decoration: none;
    color: #2c3e50;
  }*/

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */
  {
    opacity: 0
  }
</style>
