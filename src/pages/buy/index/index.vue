<template>
  <div class="page">
      <div class="flex-box car-exhibition">
        <div class="car-exhi card flex-item" >
          <div class="car-exhi__hd">
            <img src="" alt="图片">
          </div>
          <div class="car-exhi__bd">
            <p class="car-title">标题</p>
            <p class="car-price color-red">1-2万</p>
            <p class="car-total">0款车型</p>
          </div>
          <div class="car-exhi__ft border-t">
            <div class="card-btn color-blue">试驾</div>
            <div class="card-btn color-yellow border-l">询价</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

  export default {

  }
</script>

<style lang="stylus" scoped>
  @import '~assets/stylus/variable'
  @import '~assets/stylus/mixin'

  .car-exhi-wrap
    margin-top 10px

  .car-exhi-title
    height 40px
    line-height 40px
    display flex
    padding 0 3.5%
    img
      height 40px
    span
      height 40px
      line-height 40px
      font-size 14px
      padding-left 10px

  .car-exhibition
    flex-wrap wrap
    margin-top 10px
    justify-content flex-start
    width 96%
    margin 0 auto
    background $color-background
    .car-exhi
      width 47%
      margin 5px 1.5%
      .car-exhi__hd
        img
          width 100%
      .car-exhi__bd
        p
        line-height 18px
        text-align left
        padding-left 10px
        .car-title
          color #333
          font-size 15px
        .car-price
          font-size 13px
          color #f91540
        .car-total
          color #999
          font-size 12px
      .car-exhi__ft
        display flex
        font-size 15px
        .card-btn
          width 50%
          padding 8px

  .yd-popup
    .list
      height: 50px
      line-height 50px
      text-align center
      border-bottom 1px solid $color-border
      a
        display block
    .last-list
      border-bottom: 0;
      border-top .15rem solid $color-border
</style>
