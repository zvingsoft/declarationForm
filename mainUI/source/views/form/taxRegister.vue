<template slot-scope="scope">
  <div :style="{width:clientWidth+'px'}">
    <el-toolbar>
      <el-button class="z-toolbar-btn" :plain="true" @click="addClick">
        <i class="fa fa-plus"></i> 新建</el-button>
      <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0  || registered" @click="editClick">
        <i class="fa fa-edit"></i> 编辑</el-button>
      <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0" @click="deleteClick">
        <i class="fa fa-remove"></i> 删除</el-button>
      <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0 || registered" @click="registerClick('')">
        <i class="fa fa-check"></i> 确认缴税</el-button>
    </el-toolbar>
    <div class="main-content-wrap">
      <div class="search-bar">
        排序：
        <el-select size="small" v-model="sort" class="search-select">
          <el-option v-for="item in sortOptions" :key="item.key" :label="item.value" :value="item.key">
          </el-option>
        </el-select>
        缴税状态：
        <el-select size="small" v-model="registerStatus" class="search-select">
          <el-option v-for="item in registerStatusOptions" :key="item.key" :label="item.value" :value="item.key">
          </el-option>
        </el-select>
        检索字段：
        <el-select size="small" v-model="retrieval" class="search-select">
          <el-option v-for="item in retrievalOptions" :key="item.key" :label="item.value" :value="item.key">
          </el-option>
        </el-select>
        <el-input style="width:200px" size="small" v-model="searchWord"></el-input>
        <el-button size="small" type="primary" @click="getTaxRegisterData" style="width:60px;">搜索</el-button>
      </div>
      <el-table :data="taxRegisterData" v-loading="dataLoading" tooltip-effect="dark" style="width:100%" :height="clientHeight" highlight-current-row @selection-change="onSelectionChange" @row-dblclick="rowDBClick">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="taxNumber" show-overflow-tooltip min-width="15%" label="缴税单号"></el-table-column>
        <el-table-column min-width="12%" label="报关单详情">
          <template slot-scope="scope">
            <el-button type="text">
              <span style="color:green;" @click="showDeclarationist(scope.row.id,scope.row.declarationIds)">查看报关单</span>
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="taxAmount" show-overflow-tooltip min-width="15%" label="缴税金额"></el-table-column>
        <!-- <el-table-column prop="taxUser" show-overflow-tooltip min-width="12%" label="缴税人"></el-table-column> -->
        <el-table-column prop="registerDate" show-overflow-tooltip min-width="15%" label="缴税时间"></el-table-column>
        <el-table-column prop="registerStatusName" show-overflow-tooltip min-width="12%" label="缴税状态"></el-table-column>
        <el-table-column min-width="15%" label="操作">
          <template slot-scope="scope">
            <el-button type="text" :disabled="scope.row.registerStatus == 'Y'" @click="registerClick(scope.row.id)">
              <span style="color:green;">确认缴税</span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page-wrap">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next" :total="total">
        </el-pagination>
      </div>
    </div>
    <el-dialog :title="editMode==1? '编辑缴税单信息': '添加缴税单'" :visible.sync="registerDialogModal" :close-on-click-modal="false">
      <el-form label-position="right" ref="taxRegisterForm" :model="tmpTaxRegister" label-width="150px">
        <el-form-item label="缴税单号：" prop="taxNumber" :rules="[{ required: true, message: '缴税单号不能为空', trigger: 'change' }]">
          <el-input class="e-input" v-model="tmpTaxRegister.taxNumber"></el-input>
        </el-form-item>
        <!-- <el-form-item label="缴税人：" prop="taxUser" :rules="[{ required: true, message: '缴税人不能为空', trigger: 'change' }]">
          <el-input class="e-input" v-model="tmpTaxRegister.taxUser"></el-input>
        </el-form-item> -->
        <el-form-item label="缴税金额：" prop="taxAmount" :rules="[{ type: 'number', message: '缴税金额必须为数字值', trigger: 'change'}]">
          <el-input class="e-input" v-model.number="tmpTaxRegister.taxAmount"></el-input>
        </el-form-item>
        <el-form-item label="缴税时间：">
            <el-date-picker v-model="tmpTaxRegister.registerDate" @change="registerDateChange" type="date" class="e-input" placeholder="选择缴税日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="关联报关单：">
          <!-- <div style="border:1px solid #f5f5f5">
          <declaration-list @callback="listCallback" :id="tmpTaxRegister.id"></declaration-list>
          </div> -->
          <el-select class="e-input" v-model="tmpTaxRegister.declarationIds" filterable multiple placeholder="请选择">
            <el-option v-for="item in declarationOptions"  :key="item.id" :label="item.customsNumber" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="registerDialogModal = false">取 消</el-button>
        <el-button type="primary" @click="registerDialogConfirm">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="报关单列表详情" :visible.sync="declarationListDialogModal">
      <declaration-list :onlyView="true" :declarationIds="declarationIds"></declaration-list>
    </el-dialog>

  </div>
