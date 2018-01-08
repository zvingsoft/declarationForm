/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		13: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"licenseUI-license","1":"formUI-declarationRetrieval","2":"formUI-declaration","3":"formUI-taxRegister","4":"formUI-auditing","5":"cottonQuotaUI-cottonQuota","6":"formUI-company","7":"taxCuttingUI-taxCutting","8":"manifestUI-manifest","9":"taxUI-tax","10":"formUI-sku","11":"processingTradeUI-processingTrade","12":"formUI-handlerChain"}[chunkId]||chunkId) + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(19)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ELEMENT;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = AxiosMockAdapter;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementUi = __webpack_require__(4);

var util = {
  title: function title(_title) {
    _title = _title ? _title + ' - Slimdoc' : 'Slimdoc纤云文档';
    window.document.title = _title;
  },
  showMessage: function showMessage(res) {
    (0, _elementUi.Message)({
      message: res.data.message,
      type: res.data.status == 1 ? 'success' : 'error'
    });
  },
  showSuccess: function showSuccess(msg) {
    (0, _elementUi.Message)({
      message: msg,
      type: 'success'
    });
  },
  showError: function showError(msg) {
    (0, _elementUi.Message)({
      message: msg,
      type: 'error'
    });
  },
  showNotification: function showNotification(res) {
    (0, _elementUi.Notification)({
      title: res.status === 1 ? '操作成功' : '操作失败',
      message: res.message,
      type: res.status === 1 ? 'success' : 'error',
      duration: 2000
    });
  },
  showErrorNotification: function showErrorNotification(error) {
    (0, _elementUi.Notification)({
      title: '错误',
      message: error.toString(),
      type: 'error',
      duration: 2000
    });
  },

  // 获取树的指定属性的值节点
  findTreeNode: function findTreeNode(tree, key, val, childName) {
    var result = null;

    for (var i = 0; i < tree.length; i++) {
      if (tree[i][key] === val) {
        result = tree[i];
        break;
      }

      if (tree[i][childName] && tree[i][childName].length) {
        var tmp = this.findTreeNode(tree[i][childName], key, val, childName);

        if (tmp) {
          result = tmp;
          break;
        }
      }
    }

    return result;
  },

  // 获取树的指定属性的值节点的父节点
  findTreeParentNode: function findTreeParentNode(tree, key, val, childName) {
    var result = null;

    for (var i = 0; i < tree.length; i++) {
      if (tree[i][key] === val) {
        result = tree[i];
        break;
      }

      if (tree[i][childName] && tree[i][childName].length) {
        var tmp = this.findTreeParentNode(tree[i][childName], key, val, childName);

        if (tmp) {
          if (tmp[key] === val) {
            result = tree[i];
            console.log(result);
          } else {
            result = tmp;
          }
          break;
        }
      }
    }

    return result;
  },

  // 树节点的数量
  treeNodeSize: function treeNodeSize(tree, childName) {
    var result = void 0,
        child = [];

    for (var i = 0; i < tree.length; i++) {
      if (tree[i][childName] && tree[i][childName].length) {
        var tmp = this.treeNodeSize(tree[i][childName], childName);

        child.push(tmp);
      }
    }

    var childTotal = child.reduce(function (sum, value) {
      return sum + value;
    }, 0);

    result = i + childTotal;

    return result;
  },

  // 验证表单
  validateForm: function validateForm(formRef) {
    return new Promise(function (resolve, reject) {
      formRef.validate(function (valid) {
        if (valid) {
          return resolve(true);
        }
        return reject('没有正确填写表单项！');
      });
    });
  },

  // 下载文件
  downloadFile: function downloadFile(fileURL, filename) {
    return window.axios.get(fileURL, {
      responseType: 'blob'
    }).then(function (res) {
      return res.data;
    }).then(function (blob) {
      var link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      // URL.revokeObjectURL(url);
    });
  },
  urlJoin: function urlJoin(baseURL, path) {
    baseURL = baseURL.startsWith('http://') ? baseURL : 'http://' + baseURL;
    baseURL = baseURL.endsWith('/') ? baseURL.substring(0, baseURL.length - 1) : baseURL;
    path = path.startsWith('/') ? path : '/' + path;

    return '' + baseURL + path;
  },
  loadCSS: function loadCSS(url, insertBefore) {
    var l = document.createElement('link');
    l.setAttribute('rel', 'stylesheet');
    l.setAttribute('type', 'text/css');
    l.setAttribute('href', url);
    if (insertBefore) {
      if (insertBefore.nodeName && insertBefore.nodeType === 1) {
        return document.head.insertBefore(l, insertBefore);
      }
      document.head.insertBefore(l, document.head.firstElementChild);
    } else {
      document.head.appendChild(l);
    }
  },
  loadJS: function loadJS(url) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.setAttribute('src', url);
      document.head.appendChild(s);
      s.onload = resolve;
      s.onerror = reject;
    });
  }
};

exports.default = util;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _elementUi = __webpack_require__(4);

var util = {
  title: function title(_title) {
    _title = _title ? _title + ' - declation from' : 'declation from';
    window.document.title = _title;
  },
  showMessage: function showMessage(res) {
    (0, _elementUi.Message)({
      message: res.data.message,
      type: res.data.status === 1 ? 'success' : 'error'
    });
  },
  showSuccess: function showSuccess(msg) {
    (0, _elementUi.Message)({
      message: msg,
      type: 'success'
    });
  },
  showError: function showError(msg) {
    (0, _elementUi.Message)({
      message: msg,
      type: 'error'
    });
  },
  showNotification: function showNotification(res) {
    (0, _elementUi.Notification)({
      title: res.status === 1 ? '操作成功' : '操作失败',
      message: res.message,
      type: res.status === 1 ? 'success' : 'error',
      duration: 2000
    });
  },
  showErrorNotification: function showErrorNotification(error) {
    (0, _elementUi.Notification)({
      title: '错误',
      message: error.toString(),
      type: 'error',
      duration: 2000
    });
  },

  // 获取树的指定属性的值节点
  findTreeNode: function findTreeNode(tree, key, val, childName) {
    var result = null;

    for (var i = 0; i < tree.length; i++) {
      if (tree[i][key] === val) {
        result = tree[i];
        break;
      }

      if (tree[i][childName] && tree[i][childName].length) {
        var tmp = this.findTreeNode(tree[i][childName], key, val, childName);

        if (tmp) {
          result = tmp;
          break;
        }
      }
    }

    return result;
  },

  // 获取树的指定属性的值节点的父节点
  findTreeParentNode: function findTreeParentNode(tree, key, val, childName) {
    var result = null;

    for (var i = 0; i < tree.length; i++) {
      if (tree[i][key] === val) {
        result = tree[i];
        break;
      }

      if (tree[i][childName] && tree[i][childName].length) {
        var tmp = this.findTreeParentNode(tree[i][childName], key, val, childName);

        if (tmp) {
          if (tmp[key] === val) {
            result = tree[i];
            console.log(result);
          } else {
            result = tmp;
          }
          break;
        }
      }
    }

    return result;
  },

  // 树节点的数量
  treeNodeSize: function treeNodeSize(tree, childName) {
    var result = void 0;
    var child = [];

    for (var i = 0; i < tree.length; i++) {
      if (tree[i][childName] && tree[i][childName].length) {
        var tmp = this.treeNodeSize(tree[i][childName], childName);

        child.push(tmp);
      }
    }

    var childTotal = child.reduce(function (sum, value) {
      return sum + value;
    }, 0);

    result = i + childTotal;

    return result;
  },


  // dt转树形结构json
  toCatalogTreeJson: function toCatalogTreeJson(data) {
    if (!data) {
      return null;
    }

    var tree = [];
    try {
      // 删除所有children,防止多次调用
      data.forEach(function (item) {
        delete item.children;
      });

      // 将数据存储为以id为key的map
      var map = {};
      data.forEach(function (item) {
        map[item.id] = item;
      });
      // console.log(map);

      data.forEach(function (item) {
        // 以当前遍历项的pid,去map对象中找到索引的id
        var parent = map[item.parentid];

        // 好绕啊！ 如果找到了索引，那么此节点不是根节点,需要把此节点添加到他对应的父节点下
        if (parent) {
          (parent.children || (parent.children = [])).push(item);
        } else {
          // 如果在map中没有找到对应的索引ID,就直接把当前的item添加到val中，作为根节点
          tree.push(item);
        }
      });
    } catch (e) {
      console.log(e);
    }
    return tree;
  },
  validateForm: function validateForm(formRef) {
    return new Promise(function (resolve, reject) {
      formRef.validate(function (valid) {
        if (valid) {
          return resolve(true);
        }
        return reject(false);
      });
    });
  },
  urlJoin: function urlJoin(baseURL, path) {
    baseURL = baseURL.startsWith('http://') ? baseURL : 'http://' + baseURL;
    baseURL = baseURL.endsWith('/') ? baseURL.substring(0, baseURL.length - 1) : baseURL;
    path = path.startsWith('/') ? path : '/' + path;

    return '' + baseURL + path;
  },
  loadCSS: function loadCSS(url, insertBefore) {
    var l = document.createElement('link');
    l.setAttribute('rel', 'stylesheet');
    l.setAttribute('type', 'text/css');
    l.setAttribute('href', url);
    if (insertBefore) {
      if (insertBefore.nodeName && insertBefore.nodeType === 1) {
        return document.head.insertBefore(l, insertBefore);
      }
      document.head.insertBefore(l, document.head.firstElementChild);
    } else {
      document.head.appendChild(l);
    }
  },
  loadJS: function loadJS(url) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.setAttribute('src', url);
      document.head.appendChild(s);
      s.onload = resolve;
      s.onerror = reject;
    });
  },

  // 简单的深度克隆，skip为要跳过的属性名
  assign: function assign(object, sources, skip) {
    for (var p in sources) {
      if (sources.hasOwnProperty(p) && p !== skip) {
        var o = sources[p];
        if (o && Array.isArray(o)) {
          object[p] = util.assign([], o, skip);
        } else if (o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && o.constructor === Object) {
          object[p] = util.assign({}, o, skip);
        } else {
          object[p] = sources[p];
        }
      }
    }
    return object;
  }
};

exports.default = util;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 路由设置

