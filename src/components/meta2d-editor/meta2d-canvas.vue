<template>
  <div class="meta2d-canvas-wrapper">
    <div ref="canvasRef" class="meta2d-canvas"></div>
  </div>
</template>

<script setup lang="ts">
  import { Meta2d } from '@meta2d/core'
  import { onMounted, reactive, ref } from 'vue'

  const canvasRef = ref<HTMLCanvasElement>()
  const meta2dInst = reactive({})

  onMounted(() => {
    const a = new Meta2d(canvasRef.value as HTMLCanvasElement, {})
    console.log('a', canvasRef.value)
  })
</script>

<style lang="scss">
  .meta2d-canvas-wrapper {
    width: 100%;
    overflow: hidden;
    .meta2d-canvas {
      width: 100%;
      height: 100%;
    }
  }
</style>
