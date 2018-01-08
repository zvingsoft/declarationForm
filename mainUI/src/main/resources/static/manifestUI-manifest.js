webpackJsonp([8],{

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

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("5aea2086", content, true);

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".main-content-wrap[data-v-4966948f]{padding:10px}.width-300[data-v-4966948f]{width:300px}.width-230[data-v-4966948f]{width:230px}.page-wrap[data-v-4966948f]{margin-top:20px}.page-wrap .page[data-v-4966948f]{float:right}.search-bar[data-v-4966948f]{padding-bottom:10px}.demo-table-expand[data-v-4966948f]{font-size:12px}.demo-table-expand label[data-v-4966948f]{color:#99a9bf}.demo-table-expand .el-form-item[data-v-4966948f]{margin-right:0;margin-bottom:0;width:45%}.box-card[data-v-4966948f]{width:100%}.form-title[data-v-4966948f]{font-size:20px;font-weight:700;margin-left:6%;padding:20px 0 5px}.packinglist-panel[data-v-4966948f]{margin-left:5%;border:2px solid #ccc;border-radius:4px;background-color:#fff}", ""]);

// exports


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _manifestAPI = __webpack_require__(178);

var _manifestAPI2 = _interopRequireDefault(_manifestAPI);

var _skuAPI = __webpack_require__(101);

var _skuAPI2 = _interopRequireDefault(_skuAPI);

var _companyAPI = __webpack_require__(102);

