webpackJsonp([2],{

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

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var packinglistAPI = {
  getPackingList: function getPackingList(declarationid) {
    console.log(declarationid);
    return axios.get('/api/declaration/packinglist/list/' + declarationid).then(function (res) {
      return res.data;
    });
  },
  getPackingListById: function getPackingListById(id) {
    return axios.get('/api/declaration/packinglist/' + id).then(function (res) {
      return res.data;
    });
  },
  addPackingList: function addPackingList(packinglist) {
    console.log(packinglist);
    return axios.post('/api/declaration/packinglist', JSON.parse(JSON.stringify(packinglist))).then(function (res) {
      return res.data;
    });
  },
  updatePackingList: function updatePackingList(packinglist) {
    return axios.put('/api/declaration/packinglist', JSON.parse(JSON.stringify(packinglist))).then(function (res) {
      return res.data;
    });
  },
  deletePackingList: function deletePackingList(ids) {
    var strIds = ids.join(',');
    return axios.delete('/api/declaration/packinglist/' + strIds).then(function (res) {
      return res.data;
    });
  }
};

exports.default = packinglistAPI;

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var declarationAPI = {
  getDeclaration: function getDeclaration(obj) {
    console.log(obj);
    return axios.get('form/form', {
      params: {
        searchItem: obj
      }
    }).then(function (res) {
      return res.data;
    });
  },
  cleanFields: function cleanFields(declaration) {
    var arr = ['settlementType', 'telephone', 'shippingType', 'importOrExportDate', 'customsNumber', 'purposeOrManufacturer', 'entryUnit', 'id', 'declarationUnit', 'forwardingUnit', 'startOrArrivalCountry', 'taxStatusName', 'loadingOrFingerPort', 'containerNumber', 'auditStatus', 'zipCode', 'documents', 'taxpaidOrNot', 'shippingNumbers', 'goodsNumber', 'entryDate', 'freight', 'declarationDate', 'taxDue', 'shippingTools', 'exemptionNature', 'declarationType', 'premium', 'preentryNumber', 'grossWeight', 'importOrExportPort', 'licenseKey', 'transactionMethod', 'managementUnit', 'approvalNumber', 'agreementNumber', 'shippingMarksAndRemarks', 'netWeight', 'companyId', 'recordNumber', 'tradingType', 'incidental', 'declarationTypeName', 'entryClerk', 'destinationOrConsignmentPlace', 'documentSattached', 'fillingDate', 'unitAddress', 'auditStatusName', 'packagingType', 'packingList', 'taxStatus', 'customsBroker'];
    for (var prop in declaration) {
      if (!arr.includes(prop)) {
        delete declaration[prop];
      }
    }
  },
  getDeclarationById: function getDeclarationById(id) {
    return axios.get('/form/form/' + id).then(function (res) {
      return res.data;
    });
  },
  addDeclaration: function addDeclaration(declaration) {
    declaration.packingList.forEach(function (item) {
      return delete item.id;
    });
    this.cleanFields(declaration);
    console.log(declaration);
    return axios.post('/form/form', JSON.parse(JSON.stringify(declaration)));
  },
  updateDeclaration: function updateDeclaration(declaration) {
    declaration.packingList.forEach(function (item) {
      return delete item.id;
    });
    this.cleanFields(declaration);
    return axios.put('/form/form', JSON.parse(JSON.stringify(declaration)));
  },
  deleteDeclaration: function deleteDeclaration(ids) {
    var strIds = ids.join(',');
    return axios.delete('/form/form/' + strIds);
  },
  commitAudit: function commitAudit(ids) {
    var strIds = ids.join(',');
    return axios.put('/form/audit', {
      ids: strIds,
      statu: 'W'
    });
  },
  getManifestData: function getManifestData() {
    return axios.get('/manifest/manifest').then(function (res) {
      return res.data;
    });
  }
};

exports.default = declarationAPI;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(108),
  /* template */
  __webpack_require__(109),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3a7beb6a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\form\\components\\packing.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] packing.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a7beb6a", Component.options)
  } else {
    hotAPI.reload("data-v-3a7beb6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("a5d17d64", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3a7beb6a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./packing.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3a7beb6a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./packing.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.pack-table[data-v-3a7beb6a] {\n  font-size: 10px;\n  min-width: 100%;\n}\n.e-input[data-v-3a7beb6a] {\n  width: 270px;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/form/components/packing.vue?1597f061"],"names":[],"mappings":";AAiNA;EACA,gBAAA;EACA,gBAAA;CACA;AACA;EACA,aAAA;CACA","file":"packing.vue","sourcesContent":["<template>\n  <div>\n    <div style=\"height:50px;background-color:#f5f5f5; padding:5px;\" v-if=\"!onlyView\">\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addClick\">\n        <i class=\"fa fa-plus\"></i>添加</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0\" @click=\"editClick\">\n            <i class=\"fa fa-edit\"></i>编辑</el-button>\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0\" @click=\"deleteClick\">\n        <i class=\"fa fa-remove\"></i>删除</el-button>\n    </div>\n    <el-table :data.sync=\"packinglistData\" tooltip-effect=\"dark\" class=\"pack-table\" highlight-current-row @selection-change=\"onSelectionChange\" @row-dblclick=\"rowDBClick\">\n      <el-table-column type=\"index\" label=\"项号\" width=\"60px\"></el-table-column>\n      <el-table-column type=\"selection\"  width=\"60px\" v-if=\"!onlyView\"></el-table-column>\n      <el-table-column prop=\"sku\" min-width=\"90px\" label=\"商品编号\"></el-table-column>\n      <el-table-column prop=\"name\" min-width=\"200px\" label=\"商品名称\"></el-table-column>\n      <el-table-column prop=\"amount\" min-width=\"80px\" label=\"数量\"></el-table-column>\n      <el-table-column prop=\"singlePrice\" min-width=\"60px\" label=\"单价\"></el-table-column>\n      <el-table-column prop=\"totalPrice\" min-width=\"60px\" label=\"总价\"></el-table-column>\n      <el-table-column v-if=\"declarationType == 'import'\" min-width=\"80px\" prop=\"country\" label=\"原产国\"></el-table-column>\n      <el-table-column v-else prop=\"country\" min-width=\"80px\" label=\"最终目的国\"></el-table-column>\n    </el-table>\n    <el-dialog :title=\"editMode==1? '编辑商品信息': '添加商品'\" :visible.sync=\"packingdetailDialogModal\" :close-on-click-modal=\"false\" @open=\"beforeDialogOpen\">\n      <el-form label-position=\"right\" ref=\"packingForm\" :model=\"tmpPacking\" label-width=\"160px\">\n        <el-form-item label=\"商品编号：\">\n          <el-select class=\"e-input\" filterable v-model=\"tmpPacking.sku\" placeholder=\"请选择\" @change=\"selectChange\">\n              <el-option v-for=\"item in SKUData\" :key=\"item.sn\" :label=\"item.sn\" :value=\"item.sn\">\n                <span style=\"float: left\">{{ item.sn }}</span>\n                <span style=\"float: right; color: #8492a6; font-size: 13px\">{{ item.name }}</span>\n              </el-option>\n            </el-select>\n        </el-form-item>\n        <el-form-item label=\"商品名称：\">\n          <el-input class=\"e-input\" type=\"textarea\" :rows=\"3\" v-model=\"tmpPacking.name\" disabled></el-input>\n        </el-form-item>\n        <el-form-item label=\"数量：\" prop=\"amount\" :rules=\"[{ type: 'number', message: '必须为数字值', trigger: 'change'}]\">\n          <el-input class=\"e-input\" v-model.number=\"tmpPacking.amount\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"单价：\" prop=\"singlePrice\" :rules=\"[{ type: 'number', message: '必须为数字值', trigger: 'change'}]\">\n          <el-input class=\"e-input\" v-model.number=\"tmpPacking.singlePrice\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"总价：\" prop=\"totalPrice\" :rules=\"[{ type: 'number', message: '必须为数字值', trigger: 'change'}]\">\n          <el-input class=\"e-input\" v-model.number=\"tmpPacking.totalPrice\" disabled></el-input>\n        </el-form-item>\n        <el-form-item v-if=\"this.declarationType == 'import'\" label=\"原产国：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.country\"></el-input>\n        </el-form-item>\n        <el-form-item v-else label=\"最终目的国：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.country\"></el-input>\n        </el-form-item>\n       </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"packingdetailDialogModal = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"packingdetailConfirm\">确 定</el-button>\n      </div>\n    </el-dialog>\n  </div>\n</template>\n\n<script>\nimport packinglistAPI from '../api/packinglistAPI.js';\nimport skuAPI from '../../setting/api/skuAPI.js';\n//import '../mock/declaration.js';\n\nexport default {\n  data() {\n    return {\n      packingdetailDialogModal: false,\n      tmpPacking: {},\n      selectedRows: [],\n      packinglistData: [],\n      editMode: 0,\n      SKUData: [],\n      currencyOption: [\n        { key: 'USD', value: '美元' },\n        { key: 'RMB', value: '人民币' },\n        { key: 'euro', value: '欧元' },\n        { key: 'yen', value: '日元' },\n        { key: 'pound', value: '英镑' },\n      ],\n    };\n  },\n  watch:{\n    'tmpPacking.amount':function(){\n      this.tmpPacking.totalPrice = this.tmpPacking.amount*this.tmpPacking.singlePrice;\n    },\n    'tmpPacking.singlePrice':function(){\n\n      this.tmpPacking.totalPrice = this.tmpPacking.amount*this.tmpPacking.singlePrice;\n    },\n  },\n  mounted() {\n    skuAPI.getSKU().then(data => {\n      this.SKUData = data;\n      console.log(data);\n    });\n  },\n  methods: {\n    selectChange(val) {\n      console.log(val);\n      this.SKUData.forEach(o => {\n        if (o.sn == val) {\n          Vue.set(this.tmpPacking, 'name', o.name + '\\n' + o.spec);\n        }\n      });\n    },\n    rowDBClick(row) {\n      this.editMode = 1;\n      this.tmpPacking = Object.assign({}, row);\n      this.packingdetailDialogModal = true;\n    },\n    onSelectionChange(selection) {\n      this.selectedRows = selection;\n    },\n    addClick() {\n      this.editMode = 0;\n      this.tmpPacking = {\n        id: Math.floor(Math.random() * 999999),\n        sku: '',\n      };\n      this.packingdetailDialogModal = true;\n    },\n    editClick() {\n      this.editMode = 1;\n      this.tmpPacking = Object.assign({}, this.selectedRows[0]);\n      this.packingdetailDialogModal = true;\n    },\n    deleteClick() {\n      let rowIds = [];\n      this.selectedRows.forEach(function(row) {\n        rowIds.push(row.id);\n      });\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n      })\n        .then(() => {\n          this.packinglistData = this.packinglistData.filter(\n            val => !rowIds.includes(val.id)\n          );\n          this.selectedRows = [];\n          this.$notify({\n            title: '提示',\n            message: '删除成功！',\n            type: 'success',\n            duration: 2000,\n          });\n        })\n        .catch(() => {\n          this.$notify.error({\n            title: '取消',\n            message: '操作取消！',\n            duration: 2000,\n          });\n        });\n    },\n    packingdetailConfirm() {\n      this.$refs['packingForm'].validate(valid => {\n        if (valid) {\n          if (this.editMode == 0) {\n            this.$notify({\n              title: '成功',\n              message: '添加成功',\n              type: 'success',\n              duration: 2000,\n            });\n            this.packinglistData = [\n              ...this.packinglistData,\n              Object.assign({}, this.tmpPacking),\n            ];\n          }\n          if (this.editMode == 1) {\n            this.$notify({\n              title: '成功',\n              message: '修改成功',\n              type: 'success',\n              duration: 2000,\n            });\n            let index = this.packinglistData.findIndex(\n              val => val.id === this.tmpPacking.id\n            );\n            this.packinglistData = [\n              ...this.packinglistData.slice(0, index),\n              Object.assign({}, this.tmpPacking),\n              ...this.packinglistData.slice(index + 1),\n            ];\n          }\n          this.$emit('update:packinglistData', this.packinglistData);\n          this.packingdetailDialogModal = false;\n        } else {\n          this.$notify({\n            title: '操作失败',\n            message: '请正确填写表单项',\n            type: 'error',\n            duration: 2000,\n          });\n          return false;\n        }\n      });\n    },\n    rowClick(row) {\n      this.$emit('row-click', row);\n    },\n  },\n  props: ['packinglistData', 'declarationType', 'onlyView'],\n};\n</script>\n\n<style scoped>\n.pack-table {\n  font-size: 10px;\n  min-width: 100%;\n}\n.e-input {\n  width: 270px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _packinglistAPI = __webpack_require__(103);

var _packinglistAPI2 = _interopRequireDefault(_packinglistAPI);

var _skuAPI = __webpack_require__(101);

var _skuAPI2 = _interopRequireDefault(_skuAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
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

//import '../mock/declaration.js';

exports.default = {
  data: function data() {
    return {
      packingdetailDialogModal: false,
      tmpPacking: {},
      selectedRows: [],
      packinglistData: [],
      editMode: 0,
      SKUData: [],
      currencyOption: [{ key: 'USD', value: '美元' }, { key: 'RMB', value: '人民币' }, { key: 'euro', value: '欧元' }, { key: 'yen', value: '日元' }, { key: 'pound', value: '英镑' }]
    };
  },

  watch: {
    'tmpPacking.amount': function tmpPackingAmount() {
      this.tmpPacking.totalPrice = this.tmpPacking.amount * this.tmpPacking.singlePrice;
    },
    'tmpPacking.singlePrice': function tmpPackingSinglePrice() {

      this.tmpPacking.totalPrice = this.tmpPacking.amount * this.tmpPacking.singlePrice;
    }
  },
  mounted: function mounted() {
    var _this = this;

    _skuAPI2.default.getSKU().then(function (data) {
      _this.SKUData = data;
      console.log(data);
    });
  },

  methods: {
    selectChange: function selectChange(val) {
      var _this2 = this;

      console.log(val);
      this.SKUData.forEach(function (o) {
        if (o.sn == val) {
          Vue.set(_this2.tmpPacking, 'name', o.name + '\n' + o.spec);
        }
      });
    },
    rowDBClick: function rowDBClick(row) {
      this.editMode = 1;
      this.tmpPacking = Object.assign({}, row);
      this.packingdetailDialogModal = true;
    },
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    addClick: function addClick() {
      this.editMode = 0;
      this.tmpPacking = {
        id: Math.floor(Math.random() * 999999),
        sku: ''
      };
      this.packingdetailDialogModal = true;
    },
    editClick: function editClick() {
      this.editMode = 1;
      this.tmpPacking = Object.assign({}, this.selectedRows[0]);
      this.packingdetailDialogModal = true;
    },
    deleteClick: function deleteClick() {
      var _this3 = this;

      var rowIds = [];
      this.selectedRows.forEach(function (row) {
        rowIds.push(row.id);
      });
      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this3.packinglistData = _this3.packinglistData.filter(function (val) {
          return !rowIds.includes(val.id);
        });
        _this3.selectedRows = [];
        _this3.$notify({
          title: '提示',
          message: '删除成功！',
          type: 'success',
          duration: 2000
        });
      }).catch(function () {
        _this3.$notify.error({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        });
      });
    },
    packingdetailConfirm: function packingdetailConfirm() {
      var _this4 = this;

      this.$refs['packingForm'].validate(function (valid) {
        if (valid) {
          if (_this4.editMode == 0) {
            _this4.$notify({
              title: '成功',
              message: '添加成功',
              type: 'success',
              duration: 2000
            });
            _this4.packinglistData = [].concat(_toConsumableArray(_this4.packinglistData), [Object.assign({}, _this4.tmpPacking)]);
          }
          if (_this4.editMode == 1) {
            _this4.$notify({
              title: '成功',
              message: '修改成功',
              type: 'success',
              duration: 2000
            });
            var index = _this4.packinglistData.findIndex(function (val) {
              return val.id === _this4.tmpPacking.id;
            });
            _this4.packinglistData = [].concat(_toConsumableArray(_this4.packinglistData.slice(0, index)), [Object.assign({}, _this4.tmpPacking)], _toConsumableArray(_this4.packinglistData.slice(index + 1)));
          }
          _this4.$emit('update:packinglistData', _this4.packinglistData);
          _this4.packingdetailDialogModal = false;
        } else {
          _this4.$notify({
            title: '操作失败',
            message: '请正确填写表单项',
            type: 'error',
            duration: 2000
          });
          return false;
        }
      });
    },
    rowClick: function rowClick(row) {
      this.$emit('row-click', row);
    }
  },
  props: ['packinglistData', 'declarationType', 'onlyView']
};

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.onlyView) ? _c('div', {
    staticStyle: {
      "height": "50px",
      "background-color": "#f5f5f5",
      "padding": "5px"
    }
  }, [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.addClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v("添加")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedRows.length === 0
    },
    on: {
      "click": _vm.editClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedRows.length === 0
    },
    on: {
      "click": _vm.deleteClick
    }
  }, [_c('i', {
    staticClass: "fa fa-remove"
  }), _vm._v("删除")])], 1) : _vm._e(), _vm._v(" "), _c('el-table', {
    staticClass: "pack-table",
    attrs: {
      "data": _vm.packinglistData,
      "tooltip-effect": "dark",
      "highlight-current-row": ""
    },
    on: {
      "update:data": function($event) {
        _vm.packinglistData = $event
      },
      "selection-change": _vm.onSelectionChange,
      "row-dblclick": _vm.rowDBClick
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "label": "项号",
      "width": "60px"
    }
  }), _vm._v(" "), (!_vm.onlyView) ? _c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "60px"
    }
  }) : _vm._e(), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sku",
      "min-width": "90px",
      "label": "商品编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "min-width": "200px",
      "label": "商品名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "amount",
      "min-width": "80px",
      "label": "数量"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "singlePrice",
      "min-width": "60px",
      "label": "单价"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "totalPrice",
      "min-width": "60px",
      "label": "总价"
    }
  }), _vm._v(" "), (_vm.declarationType == 'import') ? _c('el-table-column', {
    attrs: {
      "min-width": "80px",
      "prop": "country",
      "label": "原产国"
    }
  }) : _c('el-table-column', {
    attrs: {
      "prop": "country",
      "min-width": "80px",
      "label": "最终目的国"
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.editMode == 1 ? '编辑商品信息' : '添加商品',
      "visible": _vm.packingdetailDialogModal,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.packingdetailDialogModal = $event
      },
      "open": _vm.beforeDialogOpen
    }
  }, [_c('el-form', {
    ref: "packingForm",
    attrs: {
      "label-position": "right",
      "model": _vm.tmpPacking,
      "label-width": "160px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "商品编号："
    }
  }, [_c('el-select', {
    staticClass: "e-input",
    attrs: {
      "filterable": "",
      "placeholder": "请选择"
    },
    on: {
      "change": _vm.selectChange
    },
    model: {
      value: (_vm.tmpPacking.sku),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "sku", $$v)
      },
      expression: "tmpPacking.sku"
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
      "label": "商品名称："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    attrs: {
      "type": "textarea",
      "rows": 3,
      "disabled": ""
    },
    model: {
      value: (_vm.tmpPacking.name),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "name", $$v)
      },
      expression: "tmpPacking.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "数量：",
      "prop": "amount",
      "rules": [{
        type: 'number',
        message: '必须为数字值',
        trigger: 'change'
      }]
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.amount),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "amount", _vm._n($$v))
      },
      expression: "tmpPacking.amount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单价：",
      "prop": "singlePrice",
      "rules": [{
        type: 'number',
        message: '必须为数字值',
        trigger: 'change'
      }]
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.singlePrice),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "singlePrice", _vm._n($$v))
      },
      expression: "tmpPacking.singlePrice"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "总价：",
      "prop": "totalPrice",
      "rules": [{
        type: 'number',
        message: '必须为数字值',
        trigger: 'change'
      }]
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.tmpPacking.totalPrice),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "totalPrice", _vm._n($$v))
      },
      expression: "tmpPacking.totalPrice"
    }
  })], 1), _vm._v(" "), (this.declarationType == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "原产国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.country),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "country", $$v)
      },
      expression: "tmpPacking.country"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "最终目的国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.country),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "country", $$v)
      },
      expression: "tmpPacking.country"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.packingdetailDialogModal = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.packingdetailConfirm
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3a7beb6a", module.exports)
  }
}

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("458c5bb2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f739cca0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./declaration.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f739cca0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./declaration.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-f739cca0] {\n  padding: 10px;\n}\n.search-bar[data-v-f739cca0] {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-f739cca0] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-f739cca0] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-f739cca0] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.page-wrap[data-v-f739cca0] {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n.e-input[data-v-f739cca0] {\n  width: 270px;\n}\n.search-select[data-v-f739cca0] {\n  width: 150px;\n}\n.form-title[data-v-f739cca0] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 6%;\n  padding: 20px 0 5px 0;\n}\n.form-panel[data-v-f739cca0] {\n  width: 80%;\n  margin-left: 5%;\n  padding: 20px 0 0 0;\n  border-top: 2px solid #ccc;\n  border-radius: 4px;\n}\n.packinglist-panel[data-v-f739cca0] {\n  width: 80%;\n  margin-left: 5%;\n  border-top: 2px solid #ccc;\n  border-radius: 4px;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/form/declaration.vue?9b316444"],"names":[],"mappings":";AAm0BA;EACA,cAAA;CACA;AAEA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,SAAA;EACA,oBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;CACA;AAEA;EACA,WAAA;EACA,gBAAA;EACA,oBAAA;EACA,2BAAA;EACA,mBAAA;CACA;AAEA;EACA,WAAA;EACA,gBAAA;EACA,2BAAA;EACA,mBAAA;CACA","file":"declaration.vue","sourcesContent":["<template slot-scope=\"scope\">\n  <div v-if=\"!declarationDialogmodel\" :style=\"{width:clientWidth+'px'}\">\n    <el-toolbar>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addClick\">\n        <i class=\"fa fa-plus\"></i> 新建</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0  || audited\" @click=\"editClick\">\n        <i class=\"fa fa-edit\"></i> 编辑</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0\" @click=\"deleteClick\">\n        <i class=\"fa fa-remove\"></i> 删除</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0 || audited\" @click=\"commitAudit(true)\">\n        <i class=\"fa fa-check\"></i>提交审核</el-button>\n    </el-toolbar>\n    <div class=\"main-content-wrap\">\n      <div class=\"search-bar\">\n        排序：\n        <el-select size=\"small\" v-model=\"sort\" class=\"search-select\">\n          <el-option v-for=\"item in sortOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        检索字段：\n        <el-select size=\"small\" v-model=\"retrieval\" class=\"search-select\">\n          <el-option v-for=\"item in retrievalOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        <el-input style=\"width:200px\" size=\"small\" v-model=\"searchWord\"></el-input>\n        <!--<el-select size=\"small\" v-model=\"logic\" class=\"search-select\">\n                                  <el-option v-for=\"item in logicOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n                                  </el-option>\n                                </el-select>-->\n        <el-button size=\"small\" type=\"primary\" @click=\"doSearch\" style=\"width:60px;\">搜索</el-button>\n      </div>\n      <el-table :data=\"declarationData\" ref=\"declarationTable\" v-loading=\"dataLoading\" tooltip-effect=\"dark\" style=\"width:100%\" :height=\"clientHeight\" highlight-current-row @selection-change=\"onSelectionChange\" @expand=\"expandRow\" @row-dblclick=\"rowDBClick\">\n        <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n        <el-table-column type=\"expand\">\n          <template slot-scope=\"props\">\n            <el-form label-position=\"left\" inline class=\"demo-table-expand\" label-width=\"160px\">\n              <el-form-item label=\"报关单类型：\">\n                <span>{{props.row.declarationTypeName}}</span>\n              </el-form-item><br/>\n              <el-form-item label=\"预录入编号：\">\n                <span>{{props.row.preentryNumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"海关编号：\">\n                <span>{{props.row.customsNumber}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationType == 'import'\" label=\"进口口岸：\">\n                <span>{{props.row.importOrExportPort}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"出口口岸：\">\n                <span>{{props.row.importOrExportPort}}</span>\n              </el-form-item>\n              <el-form-item label=\"备案号：\">\n                <span>{{props.row.recordNumber}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationType == 'import'\" label=\"进口日期：\">\n                <span>{{props.row.importOrExportDate}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"出口日期：\">\n                <span>{{props.row.importOrExportDate}}</span>\n              </el-form-item>\n              <el-form-item label=\"申报日期：\">\n                <span>{{props.row.declarationDate}}</span>\n              </el-form-item>\n              <el-form-item label=\"经营单位：\">\n                <span>{{props.row.managementUnit}}</span>\n              </el-form-item>\n              <el-form-item label=\"运输方式：\">\n                <span>{{props.row.shippingType}}</span>\n              </el-form-item>\n              <el-form-item label=\"运输工具名称：\">\n                <span>{{props.row.shippingTools}}</span>\n              </el-form-item>\n              <el-form-item label=\"舱单号：\">\n                <span>{{props.row.shippingNumbers}}</span>\n              </el-form-item>\n              <el-form-item label=\"收货单位：\">\n                <span>{{props.row.forwardingUnit}}</span>\n              </el-form-item>\n              <el-form-item label=\"贸易方式：\">\n                <span>{{props.row.tradingType}}</span>\n              </el-form-item>\n              <el-form-item label=\"征免性质：\">\n                <span>{{props.row.exemptionNature}}</span>\n              </el-form-item>\n              <el-form-item label=\"征税比例：\">\n                <span>{{props.row.settlementType}}</span>\n              </el-form-item>\n              <el-form-item label=\"许可证号：\">\n                <span>{{props.row.licenseKey}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationType == 'import'\" label=\"启运国：\">\n                <span>{{props.row.startOrArrivalCountry}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"运抵国：\">\n                <span>{{props.row.startOrArrivalCountry}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationType == 'import'\" label=\"装货港：\">\n                <span>{{props.row.loadingOrFingerPort}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"指运港：\">\n                <span>{{props.row.loadingOrFingerPort}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationType == 'import'\" label=\"境内目的地：\">\n                <span>{{props.row.destinationOrConsignmentPlace}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"境内货源地：\">\n                <span>{{props.row.destinationOrConsignmentPlace}}</span>\n              </el-form-item>\n              <el-form-item label=\"批准文号：\">\n                <span>{{props.row.approvalNumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"成交方式：\">\n                <span>{{props.row.transactionMethod}}</span>\n              </el-form-item>\n              <el-form-item label=\"运费：\">\n                <span>{{props.row.freight}}</span>\n              </el-form-item>\n              <el-form-item label=\"保费：\">\n                <span>{{props.row.premium}}</span>\n              </el-form-item>\n              <el-form-item label=\"杂费：\">\n                <span>{{props.row.incidental}}</span>\n              </el-form-item><br/>\n              <el-form-item label=\"合同协议号：\">\n                <span>{{props.row.agreementNumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"件数：\">\n                <span>{{props.row.goodsNumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"包装种类：\">\n                <span>{{props.row.packagingType}}</span>\n              </el-form-item>\n              <el-form-item label=\"毛重（千克）：\">\n                <span>{{props.row.grossWeight}}</span>\n              </el-form-item>\n              <el-form-item label=\"净重（千克）：\">\n                <span>{{props.row.netWeight}}</span>\n              </el-form-item>\n              <el-form-item label=\"集装箱号：\">\n                <span>{{props.row.containerNumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"随附单证：\">\n                <span>{{props.row.documentSattached}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationType == 'import'\" label=\"用途：\">\n                <span>{{props.row.purposeOrManufacturer}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"生产厂家：\">\n                <span>{{props.row.purposeOrManufacturer}}</span>\n              </el-form-item>\n              <el-form-item label=\"标记唛码及备注：\" style=\"width:90%\">\n                <span>{{props.row.shippingMarksAndRemarks}}</span>\n              </el-form-item>\n              <el-form-item label=\"商品：\" label-width=\"60px\" style=\"width:100%\">\n                <packing-item :packinglistData.sync=\"packingListData\" :declarationType=\"declarationType\" :onlyView=\"true\">\n                </packing-item>\n              </el-form-item>\n              <el-form-item label=\"税费征收情况：\" style=\"width:90%\">\n                <span>{{props.row.taxpaidOrNot}}</span>\n              </el-form-item>\n              <el-form-item label=\"录入员：\">\n                <span>{{props.row.entryClerk}}</span>\n              </el-form-item>\n              <el-form-item label=\"录入单位：\">\n                <span>{{props.row.entryUnit}}</span>\n              </el-form-item>\n              <el-form-item label=\"报关员：\">\n                <span>{{props.row.customsBroker}}</span>\n              </el-form-item>\n              <el-form-item label=\"申报单位：\">\n                <span>{{props.row.declarationUnit}}</span>\n              </el-form-item>\n              <el-form-item label=\"单位地址：\">\n                <span>{{props.row.unitAddress}}</span>\n              </el-form-item>\n              <el-form-item label=\"邮编：\">\n                <span>{{props.row.zipCode}}</span>\n              </el-form-item>\n              <el-form-item label=\"电话：\">\n                <span>{{props.row.telephone}}</span>\n              </el-form-item>\n              <el-form-item label=\"制填日期：\">\n                <span>{{props.row.fillingDate}}</span>\n              </el-form-item>\n              <el-form-item label=\"录入日期：\">\n                <span>{{props.row.entryDate}}</span>\n              </el-form-item>\n              <el-form-item label=\"审核状态：\">\n                <span>{{props.row.auditStatusName}}</span>\n              </el-form-item>\n              <el-form-item label=\"应缴税额\">\n                <span>{{props.row.taxDue}}</span>\n              </el-form-item>\n              <el-form-item label=\"缴税状态\">\n                <span>{{props.row.taxStatusName}}</span>\n              </el-form-item>\n            </el-form>\n          </template>\n        </el-table-column>\n        <el-table-column prop=\"customsNumber\" show-overflow-tooltip min-width=\"20%\" label=\"海关编号\"></el-table-column>\n        <el-table-column prop=\"declarationTypeName\" show-overflow-tooltip min-width=\"20%\" label=\"报关单类型\"></el-table-column>\n        <el-table-column prop=\"importOrExportPort\" show-overflow-tooltip min-width=\"20%\" label=\"海关口岸\"></el-table-column>\n        <el-table-column prop=\"declarationUnit\" show-overflow-tooltip min-width=\"30%\" label=\"申报单位\"></el-table-column>\n        <el-table-column min-width=\"20%\" label=\"商品详情\">\n          <template slot- slot-scope=\"scope\">\n            <el-button type=\"text\">\n              <span style=\"color:green;\" @click=\"showPackinglist(scope.row.packingList,scope.row.declarationType)\">查看商品</span>\n            </el-button>\n          </template>\n        </el-table-column>\n        <el-table-column prop=\"declarationDate\" show-overflow-tooltip min-width=\"15%\" label=\"申报日期\"></el-table-column>\n        <el-table-column prop=\"auditStatusName\" show-overflow-tooltip min-width=\"15%\" label=\"审核状态\"></el-table-column>\n      </el-table>\n      <div class=\"page-wrap\">\n        <el-pagination @size-change=\"handleSizeChange\" @current-change=\"handleCurrentChange\" :current-page=\"currentPage\" :page-sizes=\"pageSizes\" :page-size=\"pageSize\" layout=\"total, sizes, prev, pager, next\" :total=\"total\">\n        </el-pagination>\n      </div>\n    </div>\n    <el-dialog title=\"商品列表详情\" :visible.sync=\"packinglistDialogModal\" size=\"large\">\n      <packing-item :packinglistData.sync=\"packingListData\" :declarationType=\"declarationType\" :onlyView=\"true\">\n      </packing-item>\n    </el-dialog>\n\n    <!-- 提交审核信息列表 -->\n    <el-dialog size=\"tiny\" title=\"审核信息列表\" :visible.sync=\"showCheckDialog\">\n      <el-table ref=\"checkList\" :data=\"checkList\" style=\"width: 100%\">\n        <el-table-column label=\"状态\" width=\"80\">\n          <template slot-scope=\"scope\">\n            <span v-show=\"!scope.row.data.includes('失败')\">\n              <i style=\"color:green;font-size:18px;\" class=\"fa fa-check\" />\n            </span>\n            <span v-show=\"scope.row.data.includes('失败')\">\n              <i style=\"color:red;font-size:18px;\" class=\"fa fa-close\" />\n            </span>\n          </template>\n        </el-table-column>\n        <el-table-column label=\"结果\">\n          <template slot-scope=\"scope\">\n            {{scope.row.data}}\n          </template>\n        </el-table-column>\n      </el-table>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"showCheckDialog = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"onSure\" :disabled=\"!saveCheckStatus\">确 定</el-button>\n      </div>\n    </el-dialog>\n  </div>\n  <div v-else>\n    <el-toolbar>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"returnMain\">\n        <i class=\"fa fa-chevron-left\"></i>返回</el-button>\n      <span class=\"button-separator\"></span>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"confirm\" :disabled=\"audited\">\n        <i class=\"fa fa-save\"></i>\n        <span v-if=\"editMode == 1\">保存编辑</span>\n        <span v-else>暂存</span>\n      </el-button>\n      <span class=\"button-separator\"></span>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"commitAudit(false)\" :disabled=\"audited\">\n        <i class=\"fa fa-check\"></i>提交审核</el-button>\n    </el-toolbar>\n    <div class=\"main-content-wrap\" style=\"background-color:#ffffff\">\n      <el-form label-position=\"right\" ref=\"declarationForm\" :model=\"tmpDeclaration\" label-width=\"160px\" class=\"e-form\">\n        <div class=\"form-title\">基本信息</div>\n        <div class=\"form-panel\">\n          <el-form-item label=\"报关单类型：\">\n            <el-select class=\"e-input\" v-model=\"tmpDeclaration.declarationType\" placeholder=\"请选择\">\n              <el-option v-for=\"item in declarationTypeOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n              </el-option>\n            </el-select>\n          </el-form-item>\n          <el-form-item label=\"预录入编号：\" prop=\"preentryNumber\" :rules=\"[{ required: true, message: '预录入编号不能为空', trigger: 'change' }]\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.preentryNumber\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"海关编号：\" prop=\"customsNumber\" :rules=\"[{ required: true, message: '海关编号不能为空', trigger: 'change' }]\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.customsNumber\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"贸易方式：\">\n            <el-select class=\"e-input\" v-model=\"tmpDeclaration.tradingType\" placeholder=\"请选择\">\n              <el-option key=\"processingTrade\" label=\"加工贸易\" value=\"processingTrade\">\n              </el-option>\n              <el-option key=\"general\" label=\"普通贸易\" value=\"general\">\n              </el-option>\n            </el-select>\n          </el-form-item>\n          <el-form-item v-if=\"tmpDeclaration.declarationType == 'import'\" label=\"进口口岸：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.importOrExportPort\"></el-input>\n          </el-form-item>\n          <el-form-item v-if=\"tmpDeclaration.declarationType == 'import'\" label=\"进口日期：\">\n            <el-date-picker v-model=\"tmpDeclaration.importOrExportDate\" @change=\"importOrExportDateChange\" type=\"date\" class=\"e-input\" placeholder=\"选择进口日期\">\n            </el-date-picker>\n          </el-form-item>\n          <el-form-item v-else label=\"出口日期：\">\n            <el-date-picker v-model=\"tmpDeclaration.importOrExportDate\" @change=\"importOrExportDateChange\" type=\"date\" class=\"e-input\" placeholder=\"选择出口日期\">\n            </el-date-picker>\n          </el-form-item>\n          <el-form-item label=\"申报日期：\">\n            <el-date-picker v-model=\"tmpDeclaration.declarationDate\" @change=\"declarationDateChange\" type=\"date\" class=\"e-input\" placeholder=\"选择申报日期\">\n            </el-date-picker>\n          </el-form-item>\n        </div>\n        <div class=\"form-title\">单位信息</div>\n        <div class=\"form-panel\">\n          <el-form-item label=\"申报单位：\">\n            <el-select class=\"e-input\" filterable v-model=\"tmpDeclaration.declarationUnit\" placeholder=\"请选择\" @change=\"selectUnitChange\">\n              <el-option v-for=\"item in unitOptions\" :key=\"item.name\" :label=\"item.name\" :value=\"item.name\">\n              </el-option>\n            </el-select>\n          </el-form-item>\n          <el-form-item label=\"单位地址：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.unitAddress\" disabled></el-input>\n          </el-form-item>\n          <el-form-item label=\"邮编：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.zipCode\" disabled></el-input>\n          </el-form-item>\n          <el-form-item label=\"电话：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.telephone\" disabled></el-input>\n          </el-form-item>\n        </div>\n        <div class=\"form-title\">货物信息</div>\n        <div class=\"form-panel\">\n          <el-form-item label=\"许可证号：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.licenseKey\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"舱单号：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.shippingNumbers\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"运费：\" prop=\"freight\" :rules=\"[{ type: 'number', message: '必须为数字值', trigger: 'change'}]\">\n            <el-input class=\"e-input\" v-model.number=\"tmpDeclaration.freight\" auto-complete=\"off\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"保费：\" prop=\"premium\" :rules=\"[{ type: 'number', message: '必须为数字值', trigger: 'change'}]\">\n            <el-input class=\"e-input\" v-model.number=\"tmpDeclaration.premium\" auto-complete=\"off\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"杂费：\" prop=\"incidental\" :rules=\"[{ type: 'number', message: '必须为数字值', trigger: 'change'}]\">\n            <el-input class=\"e-input\" v-model.number=\"tmpDeclaration.incidental\" auto-complete=\"off\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"应缴税额：\" prop=\"taxDue\" :rules=\"[{ type: 'number', message: '必须为数字值', trigger: 'change'}]\">\n            <el-input class=\"e-input\" readonly=\"true\" v-model.number=\"tmpDeclaration.taxDue\" auto-complete=\"off\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"合同协议号：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.agreementNumber\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"标记唛码及备注：\" style=\"width:90%\">\n            <el-input type=\"textarea\" v-model=\"tmpDeclaration.shippingMarksAndRemarks\" :rows=\"3\" style=\"width:450px;\"></el-input>\n          </el-form-item>\n        </div>\n        <div class=\"form-title\">商品列表</div>\n        <div class=\"packinglist-panel\">\n          <packing-item :packinglistData.sync=\"tmpDeclaration.packingList\" :declarationType=\"tmpDeclaration.declarationType\" :onlyView=\"false\">\n          </packing-item>\n        </div>\n        <div class=\"form-title\">制单信息</div>\n        <div class=\"form-panel\">\n          <el-form-item label=\"录入员：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.entryClerk\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"录入单位：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.entryUnit\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"报关员：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.customsBroker\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"制填日期：\">\n            <el-date-picker v-model=\"tmpDeclaration.fillingDate\" @change=\"fillingDateChange\" type=\"date\" class=\"e-input\" placeholder=\"选择制填日期\">\n            </el-date-picker>\n          </el-form-item>\n        </div>\n        <div style=\"height:100px;\"></div>\n      </el-form>\n    </div>\n\n    <!-- 提交审核信息列表 -->\n    <el-dialog size=\"tiny\" title=\"审核信息列表\" :visible.sync=\"showCheckDialog\">\n      <el-table ref=\"checkList\" :data=\"checkList\" style=\"width: 100%\">\n        <el-table-column label=\"状态\" width=\"80\">\n          <template slot-scope=\"scope\">\n            <span v-show=\"!scope.row.data.includes('失败')\">\n              <i style=\"color:green;font-size:18px;\" class=\"fa fa-check\" />\n            </span>\n            <span v-show=\"scope.row.data.includes('失败')\">\n              <i style=\"color:red;font-size:18px;\" class=\"fa fa-close\" />\n            </span>\n          </template>\n        </el-table-column>\n        <el-table-column label=\"结果\">\n          <template slot-scope=\"scope\">\n            {{scope.row.data}}\n          </template>\n        </el-table-column>\n      </el-table>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"showCheckDialog = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"onSure\" :disabled=\"!saveCheckStatus\">确 定</el-button>\n      </div>\n    </el-dialog>\n  </div>\n</template>\n\n<script>\nimport declarationAPI from './api/declarationAPI.js';\nimport packinglistAPI from './api/packinglistAPI.js';\nimport companyAPI from '../setting/api/companyAPI.js';\n//import './mock/declaration.js';\nimport packing from './components/packing.vue';\n\nexport default {\n  data() {\n    return {\n      shippingNumbersOptions: [],\n      audited: false,\n      id: 0,\n      saveCheckStatus: false,\n      showCheckDialog: false,\n      checkList: [],\n      packingListData: [],\n      packingdetailDialogModal: false,\n      packinglistDialogModal: false,\n      declarationType: '',\n      declarationID: '',\n      clientWidth: 0,\n      clientHeight: 0,\n      searchWord: '',\n      selectedRows: [],\n      selectedPackingRow: [],\n      declarationData: [],\n      currentPage: 1,\n      pageSizes: [10, 20, 50],\n      pageSize: 10,\n      total: 0,\n      editMode: 1,\n      declarationDialogmodel: false,\n      tmpDeclaration: {},\n      dataLoading: false,\n      confirmLoading: false,\n      declarationTypeOptions: [\n        { key: 'import', value: '进口报关单' },\n        { key: 'export', value: '出口报关单' },\n      ],\n      sort: '',\n      sortOptions: [\n        { key: '', value: '请选择排序' },\n        { key: 'declarationType', value: '报关单类型' },\n        { key: 'customsNumber', value: '海关编号' },\n        { key: 'importOrExportPort', value: '进口/出口口岸' },\n        { key: 'declarationUnit', value: '申报单位' },\n        { key: 'declarationDate', value: '申报日期' },\n        { key: 'entryDate', value: '录入日期' },\n      ],\n      retrieval: '',\n      retrievalOptions: [\n        { key: '', value: '请选择检索字段' },\n        { key: 'customsNumber', value: '海关编号' },\n        { key: 'declarationUnit', value: '申报单位' },\n      ],\n      logic: '',\n      logicOptions: [\n        { key: '', value: '请选择逻辑' },\n        { key: 'and', value: '与' },\n        { key: 'or', value: '或' },\n        { key: 'none', value: '非' },\n      ],\n      declarationDataCache: [],\n      unitOptions: [],\n    };\n  },\n  methods: {\n    importOrExportDateChange(val) {\n      this.tmpDeclaration.importOrExportDate = val;\n    },\n    declarationDateChange(val) {\n      this.tmpDeclaration.declarationDate = val;\n    },\n    fillingDateChange(val) {\n      this.tmpDeclaration.fillingDate = val;\n    },\n    selectUnitChange(val) {\n      this.unitOptions.forEach(o => {\n        if (o.name == val) {\n          Vue.set(this.tmpDeclaration, 'companyId', o.id);\n          Vue.set(this.tmpDeclaration, 'unitAddress', o.address);\n          Vue.set(this.tmpDeclaration, 'zipCode', o.postCode);\n          Vue.set(this.tmpDeclaration, 'telephone', o.phone);\n        }\n      });\n    },\n    rowDBClick(row) {\n      declarationAPI.getDeclarationById(row.id).then(data => {\n        this.audited = false;\n        this.editMode = 1;\n        this.tmpDeclaration = data;\n        if (data.auditStatus != 'C' && data.auditStatus != 'N') {\n          this.audited = true;\n        }\n        console.log(this.tmpDeclaration);\n        companyAPI\n          .getCompany()\n          .then(res => {\n            console.log(res);\n            this.unitOptions = res.data;\n          })\n          .then(() => {\n            declarationAPI.getManifestData().then(data => {\n              console.log(data);\n              this.shippingNumbersOptions = data;\n            });\n          })\n          .then(() => {\n            this.declarationDialogmodel = true;\n          });\n        this.selectedPackingRow = [];\n      });\n    },\n    doSearch() {\n      this.filter();\n    },\n    filter() {\n      let list = [];\n      if (this.retrieval != '' && this.searchWord != '') {\n        this.declarationDataCache.forEach(o => {\n          if (o[this.retrieval] != 'null') {\n            console.log(o[this.retrieval]);\n            if (o[this.retrieval].indexOf(this.searchWord) != -1) {\n              list.push(o);\n            }\n          }\n        });\n      } else {\n        list = this.declarationDataCache.concat();\n      }\n      console.log(list);\n      list = list.slice(\n        (this.currentPage - 1) * this.pageSize,\n        this.pageSize * this.currentPage\n      );\n      this.declarationData = list.concat();\n    },\n\n    checkOrConfirm(declarationForm, serviceId, method) {\n      return axios\n        .post('/' + serviceId + '/' + serviceId + '/' + method, declarationForm)\n        .then(res => res);\n    },\n    checkOrConfirm2(declarationForm, serviceId, method) {\n      return axios\n        .post('/' + serviceId + '/' + method, declarationForm)\n        .then(res => res);\n    },\n    commitAudit(commit) {\n      this.id = commit;\n      this.showCheckDialog = true;\n      console.log(this.tmpDeclaration);\n      Promise.all([\n        this.checkOrConfirm(this.tmpDeclaration, 'cottonQuota', 'check'),\n        this.checkOrConfirm(this.tmpDeclaration, 'riskAnalysis', 'check'),\n        this.checkOrConfirm2(this.tmpDeclaration, 'tax', 'check'),\n        this.checkOrConfirm2(this.tmpDeclaration, 'taxCutting', 'check'),\n        this.checkOrConfirm2(this.tmpDeclaration, 'manifest', 'check'),\n        this.checkOrConfirm2(this.tmpDeclaration, 'processingTrade', 'check'),\n      ]).then(datas => {\n        console.log(datas);\n        let flag = !datas.some(data => {\n          return data.status != 200 || data.data.includes('失败')\n        });\n        this.saveCheckStatus = flag;\n        this.checkList = datas;\n      });\n    },\n    onSure() {\n      if (this.saveCheckStatus) {\n        let rowIds = [];\n        this.selectedRows.forEach(function(row) {\n          rowIds.push(row.id);\n        });\n        console.log(this.id);\n        if (!this.id) {\n          if (this.editMode == 0) {\n            rowIds = [this.declarationID];\n            this.declarationTypeOptions.forEach(o => {\n              if (o.key == this.tmpDeclaration.declarationType) {\n                Vue.set(this.tmpDeclaration, 'declarationTypeName', o.value);\n                return;\n              }\n            });\n            Vue.set(this.tmpDeclaration, 'id', this.declarationID);\n            declarationAPI\n              .addDeclaration(this.tmpDeclaration)\n              .then(res => {\n                this.tmpDeclaration = {\n                  declarationType: this.tmpDeclaration.declarationType,\n                };\n              })\n              .then(() => {\n                declarationAPI.commitAudit(rowIds).then(res => {\n                  if (res.status == 200) {\n                    this.$notify({\n                      title: '成功',\n                      message: res.data,\n                      type: 'success',\n                      duration: 2000,\n                    });\n                  }\n                  this.getDeclarationData();\n                });\n              });\n          } else {\n            rowIds = [this.tmpDeclaration.id];\n            declarationAPI.commitAudit(rowIds).then(res => {\n              if (res.status == 200) {\n                this.$notify({\n                  title: '成功',\n                  message: res.data,\n                  type: 'success',\n                  duration: 2000,\n                });\n              }\n              this.getDeclarationData();\n            });\n          }\n        } else {\n          declarationAPI.commitAudit(rowIds).then(res => {\n            this.$notify({\n              title: '成功',\n              message: res.data,\n              type: 'success',\n              duration: 2000,\n            });\n            this.getDeclarationData();\n          });\n        }\n        this.checkList = [];\n        this.showCheckDialog = false;\n        this.saveCheckStatus = false;\n      } else {\n        this.$message.error('审核失败');\n      }\n    },\n    showPackinglist(packingList, type) {\n      console.log(packingList);\n      console.log(type);\n      this.packingListData = packingList;\n      this.declarationType = type;\n      this.selectedPackingRow = [];\n      this.packinglistDialogModal = true;\n    },\n    getDeclarationData() {\n      this.dataLoading = true;\n      let obj = {\n        retrieval: this.retrieval,\n        searchWord: this.searchWord,\n        pageSize: this.pageSize,\n        pageIndex: this.currentPage,\n      };\n      declarationAPI.getDeclaration(obj).then(data => {\n        console.log(data);\n        this.declarationDataCache = data;\n        this.filter();\n        if (data.length > 0) {\n          this.total = data[0].total;\n        }\n        this.dataLoading = false;\n      });\n    },\n    onSelectionChange(selection) {\n      this.selectedRows = selection;\n      this.tmpDeclaration = Object.assign({}, this.selectedRows[0]);\n      this.audited = false;\n      console.log(selection);\n      selection.forEach(select => {\n        if (select.auditStatus != 'C' && select.auditStatus != 'N') {\n          this.audited = true;\n          return;\n        }\n      });\n    },\n    handleSizeChange(val) {\n      this.pageSize = val;\n      this.filter();\n    },\n    handleCurrentChange(val) {\n      this.currentPage = val;\n      this.filter();\n    },\n    expandRow(row) {\n      this.declarationType = row.declarationType;\n      this.packingListData = row.packingList;\n    },\n    addClick() {\n      this.editMode = 0;\n      this.tmpDeclaration = {\n        declarationType: 'import',\n        packingList: [],\n        importOrExportDate: '',\n        declarationData: '',\n        fillingDate: '',\n      };\n      this.declarationID = Math.floor(Math.random() * 999999) + 1;\n      companyAPI\n        .getCompany()\n        .then(res => {\n          console.log(res);\n          this.unitOptions = res.data;\n        })\n        .then(() => {\n          declarationAPI.getManifestData().then(data => {\n            console.log(data);\n            this.shippingNumbersOptions = data;\n          });\n        })\n        .then(() => {\n          this.declarationDialogmodel = true;\n        });\n      this.selectedPackingRow = [];\n    },\n    editClick() {\n      declarationAPI.getDeclarationById(this.selectedRows[0].id).then(data => {\n        this.editMode = 1;\n        this.tmpDeclaration = data;\n        console.log(this.tmpDeclaration);\n        companyAPI\n          .getCompany()\n          .then(res => {\n            console.log(res);\n            this.unitOptions = res.data;\n          })\n          .then(() => {\n            declarationAPI.getManifestData().then(data => {\n              console.log(data);\n              this.shippingNumbersOptions = data;\n            });\n          })\n          .then(() => {\n            this.declarationDialogmodel = true;\n          });\n        this.selectedPackingRow = [];\n      });\n    },\n    deleteClick() {\n      let rowIds = [];\n      this.selectedRows.forEach(function(row) {\n        rowIds.push(row.id);\n      });\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n      })\n        .then(() => {\n          return declarationAPI.deleteDeclaration(rowIds).then(res => {\n            if (res.status == 200) {\n              this.$notify({\n                title: '成功',\n                message: res.data,\n                type: 'success',\n                duration: 2000,\n              });\n              this.getDeclarationData();\n            }\n          });\n        })\n        .catch(() => {\n          this.$notify.error({\n            title: '取消',\n            message: '操作取消！',\n            duration: 2000,\n          });\n        });\n    },\n    returnMain() {\n      this.selectedRows = [];\n      window.location.reload();\n      this.declarationDialogmodel = false;\n    },\n    confirm() {\n      console.log(this.tmpDeclaration);\n      this.$refs['declarationForm'].validate(valid => {\n        if (valid) {\n          this.declarationTypeOptions.forEach(o => {\n            if (o.key == this.tmpDeclaration.declarationType) {\n              Vue.set(this.tmpDeclaration, 'declarationTypeName', o.value);\n              return;\n            }\n          });\n          if (this.editMode == 1) {\n            declarationAPI.updateDeclaration(this.tmpDeclaration).then(res => {\n              if (res.status == 200) {\n                this.$notify({\n                  title: '成功',\n                  message: res.data,\n                  type: 'success',\n                  duration: 2000,\n                });\n              }\n            });\n          } else {\n            Vue.set(this.tmpDeclaration, 'id', this.declarationID);\n            declarationAPI.addDeclaration(this.tmpDeclaration).then(res => {\n              if (res.status == 200) {\n                this.$notify({\n                  title: '成功',\n                  message: res.data,\n                  type: 'success',\n                  duration: 2000,\n                });\n              }\n              this.tmpDeclaration = {\n                declarationType: this.tmpDeclaration.declarationType,\n              };\n            });\n          }\n          this.returnMain();\n        } else {\n          this.$notify({\n            title: '操作失败',\n            message: '请正确填写表单项',\n            type: 'error',\n            duration: 2000,\n          });\n          return false;\n        }\n      });\n    },\n  },\n  created() {\n    this.clientWidth = document.documentElement.clientWidth - 200;\n    this.clientHeight = document.documentElement.clientHeight - 200;\n    this.getDeclarationData();\n  },\n  components: {\n    'packing-item': packing,\n  },\n};\n</script>\n\n<style scoped>\n.main-content-wrap {\n  padding: 10px;\n}\n\n.search-bar {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n\n.demo-table-expand {\n  font-size: 12px;\n}\n\n.demo-table-expand label {\n  color: #99a9bf;\n}\n\n.demo-table-expand .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n\n.page-wrap {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n\n.e-input {\n  width: 270px;\n}\n\n.search-select {\n  width: 150px;\n}\n\n.form-title {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 6%;\n  padding: 20px 0 5px 0;\n}\n\n.form-panel {\n  width: 80%;\n  margin-left: 5%;\n  padding: 20px 0 0 0;\n  border-top: 2px solid #ccc;\n  border-radius: 4px;\n}\n\n.packinglist-panel {\n  width: 80%;\n  margin-left: 5%;\n  border-top: 2px solid #ccc;\n  border-radius: 4px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _declarationAPI = __webpack_require__(104);

var _declarationAPI2 = _interopRequireDefault(_declarationAPI);

var _packinglistAPI = __webpack_require__(103);

var _packinglistAPI2 = _interopRequireDefault(_packinglistAPI);

var _companyAPI = __webpack_require__(102);

var _companyAPI2 = _interopRequireDefault(_companyAPI);

var _packing = __webpack_require__(105);

var _packing2 = _interopRequireDefault(_packing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  data: function data() {
    return {
      shippingNumbersOptions: [],
      audited: false,
      id: 0,
      saveCheckStatus: false,
      showCheckDialog: false,
      checkList: [],
      packingListData: [],
      packingdetailDialogModal: false,
      packinglistDialogModal: false,
      declarationType: '',
      declarationID: '',
      clientWidth: 0,
      clientHeight: 0,
      searchWord: '',
      selectedRows: [],
      selectedPackingRow: [],
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
      declarationTypeOptions: [{ key: 'import', value: '进口报关单' }, { key: 'export', value: '出口报关单' }],
      sort: '',
      sortOptions: [{ key: '', value: '请选择排序' }, { key: 'declarationType', value: '报关单类型' }, { key: 'customsNumber', value: '海关编号' }, { key: 'importOrExportPort', value: '进口/出口口岸' }, { key: 'declarationUnit', value: '申报单位' }, { key: 'declarationDate', value: '申报日期' }, { key: 'entryDate', value: '录入日期' }],
      retrieval: '',
      retrievalOptions: [{ key: '', value: '请选择检索字段' }, { key: 'customsNumber', value: '海关编号' }, { key: 'declarationUnit', value: '申报单位' }],
      logic: '',
      logicOptions: [{ key: '', value: '请选择逻辑' }, { key: 'and', value: '与' }, { key: 'or', value: '或' }, { key: 'none', value: '非' }],
      declarationDataCache: [],
      unitOptions: []
    };
  },

  methods: {
    importOrExportDateChange: function importOrExportDateChange(val) {
      this.tmpDeclaration.importOrExportDate = val;
    },
    declarationDateChange: function declarationDateChange(val) {
      this.tmpDeclaration.declarationDate = val;
    },
    fillingDateChange: function fillingDateChange(val) {
      this.tmpDeclaration.fillingDate = val;
    },
    selectUnitChange: function selectUnitChange(val) {
      var _this = this;

      this.unitOptions.forEach(function (o) {
        if (o.name == val) {
          Vue.set(_this.tmpDeclaration, 'companyId', o.id);
          Vue.set(_this.tmpDeclaration, 'unitAddress', o.address);
          Vue.set(_this.tmpDeclaration, 'zipCode', o.postCode);
          Vue.set(_this.tmpDeclaration, 'telephone', o.phone);
        }
      });
    },
    rowDBClick: function rowDBClick(row) {
      var _this2 = this;

      _declarationAPI2.default.getDeclarationById(row.id).then(function (data) {
        _this2.audited = false;
        _this2.editMode = 1;
        _this2.tmpDeclaration = data;
        if (data.auditStatus != 'C' && data.auditStatus != 'N') {
          _this2.audited = true;
        }
        console.log(_this2.tmpDeclaration);
        _companyAPI2.default.getCompany().then(function (res) {
          console.log(res);
          _this2.unitOptions = res.data;
        }).then(function () {
          _declarationAPI2.default.getManifestData().then(function (data) {
            console.log(data);
            _this2.shippingNumbersOptions = data;
          });
        }).then(function () {
          _this2.declarationDialogmodel = true;
        });
        _this2.selectedPackingRow = [];
      });
    },
    doSearch: function doSearch() {
      this.filter();
    },
    filter: function filter() {
      var _this3 = this;

      var list = [];
      if (this.retrieval != '' && this.searchWord != '') {
        this.declarationDataCache.forEach(function (o) {
          if (o[_this3.retrieval] != 'null') {
            console.log(o[_this3.retrieval]);
            if (o[_this3.retrieval].indexOf(_this3.searchWord) != -1) {
              list.push(o);
            }
          }
        });
      } else {
        list = this.declarationDataCache.concat();
      }
      console.log(list);
      list = list.slice((this.currentPage - 1) * this.pageSize, this.pageSize * this.currentPage);
      this.declarationData = list.concat();
    },
    checkOrConfirm: function checkOrConfirm(declarationForm, serviceId, method) {
      return axios.post('/' + serviceId + '/' + serviceId + '/' + method, declarationForm).then(function (res) {
        return res;
      });
    },
    checkOrConfirm2: function checkOrConfirm2(declarationForm, serviceId, method) {
      return axios.post('/' + serviceId + '/' + method, declarationForm).then(function (res) {
        return res;
      });
    },
    commitAudit: function commitAudit(commit) {
      var _this4 = this;

      this.id = commit;
      this.showCheckDialog = true;
      console.log(this.tmpDeclaration);
      Promise.all([this.checkOrConfirm(this.tmpDeclaration, 'cottonQuota', 'check'), this.checkOrConfirm(this.tmpDeclaration, 'riskAnalysis', 'check'), this.checkOrConfirm2(this.tmpDeclaration, 'tax', 'check'), this.checkOrConfirm2(this.tmpDeclaration, 'taxCutting', 'check'), this.checkOrConfirm2(this.tmpDeclaration, 'manifest', 'check'), this.checkOrConfirm2(this.tmpDeclaration, 'processingTrade', 'check')]).then(function (datas) {
        console.log(datas);
        var flag = !datas.some(function (data) {
          return data.status != 200 || data.data.includes('失败');
        });
        _this4.saveCheckStatus = flag;
        _this4.checkList = datas;
      });
    },
    onSure: function onSure() {
      var _this5 = this;

      if (this.saveCheckStatus) {
        var rowIds = [];
        this.selectedRows.forEach(function (row) {
          rowIds.push(row.id);
        });
        console.log(this.id);
        if (!this.id) {
          if (this.editMode == 0) {
            rowIds = [this.declarationID];
            this.declarationTypeOptions.forEach(function (o) {
              if (o.key == _this5.tmpDeclaration.declarationType) {
                Vue.set(_this5.tmpDeclaration, 'declarationTypeName', o.value);
                return;
              }
            });
            Vue.set(this.tmpDeclaration, 'id', this.declarationID);
            _declarationAPI2.default.addDeclaration(this.tmpDeclaration).then(function (res) {
              _this5.tmpDeclaration = {
                declarationType: _this5.tmpDeclaration.declarationType
              };
            }).then(function () {
              _declarationAPI2.default.commitAudit(rowIds).then(function (res) {
                if (res.status == 200) {
                  _this5.$notify({
                    title: '成功',
                    message: res.data,
                    type: 'success',
                    duration: 2000
                  });
                }
                _this5.getDeclarationData();
              });
            });
          } else {
            rowIds = [this.tmpDeclaration.id];
            _declarationAPI2.default.commitAudit(rowIds).then(function (res) {
              if (res.status == 200) {
                _this5.$notify({
                  title: '成功',
                  message: res.data,
                  type: 'success',
                  duration: 2000
                });
              }
              _this5.getDeclarationData();
            });
          }
        } else {
          _declarationAPI2.default.commitAudit(rowIds).then(function (res) {
            _this5.$notify({
              title: '成功',
              message: res.data,
              type: 'success',
              duration: 2000
            });
            _this5.getDeclarationData();
          });
        }
        this.checkList = [];
        this.showCheckDialog = false;
        this.saveCheckStatus = false;
      } else {
        this.$message.error('审核失败');
      }
    },
    showPackinglist: function showPackinglist(packingList, type) {
      console.log(packingList);
      console.log(type);
      this.packingListData = packingList;
      this.declarationType = type;
      this.selectedPackingRow = [];
      this.packinglistDialogModal = true;
    },
    getDeclarationData: function getDeclarationData() {
      var _this6 = this;

      this.dataLoading = true;
      var obj = {
        retrieval: this.retrieval,
        searchWord: this.searchWord,
        pageSize: this.pageSize,
        pageIndex: this.currentPage
      };
      _declarationAPI2.default.getDeclaration(obj).then(function (data) {
        console.log(data);
        _this6.declarationDataCache = data;
        _this6.filter();
        if (data.length > 0) {
          _this6.total = data[0].total;
        }
        _this6.dataLoading = false;
      });
    },
    onSelectionChange: function onSelectionChange(selection) {
      var _this7 = this;

      this.selectedRows = selection;
      this.tmpDeclaration = Object.assign({}, this.selectedRows[0]);
      this.audited = false;
      console.log(selection);
      selection.forEach(function (select) {
        if (select.auditStatus != 'C' && select.auditStatus != 'N') {
          _this7.audited = true;
          return;
        }
      });
    },
    handleSizeChange: function handleSizeChange(val) {
      this.pageSize = val;
      this.filter();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.currentPage = val;
      this.filter();
    },
    expandRow: function expandRow(row) {
      this.declarationType = row.declarationType;
      this.packingListData = row.packingList;
    },
    addClick: function addClick() {
      var _this8 = this;

      this.editMode = 0;
      this.tmpDeclaration = {
        declarationType: 'import',
        packingList: [],
        importOrExportDate: '',
        declarationData: '',
        fillingDate: ''
      };
      this.declarationID = Math.floor(Math.random() * 999999) + 1;
      _companyAPI2.default.getCompany().then(function (res) {
        console.log(res);
        _this8.unitOptions = res.data;
      }).then(function () {
        _declarationAPI2.default.getManifestData().then(function (data) {
          console.log(data);
          _this8.shippingNumbersOptions = data;
        });
      }).then(function () {
        _this8.declarationDialogmodel = true;
      });
      this.selectedPackingRow = [];
    },
    editClick: function editClick() {
      var _this9 = this;

      _declarationAPI2.default.getDeclarationById(this.selectedRows[0].id).then(function (data) {
        _this9.editMode = 1;
        _this9.tmpDeclaration = data;
        console.log(_this9.tmpDeclaration);
        _companyAPI2.default.getCompany().then(function (res) {
          console.log(res);
          _this9.unitOptions = res.data;
        }).then(function () {
          _declarationAPI2.default.getManifestData().then(function (data) {
            console.log(data);
            _this9.shippingNumbersOptions = data;
          });
        }).then(function () {
          _this9.declarationDialogmodel = true;
        });
        _this9.selectedPackingRow = [];
      });
    },
    deleteClick: function deleteClick() {
      var _this10 = this;

      var rowIds = [];
      this.selectedRows.forEach(function (row) {
        rowIds.push(row.id);
      });
      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        return _declarationAPI2.default.deleteDeclaration(rowIds).then(function (res) {
          if (res.status == 200) {
            _this10.$notify({
              title: '成功',
              message: res.data,
              type: 'success',
              duration: 2000
            });
            _this10.getDeclarationData();
          }
        });
      }).catch(function () {
        _this10.$notify.error({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        });
      });
    },
    returnMain: function returnMain() {
      this.selectedRows = [];
      window.location.reload();
      this.declarationDialogmodel = false;
    },
    confirm: function confirm() {
      var _this11 = this;

      console.log(this.tmpDeclaration);
      this.$refs['declarationForm'].validate(function (valid) {
        if (valid) {
          _this11.declarationTypeOptions.forEach(function (o) {
            if (o.key == _this11.tmpDeclaration.declarationType) {
              Vue.set(_this11.tmpDeclaration, 'declarationTypeName', o.value);
              return;
            }
          });
          if (_this11.editMode == 1) {
            _declarationAPI2.default.updateDeclaration(_this11.tmpDeclaration).then(function (res) {
              if (res.status == 200) {
                _this11.$notify({
                  title: '成功',
                  message: res.data,
                  type: 'success',
                  duration: 2000
                });
              }
            });
          } else {
            Vue.set(_this11.tmpDeclaration, 'id', _this11.declarationID);
            _declarationAPI2.default.addDeclaration(_this11.tmpDeclaration).then(function (res) {
              if (res.status == 200) {
                _this11.$notify({
                  title: '成功',
                  message: res.data,
                  type: 'success',
                  duration: 2000
                });
              }
              _this11.tmpDeclaration = {
                declarationType: _this11.tmpDeclaration.declarationType
              };
            });
          }
          _this11.returnMain();
        } else {
          _this11.$notify({
            title: '操作失败',
            message: '请正确填写表单项',
            type: 'error',
            duration: 2000
          });
          return false;
        }
      });
    }
  },
  created: function created() {
    this.clientWidth = document.documentElement.clientWidth - 200;
    this.clientHeight = document.documentElement.clientHeight - 200;
    this.getDeclarationData();
  },

  components: {
    'packing-item': _packing2.default
  }
};
//import './mock/declaration.js';

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (!_vm.declarationDialogmodel) ? _c('div', {
    style: ({
      width: _vm.clientWidth + 'px'
    })
  }, [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.addClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v(" 新建")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedRows.length === 0 || _vm.audited
    },
    on: {
      "click": _vm.editClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v(" 编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedRows.length === 0
    },
    on: {
      "click": _vm.deleteClick
    }
  }, [_c('i', {
    staticClass: "fa fa-remove"
  }), _vm._v(" 删除")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedRows.length === 0 || _vm.audited
    },
    on: {
      "click": function($event) {
        _vm.commitAudit(true)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check"
  }), _vm._v("提交审核")])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap"
  }, [_c('div', {
    staticClass: "search-bar"
  }, [_vm._v("\n      排序：\n      "), _c('el-select', {
    staticClass: "search-select",
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.sort),
      callback: function($$v) {
        _vm.sort = $$v
      },
      expression: "sort"
    }
  }, _vm._l((_vm.sortOptions), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  })), _vm._v("\n      检索字段：\n      "), _c('el-select', {
    staticClass: "search-select",
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.retrieval),
      callback: function($$v) {
        _vm.retrieval = $$v
      },
      expression: "retrieval"
    }
  }, _vm._l((_vm.retrievalOptions), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  })), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.searchWord),
      callback: function($$v) {
        _vm.searchWord = $$v
      },
      expression: "searchWord"
    }
  }), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "width": "60px"
    },
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": _vm.doSearch
    }
  }, [_vm._v("搜索")])], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.dataLoading),
      expression: "dataLoading"
    }],
    ref: "declarationTable",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.declarationData,
      "tooltip-effect": "dark",
      "height": _vm.clientHeight,
      "highlight-current-row": ""
    },
    on: {
      "selection-change": _vm.onSelectionChange,
      "expand": _vm.expandRow,
      "row-dblclick": _vm.rowDBClick
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "55",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "type": "expand"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('el-form', {
          staticClass: "demo-table-expand",
          attrs: {
            "label-position": "left",
            "inline": "",
            "label-width": "160px"
          }
        }, [_c('el-form-item', {
          attrs: {
            "label": "报关单类型："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationTypeName))])]), _c('br'), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "预录入编号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.preentryNumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "海关编号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.customsNumber))])]), _vm._v(" "), (props.row.declarationType == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "进口口岸："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importOrExportPort))])]) : _c('el-form-item', {
          attrs: {
            "label": "出口口岸："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importOrExportPort))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "备案号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.recordNumber))])]), _vm._v(" "), (props.row.declarationType == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "进口日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importOrExportDate))])]) : _c('el-form-item', {
          attrs: {
            "label": "出口日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importOrExportDate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "申报日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationDate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "经营单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.managementUnit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "运输方式："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingType))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "运输工具名称："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingTools))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "舱单号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingNumbers))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "收货单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.forwardingUnit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "贸易方式："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.tradingType))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "征免性质："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.exemptionNature))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "征税比例："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.settlementType))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "许可证号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.licenseKey))])]), _vm._v(" "), (props.row.declarationType == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "启运国："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.startOrArrivalCountry))])]) : _c('el-form-item', {
          attrs: {
            "label": "运抵国："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.startOrArrivalCountry))])]), _vm._v(" "), (props.row.declarationType == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "装货港："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.loadingOrFingerPort))])]) : _c('el-form-item', {
          attrs: {
            "label": "指运港："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.loadingOrFingerPort))])]), _vm._v(" "), (props.row.declarationType == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "境内目的地："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.destinationOrConsignmentPlace))])]) : _c('el-form-item', {
          attrs: {
            "label": "境内货源地："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.destinationOrConsignmentPlace))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "批准文号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.approvalNumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "成交方式："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.transactionMethod))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "运费："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.freight))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "保费："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.premium))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "杂费："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.incidental))])]), _c('br'), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "合同协议号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.agreementNumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "件数："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.goodsNumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "包装种类："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.packagingType))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "毛重（千克）："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.grossWeight))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "净重（千克）："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.netWeight))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "集装箱号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.containerNumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "随附单证："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.documentSattached))])]), _vm._v(" "), (props.row.declarationType == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "用途："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.purposeOrManufacturer))])]) : _c('el-form-item', {
          attrs: {
            "label": "生产厂家："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.purposeOrManufacturer))])]), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "90%"
          },
          attrs: {
            "label": "标记唛码及备注："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingMarksAndRemarks))])]), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "100%"
          },
          attrs: {
            "label": "商品：",
            "label-width": "60px"
          }
        }, [_c('packing-item', {
          attrs: {
            "packinglistData": _vm.packingListData,
            "declarationType": _vm.declarationType,
            "onlyView": true
          },
          on: {
            "update:packinglistData": function($event) {
              _vm.packingListData = $event
            }
          }
        })], 1), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "90%"
          },
          attrs: {
            "label": "税费征收情况："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.taxpaidOrNot))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "录入员："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.entryClerk))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "录入单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.entryUnit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "报关员："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.customsBroker))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "申报单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationUnit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "单位地址："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.unitAddress))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "邮编："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.zipCode))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "电话："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.telephone))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "制填日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.fillingDate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "录入日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.entryDate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "审核状态："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.auditStatusName))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "应缴税额"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.taxDue))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "缴税状态"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.taxStatusName))])])], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customsNumber",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "海关编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationTypeName",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "报关单类型"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "importOrExportPort",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "海关口岸"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationUnit",
      "show-overflow-tooltip": "",
      "min-width": "30%",
      "label": "申报单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "20%",
      "label": "商品详情"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text"
          }
        }, [_c('span', {
          staticStyle: {
            "color": "green"
          },
          on: {
            "click": function($event) {
              _vm.showPackinglist(scope.row.packingList, scope.row.declarationType)
            }
          }
        }, [_vm._v("查看商品")])])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationDate",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "申报日期"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "auditStatusName",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "审核状态"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "page-wrap"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": _vm.pageSizes,
      "page-size": _vm.pageSize,
      "layout": "total, sizes, prev, pager, next",
      "total": _vm.total
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "商品列表详情",
      "visible": _vm.packinglistDialogModal,
      "size": "large"
    },
    on: {
      "update:visible": function($event) {
        _vm.packinglistDialogModal = $event
      }
    }
  }, [_c('packing-item', {
    attrs: {
      "packinglistData": _vm.packingListData,
      "declarationType": _vm.declarationType,
      "onlyView": true
    },
    on: {
      "update:packinglistData": function($event) {
        _vm.packingListData = $event
      }
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "size": "tiny",
      "title": "审核信息列表",
      "visible": _vm.showCheckDialog
    },
    on: {
      "update:visible": function($event) {
        _vm.showCheckDialog = $event
      }
    }
  }, [_c('el-table', {
    ref: "checkList",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.checkList
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "状态",
      "width": "80"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (!scope.row.data.includes('失败')),
            expression: "!scope.row.data.includes('失败')"
          }]
        }, [_c('i', {
          staticClass: "fa fa-check",
          staticStyle: {
            "color": "green",
            "font-size": "18px"
          }
        })]), _vm._v(" "), _c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (scope.row.data.includes('失败')),
            expression: "scope.row.data.includes('失败')"
          }]
        }, [_c('i', {
          staticClass: "fa fa-close",
          staticStyle: {
            "color": "red",
            "font-size": "18px"
          }
        })])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "结果"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n          " + _vm._s(scope.row.data) + "\n        ")]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.showCheckDialog = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "disabled": !_vm.saveCheckStatus
    },
    on: {
      "click": _vm.onSure
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1) : _c('div', [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.returnMain
    }
  }, [_c('i', {
    staticClass: "fa fa-chevron-left"
  }), _vm._v("返回")]), _vm._v(" "), _c('span', {
    staticClass: "button-separator"
  }), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.audited
    },
    on: {
      "click": _vm.confirm
    }
  }, [_c('i', {
    staticClass: "fa fa-save"
  }), _vm._v(" "), (_vm.editMode == 1) ? _c('span', [_vm._v("保存编辑")]) : _c('span', [_vm._v("暂存")])]), _vm._v(" "), _c('span', {
    staticClass: "button-separator"
  }), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.audited
    },
    on: {
      "click": function($event) {
        _vm.commitAudit(false)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check"
  }), _vm._v("提交审核")])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap",
    staticStyle: {
      "background-color": "#ffffff"
    }
  }, [_c('el-form', {
    ref: "declarationForm",
    staticClass: "e-form",
    attrs: {
      "label-position": "right",
      "model": _vm.tmpDeclaration,
      "label-width": "160px"
    }
  }, [_c('div', {
    staticClass: "form-title"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', {
    attrs: {
      "label": "报关单类型："
    }
  }, [_c('el-select', {
    staticClass: "e-input",
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.tmpDeclaration.declarationType),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "declarationType", $$v)
      },
      expression: "tmpDeclaration.declarationType"
    }
  }, _vm._l((_vm.declarationTypeOptions), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "预录入编号：",
      "prop": "preentryNumber",
      "rules": [{
        required: true,
        message: '预录入编号不能为空',
        trigger: 'change'
      }]
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.preentryNumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "preentryNumber", $$v)
      },
      expression: "tmpDeclaration.preentryNumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "海关编号：",
      "prop": "customsNumber",
      "rules": [{
        required: true,
        message: '海关编号不能为空',
        trigger: 'change'
      }]
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.customsNumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "customsNumber", $$v)
      },
      expression: "tmpDeclaration.customsNumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贸易方式："
    }
  }, [_c('el-select', {
    staticClass: "e-input",
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.tmpDeclaration.tradingType),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "tradingType", $$v)
      },
      expression: "tmpDeclaration.tradingType"
    }
  }, [_c('el-option', {
    key: "processingTrade",
    attrs: {
      "label": "加工贸易",
      "value": "processingTrade"
    }
  }), _vm._v(" "), _c('el-option', {
    key: "general",
    attrs: {
      "label": "普通贸易",
      "value": "general"
    }
  })], 1)], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationType == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "进口口岸："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.importOrExportPort),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "importOrExportPort", $$v)
      },
      expression: "tmpDeclaration.importOrExportPort"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.tmpDeclaration.declarationType == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "进口日期："
    }
  }, [_c('el-date-picker', {
    staticClass: "e-input",
    attrs: {
      "type": "date",
      "placeholder": "选择进口日期"
    },
    on: {
      "change": _vm.importOrExportDateChange
    },
    model: {
      value: (_vm.tmpDeclaration.importOrExportDate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "importOrExportDate", $$v)
      },
      expression: "tmpDeclaration.importOrExportDate"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "出口日期："
    }
  }, [_c('el-date-picker', {
    staticClass: "e-input",
    attrs: {
      "type": "date",
      "placeholder": "选择出口日期"
    },
    on: {
      "change": _vm.importOrExportDateChange
    },
    model: {
      value: (_vm.tmpDeclaration.importOrExportDate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "importOrExportDate", $$v)
      },
      expression: "tmpDeclaration.importOrExportDate"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "申报日期："
    }
  }, [_c('el-date-picker', {
    staticClass: "e-input",
    attrs: {
      "type": "date",
      "placeholder": "选择申报日期"
    },
    on: {
      "change": _vm.declarationDateChange
    },
    model: {
      value: (_vm.tmpDeclaration.declarationDate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "declarationDate", $$v)
      },
      expression: "tmpDeclaration.declarationDate"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("单位信息")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', {
    attrs: {
      "label": "申报单位："
    }
  }, [_c('el-select', {
    staticClass: "e-input",
    attrs: {
      "filterable": "",
      "placeholder": "请选择"
    },
    on: {
      "change": _vm.selectUnitChange
    },
    model: {
      value: (_vm.tmpDeclaration.declarationUnit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "declarationUnit", $$v)
      },
      expression: "tmpDeclaration.declarationUnit"
    }
  }, _vm._l((_vm.unitOptions), function(item) {
    return _c('el-option', {
      key: item.name,
      attrs: {
        "label": item.name,
        "value": item.name
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单位地址："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.tmpDeclaration.unitAddress),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "unitAddress", $$v)
      },
      expression: "tmpDeclaration.unitAddress"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "邮编："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.tmpDeclaration.zipCode),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "zipCode", $$v)
      },
      expression: "tmpDeclaration.zipCode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "电话："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.tmpDeclaration.telephone),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "telephone", $$v)
      },
      expression: "tmpDeclaration.telephone"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("货物信息")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', {
    attrs: {
      "label": "许可证号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.licenseKey),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "licenseKey", $$v)
      },
      expression: "tmpDeclaration.licenseKey"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "舱单号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.shippingNumbers),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingNumbers", $$v)
      },
      expression: "tmpDeclaration.shippingNumbers"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运费：",
      "prop": "freight",
      "rules": [{
        type: 'number',
        message: '必须为数字值',
        trigger: 'change'
      }]
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.tmpDeclaration.freight),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "freight", _vm._n($$v))
      },
      expression: "tmpDeclaration.freight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "保费：",
      "prop": "premium",
      "rules": [{
        type: 'number',
        message: '必须为数字值',
        trigger: 'change'
      }]
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.tmpDeclaration.premium),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "premium", _vm._n($$v))
      },
      expression: "tmpDeclaration.premium"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "杂费：",
      "prop": "incidental",
      "rules": [{
        type: 'number',
        message: '必须为数字值',
        trigger: 'change'
      }]
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.tmpDeclaration.incidental),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "incidental", _vm._n($$v))
      },
      expression: "tmpDeclaration.incidental"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "应缴税额：",
      "prop": "taxDue",
      "rules": [{
        type: 'number',
        message: '必须为数字值',
        trigger: 'change'
      }]
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    attrs: {
      "readonly": "true",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.tmpDeclaration.taxDue),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "taxDue", _vm._n($$v))
      },
      expression: "tmpDeclaration.taxDue"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "合同协议号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.agreementNumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "agreementNumber", $$v)
      },
      expression: "tmpDeclaration.agreementNumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "90%"
    },
    attrs: {
      "label": "标记唛码及备注："
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "450px"
    },
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.tmpDeclaration.shippingMarksAndRemarks),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingMarksAndRemarks", $$v)
      },
      expression: "tmpDeclaration.shippingMarksAndRemarks"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("商品列表")]), _vm._v(" "), _c('div', {
    staticClass: "packinglist-panel"
  }, [_c('packing-item', {
    attrs: {
      "packinglistData": _vm.tmpDeclaration.packingList,
      "declarationType": _vm.tmpDeclaration.declarationType,
      "onlyView": false
    },
    on: {
      "update:packinglistData": function($event) {
        _vm.$set(_vm.tmpDeclaration, "packingList", $event)
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("制单信息")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', {
    attrs: {
      "label": "录入员："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.entryClerk),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "entryClerk", $$v)
      },
      expression: "tmpDeclaration.entryClerk"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "录入单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.entryUnit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "entryUnit", $$v)
      },
      expression: "tmpDeclaration.entryUnit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "报关员："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.customsBroker),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "customsBroker", $$v)
      },
      expression: "tmpDeclaration.customsBroker"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "制填日期："
    }
  }, [_c('el-date-picker', {
    staticClass: "e-input",
    attrs: {
      "type": "date",
      "placeholder": "选择制填日期"
    },
    on: {
      "change": _vm.fillingDateChange
    },
    model: {
      value: (_vm.tmpDeclaration.fillingDate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "fillingDate", $$v)
      },
      expression: "tmpDeclaration.fillingDate"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "100px"
    }
  })])], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "size": "tiny",
      "title": "审核信息列表",
      "visible": _vm.showCheckDialog
    },
    on: {
      "update:visible": function($event) {
        _vm.showCheckDialog = $event
      }
    }
  }, [_c('el-table', {
    ref: "checkList",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.checkList
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "状态",
      "width": "80"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (!scope.row.data.includes('失败')),
            expression: "!scope.row.data.includes('失败')"
          }]
        }, [_c('i', {
          staticClass: "fa fa-check",
          staticStyle: {
            "color": "green",
            "font-size": "18px"
          }
        })]), _vm._v(" "), _c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (scope.row.data.includes('失败')),
            expression: "scope.row.data.includes('失败')"
          }]
        }, [_c('i', {
          staticClass: "fa fa-close",
          staticStyle: {
            "color": "red",
            "font-size": "18px"
          }
        })])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "结果"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n          " + _vm._s(scope.row.data) + "\n        ")]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.showCheckDialog = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "disabled": !_vm.saveCheckStatus
    },
    on: {
      "click": _vm.onSure
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f739cca0", module.exports)
  }
}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(118)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(120),
  /* template */
  __webpack_require__(121),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-f739cca0",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\form\\declaration.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] declaration.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f739cca0", Component.options)
  } else {
    hotAPI.reload("data-v-f739cca0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=formUI-declaration.js.map