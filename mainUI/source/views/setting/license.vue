<template>
  <div>
    <el-toolbar>
      <el-button class="z-toolbar-btn" :plain="true" icon="plus" @click="addTask">新建</el-button>
      <el-button class="z-toolbar-btn" :plain="true" icon="edit" :disabled="selectedRows.length !== 1" @click="editTask">修改</el-button>
      <el-button class="z-toolbar-btn" :plain="true" icon="delete" :disabled="selectedRows.length === 0" @click="deleteTasks">删除</el-button>
    </el-toolbar>
    <div class="main-content-wrap">
      <div class="search-bar fr">
        许可证号:
        <el-input v-model="search.licensekey" size="small" placeholder="请输入许可证号" style="width: 200px;"></el-input>
        进出口代码:
        <el-input v-model="search.importandexportcode" size="small" placeholder="请输入进出口代码" style="width: 200px;"></el-input>
        企业名称：
        <el-input v-model="search.companyname" size="small" placeholder="请输入企业名称" style="width: 200px;"></el-input>
        <el-button size="small" type="primary" @click="handleSearchBtn"> 搜 索 </el-button>
      </div>

      <el-table :data="licenseTable" :height="clientHeight" @selection-change="onSelectionChange">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="licensekey" show-overflow-tooltip min-width="30%" label="许可证号">
        </el-table-column>
        <el-table-column prop="importandexportcode" show-overflow-tooltip min-width="30%" label="进出口代码">
        </el-table-column>
        <el-table-column prop="companyname" show-overflow-tooltip min-width="30%" label="企业名称">
        </el-table-column>
        <el-table-column prop="status" show-overflow-tooltip min-width="10%" label="核查状态"> </el-table-column>
      </el-table>

      <!--分页 -->
      <div class="page-wrap">
        <el-pagination class="page" @size-change="sizeChangeHandler" @current-change="currentChangeHandler" :current-page.sync="currentPage" :page-sizes="pageSizes" :page-size="pageSize" :total="total" layout="total,sizes, prev, pager, next">
        </el-pagination>
      </div>
    </div>

    <!-- 新建,修改对话框 -->
    <el-dialog :title="addOrEdit==1?'新建':'修改'" :visible.sync="showDialog">
      <el-form label-width="160px" :model="tmpLicense">
        <el-form-item label="企业名称：">
          <el-input placeholder="请输入企业名称" v-model="tmpLicense.companyname" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="许可证号：">
          <el-input placeholder="请输入许可证号" v-model="tmpLicense.licensekey" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="进出口代码：">
          <el-input placeholder="请输入进出口代码" v-model="tmpLicense.importandexportcode" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="企业地址：">
          <el-input placeholder="请输入企业地址" v-model="tmpLicense.conmpanyaddress" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="企业类型：">
          <el-input placeholder="请输入企业类型" v-model="tmpLicense.conmpanytype" class="width-230"></el-input>
        </el-form-item>
        <el-form-item label="法定代表人：">
          <el-input placeholder="请输入法定代表人" v-model="tmpLicense.legalrepresentative" class="width-230"></el-input>
        </el-form-item>
        <el-form-item label="主管部门：">
          <el-input placeholder="请输入主管部门" v-model="tmpLicense.competentdepartment" class="width-230"></el-input>
        </el-form-item>
        <el-form-item label="注册资金：">
          <el-input placeholder="请输入注册资金" v-model="tmpLicense.registeredcapital" class="width-230"></el-input>
        </el-form-item>
        <el-form-item label="经营范围：">
          <el-input type="textarea" :rows="3" v-model="tmpLicense.businessscope" class="width-230"></el-input>
        </el-form-item>
        <el-form-item label="进出口商品目录：">
          <el-input type="textarea" :rows="3" :disabled="true" v-model="tmpLicense.goodstypes" class="width-230"></el-input>
          <el-button @click="choosegoodstype">选择商品类型</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary" @click="saveTask" :disabled="saveTaskStatus">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import licenseAPI from './api/licenseAPI.js';
