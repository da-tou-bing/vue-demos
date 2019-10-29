<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to" />
    <ButtonCounter />
    <div :style="{fontSize: postFontSize + 'em'}">
      <BlogPost
        v-on:enlarge-text="handleEnlarge"
        v-for="blog in blogs"
        v-bind:key="blog.id"
        v-bind:title="blog.title"
        v-bind:content="blog.content"
      ></BlogPost>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ButtonCounter from './components/ButtonCounter.vue'
import BlogPost from './components/BlogPost.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ButtonCounter,
    BlogPost
  },
  data: function () {
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
    created () {
      // this.$on('enlarge-text',()=>{
      //   this.handleEnlarge();
      // });
    },
    mounted () {

    },
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
