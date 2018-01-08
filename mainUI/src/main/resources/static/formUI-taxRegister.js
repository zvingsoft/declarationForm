webpackJsonp([3],{

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
  cleanFields: function cleanFields(declaration) {
    var arr = ['settlementType', 'telephone', 'shippingType', 'importOrExportDate', 'customsNumber', 'purposeOrManufacturer', 'entryUnit', 'id', 'declarationUnit', 'forwardingUnit', 'startOrArrivalCountry', 'taxStatusName', 'loadingOrFingerPort', 'containerNumber', 'auditStatus', 'zipCode', 'documents', 'taxpaidOrNot', 'shippingNumbers', 'goodsNumber', 'entryDate', 'freight', 'declarationDate', 'taxDue', 'shippingTools', 'exemptionNature', 'declarationType', 'premium', 'preentryNumber', 'grossWeight', 'importOrExportPort', 'licenseKey', 'transactionMethod', 'managementUnit', 'approvalNumber', 'agreementNumber', 'shippingMarksAndRemarks', 'netWeight', 'companyId', 'recordNumber', 'tradingType', 'incidental', 'declarationTypeName', 'entryClerk', 'destinationOrConsignmentPlace', 'documentSattached', 'fillingDate', 'unitAddress', 'auditStatusName', 'packagingType', 'packingList', 'taxStatus', 'customsBroker'];
    for (var prop in declaration) {
      if (!arr.includes(prop)) {
        delete declaration[prop];
      }
    }
  },
  getDeclarationById: function getDeclarationById(id) {
    return axios.get('/form/form/' + id).then(function (res) {
      return res.data;
    });
  },
  addDeclaration: function addDeclaration(declaration) {
    declaration.packingList.forEach(function (item) {
      return delete item.id;
    });
    this.cleanFields(declaration);
    console.log(declaration);
    return axios.post('/form/form', JSON.parse(JSON.stringify(declaration)));
  },
  updateDeclaration: function updateDeclaration(declaration) {
    declaration.packingList.forEach(function (item) {
      return delete item.id;
    });
    this.cleanFields(declaration);
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

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var taxRegisterAPI = {
  getTaxRegisterList: function getTaxRegisterList(obj) {
    return axios.get('tax/taxRegister', {
      params: {
        searchItem: obj
      }
    }).then(function (res) {
      return res.data;
    });
  },
  getTaxRegisterById: function getTaxRegisterById(id) {
    return axios.get('/tax/taxRegister/' + id).then(function (res) {
      return res.data;
    });
  },
  addTaxRegister: function addTaxRegister(taxRegister) {
    this.cleanFields(taxRegister);
    console.log(taxRegister);
    return axios.post('/tax/taxRegister', JSON.parse(JSON.stringify(taxRegister)));
  },
  updateTaxRegister: function updateTaxRegister(taxRegister) {
    this.cleanFields(taxRegister);
    return axios.put('/tax/taxRegister', JSON.parse(JSON.stringify(taxRegister)));
  },
  deleteTaxRegister: function deleteTaxRegister(ids) {
    var strIds = ids.join(',');
    console.log(strIds);
    console.log(ids);
    return axios.delete('/tax/taxRegister/' + strIds);
  },
  registerConfrim: function registerConfrim(ids) {
    var strIds = ids.join(',');
    console.log(strIds);
    console.log(ids);
    return axios.put('/tax/registerConfrim/' + strIds);
  },
  getUnregisterDeclaration: function getUnregisterDeclaration(obj) {
    console.log(obj);
    return axios.get('form/unRegisterDeclaration', {
      params: {
        searchItem: obj
      }
    }).then(function (res) {
      return res.data;
    });
  },
  getDeclarationByIds: function getDeclarationByIds(ids) {
    var strIds = ids.join(',');
    return axios.get('/form/taxRegister', {
      params: {
        ids: strIds
      }
    }).then(function (res) {
      return res.data;
    });
  },
  cleanFields: function cleanFields(tax) {
    var arr = ['registerStatusName', 'registerDate', 'taxAmount', 'taxNumber', 'registerStatus', 'taxUser', 'id'];
    for (var prop in tax) {
      if (!arr.includes(prop)) {
        delete tax[prop];
      }
    }
  }
};

exports.default = taxRegisterAPI;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("1cae6574", content, true);

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".main-content-wrap[data-v-b1ddfcb8]{padding:10px}.search-bar[data-v-b1ddfcb8]{width:100%;text-align:right;padding-bottom:10px}.page-wrap[data-v-b1ddfcb8]{width:100%;text-align:right;position:relative;top:5px;padding-right:10px}.e-input[data-v-b1ddfcb8]{width:240px}.search-select[data-v-b1ddfcb8]{width:140px}", ""]);

// exports


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taxRegisterAPI = __webpack_require__(116);

var _taxRegisterAPI2 = _interopRequireDefault(_taxRegisterAPI);

var _declarationAPI = __webpack_require__(104);

var _declarationAPI2 = _interopRequireDefault(_declarationAPI);

var _packinglistAPI = __webpack_require__(103);

var _packinglistAPI2 = _interopRequireDefault(_packinglistAPI);

var _auditingAPI = __webpack_require__(110);

var _auditingAPI2 = _interopRequireDefault(_auditingAPI);

var _declarationList = __webpack_require__(129);

var _declarationList2 = _interopRequireDefault(_declarationList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      declarationIds: [],
      declarationOptions: [],
      registered: false,
      declarationList: [],
      declarationListDialogModal: false,
      registerDialogModal: false,
      statu: false,
      clientWidth: 0,
      clientHeight: 0,
      searchWord: '',
      selectedRows: [],
      taxRegisterData: [],
      currentPage: 1,
      pageSizes: [10, 20, 50],
      pageSize: 10,
      total: 0,
      editMode: 1,
      tmpTaxRegister: {},
      dataLoading: false,
      sort: '',
      sortOptions: [{
        key: '',
        value: '请选择排序'
      }, {
        key: 'registerNumber',
        value: '缴税单号'
      }, {
        key: 'registerDate',
        value: '缴税日期'
      }],
      registerStatus: '',
      registerStatusOptions: [{
        key: '',
        value: '请选择缴税状态'
      }, {
        key: 'Y',
        value: '已缴税'
      }, {
        key: 'N',
        value: '未缴税'
      }],
      retrieval: '',
      retrievalOptions: [{
        key: '',
        value: '请选择检索字段'
      }, {
        key: 'id',
        value: '报关单海关编号'
      }, {
        key: 'registerDate',
        value: '缴税时间'
      }]
    };
  },

  methods: {
    showDeclarationist: function showDeclarationist(id, ids) {
      this.id = id;
      this.declarationIds = ids;
      this.declarationListDialogModal = true;
    },
    listCallback: function listCallback(selection) {
      Vue.set(this.tmpTaxRegister, 'declarationList', selection);
    },
    addClick: function addClick() {
      this.editMode = 0;
      this.tmpTaxRegister = {
        declarationIds: []
      };
      this.registerDialogModal = true;
    },
    editClick: function editClick() {
      if (this.selectedRows.length == 0) {
        this.$message('请选择要编辑的缴税单', 'info');
        return;
      }
      this.tmpTaxRegister = Object.assign({}, this.selectedRows[0]);
      this.editMode = 1;
      this.registerDialogModal = true;
    },
    registerDialogConfirm: function registerDialogConfirm() {
      var _this = this;

      this.$refs['taxRegisterForm'].validate(function (valid) {
        if (valid) {
          if (_this.editMode == 0) {
            _taxRegisterAPI2.default.addTaxRegister(_this.tmpTaxRegister).then(function (res) {
              if (res.status == 200) {
                _this.$notify({
                  title: '成功',
                  message: res.data,
                  type: 'success',
                  duration: 2000
                });
                _this.registerDialogModal = false;
                _this.getTaxRegisterData();
              }
            });
          }
          if (_this.editMode == 1) {
            _taxRegisterAPI2.default.updateTaxRegister(_this.tmpTaxRegister).then(function (res) {
              if (res.status == 200) {
                _this.$notify({
                  title: '成功',
                  message: res.data,
                  type: 'success',
                  duration: 2000
                });
                _this.registerDialogModal = false;
                _this.getTaxRegisterData();
              }
            });
          }
        } else {
          _this.$notify({
            title: '操作失败',
            message: '请正确填写表单项',
            type: 'error',
            duration: 2000
          });
          return false;
        }
      });
    },
    registerClick: function registerClick(id) {
      var _this2 = this;

      var rowIds = [];
      if (id != '') {
        rowIds = [id];
      } else {
        this.selectedRows.forEach(function (row) {
          rowIds.push(row.id);
        });
      }
      _taxRegisterAPI2.default.registerConfrim(rowIds).then(function (res) {
        _this2.$notify({
          title: '提示',
          message: res.data,
          type: 'success',
          duration: 2000
        });
        _this2.getTaxRegisterData();
      });
    },
    deleteClick: function deleteClick() {
      var _this3 = this;

      if (this.selectedRows.length == 0) {
        this.$message('请选择要编辑的缴税单', 'info');
        return;
      }
      var rowIds = [];
      this.selectedRows.forEach(function (row) {
        rowIds.push(row.id);
      });
      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        return _taxRegisterAPI2.default.deleteTaxRegister(rowIds).then(function (res) {
          if (res.status == 200) {
            _this3.$notify({
              title: '成功',
              message: res.data,
              type: 'success',
              duration: 2000
            });
            _this3.getTaxRegisterData();
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
    registerDateChange: function registerDateChange(val) {
      this.tmpTaxRegister.registerDate = val;
    },
    rowDBClick: function rowDBClick(row) {
      this.tmpTaxRegister = Object.assign({}, row);
      this.registerDialogModal = true;
    },
    getTaxRegisterData: function getTaxRegisterData() {
      var _this4 = this;

      this.dataLoading = true;
      var obj = {
        retrieval: this.retrieval,
        searchWord: this.searchWord,
        pageSize: this.pageSize,
        pageIndex: this.currentPage
      };
      _taxRegisterAPI2.default.getTaxRegisterList(obj).then(function (data) {
        console.log(data);
        _this4.taxRegisterData = [];
        if (data.length > 0) {
          _this4.total = data[0].total;
        }
        data.forEach(function (o) {
          if (_this4.registerStatus != '') {
            if (_this4.registerStatus == o.registerStatus) {
              if (_this4.retrieval == '' || _this4.searchWord == '') {
                _this4.taxRegisterData.push(o);
              } else if (o[_this4.retrieval].indexOf(_this4.searchWord) >= 0) {
                _this4.taxRegisterData.push(o);
              }
            }
          } else {
            if (_this4.retrieval == '' || _this4.searchWord == '') {
              _this4.taxRegisterData.push(o);
            } else if (o[_this4.retrieval].indexOf(_this4.searchWord) >= 0) {
              _this4.taxRegisterData.push(o);
            }
          }
        });
        _this4.dataLoading = false;
      });
    },
    onSelectionChange: function onSelectionChange(selection) {
      var _this5 = this;

      this.selectedRows = selection;
      console.log(selection);
      this.registered = false;
      selection.forEach(function (o) {
        if (o.registerStatus == 'Y') {
          _this5.registered = true;
        }
      });
    },
    handleSizeChange: function handleSizeChange(val) {
      this.pageSize = val;
      this.getTaxRegisterData();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.currentPage = val;
      this.getTaxRegisterData();
    }
  },
  created: function created() {
    this.clientWidth = document.documentElement.clientWidth - 200;
    this.clientHeight = document.documentElement.clientHeight - 200;
    this.getTaxRegisterData();
  },

  components: {
    'declaration-list': _declarationList2.default
  }
};
//import './mock/declaration.js';
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(130)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(132),
  /* template */
  __webpack_require__(133),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-da7de60e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("1d356e8f", content, true);

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".search-bar[data-v-da7de60e]{width:100%;text-align:right;padding:5px}", ""]);

// exports


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taxRegisterAPI = __webpack_require__(116);

var _taxRegisterAPI2 = _interopRequireDefault(_taxRegisterAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      declarationData: [],
      searchWord: '',
      dataLoading: false,
      selectedRows: []
    };
  },

  watch: {
    declarationIds: function declarationIds() {
      this.getDeclarationData();
    }
  },
  mounted: function mounted() {
    this.getDeclarationData();
  },

  methods: {
    getDeclarationData: function getDeclarationData() {
      var _this = this;

      _taxRegisterAPI2.default.getDeclarationByIds(this.declarationIds).then(function (data) {
        console.log(data);
        _this.declarationData = data;
        if (_this.searchWord != '') {
          _this.declarationData = [];
          data.forEach(function (o) {
            if (o.customsNumber.indexOf(_this.searchWord) >= 0) {
              _this.declarationData.push(o);
            }
          });
        }
      });
    },
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
      this.$emit('callback', selection);
    }
  },
  props: ['declarationIds', 'onlyView']
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

