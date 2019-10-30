<template>
  <div>
    <child1 msg="我是儿子1" @clickTitle="clickChild1"></child1>
    <child1 msg="Vue的props可以是函数么" :testAction="testAction"></child1>
    <child1 extra="我是额外attr"></child1>
  </div>
</template>

<script>
  import child1 from './child1';
  export default {
    provide:{
      rootData:'最根节点的数据'
    },
    components:{
      child1
    },
    created(){

    },
    mounted(){
      this.$children[0].message = '这里的这个msg是props,可以在外界直接修改'
    },
    methods:{
      clickChild1(){
        console.log('clickChild1')
      },
      testAction(e){
        console.log(`function 类型的prop - testAction - ${e}`);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>