webpackJsonp([0],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var skuAPI = {
  getSKU: function getSKU(searchWord) {
    if (typeof searchWord === 'undefined') {
      searchWord = '';
    }
    return axios.get('baseData/sku', {
      params: {
        searchWord: searchWord
      }
    }).then(function (res) {
      return res.data;
    });
  },
  getSKUById: function getSKUById(id) {
    return axios.get('/baseData/sku/' + id).then(function (res) {
      return res.data;
    });
  },
  addSKU: function addSKU(sku) {
    console.log(sku);
    return axios.post('/baseData/sku', JSON.parse(JSON.stringify(sku)));
  },
  updateSKU: function updateSKU(sku) {
    return axios.put('/baseData/sku', JSON.parse(JSON.stringify(sku)));
  },
  deleteSKU: function deleteSKU(ids) {
    var strIds = ids.join(',');
    return axios.delete('/baseData/sku/' + strIds);
  }
};

exports.default = skuAPI;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyAPI = {
  getCompany: function getCompany(name, pageIndex, pageSize) {
    return axios.get('/baseData/company', {
      params: {
        name: name,
        pageIndex: pageIndex,
        pageSize: pageSize
      }
    }).then(function (res) {
      return res;
    });
  },
  getCompanyForSelect: function getCompanyForSelect() {
    return axios.get('/baseData/companyforselect').then(function (res) {
      return res;
    });
  },
  getCompanyDetail: function getCompanyDetail(id) {
    return axios.get('/baseData/company/' + id).then(function (res) {
      return res;
    });
  },
  addCompany: function addCompany(company) {
    return axios.post('/baseData/company', company).then(function (res) {
      return res;
    });
  },
  editCompany: function editCompany(company) {
    return axios.put('/baseData/company/', company).then(function (res) {
      return res;
    });
  },
  deleteCompany: function deleteCompany(ids) {
    return axios.delete('/baseData/company/' + ids).then(function (res) {
      return res;
    });
  },
  setConttonQuota: function setConttonQuota(company) {
    return axios.patch('/baseData/company/' + company.id, company).then(function (res) {
      return res;
    });
  }
};

exports.default = companyAPI;

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var licenseAPI = {
  getInlicenseList: function getInlicenseList(search) {
    return axios.get('/license/license', {
      params: { search: search }
    }).then(function (res) {
      return res.data;
    });
  },
  addLicense: function addLicense(license) {
    this.cleanFields(license);
    return axios.post('/license/license', license).then(function (res) {
      return res;
    });
  },
  updateLicense: function updateLicense(license) {
    this.cleanFields(license);
    return axios.put('/license/license', license).then(function (res) {
      return res;
    });
  },
  getOutlicenseList: function getOutlicenseList(search) {
    return axios.get('/license/license', {
      params: { search: search }
    }).then(function (res) {
      return res.data;
    });
  },
  deleteLicense: function deleteLicense(ids) {
    return axios.delete('/license/license/' + ids).then(function (res) {
      return res;
    });
  },
  getfileList1: function getfileList1() {
    return axios.get('/license/filelist1').then(function (res) {
      return res.data;
    });
  },
  getfileList2: function getfileList2() {
    return axios.get('/license/filelist2').then(function (res) {
      return res.data;
    });
  },
  getLicenseGoods: function getLicenseGoods(licenseid) {
    return axios.get('/license/license/goods', {
      params: {
        licenseid: licenseid
      }
    }).then(function (res) {
      return res.data;
    });
  },
  addLicenseGoods: function addLicenseGoods(licensegoods) {
    return axios.post('/license/license/goods', licensegoods).then(function (res) {
      return res.data;
    });
  },
  updateLicenseGoods: function updateLicenseGoods(licensegoods) {
    return axios({
      method: 'put',
      url: '/license/license/goods/' + licensegoods.id,
      data: licensegoods
    }).then(function (res) {
      return res.data;
    });
  },
  deleteLicenseGoods: function deleteLicenseGoods(ids) {
    var strIds = ids.join(',');
    return axios.delete('/license/license/goods/' + strIds).then(function (res) {
      return res.data;
    });
  },
  cleanFields: function cleanFields(obj) {
    var arr = ['skuName', 'memo', 'id', 'sku', 'licenseKey', 'count', 'companyName', 'type', 'expirationDateOfLicense'];
    for (var prop in obj) {
      if (!arr.includes(prop)) {
        delete obj[prop];
      }
    }
  }
};

exports.default = licenseAPI;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(157);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("5fcbebb6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be44211\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./license.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be44211\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./license.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.projPage .el-tabs__header {\n  margin-bottom: 0;\n}\ninput[type='file'].el-upload__input {\n  display: none !important;\n  margin-bottom: -20px;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/license.vue?b83f8690"],"names":[],"mappings":";AAmvBA;EACA,iBAAA;CACA;AAEA;EACA,yBAAA;EACA,qBAAA;CACA","file":"license.vue","sourcesContent":["<template>\n  <div>\n    <el-tabs v-model=\"activeName\" class=\"projPage\">\n      <!-- 进口 -->\n      <el-tab-pane label='进口' name='inlicense'>\n        <el-toolbar>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"inAddClick\">\n            <i class=\"fa fa-plus\"></i>添加</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"inSelectedRows.length !== 1\" @click=\"inEditClick\">\n            <i class=\"fa fa-edit\"></i>编辑</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"inSelectedRows.length < 1\" @click=\"inDeleteClick\">\n            <i class=\"fa fa-trash-o\"></i>删除</el-button>\n        </el-toolbar>\n        <div class=\"main-content-wrap\">\n          <div class=\"search-bar fr\">\n            许可证号:\n            <el-input v-model=\"insearch.licenseKey\" size=\"small\" placeholder=\"请输入许可证号\" style=\"width: 200px;\"></el-input>\n            进口商：\n            <el-input v-model=\"insearch.companyName\" size=\"small\" placeholder=\"请输入进口商\" style=\"width: 200px;\"></el-input>\n            <el-button size=\"small\" type=\"primary\" @click=\"loadInlicenseList\"> 搜 索 </el-button>\n          </div>\n          <el-table ref=\"myTabelRef\" :data=\"inLicenseData\" tooltip-effect=\"dark\" style=\"width: 100%\" :height=\"clientHeight\" @selection-change=\"inOnSelectionChange\" @row-click=\"onInRowClick\" @row-dblclick=\"dbInEditClick\">\n            <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n            <el-table-column prop=\"licenseKey\" show-overflow-tooltip min-width=\"20%\" label=\"许可证号\">\n              <template slot-scope=\"scope\">\n                <a @click=\"dbInEditClick(scope.row)\" class=\"a-btn\">{{scope.row.licenseKey}}</a>\n              </template>\n            </el-table-column>\n            <el-table-column prop=\"count\" show-overflow-tooltip min-width=\"20%\" label=\"许可数量\"></el-table-column>\n            <el-table-column prop=\"companyName\" show-overflow-tooltip min-width=\"20%\" label=\"进口商\"></el-table-column>\n            <el-table-column prop=\"skuName\" show-overflow-tooltip min-width=\"20%\" label=\"商品名称\"></el-table-column>\n            <el-table-column prop=\"expirationDateOfLicense\" show-overflow-tooltip min-width=\"20%\" label=\"许可证截止日期\"></el-table-column>\n          </el-table>\n          <div class=\"fr\" style=\"margin-top:5px;\">\n            <el-pagination @size-change=\"myHandleSizeChange\" @current-change=\"myHandleCurrentChange\" :current-page=\"myCurrentPage\" :page-sizes=\"myPageSizes\" :page-size=\"myPageSize\" :total=\"myTotal\" layout=\"total, sizes, prev, pager, next\">\n            </el-pagination>\n          </div>\n        </div>\n      </el-tab-pane>\n      <!-- 出口 -->\n      <el-tab-pane label='出口' name='outlicense'>\n        <el-toolbar>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"outAddClick\">\n            <i class=\"fa fa-plus\"></i>添加</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"outSelectedRows.length !== 1\" @click=\"outEditClick\">\n            <i class=\"fa fa-edit\"></i>编辑</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"outSelectedRows.length < 1\" @click=\"outDeleteClick\">\n            <i class=\"fa fa-trash-o\"></i>删除</el-button>\n        </el-toolbar>\n        <div class=\"main-content-wrap\">\n          <div class=\"search-bar fr\">\n            许可证号:\n            <el-input v-model=\"outsearch.licenseKey\" size=\"small\" placeholder=\"请输入许可证号\" style=\"width: 200px;\"></el-input>\n            出口商：\n            <el-input v-model=\"outsearch.companyName\" size=\"small\" placeholder=\"请输入出口商\" style=\"width: 200px;\"></el-input>\n            <el-button size=\"small\" type=\"primary\" @click=\"loadOutlicenseList\"> 搜 索 </el-button>\n          </div>\n          <el-table ref=\"apTabelRef\" :data=\"outLicenseData\" tooltip-effect=\"dark\" style=\"width: 100%\" :height=\"clientHeight\" @selection-change=\"outOnSelectionChange\" @row-click=\"onOutRowClick\" @row-dblclick=\"dbOutEditClick\">\n            <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n            <el-table-column prop=\"licenseKey\" show-overflow-tooltip min-width=\"20%\" label=\"许可证号\">\n              <template slot-scope=\"scope\">\n                <a @click=\"dbOutEditClick(scope.row)\" class=\"a-btn\">{{scope.row.licenseKey}}</a>\n              </template>\n            </el-table-column>\n            <el-table-column prop=\"count\" show-overflow-tooltip min-width=\"20%\" label=\"许可数量\"></el-table-column>\n            <el-table-column prop=\"companyName\" show-overflow-tooltip min-width=\"20%\" label=\"出口商\"></el-table-column>\n            <el-table-column prop=\"skuName\" show-overflow-tooltip min-width=\"20%\" label=\"商品名称\"></el-table-column>\n            <el-table-column prop=\"expirationDateOfLicense\" show-overflow-tooltip min-width=\"20%\" label=\"许可证截止日期\"></el-table-column>\n          </el-table>\n          <div class=\"fr\" style=\"margin-top:5px;\">\n            <el-pagination @size-change=\"apHandleSizeChange\" @current-change=\"apHandleCurrentChange\" :current-page=\"apCurrentPage\" :page-sizes=\"apPageSizes\" :page-size=\"apPageSize\" :total=\"apTotal\" layout=\"total, sizes, prev, pager, next\">\n            </el-pagination>\n          </div>\n        </div>\n      </el-tab-pane>\n    </el-tabs>\n    <!-- 添加、编辑进口许可证 -->\n    <el-dialog :title=\"editMode===1?'添加进口许可证':'编辑进口许可证'\" :visible.sync=\"inLicenseShow\" @open=\"beforeDialogOpen\">\n      <el-form :model=\"inLicenseModel\" :rules=\"inLicenseRules\" inline ref=\"inLicenseRef\" label-width=\"140px\" style=\"overflow-y:hidden;overflow-x:hidden;\">\n\n        <el-form-item label=\"进口商\" v-if=\"editMode===1\">\n          <el-select v-model=\"inLicenseModel.companyName\" clearable placeholder=\"请选择\" @change=\"onCompanyChange\" :disabled=\"editMode===1?ture:false\" style=\"width:320px\">\n            <el-option v-for=\"item in companys\" :key=\"item.id\" :label=\"item.name\" :value=\"item.name\">\n            </el-option>\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"进口商\" v-if=\"editMode===2\">\n          <el-input type=\"text\" v-model=\"inLicenseModel.companyName\" auto-complete=\"off\" class=\"input-320\" disabled></el-input>\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"许可证号\" prop=\"licenseKey\">\n          <el-input type=\"text\" v-model=\"inLicenseModel.licenseKey\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"许可数量\" prop=\"count\">\n          <el-input-number v-model=\"inLicenseModel.count\" class=\"input-320\"></el-input-number>\n        </el-form-item>\n        <el-form-item label=\"商品编号\" prop=\"sku\">\n          <el-select class=\"e-input\" filterable v-model=\"inLicenseModel.sku\" placeholder=\"请选择\" style=\"width:320px\" @change=\"onInSkuChange\">\n            <el-option v-for=\"item in SKUData\" :key=\"item.sn\" :label=\"item.sn\" :value=\"item.sn\">\n              <span style=\"float: left\">{{ item.sn }}</span>\n              <span style=\"float: right; color: #8492a6; font-size: 13px\">{{ item.name }}</span>\n            </el-option>\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"许可证截止日期\" prop=\"expirationDateOfLicense\">\n          <el-date-picker v-model=\"inLicenseModel.expirationDateOfLicense\" type=\"date\" @change=\"inDateChangeClick\" placeholder=\"选择日期\" class=\"input-320\"></el-date-picker>\n        </el-form-item>\n        <el-form-item label=\"备注\" prop=\"memo\">\n          <el-input type=\"text\" v-model=\"inLicenseModel.memo\" auto-complete=\"off\" style=\"width:320px\"></el-input>\n        </el-form-item>\n\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"inLicenseShow=false\">取消</el-button>\n        <el-button type=\"primary\" @click=\"inOkHandler\" :loading=\"confirmLoading\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n    <!-- 添加、编辑出口许可证 -->\n    <el-dialog :title=\"outeditMode===1?'添加出口许可证':'编辑出口许可证'\" :visible.sync=\"outLicenseShow\" @open=\"beforeDialogOpen\">\n      <el-form :model=\"outLicenseModel\" :rules=\"outLicenseRules\" inline ref=\"outLicenseRef\" label-width=\"140px\" style=\"overflow-y:hidden;overflow-x:hidden;\">\n        <el-form-item label=\"出口商\" v-if=\"outeditMode===1\">\n          <el-select v-model=\"outLicenseModel.companyName\" clearable placeholder=\"请选择\" @change=\"onCompanyChange\" style=\"width:320px\">\n            <el-option v-for=\"item in companys\" :key=\"item.id\" :label=\"item.name\" :value=\"item.name\">\n            </el-option>\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"进口商\" v-if=\"outeditMode===2\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.companyName\" auto-complete=\"off\" class=\"input-320\" disabled></el-input>\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"许可证号\" prop=\"licenseKey\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.licenseKey\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"许可数量\" prop=\"count\">\n          <el-input-number v-model=\"outLicenseModel.count\" class=\"input-320\"></el-input-number>\n        </el-form-item>\n        <el-form-item label=\"商品编号\" prop=\"sku\">\n          <el-select class=\"e-input\" filterable v-model=\"outLicenseModel.sku\" placeholder=\"请选择\" style=\"width:320px\" @change=\"onOutSkuChange\">\n            <el-option v-for=\"item in SKUData\" :key=\"item.sn\" :label=\"item.sn\" :value=\"item.sn\">\n              <span style=\"float: left\">{{ item.sn }}</span>\n              <span style=\"float: right; color: #8492a6; font-size: 13px\">{{ item.name }}</span>\n            </el-option>\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"许可证截止日期\" prop=\"expirationDateOfLicense\">\n          <el-date-picker v-model=\"outLicenseModel.expirationDateOfLicense\" @change=\"outDateChangeClick\" type=\"date\" placeholder=\"选择日期\" class=\"input-320\"></el-date-picker>\n        </el-form-item>\n        <el-form-item label=\"备注\" prop=\"memo\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.memo\" auto-complete=\"off\" style=\"width:320px\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"outLicenseShow=false\">取消</el-button>\n        <el-button type=\"primary\" @click=\"outOkHandler\" :loading=\"confirmLoading\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n  </div>\n</template>\n\n<script>\nimport './mock/license.js';\nimport licenseAPI from './api/licenseAPI.js';\nimport licensegoodsTable from './components/licensegoodsTable.vue';\nimport skuAPI from './api/skuAPI.js';\nimport companyAPI from './api/companyAPI.js';\nexport default {\n  data() {\n    return {\n      clientHeight: 0,\n      clientWidth: 0,\n      /*我的申请表格*/\n      inLicenseData: [],\n      /*待我审批表格*/\n      outLicenseData: [],\n      /*我的申请数据模型*/\n      inLicenseModel: {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n      },\n      outLicenseModel: {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n      },\n      /*进口搜索*/\n      insearch: {\n        licenseKey: '',\n        importAndExportcode: '',\n        companyName: '',\n        type: 'in',\n      },\n      /*出口搜索*/\n      outsearch: {\n        licenseKey: '',\n        importAndExportcode: '',\n        companyName: '',\n        type: 'out',\n      },\n      /*激活的tab页 */\n      activeName: 'inlicense',\n      /*我的申请表单校验规则 */\n      inLicenseRules: {\n        name: [{ required: true, message: '请输入项目名称', trigger: 'blur' }],\n        manager: [{ required: true, message: '请输入项目负责人', trigger: 'blur' }],\n      },\n      /*编辑添加框是否可见 */\n      inLicenseShow: false,\n      /*编辑添加框是否可见 */\n      outLicenseShow: false,\n      /*文件列表查看、编辑框是否可见 */\n      myFileDialogIsShow: false,\n      /*文件上传框是否可见 */\n      fileUploadDialogIsShow: false,\n      /*文件预览框是否显示 */\n      fileViewDialogIsShow: false,\n      /*审批进度 */\n      failDialogIsShow: false,\n      passDialogIsShow: false,\n      loadDialogIsShow: false,\n      /*进口许可证编辑模式：1添加，2编辑*/\n      editMode: 1,\n      /*出口许可证编辑模式：1添加，2编辑*/\n      outeditMode: 1,\n      /*文件类型：1申报文件，2审批文件 */\n      fileType: 1,\n      /*表单提交等待动画*/\n      confirmLoading: false,\n      /*我的申请表格选中行*/\n      inSelectedRows: [],\n      /*待我审核表格选中行*/\n      outSelectedRows: [],\n      /*文件表格选中行 */\n      fileSelectedRows: [],\n      /*开始日期初始化 */\n      startdatepicker: '',\n      /*结束日期初始化 */\n      enddatepicker: '',\n      /*我的申请当前页 */\n      myCurrentPage: 1,\n      /*我的申请表格可选页面大小*/\n      myPageSizes: [5, 10, 15, 20],\n      /*我的申请表格当前页面大小 */\n      myPageSize: 10,\n      /*我的申请表格数据总条数 */\n      myTotal: 16,\n      /*待我审核当前页 */\n      apCurrentPage: 1,\n      /*待我审核表格可选页面大小*/\n      apPageSizes: [5, 10, 15, 20],\n      /*待我审核表格当前页面大小 */\n      apPageSize: 10,\n      /*待我审核表格数据总条数 */\n      apTotal: 21,\n      /*文件列表数据 */\n      fileTableData: [],\n      /*文件上传初始化 */\n      fileList: [],\n      /*进度条百分比 */\n      percentage: 0,\n      // i: 0,\n      SKUData: [],\n      companys: {}\n\n    };\n  },\n  methods: {\n    onInSkuChange(val) {\n      let skuName = '';\n      this.SKUData.forEach(function(row) {\n        if (row.sn == val) {\n          skuName = row.name;\n          return;\n        }\n      });\n      this.inLicenseModel.skuName = skuName;\n    },\n    onOutSkuChange(val) {\n      let skuName = '';\n      this.SKUData.forEach(function(row) {\n        if (row.sn == val) {\n          skuName = row.name;\n          return;\n        }\n      });\n      this.outLicenseModel.skuName = skuName;\n    },\n    //单击一行选中当前行、单击多选框增加选中当前行\n    onInRowClick(row, event, column) {\n      if (column.type != \"selection\") {\n        this.$refs.myTabelRef.clearSelection();\n      }\n      this.$refs.myTabelRef.toggleRowSelection(row);\n    },\n    onOutRowClick(row, event, column) {\n      if (column.type != \"selection\") {\n        this.$refs.apTabelRef.clearSelection();\n      }\n      this.$refs.apTabelRef.toggleRowSelection(row);\n    },\n    //双击\n    dbInEditClick(row) {\n      this.editMode = 2;\n      this.inLicenseShow = true;\n      this.inLicenseModel = Object.assign({}, row);\n    },\n    dbOutEditClick(row) {\n      this.outeditMode = 2;\n      this.outLicenseShow = true;\n      this.outLicenseModel = Object.assign({}, row);\n    },\n    //格式化时间 格式化时间为yyyy-MM-dd hh:mm:ss\n    formatDate(date, fmt) {\n      if (/(y+)/.test(fmt)) {\n        fmt = fmt.replace(\n          RegExp.$1,\n          (date.getFullYear() + '').substr(4 - RegExp.$1.length)\n        )\n      }\n      let o = {\n        'M+': date.getMonth() + 1,\n        'd+': date.getDate(),\n        'h+': date.getHours(),\n        'm+': date.getMinutes(),\n        's+': date.getSeconds()\n      }\n      for (let k in o) {\n        if (new RegExp(`(${k})`).test(fmt)) {\n          let str = o[k] + ''\n          fmt = fmt.replace(\n            RegExp.$1,\n            RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length)\n          )\n        }\n      }\n      return fmt\n    },\n    outDateChangeClick() {\n      if (this.outLicenseModel.expirationDateOfLicense) {\n        this.outLicenseModel.expirationDateOfLicense = this.formatDate(new Date(this.outLicenseModel.expirationDateOfLicense), 'yyyy-MM-dd');\n      } else {\n        this.outLicenseModel.expirationDateOfLicense = '';\n      }\n    },\n    inDateChangeClick() {\n      if (this.inLicenseModel.expirationDateOfLicense) {\n        this.inLicenseModel.expirationDateOfLicense = this.formatDate(new Date(this.inLicenseModel.expirationDateOfLicense), 'yyyy-MM-dd');\n      } else {\n        this.inLicenseModel.expirationDateOfLicense = '';\n      }\n    },\n    //加载企业列表共选择\n    loadCompany() {\n      if (!this.companys.length > 0) {\n        companyAPI.getCompany().then(data => {\n          this.companys = data.data;\n        })\n      }\n    },\n    //加载SKU\n    beforeDialogOpen() {\n      this.loadCompany();\n      if (!this.SKUData.length > 0) {\n        skuAPI\n          .getSKU()\n          .then(data => {\n            this.SKUData = data;\n          });\n      }\n    },\n    /*添加进口许可证*/\n    inAddClick() {\n      this.editMode = 1;\n      this.inLicenseModel = {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n        type: 'in',\n      };\n      this.inLicenseShow = true;\n      this.selectedLicensegoodsRow = [];\n    },\n    /*编辑进口许可证*/\n    inEditClick() {\n      this.editMode = 2;\n      this.inLicenseModel = Object.assign(\n        {},\n        this.inLicenseModel,\n        this.inSelectedRows[0]\n      );\n      this.inLicenseShow = true;\n      this.selectedLicensegoodsRow = [];\n    },\n    /*删除进口许可证*/\n    inDeleteClick() {\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done();\n            return;\n          }\n          this.confirmLoading = true;\n          let ids = [];\n          this.inSelectedRows.forEach(function(row) {\n            ids.push(row.id);\n          });\n          let idstr = ids.join();\n          return licenseAPI.deleteLicense(idstr)\n            .then(data => {\n              this.confirmLoading = false;\n              done(data);\n              this.inLicenseData = this.inLicenseData.filter(\n                val => !ids.includes(val.id)\n              );\n            });\n        },\n      }).then(data => {\n        this.inSelectedRows = [];\n        this.loadInlicenseList();\n        this.$notify({\n          title: '提示',\n          message: '删除成功！',\n          type: 'success',\n          duration: 2000,\n        });\n      })\n    },\n\n    /*添加出口许可证*/\n    outAddClick() {\n      this.outeditMode = 1;\n      this.outLicenseModel = {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n        type: 'out',\n      };\n      this.outLicenseShow = true;\n      this.selectedLicensegoodsRow = [];\n    },\n    /*编辑出口许可证*/\n    outEditClick() {\n      this.outeditMode = 2;\n      this.outLicenseModel = Object.assign(\n        {},\n        this.outLicenseModel,\n        this.outSelectedRows[0]\n      );\n      this.outLicenseShow = true;\n      this.selectedLicensegoodsRow = [];\n    },\n    /*删除出口许可证*/\n    outDeleteClick() {\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done();\n            return;\n          }\n          this.confirmLoading = true;\n          let ids = [];\n          this.outSelectedRows.forEach(function(row) {\n            ids.push(row.id);\n          });\n          let idstr = ids.join();\n          return licenseAPI.deleteLicense(idstr)\n            .then(data => {\n              this.confirmLoading = false;\n              done(data);\n              this.outLicenseData = this.outLicenseData.filter(\n                val => !ids.includes(val.id)\n              );\n            });\n        },\n      }).then(data => {\n        this.outSelectedRows = [];\n        this.loadOutlicenseList();\n        this.$notify({\n          title: '提示',\n          message: '删除成功！',\n          type: 'success',\n          duration: 2000,\n        });\n      })\n    },\n\n    /*进口表格选中行改变*/\n    inOnSelectionChange(selection) {\n      this.inSelectedRows = selection;\n    },\n    /*保存进口许可证 */\n    inOkHandler() {\n      console.log(this.inLicenseModel);\n      let validateForm = () => {\n        return new Promise((resolve, reject) => {\n          this.$refs['inLicenseRef'].validate(valid => {\n            if (valid) {\n              return resolve(true);\n            }\n            return reject(false);\n          });\n        });\n      };\n      let addForm = (res) => {\n        licenseAPI.addLicense(this.inLicenseModel).then(data => {\n          if (data.status == 200) {\n            this.$notify({\n              title: '成功',\n              message: '保存成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n          this.loadInlicenseList();\n        });\n      };\n\n      let editForm = (res) => {\n        let index = this.inLicenseData.findIndex(\n          val => val.id === this.inLicenseModel.id\n        );\n        licenseAPI.updateLicense(this.inLicenseModel).then(data => {\n          if (data.status == 200) {\n            this.$notify({\n              title: '成功',\n              message: '修改成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n          this.loadInlicenseList();\n        });\n      };\n\n      validateForm().then(() => {\n        this.confirmLoading = true;\n        if (this.editMode === 1) {\n          addForm();\n        }\n        if (this.editMode === 2) {\n          editForm();\n        }\n      }).then(res => {\n\n        this.confirmLoading = false;\n        this.inLicenseShow = false;\n      });\n    },\n\n    /*保存出口许可证 */\n    outOkHandler() {\n      let validateForm = () => {\n        return new Promise((resolve, reject) => {\n          this.$refs['outLicenseRef'].validate(valid => {\n            if (valid) {\n              return resolve(true);\n            }\n            return reject(false);\n          });\n        });\n      };\n      let outaddForm = () => {\n        licenseAPI.addLicense(this.outLicenseModel).then(data => {\n          if (data.status == 200) {\n            this.$notify({\n              title: '成功',\n              message: '保存成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n          this.loadOutlicenseList();\n        });\n      };\n\n      let outeditForm = () => {\n        let index = this.outLicenseData.findIndex(\n          val => val.id === this.outLicenseModel.id\n        );\n        licenseAPI.updateLicense(this.outLicenseModel).then(data => {\n          if (data.status == 200) {\n            this.$notify({\n              title: '成功',\n              message: '修改成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n          this.loadOutlicenseList();\n        });\n      };\n\n      validateForm()\n        .then(() => {\n          this.confirmLoading = true;\n          if (this.outeditMode === 1) {\n            outaddForm();\n          }\n          if (this.outeditMode === 2) {\n            outeditForm();\n          }\n        })\n        .then(res => {\n          this.confirmLoading = false;\n          this.outLicenseShow = false;\n\n        });\n    },\n\n    /*出口表格选中行改变*/\n    outOnSelectionChange(selection) {\n      this.outSelectedRows = selection;\n    },\n\n    /*加载进口许可证数据 */\n    loadInlicenseList() {\n      let pagedata = {\n        pageindex: this.myCurrentPage,\n        pagesize: this.myPageSize,\n      };\n      let search = Object.assign({}, this.insearch, pagedata);\n      licenseAPI.getInlicenseList(search).then(data => {\n        this.inLicenseData = data;\n        this.myTotal = data.length;\n        //搜索\n        let tempLicenseKey = this.insearch.licenseKey;\n        let tempCompanyName = this.insearch.companyName;\n        if (tempLicenseKey != '') {\n          this.inLicenseData = this.inLicenseData.filter(\n            val => val.licenseKey.indexOf(tempLicenseKey) != -1\n          );\n        }\n        if (tempCompanyName != '') {\n          this.inLicenseData = this.inLicenseData.filter(\n            val => val.companyName.indexOf(tempCompanyName) != -1\n          );\n        }\n      });\n    },\n    /*加载出口许可证数据 */\n    loadOutlicenseList() {\n      let pagedata = {\n        pageindex: this.myCurrentPage,\n        pagesize: this.myPageSize,\n      };\n      let search = Object.assign({}, this.outsearch, pagedata);\n      licenseAPI.getOutlicenseList(search).then(data => {\n        this.outLicenseData = data;\n        this.apTotal = data.length;\n        //搜索\n        let tempLicenseKey = this.outsearch.licenseKey;\n        let tempCompanyName = this.outsearch.companyName;\n        if (tempLicenseKey != '') {\n          this.outLicenseData = this.outLicenseData.filter(\n            val => val.licenseKey.indexOf(tempLicenseKey) != -1\n          );\n        }\n        if (tempCompanyName != '') {\n          this.outLicenseData = this.outLicenseData.filter(\n            val => val.companyName.indexOf(tempCompanyName) != -1\n          );\n        }\n      });\n    },\n\n    /*改变我的申请表格大小 */\n    myHandleSizeChange(val) {\n      this.myPageSize = val;\n      this.loadInlicenseList();\n    },\n    /*改变我的申请表格当前页 */\n    myHandleCurrentChange(val) {\n      this.myCurrentPage = val;\n      this.loadInlicenseList();\n    },\n    /*改变待我审核表格大小 */\n    apHandleSizeChange(val) {\n      this.apPageSize = val;\n      this.loadOutlicenseList();\n    },\n    /*改变待我审核表格当前页 */\n    apHandleCurrentChange(val) {\n      this.apCurrentPage = val;\n      this.loadOutlicenseList();\n    },\n  },\n  created() {\n    this.clientHeight = document.documentElement.clientHeight - 270;\n    let num = Math.floor(this.clientHeight / 40) - 1;\n    this.apPageSize = Math.floor(num / 5) * 5;\n    this.apPageSizes = [\n      this.apPageSize,\n      this.apPageSize * 2,\n      this.apPageSize * 4,\n    ];\n    this.myPageSize = Math.floor(num / 5) * 5;\n    this.myPageSizes = [\n      this.myPageSize,\n      this.myPageSize * 2,\n      this.myPageSize * 4,\n    ];\n    this.loadInlicenseList();\n    this.loadOutlicenseList();\n  },\n  components: {\n    'licensegoods-table': licensegoodsTable,\n  },\n};\n</script>\n\n<style>\n.projPage .el-tabs__header {\n  margin-bottom: 0;\n}\n\ninput[type='file'].el-upload__input {\n  display: none !important;\n  margin-bottom: -20px;\n}\n</style>\n\n<style scoped>\n.main-content-wrap {\n  padding: 10px;\n}\n\n.search-bar {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.demo-table-expand {\n  font-size: 12px;\n}\n\n.demo-table-expand label {\n  color: #99a9bf;\n}\n\n.demo-table-expand .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 47%;\n}\n\n.e-form .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n\n.filelist-toolbar {\n  margin-left: 1px;\n}\n\n.fileView-content {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 5px;\n  line-height: 20px;\n}\n\n.input-320 {\n  width: 320px;\n}\n\n.form-title {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 6%;\n  padding: 10px 0 5px 0;\n}\n\n.form-panel {\n  width: 90%;\n  margin-left: 5%;\n  padding: 20px 0 0 0;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.goods-panel {\n  width: 90%;\n  margin-left: 5%;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("03a53fea", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be44211\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./license.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be44211\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./license.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-5be44211] {\n  padding: 10px;\n}\n.search-bar[data-v-5be44211] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-5be44211] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-5be44211] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-5be44211] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 47%;\n}\n.e-form .el-form-item[data-v-5be44211] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.filelist-toolbar[data-v-5be44211] {\n  margin-left: 1px;\n}\n.fileView-content[data-v-5be44211] {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 5px;\n  line-height: 20px;\n}\n.input-320[data-v-5be44211] {\n  width: 320px;\n}\n.form-title[data-v-5be44211] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 6%;\n  padding: 10px 0 5px 0;\n}\n.form-panel[data-v-5be44211] {\n  width: 90%;\n  margin-left: 5%;\n  padding: 20px 0 0 0;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.goods-panel[data-v-5be44211] {\n  width: 90%;\n  margin-left: 5%;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/license.vue?b83f8690"],"names":[],"mappings":";AA8vBA;EACA,cAAA;CACA;AAEA;EACA,kBAAA;EACA,qBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,iBAAA;CACA;AAEA;EACA,YAAA;EACA,uBAAA;EACA,aAAA;EACA,kBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;CACA;AAEA;EACA,WAAA;EACA,gBAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;CACA;AAEA;EACA,WAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;CACA","file":"license.vue","sourcesContent":["<template>\n  <div>\n    <el-tabs v-model=\"activeName\" class=\"projPage\">\n      <!-- 进口 -->\n      <el-tab-pane label='进口' name='inlicense'>\n        <el-toolbar>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"inAddClick\">\n            <i class=\"fa fa-plus\"></i>添加</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"inSelectedRows.length !== 1\" @click=\"inEditClick\">\n            <i class=\"fa fa-edit\"></i>编辑</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"inSelectedRows.length < 1\" @click=\"inDeleteClick\">\n            <i class=\"fa fa-trash-o\"></i>删除</el-button>\n        </el-toolbar>\n        <div class=\"main-content-wrap\">\n          <div class=\"search-bar fr\">\n            许可证号:\n            <el-input v-model=\"insearch.licenseKey\" size=\"small\" placeholder=\"请输入许可证号\" style=\"width: 200px;\"></el-input>\n            进口商：\n            <el-input v-model=\"insearch.companyName\" size=\"small\" placeholder=\"请输入进口商\" style=\"width: 200px;\"></el-input>\n            <el-button size=\"small\" type=\"primary\" @click=\"loadInlicenseList\"> 搜 索 </el-button>\n          </div>\n          <el-table ref=\"myTabelRef\" :data=\"inLicenseData\" tooltip-effect=\"dark\" style=\"width: 100%\" :height=\"clientHeight\" @selection-change=\"inOnSelectionChange\" @row-click=\"onInRowClick\" @row-dblclick=\"dbInEditClick\">\n            <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n            <el-table-column prop=\"licenseKey\" show-overflow-tooltip min-width=\"20%\" label=\"许可证号\">\n              <template slot-scope=\"scope\">\n                <a @click=\"dbInEditClick(scope.row)\" class=\"a-btn\">{{scope.row.licenseKey}}</a>\n              </template>\n            </el-table-column>\n            <el-table-column prop=\"count\" show-overflow-tooltip min-width=\"20%\" label=\"许可数量\"></el-table-column>\n            <el-table-column prop=\"companyName\" show-overflow-tooltip min-width=\"20%\" label=\"进口商\"></el-table-column>\n            <el-table-column prop=\"skuName\" show-overflow-tooltip min-width=\"20%\" label=\"商品名称\"></el-table-column>\n            <el-table-column prop=\"expirationDateOfLicense\" show-overflow-tooltip min-width=\"20%\" label=\"许可证截止日期\"></el-table-column>\n          </el-table>\n          <div class=\"fr\" style=\"margin-top:5px;\">\n            <el-pagination @size-change=\"myHandleSizeChange\" @current-change=\"myHandleCurrentChange\" :current-page=\"myCurrentPage\" :page-sizes=\"myPageSizes\" :page-size=\"myPageSize\" :total=\"myTotal\" layout=\"total, sizes, prev, pager, next\">\n            </el-pagination>\n          </div>\n        </div>\n      </el-tab-pane>\n      <!-- 出口 -->\n      <el-tab-pane label='出口' name='outlicense'>\n        <el-toolbar>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"outAddClick\">\n            <i class=\"fa fa-plus\"></i>添加</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"outSelectedRows.length !== 1\" @click=\"outEditClick\">\n            <i class=\"fa fa-edit\"></i>编辑</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"outSelectedRows.length < 1\" @click=\"outDeleteClick\">\n            <i class=\"fa fa-trash-o\"></i>删除</el-button>\n        </el-toolbar>\n        <div class=\"main-content-wrap\">\n          <div class=\"search-bar fr\">\n            许可证号:\n            <el-input v-model=\"outsearch.licenseKey\" size=\"small\" placeholder=\"请输入许可证号\" style=\"width: 200px;\"></el-input>\n            出口商：\n            <el-input v-model=\"outsearch.companyName\" size=\"small\" placeholder=\"请输入出口商\" style=\"width: 200px;\"></el-input>\n            <el-button size=\"small\" type=\"primary\" @click=\"loadOutlicenseList\"> 搜 索 </el-button>\n          </div>\n          <el-table ref=\"apTabelRef\" :data=\"outLicenseData\" tooltip-effect=\"dark\" style=\"width: 100%\" :height=\"clientHeight\" @selection-change=\"outOnSelectionChange\" @row-click=\"onOutRowClick\" @row-dblclick=\"dbOutEditClick\">\n            <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n            <el-table-column prop=\"licenseKey\" show-overflow-tooltip min-width=\"20%\" label=\"许可证号\">\n              <template slot-scope=\"scope\">\n                <a @click=\"dbOutEditClick(scope.row)\" class=\"a-btn\">{{scope.row.licenseKey}}</a>\n              </template>\n            </el-table-column>\n            <el-table-column prop=\"count\" show-overflow-tooltip min-width=\"20%\" label=\"许可数量\"></el-table-column>\n            <el-table-column prop=\"companyName\" show-overflow-tooltip min-width=\"20%\" label=\"出口商\"></el-table-column>\n            <el-table-column prop=\"skuName\" show-overflow-tooltip min-width=\"20%\" label=\"商品名称\"></el-table-column>\n            <el-table-column prop=\"expirationDateOfLicense\" show-overflow-tooltip min-width=\"20%\" label=\"许可证截止日期\"></el-table-column>\n          </el-table>\n          <div class=\"fr\" style=\"margin-top:5px;\">\n            <el-pagination @size-change=\"apHandleSizeChange\" @current-change=\"apHandleCurrentChange\" :current-page=\"apCurrentPage\" :page-sizes=\"apPageSizes\" :page-size=\"apPageSize\" :total=\"apTotal\" layout=\"total, sizes, prev, pager, next\">\n            </el-pagination>\n          </div>\n        </div>\n      </el-tab-pane>\n    </el-tabs>\n    <!-- 添加、编辑进口许可证 -->\n    <el-dialog :title=\"editMode===1?'添加进口许可证':'编辑进口许可证'\" :visible.sync=\"inLicenseShow\" @open=\"beforeDialogOpen\">\n      <el-form :model=\"inLicenseModel\" :rules=\"inLicenseRules\" inline ref=\"inLicenseRef\" label-width=\"140px\" style=\"overflow-y:hidden;overflow-x:hidden;\">\n\n        <el-form-item label=\"进口商\" v-if=\"editMode===1\">\n          <el-select v-model=\"inLicenseModel.companyName\" clearable placeholder=\"请选择\" @change=\"onCompanyChange\" :disabled=\"editMode===1?ture:false\" style=\"width:320px\">\n            <el-option v-for=\"item in companys\" :key=\"item.id\" :label=\"item.name\" :value=\"item.name\">\n            </el-option>\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"进口商\" v-if=\"editMode===2\">\n          <el-input type=\"text\" v-model=\"inLicenseModel.companyName\" auto-complete=\"off\" class=\"input-320\" disabled></el-input>\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"许可证号\" prop=\"licenseKey\">\n          <el-input type=\"text\" v-model=\"inLicenseModel.licenseKey\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"许可数量\" prop=\"count\">\n          <el-input-number v-model=\"inLicenseModel.count\" class=\"input-320\"></el-input-number>\n        </el-form-item>\n        <el-form-item label=\"商品编号\" prop=\"sku\">\n          <el-select class=\"e-input\" filterable v-model=\"inLicenseModel.sku\" placeholder=\"请选择\" style=\"width:320px\" @change=\"onInSkuChange\">\n            <el-option v-for=\"item in SKUData\" :key=\"item.sn\" :label=\"item.sn\" :value=\"item.sn\">\n              <span style=\"float: left\">{{ item.sn }}</span>\n              <span style=\"float: right; color: #8492a6; font-size: 13px\">{{ item.name }}</span>\n            </el-option>\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"许可证截止日期\" prop=\"expirationDateOfLicense\">\n          <el-date-picker v-model=\"inLicenseModel.expirationDateOfLicense\" type=\"date\" @change=\"inDateChangeClick\" placeholder=\"选择日期\" class=\"input-320\"></el-date-picker>\n        </el-form-item>\n        <el-form-item label=\"备注\" prop=\"memo\">\n          <el-input type=\"text\" v-model=\"inLicenseModel.memo\" auto-complete=\"off\" style=\"width:320px\"></el-input>\n        </el-form-item>\n\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"inLicenseShow=false\">取消</el-button>\n        <el-button type=\"primary\" @click=\"inOkHandler\" :loading=\"confirmLoading\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n    <!-- 添加、编辑出口许可证 -->\n    <el-dialog :title=\"outeditMode===1?'添加出口许可证':'编辑出口许可证'\" :visible.sync=\"outLicenseShow\" @open=\"beforeDialogOpen\">\n      <el-form :model=\"outLicenseModel\" :rules=\"outLicenseRules\" inline ref=\"outLicenseRef\" label-width=\"140px\" style=\"overflow-y:hidden;overflow-x:hidden;\">\n        <el-form-item label=\"出口商\" v-if=\"outeditMode===1\">\n          <el-select v-model=\"outLicenseModel.companyName\" clearable placeholder=\"请选择\" @change=\"onCompanyChange\" style=\"width:320px\">\n            <el-option v-for=\"item in companys\" :key=\"item.id\" :label=\"item.name\" :value=\"item.name\">\n            </el-option>\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"进口商\" v-if=\"outeditMode===2\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.companyName\" auto-complete=\"off\" class=\"input-320\" disabled></el-input>\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"许可证号\" prop=\"licenseKey\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.licenseKey\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"许可数量\" prop=\"count\">\n          <el-input-number v-model=\"outLicenseModel.count\" class=\"input-320\"></el-input-number>\n        </el-form-item>\n        <el-form-item label=\"商品编号\" prop=\"sku\">\n          <el-select class=\"e-input\" filterable v-model=\"outLicenseModel.sku\" placeholder=\"请选择\" style=\"width:320px\" @change=\"onOutSkuChange\">\n            <el-option v-for=\"item in SKUData\" :key=\"item.sn\" :label=\"item.sn\" :value=\"item.sn\">\n              <span style=\"float: left\">{{ item.sn }}</span>\n              <span style=\"float: right; color: #8492a6; font-size: 13px\">{{ item.name }}</span>\n            </el-option>\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"许可证截止日期\" prop=\"expirationDateOfLicense\">\n          <el-date-picker v-model=\"outLicenseModel.expirationDateOfLicense\" @change=\"outDateChangeClick\" type=\"date\" placeholder=\"选择日期\" class=\"input-320\"></el-date-picker>\n        </el-form-item>\n        <el-form-item label=\"备注\" prop=\"memo\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.memo\" auto-complete=\"off\" style=\"width:320px\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"outLicenseShow=false\">取消</el-button>\n        <el-button type=\"primary\" @click=\"outOkHandler\" :loading=\"confirmLoading\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n  </div>\n</template>\n\n<script>\nimport './mock/license.js';\nimport licenseAPI from './api/licenseAPI.js';\nimport licensegoodsTable from './components/licensegoodsTable.vue';\nimport skuAPI from './api/skuAPI.js';\nimport companyAPI from './api/companyAPI.js';\nexport default {\n  data() {\n    return {\n      clientHeight: 0,\n      clientWidth: 0,\n      /*我的申请表格*/\n      inLicenseData: [],\n      /*待我审批表格*/\n      outLicenseData: [],\n      /*我的申请数据模型*/\n      inLicenseModel: {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n      },\n      outLicenseModel: {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n      },\n      /*进口搜索*/\n      insearch: {\n        licenseKey: '',\n        importAndExportcode: '',\n        companyName: '',\n        type: 'in',\n      },\n      /*出口搜索*/\n      outsearch: {\n        licenseKey: '',\n        importAndExportcode: '',\n        companyName: '',\n        type: 'out',\n      },\n      /*激活的tab页 */\n      activeName: 'inlicense',\n      /*我的申请表单校验规则 */\n      inLicenseRules: {\n        name: [{ required: true, message: '请输入项目名称', trigger: 'blur' }],\n        manager: [{ required: true, message: '请输入项目负责人', trigger: 'blur' }],\n      },\n      /*编辑添加框是否可见 */\n      inLicenseShow: false,\n      /*编辑添加框是否可见 */\n      outLicenseShow: false,\n      /*文件列表查看、编辑框是否可见 */\n      myFileDialogIsShow: false,\n      /*文件上传框是否可见 */\n      fileUploadDialogIsShow: false,\n      /*文件预览框是否显示 */\n      fileViewDialogIsShow: false,\n      /*审批进度 */\n      failDialogIsShow: false,\n      passDialogIsShow: false,\n      loadDialogIsShow: false,\n      /*进口许可证编辑模式：1添加，2编辑*/\n      editMode: 1,\n      /*出口许可证编辑模式：1添加，2编辑*/\n      outeditMode: 1,\n      /*文件类型：1申报文件，2审批文件 */\n      fileType: 1,\n      /*表单提交等待动画*/\n      confirmLoading: false,\n      /*我的申请表格选中行*/\n      inSelectedRows: [],\n      /*待我审核表格选中行*/\n      outSelectedRows: [],\n      /*文件表格选中行 */\n      fileSelectedRows: [],\n      /*开始日期初始化 */\n      startdatepicker: '',\n      /*结束日期初始化 */\n      enddatepicker: '',\n      /*我的申请当前页 */\n      myCurrentPage: 1,\n      /*我的申请表格可选页面大小*/\n      myPageSizes: [5, 10, 15, 20],\n      /*我的申请表格当前页面大小 */\n      myPageSize: 10,\n      /*我的申请表格数据总条数 */\n      myTotal: 16,\n      /*待我审核当前页 */\n      apCurrentPage: 1,\n      /*待我审核表格可选页面大小*/\n      apPageSizes: [5, 10, 15, 20],\n      /*待我审核表格当前页面大小 */\n      apPageSize: 10,\n      /*待我审核表格数据总条数 */\n      apTotal: 21,\n      /*文件列表数据 */\n      fileTableData: [],\n      /*文件上传初始化 */\n      fileList: [],\n      /*进度条百分比 */\n      percentage: 0,\n      // i: 0,\n      SKUData: [],\n      companys: {}\n\n    };\n  },\n  methods: {\n    onInSkuChange(val) {\n      let skuName = '';\n      this.SKUData.forEach(function(row) {\n        if (row.sn == val) {\n          skuName = row.name;\n          return;\n        }\n      });\n      this.inLicenseModel.skuName = skuName;\n    },\n    onOutSkuChange(val) {\n      let skuName = '';\n      this.SKUData.forEach(function(row) {\n        if (row.sn == val) {\n          skuName = row.name;\n          return;\n        }\n      });\n      this.outLicenseModel.skuName = skuName;\n    },\n    //单击一行选中当前行、单击多选框增加选中当前行\n    onInRowClick(row, event, column) {\n      if (column.type != \"selection\") {\n        this.$refs.myTabelRef.clearSelection();\n      }\n      this.$refs.myTabelRef.toggleRowSelection(row);\n    },\n    onOutRowClick(row, event, column) {\n      if (column.type != \"selection\") {\n        this.$refs.apTabelRef.clearSelection();\n      }\n      this.$refs.apTabelRef.toggleRowSelection(row);\n    },\n    //双击\n    dbInEditClick(row) {\n      this.editMode = 2;\n      this.inLicenseShow = true;\n      this.inLicenseModel = Object.assign({}, row);\n    },\n    dbOutEditClick(row) {\n      this.outeditMode = 2;\n      this.outLicenseShow = true;\n      this.outLicenseModel = Object.assign({}, row);\n    },\n    //格式化时间 格式化时间为yyyy-MM-dd hh:mm:ss\n    formatDate(date, fmt) {\n      if (/(y+)/.test(fmt)) {\n        fmt = fmt.replace(\n          RegExp.$1,\n          (date.getFullYear() + '').substr(4 - RegExp.$1.length)\n        )\n      }\n      let o = {\n        'M+': date.getMonth() + 1,\n        'd+': date.getDate(),\n        'h+': date.getHours(),\n        'm+': date.getMinutes(),\n        's+': date.getSeconds()\n      }\n      for (let k in o) {\n        if (new RegExp(`(${k})`).test(fmt)) {\n          let str = o[k] + ''\n          fmt = fmt.replace(\n            RegExp.$1,\n            RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length)\n          )\n        }\n      }\n      return fmt\n    },\n    outDateChangeClick() {\n      if (this.outLicenseModel.expirationDateOfLicense) {\n        this.outLicenseModel.expirationDateOfLicense = this.formatDate(new Date(this.outLicenseModel.expirationDateOfLicense), 'yyyy-MM-dd');\n      } else {\n        this.outLicenseModel.expirationDateOfLicense = '';\n      }\n    },\n    inDateChangeClick() {\n      if (this.inLicenseModel.expirationDateOfLicense) {\n        this.inLicenseModel.expirationDateOfLicense = this.formatDate(new Date(this.inLicenseModel.expirationDateOfLicense), 'yyyy-MM-dd');\n      } else {\n        this.inLicenseModel.expirationDateOfLicense = '';\n      }\n    },\n    //加载企业列表共选择\n    loadCompany() {\n      if (!this.companys.length > 0) {\n        companyAPI.getCompany().then(data => {\n          this.companys = data.data;\n        })\n      }\n    },\n    //加载SKU\n    beforeDialogOpen() {\n      this.loadCompany();\n      if (!this.SKUData.length > 0) {\n        skuAPI\n          .getSKU()\n          .then(data => {\n            this.SKUData = data;\n          });\n      }\n    },\n    /*添加进口许可证*/\n    inAddClick() {\n      this.editMode = 1;\n      this.inLicenseModel = {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n        type: 'in',\n      };\n      this.inLicenseShow = true;\n      this.selectedLicensegoodsRow = [];\n    },\n    /*编辑进口许可证*/\n    inEditClick() {\n      this.editMode = 2;\n      this.inLicenseModel = Object.assign(\n        {},\n        this.inLicenseModel,\n        this.inSelectedRows[0]\n      );\n      this.inLicenseShow = true;\n      this.selectedLicensegoodsRow = [];\n    },\n    /*删除进口许可证*/\n    inDeleteClick() {\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done();\n            return;\n          }\n          this.confirmLoading = true;\n          let ids = [];\n          this.inSelectedRows.forEach(function(row) {\n            ids.push(row.id);\n          });\n          let idstr = ids.join();\n          return licenseAPI.deleteLicense(idstr)\n            .then(data => {\n              this.confirmLoading = false;\n              done(data);\n              this.inLicenseData = this.inLicenseData.filter(\n                val => !ids.includes(val.id)\n              );\n            });\n        },\n      }).then(data => {\n        this.inSelectedRows = [];\n        this.loadInlicenseList();\n        this.$notify({\n          title: '提示',\n          message: '删除成功！',\n          type: 'success',\n          duration: 2000,\n        });\n      })\n    },\n\n    /*添加出口许可证*/\n    outAddClick() {\n      this.outeditMode = 1;\n      this.outLicenseModel = {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n        type: 'out',\n      };\n      this.outLicenseShow = true;\n      this.selectedLicensegoodsRow = [];\n    },\n    /*编辑出口许可证*/\n    outEditClick() {\n      this.outeditMode = 2;\n      this.outLicenseModel = Object.assign(\n        {},\n        this.outLicenseModel,\n        this.outSelectedRows[0]\n      );\n      this.outLicenseShow = true;\n      this.selectedLicensegoodsRow = [];\n    },\n    /*删除出口许可证*/\n    outDeleteClick() {\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done();\n            return;\n          }\n          this.confirmLoading = true;\n          let ids = [];\n          this.outSelectedRows.forEach(function(row) {\n            ids.push(row.id);\n          });\n          let idstr = ids.join();\n          return licenseAPI.deleteLicense(idstr)\n            .then(data => {\n              this.confirmLoading = false;\n              done(data);\n              this.outLicenseData = this.outLicenseData.filter(\n                val => !ids.includes(val.id)\n              );\n            });\n        },\n      }).then(data => {\n        this.outSelectedRows = [];\n        this.loadOutlicenseList();\n        this.$notify({\n          title: '提示',\n          message: '删除成功！',\n          type: 'success',\n          duration: 2000,\n        });\n      })\n    },\n\n    /*进口表格选中行改变*/\n    inOnSelectionChange(selection) {\n      this.inSelectedRows = selection;\n    },\n    /*保存进口许可证 */\n    inOkHandler() {\n      console.log(this.inLicenseModel);\n      let validateForm = () => {\n        return new Promise((resolve, reject) => {\n          this.$refs['inLicenseRef'].validate(valid => {\n            if (valid) {\n              return resolve(true);\n            }\n            return reject(false);\n          });\n        });\n      };\n      let addForm = (res) => {\n        licenseAPI.addLicense(this.inLicenseModel).then(data => {\n          if (data.status == 200) {\n            this.$notify({\n              title: '成功',\n              message: '保存成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n          this.loadInlicenseList();\n        });\n      };\n\n      let editForm = (res) => {\n        let index = this.inLicenseData.findIndex(\n          val => val.id === this.inLicenseModel.id\n        );\n        licenseAPI.updateLicense(this.inLicenseModel).then(data => {\n          if (data.status == 200) {\n            this.$notify({\n              title: '成功',\n              message: '修改成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n          this.loadInlicenseList();\n        });\n      };\n\n      validateForm().then(() => {\n        this.confirmLoading = true;\n        if (this.editMode === 1) {\n          addForm();\n        }\n        if (this.editMode === 2) {\n          editForm();\n        }\n      }).then(res => {\n\n        this.confirmLoading = false;\n        this.inLicenseShow = false;\n      });\n    },\n\n    /*保存出口许可证 */\n    outOkHandler() {\n      let validateForm = () => {\n        return new Promise((resolve, reject) => {\n          this.$refs['outLicenseRef'].validate(valid => {\n            if (valid) {\n              return resolve(true);\n            }\n            return reject(false);\n          });\n        });\n      };\n      let outaddForm = () => {\n        licenseAPI.addLicense(this.outLicenseModel).then(data => {\n          if (data.status == 200) {\n            this.$notify({\n              title: '成功',\n              message: '保存成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n          this.loadOutlicenseList();\n        });\n      };\n\n      let outeditForm = () => {\n        let index = this.outLicenseData.findIndex(\n          val => val.id === this.outLicenseModel.id\n        );\n        licenseAPI.updateLicense(this.outLicenseModel).then(data => {\n          if (data.status == 200) {\n            this.$notify({\n              title: '成功',\n              message: '修改成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n          this.loadOutlicenseList();\n        });\n      };\n\n      validateForm()\n        .then(() => {\n          this.confirmLoading = true;\n          if (this.outeditMode === 1) {\n            outaddForm();\n          }\n          if (this.outeditMode === 2) {\n            outeditForm();\n          }\n        })\n        .then(res => {\n          this.confirmLoading = false;\n          this.outLicenseShow = false;\n\n        });\n    },\n\n    /*出口表格选中行改变*/\n    outOnSelectionChange(selection) {\n      this.outSelectedRows = selection;\n    },\n\n    /*加载进口许可证数据 */\n    loadInlicenseList() {\n      let pagedata = {\n        pageindex: this.myCurrentPage,\n        pagesize: this.myPageSize,\n      };\n      let search = Object.assign({}, this.insearch, pagedata);\n      licenseAPI.getInlicenseList(search).then(data => {\n        this.inLicenseData = data;\n        this.myTotal = data.length;\n        //搜索\n        let tempLicenseKey = this.insearch.licenseKey;\n        let tempCompanyName = this.insearch.companyName;\n        if (tempLicenseKey != '') {\n          this.inLicenseData = this.inLicenseData.filter(\n            val => val.licenseKey.indexOf(tempLicenseKey) != -1\n          );\n        }\n        if (tempCompanyName != '') {\n          this.inLicenseData = this.inLicenseData.filter(\n            val => val.companyName.indexOf(tempCompanyName) != -1\n          );\n        }\n      });\n    },\n    /*加载出口许可证数据 */\n    loadOutlicenseList() {\n      let pagedata = {\n        pageindex: this.myCurrentPage,\n        pagesize: this.myPageSize,\n      };\n      let search = Object.assign({}, this.outsearch, pagedata);\n      licenseAPI.getOutlicenseList(search).then(data => {\n        this.outLicenseData = data;\n        this.apTotal = data.length;\n        //搜索\n        let tempLicenseKey = this.outsearch.licenseKey;\n        let tempCompanyName = this.outsearch.companyName;\n        if (tempLicenseKey != '') {\n          this.outLicenseData = this.outLicenseData.filter(\n            val => val.licenseKey.indexOf(tempLicenseKey) != -1\n          );\n        }\n        if (tempCompanyName != '') {\n          this.outLicenseData = this.outLicenseData.filter(\n            val => val.companyName.indexOf(tempCompanyName) != -1\n          );\n        }\n      });\n    },\n\n    /*改变我的申请表格大小 */\n    myHandleSizeChange(val) {\n      this.myPageSize = val;\n      this.loadInlicenseList();\n    },\n    /*改变我的申请表格当前页 */\n    myHandleCurrentChange(val) {\n      this.myCurrentPage = val;\n      this.loadInlicenseList();\n    },\n    /*改变待我审核表格大小 */\n    apHandleSizeChange(val) {\n      this.apPageSize = val;\n      this.loadOutlicenseList();\n    },\n    /*改变待我审核表格当前页 */\n    apHandleCurrentChange(val) {\n      this.apCurrentPage = val;\n      this.loadOutlicenseList();\n    },\n  },\n  created() {\n    this.clientHeight = document.documentElement.clientHeight - 270;\n    let num = Math.floor(this.clientHeight / 40) - 1;\n    this.apPageSize = Math.floor(num / 5) * 5;\n    this.apPageSizes = [\n      this.apPageSize,\n      this.apPageSize * 2,\n      this.apPageSize * 4,\n    ];\n    this.myPageSize = Math.floor(num / 5) * 5;\n    this.myPageSizes = [\n      this.myPageSize,\n      this.myPageSize * 2,\n      this.myPageSize * 4,\n    ];\n    this.loadInlicenseList();\n    this.loadOutlicenseList();\n  },\n  components: {\n    'licensegoods-table': licensegoodsTable,\n  },\n};\n</script>\n\n<style>\n.projPage .el-tabs__header {\n  margin-bottom: 0;\n}\n\ninput[type='file'].el-upload__input {\n  display: none !important;\n  margin-bottom: -20px;\n}\n</style>\n\n<style scoped>\n.main-content-wrap {\n  padding: 10px;\n}\n\n.search-bar {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.demo-table-expand {\n  font-size: 12px;\n}\n\n.demo-table-expand label {\n  color: #99a9bf;\n}\n\n.demo-table-expand .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 47%;\n}\n\n.e-form .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n\n.filelist-toolbar {\n  margin-left: 1px;\n}\n\n.fileView-content {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 5px;\n  line-height: 20px;\n}\n\n.input-320 {\n  width: 320px;\n}\n\n.form-title {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 6%;\n  padding: 10px 0 5px 0;\n}\n\n.form-panel {\n  width: 90%;\n  margin-left: 5%;\n  padding: 20px 0 0 0;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.goods-panel {\n  width: 90%;\n  margin-left: 5%;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(161);

var _licenseAPI = __webpack_require__(117);

var _licenseAPI2 = _interopRequireDefault(_licenseAPI);

var _licensegoodsTable = __webpack_require__(162);

var _licensegoodsTable2 = _interopRequireDefault(_licensegoodsTable);

var _skuAPI = __webpack_require__(101);

var _skuAPI2 = _interopRequireDefault(_skuAPI);

var _companyAPI = __webpack_require__(102);

var _companyAPI2 = _interopRequireDefault(_companyAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      clientHeight: 0,
      clientWidth: 0,
      /*我的申请表格*/
      inLicenseData: [],
      /*待我审批表格*/
      outLicenseData: [],
      /*我的申请数据模型*/
      inLicenseModel: {
        name: '',
        manager: '',
        description: '',
        starttime: '',
        endtime: ''
      },
      outLicenseModel: {
        name: '',
        manager: '',
        description: '',
        starttime: '',
        endtime: ''
      },
      /*进口搜索*/
      insearch: {
        licenseKey: '',
        importAndExportcode: '',
        companyName: '',
        type: 'in'
      },
      /*出口搜索*/
      outsearch: {
        licenseKey: '',
        importAndExportcode: '',
        companyName: '',
        type: 'out'
      },
      /*激活的tab页 */
      activeName: 'inlicense',
      /*我的申请表单校验规则 */
      inLicenseRules: {
        name: [{ required: true, message: '请输入项目名称', trigger: 'blur' }],
        manager: [{ required: true, message: '请输入项目负责人', trigger: 'blur' }]
      },
      /*编辑添加框是否可见 */
      inLicenseShow: false,
      /*编辑添加框是否可见 */
      outLicenseShow: false,
      /*文件列表查看、编辑框是否可见 */
      myFileDialogIsShow: false,
      /*文件上传框是否可见 */
      fileUploadDialogIsShow: false,
      /*文件预览框是否显示 */
      fileViewDialogIsShow: false,
      /*审批进度 */
      failDialogIsShow: false,
      passDialogIsShow: false,
      loadDialogIsShow: false,
      /*进口许可证编辑模式：1添加，2编辑*/
      editMode: 1,
      /*出口许可证编辑模式：1添加，2编辑*/
      outeditMode: 1,
      /*文件类型：1申报文件，2审批文件 */
      fileType: 1,
      /*表单提交等待动画*/
      confirmLoading: false,
      /*我的申请表格选中行*/
      inSelectedRows: [],
      /*待我审核表格选中行*/
      outSelectedRows: [],
      /*文件表格选中行 */
      fileSelectedRows: [],
      /*开始日期初始化 */
      startdatepicker: '',
      /*结束日期初始化 */
      enddatepicker: '',
      /*我的申请当前页 */
      myCurrentPage: 1,
      /*我的申请表格可选页面大小*/
      myPageSizes: [5, 10, 15, 20],
      /*我的申请表格当前页面大小 */
      myPageSize: 10,
      /*我的申请表格数据总条数 */
      myTotal: 16,
      /*待我审核当前页 */
      apCurrentPage: 1,
      /*待我审核表格可选页面大小*/
      apPageSizes: [5, 10, 15, 20],
      /*待我审核表格当前页面大小 */
      apPageSize: 10,
      /*待我审核表格数据总条数 */
      apTotal: 21,
      /*文件列表数据 */
      fileTableData: [],
      /*文件上传初始化 */
      fileList: [],
      /*进度条百分比 */
      percentage: 0,
      // i: 0,
      SKUData: [],
      companys: {}

    };
  },

  methods: {
    onInSkuChange: function onInSkuChange(val) {
      var skuName = '';
      this.SKUData.forEach(function (row) {
        if (row.sn == val) {
          skuName = row.name;
          return;
        }
      });
      this.inLicenseModel.skuName = skuName;
    },
    onOutSkuChange: function onOutSkuChange(val) {
      var skuName = '';
      this.SKUData.forEach(function (row) {
        if (row.sn == val) {
          skuName = row.name;
          return;
        }
      });
      this.outLicenseModel.skuName = skuName;
    },

    //单击一行选中当前行、单击多选框增加选中当前行
    onInRowClick: function onInRowClick(row, event, column) {
      if (column.type != "selection") {
        this.$refs.myTabelRef.clearSelection();
      }
      this.$refs.myTabelRef.toggleRowSelection(row);
    },
    onOutRowClick: function onOutRowClick(row, event, column) {
      if (column.type != "selection") {
        this.$refs.apTabelRef.clearSelection();
      }
      this.$refs.apTabelRef.toggleRowSelection(row);
    },

    //双击
    dbInEditClick: function dbInEditClick(row) {
      this.editMode = 2;
      this.inLicenseShow = true;
      this.inLicenseModel = Object.assign({}, row);
    },
    dbOutEditClick: function dbOutEditClick(row) {
      this.outeditMode = 2;
      this.outLicenseShow = true;
      this.outLicenseModel = Object.assign({}, row);
    },

    //格式化时间 格式化时间为yyyy-MM-dd hh:mm:ss
    formatDate: function formatDate(date, fmt) {
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      };
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          var str = o[k] + '';
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length));
        }
      }
      return fmt;
    },
    outDateChangeClick: function outDateChangeClick() {
      if (this.outLicenseModel.expirationDateOfLicense) {
        this.outLicenseModel.expirationDateOfLicense = this.formatDate(new Date(this.outLicenseModel.expirationDateOfLicense), 'yyyy-MM-dd');
      } else {
        this.outLicenseModel.expirationDateOfLicense = '';
      }
    },
    inDateChangeClick: function inDateChangeClick() {
      if (this.inLicenseModel.expirationDateOfLicense) {
        this.inLicenseModel.expirationDateOfLicense = this.formatDate(new Date(this.inLicenseModel.expirationDateOfLicense), 'yyyy-MM-dd');
      } else {
        this.inLicenseModel.expirationDateOfLicense = '';
      }
    },

    //加载企业列表共选择
    loadCompany: function loadCompany() {
      var _this = this;

      if (!this.companys.length > 0) {
        _companyAPI2.default.getCompany().then(function (data) {
          _this.companys = data.data;
        });
      }
    },

    //加载SKU
    beforeDialogOpen: function beforeDialogOpen() {
      var _this2 = this;

      this.loadCompany();
      if (!this.SKUData.length > 0) {
        _skuAPI2.default.getSKU().then(function (data) {
          _this2.SKUData = data;
        });
      }
    },

    /*添加进口许可证*/
    inAddClick: function inAddClick() {
      this.editMode = 1;
      this.inLicenseModel = {
        name: '',
        manager: '',
        description: '',
        starttime: '',
        endtime: '',
        type: 'in'
      };
      this.inLicenseShow = true;
      this.selectedLicensegoodsRow = [];
    },

    /*编辑进口许可证*/
    inEditClick: function inEditClick() {
      this.editMode = 2;
      this.inLicenseModel = Object.assign({}, this.inLicenseModel, this.inSelectedRows[0]);
      this.inLicenseShow = true;
      this.selectedLicensegoodsRow = [];
    },

    /*删除进口许可证*/
    inDeleteClick: function inDeleteClick() {
      var _this3 = this;

      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action !== 'confirm') {
            done();
            return;
          }
          _this3.confirmLoading = true;
          var ids = [];
          _this3.inSelectedRows.forEach(function (row) {
            ids.push(row.id);
          });
          var idstr = ids.join();
          return _licenseAPI2.default.deleteLicense(idstr).then(function (data) {
            _this3.confirmLoading = false;
            done(data);
            _this3.inLicenseData = _this3.inLicenseData.filter(function (val) {
              return !ids.includes(val.id);
            });
          });
        }
      }).then(function (data) {
        _this3.inSelectedRows = [];
        _this3.loadInlicenseList();
        _this3.$notify({
          title: '提示',
          message: '删除成功！',
          type: 'success',
          duration: 2000
        });
      });
    },


    /*添加出口许可证*/
    outAddClick: function outAddClick() {
      this.outeditMode = 1;
      this.outLicenseModel = {
        name: '',
        manager: '',
        description: '',
        starttime: '',
        endtime: '',
        type: 'out'
      };
      this.outLicenseShow = true;
      this.selectedLicensegoodsRow = [];
    },

    /*编辑出口许可证*/
    outEditClick: function outEditClick() {
      this.outeditMode = 2;
      this.outLicenseModel = Object.assign({}, this.outLicenseModel, this.outSelectedRows[0]);
      this.outLicenseShow = true;
      this.selectedLicensegoodsRow = [];
    },

    /*删除出口许可证*/
    outDeleteClick: function outDeleteClick() {
      var _this4 = this;

      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action !== 'confirm') {
            done();
            return;
          }
          _this4.confirmLoading = true;
          var ids = [];
          _this4.outSelectedRows.forEach(function (row) {
            ids.push(row.id);
          });
          var idstr = ids.join();
          return _licenseAPI2.default.deleteLicense(idstr).then(function (data) {
            _this4.confirmLoading = false;
            done(data);
            _this4.outLicenseData = _this4.outLicenseData.filter(function (val) {
              return !ids.includes(val.id);
            });
          });
        }
      }).then(function (data) {
        _this4.outSelectedRows = [];
        _this4.loadOutlicenseList();
        _this4.$notify({
          title: '提示',
          message: '删除成功！',
          type: 'success',
          duration: 2000
        });
      });
    },


    /*进口表格选中行改变*/
    inOnSelectionChange: function inOnSelectionChange(selection) {
      this.inSelectedRows = selection;
    },

    /*保存进口许可证 */
    inOkHandler: function inOkHandler() {
      var _this5 = this;

      console.log(this.inLicenseModel);
      var validateForm = function validateForm() {
        return new Promise(function (resolve, reject) {
          _this5.$refs['inLicenseRef'].validate(function (valid) {
            if (valid) {
              return resolve(true);
            }
            return reject(false);
          });
        });
      };
      var addForm = function addForm(res) {
        _licenseAPI2.default.addLicense(_this5.inLicenseModel).then(function (data) {
          if (data.status == 200) {
            _this5.$notify({
              title: '成功',
              message: '保存成功',
              type: 'success',
              duration: 2000
            });
          } else {
            _this5.$notify({
              title: '失败',
              message: data.message,
              type: 'error',
              duration: 2000
            });
          }
          _this5.loadInlicenseList();
        });
      };

      var editForm = function editForm(res) {
        var index = _this5.inLicenseData.findIndex(function (val) {
          return val.id === _this5.inLicenseModel.id;
        });
        _licenseAPI2.default.updateLicense(_this5.inLicenseModel).then(function (data) {
          if (data.status == 200) {
            _this5.$notify({
              title: '成功',
              message: '修改成功',
              type: 'success',
              duration: 2000
            });
          } else {
            _this5.$notify({
              title: '失败',
              message: data.message,
              type: 'error',
              duration: 2000
            });
          }
          _this5.loadInlicenseList();
        });
      };

      validateForm().then(function () {
        _this5.confirmLoading = true;
        if (_this5.editMode === 1) {
          addForm();
        }
        if (_this5.editMode === 2) {
          editForm();
        }
      }).then(function (res) {

        _this5.confirmLoading = false;
        _this5.inLicenseShow = false;
      });
    },


    /*保存出口许可证 */
    outOkHandler: function outOkHandler() {
      var _this6 = this;

      var validateForm = function validateForm() {
        return new Promise(function (resolve, reject) {
          _this6.$refs['outLicenseRef'].validate(function (valid) {
            if (valid) {
              return resolve(true);
            }
            return reject(false);
          });
        });
      };
      var outaddForm = function outaddForm() {
        _licenseAPI2.default.addLicense(_this6.outLicenseModel).then(function (data) {
          if (data.status == 200) {
            _this6.$notify({
              title: '成功',
              message: '保存成功',
              type: 'success',
              duration: 2000
            });
          } else {
            _this6.$notify({
              title: '失败',
              message: data.message,
              type: 'error',
              duration: 2000
            });
          }
          _this6.loadOutlicenseList();
        });
      };

      var outeditForm = function outeditForm() {
        var index = _this6.outLicenseData.findIndex(function (val) {
          return val.id === _this6.outLicenseModel.id;
        });
        _licenseAPI2.default.updateLicense(_this6.outLicenseModel).then(function (data) {
          if (data.status == 200) {
            _this6.$notify({
              title: '成功',
              message: '修改成功',
              type: 'success',
              duration: 2000
            });
          } else {
            _this6.$notify({
              title: '失败',
              message: data.message,
              type: 'error',
              duration: 2000
            });
          }
          _this6.loadOutlicenseList();
        });
      };

      validateForm().then(function () {
        _this6.confirmLoading = true;
        if (_this6.outeditMode === 1) {
          outaddForm();
        }
        if (_this6.outeditMode === 2) {
          outeditForm();
        }
      }).then(function (res) {
        _this6.confirmLoading = false;
        _this6.outLicenseShow = false;
      });
    },


    /*出口表格选中行改变*/
    outOnSelectionChange: function outOnSelectionChange(selection) {
      this.outSelectedRows = selection;
    },


    /*加载进口许可证数据 */
    loadInlicenseList: function loadInlicenseList() {
      var _this7 = this;

      var pagedata = {
        pageindex: this.myCurrentPage,
        pagesize: this.myPageSize
      };
      var search = Object.assign({}, this.insearch, pagedata);
      _licenseAPI2.default.getInlicenseList(search).then(function (data) {
        _this7.inLicenseData = data;
        _this7.myTotal = data.length;
        //搜索
        var tempLicenseKey = _this7.insearch.licenseKey;
        var tempCompanyName = _this7.insearch.companyName;
        if (tempLicenseKey != '') {
          _this7.inLicenseData = _this7.inLicenseData.filter(function (val) {
            return val.licenseKey.indexOf(tempLicenseKey) != -1;
          });
        }
        if (tempCompanyName != '') {
          _this7.inLicenseData = _this7.inLicenseData.filter(function (val) {
            return val.companyName.indexOf(tempCompanyName) != -1;
          });
        }
      });
    },

    /*加载出口许可证数据 */
    loadOutlicenseList: function loadOutlicenseList() {
      var _this8 = this;

      var pagedata = {
        pageindex: this.myCurrentPage,
        pagesize: this.myPageSize
      };
      var search = Object.assign({}, this.outsearch, pagedata);
      _licenseAPI2.default.getOutlicenseList(search).then(function (data) {
        _this8.outLicenseData = data;
        _this8.apTotal = data.length;
        //搜索
        var tempLicenseKey = _this8.outsearch.licenseKey;
        var tempCompanyName = _this8.outsearch.companyName;
        if (tempLicenseKey != '') {
          _this8.outLicenseData = _this8.outLicenseData.filter(function (val) {
            return val.licenseKey.indexOf(tempLicenseKey) != -1;
          });
        }
        if (tempCompanyName != '') {
          _this8.outLicenseData = _this8.outLicenseData.filter(function (val) {
            return val.companyName.indexOf(tempCompanyName) != -1;
          });
        }
      });
    },


    /*改变我的申请表格大小 */
    myHandleSizeChange: function myHandleSizeChange(val) {
      this.myPageSize = val;
      this.loadInlicenseList();
    },

    /*改变我的申请表格当前页 */
    myHandleCurrentChange: function myHandleCurrentChange(val) {
      this.myCurrentPage = val;
      this.loadInlicenseList();
    },

    /*改变待我审核表格大小 */
    apHandleSizeChange: function apHandleSizeChange(val) {
      this.apPageSize = val;
      this.loadOutlicenseList();
    },

    /*改变待我审核表格当前页 */
    apHandleCurrentChange: function apHandleCurrentChange(val) {
      this.apCurrentPage = val;
      this.loadOutlicenseList();
    }
  },
  created: function created() {
    this.clientHeight = document.documentElement.clientHeight - 270;
    var num = Math.floor(this.clientHeight / 40) - 1;
    this.apPageSize = Math.floor(num / 5) * 5;
    this.apPageSizes = [this.apPageSize, this.apPageSize * 2, this.apPageSize * 4];
    this.myPageSize = Math.floor(num / 5) * 5;
    this.myPageSizes = [this.myPageSize, this.myPageSize * 2, this.myPageSize * 4];
    this.loadInlicenseList();
    this.loadOutlicenseList();
  },

  components: {
    'licensegoods-table': _licensegoodsTable2.default
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _axiosMockAdapter = __webpack_require__(5);

var _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.axiosMock = window.axiosMock || new _axiosMockAdapter2.default(_axios2.default, { delayResponse: 10 });

var inlicensesData = [{
  id: '1',
  licensekey: '0039237',
  importAndExportcode: '4401708383545',
  companyName: '华南信息产业集团有限公司',
  consignee: '华南信息产业集团有限公司',
  companyId: '1',
  exportingCountry: '香港',
  countryOfOrigin: '瑞士',
  portOfClearance: '大连海关',
  tradeMode: '一般贸易',
  shippingType: '海洋运输',
  goodsTypeIds: '2,3,4',
  goodsTypes: '',
  sku: '',
  count: '',
  companyAddress: '',
  companyType: '',
  legalrepresentative: '',
  competentDepartment: '',
  registeredCapital: '',
  certificationdate: '2010年02月5日',
  type: 'in',
  status: '核查无误'
}, {
  id: 2,
  licensekey: '0039238',
  importAndExportcode: '4401708383546',
  companyName: '青岛啤酒集团有限公司',
  consignee: '青岛啤酒集团有限公司',
  companyId: '2',
  exportingCountry: '香港',
  countryOfOrigin: '新加坡',
  portOfClearance: '青岛海关',
  tradeMode: '一般贸易',
  shippingType: '海洋运输',
  goodsTypeIds: '2,3,4',
  goodsTypes: '',
  sku: '',
  count: '',
  conmpanyaddress: '',
  companyType: '',
  legalrepresentative: '',
  competentDepartment: '',
  registeredCapital: '',
  certificationdate: '2012年02月15日',
  type: 'in',
  status: '待核查'
}, {
  id: 3,
  licensekey: '0039239',
  importAndExportcode: '4401708383547',
  companyName: '包钢集团国际经济贸易有限公司',
  consignee: '包钢集团国际经济贸易有限公司',
  companyId: '3',
  exportingCountry: '香港',
  countryOfOrigin: '法国',
  portOfClearance: '秦皇岛海关',
  tradeMode: '一般贸易',
  shippingType: '海洋运输',
  goodsTypeIds: '2,3,4',
  goodsTypes: '',
  sku: '',
  count: '',
  conmpanyaddress: '',
  companyType: '',
  legalrepresentative: '',
  competentDepartment: '',
  registeredCapital: '',
  certificationdate: '2012年12月5日',
  type: 'in',
  status: '核查无误'
}, {
  id: 4,
  licensekey: '0039240',
  importAndExportcode: '4401708383548',
  companyName: '广东万事泰集团有限公司',
  consignee: '广东万事泰集团有限公司',
  companyId: '4',
  exportingCountry: '香港',
  countryOfOrigin: '德国',
  portOfClearance: '上海海关',
  tradeMode: '一般贸易',
  shippingType: '海洋运输',
  goodsTypeIds: '2,3,4',
  goodsTypes: '',
  sku: '',
  count: '',
  conmpanyaddress: '',
  companyType: '',
  legalrepresentative: '',
  competentDepartment: '',
  registeredCapital: '',
  certificationdate: '2011年11月6日',
  type: 'in',
  status: '核查无误'
}, {
  id: 5,
  licensekey: '0039237',
  importAndExportcode: '4401708383549',
  companyName: '合肥鑫晟光电科技有限公司',
  consignee: '合肥鑫晟光电科技有限公司',
  companyId: '5',
  exportingCountry: '香港',
  countryOfOrigin: '瑞士',
  portOfClearance: '上海海关',
  tradeMode: '一般贸易',
  shippingType: '海洋运输',
  goodsTypeIds: '2,3,4',
  goodsTypes: '',
  sku: '',
  count: '',
  conmpanyaddress: '',
  companyType: '',
  legalrepresentative: '',
  competentDepartment: '',
  registeredCapital: '',
  certificationdate: '2009年11月6日',
  type: 'in',
  status: '核查不实'
}];

var outlicensesData = [{
  id: 11,
  licensekey: '0039237',
  importAndExportcode: '4401708383545',
  companyName: '华南信息产业集团有限公司',
  consignor: '华南信息产业集团有限公司',
  companyId: '1',
  importedCountry: '瑞士',
  conractno: 'RDDE142',
  portOfClearance: '大连海关',
  tradeMode: '一般贸易',
  shippingType: '海洋运输',
  goodsTypeIds: '2,3,4',
  goodsTypes: '',
  sku: '',
  count: '',
  conmpanyaddress: '',
  companyType: '',
  legalrepresentative: '',
  competentDepartment: '',
  registeredCapital: '',
  certificationdate: '2010年02月5日',
  type: 'out',
  status: '核查无误'
}, {
  id: 12,
  licensekey: '0039238',
  importAndExportcode: '4401708383546',
  companyName: '青岛啤酒集团有限公司',
  consignor: '青岛啤酒集团有限公司',
  companyId: '2',
  importedCountry: '新加坡',
  conractno: 'RFFE142',
  portOfClearance: '青岛海关',
  tradeMode: '一般贸易',
  shippingType: '海洋运输',
  goodsTypeIds: '2,3,4',
  goodsTypes: '',
  sku: '',
  count: '',
  conmpanyaddress: '',
  companyType: '',
  legalrepresentative: '',
  competentDepartment: '',
  registeredCapital: '',
  certificationdate: '2012年02月15日',
  type: 'out',
  status: '待核查'
}, {
  id: 13,
  licensekey: '0039239',
  importAndExportcode: '4401708383547',
  companyName: '包钢集团国际经济贸易有限公司',
  consignor: '包钢集团国际经济贸易有限公司',
  companyId: '3',
  importedCountry: '法国',
  conractno: 'TGGFFG142',
  portOfClearance: '秦皇岛海关',
  tradeMode: '一般贸易',
  shippingType: '海洋运输',
  goodsTypeIds: '2,3,4',
  goodsTypes: '',
  sku: '',
  count: '',
  conmpanyaddress: '',
  companyType: '',
  legalrepresentative: '',
  competentDepartment: '',
  registeredCapital: '',
  certificationdate: '2012年12月5日',
  type: 'out',
  status: '核查无误'
}, {
  id: 14,
  licensekey: '0039240',
  importAndExportcode: '4401708383548',
  companyName: '广东万事泰集团有限公司',
  consignor: '广东万事泰集团有限公司',
  companyId: '4',
  importedCountry: '德国',
  conractno: 'TFFG142',
  portOfClearance: '上海海关',
  tradeMode: '一般贸易',
  shippingType: '海洋运输',
  goodsTypeIds: '2,3,4',
  goodsTypes: '',
  sku: '',
  count: '',
  conmpanyaddress: '',
  companyType: '',
  legalrepresentative: '',
  competentDepartment: '',
  registeredCapital: '',
  certificationdate: '2011年11月6日',
  type: 'out',
  status: '核查无误'
}, {
  id: 15,
  licensekey: '0039237',
  importAndExportcode: '4401708383549',
  companyName: '合肥鑫晟光电科技有限公司',
  consignor: '合肥鑫晟光电科技有限公司',
  companyId: '5',
  importedCountry: '西班牙',
  conractno: 'TFFG442',
  portOfClearance: '上海海关',
  tradeMode: '一般贸易',
  shippingType: '海洋运输',
  goodsTypeIds: '2,3,4',
  goodsTypes: '',
  sku: '',
  count: '',
  conmpanyaddress: '',
  companyType: '',
  legalrepresentative: '',
  competentDepartment: '',
  registeredCapital: '',
  certificationdate: '2009年11月6日',
  type: 'out',
  status: '核查不实'
}];
var filelist1 = [{
  id: '1',
  name: '项目申报文件.doc'
}, {
  id: '2',
  name: '项目附件.doc',
  content: ''
}];

var filelist2 = [{
  id: '1',
  name: '审批文件.doc'
}, {
  id: '2',
  name: '附件.doc',
  content: ''
}];

axiosMock.onGet(/license\/inlicense+$/).reply(function (res) {
  var list = inlicensesData;
  var total = inlicensesData.length;
  var result = [200, {
    data: list,
    status: 1,
    message: '',
    total: total
  }];
  return result;
});

axiosMock.onPost('/license/license').reply(200, {
  status: 1,
  message: '添加成功'
});

axiosMock.onPut(/license\/license\/.+$/).reply(200, { status: 1, message: '修改成功' });

axiosMock.onDelete(/license\/license\/.+$/).reply(200, { status: 1, message: '删除成功' });

axiosMock.onGet(/license\/outlicense+$/).reply(function (res) {
  var list = outlicensesData;
  var total = outlicensesData.length;
  var result = [200, {
    data: list,
    status: 1,
    message: '',
    total: total
  }];
  return result;
});

axiosMock.onGet('/license/filelist1').reply(200, {
  data: filelist1,
  status: 1,
  message: ''
});

axiosMock.onGet('/license/filelist2').reply(200, {
  data: filelist2,
  status: 1,
  message: ''
});

var licensegoods = [{
  id: '1',
  licenseid: '1',
  specification: '110CC',
  unit: '台',
  quantity: '*110.0',
  unitprice: '*200',
  amount: '*22 000',
  amountinusd: '$22 000'
}, {
  id: '2',
  licenseid: '1',
  specification: '110CC',
  unit: '台',
  quantity: '*100.0',
  unitprice: '*131.5000',
  amount: '*13 150',
  amountinusd: '$13 150'
}, {
  id: '3',
  licenseid: '2',
  specification: '110CC',
  unit: '台',
  quantity: '*110.0',
  unitprice: '*200',
  amount: '*22 000',
  amountinusd: '$22 000'
}, {
  id: '4',
  licenseid: '3',
  specification: '110CC',
  unit: '台',
  quantity: '*100.0',
  unitprice: '*131.5000',
  amount: '*13 150',
  amountinusd: '$13 150'
}, {
  id: '5',
  licenseid: '4',
  specification: '110CC',
  unit: '台',
  quantity: '*110.0',
  unitprice: '*200',
  amount: '*22 000',
  amountinusd: '$22 000'
}, {
  id: '6',
  licenseid: '4',
  specification: '110CC',
  unit: '台',
  quantity: '*100.0',
  unitprice: '*131.5000',
  amount: '*13 150',
  amountinusd: '$13 150'
}, {
  id: '7',
  licenseid: '4',
  specification: '110CC',
  unit: '台',
  quantity: '*110.0',
  unitprice: '*200',
  amount: '*22 000',
  amountinusd: '$22 000'
}, {
  id: '8',
  licenseid: '5',
  specification: '110CC',
  unit: '台',
  quantity: '*100.0',
  unitprice: '*131.5000',
  amount: '*13 150',
  amountinusd: '$13 150'
}];

axiosMock.onGet(/license\/license\/goods+$/).reply(function (res) {
  var list = licensegoods;
  var result = [200, {
    data: '',
    status: 1,
    message: ''
  }];

  if (typeof res.params.licenseid !== 'undefined' && res.params.licenseid !== '') {
    list = list.filter(function (val) {
      return val.licenseid == res.params.licenseid;
    });
    result[1].data = list;
  }
  return result;
});

axiosMock.onPut(/license\/license\/goods\/.+$/).reply(200, { status: 1, message: '修改成功' });

axiosMock.onDelete(/license\/license\/goods\/.+$/).reply(200, { status: 1, message: '删除成功' });

axiosMock.onPost('/license/license/goods').reply(200, {
  status: 1,
  message: '添加成功'
});

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(163)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(165),
  /* template */
  __webpack_require__(166),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-10243f80",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\setting\\components\\licensegoodsTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] licensegoodsTable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10243f80", Component.options)
  } else {
    hotAPI.reload("data-v-10243f80", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(164);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("06a61ce9", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10243f80\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./licensegoodsTable.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10243f80\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./licensegoodsTable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.pack-table[data-v-10243f80] {\n  font-size: 10px;\n  min-width: 100%;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/components/licensegoodsTable.vue?672c38fb"],"names":[],"mappings":";AAiCA;EACA,gBAAA;EACA,gBAAA;CACA","file":"licensegoodsTable.vue","sourcesContent":["<template>\n  <div>\n    <el-table :data=\"licensegoodsData\" tooltip-effect=\"dark\" class=\"pack-table\" highlight-current-row @row-click=\"rowClick\">\n      <el-table-column prop=\"specification\" min-width=\"150px\" label=\"规格、等级\"></el-table-column>\n      <el-table-column prop=\"unit\" min-width=\"100px\" label=\"单位\"></el-table-column>\n      <el-table-column prop=\"quantity\" min-width=\"100px\" label=\"数量\"></el-table-column>\n      <el-table-column prop=\"unitprice\" min-width=\"150px\" label=\"单价（USD）\"></el-table-column>\n      <el-table-column prop=\"amount\" min-width=\"150px\" label=\"总值（USD）\"></el-table-column>\n      <el-table-column prop=\"amountinusd\" min-width=\"150px\" label=\"总值折美元\"></el-table-column>\n    </el-table>\n  </div>\n</template>\n\n<script>\nimport licenseAPI from '../api/licenseAPI.js';\n//import '../mock/license.js';\n\nexport default {\n  data() {\n    return {\n      licensegoodsData: [],\n    };\n  },\n  methods: {\n    rowClick(row) {\n      this.$emit('row-click', row);\n    },\n  },\n  props: ['licenseID'],\n};\n</script>\n\n<style scoped>\n.pack-table {\n  font-size: 10px;\n  min-width: 100%;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _licenseAPI = __webpack_require__(117);

var _licenseAPI2 = _interopRequireDefault(_licenseAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import '../mock/license.js';

exports.default = {
  data: function data() {
    return {
      licensegoodsData: []
    };
  },

  methods: {
    rowClick: function rowClick(row) {
      this.$emit('row-click', row);
    }
  },
  props: ['licenseID']
}; //
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-table', {
    staticClass: "pack-table",
    attrs: {
      "data": _vm.licensegoodsData,
      "tooltip-effect": "dark",
      "highlight-current-row": ""
    },
    on: {
      "row-click": _vm.rowClick
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "specification",
      "min-width": "150px",
      "label": "规格、等级"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "unit",
      "min-width": "100px",
      "label": "单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "quantity",
      "min-width": "100px",
      "label": "数量"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "unitprice",
      "min-width": "150px",
      "label": "单价（USD）"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "amount",
      "min-width": "150px",
      "label": "总值（USD）"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "amountinusd",
      "min-width": "150px",
      "label": "总值折美元"
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-10243f80", module.exports)
  }
}

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-tabs', {
    staticClass: "projPage",
    model: {
      value: (_vm.activeName),
      callback: function($$v) {
        _vm.activeName = $$v
      },
      expression: "activeName"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "进口",
      "name": "inlicense"
    }
  }, [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.inAddClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v("添加")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.inSelectedRows.length !== 1
    },
    on: {
      "click": _vm.inEditClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.inSelectedRows.length < 1
    },
    on: {
      "click": _vm.inDeleteClick
    }
  }, [_c('i', {
    staticClass: "fa fa-trash-o"
  }), _vm._v("删除")])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap"
  }, [_c('div', {
    staticClass: "search-bar fr"
  }, [_vm._v("\n          许可证号:\n          "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入许可证号"
    },
    model: {
      value: (_vm.insearch.licenseKey),
      callback: function($$v) {
        _vm.$set(_vm.insearch, "licenseKey", $$v)
      },
      expression: "insearch.licenseKey"
    }
  }), _vm._v("\n          进口商：\n          "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入进口商"
    },
    model: {
      value: (_vm.insearch.companyName),
      callback: function($$v) {
        _vm.$set(_vm.insearch, "companyName", $$v)
      },
      expression: "insearch.companyName"
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": _vm.loadInlicenseList
    }
  }, [_vm._v(" 搜 索 ")])], 1), _vm._v(" "), _c('el-table', {
    ref: "myTabelRef",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.inLicenseData,
      "tooltip-effect": "dark",
      "height": _vm.clientHeight
    },
    on: {
      "selection-change": _vm.inOnSelectionChange,
      "row-click": _vm.onInRowClick,
      "row-dblclick": _vm.dbInEditClick
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "55",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "licenseKey",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "许可证号"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('a', {
          staticClass: "a-btn",
          on: {
            "click": function($event) {
              _vm.dbInEditClick(scope.row)
            }
          }
        }, [_vm._v(_vm._s(scope.row.licenseKey))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "count",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "许可数量"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "companyName",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "进口商"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "skuName",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "商品名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "expirationDateOfLicense",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "许可证截止日期"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "fr",
    staticStyle: {
      "margin-top": "5px"
    }
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.myCurrentPage,
      "page-sizes": _vm.myPageSizes,
      "page-size": _vm.myPageSize,
      "total": _vm.myTotal,
      "layout": "total, sizes, prev, pager, next"
    },
    on: {
      "size-change": _vm.myHandleSizeChange,
      "current-change": _vm.myHandleCurrentChange
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "出口",
      "name": "outlicense"
    }
  }, [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.outAddClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v("添加")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.outSelectedRows.length !== 1
    },
    on: {
      "click": _vm.outEditClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.outSelectedRows.length < 1
    },
    on: {
      "click": _vm.outDeleteClick
    }
  }, [_c('i', {
    staticClass: "fa fa-trash-o"
  }), _vm._v("删除")])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap"
  }, [_c('div', {
    staticClass: "search-bar fr"
  }, [_vm._v("\n          许可证号:\n          "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入许可证号"
    },
    model: {
      value: (_vm.outsearch.licenseKey),
      callback: function($$v) {
        _vm.$set(_vm.outsearch, "licenseKey", $$v)
      },
      expression: "outsearch.licenseKey"
    }
  }), _vm._v("\n          出口商：\n          "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入出口商"
    },
    model: {
      value: (_vm.outsearch.companyName),
      callback: function($$v) {
        _vm.$set(_vm.outsearch, "companyName", $$v)
      },
      expression: "outsearch.companyName"
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": _vm.loadOutlicenseList
    }
  }, [_vm._v(" 搜 索 ")])], 1), _vm._v(" "), _c('el-table', {
    ref: "apTabelRef",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.outLicenseData,
      "tooltip-effect": "dark",
      "height": _vm.clientHeight
    },
    on: {
      "selection-change": _vm.outOnSelectionChange,
      "row-click": _vm.onOutRowClick,
      "row-dblclick": _vm.dbOutEditClick
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "55",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "licenseKey",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "许可证号"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('a', {
          staticClass: "a-btn",
          on: {
            "click": function($event) {
              _vm.dbOutEditClick(scope.row)
            }
          }
        }, [_vm._v(_vm._s(scope.row.licenseKey))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "count",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "许可数量"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "companyName",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "出口商"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "skuName",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "商品名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "expirationDateOfLicense",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "许可证截止日期"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "fr",
    staticStyle: {
      "margin-top": "5px"
    }
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.apCurrentPage,
      "page-sizes": _vm.apPageSizes,
      "page-size": _vm.apPageSize,
      "total": _vm.apTotal,
      "layout": "total, sizes, prev, pager, next"
    },
    on: {
      "size-change": _vm.apHandleSizeChange,
      "current-change": _vm.apHandleCurrentChange
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.editMode === 1 ? '添加进口许可证' : '编辑进口许可证',
      "visible": _vm.inLicenseShow
    },
    on: {
      "update:visible": function($event) {
        _vm.inLicenseShow = $event
      },
      "open": _vm.beforeDialogOpen
    }
  }, [_c('el-form', {
    ref: "inLicenseRef",
    staticStyle: {
      "overflow-y": "hidden",
      "overflow-x": "hidden"
    },
    attrs: {
      "model": _vm.inLicenseModel,
      "rules": _vm.inLicenseRules,
      "inline": "",
      "label-width": "140px"
    }
  }, [(_vm.editMode === 1) ? _c('el-form-item', {
    attrs: {
      "label": "进口商"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "320px"
    },
    attrs: {
      "clearable": "",
      "placeholder": "请选择",
      "disabled": _vm.editMode === 1 ? _vm.ture : false
    },
    on: {
      "change": _vm.onCompanyChange
    },
    model: {
      value: (_vm.inLicenseModel.companyName),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "companyName", $$v)
      },
      expression: "inLicenseModel.companyName"
    }
  }, _vm._l((_vm.companys), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.name
      }
    })
  }))], 1) : _vm._e(), _vm._v(" "), (_vm.editMode === 2) ? _c('el-form-item', {
    attrs: {
      "label": "进口商"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off",
      "disabled": ""
    },
    model: {
      value: (_vm.inLicenseModel.companyName),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "companyName", $$v)
      },
      expression: "inLicenseModel.companyName"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "许可证号",
      "prop": "licenseKey"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.licenseKey),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "licenseKey", $$v)
      },
      expression: "inLicenseModel.licenseKey"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "许可数量",
      "prop": "count"
    }
  }, [_c('el-input-number', {
    staticClass: "input-320",
    model: {
      value: (_vm.inLicenseModel.count),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "count", $$v)
      },
      expression: "inLicenseModel.count"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品编号",
      "prop": "sku"
    }
  }, [_c('el-select', {
    staticClass: "e-input",
    staticStyle: {
      "width": "320px"
    },
    attrs: {
      "filterable": "",
      "placeholder": "请选择"
    },
    on: {
      "change": _vm.onInSkuChange
    },
    model: {
      value: (_vm.inLicenseModel.sku),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "sku", $$v)
      },
      expression: "inLicenseModel.sku"
    }
  }, _vm._l((_vm.SKUData), function(item) {
    return _c('el-option', {
      key: item.sn,
      attrs: {
        "label": item.sn,
        "value": item.sn
      }
    }, [_c('span', {
      staticStyle: {
        "float": "left"
      }
    }, [_vm._v(_vm._s(item.sn))]), _vm._v(" "), _c('span', {
      staticStyle: {
        "float": "right",
        "color": "#8492a6",
        "font-size": "13px"
      }
    }, [_vm._v(_vm._s(item.name))])])
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "许可证截止日期",
      "prop": "expirationDateOfLicense"
    }
  }, [_c('el-date-picker', {
    staticClass: "input-320",
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    on: {
      "change": _vm.inDateChangeClick
    },
    model: {
      value: (_vm.inLicenseModel.expirationDateOfLicense),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "expirationDateOfLicense", $$v)
      },
      expression: "inLicenseModel.expirationDateOfLicense"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "备注",
      "prop": "memo"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "320px"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.memo),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "memo", $$v)
      },
      expression: "inLicenseModel.memo"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.inLicenseShow = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.confirmLoading
    },
    on: {
      "click": _vm.inOkHandler
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.outeditMode === 1 ? '添加出口许可证' : '编辑出口许可证',
      "visible": _vm.outLicenseShow
    },
    on: {
      "update:visible": function($event) {
        _vm.outLicenseShow = $event
      },
      "open": _vm.beforeDialogOpen
    }
  }, [_c('el-form', {
    ref: "outLicenseRef",
    staticStyle: {
      "overflow-y": "hidden",
      "overflow-x": "hidden"
    },
    attrs: {
      "model": _vm.outLicenseModel,
      "rules": _vm.outLicenseRules,
      "inline": "",
      "label-width": "140px"
    }
  }, [(_vm.outeditMode === 1) ? _c('el-form-item', {
    attrs: {
      "label": "出口商"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "320px"
    },
    attrs: {
      "clearable": "",
      "placeholder": "请选择"
    },
    on: {
      "change": _vm.onCompanyChange
    },
    model: {
      value: (_vm.outLicenseModel.companyName),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "companyName", $$v)
      },
      expression: "outLicenseModel.companyName"
    }
  }, _vm._l((_vm.companys), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.name
      }
    })
  }))], 1) : _vm._e(), _vm._v(" "), (_vm.outeditMode === 2) ? _c('el-form-item', {
    attrs: {
      "label": "进口商"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off",
      "disabled": ""
    },
    model: {
      value: (_vm.outLicenseModel.companyName),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "companyName", $$v)
      },
      expression: "outLicenseModel.companyName"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "许可证号",
      "prop": "licenseKey"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.licenseKey),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "licenseKey", $$v)
      },
      expression: "outLicenseModel.licenseKey"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "许可数量",
      "prop": "count"
    }
  }, [_c('el-input-number', {
    staticClass: "input-320",
    model: {
      value: (_vm.outLicenseModel.count),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "count", $$v)
      },
      expression: "outLicenseModel.count"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品编号",
      "prop": "sku"
    }
  }, [_c('el-select', {
    staticClass: "e-input",
    staticStyle: {
      "width": "320px"
    },
    attrs: {
      "filterable": "",
      "placeholder": "请选择"
    },
    on: {
      "change": _vm.onOutSkuChange
    },
    model: {
      value: (_vm.outLicenseModel.sku),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "sku", $$v)
      },
      expression: "outLicenseModel.sku"
    }
  }, _vm._l((_vm.SKUData), function(item) {
    return _c('el-option', {
      key: item.sn,
      attrs: {
        "label": item.sn,
        "value": item.sn
      }
    }, [_c('span', {
      staticStyle: {
        "float": "left"
      }
    }, [_vm._v(_vm._s(item.sn))]), _vm._v(" "), _c('span', {
      staticStyle: {
        "float": "right",
        "color": "#8492a6",
        "font-size": "13px"
      }
    }, [_vm._v(_vm._s(item.name))])])
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "许可证截止日期",
      "prop": "expirationDateOfLicense"
    }
  }, [_c('el-date-picker', {
    staticClass: "input-320",
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    on: {
      "change": _vm.outDateChangeClick
    },
    model: {
      value: (_vm.outLicenseModel.expirationDateOfLicense),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "expirationDateOfLicense", $$v)
      },
      expression: "outLicenseModel.expirationDateOfLicense"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "备注",
      "prop": "memo"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "320px"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.memo),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "memo", $$v)
      },
      expression: "outLicenseModel.memo"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.outLicenseShow = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.confirmLoading
    },
    on: {
      "click": _vm.outOkHandler
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5be44211", module.exports)
  }
}

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(156)
  __webpack_require__(158)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(160),
  /* template */
  __webpack_require__(167),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5be44211",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\setting\\license.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] license.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5be44211", Component.options)
  } else {
    hotAPI.reload("data-v-5be44211", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=licenseUI-license.js.map