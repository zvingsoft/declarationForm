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
        &nbsp; &nbsp;编号:
        <el-input type="text" size="small" style="width: 150px;"></el-input>
        &nbsp; &nbsp;加工企业:
        <el-input type="text" size="small" style="width: 150px;"></el-input>
        &nbsp; &nbsp;委托企业:
        <el-input type="text" size="small" style="width: 150px;"></el-input>
        &nbsp; &nbsp;
        <el-button @click="apSearch" type="primary" size="small" style="width: 60px;">搜索</el-button>
      </div>
      <!-- 列表 -->
      <el-table class="content-table" ref="ptListTable" highlight-current-row :data="ptListData" tooltip-effect="dark" @selection-change="ptOnSelectionChange">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand" label-width="80px">
              <el-form-item label="编号" style="width:50%">
                <span>{{props.row.number}}</span>
              </el-form-item>
              <el-form-item label="加工企业">
                <span>{{props.row.processCorp}}</span>
              </el-form-item>
              <el-form-item label="委托企业" style="width:50%">
                <span>{{props.row.commissionedCorp}}</span>
              </el-form-item>
              <el-form-item label="合同备案">
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
              <el-form-item label="报关单">
                <span>
                  <el-button @click.native.prevent="feclarationFileView" type="text">
                    查看文件
                  </el-button>
                </span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="number" label="编号" width=""></el-table-column>
        <el-table-column prop="processCorp" label="加工企业" width=""></el-table-column>
        <el-table-column prop="commissionedCorp" label="委托企业" width=""></el-table-column>
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
      <el-form :model="ptDataModel" :rules="ptDataRules" ref="ptDataRef" label-width="160px" style="height:400px;overflow-y:hidden;overflow-x:hidden;">
        <el-form-item label="编号" prop="number">
          <el-input type="text" v-model="ptDataModel.number" auto-complete="off" style="width:85%"></el-input>
        </el-form-item>
        <el-form-item label="加工企业" prop="processCorp">
          <el-input type="text" v-model="ptDataModel.processCorp" auto-complete="off" style="width:85%"></el-input>
        </el-form-item>
        <el-form-item label="委托企业" prop="commissionedCorp">
          <el-input type="text" v-model="ptDataModel.commissionedCorp" auto-complete="off" style="width:85%"></el-input>
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
        <el-form-item label="合同备案" prop="contract" v-show="editMode===2">
          <el-button @click.native.prevent="contractFileView">
            查看文件
          </el-button>
        </el-form-item>
        <el-form-item label="料件备案" prop="material" v-show="editMode===2">
          <el-button @click.native.prevent="materialFileView">
            查看文件
          </el-button>
        </el-form-item>
        <el-form-item label="报关单" prop="feclaration" v-show="editMode===2">
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
    <!-- 商品新建、编辑框 -->
    <el-dialog :title="goodsEditMode===1?'新建':'编辑'" :visible.sync="goodsAddAndEditDialogIsShow">
      <el-form :model="goodsDataModel" :rules="goodsDataRules" ref="goodsDataRef" label-width="160px" style="height:400px;overflow-y:scroll;overflow-x:hidden;">
        <el-form-item label="项号" prop="itemNum">
          <el-input type="text" v-model="goodsDataModel.itemNum" auto-complete="off" style="width:85%"></el-input>
        </el-form-item>
        <el-form-item label="商品编号" prop="productNum">
          <el-input type="text" v-model="goodsDataModel.productNum" auto-complete="off" style="width:85%"></el-input>
        </el-form-item>
        <el-form-item label="商品名称、规格型号" prop="nameAndSpecifications">
          <el-input type="text" v-model="goodsDataModel.nameAndSpecifications" auto-complete="off" style="width:85%"></el-input>
        </el-form-item>
        <el-form-item label="数量及单位" prop="quantityAndUnit">
          <el-input type="text" v-model="goodsDataModel.quantityAndUnit" auto-complete="off" style="width:85%"></el-input>
        </el-form-item>
        <el-form-item label="原产国(地区)" prop="originCountry">
          <el-input type="text" v-model="goodsDataModel.originCountry" auto-complete="off" style="width:85%"></el-input>
        </el-form-item>
        <el-form-item label="单价" prop="unitPrice">
          <el-input type="text" v-model="goodsDataModel.unitPrice" auto-complete="off" style="width:85%"></el-input>
        </el-form-item>
        <el-form-item label="总价" prop="totalPrice">
          <el-input type="text" v-model="goodsDataModel.totalPrice" auto-complete="off" style="width:85%"></el-input>
        </el-form-item>
        <el-form-item label="币制" prop="currency">
          <el-input type="text" v-model="goodsDataModel.currency" auto-complete="off" style="width:85%"></el-input>
        </el-form-item>
        <el-form-item label="征免" prop="levy">
          <el-input type="text" v-model="goodsDataModel.levy" auto-complete="off" style="width:85%"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="goodsAddAndEditDialogIsShow=false">取 消</el-button>
        <el-button type="primary" @click="goodsAddAndEditOkHandler">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 文件查看框 -->
    <el-dialog :title="'文件查看'" :visible.sync="fileDialogIsShow">
      <img src="http://www.qingshengjiuye.com/UploadFiles/201610271722212414737.jpg" :style="{height:1205+'px',overflowY:'scroll',overflowX:'hidden', paddingRight:'15px'}">
      <div slot="footer ">
        <el-button @click="fileDialogIsShow=false">取 消</el-button>
        <el-button type="primary " @click="fileViewOkHandler">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 商品信息框 -->
    <el-dialog :title=" '商品信息' " :visible.sync="goodsDialogIsShow" size="large">
      <!-- 工具条 -->
      <el-toolbar>
        <el-button @click="goodsAddClick">
          <i class="fa fa-plus" aria-hidden="true"></i> 新建</el-button>
        <el-button @click="goodsEditClick" :disabled="goodsSelectedRows.length !== 1">
          <i class="fa fa-edit" aria-hidden="true"></i> 编辑</el-button>
        <el-button @click="goodsDelClick" :disabled="goodsSelectedRows.length < 1">
          <i class="fa fa-trash-o" aria-hidden="true"></i> 删除</el-button>
      </el-toolbar>
      <div class="main-content-wrap">
        <el-table ref="goodsListTable" highlight-current-row :data="goodsListData" tooltip-effect="dark" @selection-change="goodsOnSelectionChange">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column min-width="4%" label="项号" prop="itemNum"></el-table-column>
          <el-table-column min-width="8%" label="商品编号" prop="productNum"></el-table-column>
          <el-table-column min-width="20%" label="商品名称、规格型号" prop="nameAndSpecifications"></el-table-column>
          <el-table-column min-width="15%" label="数量及单位" prop="quantityAndUnit"></el-table-column>
          <el-table-column min-width="5%" label="原产国(地区)" prop="originCountry"></el-table-column>
          <el-table-column min-width="5%" label="单价" prop="unitPrice"></el-table-column>
          <el-table-column min-width="5%" label="总价" prop="totalPrice"></el-table-column>
          <el-table-column min-width="5%" label="币制" prop="currency"></el-table-column>
          <el-table-column min-width="5%" label="征免" prop="levy"></el-table-column>
        </el-table>
      </div>
      <div slot="footer">
        <el-button type="primary" @click="goodsDialogIsShow=false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import './mock/processingTrade.js'
