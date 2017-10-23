webpackJsonp([2],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var declarationAPI = {
  getDeclaration: function getDeclaration(obj) {
    return axios.get('form/form', {
      params: {
        searchItem: obj
      }
    }).then(function (res) {
      return res.data;
    });
  },
  getDeclarationById: function getDeclarationById(id) {
    return axios.get('/form/form/' + id).then(function (res) {
      return res.data;
    });
  },
  addDeclaration: function addDeclaration(declaration) {
    console.log(declaration);
    return axios.post('/form/form', JSON.parse(JSON.stringify(declaration)));
  },
  updateDeclaration: function updateDeclaration(declaration) {
    return axios.put('/form/form', JSON.parse(JSON.stringify(declaration)));
  },
  deleteDeclaration: function deleteDeclaration(ids) {
    var strIds = ids.join(',');
    return axios.delete('/form/form/' + strIds);
  }
};

exports.default = declarationAPI;

/***/ }),

/***/ 107:
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

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("3d5a4f89", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f739cca0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./declaration.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f739cca0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./declaration.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-f739cca0] {\n  padding: 10px;\n}\n.search-bar[data-v-f739cca0] {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-f739cca0] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-f739cca0] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-f739cca0] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.page-wrap[data-v-f739cca0] {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n.e-input[data-v-f739cca0] {\n  width: 270px;\n}\n.search-select[data-v-f739cca0] {\n  width: 150px;\n}\n.form-title[data-v-f739cca0] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 6%;\n  padding: 20px 0 5px 0;\n}\n.form-panel[data-v-f739cca0] {\n  width: 80%;\n  margin-left: 5%;\n  padding: 20px 0 0 0;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.packinglist-panel[data-v-f739cca0] {\n  width: 80%;\n  margin-left: 5%;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _declarationAPI = __webpack_require__(100);

var _declarationAPI2 = _interopRequireDefault(_declarationAPI);

var _packinglistAPI = __webpack_require__(99);

var _packinglistAPI2 = _interopRequireDefault(_packinglistAPI);

var _packing = __webpack_require__(117);

var _packing2 = _interopRequireDefault(_packing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      packingListData: [],
      tmpPacking: {},
      packingdetailDialogModal: false,
      packinglistDialogModal: false,
      declarationType: '',
      declarationID: '',
      clientWidth: 0,
      clientHeight: 0,
      searchword: '',
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
      logicOptions: [{ key: '', value: '请选择逻辑' }, { key: 'and', value: '与' }, { key: 'or', value: '或' }, { key: 'none', value: '非' }]
    };
  },

  methods: {
    showPackinglist: function showPackinglist(packingList, type) {
      console.log(packingList);
      console.log(type);
      this.packingListData = packingList;
      this.declarationType = type;
      this.selectedPackingRow = [];
      this.packinglistDialogModal = true;
    },
    getDeclarationData: function getDeclarationData() {
      var _this = this;

      this.dataLoading = true;
      var obj = {
        declarationTypeName: '出口报关单'
      };
      _declarationAPI2.default.getDeclaration({}).then(function (data) {
        console.log(data);
        _this.declarationData = data;
        _this.total = data.length;
        _this.dataLoading = false;
      });
    },
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    handleSizeChange: function handleSizeChange(val) {
      this.pageSize = val;
      this.getDeclarationData();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.currentPage = val;
      this.getDeclarationData();
    },
    expandRow: function expandRow(row) {
      this.declarationType = row.declarationType;
      this.packingListData = row.packingList;
    },
    addClick: function addClick() {
      this.editMode = 0;
      this.tmpDeclaration = {
        declarationType: 'import',
        packingList: []
      };
      this.declarationID = Math.floor(Math.random() * 999999) + 1;
      this.declarationDialogmodel = true;
      this.selectedPackingRow = [];
    },
    editClick: function editClick() {
      var _this2 = this;

      _declarationAPI2.default.getDeclarationById(this.selectedRows[0].id).then(function (data) {
        _this2.editMode = 1;
        _this2.tmpDeclaration = data;
        console.log(_this2.tmpDeclaration);
        _this2.declarationDialogmodel = true;
        _this2.selectedPackingRow = [];
      });
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
        return _declarationAPI2.default.deleteDeclaration(rowIds).then(function (res) {
          if (res.status == 200) {
            _this3.$notify({
              title: '成功',
              message: res.data,
              type: 'success',
              duration: 2000
            });
            _this3.getDeclarationData();
          }
        });
      }).catch(function () {
        _this3.$notify.error({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        });
      });
    },
    returnMain: function returnMain() {
      this.selectedRows = [];
      this.getDeclarationData();
      this.declarationDialogmodel = false;
    },
    confirm: function confirm() {
      var _this4 = this;

      this.declarationTypeOptions.forEach(function (o) {
        if (o.key == _this4.tmpDeclaration.declarationType) {
          Vue.set(_this4.tmpDeclaration, 'declarationTypeName', o.value);
          return;
        }
      });
      if (this.editMode == 1) {
        _declarationAPI2.default.updateDeclaration(this.tmpDeclaration).then(function (res) {
          if (res.status == 200) {
            _this4.$notify({
              title: '成功',
              message: res.data,
              type: 'success',
              duration: 2000
            });
          }
        });
      } else {
        Vue.set(this.tmpDeclaration, 'id', this.declarationID);
        _declarationAPI2.default.addDeclaration(this.tmpDeclaration).then(function (res) {
          if (res.status == 200) {
            _this4.$notify({
              title: '成功',
              message: res.data,
              type: 'success',
              duration: 2000
            });
          }
          _this4.tmpDeclaration = {
            declarationType: _this4.tmpDeclaration.declarationType
          };
        });
      }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 117:
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
  "data-v-3a7beb6a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\git\\declarationForm\\mainUI\\source\\views\\form\\components\\packing.vue"
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

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("01552220", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3a7beb6a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./packing.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3a7beb6a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./packing.vue");
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

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.pack-table[data-v-3a7beb6a] {\n  font-size: 10px;\n  min-width: 100%;\n}\n.e-input[data-v-3a7beb6a] {\n  width: 270px;\n}\n", ""]);

// exports


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _packinglistAPI = __webpack_require__(99);

var _packinglistAPI2 = _interopRequireDefault(_packinglistAPI);

var _skuAPI = __webpack_require__(107);

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
      SKUData: []
    };
  },

  methods: {
    beforeDialogOpen: function beforeDialogOpen() {
      var _this = this;

      _skuAPI2.default.getSKU().then(function (data) {
        _this.SKUData = data;
        console.log(data);
      }).then(function () {
        if (_this.editMode == 0) {
          _this.tmpPacking = {
            id: Math.floor(Math.random() * 999999),
            sku: ''
          };
        }
        if (_this.editMode == 1) {
          _this.tmpPacking = Object.assign({}, _this.selectedRows[0]);
        }
      });
    },
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    addClick: function addClick() {
      this.editMode = 0;
      this.packingdetailDialogModal = true;
    },
    editClick: function editClick() {
      this.editMode = 1;
      this.packingdetailDialogModal = true;
    },
    deleteClick: function deleteClick() {
      var _this2 = this;

      var rowIds = [];
      this.selectedRows.forEach(function (row) {
        rowIds.push(row.id);
      });
      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this2.packinglistData = _this2.packinglistData.filter(function (val) {
          return !rowIds.includes(val.id);
        });
        _this2.selectedRows = [];
        _this2.$notify({
          title: '提示',
          message: '删除成功！',
          type: 'success',
          duration: 2000
        });
      }).catch(function () {
        _this2.$notify.error({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        });
      });
    },
    packingdetailConfirm: function packingdetailConfirm() {
      var _this3 = this;

      if (this.editMode == 0) {
        this.$notify({
          title: '成功',
          message: '添加成功',
          type: 'success',
          duration: 2000
        });
        this.packinglistData = [].concat(_toConsumableArray(this.packinglistData), [Object.assign({}, this.tmpPacking)]);
      }
      if (this.editMode == 1) {
        this.$notify({
          title: '成功',
          message: '修改成功',
          type: 'success',
          duration: 2000
        });
        var index = this.packinglistData.findIndex(function (val) {
          return val.id === _this3.tmpPacking.id;
        });
        this.packinglistData = [].concat(_toConsumableArray(this.packinglistData.slice(0, index)), [Object.assign({}, this.tmpPacking)], _toConsumableArray(this.packinglistData.slice(index + 1)));
      }
      this.$emit('update:packinglistData', this.packinglistData);
      this.packingdetailDialogModal = false;
    },
    rowClick: function rowClick(row) {
      this.$emit('row-click', row);
    }
  },
  props: ['packinglistData', 'declarationType', 'onlyView']
};

