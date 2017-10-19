<template>
  <div>
    <el-toolbar>
      <el-button class="z-toolbar-btn" :plain="true" icon="plus" @click="addTax">新建</el-button>
      <el-button class="z-toolbar-btn" :plain="true" icon="edit" :disabled="selectedRows.length !== 1" @click="editTax">编辑</el-button>
      <el-button class="z-toolbar-btn" :plain="true" icon="delete" :disabled="selectedRows.length === 0" @click="deleteTaxs">删除</el-button>
    </el-toolbar>
    <div class="main-content-wrap">
      <div class="search-bar fr">
        税号:
        <el-input v-model="search.taxnum" size="small" placeholder="请输入税号" style="width: 200px;"></el-input>
        物品类别：
        <el-input v-model="search.taxgoodstype" size="small" placeholder="请输入物品类别" style="width: 200px;"></el-input>
        <el-button size="small" type="primary" @click="handleSearchBtn"> 搜 索 </el-button>
      </div>
      <!--表格-->
      <div>
        <el-table :data="taxTable" @selection-change="onSelectionChange">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand" label-width="120px">
                <el-form-item label="税号">
                  <span>{{props.row.taxnum}}</span>
                </el-form-item>
                <el-form-item label="物品类型">
                  <span>{{props.row.taxgoodstype}}</span>
                </el-form-item>
                <el-form-item label="单位">
                  <span>{{props.row.unit}}</span>
                </el-form-item>
                <el-form-item label="税率">
                  <span>{{props.row.taxrate}}</span>
                </el-form-item>
                <el-form-item label="免征额">
                  <span>{{props.row.freemoney}}</span>
                </el-form-item>
                <el-form-item label="最后修改">
                  <span>{{props.row.modifydate}}</span>
                </el-form-item>
                <el-form-item label="范围" style="width:100%;">
                  <span>{{props.row.range}}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column prop="taxnum" min-width="20%" label="税号"></el-table-column>
          <el-table-column prop="taxgoodstype" min-width="35%" label="物品类型"></el-table-column>
          <el-table-column prop="unit" min-width="10%" label="单位"></el-table-column>
          <el-table-column prop="taxrate" min-width="10%" label="税率"></el-table-column>
          <el-table-column prop="freemoney" min-width="10%" label="免征额"></el-table-column>
          <el-table-column prop="modifydate" min-width="15%" label="最后修改"></el-table-column>
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
      <el-form label-width="160px" :model="tmpTax" :rules="taxRules" ref="taxForm">
        <el-form-item label="税号：" prop="taxnum">
          <el-input placeholder="请输入税号" v-model="tmpTax.taxnum" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="物品类型：" prop="taxgoodstype">
          <el-input placeholder="请输入物品类型" v-model="tmpTax.taxgoodstype" class="width-300"></el-input>
        </el-form-item>
        <el-form-item label="单位：">
          <el-input placeholder="请输入单位" v-model="tmpTax.unit" class="width-230"></el-input>
        </el-form-item>
        <el-form-item label="税率：">
          <el-input placeholder="请输入税率" v-model="tmpTax.taxrate" class="width-230"></el-input>
        </el-form-item>
        <el-form-item label="免征额：">
          <el-input-number v-model="tmpTax.freemoney" :min="0" class="width-230"></el-input-number>
        </el-form-item>
        <el-form-item label="范围：">
          <el-input placeholder="请填写范围" type="textarea" autosize="true" v-model="tmpTax.range"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetTax">取 消</el-button>
        <el-button type="primary" @click="saveTax" :disabled="saveTaxStatus">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import taxAPI from './api/taxAPI.js'
import './mock/tax.js'

