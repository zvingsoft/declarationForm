webpackJsonp([6],{

/***/ 106:
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

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(109)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(111),
  /* template */
  __webpack_require__(112),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-47dbc956",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\git\\declarationForm\\mainUI\\source\\views\\setting\\components\\companyDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] companyDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47dbc956", Component.options)
  } else {
    hotAPI.reload("data-v-47dbc956", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(110);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("628fc97c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47dbc956\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./companyDetail.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47dbc956\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./companyDetail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _companyAPI = __webpack_require__(106);

var _companyAPI2 = _interopRequireDefault(_companyAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      company: {}
    };
  },

  methods: {
    esc: function esc() {
      this.$emit('update:show', false);
    }
  },
  //由于有些列表已将企业数据获取完整，所以可以直接传值，减少请求接口次数
  //监听值，如果只传了企业id过来，则去请求接口获取数据
  watch: {
    id: function id() {
      var _this = this;

      if (this.id > 0) {
        _companyAPI2.default.getCompanyDetail(this.id).then(function (data) {
          if (data.status == 200) {
            _this.company = data.data;
          } else {
            _this.$message.error(data.message);
          }
        });
      }
    }
  },
  props: ['show', 'id']
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

// require('../mock/company.js')

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-dialog', {
    attrs: {
      "size": "tiny",
      "title": "查看企业信息",
      "visible": _vm.show
    },
    on: {
      "update:visible": function($event) {
        _vm.show = $event
      },
      "close": _vm.esc
    }
  }, [_c('el-form', {
    attrs: {
      "label-width": "160px",
      "model": _vm.company
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "名称："
    }
  }, [_vm._v("\n        " + _vm._s(_vm.company.name) + "\n      ")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "地址："
    }
  }, [_vm._v("\n        " + _vm._s(_vm.company.address) + "\n      ")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "电话："
    }
  }, [_vm._v("\n        " + _vm._s(_vm.company.phone) + "\n      ")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "传真："
    }
  }, [_vm._v("\n        " + _vm._s(_vm.company.fax) + "\n      ")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "邮政编码："
    }
  }, [_vm._v("\n        " + _vm._s(_vm.company.postCode) + "\n      ")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "银行信用评级："
    }
  }, [_vm._v("\n        " + _vm._s(_vm.company.bankCreditRating) + "\n      ")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "添加人"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.company.addUser))])]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "添加时间"
    }
  }, [_c('span', [_vm._v(_vm._s(new Date(_vm.company.addTime).toLocaleString()))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.esc
    }
  }, [_vm._v("关 闭")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-47dbc956", module.exports)
  }
}

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("456b1cb3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-63cc7c4d\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./company.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-63cc7c4d\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./company.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-63cc7c4d] {\n  padding: 10px;\n}\n.search-bar[data-v-63cc7c4d] {\n  padding: 5px 12px;\n}\n.company-table-expand[data-v-63cc7c4d] {\n  font-size: 0;\n}\n.company-table-expand label[data-v-63cc7c4d] {\n  width: 90px;\n  color: #99a9bf;\n}\n.company-table-expand .el-form-item[data-v-63cc7c4d] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 50%;\n}\n.page-wrap[data-v-63cc7c4d] {\n  margin-top: 20px;\n  margin-right: 20px;\n}\n.page-wrap .page[data-v-63cc7c4d] {\n  float: right;\n}\n.red-color[data-v-63cc7c4d] {\n  color: #FF4949;\n}\n.green-color[data-v-63cc7c4d] {\n  color: #13CE66;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _companyAPI = __webpack_require__(106);

var _companyAPI2 = _interopRequireDefault(_companyAPI);

var _companyDetail = __webpack_require__(108);

var _companyDetail2 = _interopRequireDefault(_companyDetail);

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

// require('../../utils/company.js')
exports.default = {
  data: function data() {
    return {
      dataLoading: true,
      companys: [],
      name: '',
      id: '',
      tmpCompany: {},
      addOperate: true,
      saveStatus: false,
      showDialog: false,
      showCompanyDialog: false,
      showConttonQuotaDialog: false,
      saveConttonQuotaStatus: false,
      selectedRows: [],
      total: 0,
      pageSize: 15,
      currentPage: 1,
      pageSizes: [15, 20, 30, 40, 50]
    };
  },

  methods: {
    //设置棉花配额
    setConttonQuotaClick: function setConttonQuotaClick() {
      this.showConttonQuotaDialog = true;
      this.tmpCompany = Object.assign({}, this.selectedRows[0]);
      this.saveConttonQuotaStatus = false;
    },

    //保存棉花配额
    saveConttonQuota: function saveConttonQuota() {
      var _this = this;

      this.saveConttonQuotaStatus = true;
      _companyAPI2.default.setConttonQuota(this.tmpCompany).then(function (data) {
        if (data.status == 1) {
          _this.list();
          _this.$message.success(data.data);
        } else {
          _this.$message.error(data.data);
        }
        _this.saveConttonQuotaStatus = false;
        _this.showConttonQuotaDialog = false;
      });
    },

    //单击一行选中当前行、单击多选框增加选中当前行
    onCompanyTableRowClick: function onCompanyTableRowClick(row, event, column) {
      if (column.type != "selection") {
        this.$refs.companyTable.clearSelection();
      }
      this.$refs.companyTable.toggleRowSelection(row);
    },

    //选择改变
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },

    //分页大小改变
    sizeChangeHandler: function sizeChangeHandler(val) {
      this.pageSize = val;
      this.list();
    },

    //列表
    list: function list() {
      var _this2 = this;

      this.dataLoading = true;
      _companyAPI2.default.getCompany(this.name, this.currentPage, this.pageSize).then(function (data) {
        _this2.companys = data.data;
        _this2.total = data.total;
        _this2.dataLoading = false;
      });
    },

    //新增
    addClick: function addClick() {
      this.addOperate = true;
      this.tmpCompany = {};
      this.saveStatus = false;
      this.showDialog = true;
    },

    //编辑
    editClick: function editClick() {
      this.addOperate = false;
      this.tmpCompany = Object.assign({}, this.selectedRows[0]);;
      this.saveStatus = false;
      this.showDialog = true;
    },

    //删除
    deleteClick: function deleteClick() {
      var _this3 = this;

      var rowIds = this.getSelectedIds().join(',');
      this.$confirm("确认删除所选的数据?", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action == 'confirm') {
            instance.confirmButtonLoading = true;
            return _companyAPI2.default.deleteCompany(rowIds).then(function (data) {
              if (data.status == 200) {
                _this3.list();
                _this3.$notify({
                  title: '成功',
                  message: data.data,
                  type: 'success',
                  duration: 2000
                });
              } else {
                _this3.$alert(data.data);
              }
              instance.confirmButtonLoading = false;
              done(data);
            });
          } else {
            done();
          }
        }
      }).catch(function () {
        _this3.$notify.info({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        });
      });
    },

    //查看公司信息
    viewCompanyClick: function viewCompanyClick(id) {
      this.showCompanyDialog = true;
      this.id = id;
    },

    //保存
    save: function save() {
      var _this4 = this;

      this.saveStatus = true;
      if (this.addOperate) {
        _companyAPI2.default.addCompany(this.tmpCompany).then(function (data) {
          if (data.status == 200) {
            _this4.list();
            _this4.$message.success(data.data);
          } else {
            _this4.$message.error(data.data);
          }
          _this4.saveStatus = false;
          _this4.showDialog = false;
        });
      } else {
        _companyAPI2.default.editCompany(this.tmpCompany).then(function (data) {
          if (data.status == 200) {
            _this4.list();
            _this4.$message.success(data.data);
          } else {
            _this4.$message.error(data.data);
          }
          _this4.saveStatus = false;
          _this4.showDialog = false;
        });
      }
    },

    //获取选中id数组
    getSelectedIds: function getSelectedIds() {
      var rowIds = [];
      this.selectedRows.forEach(function (row) {
        rowIds.push(row.id);
      });
      return rowIds;
    }
  },
  created: function created() {
    this.list();
  },

  components: {
    'company-detail': _companyDetail2.default
  }
};

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "type": "primary",
      "plain": true
    },
    on: {
      "click": _vm.addClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 新建")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "type": "primary",
      "plain": true,
      "disabled": _vm.selectedRows.length !== 1
    },
    on: {
      "click": _vm.editClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "type": "primary",
      "plain": true,
      "disabled": _vm.selectedRows.length === 0
    },
    on: {
      "click": _vm.deleteClick
    }
  }, [_c('i', {
    staticClass: "fa fa-minus",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 删除")])], 1), _vm._v(" "), _c('div', {
    staticClass: "search-bar fr"
  }, [_c('span', [_vm._v("名称")]), _vm._v(" \n    "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入企业名称"
    },
    model: {
      value: (_vm.companyName),
      callback: function($$v) {
        _vm.companyName = $$v
      },
      expression: "companyName"
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.list
    }
  }, [_vm._v("搜索")])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap"
  }, [_c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.dataLoading),
      expression: "dataLoading"
    }],
    ref: "companyTable",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.companys
    },
    on: {
      "selection-change": _vm.onSelectionChange,
      "row-click": _vm.onCompanyTableRowClick
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "50"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "type": "expand"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('el-form', {
          staticClass: "company-table-expand",
          attrs: {
            "label-position": "left",
            "inline": ""
          }
        }, [_c('el-form-item', {
          attrs: {
            "label": "名称"
          }
        }, [_c('el-button', {
          attrs: {
            "type": "text"
          },
          on: {
            "click": function($event) {
              _vm.viewCompanyClick(props.row.id)
            }
          }
        }, [_vm._v(_vm._s(props.row.name))])], 1), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "银行信用评级"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.bankCreditRating))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "地址"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.address))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "电话"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.phone))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "传真"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.fax))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "邮政编码"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.postCode))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "添加时间"
          }
        }, [_c('span', [_vm._v(_vm._s(new Date(props.row.addTime).toLocaleString()))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "添加人"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.addUser))])])], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "名称"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('el-button', {
          attrs: {
            "type": "text"
          },
          on: {
            "click": function($event) {
              _vm.viewCompanyClick(props.row.id)
            }
          }
        }, [_vm._v(_vm._s(props.row.name))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "银行信用评级",
      "prop": "bankCreditRating"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "地址",
      "prop": "address",
      "show-overflow-tooltip": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "电话",
      "prop": "phone"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "传真",
      "prop": "fax"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "邮政编码",
      "prop": "postCode"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "添加时间"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_vm._v(_vm._s(new Date(props.row.addTime).toLocaleString()))]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "page-wrap"
  }, [_c('el-pagination', {
    staticClass: "page",
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": _vm.pageSizes,
      "page-size": _vm.pageSize,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.total
    },
    on: {
      "size-change": _vm.sizeChangeHandler,
      "current-change": _vm.list,
      "update:currentPage": function($event) {
        _vm.currentPage = $event
      }
    }
  })], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.addOperate ? '新建' : '编辑',
      "visible": _vm.showDialog
    },
    on: {
      "update:visible": function($event) {
        _vm.showDialog = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "label-width": "160px",
      "model": _vm.tmpCompany
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "名称："
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入企业名称"
    },
    model: {
      value: (_vm.tmpCompany.name),
      callback: function($$v) {
        _vm.$set(_vm.tmpCompany, "name", $$v)
      },
      expression: "tmpCompany.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "银行信用评级："
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入银行信用评级"
    },
    model: {
      value: (_vm.tmpCompany.bankCreditRating),
      callback: function($$v) {
        _vm.$set(_vm.tmpCompany, "bankCreditRating", $$v)
      },
      expression: "tmpCompany.bankCreditRating"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "地址："
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入地址："
    },
    model: {
      value: (_vm.tmpCompany.address),
      callback: function($$v) {
        _vm.$set(_vm.tmpCompany, "address", $$v)
      },
      expression: "tmpCompany.address"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "电话："
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入电话"
    },
    model: {
      value: (_vm.tmpCompany.phone),
      callback: function($$v) {
        _vm.$set(_vm.tmpCompany, "phone", $$v)
      },
      expression: "tmpCompany.phone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "传真："
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入传真"
    },
    model: {
      value: (_vm.tmpCompany.fax),
      callback: function($$v) {
        _vm.$set(_vm.tmpCompany, "fax", $$v)
      },
      expression: "tmpCompany.fax"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "邮政编码："
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入邮政编码"
    },
    model: {
      value: (_vm.tmpCompany.postCode),
      callback: function($$v) {
        _vm.$set(_vm.tmpCompany, "postCode", $$v)
      },
      expression: "tmpCompany.postCode"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.showDialog = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "disabled": _vm.saveStatus
    },
    on: {
      "click": _vm.save
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('company-detail', {
    attrs: {
      "id": _vm.id,
      "show": _vm.showCompanyDialog
    },
    on: {
      "update:show": function($event) {
        _vm.showCompanyDialog = $event
      }
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-63cc7c4d", module.exports)
  }
}

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(174)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(176),
  /* template */
  __webpack_require__(177),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-63cc7c4d",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\git\\declarationForm\\mainUI\\source\\views\\setting\\company.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] company.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63cc7c4d", Component.options)
  } else {
    hotAPI.reload("data-v-63cc7c4d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});