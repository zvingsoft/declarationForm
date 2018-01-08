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

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
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
var update = __webpack_require__(1)("38395822", content, true);

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".pack-table[data-v-3a7beb6a]{font-size:10px;min-width:100%}.e-input[data-v-3a7beb6a]{width:270px}", ""]);

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
/***/ (function(module, exports) {

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
var update = __webpack_require__(1)("46c89588", content, true);

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".main-content-wrap[data-v-79186761]{padding:10px}.search-bar[data-v-79186761]{width:100%;text-align:right;padding-bottom:10px}.demo-table-expand[data-v-79186761]{font-size:12px}.demo-table-expand label[data-v-79186761]{color:#99a9bf}.demo-table-expand .el-form-item[data-v-79186761]{margin-right:0;margin-bottom:0;width:45%}.page-wrap[data-v-79186761]{width:100%;text-align:right;position:relative;top:5px;padding-right:10px}.e-form[data-v-79186761]{padding-left:10%}.e-form .el-form-item[data-v-79186761]{margin-right:0;margin-bottom:0;width:45%}.e-input[data-v-79186761]{width:240px}.search-select[data-v-79186761]{width:140px}.detail-table[data-v-79186761]{font-size:16px;width:100%}.detail-table span[data-v-79186761]{font-size:12px;padding-left:5px}.detail-table .t1[data-v-79186761]{height:40px}.detail-table .t2[data-v-79186761]{height:80px}.detail-table .t3[data-v-79186761]{height:120px}.detail-table .t4[data-v-79186761]{height:160px}.detail-table .t5[data-v-79186761]{height:200px}.inline-table[data-v-79186761]{width:100%}.inline-table .b1[data-v-79186761]{border-bottom:1px solid #ccc}.inline-table .b2[data-v-79186761]{border-right:1px solid #ccc;border-bottom:1px solid #ccc}.inline-table .b3[data-v-79186761]{border-left:1px solid #ccc;border-bottom:1px solid #ccc}.inline-table .b4[data-v-79186761]{border-left:1px solid #ccc}", ""]);

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
            }).catch(function (err) {
                _this.$notify({
                    title: '提示',
                    message: err.response.data.message,
                    type: 'error',
                    duration: 2000
                });
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
/***/ (function(module, exports) {

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

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
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

module.exports = Component.exports


/***/ })

});