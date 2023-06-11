<template>
  <div class="home">
    <Carousel></Carousel>
    <br>
    <el-tag size="medium">商品栏目</el-tag>
    <PhoneColumn></PhoneColumn>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import PhoneColumn from '@/components/PhoneColumn.vue'

export default {
  name: 'MainView',
  components: {
    Carousel,
    PhoneColumn
  }
}
</script>
