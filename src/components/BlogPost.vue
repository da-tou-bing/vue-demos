<template>
  <div>
    <h3>{{title}}</h3>
    <button v-on:click="$emit('enlarge-text')">Enlarge</button>
    <p>{{content}}</p>
  </div>
</template>

<script>
  export default {
    props:{
      title:String,
      content:String,
      id:Number
    }
  }
</script>

<style scoped>

</style>