var routes = [{
  path: '/',
  redirect: '/form/declaration'
}, {
  path: '/form',
  name: 'form',
  meta: { title: '通关', icon: 'fa fa-ship' },
  component: __webpack_require__(24),
  children: [{
    path: 'declaration',
    meta: { title: '报关单', icon: 'fa fa-file-text-o' },
    component: function component(resolve) {
      return __webpack_require__.e/* require.ensure */(2).then((function () {
        return resolve(__webpack_require__(88));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: 'declarationRetrieval',
    meta: { title: '报关单检索', icon: 'fa fa-search' },
    component: function component(resolve) {
      return __webpack_require__.e/* require.ensure */(1).then((function () {
        return resolve(__webpack_require__(89));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: 'taxRegister',
    meta: { title: '缴税登记', icon: 'fa fa-files-o' },
    component: function component(resolve) {
      return __webpack_require__.e/* require.ensure */(3).then((function () {
        return resolve(__webpack_require__(90));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: 'auditing',
    meta: { title: '审核与放行', icon: 'fa fa-check-square-o' },
    component: function component(resolve) {
      return __webpack_require__.e/* require.ensure */(4).then((function () {
        return resolve(__webpack_require__(91));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: 'handlerChain',
    meta: { title: '处理链示例', icon: 'fa fa-chain' },
    component: function component(resolve) {
      return __webpack_require__.e/* require.ensure */(12).then((function () {
        return resolve(__webpack_require__(92));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }]
}, {
  path: '/setting',
  name: 'setting',
  meta: { title: '业务配置', icon: 'fa fa-sliders' },
  component: __webpack_require__(31),
  children: [{
    path: 'sku',
    meta: { title: '商品管理', icon: 'fa fa-file-text-o' },
    component: function component(resolve) {
      return __webpack_require__.e/* require.ensure */(10).then((function () {
        return resolve(__webpack_require__(93));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: 'company',
    meta: { title: '企业管理', icon: 'fa fa-file-text-o' },
    component: function component(resolve) {
      return __webpack_require__.e/* require.ensure */(6).then((function () {
        return resolve(__webpack_require__(94));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: 'tax',
    meta: { title: '税率管理', icon: 'fa fa-file-text-o' },
    component: function component(resolve) {
      return __webpack_require__.e/* require.ensure */(9).then((function () {
        return resolve(__webpack_require__(95));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: 'license',
    meta: { title: '许可证管理', icon: 'fa fa-file-text-o' },
    component: function component(resolve) {
      return __webpack_require__.e/* require.ensure */(0).then((function () {
        return resolve(__webpack_require__(96));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: 'taxCutting',
    meta: { title: '减免税管理', icon: 'fa fa-file-text-o' },
    component: function component(resolve) {
      return __webpack_require__.e/* require.ensure */(7).then((function () {
        return resolve(__webpack_require__(97));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: 'manifest',
    meta: { title: '舱单管理', icon: 'fa fa-file-text-o' },
    component: function component(resolve) {
      return __webpack_require__.e/* require.ensure */(8).then((function () {
        return resolve(__webpack_require__(98));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: 'processingTrade',
    meta: { title: '加贸管理', icon: 'fa fa-file-text-o' },
    component: function component(resolve) {
      return __webpack_require__.e/* require.ensure */(11).then((function () {
        return resolve(__webpack_require__(99));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: 'cottonQuota',
    meta: { title: '棉花配额管理', icon: 'fa fa-file-text-o' },
    component: function component(resolve) {
      return __webpack_require__.e/* require.ensure */(5).then((function () {
        return resolve(__webpack_require__(100));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }]
}, {
  path: '/system',
  name: 'system',
  meta: { title: '系统', icon: 'fa fa-cogs' },
  component: __webpack_require__(36),
  children: [{
    path: 'user',
    meta: { title: '用户管理', icon: 'fa fa-file-text-o' },
    component: __webpack_require__(41)
  }, {
    path: 'role',
    meta: { title: '角色管理', icon: 'fa fa-file-text-o' },
    component: __webpack_require__(64)
  }]
}, {
  path: '/*',
  component: __webpack_require__(79)
}];

module.exports = routes;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* global axios */
var ruleAPI = {
    getRoles: function getRoles() {
        return axios.get('/roles').then(function (res) {
            return res.data;
        });
    },
    getUsersByRole: function getUsersByRole(rolecode) {
        return axios.get('/roles/' + rolecode + '/users').then(function (res) {
            return res.data;
        });
    },
    getUsersNotRole: function getUsersNotRole(rolecode) {
        return axios.get('/roles/' + rolecode + '/users', {
            params: {
                optional: true
            }
        }).then(function (res) {
            return res.data;
        });
    },
    getMenuPermissionsByRole: function getMenuPermissionsByRole(rolecode) {
        return axios.get('/roles/' + rolecode + '/permissions/menu').then(function (res) {
            return res.data;
        });
    },
    addRole: function addRole(role) {
        return axios.post('/roles', role).then(function (res) {
            return res.data;
        });
    },
    editRole: function editRole(id, role) {
        return axios.put('/roles/' + id, role).then(function (res) {
            return res.data;
        });
    },
    deleteRole: function deleteRole(id) {
        return axios.delete('/roles/' + id).then(function (res) {
            return res.data;
        });
    },
    addUsers: function addUsers(ids, rolecode) {
        var usernames = ids.join(',');
        return axios.put('/roles/' + rolecode + '/users', { usernames: usernames }).then(function (res) {
            return res.data;
        });
    },
    removeUsers: function removeUsers(ids, rolecode) {
        var usernames = ids.join(',');
        return axios.delete('/roles/' + rolecode + '/users', { params: { usernames: usernames } }).then(function (res) {
            return res.data;
        });
    }
};

exports.default = ruleAPI;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(46)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(49),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5e9d9894",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(50)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(61),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4617f830",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(14);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _elementUi = __webpack_require__(4);

var _elementUi2 = _interopRequireDefault(_elementUi);

var _axiosMockAdapter = __webpack_require__(5);

var _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);

var _utils = __webpack_require__(8);

var _utils2 = _interopRequireDefault(_utils);

var _config = __webpack_require__(15);

var _config2 = _interopRequireDefault(_config);

var _toolbar = __webpack_require__(16);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _router = __webpack_require__(9);

var _router2 = _interopRequireDefault(_router);

var _main = __webpack_require__(82);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.axiosMock = window.axiosMock || new _axiosMockAdapter2.default(_axios2.default, { delayResponse: 1000 }); /* global localStorage*/


_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_elementUi2.default);
_vue2.default.component('el-toolbar', _toolbar2.default);

_axios2.default.defaults.baseURL = '/';
_axios2.default.defaults.timeout = 30000;
_axios2.default.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
_axios2.default.defaults.withCredentials = true;

if (window.env === 'dev') {
  _vue2.default.config.devtools = true;
}
var routerConfig = {
  mode: 'hash',
  routes: _router2.default
};
var router = new _vueRouter2.default(routerConfig);

router.beforeEach(function (to, from, next) {
  _utils2.default.title(to.meta.title);
  next();
});

router.afterEach(function (to, from, next) {
  window.scrollTo(0, 0);
});

window.app = new _vue2.default({
  el: '#app',
  router: router,
  render: function render(h) {
    return h(_main2.default);
  }
});

axiosMock.onAny().passThrough();

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = VueRouter;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 配置
module.exports = {};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(17)
  __webpack_require__(20)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(23),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5f13c002",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("6317543e", content, true);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".el-toolbar-body[data-v-5f13c002],.el-toolbar[data-v-5f13c002]{background-color:#f8f8f8}.body-list .el-toolbar-body[data-v-5f13c002],.body-list .el-toolbar[data-v-5f13c002]{background-color:#eceef3}.body-detail .el-toolbar-body[data-v-5f13c002],.body-list .el-toolbar-body[data-v-5f13c002]{box-shadow:inset 1px 0 0 rgba(0,0,0,.06)}.el-toolbar[data-v-5f13c002]{height:50px;border-bottom:1px solid #ddd}.el-toolbar.small[data-v-5f13c002]{height:36px}.el-toolbar-body[data-v-5f13c002]{position:absolute;z-index:100;left:0;right:18px;display:flex;align-items:center;align-content:center;height:50px;font-size:14px;border-bottom:1px solid #ddd}.el-toolbar-body>.el-button[data-v-5f13c002]:first-child,.el-toolbar-body>.el-toolbar-btn[data-v-5f13c002]:first-child,.el-toolbar-body>span[data-v-5f13c002]{margin-left:10px}.el-toolbar-body>.el-button[data-v-5f13c002]:last-child,.el-toolbar-body>.el-toolbar-btn[data-v-5f13c002]:last-child,.el-toolbar-body>span[data-v-5f13c002]{margin-right:10px}.el-toolbar.small .el-toolbar-body[data-v-5f13c002]{height:36px}.el-toolbar-body .button-separator[data-v-5f13c002]{padding:11px 0;width:1px;background-color:rgba(0,0,0,.25);display:inline-block;margin:6px}@media (max-width:576px){.el-toolbar-body[data-v-5f13c002],.el-toolbar[data-v-5f13c002]{min-height:50px;height:auto}.el-toolbar.small .el-toolbar-body[data-v-5f13c002],.el-toolbar.small[data-v-5f13c002]{min-height:36px;height:auto}.el-toolbar-body[data-v-5f13c002]{position:relative;flex-flow:row wrap;padding:5px 0}}", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("3986e8da", content, true);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".el-toolbar .el-button{background:transparent}.el-toolbar .el-button.is-disabled{background-color:transparent}", ""]);

// exports


/***/ }),
/* 22 */
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

exports.default = {
  props: {
    size: {
      type: String,
      default: 'normal'
    }
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "el-toolbar",
    class: {
      'small': _vm.size === 'small'
    }
  }, [_c('div', {
    staticClass: "el-toolbar-body"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(25)
  __webpack_require__(27)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(30),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-795fa0f0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("4922c318", content, true);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "@keyframes ani-demo-spin-data-v-795fa0f0{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.menu-wrap[data-v-795fa0f0]{background-color:#f5f7fb;position:absolute;width:100%;top:50px;bottom:0;overflow:auto}.el-menu[data-v-795fa0f0]{background-color:#f5f7fb}", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("4fae0656", content, true);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".menu-wrap .el-menu{width:200px}", ""]);

// exports


/***/ }),
/* 29 */
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

var menus = [{
    path: '/form/declaration',
    meta: { title: '报关单', icon: 'fa fa-file-text-o' }
}, {
    path: '/form/declarationRetrieval',
    meta: { title: '报关单检索', icon: 'fa fa-search' }
}, {
    path: '/form/taxRegister',
    meta: { title: '缴税登记', icon: 'fa fa-files-o' }
}, {
    path: '/form/auditing',
    meta: { title: '审核与放行', icon: 'fa fa-check-square-o' }
}, {
    path: '/form/handlerChain',
    meta: { title: '处理链示例', icon: 'fa fa-chain' }
}];

exports.default = {
    data: function data() {
        return {
            menus: menus,
            activeMenu: menus[0].path
        };
    },

    methods: {
        onSelectMenu: function onSelectMenu(path) {
            var item = this.menus.find(function (val) {
                return val.path === path;
            });

            if (item) {
                this.$router.push({ path: item.path });
            }
        }
    },
    created: function created() {
        if (location.hash.split('/').length == 2) {
            location.hash = this.activeMenu;
        }
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var path = to.path;
        var item = this.menus.find(function (val) {
            return val.path === path;
        });

        if (item) {
            this.activeMenu = item.path;
        }
        next();
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout"
  }, [_c('div', {
    staticClass: "body-list",
    staticStyle: {
      "background-color": "white"
    }
  }, [_c('el-toolbar', [_c('span', [_c('i', {
    staticClass: "fa fa-ship"
  }), _vm._v(" 通关")])]), _vm._v(" "), _c('div', {
    staticClass: "menu-wrap"
  }, [_c('el-menu', {
    attrs: {
      "default-active": _vm.activeMenu
    },
    on: {
      "select": _vm.onSelectMenu
    }
  }, _vm._l((_vm.menus), function(menu) {
    return _c('el-menu-item', {
      key: menu.path,
      attrs: {
        "index": menu.path
      }
    }, [_c('i', {
      class: menu.meta.icon
    }), _vm._v(" " + _vm._s(menu.meta.title) + "\n        ")])
  }))], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "body-detail"
  }, [_c('div', {
    staticClass: "layout-content-main"
  }, [_c('router-view')], 1)])])
},staticRenderFns: []}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(32)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(35),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5acc77bc",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("15b5bbd2", content, true);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "@keyframes ani-demo-spin-data-v-5acc77bc{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.menu-wrap[data-v-5acc77bc]{background-color:#f5f7fb;position:absolute;width:100%;top:50px;bottom:0;overflow:auto}.el-menu[data-v-5acc77bc]{background-color:#f5f7fb}", ""]);

// exports


/***/ }),
/* 34 */
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

var menus = [{
  path: '/setting/sku',
  meta: { title: '商品管理', icon: 'fa fa-th-list' }
}, {
  path: '/setting/company',
  meta: { title: '企业管理', icon: 'fa fa-american-sign-language-interpreting' }
}, {
  path: '/setting/tax',
  meta: { title: '税率管理', icon: 'fa fa-money' }
}, {
  path: '/setting/license',
  meta: { title: '许可证管理', icon: 'fa fa-compass' }
}, {
  path: '/setting/taxCutting',
  meta: { title: '减免税管理', icon: 'fa fa-hand-lizard-o' }
}, {
  path: '/setting/manifest',
  meta: { title: '舱单管理', icon: 'fa fa-dropbox' }
}, {
  path: '/setting/processingTrade',
  meta: { title: '加贸管理', icon: 'fa fa-wrench' }
}, {
  path: '/setting/cottonQuota',
  meta: { title: '棉花配额管理', icon: 'fa fa-meetup' }
}];

exports.default = {
  data: function data() {
    return {
      menus: menus,
      activeMenu: this.$route.path
    };
  },

  methods: {
    onSelectMenu: function onSelectMenu(path) {
      var item = this.menus.find(function (val) {
        return val.path === path;
      });

      if (item) {
        this.$router.push({ path: item.path });
      }
    }
  },
  created: function created() {
    if (location.hash.split('/').length == 2) {
      location.hash = this.activeMenu;
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var path = to.path;
    var item = this.menus.find(function (val) {
      return val.path === path;
    });

    if (item) {
      this.activeMenu = item.path;
    }
    next();
  }
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout"
  }, [_c('div', {
    staticClass: "body-list",
    staticStyle: {
      "background-color": "white"
    }
  }, [_c('el-toolbar', [_c('span', [_c('i', {
    staticClass: "fa fa-sliders"
  }), _vm._v(" 业务配置")])]), _vm._v(" "), _c('div', {
    staticClass: "menu-wrap"
  }, [_c('el-menu', {
    attrs: {
      "default-active": _vm.activeMenu
    },
    on: {
      "select": _vm.onSelectMenu
    }
  }, _vm._l((_vm.menus), function(menu) {
    return _c('el-menu-item', {
      key: menu.path,
      attrs: {
        "index": menu.path
      }
    }, [_c('i', {
      class: menu.meta.icon
    }), _vm._v(" " + _vm._s(menu.meta.title) + "\n        ")])
  }))], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "body-detail"
  }, [_c('div', {
    staticClass: "layout-content-main"
  }, [_c('router-view')], 1)])])
},staticRenderFns: []}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(37)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(40),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2b8384f3",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("405883e0", content, true);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "@keyframes ani-demo-spin-data-v-2b8384f3{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.menu-wrap[data-v-2b8384f3]{background-color:#f5f7fb;position:absolute;width:100%;top:50px;bottom:0;overflow:auto}.el-menu[data-v-2b8384f3]{background-color:#f5f7fb}", ""]);

// exports


/***/ }),
/* 39 */
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

var menus = [{
  path: '/system/user',
  meta: { title: '用户管理', icon: 'fa fa-users' }
}, {
  path: '/system/role',
  meta: { title: '角色管理', icon: 'fa fa-user-circle' }
}];

exports.default = {
  data: function data() {
    return {
      menus: menus,
      activeMenu: this.$route.path
    };
  },

  methods: {
    onSelectMenu: function onSelectMenu(path) {
      var item = this.menus.find(function (val) {
        return val.path === path;
      });

      if (item) {
        this.$router.push({ path: item.path });
      }
    }
  },
  created: function created() {
    if (location.hash.split('/').length == 2) {
      location.hash = this.activeMenu;
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var path = to.path;
    var item = this.menus.find(function (val) {
      return val.path === path;
    });

    if (item) {
      this.activeMenu = item.path;
    }
    next();
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout"
  }, [_c('div', {
    staticClass: "body-list",
    staticStyle: {
      "background-color": "white"
    }
  }, [_c('el-toolbar', [_c('span', [_c('i', {
    staticClass: "fa fa-gears"
  }), _vm._v(" 系统")])]), _vm._v(" "), _c('div', {
    staticClass: "menu-wrap"
  }, [_c('el-menu', {
    attrs: {
      "default-active": _vm.activeMenu
    },
    on: {
      "select": _vm.onSelectMenu
    }
  }, _vm._l((_vm.menus), function(menu) {
    return _c('el-menu-item', {
      key: menu.path,
      attrs: {
        "index": menu.path
      }
    }, [_c('i', {
      class: menu.meta.icon
    }), _vm._v(" " + _vm._s(menu.meta.title) + "\n        ")])
  }))], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "body-detail"
  }, [_c('div', {
    staticClass: "layout-content-main"
  }, [_c('router-view')], 1)])])
},staticRenderFns: []}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(42)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(63),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-cfa92d8c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("5ea65d4b", content, true);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".main-content-wrap[data-v-cfa92d8c]{padding:10px}.search-bar[data-v-cfa92d8c]{padding-bottom:10px}.pane-btns[data-v-cfa92d8c]{text-align:right}", ""]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userAPI = __webpack_require__(45);

var _userAPI2 = _interopRequireDefault(_userAPI);

var _roleAPI = __webpack_require__(10);

var _roleAPI2 = _interopRequireDefault(_roleAPI);

var _TreeSelect = __webpack_require__(11);

var _TreeSelect2 = _interopRequireDefault(_TreeSelect);

var _MenuPermission = __webpack_require__(12);

var _MenuPermission2 = _interopRequireDefault(_MenuPermission);

var _util = __webpack_require__(7);

var _util2 = _interopRequireDefault(_util);

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

__webpack_require__(62);
exports.default = {
  data: function data() {
    var _this = this;

    return {
      userPermissionTypes: [{ code: 'menuPermission', name: '菜单权限' }],
      currentPage: 1,
      total: 50,
      pageSize: 5,
      pageSizes: [5, 10, 15, 20],
      search: { username: '', company: '' },
      dataLoading: true,
      users: [],
      selectedRows: [],
      handlerLoading: false,
      modifyPasswordModal: false,
      addUserModal: false,
      editUserModal: false,
      editUserActiveNameTab: 'base',
      tmpUser: {
        username: '',
        realname: '',
        password: '',
        repeatPassword: '',
        status: true,
        company: '',
        roles: [],
        roleIds: [],
        lastChangePasswordDate: '',
        email: '',
        tel: '',
        phone: '',
        remark: ''
      },
      roles: [],
      modalLoading: false,
      userRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        realname: [{ required: true, message: '请输入真实姓名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 6, max: 32, message: '密码最少6位，最多32位', trigger: 'blur' }],
        repeatPassword: [{ required: true, message: '请重复输入一次密码', trigger: 'blur' }, {
          validator: function validator(rule, value, callback) {
            if (value !== _this.tmpUser.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          }, trigger: 'blur'
        }],
        email: [{ required: true, message: '请输入邮箱地址', trigger: 'blur' }, { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }],
        roleIds: [{ type: 'array', required: true, message: '请选择所属角色', trigger: 'blur, change' }]
      }

    };
  },

  computed: {
    disableOrEnable: function disableOrEnable() {
      if (this.selectedRows.length !== 1) {
        return '';
      }

      return this.selectedRows[0].status ? '停用' : '启用';
    }
  },
  methods: {
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    addClick: function addClick() {
      var _this2 = this;

      this.tmpUser = {
        username: '',
        realname: '',
        password: '',
        repeatPassword: '',
        sate: true,
        company: '',
        roles: [],
        roleIds: [],
        lastChangePasswordDate: '',
        email: '',
        tel: '',
        phone: '',
        remark: ''
      };
      if (!this.roles.length) {
        Promise.all([]).then(function (datas) {
          _this2.roles = datas[1].data;
        });
      }

      this.addUserModal = true;
    },
    addUserHandler: function addUserHandler() {
      var _this3 = this;

      _util2.default.validateForm(this.$refs['addUserForm']).then(function () {
        _this3.handlerLoading = true;
        _this3.tmpUser.roles = _this3.roles.filter(function (val) {
          return _this3.tmpUser.roleIds.includes(val.rolecode);
        });

        return _userAPI2.default.addUser(_this3.tmpUser).then(function (data) {
          if (data.status !== 1) {
            return data;
          }
          _this3.users.push(_this3.tmpUser);
          return data;
        });
      }).then(function (data) {
        _this3.addUserModal = false;
        _this3.handlerLoading = false;
        _util2.default.showNotification(data);
      }).catch(function (e) {
        _util2.default.showErrorNotification(e);
        _this3.handlerLoading = false;
      });
    },
    editClick: function editClick() {
      var _this4 = this;

      this.tmpUser = Object.assign({ roleIds: [] }, this.tmpUser, this.selectedRows[0]);
      this.tmpUser.roleIds = this.tmpUser.roles.map(function (val) {
        return val.rolecode;
      });
      this.editUserActiveNameTab = 'base';
      this.modalLoading = true;
      this.editUserModal = true;

      Promise.all([_roleAPI2.default.getRoles()]).then(function (datas) {
        _this4.roles = datas[0].data;
        _this4.modalLoading = false;
      });
    },
    editUserHandler: function editUserHandler() {
      var _this5 = this;

      _util2.default.validateForm(this.$refs['editUserForm']).then(function () {
        _this5.handlerLoading = true;
        return _userAPI2.default.editUser(_this5.tmpUser.username, _this5.tmpUser);
      }).then(function (res) {
        if (res.status === 1) {
          return res;
        }
        var index = _this5.users.findIndex(function (val) {
          return val.username === _this5.tmpUser.username;
        });
        _this5.tmpUser.roles = _this5.roles.filter(function (val) {
          return _this5.tmpUser.roleIds.includes(val.rolecode);
        });

        _this5.users = [].concat(_toConsumableArray(_this5.users.slice(0, index)), [_this5.tmpUser], _toConsumableArray(_this5.users.slice(index + 1)));
        return res;
      }).then(function (data) {
        _this5.handlerLoading = false;
        _this5.editUserModal = false;
        _util2.default.showNotification(data);
      }).catch(function (e) {
        _util2.default.showErrorNotification(e);
        _this5.handlerLoading = false;
      });
    },
    deleteClickHandler: function deleteClickHandler() {
      var _this6 = this;

      var rowIds = [];

      this.selectedRows.forEach(function (row) {
        rowIds.push(row.username);
      });

      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action !== 'confirm') {
            done();
            return;
          }
          instance.confirmButtonLoading = true;

          return _userAPI2.default.deleteUsers(rowIds).then(function (data) {
            instance.confirmButtonLoading = false;
            return data;
          }).then(function (data) {
            if (data.status !== 1) {
              return data;
            }

            _this6.users = _this6.users.filter(function (val) {
              return !rowIds.includes(val.username);
            });

            return data;
          }).then(function (data) {
            _util2.default.showNotification(data);
            done();
          }).catch(function (e) {
            _util2.default.showErrorNotification(e);
            instance.confirmButtonLoading = false;
            done();
          });
        }
      }).catch(function (e) {
        _util2.default.showErrorNotification(e);
      });
    },
    disableOrEnableClickHandler: function disableOrEnableClickHandler() {
      var _this7 = this;

      var username = this.selectedRows[0].username;

      this.$confirm('确定' + this.disableOrEnable + '这个用户吗？', '确认' + this.disableOrEnable, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action !== 'confirm') {
            done();
            return;
          }
          instance.confirmButtonLoading = true;
          var handle = void 0;
          if (_this7.selectedRows[0].status) {
            handle = _userAPI2.default.disableUser;
          } else {
            handle = _userAPI2.default.enableUser;
          }

          handle(username).then(function (data) {
            instance.confirmButtonLoading = false;
            return data;
          }).then(function (data) {
            if (data.status !== 1) {
              return data;
            }
            var index = _this7.users.findIndex(function (val) {
              return val.username === username;
            });
            _this7.users[index].status = !_this7.users[index].status;

            return data;
          }).then(function (data) {
            _util2.default.showNotification(data);
            done();
          }).catch(function (e) {
            _util2.default.showErrorNotification(e);
            instance.confirmButtonLoading = false;
            done();
          });
        }
      }).catch(function (e) {
        _util2.default.showErrorNotification(e);
      });
    },
    modifyPasswordClick: function modifyPasswordClick() {
      this.tmpUser.username = this.selectedRows[0].username;
      this.tmpUser.password = '';
      this.tmpUser.repeatPassword = '';

      this.modifyPasswordModal = true;
    },
    modifyPasswordHandler: function modifyPasswordHandler() {
      var _this8 = this;

      _util2.default.validateForm(this.$refs['modifyPasswordForm']).then(function () {
        _this8.handlerLoading = true;
        return _userAPI2.default.updatePassword(_this8.tmpUser.username, _this8.tmpUser.password).then(function (data) {
          _this8.modifyPasswordModal = false;
          _this8.handlerLoading = false;
          return data;
        });
      }).then(function (data) {
        _util2.default.showNotification(data);
      }).catch(function (e) {
        _util2.default.showErrorNotification(e);
        _this8.handlerLoading = false;
      });
    },
    handleSearchBtn: function handleSearchBtn() {
      var _this9 = this;

      if (this.search.username != '' || this.search.company != '') {
        _userAPI2.default.getUsers(search).then(function (data) {
          _this9.users = data.data;
        });
      }
    },
    sizeChangeHandler: function sizeChangeHandler(val) {
      this.pageSize = val;
    },
    currentChangeHandler: function currentChangeHandler(val) {
      this.currentPage = val;
    }
  },
  created: function created() {
    var _this10 = this;

    Promise.all([_userAPI2.default.getUsers()]).then(function (datas) {
      console.info(datas);
      _this10.users = datas[0].data;
      _this10.dataLoading = false;
    });
  },

  components: {
    'menuPermission': _MenuPermission2.default,
    'tree-select': _TreeSelect2.default
  }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var userAPI = {
    getUsers: function getUsers() {
        return axios.get('/users').then(function (res) {
            return res.data;
        });
    },
    deleteUsers: function deleteUsers(ids) {
        var strIds = ids.join(',');
        return axios.delete('/users/' + ids).then(function (res) {
            return res.data;
        });
    },
    disableUser: function disableUser(id) {
        return axios.delete('/users/' + id + '/state').then(function (res) {
            return res.data;
        });
    },
    enableUser: function enableUser(id) {
        return axios.put('/users/' + id + '/state').then(function (res) {
            return res.data;
        });
    },
    updatePassword: function updatePassword(id, password) {
        return axios.put('/users/' + id + '/password', password).then(function (res) {
            return res.data;
        });
    },
    addUser: function addUser(user) {
        return axios.post('/users', user).then(function (res) {
            return res.data;
        });
    },
    editUser: function editUser(id, user) {
        return axios.put('/users/' + id, user).then(function (res) {
            return res.data;
        });
    }
};
exports.default = userAPI;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("28af370e", content, true);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".select-wrap[data-v-5e9d9894]{position:relative;cursor:pointer}.select-wrap .tree-wrap[data-v-5e9d9894]{position:absolute;z-index:10000;top:42px;left:1px;right:1px;background-color:#fff;border:1px solid #d1dbe5;border-radius:3px;box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04)}", ""]);

// exports


/***/ }),
/* 48 */
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

// 树形选择器

exports.default = {
  data: function data() {
    return {
      isOpenTree: false
    };
  },

  methods: {
    inputClickHandler: function inputClickHandler() {
      if (this.disabled) {
        return;
      }
      this.isOpenTree = !this.isOpenTree;
    },
    wrapClickHandler: function wrapClickHandler() {
      if (this.disabled) {
        return;
      }
      if (!this.isOpenTree) {
        this.isOpenTree = true;
      }
    },
    treeNodeClickHandler: function treeNodeClickHandler(data) {
      var val = {};
      val[this.itemsOptions.label] = data[this.itemsOptions.label];
      val[this.itemsOptions.key] = data[this.itemsOptions.key];

      this.$emit('input', val);
      this.isOpenTree = false;
    }
  },
  computed: {
    inputValue: function inputValue() {
      if (!this.value || !this.itemsOptions || !this.itemsOptions.label) {
        return '';
      }

      return this.value[this.itemsOptions.label] || '';
    },
    currentNodeKey: function currentNodeKey() {
      if (!this.value || !this.itemsOptions || !this.itemsOptions.key) {
        return '';
      }

      return this.value[this.itemsOptions.key] || '';
    }
  },
  props: ['value', 'placeholder', 'items', 'itemsOptions', 'disabled'],
  mounted: function mounted() {
    var that = this;
    document.addEventListener('click', function () {
      that.isOpenTree = false;
    }, false);
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "select-wrap",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.wrapClickHandler($event)
      }
    }
  }, [_c('el-input', {
    attrs: {
      "value": _vm.inputValue,
      "placeholder": _vm.placeholder,
      "readonly": true,
      "disabled": _vm.disabled,
      "icon": _vm.isOpenTree ? 'caret-top' : 'caret-bottom'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.inputClickHandler($event)
      }
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isOpenTree),
      expression: "isOpenTree"
    }],
    staticClass: "tree-wrap"
  }, [_c('el-tree', {
    attrs: {
      "data": _vm.items,
      "node-key": _vm.itemsOptions.key,
      "current-node-key": _vm.currentNodeKey,
      "props": _vm.itemsOptions,
      "default-expand-all": true,
      "expand-on-click-node": false,
      "highlight-current": true
    },
    on: {
      "node-click": _vm.treeNodeClickHandler
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("ee3e1d10", content, true);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TreePermission = __webpack_require__(53);

var _TreePermission2 = _interopRequireDefault(_TreePermission);

var _privAPI = __webpack_require__(60);

var _privAPI2 = _interopRequireDefault(_privAPI);

var _util = __webpack_require__(7);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      permission: [],
      permissionBak: [],
      permissionTree: [],
      defaultProps: {
        children: 'children',
        label: 'name',
        permission: 'items'
      },
      handlerLoading: false
    };
  },

  methods: {
    getData: function getData() {
      var _this = this;

      //        console.info("xxxx="+this.id+"  xxx="+this.refresh);
      if (this.id) {
        _privAPI2.default.getMenuPermissions(this.id, this.type).then(function (res) {
          _this.permissionBak = Object.assign([], res.data.value);
          _this.permission = res.data.value;
          _this.permissionTree = res.data.tree;
        });
      }
    },
    selectAllClickHandler: function selectAllClickHandler() {
      var handle = function handle(tree) {
        var result = [];

        for (var i = 0; i < tree.length; i++) {
          if (tree[i].code) {
            result.push(tree[i].code);
          }

          if (tree[i].items && tree[i].items.length > 0) {
            tree[i].items.forEach(function (val) {
              result.push(val.code);
            });
          }

          if (tree[i].children && tree[i].children.length > 0) {
            var tmp = handle(tree[i].children);
            result = result.concat(tmp);
          }
        }

        return result;
      };

      this.permission = handle(this.permissionTree);
    },
    saveClickHandler: function saveClickHandler() {
      var _this2 = this;

      this.handlerLoading = true;
      _privAPI2.default.saveMenuPermissions(this.id, this.type, this.permission, this.permissionBak).then(function (res) {
        _util2.default.showNotification(res);
        _this2.handlerLoading = false;
      }).catch(function (e) {
        _util2.default.showErrorNotification(e);
        _this2.handlerLoading = false;
      });
    }
  },
  watch: {
    id: function id(value, oldValue) {
      console.log('refresh', value, oldValue);

      if (value) {
        this.getData();
      } else {
        this.permission = [];
        this.permissionTree = [];
      }
    }
  },
  created: function created() {
    this.getData();
  },

  props: {
    id: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      required: true
    }
  },
  components: {
    'tree-permission': _TreePermission2.default
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

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(54)
  __webpack_require__(56)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(59),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6c8bf032",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("dff656e0", content, true);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("4b93245e", content, true);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".permission-tree-wrap .el-tree-node__content[data-v-6c8bf032]{height:auto}", ""]);

// exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(7);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {};
  },

  props: {
    'value': {
      type: Array,
      required: true
    },
    'permissions': {
      type: Array,
      required: true
    },
    'props': {
      type: Object,
      default: function _default() {
        return {
          children: 'children',
          label: 'name',
          permission: 'permissions'
        };
      }
    },
    'expand': {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  methods: {
    checkBoxChangeHandler: function checkBoxChangeHandler(event) {
      var target = event.target;


      var val = Object.assign([], this.value);

      if (target.checked) {
        val.push(target.value);
      } else {
        var index = val.findIndex(function (val) {
          return val === target.value;
        });
        val.splice(index, 1);
      }

      return this.$emit('input', val);
    },
    nodeCheckBoxChangeHandler: function nodeCheckBoxChangeHandler(event) {
      var target = event.target;


      var val = Object.assign([], this.value);
      var node = _util2.default.findTreeNode(this.permissions, 'code', target.value, this.props.children);
      var nodeValues = this.treeNodeAllPermissionItems([node]);

      if (target.checked) {
        // 全选子节点
        var unique = function unique(array) {
          // 去重
          var a = {};
          for (var i = 0; i < array.length; i++) {
            if (typeof a[array[i]] === 'undefined') a[array[i]] = 1;
          }

          array.length = 0;
          for (var _i in a) {
            array[array.length] = _i;
          }return array;
        };

        val = unique(val.concat(nodeValues));
      } else {
        // 取消选择子节点
        val = val.filter(function (val) {
          return !nodeValues.includes(val);
        });
      }

      return this.$emit('input', val);
    },
    renderContent: function renderContent(h, _ref) {
      var _this = this;

      var node = _ref.node;
      var data = node.data;


      var nodeContent = [];
      nodeContent.push(h('div', {
        'class': ['node-name'],
        'style': {
          'display': 'inline-block'
        }
      }, [h('span', {
        style: {
          display: 'inline-block',
          'marginRight': '20px'
        }
      }, data[this.props.label]), h('el-checkbox', {
        props: {
          'label': data.code,
          'disabled': data.disabled
        },
        on: {
          'change': this.nodeCheckBoxChangeHandler
        }
      }, '')]));

      if (data[this.props.permission] && data[this.props.permission].length) {
        var permissionCheckBoxs = data[this.props.permission].map(function (val) {
          return h('el-checkbox', {
            props: {
              'label': val.code,
              'disabled': val.disabled
            },
            on: {
              'change': _this.checkBoxChangeHandler
            }
          }, val.name);
        }, this);

        nodeContent.push(h('div', {
          style: {
            'paddingLeft': '77px',
            'paddingRight': '22px',
            'whiteSpace': 'normal'
          }
        }, permissionCheckBoxs));
      }

      return h('div', {
        style: {
          display: 'inline-block'
        }
      }, nodeContent);
    },
    treeNodeAllPermissionItems: function treeNodeAllPermissionItems(tree) {
      var result = [];

      for (var i = 0; i < tree.length; i++) {
        if (tree[i].code) {
          result.push(tree[i].code);
        }

        if (tree[i][this.props.permission] && tree[i][this.props.permission].length) {
          var tmpItems = tree[i][this.props.permission].map(function (val) {
            return val.code;
          });
          result = result.concat(tmpItems);
        }

        if (tree[i][this.props.children] && tree[i][this.props.children].length) {
          var tmp = this.treeNodeAllPermissionItems(tree[i][this.props.children]);
          result = result.concat(tmp);
        }
      }

      return result;
    }
  },
  created: function created() {}
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

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tree-wrap"
  }, [_c('el-checkbox-group', {
    attrs: {
      "value": _vm.value
    }
  }, [_c('el-tree', {
    staticClass: "permission-tree-wrap",
    attrs: {
      "data": _vm.permissions,
      "props": _vm.props,
      "default-expand-all": _vm.expand,
      "render-content": _vm.renderContent
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* global axios */
var privAPI = {
    getMenuPermissions: function getMenuPermissions(id, type) {
        return axios.get("/permissions/id/" + id + "/type/" + type + "/menus").then(function (res) {
            return res.data;
        });
    },
    saveMenuPermissions: function saveMenuPermissions(id, type, permissions, permissionsBak) {
        //只处理差异数据
        var priv = {};
        permissionsBak.filter(function (p) {
            return permissions.indexOf(p) == -1;
        }).forEach(function (p) {
            return priv[p] = 0;
        });
        permissions.filter(function (p) {
            return permissionsBak.indexOf(p) == -1;
        }).forEach(function (p) {
            return priv[p] = 1;
        });
        return axios.put("/permissions/id/" + id + "/type/" + type + "/menus", { data: priv }).then(function (res) {
            return res.data;
        });
    }
};
exports.default = privAPI;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-toolbar', {
    attrs: {
      "size": "small"
    }
  }, [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "size": "mini",
      "plain": true,
      "icon": "save",
      "loading": _vm.handlerLoading
    },
    on: {
      "click": _vm.saveClickHandler
    }
  }, [_vm._v("保存")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "size": "mini",
      "plain": true,
      "icon": "check"
    },
    on: {
      "click": _vm.selectAllClickHandler
    }
  }, [_vm._v("全选")])], 1), _vm._v(" "), _c('tree-permission', {
    attrs: {
      "permissions": _vm.permissionTree,
      "props": _vm.defaultProps
    },
    model: {
      value: (_vm.permission),
      callback: function($$v) {
        _vm.permission = $$v
      },
      expression: "permission"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _axiosMockAdapter = __webpack_require__(5);

var _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.axiosMock = window.axiosMock || new _axiosMockAdapter2.default(_axios2.default, { delayResponse: 10 });

var users = [{
    "username": "huawei",
    "realname": "huawei",
    "branchinnercode": "00010036",
    "lastmodifypasstime": null,
    "status": true,
    "email": "huawei@huawei.com",
    "company": "上海公司",
    "roles": []
}, {
    "username": "audit",
    "realname": "审核",
    "branchinnercode": "0001",
    "lastmodifypasstime": "2016-10-28 19:13:31",
    "status": true,
    "email": "audit@huawei.com",
    "company": "华为",
    "roles": [{
        "rolecode": "audit",
        "name": "审核组"
    }]
}, {
    "username": "edit",
    "realname": "编辑",
    "branchinnercode": "0001",
    "lastmodifypasstime": "2016-10-28 19:13:17",
    "status": false,
    "email": "edit@huawei.com",
    "company": "huawei",
    "roles": [{
        "rolecode": "sanbu",
        "name": "三部"
    }, {
        "rolecode": "edit",
        "name": "编辑组"
    }]
}, {
    "username": "admin",
    "realname": "系统管理员",
    "branchinnercode": "0001",
    "lastmodifypasstime": null,
    "status": true,
    "email": "admin@huawei.com",
    "company": "华为",
    "roles": [{
        "rolecode": "admin",
        "name": "管理员组"
    }]
}];

axiosMock.onGet('/users').reply(200, { total: users.length, data: users, status: 1, message: '' });
axiosMock.onPost('/users').reply(204, { status: 1, message: '添加成功！' });
axiosMock.onPut(/\/users\/[^\/]+$/).reply(200, { status: 1, message: '修改成功！' });
axiosMock.onDelete(/\/users\/[^\/]+$/).reply(200, { status: 1, message: '删除成功！' });
axiosMock.onPut(/\/users\/[^\/]+\/state/).reply(200, { status: 1, message: '操作成功！' });
axiosMock.onDelete(/\/users\/[^\/]+\/state/).reply(200, { status: 1, message: '操作成功！' });
axiosMock.onPut(/\/users\/[^\/]+\/password/).reply(200, { status: 1, message: '操作成功！' });

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "icon": "plus"
    },
    on: {
      "click": _vm.addClick
    }
  }, [_vm._v("添加")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "icon": "edit",
      "disabled": _vm.selectedRows.length !== 1
    },
    on: {
      "click": _vm.editClick
    }
  }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "icon": "circle-cross",
      "disabled": !(_vm.selectedRows.length === 1 && _vm.selectedRows[0].status)
    },
    on: {
      "click": _vm.disableOrEnableClickHandler
    }
  }, [_vm._v("停用")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "icon": "circle-check",
      "disabled": !(_vm.selectedRows.length === 1 && !_vm.selectedRows[0].status)
    },
    on: {
      "click": _vm.disableOrEnableClickHandler
    }
  }, [_vm._v("启用")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "icon": "delete",
      "disabled": _vm.selectedRows.length === 0
    },
    on: {
      "click": _vm.deleteClickHandler
    }
  }, [_vm._v("删除")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "icon": "setting",
      "disabled": _vm.selectedRows.length !== 1
    },
    on: {
      "click": _vm.modifyPasswordClick
    }
  }, [_vm._v("修改密码")])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.dataLoading),
      expression: "dataLoading"
    }],
    staticClass: "main-content-wrap"
  }, [_c('div', {
    staticClass: "search-bar fr"
  }, [_vm._v("\n        用户名/真实姓名:\n        "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入用户名/真实姓名"
    },
    model: {
      value: (_vm.search.username),
      callback: function($$v) {
        _vm.$set(_vm.search, "username", $$v)
      },
      expression: "search.username"
    }
  }), _vm._v("\n        公司：\n        "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入公司名称"
    },
    model: {
      value: (_vm.search.company),
      callback: function($$v) {
        _vm.$set(_vm.search, "company", $$v)
      },
      expression: "search.company"
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
  }, [_vm._v("搜索")])], 1), _vm._v(" "), _c('el-table', {
    attrs: {
      "data": _vm.users,
      "border": "",
      "tooltip-effect": "dark",
      "highlight-current-row": ""
    },
    on: {
      "selection-change": _vm.onSelectionChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "60",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "username",
      "label": "用户名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "realname",
      "label": "真实姓名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "status",
      "label": "用户状态"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "company",
      "label": "单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "所属角色"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return _vm._l((scope.row.roles), function(role) {
          return _c('span', {
            key: role.rolecode
          }, [_vm._v(_vm._s(role.name) + " ")])
        })
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "page-wrap fr"
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
  })], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "修改密码",
      "visible": _vm.modifyPasswordModal
    },
    on: {
      "update:visible": function($event) {
        _vm.modifyPasswordModal = $event
      }
    }
  }, [_c('el-form', {
    ref: "modifyPasswordForm",
    attrs: {
      "model": _vm.tmpUser,
      "rules": _vm.userRules,
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "用户名",
      "prop": "username"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text",
      "readonly": true,
      "auto-complete": "off"
    },
    model: {
      value: (_vm.tmpUser.username),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "username", $$v)
      },
      expression: "tmpUser.username"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "密码",
      "prop": "password"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.tmpUser.password),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "password", $$v)
      },
      expression: "tmpUser.password"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "确认密码",
      "prop": "repeatPassword"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.tmpUser.repeatPassword),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "repeatPassword", $$v)
      },
      expression: "tmpUser.repeatPassword"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.modifyPasswordModal = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.handlerLoading
    },
    on: {
      "click": _vm.modifyPasswordHandler
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "添加用户",
      "visible": _vm.addUserModal
    },
    on: {
      "update:visible": function($event) {
        _vm.addUserModal = $event
      }
    }
  }, [_c('el-form', {
    ref: "addUserForm",
    attrs: {
      "model": _vm.tmpUser,
      "rules": _vm.userRules,
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "用户名",
      "prop": "username"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.tmpUser.username),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "username", $$v)
      },
      expression: "tmpUser.username"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "真实姓名",
      "prop": "realname"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.tmpUser.realname),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "realname", $$v)
      },
      expression: "tmpUser.realname"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "密码",
      "prop": "password"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.tmpUser.password),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "password", $$v)
      },
      expression: "tmpUser.password"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "确认密码",
      "prop": "repeatPassword"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.tmpUser.repeatPassword),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "repeatPassword", $$v)
      },
      expression: "tmpUser.repeatPassword"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "公司",
      "prop": "company"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "company",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.tmpUser.company),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "company", $$v)
      },
      expression: "tmpUser.company"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "email",
      "label": "邮箱"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.tmpUser.email),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "email", $$v)
      },
      expression: "tmpUser.email"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "联系电话"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "联系电话"
    },
    model: {
      value: (_vm.tmpUser.tel),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "tel", $$v)
      },
      expression: "tmpUser.tel"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "手机号码"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "手机号码"
    },
    model: {
      value: (_vm.tmpUser.phone),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "phone", $$v)
      },
      expression: "tmpUser.phone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "所属角色",
      "prop": "roleIds"
    }
  }, [_c('el-select', {
    attrs: {
      "multiple": "",
      "placeholder": "请选择所属角色"
    },
    model: {
      value: (_vm.tmpUser.roleIds),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "roleIds", $$v)
      },
      expression: "tmpUser.roleIds"
    }
  }, _vm._l((_vm.roles), function(role) {
    return _c('el-option', {
      key: role.rolecode,
      attrs: {
        "label": role.name,
        "value": role.rolecode
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.addUserModal = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.handlerLoading
    },
    on: {
      "click": _vm.addUserHandler
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "编辑用户",
      "visible": _vm.editUserModal
    },
    on: {
      "update:visible": function($event) {
        _vm.editUserModal = $event
      }
    }
  }, [_c('el-tabs', {
    staticClass: "tabs-wrap",
    model: {
      value: (_vm.editUserActiveNameTab),
      callback: function($$v) {
        _vm.editUserActiveNameTab = $$v
      },
      expression: "editUserActiveNameTab"
    }
  }, [_c('el-tab-pane', {
    key: "base",
    attrs: {
      "label": "基本信息",
      "name": "base"
    }
  }, [_c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.modalLoading),
      expression: "modalLoading"
    }],
    staticClass: "modal-wrap"
  }, [_c('el-form', {
    ref: "editUserForm",
    staticStyle: {
      "margin-top": "20px"
    },
    attrs: {
      "model": _vm.tmpUser,
      "rules": _vm.userRules,
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "用户名",
      "prop": "username"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.tmpUser.username),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "username", $$v)
      },
      expression: "tmpUser.username"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "真实姓名",
      "prop": "realname"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.tmpUser.realname),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "realname", $$v)
      },
      expression: "tmpUser.realname"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "公司",
      "prop": "company"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "company",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.tmpUser.company),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "company", $$v)
      },
      expression: "tmpUser.company"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "email",
      "label": "邮箱"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.tmpUser.email),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "email", $$v)
      },
      expression: "tmpUser.email"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "联系电话"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "联系电话"
    },
    model: {
      value: (_vm.tmpUser.tel),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "tel", $$v)
      },
      expression: "tmpUser.tel"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "手机号码"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "手机号码"
    },
    model: {
      value: (_vm.tmpUser.phone),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "phone", $$v)
      },
      expression: "tmpUser.phone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "所属角色",
      "prop": "roleIds"
    }
  }, [_c('el-select', {
    attrs: {
      "multiple": "",
      "placeholder": "请选择所属角色"
    },
    model: {
      value: (_vm.tmpUser.roleIds),
      callback: function($$v) {
        _vm.$set(_vm.tmpUser, "roleIds", $$v)
      },
      expression: "tmpUser.roleIds"
    }
  }, _vm._l((_vm.roles), function(role, index) {
    return _c('el-option', {
      key: index,
      attrs: {
        "label": role.name,
        "value": role.rolecode
      }
    })
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "pane-btns"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.editUserModal = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.handlerLoading
    },
    on: {
      "click": function($event) {
        _vm.editUserHandler()
      }
    }
  }, [_vm._v("保存基本信息")])], 1)], 1)], 1)]), _vm._v(" "), _vm._l((_vm.userPermissionTypes), function(type) {
    return _c('el-tab-pane', {
      key: type.code,
      attrs: {
        "label": type.name,
        "name": type.code
      }
    }, [_c('div', {
      staticStyle: {
        "max-height": "350px",
        "overflow-y": "auto",
        "overflow-x": "hidden"
      }
    }, [_c(type.code, {
      tag: "component",
      attrs: {
        "id": _vm.tmpUser.username,
        "type": "U"
      }
    })], 1)])
  })], 2)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(65)
  __webpack_require__(67)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(78),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-cfac9f36",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("b2c19186", content, true);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".z-body-list[data-v-cfac9f36]{flex-basis:280px;max-width:280px}.pane-wrap[data-v-cfac9f36]{height:calc(100vh - 100px);overflow-y:auto;overflow-x:hidden}", ""]);

// exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("d5bb8484", content, true);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".z-body-detail[data-v-cfac9f36]{background:#f9fbfc none;box-shadow:inset 1px 0 0 rgba(0,0,0,.04);flex:1;position:relative}.z-main-height[data-v-cfac9f36]{height:calc(100vh - 50px);position:relative}.main-content-wrap[data-v-cfac9f36]{padding:10px}", ""]);

// exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _roleAPI = __webpack_require__(10);

var _roleAPI2 = _interopRequireDefault(_roleAPI);

var _TreeSelect = __webpack_require__(11);

var _TreeSelect2 = _interopRequireDefault(_TreeSelect);

var _TreeGrid = __webpack_require__(70);

var _TreeGrid2 = _interopRequireDefault(_TreeGrid);

var _MenuPermission = __webpack_require__(12);

var _MenuPermission2 = _interopRequireDefault(_MenuPermission);

var _util = __webpack_require__(7);

var _util2 = _interopRequireDefault(_util);

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

__webpack_require__(76);
__webpack_require__(77);
exports.default = {
  data: function data() {
    return {
      rolePermissionTypes: [{ code: 'menuPermission', name: '菜单权限' }],
      roleLoading: false,
      roleTree: [],
      currentRole: {},
      activeName: 'roleInfo',
      roleInfoLoading: false,
      userDataTableValues: [],
      menuPrivLoading: false,
      privType: 'R',
      roleProps: {
        children: 'children',
        label: 'name',
        key: 'rolecode'
      },

      roleDialog: false,
      editRoleMode: 1, // 1： 添加， 2：编辑
      tmpRole: {},
      roleRules: {
        rolename: [{ required: true, message: '请输入角色名', trigger: 'blur' }],
        rolecode: [{ required: true, message: '请输入角色代码', trigger: 'blur' }]
      },
      confirmLoading: false,
      selectUsers: [],
      selectMode: 1, // 1: 添加用户到角色，2: 从角色中删除用户
      selectDialog: false,
      selectLoading: false,
      selectedUsers: [],
      sidebarCollapsed: false //侧边栏是否为展开状态
    };
  },
  created: function created() {
    var _this = this;

    _roleAPI2.default.getRoles().then(function (data) {
      _this.roleTree = data.data;
      _this.roleInfoLoading = false;
    });
  },

  methods: {
    // 当在左下机构树上点击
    onRoleTreeCheckChange: function onRoleTreeCheckChange(role) {
      this.currentRole = role;
      this.userDataTableValues = [];
      this.onRoleTabsClick();
    },

    // 当在右上页签上点击
    onRoleTabsClick: function onRoleTabsClick() {
      var _this2 = this;

      if (!this.currentRole || !this.currentRole.rolecode) {
        return;
      }

      if (this.activeName === 'roleInfo' && !this.userDataTableValues.length) {
        this.roleInfoLoading = true;
        _roleAPI2.default.getUsersByRole(this.currentRole.rolecode).then(function (data) {
          _this2.userDataTableValues = data.data;
          _this2.roleInfoLoading = false;
        });
      }
    },
    addRoleClickHandler: function addRoleClickHandler() {
      this.editRoleMode = 1;
      this.tmpRole = {
        rolename: '',
        rolecode: '',
        memo: ''
      };
      this.roleDialog = true;
    },
    editRoleClickHandler: function editRoleClickHandler() {
      this.editRoleMode = 2;
      console.info(this.currentRole);
      this.tmpRole = {
        rolecode: this.currentRole.rolecode,
        memo: this.currentRole.memo,
        rolename: this.currentRole.name
      };

      this.roleDialog = true;
    },
    deleteRoleClickHandler: function deleteRoleClickHandler() {
      var _this3 = this;

      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        return _roleAPI2.default.deleteRole(_this3.currentRole.rolecode);
      }).then(function (data) {
        if (data.status !== 1) {
          return data;
        }

        var index = _this3.roleTree.findIndex(function (val) {
          return val.rolecode === _this3.currentRole.rolecode;
        });

        _this3.roleTree = [].concat(_toConsumableArray(_this3.roleTree.slice(0, index)), _toConsumableArray(_this3.roleTree.slice(index + 1)));

        _this3.currentRole = null;
        _this3.userDataTableValues = [];

        return data;
      }).then(function (data) {
        _util2.default.showNotification(data);
      }).catch(function (e) {
        _util2.default.showErrorNotification(e);
      });
    },
    okHandler: function okHandler() {
      var _this4 = this;

      var addForm = function addForm() {
        return _roleAPI2.default.addRole(_this4.tmpRole).then(function (data) {
          if (data.status !== 1) {
            return data;
          }
          _this4.roleTree.push({
            name: _this4.tmpRole.rolename,
            rolecode: _this4.tmpRole.rolecode,
            memo: _this4.tmpRole.memo
          });

          return data;
        });
      };

      var editForm = function editForm() {
        return _roleAPI2.default.editRole(_this4.tmpRole.rolecode, _this4.tmpRole).then(function (data) {
          if (data.status !== 1) {
            return data;
          }

          var index = _this4.roleTree.findIndex(function (val) {
            return val.rolecode === _this4.tmpRole.rolecode;
          });
          _this4.tmpRole.name = _this4.tmpRole.rolename;
          _this4.roleTree = [].concat(_toConsumableArray(_this4.roleTree.slice(0, index)), [_this4.tmpRole], _toConsumableArray(_this4.roleTree.slice(index + 1)));
          _this4.currentRole = _this4.tmpRole;

          return data;
        });
      };

      _util2.default.validateForm(this.$refs['roleForm']).then(function () {
        _this4.confirmLoading = true;
        if (_this4.editRoleMode === 1) {
          return addForm();
        }

        if (_this4.editRoleMode === 2) {
          return editForm();
        }
      }).then(function (data) {
        _this4.confirmLoading = false;
        _this4.roleDialog = false;

        _util2.default.showNotification(data);
      }).catch(function (e) {
        _util2.default.showErrorNotification(e);
        _this4.confirmLoading = false;
      });
    },
    addUsersToRoleClickHandler: function addUsersToRoleClickHandler() {
      var _this5 = this;

      this.selectUsers = [];
      this.selectedUsers = [];
      this.selectMode = 1;
      this.selectLoading = true;
      this.selectDialog = true;

      _roleAPI2.default.getUsersNotRole(this.currentRole.rolecode).then(function (data) {
        _this5.selectUsers = data.data;
        _this5.selectLoading = false;
      });
    },
    deleteUsersToRoleClickHandler: function deleteUsersToRoleClickHandler() {
      this.selectUsers = Object.assign([], this.userDataTableValues);
      this.selectedUsers = [];
      this.selectMode = 2;
      this.selectLoading = false;
      this.selectDialog = true;
    },
    usersSelectionChangeHandler: function usersSelectionChangeHandler(selection) {
      this.selectedUsers = selection;
    },
    selectConfirmClickHandler: function selectConfirmClickHandler() {
      var _this6 = this;

      this.confirmLoading = true;

      var deleteUsers = function deleteUsers() {
        var ids = _this6.selectedUsers.map(function (val) {
          return val.username;
        });

        return _roleAPI2.default.removeUsers(ids, _this6.currentRole.rolecode).then(function (res) {
          if (res.status !== 1) {
            return res;
          }
          _this6.userDataTableValues = _this6.userDataTableValues.filter(function (val) {
            return !ids.includes(val.username);
          });
          return res;
        });
      };

      var addUsers = function addUsers() {
        var ids = _this6.selectedUsers.map(function (val) {
          return val.username;
        });

        return _roleAPI2.default.addUsers(ids, _this6.currentRole.rolecode).then(function (res) {
          if (res.status !== 1) {
            return res;
          }

          _this6.userDataTableValues = [].concat(_toConsumableArray(_this6.userDataTableValues), _toConsumableArray(_this6.selectedUsers));

          return res;
        });
      };

      var handler = this.selectMode === 1 ? addUsers : deleteUsers;

      handler().then(function (res) {
        _this6.confirmLoading = false;
        _this6.selectDialog = false;

        _util2.default.showNotification(res);
      }).catch(function (e) {
        _this6.confirmLoading = false;
        _util2.default.showErrorNotification(e);
      });
    },
    toggleSidebar: function toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    }
  },
  components: {
    'menuPermission': _MenuPermission2.default,
    'tree-select': _TreeSelect2.default,
    'tree-grid': _TreeGrid2.default
  }

};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(71)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(75),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-ccc30c44",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("2a58a656", content, true);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".ms-tree-space[data-v-ccc30c44]{position:relative;top:1px;display:inline-block;font-family:Glyphicons Halflings;font-style:normal;font-weight:400;line-height:1;width:14px;height:14px}.ms-tree-space[data-v-ccc30c44]:before{content:\"\"}table td[data-v-ccc30c44]{line-height:26px}.tree-arrow[data-v-ccc30c44]{cursor:pointer}", ""]);

// exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dataTranslate = __webpack_require__(74);

var _dataTranslate2 = _interopRequireDefault(_dataTranslate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'tree-grid',
  props: {
    // 该属性是确认父组件传过来的数据是否已经是树形结构了，如果是，则不需要进行树形格式化
    treeStructure: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    // 这是相应的字段展示
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    //表格高度
    height: {
      type: Number,
      default: function _default() {
        return 400;
      }
    },
    // 这是数据源
    dataSource: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 这个作用是根据自己需求来的，比如在操作中涉及相关按钮编辑，删除等，需要向服务端发送请求，则可以把url传过来
    requestUrl: {
      type: String,
      default: function _default() {
        return '';
      }
    },
    // 这个是是否展示操作列
    treeType: {
      type: String,
      default: function _default() {
        return 'normal';
      }
    },
    // 是否默认展开所有树
    defaultExpandAll: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    }
  },
  data: function data() {
    return {};
  },

  computed: {
    // 格式化数据源
    data: function data() {
      var me = this;
      if (me.treeStructure) {
        var data = _dataTranslate2.default.MSDataTransfer.treeToArray(me.dataSource, null, null, me.defaultExpandAll);
        //          console.log(data)
        return data;
      }
      return me.dataSource;
    }
  },
  methods: {
    // 单元格内容
    cell: function cell(row, column) {
      if (column.render) {
        return column.render(row);
      }

      if (column.dataIndex) {
        return row[column.dataIndex];
      }

      return '';
    },

    // 显示行
    showTr: function showTr(row, index) {
      var show = row._parent ? row._parent._expanded && row._parent._show : true;
      row._show = show;
      return show ? '' : 'display:none;';
    },
    // 展开下级
    toggle: function toggle(trIndex) {
      var me = this;
      var record = me.data[trIndex];
      record._expanded = !record._expanded;
    },
    // 显示层级关系的空格和图标
    spaceIconShow: function spaceIconShow(index) {
      var me = this;
      if (me.treeStructure && index === 0) {
        return true;
      }
      return false;
    },

    // 点击展开和关闭的时候，图标的切换
    toggleIconShow: function toggleIconShow(index, record) {
      var me = this;
      if (me.treeStructure && index === 0 && record.children && record.children.length > 0) {
        return true;
      }
      return false;
    },
    onSelectionChange: function onSelectionChange(selection) {
      this.$emit('selection-change', selection);
    }
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

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DataTransfer(data) {
  if (!(this instanceof DataTransfer)) {
    return new DataTransfer(data, null, null);
  }
}

DataTransfer.treeToArray = function (data, parent, level, expandedAll) {
  var tmp = [];
  Array.from(data).forEach(function (record) {
    if (record._expanded === undefined) {
      _vue2.default.set(record, '_expanded', expandedAll);
    }
    if (parent) {
      _vue2.default.set(record, '_parent', parent);
    }
    var _level = 0;
    if (level !== undefined && level !== null) {
      _level = level + 1;
    }
    _vue2.default.set(record, '_level', _level);
    tmp.push(record);
    if (record.children && record.children.length > 0) {
      var children = DataTransfer.treeToArray(record.children, record, _level, expandedAll);
      tmp = tmp.concat(children);
    }
  });
  return tmp;
};

exports.default = {
  MSDataTransfer: DataTransfer
};

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.data,
      "height": _vm.height,
      "row-style": _vm.showTr,
      "highlight-current-row": ""
    },
    on: {
      "selection-change": _vm.onSelectionChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "50",
      "align": "center"
    }
  }), _vm._v(" "), _vm._l((_vm.columns), function(column, index) {
    return _c('el-table-column', {
      key: column.dataIndex,
      attrs: {
        "label": column.text,
        "width": column.width,
        "min-width": column.minWidth
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function(scope) {
          return [_vm._l((scope.row._level), function(space, levelIndex) {
            return (_vm.spaceIconShow(index)) ? _c('span', {
              staticClass: "ms-tree-space"
            }) : _vm._e()
          }), _vm._v(" "), (_vm.toggleIconShow(index, scope.row)) ? _c('span', {
            staticClass: "tree-arrow",
            on: {
              "click": function($event) {
                _vm.toggle(scope.$index)
              }
            }
          }, [(!scope.row._expanded) ? _c('i', {
            staticClass: "el-icon-arrow-right"
          }) : _vm._e(), _vm._v(" "), (scope.row._expanded) ? _c('i', {
            staticClass: "el-icon-arrow-down"
          }) : _vm._e()]) : (index === 0) ? _c('span', {
            staticClass: "ms-tree-space"
          }) : _vm._e(), _vm._v("\n      " + _vm._s(_vm.cell(scope.row, column)) + "\n    ")]
        }
      }])
    })
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _axiosMockAdapter = __webpack_require__(5);

