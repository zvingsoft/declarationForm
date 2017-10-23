<template>
  <div>
    <el-toolbar>
      <el-button class="z-toolbar-btn" :plain="true" icon="plus" @click="addManifest">新建</el-button>
      <el-button class="z-toolbar-btn" :plain="true" icon="edit" :disabled="selectedRows.length !== 1" @click="editManifest">编辑</el-button>
      <el-button class="z-toolbar-btn" :plain="true" icon="delete" :disabled="selectedRows.length === 0" @click="deleteManifests">删除</el-button>
      <el-button class="z-toolbar-btn" :plain="true" icon="information" :disabled="selectedRows.length !== 1" @click="viewGoods">查看商品</el-button>
    </el-toolbar>
    <div class="main-content-wrap">
      <div class="search-bar fr">
        舱单编号:
        <el-input v-model="search.manifestNum" size="small" placeholder="请输入舱单编号" style="width: 200px;"></el-input>
        收件公司：
        <el-input v-model="search.receiveCompany" size="small" placeholder="请输入收件公司" style="width: 200px;"></el-input>
        收货人：
        <el-input v-model="search.receivePerson" size="small" placeholder="请输入收货人" style="width: 200px;"></el-input>
        <el-button size="small" type="primary" @click="handleSearchBtn" style="width: 60px;">搜索</el-button>
      </div>
      <!--表格-->
      <div>
        <el-table :data="manifestTable"  ref="manifestTable"   @row-click="rowClick"  @selection-change="onSelectionChange" @row-dblclick="dblclickManifest" >
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand" label-width="120px">
                <el-form-item label="舱单编号">
                  <span>{{props.row.manifestNum}}</span>
                </el-form-item>
                <el-form-item label="收件公司">
                  <span>{{props.row.receiveCompany}}</span>
                </el-form-item>
                <el-form-item label="商品">
                  <span>{{props.row.skunames}}</span>
                </el-form-item>
                <el-form-item label="发货地">
                  <span>{{props.row.sendAddress}}</span>
                </el-form-item>
                <el-form-item label="收货人">
                  <span>{{props.row.receivePerson}}</span>
                </el-form-item>
                <el-form-item label="电话">
                  <span>{{props.row.telephone}}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column prop="manifestNum" min-width="20%" label="舱单编号 ">
            <template slot-scope="scope">
             <a @click="lookClick(scope.row)" class="a-btn">{{scope.row.manifestNum}}</a>
           </template>
          </el-table-column>
          <el-table-column prop="receiveCompany" min-width="15%" label="收件公司"></el-table-column>
          <el-table-column prop="skunames" min-width="30%" label="商品"></el-table-column>
          <el-table-column prop="sendAddress" min-width="10%" label="发货地"></el-table-column>
          <el-table-column prop="receivePerson" min-width="10%" label="收货人"></el-table-column>
          <el-table-column prop="telephone" min-width="15%" label="电话"></el-table-column>
        </el-table>
      </div>
      <!--分页-->
      <div class="page-wrap">
        <el-pagination class="page" @size-change="sizeChangeHandler" @current-change="currentChangeHandler" :current-page.sync="currentPage" :page-sizes="pageSizes" :page-size="pageSize" :total="total" layout="total,sizes, prev, pager, next">
        </el-pagination>
      </div>
    </div>

    <!-- 新建,编辑对话框 -->
    <el-dialog :title="addOrEdit==1?'新建':'编辑'" :visible.sync="showDialog" @close="closeAddOrEditDialog">
      <el-form label-width="160px" :model="tmpManifest" :rules="manifestRules" ref="manifestForm">
        <el-form-item label="舱单编号：" prop="manifestNum">
          <el-input placeholder="请输入舱单编号" v-model="tmpManifest.manifestNum" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="收件公司：" prop="receiveCompany">
          <el-input placeholder="请输入收件公司" v-model="tmpManifest.receiveCompany" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="商品：">

          <el-select class="e-input" multiple  v-model="sku" placeholder="请选择一种商品" @change="selectSku" >
              <el-option v-for="item in SKUData" :key="item.sn" :label="item.name" :value="item.sn">
                <span style="float: left">{{ item.sn }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px;margin-right: 20px;">{{ item.name }}</span>
              </el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="发货地：">
          <el-input placeholder="请输入发货地" v-model="tmpManifest.sendAddress" class="width-230"></el-input>
        </el-form-item>
        <el-form-item label="收货人：" prop="receivePerson">
          <el-input v-model="tmpManifest.receivePerson" placeholder="请输入收货人" class="width-230"></el-input>
        </el-form-item>
        <el-form-item label="电话：">
          <el-input placeholder="请填写电话" v-model="tmpManifest.telephone" class="width-230"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetManifest">取 消</el-button>
        <el-button type="primary" @click="saveManifest" :disabled="saveManifestStatus">确 定</el-button>
      </div>
    </el-dialog>

    <!--查看商品-->
    <el-dialog title="查看商品" :visible.sync="viewDialog">
      <el-card class="box-card">
        <div slot="header">
          <span>收件公司：{{manifestGoodInfo.receiveCompany}}</span>
        </div>
        <div>
          <el-table :data="manifestGoodInfo.goodsinfo" >
          <el-table-column prop="sku" min-width="20%" label="商品编号"></el-table-column>
          <el-table-column prop="skuname" min-width="80%" label="商品"></el-table-column>
        </el-table>
          </div>
      </el-card>
      <div slot="footer" class="dialog-footer">
        <el-button @click="viewDialog = false">关 闭</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import manifestAPI from './api/manifestAPI.js';
import skuAPI from '../form/api/skuAPI.js';
// import './mock/manifest.js'

export default {
  data() {
    return {
      manifestTable: [],
      temmanifestTable: [],
      currentPage: 1,
      total: 50,
      pageSize: 5,
      pageSizes: [5, 10, 15, 20],
      selectedRows: [],
      showDialog: false,
      addOrEdit: 1,
      tmpManifest: {},
      manifestRules: {
        manifestNum: [{ required: true, message: '请输入舱单编号', trigger: 'blur' }],
        receiveCompany: [
          { required: true, message: '请输入收件公司', trigger: 'blur' },
        ],
        receivePerson: [{ required: true, message: '请输入收货人', trigger: 'blur' }],
      },
      saveManifestStatus: false,
      search: {
        manifestNum: '',
        goodsName: '',
        receiveCompany: '',
        receivePerson: '',
      },
      viewDialog: false,
      manifestGoodInfo: { goodsinfo: '', receiveCompany: '' },
      SKUData: [],
      sku: [],
    };
  },
  methods: {
    onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    handleSearchBtn() {
      this.manifestTable = Object.assign([], this.temmanifestTable);
      let temManifestnum = this.search.manifestNum;
      // let temGoodsname = this.search.goodsName;
      let temReceiveCompany = this.search.receiveCompany;
      let temReceivePerson = this.search.receivePerson;
      if (
        temManifestnum != '' ||
        temReceiveCompany != '' ||
        temReceivePerson != ''
      ) {
        if (temManifestnum != '') {
          this.manifestTable = this.manifestTable.filter(
            val => val.manifestNum.indexOf(temManifestnum) != -1
          );
        }
        if (temReceiveCompany != '') {
          this.manifestTable = this.manifestTable.filter(
            val => val.receiveCompany.indexOf(temReceiveCompany) != -1
          );
        }
        if (temReceivePerson != '') {
          this.manifestTable = this.manifestTable.filter(
            val => val.receivePerson.indexOf(temReceivePerson) != -1
          );
        }
      }
    },
    sizeChangeHandler(val) {
      this.pageSize = val;
    },
    currentChangeHandler(val) {
      this.currentPage = val;
    },
    //关闭事件
    closeAddOrEditDialog() {
      console.log(this.tmpManifest.manifestNum);
      if (
        !this.tmpManifest.manifestNum ||
        this.tmpManifest.manifestNum == '' ||
        !this.tmpManifest.receiveCompany ||
        this.tmpManifest.receiveCompany == '' ||
        !this.tmpManifest.receivePerson ||
        this.tmpManifest.receivePerson == ''
      ) {
        this.$refs['manifestForm'].resetFields();
      }
      this.showDialog = false;
    },
    //取消
    resetManifest() {
      this.$refs['manifestForm'].resetFields();
      this.showDialog = false;
    },
    //新建
    addManifest() {
      this.addOrEdit = 1;
      this.tmpManifest = {};
      this.saveManifestStatus = false;
      this.showDialog = true;
      this.sku = [];
      skuAPI.getSKU().then(data => {
        this.SKUData = data;
      });
    },
    //编辑
    editManifest() {
      this.addOrEdit = 2;
      this.showDialog = true;
      this.saveManifestStatus = false;
      this.tmpManifest = Object.assign({}, this.selectedRows[0]);
      let temSku = [];
      this.tmpManifest.items.forEach(function(row) {
        temSku.push(row.sku);
      });
      this.sku = temSku;
      skuAPI.getSKU().then(data => {
        this.SKUData = data;
      });
    },

    //双击
    dblclickManifest(dbrow) {
      this.addOrEdit = 2;
      this.showDialog = true;
      this.saveManifestStatus = false;
      this.tmpManifest = Object.assign({}, dbrow);
      let temSku = [];
      this.tmpManifest.items.forEach(function(row) {
        temSku.push(row.sku);
      });
      this.sku = temSku;
      skuAPI.getSKU().then(data => {
        this.SKUData = data;
      });
    },
    //单机
    rowClick(row, event, column) {
      if (column.type != 'selection') {
        this.$refs.manifestTable.clearSelection();
      }
      this.$refs.manifestTable.toggleRowSelection(row);
    },

    //链接
    lookClick(link) {
      this.addOrEdit = 2;
      this.showDialog = true;
      this.saveManifestStatus = false;
      this.tmpManifest = Object.assign({}, link);
      let temSku = [];
      this.tmpManifest.items.forEach(function(row) {
        temSku.push(row.sku);
      });
      this.sku = temSku;
      skuAPI.getSKU().then(data => {
        this.SKUData = data;
      });
    },
    //新建和编辑时保存
    saveManifest() {
      this.$refs['manifestForm'].validate(valid => {
        if (valid) {
          this.saveManifestStatus = true;
          if (this.addOrEdit == 1) {
            manifestAPI.addManifest(this.tmpManifest).then(data => {
              if (data.status == 200) {
                this.getManifestData();
                this.temmanifestTable = Object.assign([], this.manifestTable);
                this.$message.success(data.data);
              } else {
                this.$message.error(data.data);
              }
              this.saveManifestStatus = false;
              this.showDialog = false;
            });
          } else if (this.addOrEdit == 2) {
            manifestAPI
              .editManifest(this.tmpManifest.id, this.tmpManifest)
              .then(data => {
                if (data.status == 200) {
                  this.getManifestData();
                  this.temmanifestTable = Object.assign([], this.manifestTable);
                  this.$message.success(data.data);
                } else {
                  this.$message.error(data.data);
                }
                this.saveManifestStatus = false;
                this.showDialog = false;
              });
          }
        } else {
          this.$alert('请填写正确选项', '提示');
          return false;
        }
      });
    },
    //刪除
    deleteManifests() {
      let rowIds = [];
      this.selectedRows.forEach(function(row) {
        rowIds.push(row.id);
      });

      this.$confirm('确认删除所选的数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action == 'confirm') {
            instance.confirmButtonLoading = true;
            return manifestAPI.deleteManifests(rowIds).then(data => {
              if (data.status == 200) {
                this.manifestTable = this.manifestTable.filter(
                  val => !rowIds.includes(val.id)
                );
                this.temmanifestTable = Object.assign([], this.manifestTable);
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
        },
      }).catch(() => {
        this.$notify.info({
          title: '取消',
          message: '操作取消！',
          duration: 2000,
        });
      });
    },
    //查看商品
    viewGoods() {
      this.viewDialog = true;
      this.manifestGoodInfo = { goodsinfo: [], receiveCompany: '' };
      this.manifestGoodInfo.receiveCompany = this.selectedRows[0].receiveCompany;
      manifestAPI.viewManifestsGoods(this.selectedRows[0].id).then(data => {
        this.manifestGoodInfo.goodsinfo = data.data.items;
      });
    },
    getManifestData() {
      manifestAPI.getManifestData().then(data => {
        this.manifestTable = data.data;
        let temManifestTable = [];
        this.manifestTable.forEach(function(row) {
          let temItems = row.items;
          let temArr = [];
          temItems.forEach(function(item) {
            temArr.push(item.skuname);
          });
          let temrow = Object.assign({}, row);
          temrow.skunames = temArr.join(',');
          temManifestTable.push(temrow);
        });
        this.manifestTable = temManifestTable;
        this.temmanifestTable = Object.assign([], this.manifestTable);
      });
    },
    selectSku(val) {
      let skuname = [];
      let temSKUData = Object.assign([], this.SKUData);
      val.forEach(function(item) {
        temSKUData.forEach(function(row) {
          if (row.sn == item) {
            let tem = { sku: '', skuname: '' };
            tem.sku = row.sn;
            tem.skuname = row.name;
            skuname.push(tem);
          }
        });
      });
      this.tmpManifest.items = skuname;
    },
  },
  created() {
    this.getManifestData();
    // manifestAPI.getManifestData().then(data => {
    //   this.manifestTable = data.data;
    //   this.temmanifestTable = Object.assign([], this.manifestTable);
    // });
  },
};
</script>

<style scoped>
.main-content-wrap {
  padding: 10px;
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

.page-wrap .page {
  float: right;
}

.search-bar {
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

.box-card {
  width: 100%;
}
</style>
