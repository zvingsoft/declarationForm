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
  getDeclarationById: function getDeclarationById(id) {
    return axios.get('/form/form/' + id).then(function (res) {
      return res.data;
    });
  },
  addDeclaration: function addDeclaration(declaration) {
    console.log(declaration);
    return axios.post('/form/form', JSON.parse(JSON.stringify(declaration)));
  },
  updateDeclaration: function updateDeclaration(declaration) {
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
    console.log(taxRegister);
    return axios.post('/tax/taxRegister', JSON.parse(JSON.stringify(taxRegister)));
  },
  updateTaxRegister: function updateTaxRegister(taxRegister) {
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
var update = __webpack_require__(1)("b8799a52", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b1ddfcb8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./taxRegister.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b1ddfcb8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./taxRegister.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-b1ddfcb8] {\n  padding: 10px;\n}\n.search-bar[data-v-b1ddfcb8] {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n.page-wrap[data-v-b1ddfcb8] {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n.e-input[data-v-b1ddfcb8] {\n  width: 240px;\n}\n.search-select[data-v-b1ddfcb8] {\n  width: 140px;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/form/taxRegister.vue?758d8028"],"names":[],"mappings":";AAuVA;EACA,cAAA;CACA;AAEA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;CACA;AAEA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,SAAA;EACA,oBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,aAAA;CACA","file":"taxRegister.vue","sourcesContent":["<template slot-scope=\"scope\">\n  <div :style=\"{width:clientWidth+'px'}\">\n    <el-toolbar>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addClick\">\n        <i class=\"fa fa-plus\"></i> 新建</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0  || registered\" @click=\"editClick\">\n        <i class=\"fa fa-edit\"></i> 编辑</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0\" @click=\"deleteClick\">\n        <i class=\"fa fa-remove\"></i> 删除</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0 || registered\" @click=\"registerClick('')\">\n        <i class=\"fa fa-check\"></i> 确认缴税</el-button>\n    </el-toolbar>\n    <div class=\"main-content-wrap\">\n      <div class=\"search-bar\">\n        排序：\n        <el-select size=\"small\" v-model=\"sort\" class=\"search-select\">\n          <el-option v-for=\"item in sortOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        缴税状态：\n        <el-select size=\"small\" v-model=\"registerStatus\" class=\"search-select\">\n          <el-option v-for=\"item in registerStatusOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        检索字段：\n        <el-select size=\"small\" v-model=\"retrieval\" class=\"search-select\">\n          <el-option v-for=\"item in retrievalOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        <el-input style=\"width:200px\" size=\"small\" v-model=\"searchWord\"></el-input>\n        <el-button size=\"small\" type=\"primary\" @click=\"getTaxRegisterData\" style=\"width:60px;\">搜索</el-button>\n      </div>\n      <el-table :data=\"taxRegisterData\" v-loading=\"dataLoading\" tooltip-effect=\"dark\" style=\"width:100%\" :height=\"clientHeight\" highlight-current-row @selection-change=\"onSelectionChange\" @row-dblclick=\"rowDBClick\">\n        <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n        <el-table-column prop=\"id\" show-overflow-tooltip min-width=\"12%\" label=\"报关单海关编号\"></el-table-column>\n        <el-table-column prop=\"taxAmount\" show-overflow-tooltip min-width=\"15%\" label=\"缴税金额\"></el-table-column>\n        <el-table-column prop=\"registerDate\" show-overflow-tooltip min-width=\"15%\" label=\"缴税时间\"></el-table-column>\n        <el-table-column min-width=\"15%\" label=\"操作\">\n          <template slot-scope=\"scope\">\n            <el-button type=\"text\" :disabled=\"scope.row.registerStatus == 'Y'\" @click=\"registerClick(scope.row.id)\">\n              <span style=\"color:green;\">确认缴税</span>\n            </el-button>\n          </template>\n        </el-table-column>\n      </el-table>\n      <div class=\"page-wrap\">\n        <el-pagination @size-change=\"handleSizeChange\" @current-change=\"handleCurrentChange\" :current-page=\"currentPage\" :page-sizes=\"pageSizes\" :page-size=\"pageSize\" layout=\"total, sizes, prev, pager, next\" :total=\"total\">\n        </el-pagination>\n      </div>\n    </div>\n    <el-dialog :title=\"editMode==1? '编辑缴税单信息': '添加缴税单'\" :visible.sync=\"registerDialogModal\" :close-on-click-modal=\"false\">\n      <el-form label-position=\"right\" ref=\"taxRegisterForm\" :model=\"tmpTaxRegister\" label-width=\"150px\">\n        <el-form-item label=\"报关单海关编号：\">\n          <el-input class=\"e-input\" v-model.number=\"tmpTaxRegister.id\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"缴税金额：\" prop=\"taxAmount\" :rules=\"[{ type: 'number', message: '缴税金额必须为数字值', trigger: 'change'}]\">\n          <el-input class=\"e-input\" v-model.number=\"tmpTaxRegister.taxAmount\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"缴税时间：\">\n          <el-date-picker v-model=\"tmpTaxRegister.registerDate\" @change=\"registerDateChange\" type=\"date\" class=\"e-input\" placeholder=\"选择缴税日期\">\n          </el-date-picker>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"registerDialogModal = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"registerDialogConfirm\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n  </div>\n</template>\n\n<script>\nimport taxRegisterAPI from './api/taxRegisterAPI';\nimport declarationAPI from './api/declarationAPI.js';\nimport packinglistAPI from './api/packinglistAPI.js';\nimport auditingAPI from './api/auditingAPI.js';\n//import './mock/declaration.js';\nimport declarationList from './components/declarationList.vue';\n\nexport default {\n  data() {\n    return {\n      declarationIds: [],\n      declarationOptions: [],\n      registered: false,\n      declarationList: [],\n      declarationListDialogModal: false,\n      registerDialogModal: false,\n      statu: false,\n      clientWidth: 0,\n      clientHeight: 0,\n      searchWord: '',\n      selectedRows: [],\n      taxRegisterData: [],\n      currentPage: 1,\n      pageSizes: [10, 20, 50],\n      pageSize: 10,\n      total: 0,\n      editMode: 1,\n      tmpTaxRegister: {},\n      dataLoading: false,\n      sort: '',\n      sortOptions: [\n        {\n          key: '',\n          value: '请选择排序',\n        },\n        {\n          key: 'registerNumber',\n          value: '缴税单号',\n        },\n        {\n          key: 'registerDate',\n          value: '缴税日期',\n        },\n      ],\n      registerStatus: '',\n      registerStatusOptions: [\n        {\n          key: '',\n          value: '请选择缴税状态',\n        },\n        {\n          key: 'Y',\n          value: '已缴税',\n        },\n        {\n          key: 'N',\n          value: '未缴税',\n        },\n      ],\n      retrieval: '',\n      retrievalOptions: [\n        {\n          key: '',\n          value: '请选择检索字段',\n        },\n        {\n          key: 'id',\n          value: '报关单海关编号',\n        },\n        {\n          key: 'registerDate',\n          value: '缴税时间',\n        },\n      ],\n    };\n  },\n  methods: {\n    showDeclarationist(id, ids) {\n      this.id = id;\n      this.declarationIds = ids;\n      this.declarationListDialogModal = true;\n    },\n    listCallback(selection) {\n      Vue.set(this.tmpTaxRegister, 'declarationList', selection);\n    },\n    addClick() {\n      this.editMode = 0;\n      this.tmpTaxRegister = {\n        id: Math.random() * 99999 + 1,\n        declarationIds: [],\n      };\n      this.registerDialogModal = true;\n    },\n    editClick() {\n      if (this.selectedRows.length == 0) {\n        this.$message('请选择要编辑的缴税单', 'info');\n        return;\n      }\n      this.tmpTaxRegister = Object.assign({}, this.selectedRows[0]);\n      this.editMode = 1;\n      this.registerDialogModal = true;\n    },\n    registerDialogConfirm() {\n      this.$refs['taxRegisterForm'].validate(valid => {\n        if (valid) {\n          if (this.editMode == 0) {\n            taxRegisterAPI.addTaxRegister(this.tmpTaxRegister).then(res => {\n              if (res.status == 200) {\n                this.$notify({\n                  title: '成功',\n                  message: res.data,\n                  type: 'success',\n                  duration: 2000,\n                });\n                this.registerDialogModal = false;\n                this.getTaxRegisterData();\n              }\n            });\n          }\n          if (this.editMode == 1) {\n            taxRegisterAPI.updateTaxRegister(this.tmpTaxRegister).then(res => {\n              if (res.status == 200) {\n                this.$notify({\n                  title: '成功',\n                  message: res.data,\n                  type: 'success',\n                  duration: 2000,\n                });\n                this.registerDialogModal = false;\n                this.getTaxRegisterData();\n              }\n            });\n          }\n        } else {\n          this.$notify({\n            title: '操作失败',\n            message: '请正确填写表单项',\n            type: 'error',\n            duration: 2000,\n          });\n          return false;\n        }\n      });\n    },\n    registerClick(id) {\n      let rowIds = [];\n      if (id != '') {\n        rowIds = [id];\n      } else {\n        this.selectedRows.forEach(function(row) {\n          rowIds.push(row.id);\n        });\n      }\n      taxRegisterAPI.registerConfrim(rowIds).then(res => {\n        this.$notify({\n          title: '提示',\n          message: res.data,\n          type: 'success',\n          duration: 2000,\n        });\n        this.getTaxRegisterData();\n      });\n    },\n    deleteClick() {\n      if (this.selectedRows.length == 0) {\n        this.$message('请选择要编辑的缴税单', 'info');\n        return;\n      }\n      let rowIds = [];\n      this.selectedRows.forEach(function(row) {\n        rowIds.push(row.id);\n      });\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n      })\n        .then(() => {\n          return taxRegisterAPI.deleteTaxRegister(rowIds).then(res => {\n            if (res.status == 200) {\n              this.$notify({\n                title: '成功',\n                message: res.data,\n                type: 'success',\n                duration: 2000,\n              });\n              this.getTaxRegisterData();\n            }\n          });\n        })\n        .catch(() => {\n          this.$notify.error({\n            title: '取消',\n            message: '操作取消！',\n            duration: 2000,\n          });\n        });\n    },\n    registerDateChange(val) {\n      this.tmpTaxRegister.registerDate = val;\n    },\n    rowDBClick(row) {\n      this.tmpTaxRegister = Object.assign({}, row);\n      this.registerDialogModal = true;\n    },\n    getTaxRegisterData() {\n      this.dataLoading = true;\n      let obj = {\n        retrieval: this.retrieval,\n        searchWord: this.searchWord,\n        pageSize: this.pageSize,\n        pageIndex: this.currentPage,\n      };\n      taxRegisterAPI.getTaxRegisterList(obj).then(data => {\n        console.log(data);\n        this.taxRegisterData = [];\n        if (data.length > 0) {\n          this.total = data[0].total;\n        }\n        data.forEach(o => {\n          if (this.registerStatus != '') {\n            if (this.registerStatus == o.registerStatus) {\n              if (this.retrieval == '' || this.searchWord == '') {\n                this.taxRegisterData.push(o);\n              } else if (o[this.retrieval].indexOf(this.searchWord) >= 0) {\n                this.taxRegisterData.push(o);\n              }\n            }\n          } else {\n            if (this.retrieval == '' || this.searchWord == '') {\n              this.taxRegisterData.push(o);\n            } else if (o[this.retrieval].indexOf(this.searchWord) >= 0) {\n              this.taxRegisterData.push(o);\n            }\n          }\n        });\n        this.dataLoading = false;\n      });\n    },\n    onSelectionChange(selection) {\n      this.selectedRows = selection;\n      console.log(selection);\n      this.registered = false;\n      selection.forEach(o => {\n        if (o.registerStatus == 'Y') {\n          this.registered = true;\n        }\n      });\n    },\n    handleSizeChange(val) {\n      this.pageSize = val;\n      this.getTaxRegisterData();\n    },\n    handleCurrentChange(val) {\n      this.currentPage = val;\n      this.getTaxRegisterData();\n    },\n  },\n  created() {\n    this.clientWidth = document.documentElement.clientWidth - 200;\n    this.clientHeight = document.documentElement.clientHeight - 200;\n    this.getTaxRegisterData();\n  },\n  components: {\n    'declaration-list': declarationList,\n  },\n};\n</script>\n\n<style scoped>\n.main-content-wrap {\n  padding: 10px;\n}\n\n.search-bar {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n\n.page-wrap {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n\n.e-input {\n  width: 240px;\n}\n\n.search-select {\n  width: 140px;\n}\n</style>\n"],"sourceRoot":""}]);

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
        id: Math.random() * 99999 + 1,
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

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
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
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\form\\components\\declarationList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] declarationList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-da7de60e", Component.options)
  } else {
    hotAPI.reload("data-v-da7de60e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

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
var update = __webpack_require__(1)("63918cee", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-da7de60e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./declarationList.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-da7de60e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./declarationList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.search-bar[data-v-da7de60e] {\n  width: 100%;\n  text-align: right;\n  padding: 5px;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/form/components/declarationList.vue?7ea9f7ff"],"names":[],"mappings":";AAgEA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;CACA","file":"declarationList.vue","sourcesContent":["<template>\n  <div>\n    <div class=\"search-bar\" v-if=\"!onlyView\">\n        海关编号：\n        <el-input style=\"width:200px\" size=\"small\" v-model=\"searchWord\"></el-input>\n        <el-button size=\"small\" type=\"primary\" @click=\"getDeclarationData\" style=\"width:60px;\">搜索</el-button>\n      </div>\n    <el-table :data=\"declarationData\" v-loading=\"dataLoading\" tooltip-effect=\"dark\" style=\"width:100%\" :height=\"300\" highlight-current-row @selection-change=\"onSelectionChange\">\n      <el-table-column type=\"index\" width=\"70\" label=\"序号\" align=\"center\" v-if=\"onlyView\"></el-table-column>\n      <el-table-column type=\"selection\" width=\"60\" align=\"center\" v-else></el-table-column>\n        <el-table-column prop=\"customsNumber\" show-overflow-tooltip min-width=\"20%\" label=\"海关编号\"></el-table-column>\n        <el-table-column prop=\"importOrExportPort\" show-overflow-tooltip min-width=\"30%\" label=\"海关口岸\"></el-table-column>\n        <el-table-column prop=\"declarationUnit\" show-overflow-tooltip min-width=\"30%\" label=\"申报单位\"></el-table-column>\n        <el-table-column prop=\"declarationDate\" show-overflow-tooltip min-width=\"15%\" label=\"申报日期\"></el-table-column>\n    </el-table>\n  </div>\n</template>\n<script>\nimport taxRegisterAPI from '../api/taxRegisterAPI.js';\n\nexport default {\n  data() {\n    return {\n      declarationData: [],\n      searchWord: '',\n      dataLoading: false,\n      selectedRows: [],\n    };\n  },\n  watch: {\n    declarationIds() {\n      this.getDeclarationData();\n    },\n  },\n  mounted() {\n    this.getDeclarationData();\n  },\n  methods: {\n    getDeclarationData() {\n      taxRegisterAPI\n        .getDeclarationByIds(this.declarationIds)\n        .then(data => {\n          console.log(data);\n          this.declarationData = data;\n          if (this.searchWord != '') {\n            this.declarationData = [];\n            data.forEach(o => {\n              if (o.customsNumber.indexOf(this.searchWord) >= 0) {\n                this.declarationData.push(o);\n              }\n            });\n          }\n        });\n    },\n    onSelectionChange(selection) {\n      this.selectedRows = selection;\n      this.$emit('callback', selection);\n    },\n  },\n  props: ['declarationIds', 'onlyView'],\n};\n</script>\n\n<style scoped>\n.search-bar {\n  width: 100%;\n  text-align: right;\n  padding: 5px;\n}\n</style>\n"],"sourceRoot":""}]);

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
/***/ (function(module, exports, __webpack_require__) {

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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-da7de60e", module.exports)
  }
}

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b1ddfcb8", module.exports)
  }
}

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
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
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\form\\taxRegister.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] taxRegister.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b1ddfcb8", Component.options)
  } else {
    hotAPI.reload("data-v-b1ddfcb8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=formUI-taxRegister.js.map