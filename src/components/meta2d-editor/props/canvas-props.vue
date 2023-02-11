<template>
  <el-form>
    <el-form-item label="默认颜色">
      <el-color-picker
        v-model="storeData.color"
        @change="render"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="画笔填充颜色">
      <el-color-picker
        v-model="storeData.penBackground"
        @change="render"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="背景颜色">
      <el-color-picker
        v-model="storeData.background"
        @change="setBackgroundColor"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="背景图片">
      <el-input
        v-model="storeData.bkImage"
        @change="setBackgroundImage"
      ></el-input>
    </el-form-item>
    <el-form-item label="背景网格">
      <el-switch v-model="storeData.grid" @change="setGrid"></el-switch>
    </el-form-item>
    <el-form-item label="网格颜色">
      <el-color-picker
        v-model="storeData.gridColor"
        @change="setGrid"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="网格大小">
      <el-input-number
        v-model="storeData.gridSize"
        @change="setGrid"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="网格角度">
      <el-input-number
        v-model="storeData.gridRotate"
        @change="setGrid"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="背景标尺">
      <el-switch v-model="storeData.rule" @change="setRule"></el-switch>
    </el-form-item>
    <el-form-item label="标尺颜色">
      <el-color-picker
        v-model="storeData.ruleColor"
        @change="setRule"
      ></el-color-picker>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { computed } from 'vue'
  import useMeta2dStore from '../store'

  const { meta2dInst } = storeToRefs(useMeta2dStore())
  const storeData = computed(() => meta2dInst.value.store.data)

  const render = () => {
    meta2dInst.value.render()
  }

  const setBackgroundColor = (color: string | null) => {
    meta2dInst.value.setBackgroundColor(color as string)
    render()
  }

  const setBackgroundImage = (src: string) => {
    meta2dInst.value.setBackgroundImage(src as string)
  }

  const setGrid = () => {
    const _storeData = storeData.value
    meta2dInst.value.setGrid({
      grid: _storeData.grid,
      gridColor: _storeData.gridColor,
      gridSize: _storeData.gridSize,
      gridRotate: _storeData.gridRotate,
    })
    render()
  }

  const setRule = () => {
    const _storeData = storeData.value
    meta2dInst.value.setRule({
      rule: _storeData.rule,
      ruleColor: _storeData.ruleColor,
    })
    render()
  }
</script>

<style scoped></style>