import './mock/license.js';
export default {
  data() {
    return {
      clientHeight: 0,
      selectedRows: [],
      licenseTable: [],
      total: 3,
      currentPage: 1,
      pageSize: 5,
      pageSizes: [5, 10, 15, 20],
      showDialog: false,
      tmpLicense: {
        id: '',
        licensekey: '',
        importandexportcode: '',
        companyname: '',
        companyid: '',
        goodstypeids: '',
        status: ''
      },
      addOrEdit: 1,//1为新建，2为编辑
      saveTaskStatus: false,
      statusOptions: [{
        value: '0',
        label: '待核查'
      }, {
        value: '1',
        label: '核查无误'
      }],
      search: { licensekey: '', importandexportcode: '', companyname: '' },
      temlicenseTable: [],//检索时数据的范围
    }
  },
  methods: {
    loadLicenseData() {
      this.dataloading = true;
      licenseAPI.getLicenseData(this.currentPage, this.pageSize).then(data => {
        this.licenseTable = data.data;
        //this.total = data.total;
        this.temlicenseTable = Object.assign([], this.licenseTable);
        this.dataloading = false;
      });
    },
    //选中行
    onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    //新建
    addTask() {
      this.addOrEdit = 1;
      this.showDialog = true;
      this.tmpLicense = {
        id: '',
        licensekey: '',
        importandexportcode: '',
        companyname: '',
        companyid: '',
        goodstypeids: '',
        status: ''
      };
      this.saveTaskStatus = false;

    },
    //保存
    saveTask() {
      this.saveTaskStatus = true;
      if (this.addOrEdit == 1) {
        licenseAPI.addLicense(this.tmpLicense).then(data => {
          if (data.status == 1) {
            if (this.licenseTable.length == 0) {
              this.tmpLicense.id = this.licenseTable.length + 1;
            } else {
              let temArr = Object.assign([], this.licenseTable);
              temArr.sort(function(a, b) {
                return b.id - a.id;
              });
              this.tmpLicense.id = temArr[0].id + 1;
            }
            this.licenseTable.push(this.tmpLicense);
            this.temlicenseTable = Object.assign([], this.licenseTable);
            this.$message.success(data.message);
          } else {
            this.$message.error(data.message);
          }
          this.saveTaskStatus = false;
          this.showDialog = false;
        });
      } else if (this.addOrEdit == 2) {
        licenseAPI.editLicense(this.tmpLicense.id, this.tmpLicense).then(data => {
          if (data.status == 1) {
            let index = this.licenseTable.findIndex(val => val.id == this.tmpLicense.id);
            this.licenseTable = [
              ...this.licenseTable.slice(0, index),
              Object.assign({}, this.tmpLicense),
              ...this.licenseTable.slice(index + 1)
            ];
            this.temlicenseTable = Object.assign([], this.licenseTable);
            this.$message.success(data.message);
          } else {
            this.$message.error(data.message);
          }
          this.saveTaskStatus = false;
          this.showDialog = false;
        });
      }
    },
    //格式化时间 格式化时间为yyyy-MM-dd hh:mm:ss
    formatDate(date, fmt) {
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
      }
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      }
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + ''
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length)
          )
        }
      }
      return fmt
    },
    //修改任务
    editTask() {
      this.addOrEdit = 2;
      this.showDialog = true;
      this.saveTaskStatus = false;
      this.tmpLicense = Object.assign({}, this.selectedRows[0]);
      if (this.tmpLicense.starttime) {
        this.tmpLicense.starttime = new Date(Date.parse(this.tmpLicense.starttime));
      }
      if (this.tmpLicense.endtime) {
        this.tmpLicense.endtime = new Date(Date.parse(this.tmpLicense.endtime));
      }
    },

    //删除任务
    deleteTasks() {
      let rowIds = [];
      this.selectedRows.forEach(function(row) {
        rowIds.push(row.id);
      });

      this.$confirm("确认删除所选的任务?", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action == 'confirm') {
            instance.confirmButtonLoading = true;
            return licenseAPI.deleteLicenses(rowIds).then(data => {
              if (data.status == 1) {
                this.licenseTable = this.licenseTable.filter(val => !rowIds.includes(val.id));
                this.temlicenseTable = Object.assign([], this.licenseTable);
                this.$notify({
                  title: '成功',
                  message: data.message,
                  type: 'success',
                  duration: 2000,
                });
              } else {
                this.$alert(data.message);
              }
              instance.confirmButtonLoading = false;
              done(data);
            });
          } else {
            done();
          }
        }
      }).catch(() => {
        this.$notify.info({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        });
      });
    },

    //每页数量变化
    sizeChangeHandler(val) {
      this.pageSize = val;
      this.loadLicenseData();
    },
    //页码变更
    currentChangeHandler(val) {
      this.currentPage = val;
      this.loadLicenseData();
    },
    //检索
    handleSearchBtn() {
      this.licenseTable = Object.assign([], this.temlicenseTable);
      let temProjectName = this.search.projectname;
      let temTaskName = this.search.taskname;
      if (temProjectName != '' || temTaskName != '') {
        this.dataloading = true;
        if (temProjectName != '') {
          this.licenseTable = this.licenseTable.filter(val => val.projectname.indexOf(temProjectName) != -1);
        }
        if (temTaskName != '') {
          this.licenseTable = this.licenseTable.filter(val => val.taskname.indexOf(temTaskName) != -1);
        }
        this.dataloading = false;
      }
    }

  },
  created() {
    this.clientHeight = document.documentElement.clientHeight - 230;
    let num = Math.floor(this.clientHeight / 40) - 1;
    this.pageSize = Math.floor(num / 5) * 5;
    this.pageSizes = [this.pageSize, this.pageSize * 2, this.pageSize * 4];
    this.loadLicenseData();
  }
}
</script>

<style scoped >
.mb-10 {
  margin-bottom: 10px;
}

.ml-10 {
  float: right;
}

.width-300 {
  width: 300px;
}

.width-230 {
  width: 230px;
}

.page-wrap {
  margin-top: 20px;
}

.select_op {
  width: 120px
}

.page-wrap .page {
  float: right;
}

.search-bar {
  padding-top: 10px;
  padding-bottom: 10px;
}


.demo-table-expand {
  font-size: 12px;
}

.demo-table-expand label {
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 45%;
}
</style>

