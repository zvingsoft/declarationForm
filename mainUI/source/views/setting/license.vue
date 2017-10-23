<template>
  <div>
    <el-tabs v-model="activeName" class="projPage">
      <!-- 进口 -->
      <el-tab-pane label='进口' name='inlicense'>
        <el-toolbar>
          <el-button class="z-toolbar-btn" :plain="true" @click="inAddClick">
            <i class="fa fa-plus"></i>添加</el-button>
          <el-button class="z-toolbar-btn" :plain="true" :disabled="inSelectedRows.length !== 1" @click="inEditClick">
            <i class="fa fa-edit"></i>编辑</el-button>
          <el-button class="z-toolbar-btn" :plain="true" :disabled="inSelectedRows.length < 1" @click="inDeleteClick">
            <i class="fa fa-trash-o"></i>删除</el-button>
        </el-toolbar>
        <div class="main-content-wrap">
          <div class="search-bar fr">
            许可证号:
            <el-input v-model="insearch.licenseKey" size="small" placeholder="请输入许可证号" style="width: 200px;"></el-input>
            进口商：
            <el-input v-model="insearch.companyName" size="small" placeholder="请输入进口商" style="width: 200px;"></el-input>
            <el-button size="small" type="primary" @click="loadInlicenseList"> 搜 索 </el-button>
          </div>
          <el-table ref="myTabelRef" :data="inLicenseData" tooltip-effect="dark" style="width: 100%" :height="clientHeight" @selection-change="inOnSelectionChange">
            <el-table-column type="selection" width="55" align="center"></el-table-column>
            <el-table-column prop="licenseKey" show-overflow-tooltip min-width="30%" label="许可证号"></el-table-column>
            <el-table-column prop="companyName" show-overflow-tooltip min-width="30%" label="进口商"></el-table-column>
            <el-table-column prop="sku" show-overflow-tooltip min-width="20%" label="商品编号"></el-table-column>
            <el-table-column prop="expirationDateOfLicense" show-overflow-tooltip min-width="20%" label="许可证截止日期"></el-table-column>
          </el-table>
          <div class="fr" style="margin-top:5px;">
            <el-pagination @size-change="myHandleSizeChange" @current-change="myHandleCurrentChange" :current-page="myCurrentPage" :page-sizes="myPageSizes" :page-size="myPageSize" :total="myTotal" layout="total, sizes, prev, pager, next">
            </el-pagination>
          </div>
        </div>
      </el-tab-pane>
      <!-- 出口 -->
      <el-tab-pane label='出口' name='outlicense'>
        <el-toolbar>
          <el-button class="z-toolbar-btn" :plain="true" @click="outAddClick">
            <i class="fa fa-plus"></i>添加</el-button>
          <el-button class="z-toolbar-btn" :plain="true" :disabled="outSelectedRows.length !== 1" @click="outEditClick">
            <i class="fa fa-edit"></i>编辑</el-button>
          <el-button class="z-toolbar-btn" :plain="true" :disabled="outSelectedRows.length < 1" @click="outDeleteClick">
            <i class="fa fa-trash-o"></i>删除</el-button>
        </el-toolbar>
        <div class="main-content-wrap">
          <div class="search-bar fr">
            许可证号:
            <el-input v-model="outsearch.licenseKey" size="small" placeholder="请输入许可证号" style="width: 200px;"></el-input>
            出口商：
            <el-input v-model="outsearch.companyName" size="small" placeholder="请输入出口商" style="width: 200px;"></el-input>
            <el-button size="small" type="primary" @click="loadOutlicenseList"> 搜 索 </el-button>
          </div>
          <el-table ref="apTabelRef" :data="outLicenseData" tooltip-effect="dark" style="width: 100%" :height="clientHeight" @selection-change="outOnSelectionChange">
            <el-table-column type="selection" width="55" align="center"></el-table-column>
            <el-table-column prop="licenseKey" show-overflow-tooltip min-width="30%" label="许可证号"></el-table-column>
            <el-table-column prop="companyName" show-overflow-tooltip min-width="30%" label="出口商"></el-table-column>
            <el-table-column prop="sku" show-overflow-tooltip min-width="20%" label="商品编号"></el-table-column>
            <el-table-column prop="expirationDateOfLicense" show-overflow-tooltip min-width="20%" label="许可证截止日期"></el-table-column>
          </el-table>
          <div class="fr" style="margin-top:5px;">
            <el-pagination @size-change="apHandleSizeChange" @current-change="apHandleCurrentChange" :current-page="apCurrentPage" :page-sizes="apPageSizes" :page-size="apPageSize" :total="apTotal" layout="total, sizes, prev, pager, next">
            </el-pagination>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 添加、编辑进口许可证 -->
    <el-dialog :title="editMode===1?'添加进口许可证':'编辑进口许可证'" :visible.sync="inLicenseShow" @open="beforeDialogOpen">
      <el-form :model="inLicenseModel" :rules="inLicenseRules" inline ref="inLicenseRef" label-width="140px" style="overflow-y:hidden;overflow-x:hidden;">

        <el-form-item label="进口商" v-if="editMode===1">
          <el-select v-model="inLicenseModel.companyName" clearable placeholder="请选择" @change="onCompanyChange" :disabled="editMode===1?ture:false" style="width:320px">
            <el-option v-for="item in companys" :key="item.id" :label="item.name" :value="item.name">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="进口商" v-if="editMode===2">
          <el-input type="text" v-model="inLicenseModel.companyName" auto-complete="off" class="input-320" disabled></el-input>
          </el-select>
        </el-form-item>
        <el-form-item label="许可证号" prop="licenseKey">
          <el-input type="text" v-model="inLicenseModel.licenseKey" auto-complete="off" class="input-320"></el-input>
        </el-form-item>
        <el-form-item label="商品编号" prop="sku">
          <el-select class="e-input" filterable v-model="inLicenseModel.sku" placeholder="请选择" style="width:320px">
            <el-option v-for="item in SKUData" :key="item.sn" :label="item.sn" :value="item.sn">
              <span style="float: left">{{ item.sn }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.name }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="许可证截止日期" prop="expirationDateOfLicense">
          <el-date-picker v-model="inLicenseModel.expirationDateOfLicense" type="date" @change="inDateChangeClick" placeholder="选择日期" class="input-320"></el-date-picker>
        </el-form-item>
        <el-form-item label="备注" prop="memo">
          <el-input type="text" v-model="inLicenseModel.memo" auto-complete="off" style="width:320px"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer">
        <el-button @click="inLicenseShow=false">取消</el-button>
        <el-button type="primary" @click="inOkHandler" :loading="confirmLoading">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加、编辑出口许可证 -->
    <el-dialog :title="outeditMode===1?'添加出口许可证':'编辑出口许可证'" :visible.sync="outLicenseShow" @open="beforeDialogOpen">
      <el-form :model="outLicenseModel" :rules="outLicenseRules" inline ref="outLicenseRef" label-width="140px" style="overflow-y:hidden;overflow-x:hidden;">
        <el-form-item label="出口商" v-if="outeditMode===1">
          <el-select v-model="outLicenseModel.companyName" clearable placeholder="请选择" @change="onCompanyChange" style="width:320px">
            <el-option v-for="item in companys" :key="item.id" :label="item.name" :value="item.name">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="进口商" v-if="outeditMode===2">
          <el-input type="text" v-model="outLicenseModel.companyName" auto-complete="off" class="input-320" disabled></el-input>
          </el-select>
        </el-form-item>
        <el-form-item label="许可证号" prop="licenseKey">
          <el-input type="text" v-model="outLicenseModel.licenseKey" auto-complete="off" class="input-320"></el-input>
        </el-form-item>
        <el-form-item label="商品编号" prop="sku">
          <el-select class="e-input" filterable v-model="outLicenseModel.sku" placeholder="请选择" style="width:320px">
            <el-option v-for="item in SKUData" :key="item.sn" :label="item.sn" :value="item.sn">
              <span style="float: left">{{ item.sn }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.name }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="许可证截止日期" prop="expirationDateOfLicense">
          <el-date-picker v-model="outLicenseModel.expirationDateOfLicense" @change="outDateChangeClick" type="date" placeholder="选择日期" class="input-320"></el-date-picker>
        </el-form-item>
        <el-form-item label="备注" prop="memo">
          <el-input type="text" v-model="outLicenseModel.memo" auto-complete="off" style="width:320px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="outLicenseShow=false">取消</el-button>
        <el-button type="primary" @click="outOkHandler" :loading="confirmLoading">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import './mock/license.js';
