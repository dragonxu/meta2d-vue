<template>
  <div class="meta2d-header-toolbar">
    <div class="editor-name">Meta2d Editor</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>

<style lang="scss" scoped>
.meta2d-header-toolbar{
  height: 50px;
  .editor-name{
    width: 300px;
    font-size: 36px;
    line-height: 50px;
    background: -webkit-linear-gradient( 120deg, #bd34fe 30%, #41d1ff );
    -webkit-background-clip:text;
    background-clip: text;
    -webkit-text-fill-color:transparent;
  }
}
</style>