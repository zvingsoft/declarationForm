<template>
  <div class="el-toolbar" :class="{
        'small': size === 'small'
      }">
    <div class="el-toolbar-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'normal'
    }
  }
}
</script>

<style scoped>
.el-toolbar,
.el-toolbar-body {
  background-color: #f8f8f8;
}

.body-list .el-toolbar,
.body-list .el-toolbar-body {
  background-color: #ECEEF3;
}

.body-list .el-toolbar-body,
.body-detail .el-toolbar-body {
  box-shadow: inset 1px 0px 0px rgba(0, 0, 0, 0.06);
}

.el-toolbar {
  height: 50px;
  border-bottom: 1px solid #ddd;
}

.el-toolbar.small {
  height: 36px;
}

.el-toolbar-body {
  position: absolute;
  z-index: 100;
  left: 0;
  right: 0px;
  display: flex;
  align-items: center;
  align-content: center;
  height: 50px;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
}

.el-toolbar-body>span,
.el-toolbar-body>.el-button:first-child,
.el-toolbar-body>.el-toolbar-btn:first-child {
  margin-left: 10px;
}

.el-toolbar-body>span,
.el-toolbar-body>.el-button:last-child,
.el-toolbar-body>.el-toolbar-btn:last-child {
  margin-right: 10px;
}

.el-toolbar.small .el-toolbar-body {
  height: 36px;
}

.el-toolbar-body .button-separator {
  padding: 11px 0;
  width: 1px;
  background-color: rgba(0, 0, 0, .25);
  display: inline-block;
  margin: 6px;
}

@media (max-width: 576px) {
  .el-toolbar,
  .el-toolbar-body {
    min-height: 50px;
    height: auto;
  }
  .el-toolbar.small,
  .el-toolbar.small .el-toolbar-body {
    min-height: 36px;
    height: auto;
  }
  .el-toolbar-body {
    position: relative;
    flex-flow: row wrap;
    padding: 5px 0;
  }
}
</style>
<style>
.el-toolbar .el-button {
  background: transparent;
}

.el-toolbar .el-button.is-disabled {
  background-color: transparent;
}
</style>
