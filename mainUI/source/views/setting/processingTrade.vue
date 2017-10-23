<template>
  <div>
    <!-- 工具条 -->
    <el-toolbar>
      <el-button @click="ptAddClick">
        <i class="fa fa-plus" aria-hidden="true"></i> 新建</el-button>
      <el-button @click="ptEditClick" :disabled="ptSelectedRows.length !== 1">
        <i class="fa fa-edit" aria-hidden="true"></i> 编辑</el-button>
      <el-button @click="ptDelClick" :disabled="ptSelectedRows.length < 1">
        <i class="fa fa-trash-o" aria-hidden="true"></i> 删除</el-button>
      <el-button @click="ptViewGoodsClick" :disabled="ptSelectedRows.length !== 1">
        <i class="fa fa-eye" aria-hidden="true"></i> 查看商品</el-button>
    </el-toolbar>
    <div class="main-content-wrap">
      <!-- 搜索工具条 -->
      <div class="search-bar fr">
        &nbsp; &nbsp;货号:
        <el-input type="text" v-model="searchModel.sku" size="small" style="width: 150px;"></el-input>
        &nbsp; &nbsp;接单企业:
        <el-input type="text" v-model="searchModel.processCompanyName" size="small" style="width: 150px;"></el-input>
        &nbsp; &nbsp;委托企业:
        <el-input type="text" v-model="searchModel.commissionedCompnayName" size="small" style="width: 150px;"></el-input>
        &nbsp; &nbsp;
        <el-button @click="loadProcessingTradeList" type="primary" size="small" style="width: 60px;">搜索</el-button>
      </div>
      <!-- 列表 -->
      <el-table class="content-table" ref="ptListTable" highlight-current-row :data="ptListData" tooltip-effect="dark" @selection-change="ptOnSelectionChange" @row-dblclick="dbptEditClick">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand" label-width="80px">
              <el-form-item label="货号" style="width:50%">
                <span>{{props.row.sku}}</span>
              </el-form-item>
              <el-form-item label="限额">
                <span>{{props.row.amount}}</span>
              </el-form-item>
              <el-form-item label="己用量" style="width:50%">
                <span>{{props.row.used}}</span>
              </el-form-item>
              <el-form-item label="接单企业" style="">
                <span>{{props.row.processCompanyName}}</span>
              </el-form-item>
              <el-form-item label="委托企业" style="width:50%">
                <span>{{props.row.commissionedCompnayName}}</span>
              </el-form-item>

              <el-form-item label="合同备案" style="">
                <span>
                  <el-button @click.native.prevent="contractFileView" type="text">
                    查看文件
                  </el-button>
                </span>
              </el-form-item>
              <el-form-item label="料件备案" style="width:50%">
                <span>
                  <el-button @click.native.prevent="materialFileView" type="text">
                    查看文件
                  </el-button>
                </span>
              </el-form-item>
              <el-form-item label="报关单" style="">
                <span>
                  <el-button @click.native.prevent="feclarationFileView" type="text">
                    查看文件
                  </el-button>
                </span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="sku" label="货号" width="">
          <template slot-scope="scope">
                <a @click="dbptEditClick(scope.row)" class="a-btn">{{scope.row.sku}}</a>
          </template>
        </el-table-column>
        <el-table-column prop="amount" label="限额" width=""></el-table-column>
        <el-table-column prop="used" label="己用量" width=""></el-table-column>
        <el-table-column prop="processCompanyName" label="接单企业" width=""></el-table-column>
        <el-table-column prop="commissionedCompnayName" label="委托企业" width=""></el-table-column>

        <el-table-column label="合同备案" width="">
          <template slot-scope="scope">
            <el-button @click.native.prevent="contractFileView" type="text">
              查看文件
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="料件备案" width="">
          <template slot-scope="scope">
            <el-button @click.native.prevent="materialFileView" type="text">
              查看文件
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="报关单" width="">
          <template slot-scope="scope">
            <el-button @click.native.prevent="feclarationFileView" type="text">
              查看文件
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="fr" style="margin-top:10px;">
        <el-pagination @size-change="ptHandleSizeChange" @current-change="ptHandleCurrentChange" :current-page="ptCurrentPage" :page-sizes="ptPageSizes" :page-size="ptPageSize" :total="ptTotal" layout="total, sizes, prev, pager, next"></el-pagination>
      </div>
    </div>
    <!-- 新建、编辑框 -->
    <el-dialog :title="editMode===1?'新建':'编辑'" :visible.sync="addAndEditDialogIsShow">
      <el-form :model="ptDataModel" :rules="ptDataRules" ref="ptDataRef" label-width="160px" style="height:400px;overflow-y:scroll;overflow-x:hidden;">
        <el-form-item label="货号" prop="sku">
          <el-select v-model="sku" filterable multiple class="businesstype-select" @change="onProcessCompanyChange" style="width:320px">
            <el-option v-for="item in goodsList" :key="item.sn" :label="item.sn" :value="item.sn">
              <span style="float: left">{{ item.sn }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px;margin-right: 20px;">{{ item.name }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="限额" prop="amount">
          <el-input-number v-model="ptDataModel.amount" :min="0" style="width:320px"></el-input-number>
        </el-form-item>
        <el-form-item label="己用量" prop="used">
          <el-input-number v-model="ptDataModel.used" :min="0" style="width:320px"></el-input-number>
        </el-form-item>
        <el-form-item label="接单企业ID" prop="processCompany" v-show="false">
          <el-input type="text" v-model="ptDataModel.processCompany" auto-complete="off" style="width:320px"></el-input>
        </el-form-item>
        <el-form-item label="接单企业" prop="processCompanyName">
          <el-select v-model="ptDataModel.processCompanyName" :multiple="false" class="businesstype-select" @change="onProcessCompanyChange" style="width:320px">
            <el-option v-for="item in processCompanyList" :key="item.name" :label="item.name" :value="item.name">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="委托企业" prop="commissionedCompnayName">
          <el-input type="text" v-model="ptDataModel.commissionedCompnayName" auto-complete="off" style="width:320px"></el-input>
        </el-form-item>
        <el-form-item label="合同备案" prop="contract" v-show="editMode===1">
          <el-upload :on-success="onUploadSuccess" class="upload-file" action="" :multiple="false" :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="料件备案" prop="material" v-show="editMode===1">
          <el-upload :on-success="onUploadSuccess" class="upload-file" action="" :multiple="false" :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="报关单" prop="feclaration" v-show="editMode===1">
          <el-upload :on-success="onUploadSuccess" class="upload-file" action="" :multiple="false" :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="合同备案" v-show="editMode===2">
          <el-button @click.native.prevent="contractFileView">
            查看文件
          </el-button>
        </el-form-item>
        <el-form-item label="料件备案" v-show="editMode===2">
          <el-button @click.native.prevent="materialFileView">
            查看文件
          </el-button>
        </el-form-item>
        <el-form-item label="报关单" v-show="editMode===2">
          <el-button @click.native.prevent="feclarationFileView">
            查看文件
          </el-button>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="addAndEditDialogIsShow=false">取 消</el-button>
        <el-button type="primary" @click="addAndEditOkHandler">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 文件查看框 -->
    <el-dialog :title="'文件查看'" :visible.sync="fileDialogIsShow" class="file-dialog">
      <img src="http://www.qingshengjiuye.com/UploadFiles/201610271722212414737.jpg" :style="{height:900+'px',overflowY:'scroll',overflowX:'hidden', paddingRight:'15px'}">
    </el-dialog>
    <!-- 商品信息框 -->
    <el-dialog :title=" '商品信息' " :visible.sync="goodsDialogIsShow">
      <div class="main-content-wrap">
        <el-table ref="goodsListTable" highlight-current-row :data="goodsList" tooltip-effect="dark" @selection-change="goodsOnSelectionChange">
          <el-table-column min-width="4%" label="编号" prop="sn"></el-table-column>
          <el-table-column min-width="4%" label="商品类型" prop="goodsType"></el-table-column>
          <el-table-column min-width="4%" label="商品名称" prop="name"></el-table-column>
          <el-table-column min-width="4%" label="商品规格" prop="spec"></el-table-column>
          <el-table-column min-width="4%" label="商品单位" prop="unit"></el-table-column>
        </el-table>
      </div>
      <div slot="footer">
        <el-button type="primary" @click="goodsDialogIsShow=false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import processingTradeAPI from './api/processingTradeAPI.js';
export default {
  data() {
    return {
      clientHeight: 0,
      clientWidth: 0,
      ptListData: [],
      editMode: 1, //新建1，编辑2
      addAndEditDialogIsShow: false,
      fileDialogIsShow: false,
      fileUploadDialogIsShow: false,
      goodsDialogIsShow: false,
      ptSelectedRows: [],
      ptCurrentPage: 1,
      ptPageSizes: [5, 10, 15, 20],
      ptPageSize: 10,
      ptTotal: 30,
      ptDataModel: {
        sku: [],
        amount: '',
        used: '',
        processCompany: '',
        processCompanyName: '',
        commissionedCompnayName: '',
      },
      searchModel: {
        sku: '',
        processCompanyName: '',
        commissionedCompnayName: '',
      },
      ptDataRules: {
        // sku: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
      },
      processCompanyList: [],
      goodsList: [],
      sku: [],
    };
  },
  methods: {
    ptOnSelectionChange(selection) {
      this.ptSelectedRows = selection;
    },
    loadProcessingTradeList() {
      processingTradeAPI
        .getProcessingTradeList(this.ptCurrentPage, this.ptPageSize)
        .then(data => {
          this.ptListData = data;
          if (this.searchModel.sku !== '') {
            this.ptListData = this.ptListData.filter(
              val => val.sku.indexOf(this.searchModel.sku) != -1
            );
          }
          if (this.searchModel.processCompanyName !== '') {
            this.ptListData = this.ptListData.filter(
              val =>
                val.processCompanyName.indexOf(
                  this.searchModel.processCompanyName
                ) != -1
            );
          }
          if (this.searchModel.commissionedCompnayName !== '') {
            this.ptListData = this.ptListData.filter(
              val =>
                val.commissionedCompnayName.indexOf(
                  this.searchModel.commissionedCompnayName
                ) != -1
            );
          }
          this.ptTotal = this.ptListData.length;
          this.ptListData = this.ptListData.slice(
            (this.ptCurrentPage - 1) * this.ptPageSize,
            this.ptPageSize * this.ptCurrentPage
          );
          this.dealSKU();
        });
    },
    dealSKU() {
      this.ptListData.forEach(value => {
        this.sku = value.sku.split(',');
      }, this);
    },
    ptAddClick() {
      this.loadCompanyList();
      this.loadGoodsList();
      this.editMode = 1;
      this.sku = [];
      this.ptDataModel = {
        id: '',
        sku: [],
        amount: '',
        used: '',
        processCompany: '',
        processCompanyName: '',
        commissionedCompnayName: '',
      };
      this.addAndEditDialogIsShow = true;
    },
    ptEditClick() {
      this.loadCompanyList();
      this.loadGoodsList();
      this.editMode = 2;
      this.ptDataModel = Object.assign({}, this.ptSelectedRows[0]);
      this.sku = this.ptDataModel.sku.split(',');
      this.addAndEditDialogIsShow = true;
    },
    //双击
    dbptEditClick(row) {
      this.loadCompanyList();
      this.loadGoodsList();
      this.editMode = 2;
      this.ptDataModel = Object.assign({}, row);
      this.sku = this.ptDataModel.sku.split(',');
      this.addAndEditDialogIsShow = true;
    },
    loadCompanyList() {
      processingTradeAPI.getCompanyList().then(data => {
        this.processCompanyList = data;
      });
    },
    loadGoodsList() {
      processingTradeAPI.getGoodsList().then(data => {
        this.goodsList = data;
      });
    },
    ptDelClick() {
      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          let rowIds = [];
          this.ptSelectedRows.forEach(function(row) {
            rowIds.push(row.id);
          });
          return rowIds;
        })
        .then(ids => {
          if (!ids) {
            return;
          }
          processingTradeAPI.deleteDataList(ids).then(data => {
            this.ptSelectedRows = [];
            if (data === 1) {
              this.ptListData = this.ptListData.filter(
                val => !ids.includes(val.id)
              );
              this.loadProcessingTradeList();
              this.ptTotal = this.ptTotal - ids.length;
              this.$notify.success({
                title: '成功',
                message: '删除成功',
                duration: 2000,
              });
            } else {
              this.$notify.fail({
                title: '失败',
                message: '删除失败',
                duration: 2000,
              });
            }
          });
        });
    },
    ptViewGoodsClick() {
      let skus = this.ptSelectedRows[0].sku.split(',');
      this.goodsList = this.goodsList.filter(val => {
        let flag = false;
        let goodsno = val.sn;
        skus.forEach(value => {
          flag = value === goodsno || flag;
        });
        return flag;
      });
      this.goodsDialogIsShow = true;
    },
    contractFileView() {
      this.fileDialogIsShow = true;
    },
    materialFileView() {
      this.fileDialogIsShow = true;
    },
    feclarationFileView() {
      this.fileDialogIsShow = true;
    },
    addAndEditOkHandler() {
      let validateForm = () => {
        return new Promise((resolve, reject) => {
          this.$refs['ptDataRef'].validate(valid => {
            if (valid) {
              return resolve(true);
            }
            return reject(false);
          });
        });
      };

      let addForm = () => {
        this.ptDataModel.id = Math.round(Math.random() * 10000);
        this.ptDataModel.sku = this.sku.join(',');
        return processingTradeAPI.addFormData(this.ptDataModel).then(data => {
          this.loadProcessingTradeList();
          return data;
        });
      };

      let editForm = () => {
        this.ptDataModel.sku = this.sku.join(',');
        return processingTradeAPI.editFormData(this.ptDataModel).then(data => {
          this.loadProcessingTradeList();
          return data;
        });
      };

      validateForm()
        .then(() => {
          if (this.editMode === 1) {
            return addForm();
          }
          if (this.editMode === 2) {
            return editForm();
          }
        })
        .then(res => {
          if (res === 1) {
            this.addAndEditDialogIsShow = false;
            this.$notify({
              title: '成功',
              message: '保存成功',
              type: 'success',
              duration: 2000,
            });
          } else {
            this.$notify.error({
              title: '失败',
              message: '保存失败',
              duration: 2000,
            });
          }
        })
        .catch(e => {
          console.log(e);
          this.$notify.error({
            title: '输入错误',
            message: '没有正确填写表单项！',
            duration: 2000,
          });
        });
    },
    onProcessCompanyChange(val1) {
      this.processCompanyList.forEach(value => {
        if (value.name === val1) {
          this.ptDataModel.processCompany = value.id;
        }
      }, this);
    },
    fileViewOkHandler() {
      this.fileDialogIsShow = false;
      this.$notify({
        title: '成功',
        message: '保存成功',
        type: 'success',
        duration: 2000,
      });
    },
    ptHandleSizeChange(val) {
      this.ptPageSize = val;
      this.loadProcessingTradeList();
    },
    ptHandleCurrentChange(val) {
      this.ptCurrentPage = val;
      this.loadProcessingTradeList();
    },
  },
  created() {
    this.loadProcessingTradeList();
    this.loadGoodsList();
    this.clientHeight = document.documentElement.clientHeight - 270;
    this.clientWidth = document.documentElement.clientWidth - 250;
    let num = Math.floor(this.clientHeight / 40) - 1;
    this.ptPageSize = Math.floor(num / 5) * 5;
    this.ptPageSizes = [
      this.ptPageSize,
      this.ptPageSize * 2,
      this.ptPageSize * 4,
    ];
  },
};
</script>

<style scoped>
.search-bar {
  padding-bottom: 10px;
}

.main-content-wrap {
  padding: 10px;
}

.file-dialog {
  text-align: center;
}
</style>
