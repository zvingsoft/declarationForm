webpackJsonp([0],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(105),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-783a2bd6",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\git\\declarationForm\\mainUI\\source\\views\\form\\components\\packinglistTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] packinglistTable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-783a2bd6", Component.options)
  } else {
    hotAPI.reload("data-v-783a2bd6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("4b9cdef8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-783a2bd6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./packinglistTable.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-783a2bd6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./packinglistTable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.pack-table[data-v-783a2bd6] {\n  font-size: 10px;\n  min-width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _packinglistAPI = __webpack_require__(99);

var _packinglistAPI2 = _interopRequireDefault(_packinglistAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import '../mock/declaration.js';

exports.default = {
  data: function data() {
    return {
      packinglistData: []
    };
  },

  watch: {
    declarationID: function declarationID() {
      var _this = this;

      _packinglistAPI2.default.getPackingList(this.declarationID).then(function (data) {
        _this.packinglistData = data.data;
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    _packinglistAPI2.default.getPackingList(this.declarationID).then(function (data) {
      _this2.packinglistData = data.data;
    });
  },

  methods: {
    rowClick: function rowClick(row) {
      this.$emit('row-click', row);
    }
  },
  props: ['declarationID', 'declarationType']
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

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-table', {
    staticClass: "pack-table",
    attrs: {
      "data": _vm.packinglistData,
      "tooltip-effect": "dark",
      "highlight-current-row": ""
    },
    on: {
      "row-click": _vm.rowClick
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "label": "项号",
      "width": "60px"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "id",
      "min-width": "90px",
      "label": "商品编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "min-width": "200px",
      "label": "商品名称、规格型号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "number",
      "min-width": "80px",
      "label": "数量及单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "singleprice",
      "min-width": "60px",
      "label": "单价"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "totalprice",
      "min-width": "60px",
      "label": "总价"
    }
  }), _vm._v(" "), (_vm.declarationType == 'import') ? _c('el-table-column', {
    attrs: {
      "min-width": "80px",
      "prop": "productcountry",
      "label": "原产国"
    }
  }) : _c('el-table-column', {
    attrs: {
      "prop": "productcountry",
      "min-width": "80px",
      "label": "最终目的国"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "currency",
      "min-width": "60px",
      "label": "币制"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "exemption",
      "min-width": "60px",
      "label": "征免"
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-783a2bd6", module.exports)
  }
}

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(153);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("0fc67fcc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-78b1af65\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./taxCutting.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-78b1af65\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./taxCutting.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-78b1af65] {\n    padding: 10px;\n}\n.search-bar[data-v-78b1af65] {\n  padding-bottom: 10px;\n}\n.page-wrap[data-v-78b1af65] {\n  margin-top: 20px;\n}\n.page-wrap .page[data-v-78b1af65] {\n  float: right;\n}\n.a-btn[data-v-78b1af65]:hover {\n  text-decoration:underline;\n}\n.demo-table-expand[data-v-78b1af65] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-78b1af65] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-78b1af65] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n", ""]);

// exports


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(155);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("a652addc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-78b1af65\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./taxCutting.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-78b1af65\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./taxCutting.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.content .el-textarea__inner {\n  height: 300px;\n}\n.look-card .el-card__header{\n  text-align: center;\n}\n.mode-dialog .el-dialog__body{\n height: 600px;\n overflow:auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taxCuttingAPI = __webpack_require__(157);

var _taxCuttingAPI2 = _interopRequireDefault(_taxCuttingAPI);

var _packinglistTable = __webpack_require__(101);

var _packinglistTable2 = _interopRequireDefault(_packinglistTable);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    'packinglist-table': _packinglistTable2.default
  },
  data: function data() {
    return {
      declarationType: '',
      declarationID: '',
      showGoodsDialog: false,
      clientWidth: 0,
      showLookDialog: false,
      selectedRows: [],
      /* taxCuttingRules: {
        largetype: [
          {
            trigger: 'change', required: true,
            validator: (rule, value, callback) => {
              if (value) {
                callback();
              } else {
                callback(new Error('请选择减免税大类'));
              }
            }
          }
        ],
        smalltype: [
          {
            trigger: 'change', required: true,
            validator: (rule, value, callback) => {
              if (value) {
                callback();
              } else {
                callback(new Error('请选择减免税小类'));
              }
            }
          }
        ],
        way: [
          {
            trigger: 'change', required: true,
            validator: (rule, value, callback) => {
              if (value) {
                callback();
              } else {
                callback(new Error('请选择减免税方式'));
              }
            }
          }
        ],
        starttime: [
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
        endtime: [
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
        policypapertitle: [
          { required: true, message: '请输入政策文件标题', trigger: 'blur' },
          { min: 1, max: 400, message: '长度在 1 到 400 个字符', trigger: 'blur' }
        ],
        policypapercontent: [
          { required: true, message: '请输入政策文件内容', trigger: 'blur' },
          { min: 1, max: 4000, message: '长度在 1 到 4000 个字符', trigger: 'blur' }
        ],
      }, */
      showTitleMode: 0, // 0 新建 1 编辑
      showAddDialog: false, //新建dialog显示状态
      tmpTaxCutting: {},
      searchTaxCutting: {
        largeType: '',
        smallType: '',
        way: '',
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
    /*  rowClick(row){
       console.log(row)
       this.tmpTaxCutting.sku = row[0].id;
      }, */
    //商品保存
    confrimGoodsClick: function confrimGoodsClick() {
      // this.addGoodsClick = false;
    },

    //添加商品货号
    addGoodsClick: function addGoodsClick() {
      this.showGoodsDialog = true;
    },

    //查看政策文件
    lookPolicyPaperClick: function lookPolicyPaperClick(row) {
      this.tmpTaxCutting = Object.assign({}, row);
      this.showLookDialog = true;
    },

    //新建编辑确定
    confrimAddClick: function confrimAddClick() {
      var _this = this;

      /*  let validateForm = () => {
         return new Promise((resolve, reject) => {
           this.$refs['taxCuttingForm'].validate((valid) => {
             if (valid) {
               return resolve(true);
             }
             return reject(false);
           });
         });
       };
       validateForm().then(() => { */
      if (this.tmpTaxCutting.largeType === 'large') {
        this.tmpTaxCutting.largeTypeName = '鼓励高新技术';
      } else {
        this.tmpTaxCutting.largeTypeName = '';
      }
      if (this.tmpTaxCutting.smallType === 'technology') {
        this.tmpTaxCutting.smallTypeName = '支持科技事业';
      } else {
        this.tmpTaxCutting.smallTypeName = '';
      }
      if (this.tmpTaxCutting.way === 'approval') {
        this.tmpTaxCutting.wayName = '免税';
      } else if (this.tmpTaxCutting.way === 'filing') {
        this.tmpTaxCutting.wayName = '税率减免';
      } else {
        this.tmpTaxCutting.wayName = '';
      }
      if (this.showTitleMode === 0) {
        this.tmpTaxCutting.id = Math.round(Math.random() * 10000);
        _taxCuttingAPI2.default.addTaxCuttingData(this.tmpTaxCutting).then(function (data) {
          /*  this.taxCuttingTable = [
             {
               id: this.tmpTaxCutting.id,
               largeType: this.tmpTaxCutting.largeType,
               smallType: this.tmpTaxCutting.smallType,
               way: this.tmpTaxCutting.way,
               amountcap: this.tmpTaxCutting.amountcap,
               rate: this.tmpTaxCutting.rate,
               policyPaperTitle: this.tmpTaxCutting.policyPaperTitle,
               policyPaperContent: this.tmpTaxCutting.policyPaperContent
             },
             ...this.taxCuttingTable
           ] */
          // if(data.status === 1) {
          _this.showAddDialog = false;
          _this.$message.success("新建成功");
          _this.getTaxCuttingData();
          /*   }else {
              this.$message.error("新建失败");
            } */
        });
      } else if (this.showTitleMode === 1) {
        _taxCuttingAPI2.default.editTaxCuttingData(this.tmpTaxCutting).then(function (data) {
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
      /*  }).catch(() => {
          this.$message.error('没有正确填写表单项');
       }) */
    },

    //编辑
    editTaxCuttingClick: function editTaxCuttingClick() {
      this.showTitleMode = 1;
      this.tmpTaxCutting = Object.assign({}, this.selectedRows[0]);
      this.showAddDialog = true;
    },

    //新建
    addTaxCuttingClick: function addTaxCuttingClick() {
      this.showTitleMode = 0;
      this.tmpTaxCutting = {
        id: '',
        sku: '',
        largeType: '',
        largeTypeName: '',
        smallType: '',
        smallTypeName: '',
        way: '',
        wayName: '',
        topLmit: '',
        rate: '',
        policyPaperTitle: '',
        policyPaperContent: '',
        startTime: '',
        endTime: ''
      }, this.showAddDialog = true;
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
      this.tmpTaxCutting.startTime = this.formatDate(new Date(this.tmpTaxCutting.startTime), 'yyyy-MM-dd');
    },
    dateEndDateChangeClick: function dateEndDateChangeClick() {
      this.tmpTaxCutting.endTime = this.formatDate(new Date(this.tmpTaxCutting.endTime), 'yyyy-MM-dd');
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
      _taxCuttingAPI2.default.getTaxCuttingData(this.currentPage, this.pageSize, this.searchTaxCutting.largeType, this.searchTaxCutting.smallType, this.searchTaxCutting.way, this.searchTaxCutting.startTime, this.searchTaxCutting.endTime).then(function (data) {
        _this3.taxCuttingTable = data;
        _this3.total = data.length;
        if (_this3.searchTaxCutting.largeType != '') {
          _this3.taxCuttingTable = _this3.taxCuttingTable.filter(function (val) {
            return val.largetype.indexOf(_this3.searchTaxCutting.largeType) != -1;
          });
        }
        if (_this3.searchTaxCutting.smallType != '') {
          _this3.taxCuttingTable = _this3.taxCuttingTable.filter(function (val) {
            return val.smalltype.indexOf(_this3.searchTaxCutting.smallType) != -1;
          });
        }
        if (_this3.searchTaxCutting.way != '') {
          _this3.taxCuttingTable = _this3.taxCuttingTable.filter(function (val) {
            return val.way.indexOf(_this3.searchTaxCutting.way) != -1;
          });
        }
        if (_this3.searchTaxCutting.startTime != '' || _this3.searchTaxCutting.endTime != '') {
          _this3.taxCuttingTable = _this3.taxCuttingTable.filter(function (val) {
            return val.validityDate.indexOf(_this3.searchTaxCutting.startTime + " - " + _this3.searchTaxCutting.endTime) != -1;
          });
        }
        _this3.dataLoading = false;
      });
    }
  },
  created: function created() {
    this.clientWidth = document.documentElement.clientWidth - 200;
    this.clientHeight = document.documentElement.clientHeight - 230;
    this.getTaxCuttingData();
    /* this.getLargeTypesData();
    this.getSmallTypesData();
    this.getWaysData(); */
  }
};

/***/ }),

/***/ 157:
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

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

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
  }, [_vm._v("\n        减免税大类：\n        "), _c('el-select', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "size": "small",
      "clearable": ""
    },
    model: {
      value: (_vm.searchTaxCutting.largetype),
      callback: function($$v) {
        _vm.$set(_vm.searchTaxCutting, "largetype", $$v)
      },
      expression: "searchTaxCutting.largetype"
    }
  }, _vm._l((_vm.largetypes), function(largetype) {
    return _c('el-option', {
      key: largetype.key,
      attrs: {
        "label": largetype.name,
        "value": largetype.key
      }
    })
  })), _vm._v("\n         减免税小类：\n        "), _c('el-select', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "size": "small",
      "clearable": ""
    },
    model: {
      value: (_vm.searchTaxCutting.smalltype),
      callback: function($$v) {
        _vm.$set(_vm.searchTaxCutting, "smalltype", $$v)
      },
      expression: "searchTaxCutting.smalltype"
    }
  }, _vm._l((_vm.smalltypes), function(smalltype) {
    return _c('el-option', {
      key: smalltype.key,
      attrs: {
        "label": smalltype.name,
        "value": smalltype.key
      }
    })
  })), _vm._v("\n        减免税方式：\n        "), _c('el-select', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "size": "small",
      "clearable": ""
    },
    model: {
      value: (_vm.searchTaxCutting.way),
      callback: function($$v) {
        _vm.$set(_vm.searchTaxCutting, "way", $$v)
      },
      expression: "searchTaxCutting.way"
    }
  }, _vm._l((_vm.ways), function(way) {
    return _c('el-option', {
      key: way.key,
      attrs: {
        "label": way.name,
        "value": way.key
      }
    })
  })), _vm._v("\n        有效期：\n        "), _c('el-date-picker', {
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
    attrs: {
      "data": _vm.taxCuttingTable,
      "tooltip-effect": "dark",
      "highlight-current-row": "",
      "height": _vm.clientHeight
    },
    on: {
      "selection-change": _vm.onSelectionChange
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
            "label": "编号"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.id))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "货号"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.sku))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "减免税大类"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.largeTypeName))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "减免税小类"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.smallTypeName))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "减免税方式"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.wayName))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "减免税上限"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.topLmit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "优惠税率"
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
      "prop": "id",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sku",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "货号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "wayName",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "减免税方式"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "topLmit",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "减免税上限"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "rate",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "减免税率"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "show-overflow-tooltip": "",
      "min-width": "30%",
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
      "prop": "largetype",
      "label": "减免税大类："
    }
  }, [_c('el-select', {
    attrs: {
      "size": "small",
      "clearable": ""
    },
    model: {
      value: (_vm.tmpTaxCutting.largeType),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "largeType", $$v)
      },
      expression: "tmpTaxCutting.largeType"
    }
  }, _vm._l((_vm.largetypes), function(largetype) {
    return _c('el-option', {
      key: largetype.key,
      attrs: {
        "label": largetype.name,
        "value": largetype.key
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "smalltype",
      "label": "减免税小类："
    }
  }, [_c('el-select', {
    attrs: {
      "size": "small",
      "clearable": ""
    },
    model: {
      value: (_vm.tmpTaxCutting.smallType),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "smallType", $$v)
      },
      expression: "tmpTaxCutting.smallType"
    }
  }, _vm._l((_vm.smalltypes), function(smalltype) {
    return _c('el-option', {
      key: smalltype.key,
      attrs: {
        "label": smalltype.name,
        "value": smalltype.key
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "smalltype",
      "label": "减免税方式："
    }
  }, [_c('el-select', {
    attrs: {
      "size": "small",
      "clearable": ""
    },
    model: {
      value: (_vm.tmpTaxCutting.way),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "way", $$v)
      },
      expression: "tmpTaxCutting.way"
    }
  }, _vm._l((_vm.ways), function(way) {
    return _c('el-option', {
      key: way.key,
      attrs: {
        "label": way.name,
        "value": way.key
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "货号："
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "215px"
    },
    attrs: {
      "readonly": true
    },
    model: {
      value: (_vm.tmpTaxCutting.sku),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "sku", $$v)
      },
      expression: "tmpTaxCutting.sku"
    }
  }), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.addGoodsClick
    }
  }, [_vm._v("添加")])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
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
      "label": "减免税率："
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
      "placeholder": "请选择日期",
      "size": "small"
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
      "placeholder": "请选择日期",
      "size": "small"
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
  }, [_vm._v("关 闭")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    staticClass: "mode-dialog",
    attrs: {
      "title": "选择商品",
      "visible": _vm.showGoodsDialog
    },
    on: {
      "update:visible": function($event) {
        _vm.showGoodsDialog = $event
      }
    }
  }, [_c('packinglist-table', {
    attrs: {
      "declarationID": _vm.declarationID,
      "declarationType": _vm.declarationType
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.showGoodsDialog = false
      }
    }
  }, [_vm._v("关 闭")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.confrimGoodsClick
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-78b1af65", module.exports)
  }
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(152)
  __webpack_require__(154)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(156),
  /* template */
  __webpack_require__(158),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-78b1af65",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\git\\declarationForm\\mainUI\\source\\views\\setting\\taxCutting.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] taxCutting.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78b1af65", Component.options)
  } else {
    hotAPI.reload("data-v-78b1af65", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 99:
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

/***/ })

});