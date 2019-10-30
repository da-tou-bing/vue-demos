<template>
  <div id="app">
      <!-- <Commucation></Commucation> -->
      <form-test></form-test>
  </div>
</template>

<script>
import Commucation from './components/communication'
import FormTest from './components/form'

export default {
  name: 'app',
  components: {
    Commucation,FormTest
  },
  data () {
    return {
      postFontSize: 1,
      blogs: [
        {
          id: 1,
          title: 'Vue的props到底怎么回事',
          content: 'Vue的props到底怎么回事,得具体看看才行',
        },
        {
          id: 2,
          title: 'v-for指令的使用',
          content: '纸上来得终觉浅，绝知此事要躬行',
        },
        {
          id: 3,
          title: '$emit 和v-on指令',
          content: '很神奇哇,$emit发了一份，v-on绑定的接收handle只执行了一次',
        }
      ]
    }
  },
  methods: {
    handleEnlarge (e) {
      console.log(`handleEnlarge - ${e}`);
      this.postFontSize += e
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
