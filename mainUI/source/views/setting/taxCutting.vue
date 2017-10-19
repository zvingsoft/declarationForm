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
        减免税大类：
        <el-select  v-model="searchTaxCutting.largetype" size="small" style="width: 120px;" clearable>
          <el-option  v-for="largetype in largetypes" :key="largetype.key" :label="largetype.name" :value="largetype.key"></el-option>
        </el-select>
         减免税小类：
        <el-select  v-model="searchTaxCutting.smalltype" size="small" style="width: 120px;" clearable>
          <el-option  v-for="smalltype in smalltypes" :key="smalltype.key" :label="smalltype.name" :value="smalltype.key"></el-option>
        </el-select>
        减免税方式：
        <el-select  v-model="searchTaxCutting.way" size="small" style="width: 120px;" clearable>
          <el-option v-for="way in ways" :key="way.key" :label="way.name" :value="way.key"></el-option>
        </el-select>
        有效期：
        <el-date-picker v-model="searchTaxCutting.starttime" type="date" placeholder="请选择日期" size="small" style="width:150px" @change="dateStartTimeChangeClick"></el-date-picker>
        -
        <el-date-picker v-model="searchTaxCutting.endtime" type="date" placeholder="请选择日期" size="small" style="width:150px" @change="dateEndTimeChangeClick"></el-date-picker>
        <el-button size="small" type="primary" @click="searchTaxCuttingClick" style="width: 60px;">搜索</el-button>
      </div>
      <!-- 列表 -->
      <el-table :data="taxCuttingTable" tooltip-effect="dark" highlight-current-row :height="clientHeight" @selection-change="onSelectionChange" v-loading="dataLoading">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="expand" class="column-a">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand" label-width="120px">
              <el-form-item label="代码">
                <span>{{ props.row.code }}</span>
              </el-form-item>
              <el-form-item label="减免税大类">
                <span>{{ props.row.largetype }}</span>
              </el-form-item>
              <el-form-item label="减免税小类">
                <span>{{ props.row.smalltype }}</span>
              </el-form-item>
              <el-form-item label="减免税方式">
                <span>{{ props.row.way }}</span>
              </el-form-item>
               <el-form-item label="有效期">
                <span>{{ props.row.validitydate }}</span>
              </el-form-item>
              <el-form-item label="政策文件" style="width:100%;">
               <a @click="lookPolicyPaperClick(props.row)" class="a-btn">{{props.row.policypapertitle}}</a>
              </el-form-item>
              <!--<el-form-item label="政策文件内容" style="width:100%;">
                <p style="text-indent:35px;">{{ props.row.policypapercontent }}</p>
              </el-form-item> -->
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="code" show-overflow-tooltip min-width="15%" label="代码"></el-table-column>
        <el-table-column prop="largetype" show-overflow-tooltip min-width="15%" label="减免税大类"></el-table-column>
        <el-table-column prop="smalltype" show-overflow-tooltip min-width="15%" label="减免税小类"></el-table-column>
        <el-table-column prop="way" show-overflow-tooltip min-width="15%" label="减免税方式"></el-table-column>
        <el-table-column show-overflow-tooltip min-width="35%" label="政策文件">
           <template slot-scope="scope">
             <a @click="lookPolicyPaperClick(scope.row)" class="a-btn">{{scope.row.policypapertitle}}</a>
           </template>
        </el-table-column>
        <el-table-column prop="validitydate" show-overflow-tooltip min-width="20%" label="有效期"></el-table-column>
      </el-table>
      <!--分页 -->
      <div class="page-wrap">
        <el-pagination class="page" @size-change="sizeChangeHandler" @current-change="currentChangeHandler" :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" :total="total" layout="total, sizes, prev, pager, next">
        </el-pagination>
      </div>
    </div>
    <!-- 新建、编辑 -->
    <el-dialog :title="showTitleMode === 0 ? '新建' : '编辑'" :visible.sync="showAddDialog">
      <el-form label-width="120px" :model="tmpTaxCutting" :rules="taxCuttingRules" ref="taxCuttingForm">
        <el-form-item prop="largetype" label="减免税大类：">
          <el-select  v-model="tmpTaxCutting.largetype" size="small" clearable>
            <el-option  v-for="largetype in largetypes" :key="largetype.key" :label="largetype.name" :value="largetype.key"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="smalltype" label="减免税小类：">
          <el-select  v-model="tmpTaxCutting.smalltype" size="small" clearable>
            <el-option  v-for="smalltype in smalltypes" :key="smalltype.key" :label="smalltype.name" :value="smalltype.key"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="smalltype" label="减免税方式：">
          <el-select  v-model="tmpTaxCutting.way" size="small" clearable>
            <el-option v-for="way in ways" :key="way.key" :label="way.name" :value="way.key"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="validitydate" label="有效期：">
          <el-date-picker v-model="tmpTaxCutting.validitydate" type="daterange" placeholder="请选择日期" size="small" @change="dateValidityDateChangeClick"></el-date-picker>
        </el-form-item>
        <el-form-item prop="policypapertitle" label="政策文件标题：">
          <el-input placeholder="请输入政策文件标题" v-model="tmpTaxCutting.policypapertitle" class="width-400"></el-input>
        </el-form-item>
        <el-form-item prop="policypapercontent" label="政策文件内容：">
          <el-input placeholder="请输入政策文件内容" type="textarea" v-model="tmpTaxCutting.policypapercontent" class="width-400 content"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showAddDialog = false">取 消</el-button>
        <el-button type="primary" @click="confrimAddClick">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 政策文件查看 -->
    <el-dialog title="查看政策文件" :visible.sync="showLookDialog">
      <el-card class="box-card look-card">
        <div slot="header" class="clearfix">
          <strong style="font-size: 18px;text-align:center; ">{{tmpTaxCutting.policypapertitle}}</strong>
        </div>
        <div style="text-indent:35px">
          {{tmpTaxCutting.policypapercontent}}
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
import './mock/taxCutting.js'
//require('./mock/gossip.js')

