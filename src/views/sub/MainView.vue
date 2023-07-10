<template>
  <div>
    <!--        主体部分： 轮播图（走马灯）-->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in carousal" :key="item.goods_id">
        <router-link :to="{name:'goodsdetail',params:{goodsId:item.goods_id}}">
          <img :src="item.slide_url" alt="" width="100%" height="100%">
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <!--        主体部分：专栏一  -->
    <div v-for="(item) in columns " :key="item.column_id">
      <h1>{{ item.column_name }}</h1>
      <el-row>
        <el-col :span="4" v-for="(sub_item, index) in item.column_cards" :key="sub_item.goods_id"
                :offset="index > 0 && index !==5  ? 1 : 0">
          <router-link :to="{name:'goodsdetail',params:{goodsId:sub_item.goods_id}}">
            <el-card :body-style="{ padding: '4px' }" style="margin-bottom: 10px; height: 250px">
              <img
                :src="sub_item.goods_thumb"
                class="image" width="100%">
              <div style="padding: 14px;">
                <span>{{ sub_item.goods_name }}</span>
                <div class="bottom clearfix">
                  <span style="font: 1px 'Microsoft YaHei';opacity: 0.5"> {{ sub_item.goods_abstract }}</span>
                  <br><span style="font: 5px  'Microsoft YaHei';color: red">{{ sub_item.real_price }}
                </span>
                  <del style="font: 5px  'Microsoft YaHei';opacity: 0.5">{{ sub_item.original_price }}</del>
                </div>
              </div>
            </el-card>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getIndexMain } from '@/api/goods'

