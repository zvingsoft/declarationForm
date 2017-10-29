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
var update = __webpack_require__(1)("45803886", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f04547b\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tax.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f04547b\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tax.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-5f04547b] {\n  padding: 10px;\n}\n.width-300[data-v-5f04547b] {\n  width: 300px;\n}\n.width-230[data-v-5f04547b] {\n  width: 230px;\n}\n.page-wrap[data-v-5f04547b] {\n  margin-top: 20px;\n}\n.page-wrap .page[data-v-5f04547b] {\n  float: right;\n}\n.search-bar[data-v-5f04547b] {\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-5f04547b] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-5f04547b] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-5f04547b] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/tax.vue?30aee54a"],"names":[],"mappings":";AAoWA;EACA,cAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,iBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,qBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA","file":"tax.vue","sourcesContent":["<template>\n  <div>\n    <el-toolbar>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"plus\" @click=\"addTax\">新建</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"edit\" :disabled=\"selectedRows.length !== 1\" @click=\"editTax\">编辑</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"delete\" :disabled=\"selectedRows.length === 0\" @click=\"deleteTaxs\">删除</el-button>\n    </el-toolbar>\n    <div class=\"main-content-wrap\">\n      <div class=\"search-bar fr\">\n        税号:\n        <el-input v-model=\"search.taxNum\" size=\"small\" placeholder=\"请输入税号\" style=\"width: 200px;\"></el-input>\n        商品名称：\n        <el-input v-model=\"search.taxGoodsType\" size=\"small\" placeholder=\"请输入商品名称\" style=\"width: 200px;\"></el-input>\n        <el-button size=\"small\" type=\"primary\" @click=\"handleSearchBtn\" style=\"width: 60px;\">搜索</el-button>\n      </div>\n      <!--表格-->\n      <div>\n        <el-table :data=\"taxTable\"  ref=\"taxTable\"  @selection-change=\"onSelectionChange\" @row-click=\"rowClick\"  @row-dblclick=\"dblclickTax\" >\n          <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n          <el-table-column type=\"expand\">\n            <template slot-scope=\"props\">\n              <el-form label-position=\"left\" inline class=\"demo-table-expand\" label-width=\"120px\">\n                <el-form-item label=\"税号\">\n                  <span>{{props.row.taxNum}}</span>\n                </el-form-item>\n                <el-form-item label=\"商品名称\">\n                  <span>{{props.row.skuname}}</span>\n                </el-form-item>\n                <!-- <el-form-item label=\"单位\">\n                  <span>{{props.row.unit}}</span>\n                </el-form-item> -->\n                <el-form-item label=\"税率%\">\n                  <span>{{props.row.rate}}</span>\n                </el-form-item>\n                <el-form-item label=\"免征额\">\n                  <span>{{props.row.exemption}}</span>\n                </el-form-item>\n                <el-form-item label=\"最后修改\">\n                  <span>{{props.row.modifyDate}}</span>\n                </el-form-item>\n                <el-form-item label=\"范围\" style=\"width:100%;\">\n                  <span>{{props.row.range}}</span>\n                </el-form-item>\n              </el-form>\n            </template>\n          </el-table-column>\n          <el-table-column prop=\"taxNum\" min-width=\"25%\" label=\"税号\">\n            <template slot-scope=\"scope\">\n             <a @click=\"lookClick(scope.row)\" class=\"a-btn\">{{scope.row.taxNum}}</a>\n           </template>\n          </el-table-column>\n          <el-table-column prop=\"skuname\" min-width=\"35%\" label=\"商品名称\"></el-table-column>\n          <!-- <el-table-column prop=\"unit\" min-width=\"10%\" label=\"单位\"></el-table-column> -->\n          <el-table-column prop=\"rate\" min-width=\"10%\" label=\"税率%\"></el-table-column>\n          <el-table-column prop=\"exemption\" min-width=\"10%\" label=\"免征额\"></el-table-column>\n          <el-table-column prop=\"modifyDate\" min-width=\"20%\" label=\"最后修改\"></el-table-column>\n        </el-table>\n      </div>\n      <!--分页-->\n      <div class=\"page-wrap\">\n        <el-pagination class=\"page\" @size-change=\"sizeChangeHandler\" @current-change=\"currentChangeHandler\" :current-page.sync=\"currentPage\" :page-sizes=\"pageSizes\" :page-size=\"pageSize\" :total=\"total\" layout=\"total,sizes, prev, pager, next\">\n        </el-pagination>\n      </div>\n    </div>\n\n    <!-- 新建,编辑对话框 -->\n    <el-dialog :title=\"addOrEdit==1?'新建':'编辑'\" :visible.sync=\"showDialog\" @close=\"closeAddOrEditDialog\">\n      <el-form label-width=\"160px\" :model=\"tmpTax\" :rules=\"taxRules\" ref=\"taxForm\">\n        <el-form-item label=\"税号：\" prop=\"taxNum\">\n          <el-input placeholder=\"请输入税号\" v-model=\"tmpTax.taxNum\" class=\"width-230\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"商品：\" >\n        <el-select class=\"width-230\" filterable v-model=\"tmpTax.sku\" placeholder=\"请选择一种商品\" @change=\"selectSku\" >\n              <el-option v-for=\"item in SKUData\" :key=\"item.sn\" :label=\"item.name\" :value=\"item.sn\">\n                <span style=\"float: left\">{{ item.sn }}</span>\n                <span style=\"float: right; color: #8492a6; font-size: 13px\">{{ item.name }}</span>\n              </el-option>\n        </el-select>\n        </el-form-item>\n        <!-- <el-form-item label=\"单位：\">\n          <el-input placeholder=\"请输入单位\" v-model=\"tmpTax.unit\" class=\"width-230\"></el-input>\n        </el-form-item> -->\n        <el-form-item label=\"税率%：\">\n          <el-input placeholder=\"请输入税率\" v-model=\"tmpTax.rate\" class=\"width-230\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"免征额：\">\n          <el-input-number v-model=\"tmpTax.exemption\" :min=\"0\" class=\"width-230\"></el-input-number>\n        </el-form-item>\n        <el-form-item label=\"范围：\">\n          <el-input placeholder=\"请填写范围\" type=\"textarea\" autosize=\"true\" v-model=\"tmpTax.range\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"resetTax\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"saveTax\" :disabled=\"saveTaxStatus\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n  </div>\n</template>\n\n<script>\nimport taxAPI from './api/taxAPI.js';\nimport skuAPI from './api/skuAPI.js';\n// import './mock/tax.js';\n\nexport default {\n  data() {\n    return {\n      taxTable: [],\n      temtaxTable: [],\n      currentPage: 1,\n      total: 50,\n      pageSize: 5,\n      pageSizes: [5, 10, 15, 20],\n      selectedRows: [],\n      showDialog: false,\n      addOrEdit: 1,\n      tmpTax: {},\n      taxRules: {\n        taxNum: [{ required: true, message: '请输入税号', trigger: 'blur' }],\n        taxGoodsType: [{ required: true, message: '请输入物品类型', trigger: 'blur' }],\n      },\n      saveTaxStatus: false,\n      search: { taxNum: '', taxGoodsType: '' },\n      SKUData: [],\n    };\n  },\n  methods: {\n    onSelectionChange(selection) {\n      this.selectedRows = selection;\n    },\n    handleSearchBtn() {\n      // this.currentPage=1;\n      // this.getTaxData();\n      this.taxTable = Object.assign([], this.temtaxTable);\n      let temTaxnum = this.search.taxNum;\n      let temTaxGoodsType = this.search.taxGoodsType;\n      if (temTaxnum != '' || temTaxGoodsType != '') {\n        if (temTaxnum != '') {\n          this.taxTable = this.taxTable.filter(\n            val => val.taxNum.indexOf(temTaxnum) != -1\n          );\n        }\n        if (temTaxGoodsType != '') {\n          this.taxTable = this.taxTable.filter(\n            val => val.skuname.indexOf(temTaxGoodsType) != -1\n          );\n        }\n      }\n      this.total = this.taxTable.length;\n    },\n    sizeChangeHandler(val) {\n      this.pageSize = val;\n    },\n    currentChangeHandler(val) {\n      this.currentPage = val;\n    },\n    //关闭事件\n    closeAddOrEditDialog() {\n      if (!this.tmpTax.taxNum || this.tmpTax.taxNum == '') {\n        this.$refs['taxForm'].resetFields();\n      }\n      this.showDialog = false;\n    },\n    //取消\n    resetTax() {\n      this.$refs['taxForm'].resetFields();\n      this.showDialog = false;\n    },\n    //新建\n    addTax() {\n      this.addOrEdit = 1;\n      this.tmpTax = {};\n      this.saveTaxStatus = false;\n      this.showDialog = true;\n      skuAPI.getSKU().then(data => {\n        this.SKUData = data;\n      });\n    },\n    //单机\n    rowClick(row, event, column) {\n      if (column.type != 'selection') {\n        this.$refs.taxTable.clearSelection();\n      }\n      this.$refs.taxTable.toggleRowSelection(row);\n    },\n    //双击\n    dblclickTax(row) {\n      this.addOrEdit = 2;\n      this.saveTaxStatus = false;\n      this.tmpTax = Object.assign({}, row);\n      this.showDialog = true;\n      skuAPI.getSKU().then(data => {\n        this.SKUData = data;\n      });\n    },\n    //链接\n    lookClick(row) {\n      this.addOrEdit = 2;\n      this.saveTaxStatus = false;\n      this.tmpTax = Object.assign({}, row);\n      this.showDialog = true;\n      skuAPI.getSKU().then(data => {\n        this.SKUData = data;\n      });\n    },\n    //编辑\n    editTax() {\n      this.addOrEdit = 2;\n      this.saveTaxStatus = false;\n      this.tmpTax = Object.assign({}, this.selectedRows[0]);\n      this.showDialog = true;\n      skuAPI.getSKU().then(data => {\n        this.SKUData = data;\n      });\n    },\n    //新建和编辑时保存\n    saveTax() {\n      this.$refs['taxForm'].validate(valid => {\n        if (valid) {\n          let temRate = this.tmpTax.rate;\n          if (temRate && temRate != '') {\n            if (isNaN(temRate)) {\n              this.$alert('税率必须是数字！', '提示');\n              return;\n            }\n          }\n          this.saveTaxStatus = true;\n          if (this.tmpTax.rate && this.tmpTax.rate != '') {\n          }\n          if (this.addOrEdit == 1) {\n            taxAPI.addTax(this.tmpTax).then(data => {\n              if (data.status == 1) {\n                this.getTaxData();\n                this.$message.success(data.message);\n              } else {\n                this.$message.error(data.message);\n              }\n              this.saveTaxStatus = false;\n              this.showDialog = false;\n            });\n          } else if (this.addOrEdit == 2) {\n            taxAPI.editTax(this.tmpTax.id, this.tmpTax).then(data => {\n              if (data.status == 1) {\n                this.getTaxData();\n                this.temtaxTable = Object.assign([], this.taxTable);\n                this.$message.success(data.message);\n              } else {\n                this.$message.error(data.message);\n              }\n              this.saveTaxStatus = false;\n              this.showDialog = false;\n            });\n          }\n        } else {\n          this.$alert('请填写正确选项', '提示');\n          return false;\n        }\n      });\n    },\n    deleteTaxs() {\n      let rowIds = [];\n      this.selectedRows.forEach(function(row) {\n        rowIds.push(row.id);\n      });\n\n      this.$confirm('确认删除所选的数据?', '提示', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action == 'confirm') {\n            instance.confirmButtonLoading = true;\n            return taxAPI.deleteTaxs(rowIds).then(data => {\n              if (data.status == 1) {\n                this.taxTable = this.taxTable.filter(\n                  val => !rowIds.includes(val.id)\n                );\n                this.temtaxTable = Object.assign([], this.taxTable);\n                this.total = this.taxTable.length;\n                this.$notify({\n                  title: '成功',\n                  message: data.message,\n                  type: 'success',\n                  duration: 2000,\n                });\n              } else {\n                this.$alert(data.message);\n              }\n              instance.confirmButtonLoading = false;\n              done(data);\n            });\n          } else {\n            done();\n          }\n        },\n      }).catch(() => {\n        this.$notify.info({\n          title: '取消',\n          message: '操作取消！',\n          duration: 2000,\n        });\n      });\n    },\n    //格式化时间 格式化时间为yyyy-MM-dd hh:mm:ss\n    formatDate(date, fmt) {\n      if (/(y+)/.test(fmt)) {\n        fmt = fmt.replace(\n          RegExp.$1,\n          (date.getFullYear() + '').substr(4 - RegExp.$1.length)\n        );\n      }\n      let o = {\n        'M+': date.getMonth() + 1,\n        'd+': date.getDate(),\n        'h+': date.getHours(),\n        'm+': date.getMinutes(),\n        's+': date.getSeconds(),\n      };\n      for (let k in o) {\n        if (new RegExp(`(${k})`).test(fmt)) {\n          let str = o[k] + '';\n          fmt = fmt.replace(\n            RegExp.$1,\n            RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length)\n          );\n        }\n      }\n      return fmt;\n    },\n    getTaxData() {\n      taxAPI.getTaxData().then(data => {\n        this.taxTable = data.data;\n        this.temtaxTable = Object.assign([], this.taxTable);\n        this.total = this.taxTable.length;\n      });\n    },\n    selectSku(val) {\n      let skuname = '';\n      this.SKUData.forEach(function(row) {\n        if (row.sn == val) {\n          skuname = row.name;\n          return;\n        }\n      });\n      this.tmpTax.skuname = skuname;\n    },\n  },\n  created() {\n    this.getTaxData();\n  },\n};\n</script>\n\n<style scoped>\n.main-content-wrap {\n  padding: 10px;\n}\n\n.width-300 {\n  width: 300px;\n}\n\n.width-230 {\n  width: 230px;\n}\n\n.page-wrap {\n  margin-top: 20px;\n}\n\n.page-wrap .page {\n  float: right;\n}\n\n.search-bar {\n  padding-bottom: 10px;\n}\n\n.demo-table-expand {\n  font-size: 12px;\n}\n\n.demo-table-expand label {\n  color: #99a9bf;\n}\n\n.demo-table-expand .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n</style>\n"],"sourceRoot":""}]);

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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f04547b", module.exports)
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
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
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\setting\\tax.vue"
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
//# sourceMappingURL=taxUI-tax.js.map