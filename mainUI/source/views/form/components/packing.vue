<template>
  <div>
    <div style="height:50px;background-color:#f5f5f5; padding:5px;" v-if="!onlyView">
      <el-button class="z-toolbar-btn" :plain="true" @click="addClick">
        <i class="fa fa-plus"></i>添加</el-button>
          <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0" @click="editClick">
            <i class="fa fa-edit"></i>编辑</el-button>
            <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0" @click="deleteClick">
        <i class="fa fa-remove"></i>删除</el-button>
    </div>
    <el-table :data.sync="packinglistData" tooltip-effect="dark" class="pack-table" highlight-current-row @selection-change="onSelectionChange" @row-dblclick="rowDBClick">
      <el-table-column type="index" label="项号" width="60px"></el-table-column>
      <el-table-column type="selection"  width="60px" v-if="!onlyView"></el-table-column>
      <el-table-column prop="sku" min-width="90px" label="商品编号"></el-table-column>
      <el-table-column prop="name" min-width="200px" label="商品名称"></el-table-column>
      <el-table-column prop="amount" min-width="80px" label="数量"></el-table-column>
      <el-table-column prop="singlePrice" min-width="60px" label="单价"></el-table-column>
      <el-table-column prop="totalPrice" min-width="60px" label="总价"></el-table-column>
      <el-table-column v-if="declarationType == 'import'" min-width="80px" prop="country" label="原产国"></el-table-column>
      <el-table-column v-else prop="country" min-width="80px" label="最终目的国"></el-table-column>
    </el-table>
    <el-dialog :title="editMode==1? '编辑商品信息': '添加商品'" :visible.sync="packingdetailDialogModal" :close-on-click-modal="false" @open="beforeDialogOpen">
      <el-form label-position="right" ref="packingForm" :model="tmpPacking" label-width="160px">
        <el-form-item label="商品编号：">
          <el-select class="e-input" filterable v-model="tmpPacking.sku" placeholder="请选择" @change="selectChange">
              <el-option v-for="item in SKUData" :key="item.sn" :label="item.sn" :value="item.sn">
                <span style="float: left">{{ item.sn }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.name }}</span>
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="商品名称：">
          <el-input class="e-input" type="textarea" :rows="3" v-model="tmpPacking.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="数量：" prop="amount" :rules="[{ type: 'number', message: '必须为数字值', trigger: 'change'}]">
          <el-input class="e-input" v-model.number="tmpPacking.amount"></el-input>
        </el-form-item>
        <el-form-item label="单价：" prop="singlePrice" :rules="[{ type: 'number', message: '必须为数字值', trigger: 'change'}]">
          <el-input class="e-input" v-model.number="tmpPacking.singlePrice"></el-input>
        </el-form-item>
        <el-form-item label="总价：" prop="totalPrice" :rules="[{ type: 'number', message: '必须为数字值', trigger: 'change'}]">
          <el-input class="e-input" v-model.number="tmpPacking.totalPrice" disabled></el-input>
        </el-form-item>
        <el-form-item v-if="this.declarationType == 'import'" label="原产国：">
          <el-input class="e-input" v-model="tmpPacking.country"></el-input>
        </el-form-item>
        <el-form-item v-else label="最终目的国：">
          <el-input class="e-input" v-model="tmpPacking.country"></el-input>
        </el-form-item>
       </el-form>
      <div slot="footer">
        <el-button @click="packingdetailDialogModal = false">取 消</el-button>
        <el-button type="primary" @click="packingdetailConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import packinglistAPI from '../api/packinglistAPI.js';
import skuAPI from '../../setting/api/skuAPI.js';
//import '../mock/declaration.js';

export default {
  data() {
    return {
      packingdetailDialogModal: false,
      tmpPacking: {},
      selectedRows: [],
      packinglistData: [],
      editMode: 0,
      SKUData: [],
      currencyOption: [
        { key: 'USD', value: '美元' },
        { key: 'RMB', value: '人民币' },
        { key: 'euro', value: '欧元' },
        { key: 'yen', value: '日元' },
        { key: 'pound', value: '英镑' },
      ],
    };
  },
  watch:{
    'tmpPacking.amount':function(){
      this.tmpPacking.totalPrice = this.tmpPacking.amount*this.tmpPacking.singlePrice;
    },
    'tmpPacking.singlePrice':function(){

      this.tmpPacking.totalPrice = this.tmpPacking.amount*this.tmpPacking.singlePrice;
    },
  },
  mounted() {
    skuAPI.getSKU().then(data => {
      this.SKUData = data;
      console.log(data);
    });
  },
  methods: {
    selectChange(val) {
      console.log(val);
      this.SKUData.forEach(o => {
        if (o.sn == val) {
          Vue.set(this.tmpPacking, 'name', o.name + '\n' + o.spec);
        }
      });
    },
    rowDBClick(row) {
      this.editMode = 1;
      this.tmpPacking = Object.assign({}, row);
      this.packingdetailDialogModal = true;
    },
    onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    addClick() {
      this.editMode = 0;
      this.tmpPacking = {
        id: Math.floor(Math.random() * 999999),
        sku: '',
      };
      this.packingdetailDialogModal = true;
    },
    editClick() {
      this.editMode = 1;
      this.tmpPacking = Object.assign({}, this.selectedRows[0]);
      this.packingdetailDialogModal = true;
    },
    deleteClick() {
      let rowIds = [];
      this.selectedRows.forEach(function(row) {
        rowIds.push(row.id);
      });
      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.packinglistData = this.packinglistData.filter(
            val => !rowIds.includes(val.id)
          );
          this.selectedRows = [];
          this.$notify({
            title: '提示',
            message: '删除成功！',
            type: 'success',
            duration: 2000,
          });
        })
        .catch(() => {
          this.$notify.error({
            title: '取消',
            message: '操作取消！',
            duration: 2000,
          });
        });
    },
    packingdetailConfirm() {
      this.$refs['packingForm'].validate(valid => {
        if (valid) {
          if (this.editMode == 0) {
            this.$notify({
              title: '成功',
              message: '添加成功',
              type: 'success',
              duration: 2000,
            });
            this.packinglistData = [
              ...this.packinglistData,
              Object.assign({}, this.tmpPacking),
            ];
          }
          if (this.editMode == 1) {
            this.$notify({
              title: '成功',
              message: '修改成功',
              type: 'success',
              duration: 2000,
            });
            let index = this.packinglistData.findIndex(
              val => val.id === this.tmpPacking.id
            );
            this.packinglistData = [
              ...this.packinglistData.slice(0, index),
              Object.assign({}, this.tmpPacking),
              ...this.packinglistData.slice(index + 1),
            ];
          }
          this.$emit('update:packinglistData', this.packinglistData);
          this.packingdetailDialogModal = false;
        } else {
          this.$notify({
            title: '操作失败',
            message: '请正确填写表单项',
            type: 'error',
            duration: 2000,
          });
          return false;
        }
      });
    },
    rowClick(row) {
      this.$emit('row-click', row);
    },
  },
  props: ['packinglistData', 'declarationType', 'onlyView'],
};
</script>

<style scoped>
.pack-table {
  font-size: 10px;
  min-width: 100%;
}
.e-input {
  width: 270px;
}
</style>
