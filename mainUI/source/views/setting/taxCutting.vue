<template>
<div :style="{width:clientWidth+'px'}">
  <el-toolbar>
    <el-button class="z-toolbar-btn" size="small" :plain="true" icon="plus" @click="addTaxCuttingClick">新建</el-button>
    <el-button class="z-toolbar-btn" size="small" :disabled="selectedRows.length !== 1" :plain="true" icon="edit" @click="editTaxCuttingClick">编辑</el-button>
    <el-button class="z-toolbar-btn" size="small" :disabled="selectedRows.length === 0" :plain="true" icon="delete" @click="deleteTaxCuttingClick">删除</el-button>
  </el-toolbar>
  <div class="main-content-wrap">
    <!-- 搜索 -->
      <div class="search-bar fr">
       <!--  编号：
        <el-input v-model="searchTaxCutting.id" placeholder="请输入编号" size="small" style="width:150px"></el-input> -->
        商品编号：
        <el-input v-model="searchTaxCutting.sku" placeholder="请输入商品编号" size="small" style="width:150px"></el-input>
        商品名称：
        <el-input v-model="searchTaxCutting.skuName" placeholder="请输入商品名称" size="small" style="width:150px"></el-input>
        有效期：
        <el-date-picker v-model="searchTaxCutting.startTime" type="date" placeholder="请选择日期" size="small" style="width:150px" @change="dateStartTimeChangeClick"></el-date-picker>
        -
        <el-date-picker v-model="searchTaxCutting.endTime" type="date" placeholder="请选择日期" size="small" style="width:150px" @change="dateEndTimeChangeClick"></el-date-picker>
        <el-button size="small" type="primary" @click="searchTaxCuttingClick" style="width: 60px;">搜索</el-button>
      </div>
      <!-- 列表 -->
      <el-table ref="taxCuttingRefTable" :data="taxCuttingTable" tooltip-effect="dark" highlight-current-row :height="clientHeight" @selection-change="onSelectionChange" @row-click="onRowClick" @row-dblclick="dbEditClick" v-loading="dataLoading">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand" label-width="120px">
              <!-- <el-form-item label="编号">
                <span>{{ props.row.id }}</span>
              </el-form-item> -->
               <el-form-item label="商品编号">
                <span>{{ props.row.sku }}</span>
              </el-form-item>
              <el-form-item label="商品名称">
                <span>{{ props.row.skuName }}</span>
              </el-form-item>
              <!-- <el-form-item label="可用数量">
                <span>{{ props.row.count }}</span>
              </el-form-item> -->
              <el-form-item label="减免数量上限">
                <span>{{ props.row.topLmit }}</span>
              </el-form-item>
              <el-form-item label="减免税率">
                <span>{{ props.row.rate }}</span>
              </el-form-item>
               <el-form-item label="有效期">
                <span>{{ props.row.validityDate }}</span>
              </el-form-item>
              <el-form-item label="政策文件" style="width:100%;">
               <a @click="lookPolicyPaperClick(props.row)" class="a-btn">{{props.row.policyPaperTitle}}</a>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="sku" show-overflow-tooltip min-width="15%" label="商品编号"></el-table-column>
        <el-table-column prop="skuName" show-overflow-tooltip min-width="25%" label="商品名称"></el-table-column>
        <!--<el-table-column prop="count" show-overflow-tooltip min-width="20%" label="可用数量"></el-table-column>-->
        <el-table-column prop="topLmit" show-overflow-tooltip min-width="25%" label="减免数量上限"></el-table-column>
        <el-table-column prop="rate" show-overflow-tooltip min-width="20%" label="减免税率"></el-table-column>
        <el-table-column show-overflow-tooltip min-width="35%" label="政策文件">
           <template slot-scope="scope">
             <a @click="lookPolicyPaperClick(scope.row)" class="a-btn">{{scope.row.policyPaperTitle}}</a>
           </template>
        </el-table-column>
        <el-table-column prop="validityDate" show-overflow-tooltip min-width="25%" label="有效期"></el-table-column>
      </el-table>
      <!--分页 -->
      <div class="page-wrap">
        <el-pagination class="page" @size-change="sizeChangeHandler" @current-change="currentChangeHandler" :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" :total="total" layout="total, sizes, prev, pager, next">
        </el-pagination>
      </div>
    </div>
    <!-- 新建、编辑 -->
    <el-dialog :title="showTitleMode === 0 ? '新建' : '编辑'" :visible.sync="showAddDialog" class="mode-dialog">
      <el-form label-width="140px" :model="tmpTaxCutting" :rules="taxCuttingRules" ref="taxCuttingForm">
        <el-form-item label="商品编号：">
          <el-select class="e-input" filterable v-model="tmpTaxCutting.sku" placeholder="请选择"  @change="selectSKUChangeClick">
              <el-option v-for="item in SKUData" :key="item.sn" :label="item.sn" :value="item.sn">
                <span style="float: left">{{ item.sn }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.name }}</span>
              </el-option>
          </el-select>
        </el-form-item>
        <!--<el-form-item prop="count" label="可用数量：">
          <el-input-number v-model="tmpTaxCutting.count" :min="1" :step="1"  style="width:215px;"></el-input-number>
        </el-form-item>-->
        <el-form-item prop="topLmit" label="减免数量上限：">
          <el-input placeholder="请输入减免数量上限" v-model="tmpTaxCutting.topLmit" style="width:215px;"></el-input>
        </el-form-item>
        <el-form-item prop="rate" label="减免税率：">
          <el-input placeholder="请输入减免税率" v-model="tmpTaxCutting.rate" style="width:215px;"></el-input>
        </el-form-item>
        <el-form-item label="生效起始时间：">
          <el-date-picker v-model="tmpTaxCutting.startTime" type="date" placeholder="请选择日期"  @change="dateStartDateChangeClick" style="width:215px;"></el-date-picker>
        </el-form-item>
        <el-form-item label="生效结束时间：">
          <el-date-picker v-model="tmpTaxCutting.endTime" type="date" placeholder="请选择日期"  @change="dateEndDateChangeClick" style="width:215px;"></el-date-picker>
        </el-form-item>
        <el-form-item prop="policyPaperTitle" label="政策文件标题：">
          <el-input placeholder="请输入政策文件标题" v-model="tmpTaxCutting.policyPaperTitle" ></el-input>
        </el-form-item>
        <el-form-item prop="policyPaperContent" label="政策文件内容：">
          <el-input placeholder="请输入政策文件内容" type="textarea" v-model="tmpTaxCutting.policyPaperContent" class="content"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showAddDialog = false">取 消</el-button>
        <el-button type="primary" @click="confrimAddClick">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 政策文件查看 -->
    <el-dialog title="查看政策文件" :visible.sync="showLookDialog" class="mode-dialog">
      <el-card class="box-card look-card">
        <div slot="header" class="clearfix">
          <strong style="font-size: 18px;text-align:center; ">{{tmpTaxCutting.policyPaperTitle}}</strong>
        </div>
        <div style="text-indent:35px">
          {{tmpTaxCutting.policyPaperContent}}
        </div>
      </el-card>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showLookDialog = false">关 闭</el-button>
      </div>
    </el-dialog>