var _companyAPI2 = _interopRequireDefault(_companyAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            search: {
                manifestNum: '',
                goodsName: '',
                receiveCompany: '',
                receivePerson: ''
            },
            viewDialog: false,
            manifestGoodInfo: { goodsinfo: '', receiveCompany: '' },
            SKUData: [],

            sku: [],
            viewSelectGoods: false,
            temsku: [],
            selectedGoodsRows: [],
            selectedGoodsList: [],
            companys: []
        };
    },

    methods: {
        onSelectionChange: function onSelectionChange(selection) {
            this.selectedRows = selection;
        },
        openSelectGoods: function openSelectGoods() {
            var _this = this;

            var rowIds = [];
            if (this.temsku) {
                this.temsku.forEach(function (row) {
                    rowIds.push(row.sku);
                });
            }
            _skuAPI2.default.getSKU().then(function (data) {
                _this.SKUData = data;
                _this.SKUData = _this.SKUData.filter(function (val) {
                    return !rowIds.includes(val.sn);
                });
            });
            this.viewSelectGoods = true;
            this.selectedGoodsRows = [];
        },

        //选中商品行
        selectedGoodsChange: function selectedGoodsChange(selection) {
            this.selectedGoodsRows = selection;
        },

        //勾选商品行
        selectedGoodsListChange: function selectedGoodsListChange(selection) {
            this.selectedGoodsList = selection;
        },

        //删除勾选商品行
        deleteSelectedGoodsList: function deleteSelectedGoodsList() {
            var _this2 = this;

            var rowIds = [];
            this.selectedGoodsList.forEach(function (row) {
                rowIds.push(row.sku);
            });
            this.$confirm('确认删除所选的数据?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                beforeClose: function beforeClose(action, instance, done) {
                    if (action == 'confirm') {
                        instance.confirmButtonLoading = true;
                        _this2.temsku = _this2.temsku.filter(function (val) {
                            return !rowIds.includes(val.sku);
                        });
                        _this2.tmpManifest.items = _this2.temsku;
                        instance.confirmButtonLoading = false;
                    }
                    done();
                }
            }).catch(function () {
                _this2.$notify.info({
                    title: '取消',
                    message: '操作取消！',
                    duration: 2000
                });
            });
        },
        handleSearchBtn: function handleSearchBtn() {
            this.manifestTable = Object.assign([], this.temmanifestTable);
            var temManifestnum = this.search.manifestNum;
            // let temGoodsname = this.search.goodsName;
            var temReceiveCompany = this.search.receiveCompany;
            var temReceivePerson = this.search.receivePerson;
            if (temManifestnum != '' || temReceiveCompany != '' || temReceivePerson != '') {
                if (temManifestnum != '') {
                    this.manifestTable = this.manifestTable.filter(function (val) {
                        return val.manifestNum.indexOf(temManifestnum) != -1;
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
                this.total = this.manifestTable.length;
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
            var _this3 = this;

            this.addOrEdit = 1;
            this.tmpManifest = {};
            this.saveManifestStatus = false;
            this.showDialog = true;
            this.sku = [];
            this.temsku = [];
            _skuAPI2.default.getSKU().then(function (data) {
                _this3.SKUData = data;
            });
            _companyAPI2.default.getCompany().then(function (data) {
                _this3.companys = data.data;
            });
        },

        //编辑
        editManifest: function editManifest() {
            var _this4 = this;

            this.addOrEdit = 2;
            this.showDialog = true;
            this.saveManifestStatus = false;
            this.tmpManifest = Object.assign({}, this.selectedRows[0]);
            this.temsku = this.tmpManifest.items;
            _skuAPI2.default.getSKU().then(function (data) {
                _this4.SKUData = data;
            });
            _companyAPI2.default.getCompany().then(function (data) {
                _this4.companys = data.data;
            });
        },

        //确认选择商品
        selectGoodsClick: function selectGoodsClick() {
            if (this.selectedGoodsRows.length === 0) {
                this.$alert('请至少选择一种商品');
                return;
            }
            var temArr = Object.assign([], this.temsku);
            this.selectedGoodsRows.forEach(function (row) {
                var temGoods = {};
                temGoods.sku = row.sn;
                temGoods.skuname = row.name;
                temGoods.quantity = 0;
                temArr.push(temGoods);
            });
            this.temsku = temArr;
            this.viewSelectGoods = false;
            this.tmpManifest.items = this.temsku;
        },

        //双击
        dblclickManifest: function dblclickManifest(dbrow) {
            var _this5 = this;

            this.addOrEdit = 2;
            this.showDialog = true;
            this.saveManifestStatus = false;
            this.tmpManifest = Object.assign({}, dbrow);
            this.temsku = this.tmpManifest.items;
            _skuAPI2.default.getSKU().then(function (data) {
                _this5.SKUData = data;
            });
        },

        //单机
        rowClick: function rowClick(row, event, column) {
            if (column.type != 'selection') {
                this.$refs.manifestTable.clearSelection();
            }
            this.$refs.manifestTable.toggleRowSelection(row);
        },


        //链接
        lookClick: function lookClick(link) {
            var _this6 = this;

            this.addOrEdit = 2;
            this.showDialog = true;
            this.saveManifestStatus = false;
            this.tmpManifest = Object.assign({}, link);
            this.temsku = this.tmpManifest.items;
            _skuAPI2.default.getSKU().then(function (data) {
                _this6.SKUData = data;
            });
        },

        //新建和编辑时保存
        saveManifest: function saveManifest() {
            var _this7 = this;

            this.$refs['manifestForm'].validate(function (valid) {
                if (valid) {
                    _this7.saveManifestStatus = true;
                    if (_this7.addOrEdit == 1) {
                        _manifestAPI2.default.addManifest(_this7.tmpManifest).then(function (data) {
                            if (data.status == 200) {
                                _this7.getManifestData();
                                _this7.temmanifestTable = Object.assign([], _this7.manifestTable);
                                _this7.$message.success(data.data);
                            } else {
                                _this7.$message.error(data.data);
                            }
                            _this7.saveManifestStatus = false;
                            _this7.showDialog = false;
                        });
                    } else if (_this7.addOrEdit == 2) {
                        _this7.tmpManifest.items = _this7.temsku;
                        _manifestAPI2.default.editManifest(_this7.tmpManifest.id, _this7.tmpManifest).then(function (data) {
                            if (data.status == 200) {
                                _this7.getManifestData();
                                _this7.temmanifestTable = Object.assign([], _this7.manifestTable);
                                _this7.$message.success(data.data);
                            } else {
                                _this7.$message.error(data.data);
                            }
                            _this7.saveManifestStatus = false;
                            _this7.showDialog = false;
                        });
                    }
                } else {
                    _this7.$alert('请填写正确选项', '提示');
                    return false;
                }
            });
        },

        //刪除
        deleteManifests: function deleteManifests() {
            var _this8 = this;

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
                        return _manifestAPI2.default.deleteManifests(rowIds).then(function (data) {
                            if (data.status == 200) {
                                _this8.manifestTable = _this8.manifestTable.filter(function (val) {
                                    return !rowIds.includes(val.id);
                                });
                                _this8.temmanifestTable = Object.assign([], _this8.manifestTable);
                                _this8.total = _this8.manifestTable.length;
                                _this8.$notify({
                                    title: '成功',
                                    message: data.data,
                                    type: 'success',
                                    duration: 2000
                                });
                            } else {
                                _this8.$alert(data.data);
                            }
                            instance.confirmButtonLoading = false;
                            done(data);
                        });
                    } else {
                        done();
                    }
                }
            }).catch(function () {
                _this8.$notify.info({
                    title: '取消',
                    message: '操作取消！',
                    duration: 2000
                });
            });
        },

        //查看商品
        viewGoods: function viewGoods() {
            var _this9 = this;

            this.viewDialog = true;
            this.manifestGoodInfo = { goodsinfo: [], receiveCompany: '' };
            this.manifestGoodInfo.receiveCompany = this.selectedRows[0].receiveCompany;
            _manifestAPI2.default.viewManifestsGoods(this.selectedRows[0].id).then(function (data) {
                _this9.manifestGoodInfo.goodsinfo = data.data.items;
            });
        },
        getManifestData: function getManifestData() {
            var _this10 = this;

            _manifestAPI2.default.getManifestData().then(function (data) {
                _this10.manifestTable = data.data;
                var temManifestTable = [];
                _this10.manifestTable.forEach(function (row) {
                    var temItems = row.items;
                    var temrow = Object.assign({}, row);
                    if (temItems) {
                        var temArr = [];
                        temItems.forEach(function (item) {
                            temArr.push(item.skuname);
                        });
                        temrow.skunames = temArr.join(',');
                    }
                    temManifestTable.push(temrow);
                });
                _this10.manifestTable = temManifestTable;
                _this10.temmanifestTable = Object.assign([], _this10.manifestTable);
                _this10.total = _this10.manifestTable.length;
            });
        }
    },
    created: function created() {
        this.getManifestData();
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
//
//
//

/***/ }),

