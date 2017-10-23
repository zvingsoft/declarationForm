<template>
  <div>
    <el-toolbar>
      <el-button type="primary" class="z-toolbar-btn" :plain="true" @click="addClick">
        <i class="fa fa-plus" aria-hidden="true"></i> 新建</el-button>
      <el-button type="primary" class="z-toolbar-btn" :plain="true" @click="editClick" :disabled="selectedRows.length !== 1">
        <i class="fa fa-edit" aria-hidden="true"></i> 编辑</el-button>
      <el-button type="primary" class="z-toolbar-btn" :plain="true" @click="deleteClick" :disabled="selectedRows.length === 0">
        <i class="fa fa-minus" aria-hidden="true"></i> 删除</el-button>
      <el-button type="primary" class="z-toolbar-btn" :plain="true" @click="auditClick('Y')" :disabled="selectedRows.length === 0">
        <i class="fa fa-check" aria-hidden="true"></i> 审核通过</el-button>
      <el-button type="primary" class="z-toolbar-btn" :plain="true" @click="auditClick('N')" :disabled="selectedRows.length === 0">
        <i class="fa fa-remove" aria-hidden="true"></i> 审核不通过</el-button>
    </el-toolbar>

    <div class="search-bar fr">
      <span>编号</span>&nbsp;
      <el-input v-model="number" size="small" placeholder="请输入编号" style="width:200px"></el-input>&nbsp;
      <span>企业</span>&nbsp;
      <el-input v-model="companyName" size="small" placeholder="请输入企业" style="width:200px"></el-input>
      <el-button type="primary" @click="list" size="small" style="width: 60px;">搜索</el-button>
    </div>

    <div class="main-content-wrap">
      <el-table ref="cottonquotaTable" :data="cottonquotas" style="width: 100%" v-loading="dataLoading" @selection-change="onSelectionChange"
        @row-click="onCottonquotaTableRowClick">
        <el-table-column type="selection" width="50">
        </el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="cottonquota-table-expand">
              <el-form-item label="编号">
                <span>{{ props.row.number }}</span>
              </el-form-item>
              <el-form-item label="企业名称">
                <el-button type="text" @click="viewCompanyClick( props.row.companyId)">{{ props.row.companyName }}</el-button>
              </el-form-item>
              <!-- <el-form-item label="银行信用评级">
                <span>{{ props.row.bankcreditrating }}</span>
              </el-form-item> -->
              <el-form-item label="申请量">
                <span>{{ props.row.application }}（吨）</span>
              </el-form-item>
              <el-form-item label="分配量">
                <span>{{ props.row.quota }}（吨）</span>
              </el-form-item>
              <el-form-item label="已进口">
                <span>{{ props.row.used }}（吨）</span>
              </el-form-item>
              <!-- <el-form-item label="企业地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="企业电话">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="企业传真">
                <span>{{ props.row.fax }}</span>
              </el-form-item>
              <el-form-item label="企业邮政编码">
                <span>{{ props.row.postcode }}</span>
              </el-form-item> -->
              <el-form-item label="申请时间">
                <span>{{ props.row.addTime }}</span>
              </el-form-item>
              <el-form-item label="审核状态">
                <span v-if="props.row.auditStatus==='Y'" class="green-color">已通过</span>
                <span v-else-if="props.row.auditStatus==='N'" class="red-color">未通过</span>
                <span v-else>未审核</span>
              </el-form-item>
              <el-form-item label="添加人">
                <span>{{ props.row.addUser }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="编号" prop="number">
        </el-table-column>
        <el-table-column label="企业">
          <template slot-scope="props">
            <el-button type="text" @click="viewCompanyClick( props.row.companyId)">{{ props.row.companyName }}</el-button>
          </template>
        </el-table-column>
        <!-- <el-table-column label="银行信用评级" prop="bankcreditrating">
        </el-table-column> -->
        <el-table-column label="申请量（吨）" prop="application">
        </el-table-column>
        <el-table-column label="分配量（吨）" prop="quota">
        </el-table-column>
        <el-table-column label="已进口（吨）" prop="used">
        </el-table-column>
        <el-table-column label="审核状态">
          <template slot-scope="scope">
            <span v-if="scope.row.auditStatus==='Y'" class="green-color">已通过</span>
            <span v-else-if="scope.row.auditStatus==='N'" class="red-color">未通过</span>
            <span v-else>未审核</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="auditClick( 'Y',scope.row.id)">通过</el-button>&nbsp;
            <el-button type="text" @click="auditClick( 'N',scope.row.id)">不通过</el-button>
          </template>
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
    <el-dialog size="tiny" :title="addOperate?'新建':'编辑'" :visible.sync="showDialog">
      <el-form label-width="160px" :model="tmpCottonQuota">
        <el-form-item label="企业名称：" v-if="addOperate">
          <el-select v-model="tmpCottonQuota" clearable placeholder="请选择" @change="onCompanyChange" :disabled="!addOperate">
            <el-option v-for="item in companys" :key="item.companyId" :label="item.companyName" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请量：">
          <el-input-number :min="0" placeholder="请输入申请量" v-model="tmpCottonQuota.application" class="width-300"></el-input-number>（单位：吨）
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary" @click="save" :disabled="saveStatus">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 企业信息对话框 -->
    <company-detail :company="tmpCottonQuota" :show.sync="showCompanyDialog"></company-detail>

  </div>
</template>

<script>
  // require('./mock/cottonQuota.js')
  require('./mock/company.js')
  import companyAPI from './api/companyAPI.js';
  import cottonQuotaAPI from './api/cottonQuotaAPI.js';
  import companyDetail from './components/companyDetail.vue';

  export default {
    data() {
      return {
        dataLoading: true,
        cottonquotas: [],
        number: '',
        companyName: '',
        tmpCottonQuota: {},
        addOperate: true,
        saveStatus: false,
        showDialog: false,
        showCompanyDialog: false,
        selectedRows: [],
        companys: {},
        total: 0,
        pageSize: 15,
        currentPage: 1,
        pageSizes: [15, 20, 30, 40, 50]
      }
    },
    methods: {
      //审核
      auditClick(pass, ids) {
        if (ids == undefined || ids == '') {
          ids = this.getSelectedIds().join(',');
        }
        cottonQuotaAPI.auditCottonQuota(pass, ids).then(data => {
          if (data.status == 200) {
            this.$message.success(data.data);
            this.list();
          } else {
            this.$message.error(data.data);
          }
        });
      },
      //单击一行选中当前行、单击多选框增加选中当前行
      onCottonquotaTableRowClick(row, event, column) {
        if (column.type != "selection") {
          this.$refs.cottonquotaTable.clearSelection();
        }
        this.$refs.cottonquotaTable.toggleRowSelection(row);
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
        this.dataLoading = false;
        cottonQuotaAPI.getCottonQuota(this.number, this.companyName, this.currentPage, this.pageSize).then(data => {
          this.cottonquotas = data.data;
          this.total = data.total;
          this.dataLoading = false;
        })
      },
      //新增
      addClick() {
        this.loadCompany();
        this.addOperate = true;
        this.tmpCottonQuota = {};
        this.saveStatus = false;
        this.showDialog = true;
      },
      //编辑
      editClick() {
        this.addOperate = false;
        this.tmpCottonQuota = Object.assign({}, this.selectedRows[0]);;
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
              return cottonQuotaAPI.deleteCottonQuota(rowIds).then(data => {
                if (data.status == 200) {
                  this.list();
                  this.$notify({
                    title: '成功',
                    message: data.data,
                    type: 'success',
                    duration: 2000,
                  });
                } else {
                  this.$alert(data);
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
      viewCompanyClick(companyId) {
        this.showCompanyDialog = true;
        this.tmpCottonQuota = this.cottonquotas.filter(row => row.companyId === companyId)[0];
      },
      //保存
      save() {
        this.saveStatus = true;
        if (this.addOperate) {
          cottonQuotaAPI.addCottonQuota(this.tmpCottonQuota).then(data => {
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
          cottonQuotaAPI.editCottonQuota(this.tmpCottonQuota).then(data => {
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
      //加载企业列表共选择
      loadCompany() {
        if (!this.companys.length > 0) {
          companyAPI.getCompanyForSelect().then(data => {
            this.companys = data.data;
          })
        }
      }
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

  .cottonquota-table-expand {
    font-size: 0;
  }

  .cottonquota-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .cottonquota-table-expand .el-form-item {
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
