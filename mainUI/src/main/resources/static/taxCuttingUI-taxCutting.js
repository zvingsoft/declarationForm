webpackJsonp([7],{

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

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("f82d6526", content, true);

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".main-content-wrap[data-v-78b1af65]{padding:10px}.search-bar[data-v-78b1af65]{padding-bottom:10px}.page-wrap[data-v-78b1af65]{margin-top:20px}.page-wrap .page[data-v-78b1af65]{float:right}.a-btn[data-v-78b1af65]:hover{text-decoration:underline}.demo-table-expand[data-v-78b1af65]{font-size:12px}.demo-table-expand label[data-v-78b1af65]{color:#99a9bf}.demo-table-expand .el-form-item[data-v-78b1af65]{margin-right:0;margin-bottom:0;width:45%}", ""]);

// exports


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("cac873c2", content, true);

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".content .el-textarea__inner{height:300px}.look-card .el-card__header{text-align:center}.mode-dialog .el-dialog__body{height:500px;overflow:auto}", ""]);

// exports


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taxCuttingAPI = __webpack_require__(173);

var _taxCuttingAPI2 = _interopRequireDefault(_taxCuttingAPI);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* import './mock/taxCutting.js' */
//require('./mock/gossip.js')

exports.default = {
  data: function data() {
    return {
      SKUData: [],
      declarationType: '',
      declarationID: '',
      showGoodsDialog: false,
      clientWidth: 0,
      showLookDialog: false,
      selectedRows: [],
      taxCuttingRules: {
        topLmit: [{ required: true, trigger: 'blur',
          validator: function validator(rule, value, callback) {
            /*  if(!/^\d+$/ .test(value)) { */
            if (!/[0-9]+$/.test(value)) {
              callback(new Error("请输入数字"));
            } else {
              callback();
            }
          }
        }],
        rate: [{ required: true, trigger: 'blur',
          validator: function validator(rule, value, callback) {
            //if(!/^[0-9][\.]{1}[0-9]{2}$/.test(value)) { //小数，保留两位
            /*  if(!/^[0-9]+[\.]{1}[0-9]+$/.test(value)) { */ //小数  不限位数
            if (!/[0-9]+$/.test(value)) {
              callback(new Error("请输入数字"));
            } else {
              callback();
            }
          }
        }]
        /* startTime: [
           {trigger: 'change', required: true,
             validator: (rule, value, callback) => {
               if (value) {
                 callback();
               } else {
                 callback(new Error('请选择起始时间'));
               }
             }
           }
         ],
         endTime: [
           {trigger: 'change', required: true,
             validator: (rule, value, callback) => {
               if (value) {
                 callback();
               } else {
                 callback(new Error('请选择截止时间'));
               }
             }
           }
         ],
          policyPaperTitle: [
           { required: true, message: '请输入政策文件标题', trigger: 'blur' },
           { min: 1, max: 400, message: '长度在 1 到 400 个字符', trigger: 'blur' }
         ],
         policyPaperContent: [
           { required: true, message: '请输入政策文件内容', trigger: 'blur' },
           { min: 1, max: 4000, message: '长度在 1 到 4000 个字符', trigger: 'blur' }
         ], */
      },
      showTitleMode: 0, // 0 新建 1 编辑
      showAddDialog: false, //新建dialog显示状态
      tmpTaxCutting: {},
      searchTaxCutting: {
        id: '',
        sku: '',
        skuName: '',
        startTime: '',
        endTime: ''
      }, //搜索
      dataLoading: false,
      ways: [{ 'key': 'approval', 'name': '免税' }, { 'key': 'filing', 'name': '税率减免' }], //减免方式
      smalltypes: [{ 'key': 'technology', 'name': '支持科技事业' }], //减免税小类
      largetypes: [{ 'key': 'large', 'name': '鼓励高新技术' }], //减免税大类
      currentPage: 1, //当前页
      pageSize: 10, //每页数
      clientHeight: 0,
      taxCuttingTable: [], //减免税列表数据
      total: 0, //总行数
      pageSizes: [10, 20, 30] //每页分页数量
    };
  },

  methods: {
    //单击一行选中当前行、单击多选框增加选中当前行
    onRowClick: function onRowClick(row, event, column) {
      if (column.type != "selection") {
        this.$refs.taxCuttingRefTable.clearSelection();
      }
      this.$refs.taxCuttingRefTable.toggleRowSelection(row);
    },

    //双击
    dbEditClick: function dbEditClick(row) {
      this.showAddDialog = true;
      this.showTitleMode = 1;
      this.tmpTaxCutting = Object.assign({}, row);
    },

    //查看政策文件
    lookPolicyPaperClick: function lookPolicyPaperClick(row) {
      this.tmpTaxCutting = Object.assign({}, row);
      this.showLookDialog = true;
    },

    //新建编辑确定
    confrimAddClick: function confrimAddClick() {
      var _this = this;

      var validateForm = function validateForm() {
        return new Promise(function (resolve, reject) {
          _this.$refs['taxCuttingForm'].validate(function (valid) {
            if (valid) {
              return resolve(true);
            }
            return reject(false);
          });
        });
      };
      validateForm().then(function () {
        if (_this.showTitleMode === 0) {
          _this.tmpTaxCutting.id = Math.round(Math.random() * 10000);
          _taxCuttingAPI2.default.addTaxCuttingData(_this.tmpTaxCutting).then(function (data) {
            // if(data.status === 1) {
            _this.showAddDialog = false;
            _this.$message.success("新建成功");
            _this.getTaxCuttingData();
            /*   }else {
                this.$message.error("新建失败");
              } */
          });
        } else if (_this.showTitleMode === 1) {
          _taxCuttingAPI2.default.editTaxCuttingData(_this.tmpTaxCutting).then(function (data) {
            var index = _this.taxCuttingTable.findIndex(function (val) {
              return val.id === _this.tmpTaxCutting.id;
            });
            _this.taxCuttingTable = [].concat(_toConsumableArray(_this.taxCuttingTable.slice(0, index)), [_this.tmpTaxCutting], _toConsumableArray(_this.taxCuttingTable.slice(index + 1)));
            //  if(data.status === 1) {
            _this.showAddDialog = false;
            _this.$message.success("编辑成功");
            _this.getTaxCuttingData();
            /*   }else {
                this.$message.error(data.message);
              } */
          });
        }
      }).catch(function () {
        _this.$message.error('没有正确填写表单项');
      });
    },

    //编辑
    editTaxCuttingClick: function editTaxCuttingClick() {
      this.showTitleMode = 1;
      this.getSKUData();
      this.tmpTaxCutting = Object.assign({}, this.selectedRows[0]);
      this.showAddDialog = true;
    },

    //新建
    addTaxCuttingClick: function addTaxCuttingClick() {
      this.showTitleMode = 0;
      this.tmpTaxCutting = {
        id: '',
        sku: '',
        skuName: '',
        count: '',
        topLmit: '',
        rate: '',
        policyPaperTitle: '',
        policyPaperContent: '',
        startTime: '',
        endTime: ''
      }, this.getSKUData();
      this.showAddDialog = true;
    },

    //删除
    deleteTaxCuttingClick: function deleteTaxCuttingClick() {
      var _this2 = this;

      var rowIds = [];
      this.selectedRows.forEach(function (row) {
        rowIds.push(row.id);
      });

      this.$confirm("确认删除所选的消息?", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action == 'confirm') {
            instance.confirmButtonLoading = true;
            return _taxCuttingAPI2.default.deleteTaxCuttingData(rowIds).then(function (data) {
              // if (data.status == 1) {
              _this2.taxCuttingTable = _this2.taxCuttingTable.filter(function (val) {
                return !rowIds.includes(val.id);
              });
              _this2.$notify({
                title: '成功',
                message: "删除成功",
                type: 'success',
                duration: 2000
              });
              //  } else {
              //    this.$alert(data.message);
              //   }
              instance.confirmButtonLoading = false;
              done(data);
            });
          } else {
            done();
          }
        }
      }).catch(function () {
        /* this.$notify.info({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        }); */
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

    //起始时间格式转换事件
    dateStartTimeChangeClick: function dateStartTimeChangeClick() {
      if (this.searchTaxCutting.startTime) {
        this.searchTaxCutting.startTime = this.formatDate(new Date(this.searchTaxCutting.startTime), 'yyyy-MM-dd');
      } else {
        this.searchTaxCutting.startTime = '';
      }
    },

    //截止时间格式转换事件
    dateEndTimeChangeClick: function dateEndTimeChangeClick() {
      if (this.searchTaxCutting.endTime) {
        this.searchTaxCutting.endTime = this.formatDate(new Date(this.searchTaxCutting.endTime), 'yyyy-MM-dd');
      } else {
        this.searchTaxCutting.endTime = '';
      }
    },

    //有效期
    dateStartDateChangeClick: function dateStartDateChangeClick() {
      if (this.tmpTaxCutting.startTime) {
        this.tmpTaxCutting.startTime = this.formatDate(new Date(this.tmpTaxCutting.startTime), 'yyyy-MM-dd');
      } else {
        this.tmpTaxCutting.startTime = '';
      }
    },
    dateEndDateChangeClick: function dateEndDateChangeClick() {
      if (this.tmpTaxCutting.endTime) {
        this.tmpTaxCutting.endTime = this.formatDate(new Date(this.tmpTaxCutting.endTime), 'yyyy-MM-dd');
      } else {
        this.tmpTaxCutting.endTime = '';
      }
    },

    //搜索
    searchTaxCuttingClick: function searchTaxCuttingClick() {
      this.getTaxCuttingData();
    },

    //选中行
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },

    //每页数设置
    sizeChangeHandler: function sizeChangeHandler(val) {
      this.pageSize = val;
    },

    //当前页设置
    currentChangeHandler: function currentChangeHandler(val) {
      this.currentPage = val;
    },

    //减免税列表数据加载
    getTaxCuttingData: function getTaxCuttingData() {
      var _this3 = this;

      //this.dataLoading = true;
      _taxCuttingAPI2.default.getTaxCuttingData(this.currentPage, this.pageSize, this.searchTaxCutting.id, this.searchTaxCutting.sku, this.searchTaxCutting.skuName, this.searchTaxCutting.startTime, this.searchTaxCutting.endTime).then(function (data) {
        _this3.taxCuttingTable = data;
        _this3.total = data.length;
        /*  if (this.searchTaxCutting.id != '') {
          this.taxCuttingTable = this.taxCuttingTable.filter(val => val.id.indexOf(this.searchTaxCutting.id) != -1)
        } */
        if (_this3.searchTaxCutting.sku != '') {
          _this3.taxCuttingTable = _this3.taxCuttingTable.filter(function (val) {
            return val.sku.indexOf(_this3.searchTaxCutting.sku) != -1;
          });
        }
        if (_this3.searchTaxCutting.skuName != '') {
          _this3.taxCuttingTable = _this3.taxCuttingTable.filter(function (val) {
            return val.skuName.indexOf(_this3.searchTaxCutting.skuName) != -1;
          });
        }
        if (_this3.searchTaxCutting.startTime != '' || _this3.searchTaxCutting.endTime != '') {
          _this3.taxCuttingTable = _this3.taxCuttingTable.filter(function (val) {
            return val.validityDate.indexOf(_this3.searchTaxCutting.startTime + " - " + _this3.searchTaxCutting.endTime) != -1;
          });
        }
        _this3.dataLoading = false;
      });
    },

    //选择货号
    selectSKUChangeClick: function selectSKUChangeClick(val) {
      var skuName = '';
      this.SKUData.forEach(function (row) {
        if (row.sn == val) {
          skuName = row.name;
          return;
        }
      });
      this.tmpTaxCutting.skuName = skuName;
    },


    //货号数据加载
    getSKUData: function getSKUData() {
      var _this4 = this;

      _skuAPI2.default.getSKU().then(function (data) {
        _this4.SKUData = data;
      });
    }
  },
  created: function created() {
    this.clientWidth = document.documentElement.clientWidth - 200;
    this.clientHeight = document.documentElement.clientHeight - 230;
    this.getTaxCuttingData();
  }
};

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var taxCuttingAPI = {
  getTaxCuttingData: function getTaxCuttingData() {
    return axios.get('/taxCutting/taxcutting').then(function (res) {
      return res.data;
    });
  },

  /*  getTaxCuttingData(pageindex,pagesize,largettype,smalltype,way,starttime,endtime) {
     return axios.get( `/taxCutting/taxcutting`,{
         params: {
           pageindex,
           pagesize,
           largettype,
           smalltype,
           way,
           starttime,
           endtime,
           pageindex,
           pagesize
         }
       }
     ).then(res => res.data)
   }, */
  /*  getLargeTypesData() {
     return axios.get( `/api/taxcutting/largettypes`).then(res => res.data)
   },
   getSmallTypesData() {
     return axios.get( `/api/taxcutting/smalltypes`).then(res => res.data)
   },
   getWaysData() {
     return axios.get( `/api/taxcutting/ways`).then(res => res.data)
   }, */
  addTaxCuttingData: function addTaxCuttingData(taxcutting) {
    return axios.post('/taxCutting/taxcutting', taxcutting).then(function (res) {
      return res.data;
    });
  },
  editTaxCuttingData: function editTaxCuttingData(taxcutting) {
    return axios.put('/taxCutting/taxcutting', taxcutting).then(function (res) {
      return res.data;
    });
  },
  deleteTaxCuttingData: function deleteTaxCuttingData(ids) {
    var strIds = ids.join(',');
    return axios.delete('/taxCutting/taxcutting/' + strIds).then(function (res) {
      return res.data;
    });
  }
};
exports.default = taxCuttingAPI;

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: ({
      width: _vm.clientWidth + 'px'
    })
  }, [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "size": "small",
      "plain": true,
      "icon": "plus"
    },
    on: {
      "click": _vm.addTaxCuttingClick
    }
  }, [_vm._v("新建")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "size": "small",
      "disabled": _vm.selectedRows.length !== 1,
      "plain": true,
      "icon": "edit"
    },
    on: {
      "click": _vm.editTaxCuttingClick
    }
  }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "size": "small",
      "disabled": _vm.selectedRows.length === 0,
      "plain": true,
      "icon": "delete"
    },
    on: {
      "click": _vm.deleteTaxCuttingClick
    }
  }, [_vm._v("删除")])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap"
  }, [_c('div', {
    staticClass: "search-bar fr"
  }, [_vm._v("\n        商品编号：\n        "), _c('el-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "placeholder": "请输入商品编号",
      "size": "small"
    },
    model: {
      value: (_vm.searchTaxCutting.sku),
      callback: function($$v) {
        _vm.$set(_vm.searchTaxCutting, "sku", $$v)
      },
      expression: "searchTaxCutting.sku"
    }
  }), _vm._v("\n        商品名称：\n        "), _c('el-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "placeholder": "请输入商品名称",
      "size": "small"
    },
    model: {
      value: (_vm.searchTaxCutting.skuName),
      callback: function($$v) {
        _vm.$set(_vm.searchTaxCutting, "skuName", $$v)
      },
      expression: "searchTaxCutting.skuName"
    }
  }), _vm._v("\n        有效期：\n        "), _c('el-date-picker', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "date",
      "placeholder": "请选择日期",
      "size": "small"
    },
    on: {
      "change": _vm.dateStartTimeChangeClick
    },
    model: {
      value: (_vm.searchTaxCutting.startTime),
      callback: function($$v) {
        _vm.$set(_vm.searchTaxCutting, "startTime", $$v)
      },
      expression: "searchTaxCutting.startTime"
    }
  }), _vm._v("\n        -\n        "), _c('el-date-picker', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "date",
      "placeholder": "请选择日期",
      "size": "small"
    },
    on: {
      "change": _vm.dateEndTimeChangeClick
    },
    model: {
      value: (_vm.searchTaxCutting.endTime),
      callback: function($$v) {
        _vm.$set(_vm.searchTaxCutting, "endTime", $$v)
      },
      expression: "searchTaxCutting.endTime"
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
      "click": _vm.searchTaxCuttingClick
    }
  }, [_vm._v("搜索")])], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.dataLoading),
      expression: "dataLoading"
    }],
    ref: "taxCuttingRefTable",
    attrs: {
      "data": _vm.taxCuttingTable,
      "tooltip-effect": "dark",
      "highlight-current-row": "",
      "height": _vm.clientHeight
    },
    on: {
      "selection-change": _vm.onSelectionChange,
      "row-click": _vm.onRowClick,
      "row-dblclick": _vm.dbEditClick
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "55"
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
            "label": "商品编号"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.sku))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "商品名称"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.skuName))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "减免数量上限"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.topLmit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "减免税率%"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.rate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "有效期"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.validityDate))])]), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "100%"
          },
          attrs: {
            "label": "政策文件"
          }
        }, [_c('a', {
          staticClass: "a-btn",
          on: {
            "click": function($event) {
              _vm.lookPolicyPaperClick(props.row)
            }
          }
        }, [_vm._v(_vm._s(props.row.policyPaperTitle))])])], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sku",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "商品编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "skuName",
      "show-overflow-tooltip": "",
      "min-width": "25%",
      "label": "商品名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "topLmit",
      "show-overflow-tooltip": "",
      "min-width": "25%",
      "label": "减免数量上限"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "rate",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "减免税率"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "show-overflow-tooltip": "",
      "min-width": "35%",
      "label": "政策文件"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('a', {
          staticClass: "a-btn",
          on: {
            "click": function($event) {
              _vm.lookPolicyPaperClick(scope.row)
            }
          }
        }, [_vm._v(_vm._s(scope.row.policyPaperTitle))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "validityDate",
      "show-overflow-tooltip": "",
      "min-width": "25%",
      "label": "有效期"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "page-wrap"
  }, [_c('el-pagination', {
    staticClass: "page",
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": _vm.pageSizes,
      "page-size": _vm.pageSize,
      "total": _vm.total,
      "layout": "total, sizes, prev, pager, next"
    },
    on: {
      "size-change": _vm.sizeChangeHandler,
      "current-change": _vm.currentChangeHandler
    }
  })], 1)], 1), _vm._v(" "), _c('el-dialog', {
    staticClass: "mode-dialog",
    attrs: {
      "title": _vm.showTitleMode === 0 ? '新建' : '编辑',
      "visible": _vm.showAddDialog
    },
    on: {
      "update:visible": function($event) {
        _vm.showAddDialog = $event
      }
    }
  }, [_c('el-form', {
    ref: "taxCuttingForm",
    attrs: {
      "label-width": "140px",
      "model": _vm.tmpTaxCutting,
      "rules": _vm.taxCuttingRules
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
      "change": _vm.selectSKUChangeClick
    },
    model: {
      value: (_vm.tmpTaxCutting.sku),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "sku", $$v)
      },
      expression: "tmpTaxCutting.sku"
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
      "prop": "topLmit",
      "label": "减免数量上限："
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "215px"
    },
    attrs: {
      "placeholder": "请输入减免数量上限"
    },
    model: {
      value: (_vm.tmpTaxCutting.topLmit),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "topLmit", $$v)
      },
      expression: "tmpTaxCutting.topLmit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "rate",
      "label": "减免税率%："
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "215px"
    },
    attrs: {
      "placeholder": "请输入减免税率"
    },
    model: {
      value: (_vm.tmpTaxCutting.rate),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "rate", $$v)
      },
      expression: "tmpTaxCutting.rate"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "生效起始时间："
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      "width": "215px"
    },
    attrs: {
      "type": "date",
      "placeholder": "请选择日期"
    },
    on: {
      "change": _vm.dateStartDateChangeClick
    },
    model: {
      value: (_vm.tmpTaxCutting.startTime),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "startTime", $$v)
      },
      expression: "tmpTaxCutting.startTime"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "生效结束时间："
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      "width": "215px"
    },
    attrs: {
      "type": "date",
      "placeholder": "请选择日期"
    },
    on: {
      "change": _vm.dateEndDateChangeClick
    },
    model: {
      value: (_vm.tmpTaxCutting.endTime),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "endTime", $$v)
      },
      expression: "tmpTaxCutting.endTime"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "policyPaperTitle",
      "label": "政策文件标题："
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入政策文件标题"
    },
    model: {
      value: (_vm.tmpTaxCutting.policyPaperTitle),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "policyPaperTitle", $$v)
      },
      expression: "tmpTaxCutting.policyPaperTitle"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "policyPaperContent",
      "label": "政策文件内容："
    }
  }, [_c('el-input', {
    staticClass: "content",
    attrs: {
      "placeholder": "请输入政策文件内容",
      "type": "textarea"
    },
    model: {
      value: (_vm.tmpTaxCutting.policyPaperContent),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "policyPaperContent", $$v)
      },
      expression: "tmpTaxCutting.policyPaperContent"
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
        _vm.showAddDialog = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.confrimAddClick
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    staticClass: "mode-dialog",
    attrs: {
      "title": "查看政策文件",
      "visible": _vm.showLookDialog
    },
    on: {
      "update:visible": function($event) {
        _vm.showLookDialog = $event
      }
    }
  }, [_c('el-card', {
    staticClass: "box-card look-card"
  }, [_c('div', {
    staticClass: "clearfix",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('strong', {
    staticStyle: {
      "font-size": "18px",
      "text-align": "center"
    }
  }, [_vm._v(_vm._s(_vm.tmpTaxCutting.policyPaperTitle))])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-indent": "35px"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.tmpTaxCutting.policyPaperContent) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.showLookDialog = false
      }
    }
  }, [_vm._v("关 闭")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(168)
  __webpack_require__(170)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(172),
  /* template */
  __webpack_require__(174),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-78b1af65",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});