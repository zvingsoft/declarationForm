<template slot-scope="scope">
  <div :style="{width:clientWidth+'px'}">
    <el-toolbar>
      <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0" @click="passClick()">
        <i class="fa fa-check"></i>审核通过</el-button>
      <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0" @click="notPassClick()">
        <i class="fa fa-remove"></i>审核不通过</el-button>
      <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0" @click="goodsPassClick()">
        <i class="fa fa-remove"></i>货物放行</el-button>
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
        <el-input style="width:200px" size="small" v-model="searchWord"></el-input>
        <el-select size="small" v-model="logic" class="search-select">
          <el-option v-for="item in logicOptions" :key="item.key" :label="item.value" :value="item.key">
          </el-option>
        </el-select>
        <el-button size="small" type="primary" @click="getDeclarationData" style="width:60px;">搜索</el-button>
      </div>
      <el-table :data="declarationData" v-loading="dataLoading" tooltip-effect="dark" style="width:100%" :height="clientHeight" highlight-current-row @selection-change="onSelectionChange" @expand="expandRow" @row-dblclick="rowDBClick">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand" label-width="160px">
              <el-form-item label="报关单类型：">
                <span>{{props.row.declarationTypeName}}</span>
              </el-form-item>
              <br/>
              <el-form-item label="预录入编号：">
                <span>{{props.row.preentryNumber}}</span>
              </el-form-item>
              <el-form-item label="海关编号：">
                <span>{{props.row.customsNumber}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationType == 'import'" label="进口口岸：">
                <span>{{props.row.importOrExportPort}}</span>
              </el-form-item>
              <el-form-item v-else label="出口口岸：">
                <span>{{props.row.importOrExportPort}}</span>
              </el-form-item>
              <el-form-item label="备案号：">
                <span>{{props.row.recordNumber}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationType == 'import'" label="进口日期：">
                <span>{{props.row.importOrExportDate}}</span>
              </el-form-item>
              <el-form-item v-else label="出口日期：">
                <span>{{props.row.importOrExportDate}}</span>
              </el-form-item>
              <el-form-item label="申报日期：">
                <span>{{props.row.declarationDate}}</span>
              </el-form-item>
              <el-form-item label="经营单位：">
                <span>{{props.row.managementUnit}}</span>
              </el-form-item>
              <el-form-item label="运输方式：">
                <span>{{props.row.shippingType}}</span>
              </el-form-item>
              <el-form-item label="运输工具名称：">
                <span>{{props.row.shippingTools}}</span>
              </el-form-item>
              <el-form-item label="提运单号：">
                <span>{{props.row.shippingNumbers}}</span>
              </el-form-item>
              <el-form-item label="收货单位：">
                <span>{{props.row.forwardingUnit}}</span>
              </el-form-item>
              <el-form-item label="贸易方式：">
                <span>{{props.row.tradingType}}</span>
              </el-form-item>
              <el-form-item label="征免性质：">
                <span>{{props.row.exemptionNature}}</span>
              </el-form-item>
              <el-form-item label="征税比例：">
                <span>{{props.row.settlementType}}</span>
              </el-form-item>
              <el-form-item label="许可证号：">
                <span>{{props.row.licenseKey}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationType == 'import'" label="启运国：">
                <span>{{props.row.startOrArrivalCountry}}</span>
              </el-form-item>
              <el-form-item v-else label="运抵国：">
                <span>{{props.row.startOrArrivalCountry}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationType == 'import'" label="装货港：">
                <span>{{props.row.loadingOrFingerPort}}</span>
              </el-form-item>
              <el-form-item v-else label="指运港：">
                <span>{{props.row.loadingOrFingerPort}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationType == 'import'" label="境内目的地：">
                <span>{{props.row.destinationOrConsignmentPlace}}</span>
              </el-form-item>
              <el-form-item v-else label="境内货源地：">
                <span>{{props.row.destinationOrConsignmentPlace}}</span>
              </el-form-item>
              <el-form-item label="批准文号：">
                <span>{{props.row.approvalNumber}}</span>
              </el-form-item>
              <el-form-item label="成交方式：">
                <span>{{props.row.transactionMethod}}</span>
              </el-form-item>
              <el-form-item label="运费：">
                <span>{{props.row.freight}}</span>
              </el-form-item>
              <el-form-item label="保费：">
                <span>{{props.row.premium}}</span>
              </el-form-item>
              <el-form-item label="杂费：">
                <span>{{props.row.incidental}}</span>
              </el-form-item>
              <br/>
              <el-form-item label="合同协议号：">
                <span>{{props.row.agreementNumber}}</span>
              </el-form-item>
              <el-form-item label="件数：">
                <span>{{props.row.goodsNumber}}</span>
              </el-form-item>
              <el-form-item label="包装种类：">
                <span>{{props.row.packagingType}}</span>
              </el-form-item>
              <el-form-item label="毛重（千克）：">
                <span>{{props.row.grossWeight}}</span>
              </el-form-item>
              <el-form-item label="净重（千克）：">
                <span>{{props.row.netWeight}}</span>
              </el-form-item>
              <el-form-item label="集装箱号：">
                <span>{{props.row.containerNumber}}</span>
              </el-form-item>
              <el-form-item label="随附单证：">
                <span>{{props.row.documentSattached}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationType == 'import'" label="用途：">
                <span>{{props.row.purposeOrManufacturer}}</span>
              </el-form-item>
              <el-form-item v-else label="生产厂家：">
                <span>{{props.row.purposeOrManufacturer}}</span>
              </el-form-item>
              <el-form-item label="标记唛码及备注：" style="width:90%">
                <span>{{props.row.shippingMarksAndRemarks}}</span>
              </el-form-item>
              <el-form-item label="商品：" label-width="60px" style="width:100%">
                <packing-item :packinglistData.sync="packingListData" :declarationType="declarationType" :onlyView="true">
                </packing-item>
              </el-form-item>
              <el-form-item label="税费征收情况：">
                <span>{{props.row.taxpaidOrNot}}</span>
              </el-form-item>
              <el-form-item label="录入员：">
                <span>{{props.row.entryClerk}}</span>
              </el-form-item>
              <el-form-item label="录入单位：">
                <span>{{props.row.entryUnit}}</span>
              </el-form-item>
              <el-form-item label="报关员：">
                <span>{{props.row.customsBroker}}</span>
              </el-form-item>
              <el-form-item label="申报单位：">
                <span>{{props.row.declarationUnit}}</span>
              </el-form-item>
              <el-form-item label="单位地址：">
                <span>{{props.row.unitAddress}}</span>
              </el-form-item>
              <el-form-item label="邮编：">
                <span>{{props.row.zipCode}}</span>
              </el-form-item>
              <el-form-item label="电话：">
                <span>{{props.row.telephone}}</span>
              </el-form-item>
              <el-form-item label="制填日期：">
                <span>{{props.row.fillingDate}}</span>
              </el-form-item>
              <el-form-item label="审核状态：">
                <span>{{props.row.auditStatusName}}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="customsNumber" show-overflow-tooltip min-width="15%" label="海关编号"></el-table-column>
        <el-table-column prop="declarationTypeName" show-overflow-tooltip min-width="15%" label="报关单类型"></el-table-column>
        <el-table-column min-width="12%" label="商品详情">
          <template slot-scope="scope">
            <el-button type="text">
              <span style="color:green;" @click="showPackinglist(scope.row.packingList,scope.row.declarationType)">查看商品</span>
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="declarationUnit" show-overflow-tooltip min-width="20%" label="申报单位"></el-table-column>
        <el-table-column prop="declarationDate" show-overflow-tooltip min-width="12%" label="申报日期"></el-table-column>
        <el-table-column prop="entrydate" show-overflow-tooltip min-width="12%" label="录入日期"></el-table-column>
        <el-table-column prop="auditStatusName" show-overflow-tooltip min-width="11%" label="审核状态"></el-table-column>
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
      <packing-item :packinglistData.sync="packingListData" :declarationType="declarationType" :onlyView="true">
      </packing-item>
    </el-dialog>
    <el-dialog title="报关单详情" :visible.sync="declarationDetailDialogModal" size="large">
      <table cellpadding="0" cellspacing="0" border="1" class="detail-table">
        <tr class="t1">
          <td colspan="5">
            <span>预录入编号　</span>{{tmpDeclaration.preentryNumber}}</td>
          <td colspan="5">
            <span>海关编号　</span>{{tmpDeclaration.customsNumber}}</td>
        </tr>
        <tr class="t1">
          <td colspan="4">
            <span v-if="tmpDeclaration.declarationType == 'import'">进口口岸　</span>
            <span v-else>出口口岸　</span>{{tmpDeclaration.importOrExportPort}}</td>
          <td colspan="2">
            <span>备案号　</span>{{tmpDeclaration.recordNumber}}</td>
          <td colspan="2">
            <span v-if="tmpDeclaration.declarationType == 'import'">进口日期　</span>
            <span v-else>出口日期　</span>{{tmpDeclaration.importOrExportDate}}</td>
          <td colspan="2">
            <span>申报日期　</span>{{tmpDeclaration.declarationDate}}</td>
        </tr>
        <tr class="t1">
          <td colspan="4">
            <span>经营单位　</span>{{tmpDeclaration.managementUnit}}</td>
          <td colspan="2">
            <span>运输方式　</span>{{tmpDeclaration.shippingType}}</td>
          <td colspan="2">
            <span>运输工具名称　</span>{{tmpDeclaration.shippingTools}}</td>
          <td colspan="2">
            <span>提运单号　</span>{{tmpDeclaration.shippingNumbers}}</td>
        </tr>
        <tr class="t1">
          <td colspan="4">
            <span>发货单位　</span>{{tmpDeclaration.forwardingUnit}}</td>
          <td colspan="2">
            <span>贸易方式　</span>{{tmpDeclaration.tradingType}}</td>
          <td colspan="2">
            <span>征免性质　</span>{{tmpDeclaration.exemptionNature}}</td>
          <td colspan="2">
            <span>结汇方式　</span>{{tmpDeclaration.settlementType}}</td>
        </tr>
        <tr class="t1">
          <td colspan="3">
            <span>许可证号　</span>{{tmpDeclaration.licenseKey}}</td>
          <td colspan="3">
            <span v-if="tmpDeclaration.declarationType == 'import'">启运国（地区）　</span>
            <span v-else>运抵国（地区）　</span>{{tmpDeclaration.startOrArrivalCountry}}</td>
          <td colspan="2">
            <span v-if="tmpDeclaration.declarationType == 'import'">装货港　</span>
            <span v-else>指运港　</span>{{tmpDeclaration.loadingOrFingerPort}}</td>
          <td colspan="2">
            <span v-if="tmpDeclaration.declarationType == 'import'">境内目的地　</span>
            <span v-else>境内货源地　</span>{{tmpDeclaration.destinationOrConsignmentPlace}}</td>
        </tr>
        <tr class="t1">
          <td colspan="3">
            <span>批准文号　</span>{{tmpDeclaration.approvalNumber}}</td>
          <td colspan="1">
            <span>成交方式　</span>{{tmpDeclaration.transactionMethod}}</td>
          <td colspan="2">
            <span>运费　</span>{{tmpDeclaration.freight}}</td>
          <td colspan="2">
            <span>保费　</span>{{tmpDeclaration.premium}}</td>
          <td colspan="2">
            <span>杂费　</span>{{tmpDeclaration.incidental}}</td>
        </tr>
        <tr class="t1">
          <td colspan="3">
            <span>合同协议号　</span>{{tmpDeclaration.agreementNumber}}</td>
          <td colspan="1">
            <span>件数　</span>{{tmpDeclaration.goodsNumber}}</td>
          <td colspan="2">
            <span>包装种类　</span>{{tmpDeclaration.packagingType}}</td>
          <td colspan="2">
            <span>毛重（公斤）　</span>{{tmpDeclaration.grossWeight}}</td>
          <td colspan="2">
            <span>净重（公斤）　</span>{{tmpDeclaration.netWeight}}</td>
        </tr>
        <tr class="t1">
          <td colspan="3">
            <span>集装箱号　</span>{{tmpDeclaration.containerNumber}}</td>
          <td colspan="5">
            <span>随附单据　</span>{{tmpDeclaration.documentSattached}}</td>
          <td colspan="2">
            <span v-if="tmpDeclaration.declarationType == 'import'">用途　</span>
            <span v-else>生产厂家　</span>{{tmpDeclaration.purposeOrManufacturer}}</td>
        </tr>
        <tr class="t2">
          <td colspan="10" valign="top">
            <span>标记唛码及备注　</span>{{tmpDeclaration.shippingMarksAndRemarks}}</td>
        </tr>
        <tr>
          <td colspan="10" valign="top">
            <packing-item :packinglistData.sync="tmpDeclaration.packingList" :declarationType="tmpDeclaration.declarationType" :onlyView="true">
            </packing-item>
          </td>
        </tr>
        <tr class="t3">
          <td colspan="10" valign="top">
            <span>税费征收情况　</span>{{tmpDeclaration.taxpaidOrNot}}</td>
        </tr>
        <tr class="t5">
          <td colspan="10">
            <table cellspacing="0" cellpadding="0" border="0" class="inline-table">
              <tr class="t1">
                <td colspan="1" class="b1">
                  <span>录入员　</span>{{tmpDeclaration.entryClerk}}</td>
                <td colspan="2" class="b2">
                  <span>录入单位　</span>{{tmpDeclaration.entryUnit}}</td>
                <td colspan="3">
                  <span>兹声明以上申报无讹并承担法律责任　</span>
                </td>
                <td colspan="4" class="b4">
                  <span>海关审批批注及放行日期　</span>
                </td>
              </tr>
              <tr class="t1" border="0">
                <td colspan="6" border="0">
                  <span>报关员　</span>{{tmpDeclaration.customsBroker}}</td>
                <td colspan="4" class="b4"> </td>
              </tr>
              <tr class="t1" border="0">
                <td colspan="6" border="0">
                  <span>单位地址　</span>{{tmpDeclaration.unitAddress}}</td>
                <td colspan="2" class="b3">
                  <span>审单　</span>
                </td>
                <td colspan="2" class="b1">
                  <span>审价　</span>
                </td>
              </tr>
              <tr class="t1" border="0">
                <td colspan="6" border="0">
                  <span>申报单位　</span>{{tmpDeclaration.declarationUnit}}</td>
                <td colspan="2" class="b3">
                  <span>征税　</span>
                </td>
                <td colspan="2" class="b1">
                  <span>统计　</span>
                </td>
              </tr>
              <tr class="t1">
                <td colspan="2">
                  <span>邮编　</span>{{tmpDeclaration.zipCode}}</td>
                <td colspan="2">
                  <span>电话　</span>{{tmpDeclaration.telephone}}</td>
                <td colspan="2">
                  <span>制填日期　</span>{{tmpDeclaration.fillingDate}}</td>
                <td colspan="2" class="b4">
                  <span>查验　</span>
                </td>
                <td colspan="2">
                  <span>放行　</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </el-dialog>

    <!-- 提交审核信息列表 -->
    <el-dialog size="tiny" title="审核信息列表" :visible.sync="showCheckDialog">
      <el-table ref="checkList" :data="checkList" style="width: 100%">
        <el-table-column label="状态" width="80">
          <template scope="scope">
            <span v-show="!scope.row.data.includes('失败')">
              <i style="color:green;font-size:18px;" class="fa fa-check" />
            </span>
            <span v-show="scope.row.data.includes('失败')">
              <i style="color:red;font-size:18px;" class="fa fa-close" />
            </span>
          </template>
        </el-table-column>
        <el-table-column label="结果">
          <template scope="scope">
            {{scope.row.data}}
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showCheckDialog = false">取 消</el-button>
        <el-button type="primary" @click="onSure" :disabled="!saveCheckStatus">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import declarationAPI from './api/declarationAPI.js';
import packinglistAPI from './api/packinglistAPI.js';
import auditingAPI from './api/auditingAPI.js';
//import './mock/declaration.js';
import packing from './components/packing.vue';

export default {
  data() {
    return {
      id: 0,
      saveCheckStatus: false,
      showCheckDialog: false,
      checkList: [],
      packingListData: [],
      declarationDetailDialogModal: false,
      packinglistDialogModal: false,
      declarationID: '',
      declarationType: '',
      clientWidth: 0,
      clientHeight: 0,
      searchWord: '',
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
      declarationTypeOptions: [{
        key: 'import',
        value: '进口报关单'
      },
      {
        key: 'export',
        value: '出口报关单'
      },
      ],
      sort: '',
      sortOptions: [{
        key: '',
        value: '请选择排序'
      },
      {
        key: 'declarationType',
        value: '报关单类型'
      },
      {
        key: 'preentryNumber',
        value: '预录入编号'
      },
      {
        key: 'importOrExportPort',
        value: '进口/出口口岸'
      },
      {
        key: 'managementUnit',
        value: '经营单位'
      },
      {
        key: 'declarationUnit',
        value: '申报单位'
      },
      {
        key: 'declarationDate',
        value: '申报日期'
      },
      ],
      auditStatus: '',
      auditStatusOptions: [{
        key: '',
        value: '请选择审核状态'
      },
      {
        key: 'W',
        value: '未审核'
      },
      {
        key: 'Y',
        value: '通过'
      },
      {
        key: 'N',
        value: '不通过'
      },
      ],
      retrieval: '',
      retrievalOptions: [{
        key: '',
        value: '请选择检索字段'
      },
      {
        key: 'declarationType',
        value: '报关单类型'
      },
      {
        key: 'preentryNumber',
        value: '预录入编号'
      },
      {
        key: 'importOrExportPort',
        value: '进口/出口口岸'
      },
      {
        key: 'managementUnit',
        value: '经营单位'
      },
      {
        key: 'declarationUnit',
        value: '申报单位'
      },
      {
        key: 'declarationDate',
        value: '申报日期'
      },
      ],
      logic: '',
      logicOptions: [{
        key: '',
        value: '请选择逻辑'
      },
      {
        key: 'and',
        value: '与'
      },
      {
        key: 'or',
        value: '或'
      },
      {
        key: 'none',
        value: '非'
      },
      ],
    };
  },
  methods: {
    rowDBClick(row) {
      this.tmpDeclaration = Object.assign({}, row);
      this.declarationDetailDialogModal = true;
    },
    goodsPassClick(id) {
      let rowIds = [];
      if (id) {
        rowIds = [id];
      } else {
        this.selectedRows.forEach(function(row) {
          rowIds.push(row.id);
        });
      }
      auditingAPI.doAuditing(rowIds, 'P').then(res => {
        this.$notify({
          title: '提示',
          message: res.data,
          type: 'success',
          duration: 2000,
        });
        this.getDeclarationData();
      });
    },
    showPackinglist(packingList, type) {
      this.packingListData = packingList;
      this.declarationType = type;
      this.packinglistDialogModal = true;
    },
    getDeclarationData() {
      this.dataLoading = true;
      let obj = {
        retrieval: this.retrieval,
        searchWord: this.searchWord,
        pageSize: this.pageSize,
        pageIndex: this.currentPage,
      };
      auditingAPI.getDeclaration(obj).then(data => {
        console.log(data);
        this.declarationData = data;
        if (data.length > 0) {
          this.total = data[0].total;
        }
        this.dataLoading = false;
      });
    },
    onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    expandRow(row) {
      this.declarationType = row.declarationType;
      this.packingListData = row.packingList;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getDeclarationData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getDeclarationData();
    },
    checkOrConfirm(declarationForm, serviceId, method) {
      return axios
        .post("/" + serviceId + "/" + serviceId + "/" + method, declarationForm)
        .then(res => res)
    },
    checkOrConfirm2(declarationForm, serviceId, method) {
      return axios
        .post("/" + serviceId + "/" + method, declarationForm)
        .then(res => res)
    },
    passClick(id) {
      this.id = id;
      Promise.all([this.checkOrConfirm(this.tmpDeclaration, 'cottonQuota', 'check'), this.checkOrConfirm(this.tmpDeclaration,
        'riskAnalysis', 'check'),
      this.checkOrConfirm2(this.tmpDeclaration, 'tax', 'check'), this.checkOrConfirm2(this.tmpDeclaration,
        'taxCutting', 'check'), this.checkOrConfirm2(this.tmpDeclaration, 'manifest', 'check'),
      this.checkOrConfirm2(this.tmpDeclaration, 'processingTrade', 'check')
      ]).then(datas => {
        let flag = true;
        console.log(datas)
        datas.forEach(data => {
          if (data.status != 200) {
            flag = false;
          }
        });
        this.saveCheckStatus = flag;
        this.checkList = datas;
        this.showCheckDialog = true;
      });
    },
    onSure() {
      if (this.saveCheckStatus) {
        let rowIds = [];
        if (this.id) {
          rowIds = [this.id];
        } else {
          this.selectedRows.forEach(function(row) {
            rowIds.push(row.id);
          });
        }
        this.checkList = [];
        this.showCheckDialog = false;
        this.saveCheckStatus = false;
        auditingAPI.doAuditing(rowIds, 'Y').then(res => {
          this.getDeclarationData();
          this.$message.success("审核成功");
        });
      } else {
        this.$message.error("审核失败");
      }
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
      auditingAPI.doAuditing(rowIds, 'N').then(res => {
        this.$notify({
          title: '提示',
          message: res.data,
          type: 'success',
          duration: 2000,
        });
        this.getDeclarationData();
      });
    },
    viewClick() {
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
    'packing-item': packing,
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
  border-bottom: 1px solid #ccc;
}

.inline-table .b2 {
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.inline-table .b3 {
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.inline-table .b4 {
  border-left: 1px solid #ccc;
}
</style>
