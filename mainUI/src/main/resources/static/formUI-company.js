webpackJsonp([6],{

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

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
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
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\setting\\components\\companyDetail.vue"
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

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("9e43a1c0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47dbc956\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./companyDetail.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47dbc956\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./companyDetail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"companyDetail.vue","sourceRoot":""}]);

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

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(148);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("957ec35e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-63cc7c4d\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./company.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-63cc7c4d\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./company.vue");
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

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-63cc7c4d] {\n  padding: 10px;\n}\n.search-bar[data-v-63cc7c4d] {\n  padding: 5px 12px;\n}\n.company-table-expand[data-v-63cc7c4d] {\n  font-size: 0;\n}\n.company-table-expand label[data-v-63cc7c4d] {\n  width: 90px;\n  color: #99a9bf;\n}\n.company-table-expand .el-form-item[data-v-63cc7c4d] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 50%;\n}\n.page-wrap[data-v-63cc7c4d] {\n  margin-top: 20px;\n  margin-right: 20px;\n}\n.page-wrap .page[data-v-63cc7c4d] {\n  float: right;\n}\n.red-color[data-v-63cc7c4d] {\n  color: #FF4949;\n}\n.green-color[data-v-63cc7c4d] {\n  color: #13CE66;\n}\n\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/company.vue?58f060b8"],"names":[],"mappings":";AA8WA;EACA,cAAA;CACA;AAEA;EACA,kBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,YAAA;EACA,eAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,iBAAA;EACA,mBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,eAAA;CACA","file":"company.vue","sourcesContent":["<template>\n  <div>\n    <el-toolbar>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addClick\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> 新建</el-button>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"editClick\" :disabled=\"selectedRows.length !== 1\">\n        <i class=\"fa fa-edit\" aria-hidden=\"true\"></i> 编辑</el-button>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"deleteClick\" :disabled=\"selectedRows.length === 0\">\n        <i class=\"fa fa-minus\" aria-hidden=\"true\"></i> 删除</el-button>\n      <!-- <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"setConttonQuotaClick\" :disabled=\"selectedRows.length !== 1\">\n        <i class=\"fa fa-cog\" aria-hidden=\"true\"></i> 设置棉花配额</el-button> -->\n    </el-toolbar>\n\n    <div class=\"search-bar fr\">\n      <span>名称</span>&nbsp;\n      <el-input v-model=\"name\" size=\"small\" placeholder=\"请输入企业名称\" style=\"width:200px\"></el-input>\n      <el-button type=\"primary\" @click=\"list\" size=\"small\">搜索</el-button>\n    </div>\n\n    <div class=\"main-content-wrap\">\n      <el-table ref=\"companyTable\" :data=\"companys\" style=\"width: 100%\" v-loading=\"dataLoading\" @selection-change=\"onSelectionChange\"\n        @row-click=\"onCompanyTableRowClick\" @row-dblclick=\"editClick\">\n        <el-table-column type=\"selection\" width=\"50\">\n        </el-table-column>\n        <el-table-column type=\"expand\">\n          <template slot-scope=\"props\">\n            <el-form label-position=\"left\" inline class=\"company-table-expand\">\n              <el-form-item label=\"名称\">\n                <el-button type=\"text\" @click=\"viewCompanyClick( props.row.id)\">{{ props.row.name }}</el-button>\n              </el-form-item>\n              <el-form-item label=\"银行信用评级\">\n                <span>{{ props.row.bankCreditRating }}</span>\n              </el-form-item>\n              <el-form-item label=\"地址\">\n                <span>{{ props.row.address }}</span>\n              </el-form-item>\n              <el-form-item label=\"电话\">\n                <span>{{ props.row.phone }}</span>\n              </el-form-item>\n              <el-form-item label=\"传真\">\n                <span>{{ props.row.fax }}</span>\n              </el-form-item>\n              <el-form-item label=\"邮政编码\">\n                <span>{{ props.row.postCode }}</span>\n              </el-form-item>\n              <!-- <el-form-item label=\"棉花分配量\" v-if=\"props.row.allocation>0\">\n                <span>{{ props.row.allocation }}</span>（吨）\n              </el-form-item>\n              <el-form-item label=\"棉花已进口\" v-if=\"props.row.allocation>0\">\n                <span>{{ props.row.used }}</span>（吨）\n              </el-form-item> -->\n              <el-form-item label=\"添加时间\">\n                <span>{{ new Date(props.row.addTime).toLocaleString() }}</span>\n              </el-form-item>\n              <el-form-item label=\"添加人\">\n                <span>{{ props.row.addUser }}</span>\n              </el-form-item>\n            </el-form>\n          </template>\n        </el-table-column>\n        <el-table-column label=\"名称\">\n          <template slot-scope=\"props\">\n            <el-button type=\"text\" @click=\"viewCompanyClick( props.row.id)\">{{ props.row.name }}</el-button>\n          </template>\n        </el-table-column>\n        <el-table-column label=\"银行信用评级\" prop=\"bankCreditRating\">\n        </el-table-column>\n        <el-table-column label=\"地址\" prop=\"address\" show-overflow-tooltip>\n        </el-table-column>\n        <el-table-column label=\"电话\" prop=\"phone\">\n        </el-table-column>\n        <el-table-column label=\"传真\" prop=\"fax\">\n        </el-table-column>\n        <el-table-column label=\"邮政编码\" prop=\"postCode\">\n        </el-table-column>\n        <el-table-column label=\"添加时间\">\n          <template slot-scope=\"props\">{{ new Date(props.row.addTime).toLocaleString() }}</template>\n        </el-table-column>\n      </el-table>\n\n      <!--分页-->\n      <div class=\"page-wrap\">\n        <el-pagination class=\"page\" @size-change=\"sizeChangeHandler\" @current-change=\"list\" :current-page.sync=\"currentPage\" :page-sizes=\"pageSizes\"\n          :page-size=\"pageSize\" layout=\"total, sizes, prev, pager, next, jumper\" :total=\"total\">\n        </el-pagination>\n      </div>\n\n    </div>\n\n    <!-- 新建,编辑对话框 -->\n    <el-dialog :title=\"addOperate?'新建':'编辑'\" :visible.sync=\"showDialog\">\n      <el-form label-width=\"160px\" :model=\"tmpCompany\" :rules=\"rules\" ref=\"companyFrom\">\n        <el-form-item label=\"名称：\" prop=\"name\">\n          <el-input placeholder=\"请输入企业名称\" v-model=\"tmpCompany.name\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"银行信用评级：\" prop=\"bankCreditRating\">\n          <el-input placeholder=\"请输入银行信用评级\" v-model=\"tmpCompany.bankCreditRating\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"地址：\" prop=\"address\">\n          <el-input placeholder=\"请输入地址：\" v-model=\"tmpCompany.address\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"电话：\" prop=\"phone\">\n          <el-input placeholder=\"请输入电话\" v-model=\"tmpCompany.phone\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"传真：\" prop=\"fax\">\n          <el-input placeholder=\"请输入传真\" v-model=\"tmpCompany.fax\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"邮政编码：\" prop=\"postCode\">\n          <el-input placeholder=\"请输入邮政编码\" v-model=\"tmpCompany.postCode\" class=\"width-300\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"showDialog = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"submitForm('companyFrom','save')\" :disabled=\"saveStatus\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n    <!-- 设置棉花配额对话框 -->\n    <!-- <el-dialog size=\"tiny\" :title=\"设置棉花配额\" :visible.sync=\"showConttonQuotaDialog\">\n          <el-form label-width=\"160px\" :model=\"tmpCompany\">\n            <el-form-item label=\"企业名称：\">\n              {{tmpCompany.name}}\n            </el-form-item>\n            <el-form-item label=\"棉花分配量：\">\n              <el-input-number :min=\"0\" placeholder=\"请输入棉花分配量\" v-model=\"tmpCompany.quota\" class=\"width-300\"></el-input-number>（单位：吨）\n            </el-form-item>\n          </el-form>\n          <div slot=\"footer\" class=\"dialog-footer\">\n            <el-button @click=\"showConttonQuotaDialog = false\">取 消</el-button>\n            <el-button type=\"primary\" @click=\"saveConttonQuota\" :disabled=\"saveConttonQuotaStatus\">确 定</el-button>\n          </div>\n        </el-dialog> -->\n\n    <!-- 企业信息对话框 -->\n    <company-detail :id=\"id\" :show.sync=\"showCompanyDialog\"></company-detail>\n  </div>\n</template>\n\n<script>\n  // require('../../utils/company.js')\n  import companyAPI from './api/companyAPI.js';\n  import companyDetail from './components/companyDetail.vue';\n\n  export default {\n    data() {\n      var validatePhone = (rule, value, callback) => {\n        if (value === '') {\n          callback(new Error('请输入电话'));\n        } else if (value !== this.ruleForm2.pass) {\n          callback(new Error('两次输入密码不一致!'));\n        } else {\n          callback();\n        }\n      };\n      return {\n        dataLoading: true,\n        companys: [],\n        name: '',\n        id: '',\n        tmpCompany: {},\n        addOperate: true,\n        saveStatus: false,\n        showDialog: false,\n        showCompanyDialog: false,\n        showConttonQuotaDialog: false,\n        saveConttonQuotaStatus: false,\n        selectedRows: [],\n        total: 0,\n        pageSize: 15,\n        currentPage: 1,\n        pageSizes: [15, 20, 30, 40, 50],\n        rules: {\n          name: [{\n            required: true,\n            message: '请输入名称',\n            trigger: 'blur'\n          }],\n          bankCreditRating: [{\n            required: true,\n            message: '请输入银行信用评级',\n            trigger: 'blur'\n          }],\n          address: [{\n            required: true,\n            message: '请输入地址',\n            trigger: 'blur'\n          }],\n          phone: [{\n            required: true,\n            message: '请输入电话',\n            trigger: 'blur'\n          }],\n          fax: [{\n            required: true,\n            message: '请输入传真',\n            trigger: 'blur'\n          }],\n          postCode: [{\n            required: true,\n            message: '请输入邮政编码',\n            trigger: 'blur'\n          }]\n        }\n      }\n    },\n    methods: {\n      submitForm(formName, method) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            this[method]();\n          } else {\n            return false;\n          }\n        });\n      },\n      //设置棉花配额\n      setConttonQuotaClick() {\n        this.showConttonQuotaDialog = true;\n        this.tmpCompany = Object.assign({}, this.selectedRows[0]);\n        this.saveConttonQuotaStatus = false;\n      },\n      //保存棉花配额\n      saveConttonQuota() {\n        this.saveConttonQuotaStatus = true;\n        companyAPI.setConttonQuota(this.tmpCompany).then(data => {\n          if (data.status == 1) {\n            this.list();\n            this.$message.success(data.data);\n          } else {\n            this.$message.error(data.data);\n          }\n          this.saveConttonQuotaStatus = false;\n          this.showConttonQuotaDialog = false;\n        });\n      },\n      //单击一行选中当前行、单击多选框增加选中当前行\n      onCompanyTableRowClick(row, event, column) {\n        if (column.type != \"selection\") {\n          this.$refs.companyTable.clearSelection();\n        }\n        this.$refs.companyTable.toggleRowSelection(row);\n      },\n      //选择改变\n      onSelectionChange(selection) {\n        this.selectedRows = selection;\n      },\n      //分页大小改变\n      sizeChangeHandler(val) {\n        this.pageSize = val;\n        this.list();\n      },\n      //列表\n      list() {\n        this.dataLoading = true;\n        companyAPI.getCompany(this.name, this.currentPage, this.pageSize).then(data => {\n          this.companys = data.data;\n          if (this.name != '') {\n            this.companys = this.companys.filter(val => val.name.indexOf(this.name) != -1)\n          }\n          this.total = this.companys.length;\n          this.dataLoading = false;\n        })\n      },\n      //新增\n      addClick() {\n        this.addOperate = true;\n        this.tmpCompany = {};\n        this.saveStatus = false;\n        this.showDialog = true;\n      },\n      //编辑\n      editClick() {\n        this.addOperate = false;\n        this.tmpCompany = Object.assign({}, this.selectedRows[0]);;\n        this.saveStatus = false;\n        this.showDialog = true;\n      },\n      //删除\n      deleteClick() {\n        let rowIds = this.getSelectedIds().join(',');\n        this.$confirm(\"确认删除所选的数据?\", '提示', {\n          confirmButtonText: '确定',\n          cancelButtonText: '取消',\n          type: 'warning',\n          beforeClose: (action, instance, done) => {\n            if (action == 'confirm') {\n              instance.confirmButtonLoading = true;\n              return companyAPI.deleteCompany(rowIds).then(data => {\n                if (data.status == 200) {\n                  this.list();\n                  this.$notify({\n                    title: '成功',\n                    message: data.data,\n                    type: 'success',\n                    duration: 2000,\n                  });\n                } else {\n                  this.$alert(data.data);\n                }\n                instance.confirmButtonLoading = false;\n                done(data);\n              });\n            } else {\n              done();\n            }\n          }\n        }).catch(() => {\n          this.$notify.info({\n            title: '取消',\n            message: '操作取消！',\n            duration: 2000\n          });\n        });\n      },\n      //查看公司信息\n      viewCompanyClick(id) {\n        this.showCompanyDialog = true;\n        this.id = id;\n      },\n      //保存\n      save() {\n        this.saveStatus = true;\n        if (this.addOperate) {\n          companyAPI.addCompany(this.tmpCompany).then(data => {\n            if (data.status == 200) {\n              this.list();\n              this.$message.success(data.data);\n            } else {\n              this.$message.error(data.data);\n            }\n            this.saveStatus = false;\n            this.showDialog = false;\n          });\n        } else {\n          companyAPI.editCompany(this.tmpCompany).then(data => {\n            if (data.status == 200) {\n              this.list();\n              this.$message.success(data.data);\n            } else {\n              this.$message.error(data.data);\n            }\n            this.saveStatus = false;\n            this.showDialog = false;\n          });\n        }\n      },\n      //获取选中id数组\n      getSelectedIds() {\n        let rowIds = [];\n        this.selectedRows.forEach(function (row) {\n          rowIds.push(row.id);\n        });\n        return rowIds;\n      },\n    },\n    created() {\n      this.list();\n    },\n    components: {\n      'company-detail': companyDetail\n    }\n  }\n\n</script>\n\n<style scoped>\n  .main-content-wrap {\n    padding: 10px;\n  }\n\n  .search-bar {\n    padding: 5px 12px;\n  }\n\n  .company-table-expand {\n    font-size: 0;\n  }\n\n  .company-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n  }\n\n  .company-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n  }\n\n  .page-wrap {\n    margin-top: 20px;\n    margin-right: 20px;\n  }\n\n  .page-wrap .page {\n    float: right;\n  }\n\n  .red-color {\n    color: #FF4949;\n  }\n\n  .green-color {\n    color: #13CE66;\n  }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _companyAPI = __webpack_require__(102);

var _companyAPI2 = _interopRequireDefault(_companyAPI);

var _companyDetail = __webpack_require__(111);

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
    var _this = this;

    var validatePhone = function validatePhone(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入电话'));
      } else if (value !== _this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
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
      pageSizes: [15, 20, 30, 40, 50],
      rules: {
        name: [{
          required: true,
          message: '请输入名称',
          trigger: 'blur'
        }],
        bankCreditRating: [{
          required: true,
          message: '请输入银行信用评级',
          trigger: 'blur'
        }],
        address: [{
          required: true,
          message: '请输入地址',
          trigger: 'blur'
        }],
        phone: [{
          required: true,
          message: '请输入电话',
          trigger: 'blur'
        }],
        fax: [{
          required: true,
          message: '请输入传真',
          trigger: 'blur'
        }],
        postCode: [{
          required: true,
          message: '请输入邮政编码',
          trigger: 'blur'
        }]
      }
    };
  },

  methods: {
    submitForm: function submitForm(formName, method) {
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this2[method]();
        } else {
          return false;
        }
      });
    },

    //设置棉花配额
    setConttonQuotaClick: function setConttonQuotaClick() {
      this.showConttonQuotaDialog = true;
      this.tmpCompany = Object.assign({}, this.selectedRows[0]);
      this.saveConttonQuotaStatus = false;
    },

    //保存棉花配额
    saveConttonQuota: function saveConttonQuota() {
      var _this3 = this;

      this.saveConttonQuotaStatus = true;
      _companyAPI2.default.setConttonQuota(this.tmpCompany).then(function (data) {
        if (data.status == 1) {
          _this3.list();
          _this3.$message.success(data.data);
        } else {
          _this3.$message.error(data.data);
        }
        _this3.saveConttonQuotaStatus = false;
        _this3.showConttonQuotaDialog = false;
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
      var _this4 = this;

      this.dataLoading = true;
      _companyAPI2.default.getCompany(this.name, this.currentPage, this.pageSize).then(function (data) {
        _this4.companys = data.data;
        if (_this4.name != '') {
          _this4.companys = _this4.companys.filter(function (val) {
            return val.name.indexOf(_this4.name) != -1;
          });
        }
        _this4.total = _this4.companys.length;
        _this4.dataLoading = false;
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
      var _this5 = this;

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
                _this5.list();
                _this5.$notify({
                  title: '成功',
                  message: data.data,
                  type: 'success',
                  duration: 2000
                });
              } else {
                _this5.$alert(data.data);
              }
              instance.confirmButtonLoading = false;
              done(data);
            });
          } else {
            done();
          }
        }
      }).catch(function () {
        _this5.$notify.info({
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
      var _this6 = this;

      this.saveStatus = true;
      if (this.addOperate) {
        _companyAPI2.default.addCompany(this.tmpCompany).then(function (data) {
          if (data.status == 200) {
            _this6.list();
            _this6.$message.success(data.data);
          } else {
            _this6.$message.error(data.data);
          }
          _this6.saveStatus = false;
          _this6.showDialog = false;
        });
      } else {
        _companyAPI2.default.editCompany(this.tmpCompany).then(function (data) {
          if (data.status == 200) {
            _this6.list();
            _this6.$message.success(data.data);
          } else {
            _this6.$message.error(data.data);
          }
          _this6.saveStatus = false;
          _this6.showDialog = false;
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

/***/ 150:
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
      value: (_vm.name),
      callback: function($$v) {
        _vm.name = $$v
      },
      expression: "name"
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
      "row-click": _vm.onCompanyTableRowClick,
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
    ref: "companyFrom",
    attrs: {
      "label-width": "160px",
      "model": _vm.tmpCompany,
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "名称：",
      "prop": "name"
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
      "label": "银行信用评级：",
      "prop": "bankCreditRating"
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
      "label": "地址：",
      "prop": "address"
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
      "label": "电话：",
      "prop": "phone"
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
      "label": "传真：",
      "prop": "fax"
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
      "label": "邮政编码：",
      "prop": "postCode"
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
      "click": function($event) {
        _vm.submitForm('companyFrom', 'save')
      }
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

/***/ 94:
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
  "data-v-63cc7c4d",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\setting\\company.vue"
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
//# sourceMappingURL=formUI-company.js.map