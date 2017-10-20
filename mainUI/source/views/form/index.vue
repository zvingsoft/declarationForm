<template>
  <div class="layout">
    <div class="body-list" style="background-color:white;">
      <el-toolbar>
        <span>
          <i class="fa fa-ship" /> 通关</span>
      </el-toolbar>
      <div class="menu-wrap">
        <el-menu :default-active="activeMenu" @select="onSelectMenu">
          <el-menu-item :index="menu.path" v-for="menu in menus" :key="menu.path">
            <i :class="menu.meta.icon"></i>&nbsp;{{menu.meta.title}}
          </el-menu-item>
        </el-menu>
      </div>

    </div>
    <div class="body-detail">
      <div class="layout-content-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
const menus = [
  {
    path: '/form/declaration',
    meta: { title: '报关单', icon: 'fa fa-file-text-o' }
  },
  {
    path: '/form/declarationRetrieval',
    meta: { title: '报关单检索', icon: 'fa fa-file-text-o' }
  },
  {
    path: '/form/auditing',
    meta: { title: '审核', icon: 'fa fa-check-square-o' }
  }
]

export default {
  data() {
    return {
      menus,
      activeMenu: menus[0].path
    };
  },
  methods: {
    onSelectMenu(path) {
      let item = this.menus.find((val) => val.path === path)

      if (item) {
        this.$router.push({ path: item.path })
      }
    }
  },
  created() {
    if (location.hash.split('/').length == 2) {
      location.hash = this.activeMenu
    }
  },
  beforeRouteUpdate(to, from, next) {
    let path = to.path
    let item = this.menus.find(val => val.path === path)

    if (item) {
      this.activeMenu = item.path
    }
    next()
  }

}
</script>
<style scoped>
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.menu-wrap {
  background-color: #F5F7FB;
  position: absolute;
  width: 100%;
  top: 50px;
  bottom: 0;
  overflow: auto;
}

.el-menu {
  background-color: #F5F7FB;
}
</style>
<style>
.menu-wrap .el-menu{
  width:200px;
}
</style>