export default {
  data() {
    return {
      taxTable: [],
      temtaxTable: [],
      currentPage: 1,
      total: 50,
      pageSize: 5,
      pageSizes: [5, 10, 15, 20],
      selectedRows: [],
      showDialog: false,
      addOrEdit: 1,
      tmpTax: {},
      taxRules: {
        taxnum: [
          { required: true, message: '请输入税号', trigger: 'blur' }
        ],
        taxgoodstype: [
          { required: true, message: '请输入物品类型', trigger: 'blur' }
        ]
      },
      saveTaxStatus: false,
      search: { taxnum: '', taxgoodstype: '' }
    }
  },
  methods: {
    onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    handleSearchBtn() {
      this.taxTable = Object.assign([], this.temtaxTable);
      let temTaxnum = this.search.taxnum;
      let temTaxGoodsType = this.search.taxgoodstype;
      if (temTaxnum != '' || temTaxGoodsType != '') {
        if (temTaxnum != '') {
          this.taxTable = this.taxTable.filter(val => val.taxnum.indexOf(temTaxnum) != -1);

        }
        if (temTaxGoodsType != '') {
          this.taxTable = this.taxTable.filter(val => val.taxgoodstype.indexOf(temTaxGoodsType) != -1);
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
      if (!this.tmpTax.taxnum || this.tmpTax.taxnum == '' || !this.tmpTax.taxgoodstype || this.tmpTax.taxgoodstype == '') {
        this.$refs['taxForm'].resetFields();
      }
      this.showDialog = false;
    },
    //取消
    resetTax() {
      this.$refs['taxForm'].resetFields();
      this.showDialog = false;
    },
    //新建
    addTax() {
      this.addOrEdit = 1;
      this.tmpTax = {};
      this.saveTaxStatus = false;
      this.showDialog = true;
    },
    //编辑
    editTax() {
      this.addOrEdit = 2;
      this.saveTaxStatus = false;
      this.tmpTax = Object.assign({}, this.selectedRows[0]);
      this.showDialog = true;
    },
    //新建和编辑时保存
    saveTax() {
      this.$refs['taxForm'].validate((valid) => {
        if (valid) {
          this.saveTaxStatus = true;
          if (this.addOrEdit == 1) {
            taxAPI.addTax(this.tmpTax).then(data => {
              if (data.status == 1) {
                if (this.taxTable.length == 0) {
                  this.tmpTax.id = this.taxTable.length + 1;
                } else {
                  let temArr = Object.assign([], this.taxTable);
                  temArr.sort(function(a, b) {
                    return b.id - a.id;
                  });
                  this.tmpTax.id = temArr[0].id + 1;
                }
                this.tmpTax.modifydate = this.formatDate(new Date(), 'yyyy-MM-dd');
                this.taxTable.push(this.tmpTax);
                this.temtaxTable = Object.assign([], this.taxTable);
                this.$message.success(data.message);
              } else {
                this.$message.error(data.message);
              }
              this.saveTaxStatus = false;
              this.showDialog = false;
            });
          } else if (this.addOrEdit == 2) {
            taxAPI.editTax(this.tmpTax.id, this.tmpTax).then(data => {
              if (data.status == 1) {
                let index = this.taxTable.findIndex(val => val.id == this.tmpTax.id);
                this.taxTable = [
                  ...this.taxTable.slice(0, index),
                  Object.assign({}, this.tmpTax),
                  ...this.taxTable.slice(index + 1)
                ];
                this.temtaxTable = Object.assign([], this.taxTable);
                this.$message.success(data.message);
              } else {
                this.$message.error(data.message);
              }
              this.saveTaxStatus = false;
              this.showDialog = false;
            });
          }
        } else {
          this.$alert("请填写正确选项", "提示");
          return false;
        }
      });
    },
    deleteTaxs() {
      let rowIds = [];
      this.selectedRows.forEach(function(row) {
        rowIds.push(row.id);
      });

      this.$confirm("确认删除所选的数据?", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action == 'confirm') {
            instance.confirmButtonLoading = true;
            return taxAPI.deleteTaxs(rowIds).then(data => {
              if (data.status == 1) {
                this.taxTable = this.taxTable.filter(val => !rowIds.includes(val.id));
                this.temtaxTable = Object.assign([], this.taxTable);
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
  },
  created() {
    taxAPI.getTaxData().then(data => {
      this.taxTable = data.data;
      this.temtaxTable = Object.assign([], this.taxTable);
    });
  }
}
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
</style>
