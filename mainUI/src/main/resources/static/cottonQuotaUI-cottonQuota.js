webpackJsonp([5],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
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
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\setting\\cottonQuota.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cottonQuota.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ee90e3d", Component.options)
  } else {
    hotAPI.reload("data-v-6ee90e3d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

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

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(186);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("6800965e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ee90e3d\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cottonQuota.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ee90e3d\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cottonQuota.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-6ee90e3d] {\n  padding: 10px;\n}\n.search-bar[data-v-6ee90e3d] {\n  padding: 5px 12px;\n}\n.cottonquota-table-expand[data-v-6ee90e3d] {\n  font-size: 0;\n}\n.cottonquota-table-expand label[data-v-6ee90e3d] {\n  width: 90px;\n  color: #99a9bf;\n}\n.cottonquota-table-expand .el-form-item[data-v-6ee90e3d] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 50%;\n}\n.page-wrap[data-v-6ee90e3d] {\n  margin-top: 20px;\n  margin-right: 20px;\n}\n.page-wrap .page[data-v-6ee90e3d] {\n  float: right;\n}\n.red-color[data-v-6ee90e3d] {\n  color: #FF4949;\n}\n.green-color[data-v-6ee90e3d] {\n  color: #13CE66;\n}\n\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/cottonQuota.vue?650841b5"],"names":[],"mappings":";AA6UA;EACA,cAAA;CACA;AAEA;EACA,kBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,YAAA;EACA,eAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,iBAAA;EACA,mBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,eAAA;CACA","file":"cottonQuota.vue","sourcesContent":["<template>\n  <div>\n    <el-toolbar>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addClick\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> 新建</el-button>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"editClick\" :disabled=\"selectedRows.length !== 1\">\n        <i class=\"fa fa-edit\" aria-hidden=\"true\"></i> 编辑</el-button>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"deleteClick\" :disabled=\"selectedRows.length === 0\">\n        <i class=\"fa fa-minus\" aria-hidden=\"true\"></i> 删除</el-button>\n      <!-- <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"auditClick('Y')\" :disabled=\"selectedRows.length === 0\">\n        <i class=\"fa fa-check\" aria-hidden=\"true\"></i> 审核通过</el-button>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"auditClick('N')\" :disabled=\"selectedRows.length === 0\">\n        <i class=\"fa fa-remove\" aria-hidden=\"true\"></i> 审核不通过</el-button> -->\n    </el-toolbar>\n\n    <div class=\"search-bar fr\">\n      <span>编号</span>&nbsp;\n      <el-input v-model=\"number\" size=\"small\" placeholder=\"请输入编号\" style=\"width:200px\"></el-input>&nbsp;\n      <span>企业</span>&nbsp;\n      <el-input v-model=\"companyName\" size=\"small\" placeholder=\"请输入企业\" style=\"width:200px\"></el-input>\n      <el-button type=\"primary\" @click=\"list\" size=\"small\" style=\"width: 60px;\">搜索</el-button>\n    </div>\n\n    <div class=\"main-content-wrap\">\n      <el-table ref=\"cottonquotaTable\" :data=\"cottonquotas\" style=\"width: 100%\" v-loading=\"dataLoading\" @selection-change=\"onSelectionChange\"\n        @row-click=\"onCottonquotaTableRowClick\" @row-dblclick=\"editClick\">\n        <el-table-column type=\"selection\" width=\"50\">\n        </el-table-column>\n        <el-table-column type=\"expand\">\n          <template slot-scope=\"props\">\n            <el-form label-position=\"left\" inline class=\"cottonquota-table-expand\">\n              <el-form-item label=\"编号\">\n                <span>{{ props.row.number }}</span>\n              </el-form-item>\n              <el-form-item label=\"企业名称\">\n                <el-button type=\"text\" @click=\"viewCompanyClick( props.row.companyId)\">{{ props.row.companyName }}</el-button>\n              </el-form-item>\n              <!-- <el-form-item label=\"银行信用评级\">\n                <span>{{ props.row.bankcreditrating }}</span>\n              </el-form-item> -->\n              <!-- <el-form-item label=\"申请量\">\n                <span>{{ props.row.application }}（吨）</span>\n              </el-form-item> -->\n              <el-form-item label=\"分配量\">\n                <span>{{ props.row.quota }}（吨）</span>\n              </el-form-item>\n              <el-form-item label=\"已进口\">\n                <span>{{ props.row.used }}（吨）</span>\n              </el-form-item>\n              <!-- <el-form-item label=\"企业地址\">\n                <span>{{ props.row.address }}</span>\n              </el-form-item>\n              <el-form-item label=\"企业电话\">\n                <span>{{ props.row.phone }}</span>\n              </el-form-item>\n              <el-form-item label=\"企业传真\">\n                <span>{{ props.row.fax }}</span>\n              </el-form-item>\n              <el-form-item label=\"企业邮政编码\">\n                <span>{{ props.row.postcode }}</span>\n              </el-form-item> -->\n              <el-form-item label=\"申请时间\">\n                <span>{{ new Date(props.row.addTime).toLocaleString() }}</span>\n              </el-form-item>\n              <!-- <el-form-item label=\"审核状态\">\n                <span v-if=\"props.row.auditStatus==='Y'\" class=\"green-color\">已通过</span>\n                <span v-else-if=\"props.row.auditStatus==='N'\" class=\"red-color\">未通过</span>\n                <span v-else>未审核</span>\n              </el-form-item> -->\n              <el-form-item label=\"添加人\">\n                <span>{{ props.row.addUser }}</span>\n              </el-form-item>\n            </el-form>\n          </template>\n        </el-table-column>\n        <el-table-column label=\"编号\" prop=\"number\">\n        </el-table-column>\n        <el-table-column label=\"企业\">\n          <template slot-scope=\"props\">\n            <el-button type=\"text\" @click=\"viewCompanyClick( props.row.companyId)\">{{ props.row.companyName }}</el-button>\n          </template>\n        </el-table-column>\n        <!-- <el-table-column label=\"银行信用评级\" prop=\"bankcreditrating\">\n        </el-table-column> -->\n        <!-- <el-table-column label=\"申请量（吨）\" prop=\"application\">\n        </el-table-column> -->\n        <el-table-column label=\"分配量（吨）\" prop=\"quota\">\n        </el-table-column>\n        <el-table-column label=\"已进口（吨）\" prop=\"used\">\n        </el-table-column>\n        <!-- <el-table-column label=\"审核状态\">\n          <template slot-scope=\"scope\">\n            <span v-if=\"scope.row.auditStatus==='Y'\" class=\"green-color\">已通过</span>\n            <span v-else-if=\"scope.row.auditStatus==='N'\" class=\"red-color\">未通过</span>\n            <span v-else>未审核</span>\n          </template>\n        </el-table-column>\n        <el-table-column label=\"操作\">\n          <template slot-scope=\"scope\">\n            <el-button type=\"text\" @click=\"auditClick( 'Y',scope.row.id)\">通过</el-button>&nbsp;\n            <el-button type=\"text\" @click=\"auditClick( 'N',scope.row.id)\">不通过</el-button>\n          </template>\n        </el-table-column> -->\n      </el-table>\n\n      <!--分页-->\n      <div class=\"page-wrap\">\n        <el-pagination class=\"page\" @size-change=\"sizeChangeHandler\" @current-change=\"list\" :current-page.sync=\"currentPage\" :page-sizes=\"pageSizes\"\n          :page-size=\"pageSize\" layout=\"total, sizes, prev, pager, next, jumper\" :total=\"total\">\n        </el-pagination>\n      </div>\n\n    </div>\n\n    <!-- 新建,编辑对话框 -->\n    <el-dialog size=\"tiny\" :title=\"addOperate?'新建':'编辑'\" :visible.sync=\"showDialog\">\n      <el-form label-width=\"160px\" :model=\"tmpCottonQuota\">\n        <el-form-item label=\"企业名称：\">\n          <el-select v-model=\"tmpCompany\" clearable placeholder=\"请选择\" @change=\"onCompanyChange\" :disabled=\"!addOperate\" v-if=\"addOperate\">\n            <el-option v-for=\"item in companys\" :key=\"item.id\" :label=\"item.name\" :value=\"item\">\n            </el-option>\n          </el-select>\n          <span v-else>{{tmpCottonQuota.companyName}}</span>\n        </el-form-item>\n        <el-form-item label=\"分配量：\">\n          <el-input-number :min=\"0\" placeholder=\"请输入分配量\" v-model=\"tmpCottonQuota.quota\" class=\"width-300\"></el-input-number>（单位：吨）\n        </el-form-item>\n        <el-form-item label=\"已进口：\">\n          <el-input-number :min=\"0\" placeholder=\"请输入已进口量\" v-model=\"tmpCottonQuota.used\" class=\"width-300\"></el-input-number>（单位：吨）\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"showDialog = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"save\" :disabled=\"saveStatus\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n    <!-- 企业信息对话框 -->\n    <company-detail :id=\"companyId\" :show.sync=\"showCompanyDialog\"></company-detail>\n\n  </div>\n</template>\n\n<script>\n  // require('./mock/cottonQuota.js')\n  // require('./mock/company.js')\n  import companyAPI from './api/companyAPI.js';\n  import cottonQuotaAPI from './api/cottonQuotaAPI.js';\n  import companyDetail from './components/companyDetail.vue';\n\n  export default {\n    data() {\n      return {\n        dataLoading: true,\n        cottonquotas: [],\n        number: '',\n        companyName: '',\n        tmpCottonQuota: {},\n        addOperate: true,\n        saveStatus: false,\n        showDialog: false,\n        showCompanyDialog: false,\n        selectedRows: [],\n        companys: {},\n        companyId: 0,\n        tmpCompany: {},\n        total: 0,\n        pageSize: 15,\n        currentPage: 1,\n        pageSizes: [15, 20, 30, 40, 50]\n      }\n    },\n    methods: {\n      //审核\n      auditClick(pass, ids) {\n        if (ids == undefined || ids == '') {\n          ids = this.getSelectedIds().join(',');\n        }\n        cottonQuotaAPI.auditCottonQuota(pass, ids).then(data => {\n          if (data.status == 200) {\n            this.$message.success(data.data);\n            this.list();\n          } else {\n            this.$message.error(data.data);\n          }\n        });\n      },\n      //单击一行选中当前行、单击多选框增加选中当前行\n      onCottonquotaTableRowClick(row, event, column) {\n        if (column.type != \"selection\") {\n          this.$refs.cottonquotaTable.clearSelection();\n        }\n        this.$refs.cottonquotaTable.toggleRowSelection(row);\n      },\n      //选择改变\n      onSelectionChange(selection) {\n        this.selectedRows = selection;\n      },\n      //分页大小改变\n      sizeChangeHandler(val) {\n        this.pageSize = val;\n        this.list();\n      },\n      //列表\n      list() {\n        this.dataLoading = false;\n        cottonQuotaAPI.getCottonQuota(this.number, this.companyName, this.currentPage, this.pageSize).then(data => {\n          this.cottonquotas = data.data;\n          if (this.number != '') {\n            this.cottonquotas = this.cottonquotas.filter(val => val.number.indexOf(this.number) != -1)\n          }\n          if (this.companyName != '') {\n            this.cottonquotas = this.cottonquotas.filter(val => val.companyName.indexOf(this.companyName) != -1)\n          }\n          this.total = this.cottonquotas.length;\n          this.dataLoading = false;\n        })\n      },\n      //新增\n      addClick() {\n        this.loadCompany();\n        this.addOperate = true;\n        this.tmpCottonQuota = {};\n        this.saveStatus = false;\n        this.showDialog = true;\n      },\n      //编辑\n      editClick() {\n        this.addOperate = false;\n        this.tmpCottonQuota = Object.assign({}, this.selectedRows[0]);\n        this.saveStatus = false;\n        this.showDialog = true;\n      },\n      //删除\n      deleteClick() {\n        let rowIds = this.getSelectedIds().join(',');\n        this.$confirm(\"确认删除所选的数据?\", '提示', {\n          confirmButtonText: '确定',\n          cancelButtonText: '取消',\n          type: 'warning',\n          beforeClose: (action, instance, done) => {\n            if (action == 'confirm') {\n              instance.confirmButtonLoading = true;\n              return cottonQuotaAPI.deleteCottonQuota(rowIds).then(data => {\n                if (data.status == 200) {\n                  this.list();\n                  this.$notify({\n                    title: '成功',\n                    message: data.data,\n                    type: 'success',\n                    duration: 2000,\n                  });\n                } else {\n                  this.$alert(data);\n                }\n                instance.confirmButtonLoading = false;\n                done(data);\n              });\n            } else {\n              done();\n            }\n          }\n        }).catch(() => {\n          this.$notify.info({\n            title: '取消',\n            message: '操作取消！',\n            duration: 2000\n          });\n        });\n      },\n      //查看公司信息\n      viewCompanyClick(companyId) {\n        this.showCompanyDialog = true;\n        this.companyId = companyId;\n      },\n      //保存\n      save() {\n        this.saveStatus = true;\n        if (this.addOperate) {\n          this.tmpCottonQuota.companyId = this.tmpCompany.id;\n          this.tmpCottonQuota.companyName = this.tmpCompany.name;\n          this.tmpCompany = {};\n          cottonQuotaAPI.addCottonQuota(this.tmpCottonQuota).then(data => {\n            if (data.status == 200) {\n              this.list();\n              this.$message.success(data.data);\n            } else {\n              this.$message.error(data.data);\n            }\n            this.saveStatus = false;\n            this.showDialog = false;\n          });\n        } else {\n          cottonQuotaAPI.editCottonQuota(this.tmpCottonQuota).then(data => {\n            if (data.status == 200) {\n              this.list();\n              this.$message.success(data.data);\n            } else {\n              this.$message.error(data.data);\n            }\n            this.saveStatus = false;\n            this.showDialog = false;\n          });\n        }\n      },\n      //获取选中id数组\n      getSelectedIds() {\n        let rowIds = [];\n        this.selectedRows.forEach(function (row) {\n          rowIds.push(row.id);\n        });\n        return rowIds;\n      },\n      //加载企业列表共选择\n      loadCompany() {\n        if (!this.companys.length > 0) {\n          companyAPI.getCompany().then(data => {\n            this.companys = data.data;\n          })\n        }\n      }\n    },\n    created() {\n      this.list();\n    },\n    components: {\n      'company-detail': companyDetail\n    }\n  }\n\n</script>\n\n<style scoped>\n  .main-content-wrap {\n    padding: 10px;\n  }\n\n  .search-bar {\n    padding: 5px 12px;\n  }\n\n  .cottonquota-table-expand {\n    font-size: 0;\n  }\n\n  .cottonquota-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n  }\n\n  .cottonquota-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n  }\n\n  .page-wrap {\n    margin-top: 20px;\n    margin-right: 20px;\n  }\n\n  .page-wrap .page {\n    float: right;\n  }\n\n  .red-color {\n    color: #FF4949;\n  }\n\n  .green-color {\n    color: #13CE66;\n  }\n\n</style>\n"],"sourceRoot":""}]);

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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6ee90e3d", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=cottonQuotaUI-cottonQuota.js.map