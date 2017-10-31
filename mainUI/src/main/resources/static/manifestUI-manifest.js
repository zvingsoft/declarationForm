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
var update = __webpack_require__(1)("41804868", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4966948f\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./manifest.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4966948f\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./manifest.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-4966948f] {\n    padding: 10px;\n}\n.width-300[data-v-4966948f] {\n    width: 300px;\n}\n.width-230[data-v-4966948f] {\n    width: 230px;\n}\n.page-wrap[data-v-4966948f] {\n    margin-top: 20px;\n}\n.page-wrap .page[data-v-4966948f] {\n    float: right;\n}\n.search-bar[data-v-4966948f] {\n    padding-bottom: 10px;\n}\n.demo-table-expand[data-v-4966948f] {\n    font-size: 12px;\n}\n.demo-table-expand label[data-v-4966948f] {\n    color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-4966948f] {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 45%;\n}\n.box-card[data-v-4966948f] {\n    width: 100%;\n}\n.form-title[data-v-4966948f] {\n    font-size: 20px;\n    font-weight: bold;\n    margin-left: 6%;\n    padding: 20px 0 5px 0;\n}\n.packinglist-panel[data-v-4966948f] {\n    margin-left: 5%;\n    border: 2px solid #ccc;\n    border-radius: 4px;\n    background-color: #fff;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/manifest.vue?73e169c3"],"names":[],"mappings":";AAieA;IACA,cAAA;CACA;AAEA;IACA,aAAA;CACA;AAEA;IACA,aAAA;CACA;AAEA;IACA,iBAAA;CACA;AAEA;IACA,aAAA;CACA;AAEA;IACA,qBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,eAAA;CACA;AAEA;IACA,gBAAA;IACA,iBAAA;IACA,WAAA;CACA;AAEA;IACA,YAAA;CACA;AACA;IACA,gBAAA;IACA,kBAAA;IACA,gBAAA;IACA,sBAAA;CACA;AACA;IACA,gBAAA;IACA,uBAAA;IACA,mBAAA;IACA,uBAAA;CACA","file":"manifest.vue","sourcesContent":["<template>\n  <div>\n    <el-toolbar>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"plus\" @click=\"addManifest\">新建</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"edit\" :disabled=\"selectedRows.length !== 1\" @click=\"editManifest\">编辑</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"delete\" :disabled=\"selectedRows.length === 0\" @click=\"deleteManifests\">删除</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"information\" :disabled=\"selectedRows.length !== 1\" @click=\"viewGoods\">查看商品</el-button>\n    </el-toolbar>\n    <div class=\"main-content-wrap\">\n      <div class=\"search-bar fr\">\n        舱单编号:\n        <el-input v-model=\"search.manifestNum\" size=\"small\" placeholder=\"请输入舱单编号\" style=\"width: 200px;\"></el-input>\n        收件公司：\n        <el-input v-model=\"search.receiveCompany\" size=\"small\" placeholder=\"请输入收件公司\" style=\"width: 200px;\"></el-input>\n        收货人：\n        <el-input v-model=\"search.receivePerson\" size=\"small\" placeholder=\"请输入收货人\" style=\"width: 200px;\"></el-input>\n        <el-button size=\"small\" type=\"primary\" @click=\"handleSearchBtn\" style=\"width: 60px;\">搜索</el-button>\n      </div>\n      <!--表格-->\n      <div>\n        <el-table :data=\"manifestTable\"  ref=\"manifestTable\"   @row-click=\"rowClick\"  @selection-change=\"onSelectionChange\" @row-dblclick=\"dblclickManifest\" >\n          <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n          <el-table-column type=\"expand\">\n            <template slot-scope=\"props\">\n              <el-form label-position=\"left\" inline class=\"demo-table-expand\" label-width=\"120px\">\n                <el-form-item label=\"舱单编号\">\n                  <span>{{props.row.manifestNum}}</span>\n                </el-form-item>\n                <el-form-item label=\"收件公司\">\n                  <span>{{props.row.receiveCompany}}</span>\n                </el-form-item>\n                <el-form-item label=\"商品\">\n                  <span>{{props.row.skunames}}</span>\n                </el-form-item>\n                <el-form-item label=\"状态\">\n                  <span>{{props.row.status}}</span>\n                </el-form-item>\n                <el-form-item label=\"收货人\">\n                  <span>{{props.row.receivePerson}}</span>\n                </el-form-item>\n                <el-form-item label=\"电话\">\n                  <span>{{props.row.telephone}}</span>\n                </el-form-item>\n              </el-form>\n            </template>\n          </el-table-column>\n          <el-table-column prop=\"manifestNum\" min-width=\"20%\" label=\"舱单编号 \">\n            <template slot-scope=\"scope\">\n             <a @click=\"lookClick(scope.row)\" class=\"a-btn\">{{scope.row.manifestNum}}</a>\n           </template>\n          </el-table-column>\n          <el-table-column prop=\"receiveCompany\" min-width=\"15%\" label=\"收件公司\"></el-table-column>\n          <el-table-column prop=\"skunames\" min-width=\"30%\" label=\"商品\"></el-table-column>\n          <el-table-column prop=\"status\" min-width=\"10%\" label=\"状态\"></el-table-column>\n          <el-table-column prop=\"receivePerson\" min-width=\"10%\" label=\"收货人\"></el-table-column>\n          <el-table-column prop=\"telephone\" min-width=\"15%\" label=\"电话\"></el-table-column>\n        </el-table>\n      </div>\n      <!--分页-->\n      <div class=\"page-wrap\">\n        <el-pagination class=\"page\" @size-change=\"sizeChangeHandler\" @current-change=\"currentChangeHandler\" :current-page.sync=\"currentPage\" :page-sizes=\"pageSizes\" :page-size=\"pageSize\" :total=\"total\" layout=\"total,sizes, prev, pager, next\">\n        </el-pagination>\n      </div>\n    </div>\n\n    <!-- 新建,编辑对话框 -->\n    <el-dialog :title=\"addOrEdit==1?'新建':'编辑'\" :visible.sync=\"showDialog\" @close=\"closeAddOrEditDialog\">\n      <el-form label-width=\"160px\" :model=\"tmpManifest\" :rules=\"manifestRules\" ref=\"manifestForm\">\n        <el-form-item label=\"舱单编号：\" prop=\"manifestNum\">\n          <el-input placeholder=\"请输入舱单编号\" v-model=\"tmpManifest.manifestNum\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"收件公司：\" prop=\"receiveCompany\">\n          <el-select v-model=\"tmpManifest.receiveCompany\" clearable placeholder=\"请选择收件公司\" class=\"width-300\">\n            <el-option v-for=\"item in companys\" :key=\"item.id\" :label=\"item.name\" :value=\"item.name\">\n            </el-option>\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"发货地：\">\n          <el-input placeholder=\"请输入发货地\" v-model=\"tmpManifest.sendAddress\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"收货人：\" prop=\"receivePerson\">\n          <el-input v-model=\"tmpManifest.receivePerson\" placeholder=\"请输入收货人\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"电话：\">\n          <el-input placeholder=\"请填写电话\" v-model=\"tmpManifest.telephone\" class=\"width-300\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div class=\"form-title\">添加商品</div>\n      <div class=\"packinglist-panel\">\n        <div style=\"height:50px;background-color:#f5f5f5; padding:5px;\">\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"openSelectGoods\" >\n        <i class=\"fa fa-plus\"></i>添加</el-button>\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\"  :disabled=\"selectedGoodsList.length === 0\" @click=\"deleteSelectedGoodsList\" >\n        <i class=\"fa fa-remove\"></i>删除</el-button>\n    </div>\n          <el-table :data=\"temsku\" @selection-change=\"selectedGoodsListChange\" >\n          <el-table-column type=\"selection\" min-width=\"5%\" align=\"center\" ></el-table-column>\n          <el-table-column prop=\"sku\" min-width=\"15%\" label=\"商品编号\"></el-table-column>\n          <el-table-column prop=\"skuname\" min-width=\"55%\" label=\"商品名称\"></el-table-column>\n          <el-table-column prop=\"quantity\" min-width=\"25%\" label=\"数量\">\n            <template slot-scope=\"scope\">\n              <el-input-number size=\"small\" v-model=\"scope.row.quantity\" :min=\"0\"></el-input-number>\n           </template>\n          </el-table-column>\n        </el-table>\n      </div>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"resetManifest\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"saveManifest\" :disabled=\"saveManifestStatus\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n    <!--查看商品-->\n    <el-dialog title=\"查看商品\" :visible.sync=\"viewDialog\">\n      <el-card class=\"box-card\">\n        <div slot=\"header\">\n          <span>收件公司：{{manifestGoodInfo.receiveCompany}}</span>\n        </div>\n        <div>\n          <el-table :data=\"manifestGoodInfo.goodsinfo\" >\n          <el-table-column prop=\"sku\" min-width=\"20%\" label=\"商品编号\"></el-table-column>\n          <el-table-column prop=\"skuname\" min-width=\"70%\" label=\"商品名称\"></el-table-column>\n          <el-table-column prop=\"quantity\" min-width=\"10%\" label=\"数量\"></el-table-column>\n        </el-table>\n          </div>\n      </el-card>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"viewDialog = false\">关 闭</el-button>\n      </div>\n    </el-dialog>\n<!--选择商品-->\n    <el-dialog title=\"选择商品\" :visible.sync=\"viewSelectGoods\">\n  <el-table :data=\"SKUData\" @selection-change=\"selectedGoodsChange\"  >\n    <el-table-column type=\"selection\" width=\"55\" align=\"center\" ></el-table-column>\n          <el-table-column prop=\"sn\" min-width=\"20%\" label=\"商品编号\"></el-table-column>\n          <el-table-column prop=\"name\" min-width=\"80%\" label=\"商品名称\"></el-table-column>\n        </el-table>\n        <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"viewSelectGoods=false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"selectGoodsClick\" >确 定</el-button>\n      </div>\n</el-dialog>\n\n  </div>\n</template>\n\n<script>\nimport manifestAPI from './api/manifestAPI.js';\nimport skuAPI from './api/skuAPI.js';\nimport companyAPI from './api/companyAPI.js';\n// import './mock/manifest.js'\n\nexport default {\n    data() {\n        return {\n            manifestTable: [],\n            temmanifestTable: [],\n            currentPage: 1,\n            total: 50,\n            pageSize: 5,\n            pageSizes: [5, 10, 15, 20],\n            selectedRows: [],\n            showDialog: false,\n            addOrEdit: 1,\n            tmpManifest: {},\n            manifestRules: {\n                manifestNum: [{ required: true, message: '请输入舱单编号', trigger: 'blur' }],\n                receiveCompany: [{ required: true, message: '请输入收件公司', trigger: 'blur' }],\n                receivePerson: [{ required: true, message: '请输入收货人', trigger: 'blur' }],\n            },\n            saveManifestStatus: false,\n            search: {\n                manifestNum: '',\n                goodsName: '',\n                receiveCompany: '',\n                receivePerson: '',\n            },\n            viewDialog: false,\n            manifestGoodInfo: { goodsinfo: '', receiveCompany: '' },\n            SKUData: [],\n\n            sku: [],\n            viewSelectGoods: false,\n            temsku: [],\n            selectedGoodsRows: [],\n            selectedGoodsList: [],\n            companys: [],\n        };\n    },\n    methods: {\n        onSelectionChange(selection) {\n            this.selectedRows = selection;\n        },\n        openSelectGoods() {\n            let rowIds = [];\n            if (this.temsku) {\n                this.temsku.forEach(function(row) {\n                    rowIds.push(row.sku);\n                });\n            }\n            skuAPI.getSKU().then(data => {\n                this.SKUData = data;\n                this.SKUData = this.SKUData.filter(val => !rowIds.includes(val.sn));\n            });\n            this.viewSelectGoods = true;\n            this.selectedGoodsRows = [];\n        },\n        //选中商品行\n        selectedGoodsChange(selection) {\n            this.selectedGoodsRows = selection;\n        },\n        //勾选商品行\n        selectedGoodsListChange(selection) {\n            this.selectedGoodsList = selection;\n        },\n        //删除勾选商品行\n        deleteSelectedGoodsList() {\n            let rowIds = [];\n            this.selectedGoodsList.forEach(function(row) {\n                rowIds.push(row.sku);\n            });\n            this.$confirm('确认删除所选的数据?', '提示', {\n                confirmButtonText: '确定',\n                cancelButtonText: '取消',\n                type: 'warning',\n                beforeClose: (action, instance, done) => {\n                    if (action == 'confirm') {\n                        instance.confirmButtonLoading = true;\n                        this.temsku = this.temsku.filter(val => !rowIds.includes(val.sku));\n                        this.tmpManifest.items = this.temsku;\n                        instance.confirmButtonLoading = false;\n                    }\n                    done();\n                },\n            }).catch(() => {\n                this.$notify.info({\n                    title: '取消',\n                    message: '操作取消！',\n                    duration: 2000,\n                });\n            });\n        },\n        handleSearchBtn() {\n            this.manifestTable = Object.assign([], this.temmanifestTable);\n            let temManifestnum = this.search.manifestNum;\n            // let temGoodsname = this.search.goodsName;\n            let temReceiveCompany = this.search.receiveCompany;\n            let temReceivePerson = this.search.receivePerson;\n            if (temManifestnum != '' || temReceiveCompany != '' || temReceivePerson != '') {\n                if (temManifestnum != '') {\n                    this.manifestTable = this.manifestTable.filter(val => val.manifestNum.indexOf(temManifestnum) != -1);\n                }\n                if (temReceiveCompany != '') {\n                    this.manifestTable = this.manifestTable.filter(val => val.receiveCompany.indexOf(temReceiveCompany) != -1);\n                }\n                if (temReceivePerson != '') {\n                    this.manifestTable = this.manifestTable.filter(val => val.receivePerson.indexOf(temReceivePerson) != -1);\n                }\n                this.total = this.manifestTable.length;\n            }\n        },\n        sizeChangeHandler(val) {\n            this.pageSize = val;\n        },\n        currentChangeHandler(val) {\n            this.currentPage = val;\n        },\n        //关闭事件\n        closeAddOrEditDialog() {\n            if (\n                !this.tmpManifest.manifestNum ||\n                this.tmpManifest.manifestNum == '' ||\n                !this.tmpManifest.receiveCompany ||\n                this.tmpManifest.receiveCompany == '' ||\n                !this.tmpManifest.receivePerson ||\n                this.tmpManifest.receivePerson == ''\n            ) {\n                this.$refs['manifestForm'].resetFields();\n            }\n            this.showDialog = false;\n        },\n        //取消\n        resetManifest() {\n            this.$refs['manifestForm'].resetFields();\n            this.showDialog = false;\n        },\n        //新建\n        addManifest() {\n            this.addOrEdit = 1;\n            this.tmpManifest = {};\n            this.saveManifestStatus = false;\n            this.showDialog = true;\n            this.sku = [];\n            this.temsku = [];\n            skuAPI.getSKU().then(data => {\n                this.SKUData = data;\n            });\n            companyAPI.getCompany().then(data => {\n                this.companys = data.data;\n            });\n        },\n        //编辑\n        editManifest() {\n            this.addOrEdit = 2;\n            this.showDialog = true;\n            this.saveManifestStatus = false;\n            this.tmpManifest = Object.assign({}, this.selectedRows[0]);\n            this.temsku = this.tmpManifest.items;\n            skuAPI.getSKU().then(data => {\n                this.SKUData = data;\n            });\n            companyAPI.getCompany().then(data => {\n                this.companys = data.data;\n            });\n        },\n        //确认选择商品\n        selectGoodsClick() {\n            if (this.selectedGoodsRows.length === 0) {\n                this.$alert('请至少选择一种商品');\n                return;\n            }\n            let temArr = Object.assign([], this.temsku);\n            this.selectedGoodsRows.forEach(function(row) {\n                let temGoods = {};\n                temGoods.sku = row.sn;\n                temGoods.skuname = row.name;\n                temGoods.quantity = 0;\n                temArr.push(temGoods);\n            });\n            this.temsku = temArr;\n            this.viewSelectGoods = false;\n            this.tmpManifest.items = this.temsku;\n        },\n        //双击\n        dblclickManifest(dbrow) {\n            this.addOrEdit = 2;\n            this.showDialog = true;\n            this.saveManifestStatus = false;\n            this.tmpManifest = Object.assign({}, dbrow);\n            this.temsku = this.tmpManifest.items;\n            skuAPI.getSKU().then(data => {\n                this.SKUData = data;\n            });\n        },\n        //单机\n        rowClick(row, event, column) {\n            if (column.type != 'selection') {\n                this.$refs.manifestTable.clearSelection();\n            }\n            this.$refs.manifestTable.toggleRowSelection(row);\n        },\n\n        //链接\n        lookClick(link) {\n            this.addOrEdit = 2;\n            this.showDialog = true;\n            this.saveManifestStatus = false;\n            this.tmpManifest = Object.assign({}, link);\n            this.temsku = this.tmpManifest.items;\n            skuAPI.getSKU().then(data => {\n                this.SKUData = data;\n            });\n        },\n        //新建和编辑时保存\n        saveManifest() {\n            this.$refs['manifestForm'].validate(valid => {\n                if (valid) {\n                    this.saveManifestStatus = true;\n                    if (this.addOrEdit == 1) {\n                        manifestAPI.addManifest(this.tmpManifest).then(data => {\n                            if (data.status == 200) {\n                                this.getManifestData();\n                                this.temmanifestTable = Object.assign([], this.manifestTable);\n                                this.$message.success(data.data);\n                            } else {\n                                this.$message.error(data.data);\n                            }\n                            this.saveManifestStatus = false;\n                            this.showDialog = false;\n                        });\n                    } else if (this.addOrEdit == 2) {\n                        this.tmpManifest.items = this.temsku;\n                        manifestAPI.editManifest(this.tmpManifest.id, this.tmpManifest).then(data => {\n                            if (data.status == 200) {\n                                this.getManifestData();\n                                this.temmanifestTable = Object.assign([], this.manifestTable);\n                                this.$message.success(data.data);\n                            } else {\n                                this.$message.error(data.data);\n                            }\n                            this.saveManifestStatus = false;\n                            this.showDialog = false;\n                        });\n                    }\n                } else {\n                    this.$alert('请填写正确选项', '提示');\n                    return false;\n                }\n            });\n        },\n        //刪除\n        deleteManifests() {\n            let rowIds = [];\n            this.selectedRows.forEach(function(row) {\n                rowIds.push(row.id);\n            });\n\n            this.$confirm('确认删除所选的数据?', '提示', {\n                confirmButtonText: '确定',\n                cancelButtonText: '取消',\n                type: 'warning',\n                beforeClose: (action, instance, done) => {\n                    if (action == 'confirm') {\n                        instance.confirmButtonLoading = true;\n                        return manifestAPI.deleteManifests(rowIds).then(data => {\n                            if (data.status == 200) {\n                                this.manifestTable = this.manifestTable.filter(val => !rowIds.includes(val.id));\n                                this.temmanifestTable = Object.assign([], this.manifestTable);\n                                this.total = this.manifestTable.length;\n                                this.$notify({\n                                    title: '成功',\n                                    message: data.data,\n                                    type: 'success',\n                                    duration: 2000,\n                                });\n                            } else {\n                                this.$alert(data.data);\n                            }\n                            instance.confirmButtonLoading = false;\n                            done(data);\n                        });\n                    } else {\n                        done();\n                    }\n                },\n            }).catch(() => {\n                this.$notify.info({\n                    title: '取消',\n                    message: '操作取消！',\n                    duration: 2000,\n                });\n            });\n        },\n        //查看商品\n        viewGoods() {\n            this.viewDialog = true;\n            this.manifestGoodInfo = { goodsinfo: [], receiveCompany: '' };\n            this.manifestGoodInfo.receiveCompany = this.selectedRows[0].receiveCompany;\n            manifestAPI.viewManifestsGoods(this.selectedRows[0].id).then(data => {\n                this.manifestGoodInfo.goodsinfo = data.data.items;\n            });\n        },\n        getManifestData() {\n            manifestAPI.getManifestData().then(data => {\n                this.manifestTable = data.data;\n                let temManifestTable = [];\n                this.manifestTable.forEach(function(row) {\n                    let temItems = row.items;\n                    let temrow = Object.assign({}, row);\n                    if (temItems) {\n                        let temArr = [];\n                        temItems.forEach(function(item) {\n                            temArr.push(item.skuname);\n                        });\n                        temrow.skunames = temArr.join(',');\n                    }\n                    temManifestTable.push(temrow);\n                });\n                this.manifestTable = temManifestTable;\n                this.temmanifestTable = Object.assign([], this.manifestTable);\n                this.total = this.manifestTable.length;\n            });\n        },\n    },\n    created() {\n        this.getManifestData();\n    },\n};\n</script>\n\n<style scoped>\n.main-content-wrap {\n    padding: 10px;\n}\n\n.width-300 {\n    width: 300px;\n}\n\n.width-230 {\n    width: 230px;\n}\n\n.page-wrap {\n    margin-top: 20px;\n}\n\n.page-wrap .page {\n    float: right;\n}\n\n.search-bar {\n    padding-bottom: 10px;\n}\n\n.demo-table-expand {\n    font-size: 12px;\n}\n\n.demo-table-expand label {\n    color: #99a9bf;\n}\n\n.demo-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 45%;\n}\n\n.box-card {\n    width: 100%;\n}\n.form-title {\n    font-size: 20px;\n    font-weight: bold;\n    margin-left: 6%;\n    padding: 20px 0 5px 0;\n}\n.packinglist-panel {\n    margin-left: 5%;\n    border: 2px solid #ccc;\n    border-radius: 4px;\n    background-color: #fff;\n}\n</style>\n"],"sourceRoot":""}]);

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
/***/ (function(module, exports, __webpack_require__) {

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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4966948f", module.exports)
  }
}

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
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
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\setting\\manifest.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] manifest.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4966948f", Component.options)
  } else {
    hotAPI.reload("data-v-4966948f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=manifestUI-manifest.js.map