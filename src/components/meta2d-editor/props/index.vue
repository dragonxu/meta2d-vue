<template>
  <div class="meta2d-props">
    <el-tabs v-if="meta2dInst" v-model="activeName">
      <template v-if="activePen">
        <el-tab-pane label="外观" name="style">
          <pen-data-entry label="组件名称" field="name">
            <el-input disabled />
          </pen-data-entry>
        </el-tab-pane>
        <el-tab-pane label="动效" name="second">Config</el-tab-pane>
      </template>
      <el-tab-pane v-else label="画布" name="canvas">
        <canvas-props />
      </el-tab-pane>
      <el-tab-pane label="结构" name="third">Role</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { ref, watch } from 'vue'
  import useMeta2dStore from '../store'
  import PenDataEntry from './components/pen-data-entry'
  import CanvasProps from './canvas-props.vue'

  const activeName = ref('canvas')

  const { activePen, meta2dInst } = storeToRefs(useMeta2dStore())

  watch(
    () => activePen.value,
    (newVal) => {
      activeName.value = newVal ? 'style' : 'canvas'
    }
  )
</script>

<style lang="scss">
  .meta2d-props {
    width: 250px;
    border-left: 1px solid #dcdfe6;
    .el-tabs {
      height: 100%;
      .el-tabs__header {
        margin-bottom: 8px;
      }
      .el-tabs__nav {
        width: 100%;
        .el-tabs__item {
          width: 33.33%;
          padding: 0;
          text-align: center;
        }
      }
      .el-tabs__content {
        height: calc(100% - 40px - 8px - 8px);
        padding: 8px;
        padding-top: 0;
        overflow: hidden;
      }
    }
  }
</style>
