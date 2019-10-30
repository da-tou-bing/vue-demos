<template>
  <div>
    <label :v-if="label" :for="label">{{label}}</label>
    <slot></slot>
    <p :v-if="error" class="error">{{error}}</p>
  </div>
</template>

<script>
  export default {
    props:{
      label:{
        type:String,
        default:''
      },
      prop:{
        type:String,
        default:''
      }
    },
    data(){
      return {
        error:''
      }
    }
  }
</script>

<style scoped>
  .error{
    color: red;
    font-size: 10em;
  }
</style>