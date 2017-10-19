<template>
  <div class="layout">
    <div class="body-list" style="background-color:white;">
      <el-toolbar style="background-color: #EEF0F4;">
        配置
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
        path: '/setting/tax',
        meta: { title: '税率管理', icon: 'fa fa-money' },
      },
      {
        path: '/setting/license',
        meta: { title: '许可证管理', icon: 'fa fa-compass' },
      },
      {
        path: '/setting/taxCutting',
        meta: { title: '减免税管理', icon: 'fa fa-hand-lizard-o' },
      },
      {
        path: '/setting/manifest',
        meta: { title: '舱单管理', icon: 'fa fa-dropbox' },
      },
      {
        path: '/setting/processingTrade',
        meta: { title: '加贸管理', icon: 'fa fa-wrench' },
      },
      {
        path: '/setting/cottonQuota',
        meta: { title: '棉花配额管理', icon: 'fa fa-meetup' },
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
    if(location.hash.split('/').length==2){
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
.el-menu{
  background-color: #F5F7FB;
}
</style>
