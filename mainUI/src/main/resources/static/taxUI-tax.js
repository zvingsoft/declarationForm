webpackJsonp([9],{

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

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("6b025d2c", content, true);

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".main-content-wrap[data-v-5f04547b]{padding:10px}.width-300[data-v-5f04547b]{width:300px}.width-230[data-v-5f04547b]{width:230px}.page-wrap[data-v-5f04547b]{margin-top:20px}.page-wrap .page[data-v-5f04547b]{float:right}.search-bar[data-v-5f04547b]{padding-bottom:10px}.demo-table-expand[data-v-5f04547b]{font-size:12px}.demo-table-expand label[data-v-5f04547b]{color:#99a9bf}.demo-table-expand .el-form-item[data-v-5f04547b]{margin-right:0;margin-bottom:0;width:45%}", ""]);

// exports


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taxAPI = __webpack_require__(154);

var _taxAPI2 = _interopRequireDefault(_taxAPI);

var _skuAPI = __webpack_require__(101);

var _skuAPI2 = _interopRequireDefault(_skuAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './mock/tax.js';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      search: { taxNum: '', taxGoodsType: '' },
      SKUData: []
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
            return val.skuname.indexOf(temTaxGoodsType) != -1;
          });
        }
      }
      this.total = this.taxTable.length;
    },
    sizeChangeHandler: function sizeChangeHandler(val) {
      this.pageSize = val;
    },
    currentChangeHandler: function currentChangeHandler(val) {
      this.currentPage = val;
    },

    //关闭事件
    closeAddOrEditDialog: function closeAddOrEditDialog() {
      if (!this.tmpTax.taxNum || this.tmpTax.taxNum == '') {
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
      var _this = this;

      this.addOrEdit = 1;
      this.tmpTax = {};
      this.saveTaxStatus = false;
      this.showDialog = true;
      _skuAPI2.default.getSKU().then(function (data) {
        _this.SKUData = data;
      });
    },

    //单机
    rowClick: function rowClick(row, event, column) {
      if (column.type != 'selection') {
        this.$refs.taxTable.clearSelection();
      }
      this.$refs.taxTable.toggleRowSelection(row);
    },

    //双击
    dblclickTax: function dblclickTax(row) {
      var _this2 = this;

      this.addOrEdit = 2;
      this.saveTaxStatus = false;
      this.tmpTax = Object.assign({}, row);
      this.showDialog = true;
      _skuAPI2.default.getSKU().then(function (data) {
        _this2.SKUData = data;
      });
    },

    //链接
    lookClick: function lookClick(row) {
      var _this3 = this;

      this.addOrEdit = 2;
      this.saveTaxStatus = false;
      this.tmpTax = Object.assign({}, row);
      this.showDialog = true;
      _skuAPI2.default.getSKU().then(function (data) {
        _this3.SKUData = data;
      });
    },

    //编辑
    editTax: function editTax() {
      var _this4 = this;

      this.addOrEdit = 2;
      this.saveTaxStatus = false;
      this.tmpTax = Object.assign({}, this.selectedRows[0]);
      this.showDialog = true;
      _skuAPI2.default.getSKU().then(function (data) {
        _this4.SKUData = data;
      });
    },

    //新建和编辑时保存
    saveTax: function saveTax() {
      var _this5 = this;

      this.$refs['taxForm'].validate(function (valid) {
        if (valid) {
          var temRate = _this5.tmpTax.rate;
          if (temRate && temRate != '') {
            if (isNaN(temRate)) {
              _this5.$alert('税率必须是数字！', '提示');
              return;
            }
          }
          _this5.saveTaxStatus = true;
          if (_this5.tmpTax.rate && _this5.tmpTax.rate != '') {}
          if (_this5.addOrEdit == 1) {
            _taxAPI2.default.addTax(_this5.tmpTax).then(function (data) {
              if (data.status == 1) {
                _this5.getTaxData();
                _this5.$message.success(data.message);
              } else {
                _this5.$message.error(data.message);
              }
              _this5.saveTaxStatus = false;
              _this5.showDialog = false;
            });
          } else if (_this5.addOrEdit == 2) {
            _taxAPI2.default.editTax(_this5.tmpTax.id, _this5.tmpTax).then(function (data) {
              if (data.status == 1) {
                _this5.getTaxData();
                _this5.temtaxTable = Object.assign([], _this5.taxTable);
                _this5.$message.success(data.message);
              } else {
                _this5.$message.error(data.message);
              }
              _this5.saveTaxStatus = false;
              _this5.showDialog = false;
            });
          }
        } else {
          _this5.$alert('请填写正确选项', '提示');
          return false;
        }
      });
    },
    deleteTaxs: function deleteTaxs() {
      var _this6 = this;

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
                _this6.taxTable = _this6.taxTable.filter(function (val) {
                  return !rowIds.includes(val.id);
                });
                _this6.temtaxTable = Object.assign([], _this6.taxTable);
                _this6.total = _this6.taxTable.length;
                _this6.$notify({
                  title: '成功',
                  message: data.message,
                  type: 'success',
                  duration: 2000
                });
              } else {
                _this6.$alert(data.message);
              }
              instance.confirmButtonLoading = false;
              done(data);
            });
          } else {
            done();
          }
        }
      }).catch(function () {
        _this6.$notify.info({
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
      var _this7 = this;

      _taxAPI2.default.getTaxData().then(function (data) {
        _this7.taxTable = data.data;
        _this7.temtaxTable = Object.assign([], _this7.taxTable);
        _this7.total = _this7.taxTable.length;
      });
    },
    selectSku: function selectSku(val) {
      var skuname = '';
      this.SKUData.forEach(function (row) {
        if (row.sn == val) {
          skuname = row.name;
          return;
        }
      });
      this.tmpTax.skuname = skuname;
    }
  },
  created: function created() {
    this.getTaxData();
  }
};

/***/ }),

/***/ 154:
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

/***/ 155:
/***/ (function(module, exports) {

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
  }), _vm._v("\n      商品名称：\n      "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入商品名称"
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
    ref: "taxTable",
    attrs: {
      "data": _vm.taxTable
    },
    on: {
      "selection-change": _vm.onSelectionChange,
      "row-click": _vm.rowClick,
      "row-dblclick": _vm.dblclickTax
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
            "label": "商品名称"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.skuname))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "税率%"
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
      "min-width": "25%",
      "label": "税号"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('a', {
          staticClass: "a-btn",
          on: {
            "click": function($event) {
              _vm.lookClick(scope.row)
            }
          }
        }, [_vm._v(_vm._s(scope.row.taxNum))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "skuname",
      "min-width": "35%",
      "label": "商品名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "rate",
      "min-width": "10%",
      "label": "税率%"
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
    staticClass: "width-230",
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
      "label": "商品："
    }
  }, [_c('el-select', {
    staticClass: "width-230",
    attrs: {
      "filterable": "",
      "placeholder": "请选择一种商品"
    },
    on: {
      "change": _vm.selectSku
    },
    model: {
      value: (_vm.tmpTax.sku),
      callback: function($$v) {
        _vm.$set(_vm.tmpTax, "sku", $$v)
      },
      expression: "tmpTax.sku"
    }
  }, _vm._l((_vm.SKUData), function(item) {
    return _c('el-option', {
      key: item.sn,
      attrs: {
        "label": item.name,
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
      "label": "税率%："
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

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(151)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(153),
  /* template */
  __webpack_require__(155),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5f04547b",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});