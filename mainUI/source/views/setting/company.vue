<template>
  <div>
    <el-toolbar>
      <el-button type="primary" class="z-toolbar-btn" :plain="true" @click="addClick">
        <i class="fa fa-plus" aria-hidden="true"></i> 新建</el-button>
      <el-button type="primary" class="z-toolbar-btn" :plain="true" @click="editClick" :disabled="selectedRows.length !== 1">
        <i class="fa fa-edit" aria-hidden="true"></i> 编辑</el-button>
      <el-button type="primary" class="z-toolbar-btn" :plain="true" @click="deleteClick" :disabled="selectedRows.length === 0">
        <i class="fa fa-minus" aria-hidden="true"></i> 删除</el-button>
      <!-- <el-button type="primary" class="z-toolbar-btn" :plain="true" @click="setConttonQuotaClick" :disabled="selectedRows.length !== 1">
        <i class="fa fa-cog" aria-hidden="true"></i> 设置棉花配额</el-button> -->
    </el-toolbar>

    <div class="search-bar fr">
      <span>名称</span>&nbsp;
      <el-input v-model="name" size="small" placeholder="请输入企业名称" style="width:200px"></el-input>
      <el-button type="primary" @click="list" size="small">搜索</el-button>
    </div>

    <div class="main-content-wrap">
      <el-table ref="companyTable" :data="companys" style="width: 100%" v-loading="dataLoading" @selection-change="onSelectionChange"
        @row-click="onCompanyTableRowClick">
        <el-table-column type="selection" width="50">
        </el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="company-table-expand">
              <el-form-item label="名称">
                <el-button type="text" @click="viewCompanyClick( props.row.id)">{{ props.row.name }}</el-button>
              </el-form-item>
              <el-form-item label="银行信用评级">
                <span>{{ props.row.bankCreditRating }}</span>
              </el-form-item>
              <el-form-item label="地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="电话">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="传真">
                <span>{{ props.row.fax }}</span>
              </el-form-item>
              <el-form-item label="邮政编码">
                <span>{{ props.row.postCode }}</span>
              </el-form-item>
              <!-- <el-form-item label="棉花分配量" v-if="props.row.allocation>0">
                <span>{{ props.row.allocation }}</span>（吨）
              </el-form-item>
              <el-form-item label="棉花已进口" v-if="props.row.allocation>0">
                <span>{{ props.row.used }}</span>（吨）
              </el-form-item> -->
              <el-form-item label="添加时间">
                <span>{{ new Date(props.row.addTime).toLocaleString() }}</span>
              </el-form-item>
              <el-form-item label="添加人">
                <span>{{ props.row.addUser }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="名称">
          <template slot-scope="props">
            <el-button type="text" @click="viewCompanyClick( props.row.id)">{{ props.row.name }}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="银行信用评级" prop="bankCreditRating">
        </el-table-column>
        <el-table-column label="地址" prop="address" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="电话" prop="phone">
        </el-table-column>
        <el-table-column label="传真" prop="fax">
        </el-table-column>
        <el-table-column label="邮政编码" prop="postCode">
        </el-table-column>
        <el-table-column label="添加时间">
          <template slot-scope="props">{{ new Date(props.row.addTime).toLocaleString() }}</template>
        </el-table-column>
      </el-table>

      <!--分页-->
      <div class="page-wrap">
        <el-pagination class="page" @size-change="sizeChangeHandler" @current-change="list" :current-page.sync="currentPage" :page-sizes="pageSizes"
          :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>

    </div>

    <!-- 新建,编辑对话框 -->
    <el-dialog :title="addOperate?'新建':'编辑'" :visible.sync="showDialog">
      <el-form label-width="160px" :model="tmpCompany">
        <el-form-item label="名称：">
          <el-input placeholder="请输入企业名称" v-model="tmpCompany.name" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="银行信用评级：">
          <el-input placeholder="请输入银行信用评级" v-model="tmpCompany.bankCreditRating" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="地址：">
          <el-input placeholder="请输入地址：" v-model="tmpCompany.address" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="电话：">
          <el-input placeholder="请输入电话" v-model="tmpCompany.phone" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="传真：">
          <el-input placeholder="请输入传真" v-model="tmpCompany.fax" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="邮政编码：">
          <el-input placeholder="请输入邮政编码" v-model="tmpCompany.postCode" class="width-300"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary" @click="save" :disabled="saveStatus">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 设置棉花配额对话框 -->
    <!-- <el-dialog size="tiny" :title="设置棉花配额" :visible.sync="showConttonQuotaDialog">
          <el-form label-width="160px" :model="tmpCompany">
            <el-form-item label="企业名称：">
              {{tmpCompany.name}}
            </el-form-item>
            <el-form-item label="棉花分配量：">
              <el-input-number :min="0" placeholder="请输入棉花分配量" v-model="tmpCompany.quota" class="width-300"></el-input-number>（单位：吨）
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="showConttonQuotaDialog = false">取 消</el-button>
            <el-button type="primary" @click="saveConttonQuota" :disabled="saveConttonQuotaStatus">确 定</el-button>
          </div>
        </el-dialog> -->

    <!-- 企业信息对话框 -->
    <company-detail :id="id" :show.sync="showCompanyDialog"></company-detail>
  </div>
</template>

<script>
  // require('../../utils/company.js')
  import companyAPI from './api/companyAPI.js';
  import companyDetail from './components/companyDetail.vue';

  export default {
    data() {
      return {
        dataLoading: true,
        companys: [],
        name: '',
        id: '',
        tmpCompany: {},
        addOperate: true,
        saveStatus: false,
        showDialog: false,
        showCompanyDialog: false,
        showConttonQuotaDialog: false,
        saveConttonQuotaStatus: false,
        selectedRows: [],
        total: 0,
        pageSize: 15,
        currentPage: 1,
        pageSizes: [15, 20, 30, 40, 50]
      }
    },
    methods: {
      //设置棉花配额
      setConttonQuotaClick() {
        this.showConttonQuotaDialog = true;
        this.tmpCompany = Object.assign({}, this.selectedRows[0]);
        this.saveConttonQuotaStatus = false;
      },
      //保存棉花配额
      saveConttonQuota() {
        this.saveConttonQuotaStatus = true;
        companyAPI.setConttonQuota(this.tmpCompany).then(data => {
          if (data.status == 1) {
            this.list();
            this.$message.success(data.data);
          } else {
            this.$message.error(data.data);
          }
          this.saveConttonQuotaStatus = false;
          this.showConttonQuotaDialog = false;
        });
      },
      //单击一行选中当前行、单击多选框增加选中当前行
      onCompanyTableRowClick(row, event, column) {
        if (column.type != "selection") {
          this.$refs.companyTable.clearSelection();
        }
        this.$refs.companyTable.toggleRowSelection(row);
      },
      //选择改变
      onSelectionChange(selection) {
        this.selectedRows = selection;
      },
      //分页大小改变
      sizeChangeHandler(val) {
        this.pageSize = val;
        this.list();
      },
      //列表
      list() {
        this.dataLoading = true;
        companyAPI.getCompany(this.name, this.currentPage, this.pageSize).then(data => {
          this.companys = data.data;
          this.total = data.total;
          this.dataLoading = false;
        })
      },
      //新增
      addClick() {
        this.addOperate = true;
        this.tmpCompany = {};
        this.saveStatus = false;
        this.showDialog = true;
      },
      //编辑
      editClick() {
        this.addOperate = false;
        this.tmpCompany = Object.assign({}, this.selectedRows[0]);;
        this.saveStatus = false;
        this.showDialog = true;
      },
      //删除
      deleteClick() {
        let rowIds = this.getSelectedIds().join(',');
        this.$confirm("确认删除所选的数据?", '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          beforeClose: (action, instance, done) => {
            if (action == 'confirm') {
              instance.confirmButtonLoading = true;
              return companyAPI.deleteCompany(rowIds).then(data => {
                if (data.status == 200) {
                  this.list();
                  this.$notify({
                    title: '成功',
                    message: data.data,
                    type: 'success',
                    duration: 2000,
                  });
                } else {
                  this.$alert(data.data);
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
      //查看公司信息
      viewCompanyClick(id) {
        this.showCompanyDialog = true;
        this.id = id;
      },
      //保存
      save() {
        this.saveStatus = true;
        if (this.addOperate) {
          companyAPI.addCompany(this.tmpCompany).then(data => {
            if (data.status == 200) {
              this.list();
              this.$message.success(data.data);
            } else {
              this.$message.error(data.data);
            }
            this.saveStatus = false;
            this.showDialog = false;
          });
        } else {
          companyAPI.editCompany(this.tmpCompany).then(data => {
            if (data.status == 200) {
              this.list();
              this.$message.success(data.data);
            } else {
              this.$message.error(data.data);
            }
            this.saveStatus = false;
            this.showDialog = false;
          });
        }
      },
      //获取选中id数组
      getSelectedIds() {
        let rowIds = [];
        this.selectedRows.forEach(function (row) {
          rowIds.push(row.id);
        });
        return rowIds;
      },
    },
    created() {
      this.list();
    },
    components: {
      'company-detail': companyDetail
    }
  }

</script>

<style scoped>
  .main-content-wrap {
    padding: 10px;
  }

  .search-bar {
    padding: 5px 12px;
  }

  .company-table-expand {
    font-size: 0;
  }

  .company-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .company-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  .page-wrap {
    margin-top: 20px;
    margin-right: 20px;
  }

  .page-wrap .page {
    float: right;
  }

  .red-color {
    color: #FF4949;
  }

  .green-color {
    color: #13CE66;
  }

</style>
