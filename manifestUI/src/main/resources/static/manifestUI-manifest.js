webpackJsonp([9],{

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(160);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("546529aa", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4966948f\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./manifest.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4966948f\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./manifest.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-4966948f] {\n  padding: 10px;\n}\n.width-300[data-v-4966948f] {\n  width: 300px;\n}\n.width-230[data-v-4966948f] {\n  width: 230px;\n}\n.page-wrap[data-v-4966948f] {\n  margin-top: 20px;\n}\n.page-wrap .page[data-v-4966948f] {\n  float: right;\n}\n.search-bar[data-v-4966948f] {\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-4966948f] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-4966948f] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-4966948f] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.box-card[data-v-4966948f] {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _manifestAPI = __webpack_require__(162);

var _manifestAPI2 = _interopRequireDefault(_manifestAPI);

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

// import './mock/manifest.js'

exports.default = {
  data: function data() {
    return {
      manifestTable: [],
      temmanifestTable: [],
      currentPage: 1,
      total: 50,
      pageSize: 5,
      pageSizes: [5, 10, 15, 20],
      selectedRows: [],
      showDialog: false,
      addOrEdit: 1,
      tmpManifest: {},
      manifestRules: {
        manifestNum: [{ required: true, message: '请输入舱单编号', trigger: 'blur' }],
        receiveCompany: [{ required: true, message: '请输入收件公司', trigger: 'blur' }],
        receivePerson: [{ required: true, message: '请输入收货人', trigger: 'blur' }]
      },
      saveManifestStatus: false,
      search: { manifestNum: '', goodsName: '', receiveCompany: '', receivePerson: '' },
      viewDialog: false,
      manifestGoodInfo: { goodsinfo: '', receiveCompany: '' }
    };
  },

  methods: {
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    handleSearchBtn: function handleSearchBtn() {
      this.manifestTable = Object.assign([], this.temmanifestTable);
      var temManifestnum = this.search.manifestNum;
      var temGoodsname = this.search.goodsName;
      var temReceiveCompany = this.search.receiveCompany;
      var temReceivePerson = this.search.receivePerson;
      if (temManifestnum != '' || temGoodsname != '' || temReceiveCompany != '' || temReceivePerson != '') {
        if (temManifestnum != '') {
          this.manifestTable = this.manifestTable.filter(function (val) {
            return val.manifestNum.indexOf(temManifestnum) != -1;
          });
        }
        if (temGoodsname != '') {
          this.manifestTable = this.manifestTable.filter(function (val) {
            return val.goodsName.indexOf(temGoodsname) != -1;
          });
        }
        if (temReceiveCompany != '') {
          this.manifestTable = this.manifestTable.filter(function (val) {
            return val.receiveCompany.indexOf(temReceiveCompany) != -1;
          });
        }
        if (temReceivePerson != '') {
          this.manifestTable = this.manifestTable.filter(function (val) {
            return val.receivePerson.indexOf(temReceivePerson) != -1;
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
      console.log(this.tmpManifest.manifestNum);
      if (!this.tmpManifest.manifestNum || this.tmpManifest.manifestNum == '' || !this.tmpManifest.receiveCompany || this.tmpManifest.receiveCompany == '' || !this.tmpManifest.receivePerson || this.tmpManifest.receivePerson == '') {
        this.$refs['manifestForm'].resetFields();
      }
      this.showDialog = false;
    },

    //取消
    resetManifest: function resetManifest() {
      this.$refs['manifestForm'].resetFields();
      this.showDialog = false;
    },

    //新建
    addManifest: function addManifest() {
      this.addOrEdit = 1;
      this.tmpManifest = {};
      this.saveManifestStatus = false;
      this.showDialog = true;
    },

    //编辑
    editManifest: function editManifest() {
      this.addOrEdit = 2;
      this.showDialog = true;
      this.saveManifestStatus = false;
      this.tmpManifest = Object.assign({}, this.selectedRows[0]);
    },

    //新建和编辑时保存
    saveManifest: function saveManifest() {
      var _this = this;

      this.$refs['manifestForm'].validate(function (valid) {
        if (valid) {
          _this.saveManifestStatus = true;
          if (_this.addOrEdit == 1) {
            _manifestAPI2.default.addManifest(_this.tmpManifest).then(function (data) {
              if (data.status == 200) {
                _this.getManifestData();
                _this.$message.success(data.data);
              } else {
                _this.$message.error(data.data);
              }
              _this.saveManifestStatus = false;
              _this.showDialog = false;
            });
          } else if (_this.addOrEdit == 2) {
            _manifestAPI2.default.editManifest(_this.tmpManifest.id, _this.tmpManifest).then(function (data) {
              if (data.status == 200) {
                var index = _this.manifestTable.findIndex(function (val) {
                  return val.id == _this.tmpManifest.id;
                });
                _this.manifestTable = [].concat(_toConsumableArray(_this.manifestTable.slice(0, index)), [Object.assign({}, _this.tmpManifest)], _toConsumableArray(_this.manifestTable.slice(index + 1)));
                _this.temmanifestTable = Object.assign([], _this.manifestTable);
                _this.$message.success(data.data);
              } else {
                _this.$message.error(data.data);
              }
              _this.saveManifestStatus = false;
              _this.showDialog = false;
            });
          }
        } else {
          _this.$alert("请填写正确选项", "提示");
          return false;
        }
      });
    },

    //刪除
    deleteManifests: function deleteManifests() {
      var _this2 = this;

      var rowIds = [];
      this.selectedRows.forEach(function (row) {
        rowIds.push(row.id);
      });

      this.$confirm("确认删除所选的数据?", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action == 'confirm') {
            instance.confirmButtonLoading = true;
            return _manifestAPI2.default.deleteManifests(rowIds).then(function (data) {
              if (data.status == 200) {
                _this2.manifestTable = _this2.manifestTable.filter(function (val) {
                  return !rowIds.includes(val.id);
                });
                _this2.temmanifestTable = Object.assign([], _this2.manifestTable);
                _this2.$notify({
                  title: '成功',
                  message: data.data,
                  type: 'success',
                  duration: 2000
                });
              } else {
                _this2.$alert(data.data);
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

    //查看商品
    viewGoods: function viewGoods() {
      var _this3 = this;

      this.viewDialog = true;
      this.manifestGoodInfo = { goodsinfo: [], receiveCompany: '' };
      this.manifestGoodInfo.receiveCompany = this.selectedRows[0].receiveCompany;
      _manifestAPI2.default.viewManifestsGoods(this.selectedRows[0].id).then(function (data) {
        _this3.manifestGoodInfo.goodsinfo = data.data.items;
      });
    },
    getManifestData: function getManifestData() {
      var _this4 = this;

      _manifestAPI2.default.getManifestData().then(function (data) {
        _this4.manifestTable = data.data;
        _this4.temmanifestTable = Object.assign([], _this4.manifestTable);
      });
    }
  },
  created: function created() {
    this.getManifestData();
    // manifestAPI.getManifestData().then(data => {
    //   this.manifestTable = data.data;
    //   this.temmanifestTable = Object.assign([], this.manifestTable);
    // });
  }
};

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var manifestAPI = {
  getManifestData: function getManifestData() {
    return axios.get('manifest/manifest').then(function (res) {
      return res;
    });
  },
  addManifest: function addManifest(manifest) {
    return axios.post('manifest/manifest', manifest).then(function (res) {
      return res;
    });
  },
  editManifest: function editManifest(id, manifest) {
    return axios.put('manifest/manifest', manifest).then(function (res) {
      return res;
    });
  },
  deleteManifests: function deleteManifests(ids) {
    var strIds = ids.join(',');
    return axios.delete('/manifest/manifest/' + strIds).then(function (res) {
      return res;
    });
  },
  viewManifestsGoods: function viewManifestsGoods(id) {
    return axios.get('/manifest/manifest/' + id).then(function (res) {
      return res;
    });
  }
};

exports.default = manifestAPI;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "icon": "plus"
    },
    on: {
      "click": _vm.addManifest
    }
  }, [_vm._v("新建")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "icon": "edit",
      "disabled": _vm.selectedRows.length !== 1
    },
    on: {
      "click": _vm.editManifest
    }
  }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "icon": "delete",
      "disabled": _vm.selectedRows.length === 0
    },
    on: {
      "click": _vm.deleteManifests
    }
  }, [_vm._v("删除")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "icon": "information",
      "disabled": _vm.selectedRows.length !== 1
    },
    on: {
      "click": _vm.viewGoods
    }
  }, [_vm._v("查看商品")])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap"
  }, [_c('div', {
    staticClass: "search-bar fr"
  }, [_vm._v("\n      舱单编号:\n      "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入舱单编号"
    },
    model: {
      value: (_vm.search.manifestNum),
      callback: function($$v) {
        _vm.$set(_vm.search, "manifestNum", $$v)
      },
      expression: "search.manifestNum"
    }
  }), _vm._v("\n      商品：\n      "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入商品"
    },
    model: {
      value: (_vm.search.goodsName),
      callback: function($$v) {
        _vm.$set(_vm.search, "goodsName", $$v)
      },
      expression: "search.goodsName"
    }
  }), _vm._v("\n      收件公司：\n      "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入收件公司"
    },
    model: {
      value: (_vm.search.receiveCompany),
      callback: function($$v) {
        _vm.$set(_vm.search, "receiveCompany", $$v)
      },
      expression: "search.receiveCompany"
    }
  }), _vm._v("\n      收货人：\n      "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入收货人"
    },
    model: {
      value: (_vm.search.receivePerson),
      callback: function($$v) {
        _vm.$set(_vm.search, "receivePerson", $$v)
      },
      expression: "search.receivePerson"
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
      "data": _vm.manifestTable
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
            "label": "舱单编号"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.manifestNum))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "收件公司"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.receiveCompany))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "商品"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.goodsName))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "发货地"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.sendAddress))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "收货人"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.receivePerson))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "电话"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.telephone))])])], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "manifestNum",
      "min-width": "20%",
      "label": "舱单编号 "
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "receiveCompany",
      "min-width": "15%",
      "label": "收件公司"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "goodsName",
      "min-width": "30%",
      "label": "商品"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sendAddress",
      "min-width": "10%",
      "label": "发货地"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "receivePerson",
      "min-width": "10%",
      "label": "收货人"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "telephone",
      "min-width": "15%",
      "label": "电话"
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
    ref: "manifestForm",
    attrs: {
      "label-width": "160px",
      "model": _vm.tmpManifest,
      "rules": _vm.manifestRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "舱单编号：",
      "prop": "manifestNum"
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入舱单编号"
    },
    model: {
      value: (_vm.tmpManifest.manifestNum),
      callback: function($$v) {
        _vm.$set(_vm.tmpManifest, "manifestNum", $$v)
      },
      expression: "tmpManifest.manifestNum"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收件公司：",
      "prop": "receiveCompany"
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入收件公司"
    },
    model: {
      value: (_vm.tmpManifest.receiveCompany),
      callback: function($$v) {
        _vm.$set(_vm.tmpManifest, "receiveCompany", $$v)
      },
      expression: "tmpManifest.receiveCompany"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品："
    }
  }, [_c('el-input', {
    staticClass: "width-230",
    attrs: {
      "placeholder": "请输入商品"
    },
    model: {
      value: (_vm.tmpManifest.goodsName),
      callback: function($$v) {
        _vm.$set(_vm.tmpManifest, "goodsName", $$v)
      },
      expression: "tmpManifest.goodsName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "发货地："
    }
  }, [_c('el-input', {
    staticClass: "width-230",
    attrs: {
      "placeholder": "请输入发货地"
    },
    model: {
      value: (_vm.tmpManifest.sendAddress),
      callback: function($$v) {
        _vm.$set(_vm.tmpManifest, "sendAddress", $$v)
      },
      expression: "tmpManifest.sendAddress"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收货人：",
      "prop": "receivePerson"
    }
  }, [_c('el-input', {
    staticClass: "width-230",
    attrs: {
      "placeholder": "请输入收货人"
    },
    model: {
      value: (_vm.tmpManifest.receivePerson),
      callback: function($$v) {
        _vm.$set(_vm.tmpManifest, "receivePerson", $$v)
      },
      expression: "tmpManifest.receivePerson"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "电话："
    }
  }, [_c('el-input', {
    staticClass: "width-230",
    attrs: {
      "placeholder": "请填写电话"
    },
    model: {
      value: (_vm.tmpManifest.telephone),
      callback: function($$v) {
        _vm.$set(_vm.tmpManifest, "telephone", $$v)
      },
      expression: "tmpManifest.telephone"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": _vm.resetManifest
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "disabled": _vm.saveManifestStatus
    },
    on: {
      "click": _vm.saveManifest
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "查看商品",
      "visible": _vm.viewDialog
    },
    on: {
      "update:visible": function($event) {
        _vm.viewDialog = $event
      }
    }
  }, [_c('el-card', {
    staticClass: "box-card"
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("收件公司：" + _vm._s(_vm.manifestGoodInfo.receiveCompany))])]), _vm._v(" "), _c('div', _vm._l((_vm.manifestGoodInfo.goodsinfo), function(item) {
    return _c('span', {
      key: item.sku
    }, [_vm._v("商品名称：" + _vm._s(item.sku) + "  (数量" + _vm._s(item.quantity) + ")"), _c('br')])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.viewDialog = false
      }
    }
  }, [_vm._v("关 闭")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4966948f", module.exports)
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(159)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(161),
  /* template */
  __webpack_require__(163),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4966948f",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\git\\declarationForm\\mainUI\\source\\views\\setting\\manifest.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] manifest.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4966948f", Component.options)
  } else {
    hotAPI.reload("data-v-4966948f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});