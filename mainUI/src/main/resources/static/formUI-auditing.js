webpackJsonp([4],{

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

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var auditingAPI = {
  doAuditing: function doAuditing(ids, statu) {
    console.log(ids);
    var strIds = ids.join(',');
    return axios.put('/form/audit', {
      ids: strIds,
      statu: statu
    });
  },
  getDeclaration: function getDeclaration(obj) {
    console.log(obj);
    return axios.get('form/audit', {
      params: {
        searchItem: obj
      }
    }).then(function (res) {
      return res.data;
    });
  }
};

exports.default = auditingAPI;

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("2d5ebd6a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79186761\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./auditing.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79186761\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./auditing.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-79186761] {\n  padding: 10px;\n}\n.search-bar[data-v-79186761] {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-79186761] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-79186761] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-79186761] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.page-wrap[data-v-79186761] {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n.e-form[data-v-79186761] {\n  padding-left: 10%;\n}\n.e-form .el-form-item[data-v-79186761] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.e-input[data-v-79186761] {\n  width: 240px;\n}\n.search-select[data-v-79186761] {\n  width: 140px;\n}\n.detail-table[data-v-79186761] {\n  font-size: 16px;\n  width: 100%;\n}\n.detail-table span[data-v-79186761] {\n  font-size: 12px;\n  padding-left: 5px;\n}\n.detail-table .t1[data-v-79186761] {\n  height: 40px;\n}\n.detail-table .t2[data-v-79186761] {\n  height: 80px;\n}\n.detail-table .t3[data-v-79186761] {\n  height: 120px;\n}\n.detail-table .t4[data-v-79186761] {\n  height: 160px;\n}\n.detail-table .t5[data-v-79186761] {\n  height: 200px;\n}\n.inline-table[data-v-79186761] {\n  width: 100%;\n}\n.inline-table .b1[data-v-79186761] {\n  border-bottom: 1px solid #ccc;\n}\n.inline-table .b2[data-v-79186761] {\n  border-right: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n}\n.inline-table .b3[data-v-79186761] {\n  border-left: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n}\n.inline-table .b4[data-v-79186761] {\n  border-left: 1px solid #ccc;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/form/auditing.vue?48ffac4c"],"names":[],"mappings":";AAsrBA;EACA,cAAA;CACA;AAEA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,SAAA;EACA,oBAAA;CACA;AAEA;EACA,kBAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,gBAAA;EACA,YAAA;CACA;AAEA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,cAAA;CACA;AAEA;EACA,cAAA;CACA;AAEA;EACA,cAAA;CACA;AAEA;EACA,YAAA;CACA;AAEA;EACA,8BAAA;CACA;AAEA;EACA,6BAAA;EACA,8BAAA;CACA;AAEA;EACA,4BAAA;EACA,8BAAA;CACA;AAEA;EACA,4BAAA;CACA","file":"auditing.vue","sourcesContent":["<template slot-scope=\"scope\">\n  <div :style=\"{width:clientWidth+'px'}\">\n    <el-toolbar>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0 || statu\" @click=\"passClick()\">\n        <i class=\"fa fa-check\"></i>审核通过</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0 || noPassStatu\" @click=\"notPassClick()\">\n        <i class=\"fa fa-remove\"></i>审核不通过</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0 || passStatu\" @click=\"goodsPassClick()\">\n        <i class=\"fa fa-hand-lizard-o\"></i>货物放行</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0\" @click=\"viewClick()\">\n        <i class=\"fa fa-search\"></i>查看详情</el-button>\n    </el-toolbar>\n    <div class=\"main-content-wrap\">\n      <div class=\"search-bar\">\n        排序：\n        <el-select size=\"small\" v-model=\"sort\" class=\"search-select\">\n          <el-option v-for=\"item in sortOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        审核状态：\n        <el-select size=\"small\" v-model=\"auditStatus\" class=\"search-select\">\n          <el-option v-for=\"item in auditStatusOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        检索字段：\n        <el-select size=\"small\" v-model=\"retrieval\" class=\"search-select\">\n          <el-option v-for=\"item in retrievalOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        <el-input style=\"width:200px\" size=\"small\" v-model=\"searchWord\"></el-input>\n        <el-select size=\"small\" v-model=\"logic\" class=\"search-select\">\n          <el-option v-for=\"item in logicOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        <el-button size=\"small\" type=\"primary\" @click=\"getDeclarationData\" style=\"width:60px;\">搜索</el-button>\n      </div>\n      <el-table :data=\"declarationData\" v-loading=\"dataLoading\" tooltip-effect=\"dark\" style=\"width:100%\" :height=\"clientHeight\" highlight-current-row @selection-change=\"onSelectionChange\" @expand=\"expandRow\" @row-dblclick=\"rowDBClick\">\n        <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n        <el-table-column type=\"expand\">\n          <template slot-scope=\"props\">\n            <el-form label-position=\"left\" inline class=\"demo-table-expand\" label-width=\"160px\">\n              <el-form-item label=\"报关单类型：\">\n                <span>{{props.row.declarationTypeName}}</span>\n              </el-form-item>\n              <br/>\n              <el-form-item label=\"预录入编号：\">\n                <span>{{props.row.preentryNumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"海关编号：\">\n                <span>{{props.row.customsNumber}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationType == 'import'\" label=\"进口口岸：\">\n                <span>{{props.row.importOrExportPort}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"出口口岸：\">\n                <span>{{props.row.importOrExportPort}}</span>\n              </el-form-item>\n              <el-form-item label=\"备案号：\">\n                <span>{{props.row.recordNumber}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationType == 'import'\" label=\"进口日期：\">\n                <span>{{props.row.importOrExportDate}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"出口日期：\">\n                <span>{{props.row.importOrExportDate}}</span>\n              </el-form-item>\n              <el-form-item label=\"申报日期：\">\n                <span>{{props.row.declarationDate}}</span>\n              </el-form-item>\n              <el-form-item label=\"经营单位：\">\n                <span>{{props.row.managementUnit}}</span>\n              </el-form-item>\n              <el-form-item label=\"运输方式：\">\n                <span>{{props.row.shippingType}}</span>\n              </el-form-item>\n              <el-form-item label=\"运输工具名称：\">\n                <span>{{props.row.shippingTools}}</span>\n              </el-form-item>\n              <el-form-item label=\"提运单号：\">\n                <span>{{props.row.shippingNumbers}}</span>\n              </el-form-item>\n              <el-form-item label=\"收货单位：\">\n                <span>{{props.row.forwardingUnit}}</span>\n              </el-form-item>\n              <el-form-item label=\"贸易方式：\">\n                <span>{{props.row.tradingType}}</span>\n              </el-form-item>\n              <el-form-item label=\"征免性质：\">\n                <span>{{props.row.exemptionNature}}</span>\n              </el-form-item>\n              <el-form-item label=\"征税比例：\">\n                <span>{{props.row.settlementType}}</span>\n              </el-form-item>\n              <el-form-item label=\"许可证号：\">\n                <span>{{props.row.licenseKey}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationType == 'import'\" label=\"启运国：\">\n                <span>{{props.row.startOrArrivalCountry}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"运抵国：\">\n                <span>{{props.row.startOrArrivalCountry}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationType == 'import'\" label=\"装货港：\">\n                <span>{{props.row.loadingOrFingerPort}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"指运港：\">\n                <span>{{props.row.loadingOrFingerPort}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationType == 'import'\" label=\"境内目的地：\">\n                <span>{{props.row.destinationOrConsignmentPlace}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"境内货源地：\">\n                <span>{{props.row.destinationOrConsignmentPlace}}</span>\n              </el-form-item>\n              <el-form-item label=\"批准文号：\">\n                <span>{{props.row.approvalNumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"成交方式：\">\n                <span>{{props.row.transactionMethod}}</span>\n              </el-form-item>\n              <el-form-item label=\"运费：\">\n                <span>{{props.row.freight}}</span>\n              </el-form-item>\n              <el-form-item label=\"保费：\">\n                <span>{{props.row.premium}}</span>\n              </el-form-item>\n              <el-form-item label=\"杂费：\">\n                <span>{{props.row.incidental}}</span>\n              </el-form-item>\n              <br/>\n              <el-form-item label=\"合同协议号：\">\n                <span>{{props.row.agreementNumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"件数：\">\n                <span>{{props.row.goodsNumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"包装种类：\">\n                <span>{{props.row.packagingType}}</span>\n              </el-form-item>\n              <el-form-item label=\"毛重（千克）：\">\n                <span>{{props.row.grossWeight}}</span>\n              </el-form-item>\n              <el-form-item label=\"净重（千克）：\">\n                <span>{{props.row.netWeight}}</span>\n              </el-form-item>\n              <el-form-item label=\"集装箱号：\">\n                <span>{{props.row.containerNumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"随附单证：\">\n                <span>{{props.row.documentSattached}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationType == 'import'\" label=\"用途：\">\n                <span>{{props.row.purposeOrManufacturer}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"生产厂家：\">\n                <span>{{props.row.purposeOrManufacturer}}</span>\n              </el-form-item>\n              <el-form-item label=\"标记唛码及备注：\" style=\"width:90%\">\n                <span>{{props.row.shippingMarksAndRemarks}}</span>\n              </el-form-item>\n              <el-form-item label=\"商品：\" label-width=\"60px\" style=\"width:100%\">\n                <packing-item :packinglistData.sync=\"packingListData\" :declarationType=\"declarationType\" :onlyView=\"true\">\n                </packing-item>\n              </el-form-item>\n              <el-form-item label=\"税费征收情况：\">\n                <span>{{props.row.taxpaidOrNot}}</span>\n              </el-form-item>\n              <el-form-item label=\"录入员：\">\n                <span>{{props.row.entryClerk}}</span>\n              </el-form-item>\n              <el-form-item label=\"录入单位：\">\n                <span>{{props.row.entryUnit}}</span>\n              </el-form-item>\n              <el-form-item label=\"报关员：\">\n                <span>{{props.row.customsBroker}}</span>\n              </el-form-item>\n              <el-form-item label=\"申报单位：\">\n                <span>{{props.row.declarationUnit}}</span>\n              </el-form-item>\n              <el-form-item label=\"单位地址：\">\n                <span>{{props.row.unitAddress}}</span>\n              </el-form-item>\n              <el-form-item label=\"邮编：\">\n                <span>{{props.row.zipCode}}</span>\n              </el-form-item>\n              <el-form-item label=\"电话：\">\n                <span>{{props.row.telephone}}</span>\n              </el-form-item>\n              <el-form-item label=\"制填日期：\">\n                <span>{{props.row.fillingDate}}</span>\n              </el-form-item>\n              <el-form-item label=\"审核状态：\">\n                <span>{{props.row.auditStatusName}}</span>\n              </el-form-item>\n              <el-form-item label=\"应缴税额\">\n                <span>{{props.row.taxDue}}</span>\n              </el-form-item>\n              <el-form-item label=\"缴税状态\">\n                <span>{{props.row.taxStatusName}}</span>\n              </el-form-item>\n\n            </el-form>\n          </template>\n        </el-table-column>\n        <el-table-column prop=\"customsNumber\" show-overflow-tooltip min-width=\"15%\" label=\"海关编号\"></el-table-column>\n        <el-table-column prop=\"declarationTypeName\" show-overflow-tooltip min-width=\"15%\" label=\"报关单类型\"></el-table-column>\n        <el-table-column min-width=\"12%\" label=\"商品详情\">\n          <template slot-scope=\"scope\">\n            <el-button type=\"text\">\n              <span style=\"color:green;\" @click=\"showPackinglist(scope.row.packingList,scope.row.declarationType)\">查看商品</span>\n            </el-button>\n          </template>\n        </el-table-column>\n        <el-table-column prop=\"declarationUnit\" show-overflow-tooltip min-width=\"20%\" label=\"申报单位\"></el-table-column>\n        <el-table-column prop=\"declarationDate\" show-overflow-tooltip min-width=\"12%\" label=\"申报日期\"></el-table-column>\n        <el-table-column prop=\"entrydate\" show-overflow-tooltip min-width=\"12%\" label=\"录入日期\"></el-table-column>\n        <el-table-column prop=\"auditStatusName\" show-overflow-tooltip min-width=\"11%\" label=\"审核状态\"></el-table-column>\n      </el-table>\n      <div class=\"page-wrap\">\n        <el-pagination @size-change=\"handleSizeChange\" @current-change=\"handleCurrentChange\" :current-page=\"currentPage\" :page-sizes=\"pageSizes\" :page-size=\"pageSize\" layout=\"total, sizes, prev, pager, next\" :total=\"total\">\n        </el-pagination>\n      </div>\n    </div>\n    <el-dialog title=\"商品列表详情\" :visible.sync=\"packinglistDialogModal\" size=\"large\">\n      <packing-item :packinglistData.sync=\"packingListData\" :declarationType=\"declarationType\" :onlyView=\"true\">\n      </packing-item>\n    </el-dialog>\n    <el-dialog title=\"报关单详情\" :visible.sync=\"declarationDetailDialogModal\" size=\"large\">\n      <table cellpadding=\"0\" cellspacing=\"0\" border=\"1\" class=\"detail-table\">\n        <tr class=\"t1\">\n          <td colspan=\"5\">\n            <span>预录入编号　</span>{{tmpDeclaration.preentryNumber}}</td>\n          <td colspan=\"5\">\n            <span>海关编号　</span>{{tmpDeclaration.customsNumber}}</td>\n        </tr>\n        <tr class=\"t1\">\n          <td colspan=\"4\">\n            <span v-if=\"tmpDeclaration.declarationType == 'import'\">进口口岸　</span>\n            <span v-else>出口口岸　</span>{{tmpDeclaration.importOrExportPort}}</td>\n          <td colspan=\"2\">\n            <span>备案号　</span>{{tmpDeclaration.recordNumber}}</td>\n          <td colspan=\"2\">\n            <span v-if=\"tmpDeclaration.declarationType == 'import'\">进口日期　</span>\n            <span v-else>出口日期　</span>{{tmpDeclaration.importOrExportDate}}</td>\n          <td colspan=\"2\">\n            <span>申报日期　</span>{{tmpDeclaration.declarationDate}}</td>\n        </tr>\n        <tr class=\"t1\">\n          <td colspan=\"4\">\n            <span>经营单位　</span>{{tmpDeclaration.managementUnit}}</td>\n          <td colspan=\"2\">\n            <span>运输方式　</span>{{tmpDeclaration.shippingType}}</td>\n          <td colspan=\"2\">\n            <span>运输工具名称　</span>{{tmpDeclaration.shippingTools}}</td>\n          <td colspan=\"2\">\n            <span>舱单号　</span>{{tmpDeclaration.shippingNumbers}}</td>\n        </tr>\n        <tr class=\"t1\">\n          <td colspan=\"4\">\n            <span>发货单位　</span>{{tmpDeclaration.forwardingUnit}}</td>\n          <td colspan=\"2\">\n            <span>贸易方式　</span>{{tmpDeclaration.tradingType}}</td>\n          <td colspan=\"2\">\n            <span>征免性质　</span>{{tmpDeclaration.exemptionNature}}</td>\n          <td colspan=\"2\">\n            <span>结汇方式　</span>{{tmpDeclaration.settlementType}}</td>\n        </tr>\n        <tr class=\"t1\">\n          <td colspan=\"3\">\n            <span>许可证号　</span>{{tmpDeclaration.licenseKey}}</td>\n          <td colspan=\"3\">\n            <span v-if=\"tmpDeclaration.declarationType == 'import'\">启运国（地区）　</span>\n            <span v-else>运抵国（地区）　</span>{{tmpDeclaration.startOrArrivalCountry}}</td>\n          <td colspan=\"2\">\n            <span v-if=\"tmpDeclaration.declarationType == 'import'\">装货港　</span>\n            <span v-else>指运港　</span>{{tmpDeclaration.loadingOrFingerPort}}</td>\n          <td colspan=\"2\">\n            <span v-if=\"tmpDeclaration.declarationType == 'import'\">境内目的地　</span>\n            <span v-else>境内货源地　</span>{{tmpDeclaration.destinationOrConsignmentPlace}}</td>\n        </tr>\n        <tr class=\"t1\">\n          <td colspan=\"3\">\n            <span>批准文号　</span>{{tmpDeclaration.approvalNumber}}</td>\n          <td colspan=\"1\">\n            <span>成交方式　</span>{{tmpDeclaration.transactionMethod}}</td>\n          <td colspan=\"2\">\n            <span>运费　</span>{{tmpDeclaration.freight}}</td>\n          <td colspan=\"2\">\n            <span>保费　</span>{{tmpDeclaration.premium}}</td>\n          <td colspan=\"2\">\n            <span>杂费　</span>{{tmpDeclaration.incidental}}</td>\n        </tr>\n        <tr class=\"t1\">\n          <td colspan=\"3\">\n            <span>合同协议号　</span>{{tmpDeclaration.agreementNumber}}</td>\n          <td colspan=\"1\">\n            <span>件数　</span>{{tmpDeclaration.goodsNumber}}</td>\n          <td colspan=\"2\">\n            <span>包装种类　</span>{{tmpDeclaration.packagingType}}</td>\n          <td colspan=\"2\">\n            <span>毛重（公斤）　</span>{{tmpDeclaration.grossWeight}}</td>\n          <td colspan=\"2\">\n            <span>净重（公斤）　</span>{{tmpDeclaration.netWeight}}</td>\n        </tr>\n        <tr class=\"t1\">\n          <td colspan=\"3\">\n            <span>集装箱号　</span>{{tmpDeclaration.containerNumber}}</td>\n          <td colspan=\"5\">\n            <span>随附单据　</span>{{tmpDeclaration.documentSattached}}</td>\n          <td colspan=\"2\">\n            <span v-if=\"tmpDeclaration.declarationType == 'import'\">用途　</span>\n            <span v-else>生产厂家　</span>{{tmpDeclaration.purposeOrManufacturer}}</td>\n        </tr>\n        <tr class=\"t2\">\n          <td colspan=\"10\" valign=\"top\">\n            <span>标记唛码及备注　</span>{{tmpDeclaration.shippingMarksAndRemarks}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"10\" valign=\"top\">\n            <packing-item :packinglistData.sync=\"tmpDeclaration.packingList\" :declarationType=\"tmpDeclaration.declarationType\" :onlyView=\"true\">\n            </packing-item>\n          </td>\n        </tr>\n        <tr class=\"t3\">\n          <td colspan=\"10\" valign=\"top\">\n            <span>税费征收情况:　</span>应缴税额：{{tmpDeclaration.taxDue}}</td>\n        </tr>\n        <tr class=\"t5\">\n          <td colspan=\"10\">\n            <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" class=\"inline-table\">\n              <tr class=\"t1\">\n                <td colspan=\"1\" class=\"b1\">\n                  <span>录入员　</span>{{tmpDeclaration.entryClerk}}</td>\n                <td colspan=\"2\" class=\"b2\">\n                  <span>录入单位　</span>{{tmpDeclaration.entryUnit}}</td>\n                <td colspan=\"3\">\n                  <span>兹声明以上申报无讹并承担法律责任　</span>\n                </td>\n                <td colspan=\"4\" class=\"b4\">\n                  <span>海关审批批注及放行日期　</span>\n                </td>\n              </tr>\n              <tr class=\"t1\" border=\"0\">\n                <td colspan=\"6\" border=\"0\">\n                  <span>报关员　</span>{{tmpDeclaration.customsBroker}}</td>\n                <td colspan=\"4\" class=\"b4\"> </td>\n              </tr>\n              <tr class=\"t1\" border=\"0\">\n                <td colspan=\"6\" border=\"0\">\n                  <span>单位地址　</span>{{tmpDeclaration.unitAddress}}</td>\n                <td colspan=\"2\" class=\"b3\">\n                  <span>审单　</span>\n                </td>\n                <td colspan=\"2\" class=\"b1\">\n                  <span>审价　</span>\n                </td>\n              </tr>\n              <tr class=\"t1\" border=\"0\">\n                <td colspan=\"6\" border=\"0\">\n                  <span>申报单位　</span>{{tmpDeclaration.declarationUnit}}</td>\n                <td colspan=\"2\" class=\"b3\">\n                  <span>征税　</span>\n                </td>\n                <td colspan=\"2\" class=\"b1\">\n                  <span>统计　</span>\n                </td>\n              </tr>\n              <tr class=\"t1\">\n                <td colspan=\"2\">\n                  <span>邮编　</span>{{tmpDeclaration.zipCode}}</td>\n                <td colspan=\"2\">\n                  <span>电话　</span>{{tmpDeclaration.telephone}}</td>\n                <td colspan=\"2\">\n                  <span>制填日期　</span>{{tmpDeclaration.fillingDate}}</td>\n                <td colspan=\"2\" class=\"b4\">\n                  <span>查验　</span>\n                </td>\n                <td colspan=\"2\">\n                  <span>放行　</span>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n    </el-dialog>\n\n  </div>\n</template>\n\n<script>\nimport declarationAPI from './api/declarationAPI.js';\nimport packinglistAPI from './api/packinglistAPI.js';\nimport auditingAPI from './api/auditingAPI.js';\n//import './mock/declaration.js';\nimport packing from './components/packing.vue';\n\nexport default {\n  data() {\n    return {\n      statu: false,\n      noPassStatu: false,\n      passStatu: false,\n      packingListData: [],\n      declarationDetailDialogModal: false,\n      packinglistDialogModal: false,\n      declarationID: '',\n      declarationType: '',\n      clientWidth: 0,\n      clientHeight: 0,\n      searchWord: '',\n      selectedRows: [],\n      declarationData: [],\n      currentPage: 1,\n      pageSizes: [10, 20, 50],\n      pageSize: 10,\n      total: 0,\n      editMode: 1,\n      declarationDialogmodel: false,\n      tmpDeclaration: {},\n      dataLoading: false,\n      confirmLoading: false,\n      declarationTypeOptions: [\n        {\n          key: 'import',\n          value: '进口报关单',\n        },\n        {\n          key: 'export',\n          value: '出口报关单',\n        },\n      ],\n      sort: '',\n      sortOptions: [\n        {\n          key: '',\n          value: '请选择排序',\n        },\n        {\n          key: 'declarationType',\n          value: '报关单类型',\n        },\n        {\n          key: 'customsNumber',\n          value: '海关编号',\n        },\n        {\n          key: 'importOrExportPort',\n          value: '海关口岸',\n        },\n        {\n          key: 'managementUnit',\n          value: '经营单位',\n        },\n        {\n          key: 'declarationUnit',\n          value: '申报单位',\n        },\n        {\n          key: 'declarationDate',\n          value: '申报日期',\n        },\n      ],\n      auditStatus: '',\n      auditStatusOptions: [\n        {\n          key: '',\n          value: '请选择审核状态',\n        },\n        {\n          key: 'W',\n          value: '未审核',\n        },\n        {\n          key: 'Y',\n          value: '审核通过',\n        },\n        {\n          key: 'N',\n          value: '不通过',\n        },\n        {\n          key: 'P',\n          value: '放行',\n        },\n      ],\n      retrieval: '',\n      retrievalOptions: [\n        {\n          key: '',\n          value: '请选择检索字段',\n        },\n        {\n          key: 'declarationTypeName',\n          value: '报关单类型',\n        },\n        {\n          key: 'customsNumber',\n          value: '海关编号',\n        },\n        {\n          key: 'importOrExportPort',\n          value: '海关口岸',\n        },\n        {\n          key: 'managementUnit',\n          value: '经营单位',\n        },\n        {\n          key: 'declarationUnit',\n          value: '申报单位',\n        },\n        {\n          key: 'declarationDate',\n          value: '申报日期',\n        },\n      ],\n      logic: '',\n      logicOptions: [\n        {\n          key: '',\n          value: '请选择逻辑',\n        },\n        {\n          key: 'and',\n          value: '与',\n        },\n        {\n          key: 'or',\n          value: '或',\n        },\n        {\n          key: 'none',\n          value: '非',\n        },\n      ],\n    };\n  },\n  methods: {\n    rowDBClick(row) {\n      this.tmpDeclaration = Object.assign({}, row);\n      this.declarationDetailDialogModal = true;\n    },\n    goodsPassClick(id) {\n      let rowIds = [];\n      if (id) {\n        rowIds = [id];\n      } else {\n        this.selectedRows.forEach(function(row) {\n          rowIds.push(row.id);\n        });\n      }\n      auditingAPI.doAuditing(rowIds, 'P').then(res => {\n        this.$notify({\n          title: '提示',\n          message: res.data,\n          type: 'success',\n          duration: 2000,\n        });\n        this.getDeclarationData();\n      });\n    },\n    showPackinglist(packingList, type) {\n      this.packingListData = packingList;\n      this.declarationType = type;\n      this.packinglistDialogModal = true;\n    },\n    getDeclarationData() {\n      this.dataLoading = true;\n      let obj = {\n        retrieval: this.retrieval,\n        searchWord: this.searchWord,\n        pageSize: this.pageSize,\n        pageIndex: this.currentPage,\n      };\n      auditingAPI.getDeclaration(obj).then(data => {\n        console.log(data);\n        this.declarationData = [];\n        if (data.length > 0) {\n          this.total = data[0].total;\n        }\n        data.forEach(o => {\n          if (this.auditStatus != '') {\n            if (this.auditStatus == o.auditStatus) {\n              if (this.retrieval == '' || this.searchWord == '') {\n                this.declarationData.push(o);\n              } else if (o[this.retrieval].indexOf(this.searchWord) >= 0) {\n                this.declarationData.push(o);\n              }\n            }\n          } else {\n            if (this.retrieval == '' || this.searchWord == '') {\n              this.declarationData.push(o);\n            } else if (o[this.retrieval].indexOf(this.searchWord) >= 0) {\n              this.declarationData.push(o);\n            }\n          }\n        });\n        this.dataLoading = false;\n      });\n    },\n    onSelectionChange(selection) {\n      this.selectedRows = selection;\n      console.log(selection);\n      this.statu = false;\n      this.noPassStatu = false;\n      this.passStatu = false;\n      selection.forEach(select => {\n        if (select.auditStatus == 'P') {\n          this.statu = true;\n          this.noPassStatu = true;\n          this.passStatu = true;\n          return;\n        }\n        if (select.auditStatus == 'Y') {\n          this.noPassStatu = true;\n          this.statu = true;\n          return;\n        } else {\n          this.passStatu = true;\n        }\n        if (select.auditStatus == 'N') {\n          this.noPassStatu = true;\n        }\n      });\n      console.log(this.statu);\n    },\n    expandRow(row) {\n      this.declarationType = row.declarationType;\n      this.packingListData = row.packingList;\n    },\n    handleSizeChange(val) {\n      this.pageSize = val;\n      this.getDeclarationData();\n    },\n    handleCurrentChange(val) {\n      this.currentPage = val;\n      this.getDeclarationData();\n    },\n    passClick(id) {\n      let rowIds = [];\n      if (id) {\n        rowIds = [id];\n      } else {\n        this.selectedRows.forEach(function(row) {\n          rowIds.push(row.id);\n        });\n      }\n      auditingAPI.doAuditing(rowIds, 'Y').then(res => {\n        this.$notify({\n          title: '提示',\n          message: res.data,\n          type: 'success',\n          duration: 2000,\n        });\n        this.getDeclarationData();\n      });\n    },\n    notPassClick(id) {\n      let rowIds = [];\n      if (id) {\n        rowIds = [id];\n      } else {\n        this.selectedRows.forEach(function(row) {\n          rowIds.push(row.id);\n        });\n      }\n      auditingAPI.doAuditing(rowIds, 'N').then(res => {\n        this.$notify({\n          title: '提示',\n          message: res.data,\n          type: 'success',\n          duration: 2000,\n        });\n        this.getDeclarationData();\n      });\n    },\n    viewClick() {\n      this.tmpDeclaration = Object.assign({}, this.selectedRows[0]);\n      this.declarationDetailDialogModal = true;\n    },\n  },\n  created() {\n    this.clientWidth = document.documentElement.clientWidth - 200;\n    this.clientHeight = document.documentElement.clientHeight - 200;\n    this.getDeclarationData();\n  },\n  components: {\n    'packing-item': packing,\n  },\n};\n</script>\n\n<style scoped>\n.main-content-wrap {\n  padding: 10px;\n}\n\n.search-bar {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n\n.demo-table-expand {\n  font-size: 12px;\n}\n\n.demo-table-expand label {\n  color: #99a9bf;\n}\n\n.demo-table-expand .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n\n.page-wrap {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n\n.e-form {\n  padding-left: 10%;\n}\n\n.e-form .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n\n.e-input {\n  width: 240px;\n}\n\n.search-select {\n  width: 140px;\n}\n\n.detail-table {\n  font-size: 16px;\n  width: 100%;\n}\n\n.detail-table span {\n  font-size: 12px;\n  padding-left: 5px;\n}\n\n.detail-table .t1 {\n  height: 40px;\n}\n\n.detail-table .t2 {\n  height: 80px;\n}\n\n.detail-table .t3 {\n  height: 120px;\n}\n\n.detail-table .t4 {\n  height: 160px;\n}\n\n.detail-table .t5 {\n  height: 200px;\n}\n\n.inline-table {\n  width: 100%;\n}\n\n.inline-table .b1 {\n  border-bottom: 1px solid #ccc;\n}\n\n.inline-table .b2 {\n  border-right: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n}\n\n.inline-table .b3 {\n  border-left: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n}\n\n.inline-table .b4 {\n  border-left: 1px solid #ccc;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _declarationAPI = __webpack_require__(104);

var _declarationAPI2 = _interopRequireDefault(_declarationAPI);

var _packinglistAPI = __webpack_require__(103);

var _packinglistAPI2 = _interopRequireDefault(_packinglistAPI);

var _auditingAPI = __webpack_require__(110);

var _auditingAPI2 = _interopRequireDefault(_auditingAPI);

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

exports.default = {
  data: function data() {
    return {
      statu: false,
      noPassStatu: false,
      passStatu: false,
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
      }, {
        key: 'export',
        value: '出口报关单'
      }],
      sort: '',
      sortOptions: [{
        key: '',
        value: '请选择排序'
      }, {
        key: 'declarationType',
        value: '报关单类型'
      }, {
        key: 'customsNumber',
        value: '海关编号'
      }, {
        key: 'importOrExportPort',
        value: '海关口岸'
      }, {
        key: 'managementUnit',
        value: '经营单位'
      }, {
        key: 'declarationUnit',
        value: '申报单位'
      }, {
        key: 'declarationDate',
        value: '申报日期'
      }],
      auditStatus: '',
      auditStatusOptions: [{
        key: '',
        value: '请选择审核状态'
      }, {
        key: 'W',
        value: '未审核'
      }, {
        key: 'Y',
        value: '审核通过'
      }, {
        key: 'N',
        value: '不通过'
      }, {
        key: 'P',
        value: '放行'
      }],
      retrieval: '',
      retrievalOptions: [{
        key: '',
        value: '请选择检索字段'
      }, {
        key: 'declarationTypeName',
        value: '报关单类型'
      }, {
        key: 'customsNumber',
        value: '海关编号'
      }, {
        key: 'importOrExportPort',
        value: '海关口岸'
      }, {
        key: 'managementUnit',
        value: '经营单位'
      }, {
        key: 'declarationUnit',
        value: '申报单位'
      }, {
        key: 'declarationDate',
        value: '申报日期'
      }],
      logic: '',
      logicOptions: [{
        key: '',
        value: '请选择逻辑'
      }, {
        key: 'and',
        value: '与'
      }, {
        key: 'or',
        value: '或'
      }, {
        key: 'none',
        value: '非'
      }]
    };
  },

  methods: {
    rowDBClick: function rowDBClick(row) {
      this.tmpDeclaration = Object.assign({}, row);
      this.declarationDetailDialogModal = true;
    },
    goodsPassClick: function goodsPassClick(id) {
      var _this = this;

      var rowIds = [];
      if (id) {
        rowIds = [id];
      } else {
        this.selectedRows.forEach(function (row) {
          rowIds.push(row.id);
        });
      }
      _auditingAPI2.default.doAuditing(rowIds, 'P').then(function (res) {
        _this.$notify({
          title: '提示',
          message: res.data,
          type: 'success',
          duration: 2000
        });
        _this.getDeclarationData();
      });
    },
    showPackinglist: function showPackinglist(packingList, type) {
      this.packingListData = packingList;
      this.declarationType = type;
      this.packinglistDialogModal = true;
    },
    getDeclarationData: function getDeclarationData() {
      var _this2 = this;

      this.dataLoading = true;
      var obj = {
        retrieval: this.retrieval,
        searchWord: this.searchWord,
        pageSize: this.pageSize,
        pageIndex: this.currentPage
      };
      _auditingAPI2.default.getDeclaration(obj).then(function (data) {
        console.log(data);
        _this2.declarationData = [];
        if (data.length > 0) {
          _this2.total = data[0].total;
        }
        data.forEach(function (o) {
          if (_this2.auditStatus != '') {
            if (_this2.auditStatus == o.auditStatus) {
              if (_this2.retrieval == '' || _this2.searchWord == '') {
                _this2.declarationData.push(o);
              } else if (o[_this2.retrieval].indexOf(_this2.searchWord) >= 0) {
                _this2.declarationData.push(o);
              }
            }
          } else {
            if (_this2.retrieval == '' || _this2.searchWord == '') {
              _this2.declarationData.push(o);
            } else if (o[_this2.retrieval].indexOf(_this2.searchWord) >= 0) {
              _this2.declarationData.push(o);
            }
          }
        });
        _this2.dataLoading = false;
      });
    },
    onSelectionChange: function onSelectionChange(selection) {
      var _this3 = this;

      this.selectedRows = selection;
      console.log(selection);
      this.statu = false;
      this.noPassStatu = false;
      this.passStatu = false;
      selection.forEach(function (select) {
        if (select.auditStatus == 'P') {
          _this3.statu = true;
          _this3.noPassStatu = true;
          _this3.passStatu = true;
          return;
        }
        if (select.auditStatus == 'Y') {
          _this3.noPassStatu = true;
          _this3.statu = true;
          return;
        } else {
          _this3.passStatu = true;
        }
        if (select.auditStatus == 'N') {
          _this3.noPassStatu = true;
        }
      });
      console.log(this.statu);
    },
    expandRow: function expandRow(row) {
      this.declarationType = row.declarationType;
      this.packingListData = row.packingList;
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
      var _this4 = this;

      var rowIds = [];
      if (id) {
        rowIds = [id];
      } else {
        this.selectedRows.forEach(function (row) {
          rowIds.push(row.id);
        });
      }
      _auditingAPI2.default.doAuditing(rowIds, 'Y').then(function (res) {
        _this4.$notify({
          title: '提示',
          message: res.data,
          type: 'success',
          duration: 2000
        });
        _this4.getDeclarationData();
      });
    },
    notPassClick: function notPassClick(id) {
      var _this5 = this;

      var rowIds = [];
      if (id) {
        rowIds = [id];
      } else {
        this.selectedRows.forEach(function (row) {
          rowIds.push(row.id);
        });
      }
      _auditingAPI2.default.doAuditing(rowIds, 'N').then(function (res) {
        _this5.$notify({
          title: '提示',
          message: res.data,
          type: 'success',
          duration: 2000
        });
        _this5.getDeclarationData();
      });
    },
    viewClick: function viewClick() {
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
    'packing-item': _packing2.default
  }
};
//import './mock/declaration.js';

/***/ }),

