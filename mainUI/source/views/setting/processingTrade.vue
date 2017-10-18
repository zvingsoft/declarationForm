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
    </el-toolbar>
    <!-- 列表 -->
    <el-table ref="ptListTable" highlight-current-row :data="ptListData" tooltip-effect="dark" @selection-change="ptOnSelectionChange">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="a" label="进口合同号" width=""></el-table-column>
      <el-table-column prop="b" label="进口料件名称" width=""></el-table-column>
      <el-table-column prop="c" label="数量" width=""></el-table-column>
      <el-table-column prop="d" label="价格" width=""></el-table-column>
      <el-table-column prop="e" label="加贸批准证号" width=""></el-table-column>
      <el-table-column prop="f" label="委托商" width=""></el-table-column>
      <el-table-column prop="g" label="委托合同号" width=""></el-table-column>
      <el-table-column prop="h" label="加贸批准证" width="">
        <template scope="scope">
          <el-button @click.native.prevent="fileView1" type="text">
            查看文件
          </el-button>
        </template>
      </el-table-column>
      <el-table-column prop="" label="进口许可证" width="">
        <template scope="scope">
          <el-button @click.native.prevent="fileView2" type="text">
            查看文件
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 新建、编辑框 -->
    <el-dialog :title="editMode===1?'新建':'编辑'" :visible.sync="addAndEditDialogIsShow">

      <div slot="footer">
        <el-button @click="addAndEditDialogIsShow=false">取 消</el-button>
        <el-button type="primary" @click="addAndEditOkHandler">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 文件查看框 -->
    <el-dialog :title="'文件查看'" :visible.sync="fileDialogIsShow">

      <div slot="footer">
        <el-button @click="fileDialogIsShow=false">取 消</el-button>
        <el-button type="primary" @click="fileViewOkHandler">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import './mock/processingTrade.js'
import processingTradeAPI from './api/processingTradeAPI.js';
export default {
  data() {
    return {
      ptListData: [],
      editMode: 1,//新建1，编辑2
      addAndEditDialogIsShow: false,
      fileDialogIsShow: false,
      ptSelectedRows: [],
    }
  },
  methods: {
    ptOnSelectionChange(selection) {
      this.ptSelectedRows = selection
    },
    loadProcessingTradeList() {
      processingTradeAPI.getProcessingTradeList().then(data => {
        this.ptListData = data.data;
      });
    },
    ptAddClick() {
      this.editMode = 1;
      this.addAndEditDialogIsShow = true;
    },
    ptEditClick() {
      this.editMode = 2;
      this.addAndEditDialogIsShow = true;
    },
    ptDelClick() {
      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

      })
    },
    fileView1() {
      this.fileDialogIsShow = true;
    },
    fileView2() {
      this.fileDialogIsShow = true;
    },
    addAndEditOkHandler() {
      this.addAndEditDialogIsShow = false;
      this.$notify({ title: '成功', message: "保存成功", type: 'success', duration: 2000 });
    },
    fileViewOkHandler() {
      this.fileDialogIsShow = false;
      this.$notify({ title: '成功', message: "保存成功", type: 'success', duration: 2000 });
    },
  },
  created() {
    this.loadProcessingTradeList();
  }
}
</script>

<style scoped>

</style>
