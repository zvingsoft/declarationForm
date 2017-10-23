webpackJsonp([1],{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var licenseAPI = {
  getInlicenseList: function getInlicenseList(search) {
    return axios.get('/license/license', {
      params: { search: search }
    }).then(function (res) {
      return res.data;
    });
  },
  addLicense: function addLicense(license) {
    return axios.post('/license/license', license).then(function (res) {
      return res;
    });
  },
  updateLicense: function updateLicense(license) {
    return axios.put('/license/license', license).then(function (res) {
      return res;
    });
  },
  getOutlicenseList: function getOutlicenseList(search) {
    return axios.get('/license/license', {
      params: { search: search }
    }).then(function (res) {
      return res.data;
    });
  },
  deleteLicense: function deleteLicense(ids) {
    return axios.delete('/license/license/' + ids).then(function (res) {
      return res;
    });
  },
  getfileList1: function getfileList1() {
    return axios.get('/license/filelist1').then(function (res) {
      return res.data;
    });
  },
  getfileList2: function getfileList2() {
    return axios.get('/license/filelist2').then(function (res) {
      return res.data;
    });
  },
  getLicenseGoods: function getLicenseGoods(licenseid) {
    return axios.get('/license/license/goods', {
      params: {
        licenseid: licenseid
      }
    }).then(function (res) {
      return res.data;
    });
  },
  addLicenseGoods: function addLicenseGoods(licensegoods) {
    return axios.post('/license/license/goods', licensegoods).then(function (res) {
      return res.data;
    });
  },
  updateLicenseGoods: function updateLicenseGoods(licensegoods) {
    return axios({
      method: 'put',
      url: '/license/license/goods/' + licensegoods.id,
      data: licensegoods
    }).then(function (res) {
      return res.data;
    });
  },
  deleteLicenseGoods: function deleteLicenseGoods(ids) {
    var strIds = ids.join(',');
    return axios.delete('/license/license/goods/' + strIds).then(function (res) {
      return res.data;
    });
  }
};

exports.default = licenseAPI;

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("453f5803", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be44211\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./license.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be44211\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./license.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.projPage .el-tabs__header {\n  margin-bottom: 0;\n}\ninput[type='file'].el-upload__input {\n  display: none !important;\n  margin-bottom: -20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("e3504326", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be44211\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./license.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be44211\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./license.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-5be44211] {\n  padding: 10px;\n}\n.search-bar[data-v-5be44211] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-5be44211] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-5be44211] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-5be44211] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 47%;\n}\n.e-form .el-form-item[data-v-5be44211] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.filelist-toolbar[data-v-5be44211] {\n  margin-left: 1px;\n}\n.fileView-content[data-v-5be44211] {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 5px;\n  line-height: 20px;\n}\n.input-320[data-v-5be44211] {\n  width: 320px;\n}\n.form-title[data-v-5be44211] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 6%;\n  padding: 10px 0 5px 0;\n}\n.form-panel[data-v-5be44211] {\n  width: 90%;\n  margin-left: 5%;\n  padding: 20px 0 0 0;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.goods-panel[data-v-5be44211] {\n  width: 90%;\n  margin-left: 5%;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _licenseAPI = __webpack_require__(113);

var _licenseAPI2 = _interopRequireDefault(_licenseAPI);

var _licensegoodsTable = __webpack_require__(146);

var _licensegoodsTable2 = _interopRequireDefault(_licensegoodsTable);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import './mock/license.js';


exports.default = {
  data: function data() {
    return {
      clientHeight: 0,
      clientWidth: 0,
      /*我的申请表格*/
      inLicenseData: [],
      /*待我审批表格*/
      outLicenseData: [],
      /*我的申请数据模型*/
      inLicenseModel: {
        name: '',
        manager: '',
        description: '',
        starttime: '',
        endtime: ''
      },
      outLicenseModel: {
        name: '',
        manager: '',
        description: '',
        starttime: '',
        endtime: ''
      },
      /*进口搜索*/
      insearch: {
        licenseKey: '',
        importAndExportcode: '',
        companyName: '',
        type: 'in'
      },
      /*出口搜索*/
      outsearch: {
        licenseKey: '',
        importAndExportcode: '',
        companyName: '',
        type: 'out'
      },
      /*激活的tab页 */
      activeName: 'inlicense',
      /*我的申请表单校验规则 */
      inLicenseRules: {
        name: [{ required: true, message: '请输入项目名称', trigger: 'blur' }],
        manager: [{ required: true, message: '请输入项目负责人', trigger: 'blur' }]
      },
      /*编辑添加框是否可见 */
      inLicenseShow: false,
      /*编辑添加框是否可见 */
      outLicenseShow: false,
      /*文件列表查看、编辑框是否可见 */
      myFileDialogIsShow: false,
      /*文件上传框是否可见 */
      fileUploadDialogIsShow: false,
      /*文件预览框是否显示 */
      fileViewDialogIsShow: false,
      /*审批进度 */
      failDialogIsShow: false,
      passDialogIsShow: false,
      loadDialogIsShow: false,
      /*进口许可证编辑模式：1添加，2编辑*/
      editMode: 1,
      /*出口许可证编辑模式：1添加，2编辑*/
      outeditMode: 1,
      /*商品编辑模式：1添加，2编辑*/
      goodseditMode: 0,
      /*文件类型：1申报文件，2审批文件 */
      fileType: 1,
      /*表单提交等待动画*/
      confirmLoading: false,
      /*我的申请表格选中行*/
      inSelectedRows: [],
      /*待我审核表格选中行*/
      outSelectedRows: [],
      /*文件表格选中行 */
      fileSelectedRows: [],
      /*开始日期初始化 */
      startdatepicker: '',
      /*结束日期初始化 */
      enddatepicker: '',
      /*我的申请当前页 */
      myCurrentPage: 1,
      /*我的申请表格可选页面大小*/
      myPageSizes: [5, 10, 15, 20],
      /*我的申请表格当前页面大小 */
      myPageSize: 10,
      /*我的申请表格数据总条数 */
      myTotal: 16,
      /*待我审核当前页 */
      apCurrentPage: 1,
      /*待我审核表格可选页面大小*/
      apPageSizes: [5, 10, 15, 20],
      /*待我审核表格当前页面大小 */
      apPageSize: 10,
      /*待我审核表格数据总条数 */
      apTotal: 21,
      /*文件列表数据 */
      fileTableData: [],
      /*文件上传初始化 */
      fileList: [],
      /*进度条百分比 */
      percentage: 0,
      // i: 0,
      selectedLicensegoodsRow: {},
      tmpLicensegoods: {},
      licensegoodsDialogModal: false
    };
  },

  methods: {
    addGoodsClick: function addGoodsClick() {
      this.goodseditMode = 0;
      this.tmpLicensegoods = { id: 1 };
      this.licensegoodsDialogModal = true;
    },
    editGoodsClick: function editGoodsClick() {
      this.goodseditMode = 1;
      this.tmpLicensegoods = Object.assign({}, this.selectedLicensegoodsRow);
      this.licensegoodsDialogModal = true;
    },
    deleteGoodsClick: function deleteGoodsClick() {
      var _this = this;

      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action !== 'confirm') {
            done();
          }
          instance.confirmButtonLoading = true;

          return _licenseAPI2.default.deleteLicenseGoods(_this.selectedLicensegoodsRow.id).then(function (data) {
            instance.confirmButtonLoading = false;
            done(data);
          });
        }
      }).then(function (data) {
        _this.selectedLicensegoodsRow = [];
        _this.$notify({
          title: '提示',
          message: '删除成功！',
          type: 'success',
          duration: 2000
        });
      }).catch(function () {
        _this.$notify.error({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        });
      });
    },
    licensegoodsConfirm: function licensegoodsConfirm() {
      var _this2 = this;

      if (this.goodseditMode == 0) {
        this.$notify({
          title: '成功',
          message: '成功',
          type: 'success',
          duration: 2000
        });
        this.licensegoodsDialogModal = false;
      } else {
        var index = this.licensegoodsData.findIndex(function (val) {
          return val.id === _this2.tmpLicensegoods.id;
        });
        this.licensegoodsData = [].concat(_toConsumableArray(this.licensegoodsData.slice(0, index)), [this.tmpLicensegoods], _toConsumableArray(this.licensegoodsData.slice(index + 1)));
        this.licensegoodsDialogModal = false;
      }
    },
    licensegoodsTableRowClick: function licensegoodsTableRowClick(row) {
      this.selectedLicensegoodsRow = row;
    },

    /*添加进口许可证*/
    inAddClick: function inAddClick() {
      this.editMode = 1;
      this.inLicenseModel = {
        name: '',
        manager: '',
        description: '',
        starttime: '',
        endtime: '',
        type: 'in'
      };
      this.inLicenseShow = true;
      this.selectedLicensegoodsRow = [];
    },

    /*编辑进口许可证*/
    inEditClick: function inEditClick() {
      this.editMode = 2;
      this.inLicenseModel = Object.assign({}, this.inLicenseModel, this.inSelectedRows[0]);
      this.inLicenseShow = true;
      this.selectedLicensegoodsRow = [];
    },

    /*删除进口许可证*/
    inDeleteClick: function inDeleteClick() {
      var _this3 = this;

      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action !== 'confirm') {
            done();
            return;
          }
          _this3.confirmLoading = true;
          var ids = [];
          _this3.inSelectedRows.forEach(function (row) {
            ids.push(row.id);
          });
          var idstr = ids.join();
          return _licenseAPI2.default.deleteLicense(idstr).then(function (data) {
            _this3.confirmLoading = false;
            done(data);
            _this3.inLicenseData = _this3.inLicenseData.filter(function (val) {
              return !ids.includes(val.id);
            });
          });
        }
      }).then(function (data) {
        _this3.inSelectedRows = [];
        _this3.loadInlicenseList();
        _this3.$notify({
          title: '提示',
          message: '删除成功！',
          type: 'success',
          duration: 2000
        });
      });
    },


    /*添加出口许可证*/
    outAddClick: function outAddClick() {
      this.outeditMode = 1;
      this.outLicenseModel = {
        name: '',
        manager: '',
        description: '',
        starttime: '',
        endtime: '',
        type: 'out'
      };
      this.outLicenseShow = true;
      this.selectedLicensegoodsRow = [];
    },

    /*编辑出口许可证*/
    outEditClick: function outEditClick() {
      this.outeditMode = 2;
      this.outLicenseModel = Object.assign({}, this.outLicenseModel, this.outSelectedRows[0]);
      this.outLicenseShow = true;
      this.selectedLicensegoodsRow = [];
    },

    /*删除出口许可证*/
    outDeleteClick: function outDeleteClick() {
      var _this4 = this;

      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action !== 'confirm') {
            done();
            return;
          }
          _this4.confirmLoading = true;
          var ids = [];
          _this4.outSelectedRows.forEach(function (row) {
            ids.push(row.id);
          });
          var idstr = ids.join();
          return _licenseAPI2.default.deleteLicense(idstr).then(function (data) {
            _this4.confirmLoading = false;
            done(data);
            _this4.outLicenseData = _this4.outLicenseData.filter(function (val) {
              return !ids.includes(val.id);
            });
          });
        }
      }).then(function (data) {
        _this4.outSelectedRows = [];
        _this4.loadOutlicenseList();
        _this4.$notify({
          title: '提示',
          message: '删除成功！',
          type: 'success',
          duration: 2000
        });
      });
    },


    /*进口表格选中行改变*/
    inOnSelectionChange: function inOnSelectionChange(selection) {
      this.inSelectedRows = selection;
    },

    /*保存进口许可证 */
    inOkHandler: function inOkHandler() {
      var _this5 = this;

      var validateForm = function validateForm() {
        return new Promise(function (resolve, reject) {
          _this5.$refs['inLicenseRef'].validate(function (valid) {
            if (valid) {
              return resolve(true);
            }
            return reject(false);
          });
        });
      };
      var addForm = function addForm(res) {
        _licenseAPI2.default.addLicense(_this5.inLicenseModel).then(function (data) {
          if (data.status == 200) {
            _this5.$notify({
              title: '成功',
              message: '保存成功',
              type: 'success',
              duration: 2000
            });
          } else {
            _this5.$notify({
              title: '失败',
              message: data.message,
              type: 'error',
              duration: 2000
            });
          }
        });
      };

      var editForm = function editForm(res) {
        var index = _this5.inLicenseData.findIndex(function (val) {
          return val.id === _this5.inLicenseModel.id;
        });
        _licenseAPI2.default.updateLicense(_this5.inLicenseModel).then(function (data) {
          if (data.status == 200) {
            _this5.$notify({
              title: '成功',
              message: '修改成功',
              type: 'success',
              duration: 2000
            });
          } else {
            _this5.$notify({
              title: '失败',
              message: data.message,
              type: 'error',
              duration: 2000
            });
          }
        });
      };

      validateForm().then(function () {
        _this5.confirmLoading = true;
        if (_this5.editMode === 1) {
          return addForm();
        }
        if (_this5.editMode === 2) {
          return editForm();
        }
      }).then(function (res) {
        _this5.confirmLoading = false;
        _this5.inLicenseShow = false;
        _this5.inLicenseShow = false;
        _this5.loadInlicenseList();
      });
    },


    /*保存出口许可证 */
    outOkHandler: function outOkHandler() {
      var _this6 = this;

      var validateForm = function validateForm() {
        return new Promise(function (resolve, reject) {
          _this6.$refs['outLicenseRef'].validate(function (valid) {
            if (valid) {
              return resolve(true);
            }
            return reject(false);
          });
        });
      };
      var outaddForm = function outaddForm() {
        _licenseAPI2.default.addLicense(_this6.outLicenseModel).then(function (data) {
          if (data.status == 200) {
            _this6.$notify({
              title: '成功',
              message: '保存成功',
              type: 'success',
              duration: 2000
            });
          } else {
            _this6.$notify({
              title: '失败',
              message: data.message,
              type: 'error',
              duration: 2000
            });
          }
        });
      };

      var outeditForm = function outeditForm() {
        var index = _this6.outLicenseData.findIndex(function (val) {
          return val.id === _this6.outLicenseModel.id;
        });
        _licenseAPI2.default.updateLicense(_this6.outLicenseModel).then(function (data) {
          if (data.status == 200) {
            _this6.$notify({
              title: '成功',
              message: '修改成功',
              type: 'success',
              duration: 2000
            });
          } else {
            _this6.$notify({
              title: '失败',
              message: data.message,
              type: 'error',
              duration: 2000
            });
          }
        });
      };

      validateForm().then(function () {
        _this6.confirmLoading = true;
        if (_this6.outeditMode === 1) {
          return outaddForm();
        }
        if (_this6.outeditMode === 2) {
          return outeditForm();
        }
      }).then(function (res) {
        _this6.confirmLoading = false;
        _this6.outLicenseShow = false;
        _this6.outLicenseShow = false;
        _this6.loadOutlicenseList();
      });
    },


    /*出口表格选中行改变*/
    outOnSelectionChange: function outOnSelectionChange(selection) {
      this.outSelectedRows = selection;
    },


    /*文件上传 */
    fileUpload: function fileUpload() {
      this.fileUploadDialogIsShow = true;
    },

    /*点击确定文件上传 */
    fileUploadOkHandler: function fileUploadOkHandler() {
      this.$notify({
        title: '成功',
        message: '上传成功',
        type: 'success',
        duration: 2000
      });
      this.fileUploadDialogIsShow = false;
    },

    /*文件上传成功 */
    onUploadSuccess: function onUploadSuccess(response, file) {
      this.$notify({
        title: file.name,
        message: '上传成功',
        type: 'success',
        duration: 2000
      });
    },

    /*文件下载 */
    fileDownload: function fileDownload() {
      this.$notify({
        title: '成功',
        message: '下载成功',
        type: 'success',
        duration: 2000
      });
    },

    /*文件预览 */
    fileView: function fileView() {
      this.fileViewDialogIsShow = true;
    },

    /*文件删除 */
    fileDelete: function fileDelete() {
      var _this7 = this;

      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        var ids = [];
        _this7.fileSelectedRows.forEach(function (row) {
          ids.push(row.id);
        });
        return ids;
      }).then(function (ids) {
        _this7.fileTableData = _this7.fileTableData.filter(function (val) {
          return !ids.includes(val.id);
        });
        _this7.$notify.success({
          title: '成功',
          message: '删除成功',
          duration: 2000
        });
      });
    },

    /*加载进口许可证数据 */
    loadInlicenseList: function loadInlicenseList() {
      var _this8 = this;

      var pagedata = {
        pageindex: this.myCurrentPage,
        pagesize: this.myPageSize
      };
      var search = Object.assign({}, this.insearch, pagedata);
      _licenseAPI2.default.getInlicenseList(search).then(function (data) {
        _this8.inLicenseData = data;
        _this8.myTotal = data.length;
      });
    },

    /*加载出口许可证数据 */
    loadOutlicenseList: function loadOutlicenseList() {
      var _this9 = this;

      var pagedata = {
        pageindex: this.myCurrentPage,
        pagesize: this.myPageSize
      };
      var search = Object.assign({}, this.outsearch, pagedata);
      _licenseAPI2.default.getOutlicenseList(search).then(function (data) {
        _this9.outLicenseData = data;
        _this9.apTotal = data.length;
      });
    },


    /*改变我的申请表格大小 */
    myHandleSizeChange: function myHandleSizeChange(val) {
      this.myPageSize = val;
      this.loadInlicenseList();
    },

    /*改变我的申请表格当前页 */
    myHandleCurrentChange: function myHandleCurrentChange(val) {
      this.myCurrentPage = val;
      this.loadInlicenseList();
    },

    /*改变待我审核表格大小 */
    apHandleSizeChange: function apHandleSizeChange(val) {
      this.apPageSize = val;
      this.loadOutlicenseList();
    },

    /*改变待我审核表格当前页 */
    apHandleCurrentChange: function apHandleCurrentChange(val) {
      this.apCurrentPage = val;
      this.loadOutlicenseList();
    }
  },
  created: function created() {
    this.clientHeight = document.documentElement.clientHeight - 270;
    var num = Math.floor(this.clientHeight / 40) - 1;
    this.apPageSize = Math.floor(num / 5) * 5;
    this.apPageSizes = [this.apPageSize, this.apPageSize * 2, this.apPageSize * 4];
    this.myPageSize = Math.floor(num / 5) * 5;
    this.myPageSizes = [this.myPageSize, this.myPageSize * 2, this.myPageSize * 4];
    this.loadInlicenseList();
    this.loadOutlicenseList();
  },

  components: {
    'licensegoods-table': _licensegoodsTable2.default
  }
};

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(147)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(149),
  /* template */
  __webpack_require__(150),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-10243f80",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\git\\declarationForm\\mainUI\\source\\views\\setting\\components\\licensegoodsTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] licensegoodsTable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10243f80", Component.options)
  } else {
    hotAPI.reload("data-v-10243f80", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(148);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("e0edafea", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10243f80\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./licensegoodsTable.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10243f80\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./licensegoodsTable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.pack-table[data-v-10243f80] {\n  font-size: 10px;\n  min-width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _licenseAPI = __webpack_require__(113);

var _licenseAPI2 = _interopRequireDefault(_licenseAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import '../mock/license.js';

exports.default = {
  data: function data() {
    return {
      licensegoodsData: []
    };
  },

  methods: {
    rowClick: function rowClick(row) {
      this.$emit('row-click', row);
    }
  },
  props: ['licenseID']
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

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-table', {
    staticClass: "pack-table",
    attrs: {
      "data": _vm.licensegoodsData,
      "tooltip-effect": "dark",
      "highlight-current-row": ""
    },
    on: {
      "row-click": _vm.rowClick
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "specification",
      "min-width": "150px",
      "label": "规格、等级"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "unit",
      "min-width": "100px",
      "label": "单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "quantity",
      "min-width": "100px",
      "label": "数量"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "unitprice",
      "min-width": "150px",
      "label": "单价（USD）"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "amount",
      "min-width": "150px",
      "label": "总值（USD）"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "amountinusd",
      "min-width": "150px",
      "label": "总值折美元"
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-10243f80", module.exports)
  }
}

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-tabs', {
    staticClass: "projPage",
    model: {
      value: (_vm.activeName),
      callback: function($$v) {
        _vm.activeName = $$v
      },
      expression: "activeName"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "进口",
      "name": "inlicense"
    }
  }, [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.inAddClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v("添加")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.inSelectedRows.length !== 1
    },
    on: {
      "click": _vm.inEditClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.inSelectedRows.length < 1
    },
    on: {
      "click": _vm.inDeleteClick
    }
  }, [_c('i', {
    staticClass: "fa fa-trash-o"
  }), _vm._v("删除")])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap"
  }, [_c('div', {
    staticClass: "search-bar fr"
  }, [_vm._v("\n          许可证号:\n          "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入许可证号"
    },
    model: {
      value: (_vm.insearch.licenseKey),
      callback: function($$v) {
        _vm.$set(_vm.insearch, "licenseKey", $$v)
      },
      expression: "insearch.licenseKey"
    }
  }), _vm._v("\n          进口商：\n          "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入进口商"
    },
    model: {
      value: (_vm.insearch.companyName),
      callback: function($$v) {
        _vm.$set(_vm.insearch, "companyName", $$v)
      },
      expression: "insearch.companyName"
    }
  }), _vm._v("\n          报关口岸:\n          "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入报关口岸"
    },
    model: {
      value: (_vm.insearch.portOfClearance),
      callback: function($$v) {
        _vm.$set(_vm.insearch, "portOfClearance", $$v)
      },
      expression: "insearch.portOfClearance"
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": _vm.loadInlicenseList
    }
  }, [_vm._v(" 搜 索 ")])], 1), _vm._v(" "), _c('el-table', {
    ref: "myTabelRef",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.inLicenseData,
      "tooltip-effect": "dark",
      "height": _vm.clientHeight
    },
    on: {
      "selection-change": _vm.inOnSelectionChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "55",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "licenseKey",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "许可证号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "companyName",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "进口商"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "consignee",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "收货人"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "tradeMode",
      "show-overflow-tooltip": "",
      "min-width": "10%",
      "label": "贸易方式"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "exportingCountry",
      "show-overflow-tooltip": "",
      "min-width": "10%",
      "label": "出口国"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "countryOfOrigin",
      "show-overflow-tooltip": "",
      "min-width": "10%",
      "label": "原产国家"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "portOfClearance",
      "show-overflow-tooltip": "",
      "min-width": "10%",
      "label": "报关口岸"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "shippingType",
      "show-overflow-tooltip": "",
      "min-width": "10%",
      "label": "运输方式"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "fr",
    staticStyle: {
      "margin-top": "5px"
    }
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.myCurrentPage,
      "page-sizes": _vm.myPageSizes,
      "page-size": _vm.myPageSize,
      "total": _vm.myTotal,
      "layout": "total, sizes, prev, pager, next"
    },
    on: {
      "size-change": _vm.myHandleSizeChange,
      "current-change": _vm.myHandleCurrentChange
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "出口",
      "name": "outlicense"
    }
  }, [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.outAddClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v("添加")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.outSelectedRows.length !== 1
    },
    on: {
      "click": _vm.outEditClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.outSelectedRows.length < 1
    },
    on: {
      "click": _vm.outDeleteClick
    }
  }, [_c('i', {
    staticClass: "fa fa-trash-o"
  }), _vm._v("删除")])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap"
  }, [_c('div', {
    staticClass: "search-bar fr"
  }, [_vm._v("\n          许可证号:\n          "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入许可证号"
    },
    model: {
      value: (_vm.outsearch.licenseKey),
      callback: function($$v) {
        _vm.$set(_vm.outsearch, "licenseKey", $$v)
      },
      expression: "outsearch.licenseKey"
    }
  }), _vm._v("\n          进口商：\n          "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入出口商"
    },
    model: {
      value: (_vm.outsearch.companyName),
      callback: function($$v) {
        _vm.$set(_vm.outsearch, "companyName", $$v)
      },
      expression: "outsearch.companyName"
    }
  }), _vm._v("\n          报关口岸:\n          "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入报关口岸"
    },
    model: {
      value: (_vm.outsearch.portOfClearance),
      callback: function($$v) {
        _vm.$set(_vm.outsearch, "portOfClearance", $$v)
      },
      expression: "outsearch.portOfClearance"
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": _vm.loadOutlicenseList
    }
  }, [_vm._v(" 搜 索 ")])], 1), _vm._v(" "), _c('el-table', {
    ref: "apTabelRef",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.outLicenseData,
      "tooltip-effect": "dark",
      "height": _vm.clientHeight
    },
    on: {
      "selection-change": _vm.outOnSelectionChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "55",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "licenseKey",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "许可证号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "companyName",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "出口商"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "consignor",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "发货人"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "tradeMode",
      "show-overflow-tooltip": "",
      "min-width": "10%",
      "label": "贸易方式"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "importedCountry",
      "show-overflow-tooltip": "",
      "min-width": "12%",
      "label": "进口国"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "portOfClearance",
      "show-overflow-tooltip": "",
      "min-width": "10%",
      "label": "报关口岸"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "certificationDate",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "发证日期"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "fr",
    staticStyle: {
      "margin-top": "5px"
    }
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.apCurrentPage,
      "page-sizes": _vm.apPageSizes,
      "page-size": _vm.apPageSize,
      "total": _vm.apTotal,
      "layout": "total, sizes, prev, pager, next"
    },
    on: {
      "size-change": _vm.apHandleSizeChange,
      "current-change": _vm.apHandleCurrentChange
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.editMode === 1 ? '添加进口许可证' : '编辑进口许可证',
      "visible": _vm.inLicenseShow,
      "size": "large"
    },
    on: {
      "update:visible": function($event) {
        _vm.inLicenseShow = $event
      }
    }
  }, [_c('el-form', {
    ref: "inLicenseRef",
    staticStyle: {
      "height": "400px",
      "overflow-y": "scroll",
      "overflow-x": "hidden"
    },
    attrs: {
      "model": _vm.inLicenseModel,
      "rules": _vm.inLicenseRules,
      "inline": "",
      "label-width": "140px"
    }
  }, [_c('div', {
    staticClass: "form-title"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', {
    attrs: {
      "label": "进口商",
      "prop": "companyName"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.companyName),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "companyName", $$v)
      },
      expression: "inLicenseModel.companyName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收货人",
      "prop": "consignee"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.consignee),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "consignee", $$v)
      },
      expression: "inLicenseModel.consignee"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "许可证号",
      "prop": "licenseKey"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.licenseKey),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "licenseKey", $$v)
      },
      expression: "inLicenseModel.licenseKey"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贸易方式",
      "prop": "tradeMode"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.tradeMode),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "tradeMode", $$v)
      },
      expression: "inLicenseModel.tradeMode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "出口国",
      "prop": "exportingCountry"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.exportingCountry),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "exportingCountry", $$v)
      },
      expression: "inLicenseModel.exportingCountry"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "原产国家",
      "prop": "countryOfOrigin"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.countryOfOrigin),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "countryOfOrigin", $$v)
      },
      expression: "inLicenseModel.countryOfOrigin"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "报关口岸",
      "prop": "portOfClearance"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.portOfClearance),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "portOfClearance", $$v)
      },
      expression: "inLicenseModel.portOfClearance"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "外汇来源",
      "prop": "sourceOffOreignExchange"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.sourceOffOreignExchange),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "sourceOffOreignExchange", $$v)
      },
      expression: "inLicenseModel.sourceOffOreignExchange"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "付款方式",
      "prop": "paymentMethod"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.paymentMethod),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "paymentMethod", $$v)
      },
      expression: "inLicenseModel.paymentMethod"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "最终用户",
      "prop": "endUser"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.endUser),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "endUser", $$v)
      },
      expression: "inLicenseModel.endUser"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "最终用途",
      "prop": "finalPurpose"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.finalPurpose),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "finalPurpose", $$v)
      },
      expression: "inLicenseModel.finalPurpose"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品名称",
      "prop": "goodsName"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.goodsName),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "goodsName", $$v)
      },
      expression: "inLicenseModel.goodsName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品编号",
      "prop": "goodsCode"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.goodsCode),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "goodsCode", $$v)
      },
      expression: "inLicenseModel.goodsCode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输方式",
      "prop": "shippingType"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.shippingType),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "shippingType", $$v)
      },
      expression: "inLicenseModel.shippingType"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "许可证截止日期",
      "prop": "expirationDateOfLicense"
    }
  }, [_c('el-date-picker', {
    staticClass: "input-320",
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.inLicenseModel.expirationDateOfLicense),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "expirationDateOfLicense", $$v)
      },
      expression: "inLicenseModel.expirationDateOfLicense"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "发证日期",
      "prop": "certificationDate"
    }
  }, [_c('el-date-picker', {
    staticClass: "input-320",
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.inLicenseModel.certificationDate),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "certificationDate", $$v)
      },
      expression: "inLicenseModel.certificationDate"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "备注",
      "prop": "memo"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "600px"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.memo),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "memo", $$v)
      },
      expression: "inLicenseModel.memo"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("商品信息")]), _vm._v(" "), _c('div', {
    staticClass: "goods-panel"
  }, [_c('div', {
    staticStyle: {
      "height": "50px",
      "background-color": "#f5f5f5",
      "padding": "5px"
    }
  }, [_c('el-button', {
    staticClass: "z-toolbar-btn",
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.addGoodsClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v("添加")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedLicensegoodsRow.length === 0
    },
    on: {
      "click": _vm.editGoodsClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedLicensegoodsRow.length === 0
    },
    on: {
      "click": _vm.deleteGoodsClick
    }
  }, [_c('i', {
    staticClass: "fa fa-remove"
  }), _vm._v("删除")])], 1), _vm._v(" "), _c('licensegoods-table', {
    attrs: {
      "licenseID": _vm.inLicenseModel.id
    },
    on: {
      "row-click": _vm.licensegoodsTableRowClick
    }
  })], 1)]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.inLicenseShow = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.confirmLoading
    },
    on: {
      "click": _vm.inOkHandler
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.outeditMode === 1 ? '添加出口许可证' : '编辑出口许可证',
      "visible": _vm.outLicenseShow,
      "size": "large"
    },
    on: {
      "update:visible": function($event) {
        _vm.outLicenseShow = $event
      }
    }
  }, [_c('el-form', {
    ref: "outLicenseRef",
    staticStyle: {
      "height": "400px",
      "overflow-y": "scroll",
      "overflow-x": "hidden"
    },
    attrs: {
      "model": _vm.outLicenseModel,
      "rules": _vm.outLicenseRules,
      "inline": "",
      "label-width": "140px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "出口商",
      "prop": "companyName"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.companyName),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "companyName", $$v)
      },
      expression: "outLicenseModel.companyName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "发货人",
      "prop": "consignor"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.consignor),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "consignor", $$v)
      },
      expression: "outLicenseModel.consignor"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "许可证号",
      "prop": "licenseKey"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.licenseKey),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "licenseKey", $$v)
      },
      expression: "outLicenseModel.licenseKey"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贸易方式",
      "prop": "tradeMode"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.tradeMode),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "tradeMode", $$v)
      },
      expression: "outLicenseModel.tradeMode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "进口国",
      "prop": "importedCountry"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.importedCountry),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "importedCountry", $$v)
      },
      expression: "outLicenseModel.importedCountry"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "合同号",
      "prop": "conractNo"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.conractNo),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "conractNo", $$v)
      },
      expression: "outLicenseModel.conractNo"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "报关口岸",
      "prop": "portOfClearance"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.portOfClearance),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "portOfClearance", $$v)
      },
      expression: "outLicenseModel.portOfClearance"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "付款方式",
      "prop": "paymentMethod"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.paymentMethod),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "paymentMethod", $$v)
      },
      expression: "outLicenseModel.paymentMethod"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品名称",
      "prop": "goodsName"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.goodsName),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "goodsName", $$v)
      },
      expression: "outLicenseModel.goodsName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品编号",
      "prop": "goodsCode"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.goodsCode),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "goodsCode", $$v)
      },
      expression: "outLicenseModel.goodsCode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输方式",
      "prop": "shippingType"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.shippingType),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "shippingType", $$v)
      },
      expression: "outLicenseModel.shippingType"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "许可证截止日期",
      "prop": "expirationDateOfLicense"
    }
  }, [_c('el-date-picker', {
    staticClass: "input-320",
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.outLicenseModel.expirationDateOfLicense),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "expirationDateOfLicense", $$v)
      },
      expression: "outLicenseModel.expirationDateOfLicense"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "发证日期",
      "prop": "certificationDate"
    }
  }, [_c('el-date-picker', {
    staticClass: "input-320",
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.outLicenseModel.certificationDate),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "certificationDate", $$v)
      },
      expression: "outLicenseModel.certificationDate"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "备注",
      "prop": "memo"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "800px"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.memo),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "memo", $$v)
      },
      expression: "outLicenseModel.memo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("商品信息")]), _vm._v(" "), _c('div', {
    staticClass: "goods-panel"
  }, [_c('div', {
    staticStyle: {
      "height": "50px",
      "background-color": "#f5f5f5",
      "padding": "5px"
    }
  }, [_c('el-button', {
    staticClass: "z-toolbar-btn",
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.addGoodsClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v("添加")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedLicensegoodsRow.length === 0
    },
    on: {
      "click": _vm.editGoodsClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedLicensegoodsRow.length === 0
    },
    on: {
      "click": _vm.deleteGoodsClick
    }
  }, [_c('i', {
    staticClass: "fa fa-remove"
  }), _vm._v("删除")])], 1), _vm._v(" "), _c('licensegoods-table', {
    attrs: {
      "licenseID": _vm.outLicenseModel.id
    },
    on: {
      "row-click": _vm.licensegoodsTableRowClick
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.outLicenseShow = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.confirmLoading
    },
    on: {
      "click": _vm.outOkHandler
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.fileType === 1 ? '申报文件' : '审批文件',
      "visible": _vm.myFileDialogIsShow
    },
    on: {
      "update:visible": function($event) {
        _vm.myFileDialogIsShow = $event
      }
    }
  }, [_c('el-toolbar', {
    staticClass: "filelist-toolbar"
  }, [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.fileUpload
    }
  }, [_c('i', {
    staticClass: "fa fa-upload"
  }), _vm._v("上传")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "disabled": _vm.fileSelectedRows.length < 1,
      "plain": true
    },
    on: {
      "click": _vm.fileDownload
    }
  }, [_c('i', {
    staticClass: "fa fa-download"
  }), _vm._v("下载")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "disabled": _vm.fileSelectedRows.length !== 1,
      "plain": true
    },
    on: {
      "click": _vm.fileView
    }
  }, [_c('i', {
    staticClass: "fa fa-search"
  }), _vm._v("预览")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.fileSelectedRows.length < 1
    },
    on: {
      "click": _vm.fileDelete
    }
  }, [_c('i', {
    staticClass: "fa fa-trash-o"
  }), _vm._v("删除")])], 1), _vm._v(" "), _c('el-table', {
    ref: "fileTabelRef",
    staticStyle: {
      "width": "100%",
      "margin-top": "5px"
    },
    attrs: {
      "data": _vm.fileTableData,
      "tooltip-effect": "dark"
    },
    on: {
      "selection-change": _vm.fileOnSelectionChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "60",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "文件名"
    }
  })], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": '文件上传',
      "visible": _vm.fileUploadDialogIsShow
    },
    on: {
      "update:visible": function($event) {
        _vm.fileUploadDialogIsShow = $event
      }
    }
  }, [_c('el-upload', {
    staticClass: "upload-file",
    attrs: {
      "on-success": _vm.onUploadSuccess,
      "accept": ".jpg,.png",
      "action": "",
      "multiple": false,
      "file-list": _vm.fileList
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    }
  }, [_vm._v("点击上传")]), _vm._v(" "), _c('div', {
    staticClass: "el-upload__tip",
    attrs: {
      "slot": "tip"
    },
    slot: "tip"
  }, [_vm._v("只能上传jpg/png文件，且不超过500kb")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.fileUploadDialogIsShow = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.fileUploadOkHandler
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.goodseditMode == 1 ? '编辑商品信息' : '添加商品',
      "visible": _vm.licensegoodsDialogModal,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.licensegoodsDialogModal = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "label-position": "right",
      "model": _vm.tmpLicensegoods,
      "inline": "",
      "label-width": "200px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "规格、等级："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpLicensegoods.specification),
      callback: function($$v) {
        _vm.$set(_vm.tmpLicensegoods, "specification", $$v)
      },
      expression: "tmpLicensegoods.specification"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpLicensegoods.unit),
      callback: function($$v) {
        _vm.$set(_vm.tmpLicensegoods, "unit", $$v)
      },
      expression: "tmpLicensegoods.unit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "数量："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpLicensegoods.quantity),
      callback: function($$v) {
        _vm.$set(_vm.tmpLicensegoods, "quantity", $$v)
      },
      expression: "tmpLicensegoods.quantity"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单价（USD）："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpLicensegoods.unitprice),
      callback: function($$v) {
        _vm.$set(_vm.tmpLicensegoods, "unitprice", $$v)
      },
      expression: "tmpLicensegoods.unitprice"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "总值（USD）："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpLicensegoods.amount),
      callback: function($$v) {
        _vm.$set(_vm.tmpLicensegoods, "amount", $$v)
      },
      expression: "tmpLicensegoods.amount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "总值折美元："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpLicensegoods.amountinusd),
      callback: function($$v) {
        _vm.$set(_vm.tmpLicensegoods, "amountinusd", $$v)
      },
      expression: "tmpLicensegoods.amountinusd"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.licensegoodsDialogModal = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.licensegoodsConfirm
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5be44211", module.exports)
  }
}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(141)
  __webpack_require__(143)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(145),
  /* template */
  __webpack_require__(151),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5be44211",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\git\\declarationForm\\mainUI\\source\\views\\setting\\license.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] license.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5be44211", Component.options)
  } else {
    hotAPI.reload("data-v-5be44211", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});