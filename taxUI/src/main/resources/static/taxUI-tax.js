webpackJsonp([7],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("6c9ce31f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f04547b\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tax.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f04547b\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tax.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-5f04547b] {\n  padding: 10px;\n}\n.width-300[data-v-5f04547b] {\n  width: 300px;\n}\n.width-230[data-v-5f04547b] {\n  width: 230px;\n}\n.page-wrap[data-v-5f04547b] {\n  margin-top: 20px;\n}\n.page-wrap .page[data-v-5f04547b] {\n  float: right;\n}\n.search-bar[data-v-5f04547b] {\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-5f04547b] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-5f04547b] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-5f04547b] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n", ""]);

// exports


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taxAPI = __webpack_require__(139);

var _taxAPI2 = _interopRequireDefault(_taxAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './mock/tax.js';

exports.default = {
  data: function data() {
    return {
      taxTable: [],
      temtaxTable: [],
      currentPage: 1,
      total: 50,
      pageSize: 5,
      pageSizes: [5, 10, 15, 20],
      selectedRows: [],
      showDialog: false,
      addOrEdit: 1,
      tmpTax: {},
      taxRules: {
        taxNum: [{ required: true, message: '请输入税号', trigger: 'blur' }],
        taxGoodsType: [{ required: true, message: '请输入物品类型', trigger: 'blur' }]
      },
      saveTaxStatus: false,
      search: { taxNum: '', taxGoodsType: '' }
    };
  },

  methods: {
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    handleSearchBtn: function handleSearchBtn() {
      // this.currentPage=1;
      // this.getTaxData();
      this.taxTable = Object.assign([], this.temtaxTable);
      var temTaxnum = this.search.taxNum;
      var temTaxGoodsType = this.search.taxGoodsType;
      if (temTaxnum != '' || temTaxGoodsType != '') {
        if (temTaxnum != '') {
          this.taxTable = this.taxTable.filter(function (val) {
            return val.taxNum.indexOf(temTaxnum) != -1;
          });
        }
        if (temTaxGoodsType != '') {
          this.taxTable = this.taxTable.filter(function (val) {
            return val.taxGoodsType.indexOf(temTaxGoodsType) != -1;
          });
        }
      }
    },
    sizeChangeHandler: function sizeChangeHandler(val) {
      this.pageSize = val;
    },
    currentChangeHandler: function currentChangeHandler(val) {
      this.currentPage = val;
    },

    //关闭事件
    closeAddOrEditDialog: function closeAddOrEditDialog() {
      if (!this.tmpTax.taxNum || this.tmpTax.taxNum == '' || !this.tmpTax.taxGoodsType || this.tmpTax.taxGoodsType == '') {
        this.$refs['taxForm'].resetFields();
      }
      this.showDialog = false;
    },

    //取消
    resetTax: function resetTax() {
      this.$refs['taxForm'].resetFields();
      this.showDialog = false;
    },

    //新建
    addTax: function addTax() {
      this.addOrEdit = 1;
      this.tmpTax = {};
      this.saveTaxStatus = false;
      this.showDialog = true;
    },

    //编辑
    editTax: function editTax() {
      this.addOrEdit = 2;
      this.saveTaxStatus = false;
      this.tmpTax = Object.assign({}, this.selectedRows[0]);
      this.showDialog = true;
    },

    //新建和编辑时保存
    saveTax: function saveTax() {
      var _this = this;

      this.$refs['taxForm'].validate(function (valid) {
        if (valid) {
          _this.saveTaxStatus = true;
          if (_this.addOrEdit == 1) {
            _taxAPI2.default.addTax(_this.tmpTax).then(function (data) {
              if (data.status == 1) {
                _this.getTaxData();
                _this.$message.success(data.message);
              } else {
                _this.$message.error(data.message);
              }
              _this.saveTaxStatus = false;
              _this.showDialog = false;
            });
          } else if (_this.addOrEdit == 2) {
            _taxAPI2.default.editTax(_this.tmpTax.id, _this.tmpTax).then(function (data) {
              if (data.status == 1) {
                _this.getTaxData();
                _this.temtaxTable = Object.assign([], _this.taxTable);
                _this.$message.success(data.message);
              } else {
                _this.$message.error(data.message);
              }
              _this.saveTaxStatus = false;
              _this.showDialog = false;
            });
          }
        } else {
          _this.$alert('请填写正确选项', '提示');
          return false;
        }
      });
    },
    deleteTaxs: function deleteTaxs() {
      var _this2 = this;

      var rowIds = [];
      this.selectedRows.forEach(function (row) {
        rowIds.push(row.id);
      });

      this.$confirm('确认删除所选的数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action == 'confirm') {
            instance.confirmButtonLoading = true;
            return _taxAPI2.default.deleteTaxs(rowIds).then(function (data) {
              if (data.status == 1) {
                _this2.taxTable = _this2.taxTable.filter(function (val) {
                  return !rowIds.includes(val.id);
                });
                _this2.temtaxTable = Object.assign([], _this2.taxTable);
                _this2.$notify({
                  title: '成功',
                  message: data.message,
                  type: 'success',
                  duration: 2000
                });
              } else {
                _this2.$alert(data.message);
              }
              instance.confirmButtonLoading = false;
              done(data);
            });
          } else {
            done();
          }
        }
      }).catch(function () {
        _this2.$notify.info({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        });
      });
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
    getTaxData: function getTaxData() {
      var _this3 = this;

      _taxAPI2.default.getTaxData().then(function (data) {
        _this3.taxTable = data.data;
        _this3.temtaxTable = Object.assign([], _this3.taxTable);
      });
    }
  },
  created: function created() {
    this.getTaxData();
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

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var taxAPI = {
  getTaxData: function getTaxData() {
    return axios.get('/tax/taxrate').then(function (res) {
      return res;
    });
  },
  addTax: function addTax(tax) {
    return axios.post('/tax/taxrate', tax).then(function (res) {
      return res.data;
    });
  },
  editTax: function editTax(id, tax) {
    return axios.put('/tax/taxrate', tax).then(function (res) {
      return res.data;
    });
  },
  deleteTaxs: function deleteTaxs(ids) {
    var strIds = ids.join(',');
    return axios.delete('/tax/taxrate/' + strIds).then(function (res) {
      return res.data;
    });
  }
};

exports.default = taxAPI;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "icon": "plus"
    },
    on: {
      "click": _vm.addTax
    }
  }, [_vm._v("新建")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "icon": "edit",
      "disabled": _vm.selectedRows.length !== 1
    },
    on: {
      "click": _vm.editTax
    }
  }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "icon": "delete",
      "disabled": _vm.selectedRows.length === 0
    },
    on: {
      "click": _vm.deleteTaxs
    }
  }, [_vm._v("删除")])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap"
  }, [_c('div', {
    staticClass: "search-bar fr"
  }, [_vm._v("\n      税号:\n      "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入税号"
    },
    model: {
      value: (_vm.search.taxNum),
      callback: function($$v) {
        _vm.$set(_vm.search, "taxNum", $$v)
      },
      expression: "search.taxNum"
    }
  }), _vm._v("\n      物品类别：\n      "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入物品类别"
    },
    model: {
      value: (_vm.search.taxGoodsType),
      callback: function($$v) {
        _vm.$set(_vm.search, "taxGoodsType", $$v)
      },
      expression: "search.taxGoodsType"
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
      "click": _vm.handleSearchBtn
    }
  }, [_vm._v("搜索")])], 1), _vm._v(" "), _c('div', [_c('el-table', {
    attrs: {
      "data": _vm.taxTable
    },
    on: {
      "selection-change": _vm.onSelectionChange
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
            "label-width": "120px"
          }
        }, [_c('el-form-item', {
          attrs: {
            "label": "税号"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.taxNum))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "物品类型"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.taxGoodsType))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "单位"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.unit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "税率"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.rate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "免征额"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.exemption))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "最后修改"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.modifyDate))])]), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "100%"
          },
          attrs: {
            "label": "范围"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.range))])])], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "taxNum",
      "min-width": "20%",
      "label": "税号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "taxGoodsType",
      "min-width": "30%",
      "label": "物品类型"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "unit",
      "min-width": "10%",
      "label": "单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "rate",
      "min-width": "10%",
      "label": "税率"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "exemption",
      "min-width": "10%",
      "label": "免征额"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "modifyDate",
      "min-width": "20%",
      "label": "最后修改"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "page-wrap"
  }, [_c('el-pagination', {
    staticClass: "page",
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": _vm.pageSizes,
      "page-size": _vm.pageSize,
      "total": _vm.total,
      "layout": "total,sizes, prev, pager, next"
    },
    on: {
      "size-change": _vm.sizeChangeHandler,
      "current-change": _vm.currentChangeHandler,
      "update:currentPage": function($event) {
        _vm.currentPage = $event
      }
    }
  })], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.addOrEdit == 1 ? '新建' : '编辑',
      "visible": _vm.showDialog
    },
    on: {
      "update:visible": function($event) {
        _vm.showDialog = $event
      },
      "close": _vm.closeAddOrEditDialog
    }
  }, [_c('el-form', {
    ref: "taxForm",
    attrs: {
      "label-width": "160px",
      "model": _vm.tmpTax,
      "rules": _vm.taxRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "税号：",
      "prop": "taxNum"
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入税号"
    },
    model: {
      value: (_vm.tmpTax.taxNum),
      callback: function($$v) {
        _vm.$set(_vm.tmpTax, "taxNum", $$v)
      },
      expression: "tmpTax.taxNum"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "物品类型：",
      "prop": "taxGoodsType"
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入物品类型"
    },
    model: {
      value: (_vm.tmpTax.taxGoodsType),
      callback: function($$v) {
        _vm.$set(_vm.tmpTax, "taxGoodsType", $$v)
      },
      expression: "tmpTax.taxGoodsType"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单位："
    }
  }, [_c('el-input', {
    staticClass: "width-230",
    attrs: {
      "placeholder": "请输入单位"
    },
    model: {
      value: (_vm.tmpTax.unit),
      callback: function($$v) {
        _vm.$set(_vm.tmpTax, "unit", $$v)
      },
      expression: "tmpTax.unit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "税率："
    }
  }, [_c('el-input', {
    staticClass: "width-230",
    attrs: {
      "placeholder": "请输入税率"
    },
    model: {
      value: (_vm.tmpTax.rate),
      callback: function($$v) {
        _vm.$set(_vm.tmpTax, "rate", $$v)
      },
      expression: "tmpTax.rate"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "免征额："
    }
  }, [_c('el-input-number', {
    staticClass: "width-230",
    attrs: {
      "min": 0
    },
    model: {
      value: (_vm.tmpTax.exemption),
      callback: function($$v) {
        _vm.$set(_vm.tmpTax, "exemption", $$v)
      },
      expression: "tmpTax.exemption"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "范围："
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请填写范围",
      "type": "textarea",
      "autosize": "true"
    },
    model: {
      value: (_vm.tmpTax.range),
      callback: function($$v) {
        _vm.$set(_vm.tmpTax, "range", $$v)
      },
      expression: "tmpTax.range"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": _vm.resetTax
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "disabled": _vm.saveTaxStatus
    },
    on: {
      "click": _vm.saveTax
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f04547b", module.exports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(136)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(138),
  /* template */
  __webpack_require__(140),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5f04547b",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\git\\declarationForm\\mainUI\\source\\views\\setting\\tax.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tax.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f04547b", Component.options)
  } else {
    hotAPI.reload("data-v-5f04547b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});