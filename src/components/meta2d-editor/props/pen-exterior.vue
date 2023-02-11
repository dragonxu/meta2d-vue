<template>
  <div>
    <pen-data-entry label="组件名称" field="name">
      <el-input disabled />
    </pen-data-entry>
    <pen-data-entry label="X" field="x">
      <el-input-number />
    </pen-data-entry>
    <pen-data-entry label="Y" field="y">
      <el-input-number />
    </pen-data-entry>
    <pen-data-entry label="宽" field="width">
      <el-input-number />
    </pen-data-entry>
    <pen-data-entry label="高" field="height">
      <el-input-number />
    </pen-data-entry>
    <pen-data-entry label="圆角" field="borderRadius">
      <el-input-number :min="0" />
    </pen-data-entry>
    <pen-data-entry label="旋转" field="rotate">
      <el-input-number />
    </pen-data-entry>
    <pen-data-entry label="内边距-上" field="paddingTop">
      <el-input-number />
    </pen-data-entry>
    <pen-data-entry label="内边距-下" field="paddingBottom">
      <el-input-number />
    </pen-data-entry>
    <pen-data-entry label="内边距-左" field="paddingLeft">
      <el-input-number />
    </pen-data-entry>
    <pen-data-entry label="内边距-右" field="paddingRight">
      <el-input-number />
    </pen-data-entry>
  </div>
</template>

<script setup lang="ts">
  import PenDataEntry from './components/pen-data-entry'
</script>

<style scoped></style>
