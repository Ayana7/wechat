<template>
  <div class="page">
    <div class="topBg">
      <div :class="[imgsData.length >= 0 ? 'detailTopBg' : '','detailTop']" v-if="showPage">
        <yd-lightbox :num="imgsData ? imgsData.length : 0">
          <yd-lightbox-img v-for="item, key in imgsData" :key="key" :src="item"></yd-lightbox-img>
        </yd-lightbox>
      </div>
      <!--<div class="text" v-if="imgsData.length >= 0">{{imgsData.length}}张图片>></div>-->
    </div>

    <div class="detail-title border-t">
      <div class="car-title"><p>{{carDetailData.style}}</p></div>
      <div class="car-sub-title"><p>本店价：
        <span class="color-red">{{carDetailData.shop_price}}万</span>
        指导价：<span class="delete-line">{{carDetailData.factory_price}}万</span></p></div>
      <div class="car-sub-title"><p>优惠：{{carDetailData.offPrice || 0}}万</p></div>
      <div class="car-color">
        <div class="car-color-title">颜色：<span v-if="noColor">暂无</span></div>
        <div class="car-color-wrap">
          <div class="car-color-item" :style="{background:item}" v-for="item in carDetailData.color"></div>
        </div>
      </div>
    </div>
    <div class="detail-params-wrap">
      <div class="detail-params-top">
        <span>配置参数</span>
        <i>● 标配  ○ 选配  - 无</i>
      </div>
      <!-- 无限滚动的方式渲染-->
      <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
        <div slot="list">
          <div class="detail-params-list" v-for="params in carDetailDataParams" track-by="$index">
            <div v-for="(value, key, index) in params" v-show="key != '车身颜色'">
              <div class="detail-params-title">
                {{key}}
              </div>
              <div class="detail-params border-b" v-for="(item,index) in value" v-show="key">
                <div class="detail-params-text">
                  {{index}}
                </div>
                <div class="detail-params-text">
                  {{item}}
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip"></span>

        <!-- 加载中提示，不指定，将显示默认加载中图标 -->
        <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

      </yd-infinitescroll>

      <!-- 加载更多的方式渲染数据-->
      <!--<div class="detail-params-list" v-for="params in carDetailDataParams">
        <div v-for="(value, key, index) in params" v-if="key != '车身颜色'">
          <div class="detail-params-title">
            {{key}}
          </div>
          <div class="detail-params border-b" v-for="(item,index) in value" v-show="key">
            <div class="detail-params-text">
              {{index}}
            </div>
            <div class="detail-params-text">
              {{item}}
            </div>
          </div>
        </div>
      </div>
      <div class="more" @click="loadMore">{{loadText}}</div>-->

    </div>

    <div class="fix-btn">
      <yd-button size="large" type="primary" @click.native="goTo('/TestDrive')">预约试驾</yd-button>
      <yd-button size="large" type="danger" @click.native="goTo('/CarPurchase')">咨询底价</yd-button>
    </div>
  </div>
</template>

