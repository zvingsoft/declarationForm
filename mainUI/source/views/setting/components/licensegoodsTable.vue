<template>
  <div>
    <el-table :data="licensegoodsData" tooltip-effect="dark" class="pack-table" highlight-current-row @row-click="rowClick">
      <el-table-column prop="specification" min-width="150px" label="规格、等级"></el-table-column>
      <el-table-column prop="unit" min-width="100px" label="单位"></el-table-column>
      <el-table-column prop="quantity" min-width="100px" label="数量"></el-table-column>
      <el-table-column prop="unitprice" min-width="150px" label="单价（USD）"></el-table-column>
      <el-table-column prop="amount" min-width="150px" label="总值（USD）"></el-table-column>
      <el-table-column prop="amountinusd" min-width="150px" label="总值折美元"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import licenseAPI from '../api/licenseAPI.js';
//import '../mock/license.js';

export default {
  data() {
    return {
      licensegoodsData: [],
    };
  },
  watch: {
    declarationID() {
      licenseAPI.getLicenseGoods(this.licenseID).then(data => {
        this.licensegoodsData = data.data;
      });
    },
  },
  mounted() {
    licenseAPI.getLicenseGoods(this.licenseID).then(data => {
      this.licensegoodsData = data.data;
    });
  },
  methods: {
    rowClick(row) {
      this.$emit('row-click', row);
    },
  },
  props: ['licenseID'],
};
</script>

<style scoped>
.pack-table {
  font-size: 10px;
  min-width: 100%;
}
</style>
