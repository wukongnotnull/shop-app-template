<template>
  <div>
    <top-nav-comp/>
    <br>
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="3">
            <div class="grid-content bg-purple">logo</div>
          </el-col>
          <el-col :span="17" :offset="4">
            <div class="grid-content" style="text-align: left">
              <el-steps :active="active" finish-status="success">
                <el-step title="拍下商品"></el-step>
                <el-step title="付款"></el-step>
                <el-step title="确认收货"></el-step>
                <el-step title="评价"></el-step>
              </el-steps>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <!-- 标题 1  -->
        <h1 style="text-align: left">选择收货地址</h1>
        <el-row>
          <template>
            <div>
              <el-radio  v-model="radio" label="1">备选项地址 1</el-radio>
            </div>
            <div>
              <el-radio  v-model="radio" label="2">备选项地址 2</el-radio>
            </div>
          </template>
        </el-row>
        <br>
        <!--      标题 2-->
        <h1 style="text-align: left">确认订单信息</h1>
        <template>
          <el-table
            :data="orderData"
            style="width: 100%">
            <el-table-column
              prop="goods_name"
              label="店铺商品"
              width="180">
            </el-table-column>
            <el-table-column
              prop="goods_attr"
              label="商品属性"
              width="180">
            </el-table-column>
            <el-table-column
              prop="price"
              label="单价">
            </el-table-column>
            <el-table-column
              prop="num"
              label="数量">
            </el-table-column>
            <el-table-column
              prop="total"
              label="小计">
            </el-table-column>
            <el-table-column
              prop="discounts"
              label="优惠方式">
            </el-table-column>
            <el-table-column
              prop="total"
              label="小计">
            </el-table-column>
          </el-table>
        </template>
        <!--  表单 左边 + 右边  -->
        <el-form ref="form" :model="form" label-width="110px">
          <el-row>
            <!--        表单的左边-->
            <el-col :span="12">
              <div class="grid-content">
                <el-form-item label="发票类型：">
                  <span>增值税电子普通发票</span>
                </el-form-item>
                <el-form-item label="发票信息：">
                  <el-select v-model="form.region" placeholder="请选择发票信息">
                    <el-option label="明细" value="mingxi"></el-option>
                    <el-option label="普票" value="普票"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="发票抬头类型：">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="个人"></el-radio>
                    <el-radio label="企业"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <hr>
                <el-form-item label="给卖家留言">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>

              </div>
            </el-col>
            <!--        表单的右边-->
            <el-col :span="12">
              <div class="grid-content">
                <el-form-item label="运送方式：">
                  <span>普通配送快递 免邮</span>
                </el-form-item>
                <el-form-item label="运费险：">
                  <template>
                    <el-checkbox-group v-model="checkList">
                      <el-checkbox label="运费险">
                        <el-tag size="mini">运费险</el-tag>
                        ￥1.06购买
                      </el-checkbox>
                    </el-checkbox-group>
                  </template>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </el-form>
        <!--    总计-->
        <el-row :gutter="20">
          <el-col>
            <div class="grid-content" style="text-align: right">店铺合计(含运费)：11111 元</div>
          </el-col>
        </el-row>
        <el-row style="text-align: right">
          <router-link to="/cashiermain">
            <el-button type="danger" size="medium">提交订单</el-button>
          </router-link>
        </el-row>
      </el-main>
      <el-footer>Footer 页脚部分</el-footer>
    </el-container>
  </div>
</template>

<script>
import TopNavComp from '@/components/TopNavComp'

export default {
  name: 'BuyNowView',
  components: { TopNavComp },
  data () {
    return {
      radio: '1',
      checkList: ['运费险11'],
      form: {
        name: '',
        region: '明细',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      active: 0,
      orderData: [
        {
          goods_name: '某某手机1',
          goods_attr: '颜色：白色',
          price: 5999,
          num: 2,
          discounts: 100,
          total: 600000
        }
      ]
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    next () {
      if (this.active++ > 3) this.active = 0
    }
  }
}
</script>

<style scoped>
.el-main {

}

:last-child {
  margin-bottom: 0;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

:last-child {
  margin-bottom: 0;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>
