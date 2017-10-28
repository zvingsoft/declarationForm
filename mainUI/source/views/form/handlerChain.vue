<template>
     <div style="width:100%;text-align:center; margin:auto;">
      <el-form label-position="left" :model="searchDeclaration" label-width="200px" class="e-form">
        <div style="padding-top:20px;width:100%; margin:auto;overflow:hidden;text-align:left;">
          <div style=" font-size: 30px; font-weight: bold; margin-left: 10%; padding: 20px 0 5px 0;">处理链示例</div>
          <div style=" width: 80%;margin-left: 10%;padding: 20px 0 0 0;border-top: 2px solid #ccc;border-radius: 4px;"></div>
        </div>
        <div style="width:70%;margin:auto;text-align:left;margin-left:15%;">
          <div class="form-title">基本信息</div>
          <div class="form-panel">
             <el-form-item label="预录入编号：">
              <el-input class="s-input" v-model="searchDeclaration.preentryNumber"></el-input>
            </el-form-item>
            <el-form-item label="海关编号：">
              <el-input class="s-input" v-model="searchDeclaration.customsNumber"></el-input>
          </div>
           </div>
       </el-form>
     </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {},
    created() {},
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

.page-wrap {
    width: 100%;
    text-align: right;
    position: relative;
    top: 5px;
    padding-right: 10px;
}

.e-input {
    width: 270px;
}

.search-select {
    width: 150px;
}

.form-title {
    font-size: 24px;
    font-weight: bold;
    margin-left: 6%;
    padding: 20px 0 5px 0;
}

.form-panel {
    width: 80%;
    margin-left: 5%;
    padding: 20px 0 0 0;
    border-top: 2px solid #ccc;
    border-radius: 4px;
}

.s-input {
    width: 400px;
}

.search-form-title {
    padding: 20px 0;
}

.packinglist-panel {
    width: 80%;
    margin-left: 5%;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
}
</style>
