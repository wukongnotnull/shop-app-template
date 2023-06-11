<template>
  <div class="about">
    <h1>从共享数据仓库中获得：{{ newNum }}</h1>
    <div>
      <input type="text" :value="num">
      <input type="button" @click="add" value="自增">
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'AboutView',
  computed: {
    ...mapState(['num']),
    ...mapGetters(['newNum'])
  },
  methods: {
    ...mapMutations(['getAdd']),
    ...mapActions(['getAddAction']),
    add () {
      this.getAddAction()
    }
  }
}
</script>
