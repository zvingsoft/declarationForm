<template>
  <div>
    <el-table :data="packinglistData" tooltip-effect="dark" class="pack-table" highlight-current-row @row-click="rowClick">
      <el-table-column type="index" label="项号" width="60px"></el-table-column>
      <el-table-column prop="id" min-width="90px" label="商品编号"></el-table-column>
      <el-table-column prop="name" min-width="200px" label="商品名称"></el-table-column>
      <el-table-column prop="amount" min-width="80px" label="数量"></el-table-column>
      <el-table-column prop="singleprice" min-width="60px" label="单价"></el-table-column>
      <el-table-column prop="totalprice" min-width="60px" label="总价"></el-table-column>
      <el-table-column v-if="declarationType == 'import'" min-width="80px" prop="productcountry" label="原产国"></el-table-column>
      <el-table-column v-else prop="productcountry" min-width="80px" label="最终目的国"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import packinglistAPI from '../api/packinglistAPI.js';
//import '../mock/declaration.js';

export default {
  data() {
    return {
      packinglistData: []
    }
  },
  watch: {
    declarationID() {
      packinglistAPI.getPackingList(this.declarationID).then(data => {
        this.packinglistData = data.data;
      })
    }
  },
  mounted() {
    packinglistAPI.getPackingList(this.declarationID).then(data => {
      this.packinglistData = data.data;
    })
  },
  methods: {
    rowClick(row) {
      this.$emit('row-click', row);
    }
  },
  props: [
    'declarationID',
    'declarationType'
  ]
}
</script>

<style scoped>
.pack-table {
  font-size: 10px;
  min-width: 100%;
}
</style>
