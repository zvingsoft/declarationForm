webpackJsonp([12],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("3d8c6feb", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b0b9c5e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./handlerChain.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b0b9c5e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./handlerChain.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.form-title[data-v-9b0b9c5e] {\n    font-size: 24px;\n    font-weight: bold;\n    margin-left: 6%;\n    padding: 20px 0 5px 0;\n}\n.form-panel[data-v-9b0b9c5e] {\n    width: 80%;\n    margin-left: 5%;\n    padding: 20px 0 0 20px;\n    border-top: 2px solid #ccc;\n    border-radius: 4px;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/form/handlerChain.vue?51d60909"],"names":[],"mappings":";AAuHA;IACA,gBAAA;IACA,kBAAA;IACA,gBAAA;IACA,sBAAA;CACA;AAEA;IACA,WAAA;IACA,gBAAA;IACA,uBAAA;IACA,2BAAA;IACA,mBAAA;CACA","file":"handlerChain.vue","sourcesContent":["<template>\n<div style=\"width: 100%; text-align: center; margin: auto;\">\n\t<div style=\"display: flex;\">\n\t\t<div style=\"flex: 1;margin-top:10px;margin-bottom:200px;\">\n\t\t\t<el-form label-position=\"left\" label-width=\"200px\" class=\"e-form\">\n\t\t\t<div style=\"width: 100%; margin: auto; text-align: left; margin-left: 20px;\">\n\t\t\t\t<div class=\"form-title\">TCC事务</div>\n\t\t\t\t<div class=\"form-panel\">\n          <div></div>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:220px;\" @click=\"trySuccessConfirmSuccess\" type=\"primary\">Try成功Confirm成功</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:220px;\" @click=\"trySuccessConfirmFail\" type=\"primary\">Try成功Confirm失败</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:220px;\" @click=\"tryFailCancelSuccess\" type=\"primary\">Try失败Cancel成功</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:220px;\" @click=\"tryFailCancelFail\" type=\"primary\">Try失败Cancel失败</el-button> </el-form-item>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-title\">负载均衡</div>\n\t\t\t\t<div class=\"form-panel\">\n\t\t\t\t\t<el-form-item> <el-button style=\"width:220px;\" @click=\"loadblanceRoundRobin\" type=\"primary\">轮询调用10次</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:220px;\" @click=\"loadblanceRandom\" type=\"primary\">随机调用10次</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:220px;\" @click=\"loadblanceWeight\" type=\"primary\">基于响应时间调用10次</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:220px;\" @click=\"loadblanceSessionStick\" type=\"primary\">基于会话保持调用10次</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:220px;\" @click=\"loadblanceIsolation\" type=\"primary\">随机故障</el-button> </el-form-item>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-title\">隔离、熔断、容错</div>\n\t\t\t\t<div class=\"form-panel\">\n\t\t\t\t\t<el-form-item> <el-button style=\"width:220px;\" @click=\"circuitBreakerFail\" type=\"primary\">失败熔断</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:220px;\" @click=\"circuitBreakerConcurrent\" type=\"primary\">并发检测熔断</el-button> </el-form-item>\n \t\t\t\t</div>\n\t\t\t\t<div class=\"form-title\">QPS流控</div>\n\t\t\t\t<div class=\"form-panel\">\n\t\t\t\t\t<el-form-item> <el-button style=\"width:220px;\" @click=\"qps1\" type=\"primary\">单次调用</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:220px;\" @click=\"qps10\" type=\"primary\">连续调用10次</el-button> </el-form-item>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</el-form>\n\t\t</div>\n\t\t<div style=\"flex: 1; border-left:2px solid #ccc;border-radius: 4px;font-size:20px;margin-top:40px;\">{{message}}</div>\n\t</div>\n</div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            message: '',\n        };\n    },\n    methods: {\n        trySuccessConfirmSuccess() {\n            axios.get('/handlerChain/trySuccessConfirmSuccess').then(res => {\n                this.message = res.data;\n            });\n        },\n        trySuccessConfirmFail() {\n            axios.get('/handlerChain/trySuccessConfirmFail').then(res => {\n                this.message = res.data;\n            });\n        },\n        tryFailCancelSuccess() {\n            axios.get('/handlerChain/tryFailCancelSuccess').then(res => {\n                this.message = res.data;\n            });\n        },\n        tryFailCancelFail() {\n            axios.get('/handlerChain/tryFailCancelFail').then(res => {\n                this.message = res.data;\n            });\n        },\n        loadblanceRoundRobin() {\n            axios.get('/handlerChain/loadblanceRoundRobin').then(res => {\n                this.message = res.data;\n            });\n        },\n        loadblanceRandom() {\n            axios.get('/handlerChain/loadblanceRandom').then(res => {\n                this.message = res.data;\n            });\n        },\n        loadblanceWeight() {\n            axios.get('/handlerChain/loadblanceWeight').then(res => {\n                this.message = res.data;\n            });\n        },\n        loadblanceSessionStick() {\n            axios.get('/handlerChain/loadblanceSessionStick').then(res => {\n                this.message = res.data;\n            });\n        },\n        loadblanceIsolation() {\n            axios.get('/handlerChain/loadblanceIsolation').then(res => {\n                this.message = res.data;\n            });\n        },\n        circuitBreakerFail() {\n            axios.get('/handlerChain/circuitBreakerFail').then(res => {\n                this.message = res.data;\n            });\n        },\n        circuitBreakerConcurrent() {\n            axios.get('/handlerChain/circuitBreakerConcurrent').then(res => {\n                this.message = res.data;\n            });\n        },\n        qps1() {\n            axios.get('/handlerChain/qps1').then(res => {\n                this.message = res.data;\n            });\n        },\n        qps10() {\n            axios.get('/handlerChain/qps10').then(res => {\n                this.message = res.data;\n            });\n        },\n    },\n    created() {},\n};\n</script>\n\n<style scoped>\n.form-title {\n    font-size: 24px;\n    font-weight: bold;\n    margin-left: 6%;\n    padding: 20px 0 5px 0;\n}\n\n.form-panel {\n    width: 80%;\n    margin-left: 5%;\n    padding: 20px 0 0 20px;\n    border-top: 2px solid #ccc;\n    border-radius: 4px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            message: ''
        };
    },

    methods: {
        trySuccessConfirmSuccess: function trySuccessConfirmSuccess() {
            var _this = this;

            axios.get('/handlerChain/trySuccessConfirmSuccess').then(function (res) {
                _this.message = res.data;
            });
        },
        trySuccessConfirmFail: function trySuccessConfirmFail() {
            var _this2 = this;

            axios.get('/handlerChain/trySuccessConfirmFail').then(function (res) {
                _this2.message = res.data;
            });
        },
        tryFailCancelSuccess: function tryFailCancelSuccess() {
            var _this3 = this;

            axios.get('/handlerChain/tryFailCancelSuccess').then(function (res) {
                _this3.message = res.data;
            });
        },
        tryFailCancelFail: function tryFailCancelFail() {
            var _this4 = this;

            axios.get('/handlerChain/tryFailCancelFail').then(function (res) {
                _this4.message = res.data;
            });
        },
        loadblanceRoundRobin: function loadblanceRoundRobin() {
            var _this5 = this;

            axios.get('/handlerChain/loadblanceRoundRobin').then(function (res) {
                _this5.message = res.data;
            });
        },
        loadblanceRandom: function loadblanceRandom() {
            var _this6 = this;

            axios.get('/handlerChain/loadblanceRandom').then(function (res) {
                _this6.message = res.data;
            });
        },
        loadblanceWeight: function loadblanceWeight() {
            var _this7 = this;

            axios.get('/handlerChain/loadblanceWeight').then(function (res) {
                _this7.message = res.data;
            });
        },
        loadblanceSessionStick: function loadblanceSessionStick() {
            var _this8 = this;

            axios.get('/handlerChain/loadblanceSessionStick').then(function (res) {
                _this8.message = res.data;
            });
        },
        loadblanceIsolation: function loadblanceIsolation() {
            var _this9 = this;

            axios.get('/handlerChain/loadblanceIsolation').then(function (res) {
                _this9.message = res.data;
            });
        },
        circuitBreakerFail: function circuitBreakerFail() {
            var _this10 = this;

            axios.get('/handlerChain/circuitBreakerFail').then(function (res) {
                _this10.message = res.data;
            });
        },
        circuitBreakerConcurrent: function circuitBreakerConcurrent() {
            var _this11 = this;

            axios.get('/handlerChain/circuitBreakerConcurrent').then(function (res) {
                _this11.message = res.data;
            });
        },
        qps1: function qps1() {
            var _this12 = this;

            axios.get('/handlerChain/qps1').then(function (res) {
                _this12.message = res.data;
            });
        },
        qps10: function qps10() {
            var _this13 = this;

            axios.get('/handlerChain/qps10').then(function (res) {
                _this13.message = res.data;
            });
        }
    },
    created: function created() {}
};

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "width": "100%",
      "text-align": "center",
      "margin": "auto"
    }
  }, [_c('div', {
    staticStyle: {
      "display": "flex"
    }
  }, [_c('div', {
    staticStyle: {
      "flex": "1",
      "margin-top": "10px",
      "margin-bottom": "200px"
    }
  }, [_c('el-form', {
    staticClass: "e-form",
    attrs: {
      "label-position": "left",
      "label-width": "200px"
    }
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "margin": "auto",
      "text-align": "left",
      "margin-left": "20px"
    }
  }, [_c('div', {
    staticClass: "form-title"
  }, [_vm._v("TCC事务")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('div'), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.trySuccessConfirmSuccess
    }
  }, [_vm._v("Try成功Confirm成功")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.trySuccessConfirmFail
    }
  }, [_vm._v("Try成功Confirm失败")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.tryFailCancelSuccess
    }
  }, [_vm._v("Try失败Cancel成功")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.tryFailCancelFail
    }
  }, [_vm._v("Try失败Cancel失败")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("负载均衡")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.loadblanceRoundRobin
    }
  }, [_vm._v("轮询调用10次")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.loadblanceRandom
    }
  }, [_vm._v("随机调用10次")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.loadblanceWeight
    }
  }, [_vm._v("基于响应时间调用10次")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.loadblanceSessionStick
    }
  }, [_vm._v("基于会话保持调用10次")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.loadblanceIsolation
    }
  }, [_vm._v("随机故障")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("隔离、熔断、容错")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.circuitBreakerFail
    }
  }, [_vm._v("失败熔断")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.circuitBreakerConcurrent
    }
  }, [_vm._v("并发检测熔断")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("QPS流控")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.qps1
    }
  }, [_vm._v("单次调用")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.qps10
    }
  }, [_vm._v("连续调用10次")])], 1)], 1)])])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "flex": "1",
      "border-left": "2px solid #ccc",
      "border-radius": "4px",
      "font-size": "20px",
      "margin-top": "40px"
    }
  }, [_vm._v(_vm._s(_vm.message))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9b0b9c5e", module.exports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(139)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(141),
  /* template */
  __webpack_require__(142),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-9b0b9c5e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\form\\handlerChain.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] handlerChain.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9b0b9c5e", Component.options)
  } else {
    hotAPI.reload("data-v-9b0b9c5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=formUI-handlerChain.js.map