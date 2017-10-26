<template>
  <div>
    <div class="search-bar" v-if="!onlyView">
        海关编号：
        <el-input style="width:200px" size="small" v-model="searchWord"></el-input>
        <el-button size="small" type="primary" @click="getDeclarationData" style="width:60px;">搜索</el-button>
      </div>
    <el-table :data="declarationData" v-loading="dataLoading" tooltip-effect="dark" style="width:100%" :height="300" highlight-current-row @selection-change="onSelectionChange">
      <el-table-column type="index" width="70" label="序号" align="center" v-if="onlyView"></el-table-column>
      <el-table-column type="selection" width="60" align="center" v-else></el-table-column>
        <el-table-column prop="customsNumber" show-overflow-tooltip min-width="20%" label="海关编号"></el-table-column>
        <el-table-column prop="declarationUnit" show-overflow-tooltip min-width="30%" label="申报单位"></el-table-column>
        <el-table-column prop="declarationDate" show-overflow-tooltip min-width="15%" label="申报日期"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import taxRegisterAPI from '../api/taxRegisterAPI.js';

export default {
  data() {
    return {
      declarationData: [],
      searchWord: '',
      dataLoading: false,
      selectedRows: [],
    };
  },
  watch: {
    id() {
      if (this.onlyView) {
        this.declarationData = this.data;
      } else {
        this.getDeclarationData();
      }
    },
  },
  mounted() {
    if (this.onlyView) {
      this.declarationData = this.data;
    } else {
      this.getDeclarationData();
    }
  },
  methods: {
    getDeclarationData() {
      let obj = {
        searchWord: this.searchWord,
      };
      this.selectedRows = [];
      taxRegisterAPI.getUnregisterDeclaration(obj).then(data => {
        console.log(data);
        this.declarationData = data;
        if (this.searchWord != '') {
          this.declarationData = [];
          data.forEach(o => {
            if (o.customsNumber.indexOf(this.searchWord) >= 0) {
              this.declarationData.push(o);
            }
          });
        }
      });
    },
    onSelectionChange(selection) {
      this.selectedRows = selection;
      this.$emit('callback', selection);
    },
  },
  props: ['data', 'onlyView', 'id'],
};
</script>

<style scoped>
.search-bar {
  width: 100%;
  text-align: right;
  padding: 5px;
}
</style>