var _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.axiosMock = window.axiosMock || new _axiosMockAdapter2.default(_axios2.default, { delayResponse: 10 });

var roles = [{
    "rolecode": "admin",
    "name": "管理员组"
}, {
    "rolecode": "everyone",
    "name": "所有用户组"
}, {
    "rolecode": "edit",
    "name": "编辑组"
}, {
    "rolecode": "audit",
    "name": "审核组"
}, {
    "rolecode": "yibu",
    "name": "一部"
}, {
    "rolecode": "erbu",
    "name": "二部"
}, {
    "rolecode": "sanbu",
    "name": "三部"
}];

var usersInAdmin = [{
    "username": "admin",
    "realname": "系统管理员",
    "roles": [{
        "name": "管理员组",
        "rolecode": "admin"
    }, {
        "name": "编辑组组",
        "rolecode": "edit"
    }]
}, {
    "username": "zhangshan",
    "realname": "张珊",
    "roles": [{
        "name": "管理员组",
        "rolecode": "admin"
    }, {
        "name": "编辑组组",
        "rolecode": "edit"
    }]
}, {
    "username": "lisi",
    "realname": "黎思",
    "roles": [{
        "name": "管理员组",
        "rolecode": "admin"
    }, {
        "name": "编辑组组",
        "rolecode": "edit"
    }]
}];

