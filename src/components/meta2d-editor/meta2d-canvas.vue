<template>
  <div class="meta2d-canvas-wrapper">
    <div ref="canvasRef" class="meta2d-canvas"></div>
  </div>
</template>

<script setup lang="ts">
  import { Meta2d } from '@meta2d/core'
  import { onMounted, ref } from 'vue'

  const canvasRef = ref<HTMLCanvasElement>()
  const meta2dInst = ref<Meta2d>({} as Meta2d)

  onMounted(() => {
    const _meta2dInst = new Meta2d(canvasRef.value as HTMLCanvasElement, {
      background: '#FAFAFA',
    })
    meta2dInst.value = _meta2dInst

    // meta2d的增加节点等操作都是在原始对象上进行的，这不会触发vue的响应式更新，将原始对象的canvas.store替换成响应式对象即可解决
    // https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive-proxy-vs-original-1
    // @ts-ignore
    _meta2dInst.canvas.store = meta2dInst.value.store
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