<script>
//  import * as Service from '../service'

  export default {
    components: {},
    data() {
      return {
        showPage: false,
        carId: '',
        carDetailData: {},
        carDetailDataParams: [],
        imgsData: [],
        noColor: false,
        page: 1,
        total: 0,
        res:{},
        loadText:'',
        showPage: false,
      }
    },
    props: {},
    created() {
      this.noColor = false
      this.carDetailDataParams = []
      this.page = 1
      let modelId = this.$route.query.model_id
      this.showPage = true
      this.loadText = "加载更多"
      let res = {
        "code": 200,
        "msg": "ok",
        "data": {
          "factory_price": "11.98",
          "shop_price": "11.98",
          "style_id": "159720",
          "style": "福瑞迪 2016款 1.6L AT GLS",
          "model_id": "57841",
          "brand_id": "57838",
          "offPrice": 0,
          "color": [
            "#450D22",
            "#787878",
            "#FEFEFE",
            "#1A1A1A"
          ],
          "params": [
            {
              "基本参数": {
                "厂商": "东风悦达起亚",
                "级别": "紧凑型车",
                "发动机": "1.6L 123马力 L4",
                "变速箱": "4挡手自一体",
                "长×宽×高(mm)": "4560*1775*1460",
                "车身结构": "4门5座三厢车",
                "最高车速(km/h)": "181",
                "官方0-100km/h加速(s)": "-",
                "实测0-100km/h加速(s)": "-",
                "实测100-0km/h制动(m)": "-",
                "网友油耗(L)": "-",
                "车主之家实测油耗(L)": "-",
                "工信部综合油耗(L)": "6.6",
                "整车质保": "三年或10万公里",
                "保养费用": "-"
              }
            },
            {
              "车身": {
                "长度(mm)": "4560",
                "宽度(mm)": "1775",
                "高度(mm)": "1460",
                "轴距(mm)": "2650",
                "前轮距(mm)": "1563",
                "后轮距(mm)": "1565",
                "最小离地间隙(mm)": "106",
                "整备质量(Kg)": "1206",
                "车身结构": "三厢车",
                "车门数(个)": "4",
                "座位数(个)": "5",
                "油箱容积(L)": "52",
                "行李厢容积(L)": "-"
              }
            },
            {
              "发动机": {
                "发动机型号": "G4FC",
                "排量(L)": "1.6",
                "进气形式": "自然吸气",
                "气缸排列形式": "L",
                "气缸数(个)": "4",
                "每缸气门数(个)": "4",
                "压缩比": "-",
                "配气机构": "DOHC",
                "缸径": "-",
                "行程": "-",
                "最大马力(Ps)": "123",
                "最大功率(kW)": "90",
                "最大功率转速(rpm)": "6300",
                "最大扭矩(N·m)": "155",
                "最大扭矩转速(rpm)": "4200",
                "发动机特有技术": "CVVT",
                "燃料形式": "汽油",
                "燃油标号": "93号(京92号)",
                "供油方式": "多点电喷",
                "缸盖材料": "铝",
                "缸体材料": "铝",
                "环保标准": "国IV(国V)"
              }
            },
            {
              "变速箱": {
                "简称": "4挡手自一体",
                "挡位个数": "4",
                "变速箱类型": "手自一体变速箱(AT)"
              }
            },
            {
              "底盘转向": {
                "驱动方式": "前置前驱",
                "前悬架类型": "麦弗逊式独立悬架",
                "后悬架类型": "扭力梁式非独立悬架",
                "助力类型": "电动助力",
                "车体结构": "承载式"
              }
            },
            {
              "车轮制动": {
                "前制动器类型": "通风盘式",
                "后制动器类型": "盘式",
                "驻车制动类型": "手刹",
                "前轮胎规格": "205/55 R16",
                "后轮胎规格": "205/55 R16",
                "备胎规格": "非全尺寸"
              }
            },
            {
              "安全装备": {
                "主/副驾驶座安全气囊": "主：● 副：●",
                "前/后排侧气囊": "前：- 后：-",
                "前/后排头部气囊(气帘)": "前：- 后：-",
                "膝部气囊": "-",
                "胎压监测装置": "-",
                "零胎压继续行驶": "-",
                "安全带未系提示": "●",
                "儿童座椅接口": "●",
                "发动机电子防盗": "●",
                "车内中控锁": "●",
                "遥控钥匙": "●",
                "无钥匙启动系统": "-",
                "无钥匙进入系统": "-"
              }
            },
            {
              "操控配置": {
                "ABS防抱死": "●",
                "制动力分配(EBD/CBC等)": "●",
                "刹车辅助(EBA/BAS/BA等)": "-",
                "牵引力控制(ASR/TCS/TRC等)": "-",
                "车身稳定控制(ESC/ESP/DSC等)": "-",
                "自动驻车/上坡辅助": "-",
                "陡坡缓降": "-",
                "可变悬架": "-",
                "空气悬架": "-",
                "可变转向比": "-",
                "前桥限滑差速器/差速锁": "-",
                "中央差速器锁止功能": "-",
                "后桥限滑差速器/差速锁": "-"
              }
            },
            {
              "外部配置": {
                "电动天窗": "●",
                "全景天窗": "-",
                "运动外观套件": "-",
                "铝合金轮毂": "●",
                "电动吸合门": "-"
              }
            },
            {
              "内部配置": {
                "真皮方向盘": "●",
                "方向盘调节": "上下调节",
                "方向盘电动调节": "-",
                "多功能方向盘": "●",
                "方向盘换挡": "-",
                "方向盘加热": "-",
                "定速巡航": "-",
                "前/后驻车雷达": "前- / 后●",
                "倒车视频影像": "-",
                "行车电脑显示屏": "●",
                "HUD抬头数字显示": "-"
              }
            },
            {
              "座椅配置": {
                "真皮/仿皮座椅": "仿皮",
                "运动风格座椅": "-",
                "座椅高低调节": "●",
                "腰部支撑调节": "-",
                "肩部支撑调节": "-",
                "主/副驾驶座电动调节": "-",
                "第二排靠背角度调节": "-",
                "第二排座椅移动": "-",
                "后排座椅电动调节": "-",
                "电动座椅记忆": "-",
                "前/后排座椅加热": "前：- 后：-",
                "前/后排座椅按摩": "-",
                "前/后排座椅通风": "-",
                "后排座椅放倒方式": "-",
                "第三排座椅": "-",
                "前/后中央扶手": "前：● 后：●",
                "后排杯架": "●",
                "电动后备厢": "-"
              }
            },
            {
              "多媒体配置": {
                "GPS导航系统": "-",
                "定位互动服务": "-",
                "中控台彩色大屏": "-",
                "人机交互系统": "-",
                "内置硬盘": "-",
                "蓝牙/车载电话": "-",
                "车载电视": "-",
                "后排液晶屏": "-",
                "外接音源接口(AUX/USB/iPod等)": "-",
                "CD支持MP3/WMA": "●",
                "多媒体系统": "单碟CD",
                "扬声器数量": "6-7喇叭"
              }
            },
            {
              "灯光配置": {
                "氙气大灯": "-",
                "LED大灯": "-",
                "日间行车灯": "●",
                "自动头灯": "-",
                "转向头灯(辅助灯)": "-",
                "前雾灯": "●",
                "大灯高度可调": "●",
                "大灯清洗装置": "-",
                "车内氛围灯": "-"
              }
            },
            {
              "玻璃/后视镜": {
                "前/后电动车窗": "前：● 后：●",
                "车窗防夹手功能": "-",
                "防紫外线/隔热玻璃": "-",
                "后视镜电动调节": "●",
                "后视镜加热": "-",
                "内/外后视镜自动防眩目": "-",
                "后视镜电动折叠": "-",
                "后视镜记忆": "-",
                "后风挡遮阳帘": "-",
                "后排侧遮阳帘": "-",
                "后排侧隐私玻璃": "-",
                "遮阳板化妆镜": "●",
                "后雨刷": "-",
                "感应雨刷": "-"
              }
            },
            {
              "空调/冰箱": {
                "空调控制方式": "手动：●",
                "后排独立空调": "-",
                "后座出风口": "-",
                "温度分区控制": "-",
                "车内空气调节/花粉过滤": "●",
                "车载冰箱": "-",
                "感应雨刷": "-"
              }
            },
            {
              "高科技配置": {
                "自动泊车入位": "-",
                "发动机启停技术": "-",
                "并线辅助": "-",
                "车道偏离预警系统": "-",
                "主动刹车/主动安全系统": "-",
                "整体主动转向系统": "-",
                "夜视系统": "-",
                "中控液晶屏分屏显示": "-",
                "自适应巡航": "-",
                "全景摄像头": "-"
              }
            },
            {
              "车身颜色": [
                {
                  "name": "暗樱红",
                  "value": "#450D22"
                },
                {
                  "name": "钛银",
                  "value": "#787878"
                },
                {
                  "name": "透明白",
                  "value": "#FEFEFE"
                },
                {
                  "name": "檀木黑",
                  "value": "#1A1A1A"
                }
              ]
            }
          ]
        }
      }
      this.carDetailData = res.data
      this.total = res.data.params.length
      this.carDetailDataParams = this.carDetailDataParams.concat(this.carDetailData.params[0])
      this.carDetailDataParams = this.carDetailDataParams.concat(this.carDetailData.params[this.page])
      /*this.carDetailDataParams.push(this.carDetailData.params[0])
      this.carDetailDataParams.push(this.carDetailData.params[this.page])*/

      if (this.carDetailData.color.length <= 0) {
        this.noColor = true
      }
//      this.getImgs()
    },
    watch: {
      '$route'(to, from) {
        if (from.path == '/CarList' && to.path == '/CarDetail') {
          this.getImgs()
        }
      }
    },
    methods: {
      goTo(route) {
        this.$router.push({path: route, query: {car_id: this.$route.query.car_id}})
      },
      // 车款的详情参数
      getParams() {
        this.carId = this.$route.query.car_id
        let result = Service.params({car_id: this.carId});
        result.then((res) => {
          this.showPage = true
          this.loadText = "加载更多"
          this.carDetailData = res.data
          this.total = res.data.params.length
          this.carDetailDataParams = this.carDetailDataParams.concat(this.carDetailData.params[0])
          this.carDetailDataParams = this.carDetailDataParams.concat(this.carDetailData.params[this.page])
          /*this.carDetailDataParams.push(this.carDetailData.params[0])
          this.carDetailDataParams.push(this.carDetailData.params[this.page])*/

          if (this.carDetailData.color.length <= 0) {
            this.noColor = true
          }
        }).catch((err) => {
          console.log(err)
        })
      },
      loadMore(){
        this.page++
        this.carDetailDataParams = this.carDetailDataParams.concat(this.carDetailData.params[this.page])
//        this.carDetailDataParams.push(this.carDetailData.params[this.page])
        if ((this.page + 2) >= this.total) {
          this.loadText = ''
        }
      },
      loadList() {
        this.page++
        this.carDetailDataParams = this.carDetailDataParams.concat(this.carDetailData.params[this.page])
//        this.carDetailDataParams.push(this.carDetailData.params[this.page])
        if ((this.page + 2) >= this.total) {
          /* 所有数据加载完毕 */
          console.log('所有数据加载完毕')
          this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
          return;
        }

        /* 单次请求数据完毕 */
        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
      },

      // 车系图片
      getImgs() {
        this.noColor = false
        this.carDetailDataParams = []
        this.page = 1
        let modelId = this.$route.query.model_id
        let result = Service.imgs({modelId: modelId}, {loading: false});
        result.then((res) => {
          this.imgsData = res.data
          this.getParams()
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    computed: {},
    activated() {
      this.showPage = true
    },
    deactivated(){
      this.showPage = false
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~assets/stylus/variable'
  @import '~assets/stylus/mixin'

  .topBg
    width 100%
    min-height 281px
    position relative
    .detailTop
      width 100%
      height: 281px
      overflow hidden
      img
        width 100%
        height 281px
        vertical-align top
      img:not(:first-child)
        display: none

    .detailTopBg
      /*background url("../image/car-icon.png") no-repeat center*/
      background-size cover
    .text
      position: absolute;
      right: 0;
      bottom: 20px;
      font-size: 12px;
      color: #ffffff;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 28px 0 0 28px;
      padding: 6px 8px 6px 14px;
  .detail-title
    padding 12px
    background-color $color-highlight-background
    .car-title
      font-size 16px
      font-weight bold
    .car-sub-title
      padding-top 8px
      font-size 12px
      color $color-sub-text
      .delete-line
        text-decoration line-through
    .car-color
      display flex
      .car-color-title
        white-space nowrap
        height 18px
        line-height 18px
        margin-top 5px
        color $color-sub-text
      .car-color-wrap
        display flex
        flex-wrap wrap
        .car-color-item
          height 18px
          width 18px
          margin 5px
          border 1px solid $color-sub-text

  .detail-params-wrap
    margin-top 10px
    padding-bottom 60px
    .detail-params-top
      background $color-highlight-background
      height 38px
      line-height 38px
      padding 0px 12px
      position relative
      display flex
      justify-content space-between
      &:before
        content ''
        height 20px
        width 3px
        background $color-theme
        position absolute
        top 8px
        border-radius 2px
      span
        font-size 16px
        padding-left 8px
      i
        color $color-sub-text
    .detail-params-list
      .detail-params-title
        font-size 12px
        padding 8px 10px
      .detail-params
        padding 10px
        background $color-highlight-background
        display flex
        justify-content space-between
        color $color-sub-text
        .detail-params-text
          width 50%
    .more
      text-align center
      padding 20px 10px
</style>
