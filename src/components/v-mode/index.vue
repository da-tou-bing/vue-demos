<template>
  <div>
    <input v-model="message" placeholder="edit me" />
    <p>mesage is {{message}}</p>
    <input type="checkbox" v-model="checked" />
  </div>
</template>

<script>
  export default {
    data(){
      return {
        message : '',
        checked:true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>