</template>

<script>
import taxRegisterAPI from './api/taxRegisterAPI';
import declarationAPI from './api/declarationAPI.js';
import packinglistAPI from './api/packinglistAPI.js';
import auditingAPI from './api/auditingAPI.js';
//import './mock/declaration.js';
import declarationList from './components/declarationList.vue';

export default {
  data() {
    return {
      declarationIds: [],
      declarationOptions: [],
      registered: false,
      declarationList: [],
      declarationListDialogModal: false,
      registerDialogModal: false,
      statu: false,
      clientWidth: 0,
      clientHeight: 0,
      searchWord: '',
      selectedRows: [],
      taxRegisterData: [],
      currentPage: 1,
      pageSizes: [10, 20, 50],
      pageSize: 10,
      total: 0,
      editMode: 1,
      tmpTaxRegister: {},
      dataLoading: false,
      sort: '',
      sortOptions: [
        {
          key: '',
          value: '请选择排序',
        },
        {
          key: 'registerNumber',
          value: '缴税单号',
        },
        {
          key: 'registerDate',
          value: '缴税日期',
        },
      ],
      registerStatus: '',
      registerStatusOptions: [
        {
          key: '',
          value: '请选择缴税状态',
        },
        {
          key: 'Y',
          value: '已缴税',
        },
        {
          key: 'N',
          value: '未缴税',
        },
      ],
      retrieval: '',
      retrievalOptions: [
        {
          key: '',
          value: '请选择检索字段',
        },
        {
          key: 'taxNumber',
          value: '缴税单号',
        },
        {
          key: 'taxUser',
          value: '缴税人',
        },
        {
          key: 'registerDate',
          value: '缴税时间',
        },
      ],
    };
  },
  methods: {
    showDeclarationist(id, ids) {
      this.id = id;
      this.declarationIds = ids;
      this.declarationListDialogModal = true;
    },
    listCallback(selection) {
      Vue.set(this.tmpTaxRegister, 'declarationList', selection);
    },
    addClick() {
      this.editMode = 0;
      this.tmpTaxRegister = {
        id: Math.random() * 99999 + 1,
        declarationIds: [],
      };
      taxRegisterAPI
        .getUnregisterDeclaration({})
        .then(data => {
          console.log(data);
          this.declarationOptions = data;
        })
        .then(() => {
          this.registerDialogModal = true;
        });
    },
    editClick() {
      if (this.selectedRows.length == 0) {
        this.$message('请选择要编辑的缴税单', 'info');
        return;
      }
      taxRegisterAPI
        .getUnregisterDeclaration({})
        .then(data => {
          console.log(data);
          this.declarationOptions = data;
        })
        .then(() => {
          this.tmpTaxRegister = Object.assign({}, this.selectedRows[0]);
          this.editMode = 1;
          this.registerDialogModal = true;
        });
    },
    registerDialogConfirm() {
      this.$refs['taxRegisterForm'].validate(valid => {
        if (valid) {
          if (this.editMode == 0) {
            taxRegisterAPI.addTaxRegister(this.tmpTaxRegister).then(res => {
              if (res.status == 200) {
                this.$notify({
                  title: '成功',
                  message: res.data,
                  type: 'success',
                  duration: 2000,
                });
                this.registerDialogModal = false;
                this.getTaxRegisterData();
              }
            });
          }
          if (this.editMode == 1) {
            taxRegisterAPI.updateTaxRegister(this.tmpTaxRegister).then(res => {
              if (res.status == 200) {
                this.$notify({
                  title: '成功',
                  message: res.data,
                  type: 'success',
                  duration: 2000,
                });
                this.registerDialogModal = false;
                this.getTaxRegisterData();
              }
            });
          }
        } else {
          this.$notify({
            title: '操作失败',
            message: '请正确填写表单项',
            type: 'error',
            duration: 2000,
          });
          return false;
        }
      });
    },
    registerClick(id) {
      let rowIds = [];
      if (id != '') {
        rowIds = [id];
      } else {
        this.selectedRows.forEach(function(row) {
          rowIds.push(row.id);
        });
      }
      taxRegisterAPI.registerConfrim(rowIds).then(res => {
        this.$notify({
          title: '提示',
          message: res.data,
          type: 'success',
          duration: 2000,
        });
        this.getTaxRegisterData();
      });
    },
    deleteClick() {
      if (this.selectedRows.length == 0) {
        this.$message('请选择要编辑的缴税单', 'info');
        return;
      }
      let rowIds = [];
      this.selectedRows.forEach(function(row) {
        rowIds.push(row.id);
      });
      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          return taxRegisterAPI.deleteTaxRegister(rowIds).then(res => {
            if (res.status == 200) {
              this.$notify({
                title: '成功',
                message: res.data,
                type: 'success',
                duration: 2000,
              });
              this.getTaxRegisterData();
            }
          });
        })
        .catch(() => {
          this.$notify.error({
            title: '取消',
            message: '操作取消！',
            duration: 2000,
          });
        });
    },
    registerDateChange(val) {
      this.tmpTaxRegister.registerDate = val;
    },
    rowDBClick(row) {
      this.tmpTaxRegister = Object.assign({}, row);
      this.registerDialogModal = true;
    },
    getTaxRegisterData() {
      this.dataLoading = true;
      let obj = {
        retrieval: this.retrieval,
        searchWord: this.searchWord,
        pageSize: this.pageSize,
        pageIndex: this.currentPage,
      };
      taxRegisterAPI.getTaxRegisterList(obj).then(data => {
        console.log(data);
        this.taxRegisterData = [];
        if (data.length > 0) {
          this.total = data[0].total;
        }
        data.forEach(o => {
          if (this.registerStatus != '') {
            if (this.registerStatus == o.registerStatus) {
              if (this.retrieval == '' || this.searchWord == '') {
                this.taxRegisterData.push(o);
              } else if (o[this.retrieval].indexOf(this.searchWord) >= 0) {
                this.taxRegisterData.push(o);
              }
            }
          } else {
            if (this.retrieval == '' || this.searchWord == '') {
              this.taxRegisterData.push(o);
            } else if (o[this.retrieval].indexOf(this.searchWord) >= 0) {
              this.taxRegisterData.push(o);
            }
          }
        });
        this.dataLoading = false;
      });
    },
    onSelectionChange(selection) {
      this.selectedRows = selection;
      console.log(selection);
      this.registered = false;
      selection.forEach(o => {
        if (o.registerStatus == 'Y') {
          this.registered = true;
        }
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getTaxRegisterData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getTaxRegisterData();
    },
  },
  created() {
    this.clientWidth = document.documentElement.clientWidth - 200;
    this.clientHeight = document.documentElement.clientHeight - 200;
    this.getTaxRegisterData();
  },
  components: {
    'declaration-list': declarationList,
  },
};
</script>

<style scoped>
.main-content-wrap {
  padding: 10px;
}

.search-bar {
  width: 100%;
  text-align: right;
  padding-bottom: 10px;
}

.page-wrap {
  width: 100%;
  text-align: right;
  position: relative;
  top: 5px;
  padding-right: 10px;
}

.e-input {
  width: 240px;
}

.search-select {
  width: 140px;
}
</style>
