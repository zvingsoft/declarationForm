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
exports.push([module.i, "\n.form-title[data-v-9b0b9c5e] {\n    font-size: 24px;\n    font-weight: bold;\n    margin: 0 20px 0 20px;\n    padding: 10px 0 0 10px;\n}\n.form-panel[data-v-9b0b9c5e] {\n    margin: 0 20px 0 20px;\n    padding: 10px 0 0 10px;\n    border-top: 2px solid #ccc;\n    border-radius: 4px;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/form/handlerChain.vue?9b1deebc"],"names":[],"mappings":";AAoHA;IACA,gBAAA;IACA,kBAAA;IACA,sBAAA;IACA,uBAAA;CACA;AAEA;IACA,sBAAA;IACA,uBAAA;IACA,2BAAA;IACA,mBAAA;CACA","file":"handlerChain.vue","sourcesContent":["<template>\n<div style=\"width: 100%; text-align: center; margin: auto;\">\n\t<div style=\"display: flex;\">\n\t\t<div style=\"width:300px;margin-top:10px;margin-bottom:200px;\">\n\t\t\t<el-form>\n\t\t\t<div>\n\t\t\t\t<div class=\"form-title\">TCC事务</div>\n\t\t\t\t<div class=\"form-panel\">\n \t\t\t\t\t<el-form-item> <el-button style=\"width:200px;\" @click=\"trySuccessConfirmSuccess\" type=\"primary\">Try成功Confirm成功</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:200px;\" @click=\"trySuccessConfirmFail\" type=\"primary\">Try成功Confirm失败</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:200px;\" @click=\"tryFailCancelSuccess\" type=\"primary\">Try失败Cancel成功</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:200px;\" @click=\"tryFailCancelFail\" type=\"primary\">Try失败Cancel失败</el-button> </el-form-item>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-title\">负载均衡</div>\n\t\t\t\t<div class=\"form-panel\">\n\t\t\t\t\t<el-form-item> <el-button style=\"width:200px;\" @click=\"loadblanceRoundRobin\" type=\"primary\">轮询调用10次</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:200px;\" @click=\"loadblanceRandom\" type=\"primary\">随机调用10次</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:200px;\" @click=\"loadblanceWeight\" type=\"primary\">基于响应时间调用10次</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:200px;\" @click=\"loadblanceSessionStick\" type=\"primary\">基于会话保持调用10次</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:200px;\" @click=\"loadblanceIsolation\" type=\"primary\">随机故障</el-button> </el-form-item>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-title\">隔离、熔断、容错</div>\n\t\t\t\t<div class=\"form-panel\">\n\t\t\t\t\t<el-form-item> <el-button style=\"width:200px;\" @click=\"circuitBreakerFail\" type=\"primary\">失败熔断</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:200px;\" @click=\"circuitBreakerConcurrent\" type=\"primary\">并发检测熔断</el-button> </el-form-item>\n \t\t\t\t</div>\n\t\t\t\t<div class=\"form-title\">QPS流控</div>\n\t\t\t\t<div class=\"form-panel\">\n\t\t\t\t\t<el-form-item> <el-button style=\"width:200px;\" @click=\"qps1\" type=\"primary\">单次调用</el-button> </el-form-item>\n\t\t\t\t\t<el-form-item> <el-button style=\"width:200px;\" @click=\"qps10\" type=\"primary\">连续调用10次</el-button> </el-form-item>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</el-form>\n\t\t</div>\n\t\t<div style=\"flex: 1; text-align:left;border-left:2px solid #ccc;border-radius: 4px;font-size:16px;margin-top:10px;\">\n\t\t\t\t<div class=\"form-title\">\n          日志<el-button size=\"small\" style=\"margin-right:10px;float:right;margin-bottom:5px;\" @click=\"lines.splice(0,lines.length)\" type=\"medium\">清空</el-button>\n          </div>\n\t\t\t\t<div class=\"form-panel\">\n          <p v-for=\"line in lines\" :key=\"line.number\" :style=\"{color:line.color}\">{{line.message}}</p>\n\t\t\t\t</div>\n     </div>\n\t</div>\n</div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            lines: [],\n        };\n    },\n    methods: {\n        trySuccessConfirmSuccess() {\n            this.handlerChainCall('trySuccessConfirmSuccess');\n        },\n        trySuccessConfirmFail() {\n            this.handlerChainCall('trySuccessConfirmFail');\n        },\n        tryFailCancelSuccess() {\n            this.handlerChainCall('tryFailCancelSuccess');\n        },\n        tryFailCancelFail() {\n            this.handlerChainCall('tryFailCancelFail');\n        },\n        loadblanceRoundRobin() {\n            this.handlerChainCall('loadblanceRoundRobin');\n        },\n        loadblanceRandom() {\n            this.handlerChainCall('loadblanceRandom');\n        },\n        loadblanceWeight() {\n            this.handlerChainCall('loadblanceWeight');\n        },\n        loadblanceSessionStick() {\n            this.handlerChainCall('loadblanceSessionStick');\n        },\n        loadblanceIsolation() {\n            this.handlerChainCall('loadblanceIsolation');\n        },\n        circuitBreakerFail() {\n            this.handlerChainCall('circuitBreakerFail');\n        },\n        circuitBreakerConcurrent() {\n            this.handlerChainCall('circuitBreakerConcurrent');\n        },\n        qps1() {\n            this.handlerChainCall('qps1');\n        },\n        qps10() {\n            this.handlerChainCall('qps10');\n        },\n        handlerChainCall(name) {\n            axios\n                .get('/handlerChain/' + name)\n                .then(res => {\n                    this.lines.push({ color: this.getColor(res.data), message: res.data });\n                })\n                .catch(err => {\n                    console.log(err.response);\n                    this.lines.push({ color: this.getColor(err.response.data.message), message: err.response.data.message });\n                });\n        },\n        getColor(message) {\n            if (message.includes('xception') || message.includes('Fail') || message.includes('fail') || message.includes('失败')) {\n                return 'red';\n            }\n            return '';\n        },\n    },\n    created() {},\n};\n</script>\n\n<style scoped>\n.form-title {\n    font-size: 24px;\n    font-weight: bold;\n    margin: 0 20px 0 20px;\n    padding: 10px 0 0 10px;\n}\n\n.form-panel {\n    margin: 0 20px 0 20px;\n    padding: 10px 0 0 10px;\n    border-top: 2px solid #ccc;\n    border-radius: 4px;\n}\n</style>\n"],"sourceRoot":""}]);

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
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            lines: []
        };
    },

    methods: {
        trySuccessConfirmSuccess: function trySuccessConfirmSuccess() {
            this.handlerChainCall('trySuccessConfirmSuccess');
        },
        trySuccessConfirmFail: function trySuccessConfirmFail() {
            this.handlerChainCall('trySuccessConfirmFail');
        },
        tryFailCancelSuccess: function tryFailCancelSuccess() {
            this.handlerChainCall('tryFailCancelSuccess');
        },
        tryFailCancelFail: function tryFailCancelFail() {
            this.handlerChainCall('tryFailCancelFail');
        },
        loadblanceRoundRobin: function loadblanceRoundRobin() {
            this.handlerChainCall('loadblanceRoundRobin');
        },
        loadblanceRandom: function loadblanceRandom() {
            this.handlerChainCall('loadblanceRandom');
        },
        loadblanceWeight: function loadblanceWeight() {
            this.handlerChainCall('loadblanceWeight');
        },
        loadblanceSessionStick: function loadblanceSessionStick() {
            this.handlerChainCall('loadblanceSessionStick');
        },
        loadblanceIsolation: function loadblanceIsolation() {
            this.handlerChainCall('loadblanceIsolation');
        },
        circuitBreakerFail: function circuitBreakerFail() {
            this.handlerChainCall('circuitBreakerFail');
        },
        circuitBreakerConcurrent: function circuitBreakerConcurrent() {
            this.handlerChainCall('circuitBreakerConcurrent');
        },
        qps1: function qps1() {
            this.handlerChainCall('qps1');
        },
        qps10: function qps10() {
            this.handlerChainCall('qps10');
        },
        handlerChainCall: function handlerChainCall(name) {
            var _this = this;

            axios.get('/handlerChain/' + name).then(function (res) {
                _this.lines.push({ color: _this.getColor(res.data), message: res.data });
            }).catch(function (err) {
                console.log(err.response);
                _this.lines.push({ color: _this.getColor(err.response.data.message), message: err.response.data.message });
            });
        },
        getColor: function getColor(message) {
            if (message.includes('xception') || message.includes('Fail') || message.includes('fail') || message.includes('失败')) {
                return 'red';
            }
            return '';
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
      "width": "300px",
      "margin-top": "10px",
      "margin-bottom": "200px"
    }
  }, [_c('el-form', [_c('div', [_c('div', {
    staticClass: "form-title"
  }, [_vm._v("TCC事务")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.trySuccessConfirmSuccess
    }
  }, [_vm._v("Try成功Confirm成功")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.trySuccessConfirmFail
    }
  }, [_vm._v("Try成功Confirm失败")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.tryFailCancelSuccess
    }
  }, [_vm._v("Try失败Cancel成功")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
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
      "width": "200px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.loadblanceRoundRobin
    }
  }, [_vm._v("轮询调用10次")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.loadblanceRandom
    }
  }, [_vm._v("随机调用10次")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.loadblanceWeight
    }
  }, [_vm._v("基于响应时间调用10次")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.loadblanceSessionStick
    }
  }, [_vm._v("基于会话保持调用10次")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
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
      "width": "200px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.circuitBreakerFail
    }
  }, [_vm._v("失败熔断")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
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
      "width": "200px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.qps1
    }
  }, [_vm._v("单次调用")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
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
      "text-align": "left",
      "border-left": "2px solid #ccc",
      "border-radius": "4px",
      "font-size": "16px",
      "margin-top": "10px"
    }
  }, [_c('div', {
    staticClass: "form-title"
  }, [_vm._v("\n          日志"), _c('el-button', {
    staticStyle: {
      "margin-right": "10px",
      "float": "right",
      "margin-bottom": "5px"
    },
    attrs: {
      "size": "small",
      "type": "medium"
    },
    on: {
      "click": function($event) {
        _vm.lines.splice(0, _vm.lines.length)
      }
    }
  }, [_vm._v("清空")])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, _vm._l((_vm.lines), function(line) {
    return _c('p', {
      key: line.number,
      style: ({
        color: line.color
      })
    }, [_vm._v(_vm._s(line.message))])
  }))])])])
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