import processingTradeAPI from './api/processingTradeAPI.js';
export default {
  data() {
    return {
      clientHeight: 0,
      clientWidth: 0,
      ptListData: [],
      editMode: 1, //新建1，编辑2
      goodsEditMode: 1, //新建1，编辑2
      addAndEditDialogIsShow: false,
      fileDialogIsShow: false,
      fileUploadDialogIsShow: false,
      goodsDialogIsShow: false,
      goodsAddAndEditDialogIsShow: false,
      ptSelectedRows: [],
      goodsSelectedRows: [],
      ptCurrentPage: 1,
      ptPageSizes: [5, 10, 15, 20],
      ptPageSize: 10,
      ptTotal: 30,
      ptDataModel: {
        number: '',
        processCorp: '',
        commissionedCorp: '',
        contract: '',
        material: '',
        feclaration: '',
      },
      goodsDataModel: {
        itemNum: '',
        productNum: '',
        nameAndSpecifications: '',
        quantityAndUnit: '',
        originCountry: '',
        unitPrice: '',
        totalPrice: '',
        currency: '',
        levy: '',
      },
      goodsListData: [],
      ptDataRules: {
        number: [{ required: true, message: '请输入编号', trigger: 'blur' }],
        processCorp: [{ required: true, message: '请输入加工企业', trigger: 'blur' }],
        commissionedCorp: [
          { required: true, message: '请输入委托企业', trigger: 'blur' },
        ],
      },
      goodsDataRules: {
        itemNum: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
        productNum: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
        nameAndSpecifications: [
          { required: true, message: '该项不能为空', trigger: 'blur' },
        ],
        quantityAndUnit: [
          { required: true, message: '该项不能为空', trigger: 'blur' },
        ],
        originCountry: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
        unitPrice: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
        totalPrice: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
        currency: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
        levy: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
      },
    };
  },
  methods: {
    ptOnSelectionChange(selection) {
      this.ptSelectedRows = selection;
    },
    goodsOnSelectionChange(selection) {
      this.goodsSelectedRows = selection;
    },
    loadProcessingTradeList() {
      processingTradeAPI
        .getProcessingTradeList(this.ptCurrentPage, this.ptPageSize)
        .then(data => {
          this.ptListData = data.data;
        });
    },
    loadGoodsList() {
      processingTradeAPI.getGoodsList().then(data => {
        this.goodsListData = data.data;
      });
    },
    ptAddClick() {
      this.editMode = 1;
      this.ptDataModel = {
        number: '',
        processCorp: '',
        commissionedCorp: '',
        contract: '',
        material: '',
        feclaration: '',
      };
      this.addAndEditDialogIsShow = true;
    },
    ptEditClick() {
      this.editMode = 2;
      this.ptDataModel = Object.assign({}, this.ptSelectedRows[0]);
      this.addAndEditDialogIsShow = true;
    },
    ptDelClick() {
      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success',
          duration: 2000,
        });
      });
    },
    goodsAddClick() {
      this.goodsEditMode = 1;
      this.goodsDataModel = {};
      this.goodsAddAndEditDialogIsShow = true;
    },
    goodsEditClick() {
      this.goodsEditMode = 2;
      this.goodsDataModel = Object.assign({}, this.goodsSelectedRows[0]);
      this.goodsAddAndEditDialogIsShow = true;
    },
    goodsDelClick() {
      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success',
          duration: 2000,
        });
      });
    },
    ptViewGoodsClick() {
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
    goodsDialogOkHandler() {
      this.goodsDialogIsShow = false;
      this.$notify({
        title: '成功',
        message: '保存成功',
        type: 'success',
        duration: 2000,
      });
    },
    addAndEditOkHandler() {
      this.addAndEditDialogIsShow = false;
      this.$notify({
        title: '成功',
        message: '保存成功',
        type: 'success',
        duration: 2000,
      });
    },
    goodsAddAndEditOkHandler() {
      this.goodsAddAndEditDialogIsShow = false;
      this.$notify({
        title: '成功',
        message: '保存成功',
        type: 'success',
        duration: 2000,
      });
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
</style>
