<template>
  <div>
      <h1 @click="$emit('clickTitle')">child1</h1>
      <p @click="clickP">{{message}} <span style="color:red;">{{$attrs.extra}}</span></p>
      <slot></slot>
  </div>
</template>

<script>
  export default {
    props : {
      msg :String,
      testAction:Function
    },
    components:{
    },
    data(){
      return {
        message : this.$props.msg || '没有指定props的msg字段时，显示此默认值'
      }
    },
    methods:{
      clickP(){
        this.$props.testAction && this.$props.testAction('haha');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>