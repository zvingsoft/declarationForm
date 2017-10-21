<template slot-scope="scope">
  <div :style="{width:clientWidth+'px'}">
    <el-toolbar>
      <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0" @click="passClick()">
        <i class="fa fa-check"></i>审核通过</el-button>
      <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0" @click="notPassClick()">
        <i class="fa fa-remove"></i>审核不通过</el-button>
      <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0" @click="viewClick()">
        <i class="fa fa-search"></i>查看详情</el-button>
    </el-toolbar>
    <div class="main-content-wrap">
      <div class="search-bar">
        排序：
        <el-select size="small" v-model="sort" class="search-select">
          <el-option v-for="item in sortOptions" :key="item.key" :label="item.value" :value="item.key">
          </el-option>
        </el-select>
        审核状态：
        <el-select size="small" v-model="auditStatus" class="search-select">
          <el-option v-for="item in auditStatusOptions" :key="item.key" :label="item.value" :value="item.key">
          </el-option>
        </el-select>
        检索字段：
        <el-select size="small" v-model="retrieval" class="search-select">
          <el-option v-for="item in retrievalOptions" :key="item.key" :label="item.value" :value="item.key">
          </el-option>
        </el-select>
        <el-input style="width:200px" size="small" v-model="searchword"></el-input>
        <el-select size="small" v-model="logic" class="search-select">
          <el-option v-for="item in logicOptions" :key="item.key" :label="item.value" :value="item.key">
          </el-option>
        </el-select>
        <el-button size="small" type="primary" @click="getDeclarationData" style="width:60px;">搜索</el-button>
      </div>
      <el-table :data="declarationData" v-loading="dataLoading" tooltip-effect="dark" style="width:100%" :height="clientHeight" highlight-current-row @selection-change="onSelectionChange" @expand="expandRow">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand" label-width="160px">
              <el-form-item label="报关单类型：">
                <span>{{props.row.declarationtypename}}</span>
              </el-form-item><br/>
              <el-form-item label="预录入编号：">
                <span>{{props.row.preentrynumber}}</span>
              </el-form-item>
              <el-form-item label="海关编号：">
                <span>{{props.row.customsnumber}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationtype == 'import'" label="进口口岸：">
                <span>{{props.row.importorexportport}}</span>
              </el-form-item>
              <el-form-item v-else label="出口口岸：">
                <span>{{props.row.importorexportport}}</span>
              </el-form-item>
              <el-form-item label="备案号：">
                <span>{{props.row.recordnumber}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationtype == 'import'" label="进口日期：">
                <span>{{props.row.importorexportdate}}</span>
              </el-form-item>
              <el-form-item v-else label="出口日期：">
                <span>{{props.row.importorexportdate}}</span>
              </el-form-item>
              <el-form-item label="申报日期：">
                <span>{{props.row.declarationdate}}</span>
              </el-form-item>
              <el-form-item label="经营单位：">
                <span>{{props.row.managementunit}}</span>
              </el-form-item>
              <el-form-item label="运输方式：">
                <span>{{props.row.shippingtype}}</span>
              </el-form-item>
              <el-form-item label="运输工具名称：">
                <span>{{props.row.shippingtools}}</span>
              </el-form-item>
              <el-form-item label="提运单号：">
                <span>{{props.row.shippingnumbers}}</span>
              </el-form-item>
              <el-form-item label="收货单位：">
                <span>{{props.row.forwardingunit}}</span>
              </el-form-item>
              <el-form-item label="贸易方式：">
                <span>{{props.row.tradingtype}}</span>
              </el-form-item>
              <el-form-item label="征免性质：">
                <span>{{props.row.exemptionnature}}</span>
              </el-form-item>
              <el-form-item label="征税比例：">
                <span>{{props.row.settlementtype}}</span>
              </el-form-item>
              <el-form-item label="许可证号：">
                <span>{{props.row.licensekey}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationtype == 'import'" label="启运国：">
                <span>{{props.row.startorarrivalcountry}}</span>
              </el-form-item>
              <el-form-item v-else label="运抵国：">
                <span>{{props.row.startorarrivalcountry}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationtype == 'import'" label="装货港：">
                <span>{{props.row.loadingorfingerport}}</span>
              </el-form-item>
              <el-form-item v-else label="指运港：">
                <span>{{props.row.loadingorfingerport}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationtype == 'import'" label="境内目的地：">
                <span>{{props.row.destinationorconsignmentplace}}</span>
              </el-form-item>
              <el-form-item v-else label="境内货源地：">
                <span>{{props.row.destinationorconsignmentplace}}</span>
              </el-form-item>
              <el-form-item label="批准文号：">
                <span>{{props.row.approvalnumber}}</span>
              </el-form-item>
              <el-form-item label="成交方式：">
                <span>{{props.row.transactionmethod}}</span>
              </el-form-item>
              <el-form-item label="运费：">
                <span>{{props.row.freight}}</span>
              </el-form-item>
              <el-form-item label="保费：">
                <span>{{props.row.premium}}</span>
              </el-form-item>
              <el-form-item label="杂费：">
                <span>{{props.row.incidental}}</span>
              </el-form-item><br/>
              <el-form-item label="合同协议号：">
                <span>{{props.row.agreementnumber}}</span>
              </el-form-item>
              <el-form-item label="件数：">
                <span>{{props.row.goodsnumber}}</span>
              </el-form-item>
              <el-form-item label="包装种类：">
                <span>{{props.row.packagingtype}}</span>
              </el-form-item>
              <el-form-item label="毛重（千克）：">
                <span>{{props.row.grossweight}}</span>
              </el-form-item>
              <el-form-item label="净重（千克）：">
                <span>{{props.row.netweight}}</span>
              </el-form-item>
              <el-form-item label="集装箱号：">
                <span>{{props.row.containernumber}}</span>
              </el-form-item>
              <el-form-item label="随附单证：">
                <span>{{props.row.documentsattached}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationtype == 'import'" label="用途：">
                <span>{{props.row.purposeormanufacturer}}</span>
              </el-form-item>
              <el-form-item v-else label="生产厂家：">
                <span>{{props.row.purposeormanufacturer}}</span>
              </el-form-item>
              <el-form-item label="标记唛码及备注：" style="width:90%">
                <span>{{props.row.shippingmarksandremarks}}</span>
              </el-form-item>
              <el-form-item label="商品：" label-width="60px" style="width:100%">
                <packinglist-table :declarationID="declarationID" :declarationType="declarationType">
                </packinglist-table>
              </el-form-item>
              <el-form-item label="税费征收情况：">
                <span>{{props.row.taxpaidornot}}</span>
              </el-form-item>
              <el-form-item label="录入员：">
                <span>{{props.row.entryclerk}}</span>
              </el-form-item>
              <el-form-item label="录入单位：">
                <span>{{props.row.entryunit}}</span>
              </el-form-item>
              <el-form-item label="报关员：">
                <span>{{props.row.customsbroker}}</span>
              </el-form-item>
              <el-form-item label="申报单位：">
                <span>{{props.row.declarationunit}}</span>
              </el-form-item>
              <el-form-item label="单位地址：">
                <span>{{props.row.unitaddress}}</span>
              </el-form-item>
              <el-form-item label="邮编：">
                <span>{{props.row.zipcode}}</span>
              </el-form-item>
              <el-form-item label="电话：">
                <span>{{props.row.telephone}}</span>
              </el-form-item>
              <el-form-item label="制填日期：">
                <span>{{props.row.fillingdate}}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="customsnumber" show-overflow-tooltip min-width="15%" label="海关编号"></el-table-column>
        <el-table-column prop="declarationtypename" show-overflow-tooltip min-width="15%" label="报关单类型"></el-table-column>
        <el-table-column min-width="12%" label="商品详情">
          <template slot-scope="scope">
            <el-button type="text">
              <span style="color:green;" @click="showPackinglist(scope.row.id,scope.row.declarationtype)">查看商品</span>
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="declarationunit" show-overflow-tooltip min-width="20%" label="申报单位"></el-table-column>
        <el-table-column prop="declarationdate" show-overflow-tooltip min-width="12%" label="申报日期"></el-table-column>
        <el-table-column prop="entrydate" show-overflow-tooltip min-width="12%" label="录入日期"></el-table-column>
        <el-table-column prop="auditstatusname" show-overflow-tooltip min-width="11%" label="审核状态"></el-table-column>
        <el-table-column min-width="15%" label="操作">
          <template slot-scope="scope">
            <el-button type="text">
              <span style="color:green;" @click="passClick(scope.row.id)">通过</span>
            </el-button>
            <el-button type="text">
              <span style="color:red;" @click="notPassClick(scope.row.id)">不通过</span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page-wrap">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next" :total="total">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="商品列表详情" :visible.sync="packinglistDialogModal" size="large">
      <packinglist-table :declarationID="declarationID" :declarationType="declarationType" @row-click="packingRowClick">
      </packinglist-table>
    </el-dialog>
    <el-dialog title="报关单详情" :visible.sync="declarationDetailDialogModal" size="large">
      <table cellpadding="0" cellspacing="0" border="1" class="detail-table">
        <tr class="t1">
          <td colspan="5"><span>预录入编号　</span>{{tmpDeclaration.preentrynumber}}</td>
          <td colspan="5"><span>海关编号　</span>{{tmpDeclaration.customsnumber}}</td>
        </tr>
        <tr class="t1">
          <td colspan="4"><span v-if="tmpDeclaration.declarationtype == 'import'">进口口岸　</span><span v-else>出口口岸　</span>{{tmpDeclaration.importorexportport}}</td>
          <td colspan="2"><span>备案号　</span>{{tmpDeclaration.recordnumber}}</td>
          <td colspan="2"><span v-if="tmpDeclaration.declarationtype == 'import'">进口日期　</span><span v-else>出口日期　</span>{{tmpDeclaration.importorexportdate}}</td>
          <td colspan="2"><span>申报日期　</span>{{tmpDeclaration.declarationdate}}</td>
        </tr>
        <tr class="t1">
          <td colspan="4"><span>经营单位　</span>{{tmpDeclaration.managementunit}}</td>
          <td colspan="2"><span>运输方式　</span>{{tmpDeclaration.shippingtype}}</td>
          <td colspan="2"><span>运输工具名称　</span>{{tmpDeclaration.shippingtools}}</td>
          <td colspan="2"><span>提运单号　</span>{{tmpDeclaration.shippingnumbers}}</td>
        </tr>
        <tr class="t1">
          <td colspan="4"><span>发货单位　</span>{{tmpDeclaration.forwardingunit}}</td>
          <td colspan="2"><span>贸易方式　</span>{{tmpDeclaration.tradingtype}}</td>
          <td colspan="2"><span>征免性质　</span>{{tmpDeclaration.exemptionnature}}</td>
          <td colspan="2"><span>结汇方式　</span>{{tmpDeclaration.settlementtype}}</td>
        </tr>
        <tr class="t1">
          <td colspan="3"><span>许可证号　</span>{{tmpDeclaration.licensekey}}</td>
          <td colspan="3"><span v-if="tmpDeclaration.declarationtype == 'import'">启运国（地区）　</span><span v-else>运抵国（地区）　</span>{{tmpDeclaration.startorarrivalcountry}}</td>
          <td colspan="2"><span v-if="tmpDeclaration.declarationtype == 'import'">装货港　</span><span v-else>指运港　</span>{{tmpDeclaration.loadingorfingerport}}</td>
          <td colspan="2"><span v-if="tmpDeclaration.declarationtype == 'import'">境内目的地　</span><span v-else>境内货源地　</span>{{tmpDeclaration.destinationorconsignmentplace}}</td>
        </tr>
        <tr class="t1">
          <td colspan="3"><span>批准文号　</span>{{tmpDeclaration.approvalnumber}}</td>
          <td colspan="1"><span>成交方式　</span>{{tmpDeclaration.transactionmethod}}</td>
          <td colspan="2"><span>运费　</span>{{tmpDeclaration.freight}}</td>
          <td colspan="2"><span>保费　</span>{{tmpDeclaration.premium}}</td>
          <td colspan="2"><span>杂费　</span>{{tmpDeclaration.incidental}}</td>
        </tr>
        <tr class="t1">
          <td colspan="3"><span>合同协议号　</span>{{tmpDeclaration.agreementnumber}}</td>
          <td colspan="1"><span>件数　</span>{{tmpDeclaration.goodsnumber}}</td>
          <td colspan="2"><span>包装种类　</span>{{tmpDeclaration.packagingtype}}</td>
          <td colspan="2"><span>毛重（公斤）　</span>{{tmpDeclaration.grossweight}}</td>
          <td colspan="2"><span>净重（公斤）　</span>{{tmpDeclaration.netweight}}</td>
        </tr>
        <tr class="t1">
          <td colspan="3"><span>集装箱号　</span>{{tmpDeclaration.containernumber}}</td>
          <td colspan="5"><span>随附单据　</span>{{tmpDeclaration.documentsattached}}</td>
          <td colspan="2"><span v-if="tmpDeclaration.declarationtype == 'import'">用途　</span><span v-else>生产厂家　</span>{{tmpDeclaration.purposeormanufacturer}}</td>
        </tr>
        <tr class="t2">
          <td colspan="10" valign="top"><span>标记唛码及备注　</span>{{tmpDeclaration.shippingmarksandremarks}}</td>
        </tr>
        <tr>
          <td colspan="10" valign="top">
            <packinglist-table :declarationID="tmpDeclaration.id" :declarationType="tmpDeclaration.declarationtype">
            </packinglist-table>
          </td>
        </tr>
        <tr class="t3">
          <td colspan="10" valign="top"><span>税费征收情况　</span>{{tmpDeclaration.taxpaidornot}}</td>
        </tr>
        <tr class="t5">
          <td colspan="10">
            <table cellspacing="0" cellpadding="0" border="0" class="inline-table">
              <tr class="t1">
                <td colspan="1" class="b1"><span>录入员　</span>{{tmpDeclaration.entryclerk}}</td>
                <td colspan="2" class="b2"><span>录入单位　</span>{{tmpDeclaration.entryunit}}</td>
                <td colspan="3"><span>兹声明以上申报无讹并承担法律责任　</span> </td>
                <td colspan="4" class="b4"><span>海关审批批注及放行日期　</span> </td>
              </tr>
              <tr class="t1" border="0">
                <td colspan="6" border="0"><span>报关员　</span>{{tmpDeclaration.customsbroker}}</td>
                <td colspan="4" class="b4"> </td>
              </tr>
              <tr class="t1" border="0">
                <td colspan="6" border="0"><span>单位地址　</span>{{tmpDeclaration.unitaddress}}</td>
                <td colspan="2" class="b3"><span>审单　</span> </td>
                <td colspan="2" class="b1"><span>审价　</span> </td>
              </tr>
              <tr class="t1" border="0">
                <td colspan="6" border="0"><span>申报单位　</span>{{tmpDeclaration.declarationunit}}</td>
                <td colspan="2" class="b3"><span>征税　</span> </td>
                <td colspan="2" class="b1"><span>统计　</span> </td>
              </tr>
              <tr class="t1">
                <td colspan="2"><span>邮编　</span>{{tmpDeclaration.zipcode}}</td>
                <td colspan="2"><span>电话　</span>{{tmpDeclaration.telephone}}</td>
                <td colspan="2"><span>制填日期　</span>{{tmpDeclaration.fillingdate}}</td>
                <td colspan="2" class="b4"><span>查验　</span> </td>
                <td colspan="2"><span>放行　</span> </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </el-dialog>
  </div>
</template>

<script>
import declarationAPI from './api/declarationAPI.js';
import packinglistAPI from './api/packinglistAPI.js';
import auditingAPI from './api/auditingAPI.js';
//import './mock/declaration.js';
import packinglistTable from './components/packinglistTable.vue';

export default {
  data() {
    return {
      declarationDetailDialogModal: false,
      packinglistDialogModal: false,
      declarationID: '',
      declarationType: '',
      clientWidth: 0,
      clientHeight: 0,
      searchword: '',
      selectedRows: [],
      declarationData: [],
      currentPage: 1,
      pageSizes: [10, 20, 50],
      pageSize: 10,
      total: 0,
      editMode: 1,
      declarationDialogmodel: false,
      tmpDeclaration: {},
      dataLoading: false,
      confirmLoading: false,
      declarationTypeOptions: [
        { key: 'import', value: '进口报关单' },
        { key: 'export', value: '出口报关单' },
      ],
      sort: '',
      sortOptions: [
        { key: '', value: '请选择排序' },
        { key: 'declarationtype', value: '报关单类型' },
        { key: 'preentrynumber', value: '预录入编号' },
        { key: 'importorexportport', value: '进口/出口口岸' },
        { key: 'managementunit', value: '经营单位' },
        { key: 'declarationunit', value: '申报单位' },
        { key: 'declarationdate', value: '申报日期' },
      ],
      auditStatus: '',
      auditStatusOptions: [
        { key: '', value: '请选择审核状态' },
        { key: 'W', value: '未审核' },
        { key: 'Y', value: '通过' },
        { key: 'N', value: '不通过' },
      ],
      retrieval: '',
      retrievalOptions: [
        { key: '', value: '请选择检索字段' },
        { key: 'declarationtype', value: '报关单类型' },
        { key: 'preentrynumber', value: '预录入编号' },
        { key: 'importorexportport', value: '进口/出口口岸' },
        { key: 'managementunit', value: '经营单位' },
        { key: 'declarationunit', value: '申报单位' },
        { key: 'declarationdate', value: '申报日期' },
      ],
      logic: '',
      logicOptions: [
        { key: '', value: '请选择逻辑' },
        { key: 'and', value: '与' },
        { key: 'or', value: '或' },
        { key: 'none', value: '非' },
      ],
    };
  },
  methods: {
    showPackinglist(id, type) {
      this.declarationID = id;
      this.declarationType = type;
      this.packinglistDialogModal = true;
    },
    getDeclarationData() {
      this.dataLoading = true;
      declarationAPI
        .getDeclaration({})
        .then(data => {
          this.declarationData = data.data;
          this.total = data.total;
          this.dataLoading = false;
        });
    },
    onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    expandRow(row) {
      this.declarationType = row.declarationtype;
      this.declarationID = row.id;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getDeclarationData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getDeclarationData();
    },
    passClick(id) {
      let rowIds = [];
      if (id) {
        rowIds = [id];
      } else {
        this.selectedRows.forEach(function(row) {
          rowIds.push(row.id);
        });
      }
      auditingAPI.doAuditing(id, true).then(data => {
        this.$notify({
          title: '提示',
          message: data.message,
          type: 'success',
          duration: 2000,
        });
        if (data.status == 1) {
          rowIds.forEach(rowid => {
            let index = this.declarationData.findIndex(val => val.id === rowid);
            this.declarationData[index].auditstatus = 'Y';
            this.declarationData[index].auditstatusname = '通过';
          });
        }
      });
    },
    notPassClick(id) {
      let rowIds = [];
      if (id) {
        rowIds = [id];
      } else {
        this.selectedRows.forEach(function(row) {
          rowIds.push(row.id);
        });
      }
      auditingAPI.doAuditing(rowIds, false).then(data => {
        this.$notify({
          title: '提示',
          message: data.message,
          type: 'success',
          duration: 2000,
        });
        if (data.status == 1) {
          rowIds.forEach(rowid => {
            let index = this.declarationData.findIndex(val => val.id === rowid);
            this.declarationData[index].auditstatus = 'N';
            this.declarationData[index].auditstatusname = '未通过';
          });
        }
      });
    },
    viewClick() {
      this.$notify({
        title: '提示',
        message: '查看详情',
        type: 'success',
        duration: 2000,
      });
      this.tmpDeclaration = Object.assign({}, this.selectedRows[0]);
      this.declarationDetailDialogModal = true;
    },
  },
  created() {
    this.clientWidth = document.documentElement.clientWidth - 200;
    this.clientHeight = document.documentElement.clientHeight - 200;
    this.getDeclarationData();
  },
  components: {
    'packinglist-table': packinglistTable,
  },
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

.e-form {
  padding-left: 10%;
}

.e-form .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 45%;
}

.e-input {
  width: 240px;
}

.search-select {
  width: 140px;
}

.detail-table {
  font-size: 16px;
  width: 100%;
}

.detail-table span {
  font-size: 12px;
  padding-left: 5px;
}

.detail-table .t1 {
  height: 40px;
}

.detail-table .t2 {
  height: 80px;
}

.detail-table .t3 {
  height: 120px;
}

.detail-table .t4 {
  height: 160px;
}

.detail-table .t5 {
  height: 200px;
}

.inline-table {
  width: 100%;
}
.inline-table .b1 {
  border-bottom: 1px solid #CCC;
}
.inline-table .b2 {
  border-right: 1px solid #CCC;
  border-bottom: 1px solid #CCC;
}
.inline-table .b3 {
  border-left: 1px solid #CCC;
  border-bottom: 1px solid #CCC;
}
.inline-table .b4 {
  border-left: 1px solid #CCC;
}
</style>