var usersInEdit = [{
    "username": "admin",
    "realname": "系统管理员",
    "roles": [{
        "name": "管理员组",
        "rolecode": "admin"
    }]
}, {
    "username": "lisi",
    "realname": "黎思",
    "roles": [{
        "name": "管理员组",
        "rolecode": "admin"
    }, {
        "name": "编辑组组",
        "rolecode": "edit"
    }]
}];

var map = { "admin": usersInAdmin, "edit": usersInEdit };

axiosMock.onGet('/roles').reply(200, { total: roles.length, data: roles, status: 1, message: '' });
axiosMock.onGet(/\/roles\/.+\/users/).reply(200, { total: map["admin"].length, data: map["admin"], status: 1, message: '' });
axiosMock.onPost('/roles').reply(204, { status: 1, message: '添加成功！' });
axiosMock.onPut(/\/roles\/[^\/]+$/).reply(200, { status: 1, message: '修改成功！' });
axiosMock.onDelete(/\/roles\/[^\/]+$/).reply(200, { status: 1, message: '删除成功！' });
axiosMock.onPut(/\/roles\/[^\/]+\/users/).reply(200, { status: 1, message: '操作成功！' });
axiosMock.onDelete(/\/roles\/[^\/]+\/users/).reply(200, { status: 1, message: '操作成功！' });

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _axiosMockAdapter = __webpack_require__(5);

