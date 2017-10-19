<template>
  <div style="display: flex;">
    <div class="z-body-list z-main-height">
      <el-toolbar>
        <el-button  @click="addRoleClickHandler" >
          <i class="fa fa-plus"></i> 新建
        </el-button>
        <el-button @click="editRoleClickHandler" :disabled="!currentRole">
          <i class="fa fa-pencil"></i> 编辑
        </el-button>
        <el-button @click="deleteRoleClickHandler" :disabled="!currentRole">
          <i class="fa fa-close"></i> 删除
        </el-button>
      </el-toolbar>
      <div v-loading="roleLoading">
        <el-tree :highlight-current="true"
                 :props="roleProps"
                 :data="roleTree"
                 @current-change="onRoleTreeCheckChange">
        </el-tree>
      </div>
    </div>
    <div class="z-body-detail z-main-height" >
      <div>
        <el-tabs class="tabs-wrap" v-model="activeName" @tab-click="onRoleTabsClick">
          <el-tab-pane label='基本信息' name='roleInfo'>
            <div v-loading="roleInfoLoading">
              <div style="padding: 15px;">
                <table width="100%" cellpadding="4" cellspacing="0" class="z-datagrid">
                  <tbody>
                    <tr style="height: 24px; line-height: 24px;">
                      <td class="noellipsis">&nbsp;</td>
                      <td>角色名：</td>
                      <td>{{currentRole && currentRole.name}}</td>
                      <td>角色代码：</td>
                      <td>{{currentRole && currentRole.rolecode}}</td>
                    </tr>
                    <tr style="height: 24px; line-height: 24px;">
                      <td class="noellipsis">&nbsp;</td>
                      <td>备注：</td>
                      <td colspan="3">{{currentRole && currentRole.memo}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <el-toolbar>
                <el-button class="z-toolbar-btn"
                           :plain="true"
                           icon="plus"
                           size="small"
                           @click="addUsersToRoleClickHandler"
                           :disabled="!currentRole">添加用户到角色</el-button>
                <el-button class="z-toolbar-btn"
                           :plain="true"
                           icon="delete"
                           size="small"
                           @click="deleteUsersToRoleClickHandler" :disabled="!currentRole">从角色中删除用户
                </el-button>
              </el-toolbar>
              <div class="main-content-wrap">
                <el-table style="width: 100%" :data="userDataTableValues">
                  <el-table-column prop="username" label="用户名" min-width="150"></el-table-column>
                  <el-table-column prop="realname" label="真实姓名" min-width="150"></el-table-column>
                  <el-table-column label="所属角色" min-width="150">
                    <template slot-scope="scope">
                      <span v-for="(role,index) in scope.row.roles" :key="role.rolecode">
                        {{role.name}}{{index+1 < scope.row.roles.length ? ',':''}}
                      </span>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="type.name" :name="type.code" v-for="type in rolePermissionTypes" :key="type.code">
            <div class="pane-wrap main-content-wrap">
              <component :is="type.code" :id="currentRole.rolecode" :type="privType"></component>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!--添加编辑框-->
    <el-dialog :title="editRoleMode === 1 ? '添加新角色' : '编辑角色'" :visible.sync="roleDialog">
      <el-form :model="tmpRole" :rules="roleRules" ref="roleForm" label-width="100px">
        <el-form-item label="角色名" prop="rolename">
          <el-input v-model="tmpRole.rolename"></el-input>
        </el-form-item>
        <el-form-item label="角色代码" prop="rolecode">
          <el-input v-model="tmpRole.rolecode" :disabled="editRoleMode === 2"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="tmpRole.memo"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="roleDialog = false">取 消</el-button>
        <el-button type="primary" :loading="confirmLoading" @click="okHandler">确 定</el-button>
      </div>
    </el-dialog>
    <!--用户选择框-->
    <el-dialog :title="selectMode === 1 ? '添加用户到角色' : '从角色中删除用户'" :visible.sync="selectDialog">
      <div class="select-user-wrap" v-loading="selectLoading">
        <el-table :data="selectUsers" @selection-change="usersSelectionChangeHandler" style="width: 100%" highlight-current-row>
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column prop="username" label="用户名" min-width="150"></el-table-column>
          <el-table-column prop="realname" label="真实姓名" min-width="150"></el-table-column>
          <el-table-column label="所属角色" min-width="150">
            <template slot-scope="scope">
              <span v-for="role in scope.row.roles" :key="role.rolecode">
                {{role.name}}，
              </span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer">
        <el-button @click="selectDialog = false">取 消</el-button>
        <el-button type="primary"
                   :loading="confirmLoading"
                   :disabled="!selectedUsers.length"
                   @click="selectConfirmClickHandler">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style scoped>
  .z-body-list{
    flex-basis: 280px;
    max-width: 280px;
  }
  .pane-wrap{
    height: calc(100vh - 100px);
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>

<script>
  import roleAPI from './api/roleAPI.js'
  import TreeSelect from './components/TreeSelect.vue'
  import TreeGrid from './components/TreeGrid.vue'
  import MenuPermission from './components/MenuPermission.vue'
  import util from './components/util.js'
  require('./mock/role.js')
  require('./mock/priv.js')
export default {
  data() {
    return {
      rolePermissionTypes: [{code:'menuPermission',name:'菜单权限'}],
      roleLoading: false,
      roleTree: [],
      currentRole:{},
      activeName: 'roleInfo',
      roleInfoLoading: false,
      userDataTableValues: [],
      menuPrivLoading: false,
      privType: 'R',
      roleProps: {
        children: 'children',
        label: 'name',
        key: 'rolecode'
      },

      roleDialog: false,
      editRoleMode: 1, // 1： 添加， 2：编辑
      tmpRole: {},
      roleRules: {
        rolename: [
          { required: true, message: '请输入角色名', trigger: 'blur' }
        ],
        rolecode: [
          { required: true, message: '请输入角色代码', trigger: 'blur' }
        ]
      },
      confirmLoading: false,
      selectUsers: [],
      selectMode: 1, // 1: 添加用户到角色，2: 从角色中删除用户
      selectDialog: false,
      selectLoading: false,
      selectedUsers: [],
      sidebarCollapsed: false //侧边栏是否为展开状态
    }
  },
  created() {
    roleAPI.getRoles().then(data =>{
      this.roleTree = data.data
       this.roleInfoLoading = false
    })
  },
  methods: {
    // 当在左下机构树上点击
    onRoleTreeCheckChange(role) {
      this.currentRole = role;
      this.userDataTableValues = []
      this.onRoleTabsClick()
    },
    // 当在右上页签上点击
    onRoleTabsClick() {
      if( !this.currentRole || !this.currentRole.rolecode){
        return;
      }

      if (this.activeName === 'roleInfo' && !this.userDataTableValues.length) {
        this.roleInfoLoading = true;
        roleAPI.getUsersByRole(this.currentRole.rolecode).then(data => {
          this.userDataTableValues = data.data
          this.roleInfoLoading = false
        });
      }

    },
    addRoleClickHandler(){
      this.editRoleMode = 1;
      this.tmpRole = {
        rolename: '',
        rolecode: '',
        memo: ''
      };
      this.roleDialog = true
    },
    editRoleClickHandler(){
      this.editRoleMode = 2;
      console.info(this.currentRole);
      this.tmpRole = {
        rolecode:  this.currentRole.rolecode,
        memo: this.currentRole.memo,
        rolename: this.currentRole.name
      };

      this.roleDialog = true;
    },
    deleteRoleClickHandler(){
      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return roleAPI.deleteRole(this.currentRole.rolecode);
      }).then((data)=>{
        if(data.status !== 1){
          return data
        }

        let index = this.roleTree.findIndex(val => val.rolecode === this.currentRole.rolecode);

        this.roleTree = [
          ...this.roleTree.slice(0, index),
          ...this.roleTree.slice(index + 1)
        ];

        this.currentRole = null
        this.userDataTableValues = []

        return data
      }).then((data) => {
        util.showNotification(data);
      }).catch(e => {
        util.showErrorNotification(e)
      });
    },
    okHandler(){
      let addForm = () => {
        return roleAPI.addRole(this.tmpRole).then(data=>{
          if(data.status !== 1){
            return data;
          }
            this.roleTree.push({
              name: this.tmpRole.rolename,
              rolecode: this.tmpRole.rolecode,
              memo: this.tmpRole.memo
            });

          return data;
        })
      };

      let editForm = () => {
        return roleAPI.editRole(this.tmpRole.rolecode, this.tmpRole).then( data => {
          if(data.status !== 1){
            return data;
          }

          let index = this.roleTree.findIndex(val => val.rolecode === this.tmpRole.rolecode);
          this.tmpRole.name=this.tmpRole.rolename;
          this.roleTree = [
            ...this.roleTree.slice(0, index),
            this.tmpRole,
            ...this.roleTree.slice(index + 1)
          ]
          this.currentRole=this.tmpRole

          return data;
        })

      };

      util.validateForm(this.$refs['roleForm']).then(() => {
        this.confirmLoading = true;
        if(this.editRoleMode === 1){
          return addForm();
        }

        if(this.editRoleMode === 2){
          return editForm();
        }
      }).then((data)=> {
        this.confirmLoading = false;
        this.roleDialog = false;

        util.showNotification(data);
      }).catch((e)=>{
        util.showErrorNotification(e);
        this.confirmLoading = false;
      });
    },
    addUsersToRoleClickHandler(){
      this.selectUsers = [];
      this.selectedUsers = [];
      this.selectMode = 1;
      this.selectLoading = true;
      this.selectDialog = true;

      roleAPI.getUsersNotRole(this.currentRole.rolecode).then(data=>{
        this.selectUsers = data.data;
        this.selectLoading = false;
      });
    },
    deleteUsersToRoleClickHandler(){
      this.selectUsers = Object.assign([], this.userDataTableValues);
      this.selectedUsers = [];
      this.selectMode = 2;
      this.selectLoading = false;
      this.selectDialog = true;
    },
    usersSelectionChangeHandler(selection){
      this.selectedUsers = selection;
    },
    selectConfirmClickHandler(){
      this.confirmLoading = true;

      let deleteUsers = () => {
        let ids = this.selectedUsers.map(val => val.username);

        return roleAPI.removeUsers(ids,this.currentRole.rolecode).then(res => {
          if(res.status !== 1){
            return res;
          }
          this.userDataTableValues = this.userDataTableValues.filter(val => {
            return !ids.includes(val.username);
          });
          return res;
        });
      };

      let addUsers = () => {
        let ids = this.selectedUsers.map(val => val.username);

        return roleAPI.addUsers(ids, this.currentRole.rolecode).then(res => {
          if(res.status !== 1){
            return res;
          }

          this.userDataTableValues = [
            ...this.userDataTableValues,
            ...this.selectedUsers
          ];

          return res;
        });
      };

      let handler = this.selectMode === 1 ? addUsers : deleteUsers;

      handler().then((res)=>{
        this.confirmLoading = false;
        this.selectDialog = false;

        util.showNotification(res);
      }).catch(e => {
        this.confirmLoading = false;
        util.showErrorNotification(e);
      });
    },
    toggleSidebar(){
      this.sidebarCollapsed = !this.sidebarCollapsed
    }
  },
  components: {
    'menuPermission': MenuPermission,
    'tree-select': TreeSelect,
    'tree-grid': TreeGrid
  }

};
</script>
<style scoped>
.z-body-detail {
    background: #f9fbfc none;
    box-shadow: inset 1px 0px 0px rgba(0, 0, 0, 0.04);
    flex: 1;
    position: relative;
}

.z-main-height {
    height: calc(100vh - 50px);
    position: relative;
}
.main-content-wrap {
  padding: 10px;
}
</style>



