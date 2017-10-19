<template>
  <div>
    <el-toolbar size="small">
      <el-button size="mini" class="z-toolbar-btn" :plain="true" icon="save" :loading="handlerLoading"
                 @click="saveClickHandler">保存</el-button>
      <el-button size="mini" class="z-toolbar-btn" :plain="true" icon="check" @click="selectAllClickHandler">全选</el-button>
    </el-toolbar>

    <tree-permission v-model="permission" :permissions="permissionTree" :props="defaultProps"></tree-permission>
  </div>
</template>

<style scoped>

</style>

<script>
  import TreePermission from './TreePermission.vue';
  import privAPI from '../api/privAPI.js';
  import util from "./util.js";

  export default {
    data() {
      return {
        permission: [],
        permissionBak:[],
        permissionTree: [],
        defaultProps: {
          children: 'children',
          label: 'name',
          permission: 'items'
        },
        handlerLoading: false
      };
    },
    methods: {
      getData(){
//        console.info("xxxx="+this.id+"  xxx="+this.refresh);
        if(this.id){
          privAPI.getMenuPermissions(this.id, this.type).then(res => {
            this.permissionBak = Object.assign([],res.data.value);
            this.permission = res.data.value;
            this.permissionTree = res.data.tree;
          });
        }
      },
      selectAllClickHandler(){
        let handle = (tree) => {
          let result = [];

          for(let i = 0; i < tree.length; i++){
            if(tree[i].code){
              result.push(tree[i].code);
            }

            if(tree[i].items && tree[i].items.length > 0){
              tree[i].items.forEach(val => {
                result.push(val.code);
              });
            }

            if (tree[i].children && tree[i].children.length > 0) {
              let tmp = handle(tree[i].children);
              result = result.concat(tmp);
            }
          }

          return result;
        };

        this.permission = handle(this.permissionTree);
      },
      saveClickHandler(){
        this.handlerLoading = true;
        privAPI.saveMenuPermissions(this.id,this.type, this.permission,this.permissionBak).then(res => {
          util.showNotification(res);
          this.handlerLoading = false;
        }).catch(e => {
          util.showErrorNotification(e);
          this.handlerLoading = false;
        });
      }
    },
    watch: {
      id: function(value, oldValue){
        console.log('refresh', value, oldValue);

        if(value){
          this.getData();
        }else{
          this.permission = [];
          this.permissionTree = [];
        }
      }
    },
    created() {
      this.getData();
    },
    props: {
      id: {
        type: String,
        required: true,
        default: ''
      },
      type: {
        type:String,
        required: true
      }
    },
    components: {
      'tree-permission': TreePermission
    }
  };
</script>