/***/ 178:
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
    this.cleanFields(manifest);
    return axios.post('manifest/manifest', manifest).then(function (res) {
      return res;
    });
  },
  editManifest: function editManifest(id, manifest) {
    this.cleanFields(manifest);
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
  },
  cleanFields: function cleanFields(obj) {
    obj.items.forEach(function (item) {
      return delete item.id;
    });
    var arr = ['items', 'goodsName', 'status', 'telephone', 'location', 'manifestNum', 'receivePerson', 'receiveCompany', 'id', 'sendAddress'];
    for (var prop in obj) {
      if (!arr.includes(prop)) {
        delete obj[prop];
      }
    }
  }
};

exports.default = manifestAPI;

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

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
  }, [_vm._v("\n        舱单编号:\n        "), _c('el-input', {
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
  }), _vm._v("\n        收件公司：\n        "), _c('el-input', {
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
  }), _vm._v("\n        收货人：\n        "), _c('el-input', {
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
    ref: "manifestTable",
    attrs: {
      "data": _vm.manifestTable
    },
    on: {
      "row-click": _vm.rowClick,
      "selection-change": _vm.onSelectionChange,
      "row-dblclick": _vm.dblclickManifest
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
        }, [_c('span', [_vm._v(_vm._s(props.row.skunames))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "状态"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.status))])]), _vm._v(" "), _c('el-form-item', {
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
        }, [_vm._v(_vm._s(scope.row.manifestNum))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "receiveCompany",
      "min-width": "15%",
      "label": "收件公司"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "skunames",
      "min-width": "30%",
      "label": "商品"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "status",
      "min-width": "10%",
      "label": "状态"
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
  }, [_c('el-select', {
    staticClass: "width-300",
    attrs: {
      "clearable": "",
      "placeholder": "请选择收件公司"
    },
    model: {
      value: (_vm.tmpManifest.receiveCompany),
      callback: function($$v) {
        _vm.$set(_vm.tmpManifest, "receiveCompany", $$v)
      },
      expression: "tmpManifest.receiveCompany"
    }
  }, _vm._l((_vm.companys), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.name
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "发货地："
    }
  }, [_c('el-input', {
    staticClass: "width-300",
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
    staticClass: "width-300",
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
    staticClass: "width-300",
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
    staticClass: "form-title"
  }, [_vm._v("添加商品")]), _vm._v(" "), _c('div', {
    staticClass: "packinglist-panel"
  }, [_c('div', {
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
      "click": _vm.openSelectGoods
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v("添加")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedGoodsList.length === 0
    },
    on: {
      "click": _vm.deleteSelectedGoodsList
    }
  }, [_c('i', {
    staticClass: "fa fa-remove"
  }), _vm._v("删除")])], 1), _vm._v(" "), _c('el-table', {
    attrs: {
      "data": _vm.temsku
    },
    on: {
      "selection-change": _vm.selectedGoodsListChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "min-width": "5%",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sku",
      "min-width": "15%",
      "label": "商品编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "skuname",
      "min-width": "55%",
      "label": "商品名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "quantity",
      "min-width": "25%",
      "label": "数量"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-input-number', {
          attrs: {
            "size": "small",
            "min": 0
          },
          model: {
            value: (scope.row.quantity),
            callback: function($$v) {
              _vm.$set(scope.row, "quantity", $$v)
            },
            expression: "scope.row.quantity"
          }
        })]
      }
    }])
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
  }, [_c('span', [_vm._v("收件公司：" + _vm._s(_vm.manifestGoodInfo.receiveCompany))])]), _vm._v(" "), _c('div', [_c('el-table', {
    attrs: {
      "data": _vm.manifestGoodInfo.goodsinfo
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "sku",
      "min-width": "20%",
      "label": "商品编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "skuname",
      "min-width": "70%",
      "label": "商品名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "quantity",
      "min-width": "10%",
      "label": "数量"
    }
  })], 1)], 1)]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("关 闭")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "选择商品",
      "visible": _vm.viewSelectGoods
    },
    on: {
      "update:visible": function($event) {
        _vm.viewSelectGoods = $event
      }
    }
  }, [_c('el-table', {
    attrs: {
      "data": _vm.SKUData
    },
    on: {
      "selection-change": _vm.selectedGoodsChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "55",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sn",
      "min-width": "20%",
      "label": "商品编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "min-width": "80%",
      "label": "商品名称"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.viewSelectGoods = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.selectGoodsClick
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(175)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(177),
  /* template */
  __webpack_require__(179),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4966948f",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});