/***/ 133:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.onlyView) ? _c('div', {
    staticClass: "search-bar"
  }, [_vm._v("\n      海关编号：\n      "), _c('el-input', {
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
      "click": _vm.getDeclarationData
    }
  }, [_vm._v("搜索")])], 1) : _vm._e(), _vm._v(" "), _c('el-table', {
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
      "height": 300,
      "highlight-current-row": ""
    },
    on: {
      "selection-change": _vm.onSelectionChange
    }
  }, [(_vm.onlyView) ? _c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "70",
      "label": "序号",
      "align": "center"
    }
  }) : _c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "60",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customsNumber",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "海关编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "importOrExportPort",
      "show-overflow-tooltip": "",
      "min-width": "30%",
      "label": "海关口岸"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationUnit",
      "show-overflow-tooltip": "",
      "min-width": "30%",
      "label": "申报单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationDate",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "申报日期"
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: ({
      width: _vm.clientWidth + 'px'
    })
  }, [_c('el-toolbar', [_c('el-button', {
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
      "disabled": _vm.selectedRows.length === 0 || _vm.registered
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
  }), _vm._v(" 删除")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedRows.length === 0 || _vm.registered
    },
    on: {
      "click": function($event) {
        _vm.registerClick('')
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check"
  }), _vm._v(" 确认缴税")])], 1), _vm._v(" "), _c('div', {
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
  })), _vm._v("\n      缴税状态：\n      "), _c('el-select', {
    staticClass: "search-select",
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.registerStatus),
      callback: function($$v) {
        _vm.registerStatus = $$v
      },
      expression: "registerStatus"
    }
  }, _vm._l((_vm.registerStatusOptions), function(item) {
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
  }), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "width": "60px"
    },
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": _vm.getTaxRegisterData
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
      "data": _vm.taxRegisterData,
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
      "type": "selection",
      "width": "55",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "id",
      "show-overflow-tooltip": "",
      "min-width": "12%",
      "label": "报关单海关编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "taxAmount",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "缴税金额"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "registerDate",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "缴税时间"
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
            "type": "text",
            "disabled": scope.row.registerStatus == 'Y'
          },
          on: {
            "click": function($event) {
              _vm.registerClick(scope.row.id)
            }
          }
        }, [_c('span', {
          staticStyle: {
            "color": "green"
          }
        }, [_vm._v("确认缴税")])])]
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
      "title": _vm.editMode == 1 ? '编辑缴税单信息' : '添加缴税单',
      "visible": _vm.registerDialogModal,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.registerDialogModal = $event
      }
    }
  }, [_c('el-form', {
    ref: "taxRegisterForm",
    attrs: {
      "label-position": "right",
      "model": _vm.tmpTaxRegister,
      "label-width": "150px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "报关单海关编号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpTaxRegister.id),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxRegister, "id", _vm._n($$v))
      },
      expression: "tmpTaxRegister.id"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "缴税金额：",
      "prop": "taxAmount",
      "rules": [{
        type: 'number',
        message: '缴税金额必须为数字值',
        trigger: 'change'
      }]
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpTaxRegister.taxAmount),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxRegister, "taxAmount", _vm._n($$v))
      },
      expression: "tmpTaxRegister.taxAmount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "缴税时间："
    }
  }, [_c('el-date-picker', {
    staticClass: "e-input",
    attrs: {
      "type": "date",
      "placeholder": "选择缴税日期"
    },
    on: {
      "change": _vm.registerDateChange
    },
    model: {
      value: (_vm.tmpTaxRegister.registerDate),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxRegister, "registerDate", $$v)
      },
      expression: "tmpTaxRegister.registerDate"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.registerDialogModal = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.registerDialogConfirm
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(126)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(128),
  /* template */
  __webpack_require__(134),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-b1ddfcb8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});