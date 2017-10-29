webpackJsonp([10],{

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

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("9b2a4118", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b0448ed\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sku.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b0448ed\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sku.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-3b0448ed] {\n  padding: 10px;\n}\n.search-bar[data-v-3b0448ed] {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n.page-wrap[data-v-3b0448ed] {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n.e-input[data-v-3b0448ed] {\n  width: 270px;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/sku.vue?8b827802"],"names":[],"mappings":";AAmLA;EACA,cAAA;CACA;AAEA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;CACA;AAEA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,SAAA;EACA,oBAAA;CACA;AAEA;EACA,aAAA;CACA","file":"sku.vue","sourcesContent":["<template>\n  <div>\n    <el-toolbar>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addClick\">\n        <i class=\"fa fa-plus\"></i>添加</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0\" @click=\"editClick\">\n            <i class=\"fa fa-edit\"></i>编辑</el-button>\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0\" @click=\"deleteClick\">\n        <i class=\"fa fa-remove\"></i>删除</el-button>\n    </el-toolbar>\n    <div class=\"main-content-wrap\">\n      <div class=\"search-bar\">\n        <el-input style=\"width:200px\" size=\"small\" v-model=\"searchWord\"></el-input>\n        <el-button size=\"small\" type=\"primary\" @click=\"getSKUData\" style=\"width:60px;\">搜索</el-button>\n      </div>\n      <el-table :data=\"SKUData\" v-loading=\"dataLoading\" tooltip-effect=\"dark\" style=\"width:100%\" :height=\"clientHeight\" highlight-current-row @selection-change=\"onSelectionChange\" @row-dblclick=\"rowDBClick\">\n        <el-table-column type=\"index\" width=\"70px\" label=\"序号\"></el-table-column>\n        <el-table-column type=\"selection\" width=\"60px\" align=\"center\"></el-table-column>\n        <el-table-column prop=\"sn\" min-width=\"90px\" label=\"商品编号\"></el-table-column>\n        <el-table-column prop=\"goodsType\" min-width=\"100px\" label=\"商品类型\"></el-table-column>\n        <el-table-column prop=\"name\" min-width=\"200px\" label=\"商品名称\"></el-table-column>\n        <el-table-column prop=\"spec\" min-width=\"80px\" label=\"商品规格\"></el-table-column>\n        <el-table-column prop=\"unit\" min-width=\"80px\" label=\"商品单位\"></el-table-column>\n      </el-table>\n      <div class=\"page-wrap\">\n        <el-pagination @size-change=\"handleSizeChange\" @current-change=\"handleCurrentChange\" :current-page=\"currentPage\" :page-sizes=\"pageSizes\" :page-size=\"pageSize\" layout=\"total, sizes, prev, pager, next\" :total=\"total\">\n        </el-pagination>\n      </div>\n    </div>\n      <el-dialog :title=\"editMode==1? '编辑商品信息': '添加商品'\" :visible.sync=\"SKUDialogModal\" :close-on-click-modal=\"false\">\n      <el-form label-position=\"right\" :model=\"tmpSKU\" label-width=\"150px\">\n        <el-form-item label=\"商品编号：\">\n          <el-input class=\"e-input\" v-model=\"tmpSKU.sn\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"商品类型：\">\n          <el-input class=\"e-input\" v-model=\"tmpSKU.goodsType\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"商品名称：\">\n          <el-input class=\"e-input\" v-model=\"tmpSKU.name\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"商品规格：\">\n          <el-input class=\"e-input\" v-model=\"tmpSKU.spec\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"商品单位：\">\n          <el-input class=\"e-input\" v-model=\"tmpSKU.unit\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"SKUDialogModal = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"SKUDialogConfirm\">确 定</el-button>\n      </div>\n    </el-dialog>\n  </div>\n</template>\n\n<script>\nimport skuAPI from './api/skuAPI.js';\n//import '../mock/declaration.js';\n\nexport default {\n  data() {\n    return {\n      searchWord: '',\n      tmpSKU: {},\n      SKUData: [],\n      dataLoading: false,\n      SKUDialogModal: false,\n      editMode: 1,\n      selectedRows: [],\n      clientHeight: 0,\n      packinglistData: [],\n      currentPage: 1,\n      pageSizes: [10, 20, 50],\n      pageSize: 10,\n      total: 0,\n    };\n  },\n  methods: {\n    rowDBClick(row) {\n      skuAPI.getSKUById(row.id).then(data => {\n        this.editMode = 1;\n        this.tmpSKU = data;\n        this.SKUDialogModal = true;\n      });\n    },\n    onSelectionChange(selection) {\n      this.selectedRows = selection;\n    },\n    getSKUData() {\n      this.dataLoading = true;\n      skuAPI.getSKU(this.searchWord).then(data => {\n        console.log(data);\n        this.dataLoading = false;\n        this.SKUData = data;\n        this.total = data.length;\n      });\n    },\n    addClick() {\n      this.editMode = 0;\n      this.tmpSKU = {\n        id: Math.floor(Math.random() * 999999) + 1,\n      };\n      this.SKUDialogModal = true;\n    },\n    editClick() {\n      skuAPI.getSKUById(this.selectedRows[0].id).then(data => {\n        this.editMode = 1;\n        this.tmpSKU = data;\n        this.SKUDialogModal = true;\n      });\n    },\n    deleteClick() {\n      let rowIds = [];\n      this.selectedRows.forEach(function(row) {\n        rowIds.push(row.id);\n      });\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n      })\n        .then(() => {\n          return skuAPI.deleteSKU(rowIds).then(res => {\n            if (res.status == 200) {\n              this.$notify({\n                title: '成功',\n                message: res.data,\n                type: 'success',\n                duration: 2000,\n              });\n              this.getSKUData();\n            }\n          });\n        })\n        .catch(() => {\n          this.$notify.error({\n            title: '取消',\n            message: '操作取消！',\n            duration: 2000,\n          });\n        });\n    },\n    SKUDialogConfirm() {\n      if (this.editMode == 1) {\n        skuAPI.updateSKU(this.tmpSKU).then(res => {\n          if (res.status == 200) {\n            this.$notify({\n              title: '成功',\n              message: res.data,\n              type: 'success',\n              duration: 2000,\n            });\n            this.getSKUData();\n          }\n        });\n      } else {\n        skuAPI.addSKU(this.tmpSKU).then(res => {\n          if (res.status == 200) {\n            this.$notify({\n              title: '成功',\n              message: res.data,\n              type: 'success',\n              duration: 2000,\n            });\n            this.getSKUData();\n          }\n        });\n      }\n      this.SKUDialogModal = false;\n    },\n  },\n  created() {\n    this.clientHeight = document.documentElement.clientHeight - 200;\n    this.getSKUData();\n  },\n};\n</script>\n\n<style scoped>\n.main-content-wrap {\n  padding: 10px;\n}\n\n.search-bar {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n\n.page-wrap {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n\n.e-input {\n  width: 270px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _skuAPI = __webpack_require__(101);

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
    rowDBClick: function rowDBClick(row) {
      var _this = this;

      _skuAPI2.default.getSKUById(row.id).then(function (data) {
        _this.editMode = 1;
        _this.tmpSKU = data;
        _this.SKUDialogModal = true;
      });
    },
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    getSKUData: function getSKUData() {
      var _this2 = this;

      this.dataLoading = true;
      _skuAPI2.default.getSKU(this.searchWord).then(function (data) {
        console.log(data);
        _this2.dataLoading = false;
        _this2.SKUData = data;
        _this2.total = data.length;
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
      var _this3 = this;

      _skuAPI2.default.getSKUById(this.selectedRows[0].id).then(function (data) {
        _this3.editMode = 1;
        _this3.tmpSKU = data;
        _this3.SKUDialogModal = true;
      });
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
        type: 'warning'
      }).then(function () {
        return _skuAPI2.default.deleteSKU(rowIds).then(function (res) {
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
      }).catch(function () {
        _this4.$notify.error({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        });
      });
    },
    SKUDialogConfirm: function SKUDialogConfirm() {
      var _this5 = this;

      if (this.editMode == 1) {
        _skuAPI2.default.updateSKU(this.tmpSKU).then(function (res) {
          if (res.status == 200) {
            _this5.$notify({
              title: '成功',
              message: res.data,
              type: 'success',
              duration: 2000
            });
            _this5.getSKUData();
          }
        });
      } else {
        _skuAPI2.default.addSKU(this.tmpSKU).then(function (res) {
          if (res.status == 200) {
            _this5.$notify({
              title: '成功',
              message: res.data,
              type: 'success',
              duration: 2000
            });
            _this5.getSKUData();
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
//

/***/ }),

/***/ 146:
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
      "selection-change": _vm.onSelectionChange,
      "row-dblclick": _vm.rowDBClick
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
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "unit",
      "min-width": "80px",
      "label": "商品单位"
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
      "close-on-click-modal": false
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
     require("vue-hot-reload-api").rerender("data-v-3b0448ed", module.exports)
  }
}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(143)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(145),
  /* template */
  __webpack_require__(146),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3b0448ed",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\setting\\sku.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sku.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b0448ed", Component.options)
  } else {
    hotAPI.reload("data-v-3b0448ed", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=formUI-sku.js.map