export default {
    data() {
        return {
          clientWidth: 0,
          showLookDialog: false,
          selectedRows: [],
          taxCuttingRules: {
            largetype: [
              {
                trigger: 'change', required: true,
                validator: (rule, value, callback) => {
                  if (value) {
                    callback();
                  } else {
                    callback(new Error('请选择减免税大类'));
                  }
                }
              }
            ],
            smalltype: [
              {
                trigger: 'change', required: true,
                validator: (rule, value, callback) => {
                  if (value) {
                    callback();
                  } else {
                    callback(new Error('请选择减免税小类'));
                  }
                }
              }
            ],
            way: [
              {
                trigger: 'change', required: true,
                validator: (rule, value, callback) => {
                  if (value) {
                    callback();
                  } else {
                    callback(new Error('请选择减免税方式'));
                  }
                }
              }
            ],
            validitydate: [
              {trigger: 'change', required: true,
                validator: (rule, value, callback) => {
                  if (value) {
                    callback();
                  } else {
                    callback(new Error('请选择有效期'));
                  }
                }
              }
            ],
            policypapertitle: [
              { required: true, message: '请输入政策文件标题', trigger: 'blur' },
              { min: 1, max: 400, message: '长度在 1 到 400 个字符', trigger: 'blur' }
            ],
            policypapercontent: [
              { required: true, message: '请输入政策文件内容', trigger: 'blur' },
              { min: 1, max: 4000, message: '长度在 1 到 4000 个字符', trigger: 'blur' }
            ],
          },
          showTitleMode: 0, // 0 新建 1 编辑
          showAddDialog: false, //新建dialog显示状态
          tmpTaxCutting: {},
          searchTaxCutting: {
            largetype: '',
            smalltype: '',
            way: '',
            starttime: '',
            endtime: ''
          }, //搜索
          dataLoading: false,
          ways: [], //减免方式
          smalltypes: [], //减免税小类
          largetypes: [], //减免税大类
          currentPage: 1, //当前页
          pageSize: 10, //每页数
          clientHeight: 0,
          taxCuttingTable: [], //减免税列表数据
          total: 0, //总行数
          pageSizes: [10,20,30], //每页分页数量
        }
    },
    methods: {
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
            taxCuttingAPI.addTaxCuttingData(this.tmpTaxCutting).then(data => {
              this.taxCuttingTable = [
                {
                  id: data.id,
                  code: data.code,
                  largetype: this.tmpTaxCutting.largetype,
                  smalltype: this.tmpTaxCutting.smalltype,
                  way: this.tmpTaxCutting.way,
                  policypapertitle: this.tmpTaxCutting.policypapertitle,
                  policypapercontent: this.tmpTaxCutting.policypapercontent,
                  validitydate: this.tmpTaxCutting.validitydate,
                },
                ...this.taxCuttingTable
              ]
              if(data.status === 1) {
                this.showAddDialog = false;
                this.$message.success(data.message);
              }else {
                this.$message.error(data.message);
              }
            })
          }else if(this.showTitleMode === 1) {
            taxCuttingAPI.editTaxCuttingData(this.tmpTaxCutting).then(data => {
              let index = this.taxCuttingTable.findIndex(val => val.id === this.tmpTaxCutting.id);
                this.taxCuttingTable = [
                  ...this.taxCuttingTable.slice(0, index),
                  this.tmpTaxCutting,
                  ...this.taxCuttingTable.slice(index + 1)
                ];
              if(data.status === 1) {
                 this.showAddDialog = false;
                 this.$message.success(data.message);
              }else {
                this.$message.error(data.message);
              }
            })
          }
        }).catch(() => {
           this.$message.error('没有正确填写表单项');
        })
      },
      //编辑
      editTaxCuttingClick() {
        this.showTitleMode = 1;
        this.tmpTaxCutting = Object.assign({}, this.selectedRows[0]);
        this.showAddDialog = true;
      },
      //新建
      addTaxCuttingClick() {
        this.showTitleMode = 0;
        this.tmpTaxCutting = {
          id: '',
          code: '',
          largetype: '',
          smalltype: '',
          way: '',
          validitydate: '',
          starttime: '',
          endtime: '',
          policypapertitle: '',
          policypapercontent: ''
        },
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
              if (data.status == 1) {
                this.taxCuttingTable = this.taxCuttingTable.filter(val => !rowIds.includes(val.id));
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
        this.searchTaxCutting.starttime = this.formatDate(new Date(this.searchTaxCutting.starttime), 'yyyy-MM-dd');
      },
      //截止时间格式转换事件
      dateEndTimeChangeClick() {
        this.searchTaxCutting.endtime = this.formatDate(new Date(this.searchTaxCutting.endtime), 'yyyy-MM-dd');
      },
      //有效期
      dateValidityDateChangeClick() {
        this.tmpTaxCutting.starttime = this.formatDate(new Date(this.tmpTaxCutting.validitydate[0]), 'yyyy-MM-dd');
        this.tmpTaxCutting.endtime = this.formatDate(new Date(this.tmpTaxCutting.validitydate[1]), 'yyyy-MM-dd');
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
        this.dataLoading = true;
        taxCuttingAPI.getTaxCuttingData(this.currentPage,this.pageSize,this.searchTaxCutting.largetype,this.searchTaxCutting.smalltype,this.searchTaxCutting.way,this.searchTaxCutting.starttime,this.searchTaxCutting.endtime).then(data => {
          this.taxCuttingTable = data.data;
          this.total = data.total;
          this.dataLoading = false;
        })
      },
      //减免税大类数据加载
      getLargeTypesData() {
        taxCuttingAPI.getLargeTypesData().then(data => {
          this.largetypes = data.data;
        })
      },
      //减免税小类数据加载
      getSmallTypesData() {
        taxCuttingAPI.getSmallTypesData().then(data => {
          this.smalltypes = data.data;
        })
      },
      //减免方式数据加载
      getWaysData() {
        taxCuttingAPI.getWaysData().then(data => {
          this.ways = data.data;
        })
      },
    },
    created() {
      this.clientWidth = document.documentElement.clientWidth - 200;
    this.clientHeight = document.documentElement.clientHeight - 230;
      this.getTaxCuttingData();
      this.getLargeTypesData();
      this.getSmallTypesData();
      this.getWaysData();
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
</style>
