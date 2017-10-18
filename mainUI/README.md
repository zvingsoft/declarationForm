# declarationForm:海关报关单场景演示

### 1. 概述
declarationForm 是一个使用微服务架构开发的针对海关报关、通关业务场景的演示系统，旨在展示FusionStage平台微服务相关的各项特性。

系统特点：
- 所有微服务皆使用ServiceComb框架
- 事务一致性使用ServiceComb Saga
- 用户界面Vue+ElementUI
- 数据均使用Mysql5.7
- 所有微服务均部署为无状态容器

系统组成：

|微服务名称  |代码         |描述                                |
|------------|-------------|------------------------------------|
|主界面      |mainUI       |系统的主界面，用于集成各个微服务的UI|
|报关单服务  |form         |报关单相关功能                      |
|计税服务    |tax          |计税相关API                         |
|许可证服务  |license      |许可证相关API                       |
|减免税服务  |taxCutting   |减免税相关API                       |
|舱单服务    |manifest     |舱单相关API                         |
|风险分析服务|riskAnalysis |风险分析API                         |
|棉花配额服务|cottonQuota  |棉花配额相关API                     |
|报关单UI    |formUI       |(纯静态页面)                        |
|计税管理UI  |taxUI        |(纯静态页面)                        |
|许可证管理UI|licenseUI    |(纯静态页面)                        |
|减免税管理UI|taxCuttingUI |(纯静态页面)                        |
|舱单管理UI  |manifestUI   |(纯静态页面)                        |
|棉花配额UI  |cottonQuotaUI|(纯静态页面)                        |


### 运用到的工具：
> gulp + webpack3 + babel 
### 运用到的库或框架：
> vue2 + vue-router + ElementUI + axios + axios-mock-adapter

## 注意事项
1. JS风格使用`JavaScript Standard Style`，建议使用VSCode作为js/vue的编辑器，并安装以下插件`EditorConfig for VSCode`,`Prettier-Standard - JavaScript formatter`,`JavaScript Standard Style`,`stylefmt`,`Vetur`。
1. 在开发界面时使用`ElementUI`提供的栅格系统（24列），对界面进行响应式布局，以便移动端访问。
1. 不要使用`ElementUI`提供的图标组件，使用`Font Awesome` 图标。
1. 界面参考设计稿，因为使用第三方控件库，所以不要求界面完全相同（控件的大小可与设计略有不同），但要布局类似（控件的位置，和控件间的留白类似）。
1. 后端接口符合RESTful规范
1. 注意后端返回前端的数据，字段名同数据库中的字段名，并转为小写，构造mock数据时也要注意这一点。
1. 工程编译时，`source`目录下的`lib`、`assets`目录下的文件会被直接复制到`dist`目录下。
1. 不要提交`node_modules`和`dist`目录到svn工程里  
在`Eclipse`的资源管理里排除 `node_modules` 目录:  
工程上右键 -> Properties -> Resource -> Resource Filters -> Add Filter ->Exclude all + Folders 填写 node_modules  
在`Git`客户端排除 `node_modules` 目录:  
在工程根目录下的 `.gitignore` 文件中添加 `node_modules`
1. `vue-loader 13.0.x` 有bug，不能正常编译vue文件，所以暂时用 `vue-loader 12.2.2`。如要升级`vue-loader`，一定要先作测试确认能正常编译vue文件。

## 目录说明
目录结构类似 https://github.com/kenberkeley/vue-demo/tree/master/src 有调整。

```
source
│  index.html                主入口静态页
│  app.js                    主入口js
│  login.html                登录页静态页
│  login.js                  登录页js
│  
├─components                 公共组件
├─config                     一些全局配置
├─directives                 自定义指令
├─filters                    自定义过滤器
├─mixins                     公共mixins
├─router                     路由配置
├─store                      状态管理
├─utils                      公共js工具方法/类
├─lib                        第三方库，供页面直接用<script>标签引入
│    vue.min.js
│    vue-router.min.js
│    axios.min.js
│     ......
├─assets                     资源目录
│  ├─css                     公共样式及第三方样式库
│  ├─fonts                   图标字体
│  └─images                  图片
└─views                      所有页面视图
    │  main.vue              app主视图组件
    │
    ├─form                   对应一级菜单“通关”
    │  ├─api                 接口（统一管理 XHR 请求）
    │  ├─components          “通关”模块下各子模块的共用组件
    │  └─mock                mock数据目录
    ├─setting                 对应一级菜单“配置”
    │  ├─api                 接口（统一管理 XHR 请求）
    │  ├─components          “配置”模块下各子模块的共用组件
    │  ├─mixins              “配置”模块下各子模块的共用mixins
    │  └─mock                mock数据目录
    ├─system                 对应一级菜单“系统”
    │  ├─api
    │  └─mock
    └─error                  404、505等错误提示视图
```

## 开发与构建命令
建议使用npm5或以上版本。建议使用淘宝的npm仓库镜像，安装npm包速度更快：

```bash
# 更新npm到最新版   
npm install npm@latest -g

# 使用淘宝的npm仓库镜像   
npm config set registry https://registry.npm.taobao.org

```

```bash
# 安装依赖   
npm install

# 进入开发模式，启动前台应用，localhost:3000 。监听vue文件改动自动刷新浏览器  
npm run dev

# 构建文件到dist目录供发布  
npm run build

```

```bash
# 安装 api-designer 到全局   
npm install -g api-designer

# 使用 api-designer 编辑raml格式接口文档，编辑时是暂存在浏览器本地缓存中的，需要导出或复制到工程根目录下API.raml文件
api-designer

# 安装 raml2html 到全局   
npm install -g raml2html

# 构建raml格式接口文档为html格式接口文档
raml2html API.raml API.html

```

## 链接
VUE 2 文档  
https://cn.vuejs.org/v2/api/  

Vue Router 2 文档  
https://router.vuejs.org/zh-cn/  

ElementUI 文档  
http://element.eleme.io/#/zh-CN/component/layout 

axios 介绍  
https://github.com/mzabriskie/axios/blob/master/README.md  

Font Awesome 图标  
http://fontawesome.io/icons/  
