<template>
  <div class="mf-loading-container">
    <img src="./loading.gif" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'loading'
  export default{
    name: COMPONENT_NAME
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .mf-loading-container
    img
      width: 20px
      height: 20px
      display: block
      margin: 0 auto
</style>
