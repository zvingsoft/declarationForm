webpackJsonp([10],{

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

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("60ce185a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d5eb545a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sku.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d5eb545a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sku.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-d5eb545a] {\n  padding: 10px;\n}\n.search-bar[data-v-d5eb545a] {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n.page-wrap[data-v-d5eb545a] {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n.e-input[data-v-d5eb545a] {\n  width: 270px;\n}\n", ""]);

// exports


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _skuAPI = __webpack_require__(107);

var _skuAPI2 = _interopRequireDefault(_skuAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import '../mock/declaration.js';

exports.default = {
  data: function data() {
    return {
      searchWord: '',
      tmpSKU: {},
      SKUData: [],
      dataLoading: false,
      SKUDialogModal: false,
      editMode: 1,
      selectedRows: [],
      clientHeight: 0,
      packinglistData: [],
      currentPage: 1,
      pageSizes: [10, 20, 50],
      pageSize: 10,
      total: 0
    };
  },

  methods: {
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    getSKUData: function getSKUData() {
      var _this = this;

      this.dataLoading = true;
      _skuAPI2.default.getSKU(this.searchWord).then(function (data) {
        console.log(data);
        _this.dataLoading = false;
        _this.SKUData = data;
      });
    },
    addClick: function addClick() {
      this.editMode = 0;
      this.tmpSKU = {
        id: Math.floor(Math.random() * 999999) + 1
      };
      this.SKUDialogModal = true;
    },
    editClick: function editClick() {
      var _this2 = this;

      _skuAPI2.default.getSKUById(this.selectedRows[0].id).then(function (data) {
        _this2.editMode = 1;
        _this2.tmpSKU = data;
        _this2.SKUDialogModal = true;
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
        return _skuAPI2.default.deleteSKU(rowIds).then(function (res) {
          if (res.status == 200) {
            _this3.$notify({
              title: '成功',
              message: res.data,
              type: 'success',
              duration: 2000
            });
            _this3.getSKUData();
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
    SKUDialogConfirm: function SKUDialogConfirm() {
      var _this4 = this;

      if (this.editMode == 1) {
        _skuAPI2.default.updateSKU(this.tmpSKU).then(function (res) {
          if (res.status == 200) {
            _this4.$notify({
              title: '成功',
              message: res.data,
              type: 'success',
              duration: 2000
            });
            _this4.getSKUData();
          }
        });
      } else {
        _skuAPI2.default.addSKU(this.tmpSKU).then(function (res) {
          if (res.status == 200) {
            _this4.$notify({
              title: '成功',
              message: res.data,
              type: 'success',
              duration: 2000
            });
            _this4.getSKUData();
          }
        });
      }
      this.SKUDialogModal = false;
    }
  },
  created: function created() {
    this.clientHeight = document.documentElement.clientHeight - 200;
    this.getSKUData();
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

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-toolbar', [_c('el-button', {
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
  }), _vm._v("删除")])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap"
  }, [_c('div', {
    staticClass: "search-bar"
  }, [_c('el-input', {
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
      "click": _vm.getSKUData
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
      "data": _vm.SKUData,
      "tooltip-effect": "dark",
      "height": _vm.clientHeight,
      "highlight-current-row": ""
    },
    on: {
      "selection-change": _vm.onSelectionChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "70px",
      "label": "序号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "60px",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sn",
      "min-width": "90px",
      "label": "商品编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "goodsType",
      "min-width": "100px",
      "label": "商品类型"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "min-width": "200px",
      "label": "商品名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "spec",
      "min-width": "80px",
      "label": "商品规格"
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
      "title": _vm.editMode == 1 ? '编辑商品信息' : '添加商品',
      "visible": _vm.SKUDialogModal,
      "close-on-click-modal": false,
      "size": "tiny"
    },
    on: {
      "update:visible": function($event) {
        _vm.SKUDialogModal = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "label-position": "right",
      "model": _vm.tmpSKU,
      "label-width": "150px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "商品编号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpSKU.sn),
      callback: function($$v) {
        _vm.$set(_vm.tmpSKU, "sn", $$v)
      },
      expression: "tmpSKU.sn"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品类型："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpSKU.goodsType),
      callback: function($$v) {
        _vm.$set(_vm.tmpSKU, "goodsType", $$v)
      },
      expression: "tmpSKU.goodsType"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品名称："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpSKU.name),
      callback: function($$v) {
        _vm.$set(_vm.tmpSKU, "name", $$v)
      },
      expression: "tmpSKU.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品规格："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpSKU.spec),
      callback: function($$v) {
        _vm.$set(_vm.tmpSKU, "spec", $$v)
      },
      expression: "tmpSKU.spec"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpSKU.unit),
      callback: function($$v) {
        _vm.$set(_vm.tmpSKU, "unit", $$v)
      },
      expression: "tmpSKU.unit"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.SKUDialogModal = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.SKUDialogConfirm
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d5eb545a", module.exports)
  }
}

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(127)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(129),
  /* template */
  __webpack_require__(130),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-d5eb545a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\git\\declarationForm\\mainUI\\source\\views\\form\\sku.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sku.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d5eb545a", Component.options)
  } else {
    hotAPI.reload("data-v-d5eb545a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});