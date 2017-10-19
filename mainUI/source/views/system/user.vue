<template>
<div>
  <el-toolbar>
      <el-button class="z-toolbar-btn" :plain="true" icon="plus" @click="addClick">添加</el-button>
      <el-button class="z-toolbar-btn" :plain="true" icon="edit" :disabled="selectedRows.length !== 1" @click="editClick">编辑</el-button>
      <el-button class="z-toolbar-btn" :plain="true" icon="circle-cross" :disabled="!(selectedRows.length === 1 && selectedRows[0].status)" @click="disableOrEnableClickHandler">停用</el-button>
      <el-button class="z-toolbar-btn" :plain="true" icon="circle-check" :disabled="!(selectedRows.length === 1 && !selectedRows[0].status)" @click="disableOrEnableClickHandler">启用</el-button>
      <el-button class="z-toolbar-btn" :plain="true" icon="delete" :disabled="selectedRows.length === 0" @click="deleteClickHandler">删除</el-button>
      <el-button class="z-toolbar-btn" :plain="true" icon="setting" :disabled="selectedRows.length !== 1" @click="modifyPasswordClick">修改密码</el-button>
  </el-toolbar>
  <div class="main-content-wrap" v-loading="dataLoading">
      <div class="search-bar fr">
        用户名/真实姓名:
        <el-input v-model="search.username" size="small" placeholder="请输入用户名/真实姓名" style="width: 200px;"></el-input>
        公司：
        <el-input v-model="search.company" size="small" placeholder="请输入公司名称" style="width: 200px;"></el-input>
        <el-button size="small" type="primary" @click="handleSearchBtn" style="width: 60px;">搜索</el-button>
      </div>
    <el-table :data="users" border tooltip-effect="dark" @selection-change="onSelectionChange"  highlight-current-row >
      <el-table-column type="selection" width="60" align="center"/>
      <el-table-column prop="username" label="用户名"/>
      <el-table-column prop="realname" label="真实姓名"/>
      <el-table-column prop="status"label="用户状态"/>
      </el-table-column>
      <el-table-column prop="company" label="单位"/>
      <el-table-column label="所属角色">
        <template slot-scope="scope">
          <span v-for="role in scope.row.roles" :key="role.rolecode">{{role.name}} </span>
        </template>
      </el-table-column>
    </el-table>
    <div class="page-wrap fr">
        <el-pagination class="page" @size-change="sizeChangeHandler" @current-change="currentChangeHandler" :current-page.sync="currentPage" :page-sizes="pageSizes" :page-size="pageSize" :total="total" layout="total,sizes, prev, pager, next">
        </el-pagination>
    </div>
  </div>

    <!--修改密码框-->
  <el-dialog title="修改密码" :visible.sync="modifyPasswordModal">
    <el-form :model="tmpUser" :rules="userRules" ref="modifyPasswordForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="tmpUser.username" :readonly="true" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="tmpUser.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repeatPassword">
        <el-input type="password" v-model="tmpUser.repeatPassword" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="modifyPasswordModal = false">取 消</el-button>
      <el-button type="primary" @click="modifyPasswordHandler" :loading="handlerLoading">确 定</el-button>
    </div>
  </el-dialog>
    <!--添加框-->
  <el-dialog title="添加用户" :visible.sync="addUserModal">
    <el-form :model="tmpUser" :rules="userRules" ref="addUserForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="tmpUser.username" auto-complete="off"/>
      </el-form-item>
      <el-form-item label="真实姓名" prop="realname">
        <el-input type="text" v-model="tmpUser.realname"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="tmpUser.password" auto-complete="off"/>
      </el-form-item>
      <el-form-item label="确认密码" prop="repeatPassword">
        <el-input type="password" v-model="tmpUser.repeatPassword" auto-complete="off"/>
      </el-form-item>
      <el-form-item label="公司" prop="company">
        <el-input type="company" v-model="tmpUser.company" auto-complete="off"/>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="tmpUser.email"/>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="tmpUser.tel" placeholder="联系电话"/>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="tmpUser.phone" placeholder="手机号码"/>
      </el-form-item>
      <el-form-item label="所属角色" prop="roleIds">
        <el-select v-model="tmpUser.roleIds" multiple placeholder="请选择所属角色">
          <el-option v-for="role in roles" :key="role.rolecode" :label="role.name" :value="role.rolecode">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="addUserModal = false">取 消</el-button>
      <el-button type="primary" @click="addUserHandler" :loading="handlerLoading">确 定</el-button>
    </div>
  </el-dialog>
    <!--编辑框-->
  <el-dialog title="编辑用户" :visible.sync="editUserModal">
    <el-tabs class="tabs-wrap" v-model="editUserActiveNameTab">
     <el-tab-pane label="基本信息" name="base" key="base">
      <div class="modal-wrap" v-loading="modalLoading">
        <el-form :model="tmpUser" :rules="userRules" ref="editUserForm" style="margin-top: 20px;" label-width="100px">
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="tmpUser.username" auto-complete="off"/>
          </el-form-item>
          <el-form-item label="真实姓名" prop="realname">
            <el-input type="text" v-model="tmpUser.realname"/>
          </el-form-item>
          <el-form-item label="公司" prop="company">
            <el-input type="company" v-model="tmpUser.company" auto-complete="off"/>
          </el-form-item>
          <el-form-item prop="email" label="邮箱">
            <el-input v-model="tmpUser.email"/>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="tmpUser.tel" placeholder="联系电话"/>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="tmpUser.phone" placeholder="手机号码"/>
          </el-form-item>
          <el-form-item label="所属角色" prop="roleIds">
            <el-select v-model="tmpUser.roleIds" multiple placeholder="请选择所属角色">
              <el-option v-for="(role, index) in roles" :key="index" :label="role.name" :value="role.rolecode">
              </el-option>
            </el-select>
          </el-form-item>
          <div class="pane-btns">
            <el-button @click="editUserModal = false">取 消</el-button>
            <el-button type="primary" @click="editUserHandler()" :loading="handlerLoading">保存基本信息</el-button>
          </div>
        </el-form>
      </div>
        </el-tab-pane>
        <el-tab-pane :label="type.name" :name="type.code" v-for="type in userPermissionTypes" :key="type.code">
          <div style="max-height: 350px;overflow-y: auto;overflow-x: hidden;">
            <component :is="type.code" :id="tmpUser.username" type="U"></component>
          </div>
        </el-tab-pane>
    </el-tabs>

  </el-dialog>
