<template>
  <div class="toolbar">
    <div class="toolbar-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.toolbar {
  height: 50px;
  border-bottom: 1px solid #ddd;
}
.toolbar-body {
  position: absolute;
  z-index: 100;
  left: 0;
  right: 18px;
  display: flex;
  align-items: center;
  align-content: center;
  padding-left: 15px;
  height: 50px;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
}

</style>
