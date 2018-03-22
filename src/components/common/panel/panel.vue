<template>
  <section class="panel">
    <h4>- {{title}} -</h4><slot name="more"></slot>
    <slot name="panel"></slot>
  </section>
</template>

<script type="text/ecmascript-6">

  export default{
    props: {
      title: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin"
  .panel
    panel()
    position: relative
</style>
