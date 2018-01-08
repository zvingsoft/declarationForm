webpackJsonp([12],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("a74bb948", content, true);

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".form-title[data-v-9b0b9c5e]{font-size:24px;font-weight:700;margin:0 20px;padding:10px 0 0 10px}.form-panel[data-v-9b0b9c5e]{margin:0 20px;padding:10px 0 0 10px;border-top:2px solid #ccc;border-radius:4px}", ""]);

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
/***/ (function(module, exports) {

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
  }, [_vm._v("负载均衡")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "info"
    },
    on: {
      "click": _vm.loadblanceRoundRobin
    }
  }, [_vm._v("轮询调用baseData")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "info"
    },
    on: {
      "click": _vm.loadblanceRandom
    }
  }, [_vm._v("随机调用manifest")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "info"
    },
    on: {
      "click": _vm.loadblanceWeight
    }
  }, [_vm._v("基于响应时间调用form")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "info"
    },
    on: {
      "click": _vm.loadblanceSessionStick
    }
  }, [_vm._v("基于会话保持调用license")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("熔断与容错")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "info"
    },
    on: {
      "click": _vm.circuitBreakerFail
    }
  }, [_vm._v("错误率30%熔断")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("QPS流控")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', [_c('el-button', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "info"
    },
    on: {
      "click": _vm.qps1
    }
  }, [_vm._v("每秒点击超过5次触发流控")])], 1)], 1)])])], 1), _vm._v(" "), _c('div', {
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

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
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

module.exports = Component.exports


/***/ })

});