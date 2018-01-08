webpackJsonp([5],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(185)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(187),
  /* template */
  __webpack_require__(189),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6ee90e3d",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 102:
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

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(112)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(114),
  /* template */
  __webpack_require__(115),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-47dbc956",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("13a00501", content, true);

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _companyAPI = __webpack_require__(102);

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

/***/ 115:
/***/ (function(module, exports) {

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

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(186);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("19e54f40", content, true);

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".main-content-wrap[data-v-6ee90e3d]{padding:10px}.search-bar[data-v-6ee90e3d]{padding:5px 12px}.cottonquota-table-expand[data-v-6ee90e3d]{font-size:0}.cottonquota-table-expand label[data-v-6ee90e3d]{width:90px;color:#99a9bf}.cottonquota-table-expand .el-form-item[data-v-6ee90e3d]{margin-right:0;margin-bottom:0;width:50%}.page-wrap[data-v-6ee90e3d]{margin-top:20px;margin-right:20px}.page-wrap .page[data-v-6ee90e3d]{float:right}.red-color[data-v-6ee90e3d]{color:#ff4949}.green-color[data-v-6ee90e3d]{color:#13ce66}", ""]);

// exports


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _companyAPI = __webpack_require__(102);

var _companyAPI2 = _interopRequireDefault(_companyAPI);

var _cottonQuotaAPI = __webpack_require__(188);

var _cottonQuotaAPI2 = _interopRequireDefault(_cottonQuotaAPI);

var _companyDetail = __webpack_require__(111);

var _companyDetail2 = _interopRequireDefault(_companyDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      dataLoading: true,
      cottonquotas: [],
      number: '',
      companyName: '',
      tmpCottonQuota: {},
      addOperate: true,
      saveStatus: false,
      showDialog: false,
      showCompanyDialog: false,
      selectedRows: [],
      companys: {},
      companyId: 0,
      tmpCompany: {},
      total: 0,
      pageSize: 15,
      currentPage: 1,
      pageSizes: [15, 20, 30, 40, 50]
    };
  },

  methods: {
    //审核
    auditClick: function auditClick(pass, ids) {
      var _this = this;

      if (ids == undefined || ids == '') {
        ids = this.getSelectedIds().join(',');
      }
      _cottonQuotaAPI2.default.auditCottonQuota(pass, ids).then(function (data) {
        if (data.status == 200) {
          _this.$message.success(data.data);
          _this.list();
        } else {
          _this.$message.error(data.data);
        }
      });
    },

    //单击一行选中当前行、单击多选框增加选中当前行
    onCottonquotaTableRowClick: function onCottonquotaTableRowClick(row, event, column) {
      if (column.type != "selection") {
        this.$refs.cottonquotaTable.clearSelection();
      }
      this.$refs.cottonquotaTable.toggleRowSelection(row);
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

      this.dataLoading = false;
      _cottonQuotaAPI2.default.getCottonQuota(this.number, this.companyName, this.currentPage, this.pageSize).then(function (data) {
        _this2.cottonquotas = data.data;
        if (_this2.number != '') {
          _this2.cottonquotas = _this2.cottonquotas.filter(function (val) {
            return val.number.indexOf(_this2.number) != -1;
          });
        }
        if (_this2.companyName != '') {
          _this2.cottonquotas = _this2.cottonquotas.filter(function (val) {
            return val.companyName.indexOf(_this2.companyName) != -1;
          });
        }
        _this2.total = _this2.cottonquotas.length;
        _this2.dataLoading = false;
      });
    },

    //新增
    addClick: function addClick() {
      this.loadCompany();
      this.addOperate = true;
      this.tmpCottonQuota = {};
      this.saveStatus = false;
      this.showDialog = true;
    },

    //编辑
    editClick: function editClick() {
      this.addOperate = false;
      this.tmpCottonQuota = Object.assign({}, this.selectedRows[0]);
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
            return _cottonQuotaAPI2.default.deleteCottonQuota(rowIds).then(function (data) {
              if (data.status == 200) {
                _this3.list();
                _this3.$notify({
                  title: '成功',
                  message: data.data,
                  type: 'success',
                  duration: 2000
                });
              } else {
                _this3.$alert(data);
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
    viewCompanyClick: function viewCompanyClick(companyId) {
      this.showCompanyDialog = true;
      this.companyId = companyId;
    },

    //保存
    save: function save() {
      var _this4 = this;

      this.saveStatus = true;
      if (this.addOperate) {
        this.tmpCottonQuota.companyId = this.tmpCompany.id;
        this.tmpCottonQuota.companyName = this.tmpCompany.name;
        this.tmpCompany = {};
        _cottonQuotaAPI2.default.addCottonQuota(this.tmpCottonQuota).then(function (data) {
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
        _cottonQuotaAPI2.default.editCottonQuota(this.tmpCottonQuota).then(function (data) {
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
    },

    //加载企业列表共选择
    loadCompany: function loadCompany() {
      var _this5 = this;

      if (!this.companys.length > 0) {
        _companyAPI2.default.getCompany().then(function (data) {
          _this5.companys = data.data;
        });
      }
    }
  },
  created: function created() {
    this.list();
  },

  components: {
    'company-detail': _companyDetail2.default
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// require('./mock/cottonQuota.js')
// require('./mock/company.js')

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cottonQuotaAPI = {
  getCottonQuota: function getCottonQuota(number, companyName, pageIndex, pageSize) {
    return axios.get('/cottonQuota/cottonQuota', {
      params: {
        number: number,
        companyName: companyName,
        pageIndex: pageIndex,
        pageSize: pageSize
      }
    }).then(function (res) {
      return res;
    });
  },
  addCottonQuota: function addCottonQuota(cottonquota) {
    return axios.post('/cottonQuota/cottonQuota', cottonquota).then(function (res) {
      return res;
    });
  },
  editCottonQuota: function editCottonQuota(cottonquota) {
    return axios.put('/cottonQuota/cottonQuota/', cottonquota).then(function (res) {
      return res;
    });
  },
  deleteCottonQuota: function deleteCottonQuota(ids) {
    return axios.delete('/cottonQuota/cottonQuota/' + ids).then(function (res) {
      return res;
    });
  },
  auditCottonQuota: function auditCottonQuota(pass, ids) {
    return axios.patch('/cottonQuota/cottonQuota/audit/' + ids + '/' + pass).then(function (res) {
      return res;
    });
  }
};

exports.default = cottonQuotaAPI;

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

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
  }, [_c('span', [_vm._v("编号")]), _vm._v(" \n    "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入编号"
    },
    model: {
      value: (_vm.number),
      callback: function($$v) {
        _vm.number = $$v
      },
      expression: "number"
    }
  }), _vm._v(" \n    "), _c('span', [_vm._v("企业")]), _vm._v(" \n    "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入企业"
    },
    model: {
      value: (_vm.companyName),
      callback: function($$v) {
        _vm.companyName = $$v
      },
      expression: "companyName"
    }
  }), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "width": "60px"
    },
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
    ref: "cottonquotaTable",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.cottonquotas
    },
    on: {
      "selection-change": _vm.onSelectionChange,
      "row-click": _vm.onCottonquotaTableRowClick,
      "row-dblclick": _vm.editClick
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
          staticClass: "cottonquota-table-expand",
          attrs: {
            "label-position": "left",
            "inline": ""
          }
        }, [_c('el-form-item', {
          attrs: {
            "label": "编号"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.number))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "企业名称"
          }
        }, [_c('el-button', {
          attrs: {
            "type": "text"
          },
          on: {
            "click": function($event) {
              _vm.viewCompanyClick(props.row.companyId)
            }
          }
        }, [_vm._v(_vm._s(props.row.companyName))])], 1), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "分配量"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.quota) + "（吨）")])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "已进口"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.used) + "（吨）")])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "申请时间"
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
      "label": "编号",
      "prop": "number"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "企业"
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
              _vm.viewCompanyClick(props.row.companyId)
            }
          }
        }, [_vm._v(_vm._s(props.row.companyName))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "分配量（吨）",
      "prop": "quota"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "已进口（吨）",
      "prop": "used"
    }
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
      "size": "tiny",
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
      "model": _vm.tmpCottonQuota
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "企业名称："
    }
  }, [(_vm.addOperate) ? _c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择",
      "disabled": !_vm.addOperate
    },
    on: {
      "change": _vm.onCompanyChange
    },
    model: {
      value: (_vm.tmpCompany),
      callback: function($$v) {
        _vm.tmpCompany = $$v
      },
      expression: "tmpCompany"
    }
  }, _vm._l((_vm.companys), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item
      }
    })
  })) : _c('span', [_vm._v(_vm._s(_vm.tmpCottonQuota.companyName))])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "分配量："
    }
  }, [_c('el-input-number', {
    staticClass: "width-300",
    attrs: {
      "min": 0,
      "placeholder": "请输入分配量"
    },
    model: {
      value: (_vm.tmpCottonQuota.quota),
      callback: function($$v) {
        _vm.$set(_vm.tmpCottonQuota, "quota", $$v)
      },
      expression: "tmpCottonQuota.quota"
    }
  }), _vm._v("（单位：吨）\n      ")], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "已进口："
    }
  }, [_c('el-input-number', {
    staticClass: "width-300",
    attrs: {
      "min": 0,
      "placeholder": "请输入已进口量"
    },
    model: {
      value: (_vm.tmpCottonQuota.used),
      callback: function($$v) {
        _vm.$set(_vm.tmpCottonQuota, "used", $$v)
      },
      expression: "tmpCottonQuota.used"
    }
  }), _vm._v("（单位：吨）\n      ")], 1)], 1), _vm._v(" "), _c('div', {
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
      "id": _vm.companyId,
      "show": _vm.showCompanyDialog
    },
    on: {
      "update:show": function($event) {
        _vm.showCompanyDialog = $event
      }
    }
  })], 1)
},staticRenderFns: []}

/***/ })

});