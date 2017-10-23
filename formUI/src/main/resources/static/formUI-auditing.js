webpackJsonp([3],{

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

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("5e75ef29", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79186761\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./auditing.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79186761\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./auditing.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-79186761] {\n  padding: 10px;\n}\n.search-bar[data-v-79186761] {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-79186761] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-79186761] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-79186761] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.page-wrap[data-v-79186761] {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n.e-form[data-v-79186761] {\n  padding-left: 10%;\n}\n.e-form .el-form-item[data-v-79186761] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.e-input[data-v-79186761] {\n  width: 240px;\n}\n.search-select[data-v-79186761] {\n  width: 140px;\n}\n.detail-table[data-v-79186761] {\n  font-size: 16px;\n  width: 100%;\n}\n.detail-table span[data-v-79186761] {\n  font-size: 12px;\n  padding-left: 5px;\n}\n.detail-table .t1[data-v-79186761] {\n  height: 40px;\n}\n.detail-table .t2[data-v-79186761] {\n  height: 80px;\n}\n.detail-table .t3[data-v-79186761] {\n  height: 120px;\n}\n.detail-table .t4[data-v-79186761] {\n  height: 160px;\n}\n.detail-table .t5[data-v-79186761] {\n  height: 200px;\n}\n.inline-table[data-v-79186761] {\n  width: 100%;\n}\n.inline-table .b1[data-v-79186761] {\n  border-bottom: 1px solid #CCC;\n}\n.inline-table .b2[data-v-79186761] {\n  border-right: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n}\n.inline-table .b3[data-v-79186761] {\n  border-left: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n}\n.inline-table .b4[data-v-79186761] {\n  border-left: 1px solid #CCC;\n}\n", ""]);

// exports


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _declarationAPI = __webpack_require__(100);

var _declarationAPI2 = _interopRequireDefault(_declarationAPI);

var _packinglistAPI = __webpack_require__(99);

var _packinglistAPI2 = _interopRequireDefault(_packinglistAPI);

var _auditingAPI = __webpack_require__(134);

var _auditingAPI2 = _interopRequireDefault(_auditingAPI);

var _packinglistTable = __webpack_require__(101);

var _packinglistTable2 = _interopRequireDefault(_packinglistTable);

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

exports.default = {
  data: function data() {
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
      declarationTypeOptions: [{ key: 'import', value: '进口报关单' }, { key: 'export', value: '出口报关单' }],
      sort: '',
      sortOptions: [{ key: '', value: '请选择排序' }, { key: 'declarationtype', value: '报关单类型' }, { key: 'preentrynumber', value: '预录入编号' }, { key: 'importorexportport', value: '进口/出口口岸' }, { key: 'managementunit', value: '经营单位' }, { key: 'declarationunit', value: '申报单位' }, { key: 'declarationdate', value: '申报日期' }],
      auditStatus: '',
      auditStatusOptions: [{ key: '', value: '请选择审核状态' }, { key: 'W', value: '未审核' }, { key: 'Y', value: '通过' }, { key: 'N', value: '不通过' }],
      retrieval: '',
      retrievalOptions: [{ key: '', value: '请选择检索字段' }, { key: 'declarationtype', value: '报关单类型' }, { key: 'preentrynumber', value: '预录入编号' }, { key: 'importorexportport', value: '进口/出口口岸' }, { key: 'managementunit', value: '经营单位' }, { key: 'declarationunit', value: '申报单位' }, { key: 'declarationdate', value: '申报日期' }],
      logic: '',
      logicOptions: [{ key: '', value: '请选择逻辑' }, { key: 'and', value: '与' }, { key: 'or', value: '或' }, { key: 'none', value: '非' }]
    };
  },

  methods: {
    showPackinglist: function showPackinglist(id, type) {
      this.declarationID = id;
      this.declarationType = type;
      this.packinglistDialogModal = true;
    },
    getDeclarationData: function getDeclarationData() {
      var _this = this;

      this.dataLoading = true;
      _declarationAPI2.default.getDeclaration({}).then(function (data) {
        _this.declarationData = data.data;
        _this.total = data.total;
        _this.dataLoading = false;
      });
    },
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    expandRow: function expandRow(row) {
      this.declarationType = row.declarationtype;
      this.declarationID = row.id;
    },
    handleSizeChange: function handleSizeChange(val) {
      this.pageSize = val;
      this.getDeclarationData();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.currentPage = val;
      this.getDeclarationData();
    },
    passClick: function passClick(id) {
      var _this2 = this;

      var rowIds = [];
      if (id) {
        rowIds = [id];
      } else {
        this.selectedRows.forEach(function (row) {
          rowIds.push(row.id);
        });
      }
      _auditingAPI2.default.doAuditing(id, true).then(function (data) {
        _this2.$notify({
          title: '提示',
          message: data.message,
          type: 'success',
          duration: 2000
        });
        if (data.status == 1) {
          rowIds.forEach(function (rowid) {
            var index = _this2.declarationData.findIndex(function (val) {
              return val.id === rowid;
            });
            _this2.declarationData[index].auditstatus = 'Y';
            _this2.declarationData[index].auditstatusname = '通过';
          });
        }
      });
    },
    notPassClick: function notPassClick(id) {
      var _this3 = this;

      var rowIds = [];
      if (id) {
        rowIds = [id];
      } else {
        this.selectedRows.forEach(function (row) {
          rowIds.push(row.id);
        });
      }
      _auditingAPI2.default.doAuditing(rowIds, false).then(function (data) {
        _this3.$notify({
          title: '提示',
          message: data.message,
          type: 'success',
          duration: 2000
        });
        if (data.status == 1) {
          rowIds.forEach(function (rowid) {
            var index = _this3.declarationData.findIndex(function (val) {
              return val.id === rowid;
            });
            _this3.declarationData[index].auditstatus = 'N';
            _this3.declarationData[index].auditstatusname = '未通过';
          });
        }
      });
    },
    viewClick: function viewClick() {
      this.$notify({
        title: '提示',
        message: '查看详情',
        type: 'success',
        duration: 2000
      });
      this.tmpDeclaration = Object.assign({}, this.selectedRows[0]);
      this.declarationDetailDialogModal = true;
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
//import './mock/declaration.js';

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var auditingAPI = {
  doAuditing: function doAuditing(declarationid, opt) {
    return axios({
      method: 'put',
      url: '/api/declaration/auditing/' + declarationid,
      data: opt
    }).then(function (res) {
      return res.data;
    });
  }
};

exports.default = auditingAPI;

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: ({
      width: _vm.clientWidth + 'px'
    })
  }, [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedRows.length === 0
    },
    on: {
      "click": function($event) {
        _vm.passClick()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check"
  }), _vm._v("审核通过")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedRows.length === 0
    },
    on: {
      "click": function($event) {
        _vm.notPassClick()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-remove"
  }), _vm._v("审核不通过")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedRows.length === 0
    },
    on: {
      "click": function($event) {
        _vm.viewClick()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-search"
  }), _vm._v("查看详情")])], 1), _vm._v(" "), _c('div', {
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
  })), _vm._v("\n      审核状态：\n      "), _c('el-select', {
    staticClass: "search-select",
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.auditStatus),
      callback: function($$v) {
        _vm.auditStatus = $$v
      },
      expression: "auditStatus"
    }
  }, _vm._l((_vm.auditStatusOptions), function(item) {
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
  }), _vm._v(" "), _c('el-select', {
    staticClass: "search-select",
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.logic),
      callback: function($$v) {
        _vm.logic = $$v
      },
      expression: "logic"
    }
  }, _vm._l((_vm.logicOptions), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  })), _vm._v(" "), _c('el-button', {
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
        }, [_c('span', [_vm._v(_vm._s(props.row.fillingdate))])])], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customsnumber",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "海关编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationtypename",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "报关单类型"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "12%",
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
      "min-width": "20%",
      "label": "申报单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationdate",
      "show-overflow-tooltip": "",
      "min-width": "12%",
      "label": "申报日期"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "entrydate",
      "show-overflow-tooltip": "",
      "min-width": "12%",
      "label": "录入日期"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "auditstatusname",
      "show-overflow-tooltip": "",
      "min-width": "11%",
      "label": "审核状态"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "15%",
      "label": "操作"
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
              _vm.passClick(scope.row.id)
            }
          }
        }, [_vm._v("通过")])]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "text"
          }
        }, [_c('span', {
          staticStyle: {
            "color": "red"
          },
          on: {
            "click": function($event) {
              _vm.notPassClick(scope.row.id)
            }
          }
        }, [_vm._v("不通过")])])]
      }
    }])
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
  }, [_c('packinglist-table', {
    attrs: {
      "declarationID": _vm.declarationID,
      "declarationType": _vm.declarationType
    },
    on: {
      "row-click": _vm.packingRowClick
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "报关单详情",
      "visible": _vm.declarationDetailDialogModal,
      "size": "large"
    },
    on: {
      "update:visible": function($event) {
        _vm.declarationDetailDialogModal = $event
      }
    }
  }, [_c('table', {
    staticClass: "detail-table",
    attrs: {
      "cellpadding": "0",
      "cellspacing": "0",
      "border": "1"
    }
  }, [_c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "5"
    }
  }, [_c('span', [_vm._v("预录入编号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.preentrynumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "5"
    }
  }, [_c('span', [_vm._v("海关编号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.customsnumber))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [(_vm.tmpDeclaration.declarationtype == 'import') ? _c('span', [_vm._v("进口口岸　")]) : _c('span', [_vm._v("出口口岸　")]), _vm._v(_vm._s(_vm.tmpDeclaration.importorexportport))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("备案号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.recordnumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [(_vm.tmpDeclaration.declarationtype == 'import') ? _c('span', [_vm._v("进口日期　")]) : _c('span', [_vm._v("出口日期　")]), _vm._v(_vm._s(_vm.tmpDeclaration.importorexportdate))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("申报日期　")]), _vm._v(_vm._s(_vm.tmpDeclaration.declarationdate))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [_c('span', [_vm._v("经营单位　")]), _vm._v(_vm._s(_vm.tmpDeclaration.managementunit))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("运输方式　")]), _vm._v(_vm._s(_vm.tmpDeclaration.shippingtype))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("运输工具名称　")]), _vm._v(_vm._s(_vm.tmpDeclaration.shippingtools))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("提运单号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.shippingnumbers))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [_c('span', [_vm._v("发货单位　")]), _vm._v(_vm._s(_vm.tmpDeclaration.forwardingunit))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("贸易方式　")]), _vm._v(_vm._s(_vm.tmpDeclaration.tradingtype))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("征免性质　")]), _vm._v(_vm._s(_vm.tmpDeclaration.exemptionnature))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("结汇方式　")]), _vm._v(_vm._s(_vm.tmpDeclaration.settlementtype))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('span', [_vm._v("许可证号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.licensekey))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [(_vm.tmpDeclaration.declarationtype == 'import') ? _c('span', [_vm._v("启运国（地区）　")]) : _c('span', [_vm._v("运抵国（地区）　")]), _vm._v(_vm._s(_vm.tmpDeclaration.startorarrivalcountry))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [(_vm.tmpDeclaration.declarationtype == 'import') ? _c('span', [_vm._v("装货港　")]) : _c('span', [_vm._v("指运港　")]), _vm._v(_vm._s(_vm.tmpDeclaration.loadingorfingerport))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [(_vm.tmpDeclaration.declarationtype == 'import') ? _c('span', [_vm._v("境内目的地　")]) : _c('span', [_vm._v("境内货源地　")]), _vm._v(_vm._s(_vm.tmpDeclaration.destinationorconsignmentplace))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('span', [_vm._v("批准文号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.approvalnumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "1"
    }
  }, [_c('span', [_vm._v("成交方式　")]), _vm._v(_vm._s(_vm.tmpDeclaration.transactionmethod))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("运费　")]), _vm._v(_vm._s(_vm.tmpDeclaration.freight))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("保费　")]), _vm._v(_vm._s(_vm.tmpDeclaration.premium))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("杂费　")]), _vm._v(_vm._s(_vm.tmpDeclaration.incidental))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('span', [_vm._v("合同协议号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.agreementnumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "1"
    }
  }, [_c('span', [_vm._v("件数　")]), _vm._v(_vm._s(_vm.tmpDeclaration.goodsnumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("包装种类　")]), _vm._v(_vm._s(_vm.tmpDeclaration.packagingtype))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("毛重（公斤）　")]), _vm._v(_vm._s(_vm.tmpDeclaration.grossweight))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("净重（公斤）　")]), _vm._v(_vm._s(_vm.tmpDeclaration.netweight))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('span', [_vm._v("集装箱号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.containernumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "5"
    }
  }, [_c('span', [_vm._v("随附单据　")]), _vm._v(_vm._s(_vm.tmpDeclaration.documentsattached))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [(_vm.tmpDeclaration.declarationtype == 'import') ? _c('span', [_vm._v("用途　")]) : _c('span', [_vm._v("生产厂家　")]), _vm._v(_vm._s(_vm.tmpDeclaration.purposeormanufacturer))])]), _vm._v(" "), _c('tr', {
    staticClass: "t2"
  }, [_c('td', {
    attrs: {
      "colspan": "10",
      "valign": "top"
    }
  }, [_c('span', [_vm._v("标记唛码及备注　")]), _vm._v(_vm._s(_vm.tmpDeclaration.shippingmarksandremarks))])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "10",
      "valign": "top"
    }
  }, [_c('packinglist-table', {
    attrs: {
      "declarationID": _vm.tmpDeclaration.id,
      "declarationType": _vm.tmpDeclaration.declarationtype
    }
  })], 1)]), _vm._v(" "), _c('tr', {
    staticClass: "t3"
  }, [_c('td', {
    attrs: {
      "colspan": "10",
      "valign": "top"
    }
  }, [_c('span', [_vm._v("税费征收情况　")]), _vm._v(_vm._s(_vm.tmpDeclaration.taxpaidornot))])]), _vm._v(" "), _c('tr', {
    staticClass: "t5"
  }, [_c('td', {
    attrs: {
      "colspan": "10"
    }
  }, [_c('table', {
    staticClass: "inline-table",
    attrs: {
      "cellspacing": "0",
      "cellpadding": "0",
      "border": "0"
    }
  }, [_c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    staticClass: "b1",
    attrs: {
      "colspan": "1"
    }
  }, [_c('span', [_vm._v("录入员　")]), _vm._v(_vm._s(_vm.tmpDeclaration.entryclerk))]), _vm._v(" "), _c('td', {
    staticClass: "b2",
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("录入单位　")]), _vm._v(_vm._s(_vm.tmpDeclaration.entryunit))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('span', [_vm._v("兹声明以上申报无讹并承担法律责任　")])]), _vm._v(" "), _c('td', {
    staticClass: "b4",
    attrs: {
      "colspan": "4"
    }
  }, [_c('span', [_vm._v("海关审批批注及放行日期　")])])]), _vm._v(" "), _c('tr', {
    staticClass: "t1",
    attrs: {
      "border": "0"
    }
  }, [_c('td', {
    attrs: {
      "colspan": "6",
      "border": "0"
    }
  }, [_c('span', [_vm._v("报关员　")]), _vm._v(_vm._s(_vm.tmpDeclaration.customsbroker))]), _vm._v(" "), _c('td', {
    staticClass: "b4",
    attrs: {
      "colspan": "4"
    }
  })]), _vm._v(" "), _c('tr', {
    staticClass: "t1",
    attrs: {
      "border": "0"
    }
  }, [_c('td', {
    attrs: {
      "colspan": "6",
      "border": "0"
    }
  }, [_c('span', [_vm._v("单位地址　")]), _vm._v(_vm._s(_vm.tmpDeclaration.unitaddress))]), _vm._v(" "), _c('td', {
    staticClass: "b3",
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("审单　")])]), _vm._v(" "), _c('td', {
    staticClass: "b1",
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("审价　")])])]), _vm._v(" "), _c('tr', {
    staticClass: "t1",
    attrs: {
      "border": "0"
    }
  }, [_c('td', {
    attrs: {
      "colspan": "6",
      "border": "0"
    }
  }, [_c('span', [_vm._v("申报单位　")]), _vm._v(_vm._s(_vm.tmpDeclaration.declarationunit))]), _vm._v(" "), _c('td', {
    staticClass: "b3",
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("征税　")])]), _vm._v(" "), _c('td', {
    staticClass: "b1",
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("统计　")])])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("邮编　")]), _vm._v(_vm._s(_vm.tmpDeclaration.zipcode))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("电话　")]), _vm._v(_vm._s(_vm.tmpDeclaration.telephone))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("制填日期　")]), _vm._v(_vm._s(_vm.tmpDeclaration.fillingdate))]), _vm._v(" "), _c('td', {
    staticClass: "b4",
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("查验　")])]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("放行　")])])])])])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-79186761", module.exports)
  }
}

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(133),
  /* template */
  __webpack_require__(135),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-79186761",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\git\\declarationForm\\mainUI\\source\\views\\form\\auditing.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] auditing.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79186761", Component.options)
  } else {
    hotAPI.reload("data-v-79186761", Component.options)
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