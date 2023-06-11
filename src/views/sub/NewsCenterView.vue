<template>
  <div>
    <div id="menu">
      <button :class="{active:isactive ===0 }" @click="tab(0)">娱乐新闻</button>
      <button :class="{active:isactive ===1}" @click="tab(1)">体育新闻</button>
      <button :class="{active:isactive ===2}" @click="tab(2)">热搜</button>
    </div>
    <div id="main">
      <ul>
        <li v-for="(item,i) in newsList[isactive]" :key="i">
          <a href="#">{{ item }}</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NewsCenterView',
  data () {
    return {
      isactive: 0,
      newsList: [
        ['迪丽热巴回应脸不像检察官', '学冬专辑溯光 发频', '彭昱畅李庚希《我们一起摇告'],
        ['体育新闻标题1', '体育新闻标题2 ', '体育新闻标题3'],
        ['热搜标题1', '热搜标题2', '热搜标题3']
      ]

    }
  },
  methods: {
    tab (i) {
      this.isactive = i
    }
  }

}
</script>

<style scoped>
ul li {
  list-style: none;
}

.active {
  color: red;
  background-color: #65676a;
}
</style>
