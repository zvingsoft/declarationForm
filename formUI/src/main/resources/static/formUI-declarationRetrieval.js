webpackJsonp([5],{

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

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(105),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-783a2bd6",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\git\\declarationForm\\mainUI\\source\\views\\form\\components\\packinglistTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] packinglistTable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-783a2bd6", Component.options)
  } else {
    hotAPI.reload("data-v-783a2bd6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("4b9cdef8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-783a2bd6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./packinglistTable.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-783a2bd6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./packinglistTable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.pack-table[data-v-783a2bd6] {\n  font-size: 10px;\n  min-width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _packinglistAPI = __webpack_require__(99);

var _packinglistAPI2 = _interopRequireDefault(_packinglistAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import '../mock/declaration.js';

exports.default = {
  data: function data() {
    return {
      packinglistData: []
    };
  },

  watch: {
    declarationID: function declarationID() {
      var _this = this;

      _packinglistAPI2.default.getPackingList(this.declarationID).then(function (data) {
        _this.packinglistData = data.data;
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    _packinglistAPI2.default.getPackingList(this.declarationID).then(function (data) {
      _this2.packinglistData = data.data;
    });
  },

  methods: {
    rowClick: function rowClick(row) {
      this.$emit('row-click', row);
    }
  },
  props: ['declarationID', 'declarationType']
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

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-table', {
    staticClass: "pack-table",
    attrs: {
      "data": _vm.packinglistData,
      "tooltip-effect": "dark",
      "highlight-current-row": ""
    },
    on: {
      "row-click": _vm.rowClick
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "label": "项号",
      "width": "60px"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "id",
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
      "prop": "number",
      "min-width": "80px",
      "label": "数量及单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "singleprice",
      "min-width": "60px",
      "label": "单价"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "totalprice",
      "min-width": "60px",
      "label": "总价"
    }
  }), _vm._v(" "), (_vm.declarationType == 'import') ? _c('el-table-column', {
    attrs: {
      "min-width": "80px",
      "prop": "productcountry",
      "label": "原产国"
    }
  }) : _c('el-table-column', {
    attrs: {
      "prop": "productcountry",
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
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-783a2bd6", module.exports)
  }
}

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(124);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("09e0d18e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e4d7f8d8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./declarationRetrieval.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e4d7f8d8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./declarationRetrieval.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-e4d7f8d8] {\n  padding: 10px;\n}\n.search-bar[data-v-e4d7f8d8] {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-e4d7f8d8] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-e4d7f8d8] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-e4d7f8d8] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.page-wrap[data-v-e4d7f8d8] {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n.e-input[data-v-e4d7f8d8] {\n  width: 270px;\n}\n.search-select[data-v-e4d7f8d8] {\n  width: 150px;\n}\n.form-title[data-v-e4d7f8d8] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 6%;\n  padding: 20px 0 5px 0;\n}\n.form-panel[data-v-e4d7f8d8] {\n  width: 80%;\n  margin-left: 5%;\n  padding: 20px 0 0 0;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.s-input[data-v-e4d7f8d8] {\n  width: 400px;\n}\n.search-form-title[data-v-e4d7f8d8] {\n  padding: 20px 0;\n}\n.packinglist-panel[data-v-e4d7f8d8] {\n  width: 80%;\n  margin-left: 5%;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _declarationAPI = __webpack_require__(100);

var _declarationAPI2 = _interopRequireDefault(_declarationAPI);

var _packinglistAPI = __webpack_require__(99);

var _packinglistAPI2 = _interopRequireDefault(_packinglistAPI);

var _packinglistTable = __webpack_require__(101);

var _packinglistTable2 = _interopRequireDefault(_packinglistTable);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import './mock/declaration.js';


exports.default = {
  data: function data() {
    return {
      searchDeclaration: {},
      advancedSearchModal: true,
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
      sortOptions: [{ key: '', value: '请选择排序' }, { key: 'declarationtype', value: '报关单类型' }, { key: 'customsnumber', value: '海关编号' }, { key: 'importorexportport', value: '进口/出口口岸' }, { key: 'declarationunit', value: '申报单位' }, { key: 'declarationdate', value: '申报日期' }, { key: 'entrydate', value: '录入日期' }],
      retrieval: '',
      retrievalOptions: [{ key: '', value: '请选择检索字段' }, { key: 'customsnumber', value: '海关编号' }, { key: 'declarationunit', value: '申报单位' }],
      logic: '',
      logicOptions: [{ key: '', value: '请选择逻辑' }, { key: 'and', value: '与' }, { key: 'or', value: '或' }, { key: 'none', value: '非' }]
    };
  },

  methods: {
    advanceSearch: function advanceSearch() {
      this.advancedSearchModal = true;
    },
    doAdvanceSearch: function doAdvanceSearch() {
      this.advancedSearchModal = false;
    },
    addPackingClick: function addPackingClick() {
      this.editMode = 0;
      this.tmpPacking = {};
      this.packingdetailDialogModal = true;
    },
    editPackingClick: function editPackingClick() {
      this.editMode = 1;
      this.tmpPacking = Object.assign({}, this.selectedPackingRow);
      this.packingdetailDialogModal = true;
    },
    deletePackingClick: function deletePackingClick() {
      var _this = this;

      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action !== 'confirm') {
            done();
          }
          instance.confirmButtonLoading = true;

          return _packinglistAPI2.default.deletePackingList(_this.selectedPackingRow.id).then(function (data) {
            instance.confirmButtonLoading = false;
            console.log(data);
            done(data);
          });
        }
      }).then(function (data) {
        _this.selectedPackingRow = [];
        _this.$notify({
          title: '提示',
          message: '删除成功！',
          type: 'success',
          duration: 2000
        });
      }).catch(function () {
        _this.$notify.error({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        });
      });
    },
    packingdetailConfirm: function packingdetailConfirm() {
      var _this2 = this;

      if (this.editMode == 1) {
        _packinglistAPI2.default.updatePackingList(this.tmpPacking).then(function (data) {
          if (data.status == 1) {
            _this2.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000
            });
          }
          _this2.packingdetailDialogModal = false;
        });
      } else {
        _packinglistAPI2.default.addPackingList(this.tmpPacking).then(function (data) {
          if (data.status == 1) {
            _this2.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000
            });
          }
          _this2.packingdetailDialogModal = false;
        });
      }
    },
    packingRowClick: function packingRowClick(row) {
      console.log(row);
      this.selectedPackingRow = row;
    },
    showPackinglist: function showPackinglist(id, type) {
      console.log(id);
      console.log(type);
      this.declarationID = id;
      this.declarationType = type;
      this.selectedPackingRow = [];
      this.packinglistDialogModal = true;
    },
    getDeclarationData: function getDeclarationData() {
      var _this3 = this;

      this.dataLoading = true;
      _declarationAPI2.default.getDeclaration(this.searchDeclaration).then(function (data) {
        console.log(data);
        _this3.declarationData = data.data;
        _this3.total = data.total;
        _this3.dataLoading = false;
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
      this.declarationType = row.declarationtype;
      this.declarationID = row.id;
    },
    addClick: function addClick() {
      this.editMode = 0;
      this.tmpDeclaration = {
        declarationtype: 'import'
      };
      this.declarationDialogmodel = true;
      this.selectedPackingRow = [];
    },
    editClick: function editClick() {
      this.editMode = 1;
      this.tmpDeclaration = Object.assign({}, this.selectedRows[0]);
      this.declarationDialogmodel = true;
      this.selectedPackingRow = [];
    },
    deleteClick: function deleteClick() {
      var _this4 = this;

      var rowIds = [];
      this.selectedRows.forEach(function (row) {
        rowIds.push(row.id);
      });
      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action !== 'confirm') {
            done();
          }
          instance.confirmButtonLoading = true;

          return _declarationAPI2.default.deleteDeclaration(rowIds).then(function (data) {
            instance.confirmButtonLoading = false;
            done(data);
          });
        }
      }).then(function (data) {
        _this4.declarationData = _this4.declarationData.filter(function (val) {
          return !rowIds.includes(val.id);
        });
        _this4.selectedRows = [];
        _this4.$notify({
          title: '提示',
          message: '删除成功！',
          type: 'success',
          duration: 2000
        });
      }).catch(function () {
        _this4.$notify.error({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        });
      });
    },
    returnMain: function returnMain() {
      this.declarationDialogmodel = false;
    },
    confirm: function confirm() {
      var _this5 = this;

      if (this.editMode == 1) {
        _declarationAPI2.default.updateDeclaration(this.tmpDeclaration).then(function (data) {
          if (data.status == 1) {
            _this5.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000
            });
          }
          var index = _this5.declarationData.findIndex(function (val) {
            return val.id === _this5.tmpDeclaration.id;
          });
          _this5.declarationData = [].concat(_toConsumableArray(_this5.declarationData.slice(0, index)), [Object.assign({}, _this5.tmpDeclaration)], _toConsumableArray(_this5.declarationData.slice(index + 1)));
        });
      } else {
        _declarationAPI2.default.addDeclaration(this.tmpDeclaration).then(function (data) {
          if (data.status == 1) {
            _this5.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000
            });
          }
          _this5.declarationData = [].concat(_toConsumableArray(_this5.declarationData), [Object.assign({}, _this5.tmpDeclaration, { id: data.declaration.id })]);

          _this5.tmpDeclaration = {
            declarationtype: 'import'
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
    'packinglist-table': _packinglistTable2.default
  }
};

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.advancedSearchModal) ? _c('div', [_c('div', {
    staticStyle: {
      "width": "100%",
      "text-align": "center",
      "margin": "auto"
    }
  }, [_c('el-form', {
    staticClass: "e-form",
    attrs: {
      "label-position": "left",
      "model": _vm.searchDeclaration,
      "label-width": "200px"
    }
  }, [_c('div', {
    staticStyle: {
      "padding-top": "20px",
      "width": "900px",
      "margin": "auto",
      "overflow": "hidden"
    }
  }, [_c('h3', {
    staticStyle: {
      "float": "left",
      "width": "200px",
      "line-height": "33px",
      "text-align": "left"
    }
  }, [_vm._v("高级搜索")]), _vm._v(" "), _c('div', [_c('el-input', {
    staticStyle: {
      "width": "620px",
      "padding-right": "10px"
    },
    model: {
      value: (_vm.searchDeclaration.seachword),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "seachword", $$v)
      },
      expression: "searchDeclaration.seachword"
    }
  }), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "width": "70px"
    },
    on: {
      "click": _vm.doAdvanceSearch
    }
  }, [_vm._v("搜　索")])], 1)]), _vm._v(" "), _c('hr', {
    staticStyle: {
      "color": "#CCC",
      "width": "100%"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "900px",
      "margin": "auto",
      "text-align": "left"
    }
  }, [_c('h3', {
    staticClass: "search-form-title"
  }, [_vm._v("高级选项")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "报关单类型"
    }
  }, [_c('el-select', {
    staticClass: "s-input",
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.searchDeclaration.declarationtype),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "declarationtype", $$v)
      },
      expression: "searchDeclaration.declarationtype"
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
      "label": "预录入编号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.preentrynumber),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "preentrynumber", $$v)
      },
      expression: "searchDeclaration.preentrynumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "海关编号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.customsnumber),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "customsnumber", $$v)
      },
      expression: "searchDeclaration.customsnumber"
    }
  })], 1), _vm._v(" "), (_vm.searchDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "进口口岸"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.importorexportport),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "importorexportport", $$v)
      },
      expression: "searchDeclaration.importorexportport"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "出口口岸"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.importorexportport),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "importorexportport", $$v)
      },
      expression: "searchDeclaration.importorexportport"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "备案号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.recordnumber),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "recordnumber", $$v)
      },
      expression: "searchDeclaration.recordnumber"
    }
  })], 1), _vm._v(" "), (_vm.searchDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "进口日期"
    }
  }, [_c('el-date-picker', {
    staticClass: "s-input",
    attrs: {
      "type": "date",
      "placeholder": "选择进口日期"
    },
    model: {
      value: (_vm.searchDeclaration.importorexportdate),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "importorexportdate", $$v)
      },
      expression: "searchDeclaration.importorexportdate"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "出口日期"
    }
  }, [_c('el-date-picker', {
    staticClass: "s-input",
    attrs: {
      "type": "date",
      "placeholder": "选择出口日期"
    },
    model: {
      value: (_vm.searchDeclaration.importorexportdate),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "importorexportdate", $$v)
      },
      expression: "searchDeclaration.importorexportdate"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "申报日期"
    }
  }, [_c('el-date-picker', {
    staticClass: "s-input",
    attrs: {
      "type": "date",
      "placeholder": "选择申报日期"
    },
    model: {
      value: (_vm.searchDeclaration.declarationdate),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "declarationdate", $$v)
      },
      expression: "searchDeclaration.declarationdate"
    }
  })], 1), _vm._v(" "), _c('h3', {
    staticClass: "search-form-title"
  }, [_vm._v("单位相关选项")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "经营单位"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.managementunit),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "managementunit", $$v)
      },
      expression: "searchDeclaration.managementunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输方式"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.shippingtype),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "shippingtype", $$v)
      },
      expression: "searchDeclaration.shippingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输工具名称"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.shippingtools),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "shippingtools", $$v)
      },
      expression: "searchDeclaration.shippingtools"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "提运单号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.shippingnumbers),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "shippingnumbers", $$v)
      },
      expression: "searchDeclaration.shippingnumbers"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收货单位"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.forwardingunit),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "forwardingunit", $$v)
      },
      expression: "searchDeclaration.forwardingunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贸易方式"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.tradingtype),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "tradingtype", $$v)
      },
      expression: "searchDeclaration.tradingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征免性质"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.exemptionnature),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "exemptionnature", $$v)
      },
      expression: "searchDeclaration.exemptionnature"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征税比例"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.settlementtype),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "settlementtype", $$v)
      },
      expression: "searchDeclaration.settlementtype"
    }
  })], 1), _vm._v(" "), _c('h3', {
    staticClass: "search-form-title"
  }, [_vm._v("运输货物选项")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "许可证号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.licensekey),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "licensekey", $$v)
      },
      expression: "searchDeclaration.licensekey"
    }
  })], 1), _vm._v(" "), (_vm.searchDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "启运国"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.startorarrivalcountry),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "startorarrivalcountry", $$v)
      },
      expression: "searchDeclaration.startorarrivalcountry"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "运抵国"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.startorarrivalcountry),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "startorarrivalcountry", $$v)
      },
      expression: "searchDeclaration.startorarrivalcountry"
    }
  })], 1), _vm._v(" "), (_vm.searchDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "装货港"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.loadingorfingerport),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "loadingorfingerport", $$v)
      },
      expression: "searchDeclaration.loadingorfingerport"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "指运港"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.loadingorfingerport),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "loadingorfingerport", $$v)
      },
      expression: "searchDeclaration.loadingorfingerport"
    }
  })], 1), _vm._v(" "), (_vm.searchDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "境内目的地"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.destinationorconsignmentplace),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "destinationorconsignmentplace", $$v)
      },
      expression: "searchDeclaration.destinationorconsignmentplace"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "境内货源地"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.destinationorconsignmentplace),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "destinationorconsignmentplace", $$v)
      },
      expression: "searchDeclaration.destinationorconsignmentplace"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "批准文号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.approvalnumber),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "approvalnumber", $$v)
      },
      expression: "searchDeclaration.approvalnumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "成交方式"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.transactionmethod),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "transactionmethod", $$v)
      },
      expression: "searchDeclaration.transactionmethod"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运费"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.freight),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "freight", $$v)
      },
      expression: "searchDeclaration.freight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "保费"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.premium),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "premium", $$v)
      },
      expression: "searchDeclaration.premium"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "杂费"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.incidental),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "incidental", $$v)
      },
      expression: "searchDeclaration.incidental"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "合同协议号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.agreementnumber),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "agreementnumber", $$v)
      },
      expression: "searchDeclaration.agreementnumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "件数"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.goodsnumber),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "goodsnumber", $$v)
      },
      expression: "searchDeclaration.goodsnumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "包装种类"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.packagingtype),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "packagingtype", $$v)
      },
      expression: "searchDeclaration.packagingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "毛重（千克）"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.grossweight),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "grossweight", $$v)
      },
      expression: "searchDeclaration.grossweight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "净重（千克）"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.netweight),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "netweight", $$v)
      },
      expression: "searchDeclaration.netweight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "集装箱号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.containernumber),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "containernumber", $$v)
      },
      expression: "searchDeclaration.containernumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "随附单证"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.documentsattached),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "documentsattached", $$v)
      },
      expression: "searchDeclaration.documentsattached"
    }
  })], 1), _vm._v(" "), (_vm.searchDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "用途"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.purposeormanufacturer),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "purposeormanufacturer", $$v)
      },
      expression: "searchDeclaration.purposeormanufacturer"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "生产厂家"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.purposeormanufacturer),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "purposeormanufacturer", $$v)
      },
      expression: "searchDeclaration.purposeormanufacturer"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "90%"
    },
    attrs: {
      "label": "标记唛码及备注"
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
      value: (_vm.searchDeclaration.shippingmarksandremarks),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "shippingmarksandremarks", $$v)
      },
      expression: "searchDeclaration.shippingmarksandremarks"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "90%"
    },
    attrs: {
      "label": "税费征收情况"
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
      value: (_vm.searchDeclaration.taxpaidornot),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "taxpaidornot", $$v)
      },
      expression: "searchDeclaration.taxpaidornot"
    }
  })], 1), _vm._v(" "), _c('h3', {
    staticClass: "search-form-title"
  }, [_vm._v("相关信息选项")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "录入员："
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.entryclerk),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "entryclerk", $$v)
      },
      expression: "searchDeclaration.entryclerk"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "录入单位："
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.entryunit),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "entryunit", $$v)
      },
      expression: "searchDeclaration.entryunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "报关员："
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.customsbroker),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "customsbroker", $$v)
      },
      expression: "searchDeclaration.customsbroker"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "申报单位："
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.declarationunit),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "declarationunit", $$v)
      },
      expression: "searchDeclaration.declarationunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单位地址："
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.unitaddress),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "unitaddress", $$v)
      },
      expression: "searchDeclaration.unitaddress"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "邮编："
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.zipcode),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "zipcode", $$v)
      },
      expression: "searchDeclaration.zipcode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "电话："
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.telephone),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "telephone", $$v)
      },
      expression: "searchDeclaration.telephone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "制填日期："
    }
  }, [_c('el-date-picker', {
    staticClass: "s-input",
    attrs: {
      "type": "date",
      "placeholder": "选择制填日期"
    },
    model: {
      value: (_vm.searchDeclaration.fillingdate),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "fillingdate", $$v)
      },
      expression: "searchDeclaration.fillingdate"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "100px"
    }
  })], 1)])], 1)]) : (!_vm.declarationDialogmodel) ? _c('div', {
    style: ({
      width: _vm.clientWidth + 'px'
    })
  }, [_c('el-toolbar', [_c('div', {
    staticStyle: {
      "width": "100%",
      "text-align": "left"
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
  }), _vm._v(" 删除")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "right",
      "margin-right": "10px"
    }
  }, [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.advanceSearch
    }
  }, [_c('i', {
    staticClass: "fa fa-search"
  }), _vm._v(" 高级搜索")])], 1)], 1)]), _vm._v(" "), _c('div', {
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
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationtypename))])]), _c('br'), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "预录入编号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.preentrynumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "海关编号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.customsnumber))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "进口口岸："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportport))])]) : _c('el-form-item', {
          attrs: {
            "label": "出口口岸："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportport))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "备案号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.recordnumber))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "进口日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportdate))])]) : _c('el-form-item', {
          attrs: {
            "label": "出口日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportdate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "申报日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationdate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "经营单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.managementunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "运输方式："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "运输工具名称："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingtools))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "提运单号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingnumbers))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "收货单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.forwardingunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "贸易方式："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.tradingtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "征免性质："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.exemptionnature))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "征税比例："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.settlementtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "许可证号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.licensekey))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "启运国："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.startorarrivalcountry))])]) : _c('el-form-item', {
          attrs: {
            "label": "运抵国："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.startorarrivalcountry))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "装货港："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.loadingorfingerport))])]) : _c('el-form-item', {
          attrs: {
            "label": "指运港："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.loadingorfingerport))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "境内目的地："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.destinationorconsignmentplace))])]) : _c('el-form-item', {
          attrs: {
            "label": "境内货源地："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.destinationorconsignmentplace))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "批准文号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.approvalnumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "成交方式："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.transactionmethod))])]), _vm._v(" "), _c('el-form-item', {
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
        }, [_c('span', [_vm._v(_vm._s(props.row.agreementnumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "件数："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.goodsnumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "包装种类："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.packagingtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "毛重（千克）："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.grossweight))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "净重（千克）："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.netweight))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "集装箱号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.containernumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "随附单证："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.documentsattached))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "用途："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.purposeormanufacturer))])]) : _c('el-form-item', {
          attrs: {
            "label": "生产厂家："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.purposeormanufacturer))])]), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "90%"
          },
          attrs: {
            "label": "标记唛码及备注："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingmarksandremarks))])]), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "100%"
          },
          attrs: {
            "label": "商品：",
            "label-width": "60px"
          }
        }, [_c('packinglist-table', {
          attrs: {
            "declarationID": _vm.declarationID,
            "declarationType": _vm.declarationType
          }
        })], 1), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "90%"
          },
          attrs: {
            "label": "税费征收情况："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.taxpaidornot))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "录入员："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.entryclerk))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "录入单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.entryunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "报关员："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.customsbroker))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "申报单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "单位地址："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.unitaddress))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "邮编："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.zipcode))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "电话："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.telephone))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "制填日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.fillingdate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "录入日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.entrydate))])])], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customsnumber",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "海关编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationtypename",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "报关单类型"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "importorexportport",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "进口/出口口岸"
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
              _vm.showPackinglist(scope.row.id, scope.row.declarationtype)
            }
          }
        }, [_vm._v("查看商品")])])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationunit",
      "show-overflow-tooltip": "",
      "min-width": "30%",
      "label": "申报单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationdate",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "申报日期"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "entrydate",
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
  }, [_c('el-toolbar', {
    staticStyle: {
      "margin-bottom": "20px"
    }
  }, [_c('el-button', {
    staticClass: "z-toolbar-btn",
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.addPackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v("添加")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedPackingRow.length === 0
    },
    on: {
      "click": _vm.editPackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedPackingRow.length === 0
    },
    on: {
      "click": _vm.deletePackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-remove"
  }), _vm._v("删除")])], 1), _vm._v(" "), _c('packinglist-table', {
    attrs: {
      "declarationID": _vm.declarationID,
      "declarationType": _vm.declarationType
    },
    on: {
      "row-click": _vm.packingRowClick
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
      }
    }
  }, [_c('el-form', {
    attrs: {
      "label-position": "right",
      "model": _vm.tmpPacking,
      "inline": "",
      "label-width": "200px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "商品编号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.id),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "id", $$v)
      },
      expression: "tmpPacking.id"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
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
      value: (_vm.tmpPacking.singleprice),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "singleprice", $$v)
      },
      expression: "tmpPacking.singleprice"
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
      value: (_vm.tmpPacking.productcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "productcountry", $$v)
      },
      expression: "tmpPacking.productcountry"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "最终目的国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.productcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "productcountry", $$v)
      },
      expression: "tmpPacking.productcountry"
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
      value: (_vm.tmpDeclaration.declarationtype),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "declarationtype", $$v)
      },
      expression: "tmpDeclaration.declarationtype"
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
      value: (_vm.tmpDeclaration.preentrynumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "preentrynumber", $$v)
      },
      expression: "tmpDeclaration.preentrynumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "海关编号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.customsnumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "customsnumber", $$v)
      },
      expression: "tmpDeclaration.customsnumber"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "进口口岸："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.importorexportport),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "importorexportport", $$v)
      },
      expression: "tmpDeclaration.importorexportport"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "出口口岸："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.importorexportport),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "importorexportport", $$v)
      },
      expression: "tmpDeclaration.importorexportport"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "备案号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.recordnumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "recordnumber", $$v)
      },
      expression: "tmpDeclaration.recordnumber"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
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
      value: (_vm.tmpDeclaration.importorexportdate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "importorexportdate", $$v)
      },
      expression: "tmpDeclaration.importorexportdate"
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
      value: (_vm.tmpDeclaration.importorexportdate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "importorexportdate", $$v)
      },
      expression: "tmpDeclaration.importorexportdate"
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
      value: (_vm.tmpDeclaration.declarationdate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "declarationdate", $$v)
      },
      expression: "tmpDeclaration.declarationdate"
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
      value: (_vm.tmpDeclaration.managementunit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "managementunit", $$v)
      },
      expression: "tmpDeclaration.managementunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输方式："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.shippingtype),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingtype", $$v)
      },
      expression: "tmpDeclaration.shippingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输工具名称："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.shippingtools),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingtools", $$v)
      },
      expression: "tmpDeclaration.shippingtools"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "提运单号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.shippingnumbers),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingnumbers", $$v)
      },
      expression: "tmpDeclaration.shippingnumbers"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收货单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.forwardingunit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "forwardingunit", $$v)
      },
      expression: "tmpDeclaration.forwardingunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贸易方式："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.tradingtype),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "tradingtype", $$v)
      },
      expression: "tmpDeclaration.tradingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征免性质："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.exemptionnature),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "exemptionnature", $$v)
      },
      expression: "tmpDeclaration.exemptionnature"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征税比例："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.settlementtype),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "settlementtype", $$v)
      },
      expression: "tmpDeclaration.settlementtype"
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
      value: (_vm.tmpDeclaration.licensekey),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "licensekey", $$v)
      },
      expression: "tmpDeclaration.licensekey"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "启运国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.startorarrivalcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "startorarrivalcountry", $$v)
      },
      expression: "tmpDeclaration.startorarrivalcountry"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "运抵国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.startorarrivalcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "startorarrivalcountry", $$v)
      },
      expression: "tmpDeclaration.startorarrivalcountry"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "装货港："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.loadingorfingerport),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "loadingorfingerport", $$v)
      },
      expression: "tmpDeclaration.loadingorfingerport"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "指运港："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.loadingorfingerport),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "loadingorfingerport", $$v)
      },
      expression: "tmpDeclaration.loadingorfingerport"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "境内目的地："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.destinationorconsignmentplace),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "destinationorconsignmentplace", $$v)
      },
      expression: "tmpDeclaration.destinationorconsignmentplace"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "境内货源地："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.destinationorconsignmentplace),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "destinationorconsignmentplace", $$v)
      },
      expression: "tmpDeclaration.destinationorconsignmentplace"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "批准文号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.approvalnumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "approvalnumber", $$v)
      },
      expression: "tmpDeclaration.approvalnumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "成交方式："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.transactionmethod),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "transactionmethod", $$v)
      },
      expression: "tmpDeclaration.transactionmethod"
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
      value: (_vm.tmpDeclaration.agreementnumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "agreementnumber", $$v)
      },
      expression: "tmpDeclaration.agreementnumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "件数："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.goodsnumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "goodsnumber", $$v)
      },
      expression: "tmpDeclaration.goodsnumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "包装种类："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.packagingtype),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "packagingtype", $$v)
      },
      expression: "tmpDeclaration.packagingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "毛重（千克）："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.grossweight),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "grossweight", $$v)
      },
      expression: "tmpDeclaration.grossweight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "净重（千克）："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.netweight),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "netweight", $$v)
      },
      expression: "tmpDeclaration.netweight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "集装箱号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.containernumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "containernumber", $$v)
      },
      expression: "tmpDeclaration.containernumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "随附单证："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.documentsattached),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "documentsattached", $$v)
      },
      expression: "tmpDeclaration.documentsattached"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "用途："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.purposeormanufacturer),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "purposeormanufacturer", $$v)
      },
      expression: "tmpDeclaration.purposeormanufacturer"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "生产厂家："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.purposeormanufacturer),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "purposeormanufacturer", $$v)
      },
      expression: "tmpDeclaration.purposeormanufacturer"
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
      value: (_vm.tmpDeclaration.shippingmarksandremarks),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingmarksandremarks", $$v)
      },
      expression: "tmpDeclaration.shippingmarksandremarks"
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
      value: (_vm.tmpDeclaration.taxpaidornot),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "taxpaidornot", $$v)
      },
      expression: "tmpDeclaration.taxpaidornot"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("商品列表")]), _vm._v(" "), _c('div', {
    staticClass: "packinglist-panel"
  }, [_c('div', {
    staticStyle: {
      "height": "50px",
      "background-color": "#f5f5f5",
      "padding": "5px"
    }
  }, [_c('el-button', {
    staticClass: "z-toolbar-btn",
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.addPackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v("添加")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedPackingRow.length === 0
    },
    on: {
      "click": _vm.editPackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedPackingRow.length === 0
    },
    on: {
      "click": _vm.deletePackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-remove"
  }), _vm._v("删除")])], 1), _vm._v(" "), _c('packinglist-table', {
    attrs: {
      "declarationID": _vm.tmpDeclaration.id,
      "declarationType": _vm.tmpDeclaration.declarationtype
    },
    on: {
      "row-click": _vm.packingRowClick
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
      value: (_vm.tmpDeclaration.entryclerk),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "entryclerk", $$v)
      },
      expression: "tmpDeclaration.entryclerk"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "录入单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.entryunit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "entryunit", $$v)
      },
      expression: "tmpDeclaration.entryunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "报关员："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.customsbroker),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "customsbroker", $$v)
      },
      expression: "tmpDeclaration.customsbroker"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "申报单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.declarationunit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "declarationunit", $$v)
      },
      expression: "tmpDeclaration.declarationunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单位地址："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.unitaddress),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "unitaddress", $$v)
      },
      expression: "tmpDeclaration.unitaddress"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "邮编："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.zipcode),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "zipcode", $$v)
      },
      expression: "tmpDeclaration.zipcode"
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
      value: (_vm.tmpDeclaration.fillingdate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "fillingdate", $$v)
      },
      expression: "tmpDeclaration.fillingdate"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "100px"
    }
  })])], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.editMode == 1 ? '编辑商品信息' : '添加商品',
      "visible": _vm.packingdetailDialogModal,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.packingdetailDialogModal = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "label-position": "right",
      "model": _vm.tmpPacking,
      "inline": "",
      "label-width": "200px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "商品编号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.id),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "id", $$v)
      },
      expression: "tmpPacking.id"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
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
      value: (_vm.tmpPacking.singleprice),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "singleprice", $$v)
      },
      expression: "tmpPacking.singleprice"
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
      value: (_vm.tmpPacking.productcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "productcountry", $$v)
      },
      expression: "tmpPacking.productcountry"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "最终目的国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.productcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "productcountry", $$v)
      },
      expression: "tmpPacking.productcountry"
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
     require("vue-hot-reload-api").rerender("data-v-e4d7f8d8", module.exports)
  }
}

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(123)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(126),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e4d7f8d8",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\git\\declarationForm\\mainUI\\source\\views\\form\\declarationRetrieval.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] declarationRetrieval.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e4d7f8d8", Component.options)
  } else {
    hotAPI.reload("data-v-e4d7f8d8", Component.options)
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