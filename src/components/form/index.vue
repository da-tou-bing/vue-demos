<template>
  <div>
    <!-- <i-input type="text"></i-input> -->
    <i-form-item label="用户名" prop="username">
      <i-input type="text"></i-input>
    </i-form-item>
  </div>
</template>

<script>
  import IInput from './IInput'
  import IFormItem from './IFormItem'
  export default {
    components:{
      IInput,IFormItem
    }
  }
</script>

<style lang="scss" scoped>

</style>