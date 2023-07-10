<template>
  <div>
    <el-row>
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="宝贝详情" name="first">
              <div style="height: 400px">{{ goods_full_desc }}</div>
            </el-tab-pane>
            <el-tab-pane label="宝贝评价" name="second">
              <!--              使用卡片方式呈现评论列表 -->
              <div v-for="(item , index) in goods_comments " :key="index">
                <el-row :gutter="10">
                  <el-col :span="4">
                    <div class="grid-content bg-purple">
                      <div><img :src="item.comment_avator_by" alt=""></div>
                      <div>{{ item.comment_by }}</div>
                    </div>
                  </el-col>
                  <el-col :span="20">
                    <div class="grid-content bg-purple">
                      {{ item.comment_content }}
                    </div>
                  </el-col>
                </el-row>
                <el-divider></el-divider>
              </div>

            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DescAndComment',
  data () {
    return {
      activeName: 'second',
      goods_full_desc: this.sendDesc,
      goods_comments: this.sendComments
    }
  },
  props: ['sendDesc', 'sendComments'],
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
.el-select .el-input {
  width: 30%;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.grid-content {
  border-radius: 1px;
  min-height: 1px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 1000px;
}

.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
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

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
