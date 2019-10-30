<template>
  <div>
    <h4>grand child,孙子节点</h4>
    <p>inject过来的祖先的数据{{rootData}}</p>
  </div>
</template>

<script>
  export default {
    inject:['rootData'],
  }
</script>

<style lang="scss" scoped>

</style>