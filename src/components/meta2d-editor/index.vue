<template>
  <div class="meta2d-editor-wrapper">
    <meta2d-header />
    <div class="meta2d-editor">
      <meta2d-material />
      <meta2d-canvas />
      <meta2d-props />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Meta2dHeader from './meta2d-header.vue'
  import Meta2dCanvas from './meta2d-canvas.vue'
  import Meta2dMaterial from './meta2d-material.vue'
  import Meta2dProps from './meta2d-props.vue'
</script>

<style lang="scss" scoped>
.meta2d-editor-wrapper{
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .meta2d-editor{
    flex: 1;
    display: flex;
    overflow: hidden;
    .meta2d-canvas{
      flex: 1;
    }
  }
}
</style>