</div>
</template>

<script>
import taxCuttingAPI from './api/taxCuttingAPI.js'
import skuAPI from './api/skuAPI.js'
/* import './mock/taxCutting.js' */
//require('./mock/gossip.js')

export default {
    data() {
        return {
          SKUData: [],
          declarationType: '',
          declarationID: '',
          showGoodsDialog: false,
          clientWidth: 0,
          showLookDialog: false,
          selectedRows: [],
          taxCuttingRules: {
            topLmit: [
                {required: true,trigger:'blur',
                  validator:(rule,value,callback)=>{
                 /*  if(!/^\d+$/ .test(value)) { */
                 if(!/[0-9]+$/ .test(value)) {
                      callback(new Error("请输入数字"));
                  } else {
                      callback();
                  }
                }
                }
            ],
            rate: [
                {required: true,trigger:'blur',
                  validator:(rule,value,callback)=> {
                  //if(!/^[0-9][\.]{1}[0-9]{2}$/.test(value)) { //小数，保留两位
                   /*  if(!/^[0-9]+[\.]{1}[0-9]+$/.test(value)) { */   //小数  不限位数
                  if(!/[0-9]+$/ .test(value)) {
                      callback(new Error("请输入数字"));
                  } else {
                      callback();
                  }
                }
                }
            ],
           /* startTime: [
              {trigger: 'change', required: true,
                validator: (rule, value, callback) => {
                  if (value) {
                    callback();
                  } else {
                    callback(new Error('请选择起始时间'));
                  }
                }
              }
            ],
            endTime: [
              {trigger: 'change', required: true,
                validator: (rule, value, callback) => {
                  if (value) {
                    callback();
                  } else {
                    callback(new Error('请选择截止时间'));
                  }
                }
              }
            ],
             policyPaperTitle: [
              { required: true, message: '请输入政策文件标题', trigger: 'blur' },
              { min: 1, max: 400, message: '长度在 1 到 400 个字符', trigger: 'blur' }
            ],
            policyPaperContent: [
              { required: true, message: '请输入政策文件内容', trigger: 'blur' },
              { min: 1, max: 4000, message: '长度在 1 到 4000 个字符', trigger: 'blur' }
            ], */
          },
          showTitleMode: 0, // 0 新建 1 编辑
          showAddDialog: false, //新建dialog显示状态
          tmpTaxCutting: {},
          searchTaxCutting: {
            id: '',
            sku: '',
            skuName: '',
            startTime: '',
            endTime: ''
          }, //搜索
          dataLoading: false,
          ways: [{'key':'approval','name':'免税'},{'key':'filing','name':'税率减免'}], //减免方式
          smalltypes: [{'key':'technology','name':'支持科技事业'}], //减免税小类
          largetypes: [{'key':'large','name':'鼓励高新技术'}], //减免税大类
          currentPage: 1, //当前页
          pageSize: 10, //每页数
          clientHeight: 0,
          taxCuttingTable: [], //减免税列表数据
          total: 0, //总行数
          pageSizes: [10,20,30], //每页分页数量
        }
    },
    methods: {
      //单击一行选中当前行、单击多选框增加选中当前行
      onRowClick(row, event, column) {
        if (column.type != "selection") {
          this.$refs.taxCuttingRefTable.clearSelection();
        }
        this.$refs.taxCuttingRefTable.toggleRowSelection(row);
      },
      //双击
      dbEditClick(row) {
        this.showAddDialog = true;
        this.showTitleMode = 1;
        this.tmpTaxCutting = Object.assign({}, row);
      },
      //查看政策文件
      lookPolicyPaperClick(row) {
        this.tmpTaxCutting = Object.assign({}, row);
        this.showLookDialog = true;
      },
      //新建编辑确定
      confrimAddClick() {
       let validateForm = () => {
          return new Promise((resolve, reject) => {
            this.$refs['taxCuttingForm'].validate((valid) => {
              if (valid) {
                return resolve(true);
              }
              return reject(false);
            });
          });
        };
        validateForm().then(() => {
          if(this.showTitleMode === 0) {
            this.tmpTaxCutting.id =  Math.round(Math.random() * 10000);
            taxCuttingAPI.addTaxCuttingData(this.tmpTaxCutting).then(data => {
             // if(data.status === 1) {
                this.showAddDialog = false;
                this.$message.success("新建成功");
                this.getTaxCuttingData();
            /*   }else {
                this.$message.error("新建失败");
              } */
            })
          }else if(this.showTitleMode === 1) {
            taxCuttingAPI.editTaxCuttingData(this.tmpTaxCutting).then(data => {
              let index = this.taxCuttingTable.findIndex(val => val.id === this.tmpTaxCutting.id);
                this.taxCuttingTable = [
                  ...this.taxCuttingTable.slice(0, index),
                  this.tmpTaxCutting,
                  ...this.taxCuttingTable.slice(index + 1)
                ];
            //  if(data.status === 1) {
                 this.showAddDialog = false;
                 this.$message.success("编辑成功");
                 this.getTaxCuttingData();
            /*   }else {
                this.$message.error(data.message);
              } */
            })
          }
        }).catch(() => {
           this.$message.error('没有正确填写表单项');
        })
      },
      //编辑
      editTaxCuttingClick() {
        this.showTitleMode = 1;
        this.getSKUData();
        this.tmpTaxCutting = Object.assign({}, this.selectedRows[0]);
        this.showAddDialog = true;
      },
      //新建
      addTaxCuttingClick() {
        this.showTitleMode = 0;
        this.tmpTaxCutting = {
          id: '',
          sku: '',
          skuName: '',
          count: '',
          topLmit: '',
          rate: '',
          policyPaperTitle: '',
          policyPaperContent: '',
          startTime: '',
          endTime: ''
        },
        this.getSKUData();
        this.showAddDialog = true;
      },
      //删除
    deleteTaxCuttingClick() {
      let rowIds = [];
      this.selectedRows.forEach(function(row) {
        rowIds.push(row.id);
      });

      this.$confirm("确认删除所选的消息?", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action == 'confirm') {
            instance.confirmButtonLoading = true;
            return taxCuttingAPI.deleteTaxCuttingData(rowIds).then(data => {
             // if (data.status == 1) {
                this.taxCuttingTable = this.taxCuttingTable.filter(val => !rowIds.includes(val.id));
                this.$notify({
                  title: '成功',
                  message: "删除成功",
                  type: 'success',
                  duration: 2000,
                });
            //  } else {
            //    this.$alert(data.message);
           //   }
              instance.confirmButtonLoading = false;
              done(data);
            });
          } else {
            done();
          }
        }
      }).catch(() => {
        /* this.$notify.info({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        }); */
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
      //起始时间格式转换事件
      dateStartTimeChangeClick() {
        if (this.searchTaxCutting.startTime) {
          this.searchTaxCutting.startTime = this.formatDate(new Date(this.searchTaxCutting.startTime), 'yyyy-MM-dd');
        } else {
          this.searchTaxCutting.startTime = '';
        }
      },
      //截止时间格式转换事件
      dateEndTimeChangeClick() {
        if (this.searchTaxCutting.endTime) {
          this.searchTaxCutting.endTime = this.formatDate(new Date(this.searchTaxCutting.endTime), 'yyyy-MM-dd');
        } else {
           this.searchTaxCutting.endTime = '';
        }
      },
      //有效期
      dateStartDateChangeClick() {
        if (this.tmpTaxCutting.startTime) {
          this.tmpTaxCutting.startTime = this.formatDate(new Date(this.tmpTaxCutting.startTime), 'yyyy-MM-dd');
        } else {
           this.tmpTaxCutting.startTime = '';
        }

      },
      dateEndDateChangeClick() {
        if (this.tmpTaxCutting.endTime) {
          this.tmpTaxCutting.endTime = this.formatDate(new Date(this.tmpTaxCutting.endTime), 'yyyy-MM-dd');
        } else {
           this.tmpTaxCutting.endTime = '';
        }
      },
      //搜索
      searchTaxCuttingClick() {
        this.getTaxCuttingData();
      },
      //选中行
      onSelectionChange(selection) {
        this.selectedRows = selection;
      },
      //每页数设置
      sizeChangeHandler(val) {
        this.pageSize = val;
      },
      //当前页设置
      currentChangeHandler(val) {
        this.currentPage = val;
      },
      //减免税列表数据加载
      getTaxCuttingData(){
        //this.dataLoading = true;
        taxCuttingAPI.getTaxCuttingData(this.currentPage,this.pageSize,this.searchTaxCutting.id,this.searchTaxCutting.sku,this.searchTaxCutting.skuName,this.searchTaxCutting.startTime,this.searchTaxCutting.endTime).then(data => {
         this.taxCuttingTable = data;
          this.total = data.length;
          /*  if (this.searchTaxCutting.id != '') {
            this.taxCuttingTable = this.taxCuttingTable.filter(val => val.id.indexOf(this.searchTaxCutting.id) != -1)
          } */
          if (this.searchTaxCutting.sku != '') {
            this.taxCuttingTable = this.taxCuttingTable.filter(val => val.sku.indexOf(this.searchTaxCutting.sku) != -1)
          }
          if (this.searchTaxCutting.skuName != '') {
            this.taxCuttingTable = this.taxCuttingTable.filter(val => val.skuName.indexOf(this.searchTaxCutting.skuName) != -1)
          }
          if (this.searchTaxCutting.startTime != '' || this.searchTaxCutting.endTime != '' ) {
            this.taxCuttingTable = this.taxCuttingTable.filter(val => val.validityDate.indexOf(this.searchTaxCutting.startTime + " - " + this.searchTaxCutting.endTime) != -1)
          }
          this.dataLoading = false;
        })
      },
      //选择货号
      selectSKUChangeClick(val) {
      let skuName = '';
      this.SKUData.forEach(function(row) {
        if (row.sn == val) {
          skuName = row.name;
          return;
        }
      });
      this.tmpTaxCutting.skuName = skuName;
    },

      //货号数据加载
      getSKUData(){
        skuAPI.getSKU().then(data => {
            this.SKUData = data;
         })
      },
    },
    created() {
      this.clientWidth = document.documentElement.clientWidth - 200;
      this.clientHeight = document.documentElement.clientHeight - 230;
      this.getTaxCuttingData();
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
  .page-wrap {
    margin-top: 20px;
  }

  .page-wrap .page {
    float: right;
  }

  .a-btn:hover {
    text-decoration:underline;
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
<style>
  .content .el-textarea__inner {
    height: 300px;
  }
  .look-card .el-card__header{
    text-align: center;
  }
  .mode-dialog .el-dialog__body{
   height: 500px;
   overflow:auto;
  }
</style>
