<template>
  <div class="hello">
    <h1>{{ num | myToFixed('$',2) }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return { num: 100 }
  },
  filters: {
    myToFixed (value, arg1, arg2) {
      return arg1 + value.toFixed(arg2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