var _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.axiosMock = window.axiosMock || new _axiosMockAdapter2.default(_axios2.default, { delayResponse: 10 });

var privs = {
    "value": ["Platform.Role", "Platform.Role.Add", "Platform.Role.Edit", "Platform.Role.Delete", "Platform.Role.SetPriv", "Platform.Role.AddUser", "Platform.Role.RemoveUser", "Platform.User", "Platform.User.Add", "Platform.User.Edit", "Platform.User.Delete", "Platform.User.SetPriv", "Platform.User.ChangePassword", "Platform.User.Disable", "Platform.User.Enable", "Platform.User.LastLoginUpdatePwd"],
    "tree": [{
        "code": "Platform.System",
        "name": "系统管理",
        "items": [],
        "children": [{
            "code": "Platform.Role",
            "name": "角色管理",
            "items": [{
                "code": "Platform.Role.Add",
                "name": "添加"
            }, {
                "code": "Platform.Role.Edit",
                "name": "编辑"
            }, {
                "code": "Platform.Role.Delete",
                "name": "删除"
            }, {
                "code": "Platform.Role.SetPriv",
                "name": "设置权限"
            }, {
                "code": "Platform.Role.AddUser",
                "name": "添加用户到角色"
            }, {
                "code": "Platform.Role.RemoveUser",
                "name": "从角色中删除用户"
            }]
        }, {
            "code": "Platform.User",
            "name": "用户管理",
            "items": [{
                "code": "Platform.User.Add",
                "name": "添加"
            }, {
                "code": "Platform.User.Edit",
                "name": "编辑"
            }, {
                "code": "Platform.User.Delete",
                "name": "删除"
            }, {
                "code": "Platform.User.SetPriv",
                "name": "设置权限"
            }, {
                "code": "Platform.User.ChangePassword",
                "name": "修改密码"
            }, {
                "code": "Platform.User.Disable",
                "name": "停用"
            }, {
                "code": "Platform.User.Enable",
                "name": "启用"
            }, {
                "code": "Platform.User.LastLoginUpdatePwd",
                "name": "通知修改密码"
            }]
        }]
    }]
};