</div>
</template>

<script>
import userAPI from './api/userAPI.js'
import roleAPI from './api/roleAPI.js'
import TreeSelect from './components/TreeSelect.vue'
import MenuPermission from './components/MenuPermission.vue'
import util from './components/util.js'
require('./mock/user.js')
export default {
  data() {
    return {
      userPermissionTypes: [{code:'menuPermission',name:'菜单权限'}],
      currentPage: 1,
      total: 50,
      pageSize: 5,
      pageSizes: [5, 10, 15, 20],
      search:{username:'',company:''},
      dataLoading: true,
      users: [],
      selectedRows: [],
      handlerLoading: false,
      modifyPasswordModal: false,
      addUserModal: false,
      editUserModal: false,
      editUserActiveNameTab: 'base',
      tmpUser: {
        username: '',
        realname: '',
        password: '',
        repeatPassword: '',
        status: true,
        company: '',
        roles: [],
        roleIds: [],
        lastChangePasswordDate: '',
        email: '',
        tel: '',
        phone: '',
        remark: ''
      },
      roles: [],
      modalLoading: false,
      userRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        realname: [
          { required: true, message: '请输入真实姓名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 32, message: '密码最少6位，最多32位', trigger: 'blur' }
        ],
        repeatPassword: [
          { required: true, message: '请重复输入一次密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value !== this.tmpUser.password) {
                callback(new Error('两次输入密码不一致!'))
              } else {
                callback()
              }
            }, trigger: 'blur'
          }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ],
        roleIds: [
          { type: 'array', required: true, message: '请选择所属角色', trigger: 'blur, change' }
        ]
      },

    }
  },
  computed: {
    disableOrEnable: function() {
      if (this.selectedRows.length !== 1) {
        return ''
      }

      return this.selectedRows[0].status ? '停用' : '启用'
    }
  },
  methods: {
    onSelectionChange(selection) {
      this.selectedRows = selection
    },
    addClick() {
      this.tmpUser = {
        username: '',
        realname: '',
        password: '',
        repeatPassword: '',
        sate: true,
        company: '',
        roles: [],
        roleIds: [],
        lastChangePasswordDate: '',
        email: '',
        tel: '',
        phone: '',
        remark: ''
      }
      if ( !this.roles.length) {
        Promise.all([
        ]).then(datas => {
          this.roles = datas[1].data
        })
      }

      this.addUserModal = true
    },
    addUserHandler() {
      util.validateForm(this.$refs['addUserForm']).then(() => {
        this.handlerLoading = true
        this.tmpUser.roles = this.roles.filter(val => {
          return this.tmpUser.roleIds.includes(val.rolecode)
        })

        return userAPI.addUser(this.tmpUser).then(data => {
          if (data.status !== 1) {
            return data
          }
          this.users.push(this.tmpUser)
          return data
        })

      }).then(data => {
        this.addUserModal = false
        this.handlerLoading = false
        util.showNotification(data)

      }).catch((e) => {
        util.showErrorNotification(e)
        this.handlerLoading = false
      })


    },
    editClick() {
      this.tmpUser = Object.assign({ roleIds: [] }, this.tmpUser, this.selectedRows[0])
      this.tmpUser.roleIds = this.tmpUser.roles.map(val => {
        return val.rolecode
      })
      this.editUserActiveNameTab = 'base'
      this.modalLoading = true
      this.editUserModal = true

      Promise.all([
        roleAPI.getRoles(),
      ]).then(datas => {
        this.roles = datas[0].data
        this.modalLoading = false
      })

    },
    editUserHandler() {
      util.validateForm(this.$refs['editUserForm']).then(() => {
        this.handlerLoading = true
        return userAPI.editUser(this.tmpUser.username, this.tmpUser)
      }).then(res => {
        if (res.status === 1) {
          return res
        }
        let index = this.users.findIndex(val => val.username === this.tmpUser.username)
        this.tmpUser.roles = this.roles.filter(val => {
          return this.tmpUser.roleIds.includes(val.rolecode)
        })

        this.users = [
          ...this.users.slice(0, index),
          this.tmpUser,
          ...this.users.slice(index + 1)
        ]
        return res
      }).then((data) => {
        this.handlerLoading = false
        this.editUserModal = false
        util.showNotification(data)
      }).catch(e => {
        util.showErrorNotification(e)
        this.handlerLoading = false
      })

    },
    deleteClickHandler() {
      let rowIds = []

      this.selectedRows.forEach(function(row) {
        rowIds.push(row.username)
      })

      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action !== 'confirm') {
            done()
            return
          }
          instance.confirmButtonLoading = true

          return userAPI.deleteUsers(rowIds).then(data => {
            instance.confirmButtonLoading = false
            return data
          }).then(data => {
            if (data.status !== 1) {
              return data
            }

            this.users = this.users.filter(val => !rowIds.includes(val.username))

            return data
          }).then(data => {
            util.showNotification(data)
            done()
          }).catch(e => {
            util.showErrorNotification(e)
            instance.confirmButtonLoading = false
            done()
          })
        }
      }).catch(e => {
        util.showErrorNotification(e)
      })

    },
    disableOrEnableClickHandler() {
      let username = this.selectedRows[0].username

      this.$confirm('确定' + this.disableOrEnable + '这个用户吗？', '确认' + this.disableOrEnable, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action !== 'confirm') {
            done()
            return
          }
          instance.confirmButtonLoading = true
          let handle
          if (this.selectedRows[0].status) {
            handle = userAPI.disableUser
          } else {
            handle = userAPI.enableUser
          }

          handle(username).then(data => {
            instance.confirmButtonLoading = false
            return data
          }).then(data => {
            if (data.status !== 1) {
              return data
            }
            let index = this.users.findIndex(val => {
              return val.username === username
            })
            this.users[index].status = !this.users[index].status

            return data
          }).then(data => {
            util.showNotification(data)
            done()
          }).catch(e => {
            util.showErrorNotification(e)
            instance.confirmButtonLoading = false
            done()
          })
        }
      }).catch(e => {
        util.showErrorNotification(e)
      })
    },
    modifyPasswordClick() {
      this.tmpUser.username = this.selectedRows[0].username
      this.tmpUser.password = ''
      this.tmpUser.repeatPassword = ''

      this.modifyPasswordModal = true
    },
    modifyPasswordHandler() {

      util.validateForm(this.$refs['modifyPasswordForm']).then(() => {
        this.handlerLoading = true
        return userAPI.updatePassword(this.tmpUser.username, this.tmpUser.password).then(data => {
          this.modifyPasswordModal = false
          this.handlerLoading = false
          return data
        })
      }).then((data) => {
        util.showNotification(data)
      }).catch((e) => {
        util.showErrorNotification(e)
        this.handlerLoading = false
      })

    },
    handleSearchBtn() {
      if (this.search.username != '' || this.search.company != '') {
        userAPI.getUsers(search).then(data =>{
          this.users=data.data
          })
      }
    },
    sizeChangeHandler(val) {
      this.pageSize = val;
    },
    currentChangeHandler(val) {
      this.currentPage = val;
    }
  },
  created() {
    Promise.all([
      userAPI.getUsers(),
    ]).then(datas => {
      console.info(datas)
      this.users = datas[0].data
      this.dataLoading = false
    })
  },
  components: {
    'menuPermission': MenuPermission,
    'tree-select': TreeSelect
  }
}
</script>

<style scoped>
.main-content-wrap {
  padding: 10px;
}

.search-bar {
  padding-bottom: 10px;
}
.pane-btns {
  text-align: right;
}
</style>