/***/ 138:
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
      "disabled": _vm.selectedRows.length === 0 || _vm.statu
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
      "disabled": _vm.selectedRows.length === 0 || _vm.noPassStatu
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
      "disabled": _vm.selectedRows.length === 0 || _vm.passStatu
    },
    on: {
      "click": function($event) {
        _vm.goodsPassClick()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-hand-lizard-o"
  }), _vm._v("货物放行")]), _vm._v(" "), _c('el-button', {
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
      value: (_vm.searchWord),
      callback: function($$v) {
        _vm.searchWord = $$v
      },
      expression: "searchWord"
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
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationTypeName))])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-form-item', {
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
        }, [_c('span', [_vm._v(_vm._s(props.row.incidental))])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-form-item', {
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
      "min-width": "15%",
      "label": "海关编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationTypeName",
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
      "min-width": "20%",
      "label": "申报单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationDate",
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
      "prop": "auditStatusName",
      "show-overflow-tooltip": "",
      "min-width": "11%",
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
  }, [_c('span', [_vm._v("预录入编号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.preentryNumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "5"
    }
  }, [_c('span', [_vm._v("海关编号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.customsNumber))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [(_vm.tmpDeclaration.declarationType == 'import') ? _c('span', [_vm._v("进口口岸　")]) : _c('span', [_vm._v("出口口岸　")]), _vm._v(_vm._s(_vm.tmpDeclaration.importOrExportPort))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("备案号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.recordNumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [(_vm.tmpDeclaration.declarationType == 'import') ? _c('span', [_vm._v("进口日期　")]) : _c('span', [_vm._v("出口日期　")]), _vm._v(_vm._s(_vm.tmpDeclaration.importOrExportDate))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("申报日期　")]), _vm._v(_vm._s(_vm.tmpDeclaration.declarationDate))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [_c('span', [_vm._v("经营单位　")]), _vm._v(_vm._s(_vm.tmpDeclaration.managementUnit))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("运输方式　")]), _vm._v(_vm._s(_vm.tmpDeclaration.shippingType))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("运输工具名称　")]), _vm._v(_vm._s(_vm.tmpDeclaration.shippingTools))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("舱单号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.shippingNumbers))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [_c('span', [_vm._v("发货单位　")]), _vm._v(_vm._s(_vm.tmpDeclaration.forwardingUnit))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("贸易方式　")]), _vm._v(_vm._s(_vm.tmpDeclaration.tradingType))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("征免性质　")]), _vm._v(_vm._s(_vm.tmpDeclaration.exemptionNature))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("结汇方式　")]), _vm._v(_vm._s(_vm.tmpDeclaration.settlementType))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('span', [_vm._v("许可证号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.licenseKey))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [(_vm.tmpDeclaration.declarationType == 'import') ? _c('span', [_vm._v("启运国（地区）　")]) : _c('span', [_vm._v("运抵国（地区）　")]), _vm._v(_vm._s(_vm.tmpDeclaration.startOrArrivalCountry))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [(_vm.tmpDeclaration.declarationType == 'import') ? _c('span', [_vm._v("装货港　")]) : _c('span', [_vm._v("指运港　")]), _vm._v(_vm._s(_vm.tmpDeclaration.loadingOrFingerPort))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [(_vm.tmpDeclaration.declarationType == 'import') ? _c('span', [_vm._v("境内目的地　")]) : _c('span', [_vm._v("境内货源地　")]), _vm._v(_vm._s(_vm.tmpDeclaration.destinationOrConsignmentPlace))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('span', [_vm._v("批准文号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.approvalNumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "1"
    }
  }, [_c('span', [_vm._v("成交方式　")]), _vm._v(_vm._s(_vm.tmpDeclaration.transactionMethod))]), _vm._v(" "), _c('td', {
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
  }, [_c('span', [_vm._v("合同协议号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.agreementNumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "1"
    }
  }, [_c('span', [_vm._v("件数　")]), _vm._v(_vm._s(_vm.tmpDeclaration.goodsNumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("包装种类　")]), _vm._v(_vm._s(_vm.tmpDeclaration.packagingType))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("毛重（公斤）　")]), _vm._v(_vm._s(_vm.tmpDeclaration.grossWeight))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("净重（公斤）　")]), _vm._v(_vm._s(_vm.tmpDeclaration.netWeight))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('span', [_vm._v("集装箱号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.containerNumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "5"
    }
  }, [_c('span', [_vm._v("随附单据　")]), _vm._v(_vm._s(_vm.tmpDeclaration.documentSattached))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [(_vm.tmpDeclaration.declarationType == 'import') ? _c('span', [_vm._v("用途　")]) : _c('span', [_vm._v("生产厂家　")]), _vm._v(_vm._s(_vm.tmpDeclaration.purposeOrManufacturer))])]), _vm._v(" "), _c('tr', {
    staticClass: "t2"
  }, [_c('td', {
    attrs: {
      "colspan": "10",
      "valign": "top"
    }
  }, [_c('span', [_vm._v("标记唛码及备注　")]), _vm._v(_vm._s(_vm.tmpDeclaration.shippingMarksAndRemarks))])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "10",
      "valign": "top"
    }
  }, [_c('packing-item', {
    attrs: {
      "packinglistData": _vm.tmpDeclaration.packingList,
      "declarationType": _vm.tmpDeclaration.declarationType,
      "onlyView": true
    },
    on: {
      "update:packinglistData": function($event) {
        _vm.$set(_vm.tmpDeclaration, "packingList", $event)
      }
    }
  })], 1)]), _vm._v(" "), _c('tr', {
    staticClass: "t3"
  }, [_c('td', {
    attrs: {
      "colspan": "10",
      "valign": "top"
    }
  }, [_c('span', [_vm._v("税费征收情况:　")]), _vm._v("应缴税额：" + _vm._s(_vm.tmpDeclaration.taxDue))])]), _vm._v(" "), _c('tr', {
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
  }, [_c('span', [_vm._v("录入员　")]), _vm._v(_vm._s(_vm.tmpDeclaration.entryClerk))]), _vm._v(" "), _c('td', {
    staticClass: "b2",
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("录入单位　")]), _vm._v(_vm._s(_vm.tmpDeclaration.entryUnit))]), _vm._v(" "), _c('td', {
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
  }, [_c('span', [_vm._v("报关员　")]), _vm._v(_vm._s(_vm.tmpDeclaration.customsBroker))]), _vm._v(" "), _c('td', {
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
  }, [_c('span', [_vm._v("单位地址　")]), _vm._v(_vm._s(_vm.tmpDeclaration.unitAddress))]), _vm._v(" "), _c('td', {
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
  }, [_c('span', [_vm._v("申报单位　")]), _vm._v(_vm._s(_vm.tmpDeclaration.declarationUnit))]), _vm._v(" "), _c('td', {
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
  }, [_c('span', [_vm._v("邮编　")]), _vm._v(_vm._s(_vm.tmpDeclaration.zipCode))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("电话　")]), _vm._v(_vm._s(_vm.tmpDeclaration.telephone))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("制填日期　")]), _vm._v(_vm._s(_vm.tmpDeclaration.fillingDate))]), _vm._v(" "), _c('td', {
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
  __webpack_require__(135)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(137),
  /* template */
  __webpack_require__(138),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-79186761",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\form\\auditing.vue"
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


/***/ })

});
//# sourceMappingURL=formUI-auditing.js.map