<template>
  <div>
    <input :type="type" :value="value" @input="oninput"/>
    <p>{{value}}</p>
  </div>
</template>

<script>
  export default {
    props:{
      type:{
        type:String,
        required:true
      }
    },
    data(){
      return {
        value:''
      }
    },
    methods:{
      oninput(e){
        console.log('IInput value changed', e.target.value)
        this.value = e.target.value;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>