export default {
  name: 'MainView',
  data () {
    return {
      carousal: [
        {
          goods_id: 1,
          slide_url: 'http://dummyimage.com/200x100/FF6600'
        },
        {
          goods_id: 2,
          slide_url: 'http://dummyimage.com/200x100/FF6600'
        },
        {
          goods_id: 3,
          slide_url: 'http://dummyimage.com/200x100/FF6600'
        }
      ],
      columns: [
        {
          column_id: 4,
          column_name: '进后立住史',
          column_cards: [
            {
              goods_id: 5,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '题安着处金建料',
              goods_abstract: '素两样原量应相前车了那术中单出。',
              real_price: 7304965598786752,
              original_price: 920734531540904
            },
            {
              goods_id: 6,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '山复较如时',
              goods_abstract: '眼连分往据且去斗基个表还矿安次作特。',
              real_price: 1608274440318785,
              original_price: 7443901573018086
            },
            {
              goods_id: 7,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '府确我因月',
              goods_abstract: '南写转近件置局且较金学收。',
              real_price: 8125552399930611,
              original_price: 892035068864330
            },
            {
              goods_id: 8,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '住压层本车',
              goods_abstract: '真月做必快严采头花周区边际感。',
              real_price: 2737344121223653,
              original_price: 1857315260385400
            },
            {
              goods_id: 9,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '青花全红度低矿',
              goods_abstract: '进义不总细音线非划正国同那干等志。',
              real_price: 4666733449341283,
              original_price: 484899765993180
            },
            {
              goods_id: 10,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '图一共离约报',
              goods_abstract: '种斯按细家因车传易米克派层清劳马。',
              real_price: 1789559697409057,
              original_price: 4700414376226859
            },
            {
              goods_id: 11,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '美据亲节要',
              goods_abstract: '平收计老性公再半做路已单土型又。',
              real_price: 3173025179040361,
              original_price: 665037046856420
            },
            {
              goods_id: 12,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '值今月',
              goods_abstract: '基市效通飞院存公酸和思到生么直。',
              real_price: 5917277095172281,
              original_price: 7773219895803484
            },
            {
              goods_id: 13,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '治议易般回',
              goods_abstract: '准何产县志单果术红力心把则。',
              real_price: 4712880717229340,
              original_price: 1684497079981770
            },
            {
              goods_id: 14,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '强斯需适在如',
              goods_abstract: '西他价层民比战划江严身体水八张按。',
              real_price: 5736452795961361,
              original_price: 5858768011665123
            }
          ]
        },
        {
          column_id: 15,
          column_name: '科明叫了',
          column_cards: [
            {
              goods_id: 16,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '和则性生话法',
              goods_abstract: '起具且全受期具其白他党己本设增矿装。',
              real_price: 6079092013792583,
              original_price: 126979016634057
            },
            {
              goods_id: 17,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '确头行据农子',
              goods_abstract: '有但市断百小价风备由带角管。',
              real_price: 4397083394138007,
              original_price: 475015970151409
            },
            {
              goods_id: 18,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '四看引温五任',
              goods_abstract: '代入清下个性东自时识带车信快象改该。',
              real_price: 550056901100937,
              original_price: 4794126761242769
            },
            {
              goods_id: 19,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '每七越农',
              goods_abstract: '收现般时三边间眼北定界可才使实。',
              real_price: 5827676545065128,
              original_price: 6314407478186710
            },
            {
              goods_id: 20,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '由直将',
              goods_abstract: '问如争及得增清路米道中将每持。',
              real_price: 1182961014398443,
              original_price: 4911093708711512
            },
            {
              goods_id: 21,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '十实真还',
              goods_abstract: '使思照小总听导之工集素法道史价府。',
              real_price: 6186418877005552,
              original_price: 6126099620400703
            },
            {
              goods_id: 22,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '调多门群制期',
              goods_abstract: '出积想见老府型具为传需行空。',
              real_price: 2192431105650848,
              original_price: 5958649860304273
            },
            {
              goods_id: 23,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '指进具斗律可',
              goods_abstract: '他外团元积第领难大斗清己许面数。',
              real_price: 2140829014903041,
              original_price: 3292765836219495
            },
            {
              goods_id: 24,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '格油应太',
              goods_abstract: '米美车矿果京效土断回果历南土总。',
              real_price: 5161854156334387,
              original_price: 4503735407854258
            },
            {
              goods_id: 25,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '则决许志',
              goods_abstract: '级相条律品转权样受除北清织色。',
              real_price: 2378810612135931,
              original_price: 2628130817089348
            }
          ]
        },
        {
          column_id: 26,
          column_name: '当都叫单然劳',
          column_cards: [
            {
              goods_id: 27,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '石政切集',
              goods_abstract: '层没商回构听之情解最据省决影全。',
              real_price: 2567560225000850,
              original_price: 5335604181620412
            },
            {
              goods_id: 28,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '几道已',
              goods_abstract: '影飞明情上地来红始而想上四参斗合。',
              real_price: 453733862369568,
              original_price: 2135229063434964
            },
            {
              goods_id: 29,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '完手机件管切影',
              goods_abstract: '酸千次无及采组布支进层金解信。',
              real_price: 8130139015973784,
              original_price: 1173877331183879
            },
            {
              goods_id: 30,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '应关东北',
              goods_abstract: '老将己电传因维指劳且具须只接历数。',
              real_price: 529375735547958,
              original_price: 724888865718291
            },
            {
              goods_id: 31,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '发在加领县走专',
              goods_abstract: '油常内提道正花月与十系水度交查称。',
              real_price: 8083867119631167,
              original_price: 7756432953693039
            },
            {
              goods_id: 32,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '必般情王',
              goods_abstract: '联具真道省步毛政则照计影毛。',
              real_price: 2242591524060866,
              original_price: 445460940564727
            },
            {
              goods_id: 33,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '育每市行',
              goods_abstract: '争把使门所七划点济周强去口确非感。',
              real_price: 5507938603149741,
              original_price: 7083757800513459
            },
            {
              goods_id: 34,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '验一产七道',
              goods_abstract: '光去规采样级况江今团它以机月只称。',
              real_price: 108780306406313,
              original_price: 2480994948408394
            },
            {
              goods_id: 35,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '出委强利',
              goods_abstract: '图上存写写划志即究飞议关也西电比。',
              real_price: 1250864446561061,
              original_price: 3204792071634174
            },
            {
              goods_id: 36,
              goods_thumb: 'http://dummyimage.com/200x100',
              goods_name: '联价本会价办',
              goods_abstract: '自发级观江真连回万外队情置各地报理。',
              real_price: 2754383776287100,
              original_price: 5571034263764897
            }
          ]
        }
      ]

    }
  },
  created () {
    getIndexMain().then((response) => {
      console.log(response)
      this.carousal = response.data.result.carousal
      this.columns = response.data.result.columns
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
