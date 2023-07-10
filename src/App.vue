<template>
  <div id="app">
<!--    大荧屏 一级路由视图 显示的位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body {
  margin: 4px 8px;
}
/*包含以下四种的链接*/
a {
  text-decoration: none;
  color: black;
}
/*正常的未被访问过的链接*/
a:link {
  text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
  text-decoration: none;
}
/*鼠标划过(停留)的链接*/
/*a:hover {*/
/*  text-decoration: none;*/
/*}*/
/* 正在点击的链接*/
a:active {
  text-decoration: none;
}

</style>
