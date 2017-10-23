<template>
  <div>
    <el-toolbar>
      <el-button class="z-toolbar-btn" :plain="true" @click="addClick">
        <i class="fa fa-plus"></i>添加</el-button>
          <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0" @click="editClick">
            <i class="fa fa-edit"></i>编辑</el-button>
            <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0" @click="deleteClick">
        <i class="fa fa-remove"></i>删除</el-button>
    </el-toolbar>
    <div class="main-content-wrap">
      <div class="search-bar">
        <el-input style="width:200px" size="small" v-model="searchword"></el-input>
        <el-button size="small" type="primary" @click="getDeclarationData" style="width:60px;">搜索</el-button>
      </div>
      <el-table :data="SKUData" v-loading="dataLoading" tooltip-effect="dark" style="width:100%" :height="clientHeight" highlight-current-row @selection-change="onSelectionChange">
        <el-table-column type="index" width="70px" label="序号"></el-table-column>
        <el-table-column type="selection" width="60px" align="center"></el-table-column>
        <el-table-column prop="SN" min-width="90px" label="商品编号"></el-table-column>
        <el-table-column prop="goodsType" min-width="100px" label="商品类型"></el-table-column>
        <el-table-column prop="name" min-width="200px" label="商品名称"></el-table-column>
        <el-table-column prop="spec" min-width="80px" label="商品规格"></el-table-column>
      </el-table>
      <div class="page-wrap">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next" :total="total">
        </el-pagination>
      </div>
    </div>
      <el-dialog :title="editMode==1? '编辑商品信息': '添加商品'" :visible.sync="SKUDialogModal" :close-on-click-modal="false">
      <el-form label-position="right" :model="tmpSKU" inline label-width="200px">
        <el-form-item label="商品编号：">
          <el-input class="e-input" type="textarea" :rows="3" v-model="tmpSKU.SN"></el-input>
        </el-form-item>
        <el-form-item label="商品类型：">
          <el-input class="e-input" v-model="tmpSKU.goodsType"></el-input>
        </el-form-item>
        <el-form-item label="商品名称：">
          <el-input class="e-input" v-model="tmpSKU.name"></el-input>
        </el-form-item>
        <el-form-item label="商品规格：">
          <el-input class="e-input" v-model="tmpSKU.spec"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="SKUDialogModal = false">取 消</el-button>
        <el-button type="primary" @click="SKUDialogConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import packinglistAPI from './api/packinglistAPI.js';
//import '../mock/declaration.js';

export default {
  data() {
    return {
      tmpSKU: {},
      SKUData: [],
      dataLoading: false,
      SKUDialogModal: false,
      editMode: 1,
      selectedRows: [],
      clientHeight: 0,
      packinglistData: [],
      currentPage: 1,
      pageSizes: [10, 20, 50],
      pageSize: 10,
      total: 0,
    };
  },
  methods: {
    getSKUData() {},
    addClick() {
      this.editMode = 0;
      this.tmpSKU = {};
      this.SKUDialogModal = true;
    },
    editClick() {},
    deleteClick() {},
    SKUDialogConfirm() {},
  },
  created() {
    this.clientHeight = document.documentElement.clientHeight - 200;
    this.getSKUData();
  },
  props: ['declarationID', 'declarationType'],
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
</style>