/***/ }),

/***/ 121:
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
      "selection-change": _vm.onSelectionChange
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
      "label": "商品名称、规格型号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "amount",
      "min-width": "80px",
      "label": "数量及单位"
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
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "currency",
      "min-width": "60px",
      "label": "币制"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "exemption",
      "min-width": "60px",
      "label": "征免"
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.editMode == 1 ? '编辑商品信息' : '添加商品',
      "visible": _vm.packingdetailDialogModal,
      "size": "tiny",
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.packingdetailDialogModal = $event
      },
      "open": _vm.beforeDialogOpen
    }
  }, [_c('el-form', {
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
      "label": "商品名称、规格型号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    attrs: {
      "type": "textarea",
      "rows": 3
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
      "label": "数量及单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.number),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "number", $$v)
      },
      expression: "tmpPacking.number"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单价："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.singlePrice),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "singlePrice", $$v)
      },
      expression: "tmpPacking.singlePrice"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "总价："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.totalprice),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "totalprice", $$v)
      },
      expression: "tmpPacking.totalprice"
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
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "币制："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.currency),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "currency", $$v)
      },
      expression: "tmpPacking.currency"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征免："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.exemption),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "exemption", $$v)
      },
      expression: "tmpPacking.exemption"
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

/***/ 122:
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
      "disabled": _vm.selectedRows.length !== 1
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
  }), _vm._v(" 删除")])], 1), _vm._v(" "), _c('div', {
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
      value: (_vm.searchword),
      callback: function($$v) {
        _vm.searchword = $$v
      },
      expression: "searchword"
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
      "click": _vm.getDeclarationData
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
      "expand": _vm.expandRow
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
            "label": "提运单号："
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
        }, [_c('span', [_vm._v(_vm._s(props.row.entryDate))])])], 1)]
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
      "prop": "declarationUnit",
      "show-overflow-tooltip": "",
      "min-width": "30%",
      "label": "申报单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationDate",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "申报日期"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "entryDate",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "录入日期"
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
  })], 1)], 1) : _c('div', [_c('el-toolbar', [_c('el-button', {
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
      "plain": true
    },
    on: {
      "click": _vm.confirm
    }
  }, [_c('i', {
    staticClass: "fa fa-save"
  }), _vm._v(" "), (_vm.editMode == 1) ? _c('span', [_vm._v("保存编辑")]) : _c('span', [_vm._v("确认新建")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap",
    staticStyle: {
      "background-color": "#f5f5f5"
    }
  }, [_c('el-form', {
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
      "label": "预录入编号："
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
      "label": "海关编号："
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
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationType == 'import') ? _c('el-form-item', {
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
      "label": "经营单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.managementUnit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "managementUnit", $$v)
      },
      expression: "tmpDeclaration.managementUnit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输方式："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.shippingType),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingType", $$v)
      },
      expression: "tmpDeclaration.shippingType"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输工具名称："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.shippingTools),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingTools", $$v)
      },
      expression: "tmpDeclaration.shippingTools"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "提运单号："
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
      "label": "收货单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.forwardingUnit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "forwardingUnit", $$v)
      },
      expression: "tmpDeclaration.forwardingUnit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贸易方式："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.tradingType),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "tradingType", $$v)
      },
      expression: "tmpDeclaration.tradingType"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征免性质："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.exemptionNature),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "exemptionNature", $$v)
      },
      expression: "tmpDeclaration.exemptionNature"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征税比例："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.settlementType),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "settlementType", $$v)
      },
      expression: "tmpDeclaration.settlementType"
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
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationType == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "启运国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.startOrArrivalCountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "startOrArrivalCountry", $$v)
      },
      expression: "tmpDeclaration.startOrArrivalCountry"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "运抵国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.startOrArrivalCountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "startOrArrivalCountry", $$v)
      },
      expression: "tmpDeclaration.startOrArrivalCountry"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationType == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "装货港："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.loadingOrFingerPort),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "loadingOrFingerPort", $$v)
      },
      expression: "tmpDeclaration.loadingOrFingerPort"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "指运港："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.loadingOrFingerPort),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "loadingOrFingerPort", $$v)
      },
      expression: "tmpDeclaration.loadingOrFingerPort"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationType == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "境内目的地："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.destinationOrConsignmentPlace),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "destinationOrConsignmentPlace", $$v)
      },
      expression: "tmpDeclaration.destinationOrConsignmentPlace"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "境内货源地："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.destinationOrConsignmentPlace),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "destinationOrConsignmentPlace", $$v)
      },
      expression: "tmpDeclaration.destinationOrConsignmentPlace"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "批准文号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.approvalNumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "approvalNumber", $$v)
      },
      expression: "tmpDeclaration.approvalNumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "成交方式："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.transactionMethod),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "transactionMethod", $$v)
      },
      expression: "tmpDeclaration.transactionMethod"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运费："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.freight),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "freight", $$v)
      },
      expression: "tmpDeclaration.freight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "保费："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.premium),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "premium", $$v)
      },
      expression: "tmpDeclaration.premium"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "杂费："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.incidental),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "incidental", $$v)
      },
      expression: "tmpDeclaration.incidental"
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
    attrs: {
      "label": "件数："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.goodsNumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "goodsNumber", $$v)
      },
      expression: "tmpDeclaration.goodsNumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "包装种类："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.packagingType),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "packagingType", $$v)
      },
      expression: "tmpDeclaration.packagingType"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "毛重（千克）："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.grossWeight),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "grossWeight", $$v)
      },
      expression: "tmpDeclaration.grossWeight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "净重（千克）："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.netWeight),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "netWeight", $$v)
      },
      expression: "tmpDeclaration.netWeight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "集装箱号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.containerNumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "containerNumber", $$v)
      },
      expression: "tmpDeclaration.containerNumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "随附单证："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.documentSattached),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "documentSattached", $$v)
      },
      expression: "tmpDeclaration.documentSattached"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationType == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "用途："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.purposeOrManufacturer),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "purposeOrManufacturer", $$v)
      },
      expression: "tmpDeclaration.purposeOrManufacturer"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "生产厂家："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.purposeOrManufacturer),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "purposeOrManufacturer", $$v)
      },
      expression: "tmpDeclaration.purposeOrManufacturer"
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
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "90%"
    },
    attrs: {
      "label": "税费征收情况："
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
      value: (_vm.tmpDeclaration.taxpaidOrNot),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "taxpaidOrNot", $$v)
      },
      expression: "tmpDeclaration.taxpaidOrNot"
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
  }, [_vm._v("操作相关")]), _vm._v(" "), _c('div', {
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
      "label": "申报单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.declarationUnit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "declarationUnit", $$v)
      },
      expression: "tmpDeclaration.declarationUnit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单位地址："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
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
    model: {
      value: (_vm.tmpDeclaration.telephone),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "telephone", $$v)
      },
      expression: "tmpDeclaration.telephone"
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
  })])], 1)], 1)
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
  __webpack_require__(114)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(116),
  /* template */
  __webpack_require__(122),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-f739cca0",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\git\\declarationForm\\mainUI\\source\\views\\form\\declaration.vue"
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


/***/ }),

/***/ 99:
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

/***/ })

});