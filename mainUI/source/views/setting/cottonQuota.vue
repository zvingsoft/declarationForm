<template>
  <div>
    <el-toolbar>
      <el-button type="primary" class="z-toolbar-btn" :plain="true" @click="addClick">
        <i class="fa fa-plus" aria-hidden="true"></i> 新建</el-button>
      <el-button type="primary" class="z-toolbar-btn" :plain="true" @click="editClick" :disabled="selectedRows.length !== 1">
        <i class="fa fa-edit" aria-hidden="true"></i> 编辑</el-button>
      <el-button type="primary" class="z-toolbar-btn" :plain="true" @click="deleteClick" :disabled="selectedRows.length === 0">
        <i class="fa fa-minus" aria-hidden="true"></i> 删除</el-button>
    </el-toolbar>

    <div class="search-bar fr">
      <span>编号</span>&nbsp;
      <el-input v-model="number" size="small" placeholder="请输入编号" style="width:200px"></el-input>&nbsp;
      <span>企业</span>&nbsp;
      <el-input v-model="companyname" size="small" placeholder="请输入企业" style="width:200px"></el-input>
      <el-button type="primary" class="purple-btn" @click="list" size="small">搜索</el-button>
    </div>

    <div class="main-content-wrap">
      <el-table :data="cottonquotas" style="width: 100%" v-loading="dataLoading" @selection-change="onSelectionChange">
        <el-table-column type="selection" width="50">
        </el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="cottonquota-table-expand">
              <el-form-item label="企业名称">
                <span>{{ props.row.companyname }}</span>
              </el-form-item>
              <el-form-item label="企业地址">
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
              </el-form-item>
              <el-form-item label="申请时间">
                <span>{{ props.row.addtime }}</span>
              </el-form-item>
              <el-form-item label="添加人">
                <span>{{ props.row.adduser }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="编号" prop="number">
        </el-table-column>
        <el-table-column label="企业">
          <template slot-scope="props">
            <el-button type="text" @click="viewCompanyClick( props.row.companyid)">{{ props.row.companyname }}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="银行信用评级" prop="bankcreditrating">
        </el-table-column>
        <el-table-column label="申请量（吨）" prop="application">
        </el-table-column>
        <el-table-column label="分配量（吨）" prop="allocation">
        </el-table-column>
        <el-table-column label="已进口（吨）" prop="used">
        </el-table-column>
        <el-table-column label="审核">
          <template slot-scope="scope">
            <span v-if="scope.row.auditstatus!==''">{{ scope.row.auditstatus === "Y" ? '审核已通过' : '审核未通过' }}</span>
            <span v-else>通过&nbsp;&nbsp;不通过</span>
          </template>
        </el-table-column>
      </el-table>

      <!--分页-->
      <div class="page-wrap">
        <el-pagination class="page" @size-change="sizeChangeHandler" @current-change="list" :current-page.sync="currentPage" :page-sizes="pageSizes"
          :page-size="pageSize" :total="total" layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
      </div>

    </div>

    <!-- 新建,编辑对话框 -->
    <el-dialog :title="addOperate?'新建':'编辑'" :visible.sync="showDialog">
      <el-form label-width="160px" :model="tmpCottonQuota">
        <el-form-item label="企业名称：">
          <el-input placeholder="请输入企业名称" v-model="tmpCottonQuota.companyname" class="width-300"></el-input>
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
    <el-dialog title="查看企业信息" :visible.sync="showCompanyDialog">
      <el-form label-width="160px" :model="tmpCottonQuota">
        <el-form-item label="名称：">
          <el-input v-model="tmpCottonQuota.companyname" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="银行信用评级：">
          <el-input v-model="tmpCottonQuota.bankcreditrating" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="tmpCottonQuota.address" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="tmpCottonQuota.phone" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="传真">
          <el-input v-model="tmpCottonQuota.fax" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="邮政编码">
          <el-input v-model="tmpCottonQuota.postcode" class="width-300"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="showCompanyDialog = false">关 闭</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  require('./mock/cottonQuota.js')
  import cottonQuotaAPI from './api/cottonQuotaAPI.js';

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
        total: 0,
        pageSize: 15,
        currentPage: 1,
        pageSizes: [15, 20, 30, 40, 50]
      }
    },
    methods: {
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
        cottonQuotaAPI.getCottonQuota(this.number, this.companyName, this.currentPage, this.pageSize).then(data => {
          this.cottonquotas = data.data;
          this.total = data.total;
          this.dataLoading = false;
        })
      },
      //新增
      addClick() {
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
        let rowIds = [];
        this.selectedRows.forEach(function (row) {
          rowIds.push(row.id);
        });
        this.$confirm("确认删除所选的数据?", '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          beforeClose: (action, instance, done) => {
            if (action == 'confirm') {
              instance.confirmButtonLoading = true;
              return cottonQuotaAPI.deleteCottonQuota(rowIds).then(data => {
                if (data.status == 1) {
                  this.list();
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
      //查看公司信息
      viewCompanyClick(companyid) {
        this.showCompanyDialog = true;
        this.tmpCottonQuota = this.cottonquotas.filter(row => row.companyid === companyid)[0];
      },
      //保存
      save() {
        this.saveStatus = true;
        if (this.addOperate) {
          cottonQuotaAPI.addCottonQuota(this.tmpCottonQuota).then(data => {
            if (data.status == 1) {
              this.list();
              this.$message.success(data.message);
            } else {
              this.$message.error(data.message);
            }
            this.saveStatus = false;
            this.showDialog = false;
          });
        } else {
          cottonQuotaAPI.editCottonQuota(this.tmpCottonQuota).then(data => {
            if (data.status == 1) {
              this.list();
              this.$message.success(data.message);
            } else {
              this.$message.error(data.message);
            }
            this.saveStatus = false;
            this.showDialog = false;
          });
        }
      }
    },
    created() {
      this.list();
    }
  }

</script>

<style scoped>
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

  .purple-btn {
    background: #7c8ee4;
    border-color: #7c8ee4;
  }

</style>