axiosMock.onGet(/\/permissions\/id\/[^\/]+\/type\/[^\/]+\/menus/).reply(200, { data: privs, status: 1, message: '' });
axiosMock.onPut(/\/permissions\/id\/[^\/]+\/type\/[^\/]+\/menus/).reply(200, { status: 1, message: '修改成功！' });

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "display": "flex"
    }
  }, [_c('div', {
    staticClass: "z-body-list z-main-height"
  }, [_c('el-toolbar', [_c('el-button', {
    on: {
      "click": _vm.addRoleClickHandler
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v(" 新建\n      ")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "disabled": !_vm.currentRole
    },
    on: {
      "click": _vm.editRoleClickHandler
    }
  }, [_c('i', {
    staticClass: "fa fa-pencil"
  }), _vm._v(" 编辑\n      ")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "disabled": !_vm.currentRole
    },
    on: {
      "click": _vm.deleteRoleClickHandler
    }
  }, [_c('i', {
    staticClass: "fa fa-close"
  }), _vm._v(" 删除\n      ")])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.roleLoading),
      expression: "roleLoading"
    }]
  }, [_c('el-tree', {
    attrs: {
      "highlight-current": true,
      "props": _vm.roleProps,
      "data": _vm.roleTree
    },
    on: {
      "current-change": _vm.onRoleTreeCheckChange
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "z-body-detail z-main-height"
  }, [_c('div', [_c('el-tabs', {
    staticClass: "tabs-wrap",
    on: {
      "tab-click": _vm.onRoleTabsClick
    },
    model: {
      value: (_vm.activeName),
      callback: function($$v) {
        _vm.activeName = $$v
      },
      expression: "activeName"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "基本信息",
      "name": "roleInfo"
    }
  }, [_c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.roleInfoLoading),
      expression: "roleInfoLoading"
    }]
  }, [_c('div', {
    staticStyle: {
      "padding": "15px"
    }
  }, [_c('table', {
    staticClass: "z-datagrid",
    attrs: {
      "width": "100%",
      "cellpadding": "4",
      "cellspacing": "0"
    }
  }, [_c('tbody', [_c('tr', {
    staticStyle: {
      "height": "24px",
      "line-height": "24px"
    }
  }, [_c('td', {
    staticClass: "noellipsis"
  }, [_vm._v(" ")]), _vm._v(" "), _c('td', [_vm._v("角色名：")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.currentRole && _vm.currentRole.name))]), _vm._v(" "), _c('td', [_vm._v("角色代码：")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.currentRole && _vm.currentRole.rolecode))])]), _vm._v(" "), _c('tr', {
    staticStyle: {
      "height": "24px",
      "line-height": "24px"
    }
  }, [_c('td', {
    staticClass: "noellipsis"
  }, [_vm._v(" ")]), _vm._v(" "), _c('td', [_vm._v("备注：")]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.currentRole && _vm.currentRole.memo))])])])])]), _vm._v(" "), _c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "icon": "plus",
      "size": "small",
      "disabled": !_vm.currentRole
    },
    on: {
      "click": _vm.addUsersToRoleClickHandler
    }
  }, [_vm._v("添加用户到角色")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "icon": "delete",
      "size": "small",
      "disabled": !_vm.currentRole
    },
    on: {
      "click": _vm.deleteUsersToRoleClickHandler
    }
  }, [_vm._v("从角色中删除用户\n              ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap"
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.userDataTableValues
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "username",
      "label": "用户名",
      "min-width": "150"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "realname",
      "label": "真实姓名",
      "min-width": "150"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "所属角色",
      "min-width": "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return _vm._l((scope.row.roles), function(role, index) {
          return _c('span', {
            key: role.rolecode
          }, [_vm._v("\n                      " + _vm._s(role.name) + _vm._s(index + 1 < scope.row.roles.length ? ',' : '') + "\n                    ")])
        })
      }
    }])
  })], 1)], 1)], 1)]), _vm._v(" "), _vm._l((_vm.rolePermissionTypes), function(type) {
    return _c('el-tab-pane', {
      key: type.code,
      attrs: {
        "label": type.name,
        "name": type.code
      }
    }, [_c('div', {
      staticClass: "pane-wrap main-content-wrap"
    }, [_c(type.code, {
      tag: "component",
      attrs: {
        "id": _vm.currentRole.rolecode,
        "type": _vm.privType
      }
    })], 1)])
  })], 2)], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.editRoleMode === 1 ? '添加新角色' : '编辑角色',
      "visible": _vm.roleDialog
    },
    on: {
      "update:visible": function($event) {
        _vm.roleDialog = $event
      }
    }
  }, [_c('el-form', {
    ref: "roleForm",
    attrs: {
      "model": _vm.tmpRole,
      "rules": _vm.roleRules,
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "角色名",
      "prop": "rolename"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.tmpRole.rolename),
      callback: function($$v) {
        _vm.$set(_vm.tmpRole, "rolename", $$v)
      },
      expression: "tmpRole.rolename"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "角色代码",
      "prop": "rolecode"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": _vm.editRoleMode === 2
    },
    model: {
      value: (_vm.tmpRole.rolecode),
      callback: function($$v) {
        _vm.$set(_vm.tmpRole, "rolecode", $$v)
      },
      expression: "tmpRole.rolecode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "备注"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.tmpRole.memo),
      callback: function($$v) {
        _vm.$set(_vm.tmpRole, "memo", $$v)
      },
      expression: "tmpRole.memo"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.roleDialog = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.confirmLoading
    },
    on: {
      "click": _vm.okHandler
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.selectMode === 1 ? '添加用户到角色' : '从角色中删除用户',
      "visible": _vm.selectDialog
    },
    on: {
      "update:visible": function($event) {
        _vm.selectDialog = $event
      }
    }
  }, [_c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.selectLoading),
      expression: "selectLoading"
    }],
    staticClass: "select-user-wrap"
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.selectUsers,
      "highlight-current-row": ""
    },
    on: {
      "selection-change": _vm.usersSelectionChangeHandler
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "40"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "username",
      "label": "用户名",
      "min-width": "150"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "realname",
      "label": "真实姓名",
      "min-width": "150"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "所属角色",
      "min-width": "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return _vm._l((scope.row.roles), function(role) {
          return _c('span', {
            key: role.rolecode
          }, [_vm._v("\n              " + _vm._s(role.name) + "，\n            ")])
        })
      }
    }])
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.selectDialog = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.confirmLoading,
      "disabled": !_vm.selectedUsers.length
    },
    on: {
      "click": _vm.selectConfirmClickHandler
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(81),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

exports.default = {};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("notFound404.vue")])
},staticRenderFns: []}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(83)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(85),
  /* template */
  __webpack_require__(86),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-44e7873a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("a91cea76", content, true);

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".app-wrap[data-v-44e7873a]{width:100%;height:100%;position:relative}.navbar[data-v-44e7873a]{height:50px;line-height:50px;box-shadow:2px 0 2px #000;padding:0;background-color:#7386e6;color:#dde3ff;border-radius:0}.navbar .el-menu--horizontal[data-v-44e7873a]{background-color:transparent}.navbar .el-menu--horizontal .el-menu-item[data-v-44e7873a]{color:#fff;height:50px;line-height:50px}.navbar .el-menu--horizontal .el-menu-item.is-active[data-v-44e7873a],.navbar .el-menu--horizontal .el-menu-item[data-v-44e7873a]:hover{background-color:#5c71ce;border-bottom:5px solid #3b51a8}.logo[data-v-44e7873a]{padding-left:5px;width:200px;max-width:200px;display:inline-block;font-size:16px;color:#ee9;background-color:#667cdb}.navbar-collapse[data-v-44e7873a]{position:relative}.other-buttons[data-v-44e7873a]{text-align:right;float:right;-webkit-app-region:no-drag;position:relative;z-index:103}.other-buttons button[data-v-44e7873a]{padding:3px;color:#fff}.collapse.in[data-v-44e7873a]{background-color:#31a66c;padding:0}@media (max-width:576px){.navbar-collapse[data-v-44e7873a]{z-index:102;transition:all .3s}.logo[data-v-44e7873a]{background-color:transparent}.other-buttons[data-v-44e7873a]{display:none}.navbar-toggle[data-v-44e7873a]{width:55px;line-height:30px}.collapse.in .el-menu--horizontal .el-menu-item[data-v-44e7873a]{float:none;border-bottom-width:1px}}@media (min-width:576px){.navbar-toggle[data-v-44e7873a]{display:none}}.visible-on-mobile.el-menu .el-menu-item[data-v-44e7873a]{padding-left:40px}.el-menu-item .menu-title[data-v-44e7873a]{font-size:12pt}", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = __webpack_require__(9);

var _router2 = _interopRequireDefault(_router);

var _utils = __webpack_require__(8);

var _utils2 = _interopRequireDefault(_utils);

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

window.axiosMock = window.axiosMock || new AxiosMockAdapter(axios, { delayResponse: 1000 });

var menus = _utils2.default.assign([], _router2.default, 'component');

exports.default = {
  data: function data() {
    var routePath = this.$route.path;
    if (routePath && routePath.split('/').length > 2) {
      routePath = routePath.split('/').slice(0, 2).join('/');
    }
    return {
      realname: localStorage.realname || 'demo',
      routerName: this.$route.name || '/',
      menus: menus,
      activeMenu: routePath,
      navbarCollapsed: false // 导航是否展开
    };
  },

  watch: {
    '$route.name': function $routeName(val, oldVal) {
      this.routerName = this.$route.name || '/';
    }
  },
  methods: {
    onSelectMenun: function onSelectMenun(menu) {
      var hash = menu.children && '/' + menu.children[0].path || '';
      hash = menu.path + hash;
      window.location.hash = hash;
      if (this.navbarCollapsed) {
        this.navbarCollapsed = false;
      }
      localStorage.lastRoutePath = hash;
    },
    toggleNavbar: function toggleNavbar() {
      this.navbarCollapsed = !this.navbarCollapsed;
    },
    handleCommand: function handleCommand(cmd) {
      if (cmd == 'logout') {
        console.warn('todo: ');
      }
      if (cmd == 'passwd') {
        console.warn('todo: ');
      }
    }
  }
};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-wrap"
  }, [_c('div', {
    staticClass: "navbar navbar-color-bg select-disable"
  }, [_c('div', {
    staticClass: "navbar-header"
  }, [_c('el-button', {
    staticClass: "navbar-toggle",
    attrs: {
      "type": "text"
    },
    on: {
      "click": _vm.toggleNavbar
    }
  }, [_c('i', {
    staticClass: "fa fa-align-justify"
  })]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
    staticClass: "other-buttons"
  }, [_c('el-dropdown', {
    staticStyle: {
      "padding-right": "20px",
      "cursor": "pointer"
    },
    on: {
      "command": _vm.handleCommand
    }
  }, [_c('span', {
    staticClass: "el-dropdown-link",
    staticStyle: {
      "color": "white"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.realname) + "\n          "), _c('i', {
    staticClass: "el-icon-caret-bottom el-icon--right"
  })]), _vm._v(" "), _c('el-dropdown-menu', {
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, [_c('el-dropdown-item', {
    attrs: {
      "command": "passwd"
    }
  }, [_vm._v("修改密码")]), _vm._v(" "), _c('el-dropdown-item', {
    attrs: {
      "command": "logout"
    }
  }, [_vm._v("退出登录")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    class: 'navbar-collapse collapse' + (_vm.navbarCollapsed ? ' in' : '')
  }, [_c('el-menu', {
    attrs: {
      "mode": "horizontal",
      "theme": "primary",
      "default-active": _vm.activeMenu
    }
  }, [_vm._l((_vm.menus), function(menu) {
    return [(menu.meta && menu.meta.title) ? _c('el-menu-item', {
      key: menu.path,
      attrs: {
        "index": menu.path
      },
      on: {
        "click": function($event) {
          _vm.onSelectMenun(menu)
        }
      }
    }, [_c('i', {
      class: menu.meta.icon
    }), _vm._v(" "), _c('span', {
      staticClass: "menu-title"
    }, [_vm._v(_vm._s(menu.meta.title))])]) : _vm._e()]
  })], 2), _vm._v(" "), _c('el-menu', {
    staticClass: "visible-on-mobile",
    attrs: {
      "mode": "horizontal",
      "theme": "primary",
      "default-active": _vm.activeMenu
    }
  }, [_vm._l((_vm.systemMenus), function(menu) {
    return [(menu.meta && menu.meta.title) ? _c('el-menu-item', {
      key: menu.path,
      on: {
        "click": function($event) {
          _vm.onSelectMenun(menu)
        }
      }
    }, [_c('i', {
      class: menu.meta.icon
    }), _vm._v(" "), _c('span', {
      staticClass: "menu-title"
    }, [_vm._v(_vm._s(menu.meta.title))])]) : _vm._e()]
  })], 2)], 1)]), _vm._v(" "), _c('router-view', {
    key: _vm.routerName
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": "assets/images/logo_zh-cn.png",
      "height": "48"
    }
  })])
}]}

/***/ })
/******/ ]);