import licenseAPI from './api/licenseAPI.js';
import licensegoodsTable from './components/licensegoodsTable.vue';
import skuAPI from '../form/api/skuAPI.js';
import companyAPI from './api/companyAPI.js';
export default {
  data() {
    return {
      clientHeight: 0,
      clientWidth: 0,
      /*我的申请表格*/
      inLicenseData: [],
      /*待我审批表格*/
      outLicenseData: [],
      /*我的申请数据模型*/
      inLicenseModel: {
        name: '',
        manager: '',
        description: '',
        starttime: '',
        endtime: '',
      },
      outLicenseModel: {
        name: '',
        manager: '',
        description: '',
        starttime: '',
        endtime: '',
      },
      /*进口搜索*/
      insearch: {
        licenseKey: '',
        importAndExportcode: '',
        companyName: '',
        type: 'in',
      },
      /*出口搜索*/
      outsearch: {
        licenseKey: '',
        importAndExportcode: '',
        companyName: '',
        type: 'out',
      },
      /*激活的tab页 */
      activeName: 'inlicense',
      /*我的申请表单校验规则 */
      inLicenseRules: {
        name: [{ required: true, message: '请输入项目名称', trigger: 'blur' }],
        manager: [{ required: true, message: '请输入项目负责人', trigger: 'blur' }],
      },
      /*编辑添加框是否可见 */
      inLicenseShow: false,
      /*编辑添加框是否可见 */
      outLicenseShow: false,
      /*文件列表查看、编辑框是否可见 */
      myFileDialogIsShow: false,
      /*文件上传框是否可见 */
      fileUploadDialogIsShow: false,
      /*文件预览框是否显示 */
      fileViewDialogIsShow: false,
      /*审批进度 */
      failDialogIsShow: false,
      passDialogIsShow: false,
      loadDialogIsShow: false,
      /*进口许可证编辑模式：1添加，2编辑*/
      editMode: 1,
      /*出口许可证编辑模式：1添加，2编辑*/
      outeditMode: 1,
      /*文件类型：1申报文件，2审批文件 */
      fileType: 1,
      /*表单提交等待动画*/
      confirmLoading: false,
      /*我的申请表格选中行*/
      inSelectedRows: [],
      /*待我审核表格选中行*/
      outSelectedRows: [],
      /*文件表格选中行 */
      fileSelectedRows: [],
      /*开始日期初始化 */
      startdatepicker: '',
      /*结束日期初始化 */
      enddatepicker: '',
      /*我的申请当前页 */
      myCurrentPage: 1,
      /*我的申请表格可选页面大小*/
      myPageSizes: [5, 10, 15, 20],
      /*我的申请表格当前页面大小 */
      myPageSize: 10,
      /*我的申请表格数据总条数 */
      myTotal: 16,
      /*待我审核当前页 */
      apCurrentPage: 1,
      /*待我审核表格可选页面大小*/
      apPageSizes: [5, 10, 15, 20],
      /*待我审核表格当前页面大小 */
      apPageSize: 10,
      /*待我审核表格数据总条数 */
      apTotal: 21,
      /*文件列表数据 */
      fileTableData: [],
      /*文件上传初始化 */
      fileList: [],
      /*进度条百分比 */
      percentage: 0,
      // i: 0,
      SKUData: [],
      companys: {},

    };
  },
  methods: {
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
    outDateChangeClick() {
      if (this.outLicenseModel.expirationDateOfLicense) {
        this.outLicenseModel.expirationDateOfLicense = this.formatDate(new Date(this.outLicenseModel.expirationDateOfLicense), 'yyyy-MM-dd');
      } else {
        this.outLicenseModel.expirationDateOfLicense = '';
      }
    },
    inDateChangeClick() {
      if (this.inLicenseModel.expirationDateOfLicense) {
        this.inLicenseModel.expirationDateOfLicense = this.formatDate(new Date(this.inLicenseModel.expirationDateOfLicense), 'yyyy-MM-dd');
      } else {
        this.inLicenseModel.expirationDateOfLicense = '';
      }
    },
    //加载企业列表共选择
    loadCompany() {
      if (!this.companys.length > 0) {
        companyAPI.getCompany().then(data => {
          this.companys = data.data;
        })
      }
    },
    //加载SKU
    beforeDialogOpen() {
      this.loadCompany();
      if (!this.SKUData.length > 0) {
        skuAPI
          .getSKU()
          .then(data => {
            this.SKUData = data;
          });
      }
    },
    /*添加进口许可证*/
    inAddClick() {
      this.editMode = 1;
      this.inLicenseModel = {
        name: '',
        manager: '',
        description: '',
        starttime: '',
        endtime: '',
        type: 'in',
      };
      this.inLicenseShow = true;
      this.selectedLicensegoodsRow = [];
    },
    /*编辑进口许可证*/
    inEditClick() {
      this.editMode = 2;
      this.inLicenseModel = Object.assign(
        {},
        this.inLicenseModel,
        this.inSelectedRows[0]
      );
      this.inLicenseShow = true;
      this.selectedLicensegoodsRow = [];
    },
    /*删除进口许可证*/
    inDeleteClick() {
      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action !== 'confirm') {
            done();
            return;
          }
          this.confirmLoading = true;
          let ids = [];
          this.inSelectedRows.forEach(function(row) {
            ids.push(row.id);
          });
          let idstr = ids.join();
          return licenseAPI.deleteLicense(idstr)
            .then(data => {
              this.confirmLoading = false;
              done(data);
              this.inLicenseData = this.inLicenseData.filter(
                val => !ids.includes(val.id)
              );
            });
        },
      }).then(data => {
        this.inSelectedRows = [];
        this.loadInlicenseList();
        this.$notify({
          title: '提示',
          message: '删除成功！',
          type: 'success',
          duration: 2000,
        });
      })
    },

    /*添加出口许可证*/
    outAddClick() {
      this.outeditMode = 1;
      this.outLicenseModel = {
        name: '',
        manager: '',
        description: '',
        starttime: '',
        endtime: '',
        type: 'out',
      };
      this.outLicenseShow = true;
      this.selectedLicensegoodsRow = [];
    },
    /*编辑出口许可证*/
    outEditClick() {
      this.outeditMode = 2;
      this.outLicenseModel = Object.assign(
        {},
        this.outLicenseModel,
        this.outSelectedRows[0]
      );
      this.outLicenseShow = true;
      this.selectedLicensegoodsRow = [];
    },
    /*删除出口许可证*/
    outDeleteClick() {
      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action !== 'confirm') {
            done();
            return;
          }
          this.confirmLoading = true;
          let ids = [];
          this.outSelectedRows.forEach(function(row) {
            ids.push(row.id);
          });
          let idstr = ids.join();
          return licenseAPI.deleteLicense(idstr)
            .then(data => {
              this.confirmLoading = false;
              done(data);
              this.outLicenseData = this.outLicenseData.filter(
                val => !ids.includes(val.id)
              );
            });
        },
      }).then(data => {
        this.outSelectedRows = [];
        this.loadOutlicenseList();
        this.$notify({
          title: '提示',
          message: '删除成功！',
          type: 'success',
          duration: 2000,
        });
      })
    },

    /*进口表格选中行改变*/
    inOnSelectionChange(selection) {
      this.inSelectedRows = selection;
    },
    /*保存进口许可证 */
    inOkHandler() {
      console.log(this.inLicenseModel);
      let validateForm = () => {
        return new Promise((resolve, reject) => {
          this.$refs['inLicenseRef'].validate(valid => {
            if (valid) {
              return resolve(true);
            }
            return reject(false);
          });
        });
      };
      let addForm = (res) => {
        licenseAPI.addLicense(this.inLicenseModel).then(data => {
          if (data.status == 200) {
            this.$notify({
              title: '成功',
              message: '保存成功',
              type: 'success',
              duration: 2000,
            });
          } else {
            this.$notify({
              title: '失败',
              message: data.message,
              type: 'error',
              duration: 2000
            });
          }
        });
      };

      let editForm = (res) => {
        let index = this.inLicenseData.findIndex(
          val => val.id === this.inLicenseModel.id
        );
        licenseAPI.updateLicense(this.inLicenseModel).then(data => {
          if (data.status == 200) {
            this.$notify({
              title: '成功',
              message: '修改成功',
              type: 'success',
              duration: 2000,
            });
          } else {
            this.$notify({
              title: '失败',
              message: data.message,
              type: 'error',
              duration: 2000
            });
          }
        });
      };

      validateForm().then(() => {
        this.confirmLoading = true;
        if (this.editMode === 1) {
          return addForm();
        }
        if (this.editMode === 2) {
          return editForm();
        }
      }).then(res => {
        this.loadInlicenseList();
        this.confirmLoading = false;
        this.inLicenseShow = false;
      });
    },

    /*保存出口许可证 */
    outOkHandler() {
      let validateForm = () => {
        return new Promise((resolve, reject) => {
          this.$refs['outLicenseRef'].validate(valid => {
            if (valid) {
              return resolve(true);
            }
            return reject(false);
          });
        });
      };
      let outaddForm = () => {
        licenseAPI.addLicense(this.outLicenseModel).then(data => {
          if (data.status == 200) {
            this.$notify({
              title: '成功',
              message: '保存成功',
              type: 'success',
              duration: 2000,
            });
          } else {
            this.$notify({
              title: '失败',
              message: data.message,
              type: 'error',
              duration: 2000
            });
          }
        });
      };

      let outeditForm = () => {
        let index = this.outLicenseData.findIndex(
          val => val.id === this.outLicenseModel.id
        );
        licenseAPI.updateLicense(this.outLicenseModel).then(data => {
          if (data.status == 200) {
            this.$notify({
              title: '成功',
              message: '修改成功',
              type: 'success',
              duration: 2000,
            });
          } else {
            this.$notify({
              title: '失败',
              message: data.message,
              type: 'error',
              duration: 2000
            });
          }
        });
      };

      validateForm()
        .then(() => {
          this.confirmLoading = true;
          if (this.outeditMode === 1) {
            return outaddForm();
          }
          if (this.outeditMode === 2) {
            return outeditForm();
          }
        })
        .then(res => {
          this.confirmLoading = false;
          this.outLicenseShow = false;
          this.loadOutlicenseList();
        });
    },

    /*出口表格选中行改变*/
    outOnSelectionChange(selection) {
      this.outSelectedRows = selection;
    },

    /*加载进口许可证数据 */
    loadInlicenseList() {
      let pagedata = {
        pageindex: this.myCurrentPage,
        pagesize: this.myPageSize,
      };
      let search = Object.assign({}, this.insearch, pagedata);
      licenseAPI.getInlicenseList(search).then(data => {
        this.inLicenseData = data;
        this.myTotal = data.length;
      });
    },
    /*加载出口许可证数据 */
    loadOutlicenseList() {
      let pagedata = {
        pageindex: this.myCurrentPage,
        pagesize: this.myPageSize,
      };
      let search = Object.assign({}, this.outsearch, pagedata);
      licenseAPI.getOutlicenseList(search).then(data => {
        this.outLicenseData = data;
        this.apTotal = data.length;
      });
    },

    /*改变我的申请表格大小 */
    myHandleSizeChange(val) {
      this.myPageSize = val;
      this.loadInlicenseList();
    },
    /*改变我的申请表格当前页 */
    myHandleCurrentChange(val) {
      this.myCurrentPage = val;
      this.loadInlicenseList();
    },
    /*改变待我审核表格大小 */
    apHandleSizeChange(val) {
      this.apPageSize = val;
      this.loadOutlicenseList();
    },
    /*改变待我审核表格当前页 */
    apHandleCurrentChange(val) {
      this.apCurrentPage = val;
      this.loadOutlicenseList();
    },
  },
  created() {
    this.clientHeight = document.documentElement.clientHeight - 270;
    let num = Math.floor(this.clientHeight / 40) - 1;
    this.apPageSize = Math.floor(num / 5) * 5;
    this.apPageSizes = [
      this.apPageSize,
      this.apPageSize * 2,
      this.apPageSize * 4,
    ];
    this.myPageSize = Math.floor(num / 5) * 5;
    this.myPageSizes = [
      this.myPageSize,
      this.myPageSize * 2,
      this.myPageSize * 4,
    ];
    this.loadInlicenseList();
    this.loadOutlicenseList();
  },
  components: {
    'licensegoods-table': licensegoodsTable,
  },
};
</script>
<style>
.projPage .el-tabs__header {
  margin-bottom: 0;
}

input[type='file'].el-upload__input {
  display: none !important;
  margin-bottom: -20px;
}
</style>

<style scoped>
.main-content-wrap {
  padding: 10px;
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
  width: 47%;
}

.e-form .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 45%;
}

.filelist-toolbar {
  margin-left: 1px;
}

.fileView-content {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
  line-height: 20px;
}

.input-320 {
  width: 320px;
}

.form-title {
  font-size: 24px;
  font-weight: bold;
  margin-left: 6%;
  padding: 10px 0 5px 0;
}

.form-panel {
  width: 90%;
  margin-left: 5%;
  padding: 20px 0 0 0;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}

.goods-panel {
  width: 90%;
  margin-left: 5%;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}
</style>
