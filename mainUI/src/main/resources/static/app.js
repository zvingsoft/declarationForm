/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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

var listToStyles = __webpack_require__(26)

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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var declarationAPI = {
  getDeclaration: function getDeclaration(obj) {
    for (var i in obj) {
      obj[i] = encodeURI(encodeURI(obj[i]));
    }
    return axios.get('/api/declaration/list/' + JSON.stringify(obj)).then(function (res) {
      return res.data;
    });
  },
  getDeclarationById: function getDeclarationById(id) {
    return axios.get('/api/declaration/' + id).then(function (res) {
      return res.data;
    });
  },
  addDeclaration: function addDeclaration(declaration) {
    console.log(declaration);
    return axios.post('/api/declaration', JSON.parse(JSON.stringify(declaration))).then(function (res) {
      return res.data;
    });
  },
  updateDeclaration: function updateDeclaration(declaration) {
    return axios.put('/api/declaration', JSON.parse(JSON.stringify(declaration))).then(function (res) {
      return res.data;
    });
  },
  deleteDeclaration: function deleteDeclaration(ids) {
    var strIds = ids.join(',');
    return axios.delete('/api/declaration/' + strIds).then(function (res) {
      return res.data;
    });
  }
};

exports.default = declarationAPI;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(42)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(45),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-783a2bd6",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\form\\components\\packinglistTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] packinglistTable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-783a2bd6", Component.options)
  } else {
    hotAPI.reload("data-v-783a2bd6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyAPI = {
  getCompany: function getCompany(companyName, pageIndex, pageSize) {
    return axios.get('/api/company', {
      params: {
        companyName: companyName,
        pageIndex: pageIndex,
        pageSize: pageSize
      }
    }).then(function (res) {
      return res.data;
    });
  },
  getCompanyForSelect: function getCompanyForSelect() {
    return axios.get('/api/companyforselect').then(function (res) {
      return res.data;
    });
  },
  getCompanyDetail: function getCompanyDetail(id) {
    return axios.get('/api/company/' + id).then(function (res) {
      return res.data;
    });
  },
  addCompany: function addCompany(company) {
    return axios.post('/api/company', company).then(function (res) {
      return res.data;
    });
  },
  editCompany: function editCompany(company) {
    return axios.put('/api/company/' + company.companyid, company).then(function (res) {
      return res.data;
    });
  },
  deleteCompany: function deleteCompany(ids) {
    return axios.delete('/api/company/' + ids).then(function (res) {
      return res.data;
    });
  },
  setConttonQuota: function setConttonQuota(company) {
    return axios.patch('/api/company/' + company.companyid, company).then(function (res) {
      return res.data;
    });
  }
};

exports.default = companyAPI;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var companys = {
  data: [{
    companyid: '100',
    companyname: '湖南顺风纺织厂',
    bankcreditrating: 'A+',
    allocation: '5000',
    used: '3000',
    address: '湖南省长沙市岳麓区麓谷企业广场',
    phone: '18887988987',
    fax: '86 519-85125379',
    postcode: '410000',
    addtime: '2017-10-18 19:23:23',
    adduser: '张三'
  }, {
    companyid: '101',
    companyname: '河南顺风纺织厂',
    bankcreditrating: 'A+',
    allocation: '0',
    used: '0',
    address: '河南省长沙市岳麓区麓谷企业广场',
    phone: '13265748795',
    fax: '86 519-85125379',
    postcode: '488000',
    addtime: '2017-10-18 19:23:23',
    adduser: '张三'
  }, {
    companyid: '102',
    companyname: '海南顺风纺织厂',
    bankcreditrating: 'B',
    allocation: '10000',
    used: '0',
    address: '海南省长沙市岳麓区麓谷企业广场',
    phone: '18779543209',
    fax: '86 519-85125379',
    postcode: '434000',
    addtime: '2017-10-18 19:23:23',
    adduser: '张三'
  }],
  total: 3,
  status: 1,
  message: ''
};

var company = {
  data: {
    companyid: '100',
    companyname: '湖南顺风纺织厂',
    bankcreditrating: 'A+',
    allocation: '5000',
    used: '3000',
    address: '湖南省长沙市岳麓区麓谷企业广场',
    phone: '18887988987',
    fax: '86 519-85125379',
    postcode: '410000',
    addtime: '2017-10-18 19:23:23',
    adduser: '张三'
  },
  status: 1,
  message: '成功'
};

var companysforselect = {
  data: [{
    companyid: '100',
    companyname: '湖南顺风纺织厂',
    bankcreditrating: 'A+',
    allocation: '5000',
    used: '3000',
    address: '湖南省长沙市岳麓区麓谷企业广场',
    phone: '18887988987',
    fax: '86 519-85125379',
    postcode: '410000',
    companyaddtime: '2017-10-18 19:23:23',
    companyadduser: '张三'
  }, {
    companyid: '101',
    companyname: '河南顺风纺织厂',
    bankcreditrating: 'A+',
    allocation: '0',
    used: '0',
    address: '河南省长沙市岳麓区麓谷企业广场',
    phone: '13265748795',
    fax: '86 519-85125379',
    postcode: '488000',
    companyaddtime: '2017-10-18 19:23:23',
    companyadduser: '张三'
  }, {
    companyid: '102',
    companyname: '海南顺风纺织厂',
    bankcreditrating: 'B',
    allocation: '10000',
    used: '0',
    address: '海南省长沙市岳麓区麓谷企业广场',
    phone: '18779543209',
    fax: '86 519-85125379',
    postcode: '434000',
    companyaddtime: '2017-10-18 19:23:23',
    companyadduser: '张三'
  }],
  status: 1,
  message: ''
};

axiosMock.onGet('/api/company').reply(200, companys);
axiosMock.onGet(/api\/company\/.+$/).reply(200, company);
axiosMock.onGet('/api/companyforselect').reply(200, companysforselect);
axiosMock.onPost(/api\/company$/).reply(200, { status: 1, message: '新建成功！' });
axiosMock.onPut(/api\/company\/\d+$/).reply(200, { status: 1, message: '编辑成功！' });
axiosMock.onDelete(/api\/company\/.+$/).reply(200, { status: 1, message: '删除成功！' });
axiosMock.onPatch(/api\/company\/.+$/).reply(200, { status: 1, message: '设置成功！' });

/***/ }),
/* 13 */
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
/* 14 */
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
  component: __webpack_require__(31),
  children: [{
    path: 'declaration',
    meta: { title: '报关单', icon: 'fa fa-file-text-o' },
    component: __webpack_require__(38)
  }, {
    path: 'declarationRetrieval',
    meta: { title: '报关单检索', icon: 'fa fa-file-text-o' },
    component: __webpack_require__(47)
  }, {
    path: 'auditing',
    meta: { title: '审核', icon: 'fa fa-file-text-o' },
    component: __webpack_require__(52)
  }]
}, {
  path: '/setting',
  name: 'setting',
  meta: { title: '配置', icon: 'fa fa-sliders' },
  component: __webpack_require__(58),
  children: [{
    path: 'tax',
    meta: { title: '税率管理', icon: 'fa fa-file-text-o' },
    component: __webpack_require__(63)
  }, {
    path: 'license',
    meta: { title: '许可证管理', icon: 'fa fa-file-text-o' },
    component: __webpack_require__(69)
  }, {
    path: 'taxCutting',
    meta: { title: '减免税管理', icon: 'fa fa-file-text-o' },
    component: __webpack_require__(81)
  }, {
    path: 'manifest',
    meta: { title: '舱单管理', icon: 'fa fa-file-text-o' },
    component: __webpack_require__(89)
  }, {
    path: 'processingTrade',
    meta: { title: '加贸管理', icon: 'fa fa-file-text-o' },
    component: __webpack_require__(96)
  }, {
    path: 'cottonQuota',
    meta: { title: '棉花配额管理', icon: 'fa fa-file-text-o' },
    component: __webpack_require__(102)
  }, {
    path: 'company',
    meta: { title: '企业管理', icon: 'fa fa-file-text-o' },
    component: __webpack_require__(112)
  }]
}, {
  path: '/system',
  name: 'system',
  meta: { title: '系统', icon: 'fa fa-cogs' },
  component: __webpack_require__(117),
  children: [{
    path: 'user',
    meta: { title: '用户管理', icon: 'fa fa-file-text-o' },
    component: __webpack_require__(122)
  }, {
    path: 'role',
    meta: { title: '角色管理', icon: 'fa fa-file-text-o' },
    component: __webpack_require__(145)
  }]
}, {
  path: '/*',
  component: __webpack_require__(160)
}];

module.exports = routes;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var licenseAPI = {
  getInlicenseList: function getInlicenseList(search) {
    return axios.get('/api/license', {
      params: { search: search }
    }).then(function (res) {
      return res.data;
    });
  },
  addLicense: function addLicense(license) {
    return axios.post('/api/license', license).then(function (res) {
      return res.data;
    });
  },
  updateLicense: function updateLicense(license) {
    return axios.put('/api/license', license).then(function (res) {
      return res.data;
    });
  },
  getOutlicenseList: function getOutlicenseList(search) {
    return axios.get('/api/license', {
      params: { search: search }
    }).then(function (res) {
      return res.data;
    });
  },
  deleteLicense: function deleteLicense(ids) {
    return axios.delete('/api/license/' + ids).then(function (res) {
      return res.data;
    });
  },
  getfileList1: function getfileList1() {
    return axios.get('/api/filelist1').then(function (res) {
      return res.data;
    });
  },
  getfileList2: function getfileList2() {
    return axios.get('/api/filelist2').then(function (res) {
      return res.data;
    });
  },
  getLicenseGoods: function getLicenseGoods(licenseid) {
    return axios.get('/api/license/goods', {
      params: {
        licenseid: licenseid
      }
    }).then(function (res) {
      return res.data;
    });
  },
  addLicenseGoods: function addLicenseGoods(licensegoods) {
    return axios.post('/api/license/goods', licensegoods).then(function (res) {
      return res.data;
    });
  },
  updateLicenseGoods: function updateLicenseGoods(licensegoods) {
    return axios({
      method: 'put',
      url: '/api/license/goods/' + licensegoods.id,
      data: licensegoods
    }).then(function (res) {
      return res.data;
    });
  },
  deleteLicenseGoods: function deleteLicenseGoods(ids) {
    var strIds = ids.join(',');
    return axios.delete('/api/license/goods/' + strIds).then(function (res) {
      return res.data;
    });
  }
};

exports.default = licenseAPI;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(107)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(109),
  /* template */
  __webpack_require__(110),
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(127)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(129),
  /* template */
  __webpack_require__(130),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5e9d9894",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\system\\components\\TreeSelect.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TreeSelect.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e9d9894", Component.options)
  } else {
    hotAPI.reload("data-v-5e9d9894", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(133),
  /* template */
  __webpack_require__(142),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4617f830",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\system\\components\\MenuPermission.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MenuPermission.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4617f830", Component.options)
  } else {
    hotAPI.reload("data-v-4617f830", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(21);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _elementUi = __webpack_require__(4);

var _elementUi2 = _interopRequireDefault(_elementUi);

var _axiosMockAdapter = __webpack_require__(5);

var _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);

var _utils = __webpack_require__(13);

var _utils2 = _interopRequireDefault(_utils);

var _config = __webpack_require__(22);

var _config2 = _interopRequireDefault(_config);

var _toolbar = __webpack_require__(23);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _router = __webpack_require__(14);

var _router2 = _interopRequireDefault(_router);

var _main = __webpack_require__(163);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.axiosMock = window.axiosMock || new _axiosMockAdapter2.default(_axios2.default, { delayResponse: 1000 }); /* global localStorage*/


_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_elementUi2.default);
_vue2.default.component('el-toolbar', _toolbar2.default);

_axios2.default.defaults.baseURL = localStorage.serverhost || 'http://localhost:7999';
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
/* 21 */
/***/ (function(module, exports) {

module.exports = VueRouter;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 配置
module.exports = {};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(24)
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
  "data-v-5f13c002",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\components\\toolbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] toolbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f13c002", Component.options)
  } else {
    hotAPI.reload("data-v-5f13c002", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("0a814d5d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f13c002\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./toolbar.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f13c002\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./toolbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.el-toolbar[data-v-5f13c002],\n.el-toolbar-body[data-v-5f13c002] {\n  background-color: #f8f8f8;\n}\n.body-list .el-toolbar[data-v-5f13c002],\n.body-list .el-toolbar-body[data-v-5f13c002] {\n  background-color: #ECEEF3;\n}\n.body-list .el-toolbar-body[data-v-5f13c002],\n.body-detail .el-toolbar-body[data-v-5f13c002] {\n  box-shadow: inset 1px 0px 0px rgba(0, 0, 0, 0.06);\n}\n.el-toolbar[data-v-5f13c002] {\n  height: 50px;\n  border-bottom: 1px solid #ddd;\n}\n.el-toolbar.small[data-v-5f13c002] {\n  height: 36px;\n}\n.el-toolbar-body[data-v-5f13c002] {\n  position: absolute;\n  z-index: 100;\n  left: 0;\n  right: 18px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  height: 50px;\n  font-size: 14px;\n  border-bottom: 1px solid #ddd;\n}\n.el-toolbar-body>span[data-v-5f13c002],\n.el-toolbar-body>.el-button[data-v-5f13c002]:first-child,\n.el-toolbar-body>.el-toolbar-btn[data-v-5f13c002]:first-child {\n  margin-left: 10px;\n}\n.el-toolbar-body>span[data-v-5f13c002],\n.el-toolbar-body>.el-button[data-v-5f13c002]:last-child,\n.el-toolbar-body>.el-toolbar-btn[data-v-5f13c002]:last-child {\n  margin-right: 10px;\n}\n.el-toolbar.small .el-toolbar-body[data-v-5f13c002] {\n  height: 36px;\n}\n.el-toolbar-body .button-separator[data-v-5f13c002] {\n  padding: 11px 0;\n  width: 1px;\n  background-color: rgba(0, 0, 0, .25);\n  display: inline-block;\n  margin: 6px;\n}\n@media (max-width: 576px) {\n.el-toolbar[data-v-5f13c002],\n  .el-toolbar-body[data-v-5f13c002] {\n    min-height: 50px;\n    height: auto;\n}\n.el-toolbar.small[data-v-5f13c002],\n  .el-toolbar.small .el-toolbar-body[data-v-5f13c002] {\n    min-height: 36px;\n    height: auto;\n}\n.el-toolbar-body[data-v-5f13c002] {\n    position: relative;\n    flex-flow: row wrap;\n    padding: 5px 0;\n}\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/components/toolbar.vue?7f5a9227"],"names":[],"mappings":";AAsBA;;EAEA,0BAAA;CACA;AAEA;;EAEA,0BAAA;CACA;AAEA;;EAEA,kDAAA;CACA;AAEA;EACA,aAAA;EACA,8BAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,mBAAA;EACA,aAAA;EACA,QAAA;EACA,YAAA;EACA,cAAA;EACA,oBAAA;EACA,sBAAA;EACA,aAAA;EACA,gBAAA;EACA,8BAAA;CACA;AAEA;;;EAGA,kBAAA;CACA;AAEA;;;EAGA,mBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,gBAAA;EACA,WAAA;EACA,qCAAA;EACA,sBAAA;EACA,YAAA;CACA;AAEA;AACA;;IAEA,iBAAA;IACA,aAAA;CACA;AACA;;IAEA,iBAAA;IACA,aAAA;CACA;AACA;IACA,mBAAA;IACA,oBAAA;IACA,eAAA;CACA;CACA","file":"toolbar.vue","sourcesContent":["<template>\n  <div class=\"el-toolbar\" :class=\"{\n        'small': size === 'small'\n      }\">\n    <div class=\"el-toolbar-body\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    size: {\n      type: String,\n      default: 'normal'\n    }\n  }\n}\n</script>\n\n<style scoped>\n.el-toolbar,\n.el-toolbar-body {\n  background-color: #f8f8f8;\n}\n\n.body-list .el-toolbar,\n.body-list .el-toolbar-body {\n  background-color: #ECEEF3;\n}\n\n.body-list .el-toolbar-body,\n.body-detail .el-toolbar-body {\n  box-shadow: inset 1px 0px 0px rgba(0, 0, 0, 0.06);\n}\n\n.el-toolbar {\n  height: 50px;\n  border-bottom: 1px solid #ddd;\n}\n\n.el-toolbar.small {\n  height: 36px;\n}\n\n.el-toolbar-body {\n  position: absolute;\n  z-index: 100;\n  left: 0;\n  right: 18px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  height: 50px;\n  font-size: 14px;\n  border-bottom: 1px solid #ddd;\n}\n\n.el-toolbar-body>span,\n.el-toolbar-body>.el-button:first-child,\n.el-toolbar-body>.el-toolbar-btn:first-child {\n  margin-left: 10px;\n}\n\n.el-toolbar-body>span,\n.el-toolbar-body>.el-button:last-child,\n.el-toolbar-body>.el-toolbar-btn:last-child {\n  margin-right: 10px;\n}\n\n.el-toolbar.small .el-toolbar-body {\n  height: 36px;\n}\n\n.el-toolbar-body .button-separator {\n  padding: 11px 0;\n  width: 1px;\n  background-color: rgba(0, 0, 0, .25);\n  display: inline-block;\n  margin: 6px;\n}\n\n@media (max-width: 576px) {\n  .el-toolbar,\n  .el-toolbar-body {\n    min-height: 50px;\n    height: auto;\n  }\n  .el-toolbar.small,\n  .el-toolbar.small .el-toolbar-body {\n    min-height: 36px;\n    height: auto;\n  }\n  .el-toolbar-body {\n    position: relative;\n    flex-flow: row wrap;\n    padding: 5px 0;\n  }\n}\n</style>\n<style>\n.el-toolbar .el-button {\n  background: transparent;\n}\n\n.el-toolbar .el-button.is-disabled {\n  background-color: transparent;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("7f5c139b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f13c002\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./toolbar.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f13c002\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./toolbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.el-toolbar .el-button {\n  background: transparent;\n}\n.el-toolbar .el-button.is-disabled {\n  background-color: transparent;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/components/toolbar.vue?7f5a9227"],"names":[],"mappings":";AAsGA;EACA,wBAAA;CACA;AAEA;EACA,8BAAA;CACA","file":"toolbar.vue","sourcesContent":["<template>\n  <div class=\"el-toolbar\" :class=\"{\n        'small': size === 'small'\n      }\">\n    <div class=\"el-toolbar-body\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    size: {\n      type: String,\n      default: 'normal'\n    }\n  }\n}\n</script>\n\n<style scoped>\n.el-toolbar,\n.el-toolbar-body {\n  background-color: #f8f8f8;\n}\n\n.body-list .el-toolbar,\n.body-list .el-toolbar-body {\n  background-color: #ECEEF3;\n}\n\n.body-list .el-toolbar-body,\n.body-detail .el-toolbar-body {\n  box-shadow: inset 1px 0px 0px rgba(0, 0, 0, 0.06);\n}\n\n.el-toolbar {\n  height: 50px;\n  border-bottom: 1px solid #ddd;\n}\n\n.el-toolbar.small {\n  height: 36px;\n}\n\n.el-toolbar-body {\n  position: absolute;\n  z-index: 100;\n  left: 0;\n  right: 18px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  height: 50px;\n  font-size: 14px;\n  border-bottom: 1px solid #ddd;\n}\n\n.el-toolbar-body>span,\n.el-toolbar-body>.el-button:first-child,\n.el-toolbar-body>.el-toolbar-btn:first-child {\n  margin-left: 10px;\n}\n\n.el-toolbar-body>span,\n.el-toolbar-body>.el-button:last-child,\n.el-toolbar-body>.el-toolbar-btn:last-child {\n  margin-right: 10px;\n}\n\n.el-toolbar.small .el-toolbar-body {\n  height: 36px;\n}\n\n.el-toolbar-body .button-separator {\n  padding: 11px 0;\n  width: 1px;\n  background-color: rgba(0, 0, 0, .25);\n  display: inline-block;\n  margin: 6px;\n}\n\n@media (max-width: 576px) {\n  .el-toolbar,\n  .el-toolbar-body {\n    min-height: 50px;\n    height: auto;\n  }\n  .el-toolbar.small,\n  .el-toolbar.small .el-toolbar-body {\n    min-height: 36px;\n    height: auto;\n  }\n  .el-toolbar-body {\n    position: relative;\n    flex-flow: row wrap;\n    padding: 5px 0;\n  }\n}\n</style>\n<style>\n.el-toolbar .el-button {\n  background: transparent;\n}\n\n.el-toolbar .el-button.is-disabled {\n  background-color: transparent;\n}\n</style>\n"],"sourceRoot":""}]);

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

exports.default = {
  props: {
    size: {
      type: String,
      default: 'normal'
    }
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f13c002", module.exports)
  }
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(32)
  __webpack_require__(34)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(37),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-795fa0f0",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\form\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-795fa0f0", Component.options)
  } else {
    hotAPI.reload("data-v-795fa0f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

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
var update = __webpack_require__(1)("2218e969", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-795fa0f0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-795fa0f0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n@keyframes ani-demo-spin-data-v-795fa0f0 {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n.menu-wrap[data-v-795fa0f0] {\n  background-color: #F5F7FB;\n  position: absolute;\n  width: 100%;\n  top: 50px;\n  bottom: 0;\n  overflow: auto;\n}\n.el-menu[data-v-795fa0f0] {\n  background-color: #F5F7FB;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/form/index.vue?94f41c6c"],"names":[],"mappings":";AA0EA;AACA;IACA,wBAAA;CACA;AACA;IACA,0BAAA;CACA;AACA;IACA,0BAAA;CACA;CACA;AAEA;EACA,0BAAA;EACA,mBAAA;EACA,YAAA;EACA,UAAA;EACA,UAAA;EACA,eAAA;CACA;AAEA;EACA,0BAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div class=\"layout\">\n    <div class=\"body-list\" style=\"background-color:white;\">\n      <el-toolbar>\n        <span>\n          <i class=\"fa fa-ship\" /> 通关</span>\n      </el-toolbar>\n      <div class=\"menu-wrap\">\n        <el-menu :default-active=\"activeMenu\" @select=\"onSelectMenu\">\n          <el-menu-item :index=\"menu.path\" v-for=\"menu in menus\" :key=\"menu.path\">\n            <i :class=\"menu.meta.icon\"></i>&nbsp;{{menu.meta.title}}\n          </el-menu-item>\n        </el-menu>\n      </div>\n\n    </div>\n    <div class=\"body-detail\">\n      <div class=\"layout-content-main\">\n        <router-view></router-view>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nconst menus = [\n  {\n    path: '/form/declaration',\n    meta: { title: '报关单', icon: 'fa fa-file-text-o' }\n  },\n  {\n    path: '/form/declarationRetrieval',\n    meta: { title: '报关单检索', icon: 'fa fa-file-text-o' }\n  },\n  {\n    path: '/form/auditing',\n    meta: { title: '审核', icon: 'fa fa-check-square-o' }\n  }\n]\n\nexport default {\n  data() {\n    return {\n      menus,\n      activeMenu: menus[0].path\n    };\n  },\n  methods: {\n    onSelectMenu(path) {\n      let item = this.menus.find((val) => val.path === path)\n\n      if (item) {\n        this.$router.push({ path: item.path })\n      }\n    }\n  },\n  created() {\n    if (location.hash.split('/').length == 2) {\n      location.hash = this.activeMenu\n    }\n  },\n  beforeRouteUpdate(to, from, next) {\n    let path = to.path\n    let item = this.menus.find(val => val.path === path)\n\n    if (item) {\n      this.activeMenu = item.path\n    }\n    next()\n  }\n\n}\n</script>\n<style scoped>\n@keyframes ani-demo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.menu-wrap {\n  background-color: #F5F7FB;\n  position: absolute;\n  width: 100%;\n  top: 50px;\n  bottom: 0;\n  overflow: auto;\n}\n\n.el-menu {\n  background-color: #F5F7FB;\n}\n</style>\n<style>\n.menu-wrap .el-menu{\n  width:200px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("d506abb6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-795fa0f0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-795fa0f0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.menu-wrap .el-menu{\n  width:200px;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/form/index.vue?94f41c6c"],"names":[],"mappings":";AAoGA;EACA,YAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div class=\"layout\">\n    <div class=\"body-list\" style=\"background-color:white;\">\n      <el-toolbar>\n        <span>\n          <i class=\"fa fa-ship\" /> 通关</span>\n      </el-toolbar>\n      <div class=\"menu-wrap\">\n        <el-menu :default-active=\"activeMenu\" @select=\"onSelectMenu\">\n          <el-menu-item :index=\"menu.path\" v-for=\"menu in menus\" :key=\"menu.path\">\n            <i :class=\"menu.meta.icon\"></i>&nbsp;{{menu.meta.title}}\n          </el-menu-item>\n        </el-menu>\n      </div>\n\n    </div>\n    <div class=\"body-detail\">\n      <div class=\"layout-content-main\">\n        <router-view></router-view>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nconst menus = [\n  {\n    path: '/form/declaration',\n    meta: { title: '报关单', icon: 'fa fa-file-text-o' }\n  },\n  {\n    path: '/form/declarationRetrieval',\n    meta: { title: '报关单检索', icon: 'fa fa-file-text-o' }\n  },\n  {\n    path: '/form/auditing',\n    meta: { title: '审核', icon: 'fa fa-check-square-o' }\n  }\n]\n\nexport default {\n  data() {\n    return {\n      menus,\n      activeMenu: menus[0].path\n    };\n  },\n  methods: {\n    onSelectMenu(path) {\n      let item = this.menus.find((val) => val.path === path)\n\n      if (item) {\n        this.$router.push({ path: item.path })\n      }\n    }\n  },\n  created() {\n    if (location.hash.split('/').length == 2) {\n      location.hash = this.activeMenu\n    }\n  },\n  beforeRouteUpdate(to, from, next) {\n    let path = to.path\n    let item = this.menus.find(val => val.path === path)\n\n    if (item) {\n      this.activeMenu = item.path\n    }\n    next()\n  }\n\n}\n</script>\n<style scoped>\n@keyframes ani-demo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.menu-wrap {\n  background-color: #F5F7FB;\n  position: absolute;\n  width: 100%;\n  top: 50px;\n  bottom: 0;\n  overflow: auto;\n}\n\n.el-menu {\n  background-color: #F5F7FB;\n}\n</style>\n<style>\n.menu-wrap .el-menu{\n  width:200px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 36 */
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
  meta: { title: '报关单检索', icon: 'fa fa-file-text-o' }
}, {
  path: '/form/auditing',
  meta: { title: '审核', icon: 'fa fa-check-square-o' }
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-795fa0f0", module.exports)
  }
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(39)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(46),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-f739cca0",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\form\\declaration.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] declaration.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f739cca0", Component.options)
  } else {
    hotAPI.reload("data-v-f739cca0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("458c5bb2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f739cca0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./declaration.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f739cca0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./declaration.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-f739cca0] {\n  padding: 10px;\n}\n.search-bar[data-v-f739cca0] {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-f739cca0] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-f739cca0] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-f739cca0] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.page-wrap[data-v-f739cca0] {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n.e-input[data-v-f739cca0] {\n  width: 270px;\n}\n.search-select[data-v-f739cca0] {\n  width: 150px;\n}\n.form-title[data-v-f739cca0] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 6%;\n  padding: 20px 0 5px 0;\n}\n.form-panel[data-v-f739cca0] {\n  width: 80%;\n  margin-left: 5%;\n  padding: 20px 0 0 0;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.packinglist-panel[data-v-f739cca0] {\n  width: 80%;\n  margin-left: 5%;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/form/declaration.vue?06a206a8"],"names":[],"mappings":";AAuvBA;EACA,cAAA;CACA;AAEA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,SAAA;EACA,oBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;CACA;AAEA;EACA,WAAA;EACA,gBAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;CACA;AAEA;EACA,WAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;CACA","file":"declaration.vue","sourcesContent":["<template>\n  <div v-if=\"!declarationDialogmodel\" :style=\"{width:clientWidth+'px'}\">\n    <el-toolbar>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addClick\">\n        <i class=\"fa fa-plus\"></i> 新建</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length !== 1\" @click=\"editClick\">\n        <i class=\"fa fa-edit\"></i> 编辑</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0\" @click=\"deleteClick\">\n        <i class=\"fa fa-remove\"></i> 删除</el-button>\n    </el-toolbar>\n    <div class=\"main-content-wrap\">\n      <div class=\"search-bar\">\n        排序：\n        <el-select size=\"small\" v-model=\"sort\" class=\"search-select\">\n          <el-option v-for=\"item in sortOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        检索字段：\n        <el-select size=\"small\" v-model=\"retrieval\" class=\"search-select\">\n          <el-option v-for=\"item in retrievalOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        <el-input style=\"width:200px\" size=\"small\" v-model=\"searchword\"></el-input>\n        <!--<el-select size=\"small\" v-model=\"logic\" class=\"search-select\">\n            <el-option v-for=\"item in logicOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n            </el-option>\n          </el-select>-->\n        <el-button size=\"small\" type=\"primary\" @click=\"getDeclarationData\" style=\"width:60px;\">搜索</el-button>\n      </div>\n      <el-table :data=\"declarationData\" ref=\"declarationTable\" v-loading=\"dataLoading\" tooltip-effect=\"dark\" style=\"width:100%\" :height=\"clientHeight\" highlight-current-row @selection-change=\"onSelectionChange\" @expand=\"expandRow\">\n        <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n        <el-table-column type=\"expand\">\n          <template slot-scope=\"props\">\n            <el-form label-position=\"left\" inline class=\"demo-table-expand\" label-width=\"160px\">\n              <el-form-item label=\"报关单类型：\">\n                <span>{{props.row.declarationtypename}}</span>\n              </el-form-item><br/>\n              <el-form-item label=\"预录入编号：\">\n                <span>{{props.row.preentrynumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"海关编号：\">\n                <span>{{props.row.customsnumber}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"进口口岸：\">\n                <span>{{props.row.importorexportport}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"出口口岸：\">\n                <span>{{props.row.importorexportport}}</span>\n              </el-form-item>\n              <el-form-item label=\"备案号：\">\n                <span>{{props.row.recordnumber}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"进口日期：\">\n                <span>{{props.row.importorexportdate}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"出口日期：\">\n                <span>{{props.row.importorexportdate}}</span>\n              </el-form-item>\n              <el-form-item label=\"申报日期：\">\n                <span>{{props.row.declarationdate}}</span>\n              </el-form-item>\n              <el-form-item label=\"经营单位：\">\n                <span>{{props.row.managementunit}}</span>\n              </el-form-item>\n              <el-form-item label=\"运输方式：\">\n                <span>{{props.row.shippingtype}}</span>\n              </el-form-item>\n              <el-form-item label=\"运输工具名称：\">\n                <span>{{props.row.shippingtools}}</span>\n              </el-form-item>\n              <el-form-item label=\"提运单号：\">\n                <span>{{props.row.shippingnumbers}}</span>\n              </el-form-item>\n              <el-form-item label=\"收货单位：\">\n                <span>{{props.row.forwardingunit}}</span>\n              </el-form-item>\n              <el-form-item label=\"贸易方式：\">\n                <span>{{props.row.tradingtype}}</span>\n              </el-form-item>\n              <el-form-item label=\"征免性质：\">\n                <span>{{props.row.exemptionnature}}</span>\n              </el-form-item>\n              <el-form-item label=\"征税比例：\">\n                <span>{{props.row.settlementtype}}</span>\n              </el-form-item>\n              <el-form-item label=\"许可证号：\">\n                <span>{{props.row.licensekey}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"启运国：\">\n                <span>{{props.row.startorarrivalcountry}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"运抵国：\">\n                <span>{{props.row.startorarrivalcountry}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"装货港：\">\n                <span>{{props.row.loadingorfingerport}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"指运港：\">\n                <span>{{props.row.loadingorfingerport}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"境内目的地：\">\n                <span>{{props.row.destinationorconsignmentplace}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"境内货源地：\">\n                <span>{{props.row.destinationorconsignmentplace}}</span>\n              </el-form-item>\n              <el-form-item label=\"批准文号：\">\n                <span>{{props.row.approvalnumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"成交方式：\">\n                <span>{{props.row.transactionmethod}}</span>\n              </el-form-item>\n              <el-form-item label=\"运费：\">\n                <span>{{props.row.freight}}</span>\n              </el-form-item>\n              <el-form-item label=\"保费：\">\n                <span>{{props.row.premium}}</span>\n              </el-form-item>\n              <el-form-item label=\"杂费：\">\n                <span>{{props.row.incidental}}</span>\n              </el-form-item><br/>\n              <el-form-item label=\"合同协议号：\">\n                <span>{{props.row.agreementnumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"件数：\">\n                <span>{{props.row.goodsnumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"包装种类：\">\n                <span>{{props.row.packagingtype}}</span>\n              </el-form-item>\n              <el-form-item label=\"毛重（千克）：\">\n                <span>{{props.row.grossweight}}</span>\n              </el-form-item>\n              <el-form-item label=\"净重（千克）：\">\n                <span>{{props.row.netweight}}</span>\n              </el-form-item>\n              <el-form-item label=\"集装箱号：\">\n                <span>{{props.row.containernumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"随附单证：\">\n                <span>{{props.row.documentsattached}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"用途：\">\n                <span>{{props.row.purposeormanufacturer}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"生产厂家：\">\n                <span>{{props.row.purposeormanufacturer}}</span>\n              </el-form-item>\n              <el-form-item label=\"标记唛码及备注：\" style=\"width:90%\">\n                <span>{{props.row.shippingmarksandremarks}}</span>\n              </el-form-item>\n              <el-form-item label=\"商品：\" label-width=\"60px\" style=\"width:100%\">\n                <packinglist-table :declarationID=\"declarationID\" :declarationType=\"declarationType\">\n                </packinglist-table>\n              </el-form-item>\n              <el-form-item label=\"税费征收情况：\" style=\"width:90%\">\n                <span>{{props.row.taxpaidornot}}</span>\n              </el-form-item>\n              <el-form-item label=\"录入员：\">\n                <span>{{props.row.entryclerk}}</span>\n              </el-form-item>\n              <el-form-item label=\"录入单位：\">\n                <span>{{props.row.entryunit}}</span>\n              </el-form-item>\n              <el-form-item label=\"报关员：\">\n                <span>{{props.row.customsbroker}}</span>\n              </el-form-item>\n              <el-form-item label=\"申报单位：\">\n                <span>{{props.row.declarationunit}}</span>\n              </el-form-item>\n              <el-form-item label=\"单位地址：\">\n                <span>{{props.row.unitaddress}}</span>\n              </el-form-item>\n              <el-form-item label=\"邮编：\">\n                <span>{{props.row.zipcode}}</span>\n              </el-form-item>\n              <el-form-item label=\"电话：\">\n                <span>{{props.row.telephone}}</span>\n              </el-form-item>\n              <el-form-item label=\"制填日期：\">\n                <span>{{props.row.fillingdate}}</span>\n              </el-form-item>\n              <el-form-item label=\"录入日期：\">\n                <span>{{props.row.entrydate}}</span>\n              </el-form-item>\n            </el-form>\n          </template>\n        </el-table-column>\n        <el-table-column prop=\"customsnumber\" show-overflow-tooltip min-width=\"20%\" label=\"海关编号\"></el-table-column>\n        <el-table-column prop=\"declarationtypename\" show-overflow-tooltip min-width=\"20%\" label=\"报关单类型\"></el-table-column>\n        <el-table-column prop=\"importorexportport\" show-overflow-tooltip min-width=\"20%\" label=\"海关口岸\"></el-table-column>\n        <el-table-column min-width=\"20%\" label=\"商品详情\">\n          <template slot-scope=\"scope\">\n            <el-button type=\"text\">\n              <span style=\"color:green;\" @click=\"showPackinglist(scope.row.id,scope.row.declarationtype)\">查看商品</span>\n            </el-button>\n          </template>\n        </el-table-column>\n        <el-table-column prop=\"declarationunit\" show-overflow-tooltip min-width=\"30%\" label=\"申报单位\"></el-table-column>\n        <el-table-column prop=\"declarationdate\" show-overflow-tooltip min-width=\"15%\" label=\"申报日期\"></el-table-column>\n        <el-table-column prop=\"entrydate\" show-overflow-tooltip min-width=\"15%\" label=\"录入日期\"></el-table-column>\n      </el-table>\n      <div class=\"page-wrap\">\n        <el-pagination @size-change=\"handleSizeChange\" @current-change=\"handleCurrentChange\" :current-page=\"currentPage\" :page-sizes=\"pageSizes\" :page-size=\"pageSize\" layout=\"total, sizes, prev, pager, next\" :total=\"total\">\n        </el-pagination>\n      </div>\n    </div>\n    <el-dialog title=\"商品列表详情\" :visible.sync=\"packinglistDialogModal\" size=\"large\">\n      <el-toolbar style=\"margin-bottom:20px;\">\n        <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addPackingClick\" style=\"margin-left:10px;\">\n          <i class=\"fa fa-plus\"></i>添加</el-button>\n        <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedPackingRow.length === 0\" @click=\"editPackingClick\">\n          <i class=\"fa fa-edit\"></i>编辑</el-button>\n        <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedPackingRow.length === 0\" @click=\"deletePackingClick\">\n          <i class=\"fa fa-remove\"></i>删除</el-button>\n      </el-toolbar>\n      <packinglist-table :declarationID=\"declarationID\" :declarationType=\"declarationType\" @row-click=\"packingRowClick\">\n      </packinglist-table>\n    </el-dialog>\n    <el-dialog :title=\"editMode==1? '编辑商品信息': '添加商品'\" :visible.sync=\"packingdetailDialogModal\" :close-on-click-modal=\"false\">\n      <el-form label-position=\"right\" :model=\"tmpPacking\" inline label-width=\"200px\">\n        <el-form-item label=\"商品名称、规格型号：\">\n          <el-input class=\"e-input\" type=\"textarea\" :rows=\"3\" v-model=\"tmpPacking.name\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"数量及单位：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.number\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"单价：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.singleprice\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"总价：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.totalprice\"></el-input>\n        </el-form-item>\n        <el-form-item v-if=\"this.declarationType == 'import'\" label=\"原产国：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.productcountry\"></el-input>\n        </el-form-item>\n        <el-form-item v-else label=\"最终目的国：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.productcountry\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"币制：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.currency\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"征免：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.exemption\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"packingdetailDialogModal = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"packingdetailConfirm\">确 定</el-button>\n      </div>\n    </el-dialog>\n  </div>\n  <div v-else>\n    <el-toolbar>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"returnMain\">\n        <i class=\"fa fa-chevron-left\"></i>返回</el-button>\n      <span class=\"button-separator\"></span>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"confirm\">\n        <i class=\"fa fa-save\"></i>\n        <span v-if=\"editMode == 1\">保存编辑</span>\n        <span v-else>确认新建</span>\n      </el-button>\n    </el-toolbar>\n    <div class=\"main-content-wrap\" style=\"background-color:#f5f5f5\">\n      <el-form label-position=\"right\" :model=\"tmpDeclaration\" label-width=\"160px\" class=\"e-form\">\n        <div class=\"form-title\">基本信息</div>\n        <div class=\"form-panel\">\n          <el-form-item label=\"报关单类型：\">\n            <el-select class=\"e-input\" v-model=\"tmpDeclaration.declarationtype\" placeholder=\"请选择\">\n              <el-option v-for=\"item in declarationTypeOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n              </el-option>\n            </el-select>\n          </el-form-item>\n          <el-form-item label=\"预录入编号：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.preentrynumber\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"海关编号：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.customsnumber\"></el-input>\n          </el-form-item>\n          <el-form-item v-if=\"tmpDeclaration.declarationtype == 'import'\" label=\"进口口岸：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.importorexportport\"></el-input>\n          </el-form-item>\n          <el-form-item v-if=\"tmpDeclaration.declarationtype == 'import'\" label=\"进口日期：\">\n            <el-date-picker v-model=\"tmpDeclaration.importorexportdate\" type=\"date\" class=\"e-input\" placeholder=\"选择进口日期\">\n            </el-date-picker>\n          </el-form-item>\n          <el-form-item v-else label=\"出口日期：\">\n            <el-date-picker v-model=\"tmpDeclaration.importorexportdate\" type=\"date\" class=\"e-input\" placeholder=\"选择出口日期\">\n            </el-date-picker>\n          </el-form-item>\n          <el-form-item label=\"申报日期：\">\n            <el-date-picker v-model=\"tmpDeclaration.declarationdate\" type=\"date\" class=\"e-input\" placeholder=\"选择申报日期\">\n            </el-date-picker>\n          </el-form-item>\n        </div>\n        <div class=\"form-title\">单位信息</div>\n        <div class=\"form-panel\">\n          <el-form-item label=\"经营单位：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.managementunit\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"运输方式：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.shippingtype\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"运输工具名称：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.shippingtools\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"提运单号：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.shippingnumbers\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"收货单位：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.forwardingunit\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"贸易方式：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.tradingtype\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"征免性质：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.exemptionnature\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"征税比例：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.settlementtype\"></el-input>\n          </el-form-item>\n        </div>\n        <div class=\"form-title\">货物信息</div>\n        <div class=\"form-panel\">\n          <el-form-item label=\"许可证号：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.licensekey\"></el-input>\n          </el-form-item>\n          <el-form-item v-if=\"tmpDeclaration.declarationtype == 'import'\" label=\"启运国：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.startorarrivalcountry\"></el-input>\n          </el-form-item>\n          <el-form-item v-else label=\"运抵国：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.startorarrivalcountry\"></el-input>\n          </el-form-item>\n          <el-form-item v-if=\"tmpDeclaration.declarationtype == 'import'\" label=\"装货港：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.loadingorfingerport\"></el-input>\n          </el-form-item>\n          <el-form-item v-else label=\"指运港：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.loadingorfingerport\"></el-input>\n          </el-form-item>\n          <el-form-item v-if=\"tmpDeclaration.declarationtype == 'import'\" label=\"境内目的地：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.destinationorconsignmentplace\"></el-input>\n          </el-form-item>\n          <el-form-item v-else label=\"境内货源地：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.destinationorconsignmentplace\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"批准文号：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.approvalnumber\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"成交方式：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.transactionmethod\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"运费：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.freight\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"保费：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.premium\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"杂费：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.incidental\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"合同协议号：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.agreementnumber\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"件数：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.goodsnumber\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"包装种类：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.packagingtype\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"毛重（千克）：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.grossweight\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"净重（千克）：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.netweight\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"集装箱号：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.containernumber\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"随附单证：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.documentsattached\"></el-input>\n          </el-form-item>\n          <el-form-item v-if=\"tmpDeclaration.declarationtype == 'import'\" label=\"用途：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.purposeormanufacturer\"></el-input>\n          </el-form-item>\n          <el-form-item v-else label=\"生产厂家：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.purposeormanufacturer\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"标记唛码及备注：\" style=\"width:90%\">\n            <el-input type=\"textarea\" v-model=\"tmpDeclaration.shippingmarksandremarks\" :rows=\"3\" style=\"width:450px;\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"税费征收情况：\" style=\"width:90%\">\n            <el-input type=\"textarea\" v-model=\"tmpDeclaration.taxpaidornot\" :rows=\"3\" style=\"width:450px;\"></el-input>\n          </el-form-item>\n        </div>\n        <div class=\"form-title\">商品列表</div>\n        <div class=\"packinglist-panel\">\n          <div style=\"height:50px;background-color:#f5f5f5; padding:5px;\">\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addPackingClick\" style=\"margin-left:10px;\">\n              <i class=\"fa fa-plus\"></i>添加</el-button>\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedPackingRow.length === 0\" @click=\"editPackingClick\">\n              <i class=\"fa fa-edit\"></i>编辑</el-button>\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedPackingRow.length === 0\" @click=\"deletePackingClick\">\n              <i class=\"fa fa-remove\"></i>删除</el-button>\n          </div>\n          <packinglist-table :declarationID=\"tmpDeclaration.id\" :declarationType=\"tmpDeclaration.declarationtype\" @row-click=\"packingRowClick\">\n          </packinglist-table>\n        </div>\n        <div class=\"form-title\">操作相关</div>\n        <div class=\"form-panel\">\n          <el-form-item label=\"录入员：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.entryclerk\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"录入单位：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.entryunit\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"报关员：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.customsbroker\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"申报单位：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.declarationunit\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"单位地址：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.unitaddress\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"邮编：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.zipcode\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"电话：\">\n            <el-input class=\"e-input\" v-model=\"tmpDeclaration.telephone\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"制填日期：\">\n            <el-date-picker v-model=\"tmpDeclaration.fillingdate\" type=\"date\" class=\"e-input\" placeholder=\"选择制填日期\">\n            </el-date-picker>\n          </el-form-item>\n        </div>\n        <div style=\"height:100px;\"></div>\n      </el-form>\n    </div>\n    <el-dialog :title=\"editMode==1? '编辑商品信息': '添加商品'\" :visible.sync=\"packingdetailDialogModal\" :close-on-click-modal=\"false\">\n      <el-form label-position=\"right\" :model=\"tmpPacking\" inline label-width=\"200px\">\n        <el-form-item label=\"商品名称、规格型号：\">\n          <el-input class=\"e-input\" type=\"textarea\" :rows=\"3\" v-model=\"tmpPacking.name\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"数量及单位：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.number\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"单价：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.singleprice\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"总价：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.totalprice\"></el-input>\n        </el-form-item>\n        <el-form-item v-if=\"this.declarationType == 'import'\" label=\"原产国：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.productcountry\"></el-input>\n        </el-form-item>\n        <el-form-item v-else label=\"最终目的国：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.productcountry\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"币制：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.currency\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"征免：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.exemption\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"packingdetailDialogModal = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"packingdetailConfirm\">确 定</el-button>\n      </div>\n    </el-dialog>\n  </div>\n</template>\n\n<script>\nimport declarationAPI from './api/declarationAPI.js';\nimport packinglistAPI from './api/packinglistAPI.js';\n//import './mock/declaration.js';\nimport packinglistTable from './components/packinglistTable.vue';\n\nexport default {\n  data() {\n    return {\n      tmpPacking: {},\n      packingdetailDialogModal: false,\n      packinglistDialogModal: false,\n      declarationType: '',\n      declarationID: '',\n      clientWidth: 0,\n      clientHeight: 0,\n      searchword: '',\n      selectedRows: [],\n      selectedPackingRow: [],\n      declarationData: [],\n      currentPage: 1,\n      pageSizes: [10, 20, 50],\n      pageSize: 10,\n      total: 0,\n      editMode: 1,\n      declarationDialogmodel: false,\n      tmpDeclaration: {},\n      dataLoading: false,\n      confirmLoading: false,\n      declarationTypeOptions: [\n        { key: 'import', value: '进口报关单' },\n        { key: 'export', value: '出口报关单' },\n      ],\n      sort: '',\n      sortOptions: [\n        { key: '', value: '请选择排序' },\n        { key: 'declarationtype', value: '报关单类型' },\n        { key: 'customsnumber', value: '海关编号' },\n        { key: 'importorexportport', value: '进口/出口口岸' },\n        { key: 'declarationunit', value: '申报单位' },\n        { key: 'declarationdate', value: '申报日期' },\n        { key: 'entrydate', value: '录入日期' },\n      ],\n      retrieval: '',\n      retrievalOptions: [\n        { key: '', value: '请选择检索字段' },\n        { key: 'customsnumber', value: '海关编号' },\n        { key: 'declarationunit', value: '申报单位' },\n      ],\n      logic: '',\n      logicOptions: [\n        { key: '', value: '请选择逻辑' },\n        { key: 'and', value: '与' },\n        { key: 'or', value: '或' },\n        { key: 'none', value: '非' },\n      ],\n    };\n  },\n  methods: {\n    addPackingClick() {\n      this.editMode = 0;\n      this.tmpPacking = {};\n      this.packingdetailDialogModal = true;\n    },\n    editPackingClick() {\n      packinglistAPI.getPackingListById(this.selectedPackingRow.id).then(data => {\n        console.log(data);\n        this.editMode = 1;\n        this.tmpPacking = data.data;\n        this.packingdetailDialogModal = true;\n      })\n    },\n    deletePackingClick() {\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done();\n          }\n          instance.confirmButtonLoading = true;\n\n          return packinglistAPI\n            .deletePackingList(this.selectedPackingRow.id)\n            .then(data => {\n              instance.confirmButtonLoading = false;\n              console.log(data);\n              done(data);\n            });\n        },\n      })\n        .then(data => {\n          this.selectedPackingRow = [];\n          this.$notify({\n            title: '提示',\n            message: '删除成功！',\n            type: 'success',\n            duration: 2000,\n          });\n        })\n        .catch(() => {\n          this.$notify.error({\n            title: '取消',\n            message: '操作取消！',\n            duration: 2000,\n          });\n        });\n    },\n    packingdetailConfirm() {\n      if (this.editMode == 1) {\n        packinglistAPI.updatePackingList(this.tmpPacking).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: data.message,\n              type: 'success',\n              duration: 2000,\n            });\n          }\n          this.packingdetailDialogModal = false;\n        });\n      } else {\n        Vue.set(this.tmpPacking, 'id', Math.floor(Math.random() * 999999) + 1);\n        Vue.set(this.tmpPacking, 'declarationid', this.declarationID);\n        packinglistAPI.addPackingList(this.tmpPacking).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: data.message,\n              type: 'success',\n              duration: 2000,\n            });\n          }\n          this.packingdetailDialogModal = false;\n        });\n      }\n    },\n    packingRowClick(row) {\n      console.log(row);\n      this.selectedPackingRow = row;\n    },\n    showPackinglist(id, type) {\n      console.log(id);\n      console.log(type);\n      this.declarationID = id;\n      this.declarationType = type;\n      this.selectedPackingRow = [];\n      this.packinglistDialogModal = true;\n    },\n    getDeclarationData() {\n      this.dataLoading = true;\n      let obj = {\n        \"declarationtypename\": \"出口报关单\"\n      }\n      declarationAPI\n        .getDeclaration({})\n        .then(data => {\n          console.log(data);\n          this.declarationData = data.data;\n          this.total = data.total;\n          this.dataLoading = false;\n        });\n    },\n    onSelectionChange(selection) {\n      this.selectedRows = selection;\n    },\n    handleSizeChange(val) {\n      this.pageSize = val;\n      this.getDeclarationData();\n    },\n    handleCurrentChange(val) {\n      this.currentPage = val;\n      this.getDeclarationData();\n    },\n    expandRow(row) {\n      this.declarationType = row.declarationtype;\n      this.declarationID = row.id;\n    },\n    addClick() {\n      this.editMode = 0;\n      this.tmpDeclaration = {\n        declarationtype: 'import',\n      };\n      this.declarationID = Math.floor(Math.random() * 999999) + 1;\n      this.declarationDialogmodel = true;\n      this.selectedPackingRow = [];\n    },\n    editClick() {\n      declarationAPI.getDeclarationById(this.selectedRows[0].id).then(data => {\n        console.log(data);\n        this.editMode = 1;\n        this.tmpDeclaration = data.data;\n        this.declarationDialogmodel = true;\n        this.selectedPackingRow = [];\n      });\n    },\n    deleteClick() {\n      let rowIds = [];\n      this.selectedRows.forEach(function(row) {\n        rowIds.push(row.id);\n      });\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done();\n          }\n          instance.confirmButtonLoading = true;\n\n          return declarationAPI.deleteDeclaration(rowIds).then(data => {\n            instance.confirmButtonLoading = false;\n            done(data);\n            if (data.status == 1) {\n              this.$notify({\n                title: '成功',\n                message: data.message,\n                type: 'success',\n                duration: 2000,\n              });\n              this.getDeclarationData();\n            }\n          });\n        },\n      }).catch(() => {\n        this.$notify.error({\n          title: '取消',\n          message: '操作取消！',\n          duration: 2000,\n        });\n      });\n    },\n    returnMain() {\n      this.getDeclarationData();\n      this.declarationDialogmodel = false;\n    },\n    confirm() {\n      this.declarationTypeOptions.forEach(o => {\n        if (o.key == this.tmpDeclaration.declarationtype) {\n          Vue.set(this.tmpDeclaration, 'declarationtypename', o.value);\n          return;\n        }\n      });\n      if (this.editMode == 1) {\n        declarationAPI.updateDeclaration(this.tmpDeclaration).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: data.message,\n              type: 'success',\n              duration: 2000,\n            });\n          }\n        });\n      } else {\n        Vue.set(this.tmpDeclaration, 'id', this.declarationID);\n        declarationAPI.addDeclaration(this.tmpDeclaration).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: data.message,\n              type: 'success',\n              duration: 2000,\n            });\n          }\n          this.tmpDeclaration = {\n            declarationtype: this.tmpDeclaration.declarationtype,\n          };\n        });\n      }\n    },\n  },\n  created() {\n    this.clientWidth = document.documentElement.clientWidth - 200;\n    this.clientHeight = document.documentElement.clientHeight - 200;\n    this.getDeclarationData();\n  },\n  components: {\n    'packinglist-table': packinglistTable,\n  },\n};\n</script>\n\n<style scoped>\n.main-content-wrap {\n  padding: 10px;\n}\n\n.search-bar {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n\n.demo-table-expand {\n  font-size: 12px;\n}\n\n.demo-table-expand label {\n  color: #99a9bf;\n}\n\n.demo-table-expand .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n\n.page-wrap {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n\n.e-input {\n  width: 270px;\n}\n\n.search-select {\n  width: 150px;\n}\n\n.form-title {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 6%;\n  padding: 20px 0 5px 0;\n}\n\n.form-panel {\n  width: 80%;\n  margin-left: 5%;\n  padding: 20px 0 0 0;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.packinglist-panel {\n  width: 80%;\n  margin-left: 5%;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _declarationAPI = __webpack_require__(9);

var _declarationAPI2 = _interopRequireDefault(_declarationAPI);

var _packinglistAPI = __webpack_require__(7);

var _packinglistAPI2 = _interopRequireDefault(_packinglistAPI);

var _packinglistTable = __webpack_require__(10);

var _packinglistTable2 = _interopRequireDefault(_packinglistTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      tmpPacking: {},
      packingdetailDialogModal: false,
      packinglistDialogModal: false,
      declarationType: '',
      declarationID: '',
      clientWidth: 0,
      clientHeight: 0,
      searchword: '',
      selectedRows: [],
      selectedPackingRow: [],
      declarationData: [],
      currentPage: 1,
      pageSizes: [10, 20, 50],
      pageSize: 10,
      total: 0,
      editMode: 1,
      declarationDialogmodel: false,
      tmpDeclaration: {},
      dataLoading: false,
      confirmLoading: false,
      declarationTypeOptions: [{ key: 'import', value: '进口报关单' }, { key: 'export', value: '出口报关单' }],
      sort: '',
      sortOptions: [{ key: '', value: '请选择排序' }, { key: 'declarationtype', value: '报关单类型' }, { key: 'customsnumber', value: '海关编号' }, { key: 'importorexportport', value: '进口/出口口岸' }, { key: 'declarationunit', value: '申报单位' }, { key: 'declarationdate', value: '申报日期' }, { key: 'entrydate', value: '录入日期' }],
      retrieval: '',
      retrievalOptions: [{ key: '', value: '请选择检索字段' }, { key: 'customsnumber', value: '海关编号' }, { key: 'declarationunit', value: '申报单位' }],
      logic: '',
      logicOptions: [{ key: '', value: '请选择逻辑' }, { key: 'and', value: '与' }, { key: 'or', value: '或' }, { key: 'none', value: '非' }]
    };
  },

  methods: {
    addPackingClick: function addPackingClick() {
      this.editMode = 0;
      this.tmpPacking = {};
      this.packingdetailDialogModal = true;
    },
    editPackingClick: function editPackingClick() {
      var _this = this;

      _packinglistAPI2.default.getPackingListById(this.selectedPackingRow.id).then(function (data) {
        console.log(data);
        _this.editMode = 1;
        _this.tmpPacking = data.data;
        _this.packingdetailDialogModal = true;
      });
    },
    deletePackingClick: function deletePackingClick() {
      var _this2 = this;

      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action !== 'confirm') {
            done();
          }
          instance.confirmButtonLoading = true;

          return _packinglistAPI2.default.deletePackingList(_this2.selectedPackingRow.id).then(function (data) {
            instance.confirmButtonLoading = false;
            console.log(data);
            done(data);
          });
        }
      }).then(function (data) {
        _this2.selectedPackingRow = [];
        _this2.$notify({
          title: '提示',
          message: '删除成功！',
          type: 'success',
          duration: 2000
        });
      }).catch(function () {
        _this2.$notify.error({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        });
      });
    },
    packingdetailConfirm: function packingdetailConfirm() {
      var _this3 = this;

      if (this.editMode == 1) {
        _packinglistAPI2.default.updatePackingList(this.tmpPacking).then(function (data) {
          if (data.status == 1) {
            _this3.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000
            });
          }
          _this3.packingdetailDialogModal = false;
        });
      } else {
        Vue.set(this.tmpPacking, 'id', Math.floor(Math.random() * 999999) + 1);
        Vue.set(this.tmpPacking, 'declarationid', this.declarationID);
        _packinglistAPI2.default.addPackingList(this.tmpPacking).then(function (data) {
          if (data.status == 1) {
            _this3.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000
            });
          }
          _this3.packingdetailDialogModal = false;
        });
      }
    },
    packingRowClick: function packingRowClick(row) {
      console.log(row);
      this.selectedPackingRow = row;
    },
    showPackinglist: function showPackinglist(id, type) {
      console.log(id);
      console.log(type);
      this.declarationID = id;
      this.declarationType = type;
      this.selectedPackingRow = [];
      this.packinglistDialogModal = true;
    },
    getDeclarationData: function getDeclarationData() {
      var _this4 = this;

      this.dataLoading = true;
      var obj = {
        "declarationtypename": "出口报关单"
      };
      _declarationAPI2.default.getDeclaration({}).then(function (data) {
        console.log(data);
        _this4.declarationData = data.data;
        _this4.total = data.total;
        _this4.dataLoading = false;
      });
    },
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    handleSizeChange: function handleSizeChange(val) {
      this.pageSize = val;
      this.getDeclarationData();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.currentPage = val;
      this.getDeclarationData();
    },
    expandRow: function expandRow(row) {
      this.declarationType = row.declarationtype;
      this.declarationID = row.id;
    },
    addClick: function addClick() {
      this.editMode = 0;
      this.tmpDeclaration = {
        declarationtype: 'import'
      };
      this.declarationID = Math.floor(Math.random() * 999999) + 1;
      this.declarationDialogmodel = true;
      this.selectedPackingRow = [];
    },
    editClick: function editClick() {
      var _this5 = this;

      _declarationAPI2.default.getDeclarationById(this.selectedRows[0].id).then(function (data) {
        console.log(data);
        _this5.editMode = 1;
        _this5.tmpDeclaration = data.data;
        _this5.declarationDialogmodel = true;
        _this5.selectedPackingRow = [];
      });
    },
    deleteClick: function deleteClick() {
      var _this6 = this;

      var rowIds = [];
      this.selectedRows.forEach(function (row) {
        rowIds.push(row.id);
      });
      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action !== 'confirm') {
            done();
          }
          instance.confirmButtonLoading = true;

          return _declarationAPI2.default.deleteDeclaration(rowIds).then(function (data) {
            instance.confirmButtonLoading = false;
            done(data);
            if (data.status == 1) {
              _this6.$notify({
                title: '成功',
                message: data.message,
                type: 'success',
                duration: 2000
              });
              _this6.getDeclarationData();
            }
          });
        }
      }).catch(function () {
        _this6.$notify.error({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        });
      });
    },
    returnMain: function returnMain() {
      this.getDeclarationData();
      this.declarationDialogmodel = false;
    },
    confirm: function confirm() {
      var _this7 = this;

      this.declarationTypeOptions.forEach(function (o) {
        if (o.key == _this7.tmpDeclaration.declarationtype) {
          Vue.set(_this7.tmpDeclaration, 'declarationtypename', o.value);
          return;
        }
      });
      if (this.editMode == 1) {
        _declarationAPI2.default.updateDeclaration(this.tmpDeclaration).then(function (data) {
          if (data.status == 1) {
            _this7.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000
            });
          }
        });
      } else {
        Vue.set(this.tmpDeclaration, 'id', this.declarationID);
        _declarationAPI2.default.addDeclaration(this.tmpDeclaration).then(function (data) {
          if (data.status == 1) {
            _this7.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000
            });
          }
          _this7.tmpDeclaration = {
            declarationtype: _this7.tmpDeclaration.declarationtype
          };
        });
      }
    }
  },
  created: function created() {
    this.clientWidth = document.documentElement.clientWidth - 200;
    this.clientHeight = document.documentElement.clientHeight - 200;
    this.getDeclarationData();
  },

  components: {
    'packinglist-table': _packinglistTable2.default
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("075387e6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-783a2bd6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./packinglistTable.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-783a2bd6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./packinglistTable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.pack-table[data-v-783a2bd6] {\n  font-size: 10px;\n  min-width: 100%;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/form/components/packinglistTable.vue?52441166"],"names":[],"mappings":";AAoDA;EACA,gBAAA;EACA,gBAAA;CACA","file":"packinglistTable.vue","sourcesContent":["<template>\n  <div>\n    <el-table :data=\"packinglistData\" tooltip-effect=\"dark\" class=\"pack-table\" highlight-current-row @row-click=\"rowClick\">\n      <el-table-column type=\"index\" label=\"项号\" width=\"60px\"></el-table-column>\n      <el-table-column prop=\"id\" min-width=\"90px\" label=\"商品编号\"></el-table-column>\n      <el-table-column prop=\"name\" min-width=\"200px\" label=\"商品名称、规格型号\"></el-table-column>\n      <el-table-column prop=\"number\" min-width=\"80px\" label=\"数量及单位\"></el-table-column>\n      <el-table-column prop=\"singleprice\" min-width=\"60px\" label=\"单价\"></el-table-column>\n      <el-table-column prop=\"totalprice\" min-width=\"60px\" label=\"总价\"></el-table-column>\n      <el-table-column v-if=\"declarationType == 'import'\" min-width=\"80px\" prop=\"productcountry\" label=\"原产国\"></el-table-column>\n      <el-table-column v-else prop=\"productcountry\" min-width=\"80px\" label=\"最终目的国\"></el-table-column>\n      <el-table-column prop=\"currency\" min-width=\"60px\" label=\"币制\"></el-table-column>\n      <el-table-column prop=\"exemption\" min-width=\"60px\" label=\"征免\"></el-table-column>\n    </el-table>\n  </div>\n</template>\n\n<script>\nimport packinglistAPI from '../api/packinglistAPI.js';\n//import '../mock/declaration.js';\n\nexport default {\n  data() {\n    return {\n      packinglistData: []\n    }\n  },\n  watch: {\n    declarationID() {\n      packinglistAPI.getPackingList(this.declarationID).then(data => {\n        this.packinglistData = data.data;\n      })\n    }\n  },\n  mounted() {\n    packinglistAPI.getPackingList(this.declarationID).then(data => {\n      this.packinglistData = data.data;\n    })\n  },\n  methods: {\n    rowClick(row) {\n      this.$emit('row-click', row);\n    }\n  },\n  props: [\n    'declarationID',\n    'declarationType'\n  ]\n}\n</script>\n\n<style scoped>\n.pack-table {\n  font-size: 10px;\n  min-width: 100%;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _packinglistAPI = __webpack_require__(7);

var _packinglistAPI2 = _interopRequireDefault(_packinglistAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import '../mock/declaration.js';

exports.default = {
  data: function data() {
    return {
      packinglistData: []
    };
  },

  watch: {
    declarationID: function declarationID() {
      var _this = this;

      _packinglistAPI2.default.getPackingList(this.declarationID).then(function (data) {
        _this.packinglistData = data.data;
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    _packinglistAPI2.default.getPackingList(this.declarationID).then(function (data) {
      _this2.packinglistData = data.data;
    });
  },

  methods: {
    rowClick: function rowClick(row) {
      this.$emit('row-click', row);
    }
  },
  props: ['declarationID', 'declarationType']
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-table', {
    staticClass: "pack-table",
    attrs: {
      "data": _vm.packinglistData,
      "tooltip-effect": "dark",
      "highlight-current-row": ""
    },
    on: {
      "row-click": _vm.rowClick
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "label": "项号",
      "width": "60px"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "id",
      "min-width": "90px",
      "label": "商品编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "min-width": "200px",
      "label": "商品名称、规格型号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "number",
      "min-width": "80px",
      "label": "数量及单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "singleprice",
      "min-width": "60px",
      "label": "单价"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "totalprice",
      "min-width": "60px",
      "label": "总价"
    }
  }), _vm._v(" "), (_vm.declarationType == 'import') ? _c('el-table-column', {
    attrs: {
      "min-width": "80px",
      "prop": "productcountry",
      "label": "原产国"
    }
  }) : _c('el-table-column', {
    attrs: {
      "prop": "productcountry",
      "min-width": "80px",
      "label": "最终目的国"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "currency",
      "min-width": "60px",
      "label": "币制"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "exemption",
      "min-width": "60px",
      "label": "征免"
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-783a2bd6", module.exports)
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (!_vm.declarationDialogmodel) ? _c('div', {
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
      "disabled": _vm.selectedRows.length !== 1
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
  }), _vm._v(" 删除")])], 1), _vm._v(" "), _c('div', {
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
      value: (_vm.searchword),
      callback: function($$v) {
        _vm.searchword = $$v
      },
      expression: "searchword"
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
  }, [_vm._v("搜索")])], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.dataLoading),
      expression: "dataLoading"
    }],
    ref: "declarationTable",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.declarationData,
      "tooltip-effect": "dark",
      "height": _vm.clientHeight,
      "highlight-current-row": ""
    },
    on: {
      "selection-change": _vm.onSelectionChange,
      "expand": _vm.expandRow
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
            "label-width": "160px"
          }
        }, [_c('el-form-item', {
          attrs: {
            "label": "报关单类型："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationtypename))])]), _c('br'), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "预录入编号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.preentrynumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "海关编号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.customsnumber))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "进口口岸："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportport))])]) : _c('el-form-item', {
          attrs: {
            "label": "出口口岸："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportport))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "备案号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.recordnumber))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "进口日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportdate))])]) : _c('el-form-item', {
          attrs: {
            "label": "出口日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportdate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "申报日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationdate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "经营单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.managementunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "运输方式："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "运输工具名称："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingtools))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "提运单号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingnumbers))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "收货单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.forwardingunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "贸易方式："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.tradingtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "征免性质："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.exemptionnature))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "征税比例："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.settlementtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "许可证号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.licensekey))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "启运国："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.startorarrivalcountry))])]) : _c('el-form-item', {
          attrs: {
            "label": "运抵国："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.startorarrivalcountry))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "装货港："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.loadingorfingerport))])]) : _c('el-form-item', {
          attrs: {
            "label": "指运港："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.loadingorfingerport))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "境内目的地："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.destinationorconsignmentplace))])]) : _c('el-form-item', {
          attrs: {
            "label": "境内货源地："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.destinationorconsignmentplace))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "批准文号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.approvalnumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "成交方式："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.transactionmethod))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "运费："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.freight))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "保费："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.premium))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "杂费："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.incidental))])]), _c('br'), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "合同协议号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.agreementnumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "件数："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.goodsnumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "包装种类："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.packagingtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "毛重（千克）："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.grossweight))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "净重（千克）："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.netweight))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "集装箱号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.containernumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "随附单证："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.documentsattached))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "用途："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.purposeormanufacturer))])]) : _c('el-form-item', {
          attrs: {
            "label": "生产厂家："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.purposeormanufacturer))])]), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "90%"
          },
          attrs: {
            "label": "标记唛码及备注："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingmarksandremarks))])]), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "100%"
          },
          attrs: {
            "label": "商品：",
            "label-width": "60px"
          }
        }, [_c('packinglist-table', {
          attrs: {
            "declarationID": _vm.declarationID,
            "declarationType": _vm.declarationType
          }
        })], 1), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "90%"
          },
          attrs: {
            "label": "税费征收情况："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.taxpaidornot))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "录入员："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.entryclerk))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "录入单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.entryunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "报关员："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.customsbroker))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "申报单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "单位地址："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.unitaddress))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "邮编："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.zipcode))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "电话："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.telephone))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "制填日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.fillingdate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "录入日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.entrydate))])])], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customsnumber",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "海关编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationtypename",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "报关单类型"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "importorexportport",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "海关口岸"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "20%",
      "label": "商品详情"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text"
          }
        }, [_c('span', {
          staticStyle: {
            "color": "green"
          },
          on: {
            "click": function($event) {
              _vm.showPackinglist(scope.row.id, scope.row.declarationtype)
            }
          }
        }, [_vm._v("查看商品")])])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationunit",
      "show-overflow-tooltip": "",
      "min-width": "30%",
      "label": "申报单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationdate",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "申报日期"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "entrydate",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "录入日期"
    }
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
      "title": "商品列表详情",
      "visible": _vm.packinglistDialogModal,
      "size": "large"
    },
    on: {
      "update:visible": function($event) {
        _vm.packinglistDialogModal = $event
      }
    }
  }, [_c('el-toolbar', {
    staticStyle: {
      "margin-bottom": "20px"
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
      "click": _vm.addPackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v("添加")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedPackingRow.length === 0
    },
    on: {
      "click": _vm.editPackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedPackingRow.length === 0
    },
    on: {
      "click": _vm.deletePackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-remove"
  }), _vm._v("删除")])], 1), _vm._v(" "), _c('packinglist-table', {
    attrs: {
      "declarationID": _vm.declarationID,
      "declarationType": _vm.declarationType
    },
    on: {
      "row-click": _vm.packingRowClick
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.editMode == 1 ? '编辑商品信息' : '添加商品',
      "visible": _vm.packingdetailDialogModal,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.packingdetailDialogModal = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "label-position": "right",
      "model": _vm.tmpPacking,
      "inline": "",
      "label-width": "200px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "商品名称、规格型号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.tmpPacking.name),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "name", $$v)
      },
      expression: "tmpPacking.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "数量及单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.number),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "number", $$v)
      },
      expression: "tmpPacking.number"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单价："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.singleprice),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "singleprice", $$v)
      },
      expression: "tmpPacking.singleprice"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "总价："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.totalprice),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "totalprice", $$v)
      },
      expression: "tmpPacking.totalprice"
    }
  })], 1), _vm._v(" "), (this.declarationType == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "原产国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.productcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "productcountry", $$v)
      },
      expression: "tmpPacking.productcountry"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "最终目的国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.productcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "productcountry", $$v)
      },
      expression: "tmpPacking.productcountry"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "币制："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.currency),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "currency", $$v)
      },
      expression: "tmpPacking.currency"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征免："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.exemption),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "exemption", $$v)
      },
      expression: "tmpPacking.exemption"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.packingdetailDialogModal = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.packingdetailConfirm
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1) : _c('div', [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.returnMain
    }
  }, [_c('i', {
    staticClass: "fa fa-chevron-left"
  }), _vm._v("返回")]), _vm._v(" "), _c('span', {
    staticClass: "button-separator"
  }), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.confirm
    }
  }, [_c('i', {
    staticClass: "fa fa-save"
  }), _vm._v(" "), (_vm.editMode == 1) ? _c('span', [_vm._v("保存编辑")]) : _c('span', [_vm._v("确认新建")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap",
    staticStyle: {
      "background-color": "#f5f5f5"
    }
  }, [_c('el-form', {
    staticClass: "e-form",
    attrs: {
      "label-position": "right",
      "model": _vm.tmpDeclaration,
      "label-width": "160px"
    }
  }, [_c('div', {
    staticClass: "form-title"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', {
    attrs: {
      "label": "报关单类型："
    }
  }, [_c('el-select', {
    staticClass: "e-input",
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.tmpDeclaration.declarationtype),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "declarationtype", $$v)
      },
      expression: "tmpDeclaration.declarationtype"
    }
  }, _vm._l((_vm.declarationTypeOptions), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "预录入编号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.preentrynumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "preentrynumber", $$v)
      },
      expression: "tmpDeclaration.preentrynumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "海关编号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.customsnumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "customsnumber", $$v)
      },
      expression: "tmpDeclaration.customsnumber"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "进口口岸："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.importorexportport),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "importorexportport", $$v)
      },
      expression: "tmpDeclaration.importorexportport"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "进口日期："
    }
  }, [_c('el-date-picker', {
    staticClass: "e-input",
    attrs: {
      "type": "date",
      "placeholder": "选择进口日期"
    },
    model: {
      value: (_vm.tmpDeclaration.importorexportdate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "importorexportdate", $$v)
      },
      expression: "tmpDeclaration.importorexportdate"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "出口日期："
    }
  }, [_c('el-date-picker', {
    staticClass: "e-input",
    attrs: {
      "type": "date",
      "placeholder": "选择出口日期"
    },
    model: {
      value: (_vm.tmpDeclaration.importorexportdate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "importorexportdate", $$v)
      },
      expression: "tmpDeclaration.importorexportdate"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "申报日期："
    }
  }, [_c('el-date-picker', {
    staticClass: "e-input",
    attrs: {
      "type": "date",
      "placeholder": "选择申报日期"
    },
    model: {
      value: (_vm.tmpDeclaration.declarationdate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "declarationdate", $$v)
      },
      expression: "tmpDeclaration.declarationdate"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("单位信息")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', {
    attrs: {
      "label": "经营单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.managementunit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "managementunit", $$v)
      },
      expression: "tmpDeclaration.managementunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输方式："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.shippingtype),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingtype", $$v)
      },
      expression: "tmpDeclaration.shippingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输工具名称："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.shippingtools),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingtools", $$v)
      },
      expression: "tmpDeclaration.shippingtools"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "提运单号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.shippingnumbers),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingnumbers", $$v)
      },
      expression: "tmpDeclaration.shippingnumbers"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收货单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.forwardingunit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "forwardingunit", $$v)
      },
      expression: "tmpDeclaration.forwardingunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贸易方式："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.tradingtype),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "tradingtype", $$v)
      },
      expression: "tmpDeclaration.tradingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征免性质："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.exemptionnature),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "exemptionnature", $$v)
      },
      expression: "tmpDeclaration.exemptionnature"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征税比例："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.settlementtype),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "settlementtype", $$v)
      },
      expression: "tmpDeclaration.settlementtype"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("货物信息")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', {
    attrs: {
      "label": "许可证号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.licensekey),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "licensekey", $$v)
      },
      expression: "tmpDeclaration.licensekey"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "启运国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.startorarrivalcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "startorarrivalcountry", $$v)
      },
      expression: "tmpDeclaration.startorarrivalcountry"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "运抵国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.startorarrivalcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "startorarrivalcountry", $$v)
      },
      expression: "tmpDeclaration.startorarrivalcountry"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "装货港："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.loadingorfingerport),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "loadingorfingerport", $$v)
      },
      expression: "tmpDeclaration.loadingorfingerport"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "指运港："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.loadingorfingerport),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "loadingorfingerport", $$v)
      },
      expression: "tmpDeclaration.loadingorfingerport"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "境内目的地："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.destinationorconsignmentplace),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "destinationorconsignmentplace", $$v)
      },
      expression: "tmpDeclaration.destinationorconsignmentplace"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "境内货源地："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.destinationorconsignmentplace),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "destinationorconsignmentplace", $$v)
      },
      expression: "tmpDeclaration.destinationorconsignmentplace"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "批准文号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.approvalnumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "approvalnumber", $$v)
      },
      expression: "tmpDeclaration.approvalnumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "成交方式："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.transactionmethod),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "transactionmethod", $$v)
      },
      expression: "tmpDeclaration.transactionmethod"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运费："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.freight),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "freight", $$v)
      },
      expression: "tmpDeclaration.freight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "保费："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.premium),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "premium", $$v)
      },
      expression: "tmpDeclaration.premium"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "杂费："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.incidental),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "incidental", $$v)
      },
      expression: "tmpDeclaration.incidental"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "合同协议号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.agreementnumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "agreementnumber", $$v)
      },
      expression: "tmpDeclaration.agreementnumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "件数："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.goodsnumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "goodsnumber", $$v)
      },
      expression: "tmpDeclaration.goodsnumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "包装种类："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.packagingtype),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "packagingtype", $$v)
      },
      expression: "tmpDeclaration.packagingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "毛重（千克）："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.grossweight),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "grossweight", $$v)
      },
      expression: "tmpDeclaration.grossweight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "净重（千克）："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.netweight),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "netweight", $$v)
      },
      expression: "tmpDeclaration.netweight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "集装箱号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.containernumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "containernumber", $$v)
      },
      expression: "tmpDeclaration.containernumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "随附单证："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.documentsattached),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "documentsattached", $$v)
      },
      expression: "tmpDeclaration.documentsattached"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "用途："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.purposeormanufacturer),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "purposeormanufacturer", $$v)
      },
      expression: "tmpDeclaration.purposeormanufacturer"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "生产厂家："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.purposeormanufacturer),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "purposeormanufacturer", $$v)
      },
      expression: "tmpDeclaration.purposeormanufacturer"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "90%"
    },
    attrs: {
      "label": "标记唛码及备注："
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "450px"
    },
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.tmpDeclaration.shippingmarksandremarks),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingmarksandremarks", $$v)
      },
      expression: "tmpDeclaration.shippingmarksandremarks"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "90%"
    },
    attrs: {
      "label": "税费征收情况："
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "450px"
    },
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.tmpDeclaration.taxpaidornot),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "taxpaidornot", $$v)
      },
      expression: "tmpDeclaration.taxpaidornot"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("商品列表")]), _vm._v(" "), _c('div', {
    staticClass: "packinglist-panel"
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
      "click": _vm.addPackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v("添加")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedPackingRow.length === 0
    },
    on: {
      "click": _vm.editPackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedPackingRow.length === 0
    },
    on: {
      "click": _vm.deletePackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-remove"
  }), _vm._v("删除")])], 1), _vm._v(" "), _c('packinglist-table', {
    attrs: {
      "declarationID": _vm.tmpDeclaration.id,
      "declarationType": _vm.tmpDeclaration.declarationtype
    },
    on: {
      "row-click": _vm.packingRowClick
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("操作相关")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', {
    attrs: {
      "label": "录入员："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.entryclerk),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "entryclerk", $$v)
      },
      expression: "tmpDeclaration.entryclerk"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "录入单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.entryunit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "entryunit", $$v)
      },
      expression: "tmpDeclaration.entryunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "报关员："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.customsbroker),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "customsbroker", $$v)
      },
      expression: "tmpDeclaration.customsbroker"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "申报单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.declarationunit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "declarationunit", $$v)
      },
      expression: "tmpDeclaration.declarationunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单位地址："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.unitaddress),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "unitaddress", $$v)
      },
      expression: "tmpDeclaration.unitaddress"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "邮编："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.zipcode),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "zipcode", $$v)
      },
      expression: "tmpDeclaration.zipcode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "电话："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.telephone),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "telephone", $$v)
      },
      expression: "tmpDeclaration.telephone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "制填日期："
    }
  }, [_c('el-date-picker', {
    staticClass: "e-input",
    attrs: {
      "type": "date",
      "placeholder": "选择制填日期"
    },
    model: {
      value: (_vm.tmpDeclaration.fillingdate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "fillingdate", $$v)
      },
      expression: "tmpDeclaration.fillingdate"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "100px"
    }
  })])], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.editMode == 1 ? '编辑商品信息' : '添加商品',
      "visible": _vm.packingdetailDialogModal,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.packingdetailDialogModal = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "label-position": "right",
      "model": _vm.tmpPacking,
      "inline": "",
      "label-width": "200px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "商品名称、规格型号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.tmpPacking.name),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "name", $$v)
      },
      expression: "tmpPacking.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "数量及单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.number),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "number", $$v)
      },
      expression: "tmpPacking.number"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单价："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.singleprice),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "singleprice", $$v)
      },
      expression: "tmpPacking.singleprice"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "总价："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.totalprice),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "totalprice", $$v)
      },
      expression: "tmpPacking.totalprice"
    }
  })], 1), _vm._v(" "), (this.declarationType == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "原产国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.productcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "productcountry", $$v)
      },
      expression: "tmpPacking.productcountry"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "最终目的国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.productcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "productcountry", $$v)
      },
      expression: "tmpPacking.productcountry"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "币制："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.currency),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "currency", $$v)
      },
      expression: "tmpPacking.currency"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征免："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.exemption),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "exemption", $$v)
      },
      expression: "tmpPacking.exemption"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.packingdetailDialogModal = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.packingdetailConfirm
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f739cca0", module.exports)
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(48)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(51),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e4d7f8d8",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\form\\declarationRetrieval.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] declarationRetrieval.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e4d7f8d8", Component.options)
  } else {
    hotAPI.reload("data-v-e4d7f8d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("5253b34a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e4d7f8d8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./declarationRetrieval.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e4d7f8d8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./declarationRetrieval.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-e4d7f8d8] {\n  padding: 10px;\n}\n.search-bar[data-v-e4d7f8d8] {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-e4d7f8d8] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-e4d7f8d8] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-e4d7f8d8] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.page-wrap[data-v-e4d7f8d8] {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n.e-input[data-v-e4d7f8d8] {\n  width: 270px;\n}\n.search-select[data-v-e4d7f8d8] {\n  width: 150px;\n}\n.form-title[data-v-e4d7f8d8] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 6%;\n  padding: 20px 0 5px 0;\n}\n.form-panel[data-v-e4d7f8d8] {\n  width: 80%;\n  margin-left: 5%;\n  padding: 20px 0 0 0;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.s-input[data-v-e4d7f8d8] {\n  width: 400px;\n}\n.search-form-title[data-v-e4d7f8d8] {\n  padding: 20px 0;\n}\n.packinglist-panel[data-v-e4d7f8d8] {\n  width: 80%;\n  margin-left: 5%;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/form/declarationRetrieval.vue?03979707"],"names":[],"mappings":";AA27BA;EACA,cAAA;CACA;AAEA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,SAAA;EACA,oBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;CACA;AACA;EACA,WAAA;EACA,gBAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,gBAAA;CACA;AACA;EACA,WAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;CACA","file":"declarationRetrieval.vue","sourcesContent":["<template>\n  <div v-if=\"advancedSearchModal\">\n    <div style=\"width:100%;text-align:center; margin:auto;\">\n      <el-form label-position=\"left\" :model=\"searchDeclaration\" label-width=\"200px\" class=\"e-form\">\n      <div style=\"padding-top:20px;width:900px; margin:auto;overflow:hidden;\">\n        <h3 style=\"float:left;width:200px;line-height:33px;text-align:left;\">高级搜索</h3>\n        <div>\n          <el-input style=\"width:620px;padding-right:10px;\" v-model=\"searchDeclaration.seachword\"></el-input>\n          <el-button style=\"width:70px;\" @click=\"doAdvanceSearch\">搜　索</el-button>\n        </div>\n      </div>\n      <hr style=\"color:#CCC;width:100%;\"></hr>\n      <div style=\"width:900px;margin:auto;text-align:left;\">\n          <h3 class=\"search-form-title\">高级选项</h3>\n          <el-form-item label=\"报关单类型\">\n            <el-select class=\"s-input\" v-model=\"searchDeclaration.declarationtype\" placeholder=\"请选择\">\n              <el-option v-for=\"item in declarationTypeOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n              </el-option>\n            </el-select>\n          </el-form-item>\n          <el-form-item label=\"预录入编号\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.preentrynumber\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"海关编号\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.customsnumber\"></el-input>\n          </el-form-item>\n          <el-form-item v-if=\"searchDeclaration.declarationtype == 'import'\" label=\"进口口岸\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.importorexportport\"></el-input>\n          </el-form-item>\n          <el-form-item v-else label=\"出口口岸\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.importorexportport\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"备案号\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.recordnumber\"></el-input>\n          </el-form-item>\n          <el-form-item v-if=\"searchDeclaration.declarationtype == 'import'\" label=\"进口日期\">\n            <el-date-picker v-model=\"searchDeclaration.importorexportdate\" type=\"date\" class=\"s-input\" placeholder=\"选择进口日期\">\n            </el-date-picker>\n          </el-form-item>\n          <el-form-item v-else label=\"出口日期\">\n            <el-date-picker v-model=\"searchDeclaration.importorexportdate\" type=\"date\" class=\"s-input\" placeholder=\"选择出口日期\">\n            </el-date-picker>\n          </el-form-item>\n          <el-form-item label=\"申报日期\">\n            <el-date-picker v-model=\"searchDeclaration.declarationdate\" type=\"date\" class=\"s-input\" placeholder=\"选择申报日期\">\n            </el-date-picker>\n          </el-form-item>\n          <h3 class=\"search-form-title\">单位相关选项</h3>\n          <el-form-item label=\"经营单位\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.managementunit\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"运输方式\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.shippingtype\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"运输工具名称\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.shippingtools\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"提运单号\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.shippingnumbers\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"收货单位\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.forwardingunit\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"贸易方式\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.tradingtype\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"征免性质\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.exemptionnature\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"征税比例\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.settlementtype\"></el-input>\n          </el-form-item>\n          <h3 class=\"search-form-title\">运输货物选项</h3>\n          <el-form-item label=\"许可证号\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.licensekey\"></el-input>\n          </el-form-item>\n          <el-form-item v-if=\"searchDeclaration.declarationtype == 'import'\" label=\"启运国\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.startorarrivalcountry\"></el-input>\n          </el-form-item>\n          <el-form-item v-else label=\"运抵国\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.startorarrivalcountry\"></el-input>\n          </el-form-item>\n          <el-form-item v-if=\"searchDeclaration.declarationtype == 'import'\" label=\"装货港\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.loadingorfingerport\"></el-input>\n          </el-form-item>\n          <el-form-item v-else label=\"指运港\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.loadingorfingerport\"></el-input>\n          </el-form-item>\n          <el-form-item v-if=\"searchDeclaration.declarationtype == 'import'\" label=\"境内目的地\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.destinationorconsignmentplace\"></el-input>\n          </el-form-item>\n          <el-form-item v-else label=\"境内货源地\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.destinationorconsignmentplace\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"批准文号\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.approvalnumber\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"成交方式\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.transactionmethod\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"运费\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.freight\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"保费\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.premium\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"杂费\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.incidental\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"合同协议号\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.agreementnumber\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"件数\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.goodsnumber\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"包装种类\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.packagingtype\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"毛重（千克）\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.grossweight\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"净重（千克）\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.netweight\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"集装箱号\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.containernumber\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"随附单证\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.documentsattached\"></el-input>\n          </el-form-item>\n          <el-form-item v-if=\"searchDeclaration.declarationtype == 'import'\" label=\"用途\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.purposeormanufacturer\"></el-input>\n          </el-form-item>\n          <el-form-item v-else label=\"生产厂家\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.purposeormanufacturer\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"标记唛码及备注\" style=\"width:90%\">\n            <el-input type=\"textarea\" v-model=\"searchDeclaration.shippingmarksandremarks\" :rows=\"3\" style=\"width:450px;\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"税费征收情况\" style=\"width:90%\">\n            <el-input type=\"textarea\" v-model=\"searchDeclaration.taxpaidornot\" :rows=\"3\" style=\"width:450px;\"></el-input>\n          </el-form-item>\n          <h3 class=\"search-form-title\">相关信息选项</h3>\n          <el-form-item label=\"录入员：\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.entryclerk\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"录入单位：\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.entryunit\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"报关员：\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.customsbroker\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"申报单位：\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.declarationunit\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"单位地址：\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.unitaddress\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"邮编：\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.zipcode\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"电话：\">\n            <el-input class=\"s-input\" v-model=\"searchDeclaration.telephone\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"制填日期：\">\n            <el-date-picker v-model=\"searchDeclaration.fillingdate\" type=\"date\" class=\"s-input\" placeholder=\"选择制填日期\">\n            </el-date-picker>\n          </el-form-item>\n          <div style=\"height:100px;\"></div>\n\n        </div>\n      </el-form>\n    </div>\n  </div>\n  <div v-else-if=\"!declarationDialogmodel\" :style=\"{width:clientWidth+'px'}\">\n    <el-toolbar>\n      <div style=\"width:100%;text-align:left;\">\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addClick\">\n        <i class=\"fa fa-plus\"></i> 新建</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length !== 1\" @click=\"editClick\">\n        <i class=\"fa fa-edit\"></i> 编辑</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0\" @click=\"deleteClick\">\n        <i class=\"fa fa-remove\"></i> 删除</el-button>\n      <div style=\"float:right; margin-right:10px;\">\n        <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"advanceSearch\">\n        <i class=\"fa fa-search\"></i> 高级搜索</el-button>\n      </div>\n      </div>\n    </el-toolbar>\n    <div class=\"main-content-wrap\">\n      <div class=\"search-bar\">\n        排序：\n        <el-select size=\"small\" v-model=\"sort\" class=\"search-select\">\n          <el-option v-for=\"item in sortOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        检索字段：\n        <el-select size=\"small\" v-model=\"retrieval\" class=\"search-select\">\n          <el-option v-for=\"item in retrievalOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        <el-input style=\"width:200px\" size=\"small\" v-model=\"searchword\"></el-input>\n       <!-- <el-select size=\"small\" v-model=\"logic\" class=\"search-select\">\n          <el-option v-for=\"item in logicOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>-->\n        <el-button size=\"small\" type=\"primary\" @click=\"getDeclarationData\" style=\"width:60px;\">搜索</el-button>\n      </div>\n      <el-table :data=\"declarationData\" ref=\"declarationTable\" v-loading=\"dataLoading\" tooltip-effect=\"dark\" style=\"width:100%\" :height=\"clientHeight\" highlight-current-row @selection-change=\"onSelectionChange\" @expand=\"expandRow\">\n        <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n        <el-table-column type=\"expand\">\n          <template slot-scope=\"props\">\n            <el-form label-position=\"left\" inline class=\"demo-table-expand\" label-width=\"160px\">\n              <el-form-item label=\"报关单类型：\">\n                <span>{{props.row.declarationtypename}}</span>\n              </el-form-item><br/>\n              <el-form-item label=\"预录入编号：\">\n                <span>{{props.row.preentrynumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"海关编号：\">\n                <span>{{props.row.customsnumber}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"进口口岸：\">\n                <span>{{props.row.importorexportport}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"出口口岸：\">\n                <span>{{props.row.importorexportport}}</span>\n              </el-form-item>\n              <el-form-item label=\"备案号：\">\n                <span>{{props.row.recordnumber}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"进口日期：\">\n                <span>{{props.row.importorexportdate}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"出口日期：\">\n                <span>{{props.row.importorexportdate}}</span>\n              </el-form-item>\n              <el-form-item label=\"申报日期：\">\n                <span>{{props.row.declarationdate}}</span>\n              </el-form-item>\n              <el-form-item label=\"经营单位：\">\n                <span>{{props.row.managementunit}}</span>\n              </el-form-item>\n              <el-form-item label=\"运输方式：\">\n                <span>{{props.row.shippingtype}}</span>\n              </el-form-item>\n              <el-form-item label=\"运输工具名称：\">\n                <span>{{props.row.shippingtools}}</span>\n              </el-form-item>\n              <el-form-item label=\"提运单号：\">\n                <span>{{props.row.shippingnumbers}}</span>\n              </el-form-item>\n              <el-form-item label=\"收货单位：\">\n                <span>{{props.row.forwardingunit}}</span>\n              </el-form-item>\n              <el-form-item label=\"贸易方式：\">\n                <span>{{props.row.tradingtype}}</span>\n              </el-form-item>\n              <el-form-item label=\"征免性质：\">\n                <span>{{props.row.exemptionnature}}</span>\n              </el-form-item>\n              <el-form-item label=\"征税比例：\">\n                <span>{{props.row.settlementtype}}</span>\n              </el-form-item>\n              <el-form-item label=\"许可证号：\">\n                <span>{{props.row.licensekey}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"启运国：\">\n                <span>{{props.row.startorarrivalcountry}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"运抵国：\">\n                <span>{{props.row.startorarrivalcountry}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"装货港：\">\n                <span>{{props.row.loadingorfingerport}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"指运港：\">\n                <span>{{props.row.loadingorfingerport}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"境内目的地：\">\n                <span>{{props.row.destinationorconsignmentplace}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"境内货源地：\">\n                <span>{{props.row.destinationorconsignmentplace}}</span>\n              </el-form-item>\n              <el-form-item label=\"批准文号：\">\n                <span>{{props.row.approvalnumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"成交方式：\">\n                <span>{{props.row.transactionmethod}}</span>\n              </el-form-item>\n              <el-form-item label=\"运费：\">\n                <span>{{props.row.freight}}</span>\n              </el-form-item>\n              <el-form-item label=\"保费：\">\n                <span>{{props.row.premium}}</span>\n              </el-form-item>\n              <el-form-item label=\"杂费：\">\n                <span>{{props.row.incidental}}</span>\n              </el-form-item><br/>\n              <el-form-item label=\"合同协议号：\">\n                <span>{{props.row.agreementnumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"件数：\">\n                <span>{{props.row.goodsnumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"包装种类：\">\n                <span>{{props.row.packagingtype}}</span>\n              </el-form-item>\n              <el-form-item label=\"毛重（千克）：\">\n                <span>{{props.row.grossweight}}</span>\n              </el-form-item>\n              <el-form-item label=\"净重（千克）：\">\n                <span>{{props.row.netweight}}</span>\n              </el-form-item>\n              <el-form-item label=\"集装箱号：\">\n                <span>{{props.row.containernumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"随附单证：\">\n                <span>{{props.row.documentsattached}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"用途：\">\n                <span>{{props.row.purposeormanufacturer}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"生产厂家：\">\n                <span>{{props.row.purposeormanufacturer}}</span>\n              </el-form-item>\n              <el-form-item label=\"标记唛码及备注：\" style=\"width:90%\">\n                <span>{{props.row.shippingmarksandremarks}}</span>\n              </el-form-item>\n              <el-form-item label=\"商品：\" label-width=\"60px\" style=\"width:100%\">\n                <packinglist-table :declarationID=\"declarationID\" :declarationType=\"declarationType\">\n                </packinglist-table>\n              </el-form-item>\n              <el-form-item label=\"税费征收情况：\" style=\"width:90%\">\n                <span>{{props.row.taxpaidornot}}</span>\n              </el-form-item>\n              <el-form-item label=\"录入员：\">\n                <span>{{props.row.entryclerk}}</span>\n              </el-form-item>\n              <el-form-item label=\"录入单位：\">\n                <span>{{props.row.entryunit}}</span>\n              </el-form-item>\n              <el-form-item label=\"报关员：\">\n                <span>{{props.row.customsbroker}}</span>\n              </el-form-item>\n              <el-form-item label=\"申报单位：\">\n                <span>{{props.row.declarationunit}}</span>\n              </el-form-item>\n              <el-form-item label=\"单位地址：\">\n                <span>{{props.row.unitaddress}}</span>\n              </el-form-item>\n              <el-form-item label=\"邮编：\">\n                <span>{{props.row.zipcode}}</span>\n              </el-form-item>\n              <el-form-item label=\"电话：\">\n                <span>{{props.row.telephone}}</span>\n              </el-form-item>\n              <el-form-item label=\"制填日期：\">\n                <span>{{props.row.fillingdate}}</span>\n              </el-form-item>\n              <el-form-item label=\"录入日期：\">\n                <span>{{props.row.entrydate}}</span>\n              </el-form-item>\n            </el-form>\n          </template>\n        </el-table-column>\n        <el-table-column prop=\"customsnumber\" show-overflow-tooltip min-width=\"20%\" label=\"海关编号\"></el-table-column>\n        <el-table-column prop=\"declarationtypename\" show-overflow-tooltip min-width=\"20%\" label=\"报关单类型\"></el-table-column>\n        <el-table-column prop=\"importorexportport\" show-overflow-tooltip min-width=\"20%\" label=\"进口/出口口岸\"></el-table-column>\n        <el-table-column min-width=\"20%\" label=\"商品详情\">\n          <template slot-scope=\"scope\">\n            <el-button type=\"text\">\n              <span style=\"color:green;\" @click=\"showPackinglist(scope.row.id,scope.row.declarationtype)\">查看商品</span>\n            </el-button>\n          </template>\n        </el-table-column>\n        <el-table-column prop=\"declarationunit\" show-overflow-tooltip min-width=\"30%\" label=\"申报单位\"></el-table-column>\n        <el-table-column prop=\"declarationdate\" show-overflow-tooltip min-width=\"15%\" label=\"申报日期\"></el-table-column>\n        <el-table-column prop=\"entrydate\" show-overflow-tooltip min-width=\"15%\" label=\"录入日期\"></el-table-column>\n      </el-table>\n      <div class=\"page-wrap\">\n        <el-pagination @size-change=\"handleSizeChange\" @current-change=\"handleCurrentChange\" :current-page=\"currentPage\" :page-sizes=\"pageSizes\" :page-size=\"pageSize\" layout=\"total, sizes, prev, pager, next\" :total=\"total\">\n        </el-pagination>\n      </div>\n    </div>\n    <el-dialog title=\"商品列表详情\" :visible.sync=\"packinglistDialogModal\" size=\"large\">\n      <el-toolbar style=\"margin-bottom:20px;\">\n        <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addPackingClick\" style=\"margin-left:10px;\">\n          <i class=\"fa fa-plus\"></i>添加</el-button>\n        <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedPackingRow.length === 0\" @click=\"editPackingClick\">\n          <i class=\"fa fa-edit\"></i>编辑</el-button>\n        <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedPackingRow.length === 0\" @click=\"deletePackingClick\">\n          <i class=\"fa fa-remove\"></i>删除</el-button>\n      </el-toolbar>\n      <packinglist-table :declarationID=\"declarationID\" :declarationType=\"declarationType\" @row-click=\"packingRowClick\">\n      </packinglist-table>\n    </el-dialog>\n    <el-dialog :title=\"editMode==1? '编辑商品信息': '添加商品'\" :visible.sync=\"packingdetailDialogModal\" :close-on-click-modal=\"false\">\n      <el-form label-position=\"right\" :model=\"tmpPacking\" inline label-width=\"200px\">\n        <el-form-item label=\"商品编号：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.id\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"商品名称、规格型号：\">\n          <el-input class=\"e-input\" type=\"textarea\" :rows=\"3\" v-model=\"tmpPacking.name\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"数量及单位：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.number\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"单价：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.singleprice\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"总价：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.totalprice\"></el-input>\n        </el-form-item>\n        <el-form-item v-if=\"this.declarationType == 'import'\" label=\"原产国：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.productcountry\"></el-input>\n        </el-form-item>\n        <el-form-item v-else label=\"最终目的国：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.productcountry\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"币制：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.currency\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"征免：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.exemption\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"packingdetailDialogModal = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"packingdetailConfirm\">确 定</el-button>\n      </div>\n    </el-dialog>\n  </div>\n  <div v-else>\n    <el-toolbar>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"returnMain\">\n        <i class=\"fa fa-chevron-left\"></i>返回</el-button>\n        <span class=\"button-separator\"></span>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"confirm\">\n        <i class=\"fa fa-save\"></i>\n        <span v-if=\"editMode == 1\">保存编辑</span>\n        <span v-else>确认新建</span>\n      </el-button>\n    </el-toolbar>\n    <div class=\"main-content-wrap\" style=\"background-color:#f5f5f5\">\n      <el-form label-position=\"right\" :model=\"tmpDeclaration\" label-width=\"160px\" class=\"e-form\">\n        <div class=\"form-title\">基本信息</div>\n        <div class=\"form-panel\">\n        <el-form-item label=\"报关单类型：\">\n          <el-select class=\"e-input\" v-model=\"tmpDeclaration.declarationtype\" placeholder=\"请选择\">\n            <el-option v-for=\"item in declarationTypeOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n            </el-option>\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"预录入编号：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.preentrynumber\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"海关编号：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.customsnumber\"></el-input>\n        </el-form-item>\n        <el-form-item v-if=\"tmpDeclaration.declarationtype == 'import'\" label=\"进口口岸：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.importorexportport\"></el-input>\n        </el-form-item>\n        <el-form-item v-else label=\"出口口岸：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.importorexportport\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"备案号：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.recordnumber\"></el-input>\n        </el-form-item>\n        <el-form-item v-if=\"tmpDeclaration.declarationtype == 'import'\" label=\"进口日期：\">\n          <el-date-picker v-model=\"tmpDeclaration.importorexportdate\" type=\"date\" class=\"e-input\" placeholder=\"选择进口日期\">\n          </el-date-picker>\n        </el-form-item>\n        <el-form-item v-else label=\"出口日期：\">\n          <el-date-picker v-model=\"tmpDeclaration.importorexportdate\" type=\"date\" class=\"e-input\" placeholder=\"选择出口日期\">\n          </el-date-picker>\n        </el-form-item>\n        <el-form-item label=\"申报日期：\">\n          <el-date-picker v-model=\"tmpDeclaration.declarationdate\" type=\"date\" class=\"e-input\" placeholder=\"选择申报日期\">\n          </el-date-picker>\n        </el-form-item>\n        </div>\n        <div class=\"form-title\">单位信息</div>\n        <div class=\"form-panel\">\n        <el-form-item label=\"经营单位：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.managementunit\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"运输方式：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.shippingtype\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"运输工具名称：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.shippingtools\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"提运单号：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.shippingnumbers\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"收货单位：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.forwardingunit\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"贸易方式：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.tradingtype\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"征免性质：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.exemptionnature\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"征税比例：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.settlementtype\"></el-input>\n        </el-form-item>\n        </div>\n        <div class=\"form-title\">货物信息</div>\n        <div class=\"form-panel\">\n        <el-form-item label=\"许可证号：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.licensekey\"></el-input>\n        </el-form-item>\n        <el-form-item v-if=\"tmpDeclaration.declarationtype == 'import'\" label=\"启运国：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.startorarrivalcountry\"></el-input>\n        </el-form-item>\n        <el-form-item v-else label=\"运抵国：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.startorarrivalcountry\"></el-input>\n        </el-form-item>\n        <el-form-item v-if=\"tmpDeclaration.declarationtype == 'import'\" label=\"装货港：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.loadingorfingerport\"></el-input>\n        </el-form-item>\n        <el-form-item v-else label=\"指运港：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.loadingorfingerport\"></el-input>\n        </el-form-item>\n        <el-form-item v-if=\"tmpDeclaration.declarationtype == 'import'\" label=\"境内目的地：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.destinationorconsignmentplace\"></el-input>\n        </el-form-item>\n        <el-form-item v-else label=\"境内货源地：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.destinationorconsignmentplace\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"批准文号：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.approvalnumber\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"成交方式：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.transactionmethod\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"运费：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.freight\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"保费：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.premium\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"杂费：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.incidental\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"合同协议号：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.agreementnumber\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"件数：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.goodsnumber\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"包装种类：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.packagingtype\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"毛重（千克）：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.grossweight\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"净重（千克）：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.netweight\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"集装箱号：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.containernumber\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"随附单证：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.documentsattached\"></el-input>\n        </el-form-item>\n        <el-form-item v-if=\"tmpDeclaration.declarationtype == 'import'\" label=\"用途：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.purposeormanufacturer\"></el-input>\n        </el-form-item>\n        <el-form-item v-else label=\"生产厂家：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.purposeormanufacturer\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"标记唛码及备注：\" style=\"width:90%\">\n          <el-input type=\"textarea\" v-model=\"tmpDeclaration.shippingmarksandremarks\" :rows=\"3\" style=\"width:450px;\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"税费征收情况：\" style=\"width:90%\">\n          <el-input type=\"textarea\" v-model=\"tmpDeclaration.taxpaidornot\" :rows=\"3\" style=\"width:450px;\"></el-input>\n        </el-form-item>\n        </div>\n        <div class=\"form-title\">商品列表</div>\n        <div class=\"packinglist-panel\">\n            <div style=\"height:50px;background-color:#f5f5f5; padding:5px;\">\n              <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addPackingClick\" style=\"margin-left:10px;\">\n                <i class=\"fa fa-plus\"></i>添加</el-button>\n              <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedPackingRow.length === 0\" @click=\"editPackingClick\">\n                <i class=\"fa fa-edit\"></i>编辑</el-button>\n              <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedPackingRow.length === 0\" @click=\"deletePackingClick\">\n                <i class=\"fa fa-remove\"></i>删除</el-button>\n            </div>\n            <packinglist-table :declarationID=\"tmpDeclaration.id\" :declarationType=\"tmpDeclaration.declarationtype\" @row-click=\"packingRowClick\">\n            </packinglist-table>\n        </div>\n        <div class=\"form-title\">操作相关</div>\n        <div class=\"form-panel\">\n        <el-form-item label=\"录入员：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.entryclerk\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"录入单位：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.entryunit\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"报关员：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.customsbroker\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"申报单位：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.declarationunit\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"单位地址：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.unitaddress\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"邮编：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.zipcode\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"电话：\">\n          <el-input class=\"e-input\" v-model=\"tmpDeclaration.telephone\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"制填日期：\">\n          <el-date-picker v-model=\"tmpDeclaration.fillingdate\" type=\"date\" class=\"e-input\" placeholder=\"选择制填日期\">\n          </el-date-picker>\n        </el-form-item>\n        </div>\n        <div style=\"height:100px;\"></div>\n      </el-form>\n    </div>\n    <el-dialog :title=\"editMode==1? '编辑商品信息': '添加商品'\" :visible.sync=\"packingdetailDialogModal\" :close-on-click-modal=\"false\">\n      <el-form label-position=\"right\" :model=\"tmpPacking\" inline label-width=\"200px\">\n        <el-form-item label=\"商品编号：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.id\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"商品名称、规格型号：\">\n          <el-input class=\"e-input\" type=\"textarea\" :rows=\"3\" v-model=\"tmpPacking.name\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"数量及单位：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.number\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"单价：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.singleprice\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"总价：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.totalprice\"></el-input>\n        </el-form-item>\n        <el-form-item v-if=\"this.declarationType == 'import'\" label=\"原产国：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.productcountry\"></el-input>\n        </el-form-item>\n        <el-form-item v-else label=\"最终目的国：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.productcountry\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"币制：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.currency\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"征免：\">\n          <el-input class=\"e-input\" v-model=\"tmpPacking.exemption\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"packingdetailDialogModal = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"packingdetailConfirm\">确 定</el-button>\n      </div>\n    </el-dialog>\n  </div>\n</template>\n\n<script>\nimport declarationAPI from './api/declarationAPI.js';\nimport packinglistAPI from './api/packinglistAPI.js';\n//import './mock/declaration.js';\nimport packinglistTable from './components/packinglistTable.vue';\n\nexport default {\n  data() {\n    return {\n      searchDeclaration: {},\n      advancedSearchModal: true,\n      tmpPacking: {},\n      packingdetailDialogModal: false,\n      packinglistDialogModal: false,\n      declarationType: '',\n      declarationID: '',\n      clientWidth: 0,\n      clientHeight: 0,\n      searchword: '',\n      selectedRows: [],\n      selectedPackingRow: [],\n      declarationData: [],\n      currentPage: 1,\n      pageSizes: [10, 20, 50],\n      pageSize: 10,\n      total: 0,\n      editMode: 1,\n      declarationDialogmodel: false,\n      tmpDeclaration: {},\n      dataLoading: false,\n      confirmLoading: false,\n      declarationTypeOptions: [\n        { key: 'import', value: '进口报关单' },\n        { key: 'export', value: '出口报关单' },\n      ],\n      sort: '',\n      sortOptions: [\n        { key: '', value: '请选择排序' },\n        { key: 'declarationtype', value: '报关单类型' },\n        { key: 'customsnumber', value: '海关编号' },\n        { key: 'importorexportport', value: '进口/出口口岸' },\n        { key: 'declarationunit', value: '申报单位' },\n        { key: 'declarationdate', value: '申报日期' },\n        { key: 'entrydate', value: '录入日期' },\n      ],\n      retrieval: '',\n      retrievalOptions: [\n        { key: '', value: '请选择检索字段' },\n        { key: 'customsnumber', value: '海关编号' },\n        { key: 'declarationunit', value: '申报单位' },\n      ],\n      logic: '',\n      logicOptions: [\n        { key: '', value: '请选择逻辑' },\n        { key: 'and', value: '与' },\n        { key: 'or', value: '或' },\n        { key: 'none', value: '非' },\n      ],\n    };\n  },\n  methods: {\n    advanceSearch() {\n      this.advancedSearchModal = true;\n    },\n    doAdvanceSearch() {\n      this.advancedSearchModal = false;\n    },\n    addPackingClick() {\n      this.editMode = 0;\n      this.tmpPacking = {};\n      this.packingdetailDialogModal = true;\n    },\n    editPackingClick() {\n      this.editMode = 1;\n      this.tmpPacking = Object.assign({}, this.selectedPackingRow);\n      this.packingdetailDialogModal = true;\n    },\n    deletePackingClick() {\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done();\n          }\n          instance.confirmButtonLoading = true;\n\n          return packinglistAPI\n            .deletePackingList(this.selectedPackingRow.id)\n            .then(data => {\n              instance.confirmButtonLoading = false;\n              console.log(data);\n              done(data);\n            });\n        },\n      })\n        .then(data => {\n          this.selectedPackingRow = [];\n          this.$notify({\n            title: '提示',\n            message: '删除成功！',\n            type: 'success',\n            duration: 2000,\n          });\n        })\n        .catch(() => {\n          this.$notify.error({\n            title: '取消',\n            message: '操作取消！',\n            duration: 2000,\n          });\n        });\n    },\n    packingdetailConfirm() {\n      if (this.editMode == 1) {\n        packinglistAPI.updatePackingList(this.tmpPacking).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: data.message,\n              type: 'success',\n              duration: 2000,\n            });\n          }\n          this.packingdetailDialogModal = false;\n        });\n      } else {\n        packinglistAPI.addPackingList(this.tmpPacking).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: data.message,\n              type: 'success',\n              duration: 2000,\n            });\n          }\n          this.packingdetailDialogModal = false;\n        });\n      }\n    },\n    packingRowClick(row) {\n      console.log(row);\n      this.selectedPackingRow = row;\n    },\n    showPackinglist(id, type) {\n      console.log(id);\n      console.log(type);\n      this.declarationID = id;\n      this.declarationType = type;\n      this.selectedPackingRow = [];\n      this.packinglistDialogModal = true;\n    },\n    getDeclarationData() {\n      this.dataLoading = true;\n      declarationAPI\n        .getDeclaration(this.searchDeclaration)\n        .then(data => {\n          console.log(data);\n          this.declarationData = data.data;\n          this.total = data.total;\n          this.dataLoading = false;\n        });\n    },\n    onSelectionChange(selection) {\n      this.selectedRows = selection;\n    },\n    handleSizeChange(val) {\n      this.pageSize = val;\n      this.getDeclarationData();\n    },\n    handleCurrentChange(val) {\n      this.currentPage = val;\n      this.getDeclarationData();\n    },\n    expandRow(row) {\n      this.declarationType = row.declarationtype;\n      this.declarationID = row.id;\n    },\n    addClick() {\n      this.editMode = 0;\n      this.tmpDeclaration = {\n        declarationtype: 'import',\n      };\n      this.declarationDialogmodel = true;\n      this.selectedPackingRow = [];\n    },\n    editClick() {\n      this.editMode = 1;\n      this.tmpDeclaration = Object.assign({}, this.selectedRows[0]);\n      this.declarationDialogmodel = true;\n      this.selectedPackingRow = [];\n    },\n    deleteClick() {\n      let rowIds = [];\n      this.selectedRows.forEach(function(row) {\n        rowIds.push(row.id);\n      });\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done();\n          }\n          instance.confirmButtonLoading = true;\n\n          return declarationAPI.deleteDeclaration(rowIds).then(data => {\n            instance.confirmButtonLoading = false;\n            done(data);\n          });\n        },\n      })\n        .then(data => {\n          this.declarationData = this.declarationData.filter(\n            val => !rowIds.includes(val.id)\n          );\n          this.selectedRows = [];\n          this.$notify({\n            title: '提示',\n            message: '删除成功！',\n            type: 'success',\n            duration: 2000,\n          });\n        })\n        .catch(() => {\n          this.$notify.error({\n            title: '取消',\n            message: '操作取消！',\n            duration: 2000,\n          });\n        });\n    },\n    returnMain() {\n      this.declarationDialogmodel = false;\n    },\n    confirm() {\n      if (this.editMode == 1) {\n        declarationAPI.updateDeclaration(this.tmpDeclaration).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: data.message,\n              type: 'success',\n              duration: 2000,\n            });\n          }\n          let index = this.declarationData.findIndex(\n            val => val.id === this.tmpDeclaration.id\n          );\n          this.declarationData = [\n            ...this.declarationData.slice(0, index),\n            Object.assign({}, this.tmpDeclaration),\n            ...this.declarationData.slice(index + 1),\n          ];\n        });\n      } else {\n        declarationAPI.addDeclaration(this.tmpDeclaration).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: data.message,\n              type: 'success',\n              duration: 2000,\n            });\n          }\n          this.declarationData = [\n            ...this.declarationData,\n            Object.assign({}, this.tmpDeclaration, { id: data.declaration.id }),\n          ];\n\n          this.tmpDeclaration = {\n            declarationtype: 'import',\n          };\n        });\n      }\n    },\n  },\n  created() {\n    this.clientWidth = document.documentElement.clientWidth - 200;\n    this.clientHeight = document.documentElement.clientHeight - 200;\n    this.getDeclarationData();\n  },\n  components: {\n    'packinglist-table': packinglistTable,\n  },\n};\n</script>\n\n<style scoped>\n.main-content-wrap {\n  padding: 10px;\n}\n\n.search-bar {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n\n.demo-table-expand {\n  font-size: 12px;\n}\n\n.demo-table-expand label {\n  color: #99a9bf;\n}\n\n.demo-table-expand .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n\n.page-wrap {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n\n.e-input {\n  width: 270px;\n}\n\n.search-select {\n  width: 150px;\n}\n\n.form-title {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 6%;\n  padding: 20px 0 5px 0;\n}\n.form-panel {\n  width: 80%;\n  margin-left: 5%;\n  padding: 20px 0 0 0;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.s-input {\n  width: 400px;\n}\n\n.search-form-title {\n  padding: 20px 0;\n}\n.packinglist-panel {\n  width: 80%;\n  margin-left: 5%;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _declarationAPI = __webpack_require__(9);

var _declarationAPI2 = _interopRequireDefault(_declarationAPI);

var _packinglistAPI = __webpack_require__(7);

var _packinglistAPI2 = _interopRequireDefault(_packinglistAPI);

var _packinglistTable = __webpack_require__(10);

var _packinglistTable2 = _interopRequireDefault(_packinglistTable);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import './mock/declaration.js';


exports.default = {
  data: function data() {
    return {
      searchDeclaration: {},
      advancedSearchModal: true,
      tmpPacking: {},
      packingdetailDialogModal: false,
      packinglistDialogModal: false,
      declarationType: '',
      declarationID: '',
      clientWidth: 0,
      clientHeight: 0,
      searchword: '',
      selectedRows: [],
      selectedPackingRow: [],
      declarationData: [],
      currentPage: 1,
      pageSizes: [10, 20, 50],
      pageSize: 10,
      total: 0,
      editMode: 1,
      declarationDialogmodel: false,
      tmpDeclaration: {},
      dataLoading: false,
      confirmLoading: false,
      declarationTypeOptions: [{ key: 'import', value: '进口报关单' }, { key: 'export', value: '出口报关单' }],
      sort: '',
      sortOptions: [{ key: '', value: '请选择排序' }, { key: 'declarationtype', value: '报关单类型' }, { key: 'customsnumber', value: '海关编号' }, { key: 'importorexportport', value: '进口/出口口岸' }, { key: 'declarationunit', value: '申报单位' }, { key: 'declarationdate', value: '申报日期' }, { key: 'entrydate', value: '录入日期' }],
      retrieval: '',
      retrievalOptions: [{ key: '', value: '请选择检索字段' }, { key: 'customsnumber', value: '海关编号' }, { key: 'declarationunit', value: '申报单位' }],
      logic: '',
      logicOptions: [{ key: '', value: '请选择逻辑' }, { key: 'and', value: '与' }, { key: 'or', value: '或' }, { key: 'none', value: '非' }]
    };
  },

  methods: {
    advanceSearch: function advanceSearch() {
      this.advancedSearchModal = true;
    },
    doAdvanceSearch: function doAdvanceSearch() {
      this.advancedSearchModal = false;
    },
    addPackingClick: function addPackingClick() {
      this.editMode = 0;
      this.tmpPacking = {};
      this.packingdetailDialogModal = true;
    },
    editPackingClick: function editPackingClick() {
      this.editMode = 1;
      this.tmpPacking = Object.assign({}, this.selectedPackingRow);
      this.packingdetailDialogModal = true;
    },
    deletePackingClick: function deletePackingClick() {
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

          return _packinglistAPI2.default.deletePackingList(_this.selectedPackingRow.id).then(function (data) {
            instance.confirmButtonLoading = false;
            console.log(data);
            done(data);
          });
        }
      }).then(function (data) {
        _this.selectedPackingRow = [];
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
    packingdetailConfirm: function packingdetailConfirm() {
      var _this2 = this;

      if (this.editMode == 1) {
        _packinglistAPI2.default.updatePackingList(this.tmpPacking).then(function (data) {
          if (data.status == 1) {
            _this2.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000
            });
          }
          _this2.packingdetailDialogModal = false;
        });
      } else {
        _packinglistAPI2.default.addPackingList(this.tmpPacking).then(function (data) {
          if (data.status == 1) {
            _this2.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000
            });
          }
          _this2.packingdetailDialogModal = false;
        });
      }
    },
    packingRowClick: function packingRowClick(row) {
      console.log(row);
      this.selectedPackingRow = row;
    },
    showPackinglist: function showPackinglist(id, type) {
      console.log(id);
      console.log(type);
      this.declarationID = id;
      this.declarationType = type;
      this.selectedPackingRow = [];
      this.packinglistDialogModal = true;
    },
    getDeclarationData: function getDeclarationData() {
      var _this3 = this;

      this.dataLoading = true;
      _declarationAPI2.default.getDeclaration(this.searchDeclaration).then(function (data) {
        console.log(data);
        _this3.declarationData = data.data;
        _this3.total = data.total;
        _this3.dataLoading = false;
      });
    },
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    handleSizeChange: function handleSizeChange(val) {
      this.pageSize = val;
      this.getDeclarationData();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.currentPage = val;
      this.getDeclarationData();
    },
    expandRow: function expandRow(row) {
      this.declarationType = row.declarationtype;
      this.declarationID = row.id;
    },
    addClick: function addClick() {
      this.editMode = 0;
      this.tmpDeclaration = {
        declarationtype: 'import'
      };
      this.declarationDialogmodel = true;
      this.selectedPackingRow = [];
    },
    editClick: function editClick() {
      this.editMode = 1;
      this.tmpDeclaration = Object.assign({}, this.selectedRows[0]);
      this.declarationDialogmodel = true;
      this.selectedPackingRow = [];
    },
    deleteClick: function deleteClick() {
      var _this4 = this;

      var rowIds = [];
      this.selectedRows.forEach(function (row) {
        rowIds.push(row.id);
      });
      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action !== 'confirm') {
            done();
          }
          instance.confirmButtonLoading = true;

          return _declarationAPI2.default.deleteDeclaration(rowIds).then(function (data) {
            instance.confirmButtonLoading = false;
            done(data);
          });
        }
      }).then(function (data) {
        _this4.declarationData = _this4.declarationData.filter(function (val) {
          return !rowIds.includes(val.id);
        });
        _this4.selectedRows = [];
        _this4.$notify({
          title: '提示',
          message: '删除成功！',
          type: 'success',
          duration: 2000
        });
      }).catch(function () {
        _this4.$notify.error({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        });
      });
    },
    returnMain: function returnMain() {
      this.declarationDialogmodel = false;
    },
    confirm: function confirm() {
      var _this5 = this;

      if (this.editMode == 1) {
        _declarationAPI2.default.updateDeclaration(this.tmpDeclaration).then(function (data) {
          if (data.status == 1) {
            _this5.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000
            });
          }
          var index = _this5.declarationData.findIndex(function (val) {
            return val.id === _this5.tmpDeclaration.id;
          });
          _this5.declarationData = [].concat(_toConsumableArray(_this5.declarationData.slice(0, index)), [Object.assign({}, _this5.tmpDeclaration)], _toConsumableArray(_this5.declarationData.slice(index + 1)));
        });
      } else {
        _declarationAPI2.default.addDeclaration(this.tmpDeclaration).then(function (data) {
          if (data.status == 1) {
            _this5.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000
            });
          }
          _this5.declarationData = [].concat(_toConsumableArray(_this5.declarationData), [Object.assign({}, _this5.tmpDeclaration, { id: data.declaration.id })]);

          _this5.tmpDeclaration = {
            declarationtype: 'import'
          };
        });
      }
    }
  },
  created: function created() {
    this.clientWidth = document.documentElement.clientWidth - 200;
    this.clientHeight = document.documentElement.clientHeight - 200;
    this.getDeclarationData();
  },

  components: {
    'packinglist-table': _packinglistTable2.default
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.advancedSearchModal) ? _c('div', [_c('div', {
    staticStyle: {
      "width": "100%",
      "text-align": "center",
      "margin": "auto"
    }
  }, [_c('el-form', {
    staticClass: "e-form",
    attrs: {
      "label-position": "left",
      "model": _vm.searchDeclaration,
      "label-width": "200px"
    }
  }, [_c('div', {
    staticStyle: {
      "padding-top": "20px",
      "width": "900px",
      "margin": "auto",
      "overflow": "hidden"
    }
  }, [_c('h3', {
    staticStyle: {
      "float": "left",
      "width": "200px",
      "line-height": "33px",
      "text-align": "left"
    }
  }, [_vm._v("高级搜索")]), _vm._v(" "), _c('div', [_c('el-input', {
    staticStyle: {
      "width": "620px",
      "padding-right": "10px"
    },
    model: {
      value: (_vm.searchDeclaration.seachword),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "seachword", $$v)
      },
      expression: "searchDeclaration.seachword"
    }
  }), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "width": "70px"
    },
    on: {
      "click": _vm.doAdvanceSearch
    }
  }, [_vm._v("搜　索")])], 1)]), _vm._v(" "), _c('hr', {
    staticStyle: {
      "color": "#CCC",
      "width": "100%"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "900px",
      "margin": "auto",
      "text-align": "left"
    }
  }, [_c('h3', {
    staticClass: "search-form-title"
  }, [_vm._v("高级选项")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "报关单类型"
    }
  }, [_c('el-select', {
    staticClass: "s-input",
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.searchDeclaration.declarationtype),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "declarationtype", $$v)
      },
      expression: "searchDeclaration.declarationtype"
    }
  }, _vm._l((_vm.declarationTypeOptions), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "预录入编号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.preentrynumber),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "preentrynumber", $$v)
      },
      expression: "searchDeclaration.preentrynumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "海关编号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.customsnumber),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "customsnumber", $$v)
      },
      expression: "searchDeclaration.customsnumber"
    }
  })], 1), _vm._v(" "), (_vm.searchDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "进口口岸"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.importorexportport),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "importorexportport", $$v)
      },
      expression: "searchDeclaration.importorexportport"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "出口口岸"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.importorexportport),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "importorexportport", $$v)
      },
      expression: "searchDeclaration.importorexportport"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "备案号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.recordnumber),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "recordnumber", $$v)
      },
      expression: "searchDeclaration.recordnumber"
    }
  })], 1), _vm._v(" "), (_vm.searchDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "进口日期"
    }
  }, [_c('el-date-picker', {
    staticClass: "s-input",
    attrs: {
      "type": "date",
      "placeholder": "选择进口日期"
    },
    model: {
      value: (_vm.searchDeclaration.importorexportdate),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "importorexportdate", $$v)
      },
      expression: "searchDeclaration.importorexportdate"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "出口日期"
    }
  }, [_c('el-date-picker', {
    staticClass: "s-input",
    attrs: {
      "type": "date",
      "placeholder": "选择出口日期"
    },
    model: {
      value: (_vm.searchDeclaration.importorexportdate),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "importorexportdate", $$v)
      },
      expression: "searchDeclaration.importorexportdate"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "申报日期"
    }
  }, [_c('el-date-picker', {
    staticClass: "s-input",
    attrs: {
      "type": "date",
      "placeholder": "选择申报日期"
    },
    model: {
      value: (_vm.searchDeclaration.declarationdate),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "declarationdate", $$v)
      },
      expression: "searchDeclaration.declarationdate"
    }
  })], 1), _vm._v(" "), _c('h3', {
    staticClass: "search-form-title"
  }, [_vm._v("单位相关选项")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "经营单位"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.managementunit),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "managementunit", $$v)
      },
      expression: "searchDeclaration.managementunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输方式"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.shippingtype),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "shippingtype", $$v)
      },
      expression: "searchDeclaration.shippingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输工具名称"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.shippingtools),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "shippingtools", $$v)
      },
      expression: "searchDeclaration.shippingtools"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "提运单号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.shippingnumbers),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "shippingnumbers", $$v)
      },
      expression: "searchDeclaration.shippingnumbers"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收货单位"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.forwardingunit),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "forwardingunit", $$v)
      },
      expression: "searchDeclaration.forwardingunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贸易方式"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.tradingtype),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "tradingtype", $$v)
      },
      expression: "searchDeclaration.tradingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征免性质"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.exemptionnature),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "exemptionnature", $$v)
      },
      expression: "searchDeclaration.exemptionnature"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征税比例"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.settlementtype),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "settlementtype", $$v)
      },
      expression: "searchDeclaration.settlementtype"
    }
  })], 1), _vm._v(" "), _c('h3', {
    staticClass: "search-form-title"
  }, [_vm._v("运输货物选项")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "许可证号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.licensekey),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "licensekey", $$v)
      },
      expression: "searchDeclaration.licensekey"
    }
  })], 1), _vm._v(" "), (_vm.searchDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "启运国"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.startorarrivalcountry),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "startorarrivalcountry", $$v)
      },
      expression: "searchDeclaration.startorarrivalcountry"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "运抵国"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.startorarrivalcountry),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "startorarrivalcountry", $$v)
      },
      expression: "searchDeclaration.startorarrivalcountry"
    }
  })], 1), _vm._v(" "), (_vm.searchDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "装货港"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.loadingorfingerport),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "loadingorfingerport", $$v)
      },
      expression: "searchDeclaration.loadingorfingerport"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "指运港"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.loadingorfingerport),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "loadingorfingerport", $$v)
      },
      expression: "searchDeclaration.loadingorfingerport"
    }
  })], 1), _vm._v(" "), (_vm.searchDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "境内目的地"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.destinationorconsignmentplace),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "destinationorconsignmentplace", $$v)
      },
      expression: "searchDeclaration.destinationorconsignmentplace"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "境内货源地"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.destinationorconsignmentplace),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "destinationorconsignmentplace", $$v)
      },
      expression: "searchDeclaration.destinationorconsignmentplace"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "批准文号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.approvalnumber),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "approvalnumber", $$v)
      },
      expression: "searchDeclaration.approvalnumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "成交方式"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.transactionmethod),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "transactionmethod", $$v)
      },
      expression: "searchDeclaration.transactionmethod"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运费"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.freight),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "freight", $$v)
      },
      expression: "searchDeclaration.freight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "保费"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.premium),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "premium", $$v)
      },
      expression: "searchDeclaration.premium"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "杂费"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.incidental),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "incidental", $$v)
      },
      expression: "searchDeclaration.incidental"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "合同协议号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.agreementnumber),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "agreementnumber", $$v)
      },
      expression: "searchDeclaration.agreementnumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "件数"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.goodsnumber),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "goodsnumber", $$v)
      },
      expression: "searchDeclaration.goodsnumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "包装种类"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.packagingtype),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "packagingtype", $$v)
      },
      expression: "searchDeclaration.packagingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "毛重（千克）"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.grossweight),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "grossweight", $$v)
      },
      expression: "searchDeclaration.grossweight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "净重（千克）"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.netweight),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "netweight", $$v)
      },
      expression: "searchDeclaration.netweight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "集装箱号"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.containernumber),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "containernumber", $$v)
      },
      expression: "searchDeclaration.containernumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "随附单证"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.documentsattached),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "documentsattached", $$v)
      },
      expression: "searchDeclaration.documentsattached"
    }
  })], 1), _vm._v(" "), (_vm.searchDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "用途"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.purposeormanufacturer),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "purposeormanufacturer", $$v)
      },
      expression: "searchDeclaration.purposeormanufacturer"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "生产厂家"
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.purposeormanufacturer),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "purposeormanufacturer", $$v)
      },
      expression: "searchDeclaration.purposeormanufacturer"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "90%"
    },
    attrs: {
      "label": "标记唛码及备注"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "450px"
    },
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.searchDeclaration.shippingmarksandremarks),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "shippingmarksandremarks", $$v)
      },
      expression: "searchDeclaration.shippingmarksandremarks"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "90%"
    },
    attrs: {
      "label": "税费征收情况"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "450px"
    },
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.searchDeclaration.taxpaidornot),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "taxpaidornot", $$v)
      },
      expression: "searchDeclaration.taxpaidornot"
    }
  })], 1), _vm._v(" "), _c('h3', {
    staticClass: "search-form-title"
  }, [_vm._v("相关信息选项")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "录入员："
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.entryclerk),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "entryclerk", $$v)
      },
      expression: "searchDeclaration.entryclerk"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "录入单位："
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.entryunit),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "entryunit", $$v)
      },
      expression: "searchDeclaration.entryunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "报关员："
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.customsbroker),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "customsbroker", $$v)
      },
      expression: "searchDeclaration.customsbroker"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "申报单位："
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.declarationunit),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "declarationunit", $$v)
      },
      expression: "searchDeclaration.declarationunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单位地址："
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.unitaddress),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "unitaddress", $$v)
      },
      expression: "searchDeclaration.unitaddress"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "邮编："
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.zipcode),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "zipcode", $$v)
      },
      expression: "searchDeclaration.zipcode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "电话："
    }
  }, [_c('el-input', {
    staticClass: "s-input",
    model: {
      value: (_vm.searchDeclaration.telephone),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "telephone", $$v)
      },
      expression: "searchDeclaration.telephone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "制填日期："
    }
  }, [_c('el-date-picker', {
    staticClass: "s-input",
    attrs: {
      "type": "date",
      "placeholder": "选择制填日期"
    },
    model: {
      value: (_vm.searchDeclaration.fillingdate),
      callback: function($$v) {
        _vm.$set(_vm.searchDeclaration, "fillingdate", $$v)
      },
      expression: "searchDeclaration.fillingdate"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "100px"
    }
  })], 1)])], 1)]) : (!_vm.declarationDialogmodel) ? _c('div', {
    style: ({
      width: _vm.clientWidth + 'px'
    })
  }, [_c('el-toolbar', [_c('div', {
    staticStyle: {
      "width": "100%",
      "text-align": "left"
    }
  }, [_c('el-button', {
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
      "disabled": _vm.selectedRows.length !== 1
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
  }), _vm._v(" 删除")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "right",
      "margin-right": "10px"
    }
  }, [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.advanceSearch
    }
  }, [_c('i', {
    staticClass: "fa fa-search"
  }), _vm._v(" 高级搜索")])], 1)], 1)]), _vm._v(" "), _c('div', {
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
      value: (_vm.searchword),
      callback: function($$v) {
        _vm.searchword = $$v
      },
      expression: "searchword"
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
  }, [_vm._v("搜索")])], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.dataLoading),
      expression: "dataLoading"
    }],
    ref: "declarationTable",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.declarationData,
      "tooltip-effect": "dark",
      "height": _vm.clientHeight,
      "highlight-current-row": ""
    },
    on: {
      "selection-change": _vm.onSelectionChange,
      "expand": _vm.expandRow
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
            "label-width": "160px"
          }
        }, [_c('el-form-item', {
          attrs: {
            "label": "报关单类型："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationtypename))])]), _c('br'), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "预录入编号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.preentrynumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "海关编号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.customsnumber))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "进口口岸："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportport))])]) : _c('el-form-item', {
          attrs: {
            "label": "出口口岸："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportport))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "备案号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.recordnumber))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "进口日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportdate))])]) : _c('el-form-item', {
          attrs: {
            "label": "出口日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportdate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "申报日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationdate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "经营单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.managementunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "运输方式："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "运输工具名称："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingtools))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "提运单号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingnumbers))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "收货单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.forwardingunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "贸易方式："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.tradingtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "征免性质："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.exemptionnature))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "征税比例："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.settlementtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "许可证号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.licensekey))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "启运国："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.startorarrivalcountry))])]) : _c('el-form-item', {
          attrs: {
            "label": "运抵国："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.startorarrivalcountry))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "装货港："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.loadingorfingerport))])]) : _c('el-form-item', {
          attrs: {
            "label": "指运港："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.loadingorfingerport))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "境内目的地："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.destinationorconsignmentplace))])]) : _c('el-form-item', {
          attrs: {
            "label": "境内货源地："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.destinationorconsignmentplace))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "批准文号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.approvalnumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "成交方式："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.transactionmethod))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "运费："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.freight))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "保费："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.premium))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "杂费："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.incidental))])]), _c('br'), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "合同协议号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.agreementnumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "件数："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.goodsnumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "包装种类："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.packagingtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "毛重（千克）："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.grossweight))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "净重（千克）："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.netweight))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "集装箱号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.containernumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "随附单证："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.documentsattached))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "用途："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.purposeormanufacturer))])]) : _c('el-form-item', {
          attrs: {
            "label": "生产厂家："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.purposeormanufacturer))])]), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "90%"
          },
          attrs: {
            "label": "标记唛码及备注："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingmarksandremarks))])]), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "100%"
          },
          attrs: {
            "label": "商品：",
            "label-width": "60px"
          }
        }, [_c('packinglist-table', {
          attrs: {
            "declarationID": _vm.declarationID,
            "declarationType": _vm.declarationType
          }
        })], 1), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "90%"
          },
          attrs: {
            "label": "税费征收情况："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.taxpaidornot))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "录入员："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.entryclerk))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "录入单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.entryunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "报关员："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.customsbroker))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "申报单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "单位地址："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.unitaddress))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "邮编："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.zipcode))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "电话："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.telephone))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "制填日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.fillingdate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "录入日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.entrydate))])])], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customsnumber",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "海关编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationtypename",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "报关单类型"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "importorexportport",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "进口/出口口岸"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "20%",
      "label": "商品详情"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text"
          }
        }, [_c('span', {
          staticStyle: {
            "color": "green"
          },
          on: {
            "click": function($event) {
              _vm.showPackinglist(scope.row.id, scope.row.declarationtype)
            }
          }
        }, [_vm._v("查看商品")])])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationunit",
      "show-overflow-tooltip": "",
      "min-width": "30%",
      "label": "申报单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationdate",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "申报日期"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "entrydate",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "录入日期"
    }
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
      "title": "商品列表详情",
      "visible": _vm.packinglistDialogModal,
      "size": "large"
    },
    on: {
      "update:visible": function($event) {
        _vm.packinglistDialogModal = $event
      }
    }
  }, [_c('el-toolbar', {
    staticStyle: {
      "margin-bottom": "20px"
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
      "click": _vm.addPackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v("添加")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedPackingRow.length === 0
    },
    on: {
      "click": _vm.editPackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedPackingRow.length === 0
    },
    on: {
      "click": _vm.deletePackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-remove"
  }), _vm._v("删除")])], 1), _vm._v(" "), _c('packinglist-table', {
    attrs: {
      "declarationID": _vm.declarationID,
      "declarationType": _vm.declarationType
    },
    on: {
      "row-click": _vm.packingRowClick
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.editMode == 1 ? '编辑商品信息' : '添加商品',
      "visible": _vm.packingdetailDialogModal,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.packingdetailDialogModal = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "label-position": "right",
      "model": _vm.tmpPacking,
      "inline": "",
      "label-width": "200px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "商品编号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.id),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "id", $$v)
      },
      expression: "tmpPacking.id"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品名称、规格型号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.tmpPacking.name),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "name", $$v)
      },
      expression: "tmpPacking.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "数量及单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.number),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "number", $$v)
      },
      expression: "tmpPacking.number"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单价："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.singleprice),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "singleprice", $$v)
      },
      expression: "tmpPacking.singleprice"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "总价："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.totalprice),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "totalprice", $$v)
      },
      expression: "tmpPacking.totalprice"
    }
  })], 1), _vm._v(" "), (this.declarationType == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "原产国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.productcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "productcountry", $$v)
      },
      expression: "tmpPacking.productcountry"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "最终目的国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.productcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "productcountry", $$v)
      },
      expression: "tmpPacking.productcountry"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "币制："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.currency),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "currency", $$v)
      },
      expression: "tmpPacking.currency"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征免："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.exemption),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "exemption", $$v)
      },
      expression: "tmpPacking.exemption"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.packingdetailDialogModal = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.packingdetailConfirm
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1) : _c('div', [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.returnMain
    }
  }, [_c('i', {
    staticClass: "fa fa-chevron-left"
  }), _vm._v("返回")]), _vm._v(" "), _c('span', {
    staticClass: "button-separator"
  }), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true
    },
    on: {
      "click": _vm.confirm
    }
  }, [_c('i', {
    staticClass: "fa fa-save"
  }), _vm._v(" "), (_vm.editMode == 1) ? _c('span', [_vm._v("保存编辑")]) : _c('span', [_vm._v("确认新建")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap",
    staticStyle: {
      "background-color": "#f5f5f5"
    }
  }, [_c('el-form', {
    staticClass: "e-form",
    attrs: {
      "label-position": "right",
      "model": _vm.tmpDeclaration,
      "label-width": "160px"
    }
  }, [_c('div', {
    staticClass: "form-title"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', {
    attrs: {
      "label": "报关单类型："
    }
  }, [_c('el-select', {
    staticClass: "e-input",
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.tmpDeclaration.declarationtype),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "declarationtype", $$v)
      },
      expression: "tmpDeclaration.declarationtype"
    }
  }, _vm._l((_vm.declarationTypeOptions), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "预录入编号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.preentrynumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "preentrynumber", $$v)
      },
      expression: "tmpDeclaration.preentrynumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "海关编号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.customsnumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "customsnumber", $$v)
      },
      expression: "tmpDeclaration.customsnumber"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "进口口岸："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.importorexportport),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "importorexportport", $$v)
      },
      expression: "tmpDeclaration.importorexportport"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "出口口岸："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.importorexportport),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "importorexportport", $$v)
      },
      expression: "tmpDeclaration.importorexportport"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "备案号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.recordnumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "recordnumber", $$v)
      },
      expression: "tmpDeclaration.recordnumber"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "进口日期："
    }
  }, [_c('el-date-picker', {
    staticClass: "e-input",
    attrs: {
      "type": "date",
      "placeholder": "选择进口日期"
    },
    model: {
      value: (_vm.tmpDeclaration.importorexportdate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "importorexportdate", $$v)
      },
      expression: "tmpDeclaration.importorexportdate"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "出口日期："
    }
  }, [_c('el-date-picker', {
    staticClass: "e-input",
    attrs: {
      "type": "date",
      "placeholder": "选择出口日期"
    },
    model: {
      value: (_vm.tmpDeclaration.importorexportdate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "importorexportdate", $$v)
      },
      expression: "tmpDeclaration.importorexportdate"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "申报日期："
    }
  }, [_c('el-date-picker', {
    staticClass: "e-input",
    attrs: {
      "type": "date",
      "placeholder": "选择申报日期"
    },
    model: {
      value: (_vm.tmpDeclaration.declarationdate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "declarationdate", $$v)
      },
      expression: "tmpDeclaration.declarationdate"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("单位信息")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', {
    attrs: {
      "label": "经营单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.managementunit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "managementunit", $$v)
      },
      expression: "tmpDeclaration.managementunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输方式："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.shippingtype),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingtype", $$v)
      },
      expression: "tmpDeclaration.shippingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输工具名称："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.shippingtools),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingtools", $$v)
      },
      expression: "tmpDeclaration.shippingtools"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "提运单号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.shippingnumbers),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingnumbers", $$v)
      },
      expression: "tmpDeclaration.shippingnumbers"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收货单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.forwardingunit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "forwardingunit", $$v)
      },
      expression: "tmpDeclaration.forwardingunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贸易方式："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.tradingtype),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "tradingtype", $$v)
      },
      expression: "tmpDeclaration.tradingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征免性质："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.exemptionnature),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "exemptionnature", $$v)
      },
      expression: "tmpDeclaration.exemptionnature"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征税比例："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.settlementtype),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "settlementtype", $$v)
      },
      expression: "tmpDeclaration.settlementtype"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("货物信息")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', {
    attrs: {
      "label": "许可证号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.licensekey),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "licensekey", $$v)
      },
      expression: "tmpDeclaration.licensekey"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "启运国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.startorarrivalcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "startorarrivalcountry", $$v)
      },
      expression: "tmpDeclaration.startorarrivalcountry"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "运抵国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.startorarrivalcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "startorarrivalcountry", $$v)
      },
      expression: "tmpDeclaration.startorarrivalcountry"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "装货港："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.loadingorfingerport),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "loadingorfingerport", $$v)
      },
      expression: "tmpDeclaration.loadingorfingerport"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "指运港："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.loadingorfingerport),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "loadingorfingerport", $$v)
      },
      expression: "tmpDeclaration.loadingorfingerport"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "境内目的地："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.destinationorconsignmentplace),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "destinationorconsignmentplace", $$v)
      },
      expression: "tmpDeclaration.destinationorconsignmentplace"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "境内货源地："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.destinationorconsignmentplace),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "destinationorconsignmentplace", $$v)
      },
      expression: "tmpDeclaration.destinationorconsignmentplace"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "批准文号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.approvalnumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "approvalnumber", $$v)
      },
      expression: "tmpDeclaration.approvalnumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "成交方式："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.transactionmethod),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "transactionmethod", $$v)
      },
      expression: "tmpDeclaration.transactionmethod"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运费："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.freight),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "freight", $$v)
      },
      expression: "tmpDeclaration.freight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "保费："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.premium),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "premium", $$v)
      },
      expression: "tmpDeclaration.premium"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "杂费："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.incidental),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "incidental", $$v)
      },
      expression: "tmpDeclaration.incidental"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "合同协议号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.agreementnumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "agreementnumber", $$v)
      },
      expression: "tmpDeclaration.agreementnumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "件数："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.goodsnumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "goodsnumber", $$v)
      },
      expression: "tmpDeclaration.goodsnumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "包装种类："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.packagingtype),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "packagingtype", $$v)
      },
      expression: "tmpDeclaration.packagingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "毛重（千克）："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.grossweight),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "grossweight", $$v)
      },
      expression: "tmpDeclaration.grossweight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "净重（千克）："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.netweight),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "netweight", $$v)
      },
      expression: "tmpDeclaration.netweight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "集装箱号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.containernumber),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "containernumber", $$v)
      },
      expression: "tmpDeclaration.containernumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "随附单证："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.documentsattached),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "documentsattached", $$v)
      },
      expression: "tmpDeclaration.documentsattached"
    }
  })], 1), _vm._v(" "), (_vm.tmpDeclaration.declarationtype == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "用途："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.purposeormanufacturer),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "purposeormanufacturer", $$v)
      },
      expression: "tmpDeclaration.purposeormanufacturer"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "生产厂家："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.purposeormanufacturer),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "purposeormanufacturer", $$v)
      },
      expression: "tmpDeclaration.purposeormanufacturer"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "90%"
    },
    attrs: {
      "label": "标记唛码及备注："
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "450px"
    },
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.tmpDeclaration.shippingmarksandremarks),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "shippingmarksandremarks", $$v)
      },
      expression: "tmpDeclaration.shippingmarksandremarks"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "90%"
    },
    attrs: {
      "label": "税费征收情况："
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "450px"
    },
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.tmpDeclaration.taxpaidornot),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "taxpaidornot", $$v)
      },
      expression: "tmpDeclaration.taxpaidornot"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("商品列表")]), _vm._v(" "), _c('div', {
    staticClass: "packinglist-panel"
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
      "click": _vm.addPackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v("添加")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedPackingRow.length === 0
    },
    on: {
      "click": _vm.editPackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedPackingRow.length === 0
    },
    on: {
      "click": _vm.deletePackingClick
    }
  }, [_c('i', {
    staticClass: "fa fa-remove"
  }), _vm._v("删除")])], 1), _vm._v(" "), _c('packinglist-table', {
    attrs: {
      "declarationID": _vm.tmpDeclaration.id,
      "declarationType": _vm.tmpDeclaration.declarationtype
    },
    on: {
      "row-click": _vm.packingRowClick
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-title"
  }, [_vm._v("操作相关")]), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('el-form-item', {
    attrs: {
      "label": "录入员："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.entryclerk),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "entryclerk", $$v)
      },
      expression: "tmpDeclaration.entryclerk"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "录入单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.entryunit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "entryunit", $$v)
      },
      expression: "tmpDeclaration.entryunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "报关员："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.customsbroker),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "customsbroker", $$v)
      },
      expression: "tmpDeclaration.customsbroker"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "申报单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.declarationunit),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "declarationunit", $$v)
      },
      expression: "tmpDeclaration.declarationunit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单位地址："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.unitaddress),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "unitaddress", $$v)
      },
      expression: "tmpDeclaration.unitaddress"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "邮编："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.zipcode),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "zipcode", $$v)
      },
      expression: "tmpDeclaration.zipcode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "电话："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpDeclaration.telephone),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "telephone", $$v)
      },
      expression: "tmpDeclaration.telephone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "制填日期："
    }
  }, [_c('el-date-picker', {
    staticClass: "e-input",
    attrs: {
      "type": "date",
      "placeholder": "选择制填日期"
    },
    model: {
      value: (_vm.tmpDeclaration.fillingdate),
      callback: function($$v) {
        _vm.$set(_vm.tmpDeclaration, "fillingdate", $$v)
      },
      expression: "tmpDeclaration.fillingdate"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "100px"
    }
  })])], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.editMode == 1 ? '编辑商品信息' : '添加商品',
      "visible": _vm.packingdetailDialogModal,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.packingdetailDialogModal = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "label-position": "right",
      "model": _vm.tmpPacking,
      "inline": "",
      "label-width": "200px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "商品编号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.id),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "id", $$v)
      },
      expression: "tmpPacking.id"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品名称、规格型号："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.tmpPacking.name),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "name", $$v)
      },
      expression: "tmpPacking.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "数量及单位："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.number),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "number", $$v)
      },
      expression: "tmpPacking.number"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单价："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.singleprice),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "singleprice", $$v)
      },
      expression: "tmpPacking.singleprice"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "总价："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.totalprice),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "totalprice", $$v)
      },
      expression: "tmpPacking.totalprice"
    }
  })], 1), _vm._v(" "), (this.declarationType == 'import') ? _c('el-form-item', {
    attrs: {
      "label": "原产国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.productcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "productcountry", $$v)
      },
      expression: "tmpPacking.productcountry"
    }
  })], 1) : _c('el-form-item', {
    attrs: {
      "label": "最终目的国："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.productcountry),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "productcountry", $$v)
      },
      expression: "tmpPacking.productcountry"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "币制："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.currency),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "currency", $$v)
      },
      expression: "tmpPacking.currency"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征免："
    }
  }, [_c('el-input', {
    staticClass: "e-input",
    model: {
      value: (_vm.tmpPacking.exemption),
      callback: function($$v) {
        _vm.$set(_vm.tmpPacking, "exemption", $$v)
      },
      expression: "tmpPacking.exemption"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.packingdetailDialogModal = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.packingdetailConfirm
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e4d7f8d8", module.exports)
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(53)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(57),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-79186761",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\form\\auditing.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] auditing.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79186761", Component.options)
  } else {
    hotAPI.reload("data-v-79186761", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("2d5ebd6a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79186761\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./auditing.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79186761\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./auditing.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-79186761] {\n  padding: 10px;\n}\n.search-bar[data-v-79186761] {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-79186761] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-79186761] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-79186761] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.page-wrap[data-v-79186761] {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n.e-form[data-v-79186761] {\n  padding-left: 10%;\n}\n.e-form .el-form-item[data-v-79186761] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.e-input[data-v-79186761] {\n  width: 240px;\n}\n.search-select[data-v-79186761] {\n  width: 140px;\n}\n.detail-table[data-v-79186761] {\n  font-size: 16px;\n  width: 100%;\n}\n.detail-table span[data-v-79186761] {\n  font-size: 12px;\n  padding-left: 5px;\n}\n.detail-table .t1[data-v-79186761] {\n  height: 40px;\n}\n.detail-table .t2[data-v-79186761] {\n  height: 80px;\n}\n.detail-table .t3[data-v-79186761] {\n  height: 120px;\n}\n.detail-table .t4[data-v-79186761] {\n  height: 160px;\n}\n.detail-table .t5[data-v-79186761] {\n  height: 200px;\n}\n.inline-table[data-v-79186761] {\n  width: 100%;\n}\n.inline-table .b1[data-v-79186761] {\n  border-bottom: 1px solid #CCC;\n}\n.inline-table .b2[data-v-79186761] {\n  border-right: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n}\n.inline-table .b3[data-v-79186761] {\n  border-left: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n}\n.inline-table .b4[data-v-79186761] {\n  border-left: 1px solid #CCC;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/form/auditing.vue?66036abb"],"names":[],"mappings":";AA8eA;EACA,cAAA;CACA;AAEA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,SAAA;EACA,oBAAA;CACA;AAEA;EACA,kBAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,gBAAA;EACA,YAAA;CACA;AAEA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,cAAA;CACA;AAEA;EACA,cAAA;CACA;AAEA;EACA,cAAA;CACA;AAEA;EACA,YAAA;CACA;AACA;EACA,8BAAA;CACA;AACA;EACA,6BAAA;EACA,8BAAA;CACA;AACA;EACA,4BAAA;EACA,8BAAA;CACA;AACA;EACA,4BAAA;CACA","file":"auditing.vue","sourcesContent":["<template slot-scope=\"scope\">\n  <div :style=\"{width:clientWidth+'px'}\">\n    <el-toolbar>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0\" @click=\"passClick()\">\n        <i class=\"fa fa-check\"></i>审核通过</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0\" @click=\"notPassClick()\">\n        <i class=\"fa fa-remove\"></i>审核不通过</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedRows.length === 0\" @click=\"viewClick()\">\n        <i class=\"fa fa-search\"></i>查看详情</el-button>\n    </el-toolbar>\n    <div class=\"main-content-wrap\">\n      <div class=\"search-bar\">\n        排序：\n        <el-select size=\"small\" v-model=\"sort\" class=\"search-select\">\n          <el-option v-for=\"item in sortOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        审核状态：\n        <el-select size=\"small\" v-model=\"auditStatus\" class=\"search-select\">\n          <el-option v-for=\"item in auditStatusOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        检索字段：\n        <el-select size=\"small\" v-model=\"retrieval\" class=\"search-select\">\n          <el-option v-for=\"item in retrievalOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        <el-input style=\"width:200px\" size=\"small\" v-model=\"searchword\"></el-input>\n        <el-select size=\"small\" v-model=\"logic\" class=\"search-select\">\n          <el-option v-for=\"item in logicOptions\" :key=\"item.key\" :label=\"item.value\" :value=\"item.key\">\n          </el-option>\n        </el-select>\n        <el-button size=\"small\" type=\"primary\" @click=\"getDeclarationData\" style=\"width:60px;\">搜索</el-button>\n      </div>\n      <el-table :data=\"declarationData\" v-loading=\"dataLoading\" tooltip-effect=\"dark\" style=\"width:100%\" :height=\"clientHeight\" highlight-current-row @selection-change=\"onSelectionChange\" @expand=\"expandRow\">\n        <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n        <el-table-column type=\"expand\">\n          <template slot-scope=\"props\">\n            <el-form label-position=\"left\" inline class=\"demo-table-expand\" label-width=\"160px\">\n              <el-form-item label=\"报关单类型：\">\n                <span>{{props.row.declarationtypename}}</span>\n              </el-form-item><br/>\n              <el-form-item label=\"预录入编号：\">\n                <span>{{props.row.preentrynumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"海关编号：\">\n                <span>{{props.row.customsnumber}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"进口口岸：\">\n                <span>{{props.row.importorexportport}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"出口口岸：\">\n                <span>{{props.row.importorexportport}}</span>\n              </el-form-item>\n              <el-form-item label=\"备案号：\">\n                <span>{{props.row.recordnumber}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"进口日期：\">\n                <span>{{props.row.importorexportdate}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"出口日期：\">\n                <span>{{props.row.importorexportdate}}</span>\n              </el-form-item>\n              <el-form-item label=\"申报日期：\">\n                <span>{{props.row.declarationdate}}</span>\n              </el-form-item>\n              <el-form-item label=\"经营单位：\">\n                <span>{{props.row.managementunit}}</span>\n              </el-form-item>\n              <el-form-item label=\"运输方式：\">\n                <span>{{props.row.shippingtype}}</span>\n              </el-form-item>\n              <el-form-item label=\"运输工具名称：\">\n                <span>{{props.row.shippingtools}}</span>\n              </el-form-item>\n              <el-form-item label=\"提运单号：\">\n                <span>{{props.row.shippingnumbers}}</span>\n              </el-form-item>\n              <el-form-item label=\"收货单位：\">\n                <span>{{props.row.forwardingunit}}</span>\n              </el-form-item>\n              <el-form-item label=\"贸易方式：\">\n                <span>{{props.row.tradingtype}}</span>\n              </el-form-item>\n              <el-form-item label=\"征免性质：\">\n                <span>{{props.row.exemptionnature}}</span>\n              </el-form-item>\n              <el-form-item label=\"征税比例：\">\n                <span>{{props.row.settlementtype}}</span>\n              </el-form-item>\n              <el-form-item label=\"许可证号：\">\n                <span>{{props.row.licensekey}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"启运国：\">\n                <span>{{props.row.startorarrivalcountry}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"运抵国：\">\n                <span>{{props.row.startorarrivalcountry}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"装货港：\">\n                <span>{{props.row.loadingorfingerport}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"指运港：\">\n                <span>{{props.row.loadingorfingerport}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"境内目的地：\">\n                <span>{{props.row.destinationorconsignmentplace}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"境内货源地：\">\n                <span>{{props.row.destinationorconsignmentplace}}</span>\n              </el-form-item>\n              <el-form-item label=\"批准文号：\">\n                <span>{{props.row.approvalnumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"成交方式：\">\n                <span>{{props.row.transactionmethod}}</span>\n              </el-form-item>\n              <el-form-item label=\"运费：\">\n                <span>{{props.row.freight}}</span>\n              </el-form-item>\n              <el-form-item label=\"保费：\">\n                <span>{{props.row.premium}}</span>\n              </el-form-item>\n              <el-form-item label=\"杂费：\">\n                <span>{{props.row.incidental}}</span>\n              </el-form-item><br/>\n              <el-form-item label=\"合同协议号：\">\n                <span>{{props.row.agreementnumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"件数：\">\n                <span>{{props.row.goodsnumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"包装种类：\">\n                <span>{{props.row.packagingtype}}</span>\n              </el-form-item>\n              <el-form-item label=\"毛重（千克）：\">\n                <span>{{props.row.grossweight}}</span>\n              </el-form-item>\n              <el-form-item label=\"净重（千克）：\">\n                <span>{{props.row.netweight}}</span>\n              </el-form-item>\n              <el-form-item label=\"集装箱号：\">\n                <span>{{props.row.containernumber}}</span>\n              </el-form-item>\n              <el-form-item label=\"随附单证：\">\n                <span>{{props.row.documentsattached}}</span>\n              </el-form-item>\n              <el-form-item v-if=\"props.row.declarationtype == 'import'\" label=\"用途：\">\n                <span>{{props.row.purposeormanufacturer}}</span>\n              </el-form-item>\n              <el-form-item v-else label=\"生产厂家：\">\n                <span>{{props.row.purposeormanufacturer}}</span>\n              </el-form-item>\n              <el-form-item label=\"标记唛码及备注：\" style=\"width:90%\">\n                <span>{{props.row.shippingmarksandremarks}}</span>\n              </el-form-item>\n              <el-form-item label=\"商品：\" label-width=\"60px\" style=\"width:100%\">\n                <packinglist-table :declarationID=\"declarationID\" :declarationType=\"declarationType\">\n                </packinglist-table>\n              </el-form-item>\n              <el-form-item label=\"税费征收情况：\">\n                <span>{{props.row.taxpaidornot}}</span>\n              </el-form-item>\n              <el-form-item label=\"录入员：\">\n                <span>{{props.row.entryclerk}}</span>\n              </el-form-item>\n              <el-form-item label=\"录入单位：\">\n                <span>{{props.row.entryunit}}</span>\n              </el-form-item>\n              <el-form-item label=\"报关员：\">\n                <span>{{props.row.customsbroker}}</span>\n              </el-form-item>\n              <el-form-item label=\"申报单位：\">\n                <span>{{props.row.declarationunit}}</span>\n              </el-form-item>\n              <el-form-item label=\"单位地址：\">\n                <span>{{props.row.unitaddress}}</span>\n              </el-form-item>\n              <el-form-item label=\"邮编：\">\n                <span>{{props.row.zipcode}}</span>\n              </el-form-item>\n              <el-form-item label=\"电话：\">\n                <span>{{props.row.telephone}}</span>\n              </el-form-item>\n              <el-form-item label=\"制填日期：\">\n                <span>{{props.row.fillingdate}}</span>\n              </el-form-item>\n            </el-form>\n          </template>\n        </el-table-column>\n        <el-table-column prop=\"customsnumber\" show-overflow-tooltip min-width=\"15%\" label=\"海关编号\"></el-table-column>\n        <el-table-column prop=\"declarationtypename\" show-overflow-tooltip min-width=\"15%\" label=\"报关单类型\"></el-table-column>\n        <el-table-column min-width=\"12%\" label=\"商品详情\">\n          <template slot-scope=\"scope\">\n            <el-button type=\"text\">\n              <span style=\"color:green;\" @click=\"showPackinglist(scope.row.id,scope.row.declarationtype)\">查看商品</span>\n            </el-button>\n          </template>\n        </el-table-column>\n        <el-table-column prop=\"declarationunit\" show-overflow-tooltip min-width=\"20%\" label=\"申报单位\"></el-table-column>\n        <el-table-column prop=\"declarationdate\" show-overflow-tooltip min-width=\"12%\" label=\"申报日期\"></el-table-column>\n        <el-table-column prop=\"entrydate\" show-overflow-tooltip min-width=\"12%\" label=\"录入日期\"></el-table-column>\n        <el-table-column prop=\"auditstatusname\" show-overflow-tooltip min-width=\"11%\" label=\"审核状态\"></el-table-column>\n        <el-table-column min-width=\"15%\" label=\"操作\">\n          <template slot-scope=\"scope\">\n            <el-button type=\"text\">\n              <span style=\"color:green;\" @click=\"passClick(scope.row.id)\">通过</span>\n            </el-button>\n            <el-button type=\"text\">\n              <span style=\"color:red;\" @click=\"notPassClick(scope.row.id)\">不通过</span>\n            </el-button>\n          </template>\n        </el-table-column>\n      </el-table>\n      <div class=\"page-wrap\">\n        <el-pagination @size-change=\"handleSizeChange\" @current-change=\"handleCurrentChange\" :current-page=\"currentPage\" :page-sizes=\"pageSizes\" :page-size=\"pageSize\" layout=\"total, sizes, prev, pager, next\" :total=\"total\">\n        </el-pagination>\n      </div>\n    </div>\n    <el-dialog title=\"商品列表详情\" :visible.sync=\"packinglistDialogModal\" size=\"large\">\n      <packinglist-table :declarationID=\"declarationID\" :declarationType=\"declarationType\" @row-click=\"packingRowClick\">\n      </packinglist-table>\n    </el-dialog>\n    <el-dialog title=\"报关单详情\" :visible.sync=\"declarationDetailDialogModal\" size=\"large\">\n      <table cellpadding=\"0\" cellspacing=\"0\" border=\"1\" class=\"detail-table\">\n        <tr class=\"t1\">\n          <td colspan=\"5\"><span>预录入编号　</span>{{tmpDeclaration.preentrynumber}}</td>\n          <td colspan=\"5\"><span>海关编号　</span>{{tmpDeclaration.customsnumber}}</td>\n        </tr>\n        <tr class=\"t1\">\n          <td colspan=\"4\"><span v-if=\"tmpDeclaration.declarationtype == 'import'\">进口口岸　</span><span v-else>出口口岸　</span>{{tmpDeclaration.importorexportport}}</td>\n          <td colspan=\"2\"><span>备案号　</span>{{tmpDeclaration.recordnumber}}</td>\n          <td colspan=\"2\"><span v-if=\"tmpDeclaration.declarationtype == 'import'\">进口日期　</span><span v-else>出口日期　</span>{{tmpDeclaration.importorexportdate}}</td>\n          <td colspan=\"2\"><span>申报日期　</span>{{tmpDeclaration.declarationdate}}</td>\n        </tr>\n        <tr class=\"t1\">\n          <td colspan=\"4\"><span>经营单位　</span>{{tmpDeclaration.managementunit}}</td>\n          <td colspan=\"2\"><span>运输方式　</span>{{tmpDeclaration.shippingtype}}</td>\n          <td colspan=\"2\"><span>运输工具名称　</span>{{tmpDeclaration.shippingtools}}</td>\n          <td colspan=\"2\"><span>提运单号　</span>{{tmpDeclaration.shippingnumbers}}</td>\n        </tr>\n        <tr class=\"t1\">\n          <td colspan=\"4\"><span>发货单位　</span>{{tmpDeclaration.forwardingunit}}</td>\n          <td colspan=\"2\"><span>贸易方式　</span>{{tmpDeclaration.tradingtype}}</td>\n          <td colspan=\"2\"><span>征免性质　</span>{{tmpDeclaration.exemptionnature}}</td>\n          <td colspan=\"2\"><span>结汇方式　</span>{{tmpDeclaration.settlementtype}}</td>\n        </tr>\n        <tr class=\"t1\">\n          <td colspan=\"3\"><span>许可证号　</span>{{tmpDeclaration.licensekey}}</td>\n          <td colspan=\"3\"><span v-if=\"tmpDeclaration.declarationtype == 'import'\">启运国（地区）　</span><span v-else>运抵国（地区）　</span>{{tmpDeclaration.startorarrivalcountry}}</td>\n          <td colspan=\"2\"><span v-if=\"tmpDeclaration.declarationtype == 'import'\">装货港　</span><span v-else>指运港　</span>{{tmpDeclaration.loadingorfingerport}}</td>\n          <td colspan=\"2\"><span v-if=\"tmpDeclaration.declarationtype == 'import'\">境内目的地　</span><span v-else>境内货源地　</span>{{tmpDeclaration.destinationorconsignmentplace}}</td>\n        </tr>\n        <tr class=\"t1\">\n          <td colspan=\"3\"><span>批准文号　</span>{{tmpDeclaration.approvalnumber}}</td>\n          <td colspan=\"1\"><span>成交方式　</span>{{tmpDeclaration.transactionmethod}}</td>\n          <td colspan=\"2\"><span>运费　</span>{{tmpDeclaration.freight}}</td>\n          <td colspan=\"2\"><span>保费　</span>{{tmpDeclaration.premium}}</td>\n          <td colspan=\"2\"><span>杂费　</span>{{tmpDeclaration.incidental}}</td>\n        </tr>\n        <tr class=\"t1\">\n          <td colspan=\"3\"><span>合同协议号　</span>{{tmpDeclaration.agreementnumber}}</td>\n          <td colspan=\"1\"><span>件数　</span>{{tmpDeclaration.goodsnumber}}</td>\n          <td colspan=\"2\"><span>包装种类　</span>{{tmpDeclaration.packagingtype}}</td>\n          <td colspan=\"2\"><span>毛重（公斤）　</span>{{tmpDeclaration.grossweight}}</td>\n          <td colspan=\"2\"><span>净重（公斤）　</span>{{tmpDeclaration.netweight}}</td>\n        </tr>\n        <tr class=\"t1\">\n          <td colspan=\"3\"><span>集装箱号　</span>{{tmpDeclaration.containernumber}}</td>\n          <td colspan=\"5\"><span>随附单据　</span>{{tmpDeclaration.documentsattached}}</td>\n          <td colspan=\"2\"><span v-if=\"tmpDeclaration.declarationtype == 'import'\">用途　</span><span v-else>生产厂家　</span>{{tmpDeclaration.purposeormanufacturer}}</td>\n        </tr>\n        <tr class=\"t2\">\n          <td colspan=\"10\" valign=\"top\"><span>标记唛码及备注　</span>{{tmpDeclaration.shippingmarksandremarks}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"10\" valign=\"top\">\n            <packinglist-table :declarationID=\"tmpDeclaration.id\" :declarationType=\"tmpDeclaration.declarationtype\">\n            </packinglist-table>\n          </td>\n        </tr>\n        <tr class=\"t3\">\n          <td colspan=\"10\" valign=\"top\"><span>税费征收情况　</span>{{tmpDeclaration.taxpaidornot}}</td>\n        </tr>\n        <tr class=\"t5\">\n          <td colspan=\"10\">\n            <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" class=\"inline-table\">\n              <tr class=\"t1\">\n                <td colspan=\"1\" class=\"b1\"><span>录入员　</span>{{tmpDeclaration.entryclerk}}</td>\n                <td colspan=\"2\" class=\"b2\"><span>录入单位　</span>{{tmpDeclaration.entryunit}}</td>\n                <td colspan=\"3\"><span>兹声明以上申报无讹并承担法律责任　</span> </td>\n                <td colspan=\"4\" class=\"b4\"><span>海关审批批注及放行日期　</span> </td>\n              </tr>\n              <tr class=\"t1\" border=\"0\">\n                <td colspan=\"6\" border=\"0\"><span>报关员　</span>{{tmpDeclaration.customsbroker}}</td>\n                <td colspan=\"4\" class=\"b4\"> </td>\n              </tr>\n              <tr class=\"t1\" border=\"0\">\n                <td colspan=\"6\" border=\"0\"><span>单位地址　</span>{{tmpDeclaration.unitaddress}}</td>\n                <td colspan=\"2\" class=\"b3\"><span>审单　</span> </td>\n                <td colspan=\"2\" class=\"b1\"><span>审价　</span> </td>\n              </tr>\n              <tr class=\"t1\" border=\"0\">\n                <td colspan=\"6\" border=\"0\"><span>申报单位　</span>{{tmpDeclaration.declarationunit}}</td>\n                <td colspan=\"2\" class=\"b3\"><span>征税　</span> </td>\n                <td colspan=\"2\" class=\"b1\"><span>统计　</span> </td>\n              </tr>\n              <tr class=\"t1\">\n                <td colspan=\"2\"><span>邮编　</span>{{tmpDeclaration.zipcode}}</td>\n                <td colspan=\"2\"><span>电话　</span>{{tmpDeclaration.telephone}}</td>\n                <td colspan=\"2\"><span>制填日期　</span>{{tmpDeclaration.fillingdate}}</td>\n                <td colspan=\"2\" class=\"b4\"><span>查验　</span> </td>\n                <td colspan=\"2\"><span>放行　</span> </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n    </el-dialog>\n  </div>\n</template>\n\n<script>\nimport declarationAPI from './api/declarationAPI.js';\nimport packinglistAPI from './api/packinglistAPI.js';\nimport auditingAPI from './api/auditingAPI.js';\n//import './mock/declaration.js';\nimport packinglistTable from './components/packinglistTable.vue';\n\nexport default {\n  data() {\n    return {\n      declarationDetailDialogModal: false,\n      packinglistDialogModal: false,\n      declarationID: '',\n      declarationType: '',\n      clientWidth: 0,\n      clientHeight: 0,\n      searchword: '',\n      selectedRows: [],\n      declarationData: [],\n      currentPage: 1,\n      pageSizes: [10, 20, 50],\n      pageSize: 10,\n      total: 0,\n      editMode: 1,\n      declarationDialogmodel: false,\n      tmpDeclaration: {},\n      dataLoading: false,\n      confirmLoading: false,\n      declarationTypeOptions: [\n        { key: 'import', value: '进口报关单' },\n        { key: 'export', value: '出口报关单' },\n      ],\n      sort: '',\n      sortOptions: [\n        { key: '', value: '请选择排序' },\n        { key: 'declarationtype', value: '报关单类型' },\n        { key: 'preentrynumber', value: '预录入编号' },\n        { key: 'importorexportport', value: '进口/出口口岸' },\n        { key: 'managementunit', value: '经营单位' },\n        { key: 'declarationunit', value: '申报单位' },\n        { key: 'declarationdate', value: '申报日期' },\n      ],\n      auditStatus: '',\n      auditStatusOptions: [\n        { key: '', value: '请选择审核状态' },\n        { key: 'W', value: '未审核' },\n        { key: 'Y', value: '通过' },\n        { key: 'N', value: '不通过' },\n      ],\n      retrieval: '',\n      retrievalOptions: [\n        { key: '', value: '请选择检索字段' },\n        { key: 'declarationtype', value: '报关单类型' },\n        { key: 'preentrynumber', value: '预录入编号' },\n        { key: 'importorexportport', value: '进口/出口口岸' },\n        { key: 'managementunit', value: '经营单位' },\n        { key: 'declarationunit', value: '申报单位' },\n        { key: 'declarationdate', value: '申报日期' },\n      ],\n      logic: '',\n      logicOptions: [\n        { key: '', value: '请选择逻辑' },\n        { key: 'and', value: '与' },\n        { key: 'or', value: '或' },\n        { key: 'none', value: '非' },\n      ],\n    };\n  },\n  methods: {\n    showPackinglist(id, type) {\n      this.declarationID = id;\n      this.declarationType = type;\n      this.packinglistDialogModal = true;\n    },\n    getDeclarationData() {\n      this.dataLoading = true;\n      declarationAPI\n        .getDeclaration({})\n        .then(data => {\n          this.declarationData = data.data;\n          this.total = data.total;\n          this.dataLoading = false;\n        });\n    },\n    onSelectionChange(selection) {\n      this.selectedRows = selection;\n    },\n    expandRow(row) {\n      this.declarationType = row.declarationtype;\n      this.declarationID = row.id;\n    },\n    handleSizeChange(val) {\n      this.pageSize = val;\n      this.getDeclarationData();\n    },\n    handleCurrentChange(val) {\n      this.currentPage = val;\n      this.getDeclarationData();\n    },\n    passClick(id) {\n      let rowIds = [];\n      if (id) {\n        rowIds = [id];\n      } else {\n        this.selectedRows.forEach(function(row) {\n          rowIds.push(row.id);\n        });\n      }\n      auditingAPI.doAuditing(id, true).then(data => {\n        this.$notify({\n          title: '提示',\n          message: data.message,\n          type: 'success',\n          duration: 2000,\n        });\n        if (data.status == 1) {\n          rowIds.forEach(rowid => {\n            let index = this.declarationData.findIndex(val => val.id === rowid);\n            this.declarationData[index].auditstatus = 'Y';\n            this.declarationData[index].auditstatusname = '通过';\n          });\n        }\n      });\n    },\n    notPassClick(id) {\n      let rowIds = [];\n      if (id) {\n        rowIds = [id];\n      } else {\n        this.selectedRows.forEach(function(row) {\n          rowIds.push(row.id);\n        });\n      }\n      auditingAPI.doAuditing(rowIds, false).then(data => {\n        this.$notify({\n          title: '提示',\n          message: data.message,\n          type: 'success',\n          duration: 2000,\n        });\n        if (data.status == 1) {\n          rowIds.forEach(rowid => {\n            let index = this.declarationData.findIndex(val => val.id === rowid);\n            this.declarationData[index].auditstatus = 'N';\n            this.declarationData[index].auditstatusname = '未通过';\n          });\n        }\n      });\n    },\n    viewClick() {\n      this.$notify({\n        title: '提示',\n        message: '查看详情',\n        type: 'success',\n        duration: 2000,\n      });\n      this.tmpDeclaration = Object.assign({}, this.selectedRows[0]);\n      this.declarationDetailDialogModal = true;\n    },\n  },\n  created() {\n    this.clientWidth = document.documentElement.clientWidth - 200;\n    this.clientHeight = document.documentElement.clientHeight - 200;\n    this.getDeclarationData();\n  },\n  components: {\n    'packinglist-table': packinglistTable,\n  },\n};\n</script>\n\n<style scoped>\n.main-content-wrap {\n  padding: 10px;\n}\n\n.search-bar {\n  width: 100%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n\n.demo-table-expand {\n  font-size: 12px;\n}\n\n.demo-table-expand label {\n  color: #99a9bf;\n}\n\n.demo-table-expand .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n\n.page-wrap {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  top: 5px;\n  padding-right: 10px;\n}\n\n.e-form {\n  padding-left: 10%;\n}\n\n.e-form .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n\n.e-input {\n  width: 240px;\n}\n\n.search-select {\n  width: 140px;\n}\n\n.detail-table {\n  font-size: 16px;\n  width: 100%;\n}\n\n.detail-table span {\n  font-size: 12px;\n  padding-left: 5px;\n}\n\n.detail-table .t1 {\n  height: 40px;\n}\n\n.detail-table .t2 {\n  height: 80px;\n}\n\n.detail-table .t3 {\n  height: 120px;\n}\n\n.detail-table .t4 {\n  height: 160px;\n}\n\n.detail-table .t5 {\n  height: 200px;\n}\n\n.inline-table {\n  width: 100%;\n}\n.inline-table .b1 {\n  border-bottom: 1px solid #CCC;\n}\n.inline-table .b2 {\n  border-right: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n}\n.inline-table .b3 {\n  border-left: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n}\n.inline-table .b4 {\n  border-left: 1px solid #CCC;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _declarationAPI = __webpack_require__(9);

var _declarationAPI2 = _interopRequireDefault(_declarationAPI);

var _packinglistAPI = __webpack_require__(7);

var _packinglistAPI2 = _interopRequireDefault(_packinglistAPI);

var _auditingAPI = __webpack_require__(56);

var _auditingAPI2 = _interopRequireDefault(_auditingAPI);

var _packinglistTable = __webpack_require__(10);

var _packinglistTable2 = _interopRequireDefault(_packinglistTable);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      declarationDetailDialogModal: false,
      packinglistDialogModal: false,
      declarationID: '',
      declarationType: '',
      clientWidth: 0,
      clientHeight: 0,
      searchword: '',
      selectedRows: [],
      declarationData: [],
      currentPage: 1,
      pageSizes: [10, 20, 50],
      pageSize: 10,
      total: 0,
      editMode: 1,
      declarationDialogmodel: false,
      tmpDeclaration: {},
      dataLoading: false,
      confirmLoading: false,
      declarationTypeOptions: [{ key: 'import', value: '进口报关单' }, { key: 'export', value: '出口报关单' }],
      sort: '',
      sortOptions: [{ key: '', value: '请选择排序' }, { key: 'declarationtype', value: '报关单类型' }, { key: 'preentrynumber', value: '预录入编号' }, { key: 'importorexportport', value: '进口/出口口岸' }, { key: 'managementunit', value: '经营单位' }, { key: 'declarationunit', value: '申报单位' }, { key: 'declarationdate', value: '申报日期' }],
      auditStatus: '',
      auditStatusOptions: [{ key: '', value: '请选择审核状态' }, { key: 'W', value: '未审核' }, { key: 'Y', value: '通过' }, { key: 'N', value: '不通过' }],
      retrieval: '',
      retrievalOptions: [{ key: '', value: '请选择检索字段' }, { key: 'declarationtype', value: '报关单类型' }, { key: 'preentrynumber', value: '预录入编号' }, { key: 'importorexportport', value: '进口/出口口岸' }, { key: 'managementunit', value: '经营单位' }, { key: 'declarationunit', value: '申报单位' }, { key: 'declarationdate', value: '申报日期' }],
      logic: '',
      logicOptions: [{ key: '', value: '请选择逻辑' }, { key: 'and', value: '与' }, { key: 'or', value: '或' }, { key: 'none', value: '非' }]
    };
  },

  methods: {
    showPackinglist: function showPackinglist(id, type) {
      this.declarationID = id;
      this.declarationType = type;
      this.packinglistDialogModal = true;
    },
    getDeclarationData: function getDeclarationData() {
      var _this = this;

      this.dataLoading = true;
      _declarationAPI2.default.getDeclaration({}).then(function (data) {
        _this.declarationData = data.data;
        _this.total = data.total;
        _this.dataLoading = false;
      });
    },
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    expandRow: function expandRow(row) {
      this.declarationType = row.declarationtype;
      this.declarationID = row.id;
    },
    handleSizeChange: function handleSizeChange(val) {
      this.pageSize = val;
      this.getDeclarationData();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.currentPage = val;
      this.getDeclarationData();
    },
    passClick: function passClick(id) {
      var _this2 = this;

      var rowIds = [];
      if (id) {
        rowIds = [id];
      } else {
        this.selectedRows.forEach(function (row) {
          rowIds.push(row.id);
        });
      }
      _auditingAPI2.default.doAuditing(id, true).then(function (data) {
        _this2.$notify({
          title: '提示',
          message: data.message,
          type: 'success',
          duration: 2000
        });
        if (data.status == 1) {
          rowIds.forEach(function (rowid) {
            var index = _this2.declarationData.findIndex(function (val) {
              return val.id === rowid;
            });
            _this2.declarationData[index].auditstatus = 'Y';
            _this2.declarationData[index].auditstatusname = '通过';
          });
        }
      });
    },
    notPassClick: function notPassClick(id) {
      var _this3 = this;

      var rowIds = [];
      if (id) {
        rowIds = [id];
      } else {
        this.selectedRows.forEach(function (row) {
          rowIds.push(row.id);
        });
      }
      _auditingAPI2.default.doAuditing(rowIds, false).then(function (data) {
        _this3.$notify({
          title: '提示',
          message: data.message,
          type: 'success',
          duration: 2000
        });
        if (data.status == 1) {
          rowIds.forEach(function (rowid) {
            var index = _this3.declarationData.findIndex(function (val) {
              return val.id === rowid;
            });
            _this3.declarationData[index].auditstatus = 'N';
            _this3.declarationData[index].auditstatusname = '未通过';
          });
        }
      });
    },
    viewClick: function viewClick() {
      this.$notify({
        title: '提示',
        message: '查看详情',
        type: 'success',
        duration: 2000
      });
      this.tmpDeclaration = Object.assign({}, this.selectedRows[0]);
      this.declarationDetailDialogModal = true;
    }
  },
  created: function created() {
    this.clientWidth = document.documentElement.clientWidth - 200;
    this.clientHeight = document.documentElement.clientHeight - 200;
    this.getDeclarationData();
  },

  components: {
    'packinglist-table': _packinglistTable2.default
  }
};
//import './mock/declaration.js';

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var auditingAPI = {
  doAuditing: function doAuditing(declarationid, opt) {
    return axios({
      method: 'put',
      url: '/api/declaration/auditing/' + declarationid,
      data: opt
    }).then(function (res) {
      return res.data;
    });
  }
};

exports.default = auditingAPI;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: ({
      width: _vm.clientWidth + 'px'
    })
  }, [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedRows.length === 0
    },
    on: {
      "click": function($event) {
        _vm.passClick()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check"
  }), _vm._v("审核通过")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedRows.length === 0
    },
    on: {
      "click": function($event) {
        _vm.notPassClick()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-remove"
  }), _vm._v("审核不通过")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "plain": true,
      "disabled": _vm.selectedRows.length === 0
    },
    on: {
      "click": function($event) {
        _vm.viewClick()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-search"
  }), _vm._v("查看详情")])], 1), _vm._v(" "), _c('div', {
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
  })), _vm._v("\n      审核状态：\n      "), _c('el-select', {
    staticClass: "search-select",
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.auditStatus),
      callback: function($$v) {
        _vm.auditStatus = $$v
      },
      expression: "auditStatus"
    }
  }, _vm._l((_vm.auditStatusOptions), function(item) {
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
      value: (_vm.searchword),
      callback: function($$v) {
        _vm.searchword = $$v
      },
      expression: "searchword"
    }
  }), _vm._v(" "), _c('el-select', {
    staticClass: "search-select",
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.logic),
      callback: function($$v) {
        _vm.logic = $$v
      },
      expression: "logic"
    }
  }, _vm._l((_vm.logicOptions), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  })), _vm._v(" "), _c('el-button', {
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
      "data": _vm.declarationData,
      "tooltip-effect": "dark",
      "height": _vm.clientHeight,
      "highlight-current-row": ""
    },
    on: {
      "selection-change": _vm.onSelectionChange,
      "expand": _vm.expandRow
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
            "label-width": "160px"
          }
        }, [_c('el-form-item', {
          attrs: {
            "label": "报关单类型："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationtypename))])]), _c('br'), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "预录入编号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.preentrynumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "海关编号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.customsnumber))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "进口口岸："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportport))])]) : _c('el-form-item', {
          attrs: {
            "label": "出口口岸："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportport))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "备案号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.recordnumber))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "进口日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportdate))])]) : _c('el-form-item', {
          attrs: {
            "label": "出口日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.importorexportdate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "申报日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationdate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "经营单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.managementunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "运输方式："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "运输工具名称："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingtools))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "提运单号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingnumbers))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "收货单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.forwardingunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "贸易方式："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.tradingtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "征免性质："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.exemptionnature))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "征税比例："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.settlementtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "许可证号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.licensekey))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "启运国："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.startorarrivalcountry))])]) : _c('el-form-item', {
          attrs: {
            "label": "运抵国："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.startorarrivalcountry))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "装货港："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.loadingorfingerport))])]) : _c('el-form-item', {
          attrs: {
            "label": "指运港："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.loadingorfingerport))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "境内目的地："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.destinationorconsignmentplace))])]) : _c('el-form-item', {
          attrs: {
            "label": "境内货源地："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.destinationorconsignmentplace))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "批准文号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.approvalnumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "成交方式："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.transactionmethod))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "运费："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.freight))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "保费："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.premium))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "杂费："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.incidental))])]), _c('br'), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "合同协议号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.agreementnumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "件数："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.goodsnumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "包装种类："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.packagingtype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "毛重（千克）："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.grossweight))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "净重（千克）："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.netweight))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "集装箱号："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.containernumber))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "随附单证："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.documentsattached))])]), _vm._v(" "), (props.row.declarationtype == 'import') ? _c('el-form-item', {
          attrs: {
            "label": "用途："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.purposeormanufacturer))])]) : _c('el-form-item', {
          attrs: {
            "label": "生产厂家："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.purposeormanufacturer))])]), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "90%"
          },
          attrs: {
            "label": "标记唛码及备注："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.shippingmarksandremarks))])]), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "100%"
          },
          attrs: {
            "label": "商品：",
            "label-width": "60px"
          }
        }, [_c('packinglist-table', {
          attrs: {
            "declarationID": _vm.declarationID,
            "declarationType": _vm.declarationType
          }
        })], 1), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "税费征收情况："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.taxpaidornot))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "录入员："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.entryclerk))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "录入单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.entryunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "报关员："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.customsbroker))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "申报单位："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.declarationunit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "单位地址："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.unitaddress))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "邮编："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.zipcode))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "电话："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.telephone))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "制填日期："
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.fillingdate))])])], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customsnumber",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "海关编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationtypename",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "报关单类型"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "12%",
      "label": "商品详情"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text"
          }
        }, [_c('span', {
          staticStyle: {
            "color": "green"
          },
          on: {
            "click": function($event) {
              _vm.showPackinglist(scope.row.id, scope.row.declarationtype)
            }
          }
        }, [_vm._v("查看商品")])])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationunit",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "申报单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "declarationdate",
      "show-overflow-tooltip": "",
      "min-width": "12%",
      "label": "申报日期"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "entrydate",
      "show-overflow-tooltip": "",
      "min-width": "12%",
      "label": "录入日期"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "auditstatusname",
      "show-overflow-tooltip": "",
      "min-width": "11%",
      "label": "审核状态"
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
            "type": "text"
          }
        }, [_c('span', {
          staticStyle: {
            "color": "green"
          },
          on: {
            "click": function($event) {
              _vm.passClick(scope.row.id)
            }
          }
        }, [_vm._v("通过")])]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "text"
          }
        }, [_c('span', {
          staticStyle: {
            "color": "red"
          },
          on: {
            "click": function($event) {
              _vm.notPassClick(scope.row.id)
            }
          }
        }, [_vm._v("不通过")])])]
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
      "title": "商品列表详情",
      "visible": _vm.packinglistDialogModal,
      "size": "large"
    },
    on: {
      "update:visible": function($event) {
        _vm.packinglistDialogModal = $event
      }
    }
  }, [_c('packinglist-table', {
    attrs: {
      "declarationID": _vm.declarationID,
      "declarationType": _vm.declarationType
    },
    on: {
      "row-click": _vm.packingRowClick
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "报关单详情",
      "visible": _vm.declarationDetailDialogModal,
      "size": "large"
    },
    on: {
      "update:visible": function($event) {
        _vm.declarationDetailDialogModal = $event
      }
    }
  }, [_c('table', {
    staticClass: "detail-table",
    attrs: {
      "cellpadding": "0",
      "cellspacing": "0",
      "border": "1"
    }
  }, [_c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "5"
    }
  }, [_c('span', [_vm._v("预录入编号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.preentrynumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "5"
    }
  }, [_c('span', [_vm._v("海关编号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.customsnumber))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [(_vm.tmpDeclaration.declarationtype == 'import') ? _c('span', [_vm._v("进口口岸　")]) : _c('span', [_vm._v("出口口岸　")]), _vm._v(_vm._s(_vm.tmpDeclaration.importorexportport))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("备案号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.recordnumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [(_vm.tmpDeclaration.declarationtype == 'import') ? _c('span', [_vm._v("进口日期　")]) : _c('span', [_vm._v("出口日期　")]), _vm._v(_vm._s(_vm.tmpDeclaration.importorexportdate))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("申报日期　")]), _vm._v(_vm._s(_vm.tmpDeclaration.declarationdate))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [_c('span', [_vm._v("经营单位　")]), _vm._v(_vm._s(_vm.tmpDeclaration.managementunit))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("运输方式　")]), _vm._v(_vm._s(_vm.tmpDeclaration.shippingtype))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("运输工具名称　")]), _vm._v(_vm._s(_vm.tmpDeclaration.shippingtools))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("提运单号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.shippingnumbers))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [_c('span', [_vm._v("发货单位　")]), _vm._v(_vm._s(_vm.tmpDeclaration.forwardingunit))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("贸易方式　")]), _vm._v(_vm._s(_vm.tmpDeclaration.tradingtype))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("征免性质　")]), _vm._v(_vm._s(_vm.tmpDeclaration.exemptionnature))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("结汇方式　")]), _vm._v(_vm._s(_vm.tmpDeclaration.settlementtype))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('span', [_vm._v("许可证号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.licensekey))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [(_vm.tmpDeclaration.declarationtype == 'import') ? _c('span', [_vm._v("启运国（地区）　")]) : _c('span', [_vm._v("运抵国（地区）　")]), _vm._v(_vm._s(_vm.tmpDeclaration.startorarrivalcountry))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [(_vm.tmpDeclaration.declarationtype == 'import') ? _c('span', [_vm._v("装货港　")]) : _c('span', [_vm._v("指运港　")]), _vm._v(_vm._s(_vm.tmpDeclaration.loadingorfingerport))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [(_vm.tmpDeclaration.declarationtype == 'import') ? _c('span', [_vm._v("境内目的地　")]) : _c('span', [_vm._v("境内货源地　")]), _vm._v(_vm._s(_vm.tmpDeclaration.destinationorconsignmentplace))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('span', [_vm._v("批准文号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.approvalnumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "1"
    }
  }, [_c('span', [_vm._v("成交方式　")]), _vm._v(_vm._s(_vm.tmpDeclaration.transactionmethod))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("运费　")]), _vm._v(_vm._s(_vm.tmpDeclaration.freight))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("保费　")]), _vm._v(_vm._s(_vm.tmpDeclaration.premium))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("杂费　")]), _vm._v(_vm._s(_vm.tmpDeclaration.incidental))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('span', [_vm._v("合同协议号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.agreementnumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "1"
    }
  }, [_c('span', [_vm._v("件数　")]), _vm._v(_vm._s(_vm.tmpDeclaration.goodsnumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("包装种类　")]), _vm._v(_vm._s(_vm.tmpDeclaration.packagingtype))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("毛重（公斤）　")]), _vm._v(_vm._s(_vm.tmpDeclaration.grossweight))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("净重（公斤）　")]), _vm._v(_vm._s(_vm.tmpDeclaration.netweight))])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('span', [_vm._v("集装箱号　")]), _vm._v(_vm._s(_vm.tmpDeclaration.containernumber))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "5"
    }
  }, [_c('span', [_vm._v("随附单据　")]), _vm._v(_vm._s(_vm.tmpDeclaration.documentsattached))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [(_vm.tmpDeclaration.declarationtype == 'import') ? _c('span', [_vm._v("用途　")]) : _c('span', [_vm._v("生产厂家　")]), _vm._v(_vm._s(_vm.tmpDeclaration.purposeormanufacturer))])]), _vm._v(" "), _c('tr', {
    staticClass: "t2"
  }, [_c('td', {
    attrs: {
      "colspan": "10",
      "valign": "top"
    }
  }, [_c('span', [_vm._v("标记唛码及备注　")]), _vm._v(_vm._s(_vm.tmpDeclaration.shippingmarksandremarks))])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "10",
      "valign": "top"
    }
  }, [_c('packinglist-table', {
    attrs: {
      "declarationID": _vm.tmpDeclaration.id,
      "declarationType": _vm.tmpDeclaration.declarationtype
    }
  })], 1)]), _vm._v(" "), _c('tr', {
    staticClass: "t3"
  }, [_c('td', {
    attrs: {
      "colspan": "10",
      "valign": "top"
    }
  }, [_c('span', [_vm._v("税费征收情况　")]), _vm._v(_vm._s(_vm.tmpDeclaration.taxpaidornot))])]), _vm._v(" "), _c('tr', {
    staticClass: "t5"
  }, [_c('td', {
    attrs: {
      "colspan": "10"
    }
  }, [_c('table', {
    staticClass: "inline-table",
    attrs: {
      "cellspacing": "0",
      "cellpadding": "0",
      "border": "0"
    }
  }, [_c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    staticClass: "b1",
    attrs: {
      "colspan": "1"
    }
  }, [_c('span', [_vm._v("录入员　")]), _vm._v(_vm._s(_vm.tmpDeclaration.entryclerk))]), _vm._v(" "), _c('td', {
    staticClass: "b2",
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("录入单位　")]), _vm._v(_vm._s(_vm.tmpDeclaration.entryunit))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('span', [_vm._v("兹声明以上申报无讹并承担法律责任　")])]), _vm._v(" "), _c('td', {
    staticClass: "b4",
    attrs: {
      "colspan": "4"
    }
  }, [_c('span', [_vm._v("海关审批批注及放行日期　")])])]), _vm._v(" "), _c('tr', {
    staticClass: "t1",
    attrs: {
      "border": "0"
    }
  }, [_c('td', {
    attrs: {
      "colspan": "6",
      "border": "0"
    }
  }, [_c('span', [_vm._v("报关员　")]), _vm._v(_vm._s(_vm.tmpDeclaration.customsbroker))]), _vm._v(" "), _c('td', {
    staticClass: "b4",
    attrs: {
      "colspan": "4"
    }
  })]), _vm._v(" "), _c('tr', {
    staticClass: "t1",
    attrs: {
      "border": "0"
    }
  }, [_c('td', {
    attrs: {
      "colspan": "6",
      "border": "0"
    }
  }, [_c('span', [_vm._v("单位地址　")]), _vm._v(_vm._s(_vm.tmpDeclaration.unitaddress))]), _vm._v(" "), _c('td', {
    staticClass: "b3",
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("审单　")])]), _vm._v(" "), _c('td', {
    staticClass: "b1",
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("审价　")])])]), _vm._v(" "), _c('tr', {
    staticClass: "t1",
    attrs: {
      "border": "0"
    }
  }, [_c('td', {
    attrs: {
      "colspan": "6",
      "border": "0"
    }
  }, [_c('span', [_vm._v("申报单位　")]), _vm._v(_vm._s(_vm.tmpDeclaration.declarationunit))]), _vm._v(" "), _c('td', {
    staticClass: "b3",
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("征税　")])]), _vm._v(" "), _c('td', {
    staticClass: "b1",
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("统计　")])])]), _vm._v(" "), _c('tr', {
    staticClass: "t1"
  }, [_c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("邮编　")]), _vm._v(_vm._s(_vm.tmpDeclaration.zipcode))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("电话　")]), _vm._v(_vm._s(_vm.tmpDeclaration.telephone))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("制填日期　")]), _vm._v(_vm._s(_vm.tmpDeclaration.fillingdate))]), _vm._v(" "), _c('td', {
    staticClass: "b4",
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("查验　")])]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('span', [_vm._v("放行　")])])])])])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-79186761", module.exports)
  }
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(59)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(62),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5acc77bc",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\setting\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5acc77bc", Component.options)
  } else {
    hotAPI.reload("data-v-5acc77bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("63c96f30", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5acc77bc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5acc77bc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n@keyframes ani-demo-spin-data-v-5acc77bc {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n.menu-wrap[data-v-5acc77bc] {\n  background-color: #F5F7FB;\n  position: absolute;\n  width: 100%;\n  top: 50px;\n  bottom: 0;\n  overflow: auto;\n}\n.el-menu[data-v-5acc77bc]{\n  background-color: #F5F7FB;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/index.vue?501de734"],"names":[],"mappings":";AAyFA;AACA;IACA,wBAAA;CACA;AACA;IACA,0BAAA;CACA;AACA;IACA,0BAAA;CACA;CACA;AAEA;EACA,0BAAA;EACA,mBAAA;EACA,YAAA;EACA,UAAA;EACA,UAAA;EACA,eAAA;CACA;AACA;EACA,0BAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div class=\"layout\">\n    <div class=\"body-list\" style=\"background-color:white;\">\n      <el-toolbar>\n        <span><i class=\"fa fa-sliders\"/> 配置</span>\n      </el-toolbar>\n      <div class=\"menu-wrap\">\n        <el-menu :default-active=\"activeMenu\" @select=\"onSelectMenu\">\n          <el-menu-item :index=\"menu.path\" v-for=\"menu in menus\" :key=\"menu.path\">\n            <i :class=\"menu.meta.icon\"></i>&nbsp;{{menu.meta.title}}\n          </el-menu-item>\n        </el-menu>\n      </div>\n\n    </div>\n    <div class=\"body-detail\">\n      <div class=\"layout-content-main\">\n        <router-view></router-view>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nconst menus = [\n      {\n        path: '/setting/tax',\n        meta: { title: '税率管理', icon: 'fa fa-money' },\n      },\n      {\n        path: '/setting/license',\n        meta: { title: '许可证管理', icon: 'fa fa-compass' },\n      },\n      {\n        path: '/setting/taxCutting',\n        meta: { title: '减免税管理', icon: 'fa fa-hand-lizard-o' },\n      },\n      {\n        path: '/setting/manifest',\n        meta: { title: '舱单管理', icon: 'fa fa-dropbox' },\n      },\n      {\n        path: '/setting/processingTrade',\n        meta: { title: '加贸管理', icon: 'fa fa-wrench' },\n      },\n      {\n        path: '/setting/cottonQuota',\n        meta: { title: '棉花配额管理', icon: 'fa fa-meetup' },\n      },\n      {\n        path: '/setting/company',\n        meta: { title: '企业管理', icon: 'fa fa-american-sign-language-interpreting' },\n      }\n    ]\n\nexport default {\n  data() {\n    return {\n      menus,\n      activeMenu: this.$route.path\n    };\n  },\n  methods: {\n    onSelectMenu(path) {\n      let item = this.menus.find((val) => val.path === path)\n\n      if (item) {\n        this.$router.push({ path: item.path })\n      }\n    }\n  },\n  created() {\n    if(location.hash.split('/').length==2){\n      location.hash = this.activeMenu\n    }\n  },\n  beforeRouteUpdate(to, from, next) {\n    let path = to.path\n    let item = this.menus.find(val => val.path === path)\n\n    if (item) {\n      this.activeMenu = item.path\n    }\n    next()\n  }\n\n}\n</script>\n<style scoped>\n@keyframes ani-demo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.menu-wrap {\n  background-color: #F5F7FB;\n  position: absolute;\n  width: 100%;\n  top: 50px;\n  bottom: 0;\n  overflow: auto;\n}\n.el-menu{\n  background-color: #F5F7FB;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 61 */
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
}, {
  path: '/setting/company',
  meta: { title: '企业管理', icon: 'fa fa-american-sign-language-interpreting' }
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

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
  }), _vm._v(" 配置")])]), _vm._v(" "), _c('div', {
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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5acc77bc", module.exports)
  }
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(64)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(68),
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


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-5f04547b] {\n  padding: 10px;\n}\n.width-300[data-v-5f04547b] {\n  width: 300px;\n}\n.width-230[data-v-5f04547b] {\n  width: 230px;\n}\n.page-wrap[data-v-5f04547b] {\n  margin-top: 20px;\n}\n.page-wrap .page[data-v-5f04547b] {\n  float: right;\n}\n.search-bar[data-v-5f04547b] {\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-5f04547b] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-5f04547b] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-5f04547b] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/tax.vue?ca7ab746"],"names":[],"mappings":";AA+SA;EACA,cAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,iBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,qBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA","file":"tax.vue","sourcesContent":["<template>\n  <div>\n    <el-toolbar>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"plus\" @click=\"addTax\">新建</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"edit\" :disabled=\"selectedRows.length !== 1\" @click=\"editTax\">编辑</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"delete\" :disabled=\"selectedRows.length === 0\" @click=\"deleteTaxs\">删除</el-button>\n    </el-toolbar>\n    <div class=\"main-content-wrap\">\n      <div class=\"search-bar fr\">\n        税号:\n        <el-input v-model=\"search.taxnum\" size=\"small\" placeholder=\"请输入税号\" style=\"width: 200px;\"></el-input>\n        物品类别：\n        <el-input v-model=\"search.taxgoodstype\" size=\"small\" placeholder=\"请输入物品类别\" style=\"width: 200px;\"></el-input>\n        <el-button size=\"small\" type=\"primary\" @click=\"handleSearchBtn\" style=\"width: 60px;\">搜索</el-button>\n      </div>\n      <!--表格-->\n      <div>\n        <el-table :data=\"taxTable\" @selection-change=\"onSelectionChange\">\n          <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n          <el-table-column type=\"expand\">\n            <template slot-scope=\"props\">\n              <el-form label-position=\"left\" inline class=\"demo-table-expand\" label-width=\"120px\">\n                <el-form-item label=\"税号\">\n                  <span>{{props.row.taxnum}}</span>\n                </el-form-item>\n                <el-form-item label=\"物品类型\">\n                  <span>{{props.row.taxgoodstype}}</span>\n                </el-form-item>\n                <el-form-item label=\"单位\">\n                  <span>{{props.row.unit}}</span>\n                </el-form-item>\n                <el-form-item label=\"税率\">\n                  <span>{{props.row.taxrate}}</span>\n                </el-form-item>\n                <el-form-item label=\"免征额\">\n                  <span>{{props.row.freemoney}}</span>\n                </el-form-item>\n                <el-form-item label=\"最后修改\">\n                  <span>{{props.row.modifydate}}</span>\n                </el-form-item>\n                <el-form-item label=\"范围\" style=\"width:100%;\">\n                  <span>{{props.row.range}}</span>\n                </el-form-item>\n              </el-form>\n            </template>\n          </el-table-column>\n          <el-table-column prop=\"taxnum\" min-width=\"20%\" label=\"税号\"></el-table-column>\n          <el-table-column prop=\"taxgoodstype\" min-width=\"30%\" label=\"物品类型\"></el-table-column>\n          <el-table-column prop=\"unit\" min-width=\"10%\" label=\"单位\"></el-table-column>\n          <el-table-column prop=\"taxrate\" min-width=\"10%\" label=\"税率\"></el-table-column>\n          <el-table-column prop=\"freemoney\" min-width=\"10%\" label=\"免征额\"></el-table-column>\n          <el-table-column prop=\"modifydate\" min-width=\"20%\" label=\"最后修改\"></el-table-column>\n        </el-table>\n      </div>\n      <!--分页-->\n      <div class=\"page-wrap\">\n        <el-pagination class=\"page\" @size-change=\"sizeChangeHandler\" @current-change=\"currentChangeHandler\" :current-page.sync=\"currentPage\" :page-sizes=\"pageSizes\" :page-size=\"pageSize\" :total=\"total\" layout=\"total,sizes, prev, pager, next\">\n        </el-pagination>\n      </div>\n    </div>\n\n    <!-- 新建,编辑对话框 -->\n    <el-dialog :title=\"addOrEdit==1?'新建':'编辑'\" :visible.sync=\"showDialog\" @close=\"closeAddOrEditDialog\">\n      <el-form label-width=\"160px\" :model=\"tmpTax\" :rules=\"taxRules\" ref=\"taxForm\">\n        <el-form-item label=\"税号：\" prop=\"taxnum\">\n          <el-input placeholder=\"请输入税号\" v-model=\"tmpTax.taxnum\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"物品类型：\" prop=\"taxgoodstype\">\n          <el-input placeholder=\"请输入物品类型\" v-model=\"tmpTax.taxgoodstype\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"单位：\">\n          <el-input placeholder=\"请输入单位\" v-model=\"tmpTax.unit\" class=\"width-230\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"税率：\">\n          <el-input placeholder=\"请输入税率\" v-model=\"tmpTax.taxrate\" class=\"width-230\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"免征额：\">\n          <el-input-number v-model=\"tmpTax.freemoney\" :min=\"0\" class=\"width-230\"></el-input-number>\n        </el-form-item>\n        <el-form-item label=\"范围：\">\n          <el-input placeholder=\"请填写范围\" type=\"textarea\" autosize=\"true\" v-model=\"tmpTax.range\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"resetTax\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"saveTax\" :disabled=\"saveTaxStatus\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n  </div>\n</template>\n\n<script>\nimport taxAPI from './api/taxAPI.js';\n// import './mock/tax.js';\n\nexport default {\n  data() {\n    return {\n      taxTable: [],\n      temtaxTable: [],\n      currentPage: 1,\n      total: 50,\n      pageSize: 5,\n      pageSizes: [5, 10, 15, 20],\n      selectedRows: [],\n      showDialog: false,\n      addOrEdit: 1,\n      tmpTax: {},\n      taxRules: {\n        taxnum: [{ required: true, message: '请输入税号', trigger: 'blur' }],\n        taxgoodstype: [{ required: true, message: '请输入物品类型', trigger: 'blur' }],\n      },\n      saveTaxStatus: false,\n      search: { taxnum: '', taxgoodstype: '' },\n    };\n  },\n  methods: {\n    onSelectionChange(selection) {\n      this.selectedRows = selection;\n    },\n    handleSearchBtn() {\n      this.currentPage=1;\n      this.getTaxData();\n      // this.taxTable = Object.assign([], this.temtaxTable);\n      // let temTaxnum = this.search.taxnum;\n      // let temTaxGoodsType = this.search.taxgoodstype;\n      // if (temTaxnum != '' || temTaxGoodsType != '') {\n      //   if (temTaxnum != '') {\n      //     this.taxTable = this.taxTable.filter(\n      //       val => val.taxnum.indexOf(temTaxnum) != -1\n      //     );\n      //   }\n      //   if (temTaxGoodsType != '') {\n      //     this.taxTable = this.taxTable.filter(\n      //       val => val.taxgoodstype.indexOf(temTaxGoodsType) != -1\n      //     );\n      //   }\n      // }\n    },\n    sizeChangeHandler(val) {\n      this.pageSize = val;\n    },\n    currentChangeHandler(val) {\n      this.currentPage = val;\n    },\n    //关闭事件\n    closeAddOrEditDialog() {\n      if (\n        !this.tmpTax.taxnum ||\n        this.tmpTax.taxnum == '' ||\n        !this.tmpTax.taxgoodstype ||\n        this.tmpTax.taxgoodstype == ''\n      ) {\n        this.$refs['taxForm'].resetFields();\n      }\n      this.showDialog = false;\n    },\n    //取消\n    resetTax() {\n      this.$refs['taxForm'].resetFields();\n      this.showDialog = false;\n    },\n    //新建\n    addTax() {\n      this.addOrEdit = 1;\n      this.tmpTax = {};\n      this.saveTaxStatus = false;\n      this.showDialog = true;\n    },\n    //编辑\n    editTax() {\n      this.addOrEdit = 2;\n      this.saveTaxStatus = false;\n      this.tmpTax = Object.assign({}, this.selectedRows[0]);\n      this.showDialog = true;\n    },\n    //新建和编辑时保存\n    saveTax() {\n      this.$refs['taxForm'].validate(valid => {\n        if (valid) {\n          this.saveTaxStatus = true;\n          if (this.addOrEdit == 1) {\n            taxAPI.addTax(this.tmpTax).then(data => {\n              if (data.status == 1) {\n                this.getTaxData();\n                this.$message.success(data.message);\n              } else {\n                this.$message.error(data.message);\n              }\n              this.saveTaxStatus = false;\n              this.showDialog = false;\n            });\n          } else if (this.addOrEdit == 2) {\n            taxAPI.editTax(this.tmpTax.id, this.tmpTax).then(data => {\n              if (data.status == 1) {\n                let index = this.taxTable.findIndex(\n                  val => val.id == this.tmpTax.id\n                );\n                this.taxTable = [\n                  ...this.taxTable.slice(0, index),\n                  Object.assign({}, this.tmpTax),\n                  ...this.taxTable.slice(index + 1),\n                ];\n                this.temtaxTable = Object.assign([], this.taxTable);\n                this.$message.success(data.message);\n              } else {\n                this.$message.error(data.message);\n              }\n              this.saveTaxStatus = false;\n              this.showDialog = false;\n            });\n          }\n        } else {\n          this.$alert('请填写正确选项', '提示');\n          return false;\n        }\n      });\n    },\n    deleteTaxs() {\n      let rowIds = [];\n      this.selectedRows.forEach(function(row) {\n        rowIds.push(row.id);\n      });\n\n      this.$confirm('确认删除所选的数据?', '提示', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action == 'confirm') {\n            instance.confirmButtonLoading = true;\n            return taxAPI.deleteTaxs(rowIds).then(data => {\n              if (data.status == 1) {\n                this.taxTable = this.taxTable.filter(\n                  val => !rowIds.includes(val.id)\n                );\n                this.temtaxTable = Object.assign([], this.taxTable);\n                this.$notify({\n                  title: '成功',\n                  message: data.message,\n                  type: 'success',\n                  duration: 2000,\n                });\n              } else {\n                this.$alert(data.message);\n              }\n              instance.confirmButtonLoading = false;\n              done(data);\n            });\n          } else {\n            done();\n          }\n        },\n      }).catch(() => {\n        this.$notify.info({\n          title: '取消',\n          message: '操作取消！',\n          duration: 2000,\n        });\n      });\n    },\n    //格式化时间 格式化时间为yyyy-MM-dd hh:mm:ss\n    formatDate(date, fmt) {\n      if (/(y+)/.test(fmt)) {\n        fmt = fmt.replace(\n          RegExp.$1,\n          (date.getFullYear() + '').substr(4 - RegExp.$1.length)\n        );\n      }\n      let o = {\n        'M+': date.getMonth() + 1,\n        'd+': date.getDate(),\n        'h+': date.getHours(),\n        'm+': date.getMinutes(),\n        's+': date.getSeconds(),\n      };\n      for (let k in o) {\n        if (new RegExp(`(${k})`).test(fmt)) {\n          let str = o[k] + '';\n          fmt = fmt.replace(\n            RegExp.$1,\n            RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length)\n          );\n        }\n      }\n      return fmt;\n    },\n    getTaxData() {\n      taxAPI.getTaxData(this.search.taxnum,this.search.taxgoodstype,this.pageSize,this.currentPage).then(data => {\n        this.taxTable = data.data;\n        this.total=data.total;\n        this.temtaxTable = Object.assign([], this.taxTable);\n      });\n    },\n  },\n  created() {\n    this.getTaxData();\n  },\n};\n</script>\n\n<style scoped>\n.main-content-wrap {\n  padding: 10px;\n}\n\n.width-300 {\n  width: 300px;\n}\n\n.width-230 {\n  width: 230px;\n}\n\n.page-wrap {\n  margin-top: 20px;\n}\n\n.page-wrap .page {\n  float: right;\n}\n\n.search-bar {\n  padding-bottom: 10px;\n}\n\n.demo-table-expand {\n  font-size: 12px;\n}\n\n.demo-table-expand label {\n  color: #99a9bf;\n}\n\n.demo-table-expand .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taxAPI = __webpack_require__(67);

var _taxAPI2 = _interopRequireDefault(_taxAPI);

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

// import './mock/tax.js';

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
        taxnum: [{ required: true, message: '请输入税号', trigger: 'blur' }],
        taxgoodstype: [{ required: true, message: '请输入物品类型', trigger: 'blur' }]
      },
      saveTaxStatus: false,
      search: { taxnum: '', taxgoodstype: '' }
    };
  },

  methods: {
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    handleSearchBtn: function handleSearchBtn() {
      this.currentPage = 1;
      this.getTaxData();
      // this.taxTable = Object.assign([], this.temtaxTable);
      // let temTaxnum = this.search.taxnum;
      // let temTaxGoodsType = this.search.taxgoodstype;
      // if (temTaxnum != '' || temTaxGoodsType != '') {
      //   if (temTaxnum != '') {
      //     this.taxTable = this.taxTable.filter(
      //       val => val.taxnum.indexOf(temTaxnum) != -1
      //     );
      //   }
      //   if (temTaxGoodsType != '') {
      //     this.taxTable = this.taxTable.filter(
      //       val => val.taxgoodstype.indexOf(temTaxGoodsType) != -1
      //     );
      //   }
      // }
    },
    sizeChangeHandler: function sizeChangeHandler(val) {
      this.pageSize = val;
    },
    currentChangeHandler: function currentChangeHandler(val) {
      this.currentPage = val;
    },

    //关闭事件
    closeAddOrEditDialog: function closeAddOrEditDialog() {
      if (!this.tmpTax.taxnum || this.tmpTax.taxnum == '' || !this.tmpTax.taxgoodstype || this.tmpTax.taxgoodstype == '') {
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
      this.addOrEdit = 1;
      this.tmpTax = {};
      this.saveTaxStatus = false;
      this.showDialog = true;
    },

    //编辑
    editTax: function editTax() {
      this.addOrEdit = 2;
      this.saveTaxStatus = false;
      this.tmpTax = Object.assign({}, this.selectedRows[0]);
      this.showDialog = true;
    },

    //新建和编辑时保存
    saveTax: function saveTax() {
      var _this = this;

      this.$refs['taxForm'].validate(function (valid) {
        if (valid) {
          _this.saveTaxStatus = true;
          if (_this.addOrEdit == 1) {
            _taxAPI2.default.addTax(_this.tmpTax).then(function (data) {
              if (data.status == 1) {
                _this.getTaxData();
                _this.$message.success(data.message);
              } else {
                _this.$message.error(data.message);
              }
              _this.saveTaxStatus = false;
              _this.showDialog = false;
            });
          } else if (_this.addOrEdit == 2) {
            _taxAPI2.default.editTax(_this.tmpTax.id, _this.tmpTax).then(function (data) {
              if (data.status == 1) {
                var index = _this.taxTable.findIndex(function (val) {
                  return val.id == _this.tmpTax.id;
                });
                _this.taxTable = [].concat(_toConsumableArray(_this.taxTable.slice(0, index)), [Object.assign({}, _this.tmpTax)], _toConsumableArray(_this.taxTable.slice(index + 1)));
                _this.temtaxTable = Object.assign([], _this.taxTable);
                _this.$message.success(data.message);
              } else {
                _this.$message.error(data.message);
              }
              _this.saveTaxStatus = false;
              _this.showDialog = false;
            });
          }
        } else {
          _this.$alert('请填写正确选项', '提示');
          return false;
        }
      });
    },
    deleteTaxs: function deleteTaxs() {
      var _this2 = this;

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
                _this2.taxTable = _this2.taxTable.filter(function (val) {
                  return !rowIds.includes(val.id);
                });
                _this2.temtaxTable = Object.assign([], _this2.taxTable);
                _this2.$notify({
                  title: '成功',
                  message: data.message,
                  type: 'success',
                  duration: 2000
                });
              } else {
                _this2.$alert(data.message);
              }
              instance.confirmButtonLoading = false;
              done(data);
            });
          } else {
            done();
          }
        }
      }).catch(function () {
        _this2.$notify.info({
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
      var _this3 = this;

      _taxAPI2.default.getTaxData(this.search.taxnum, this.search.taxgoodstype, this.pageSize, this.currentPage).then(function (data) {
        _this3.taxTable = data.data;
        _this3.total = data.total;
        _this3.temtaxTable = Object.assign([], _this3.taxTable);
      });
    }
  },
  created: function created() {
    this.getTaxData();
  }
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var taxAPI = {
  getTaxData: function getTaxData(taxnum, taxgoodstype, pageSize, pageIndex) {
    return axios.get('/api/taxs', {
      params: {
        taxnum: taxnum,
        taxgoodstype: taxgoodstype,
        pageSize: pageSize,
        pageIndex: pageIndex
      }
    }).then(function (res) {
      return res.data;
    });
  },
  addTax: function addTax(tax) {
    return axios.post('/api/taxs', tax).then(function (res) {
      return res.data;
    });
  },
  editTax: function editTax(id, tax) {
    return axios.put('/api/taxs', tax).then(function (res) {
      return res.data;
    });
  },
  deleteTaxs: function deleteTaxs(ids) {
    var strIds = ids.join(',');
    return axios.delete('/api/taxs/' + strIds).then(function (res) {
      return res.data;
    });
  }
};

exports.default = taxAPI;

/***/ }),
/* 68 */
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
      value: (_vm.search.taxnum),
      callback: function($$v) {
        _vm.$set(_vm.search, "taxnum", $$v)
      },
      expression: "search.taxnum"
    }
  }), _vm._v("\n      物品类别：\n      "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入物品类别"
    },
    model: {
      value: (_vm.search.taxgoodstype),
      callback: function($$v) {
        _vm.$set(_vm.search, "taxgoodstype", $$v)
      },
      expression: "search.taxgoodstype"
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
    attrs: {
      "data": _vm.taxTable
    },
    on: {
      "selection-change": _vm.onSelectionChange
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
        }, [_c('span', [_vm._v(_vm._s(props.row.taxnum))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "物品类型"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.taxgoodstype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "单位"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.unit))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "税率"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.taxrate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "免征额"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.freemoney))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "最后修改"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.modifydate))])]), _vm._v(" "), _c('el-form-item', {
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
      "prop": "taxnum",
      "min-width": "20%",
      "label": "税号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "taxgoodstype",
      "min-width": "30%",
      "label": "物品类型"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "unit",
      "min-width": "10%",
      "label": "单位"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "taxrate",
      "min-width": "10%",
      "label": "税率"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "freemoney",
      "min-width": "10%",
      "label": "免征额"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "modifydate",
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
      "prop": "taxnum"
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入税号"
    },
    model: {
      value: (_vm.tmpTax.taxnum),
      callback: function($$v) {
        _vm.$set(_vm.tmpTax, "taxnum", $$v)
      },
      expression: "tmpTax.taxnum"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "物品类型：",
      "prop": "taxgoodstype"
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入物品类型"
    },
    model: {
      value: (_vm.tmpTax.taxgoodstype),
      callback: function($$v) {
        _vm.$set(_vm.tmpTax, "taxgoodstype", $$v)
      },
      expression: "tmpTax.taxgoodstype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单位："
    }
  }, [_c('el-input', {
    staticClass: "width-230",
    attrs: {
      "placeholder": "请输入单位"
    },
    model: {
      value: (_vm.tmpTax.unit),
      callback: function($$v) {
        _vm.$set(_vm.tmpTax, "unit", $$v)
      },
      expression: "tmpTax.unit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "税率："
    }
  }, [_c('el-input', {
    staticClass: "width-230",
    attrs: {
      "placeholder": "请输入税率"
    },
    model: {
      value: (_vm.tmpTax.taxrate),
      callback: function($$v) {
        _vm.$set(_vm.tmpTax, "taxrate", $$v)
      },
      expression: "tmpTax.taxrate"
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
      value: (_vm.tmpTax.freemoney),
      callback: function($$v) {
        _vm.$set(_vm.tmpTax, "freemoney", $$v)
      },
      expression: "tmpTax.freemoney"
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(70)
  __webpack_require__(72)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(80),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5be44211",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\setting\\license.vue"
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


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("5fcbebb6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be44211\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./license.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be44211\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./license.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.projPage .el-tabs__header {\n  margin-bottom: 0;\n}\ninput[type='file'].el-upload__input {\n  display: none !important;\n  margin-bottom: -20px;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/license.vue?5379904b"],"names":[],"mappings":";AA42BA;EACA,iBAAA;CACA;AAEA;EACA,yBAAA;EACA,qBAAA;CACA","file":"license.vue","sourcesContent":["<template>\n  <div>\n    <el-tabs v-model=\"activeName\" class=\"projPage\">\n      <!-- 进口 -->\n      <el-tab-pane label='进口' name='inlicense'>\n        <el-toolbar>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"inAddClick\">\n            <i class=\"fa fa-plus\"></i>添加</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"inSelectedRows.length !== 1\" @click=\"inEditClick\">\n            <i class=\"fa fa-edit\"></i>编辑</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"inSelectedRows.length < 1\" @click=\"inDeleteClick\">\n            <i class=\"fa fa-trash-o\"></i>删除</el-button>\n        </el-toolbar>\n        <div class=\"main-content-wrap\">\n          <div class=\"search-bar fr\">\n            许可证号:\n            <el-input v-model=\"insearch.licensekey\" size=\"small\" placeholder=\"请输入许可证号\" style=\"width: 200px;\"></el-input>\n            进口商：\n            <el-input v-model=\"insearch.companyname\" size=\"small\" placeholder=\"请输入进口商\" style=\"width: 200px;\"></el-input>\n            报关口岸:\n            <el-input v-model=\"insearch.portofclearance\" size=\"small\" placeholder=\"请输入报关口岸\" style=\"width: 200px;\"></el-input>\n            <el-button size=\"small\" type=\"primary\" @click=\"loadInlicenseList\"> 搜 索 </el-button>\n          </div>\n          <el-table ref=\"myTabelRef\" :data=\"inLicenseData\" tooltip-effect=\"dark\" style=\"width: 100%\" :height=\"clientHeight\" @selection-change=\"inOnSelectionChange\">\n            <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n            <el-table-column prop=\"licensekey\" show-overflow-tooltip min-width=\"15%\" label=\"许可证号\"></el-table-column>\n            <el-table-column prop=\"companyname\" show-overflow-tooltip min-width=\"20%\" label=\"进口商\"></el-table-column>\n            <el-table-column prop=\"consignee\" show-overflow-tooltip min-width=\"15%\" label=\"收货人\"></el-table-column>\n            <el-table-column prop=\"trademode\" show-overflow-tooltip min-width=\"10%\" label=\"贸易方式\"></el-table-column>\n            <el-table-column prop=\"exportingcountry\" show-overflow-tooltip min-width=\"10%\" label=\"出口国\"></el-table-column>\n            <el-table-column prop=\"countryoforigin\" show-overflow-tooltip min-width=\"10%\" label=\"原产国家\"></el-table-column>\n            <el-table-column prop=\"portofclearance\" show-overflow-tooltip min-width=\"10%\" label=\"报关口岸\"></el-table-column>\n            <el-table-column prop=\"shippingtype\" show-overflow-tooltip min-width=\"10%\" label=\"运输方式\"></el-table-column>\n          </el-table>\n          <div class=\"fr\" style=\"margin-top:5px;\">\n            <el-pagination @size-change=\"myHandleSizeChange\" @current-change=\"myHandleCurrentChange\" :current-page=\"myCurrentPage\" :page-sizes=\"myPageSizes\" :page-size=\"myPageSize\" :total=\"myTotal\" layout=\"total, sizes, prev, pager, next\">\n            </el-pagination>\n          </div>\n        </div>\n      </el-tab-pane>\n      <!-- 出口 -->\n      <el-tab-pane label='出口' name='outlicense'>\n        <el-toolbar>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"outAddClick\">\n            <i class=\"fa fa-plus\"></i>添加</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"outSelectedRows.length !== 1\" @click=\"outEditClick\">\n            <i class=\"fa fa-edit\"></i>编辑</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"outSelectedRows.length < 1\" @click=\"outDeleteClick\">\n            <i class=\"fa fa-trash-o\"></i>删除</el-button>\n        </el-toolbar>\n        <div class=\"main-content-wrap\">\n          <div class=\"search-bar fr\">\n            许可证号:\n            <el-input v-model=\"outsearch.licensekey\" size=\"small\" placeholder=\"请输入许可证号\" style=\"width: 200px;\"></el-input>\n            进口商：\n            <el-input v-model=\"outsearch.companyname\" size=\"small\" placeholder=\"请输入出口商\" style=\"width: 200px;\"></el-input>\n            报关口岸:\n            <el-input v-model=\"outsearch.portofclearance\" size=\"small\" placeholder=\"请输入报关口岸\" style=\"width: 200px;\"></el-input>\n            <el-button size=\"small\" type=\"primary\" @click=\"loadOutlicenseList\"> 搜 索 </el-button>\n          </div>\n          <el-table ref=\"apTabelRef\" :data=\"outLicenseData\" tooltip-effect=\"dark\" style=\"width: 100%\" :height=\"clientHeight\" @selection-change=\"outOnSelectionChange\">\n            <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n            <el-table-column prop=\"licensekey\" show-overflow-tooltip min-width=\"15%\" label=\"许可证号\"></el-table-column>\n            <el-table-column prop=\"companyname\" show-overflow-tooltip min-width=\"15%\" label=\"出口商\"></el-table-column>\n            <el-table-column prop=\"consignor\" show-overflow-tooltip min-width=\"15%\" label=\"发货人\"></el-table-column>\n            <el-table-column prop=\"trademode\" show-overflow-tooltip min-width=\"10%\" label=\"贸易方式\"></el-table-column>\n            <el-table-column prop=\"importedcountry\" show-overflow-tooltip min-width=\"12%\" label=\"进口国\"></el-table-column>\n            <el-table-column prop=\"portofclearance\" show-overflow-tooltip min-width=\"10%\" label=\"报关口岸\"></el-table-column>\n            <el-table-column prop=\"certificationdate\" show-overflow-tooltip min-width=\"15%\" label=\"发证日期\"></el-table-column>\n          </el-table>\n          <div class=\"fr\" style=\"margin-top:5px;\">\n            <el-pagination @size-change=\"apHandleSizeChange\" @current-change=\"apHandleCurrentChange\" :current-page=\"apCurrentPage\" :page-sizes=\"apPageSizes\" :page-size=\"apPageSize\" :total=\"apTotal\" layout=\"total, sizes, prev, pager, next\">\n            </el-pagination>\n          </div>\n        </div>\n      </el-tab-pane>\n    </el-tabs>\n    <!-- 添加、编辑进口许可证 -->\n    <el-dialog :title=\"editMode===1?'添加进口许可证':'编辑进口许可证'\" :visible.sync=\"inLicenseShow\"  size=\"large\" >\n      <el-form :model=\"inLicenseModel\" :rules=\"inLicenseRules\" inline ref=\"inLicenseRef\" label-width=\"140px\" style=\"height:400px;overflow-y:scroll;overflow-x:hidden;\">\n        <div class=\"form-title\">基本信息</div>\n        <div class=\"form-panel\">\n          <el-form-item label=\"进口商\" prop=\"companyname\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.companyname\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"收货人\" prop=\"consignee\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.consignee\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"许可证号\" prop=\"licensekey\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.licensekey\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"贸易方式\" prop=\"trademode\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.trademode\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"出口国\" prop=\"exportingcountry\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.exportingcountry\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"原产国家\" prop=\"countryoforigin\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.countryoforigin\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"报关口岸\" prop=\"portofclearance\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.portofclearance\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"外汇来源\" prop=\"sourceofforeignexchange\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.sourceofforeignexchange\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"付款方式\" prop=\"paymentmethod\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.paymentmethod\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"最终用户\" prop=\"enduser\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.enduser\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"最终用途\" prop=\"finalpurpose\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.finalpurpose\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"商品名称\" prop=\"goodsname\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.goodsname\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"商品编号\" prop=\"goodscode\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.goodscode\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"运输方式\" prop=\"shippingtype\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.shippingtype\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"许可证截止日期\" prop=\"expirationdateoflicense\">\n            <el-date-picker v-model=\"inLicenseModel.expirationdateoflicense\" type=\"date\" placeholder=\"选择日期\" class=\"input-320\"></el-date-picker>\n          </el-form-item>\n          <el-form-item label=\"发证日期\" prop=\"certificationdate\">\n            <el-date-picker v-model=\"inLicenseModel.certificationdate\" type=\"date\" placeholder=\"选择日期\" class=\"input-320\"></el-date-picker>\n          </el-form-item>\n          <el-form-item label=\"许可证文件\" prop=\"declarationfile\" v-show=\"editMode===1\">\n            <el-upload :on-success=\"onUploadSuccess\" class=\"upload-file\" accept=\".jpg,.png\" action=\"\" :multiple=\"false\" :file-list=\"fileList\">\n              <el-button size=\"small\" type=\"primary\">点击上传</el-button>\n            </el-upload>\n          </el-form-item>\n          <el-form-item label=\"备注\" prop=\"memo\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.memo\" auto-complete=\"off\" style=\"width:600px\"></el-input>\n          </el-form-item>\n        </div>\n        <div class=\"form-title\">商品信息</div>\n        <div class=\"goods-panel\">\n          <div style=\"height:50px;background-color:#f5f5f5; padding:5px;\">\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addGoodsClick\" style=\"margin-left:10px;\">\n              <i class=\"fa fa-plus\"></i>添加</el-button>\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedLicensegoodsRow.length === 0\" @click=\"editGoodsClick\">\n              <i class=\"fa fa-edit\"></i>编辑</el-button>\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedLicensegoodsRow.length === 0\" @click=\"deleteGoodsClick\">\n              <i class=\"fa fa-remove\"></i>删除</el-button>\n          </div>\n          <licensegoods-table :licenseID = \"inLicenseModel.id\" @row-click=\"licensegoodsTableRowClick\"></licensegoods-table>\n        </div>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"inLicenseShow=false\">取消</el-button>\n        <el-button type=\"primary\" @click=\"inOkHandler\" :loading=\"confirmLoading\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n    <!-- 添加、编辑出口许可证 -->\n    <el-dialog :title=\"outeditMode===1?'添加出口许可证':'编辑出口许可证'\" :visible.sync=\"outLicenseShow\"  size=\"large\" >\n      <el-form :model=\"outLicenseModel\" :rules=\"outLicenseRules\" inline ref=\"outLicenseRef\" label-width=\"140px\" style=\"height:400px;overflow-y:scroll;overflow-x:hidden;\">\n        <el-form-item label=\"出口商\" prop=\"companyname\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.companyname\" auto-complete=\"off\" style=\"width:350px\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"发货人\" prop=\"consignor\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.consignee\" auto-complete=\"off\" style=\"width:350px\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"许可证号\" prop=\"licensekey\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.licensekey\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"贸易方式\" prop=\"trademode\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.trademode\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"进口国\" prop=\"importedcountry\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.importedcountry\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"合同号\" prop=\"conractno\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.conractno\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"报关口岸\" prop=\"portofclearance\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.portofclearance\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"付款方式\" prop=\"paymentmethod\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.paymentmethod\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"商品名称\" prop=\"goodsname\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.goodsname\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"商品编号\" prop=\"goodscode\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.goodscode\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"运输方式\" prop=\"shippingtype\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.shippingtype\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"许可证截止日期\" prop=\"expirationdateoflicense\">\n          <el-date-picker v-model=\"outLicenseModel.expirationdateoflicense\" type=\"date\" placeholder=\"选择日期\" class=\"input-320\"></el-date-picker>\n        </el-form-item>\n        <el-form-item label=\"发证日期\" prop=\"certificationdate\">\n          <el-date-picker v-model=\"outLicenseModel.certificationdate\" type=\"date\" placeholder=\"选择日期\" class=\"input-320\"></el-date-picker>\n        </el-form-item>\n        <el-form-item label=\"许可证文件\" prop=\"declarationfile\" v-show=\"editMode===1\">\n          <el-upload :on-success=\"onUploadSuccess\" class=\"upload-file\" accept=\".jpg,.png\" action=\"\" :multiple=\"false\" :file-list=\"fileList\">\n            <el-button size=\"small\" type=\"primary\">点击上传</el-button>\n          </el-upload>\n        </el-form-item>\n        <el-form-item label=\"备注\" prop=\"memo\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.memo\" auto-complete=\"off\" style=\"width:800px\"></el-input>\n        </el-form-item>\n        <div class=\"form-title\">商品信息</div>\n        <div class=\"goods-panel\">\n          <div style=\"height:50px;background-color:#f5f5f5; padding:5px;\">\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addGoodsClick\" style=\"margin-left:10px;\">\n              <i class=\"fa fa-plus\"></i>添加</el-button>\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedLicensegoodsRow.length === 0\" @click=\"editGoodsClick\">\n              <i class=\"fa fa-edit\"></i>编辑</el-button>\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedLicensegoodsRow.length === 0\" @click=\"deleteGoodsClick\">\n              <i class=\"fa fa-remove\"></i>删除</el-button>\n          </div>\n          <licensegoods-table :licenseID = \"outLicenseModel.id\" @row-click=\"licensegoodsTableRowClick\"></licensegoods-table>\n        </div>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"outLicenseShow=false\">取消</el-button>\n        <el-button type=\"primary\" @click=\"outOkHandler\" :loading=\"confirmLoading\">确 定</el-button>\n      </div>\n    </el-dialog>\n    <!-- 文件列表查看、编辑框 -->\n    <el-dialog :title=\"fileType===1?'申报文件':'审批文件'\" :visible.sync=\"myFileDialogIsShow\">\n      <el-toolbar class=\"filelist-toolbar\">\n        <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"fileUpload\">\n          <i class=\"fa fa-upload\"></i>上传</el-button>\n        <el-button class=\"z-toolbar-btn\" :disabled=\"fileSelectedRows.length < 1\" :plain=\"true\" @click=\"fileDownload\">\n          <i class=\"fa fa-download\"></i>下载</el-button>\n        <el-button class=\"z-toolbar-btn\" :disabled=\"fileSelectedRows.length !== 1\" :plain=\"true\" @click=\"fileView\">\n          <i class=\"fa fa-search\"></i>预览</el-button>\n        <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"fileSelectedRows.length < 1\" @click=\"fileDelete\">\n          <i class=\"fa fa-trash-o\"></i>删除</el-button>\n      </el-toolbar>\n      <el-table ref=\"fileTabelRef\" :data=\"fileTableData\" tooltip-effect=\"dark\" style=\"width: 100%;margin-top:5px;\" @selection-change=\"fileOnSelectionChange\">\n        <el-table-column type=\"selection\" width=\"60\" align=\"center\"></el-table-column>\n        <el-table-column prop=\"name\" label=\"文件名\"></el-table-column>\n      </el-table>\n    </el-dialog>\n    <!-- 文件上传 -->\n    <el-dialog :title=\"'文件上传'\" :visible.sync=\"fileUploadDialogIsShow\">\n      <el-upload :on-success=\"onUploadSuccess\" class=\"upload-file\" accept=\".jpg,.png\" action=\"\" :multiple=\"false\" :file-list=\"fileList\">\n        <el-button size=\"small\" type=\"primary\">点击上传</el-button>\n        <div slot=\"tip\" class=\"el-upload__tip\">只能上传jpg/png文件，且不超过500kb</div>\n      </el-upload>\n      <div slot=\"footer\">\n        <el-button @click=\"fileUploadDialogIsShow=false\">取消</el-button>\n        <el-button type=\"primary\" @click=\"fileUploadOkHandler\">确 定</el-button>\n      </div>\n    </el-dialog>\n    <el-dialog :title=\"editMode==1? '编辑商品信息': '添加商品'\" :visible.sync=\"licensegoodsDialogModal\" :close-on-click-modal=\"false\">\n      <el-form label-position=\"right\" :model=\"tmpLicensegoods\" inline label-width=\"200px\">\n        <el-form-item label=\"规格、等级：\">\n          <el-input class=\"e-input\" v-model=\"tmpLicensegoods.specification\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"单位：\">\n          <el-input class=\"e-input\" v-model=\"tmpLicensegoods.unit\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"数量：\">\n          <el-input class=\"e-input\" v-model=\"tmpLicensegoods.quantity\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"单价（USD）：\">\n          <el-input class=\"e-input\" v-model=\"tmpLicensegoods.unitprice\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"总值（USD）：\">\n          <el-input class=\"e-input\" v-model=\"tmpLicensegoods.amount\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"总值折美元：\">\n          <el-input class=\"e-input\" v-model=\"tmpLicensegoods.amountinusd\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"licensegoodsDialogModal = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"licensegoodsConfirm\">确 定</el-button>\n      </div>\n    </el-dialog>\n  </div>\n</template>\n\n<script>\n//import './mock/license.js';\nimport licenseAPI from './api/licenseAPI.js';\nimport licensegoodsTable from './components/licensegoodsTable.vue';\nexport default {\n  data() {\n    return {\n      clientHeight: 0,\n      clientWidth: 0,\n      /*我的申请表格*/\n      inLicenseData: [],\n      /*待我审批表格*/\n      outLicenseData: [],\n      /*我的申请数据模型*/\n      inLicenseModel: {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n      },\n      outLicenseModel: {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n      },\n      /*进口搜索*/\n      insearch: {\n        licensekey: '',\n        importandexportcode: '',\n        companyname: '',\n        type: 'in',\n      },\n      /*出口搜索*/\n      outsearch: {\n        licensekey: '',\n        importandexportcode: '',\n        companyname: '',\n        type: 'out',\n      },\n      /*激活的tab页 */\n      activeName: 'inlicense',\n      /*我的申请表单校验规则 */\n      inLicenseRules: {\n        name: [{ required: true, message: '请输入项目名称', trigger: 'blur' }],\n        manager: [{ required: true, message: '请输入项目负责人', trigger: 'blur' }],\n      },\n      /*编辑添加框是否可见 */\n      inLicenseShow: false,\n      /*编辑添加框是否可见 */\n      outLicenseShow: false,\n      /*文件列表查看、编辑框是否可见 */\n      myFileDialogIsShow: false,\n      /*文件上传框是否可见 */\n      fileUploadDialogIsShow: false,\n      /*文件预览框是否显示 */\n      fileViewDialogIsShow: false,\n      /*审批进度 */\n      failDialogIsShow: false,\n      passDialogIsShow: false,\n      loadDialogIsShow: false,\n      /*进口许可证编辑模式：1添加，2编辑*/\n      editMode: 1,\n      /*出口许可证编辑模式：1添加，2编辑*/\n      outeditMode: 1,\n      /*文件类型：1申报文件，2审批文件 */\n      fileType: 1,\n      /*表单提交等待动画*/\n      confirmLoading: false,\n      /*我的申请表格选中行*/\n      inSelectedRows: [],\n      /*待我审核表格选中行*/\n      outSelectedRows: [],\n      /*文件表格选中行 */\n      fileSelectedRows: [],\n      /*开始日期初始化 */\n      startdatepicker: '',\n      /*结束日期初始化 */\n      enddatepicker: '',\n      /*我的申请当前页 */\n      myCurrentPage: 1,\n      /*我的申请表格可选页面大小*/\n      myPageSizes: [5, 10, 15, 20],\n      /*我的申请表格当前页面大小 */\n      myPageSize: 10,\n      /*我的申请表格数据总条数 */\n      myTotal: 16,\n      /*待我审核当前页 */\n      apCurrentPage: 1,\n      /*待我审核表格可选页面大小*/\n      apPageSizes: [5, 10, 15, 20],\n      /*待我审核表格当前页面大小 */\n      apPageSize: 10,\n      /*待我审核表格数据总条数 */\n      apTotal: 21,\n      /*文件列表数据 */\n      fileTableData: [],\n      /*文件上传初始化 */\n      fileList: [],\n      /*进度条百分比 */\n      percentage: 0,\n      // i: 0,\n      selectedLicensegoodsRow: {},\n      tmpLicensegoods: {},\n      licensegoodsDialogModal: false,\n    };\n  },\n  methods: {\n    addGoodsClick() {\n      this.editMode = 0;\n      this.tmpLicensegoods = {};\n      this.licensegoodsDialogModal = true;\n    },\n    editGoodsClick() {\n      this.editMode = 1;\n      this.tmpLicensegoods = Object.assign({}, this.selectedLicensegoodsRow);\n      this.licensegoodsDialogModal = true;\n    },\n    deleteGoodsClick() {\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done();\n          }\n          instance.confirmButtonLoading = true;\n\n          return licenseAPI\n            .deleteLicenseGoods(this.selectedLicensegoodsRow.id)\n            .then(data => {\n              instance.confirmButtonLoading = false;\n              done(data);\n            });\n        },\n      }).then(data => {\n          this.selectedLicensegoodsRow = [];\n          this.$notify({\n            title: '提示',\n            message: '删除成功！',\n            type: 'success',\n            duration: 2000,\n          });\n        }).catch(() => {\n          this.$notify.error({\n            title: '取消',\n            message: '操作取消！',\n            duration: 2000,\n          });\n        });\n    },\n    licensegoodsConfirm() {\n      if (this.editMode == 1) {\n        licenseAPI.updateLicenseGoods(this.tmpLicensegoods).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: data.message,\n              type: 'success',\n              duration: 2000,\n            });\n          }\n          this.licensegoodsDialogModal = false;\n        });\n      } else {\n        licenseAPI.addLicenseGoods(this.tmpLicensegoods).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: data.message,\n              type: 'success',\n              duration: 2000,\n            });\n          }\n          this.licensegoodsDialogModal = false;\n        });\n      }\n    },\n    licensegoodsTableRowClick(row) {\n      this.selectedLicensegoodsRow = row;\n    },\n    /*添加进口许可证*/\n    inAddClick() {\n      this.editMode = 1;\n      this.inLicenseModel = {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n        type: 'in',\n      };\n      this.inLicenseShow = true;\n      this.selectedLicensegoodsRow=[];\n    },\n    /*编辑进口许可证*/\n    inEditClick() {\n      this.editMode = 2;\n      this.inLicenseModel = Object.assign(\n        {},\n        this.inLicenseModel,\n        this.inSelectedRows[0]\n      );\n      this.inLicenseShow = true;\n      this.selectedLicensegoodsRow=[];\n    },\n    /*删除进口许可证*/\n    inDeleteClick() {\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done();\n            return;\n          }\n          this.confirmLoading = true;\n          let ids = [];\n          this.inSelectedRows.forEach(function(row) {\n            ids.push(row.id);\n          });\n          let idstr = ids.join();\n          return licenseAPI.deleteLicense(idstr)\n            .then(data => {\n              this.confirmLoading = false;\n              done(data);\n              this.inLicenseData = this.inLicenseData.filter(\n                val => !ids.includes(val.id)\n              );\n            });\n        },\n      }).then(data => {\n          this.inSelectedRows = [];\n          this.loadInlicenseList();\n          this.$notify({\n            title: '提示',\n            message: '删除成功！',\n            type: 'success',\n            duration: 2000,\n          });\n        })\n    },\n\n    /*添加出口许可证*/\n    outAddClick() {\n      this.outeditMode = 1;\n      this.outLicenseModel = {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n        type: 'out',\n      };\n      this.outLicenseShow = true;\n      this.selectedLicensegoodsRow=[];\n    },\n    /*编辑出口许可证*/\n    outEditClick() {\n      this.outeditMode = 2;\n      this.outLicenseModel = Object.assign(\n        {},\n        this.outLicenseModel,\n        this.outSelectedRows[0]\n      );\n      this.outLicenseShow = true;\n      this.selectedLicensegoodsRow=[];\n    },\n    /*删除出口许可证*/\n    outDeleteClick() {\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done();\n            return;\n          }\n          this.confirmLoading = true;\n          this.inSelectedRows.forEach(function(row) {\n            ids.push(row.id);\n          });\n          let idstr = ids.join();\n          return licenseAPI.deleteLicense(idstr)\n            .then(data => {\n              this.confirmLoading = false;\n              done(data);\n              this.outLicenseData = this.outLicenseData.filter(\n                val => !ids.includes(val.id)\n              );\n            });\n        },\n      }).then(data => {\n          this.outSelectedRows = [];\n          this.loadOutlicenseList();\n          this.$notify({\n            title: '提示',\n            message: '删除成功！',\n            type: 'success',\n            duration: 2000,\n          });\n        })\n    },\n\n    /*进口表格选中行改变*/\n    inOnSelectionChange(selection) {\n      this.inSelectedRows = selection;\n    },\n    /*保存进口许可证 */\n    inOkHandler() {\n      let validateForm = () => {\n        return new Promise((resolve, reject) => {\n          this.$refs['inLicenseRef'].validate(valid => {\n            if (valid) {\n              return resolve(true);\n            }\n            return reject(false);\n          });\n        });\n      };\n      let addForm = (res) => {\n        licenseAPI.addLicense(this.inLicenseModel).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: '保存成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n        });\n      };\n\n      let editForm = (res) => {\n        let index = this.inLicenseData.findIndex(\n          val => val.id === this.inLicenseModel.id\n        );\n        licenseAPI.updateLicense(this.inLicenseModel).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: '修改成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n        });\n      };\n\n      validateForm().then(() => {\n          this.confirmLoading = true;\n          if (this.editMode === 1) {\n            return addForm();\n          }\n          if (this.editMode === 2) {\n            return editForm();\n          }\n        }).then(res =>{\n          this.confirmLoading = false;\n          this.inLicenseShow = false;\n          this.inLicenseShow = false;\n          this.loadInlicenseList();\n        });\n    },\n\n    /*保存出口许可证 */\n    outOkHandler() {\n      let validateForm = () => {\n        return new Promise((resolve, reject) => {\n          this.$refs['outLicenseRef'].validate(valid => {\n            if (valid) {\n              return resolve(true);\n            }\n            return reject(false);\n          });\n        });\n      };\n      let outaddForm = () => {\n        licenseAPI.addLicense(this.outLicenseModel).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: '保存成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n        });\n      };\n\n      let outeditForm = () => {\n        let index = this.outLicenseData.findIndex(\n          val => val.id === this.outLicenseModel.id\n        );\n        licenseAPI.updateLicense(this.outLicenseModel).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: '修改成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n        });\n      };\n\n      validateForm()\n        .then(() => {\n          this.confirmLoading = true;\n          if (this.outeditMode === 1) {\n            return outaddForm();\n          }\n          if (this.outeditMode === 2) {\n            return outeditForm();\n          }\n        })\n        .then(res => {\n          this.confirmLoading = false;\n          this.outLicenseShow = false;\n          this.outLicenseShow = false;\n           this.loadOutlicenseList();\n        });\n    },\n\n    /*出口表格选中行改变*/\n    outOnSelectionChange(selection) {\n      this.outSelectedRows = selection;\n    },\n\n    /*文件上传 */\n    fileUpload() {\n      this.fileUploadDialogIsShow = true;\n    },\n    /*点击确定文件上传 */\n    fileUploadOkHandler() {\n      this.$notify({\n        title: '成功',\n        message: '上传成功',\n        type: 'success',\n        duration: 2000,\n      });\n      this.fileUploadDialogIsShow = false;\n    },\n    /*文件上传成功 */\n    onUploadSuccess(response, file) {\n      this.$notify({\n        title: file.name,\n        message: '上传成功',\n        type: 'success',\n        duration: 2000,\n      });\n    },\n    /*文件下载 */\n    fileDownload() {\n      this.$notify({\n        title: '成功',\n        message: '下载成功',\n        type: 'success',\n        duration: 2000,\n      });\n    },\n    /*文件预览 */\n    fileView() {\n      this.fileViewDialogIsShow = true;\n    },\n    /*文件删除 */\n    fileDelete() {\n      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n      })\n        .then(() => {\n          let ids = [];\n          this.fileSelectedRows.forEach(function(row) {\n            ids.push(row.id);\n          });\n          return ids;\n        })\n        .then(ids => {\n          this.fileTableData = this.fileTableData.filter(\n            val => !ids.includes(val.id)\n          );\n          this.$notify.success({\n            title: '成功',\n            message: '删除成功',\n            duration: 2000,\n          });\n        });\n    },\n    /*加载进口许可证数据 */\n    loadInlicenseList() {\n      let pagedata = {\n        pageindex: this.myCurrentPage,\n        pagesize: this.myPageSize,\n      };\n      let search = Object.assign({}, this.insearch, pagedata);\n      licenseAPI.getInlicenseList(search).then(data => {\n        this.inLicenseData = data.data;\n        this.myTotal = data.total;\n      });\n    },\n    /*加载出口许可证数据 */\n    loadOutlicenseList() {\n      let pagedata = {\n        pageindex: this.myCurrentPage,\n        pagesize: this.myPageSize,\n      };\n      let search = Object.assign({}, this.outsearch, pagedata);\n      licenseAPI.getOutlicenseList(search).then(data => {\n        this.outLicenseData = data.data;\n        this.apTotal = data.total;\n      });\n    },\n\n    /*改变我的申请表格大小 */\n    myHandleSizeChange(val) {\n      this.myPageSize = val;\n      this.loadInlicenseList();\n    },\n    /*改变我的申请表格当前页 */\n    myHandleCurrentChange(val) {\n      this.myCurrentPage = val;\n      this.loadInlicenseList();\n    },\n    /*改变待我审核表格大小 */\n    apHandleSizeChange(val) {\n      this.apPageSize = val;\n      this.loadOutlicenseList();\n    },\n    /*改变待我审核表格当前页 */\n    apHandleCurrentChange(val) {\n      this.apCurrentPage = val;\n      this.loadOutlicenseList();\n    },\n  },\n  created() {\n    this.clientHeight = document.documentElement.clientHeight - 270;\n    let num = Math.floor(this.clientHeight / 40) - 1;\n    this.apPageSize = Math.floor(num / 5) * 5;\n    this.apPageSizes = [\n      this.apPageSize,\n      this.apPageSize * 2,\n      this.apPageSize * 4,\n    ];\n    this.myPageSize = Math.floor(num / 5) * 5;\n    this.myPageSizes = [\n      this.myPageSize,\n      this.myPageSize * 2,\n      this.myPageSize * 4,\n    ];\n    this.loadInlicenseList();\n    this.loadOutlicenseList();\n  },\n  components: {\n    'licensegoods-table': licensegoodsTable,\n  },\n};\n</script>\n<style>\n.projPage .el-tabs__header {\n  margin-bottom: 0;\n}\n\ninput[type='file'].el-upload__input {\n  display: none !important;\n  margin-bottom: -20px;\n}\n</style>\n\n<style scoped>\n.main-content-wrap {\n  padding: 10px;\n}\n.search-bar {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.demo-table-expand {\n  font-size: 12px;\n}\n\n.demo-table-expand label {\n  color: #99a9bf;\n}\n\n.demo-table-expand .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 47%;\n}\n\n.e-form .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n\n.filelist-toolbar {\n  margin-left: 1px;\n}\n\n.fileView-content {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 5px;\n  line-height: 20px;\n}\n\n.input-320 {\n  width: 320px;\n}\n\n.form-title {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 6%;\n  padding: 10px 0 5px 0;\n}\n\n.form-panel {\n  width: 90%;\n  margin-left: 5%;\n  padding: 20px 0 0 0;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.goods-panel {\n  width: 90%;\n  margin-left: 5%;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("03a53fea", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be44211\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./license.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be44211\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./license.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-5be44211] {\n  padding: 10px;\n}\n.search-bar[data-v-5be44211] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-5be44211] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-5be44211] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-5be44211] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 47%;\n}\n.e-form .el-form-item[data-v-5be44211] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.filelist-toolbar[data-v-5be44211] {\n  margin-left: 1px;\n}\n.fileView-content[data-v-5be44211] {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 5px;\n  line-height: 20px;\n}\n.input-320[data-v-5be44211] {\n  width: 320px;\n}\n.form-title[data-v-5be44211] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 6%;\n  padding: 10px 0 5px 0;\n}\n.form-panel[data-v-5be44211] {\n  width: 90%;\n  margin-left: 5%;\n  padding: 20px 0 0 0;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.goods-panel[data-v-5be44211] {\n  width: 90%;\n  margin-left: 5%;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/license.vue?5379904b"],"names":[],"mappings":";AAu3BA;EACA,cAAA;CACA;AACA;EACA,kBAAA;EACA,qBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,iBAAA;CACA;AAEA;EACA,YAAA;EACA,uBAAA;EACA,aAAA;EACA,kBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;CACA;AAEA;EACA,WAAA;EACA,gBAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;CACA;AAEA;EACA,WAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;CACA","file":"license.vue","sourcesContent":["<template>\n  <div>\n    <el-tabs v-model=\"activeName\" class=\"projPage\">\n      <!-- 进口 -->\n      <el-tab-pane label='进口' name='inlicense'>\n        <el-toolbar>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"inAddClick\">\n            <i class=\"fa fa-plus\"></i>添加</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"inSelectedRows.length !== 1\" @click=\"inEditClick\">\n            <i class=\"fa fa-edit\"></i>编辑</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"inSelectedRows.length < 1\" @click=\"inDeleteClick\">\n            <i class=\"fa fa-trash-o\"></i>删除</el-button>\n        </el-toolbar>\n        <div class=\"main-content-wrap\">\n          <div class=\"search-bar fr\">\n            许可证号:\n            <el-input v-model=\"insearch.licensekey\" size=\"small\" placeholder=\"请输入许可证号\" style=\"width: 200px;\"></el-input>\n            进口商：\n            <el-input v-model=\"insearch.companyname\" size=\"small\" placeholder=\"请输入进口商\" style=\"width: 200px;\"></el-input>\n            报关口岸:\n            <el-input v-model=\"insearch.portofclearance\" size=\"small\" placeholder=\"请输入报关口岸\" style=\"width: 200px;\"></el-input>\n            <el-button size=\"small\" type=\"primary\" @click=\"loadInlicenseList\"> 搜 索 </el-button>\n          </div>\n          <el-table ref=\"myTabelRef\" :data=\"inLicenseData\" tooltip-effect=\"dark\" style=\"width: 100%\" :height=\"clientHeight\" @selection-change=\"inOnSelectionChange\">\n            <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n            <el-table-column prop=\"licensekey\" show-overflow-tooltip min-width=\"15%\" label=\"许可证号\"></el-table-column>\n            <el-table-column prop=\"companyname\" show-overflow-tooltip min-width=\"20%\" label=\"进口商\"></el-table-column>\n            <el-table-column prop=\"consignee\" show-overflow-tooltip min-width=\"15%\" label=\"收货人\"></el-table-column>\n            <el-table-column prop=\"trademode\" show-overflow-tooltip min-width=\"10%\" label=\"贸易方式\"></el-table-column>\n            <el-table-column prop=\"exportingcountry\" show-overflow-tooltip min-width=\"10%\" label=\"出口国\"></el-table-column>\n            <el-table-column prop=\"countryoforigin\" show-overflow-tooltip min-width=\"10%\" label=\"原产国家\"></el-table-column>\n            <el-table-column prop=\"portofclearance\" show-overflow-tooltip min-width=\"10%\" label=\"报关口岸\"></el-table-column>\n            <el-table-column prop=\"shippingtype\" show-overflow-tooltip min-width=\"10%\" label=\"运输方式\"></el-table-column>\n          </el-table>\n          <div class=\"fr\" style=\"margin-top:5px;\">\n            <el-pagination @size-change=\"myHandleSizeChange\" @current-change=\"myHandleCurrentChange\" :current-page=\"myCurrentPage\" :page-sizes=\"myPageSizes\" :page-size=\"myPageSize\" :total=\"myTotal\" layout=\"total, sizes, prev, pager, next\">\n            </el-pagination>\n          </div>\n        </div>\n      </el-tab-pane>\n      <!-- 出口 -->\n      <el-tab-pane label='出口' name='outlicense'>\n        <el-toolbar>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"outAddClick\">\n            <i class=\"fa fa-plus\"></i>添加</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"outSelectedRows.length !== 1\" @click=\"outEditClick\">\n            <i class=\"fa fa-edit\"></i>编辑</el-button>\n          <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"outSelectedRows.length < 1\" @click=\"outDeleteClick\">\n            <i class=\"fa fa-trash-o\"></i>删除</el-button>\n        </el-toolbar>\n        <div class=\"main-content-wrap\">\n          <div class=\"search-bar fr\">\n            许可证号:\n            <el-input v-model=\"outsearch.licensekey\" size=\"small\" placeholder=\"请输入许可证号\" style=\"width: 200px;\"></el-input>\n            进口商：\n            <el-input v-model=\"outsearch.companyname\" size=\"small\" placeholder=\"请输入出口商\" style=\"width: 200px;\"></el-input>\n            报关口岸:\n            <el-input v-model=\"outsearch.portofclearance\" size=\"small\" placeholder=\"请输入报关口岸\" style=\"width: 200px;\"></el-input>\n            <el-button size=\"small\" type=\"primary\" @click=\"loadOutlicenseList\"> 搜 索 </el-button>\n          </div>\n          <el-table ref=\"apTabelRef\" :data=\"outLicenseData\" tooltip-effect=\"dark\" style=\"width: 100%\" :height=\"clientHeight\" @selection-change=\"outOnSelectionChange\">\n            <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n            <el-table-column prop=\"licensekey\" show-overflow-tooltip min-width=\"15%\" label=\"许可证号\"></el-table-column>\n            <el-table-column prop=\"companyname\" show-overflow-tooltip min-width=\"15%\" label=\"出口商\"></el-table-column>\n            <el-table-column prop=\"consignor\" show-overflow-tooltip min-width=\"15%\" label=\"发货人\"></el-table-column>\n            <el-table-column prop=\"trademode\" show-overflow-tooltip min-width=\"10%\" label=\"贸易方式\"></el-table-column>\n            <el-table-column prop=\"importedcountry\" show-overflow-tooltip min-width=\"12%\" label=\"进口国\"></el-table-column>\n            <el-table-column prop=\"portofclearance\" show-overflow-tooltip min-width=\"10%\" label=\"报关口岸\"></el-table-column>\n            <el-table-column prop=\"certificationdate\" show-overflow-tooltip min-width=\"15%\" label=\"发证日期\"></el-table-column>\n          </el-table>\n          <div class=\"fr\" style=\"margin-top:5px;\">\n            <el-pagination @size-change=\"apHandleSizeChange\" @current-change=\"apHandleCurrentChange\" :current-page=\"apCurrentPage\" :page-sizes=\"apPageSizes\" :page-size=\"apPageSize\" :total=\"apTotal\" layout=\"total, sizes, prev, pager, next\">\n            </el-pagination>\n          </div>\n        </div>\n      </el-tab-pane>\n    </el-tabs>\n    <!-- 添加、编辑进口许可证 -->\n    <el-dialog :title=\"editMode===1?'添加进口许可证':'编辑进口许可证'\" :visible.sync=\"inLicenseShow\"  size=\"large\" >\n      <el-form :model=\"inLicenseModel\" :rules=\"inLicenseRules\" inline ref=\"inLicenseRef\" label-width=\"140px\" style=\"height:400px;overflow-y:scroll;overflow-x:hidden;\">\n        <div class=\"form-title\">基本信息</div>\n        <div class=\"form-panel\">\n          <el-form-item label=\"进口商\" prop=\"companyname\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.companyname\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"收货人\" prop=\"consignee\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.consignee\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"许可证号\" prop=\"licensekey\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.licensekey\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"贸易方式\" prop=\"trademode\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.trademode\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"出口国\" prop=\"exportingcountry\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.exportingcountry\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"原产国家\" prop=\"countryoforigin\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.countryoforigin\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"报关口岸\" prop=\"portofclearance\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.portofclearance\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"外汇来源\" prop=\"sourceofforeignexchange\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.sourceofforeignexchange\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"付款方式\" prop=\"paymentmethod\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.paymentmethod\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"最终用户\" prop=\"enduser\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.enduser\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"最终用途\" prop=\"finalpurpose\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.finalpurpose\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"商品名称\" prop=\"goodsname\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.goodsname\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"商品编号\" prop=\"goodscode\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.goodscode\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"运输方式\" prop=\"shippingtype\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.shippingtype\" auto-complete=\"off\" class=\"input-320\"></el-input>\n          </el-form-item>\n          <el-form-item label=\"许可证截止日期\" prop=\"expirationdateoflicense\">\n            <el-date-picker v-model=\"inLicenseModel.expirationdateoflicense\" type=\"date\" placeholder=\"选择日期\" class=\"input-320\"></el-date-picker>\n          </el-form-item>\n          <el-form-item label=\"发证日期\" prop=\"certificationdate\">\n            <el-date-picker v-model=\"inLicenseModel.certificationdate\" type=\"date\" placeholder=\"选择日期\" class=\"input-320\"></el-date-picker>\n          </el-form-item>\n          <el-form-item label=\"许可证文件\" prop=\"declarationfile\" v-show=\"editMode===1\">\n            <el-upload :on-success=\"onUploadSuccess\" class=\"upload-file\" accept=\".jpg,.png\" action=\"\" :multiple=\"false\" :file-list=\"fileList\">\n              <el-button size=\"small\" type=\"primary\">点击上传</el-button>\n            </el-upload>\n          </el-form-item>\n          <el-form-item label=\"备注\" prop=\"memo\">\n            <el-input type=\"text\" v-model=\"inLicenseModel.memo\" auto-complete=\"off\" style=\"width:600px\"></el-input>\n          </el-form-item>\n        </div>\n        <div class=\"form-title\">商品信息</div>\n        <div class=\"goods-panel\">\n          <div style=\"height:50px;background-color:#f5f5f5; padding:5px;\">\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addGoodsClick\" style=\"margin-left:10px;\">\n              <i class=\"fa fa-plus\"></i>添加</el-button>\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedLicensegoodsRow.length === 0\" @click=\"editGoodsClick\">\n              <i class=\"fa fa-edit\"></i>编辑</el-button>\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedLicensegoodsRow.length === 0\" @click=\"deleteGoodsClick\">\n              <i class=\"fa fa-remove\"></i>删除</el-button>\n          </div>\n          <licensegoods-table :licenseID = \"inLicenseModel.id\" @row-click=\"licensegoodsTableRowClick\"></licensegoods-table>\n        </div>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"inLicenseShow=false\">取消</el-button>\n        <el-button type=\"primary\" @click=\"inOkHandler\" :loading=\"confirmLoading\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n    <!-- 添加、编辑出口许可证 -->\n    <el-dialog :title=\"outeditMode===1?'添加出口许可证':'编辑出口许可证'\" :visible.sync=\"outLicenseShow\"  size=\"large\" >\n      <el-form :model=\"outLicenseModel\" :rules=\"outLicenseRules\" inline ref=\"outLicenseRef\" label-width=\"140px\" style=\"height:400px;overflow-y:scroll;overflow-x:hidden;\">\n        <el-form-item label=\"出口商\" prop=\"companyname\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.companyname\" auto-complete=\"off\" style=\"width:350px\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"发货人\" prop=\"consignor\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.consignee\" auto-complete=\"off\" style=\"width:350px\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"许可证号\" prop=\"licensekey\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.licensekey\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"贸易方式\" prop=\"trademode\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.trademode\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"进口国\" prop=\"importedcountry\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.importedcountry\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"合同号\" prop=\"conractno\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.conractno\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"报关口岸\" prop=\"portofclearance\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.portofclearance\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"付款方式\" prop=\"paymentmethod\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.paymentmethod\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"商品名称\" prop=\"goodsname\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.goodsname\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"商品编号\" prop=\"goodscode\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.goodscode\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"运输方式\" prop=\"shippingtype\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.shippingtype\" auto-complete=\"off\" class=\"input-320\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"许可证截止日期\" prop=\"expirationdateoflicense\">\n          <el-date-picker v-model=\"outLicenseModel.expirationdateoflicense\" type=\"date\" placeholder=\"选择日期\" class=\"input-320\"></el-date-picker>\n        </el-form-item>\n        <el-form-item label=\"发证日期\" prop=\"certificationdate\">\n          <el-date-picker v-model=\"outLicenseModel.certificationdate\" type=\"date\" placeholder=\"选择日期\" class=\"input-320\"></el-date-picker>\n        </el-form-item>\n        <el-form-item label=\"许可证文件\" prop=\"declarationfile\" v-show=\"editMode===1\">\n          <el-upload :on-success=\"onUploadSuccess\" class=\"upload-file\" accept=\".jpg,.png\" action=\"\" :multiple=\"false\" :file-list=\"fileList\">\n            <el-button size=\"small\" type=\"primary\">点击上传</el-button>\n          </el-upload>\n        </el-form-item>\n        <el-form-item label=\"备注\" prop=\"memo\">\n          <el-input type=\"text\" v-model=\"outLicenseModel.memo\" auto-complete=\"off\" style=\"width:800px\"></el-input>\n        </el-form-item>\n        <div class=\"form-title\">商品信息</div>\n        <div class=\"goods-panel\">\n          <div style=\"height:50px;background-color:#f5f5f5; padding:5px;\">\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addGoodsClick\" style=\"margin-left:10px;\">\n              <i class=\"fa fa-plus\"></i>添加</el-button>\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedLicensegoodsRow.length === 0\" @click=\"editGoodsClick\">\n              <i class=\"fa fa-edit\"></i>编辑</el-button>\n            <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"selectedLicensegoodsRow.length === 0\" @click=\"deleteGoodsClick\">\n              <i class=\"fa fa-remove\"></i>删除</el-button>\n          </div>\n          <licensegoods-table :licenseID = \"outLicenseModel.id\" @row-click=\"licensegoodsTableRowClick\"></licensegoods-table>\n        </div>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"outLicenseShow=false\">取消</el-button>\n        <el-button type=\"primary\" @click=\"outOkHandler\" :loading=\"confirmLoading\">确 定</el-button>\n      </div>\n    </el-dialog>\n    <!-- 文件列表查看、编辑框 -->\n    <el-dialog :title=\"fileType===1?'申报文件':'审批文件'\" :visible.sync=\"myFileDialogIsShow\">\n      <el-toolbar class=\"filelist-toolbar\">\n        <el-button class=\"z-toolbar-btn\" :plain=\"true\" @click=\"fileUpload\">\n          <i class=\"fa fa-upload\"></i>上传</el-button>\n        <el-button class=\"z-toolbar-btn\" :disabled=\"fileSelectedRows.length < 1\" :plain=\"true\" @click=\"fileDownload\">\n          <i class=\"fa fa-download\"></i>下载</el-button>\n        <el-button class=\"z-toolbar-btn\" :disabled=\"fileSelectedRows.length !== 1\" :plain=\"true\" @click=\"fileView\">\n          <i class=\"fa fa-search\"></i>预览</el-button>\n        <el-button class=\"z-toolbar-btn\" :plain=\"true\" :disabled=\"fileSelectedRows.length < 1\" @click=\"fileDelete\">\n          <i class=\"fa fa-trash-o\"></i>删除</el-button>\n      </el-toolbar>\n      <el-table ref=\"fileTabelRef\" :data=\"fileTableData\" tooltip-effect=\"dark\" style=\"width: 100%;margin-top:5px;\" @selection-change=\"fileOnSelectionChange\">\n        <el-table-column type=\"selection\" width=\"60\" align=\"center\"></el-table-column>\n        <el-table-column prop=\"name\" label=\"文件名\"></el-table-column>\n      </el-table>\n    </el-dialog>\n    <!-- 文件上传 -->\n    <el-dialog :title=\"'文件上传'\" :visible.sync=\"fileUploadDialogIsShow\">\n      <el-upload :on-success=\"onUploadSuccess\" class=\"upload-file\" accept=\".jpg,.png\" action=\"\" :multiple=\"false\" :file-list=\"fileList\">\n        <el-button size=\"small\" type=\"primary\">点击上传</el-button>\n        <div slot=\"tip\" class=\"el-upload__tip\">只能上传jpg/png文件，且不超过500kb</div>\n      </el-upload>\n      <div slot=\"footer\">\n        <el-button @click=\"fileUploadDialogIsShow=false\">取消</el-button>\n        <el-button type=\"primary\" @click=\"fileUploadOkHandler\">确 定</el-button>\n      </div>\n    </el-dialog>\n    <el-dialog :title=\"editMode==1? '编辑商品信息': '添加商品'\" :visible.sync=\"licensegoodsDialogModal\" :close-on-click-modal=\"false\">\n      <el-form label-position=\"right\" :model=\"tmpLicensegoods\" inline label-width=\"200px\">\n        <el-form-item label=\"规格、等级：\">\n          <el-input class=\"e-input\" v-model=\"tmpLicensegoods.specification\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"单位：\">\n          <el-input class=\"e-input\" v-model=\"tmpLicensegoods.unit\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"数量：\">\n          <el-input class=\"e-input\" v-model=\"tmpLicensegoods.quantity\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"单价（USD）：\">\n          <el-input class=\"e-input\" v-model=\"tmpLicensegoods.unitprice\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"总值（USD）：\">\n          <el-input class=\"e-input\" v-model=\"tmpLicensegoods.amount\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"总值折美元：\">\n          <el-input class=\"e-input\" v-model=\"tmpLicensegoods.amountinusd\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"licensegoodsDialogModal = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"licensegoodsConfirm\">确 定</el-button>\n      </div>\n    </el-dialog>\n  </div>\n</template>\n\n<script>\n//import './mock/license.js';\nimport licenseAPI from './api/licenseAPI.js';\nimport licensegoodsTable from './components/licensegoodsTable.vue';\nexport default {\n  data() {\n    return {\n      clientHeight: 0,\n      clientWidth: 0,\n      /*我的申请表格*/\n      inLicenseData: [],\n      /*待我审批表格*/\n      outLicenseData: [],\n      /*我的申请数据模型*/\n      inLicenseModel: {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n      },\n      outLicenseModel: {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n      },\n      /*进口搜索*/\n      insearch: {\n        licensekey: '',\n        importandexportcode: '',\n        companyname: '',\n        type: 'in',\n      },\n      /*出口搜索*/\n      outsearch: {\n        licensekey: '',\n        importandexportcode: '',\n        companyname: '',\n        type: 'out',\n      },\n      /*激活的tab页 */\n      activeName: 'inlicense',\n      /*我的申请表单校验规则 */\n      inLicenseRules: {\n        name: [{ required: true, message: '请输入项目名称', trigger: 'blur' }],\n        manager: [{ required: true, message: '请输入项目负责人', trigger: 'blur' }],\n      },\n      /*编辑添加框是否可见 */\n      inLicenseShow: false,\n      /*编辑添加框是否可见 */\n      outLicenseShow: false,\n      /*文件列表查看、编辑框是否可见 */\n      myFileDialogIsShow: false,\n      /*文件上传框是否可见 */\n      fileUploadDialogIsShow: false,\n      /*文件预览框是否显示 */\n      fileViewDialogIsShow: false,\n      /*审批进度 */\n      failDialogIsShow: false,\n      passDialogIsShow: false,\n      loadDialogIsShow: false,\n      /*进口许可证编辑模式：1添加，2编辑*/\n      editMode: 1,\n      /*出口许可证编辑模式：1添加，2编辑*/\n      outeditMode: 1,\n      /*文件类型：1申报文件，2审批文件 */\n      fileType: 1,\n      /*表单提交等待动画*/\n      confirmLoading: false,\n      /*我的申请表格选中行*/\n      inSelectedRows: [],\n      /*待我审核表格选中行*/\n      outSelectedRows: [],\n      /*文件表格选中行 */\n      fileSelectedRows: [],\n      /*开始日期初始化 */\n      startdatepicker: '',\n      /*结束日期初始化 */\n      enddatepicker: '',\n      /*我的申请当前页 */\n      myCurrentPage: 1,\n      /*我的申请表格可选页面大小*/\n      myPageSizes: [5, 10, 15, 20],\n      /*我的申请表格当前页面大小 */\n      myPageSize: 10,\n      /*我的申请表格数据总条数 */\n      myTotal: 16,\n      /*待我审核当前页 */\n      apCurrentPage: 1,\n      /*待我审核表格可选页面大小*/\n      apPageSizes: [5, 10, 15, 20],\n      /*待我审核表格当前页面大小 */\n      apPageSize: 10,\n      /*待我审核表格数据总条数 */\n      apTotal: 21,\n      /*文件列表数据 */\n      fileTableData: [],\n      /*文件上传初始化 */\n      fileList: [],\n      /*进度条百分比 */\n      percentage: 0,\n      // i: 0,\n      selectedLicensegoodsRow: {},\n      tmpLicensegoods: {},\n      licensegoodsDialogModal: false,\n    };\n  },\n  methods: {\n    addGoodsClick() {\n      this.editMode = 0;\n      this.tmpLicensegoods = {};\n      this.licensegoodsDialogModal = true;\n    },\n    editGoodsClick() {\n      this.editMode = 1;\n      this.tmpLicensegoods = Object.assign({}, this.selectedLicensegoodsRow);\n      this.licensegoodsDialogModal = true;\n    },\n    deleteGoodsClick() {\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done();\n          }\n          instance.confirmButtonLoading = true;\n\n          return licenseAPI\n            .deleteLicenseGoods(this.selectedLicensegoodsRow.id)\n            .then(data => {\n              instance.confirmButtonLoading = false;\n              done(data);\n            });\n        },\n      }).then(data => {\n          this.selectedLicensegoodsRow = [];\n          this.$notify({\n            title: '提示',\n            message: '删除成功！',\n            type: 'success',\n            duration: 2000,\n          });\n        }).catch(() => {\n          this.$notify.error({\n            title: '取消',\n            message: '操作取消！',\n            duration: 2000,\n          });\n        });\n    },\n    licensegoodsConfirm() {\n      if (this.editMode == 1) {\n        licenseAPI.updateLicenseGoods(this.tmpLicensegoods).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: data.message,\n              type: 'success',\n              duration: 2000,\n            });\n          }\n          this.licensegoodsDialogModal = false;\n        });\n      } else {\n        licenseAPI.addLicenseGoods(this.tmpLicensegoods).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: data.message,\n              type: 'success',\n              duration: 2000,\n            });\n          }\n          this.licensegoodsDialogModal = false;\n        });\n      }\n    },\n    licensegoodsTableRowClick(row) {\n      this.selectedLicensegoodsRow = row;\n    },\n    /*添加进口许可证*/\n    inAddClick() {\n      this.editMode = 1;\n      this.inLicenseModel = {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n        type: 'in',\n      };\n      this.inLicenseShow = true;\n      this.selectedLicensegoodsRow=[];\n    },\n    /*编辑进口许可证*/\n    inEditClick() {\n      this.editMode = 2;\n      this.inLicenseModel = Object.assign(\n        {},\n        this.inLicenseModel,\n        this.inSelectedRows[0]\n      );\n      this.inLicenseShow = true;\n      this.selectedLicensegoodsRow=[];\n    },\n    /*删除进口许可证*/\n    inDeleteClick() {\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done();\n            return;\n          }\n          this.confirmLoading = true;\n          let ids = [];\n          this.inSelectedRows.forEach(function(row) {\n            ids.push(row.id);\n          });\n          let idstr = ids.join();\n          return licenseAPI.deleteLicense(idstr)\n            .then(data => {\n              this.confirmLoading = false;\n              done(data);\n              this.inLicenseData = this.inLicenseData.filter(\n                val => !ids.includes(val.id)\n              );\n            });\n        },\n      }).then(data => {\n          this.inSelectedRows = [];\n          this.loadInlicenseList();\n          this.$notify({\n            title: '提示',\n            message: '删除成功！',\n            type: 'success',\n            duration: 2000,\n          });\n        })\n    },\n\n    /*添加出口许可证*/\n    outAddClick() {\n      this.outeditMode = 1;\n      this.outLicenseModel = {\n        name: '',\n        manager: '',\n        description: '',\n        starttime: '',\n        endtime: '',\n        type: 'out',\n      };\n      this.outLicenseShow = true;\n      this.selectedLicensegoodsRow=[];\n    },\n    /*编辑出口许可证*/\n    outEditClick() {\n      this.outeditMode = 2;\n      this.outLicenseModel = Object.assign(\n        {},\n        this.outLicenseModel,\n        this.outSelectedRows[0]\n      );\n      this.outLicenseShow = true;\n      this.selectedLicensegoodsRow=[];\n    },\n    /*删除出口许可证*/\n    outDeleteClick() {\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done();\n            return;\n          }\n          this.confirmLoading = true;\n          this.inSelectedRows.forEach(function(row) {\n            ids.push(row.id);\n          });\n          let idstr = ids.join();\n          return licenseAPI.deleteLicense(idstr)\n            .then(data => {\n              this.confirmLoading = false;\n              done(data);\n              this.outLicenseData = this.outLicenseData.filter(\n                val => !ids.includes(val.id)\n              );\n            });\n        },\n      }).then(data => {\n          this.outSelectedRows = [];\n          this.loadOutlicenseList();\n          this.$notify({\n            title: '提示',\n            message: '删除成功！',\n            type: 'success',\n            duration: 2000,\n          });\n        })\n    },\n\n    /*进口表格选中行改变*/\n    inOnSelectionChange(selection) {\n      this.inSelectedRows = selection;\n    },\n    /*保存进口许可证 */\n    inOkHandler() {\n      let validateForm = () => {\n        return new Promise((resolve, reject) => {\n          this.$refs['inLicenseRef'].validate(valid => {\n            if (valid) {\n              return resolve(true);\n            }\n            return reject(false);\n          });\n        });\n      };\n      let addForm = (res) => {\n        licenseAPI.addLicense(this.inLicenseModel).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: '保存成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n        });\n      };\n\n      let editForm = (res) => {\n        let index = this.inLicenseData.findIndex(\n          val => val.id === this.inLicenseModel.id\n        );\n        licenseAPI.updateLicense(this.inLicenseModel).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: '修改成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n        });\n      };\n\n      validateForm().then(() => {\n          this.confirmLoading = true;\n          if (this.editMode === 1) {\n            return addForm();\n          }\n          if (this.editMode === 2) {\n            return editForm();\n          }\n        }).then(res =>{\n          this.confirmLoading = false;\n          this.inLicenseShow = false;\n          this.inLicenseShow = false;\n          this.loadInlicenseList();\n        });\n    },\n\n    /*保存出口许可证 */\n    outOkHandler() {\n      let validateForm = () => {\n        return new Promise((resolve, reject) => {\n          this.$refs['outLicenseRef'].validate(valid => {\n            if (valid) {\n              return resolve(true);\n            }\n            return reject(false);\n          });\n        });\n      };\n      let outaddForm = () => {\n        licenseAPI.addLicense(this.outLicenseModel).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: '保存成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n        });\n      };\n\n      let outeditForm = () => {\n        let index = this.outLicenseData.findIndex(\n          val => val.id === this.outLicenseModel.id\n        );\n        licenseAPI.updateLicense(this.outLicenseModel).then(data => {\n          if (data.status == 1) {\n            this.$notify({\n              title: '成功',\n              message: '修改成功',\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify({\n              title: '失败',\n              message: data.message,\n              type: 'error',\n              duration: 2000\n            });\n          }\n        });\n      };\n\n      validateForm()\n        .then(() => {\n          this.confirmLoading = true;\n          if (this.outeditMode === 1) {\n            return outaddForm();\n          }\n          if (this.outeditMode === 2) {\n            return outeditForm();\n          }\n        })\n        .then(res => {\n          this.confirmLoading = false;\n          this.outLicenseShow = false;\n          this.outLicenseShow = false;\n           this.loadOutlicenseList();\n        });\n    },\n\n    /*出口表格选中行改变*/\n    outOnSelectionChange(selection) {\n      this.outSelectedRows = selection;\n    },\n\n    /*文件上传 */\n    fileUpload() {\n      this.fileUploadDialogIsShow = true;\n    },\n    /*点击确定文件上传 */\n    fileUploadOkHandler() {\n      this.$notify({\n        title: '成功',\n        message: '上传成功',\n        type: 'success',\n        duration: 2000,\n      });\n      this.fileUploadDialogIsShow = false;\n    },\n    /*文件上传成功 */\n    onUploadSuccess(response, file) {\n      this.$notify({\n        title: file.name,\n        message: '上传成功',\n        type: 'success',\n        duration: 2000,\n      });\n    },\n    /*文件下载 */\n    fileDownload() {\n      this.$notify({\n        title: '成功',\n        message: '下载成功',\n        type: 'success',\n        duration: 2000,\n      });\n    },\n    /*文件预览 */\n    fileView() {\n      this.fileViewDialogIsShow = true;\n    },\n    /*文件删除 */\n    fileDelete() {\n      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n      })\n        .then(() => {\n          let ids = [];\n          this.fileSelectedRows.forEach(function(row) {\n            ids.push(row.id);\n          });\n          return ids;\n        })\n        .then(ids => {\n          this.fileTableData = this.fileTableData.filter(\n            val => !ids.includes(val.id)\n          );\n          this.$notify.success({\n            title: '成功',\n            message: '删除成功',\n            duration: 2000,\n          });\n        });\n    },\n    /*加载进口许可证数据 */\n    loadInlicenseList() {\n      let pagedata = {\n        pageindex: this.myCurrentPage,\n        pagesize: this.myPageSize,\n      };\n      let search = Object.assign({}, this.insearch, pagedata);\n      licenseAPI.getInlicenseList(search).then(data => {\n        this.inLicenseData = data.data;\n        this.myTotal = data.total;\n      });\n    },\n    /*加载出口许可证数据 */\n    loadOutlicenseList() {\n      let pagedata = {\n        pageindex: this.myCurrentPage,\n        pagesize: this.myPageSize,\n      };\n      let search = Object.assign({}, this.outsearch, pagedata);\n      licenseAPI.getOutlicenseList(search).then(data => {\n        this.outLicenseData = data.data;\n        this.apTotal = data.total;\n      });\n    },\n\n    /*改变我的申请表格大小 */\n    myHandleSizeChange(val) {\n      this.myPageSize = val;\n      this.loadInlicenseList();\n    },\n    /*改变我的申请表格当前页 */\n    myHandleCurrentChange(val) {\n      this.myCurrentPage = val;\n      this.loadInlicenseList();\n    },\n    /*改变待我审核表格大小 */\n    apHandleSizeChange(val) {\n      this.apPageSize = val;\n      this.loadOutlicenseList();\n    },\n    /*改变待我审核表格当前页 */\n    apHandleCurrentChange(val) {\n      this.apCurrentPage = val;\n      this.loadOutlicenseList();\n    },\n  },\n  created() {\n    this.clientHeight = document.documentElement.clientHeight - 270;\n    let num = Math.floor(this.clientHeight / 40) - 1;\n    this.apPageSize = Math.floor(num / 5) * 5;\n    this.apPageSizes = [\n      this.apPageSize,\n      this.apPageSize * 2,\n      this.apPageSize * 4,\n    ];\n    this.myPageSize = Math.floor(num / 5) * 5;\n    this.myPageSizes = [\n      this.myPageSize,\n      this.myPageSize * 2,\n      this.myPageSize * 4,\n    ];\n    this.loadInlicenseList();\n    this.loadOutlicenseList();\n  },\n  components: {\n    'licensegoods-table': licensegoodsTable,\n  },\n};\n</script>\n<style>\n.projPage .el-tabs__header {\n  margin-bottom: 0;\n}\n\ninput[type='file'].el-upload__input {\n  display: none !important;\n  margin-bottom: -20px;\n}\n</style>\n\n<style scoped>\n.main-content-wrap {\n  padding: 10px;\n}\n.search-bar {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.demo-table-expand {\n  font-size: 12px;\n}\n\n.demo-table-expand label {\n  color: #99a9bf;\n}\n\n.demo-table-expand .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 47%;\n}\n\n.e-form .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n\n.filelist-toolbar {\n  margin-left: 1px;\n}\n\n.fileView-content {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 5px;\n  line-height: 20px;\n}\n\n.input-320 {\n  width: 320px;\n}\n\n.form-title {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 6%;\n  padding: 10px 0 5px 0;\n}\n\n.form-panel {\n  width: 90%;\n  margin-left: 5%;\n  padding: 20px 0 0 0;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.goods-panel {\n  width: 90%;\n  margin-left: 5%;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _licenseAPI = __webpack_require__(15);

var _licenseAPI2 = _interopRequireDefault(_licenseAPI);

var _licensegoodsTable = __webpack_require__(75);

var _licensegoodsTable2 = _interopRequireDefault(_licensegoodsTable);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        licensekey: '',
        importandexportcode: '',
        companyname: '',
        type: 'in'
      },
      /*出口搜索*/
      outsearch: {
        licensekey: '',
        importandexportcode: '',
        companyname: '',
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
      this.editMode = 0;
      this.tmpLicensegoods = {};
      this.licensegoodsDialogModal = true;
    },
    editGoodsClick: function editGoodsClick() {
      this.editMode = 1;
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

      if (this.editMode == 1) {
        _licenseAPI2.default.updateLicenseGoods(this.tmpLicensegoods).then(function (data) {
          if (data.status == 1) {
            _this2.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000
            });
          }
          _this2.licensegoodsDialogModal = false;
        });
      } else {
        _licenseAPI2.default.addLicenseGoods(this.tmpLicensegoods).then(function (data) {
          if (data.status == 1) {
            _this2.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000
            });
          }
          _this2.licensegoodsDialogModal = false;
        });
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
          _this4.inSelectedRows.forEach(function (row) {
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
          if (data.status == 1) {
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
          if (data.status == 1) {
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
          if (data.status == 1) {
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
          if (data.status == 1) {
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
        _this8.inLicenseData = data.data;
        _this8.myTotal = data.total;
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
        _this9.outLicenseData = data.data;
        _this9.apTotal = data.total;
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(76)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(78),
  /* template */
  __webpack_require__(79),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-10243f80",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\setting\\components\\licensegoodsTable.vue"
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("06a61ce9", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10243f80\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./licensegoodsTable.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10243f80\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./licensegoodsTable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.pack-table[data-v-10243f80] {\n  font-size: 10px;\n  min-width: 100%;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/components/licensegoodsTable.vue?66830b72"],"names":[],"mappings":";AA6CA;EACA,gBAAA;EACA,gBAAA;CACA","file":"licensegoodsTable.vue","sourcesContent":["<template>\n  <div>\n    <el-table :data=\"licensegoodsData\" tooltip-effect=\"dark\" class=\"pack-table\" highlight-current-row @row-click=\"rowClick\">\n      <el-table-column prop=\"specification\" min-width=\"150px\" label=\"规格、等级\"></el-table-column>\n      <el-table-column prop=\"unit\" min-width=\"100px\" label=\"单位\"></el-table-column>\n      <el-table-column prop=\"quantity\" min-width=\"100px\" label=\"数量\"></el-table-column>\n      <el-table-column prop=\"unitprice\" min-width=\"150px\" label=\"单价（USD）\"></el-table-column>\n      <el-table-column prop=\"amount\" min-width=\"150px\" label=\"总值（USD）\"></el-table-column>\n      <el-table-column prop=\"amountinusd\" min-width=\"150px\" label=\"总值折美元\"></el-table-column>\n    </el-table>\n  </div>\n</template>\n\n<script>\nimport licenseAPI from '../api/licenseAPI.js';\n//import '../mock/license.js';\n\nexport default {\n  data() {\n    return {\n      licensegoodsData: [],\n    };\n  },\n  watch: {\n    declarationID() {\n      licenseAPI.getLicenseGoods(this.licenseID).then(data => {\n        this.licensegoodsData = data.data;\n      });\n    },\n  },\n  mounted() {\n    licenseAPI.getLicenseGoods(this.licenseID).then(data => {\n      this.licensegoodsData = data.data;\n    });\n  },\n  methods: {\n    rowClick(row) {\n      this.$emit('row-click', row);\n    },\n  },\n  props: ['licenseID'],\n};\n</script>\n\n<style scoped>\n.pack-table {\n  font-size: 10px;\n  min-width: 100%;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _licenseAPI = __webpack_require__(15);

var _licenseAPI2 = _interopRequireDefault(_licenseAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import '../mock/license.js';

exports.default = {
  data: function data() {
    return {
      licensegoodsData: []
    };
  },

  watch: {
    declarationID: function declarationID() {
      var _this = this;

      _licenseAPI2.default.getLicenseGoods(this.licenseID).then(function (data) {
        _this.licensegoodsData = data.data;
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    _licenseAPI2.default.getLicenseGoods(this.licenseID).then(function (data) {
      _this2.licensegoodsData = data.data;
    });
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
/* 79 */
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
/* 80 */
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
      value: (_vm.insearch.licensekey),
      callback: function($$v) {
        _vm.$set(_vm.insearch, "licensekey", $$v)
      },
      expression: "insearch.licensekey"
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
      value: (_vm.insearch.companyname),
      callback: function($$v) {
        _vm.$set(_vm.insearch, "companyname", $$v)
      },
      expression: "insearch.companyname"
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
      value: (_vm.insearch.portofclearance),
      callback: function($$v) {
        _vm.$set(_vm.insearch, "portofclearance", $$v)
      },
      expression: "insearch.portofclearance"
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
      "prop": "licensekey",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "许可证号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "companyname",
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
      "prop": "trademode",
      "show-overflow-tooltip": "",
      "min-width": "10%",
      "label": "贸易方式"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "exportingcountry",
      "show-overflow-tooltip": "",
      "min-width": "10%",
      "label": "出口国"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "countryoforigin",
      "show-overflow-tooltip": "",
      "min-width": "10%",
      "label": "原产国家"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "portofclearance",
      "show-overflow-tooltip": "",
      "min-width": "10%",
      "label": "报关口岸"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "shippingtype",
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
      value: (_vm.outsearch.licensekey),
      callback: function($$v) {
        _vm.$set(_vm.outsearch, "licensekey", $$v)
      },
      expression: "outsearch.licensekey"
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
      value: (_vm.outsearch.companyname),
      callback: function($$v) {
        _vm.$set(_vm.outsearch, "companyname", $$v)
      },
      expression: "outsearch.companyname"
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
      value: (_vm.outsearch.portofclearance),
      callback: function($$v) {
        _vm.$set(_vm.outsearch, "portofclearance", $$v)
      },
      expression: "outsearch.portofclearance"
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
      "prop": "licensekey",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "许可证号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "companyname",
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
      "prop": "trademode",
      "show-overflow-tooltip": "",
      "min-width": "10%",
      "label": "贸易方式"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "importedcountry",
      "show-overflow-tooltip": "",
      "min-width": "12%",
      "label": "进口国"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "portofclearance",
      "show-overflow-tooltip": "",
      "min-width": "10%",
      "label": "报关口岸"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "certificationdate",
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
      "prop": "companyname"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.companyname),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "companyname", $$v)
      },
      expression: "inLicenseModel.companyname"
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
      "prop": "licensekey"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.licensekey),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "licensekey", $$v)
      },
      expression: "inLicenseModel.licensekey"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贸易方式",
      "prop": "trademode"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.trademode),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "trademode", $$v)
      },
      expression: "inLicenseModel.trademode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "出口国",
      "prop": "exportingcountry"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.exportingcountry),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "exportingcountry", $$v)
      },
      expression: "inLicenseModel.exportingcountry"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "原产国家",
      "prop": "countryoforigin"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.countryoforigin),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "countryoforigin", $$v)
      },
      expression: "inLicenseModel.countryoforigin"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "报关口岸",
      "prop": "portofclearance"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.portofclearance),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "portofclearance", $$v)
      },
      expression: "inLicenseModel.portofclearance"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "外汇来源",
      "prop": "sourceofforeignexchange"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.sourceofforeignexchange),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "sourceofforeignexchange", $$v)
      },
      expression: "inLicenseModel.sourceofforeignexchange"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "付款方式",
      "prop": "paymentmethod"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.paymentmethod),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "paymentmethod", $$v)
      },
      expression: "inLicenseModel.paymentmethod"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "最终用户",
      "prop": "enduser"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.enduser),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "enduser", $$v)
      },
      expression: "inLicenseModel.enduser"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "最终用途",
      "prop": "finalpurpose"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.finalpurpose),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "finalpurpose", $$v)
      },
      expression: "inLicenseModel.finalpurpose"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品名称",
      "prop": "goodsname"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.goodsname),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "goodsname", $$v)
      },
      expression: "inLicenseModel.goodsname"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品编号",
      "prop": "goodscode"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.goodscode),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "goodscode", $$v)
      },
      expression: "inLicenseModel.goodscode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输方式",
      "prop": "shippingtype"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.inLicenseModel.shippingtype),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "shippingtype", $$v)
      },
      expression: "inLicenseModel.shippingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "许可证截止日期",
      "prop": "expirationdateoflicense"
    }
  }, [_c('el-date-picker', {
    staticClass: "input-320",
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.inLicenseModel.expirationdateoflicense),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "expirationdateoflicense", $$v)
      },
      expression: "inLicenseModel.expirationdateoflicense"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "发证日期",
      "prop": "certificationdate"
    }
  }, [_c('el-date-picker', {
    staticClass: "input-320",
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.inLicenseModel.certificationdate),
      callback: function($$v) {
        _vm.$set(_vm.inLicenseModel, "certificationdate", $$v)
      },
      expression: "inLicenseModel.certificationdate"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.editMode === 1),
      expression: "editMode===1"
    }],
    attrs: {
      "label": "许可证文件",
      "prop": "declarationfile"
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
  }, [_vm._v("点击上传")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
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
      "prop": "companyname"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "350px"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.companyname),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "companyname", $$v)
      },
      expression: "outLicenseModel.companyname"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "发货人",
      "prop": "consignor"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "350px"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.consignee),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "consignee", $$v)
      },
      expression: "outLicenseModel.consignee"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "许可证号",
      "prop": "licensekey"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.licensekey),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "licensekey", $$v)
      },
      expression: "outLicenseModel.licensekey"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贸易方式",
      "prop": "trademode"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.trademode),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "trademode", $$v)
      },
      expression: "outLicenseModel.trademode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "进口国",
      "prop": "importedcountry"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.importedcountry),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "importedcountry", $$v)
      },
      expression: "outLicenseModel.importedcountry"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "合同号",
      "prop": "conractno"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.conractno),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "conractno", $$v)
      },
      expression: "outLicenseModel.conractno"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "报关口岸",
      "prop": "portofclearance"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.portofclearance),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "portofclearance", $$v)
      },
      expression: "outLicenseModel.portofclearance"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "付款方式",
      "prop": "paymentmethod"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.paymentmethod),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "paymentmethod", $$v)
      },
      expression: "outLicenseModel.paymentmethod"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品名称",
      "prop": "goodsname"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.goodsname),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "goodsname", $$v)
      },
      expression: "outLicenseModel.goodsname"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品编号",
      "prop": "goodscode"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.goodscode),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "goodscode", $$v)
      },
      expression: "outLicenseModel.goodscode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "运输方式",
      "prop": "shippingtype"
    }
  }, [_c('el-input', {
    staticClass: "input-320",
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.outLicenseModel.shippingtype),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "shippingtype", $$v)
      },
      expression: "outLicenseModel.shippingtype"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "许可证截止日期",
      "prop": "expirationdateoflicense"
    }
  }, [_c('el-date-picker', {
    staticClass: "input-320",
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.outLicenseModel.expirationdateoflicense),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "expirationdateoflicense", $$v)
      },
      expression: "outLicenseModel.expirationdateoflicense"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "发证日期",
      "prop": "certificationdate"
    }
  }, [_c('el-date-picker', {
    staticClass: "input-320",
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.outLicenseModel.certificationdate),
      callback: function($$v) {
        _vm.$set(_vm.outLicenseModel, "certificationdate", $$v)
      },
      expression: "outLicenseModel.certificationdate"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.editMode === 1),
      expression: "editMode===1"
    }],
    attrs: {
      "label": "许可证文件",
      "prop": "declarationfile"
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
  }, [_vm._v("点击上传")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
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
      "title": _vm.editMode == 1 ? '编辑商品信息' : '添加商品',
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(82)
  __webpack_require__(84)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(86),
  /* template */
  __webpack_require__(88),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-78b1af65",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\setting\\taxCutting.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] taxCutting.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78b1af65", Component.options)
  } else {
    hotAPI.reload("data-v-78b1af65", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("371371bc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-78b1af65\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./taxCutting.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-78b1af65\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./taxCutting.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-78b1af65] {\n    padding: 10px;\n}\n.search-bar[data-v-78b1af65] {\n  padding-bottom: 10px;\n}\n.page-wrap[data-v-78b1af65] {\n  margin-top: 20px;\n}\n.page-wrap .page[data-v-78b1af65] {\n  float: right;\n}\n.a-btn[data-v-78b1af65]:hover {\n  text-decoration:underline;\n}\n.demo-table-expand[data-v-78b1af65] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-78b1af65] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-78b1af65] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/taxCutting.vue?f2ca6f7c"],"names":[],"mappings":";AAqfA;IACA,cAAA;CACA;AACA;EACA,qBAAA;CACA;AACA;EACA,iBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,0BAAA;CACA;AAEA;EACA,gBAAA;CACA;AACA;EACA,eAAA;CACA;AACA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA","file":"taxCutting.vue","sourcesContent":["<template>\n<div :style=\"{width:clientWidth+'px'}\">\n  <el-toolbar>\n    <el-button class=\"z-toolbar-btn\" size=\"small\" :plain=\"true\" icon=\"plus\" @click=\"addTaxCuttingClick\">新建</el-button>\n    <el-button class=\"z-toolbar-btn\" size=\"small\" :disabled=\"selectedRows.length !== 1\" :plain=\"true\" icon=\"edit\" @click=\"editTaxCuttingClick\">编辑</el-button>\n    <el-button class=\"z-toolbar-btn\" size=\"small\" :disabled=\"selectedRows.length === 0\" :plain=\"true\" icon=\"delete\" @click=\"deleteTaxCuttingClick\">删除</el-button>\n  </el-toolbar>\n  <div class=\"main-content-wrap\">\n    <!-- 搜索 -->\n      <div class=\"search-bar fr\">\n        减免税大类：\n        <el-select  v-model=\"searchTaxCutting.largetype\" size=\"small\" style=\"width: 120px;\" clearable>\n          <el-option  v-for=\"largetype in largetypes\" :key=\"largetype.key\" :label=\"largetype.name\" :value=\"largetype.key\"></el-option>\n        </el-select>\n         减免税小类：\n        <el-select  v-model=\"searchTaxCutting.smalltype\" size=\"small\" style=\"width: 120px;\" clearable>\n          <el-option  v-for=\"smalltype in smalltypes\" :key=\"smalltype.key\" :label=\"smalltype.name\" :value=\"smalltype.key\"></el-option>\n        </el-select>\n        减免税方式：\n        <el-select  v-model=\"searchTaxCutting.way\" size=\"small\" style=\"width: 120px;\" clearable>\n          <el-option v-for=\"way in ways\" :key=\"way.key\" :label=\"way.name\" :value=\"way.key\"></el-option>\n        </el-select>\n        有效期：\n        <el-date-picker v-model=\"searchTaxCutting.starttime\" type=\"date\" placeholder=\"请选择日期\" size=\"small\" style=\"width:150px\" @change=\"dateStartTimeChangeClick\"></el-date-picker>\n        -\n        <el-date-picker v-model=\"searchTaxCutting.endtime\" type=\"date\" placeholder=\"请选择日期\" size=\"small\" style=\"width:150px\" @change=\"dateEndTimeChangeClick\"></el-date-picker>\n        <el-button size=\"small\" type=\"primary\" @click=\"searchTaxCuttingClick\" style=\"width: 60px;\">搜索</el-button>\n      </div>\n      <!-- 列表 -->\n      <el-table :data=\"taxCuttingTable\" tooltip-effect=\"dark\" highlight-current-row :height=\"clientHeight\" @selection-change=\"onSelectionChange\" v-loading=\"dataLoading\">\n        <el-table-column type=\"selection\" width=\"55\"></el-table-column>\n        <el-table-column type=\"expand\" class=\"column-a\">\n          <template slot-scope=\"props\">\n            <el-form label-position=\"left\" inline class=\"demo-table-expand\" label-width=\"120px\">\n              <el-form-item label=\"代码\">\n                <span>{{ props.row.code }}</span>\n              </el-form-item>\n              <el-form-item label=\"减免税大类\">\n                <span>{{ props.row.largetype }}</span>\n              </el-form-item>\n              <el-form-item label=\"减免税小类\">\n                <span>{{ props.row.smalltype }}</span>\n              </el-form-item>\n              <el-form-item label=\"减免税方式\">\n                <span>{{ props.row.way }}</span>\n              </el-form-item>\n              <el-form-item label=\"减免数量上限\">\n                <span>{{ props.row.amountcap }}</span>\n              </el-form-item>\n              <el-form-item label=\"减免税率\">\n                <span>{{ props.row.rate }}</span>\n              </el-form-item>\n               <el-form-item label=\"有效期\">\n                <span>{{ props.row.validitydate }}</span>\n              </el-form-item>\n              <el-form-item label=\"政策文件\" style=\"width:100%;\">\n               <a @click=\"lookPolicyPaperClick(props.row)\" class=\"a-btn\">{{props.row.policypapertitle}}</a>\n              </el-form-item>\n              <!--<el-form-item label=\"政策文件内容\" style=\"width:100%;\">\n                <p style=\"text-indent:35px;\">{{ props.row.policypapercontent }}</p>\n              </el-form-item> -->\n            </el-form>\n          </template>\n        </el-table-column>\n        <el-table-column prop=\"code\" show-overflow-tooltip min-width=\"20%\" label=\"代码\"></el-table-column>\n        <el-table-column prop=\"largetype\" show-overflow-tooltip min-width=\"20%\" label=\"减免税大类\"></el-table-column>\n        <el-table-column prop=\"smalltype\" show-overflow-tooltip min-width=\"20%\" label=\"减免税小类\"></el-table-column>\n        <el-table-column prop=\"way\" show-overflow-tooltip min-width=\"20%\" label=\"减免税方式\"></el-table-column>\n        <el-table-column prop=\"amountcap\" show-overflow-tooltip min-width=\"20%\" label=\"减免数量上限\"></el-table-column>\n        <el-table-column prop=\"rate\" show-overflow-tooltip min-width=\"15%\" label=\"减免税率\"></el-table-column>\n        <el-table-column show-overflow-tooltip min-width=\"30%\" label=\"政策文件\">\n           <template slot-scope=\"scope\">\n             <a @click=\"lookPolicyPaperClick(scope.row)\" class=\"a-btn\">{{scope.row.policypapertitle}}</a>\n           </template>\n        </el-table-column>\n        <el-table-column prop=\"validitydate\" show-overflow-tooltip min-width=\"20%\" label=\"有效期\"></el-table-column>\n      </el-table>\n      <!--分页 -->\n      <div class=\"page-wrap\">\n        <el-pagination class=\"page\" @size-change=\"sizeChangeHandler\" @current-change=\"currentChangeHandler\" :current-page=\"currentPage\" :page-sizes=\"pageSizes\" :page-size=\"pageSize\" :total=\"total\" layout=\"total, sizes, prev, pager, next\">\n        </el-pagination>\n      </div>\n    </div>\n    <!-- 新建、编辑 -->\n    <el-dialog :title=\"showTitleMode === 0 ? '新建' : '编辑'\" :visible.sync=\"showAddDialog\">\n      <el-form label-width=\"140px\" :model=\"tmpTaxCutting\" :rules=\"taxCuttingRules\" ref=\"taxCuttingForm\">\n        <el-form-item prop=\"largetype\" label=\"减免税大类：\">\n          <el-select  v-model=\"tmpTaxCutting.largetype\" size=\"small\" clearable>\n            <el-option label=\"鼓励高新技术\" value=\"large\"></el-option>\n           <!--  <el-option  v-for=\"largetype in largetypes\" :key=\"largetype.key\" :label=\"largetype.name\" :value=\"largetype.key\"></el-option> -->\n          </el-select>\n        </el-form-item>\n        <el-form-item prop=\"smalltype\" label=\"减免税小类：\">\n          <el-select  v-model=\"tmpTaxCutting.smalltype\" size=\"small\" clearable>\n            <el-option label=\"支持科技事业\" value=\"technology\"></el-option>\n           <!--  <el-option  v-for=\"smalltype in smalltypes\" :key=\"smalltype.key\" :label=\"smalltype.name\" :value=\"smalltype.key\"></el-option> -->\n          </el-select>\n        </el-form-item>\n        <el-form-item prop=\"smalltype\" label=\"减免税方式：\">\n          <el-select  v-model=\"tmpTaxCutting.way\" size=\"small\" clearable>\n            <el-option label=\"免税\" value=\"approval\"></el-option>\n            <el-option label=\"税率减免\" value=\"filing\"></el-option>\n           <!--  <el-option v-for=\"way in ways\" :key=\"way.key\" :label=\"way.name\" :value=\"way.key\"></el-option> -->\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"减免数量上限：\">\n          <el-input placeholder=\"请输入减免数量上限\" v-model=\"tmpTaxCutting.amountcap\" style=\"width:215px;\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"减免税率：\">\n          <el-input placeholder=\"请输入减免税率\" v-model=\"tmpTaxCutting.rate\" style=\"width:215px;\"></el-input>\n        </el-form-item>\n        <el-form-item prop=\"starttime\" label=\"起始时间：\">\n          <el-date-picker v-model=\"tmpTaxCutting.starttime\" type=\"date\" placeholder=\"请选择日期\" size=\"small\" @change=\"dateStartDateChangeClick\" style=\"width:215px;\"></el-date-picker>\n        </el-form-item>\n        <el-form-item prop=\"endtime\" label=\"截止时间：\">\n          <el-date-picker v-model=\"tmpTaxCutting.endtime\" type=\"date\" placeholder=\"请选择日期\" size=\"small\" @change=\"dateEndDateChangeClick\" style=\"width:215px;\"></el-date-picker>\n        </el-form-item>\n        <el-form-item prop=\"policypapertitle\" label=\"政策文件标题：\">\n          <el-input placeholder=\"请输入政策文件标题\" v-model=\"tmpTaxCutting.policypapertitle\" ></el-input>\n        </el-form-item>\n        <el-form-item prop=\"policypapercontent\" label=\"政策文件内容：\">\n          <el-input placeholder=\"请输入政策文件内容\" type=\"textarea\" v-model=\"tmpTaxCutting.policypapercontent\" class=\"content\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"showAddDialog = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"confrimAddClick\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n    <!-- 政策文件查看 -->\n    <el-dialog title=\"查看政策文件\" :visible.sync=\"showLookDialog\">\n      <el-card class=\"box-card look-card\">\n        <div slot=\"header\" class=\"clearfix\">\n          <strong style=\"font-size: 18px;text-align:center; \">{{tmpTaxCutting.policypapertitle}}</strong>\n        </div>\n        <div style=\"text-indent:35px\">\n          {{tmpTaxCutting.policypapercontent}}\n        </div>\n      </el-card>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"showLookDialog = false\">关 闭</el-button>\n      </div>\n    </el-dialog>\n</div>\n</template>\n\n<script>\nimport taxCuttingAPI from './api/taxCuttingAPI.js'\n/* import './mock/taxCutting.js' */\n//require('./mock/gossip.js')\n\nexport default {\n    data() {\n        return {\n          clientWidth: 0,\n          showLookDialog: false,\n          selectedRows: [],\n          taxCuttingRules: {\n            largetype: [\n              {\n                trigger: 'change', required: true,\n                validator: (rule, value, callback) => {\n                  if (value) {\n                    callback();\n                  } else {\n                    callback(new Error('请选择减免税大类'));\n                  }\n                }\n              }\n            ],\n            smalltype: [\n              {\n                trigger: 'change', required: true,\n                validator: (rule, value, callback) => {\n                  if (value) {\n                    callback();\n                  } else {\n                    callback(new Error('请选择减免税小类'));\n                  }\n                }\n              }\n            ],\n            way: [\n              {\n                trigger: 'change', required: true,\n                validator: (rule, value, callback) => {\n                  if (value) {\n                    callback();\n                  } else {\n                    callback(new Error('请选择减免税方式'));\n                  }\n                }\n              }\n            ],\n            starttime: [\n              {trigger: 'change', required: true,\n                validator: (rule, value, callback) => {\n                  if (value) {\n                    callback();\n                  } else {\n                    callback(new Error('请选择起始时间'));\n                  }\n                }\n              }\n            ],\n            endtime: [\n              {trigger: 'change', required: true,\n                validator: (rule, value, callback) => {\n                  if (value) {\n                    callback();\n                  } else {\n                    callback(new Error('请选择截止时间'));\n                  }\n                }\n              }\n            ],\n            policypapertitle: [\n              { required: true, message: '请输入政策文件标题', trigger: 'blur' },\n              { min: 1, max: 400, message: '长度在 1 到 400 个字符', trigger: 'blur' }\n            ],\n            policypapercontent: [\n              { required: true, message: '请输入政策文件内容', trigger: 'blur' },\n              { min: 1, max: 4000, message: '长度在 1 到 4000 个字符', trigger: 'blur' }\n            ],\n          },\n          showTitleMode: 0, // 0 新建 1 编辑\n          showAddDialog: false, //新建dialog显示状态\n          tmpTaxCutting: {},\n          searchTaxCutting: {\n            largetype: '',\n            smalltype: '',\n            way: '',\n            starttime: '',\n            endtime: ''\n          }, //搜索\n          dataLoading: false,\n          ways: [], //减免方式\n          smalltypes: [], //减免税小类\n          largetypes: [], //减免税大类\n          currentPage: 1, //当前页\n          pageSize: 10, //每页数\n          clientHeight: 0,\n          taxCuttingTable: [], //减免税列表数据\n          total: 0, //总行数\n          pageSizes: [10,20,30], //每页分页数量\n        }\n    },\n    methods: {\n      //查看政策文件\n      lookPolicyPaperClick(row) {\n        this.tmpTaxCutting = Object.assign({}, row);\n        this.showLookDialog = true;\n      },\n      //新建编辑确定\n      confrimAddClick() {\n        let validateForm = () => {\n          return new Promise((resolve, reject) => {\n            this.$refs['taxCuttingForm'].validate((valid) => {\n              if (valid) {\n                return resolve(true);\n              }\n              return reject(false);\n            });\n          });\n        };\n        validateForm().then(() => {\n          if(this.showTitleMode === 0) {\n            if(this.tmpTaxCutting.largetype === 'large'){\n              this.tmpTaxCutting.largetype = '鼓励高新技术';\n            }else{\n              this.tmpTaxCutting.largetype = '';\n            }\n            if(this.tmpTaxCutting.smalltype === 'technology'){\n              this.tmpTaxCutting.smalltype = '支持科技事业';\n            }else{\n              this.tmpTaxCutting.smalltype = '';\n            }\n            if(this.tmpTaxCutting.way === 'approval'){\n              this.tmpTaxCutting.way = '免税';\n            }else if(this.tmpTaxCutting.way === 'filing'){\n              this.tmpTaxCutting.way = '税率减免';\n            }else{\n              this.tmpTaxCutting.way = '';\n            }\n            this.tmpTaxCutting.validitydate = this.tmpTaxCutting.starttime + \" - \" + this.tmpTaxCutting.endtime;\n            this.tmpTaxCutting.code = Math.round(Math.random() * 10000);\n            this.tmpTaxCutting.id =  Math.round(Math.random() * 10000);\n            taxCuttingAPI.addTaxCuttingData(this.tmpTaxCutting).then(data => {\n              this.taxCuttingTable = [\n                {\n                  id: Math.round(Math.random() * 10000),\n                  code: Math.round(Math.random() * 10000),\n                  largetype: this.tmpTaxCutting.largetype,\n                  smalltype: this.tmpTaxCutting.smalltype,\n                  way: this.tmpTaxCutting.way,\n                  amountcap: this.tmpTaxCutting.amountcap,\n                  rate: this.tmpTaxCutting.rate,\n                  policypapertitle: this.tmpTaxCutting.policypapertitle,\n                  policypapercontent: this.tmpTaxCutting.policypapercontent,\n                  validitydate: this.tmpTaxCutting.starttime + \" - \" + this.tmpTaxCutting.endtime,\n                },\n                ...this.taxCuttingTable\n              ]\n              if(data.status === 1) {\n                this.showAddDialog = false;\n                this.$message.success(data.message);\n              }else {\n                this.$message.error(data.message);\n              }\n            })\n          }else if(this.showTitleMode === 1) {\n            taxCuttingAPI.editTaxCuttingData(this.tmpTaxCutting).then(data => {\n              let index = this.taxCuttingTable.findIndex(val => val.id === this.tmpTaxCutting.id);\n                this.taxCuttingTable = [\n                  ...this.taxCuttingTable.slice(0, index),\n                  this.tmpTaxCutting,\n                  ...this.taxCuttingTable.slice(index + 1)\n                ];\n              if(data.status === 1) {\n                 this.showAddDialog = false;\n                 this.$message.success(data.message);\n              }else {\n                this.$message.error(data.message);\n              }\n            })\n          }\n        }).catch(() => {\n           this.$message.error('没有正确填写表单项');\n        })\n      },\n      //编辑\n      editTaxCuttingClick() {\n        this.showTitleMode = 1;\n        this.tmpTaxCutting = Object.assign({}, this.selectedRows[0]);\n        this.showAddDialog = true;\n      },\n      //新建\n      addTaxCuttingClick() {\n        this.showTitleMode = 0;\n        this.tmpTaxCutting = {\n          id: '',\n          code: '',\n          largetype: '',\n          smalltype: '',\n          way: '',\n          validitydate: '',\n          starttime: '',\n          endtime: '',\n          policypapertitle: '',\n          policypapercontent: ''\n        },\n        this.showAddDialog = true;\n      },\n      //删除\n    deleteTaxCuttingClick() {\n      let rowIds = [];\n      this.selectedRows.forEach(function(row) {\n        rowIds.push(row.id);\n      });\n\n      this.$confirm(\"确认删除所选的消息?\", '提示', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action == 'confirm') {\n            instance.confirmButtonLoading = true;\n            return taxCuttingAPI.deleteTaxCuttingData(rowIds).then(data => {\n              if (data.status == 1) {\n                this.taxCuttingTable = this.taxCuttingTable.filter(val => !rowIds.includes(val.id));\n                this.$notify({\n                  title: '成功',\n                  message: data.message,\n                  type: 'success',\n                  duration: 2000,\n                });\n              } else {\n                this.$alert(data.message);\n              }\n              instance.confirmButtonLoading = false;\n              done(data);\n            });\n          } else {\n            done();\n          }\n        }\n      }).catch(() => {\n        /* this.$notify.info({\n          title: '取消',\n          message: '操作取消！',\n          duration: 2000\n        }); */\n      });\n    },\n      //格式化时间 格式化时间为yyyy-MM-dd hh:mm:ss\n      formatDate(date, fmt) {\n        if (/(y+)/.test(fmt)) {\n          fmt = fmt.replace(\n            RegExp.$1,\n            (date.getFullYear() + '').substr(4 - RegExp.$1.length)\n          )\n        }\n        let o = {\n          'M+': date.getMonth() + 1,\n          'd+': date.getDate(),\n          'h+': date.getHours(),\n          'm+': date.getMinutes(),\n          's+': date.getSeconds()\n        }\n        for (let k in o) {\n          if (new RegExp(`(${k})`).test(fmt)) {\n            let str = o[k] + ''\n            fmt = fmt.replace(\n              RegExp.$1,\n              RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length)\n            )\n          }\n        }\n        return fmt\n      },\n      //起始时间格式转换事件\n      dateStartTimeChangeClick() {\n        this.searchTaxCutting.starttime = this.formatDate(new Date(this.searchTaxCutting.starttime), 'yyyy-MM-dd');\n      },\n      //截止时间格式转换事件\n      dateEndTimeChangeClick() {\n        this.searchTaxCutting.endtime = this.formatDate(new Date(this.searchTaxCutting.endtime), 'yyyy-MM-dd');\n      },\n      //有效期\n      dateStartDateChangeClick() {\n        this.tmpTaxCutting.starttime = this.formatDate(new Date(this.tmpTaxCutting.starttime), 'yyyy-MM-dd');\n      },\n      dateEndDateChangeClick() {\n        this.tmpTaxCutting.endtime = this.formatDate(new Date(this.tmpTaxCutting.endtime), 'yyyy-MM-dd');\n      },\n      //搜索\n      searchTaxCuttingClick() {\n        this.getTaxCuttingData();\n      },\n      //选中行\n      onSelectionChange(selection) {\n        this.selectedRows = selection;\n      },\n      //每页数设置\n      sizeChangeHandler(val) {\n        this.pageSize = val;\n      },\n      //当前页设置\n      currentChangeHandler(val) {\n        this.currentPage = val;\n      },\n      //减免税列表数据加载\n      getTaxCuttingData(){\n        this.dataLoading = true;\n        taxCuttingAPI.getTaxCuttingData(this.currentPage,this.pageSize,this.searchTaxCutting.largetype,this.searchTaxCutting.smalltype,this.searchTaxCutting.way,this.searchTaxCutting.starttime,this.searchTaxCutting.endtime).then(data => {\n          this.taxCuttingTable = data.data;\n          this.total = data.total;\n           if (this.searchTaxCutting.largetype != '') {\n            this.taxCuttingTable = this.taxCuttingTable.filter(val => val.largetype.indexOf(this.searchTaxCutting.largetype) != -1)\n          }\n          if (this.searchTaxCutting.smalltype != '') {\n            this.taxCuttingTable = this.taxCuttingTable.filter(val => val.smalltype.indexOf(this.searchTaxCutting.smalltype) != -1)\n          }\n          if (this.searchTaxCutting.way != '') {\n            this.taxCuttingTable = this.taxCuttingTable.filter(val => val.way.indexOf(this.searchTaxCutting.way) != -1)\n          }\n          this.dataLoading = false;\n        })\n      },\n      //减免税大类数据加载\n     /*  getLargeTypesData() {\n        taxCuttingAPI.getLargeTypesData().then(data => {\n          this.largetypes = data.data;\n        })\n      },\n      //减免税小类数据加载\n      getSmallTypesData() {\n        taxCuttingAPI.getSmallTypesData().then(data => {\n          this.smalltypes = data.data;\n        })\n      },\n      //减免方式数据加载\n      getWaysData() {\n        taxCuttingAPI.getWaysData().then(data => {\n          this.ways = data.data;\n        })\n      }, */\n    },\n    created() {\n      this.clientWidth = document.documentElement.clientWidth - 200;\n      this.clientHeight = document.documentElement.clientHeight - 230;\n      this.getTaxCuttingData();\n      /* this.getLargeTypesData();\n      this.getSmallTypesData();\n      this.getWaysData(); */\n   }\n}\n</script>\n\n<style scoped>\n  .main-content-wrap {\n      padding: 10px;\n  }\n  .search-bar {\n    padding-bottom: 10px;\n  }\n  .page-wrap {\n    margin-top: 20px;\n  }\n\n  .page-wrap .page {\n    float: right;\n  }\n\n  .a-btn:hover {\n    text-decoration:underline;\n  }\n\n  .demo-table-expand {\n    font-size: 12px;\n  }\n  .demo-table-expand label {\n    color: #99a9bf;\n  }\n  .demo-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 45%;\n  }\n</style>\n<style>\n  .content .el-textarea__inner {\n    height: 300px;\n  }\n  .look-card .el-card__header{\n    text-align: center;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("4cb62bb0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-78b1af65\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./taxCutting.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-78b1af65\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./taxCutting.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.content .el-textarea__inner {\n  height: 300px;\n}\n.look-card .el-card__header{\n  text-align: center;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/taxCutting.vue?f2ca6f7c"],"names":[],"mappings":";AAohBA;EACA,cAAA;CACA;AACA;EACA,mBAAA;CACA","file":"taxCutting.vue","sourcesContent":["<template>\n<div :style=\"{width:clientWidth+'px'}\">\n  <el-toolbar>\n    <el-button class=\"z-toolbar-btn\" size=\"small\" :plain=\"true\" icon=\"plus\" @click=\"addTaxCuttingClick\">新建</el-button>\n    <el-button class=\"z-toolbar-btn\" size=\"small\" :disabled=\"selectedRows.length !== 1\" :plain=\"true\" icon=\"edit\" @click=\"editTaxCuttingClick\">编辑</el-button>\n    <el-button class=\"z-toolbar-btn\" size=\"small\" :disabled=\"selectedRows.length === 0\" :plain=\"true\" icon=\"delete\" @click=\"deleteTaxCuttingClick\">删除</el-button>\n  </el-toolbar>\n  <div class=\"main-content-wrap\">\n    <!-- 搜索 -->\n      <div class=\"search-bar fr\">\n        减免税大类：\n        <el-select  v-model=\"searchTaxCutting.largetype\" size=\"small\" style=\"width: 120px;\" clearable>\n          <el-option  v-for=\"largetype in largetypes\" :key=\"largetype.key\" :label=\"largetype.name\" :value=\"largetype.key\"></el-option>\n        </el-select>\n         减免税小类：\n        <el-select  v-model=\"searchTaxCutting.smalltype\" size=\"small\" style=\"width: 120px;\" clearable>\n          <el-option  v-for=\"smalltype in smalltypes\" :key=\"smalltype.key\" :label=\"smalltype.name\" :value=\"smalltype.key\"></el-option>\n        </el-select>\n        减免税方式：\n        <el-select  v-model=\"searchTaxCutting.way\" size=\"small\" style=\"width: 120px;\" clearable>\n          <el-option v-for=\"way in ways\" :key=\"way.key\" :label=\"way.name\" :value=\"way.key\"></el-option>\n        </el-select>\n        有效期：\n        <el-date-picker v-model=\"searchTaxCutting.starttime\" type=\"date\" placeholder=\"请选择日期\" size=\"small\" style=\"width:150px\" @change=\"dateStartTimeChangeClick\"></el-date-picker>\n        -\n        <el-date-picker v-model=\"searchTaxCutting.endtime\" type=\"date\" placeholder=\"请选择日期\" size=\"small\" style=\"width:150px\" @change=\"dateEndTimeChangeClick\"></el-date-picker>\n        <el-button size=\"small\" type=\"primary\" @click=\"searchTaxCuttingClick\" style=\"width: 60px;\">搜索</el-button>\n      </div>\n      <!-- 列表 -->\n      <el-table :data=\"taxCuttingTable\" tooltip-effect=\"dark\" highlight-current-row :height=\"clientHeight\" @selection-change=\"onSelectionChange\" v-loading=\"dataLoading\">\n        <el-table-column type=\"selection\" width=\"55\"></el-table-column>\n        <el-table-column type=\"expand\" class=\"column-a\">\n          <template slot-scope=\"props\">\n            <el-form label-position=\"left\" inline class=\"demo-table-expand\" label-width=\"120px\">\n              <el-form-item label=\"代码\">\n                <span>{{ props.row.code }}</span>\n              </el-form-item>\n              <el-form-item label=\"减免税大类\">\n                <span>{{ props.row.largetype }}</span>\n              </el-form-item>\n              <el-form-item label=\"减免税小类\">\n                <span>{{ props.row.smalltype }}</span>\n              </el-form-item>\n              <el-form-item label=\"减免税方式\">\n                <span>{{ props.row.way }}</span>\n              </el-form-item>\n              <el-form-item label=\"减免数量上限\">\n                <span>{{ props.row.amountcap }}</span>\n              </el-form-item>\n              <el-form-item label=\"减免税率\">\n                <span>{{ props.row.rate }}</span>\n              </el-form-item>\n               <el-form-item label=\"有效期\">\n                <span>{{ props.row.validitydate }}</span>\n              </el-form-item>\n              <el-form-item label=\"政策文件\" style=\"width:100%;\">\n               <a @click=\"lookPolicyPaperClick(props.row)\" class=\"a-btn\">{{props.row.policypapertitle}}</a>\n              </el-form-item>\n              <!--<el-form-item label=\"政策文件内容\" style=\"width:100%;\">\n                <p style=\"text-indent:35px;\">{{ props.row.policypapercontent }}</p>\n              </el-form-item> -->\n            </el-form>\n          </template>\n        </el-table-column>\n        <el-table-column prop=\"code\" show-overflow-tooltip min-width=\"20%\" label=\"代码\"></el-table-column>\n        <el-table-column prop=\"largetype\" show-overflow-tooltip min-width=\"20%\" label=\"减免税大类\"></el-table-column>\n        <el-table-column prop=\"smalltype\" show-overflow-tooltip min-width=\"20%\" label=\"减免税小类\"></el-table-column>\n        <el-table-column prop=\"way\" show-overflow-tooltip min-width=\"20%\" label=\"减免税方式\"></el-table-column>\n        <el-table-column prop=\"amountcap\" show-overflow-tooltip min-width=\"20%\" label=\"减免数量上限\"></el-table-column>\n        <el-table-column prop=\"rate\" show-overflow-tooltip min-width=\"15%\" label=\"减免税率\"></el-table-column>\n        <el-table-column show-overflow-tooltip min-width=\"30%\" label=\"政策文件\">\n           <template slot-scope=\"scope\">\n             <a @click=\"lookPolicyPaperClick(scope.row)\" class=\"a-btn\">{{scope.row.policypapertitle}}</a>\n           </template>\n        </el-table-column>\n        <el-table-column prop=\"validitydate\" show-overflow-tooltip min-width=\"20%\" label=\"有效期\"></el-table-column>\n      </el-table>\n      <!--分页 -->\n      <div class=\"page-wrap\">\n        <el-pagination class=\"page\" @size-change=\"sizeChangeHandler\" @current-change=\"currentChangeHandler\" :current-page=\"currentPage\" :page-sizes=\"pageSizes\" :page-size=\"pageSize\" :total=\"total\" layout=\"total, sizes, prev, pager, next\">\n        </el-pagination>\n      </div>\n    </div>\n    <!-- 新建、编辑 -->\n    <el-dialog :title=\"showTitleMode === 0 ? '新建' : '编辑'\" :visible.sync=\"showAddDialog\">\n      <el-form label-width=\"140px\" :model=\"tmpTaxCutting\" :rules=\"taxCuttingRules\" ref=\"taxCuttingForm\">\n        <el-form-item prop=\"largetype\" label=\"减免税大类：\">\n          <el-select  v-model=\"tmpTaxCutting.largetype\" size=\"small\" clearable>\n            <el-option label=\"鼓励高新技术\" value=\"large\"></el-option>\n           <!--  <el-option  v-for=\"largetype in largetypes\" :key=\"largetype.key\" :label=\"largetype.name\" :value=\"largetype.key\"></el-option> -->\n          </el-select>\n        </el-form-item>\n        <el-form-item prop=\"smalltype\" label=\"减免税小类：\">\n          <el-select  v-model=\"tmpTaxCutting.smalltype\" size=\"small\" clearable>\n            <el-option label=\"支持科技事业\" value=\"technology\"></el-option>\n           <!--  <el-option  v-for=\"smalltype in smalltypes\" :key=\"smalltype.key\" :label=\"smalltype.name\" :value=\"smalltype.key\"></el-option> -->\n          </el-select>\n        </el-form-item>\n        <el-form-item prop=\"smalltype\" label=\"减免税方式：\">\n          <el-select  v-model=\"tmpTaxCutting.way\" size=\"small\" clearable>\n            <el-option label=\"免税\" value=\"approval\"></el-option>\n            <el-option label=\"税率减免\" value=\"filing\"></el-option>\n           <!--  <el-option v-for=\"way in ways\" :key=\"way.key\" :label=\"way.name\" :value=\"way.key\"></el-option> -->\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"减免数量上限：\">\n          <el-input placeholder=\"请输入减免数量上限\" v-model=\"tmpTaxCutting.amountcap\" style=\"width:215px;\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"减免税率：\">\n          <el-input placeholder=\"请输入减免税率\" v-model=\"tmpTaxCutting.rate\" style=\"width:215px;\"></el-input>\n        </el-form-item>\n        <el-form-item prop=\"starttime\" label=\"起始时间：\">\n          <el-date-picker v-model=\"tmpTaxCutting.starttime\" type=\"date\" placeholder=\"请选择日期\" size=\"small\" @change=\"dateStartDateChangeClick\" style=\"width:215px;\"></el-date-picker>\n        </el-form-item>\n        <el-form-item prop=\"endtime\" label=\"截止时间：\">\n          <el-date-picker v-model=\"tmpTaxCutting.endtime\" type=\"date\" placeholder=\"请选择日期\" size=\"small\" @change=\"dateEndDateChangeClick\" style=\"width:215px;\"></el-date-picker>\n        </el-form-item>\n        <el-form-item prop=\"policypapertitle\" label=\"政策文件标题：\">\n          <el-input placeholder=\"请输入政策文件标题\" v-model=\"tmpTaxCutting.policypapertitle\" ></el-input>\n        </el-form-item>\n        <el-form-item prop=\"policypapercontent\" label=\"政策文件内容：\">\n          <el-input placeholder=\"请输入政策文件内容\" type=\"textarea\" v-model=\"tmpTaxCutting.policypapercontent\" class=\"content\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"showAddDialog = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"confrimAddClick\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n    <!-- 政策文件查看 -->\n    <el-dialog title=\"查看政策文件\" :visible.sync=\"showLookDialog\">\n      <el-card class=\"box-card look-card\">\n        <div slot=\"header\" class=\"clearfix\">\n          <strong style=\"font-size: 18px;text-align:center; \">{{tmpTaxCutting.policypapertitle}}</strong>\n        </div>\n        <div style=\"text-indent:35px\">\n          {{tmpTaxCutting.policypapercontent}}\n        </div>\n      </el-card>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"showLookDialog = false\">关 闭</el-button>\n      </div>\n    </el-dialog>\n</div>\n</template>\n\n<script>\nimport taxCuttingAPI from './api/taxCuttingAPI.js'\n/* import './mock/taxCutting.js' */\n//require('./mock/gossip.js')\n\nexport default {\n    data() {\n        return {\n          clientWidth: 0,\n          showLookDialog: false,\n          selectedRows: [],\n          taxCuttingRules: {\n            largetype: [\n              {\n                trigger: 'change', required: true,\n                validator: (rule, value, callback) => {\n                  if (value) {\n                    callback();\n                  } else {\n                    callback(new Error('请选择减免税大类'));\n                  }\n                }\n              }\n            ],\n            smalltype: [\n              {\n                trigger: 'change', required: true,\n                validator: (rule, value, callback) => {\n                  if (value) {\n                    callback();\n                  } else {\n                    callback(new Error('请选择减免税小类'));\n                  }\n                }\n              }\n            ],\n            way: [\n              {\n                trigger: 'change', required: true,\n                validator: (rule, value, callback) => {\n                  if (value) {\n                    callback();\n                  } else {\n                    callback(new Error('请选择减免税方式'));\n                  }\n                }\n              }\n            ],\n            starttime: [\n              {trigger: 'change', required: true,\n                validator: (rule, value, callback) => {\n                  if (value) {\n                    callback();\n                  } else {\n                    callback(new Error('请选择起始时间'));\n                  }\n                }\n              }\n            ],\n            endtime: [\n              {trigger: 'change', required: true,\n                validator: (rule, value, callback) => {\n                  if (value) {\n                    callback();\n                  } else {\n                    callback(new Error('请选择截止时间'));\n                  }\n                }\n              }\n            ],\n            policypapertitle: [\n              { required: true, message: '请输入政策文件标题', trigger: 'blur' },\n              { min: 1, max: 400, message: '长度在 1 到 400 个字符', trigger: 'blur' }\n            ],\n            policypapercontent: [\n              { required: true, message: '请输入政策文件内容', trigger: 'blur' },\n              { min: 1, max: 4000, message: '长度在 1 到 4000 个字符', trigger: 'blur' }\n            ],\n          },\n          showTitleMode: 0, // 0 新建 1 编辑\n          showAddDialog: false, //新建dialog显示状态\n          tmpTaxCutting: {},\n          searchTaxCutting: {\n            largetype: '',\n            smalltype: '',\n            way: '',\n            starttime: '',\n            endtime: ''\n          }, //搜索\n          dataLoading: false,\n          ways: [], //减免方式\n          smalltypes: [], //减免税小类\n          largetypes: [], //减免税大类\n          currentPage: 1, //当前页\n          pageSize: 10, //每页数\n          clientHeight: 0,\n          taxCuttingTable: [], //减免税列表数据\n          total: 0, //总行数\n          pageSizes: [10,20,30], //每页分页数量\n        }\n    },\n    methods: {\n      //查看政策文件\n      lookPolicyPaperClick(row) {\n        this.tmpTaxCutting = Object.assign({}, row);\n        this.showLookDialog = true;\n      },\n      //新建编辑确定\n      confrimAddClick() {\n        let validateForm = () => {\n          return new Promise((resolve, reject) => {\n            this.$refs['taxCuttingForm'].validate((valid) => {\n              if (valid) {\n                return resolve(true);\n              }\n              return reject(false);\n            });\n          });\n        };\n        validateForm().then(() => {\n          if(this.showTitleMode === 0) {\n            if(this.tmpTaxCutting.largetype === 'large'){\n              this.tmpTaxCutting.largetype = '鼓励高新技术';\n            }else{\n              this.tmpTaxCutting.largetype = '';\n            }\n            if(this.tmpTaxCutting.smalltype === 'technology'){\n              this.tmpTaxCutting.smalltype = '支持科技事业';\n            }else{\n              this.tmpTaxCutting.smalltype = '';\n            }\n            if(this.tmpTaxCutting.way === 'approval'){\n              this.tmpTaxCutting.way = '免税';\n            }else if(this.tmpTaxCutting.way === 'filing'){\n              this.tmpTaxCutting.way = '税率减免';\n            }else{\n              this.tmpTaxCutting.way = '';\n            }\n            this.tmpTaxCutting.validitydate = this.tmpTaxCutting.starttime + \" - \" + this.tmpTaxCutting.endtime;\n            this.tmpTaxCutting.code = Math.round(Math.random() * 10000);\n            this.tmpTaxCutting.id =  Math.round(Math.random() * 10000);\n            taxCuttingAPI.addTaxCuttingData(this.tmpTaxCutting).then(data => {\n              this.taxCuttingTable = [\n                {\n                  id: Math.round(Math.random() * 10000),\n                  code: Math.round(Math.random() * 10000),\n                  largetype: this.tmpTaxCutting.largetype,\n                  smalltype: this.tmpTaxCutting.smalltype,\n                  way: this.tmpTaxCutting.way,\n                  amountcap: this.tmpTaxCutting.amountcap,\n                  rate: this.tmpTaxCutting.rate,\n                  policypapertitle: this.tmpTaxCutting.policypapertitle,\n                  policypapercontent: this.tmpTaxCutting.policypapercontent,\n                  validitydate: this.tmpTaxCutting.starttime + \" - \" + this.tmpTaxCutting.endtime,\n                },\n                ...this.taxCuttingTable\n              ]\n              if(data.status === 1) {\n                this.showAddDialog = false;\n                this.$message.success(data.message);\n              }else {\n                this.$message.error(data.message);\n              }\n            })\n          }else if(this.showTitleMode === 1) {\n            taxCuttingAPI.editTaxCuttingData(this.tmpTaxCutting).then(data => {\n              let index = this.taxCuttingTable.findIndex(val => val.id === this.tmpTaxCutting.id);\n                this.taxCuttingTable = [\n                  ...this.taxCuttingTable.slice(0, index),\n                  this.tmpTaxCutting,\n                  ...this.taxCuttingTable.slice(index + 1)\n                ];\n              if(data.status === 1) {\n                 this.showAddDialog = false;\n                 this.$message.success(data.message);\n              }else {\n                this.$message.error(data.message);\n              }\n            })\n          }\n        }).catch(() => {\n           this.$message.error('没有正确填写表单项');\n        })\n      },\n      //编辑\n      editTaxCuttingClick() {\n        this.showTitleMode = 1;\n        this.tmpTaxCutting = Object.assign({}, this.selectedRows[0]);\n        this.showAddDialog = true;\n      },\n      //新建\n      addTaxCuttingClick() {\n        this.showTitleMode = 0;\n        this.tmpTaxCutting = {\n          id: '',\n          code: '',\n          largetype: '',\n          smalltype: '',\n          way: '',\n          validitydate: '',\n          starttime: '',\n          endtime: '',\n          policypapertitle: '',\n          policypapercontent: ''\n        },\n        this.showAddDialog = true;\n      },\n      //删除\n    deleteTaxCuttingClick() {\n      let rowIds = [];\n      this.selectedRows.forEach(function(row) {\n        rowIds.push(row.id);\n      });\n\n      this.$confirm(\"确认删除所选的消息?\", '提示', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action == 'confirm') {\n            instance.confirmButtonLoading = true;\n            return taxCuttingAPI.deleteTaxCuttingData(rowIds).then(data => {\n              if (data.status == 1) {\n                this.taxCuttingTable = this.taxCuttingTable.filter(val => !rowIds.includes(val.id));\n                this.$notify({\n                  title: '成功',\n                  message: data.message,\n                  type: 'success',\n                  duration: 2000,\n                });\n              } else {\n                this.$alert(data.message);\n              }\n              instance.confirmButtonLoading = false;\n              done(data);\n            });\n          } else {\n            done();\n          }\n        }\n      }).catch(() => {\n        /* this.$notify.info({\n          title: '取消',\n          message: '操作取消！',\n          duration: 2000\n        }); */\n      });\n    },\n      //格式化时间 格式化时间为yyyy-MM-dd hh:mm:ss\n      formatDate(date, fmt) {\n        if (/(y+)/.test(fmt)) {\n          fmt = fmt.replace(\n            RegExp.$1,\n            (date.getFullYear() + '').substr(4 - RegExp.$1.length)\n          )\n        }\n        let o = {\n          'M+': date.getMonth() + 1,\n          'd+': date.getDate(),\n          'h+': date.getHours(),\n          'm+': date.getMinutes(),\n          's+': date.getSeconds()\n        }\n        for (let k in o) {\n          if (new RegExp(`(${k})`).test(fmt)) {\n            let str = o[k] + ''\n            fmt = fmt.replace(\n              RegExp.$1,\n              RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length)\n            )\n          }\n        }\n        return fmt\n      },\n      //起始时间格式转换事件\n      dateStartTimeChangeClick() {\n        this.searchTaxCutting.starttime = this.formatDate(new Date(this.searchTaxCutting.starttime), 'yyyy-MM-dd');\n      },\n      //截止时间格式转换事件\n      dateEndTimeChangeClick() {\n        this.searchTaxCutting.endtime = this.formatDate(new Date(this.searchTaxCutting.endtime), 'yyyy-MM-dd');\n      },\n      //有效期\n      dateStartDateChangeClick() {\n        this.tmpTaxCutting.starttime = this.formatDate(new Date(this.tmpTaxCutting.starttime), 'yyyy-MM-dd');\n      },\n      dateEndDateChangeClick() {\n        this.tmpTaxCutting.endtime = this.formatDate(new Date(this.tmpTaxCutting.endtime), 'yyyy-MM-dd');\n      },\n      //搜索\n      searchTaxCuttingClick() {\n        this.getTaxCuttingData();\n      },\n      //选中行\n      onSelectionChange(selection) {\n        this.selectedRows = selection;\n      },\n      //每页数设置\n      sizeChangeHandler(val) {\n        this.pageSize = val;\n      },\n      //当前页设置\n      currentChangeHandler(val) {\n        this.currentPage = val;\n      },\n      //减免税列表数据加载\n      getTaxCuttingData(){\n        this.dataLoading = true;\n        taxCuttingAPI.getTaxCuttingData(this.currentPage,this.pageSize,this.searchTaxCutting.largetype,this.searchTaxCutting.smalltype,this.searchTaxCutting.way,this.searchTaxCutting.starttime,this.searchTaxCutting.endtime).then(data => {\n          this.taxCuttingTable = data.data;\n          this.total = data.total;\n           if (this.searchTaxCutting.largetype != '') {\n            this.taxCuttingTable = this.taxCuttingTable.filter(val => val.largetype.indexOf(this.searchTaxCutting.largetype) != -1)\n          }\n          if (this.searchTaxCutting.smalltype != '') {\n            this.taxCuttingTable = this.taxCuttingTable.filter(val => val.smalltype.indexOf(this.searchTaxCutting.smalltype) != -1)\n          }\n          if (this.searchTaxCutting.way != '') {\n            this.taxCuttingTable = this.taxCuttingTable.filter(val => val.way.indexOf(this.searchTaxCutting.way) != -1)\n          }\n          this.dataLoading = false;\n        })\n      },\n      //减免税大类数据加载\n     /*  getLargeTypesData() {\n        taxCuttingAPI.getLargeTypesData().then(data => {\n          this.largetypes = data.data;\n        })\n      },\n      //减免税小类数据加载\n      getSmallTypesData() {\n        taxCuttingAPI.getSmallTypesData().then(data => {\n          this.smalltypes = data.data;\n        })\n      },\n      //减免方式数据加载\n      getWaysData() {\n        taxCuttingAPI.getWaysData().then(data => {\n          this.ways = data.data;\n        })\n      }, */\n    },\n    created() {\n      this.clientWidth = document.documentElement.clientWidth - 200;\n      this.clientHeight = document.documentElement.clientHeight - 230;\n      this.getTaxCuttingData();\n      /* this.getLargeTypesData();\n      this.getSmallTypesData();\n      this.getWaysData(); */\n   }\n}\n</script>\n\n<style scoped>\n  .main-content-wrap {\n      padding: 10px;\n  }\n  .search-bar {\n    padding-bottom: 10px;\n  }\n  .page-wrap {\n    margin-top: 20px;\n  }\n\n  .page-wrap .page {\n    float: right;\n  }\n\n  .a-btn:hover {\n    text-decoration:underline;\n  }\n\n  .demo-table-expand {\n    font-size: 12px;\n  }\n  .demo-table-expand label {\n    color: #99a9bf;\n  }\n  .demo-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 45%;\n  }\n</style>\n<style>\n  .content .el-textarea__inner {\n    height: 300px;\n  }\n  .look-card .el-card__header{\n    text-align: center;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taxCuttingAPI = __webpack_require__(87);

var _taxCuttingAPI2 = _interopRequireDefault(_taxCuttingAPI);

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

/* import './mock/taxCutting.js' */
//require('./mock/gossip.js')

exports.default = {
  data: function data() {
    return {
      clientWidth: 0,
      showLookDialog: false,
      selectedRows: [],
      taxCuttingRules: {
        largetype: [{
          trigger: 'change', required: true,
          validator: function validator(rule, value, callback) {
            if (value) {
              callback();
            } else {
              callback(new Error('请选择减免税大类'));
            }
          }
        }],
        smalltype: [{
          trigger: 'change', required: true,
          validator: function validator(rule, value, callback) {
            if (value) {
              callback();
            } else {
              callback(new Error('请选择减免税小类'));
            }
          }
        }],
        way: [{
          trigger: 'change', required: true,
          validator: function validator(rule, value, callback) {
            if (value) {
              callback();
            } else {
              callback(new Error('请选择减免税方式'));
            }
          }
        }],
        starttime: [{ trigger: 'change', required: true,
          validator: function validator(rule, value, callback) {
            if (value) {
              callback();
            } else {
              callback(new Error('请选择起始时间'));
            }
          }
        }],
        endtime: [{ trigger: 'change', required: true,
          validator: function validator(rule, value, callback) {
            if (value) {
              callback();
            } else {
              callback(new Error('请选择截止时间'));
            }
          }
        }],
        policypapertitle: [{ required: true, message: '请输入政策文件标题', trigger: 'blur' }, { min: 1, max: 400, message: '长度在 1 到 400 个字符', trigger: 'blur' }],
        policypapercontent: [{ required: true, message: '请输入政策文件内容', trigger: 'blur' }, { min: 1, max: 4000, message: '长度在 1 到 4000 个字符', trigger: 'blur' }]
      },
      showTitleMode: 0, // 0 新建 1 编辑
      showAddDialog: false, //新建dialog显示状态
      tmpTaxCutting: {},
      searchTaxCutting: {
        largetype: '',
        smalltype: '',
        way: '',
        starttime: '',
        endtime: ''
      }, //搜索
      dataLoading: false,
      ways: [], //减免方式
      smalltypes: [], //减免税小类
      largetypes: [], //减免税大类
      currentPage: 1, //当前页
      pageSize: 10, //每页数
      clientHeight: 0,
      taxCuttingTable: [], //减免税列表数据
      total: 0, //总行数
      pageSizes: [10, 20, 30] //每页分页数量
    };
  },

  methods: {
    //查看政策文件
    lookPolicyPaperClick: function lookPolicyPaperClick(row) {
      this.tmpTaxCutting = Object.assign({}, row);
      this.showLookDialog = true;
    },

    //新建编辑确定
    confrimAddClick: function confrimAddClick() {
      var _this = this;

      var validateForm = function validateForm() {
        return new Promise(function (resolve, reject) {
          _this.$refs['taxCuttingForm'].validate(function (valid) {
            if (valid) {
              return resolve(true);
            }
            return reject(false);
          });
        });
      };
      validateForm().then(function () {
        if (_this.showTitleMode === 0) {
          if (_this.tmpTaxCutting.largetype === 'large') {
            _this.tmpTaxCutting.largetype = '鼓励高新技术';
          } else {
            _this.tmpTaxCutting.largetype = '';
          }
          if (_this.tmpTaxCutting.smalltype === 'technology') {
            _this.tmpTaxCutting.smalltype = '支持科技事业';
          } else {
            _this.tmpTaxCutting.smalltype = '';
          }
          if (_this.tmpTaxCutting.way === 'approval') {
            _this.tmpTaxCutting.way = '免税';
          } else if (_this.tmpTaxCutting.way === 'filing') {
            _this.tmpTaxCutting.way = '税率减免';
          } else {
            _this.tmpTaxCutting.way = '';
          }
          _this.tmpTaxCutting.validitydate = _this.tmpTaxCutting.starttime + " - " + _this.tmpTaxCutting.endtime;
          _this.tmpTaxCutting.code = Math.round(Math.random() * 10000);
          _this.tmpTaxCutting.id = Math.round(Math.random() * 10000);
          _taxCuttingAPI2.default.addTaxCuttingData(_this.tmpTaxCutting).then(function (data) {
            _this.taxCuttingTable = [{
              id: Math.round(Math.random() * 10000),
              code: Math.round(Math.random() * 10000),
              largetype: _this.tmpTaxCutting.largetype,
              smalltype: _this.tmpTaxCutting.smalltype,
              way: _this.tmpTaxCutting.way,
              amountcap: _this.tmpTaxCutting.amountcap,
              rate: _this.tmpTaxCutting.rate,
              policypapertitle: _this.tmpTaxCutting.policypapertitle,
              policypapercontent: _this.tmpTaxCutting.policypapercontent,
              validitydate: _this.tmpTaxCutting.starttime + " - " + _this.tmpTaxCutting.endtime
            }].concat(_toConsumableArray(_this.taxCuttingTable));
            if (data.status === 1) {
              _this.showAddDialog = false;
              _this.$message.success(data.message);
            } else {
              _this.$message.error(data.message);
            }
          });
        } else if (_this.showTitleMode === 1) {
          _taxCuttingAPI2.default.editTaxCuttingData(_this.tmpTaxCutting).then(function (data) {
            var index = _this.taxCuttingTable.findIndex(function (val) {
              return val.id === _this.tmpTaxCutting.id;
            });
            _this.taxCuttingTable = [].concat(_toConsumableArray(_this.taxCuttingTable.slice(0, index)), [_this.tmpTaxCutting], _toConsumableArray(_this.taxCuttingTable.slice(index + 1)));
            if (data.status === 1) {
              _this.showAddDialog = false;
              _this.$message.success(data.message);
            } else {
              _this.$message.error(data.message);
            }
          });
        }
      }).catch(function () {
        _this.$message.error('没有正确填写表单项');
      });
    },

    //编辑
    editTaxCuttingClick: function editTaxCuttingClick() {
      this.showTitleMode = 1;
      this.tmpTaxCutting = Object.assign({}, this.selectedRows[0]);
      this.showAddDialog = true;
    },

    //新建
    addTaxCuttingClick: function addTaxCuttingClick() {
      this.showTitleMode = 0;
      this.tmpTaxCutting = {
        id: '',
        code: '',
        largetype: '',
        smalltype: '',
        way: '',
        validitydate: '',
        starttime: '',
        endtime: '',
        policypapertitle: '',
        policypapercontent: ''
      }, this.showAddDialog = true;
    },

    //删除
    deleteTaxCuttingClick: function deleteTaxCuttingClick() {
      var _this2 = this;

      var rowIds = [];
      this.selectedRows.forEach(function (row) {
        rowIds.push(row.id);
      });

      this.$confirm("确认删除所选的消息?", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action == 'confirm') {
            instance.confirmButtonLoading = true;
            return _taxCuttingAPI2.default.deleteTaxCuttingData(rowIds).then(function (data) {
              if (data.status == 1) {
                _this2.taxCuttingTable = _this2.taxCuttingTable.filter(function (val) {
                  return !rowIds.includes(val.id);
                });
                _this2.$notify({
                  title: '成功',
                  message: data.message,
                  type: 'success',
                  duration: 2000
                });
              } else {
                _this2.$alert(data.message);
              }
              instance.confirmButtonLoading = false;
              done(data);
            });
          } else {
            done();
          }
        }
      }).catch(function () {
        /* this.$notify.info({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        }); */
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

    //起始时间格式转换事件
    dateStartTimeChangeClick: function dateStartTimeChangeClick() {
      this.searchTaxCutting.starttime = this.formatDate(new Date(this.searchTaxCutting.starttime), 'yyyy-MM-dd');
    },

    //截止时间格式转换事件
    dateEndTimeChangeClick: function dateEndTimeChangeClick() {
      this.searchTaxCutting.endtime = this.formatDate(new Date(this.searchTaxCutting.endtime), 'yyyy-MM-dd');
    },

    //有效期
    dateStartDateChangeClick: function dateStartDateChangeClick() {
      this.tmpTaxCutting.starttime = this.formatDate(new Date(this.tmpTaxCutting.starttime), 'yyyy-MM-dd');
    },
    dateEndDateChangeClick: function dateEndDateChangeClick() {
      this.tmpTaxCutting.endtime = this.formatDate(new Date(this.tmpTaxCutting.endtime), 'yyyy-MM-dd');
    },

    //搜索
    searchTaxCuttingClick: function searchTaxCuttingClick() {
      this.getTaxCuttingData();
    },

    //选中行
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },

    //每页数设置
    sizeChangeHandler: function sizeChangeHandler(val) {
      this.pageSize = val;
    },

    //当前页设置
    currentChangeHandler: function currentChangeHandler(val) {
      this.currentPage = val;
    },

    //减免税列表数据加载
    getTaxCuttingData: function getTaxCuttingData() {
      var _this3 = this;

      this.dataLoading = true;
      _taxCuttingAPI2.default.getTaxCuttingData(this.currentPage, this.pageSize, this.searchTaxCutting.largetype, this.searchTaxCutting.smalltype, this.searchTaxCutting.way, this.searchTaxCutting.starttime, this.searchTaxCutting.endtime).then(function (data) {
        _this3.taxCuttingTable = data.data;
        _this3.total = data.total;
        if (_this3.searchTaxCutting.largetype != '') {
          _this3.taxCuttingTable = _this3.taxCuttingTable.filter(function (val) {
            return val.largetype.indexOf(_this3.searchTaxCutting.largetype) != -1;
          });
        }
        if (_this3.searchTaxCutting.smalltype != '') {
          _this3.taxCuttingTable = _this3.taxCuttingTable.filter(function (val) {
            return val.smalltype.indexOf(_this3.searchTaxCutting.smalltype) != -1;
          });
        }
        if (_this3.searchTaxCutting.way != '') {
          _this3.taxCuttingTable = _this3.taxCuttingTable.filter(function (val) {
            return val.way.indexOf(_this3.searchTaxCutting.way) != -1;
          });
        }
        _this3.dataLoading = false;
      });
    }
  },
  created: function created() {
    this.clientWidth = document.documentElement.clientWidth - 200;
    this.clientHeight = document.documentElement.clientHeight - 230;
    this.getTaxCuttingData();
    /* this.getLargeTypesData();
    this.getSmallTypesData();
    this.getWaysData(); */
  }
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var taxCuttingAPI = {
  getTaxCuttingData: function getTaxCuttingData() {
    return axios.get('/api/taxcutting').then(function (res) {
      return res.data;
    });
  },

  /*  getTaxCuttingData(pageindex,pagesize,largettype,smalltype,way,starttime,endtime) {
     return axios.get( `/api/taxcutting`,{
         params: {
           pageindex,
           pagesize,
           largettype,
           smalltype,
           way,
           starttime,
           endtime,
           pageindex,
           pagesize
         }
       }
     ).then(res => res.data)
   }, */
  /*  getLargeTypesData() {
     return axios.get( `/api/taxcutting/largettypes`).then(res => res.data)
   },
   getSmallTypesData() {
     return axios.get( `/api/taxcutting/smalltypes`).then(res => res.data)
   },
   getWaysData() {
     return axios.get( `/api/taxcutting/ways`).then(res => res.data)
   }, */
  addTaxCuttingData: function addTaxCuttingData(taxcutting) {
    return axios.post('/api/taxcutting', taxcutting).then(function (res) {
      return res.data;
    });
  },
  editTaxCuttingData: function editTaxCuttingData(taxcutting) {
    return axios.put('/api/taxcutting', taxcutting).then(function (res) {
      return res.data;
    });
  },
  deleteTaxCuttingData: function deleteTaxCuttingData(ids) {
    var strIds = ids.join(',');
    return axios.delete('/api/taxcutting/' + strIds).then(function (res) {
      return res.data;
    });
  }
};
exports.default = taxCuttingAPI;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: ({
      width: _vm.clientWidth + 'px'
    })
  }, [_c('el-toolbar', [_c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "size": "small",
      "plain": true,
      "icon": "plus"
    },
    on: {
      "click": _vm.addTaxCuttingClick
    }
  }, [_vm._v("新建")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "size": "small",
      "disabled": _vm.selectedRows.length !== 1,
      "plain": true,
      "icon": "edit"
    },
    on: {
      "click": _vm.editTaxCuttingClick
    }
  }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "size": "small",
      "disabled": _vm.selectedRows.length === 0,
      "plain": true,
      "icon": "delete"
    },
    on: {
      "click": _vm.deleteTaxCuttingClick
    }
  }, [_vm._v("删除")])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap"
  }, [_c('div', {
    staticClass: "search-bar fr"
  }, [_vm._v("\n        减免税大类：\n        "), _c('el-select', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "size": "small",
      "clearable": ""
    },
    model: {
      value: (_vm.searchTaxCutting.largetype),
      callback: function($$v) {
        _vm.$set(_vm.searchTaxCutting, "largetype", $$v)
      },
      expression: "searchTaxCutting.largetype"
    }
  }, _vm._l((_vm.largetypes), function(largetype) {
    return _c('el-option', {
      key: largetype.key,
      attrs: {
        "label": largetype.name,
        "value": largetype.key
      }
    })
  })), _vm._v("\n         减免税小类：\n        "), _c('el-select', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "size": "small",
      "clearable": ""
    },
    model: {
      value: (_vm.searchTaxCutting.smalltype),
      callback: function($$v) {
        _vm.$set(_vm.searchTaxCutting, "smalltype", $$v)
      },
      expression: "searchTaxCutting.smalltype"
    }
  }, _vm._l((_vm.smalltypes), function(smalltype) {
    return _c('el-option', {
      key: smalltype.key,
      attrs: {
        "label": smalltype.name,
        "value": smalltype.key
      }
    })
  })), _vm._v("\n        减免税方式：\n        "), _c('el-select', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "size": "small",
      "clearable": ""
    },
    model: {
      value: (_vm.searchTaxCutting.way),
      callback: function($$v) {
        _vm.$set(_vm.searchTaxCutting, "way", $$v)
      },
      expression: "searchTaxCutting.way"
    }
  }, _vm._l((_vm.ways), function(way) {
    return _c('el-option', {
      key: way.key,
      attrs: {
        "label": way.name,
        "value": way.key
      }
    })
  })), _vm._v("\n        有效期：\n        "), _c('el-date-picker', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "date",
      "placeholder": "请选择日期",
      "size": "small"
    },
    on: {
      "change": _vm.dateStartTimeChangeClick
    },
    model: {
      value: (_vm.searchTaxCutting.starttime),
      callback: function($$v) {
        _vm.$set(_vm.searchTaxCutting, "starttime", $$v)
      },
      expression: "searchTaxCutting.starttime"
    }
  }), _vm._v("\n        -\n        "), _c('el-date-picker', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "date",
      "placeholder": "请选择日期",
      "size": "small"
    },
    on: {
      "change": _vm.dateEndTimeChangeClick
    },
    model: {
      value: (_vm.searchTaxCutting.endtime),
      callback: function($$v) {
        _vm.$set(_vm.searchTaxCutting, "endtime", $$v)
      },
      expression: "searchTaxCutting.endtime"
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
      "click": _vm.searchTaxCuttingClick
    }
  }, [_vm._v("搜索")])], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.dataLoading),
      expression: "dataLoading"
    }],
    attrs: {
      "data": _vm.taxCuttingTable,
      "tooltip-effect": "dark",
      "highlight-current-row": "",
      "height": _vm.clientHeight
    },
    on: {
      "selection-change": _vm.onSelectionChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "55"
    }
  }), _vm._v(" "), _c('el-table-column', {
    staticClass: "column-a",
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
            "label": "代码"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.code))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "减免税大类"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.largetype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "减免税小类"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.smalltype))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "减免税方式"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.way))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "减免数量上限"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.amountcap))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "减免税率"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.rate))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "有效期"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.validitydate))])]), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "100%"
          },
          attrs: {
            "label": "政策文件"
          }
        }, [_c('a', {
          staticClass: "a-btn",
          on: {
            "click": function($event) {
              _vm.lookPolicyPaperClick(props.row)
            }
          }
        }, [_vm._v(_vm._s(props.row.policypapertitle))])])], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "code",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "代码"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "largetype",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "减免税大类"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "smalltype",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "减免税小类"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "way",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "减免税方式"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "amountcap",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "减免数量上限"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "rate",
      "show-overflow-tooltip": "",
      "min-width": "15%",
      "label": "减免税率"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "show-overflow-tooltip": "",
      "min-width": "30%",
      "label": "政策文件"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('a', {
          staticClass: "a-btn",
          on: {
            "click": function($event) {
              _vm.lookPolicyPaperClick(scope.row)
            }
          }
        }, [_vm._v(_vm._s(scope.row.policypapertitle))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "validitydate",
      "show-overflow-tooltip": "",
      "min-width": "20%",
      "label": "有效期"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "page-wrap"
  }, [_c('el-pagination', {
    staticClass: "page",
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": _vm.pageSizes,
      "page-size": _vm.pageSize,
      "total": _vm.total,
      "layout": "total, sizes, prev, pager, next"
    },
    on: {
      "size-change": _vm.sizeChangeHandler,
      "current-change": _vm.currentChangeHandler
    }
  })], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.showTitleMode === 0 ? '新建' : '编辑',
      "visible": _vm.showAddDialog
    },
    on: {
      "update:visible": function($event) {
        _vm.showAddDialog = $event
      }
    }
  }, [_c('el-form', {
    ref: "taxCuttingForm",
    attrs: {
      "label-width": "140px",
      "model": _vm.tmpTaxCutting,
      "rules": _vm.taxCuttingRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "largetype",
      "label": "减免税大类："
    }
  }, [_c('el-select', {
    attrs: {
      "size": "small",
      "clearable": ""
    },
    model: {
      value: (_vm.tmpTaxCutting.largetype),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "largetype", $$v)
      },
      expression: "tmpTaxCutting.largetype"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "鼓励高新技术",
      "value": "large"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "smalltype",
      "label": "减免税小类："
    }
  }, [_c('el-select', {
    attrs: {
      "size": "small",
      "clearable": ""
    },
    model: {
      value: (_vm.tmpTaxCutting.smalltype),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "smalltype", $$v)
      },
      expression: "tmpTaxCutting.smalltype"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "支持科技事业",
      "value": "technology"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "smalltype",
      "label": "减免税方式："
    }
  }, [_c('el-select', {
    attrs: {
      "size": "small",
      "clearable": ""
    },
    model: {
      value: (_vm.tmpTaxCutting.way),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "way", $$v)
      },
      expression: "tmpTaxCutting.way"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "免税",
      "value": "approval"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "税率减免",
      "value": "filing"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "减免数量上限："
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "215px"
    },
    attrs: {
      "placeholder": "请输入减免数量上限"
    },
    model: {
      value: (_vm.tmpTaxCutting.amountcap),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "amountcap", $$v)
      },
      expression: "tmpTaxCutting.amountcap"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "减免税率："
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "215px"
    },
    attrs: {
      "placeholder": "请输入减免税率"
    },
    model: {
      value: (_vm.tmpTaxCutting.rate),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "rate", $$v)
      },
      expression: "tmpTaxCutting.rate"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "starttime",
      "label": "起始时间："
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      "width": "215px"
    },
    attrs: {
      "type": "date",
      "placeholder": "请选择日期",
      "size": "small"
    },
    on: {
      "change": _vm.dateStartDateChangeClick
    },
    model: {
      value: (_vm.tmpTaxCutting.starttime),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "starttime", $$v)
      },
      expression: "tmpTaxCutting.starttime"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "endtime",
      "label": "截止时间："
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      "width": "215px"
    },
    attrs: {
      "type": "date",
      "placeholder": "请选择日期",
      "size": "small"
    },
    on: {
      "change": _vm.dateEndDateChangeClick
    },
    model: {
      value: (_vm.tmpTaxCutting.endtime),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "endtime", $$v)
      },
      expression: "tmpTaxCutting.endtime"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "policypapertitle",
      "label": "政策文件标题："
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入政策文件标题"
    },
    model: {
      value: (_vm.tmpTaxCutting.policypapertitle),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "policypapertitle", $$v)
      },
      expression: "tmpTaxCutting.policypapertitle"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "policypapercontent",
      "label": "政策文件内容："
    }
  }, [_c('el-input', {
    staticClass: "content",
    attrs: {
      "placeholder": "请输入政策文件内容",
      "type": "textarea"
    },
    model: {
      value: (_vm.tmpTaxCutting.policypapercontent),
      callback: function($$v) {
        _vm.$set(_vm.tmpTaxCutting, "policypapercontent", $$v)
      },
      expression: "tmpTaxCutting.policypapercontent"
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
        _vm.showAddDialog = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.confrimAddClick
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "查看政策文件",
      "visible": _vm.showLookDialog
    },
    on: {
      "update:visible": function($event) {
        _vm.showLookDialog = $event
      }
    }
  }, [_c('el-card', {
    staticClass: "box-card look-card"
  }, [_c('div', {
    staticClass: "clearfix",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('strong', {
    staticStyle: {
      "font-size": "18px",
      "text-align": "center"
    }
  }, [_vm._v(_vm._s(_vm.tmpTaxCutting.policypapertitle))])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-indent": "35px"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.tmpTaxCutting.policypapercontent) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.showLookDialog = false
      }
    }
  }, [_vm._v("关 闭")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-78b1af65", module.exports)
  }
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(90)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(92),
  /* template */
  __webpack_require__(95),
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


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-4966948f] {\n  padding: 10px;\n}\n.width-300[data-v-4966948f] {\n  width: 300px;\n}\n.width-230[data-v-4966948f] {\n  width: 230px;\n}\n.page-wrap[data-v-4966948f] {\n  margin-top: 20px;\n}\n.page-wrap .page[data-v-4966948f] {\n  float: right;\n}\n.search-bar[data-v-4966948f] {\n  padding-bottom: 10px;\n}\n.demo-table-expand[data-v-4966948f] {\n  font-size: 12px;\n}\n.demo-table-expand label[data-v-4966948f] {\n  color: #99a9bf;\n}\n.demo-table-expand .el-form-item[data-v-4966948f] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n.box-card[data-v-4966948f] {\n  width: 100%;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/manifest.vue?04174812"],"names":[],"mappings":";AAwTA;EACA,cAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,iBAAA;CACA;AAGA;EACA,aAAA;CACA;AAEA;EACA,qBAAA;CACA;AAGA;EACA,gBAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,YAAA;CACA","file":"manifest.vue","sourcesContent":["<template>\n  <div>\n    <el-toolbar>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"plus\" @click=\"addManifest\">新建</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"edit\" :disabled=\"selectedRows.length !== 1\" @click=\"editManifest\">编辑</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"delete\" :disabled=\"selectedRows.length === 0\" @click=\"deleteManifests\">删除</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"information\" :disabled=\"selectedRows.length !== 1\" @click=\"viewGoods\">查看商品</el-button>\n    </el-toolbar>\n    <div class=\"main-content-wrap\">\n      <div class=\"search-bar fr\">\n        舱单编号:\n        <el-input v-model=\"search.manifestnum\" size=\"small\" placeholder=\"请输入舱单编号\" style=\"width: 200px;\"></el-input>\n        商品：\n        <el-input v-model=\"search.goodsname\" size=\"small\" placeholder=\"请输入商品\" style=\"width: 200px;\"></el-input>\n        收件公司：\n        <el-input v-model=\"search.receivecompany\" size=\"small\" placeholder=\"请输入收件公司\" style=\"width: 200px;\"></el-input>\n        收货人：\n        <el-input v-model=\"search.receiveperson\" size=\"small\" placeholder=\"请输入收货人\" style=\"width: 200px;\"></el-input>\n        <el-button size=\"small\" type=\"primary\" @click=\"handleSearchBtn\" style=\"width: 60px;\">搜索</el-button>\n      </div>\n      <!--表格-->\n      <div>\n        <el-table :data=\"manifestTable\" @selection-change=\"onSelectionChange\">\n          <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n          <el-table-column type=\"expand\">\n            <template slot-scope=\"props\">\n              <el-form label-position=\"left\" inline class=\"demo-table-expand\" label-width=\"120px\">\n                <el-form-item label=\"舱单编号\">\n                  <span>{{props.row.manifestnum}}</span>\n                </el-form-item>\n                <el-form-item label=\"收件公司\">\n                  <span>{{props.row.receivecompany}}</span>\n                </el-form-item>\n                <el-form-item label=\"商品\">\n                  <span>{{props.row.goodsname}}</span>\n                </el-form-item>\n                <el-form-item label=\"发货地\">\n                  <span>{{props.row.sendaddress}}</span>\n                </el-form-item>\n                <el-form-item label=\"收货人\">\n                  <span>{{props.row.receiveperson}}</span>\n                </el-form-item>\n                <el-form-item label=\"电话\">\n                  <span>{{props.row.telephone}}</span>\n                </el-form-item>\n              </el-form>\n            </template>\n          </el-table-column>\n          <el-table-column prop=\"manifestnum\" min-width=\"20%\" label=\"舱单编号 \"></el-table-column>\n          <el-table-column prop=\"receivecompany\" min-width=\"15%\" label=\"收件公司\"></el-table-column>\n          <el-table-column prop=\"goodsname\" min-width=\"30%\" label=\"商品\"></el-table-column>\n          <el-table-column prop=\"sendaddress\" min-width=\"10%\" label=\"发货地\"></el-table-column>\n          <el-table-column prop=\"receiveperson\" min-width=\"10%\" label=\"收货人\"></el-table-column>\n          <el-table-column prop=\"telephone\" min-width=\"15%\" label=\"电话\"></el-table-column>\n        </el-table>\n      </div>\n      <!--分页-->\n      <div class=\"page-wrap\">\n        <el-pagination class=\"page\" @size-change=\"sizeChangeHandler\" @current-change=\"currentChangeHandler\" :current-page.sync=\"currentPage\" :page-sizes=\"pageSizes\" :page-size=\"pageSize\" :total=\"total\" layout=\"total,sizes, prev, pager, next\">\n        </el-pagination>\n      </div>\n    </div>\n\n    <!-- 新建,编辑对话框 -->\n    <el-dialog :title=\"addOrEdit==1?'新建':'编辑'\" :visible.sync=\"showDialog\" @close=\"closeAddOrEditDialog\">\n      <el-form label-width=\"160px\" :model=\"tmpManifest\" :rules=\"manifestRules\" ref=\"manifestForm\">\n        <el-form-item label=\"舱单编号：\" prop=\"manifestnum\">\n          <el-input placeholder=\"请输入舱单编号\" v-model=\"tmpManifest.manifestnum\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"收件公司：\" prop=\"receivecompany\">\n          <el-input placeholder=\"请输入收件公司\" v-model=\"tmpManifest.receivecompany\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"商品：\">\n          <el-input placeholder=\"请输入商品\" v-model=\"tmpManifest.goodsname\" class=\"width-230\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"发货地：\">\n          <el-input placeholder=\"请输入发货地\" v-model=\"tmpManifest.sendaddress\" class=\"width-230\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"收货人：\" prop=\"receiveperson\">\n          <el-input v-model=\"tmpManifest.receiveperson\" placeholder=\"请输入收货人\" class=\"width-230\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"电话：\">\n          <el-input placeholder=\"请填写电话\" v-model=\"tmpManifest.telephone\" class=\"width-230\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"resetManifest\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"saveManifest\" :disabled=\"saveManifestStatus\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n    <!--查看商品-->\n    <el-dialog title=\"查看商品\" :visible.sync=\"viewDialog\">\n      <el-card class=\"box-card\">\n        <div slot=\"header\">\n          <span>收件公司：{{manifestGoodInfo.receivecompany}}</span>\n        </div>\n        <div>{{manifestGoodInfo.goodsinfo}}</div>\n      </el-card>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"viewDialog = false\">关 闭</el-button>\n      </div>\n    </el-dialog>\n\n  </div>\n</template>\n\n<script>\nimport manifestAPI from './api/manifestAPI.js'\nimport './mock/manifest.js'\n\nexport default {\n  data() {\n    return {\n      manifestTable: [],\n      temmanifestTable: [],\n      currentPage: 1,\n      total: 50,\n      pageSize: 5,\n      pageSizes: [5, 10, 15, 20],\n      selectedRows: [],\n      showDialog: false,\n      addOrEdit: 1,\n      tmpManifest: {},\n      manifestRules: {\n        manifestnum: [\n          { required: true, message: '请输入舱单编号', trigger: 'blur' }\n        ],\n        receivecompany: [\n          { required: true, message: '请输入收件公司', trigger: 'blur' }\n        ],\n        receiveperson: [\n          { required: true, message: '请输入收货人', trigger: 'blur' }\n        ]\n      },\n      saveManifestStatus: false,\n      search: { manifestnum: '', goodsname: '', receivecompany: '', receiveperson: '' },\n      viewDialog: false,\n      manifestGoodInfo: { goodsinfo: '', receivecompany: '' },\n    }\n  },\n  methods: {\n    onSelectionChange(selection) {\n      this.selectedRows = selection;\n    },\n    handleSearchBtn() {\n      this.manifestTable = Object.assign([], this.temmanifestTable);\n      let temManifestnum = this.search.manifestnum;\n      let temGoodsname = this.search.goodsname;\n      let temReceiveCompany = this.search.receivecompany;\n      let temReceivePerson = this.search.receiveperson;\n      if (temManifestnum != '' || temGoodsname != '' || temReceiveCompany != '' || temReceivePerson != '') {\n        if (temManifestnum != '') {\n          this.manifestTable = this.manifestTable.filter(val => val.manifestnum.indexOf(temManifestnum) != -1);\n        }\n        if (temGoodsname != '') {\n          this.manifestTable = this.manifestTable.filter(val => val.goodsname.indexOf(temGoodsname) != -1);\n        }\n        if (temReceiveCompany != '') {\n          this.manifestTable = this.manifestTable.filter(val => val.receivecompany.indexOf(temReceiveCompany) != -1);\n        }\n        if (temReceivePerson != '') {\n          this.manifestTable = this.manifestTable.filter(val => val.receiveperson.indexOf(temReceivePerson) != -1);\n        }\n      }\n    },\n    sizeChangeHandler(val) {\n      this.pageSize = val;\n    },\n    currentChangeHandler(val) {\n      this.currentPage = val;\n    },\n    //关闭事件\n    closeAddOrEditDialog() {\n      console.log(this.tmpManifest.manifestnum);\n      if (!this.tmpManifest.manifestnum || this.tmpManifest.manifestnum == '' || !this.tmpManifest.receivecompany || this.tmpManifest.receivecompany == '' || !this.tmpManifest.receiveperson || this.tmpManifest.receiveperson == '') {\n        this.$refs['manifestForm'].resetFields();\n      }\n      this.showDialog = false;\n    },\n    //取消\n    resetManifest() {\n      this.$refs['manifestForm'].resetFields();\n      this.showDialog = false;\n    },\n    //新建\n    addManifest() {\n      this.addOrEdit = 1;\n      this.tmpManifest = {};\n      this.saveManifestStatus = false;\n      this.showDialog = true;\n    },\n    //编辑\n    editManifest() {\n      this.addOrEdit = 2;\n      this.showDialog = true;\n      this.saveManifestStatus = false;\n      this.tmpManifest = Object.assign({}, this.selectedRows[0]);\n    },\n    //新建和编辑时保存\n    saveManifest() {\n      this.$refs['manifestForm'].validate((valid) => {\n        if (valid) {\n          this.saveManifestStatus = true;\n          if (this.addOrEdit == 1) {\n            manifestAPI.addManifest(this.tmpManifest).then(data => {\n              if (data.status == 1) {\n                if (this.manifestTable.length == 0) {\n                  this.tmpManifest.id = this.manifestTable.length + 1;\n                } else {\n                  let temArr = Object.assign([], this.manifestTable);\n                  temArr.sort(function(a, b) {\n                    return b.id - a.id;\n                  });\n                  this.tmpManifest.id = temArr[0].id + 1;\n                }\n                this.manifestTable.push(this.tmpManifest);\n                this.temmanifestTable = Object.assign([], this.manifestTable);\n                this.$message.success(data.message);\n              } else {\n                this.$message.error(data.message);\n              }\n              this.saveManifestStatus = false;\n              this.showDialog = false;\n            });\n          } else if (this.addOrEdit == 2) {\n            manifestAPI.editManifest(this.tmpManifest.id, this.tmpManifest).then(data => {\n              if (data.status == 1) {\n                let index = this.manifestTable.findIndex(val => val.id == this.tmpManifest.id);\n                this.manifestTable = [\n                  ...this.manifestTable.slice(0, index),\n                  Object.assign({}, this.tmpManifest),\n                  ...this.manifestTable.slice(index + 1)\n                ];\n                this.temmanifestTable = Object.assign([], this.manifestTable);\n                this.$message.success(data.message);\n              } else {\n                this.$message.error(data.message);\n              }\n              this.saveManifestStatus = false;\n              this.showDialog = false;\n            });\n          }\n        } else {\n          this.$alert(\"请填写正确选项\", \"提示\");\n          return false;\n        }\n      });\n\n    },\n    //刪除\n    deleteManifests() {\n      let rowIds = [];\n      this.selectedRows.forEach(function(row) {\n        rowIds.push(row.id);\n      });\n\n      this.$confirm(\"确认删除所选的数据?\", '提示', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action == 'confirm') {\n            instance.confirmButtonLoading = true;\n            return manifestAPI.deleteManifests(rowIds).then(data => {\n              if (data.status == 1) {\n                this.manifestTable = this.manifestTable.filter(val => !rowIds.includes(val.id));\n                this.temmanifestTable = Object.assign([], this.manifestTable);\n                this.$notify({\n                  title: '成功',\n                  message: data.message,\n                  type: 'success',\n                  duration: 2000,\n                });\n              } else {\n                this.$alert(data.message);\n              }\n              instance.confirmButtonLoading = false;\n              done(data);\n            });\n          } else {\n            done();\n          }\n        }\n      }).catch(() => {\n        this.$notify.info({\n          title: '取消',\n          message: '操作取消！',\n          duration: 2000\n        });\n      });\n    },\n    //查看商品\n    viewGoods() {\n      this.viewDialog = true;\n      this.manifestGoodInfo = { goodsinfo: '', receivecompany: '' };\n      this.manifestGoodInfo.receivecompany = this.selectedRows[0].receivecompany;\n      manifestAPI.viewManifestsGoods(this.selectedRows[0].id).then(data => {\n        this.manifestGoodInfo.goodsinfo = data.data;\n      })\n    }\n  },\n  created() {\n    manifestAPI.getManifestData().then(data => {\n      this.manifestTable = data.data;\n      this.temmanifestTable = Object.assign([], this.manifestTable);\n    });\n  }\n}\n</script>\n\n<style scoped>\n.main-content-wrap {\n  padding: 10px;\n}\n\n.width-300 {\n  width: 300px;\n}\n\n.width-230 {\n  width: 230px;\n}\n\n.page-wrap {\n  margin-top: 20px;\n}\n\n\n.page-wrap .page {\n  float: right;\n}\n\n.search-bar {\n  padding-bottom: 10px;\n}\n\n\n.demo-table-expand {\n  font-size: 12px;\n}\n\n.demo-table-expand label {\n  color: #99a9bf;\n}\n\n.demo-table-expand .el-form-item {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 45%;\n}\n\n.box-card {\n  width: 100%;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _manifestAPI = __webpack_require__(93);

var _manifestAPI2 = _interopRequireDefault(_manifestAPI);

__webpack_require__(94);

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
        manifestnum: [{ required: true, message: '请输入舱单编号', trigger: 'blur' }],
        receivecompany: [{ required: true, message: '请输入收件公司', trigger: 'blur' }],
        receiveperson: [{ required: true, message: '请输入收货人', trigger: 'blur' }]
      },
      saveManifestStatus: false,
      search: { manifestnum: '', goodsname: '', receivecompany: '', receiveperson: '' },
      viewDialog: false,
      manifestGoodInfo: { goodsinfo: '', receivecompany: '' }
    };
  },

  methods: {
    onSelectionChange: function onSelectionChange(selection) {
      this.selectedRows = selection;
    },
    handleSearchBtn: function handleSearchBtn() {
      this.manifestTable = Object.assign([], this.temmanifestTable);
      var temManifestnum = this.search.manifestnum;
      var temGoodsname = this.search.goodsname;
      var temReceiveCompany = this.search.receivecompany;
      var temReceivePerson = this.search.receiveperson;
      if (temManifestnum != '' || temGoodsname != '' || temReceiveCompany != '' || temReceivePerson != '') {
        if (temManifestnum != '') {
          this.manifestTable = this.manifestTable.filter(function (val) {
            return val.manifestnum.indexOf(temManifestnum) != -1;
          });
        }
        if (temGoodsname != '') {
          this.manifestTable = this.manifestTable.filter(function (val) {
            return val.goodsname.indexOf(temGoodsname) != -1;
          });
        }
        if (temReceiveCompany != '') {
          this.manifestTable = this.manifestTable.filter(function (val) {
            return val.receivecompany.indexOf(temReceiveCompany) != -1;
          });
        }
        if (temReceivePerson != '') {
          this.manifestTable = this.manifestTable.filter(function (val) {
            return val.receiveperson.indexOf(temReceivePerson) != -1;
          });
        }
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
      console.log(this.tmpManifest.manifestnum);
      if (!this.tmpManifest.manifestnum || this.tmpManifest.manifestnum == '' || !this.tmpManifest.receivecompany || this.tmpManifest.receivecompany == '' || !this.tmpManifest.receiveperson || this.tmpManifest.receiveperson == '') {
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
      this.addOrEdit = 1;
      this.tmpManifest = {};
      this.saveManifestStatus = false;
      this.showDialog = true;
    },

    //编辑
    editManifest: function editManifest() {
      this.addOrEdit = 2;
      this.showDialog = true;
      this.saveManifestStatus = false;
      this.tmpManifest = Object.assign({}, this.selectedRows[0]);
    },

    //新建和编辑时保存
    saveManifest: function saveManifest() {
      var _this = this;

      this.$refs['manifestForm'].validate(function (valid) {
        if (valid) {
          _this.saveManifestStatus = true;
          if (_this.addOrEdit == 1) {
            _manifestAPI2.default.addManifest(_this.tmpManifest).then(function (data) {
              if (data.status == 1) {
                if (_this.manifestTable.length == 0) {
                  _this.tmpManifest.id = _this.manifestTable.length + 1;
                } else {
                  var temArr = Object.assign([], _this.manifestTable);
                  temArr.sort(function (a, b) {
                    return b.id - a.id;
                  });
                  _this.tmpManifest.id = temArr[0].id + 1;
                }
                _this.manifestTable.push(_this.tmpManifest);
                _this.temmanifestTable = Object.assign([], _this.manifestTable);
                _this.$message.success(data.message);
              } else {
                _this.$message.error(data.message);
              }
              _this.saveManifestStatus = false;
              _this.showDialog = false;
            });
          } else if (_this.addOrEdit == 2) {
            _manifestAPI2.default.editManifest(_this.tmpManifest.id, _this.tmpManifest).then(function (data) {
              if (data.status == 1) {
                var index = _this.manifestTable.findIndex(function (val) {
                  return val.id == _this.tmpManifest.id;
                });
                _this.manifestTable = [].concat(_toConsumableArray(_this.manifestTable.slice(0, index)), [Object.assign({}, _this.tmpManifest)], _toConsumableArray(_this.manifestTable.slice(index + 1)));
                _this.temmanifestTable = Object.assign([], _this.manifestTable);
                _this.$message.success(data.message);
              } else {
                _this.$message.error(data.message);
              }
              _this.saveManifestStatus = false;
              _this.showDialog = false;
            });
          }
        } else {
          _this.$alert("请填写正确选项", "提示");
          return false;
        }
      });
    },

    //刪除
    deleteManifests: function deleteManifests() {
      var _this2 = this;

      var rowIds = [];
      this.selectedRows.forEach(function (row) {
        rowIds.push(row.id);
      });

      this.$confirm("确认删除所选的数据?", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action == 'confirm') {
            instance.confirmButtonLoading = true;
            return _manifestAPI2.default.deleteManifests(rowIds).then(function (data) {
              if (data.status == 1) {
                _this2.manifestTable = _this2.manifestTable.filter(function (val) {
                  return !rowIds.includes(val.id);
                });
                _this2.temmanifestTable = Object.assign([], _this2.manifestTable);
                _this2.$notify({
                  title: '成功',
                  message: data.message,
                  type: 'success',
                  duration: 2000
                });
              } else {
                _this2.$alert(data.message);
              }
              instance.confirmButtonLoading = false;
              done(data);
            });
          } else {
            done();
          }
        }
      }).catch(function () {
        _this2.$notify.info({
          title: '取消',
          message: '操作取消！',
          duration: 2000
        });
      });
    },

    //查看商品
    viewGoods: function viewGoods() {
      var _this3 = this;

      this.viewDialog = true;
      this.manifestGoodInfo = { goodsinfo: '', receivecompany: '' };
      this.manifestGoodInfo.receivecompany = this.selectedRows[0].receivecompany;
      _manifestAPI2.default.viewManifestsGoods(this.selectedRows[0].id).then(function (data) {
        _this3.manifestGoodInfo.goodsinfo = data.data;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    _manifestAPI2.default.getManifestData().then(function (data) {
      _this4.manifestTable = data.data;
      _this4.temmanifestTable = Object.assign([], _this4.manifestTable);
    });
  }
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var manifestAPI = {
  getManifestData: function getManifestData() {
    return axios.get('/api/manifests').then(function (res) {
      return res.data;
    });
  },
  addManifest: function addManifest(manifest) {
    return axios.post('/api/manifests', manifest).then(function (res) {
      return res.data;
    });
  },
  editManifest: function editManifest(id, manifest) {
    return axios.put('/api/manifests/' + id, manifest).then(function (res) {
      return res.data;
    });
  },
  deleteManifests: function deleteManifests(ids) {
    var strIds = ids.join(',');
    return axios.delete('/api/manifests/' + strIds).then(function (res) {
      return res.data;
    });
  },
  viewManifestsGoods: function viewManifestsGoods(id) {
    return axios.get('/api/manifests/viewgoods/' + id).then(function (res) {
      return res.data;
    });
  }
};

exports.default = manifestAPI;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _axiosMockAdapter = __webpack_require__(5);

var _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.axiosMock = window.axiosMock || new _axiosMockAdapter2.default(_axios2.default, { delayResponse: 10 });

var manifestsData = [{
  id: 1,
  manifestnum: 'QWERT1',
  receivecompany: '优衣库',
  goodsname: '男士休闲裤,外套,针织衫等',
  sendaddress: '日本东京',
  receiveperson: '张三',
  telephone: '010-34235345'
}, {
  id: 2,
  manifestnum: 'TREWQ2',
  receivecompany: '金利来',
  goodsname: '男士商务正装、休闲服饰、内衣',
  sendaddress: '中国香港',
  receiveperson: '张三',
  telephone: '010-888888'
}, {
  id: 3,
  manifestnum: 'ASDFG3',
  receivecompany: '三星智能手机',
  goodsname: '电子、金融、机械、化学等',
  sendaddress: '韩国首页',
  receiveperson: '李四',
  telephone: '010-66666'
}, {
  id: 4,
  manifestnum: 'KJHFGFG4',
  receivecompany: 'H&M',
  goodsname: '服装等',
  sendaddress: '瑞典',
  receiveperson: '王五',
  telephone: '010-09824545'
}];

function random(items) {
  return items[parseInt(items.length * Math.random())];
}
axiosMock.onGet('/api/manifests').reply(200, { data: manifestsData });
axiosMock.onPost(/api\/manifests$/).reply(200, { status: 1, message: '新建成功！' });
axiosMock.onPut(/api\/manifests\/\d+$/).reply(200, { status: 1, message: '编辑成功！' });
axiosMock.onDelete(/api\/manifests\/.+$/).reply(200, { status: 1, message: '删除成功！' });

var manifestGoodsInfo = ['正装系列包括衬衫、T恤、西装、西裤、休闲裤、夹克、棉褛、毛衣及服饰(含领带、皮具、领带夹、礼盒等)。高尔夫系列运动休闲系列，包括衬衫、T恤、休闲裤、夹克、毛衣等；内衣系列 家居服及内衣系列，包括男女内衣、内裤、家居服、睡衣、浴袍等；皮具系列(特许经营)包括男女皮鞋、皮包(特许经营)。', '包括啤酒、葡萄酒（香槟酒）、黄酒、果酒、清酒、米酒、白兰地、威士忌、伏特加、朗姆酒、金酒、白酒、药酒、保健酒、鸡尾酒、利口酒、龙舌兰、柯迪尔酒、梅子酒等用粮食、水果等含淀粉或糖的物质发酵或配制而制成的含乙醇的酒精饮料', '三星手机、电视、数码影音、电脑办公及BSV液晶拼接屏.主要业务为制造电子零件装备、军用飞机零组件（与电子领域重复）三星火灾海上保险：主要业务为人寿保险和金融服务。', '洗护用品：包括清洁用品、护肤用品、护发用品和其他洗护用品。清洁用品：洗面奶（乳、皂）、洁面霜（露、蜜、粉、者哩）、卸妆水（乳、膏、液、油）、鼻贴膜、去黑头膏（液）、剃须膏（泡沫）、磨砂膏、按摩膏、去角质膏（粉），牙膏、牙粉、牙线、漱口水，香皂、浴液、洗手液；护肤用品：化妆水（含爽肤水、柔肤水、紧肤水、护肤水、收缩水）、须后水、面霜、眼霜、日霜、晚霜、冷霜、防晒霜（油）、晒黑油、祛斑霜、护肤膏（霜、露、乳液、喷雾）、精油、隔离霜、面膜、面膜膏（粉）、眼膜、颈膜、护手霜、润唇膏，痱子粉、爽身粉、防蚊液、皮肤护理软膏；护发用品：洗/护发液、发乳、发油、发蜡、焗油膏、发胶、发泥、定型水（啫哩、摩丝）、烫发剂、染发剂；其他用品：丰（美、健）乳霜、纤体霜（膏）、健美霜、紧致霜、除臭露（剂）'];
axiosMock.onGet(/api\/manifests\/viewgoods\/\d+$/).reply(function (config) {
  var goodsInfo = random(manifestGoodsInfo);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([200, {
        data: goodsInfo
      }]);
    }, 500);
  });
});

/***/ }),
/* 95 */
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
  }, [_vm._v("\n      舱单编号:\n      "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入舱单编号"
    },
    model: {
      value: (_vm.search.manifestnum),
      callback: function($$v) {
        _vm.$set(_vm.search, "manifestnum", $$v)
      },
      expression: "search.manifestnum"
    }
  }), _vm._v("\n      商品：\n      "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入商品"
    },
    model: {
      value: (_vm.search.goodsname),
      callback: function($$v) {
        _vm.$set(_vm.search, "goodsname", $$v)
      },
      expression: "search.goodsname"
    }
  }), _vm._v("\n      收件公司：\n      "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入收件公司"
    },
    model: {
      value: (_vm.search.receivecompany),
      callback: function($$v) {
        _vm.$set(_vm.search, "receivecompany", $$v)
      },
      expression: "search.receivecompany"
    }
  }), _vm._v("\n      收货人：\n      "), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "size": "small",
      "placeholder": "请输入收货人"
    },
    model: {
      value: (_vm.search.receiveperson),
      callback: function($$v) {
        _vm.$set(_vm.search, "receiveperson", $$v)
      },
      expression: "search.receiveperson"
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
    attrs: {
      "data": _vm.manifestTable
    },
    on: {
      "selection-change": _vm.onSelectionChange
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
        }, [_c('span', [_vm._v(_vm._s(props.row.manifestnum))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "收件公司"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.receivecompany))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "商品"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.goodsname))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "发货地"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.sendaddress))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "收货人"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.receiveperson))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "电话"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.telephone))])])], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "manifestnum",
      "min-width": "20%",
      "label": "舱单编号 "
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "receivecompany",
      "min-width": "15%",
      "label": "收件公司"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "goodsname",
      "min-width": "30%",
      "label": "商品"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sendaddress",
      "min-width": "10%",
      "label": "发货地"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "receiveperson",
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
      "prop": "manifestnum"
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入舱单编号"
    },
    model: {
      value: (_vm.tmpManifest.manifestnum),
      callback: function($$v) {
        _vm.$set(_vm.tmpManifest, "manifestnum", $$v)
      },
      expression: "tmpManifest.manifestnum"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收件公司：",
      "prop": "receivecompany"
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入收件公司"
    },
    model: {
      value: (_vm.tmpManifest.receivecompany),
      callback: function($$v) {
        _vm.$set(_vm.tmpManifest, "receivecompany", $$v)
      },
      expression: "tmpManifest.receivecompany"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品："
    }
  }, [_c('el-input', {
    staticClass: "width-230",
    attrs: {
      "placeholder": "请输入商品"
    },
    model: {
      value: (_vm.tmpManifest.goodsname),
      callback: function($$v) {
        _vm.$set(_vm.tmpManifest, "goodsname", $$v)
      },
      expression: "tmpManifest.goodsname"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "发货地："
    }
  }, [_c('el-input', {
    staticClass: "width-230",
    attrs: {
      "placeholder": "请输入发货地"
    },
    model: {
      value: (_vm.tmpManifest.sendaddress),
      callback: function($$v) {
        _vm.$set(_vm.tmpManifest, "sendaddress", $$v)
      },
      expression: "tmpManifest.sendaddress"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收货人：",
      "prop": "receiveperson"
    }
  }, [_c('el-input', {
    staticClass: "width-230",
    attrs: {
      "placeholder": "请输入收货人"
    },
    model: {
      value: (_vm.tmpManifest.receiveperson),
      callback: function($$v) {
        _vm.$set(_vm.tmpManifest, "receiveperson", $$v)
      },
      expression: "tmpManifest.receiveperson"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "电话："
    }
  }, [_c('el-input', {
    staticClass: "width-230",
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
  }, [_c('span', [_vm._v("收件公司：" + _vm._s(_vm.manifestGoodInfo.receivecompany))])]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.manifestGoodInfo.goodsinfo))])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("关 闭")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4966948f", module.exports)
  }
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(101),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-b7b1383e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\setting\\processingTrade.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] processingTrade.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b7b1383e", Component.options)
  } else {
    hotAPI.reload("data-v-b7b1383e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("0ef6defb", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b7b1383e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./processingTrade.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b7b1383e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./processingTrade.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.search-bar[data-v-b7b1383e] {\n  padding-bottom: 10px;\n}\n.main-content-wrap[data-v-b7b1383e] {\n  padding: 10px;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/processingTrade.vue?671d9387"],"names":[],"mappings":";AA6fA;EACA,qBAAA;CACA;AAEA;EACA,cAAA;CACA","file":"processingTrade.vue","sourcesContent":["<template>\n  <div>\n    <!-- 工具条 -->\n    <el-toolbar>\n      <el-button @click=\"ptAddClick\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> 新建</el-button>\n      <el-button @click=\"ptEditClick\" :disabled=\"ptSelectedRows.length !== 1\">\n        <i class=\"fa fa-edit\" aria-hidden=\"true\"></i> 编辑</el-button>\n      <el-button @click=\"ptDelClick\" :disabled=\"ptSelectedRows.length < 1\">\n        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> 删除</el-button>\n      <el-button @click=\"ptViewGoodsClick\" :disabled=\"ptSelectedRows.length !== 1\">\n        <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 查看商品</el-button>\n    </el-toolbar>\n    <div class=\"main-content-wrap\">\n      <!-- 搜索工具条 -->\n      <div class=\"search-bar fr\">\n        &nbsp; &nbsp;编号:\n        <el-input type=\"text\" size=\"small\" style=\"width: 150px;\"></el-input>\n        &nbsp; &nbsp;加工企业:\n        <el-input type=\"text\" size=\"small\" style=\"width: 150px;\"></el-input>\n        &nbsp; &nbsp;委托企业:\n        <el-input type=\"text\" size=\"small\" style=\"width: 150px;\"></el-input>\n        &nbsp; &nbsp;\n        <el-button @click=\"apSearch\" type=\"primary\" size=\"small\" style=\"width: 60px;\">搜索</el-button>\n      </div>\n      <!-- 列表 -->\n      <el-table class=\"content-table\" ref=\"ptListTable\" highlight-current-row :data=\"ptListData\" tooltip-effect=\"dark\" @selection-change=\"ptOnSelectionChange\">\n        <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n        <el-table-column type=\"expand\">\n          <template slot-scope=\"props\">\n            <el-form label-position=\"left\" inline class=\"demo-table-expand\" label-width=\"80px\">\n              <el-form-item label=\"编号\" style=\"width:50%\">\n                <span>{{props.row.number}}</span>\n              </el-form-item>\n              <el-form-item label=\"加工企业\">\n                <span>{{props.row.processCorp}}</span>\n              </el-form-item>\n              <el-form-item label=\"委托企业\" style=\"width:50%\">\n                <span>{{props.row.commissionedCorp}}</span>\n              </el-form-item>\n              <el-form-item label=\"合同备案\">\n                <span>\n                  <el-button @click.native.prevent=\"contractFileView\" type=\"text\">\n                    查看文件\n                  </el-button>\n                </span>\n              </el-form-item>\n              <el-form-item label=\"料件备案\" style=\"width:50%\">\n                <span>\n                  <el-button @click.native.prevent=\"materialFileView\" type=\"text\">\n                    查看文件\n                  </el-button>\n                </span>\n              </el-form-item>\n              <el-form-item label=\"报关单\">\n                <span>\n                  <el-button @click.native.prevent=\"feclarationFileView\" type=\"text\">\n                    查看文件\n                  </el-button>\n                </span>\n              </el-form-item>\n            </el-form>\n          </template>\n        </el-table-column>\n        <el-table-column prop=\"number\" label=\"编号\" width=\"\"></el-table-column>\n        <el-table-column prop=\"processCorp\" label=\"加工企业\" width=\"\"></el-table-column>\n        <el-table-column prop=\"commissionedCorp\" label=\"委托企业\" width=\"\"></el-table-column>\n        <el-table-column label=\"合同备案\" width=\"\">\n          <template slot-scope=\"scope\">\n            <el-button @click.native.prevent=\"contractFileView\" type=\"text\">\n              查看文件\n            </el-button>\n          </template>\n        </el-table-column>\n        <el-table-column prop=\"\" label=\"料件备案\" width=\"\">\n          <template slot-scope=\"scope\">\n            <el-button @click.native.prevent=\"materialFileView\" type=\"text\">\n              查看文件\n            </el-button>\n          </template>\n        </el-table-column>\n        <el-table-column prop=\"\" label=\"报关单\" width=\"\">\n          <template slot-scope=\"scope\">\n            <el-button @click.native.prevent=\"feclarationFileView\" type=\"text\">\n              查看文件\n            </el-button>\n          </template>\n        </el-table-column>\n      </el-table>\n      <div class=\"fr\" style=\"margin-top:10px;\">\n        <el-pagination @size-change=\"ptHandleSizeChange\" @current-change=\"ptHandleCurrentChange\" :current-page=\"ptCurrentPage\" :page-sizes=\"ptPageSizes\" :page-size=\"ptPageSize\" :total=\"ptTotal\" layout=\"total, sizes, prev, pager, next\"></el-pagination>\n      </div>\n    </div>\n    <!-- 新建、编辑框 -->\n    <el-dialog :title=\"editMode===1?'新建':'编辑'\" :visible.sync=\"addAndEditDialogIsShow\">\n      <el-form :model=\"ptDataModel\" :rules=\"ptDataRules\" ref=\"ptDataRef\" label-width=\"160px\" style=\"height:400px;overflow-y:hidden;overflow-x:hidden;\">\n        <el-form-item label=\"编号\" prop=\"number\">\n          <el-input type=\"text\" v-model=\"ptDataModel.number\" auto-complete=\"off\" style=\"width:85%\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"加工企业\" prop=\"processCorp\">\n          <el-input type=\"text\" v-model=\"ptDataModel.processCorp\" auto-complete=\"off\" style=\"width:85%\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"委托企业\" prop=\"commissionedCorp\">\n          <el-input type=\"text\" v-model=\"ptDataModel.commissionedCorp\" auto-complete=\"off\" style=\"width:85%\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"合同备案\" prop=\"contract\" v-show=\"editMode===1\">\n          <el-upload :on-success=\"onUploadSuccess\" class=\"upload-file\" action=\"\" :multiple=\"false\" :file-list=\"fileList\">\n            <el-button size=\"small\" type=\"primary\">点击上传</el-button>\n          </el-upload>\n        </el-form-item>\n        <el-form-item label=\"料件备案\" prop=\"material\" v-show=\"editMode===1\">\n          <el-upload :on-success=\"onUploadSuccess\" class=\"upload-file\" action=\"\" :multiple=\"false\" :file-list=\"fileList\">\n            <el-button size=\"small\" type=\"primary\">点击上传</el-button>\n          </el-upload>\n        </el-form-item>\n        <el-form-item label=\"报关单\" prop=\"feclaration\" v-show=\"editMode===1\">\n          <el-upload :on-success=\"onUploadSuccess\" class=\"upload-file\" action=\"\" :multiple=\"false\" :file-list=\"fileList\">\n            <el-button size=\"small\" type=\"primary\">点击上传</el-button>\n          </el-upload>\n        </el-form-item>\n        <el-form-item label=\"合同备案\" prop=\"contract\" v-show=\"editMode===2\">\n          <el-button @click.native.prevent=\"contractFileView\">\n            查看文件\n          </el-button>\n        </el-form-item>\n        <el-form-item label=\"料件备案\" prop=\"material\" v-show=\"editMode===2\">\n          <el-button @click.native.prevent=\"materialFileView\">\n            查看文件\n          </el-button>\n        </el-form-item>\n        <el-form-item label=\"报关单\" prop=\"feclaration\" v-show=\"editMode===2\">\n          <el-button @click.native.prevent=\"feclarationFileView\">\n            查看文件\n          </el-button>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"addAndEditDialogIsShow=false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"addAndEditOkHandler\">确 定</el-button>\n      </div>\n    </el-dialog>\n    <!-- 商品新建、编辑框 -->\n    <el-dialog :title=\"goodsEditMode===1?'新建':'编辑'\" :visible.sync=\"goodsAddAndEditDialogIsShow\">\n      <el-form :model=\"goodsDataModel\" :rules=\"goodsDataRules\" ref=\"goodsDataRef\" label-width=\"160px\" style=\"height:400px;overflow-y:scroll;overflow-x:hidden;\">\n        <el-form-item label=\"项号\" prop=\"itemNum\">\n          <el-input type=\"text\" v-model=\"goodsDataModel.itemNum\" auto-complete=\"off\" style=\"width:85%\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"商品编号\" prop=\"productNum\">\n          <el-input type=\"text\" v-model=\"goodsDataModel.productNum\" auto-complete=\"off\" style=\"width:85%\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"商品名称、规格型号\" prop=\"nameAndSpecifications\">\n          <el-input type=\"text\" v-model=\"goodsDataModel.nameAndSpecifications\" auto-complete=\"off\" style=\"width:85%\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"数量及单位\" prop=\"quantityAndUnit\">\n          <el-input type=\"text\" v-model=\"goodsDataModel.quantityAndUnit\" auto-complete=\"off\" style=\"width:85%\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"原产国(地区)\" prop=\"originCountry\">\n          <el-input type=\"text\" v-model=\"goodsDataModel.originCountry\" auto-complete=\"off\" style=\"width:85%\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"单价\" prop=\"unitPrice\">\n          <el-input type=\"text\" v-model=\"goodsDataModel.unitPrice\" auto-complete=\"off\" style=\"width:85%\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"总价\" prop=\"totalPrice\">\n          <el-input type=\"text\" v-model=\"goodsDataModel.totalPrice\" auto-complete=\"off\" style=\"width:85%\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"币制\" prop=\"currency\">\n          <el-input type=\"text\" v-model=\"goodsDataModel.currency\" auto-complete=\"off\" style=\"width:85%\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"征免\" prop=\"levy\">\n          <el-input type=\"text\" v-model=\"goodsDataModel.levy\" auto-complete=\"off\" style=\"width:85%\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"goodsAddAndEditDialogIsShow=false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"goodsAddAndEditOkHandler\">确 定</el-button>\n      </div>\n    </el-dialog>\n    <!-- 文件查看框 -->\n    <el-dialog :title=\"'文件查看'\" :visible.sync=\"fileDialogIsShow\">\n      <img src=\"http://www.qingshengjiuye.com/UploadFiles/201610271722212414737.jpg\" :style=\"{height:1205+'px',overflowY:'scroll',overflowX:'hidden', paddingRight:'15px'}\">\n      <div slot=\"footer \">\n        <el-button @click=\"fileDialogIsShow=false\">取 消</el-button>\n        <el-button type=\"primary \" @click=\"fileViewOkHandler\">确 定</el-button>\n      </div>\n    </el-dialog>\n    <!-- 商品信息框 -->\n    <el-dialog :title=\" '商品信息' \" :visible.sync=\"goodsDialogIsShow\" size=\"large\">\n      <!-- 工具条 -->\n      <el-toolbar>\n        <el-button @click=\"goodsAddClick\">\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> 新建</el-button>\n        <el-button @click=\"goodsEditClick\" :disabled=\"goodsSelectedRows.length !== 1\">\n          <i class=\"fa fa-edit\" aria-hidden=\"true\"></i> 编辑</el-button>\n        <el-button @click=\"goodsDelClick\" :disabled=\"goodsSelectedRows.length < 1\">\n          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> 删除</el-button>\n      </el-toolbar>\n      <div class=\"main-content-wrap\">\n        <el-table ref=\"goodsListTable\" highlight-current-row :data=\"goodsListData\" tooltip-effect=\"dark\" @selection-change=\"goodsOnSelectionChange\">\n          <el-table-column type=\"selection\" width=\"55\" align=\"center\"></el-table-column>\n          <el-table-column min-width=\"4%\" label=\"项号\" prop=\"itemNum\"></el-table-column>\n          <el-table-column min-width=\"8%\" label=\"商品编号\" prop=\"productNum\"></el-table-column>\n          <el-table-column min-width=\"20%\" label=\"商品名称、规格型号\" prop=\"nameAndSpecifications\"></el-table-column>\n          <el-table-column min-width=\"15%\" label=\"数量及单位\" prop=\"quantityAndUnit\"></el-table-column>\n          <el-table-column min-width=\"5%\" label=\"原产国(地区)\" prop=\"originCountry\"></el-table-column>\n          <el-table-column min-width=\"5%\" label=\"单价\" prop=\"unitPrice\"></el-table-column>\n          <el-table-column min-width=\"5%\" label=\"总价\" prop=\"totalPrice\"></el-table-column>\n          <el-table-column min-width=\"5%\" label=\"币制\" prop=\"currency\"></el-table-column>\n          <el-table-column min-width=\"5%\" label=\"征免\" prop=\"levy\"></el-table-column>\n        </el-table>\n      </div>\n      <div slot=\"footer\">\n        <el-button type=\"primary\" @click=\"goodsDialogIsShow=false\">确 定</el-button>\n      </div>\n    </el-dialog>\n  </div>\n</template>\n\n<script>\n// import './mock/processingTrade.js'\nimport processingTradeAPI from './api/processingTradeAPI.js';\nexport default {\n  data() {\n    return {\n      clientHeight: 0,\n      clientWidth: 0,\n      ptListData: [],\n      editMode: 1, //新建1，编辑2\n      goodsEditMode: 1, //新建1，编辑2\n      addAndEditDialogIsShow: false,\n      fileDialogIsShow: false,\n      fileUploadDialogIsShow: false,\n      goodsDialogIsShow: false,\n      goodsAddAndEditDialogIsShow: false,\n      ptSelectedRows: [],\n      goodsSelectedRows: [],\n      ptCurrentPage: 1,\n      ptPageSizes: [5, 10, 15, 20],\n      ptPageSize: 10,\n      ptTotal: 30,\n      ptDataModel: {\n        number: '',\n        processCorp: '',\n        commissionedCorp: '',\n        contract: '',\n        material: '',\n        feclaration: '',\n      },\n      goodsDataModel: {\n        itemNum: '',\n        productNum: '',\n        nameAndSpecifications: '',\n        quantityAndUnit: '',\n        originCountry: '',\n        unitPrice: '',\n        totalPrice: '',\n        currency: '',\n        levy: '',\n      },\n      goodsListData: [],\n      ptDataRules: {\n        number: [{ required: true, message: '请输入编号', trigger: 'blur' }],\n        processCorp: [{ required: true, message: '请输入加工企业', trigger: 'blur' }],\n        commissionedCorp: [\n          { required: true, message: '请输入委托企业', trigger: 'blur' },\n        ],\n      },\n      goodsDataRules: {\n        itemNum: [{ required: true, message: '该项不能为空', trigger: 'blur' }],\n        productNum: [{ required: true, message: '该项不能为空', trigger: 'blur' }],\n        nameAndSpecifications: [\n          { required: true, message: '该项不能为空', trigger: 'blur' },\n        ],\n        quantityAndUnit: [\n          { required: true, message: '该项不能为空', trigger: 'blur' },\n        ],\n        originCountry: [{ required: true, message: '该项不能为空', trigger: 'blur' }],\n        unitPrice: [{ required: true, message: '该项不能为空', trigger: 'blur' }],\n        totalPrice: [{ required: true, message: '该项不能为空', trigger: 'blur' }],\n        currency: [{ required: true, message: '该项不能为空', trigger: 'blur' }],\n        levy: [{ required: true, message: '该项不能为空', trigger: 'blur' }],\n      },\n    };\n  },\n  methods: {\n    ptOnSelectionChange(selection) {\n      this.ptSelectedRows = selection;\n    },\n    goodsOnSelectionChange(selection) {\n      this.goodsSelectedRows = selection;\n    },\n    loadProcessingTradeList() {\n      processingTradeAPI\n        .getProcessingTradeList(this.ptCurrentPage, this.ptPageSize)\n        .then(data => {\n          this.ptListData = data.data;\n        });\n    },\n    loadGoodsList() {\n      processingTradeAPI.getGoodsList().then(data => {\n        this.goodsListData = data.data;\n      });\n    },\n    ptAddClick() {\n      this.editMode = 1;\n      this.ptDataModel = {\n        number: '',\n        processCorp: '',\n        commissionedCorp: '',\n        contract: '',\n        material: '',\n        feclaration: '',\n      };\n      this.addAndEditDialogIsShow = true;\n    },\n    ptEditClick() {\n      this.editMode = 2;\n      this.ptDataModel = Object.assign({}, this.ptSelectedRows[0]);\n      this.addAndEditDialogIsShow = true;\n    },\n    goodsDelClick() {\n      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n      }).then(() => {\n        this.$notify({\n          title: '成功',\n          message: '删除成功',\n          type: 'success',\n          duration: 2000,\n        });\n      });\n    },\n    goodsAddClick() {\n      this.goodsEditMode = 1;\n      this.goodsDataModel = {};\n      this.goodsAddAndEditDialogIsShow = true;\n    },\n    goodsEditClick() {\n      this.goodsEditMode = 2;\n      this.goodsDataModel = Object.assign({}, this.goodsSelectedRows[0]);\n      this.goodsAddAndEditDialogIsShow = true;\n    },\n    ptDelClick() {\n      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n      })\n        .then(() => {\n          let rowIds = [];\n          this.ptSelectedRows.forEach(function(row) {\n            rowIds.push(row.number);\n          });\n          return rowIds;\n        })\n        .then(ids => {\n          if (!ids) {\n            return;\n          }\n          processingTradeAPI.deleteDataList(ids).then(data => {\n            this.ptSelectedRows = [];\n            if (data.status == 1) {\n              this.ptListData = this.ptListData.filter(\n                val => !ids.includes(val.id)\n              );\n              this.loadProcessingTradeList();\n              this.ptTotal = this.ptTotal - ids.length;\n              this.$notify.success({\n                title: '成功',\n                message: data.message,\n                duration: 2000,\n              });\n            } else {\n              this.$notify.fail({\n                title: '失败',\n                message: data.message,\n                duration: 2000,\n              });\n            }\n          });\n        });\n    },\n    ptViewGoodsClick() {\n      this.goodsDialogIsShow = true;\n    },\n    contractFileView() {\n      this.fileDialogIsShow = true;\n    },\n    materialFileView() {\n      this.fileDialogIsShow = true;\n    },\n    feclarationFileView() {\n      this.fileDialogIsShow = true;\n    },\n    goodsDialogOkHandler() {\n      this.goodsDialogIsShow = false;\n      this.$notify({\n        title: '成功',\n        message: '保存成功',\n        type: 'success',\n        duration: 2000,\n      });\n    },\n    addAndEditOkHandler() {\n      let validateForm = () => {\n        return new Promise((resolve, reject) => {\n          this.$refs['ptDataRef'].validate(valid => {\n            if (valid) {\n              return resolve(true);\n            }\n            return reject(false);\n          });\n        });\n      };\n\n      let addForm = () => {\n        return processingTradeAPI.addFormData(this.ptDataModel).then(data => {\n          this.loadProcessingTradeList();\n          return data;\n        });\n      };\n\n      let editForm = () => {\n        return processingTradeAPI.editFormData(this.ptDataModel).then(data => {\n          this.loadProcessingTradeList();\n          return data;\n        });\n      };\n\n      validateForm()\n        .then(() => {\n          if (this.editMode === 1) {\n            return addForm();\n          }\n          if (this.editMode === 2) {\n            return editForm();\n          }\n        })\n        .then(res => {\n          if (res.status === 1) {\n            this.addAndEditDialogIsShow = false;\n            this.$notify({\n              title: '成功',\n              message: res.message,\n              type: 'success',\n              duration: 2000,\n            });\n          } else {\n            this.$notify.error({\n              title: '失败',\n              message: res.message,\n              duration: 2000,\n            });\n          }\n        })\n        .catch(e => {\n          console.log(e);\n          this.$notify.error({\n            title: '输入错误',\n            message: '没有正确填写表单项！',\n            duration: 2000,\n          });\n        });\n    },\n    goodsAddAndEditOkHandler() {\n      this.goodsAddAndEditDialogIsShow = false;\n      this.$notify({\n        title: '成功',\n        message: '保存成功',\n        type: 'success',\n        duration: 2000,\n      });\n    },\n    fileViewOkHandler() {\n      this.fileDialogIsShow = false;\n      this.$notify({\n        title: '成功',\n        message: '保存成功',\n        type: 'success',\n        duration: 2000,\n      });\n    },\n    ptHandleSizeChange(val) {\n      this.ptPageSize = val;\n      this.loadProcessingTradeList();\n    },\n    ptHandleCurrentChange(val) {\n      this.ptCurrentPage = val;\n      this.loadProcessingTradeList();\n    },\n  },\n  created() {\n    this.loadProcessingTradeList();\n    this.loadGoodsList();\n    this.clientHeight = document.documentElement.clientHeight - 270;\n    this.clientWidth = document.documentElement.clientWidth - 250;\n    let num = Math.floor(this.clientHeight / 40) - 1;\n    this.ptPageSize = Math.floor(num / 5) * 5;\n    this.ptPageSizes = [\n      this.ptPageSize,\n      this.ptPageSize * 2,\n      this.ptPageSize * 4,\n    ];\n  },\n};\n</script>\n\n<style scoped>\n.search-bar {\n  padding-bottom: 10px;\n}\n\n.main-content-wrap {\n  padding: 10px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _processingTradeAPI = __webpack_require__(100);

var _processingTradeAPI2 = _interopRequireDefault(_processingTradeAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      clientHeight: 0,
      clientWidth: 0,
      ptListData: [],
      editMode: 1, //新建1，编辑2
      goodsEditMode: 1, //新建1，编辑2
      addAndEditDialogIsShow: false,
      fileDialogIsShow: false,
      fileUploadDialogIsShow: false,
      goodsDialogIsShow: false,
      goodsAddAndEditDialogIsShow: false,
      ptSelectedRows: [],
      goodsSelectedRows: [],
      ptCurrentPage: 1,
      ptPageSizes: [5, 10, 15, 20],
      ptPageSize: 10,
      ptTotal: 30,
      ptDataModel: {
        number: '',
        processCorp: '',
        commissionedCorp: '',
        contract: '',
        material: '',
        feclaration: ''
      },
      goodsDataModel: {
        itemNum: '',
        productNum: '',
        nameAndSpecifications: '',
        quantityAndUnit: '',
        originCountry: '',
        unitPrice: '',
        totalPrice: '',
        currency: '',
        levy: ''
      },
      goodsListData: [],
      ptDataRules: {
        number: [{ required: true, message: '请输入编号', trigger: 'blur' }],
        processCorp: [{ required: true, message: '请输入加工企业', trigger: 'blur' }],
        commissionedCorp: [{ required: true, message: '请输入委托企业', trigger: 'blur' }]
      },
      goodsDataRules: {
        itemNum: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
        productNum: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
        nameAndSpecifications: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
        quantityAndUnit: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
        originCountry: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
        unitPrice: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
        totalPrice: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
        currency: [{ required: true, message: '该项不能为空', trigger: 'blur' }],
        levy: [{ required: true, message: '该项不能为空', trigger: 'blur' }]
      }
    };
  },

  methods: {
    ptOnSelectionChange: function ptOnSelectionChange(selection) {
      this.ptSelectedRows = selection;
    },
    goodsOnSelectionChange: function goodsOnSelectionChange(selection) {
      this.goodsSelectedRows = selection;
    },
    loadProcessingTradeList: function loadProcessingTradeList() {
      var _this = this;

      _processingTradeAPI2.default.getProcessingTradeList(this.ptCurrentPage, this.ptPageSize).then(function (data) {
        _this.ptListData = data.data;
      });
    },
    loadGoodsList: function loadGoodsList() {
      var _this2 = this;

      _processingTradeAPI2.default.getGoodsList().then(function (data) {
        _this2.goodsListData = data.data;
      });
    },
    ptAddClick: function ptAddClick() {
      this.editMode = 1;
      this.ptDataModel = {
        number: '',
        processCorp: '',
        commissionedCorp: '',
        contract: '',
        material: '',
        feclaration: ''
      };
      this.addAndEditDialogIsShow = true;
    },
    ptEditClick: function ptEditClick() {
      this.editMode = 2;
      this.ptDataModel = Object.assign({}, this.ptSelectedRows[0]);
      this.addAndEditDialogIsShow = true;
    },
    goodsDelClick: function goodsDelClick() {
      var _this3 = this;

      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this3.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success',
          duration: 2000
        });
      });
    },
    goodsAddClick: function goodsAddClick() {
      this.goodsEditMode = 1;
      this.goodsDataModel = {};
      this.goodsAddAndEditDialogIsShow = true;
    },
    goodsEditClick: function goodsEditClick() {
      this.goodsEditMode = 2;
      this.goodsDataModel = Object.assign({}, this.goodsSelectedRows[0]);
      this.goodsAddAndEditDialogIsShow = true;
    },
    ptDelClick: function ptDelClick() {
      var _this4 = this;

      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        var rowIds = [];
        _this4.ptSelectedRows.forEach(function (row) {
          rowIds.push(row.number);
        });
        return rowIds;
      }).then(function (ids) {
        if (!ids) {
          return;
        }
        _processingTradeAPI2.default.deleteDataList(ids).then(function (data) {
          _this4.ptSelectedRows = [];
          if (data.status == 1) {
            _this4.ptListData = _this4.ptListData.filter(function (val) {
              return !ids.includes(val.id);
            });
            _this4.loadProcessingTradeList();
            _this4.ptTotal = _this4.ptTotal - ids.length;
            _this4.$notify.success({
              title: '成功',
              message: data.message,
              duration: 2000
            });
          } else {
            _this4.$notify.fail({
              title: '失败',
              message: data.message,
              duration: 2000
            });
          }
        });
      });
    },
    ptViewGoodsClick: function ptViewGoodsClick() {
      this.goodsDialogIsShow = true;
    },
    contractFileView: function contractFileView() {
      this.fileDialogIsShow = true;
    },
    materialFileView: function materialFileView() {
      this.fileDialogIsShow = true;
    },
    feclarationFileView: function feclarationFileView() {
      this.fileDialogIsShow = true;
    },
    goodsDialogOkHandler: function goodsDialogOkHandler() {
      this.goodsDialogIsShow = false;
      this.$notify({
        title: '成功',
        message: '保存成功',
        type: 'success',
        duration: 2000
      });
    },
    addAndEditOkHandler: function addAndEditOkHandler() {
      var _this5 = this;

      var validateForm = function validateForm() {
        return new Promise(function (resolve, reject) {
          _this5.$refs['ptDataRef'].validate(function (valid) {
            if (valid) {
              return resolve(true);
            }
            return reject(false);
          });
        });
      };

      var addForm = function addForm() {
        return _processingTradeAPI2.default.addFormData(_this5.ptDataModel).then(function (data) {
          _this5.loadProcessingTradeList();
          return data;
        });
      };

      var editForm = function editForm() {
        return _processingTradeAPI2.default.editFormData(_this5.ptDataModel).then(function (data) {
          _this5.loadProcessingTradeList();
          return data;
        });
      };

      validateForm().then(function () {
        if (_this5.editMode === 1) {
          return addForm();
        }
        if (_this5.editMode === 2) {
          return editForm();
        }
      }).then(function (res) {
        if (res.status === 1) {
          _this5.addAndEditDialogIsShow = false;
          _this5.$notify({
            title: '成功',
            message: res.message,
            type: 'success',
            duration: 2000
          });
        } else {
          _this5.$notify.error({
            title: '失败',
            message: res.message,
            duration: 2000
          });
        }
      }).catch(function (e) {
        console.log(e);
        _this5.$notify.error({
          title: '输入错误',
          message: '没有正确填写表单项！',
          duration: 2000
        });
      });
    },
    goodsAddAndEditOkHandler: function goodsAddAndEditOkHandler() {
      this.goodsAddAndEditDialogIsShow = false;
      this.$notify({
        title: '成功',
        message: '保存成功',
        type: 'success',
        duration: 2000
      });
    },
    fileViewOkHandler: function fileViewOkHandler() {
      this.fileDialogIsShow = false;
      this.$notify({
        title: '成功',
        message: '保存成功',
        type: 'success',
        duration: 2000
      });
    },
    ptHandleSizeChange: function ptHandleSizeChange(val) {
      this.ptPageSize = val;
      this.loadProcessingTradeList();
    },
    ptHandleCurrentChange: function ptHandleCurrentChange(val) {
      this.ptCurrentPage = val;
      this.loadProcessingTradeList();
    }
  },
  created: function created() {
    this.loadProcessingTradeList();
    this.loadGoodsList();
    this.clientHeight = document.documentElement.clientHeight - 270;
    this.clientWidth = document.documentElement.clientWidth - 250;
    var num = Math.floor(this.clientHeight / 40) - 1;
    this.ptPageSize = Math.floor(num / 5) * 5;
    this.ptPageSizes = [this.ptPageSize, this.ptPageSize * 2, this.ptPageSize * 4];
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import './mock/processingTrade.js'

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var processingTradeAPI = {
  getProcessingTradeList: function getProcessingTradeList(pageIndex, pageSize) {
    return axios.get('/api/processingtrade/' + pageIndex + '/' + pageSize).then(function (res) {
      return res.data;
    });
  },
  getGoodsList: function getGoodsList() {
    return axios.get('/api/goodslist').then(function (res) {
      return res.data;
    });
  },
  addFormData: function addFormData(model) {
    return axios.post('/api/processingtrade', model).then(function (res) {
      return res.data;
    });
  },
  editFormData: function editFormData(model) {
    return axios.put('/api/processingtrade', model).then(function (res) {
      return res.data;
    });
  },
  deleteDataList: function deleteDataList(ids) {
    var strIds = ids.join(',');
    return axios.delete('/api/processingtrade/' + strIds).then(function (res) {
      return res.data;
    });
  }
};

exports.default = processingTradeAPI;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-toolbar', [_c('el-button', {
    on: {
      "click": _vm.ptAddClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 新建")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "disabled": _vm.ptSelectedRows.length !== 1
    },
    on: {
      "click": _vm.ptEditClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 编辑")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "disabled": _vm.ptSelectedRows.length < 1
    },
    on: {
      "click": _vm.ptDelClick
    }
  }, [_c('i', {
    staticClass: "fa fa-trash-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 删除")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "disabled": _vm.ptSelectedRows.length !== 1
    },
    on: {
      "click": _vm.ptViewGoodsClick
    }
  }, [_c('i', {
    staticClass: "fa fa-eye",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 查看商品")])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap"
  }, [_c('div', {
    staticClass: "search-bar fr"
  }, [_vm._v("\n         编号:\n      "), _c('el-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "text",
      "size": "small"
    }
  }), _vm._v("\n         加工企业:\n      "), _c('el-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "text",
      "size": "small"
    }
  }), _vm._v("\n         委托企业:\n      "), _c('el-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "text",
      "size": "small"
    }
  }), _vm._v("\n         \n      "), _c('el-button', {
    staticStyle: {
      "width": "60px"
    },
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.apSearch
    }
  }, [_vm._v("搜索")])], 1), _vm._v(" "), _c('el-table', {
    ref: "ptListTable",
    staticClass: "content-table",
    attrs: {
      "highlight-current-row": "",
      "data": _vm.ptListData,
      "tooltip-effect": "dark"
    },
    on: {
      "selection-change": _vm.ptOnSelectionChange
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
            "label-width": "80px"
          }
        }, [_c('el-form-item', {
          staticStyle: {
            "width": "50%"
          },
          attrs: {
            "label": "编号"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.number))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "加工企业"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.processCorp))])]), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "50%"
          },
          attrs: {
            "label": "委托企业"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.commissionedCorp))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "合同备案"
          }
        }, [_c('span', [_c('el-button', {
          attrs: {
            "type": "text"
          },
          nativeOn: {
            "click": function($event) {
              $event.preventDefault();
              _vm.contractFileView($event)
            }
          }
        }, [_vm._v("\n                  查看文件\n                ")])], 1)]), _vm._v(" "), _c('el-form-item', {
          staticStyle: {
            "width": "50%"
          },
          attrs: {
            "label": "料件备案"
          }
        }, [_c('span', [_c('el-button', {
          attrs: {
            "type": "text"
          },
          nativeOn: {
            "click": function($event) {
              $event.preventDefault();
              _vm.materialFileView($event)
            }
          }
        }, [_vm._v("\n                  查看文件\n                ")])], 1)]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "报关单"
          }
        }, [_c('span', [_c('el-button', {
          attrs: {
            "type": "text"
          },
          nativeOn: {
            "click": function($event) {
              $event.preventDefault();
              _vm.feclarationFileView($event)
            }
          }
        }, [_vm._v("\n                  查看文件\n                ")])], 1)])], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "number",
      "label": "编号",
      "width": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "processCorp",
      "label": "加工企业",
      "width": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "commissionedCorp",
      "label": "委托企业",
      "width": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "合同备案",
      "width": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text"
          },
          nativeOn: {
            "click": function($event) {
              $event.preventDefault();
              _vm.contractFileView($event)
            }
          }
        }, [_vm._v("\n            查看文件\n          ")])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "",
      "label": "料件备案",
      "width": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text"
          },
          nativeOn: {
            "click": function($event) {
              $event.preventDefault();
              _vm.materialFileView($event)
            }
          }
        }, [_vm._v("\n            查看文件\n          ")])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "",
      "label": "报关单",
      "width": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text"
          },
          nativeOn: {
            "click": function($event) {
              $event.preventDefault();
              _vm.feclarationFileView($event)
            }
          }
        }, [_vm._v("\n            查看文件\n          ")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "fr",
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.ptCurrentPage,
      "page-sizes": _vm.ptPageSizes,
      "page-size": _vm.ptPageSize,
      "total": _vm.ptTotal,
      "layout": "total, sizes, prev, pager, next"
    },
    on: {
      "size-change": _vm.ptHandleSizeChange,
      "current-change": _vm.ptHandleCurrentChange
    }
  })], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.editMode === 1 ? '新建' : '编辑',
      "visible": _vm.addAndEditDialogIsShow
    },
    on: {
      "update:visible": function($event) {
        _vm.addAndEditDialogIsShow = $event
      }
    }
  }, [_c('el-form', {
    ref: "ptDataRef",
    staticStyle: {
      "height": "400px",
      "overflow-y": "hidden",
      "overflow-x": "hidden"
    },
    attrs: {
      "model": _vm.ptDataModel,
      "rules": _vm.ptDataRules,
      "label-width": "160px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "编号",
      "prop": "number"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "85%"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.ptDataModel.number),
      callback: function($$v) {
        _vm.$set(_vm.ptDataModel, "number", $$v)
      },
      expression: "ptDataModel.number"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "加工企业",
      "prop": "processCorp"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "85%"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.ptDataModel.processCorp),
      callback: function($$v) {
        _vm.$set(_vm.ptDataModel, "processCorp", $$v)
      },
      expression: "ptDataModel.processCorp"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "委托企业",
      "prop": "commissionedCorp"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "85%"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.ptDataModel.commissionedCorp),
      callback: function($$v) {
        _vm.$set(_vm.ptDataModel, "commissionedCorp", $$v)
      },
      expression: "ptDataModel.commissionedCorp"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.editMode === 1),
      expression: "editMode===1"
    }],
    attrs: {
      "label": "合同备案",
      "prop": "contract"
    }
  }, [_c('el-upload', {
    staticClass: "upload-file",
    attrs: {
      "on-success": _vm.onUploadSuccess,
      "action": "",
      "multiple": false,
      "file-list": _vm.fileList
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    }
  }, [_vm._v("点击上传")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.editMode === 1),
      expression: "editMode===1"
    }],
    attrs: {
      "label": "料件备案",
      "prop": "material"
    }
  }, [_c('el-upload', {
    staticClass: "upload-file",
    attrs: {
      "on-success": _vm.onUploadSuccess,
      "action": "",
      "multiple": false,
      "file-list": _vm.fileList
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    }
  }, [_vm._v("点击上传")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.editMode === 1),
      expression: "editMode===1"
    }],
    attrs: {
      "label": "报关单",
      "prop": "feclaration"
    }
  }, [_c('el-upload', {
    staticClass: "upload-file",
    attrs: {
      "on-success": _vm.onUploadSuccess,
      "action": "",
      "multiple": false,
      "file-list": _vm.fileList
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    }
  }, [_vm._v("点击上传")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.editMode === 2),
      expression: "editMode===2"
    }],
    attrs: {
      "label": "合同备案",
      "prop": "contract"
    }
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        $event.preventDefault();
        _vm.contractFileView($event)
      }
    }
  }, [_vm._v("\n          查看文件\n        ")])], 1), _vm._v(" "), _c('el-form-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.editMode === 2),
      expression: "editMode===2"
    }],
    attrs: {
      "label": "料件备案",
      "prop": "material"
    }
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        $event.preventDefault();
        _vm.materialFileView($event)
      }
    }
  }, [_vm._v("\n          查看文件\n        ")])], 1), _vm._v(" "), _c('el-form-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.editMode === 2),
      expression: "editMode===2"
    }],
    attrs: {
      "label": "报关单",
      "prop": "feclaration"
    }
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        $event.preventDefault();
        _vm.feclarationFileView($event)
      }
    }
  }, [_vm._v("\n          查看文件\n        ")])], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.addAndEditDialogIsShow = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.addAndEditOkHandler
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.goodsEditMode === 1 ? '新建' : '编辑',
      "visible": _vm.goodsAddAndEditDialogIsShow
    },
    on: {
      "update:visible": function($event) {
        _vm.goodsAddAndEditDialogIsShow = $event
      }
    }
  }, [_c('el-form', {
    ref: "goodsDataRef",
    staticStyle: {
      "height": "400px",
      "overflow-y": "scroll",
      "overflow-x": "hidden"
    },
    attrs: {
      "model": _vm.goodsDataModel,
      "rules": _vm.goodsDataRules,
      "label-width": "160px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "项号",
      "prop": "itemNum"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "85%"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.goodsDataModel.itemNum),
      callback: function($$v) {
        _vm.$set(_vm.goodsDataModel, "itemNum", $$v)
      },
      expression: "goodsDataModel.itemNum"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品编号",
      "prop": "productNum"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "85%"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.goodsDataModel.productNum),
      callback: function($$v) {
        _vm.$set(_vm.goodsDataModel, "productNum", $$v)
      },
      expression: "goodsDataModel.productNum"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品名称、规格型号",
      "prop": "nameAndSpecifications"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "85%"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.goodsDataModel.nameAndSpecifications),
      callback: function($$v) {
        _vm.$set(_vm.goodsDataModel, "nameAndSpecifications", $$v)
      },
      expression: "goodsDataModel.nameAndSpecifications"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "数量及单位",
      "prop": "quantityAndUnit"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "85%"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.goodsDataModel.quantityAndUnit),
      callback: function($$v) {
        _vm.$set(_vm.goodsDataModel, "quantityAndUnit", $$v)
      },
      expression: "goodsDataModel.quantityAndUnit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "原产国(地区)",
      "prop": "originCountry"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "85%"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.goodsDataModel.originCountry),
      callback: function($$v) {
        _vm.$set(_vm.goodsDataModel, "originCountry", $$v)
      },
      expression: "goodsDataModel.originCountry"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "单价",
      "prop": "unitPrice"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "85%"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.goodsDataModel.unitPrice),
      callback: function($$v) {
        _vm.$set(_vm.goodsDataModel, "unitPrice", $$v)
      },
      expression: "goodsDataModel.unitPrice"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "总价",
      "prop": "totalPrice"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "85%"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.goodsDataModel.totalPrice),
      callback: function($$v) {
        _vm.$set(_vm.goodsDataModel, "totalPrice", $$v)
      },
      expression: "goodsDataModel.totalPrice"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "币制",
      "prop": "currency"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "85%"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.goodsDataModel.currency),
      callback: function($$v) {
        _vm.$set(_vm.goodsDataModel, "currency", $$v)
      },
      expression: "goodsDataModel.currency"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "征免",
      "prop": "levy"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "85%"
    },
    attrs: {
      "type": "text",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.goodsDataModel.levy),
      callback: function($$v) {
        _vm.$set(_vm.goodsDataModel, "levy", $$v)
      },
      expression: "goodsDataModel.levy"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.goodsAddAndEditDialogIsShow = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.goodsAddAndEditOkHandler
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": '文件查看',
      "visible": _vm.fileDialogIsShow
    },
    on: {
      "update:visible": function($event) {
        _vm.fileDialogIsShow = $event
      }
    }
  }, [_c('img', {
    style: ({
      height: 1205 + 'px',
      overflowY: 'scroll',
      overflowX: 'hidden',
      paddingRight: '15px'
    }),
    attrs: {
      "src": "http://www.qingshengjiuye.com/UploadFiles/201610271722212414737.jpg"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer "
    },
    slot: "footer "
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.fileDialogIsShow = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary "
    },
    on: {
      "click": _vm.fileViewOkHandler
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": '商品信息',
      "visible": _vm.goodsDialogIsShow,
      "size": "large"
    },
    on: {
      "update:visible": function($event) {
        _vm.goodsDialogIsShow = $event
      }
    }
  }, [_c('el-toolbar', [_c('el-button', {
    on: {
      "click": _vm.goodsAddClick
    }
  }, [_c('i', {
    staticClass: "fa fa-plus",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 新建")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "disabled": _vm.goodsSelectedRows.length !== 1
    },
    on: {
      "click": _vm.goodsEditClick
    }
  }, [_c('i', {
    staticClass: "fa fa-edit",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 编辑")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "disabled": _vm.goodsSelectedRows.length < 1
    },
    on: {
      "click": _vm.goodsDelClick
    }
  }, [_c('i', {
    staticClass: "fa fa-trash-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 删除")])], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content-wrap"
  }, [_c('el-table', {
    ref: "goodsListTable",
    attrs: {
      "highlight-current-row": "",
      "data": _vm.goodsListData,
      "tooltip-effect": "dark"
    },
    on: {
      "selection-change": _vm.goodsOnSelectionChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "55",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "4%",
      "label": "项号",
      "prop": "itemNum"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "8%",
      "label": "商品编号",
      "prop": "productNum"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "20%",
      "label": "商品名称、规格型号",
      "prop": "nameAndSpecifications"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "15%",
      "label": "数量及单位",
      "prop": "quantityAndUnit"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "5%",
      "label": "原产国(地区)",
      "prop": "originCountry"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "5%",
      "label": "单价",
      "prop": "unitPrice"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "5%",
      "label": "总价",
      "prop": "totalPrice"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "5%",
      "label": "币制",
      "prop": "currency"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "min-width": "5%",
      "label": "征免",
      "prop": "levy"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.goodsDialogIsShow = false
      }
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b7b1383e", module.exports)
  }
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(105),
  /* template */
  __webpack_require__(111),
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-6ee90e3d] {\n  padding: 10px;\n}\n.search-bar[data-v-6ee90e3d] {\n  padding: 5px 12px;\n}\n.cottonquota-table-expand[data-v-6ee90e3d] {\n  font-size: 0;\n}\n.cottonquota-table-expand label[data-v-6ee90e3d] {\n  width: 90px;\n  color: #99a9bf;\n}\n.cottonquota-table-expand .el-form-item[data-v-6ee90e3d] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 50%;\n}\n.page-wrap[data-v-6ee90e3d] {\n  margin-top: 20px;\n  margin-right: 20px;\n}\n.page-wrap .page[data-v-6ee90e3d] {\n  float: right;\n}\n.red-color[data-v-6ee90e3d] {\n  color: #FF4949;\n}\n.green-color[data-v-6ee90e3d] {\n  color: #13CE66;\n}\n\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/cottonQuota.vue?4bb3b942"],"names":[],"mappings":";AAyTA;EACA,cAAA;CACA;AAEA;EACA,kBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,YAAA;EACA,eAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,iBAAA;EACA,mBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,eAAA;CACA","file":"cottonQuota.vue","sourcesContent":["<template>\n  <div>\n    <el-toolbar>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addClick\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> 新建</el-button>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"editClick\" :disabled=\"selectedRows.length !== 1\">\n        <i class=\"fa fa-edit\" aria-hidden=\"true\"></i> 编辑</el-button>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"deleteClick\" :disabled=\"selectedRows.length === 0\">\n        <i class=\"fa fa-minus\" aria-hidden=\"true\"></i> 删除</el-button>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"auditClick('Y')\" :disabled=\"selectedRows.length === 0\">\n        <i class=\"fa fa-check\" aria-hidden=\"true\"></i> 审核通过</el-button>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"auditClick('N')\" :disabled=\"selectedRows.length === 0\">\n        <i class=\"fa fa-remove\" aria-hidden=\"true\"></i> 审核不通过</el-button>\n    </el-toolbar>\n\n    <div class=\"search-bar fr\">\n      <span>编号</span>&nbsp;\n      <el-input v-model=\"number\" size=\"small\" placeholder=\"请输入编号\" style=\"width:200px\"></el-input>&nbsp;\n      <span>企业</span>&nbsp;\n      <el-input v-model=\"companyName\" size=\"small\" placeholder=\"请输入企业\" style=\"width:200px\"></el-input>\n      <el-button type=\"primary\" @click=\"list\" size=\"small\" style=\"width: 60px;\">搜索</el-button>\n    </div>\n\n    <div class=\"main-content-wrap\">\n      <el-table ref=\"cottonquotaTable\" :data=\"cottonquotas\" style=\"width: 100%\" v-loading=\"dataLoading\" @selection-change=\"onSelectionChange\"\n        @row-click=\"onCottonquotaTableRowClick\">\n        <el-table-column type=\"selection\" width=\"50\">\n        </el-table-column>\n        <el-table-column type=\"expand\">\n          <template slot-scope=\"props\">\n            <el-form label-position=\"left\" inline class=\"cottonquota-table-expand\">\n              <el-form-item label=\"编号\">\n                <span>{{ props.row.number }}</span>\n              </el-form-item>\n              <el-form-item label=\"企业名称\">\n                <el-button type=\"text\" @click=\"viewCompanyClick( props.row.companyid)\">{{ props.row.companyname }}</el-button>\n              </el-form-item>\n              <el-form-item label=\"银行信用评级\">\n                <span>{{ props.row.bankcreditrating }}</span>\n              </el-form-item>\n              <el-form-item label=\"申请量（吨）\">\n                <span>{{ props.row.application }}</span>\n              </el-form-item>\n              <el-form-item label=\"分配量（吨）\">\n                <span>{{ props.row.allocation }}</span>\n              </el-form-item>\n              <el-form-item label=\"已进口（吨）\">\n                <span>{{ props.row.used }}</span>\n              </el-form-item>\n              <el-form-item label=\"企业地址\">\n                <span>{{ props.row.address }}</span>\n              </el-form-item>\n              <el-form-item label=\"企业电话\">\n                <span>{{ props.row.phone }}</span>\n              </el-form-item>\n              <el-form-item label=\"企业传真\">\n                <span>{{ props.row.fax }}</span>\n              </el-form-item>\n              <el-form-item label=\"企业邮政编码\">\n                <span>{{ props.row.postcode }}</span>\n              </el-form-item>\n              <el-form-item label=\"申请时间\">\n                <span>{{ props.row.addtime }}</span>\n              </el-form-item>\n              <el-form-item label=\"添加人\">\n                <span>{{ props.row.adduser }}</span>\n              </el-form-item>\n            </el-form>\n          </template>\n        </el-table-column>\n        <el-table-column label=\"编号\" prop=\"number\">\n        </el-table-column>\n        <el-table-column label=\"企业\">\n          <template slot-scope=\"props\">\n            <el-button type=\"text\" @click=\"viewCompanyClick( props.row.companyid)\">{{ props.row.companyname }}</el-button>\n          </template>\n        </el-table-column>\n        <el-table-column label=\"银行信用评级\" prop=\"bankcreditrating\">\n        </el-table-column>\n        <el-table-column label=\"申请量（吨）\" prop=\"application\">\n        </el-table-column>\n        <el-table-column label=\"分配量（吨）\" prop=\"allocation\">\n        </el-table-column>\n        <el-table-column label=\"已进口（吨）\" prop=\"used\">\n        </el-table-column>\n        <el-table-column label=\"审核状态\">\n          <template slot-scope=\"scope\">\n            <span v-if=\"scope.row.auditstatus==='Y'\" class=\"green-color\">已通过</span>\n            <span v-else-if=\"scope.row.auditstatus==='N'\" class=\"red-color\">未通过</span>\n            <span v-else>未审核</span>\n          </template>\n        </el-table-column>\n        <el-table-column label=\"操作\">\n          <template slot-scope=\"scope\">\n            <el-button type=\"text\" @click=\"auditClick( 'Y',scope.row.id)\">通过</el-button>&nbsp;\n            <el-button type=\"text\" @click=\"auditClick( 'N',scope.row.id)\">不通过</el-button>\n          </template>\n        </el-table-column>\n      </el-table>\n\n      <!--分页-->\n      <div class=\"page-wrap\">\n        <el-pagination class=\"page\" @size-change=\"sizeChangeHandler\" @current-change=\"list\" :current-page.sync=\"currentPage\" :page-sizes=\"pageSizes\"\n          :page-size=\"pageSize\" layout=\"total, sizes, prev, pager, next, jumper\" :total=\"total\">\n        </el-pagination>\n      </div>\n\n    </div>\n\n    <!-- 新建,编辑对话框 -->\n    <el-dialog size=\"tiny\" :title=\"addOperate?'新建':'编辑'\" :visible.sync=\"showDialog\">\n      <el-form label-width=\"160px\" :model=\"tmpCottonQuota\">\n        <el-form-item label=\"企业名称：\" v-if=\"addOperate\">\n          <el-select v-model=\"tmpCottonQuota\" clearable placeholder=\"请选择\" @change=\"onCompanyChange\" :disabled=\"!addOperate\">\n            <el-option v-for=\"item in companys\" :key=\"item.companyid\" :label=\"item.companyname\" :value=\"item\">\n            </el-option>\n          </el-select>\n        </el-form-item>\n        <el-form-item label=\"申请量：\">\n          <el-input-number :min=\"0\" placeholder=\"请输入申请量\" v-model=\"tmpCottonQuota.application\" class=\"width-300\"></el-input-number>（单位：吨）\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"showDialog = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"save\" :disabled=\"saveStatus\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n    <!-- 企业信息对话框 -->\n    <company-detail :company=\"tmpCottonQuota\" :show.sync=\"showCompanyDialog\"></company-detail>\n\n  </div>\n</template>\n\n<script>\n  // require('./mock/cottonQuota.js')\n  require('./mock/company.js')\n  import companyAPI from './api/companyAPI.js';\n  import cottonQuotaAPI from './api/cottonQuotaAPI.js';\n  import companyDetail from './components/companyDetail.vue';\n\n  export default {\n    data() {\n      return {\n        dataLoading: true,\n        cottonquotas: [],\n        number: '',\n        companyName: '',\n        tmpCottonQuota: {},\n        addOperate: true,\n        saveStatus: false,\n        showDialog: false,\n        showCompanyDialog: false,\n        selectedRows: [],\n        companys: {},\n        total: 0,\n        pageSize: 15,\n        currentPage: 1,\n        pageSizes: [15, 20, 30, 40, 50]\n      }\n    },\n    methods: {\n      //审核\n      auditClick(pass, ids) {\n        if (ids == undefined || ids == '') {\n          ids = this.getSelectedIds().join(',');\n        }\n        cottonQuotaAPI.auditCottonQuota(pass, ids).then(data => {\n          if (data.status == 1) {\n            this.$message.success(data.message);\n            this.list();\n          } else {\n            this.$message.error(data.message);\n          }\n        });\n      },\n      //单击一行选中当前行、单击多选框增加选中当前行\n      onCottonquotaTableRowClick(row, event, column) {\n        if (column.type != \"selection\") {\n          this.$refs.cottonquotaTable.clearSelection();\n        }\n        this.$refs.cottonquotaTable.toggleRowSelection(row);\n      },\n      //选择改变\n      onSelectionChange(selection) {\n        this.selectedRows = selection;\n      },\n      //分页大小改变\n      sizeChangeHandler(val) {\n        this.pageSize = val;\n        this.list();\n      },\n      //列表\n      list() {\n        this.dataLoading = false;\n        cottonQuotaAPI.getCottonQuota(this.number, this.companyName, this.currentPage, this.pageSize).then(data => {\n          this.cottonquotas = data.data;\n          this.total = data.total;\n          this.dataLoading = false;\n        })\n      },\n      //新增\n      addClick() {\n        this.loadCompany();\n        this.addOperate = true;\n        this.tmpCottonQuota = {};\n        this.saveStatus = false;\n        this.showDialog = true;\n      },\n      //编辑\n      editClick() {\n        this.addOperate = false;\n        this.tmpCottonQuota = Object.assign({}, this.selectedRows[0]);;\n        this.saveStatus = false;\n        this.showDialog = true;\n      },\n      //删除\n      deleteClick() {\n        let rowIds = this.getSelectedIds().join(',');\n        this.$confirm(\"确认删除所选的数据?\", '提示', {\n          confirmButtonText: '确定',\n          cancelButtonText: '取消',\n          type: 'warning',\n          beforeClose: (action, instance, done) => {\n            if (action == 'confirm') {\n              instance.confirmButtonLoading = true;\n              return cottonQuotaAPI.deleteCottonQuota(rowIds).then(data => {\n                if (data.status == 1) {\n                  this.list();\n                  this.$notify({\n                    title: '成功',\n                    message: data.message,\n                    type: 'success',\n                    duration: 2000,\n                  });\n                } else {\n                  this.$alert(data.message);\n                }\n                instance.confirmButtonLoading = false;\n                done(data);\n              });\n            } else {\n              done();\n            }\n          }\n        }).catch(() => {\n          this.$notify.info({\n            title: '取消',\n            message: '操作取消！',\n            duration: 2000\n          });\n        });\n      },\n      //查看公司信息\n      viewCompanyClick(companyid) {\n        this.showCompanyDialog = true;\n        this.tmpCottonQuota = this.cottonquotas.filter(row => row.companyid === companyid)[0];\n      },\n      //保存\n      save() {\n        this.saveStatus = true;\n        if (this.addOperate) {\n          cottonQuotaAPI.addCottonQuota(this.tmpCottonQuota).then(data => {\n            if (data.status == 1) {\n              this.list();\n              this.$message.success(data.message);\n            } else {\n              this.$message.error(data.message);\n            }\n            this.saveStatus = false;\n            this.showDialog = false;\n          });\n        } else {\n          cottonQuotaAPI.editCottonQuota(this.tmpCottonQuota).then(data => {\n            if (data.status == 1) {\n              this.list();\n              this.$message.success(data.message);\n            } else {\n              this.$message.error(data.message);\n            }\n            this.saveStatus = false;\n            this.showDialog = false;\n          });\n        }\n      },\n      //获取选中id数组\n      getSelectedIds() {\n        let rowIds = [];\n        this.selectedRows.forEach(function (row) {\n          rowIds.push(row.id);\n        });\n        return rowIds;\n      },\n      //加载企业列表共选择\n      loadCompany() {\n        if (!this.companys.length > 0) {\n          companyAPI.getCompanyForSelect().then(data => {\n            this.companys = data.data;\n          })\n        }\n      }\n    },\n    created() {\n      this.list();\n    },\n    components: {\n      'company-detail': companyDetail\n    }\n  }\n\n</script>\n\n<style scoped>\n  .main-content-wrap {\n    padding: 10px;\n  }\n\n  .search-bar {\n    padding: 5px 12px;\n  }\n\n  .cottonquota-table-expand {\n    font-size: 0;\n  }\n\n  .cottonquota-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n  }\n\n  .cottonquota-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n  }\n\n  .page-wrap {\n    margin-top: 20px;\n    margin-right: 20px;\n  }\n\n  .page-wrap .page {\n    float: right;\n  }\n\n  .red-color {\n    color: #FF4949;\n  }\n\n  .green-color {\n    color: #13CE66;\n  }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _companyAPI = __webpack_require__(11);

var _companyAPI2 = _interopRequireDefault(_companyAPI);

var _cottonQuotaAPI = __webpack_require__(106);

var _cottonQuotaAPI2 = _interopRequireDefault(_cottonQuotaAPI);

var _companyDetail = __webpack_require__(16);

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

// require('./mock/cottonQuota.js')
__webpack_require__(12);
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
        if (data.status == 1) {
          _this.$message.success(data.message);
          _this.list();
        } else {
          _this.$message.error(data.message);
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
        _this2.total = data.total;
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
      this.tmpCottonQuota = Object.assign({}, this.selectedRows[0]);;
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
              if (data.status == 1) {
                _this3.list();
                _this3.$notify({
                  title: '成功',
                  message: data.message,
                  type: 'success',
                  duration: 2000
                });
              } else {
                _this3.$alert(data.message);
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
    viewCompanyClick: function viewCompanyClick(companyid) {
      this.showCompanyDialog = true;
      this.tmpCottonQuota = this.cottonquotas.filter(function (row) {
        return row.companyid === companyid;
      })[0];
    },

    //保存
    save: function save() {
      var _this4 = this;

      this.saveStatus = true;
      if (this.addOperate) {
        _cottonQuotaAPI2.default.addCottonQuota(this.tmpCottonQuota).then(function (data) {
          if (data.status == 1) {
            _this4.list();
            _this4.$message.success(data.message);
          } else {
            _this4.$message.error(data.message);
          }
          _this4.saveStatus = false;
          _this4.showDialog = false;
        });
      } else {
        _cottonQuotaAPI2.default.editCottonQuota(this.tmpCottonQuota).then(function (data) {
          if (data.status == 1) {
            _this4.list();
            _this4.$message.success(data.message);
          } else {
            _this4.$message.error(data.message);
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
        _companyAPI2.default.getCompanyForSelect().then(function (data) {
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
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cottonQuotaAPI = {
  getCottonQuota: function getCottonQuota(number, companyName, pageIndex, pageSize) {
    return axios.get('/api/cottonQuota', {
      params: {
        number: number,
        companyName: companyName,
        pageIndex: pageIndex,
        pageSize: pageSize
      }
    }).then(function (res) {
      return res.data;
    });
  },
  addCottonQuota: function addCottonQuota(cottonquota) {
    return axios.post('/api/cottonQuota', cottonquota).then(function (res) {
      return res.data;
    });
  },
  editCottonQuota: function editCottonQuota(cottonquota) {
    return axios.put('/api/cottonQuota/', cottonquota).then(function (res) {
      return res.data;
    });
  },
  deleteCottonQuota: function deleteCottonQuota(ids) {
    return axios.delete('/api/cottonQuota/' + ids).then(function (res) {
      return res.data;
    });
  },
  auditCottonQuota: function auditCottonQuota(pass, ids) {
    return axios.patch('/api/cottonQuota/audit/' + ids + '/' + pass).then(function (res) {
      return res.data;
    });
  }
};

exports.default = cottonQuotaAPI;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(108);
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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"companyDetail.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _companyAPI = __webpack_require__(11);

var _companyAPI2 = _interopRequireDefault(_companyAPI);

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

__webpack_require__(12);
exports.default = {
  data: function data() {
    return {};
  },

  methods: {
    esc: function esc() {
      this.$emit('update:show', false);
    }
  },
  //由于有些列表已将企业数据获取完整，所以可以直接传值，减少请求接口次数
  //监听值，如果只传了企业id过来，则去请求接口获取数据
  watch: {
    company: function company() {
      var _this = this;

      if (this.company.companyid > 0 && (this.company.companyname == undefined || this.company.companyname == '')) {
        _companyAPI2.default.getCompanyDetail(this.company.companyid).then(function (data) {
          if (data.status == 1) {
            _this.company = data.data;
          } else {
            _this.$message.error(data.message);
          }
        });
      }
    }
  },
  props: ['show', 'company']
};

/***/ }),
/* 110 */
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
  }, [_vm._v("\n        " + _vm._s(_vm.company.companyname) + "\n      ")]), _vm._v(" "), _c('el-form-item', {
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
  }, [_vm._v("\n        " + _vm._s(_vm.company.postcode) + "\n      ")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "银行信用评级："
    }
  }, [_vm._v("\n        " + _vm._s(_vm.company.bankcreditrating) + "\n      ")]), _vm._v(" "), (_vm.company.allocation > 0) ? _c('el-form-item', {
    attrs: {
      "label": "棉花分配量"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.company.allocation))]), _vm._v("（吨）\n      ")]) : _vm._e(), _vm._v(" "), (_vm.company.allocation > 0) ? _c('el-form-item', {
    attrs: {
      "label": "棉花已进口"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.company.used))]), _vm._v("（吨）\n      ")]) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "添加人"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.company.adduser))])]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "添加时间"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.company.addtime))])])], 1), _vm._v(" "), _c('div', {
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
/* 111 */
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
  }), _vm._v(" 删除")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "type": "primary",
      "plain": true,
      "disabled": _vm.selectedRows.length === 0
    },
    on: {
      "click": function($event) {
        _vm.auditClick('Y')
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 审核通过")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "type": "primary",
      "plain": true,
      "disabled": _vm.selectedRows.length === 0
    },
    on: {
      "click": function($event) {
        _vm.auditClick('N')
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-remove",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 审核不通过")])], 1), _vm._v(" "), _c('div', {
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
      "row-click": _vm.onCottonquotaTableRowClick
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
              _vm.viewCompanyClick(props.row.companyid)
            }
          }
        }, [_vm._v(_vm._s(props.row.companyname))])], 1), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "银行信用评级"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.bankcreditrating))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "申请量（吨）"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.application))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "分配量（吨）"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.allocation))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "已进口（吨）"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.used))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "企业地址"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.address))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "企业电话"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.phone))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "企业传真"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.fax))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "企业邮政编码"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.postcode))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "申请时间"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.addtime))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "添加人"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.adduser))])])], 1)]
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
              _vm.viewCompanyClick(props.row.companyid)
            }
          }
        }, [_vm._v(_vm._s(props.row.companyname))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "银行信用评级",
      "prop": "bankcreditrating"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "申请量（吨）",
      "prop": "application"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "分配量（吨）",
      "prop": "allocation"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "已进口（吨）",
      "prop": "used"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "审核状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.auditstatus === 'Y') ? _c('span', {
          staticClass: "green-color"
        }, [_vm._v("已通过")]) : (scope.row.auditstatus === 'N') ? _c('span', {
          staticClass: "red-color"
        }, [_vm._v("未通过")]) : _c('span', [_vm._v("未审核")])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text"
          },
          on: {
            "click": function($event) {
              _vm.auditClick('Y', scope.row.id)
            }
          }
        }, [_vm._v("通过")]), _vm._v(" \n          "), _c('el-button', {
          attrs: {
            "type": "text"
          },
          on: {
            "click": function($event) {
              _vm.auditClick('N', scope.row.id)
            }
          }
        }, [_vm._v("不通过")])]
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
  }, [(_vm.addOperate) ? _c('el-form-item', {
    attrs: {
      "label": "企业名称："
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择",
      "disabled": !_vm.addOperate
    },
    on: {
      "change": _vm.onCompanyChange
    },
    model: {
      value: (_vm.tmpCottonQuota),
      callback: function($$v) {
        _vm.tmpCottonQuota = $$v
      },
      expression: "tmpCottonQuota"
    }
  }, _vm._l((_vm.companys), function(item) {
    return _c('el-option', {
      key: item.companyid,
      attrs: {
        "label": item.companyname,
        "value": item
      }
    })
  }))], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "申请量："
    }
  }, [_c('el-input-number', {
    staticClass: "width-300",
    attrs: {
      "min": 0,
      "placeholder": "请输入申请量"
    },
    model: {
      value: (_vm.tmpCottonQuota.application),
      callback: function($$v) {
        _vm.$set(_vm.tmpCottonQuota, "application", $$v)
      },
      expression: "tmpCottonQuota.application"
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
      "company": _vm.tmpCottonQuota,
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

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(113)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(115),
  /* template */
  __webpack_require__(116),
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


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-63cc7c4d] {\n  padding: 10px;\n}\n.search-bar[data-v-63cc7c4d] {\n  padding: 5px 12px;\n}\n.company-table-expand[data-v-63cc7c4d] {\n  font-size: 0;\n}\n.company-table-expand label[data-v-63cc7c4d] {\n  width: 90px;\n  color: #99a9bf;\n}\n.company-table-expand .el-form-item[data-v-63cc7c4d] {\n  margin-right: 0;\n  margin-bottom: 0;\n  width: 50%;\n}\n.page-wrap[data-v-63cc7c4d] {\n  margin-top: 20px;\n  margin-right: 20px;\n}\n.page-wrap .page[data-v-63cc7c4d] {\n  float: right;\n}\n.red-color[data-v-63cc7c4d] {\n  color: #FF4949;\n}\n.green-color[data-v-63cc7c4d] {\n  color: #13CE66;\n}\n\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/setting/company.vue?7f09d637"],"names":[],"mappings":";AAoTA;EACA,cAAA;CACA;AAEA;EACA,kBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,YAAA;EACA,eAAA;CACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;CACA;AAEA;EACA,iBAAA;EACA,mBAAA;CACA;AAEA;EACA,aAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,eAAA;CACA","file":"company.vue","sourcesContent":["<template>\n  <div>\n    <el-toolbar>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"addClick\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> 新建</el-button>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"editClick\" :disabled=\"selectedRows.length !== 1\">\n        <i class=\"fa fa-edit\" aria-hidden=\"true\"></i> 编辑</el-button>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"deleteClick\" :disabled=\"selectedRows.length === 0\">\n        <i class=\"fa fa-minus\" aria-hidden=\"true\"></i> 删除</el-button>\n      <el-button type=\"primary\" class=\"z-toolbar-btn\" :plain=\"true\" @click=\"setConttonQuotaClick\" :disabled=\"selectedRows.length !== 1\">\n        <i class=\"fa fa-cog\" aria-hidden=\"true\"></i> 设置棉花配额</el-button>\n    </el-toolbar>\n\n    <div class=\"search-bar fr\">\n      <span>名称</span>&nbsp;\n      <el-input v-model=\"companyName\" size=\"small\" placeholder=\"请输入企业名称\" style=\"width:200px\"></el-input>\n      <el-button type=\"primary\" @click=\"list\" size=\"small\">搜索</el-button>\n    </div>\n\n    <div class=\"main-content-wrap\">\n      <el-table ref=\"companyTable\" :data=\"companys\" style=\"width: 100%\" v-loading=\"dataLoading\" @selection-change=\"onSelectionChange\"\n        @row-click=\"onCompanyTableRowClick\">\n        <el-table-column type=\"selection\" width=\"50\">\n        </el-table-column>\n        <el-table-column type=\"expand\">\n          <template slot-scope=\"props\">\n            <el-form label-position=\"left\" inline class=\"company-table-expand\">\n              <el-form-item label=\"名称\">\n                <el-button type=\"text\" @click=\"viewCompanyClick( props.row.companyid)\">{{ props.row.companyname }}</el-button>\n              </el-form-item>\n              <el-form-item label=\"银行信用评级\">\n                <span>{{ props.row.bankcreditrating }}</span>\n              </el-form-item>\n              <el-form-item label=\"地址\">\n                <span>{{ props.row.address }}</span>\n              </el-form-item>\n              <el-form-item label=\"电话\">\n                <span>{{ props.row.phone }}</span>\n              </el-form-item>\n              <el-form-item label=\"传真\">\n                <span>{{ props.row.fax }}</span>\n              </el-form-item>\n              <el-form-item label=\"邮政编码\">\n                <span>{{ props.row.postcode }}</span>\n              </el-form-item>\n              <el-form-item label=\"棉花分配量\" v-if=\"props.row.allocation>0\">\n                <span>{{ props.row.allocation }}</span>（吨）\n              </el-form-item>\n              <el-form-item label=\"棉花已进口\" v-if=\"props.row.allocation>0\">\n                <span>{{ props.row.used }}</span>（吨）\n              </el-form-item>\n              <el-form-item label=\"添加时间\">\n                <span>{{ props.row.addtime }}</span>\n              </el-form-item>\n              <el-form-item label=\"添加人\">\n                <span>{{ props.row.adduser }}</span>\n              </el-form-item>\n            </el-form>\n          </template>\n        </el-table-column>\n        <el-table-column label=\"名称\">\n          <template slot-scope=\"props\">\n            <el-button type=\"text\" @click=\"viewCompanyClick( props.row.companyid)\">{{ props.row.companyname }}</el-button>\n          </template>\n        </el-table-column>\n        <el-table-column label=\"银行信用评级\" prop=\"bankcreditrating\">\n        </el-table-column>\n        <el-table-column label=\"地址\" prop=\"address\" show-overflow-tooltip>\n        </el-table-column>\n        <el-table-column label=\"电话\" prop=\"phone\">\n        </el-table-column>\n        <el-table-column label=\"传真\" prop=\"fax\">\n        </el-table-column>\n        <el-table-column label=\"邮政编码\" prop=\"postcode\">\n        </el-table-column>\n        <el-table-column label=\"添加时间\" prop=\"addtime\">\n        </el-table-column>\n      </el-table>\n\n      <!--分页-->\n      <div class=\"page-wrap\">\n        <el-pagination class=\"page\" @size-change=\"sizeChangeHandler\" @current-change=\"list\" :current-page.sync=\"currentPage\" :page-sizes=\"pageSizes\"\n          :page-size=\"pageSize\" layout=\"total, sizes, prev, pager, next, jumper\" :total=\"total\">\n        </el-pagination>\n      </div>\n\n    </div>\n\n    <!-- 新建,编辑对话框 -->\n    <el-dialog :title=\"addOperate?'新建':'编辑'\" :visible.sync=\"showDialog\">\n      <el-form label-width=\"160px\" :model=\"tmpCompany\">\n        <el-form-item label=\"名称：\">\n          <el-input placeholder=\"请输入企业名称\" v-model=\"tmpCompany.companyname\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"银行信用评级：\">\n          <el-input placeholder=\"请输入银行信用评级\" v-model=\"tmpCompany.bankcreditrating\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"地址：\">\n          <el-input placeholder=\"请输入地址：\" v-model=\"tmpCompany.address\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"电话：\">\n          <el-input placeholder=\"请输入电话\" v-model=\"tmpCompany.phone\" class=\"width-300\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"传真：\">\n          <el-input placeholder=\"请输入传真\" v-model=\"tmpCompany.fax\" class=\"width-300\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"showDialog = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"save\" :disabled=\"saveStatus\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n    <!-- 设置棉花配额对话框 -->\n    <el-dialog size=\"tiny\" :title=\"设置棉花配额\" :visible.sync=\"showConttonQuotaDialog\">\n      <el-form label-width=\"160px\" :model=\"tmpCompany\">\n        <el-form-item label=\"企业名称：\">\n          {{tmpCompany.companyname}}\n        </el-form-item>\n        <el-form-item label=\"棉花分配量：\">\n          <el-input-number :min=\"0\" placeholder=\"请输入棉花分配量\" v-model=\"tmpCompany.allocation\" class=\"width-300\"></el-input-number>（单位：吨）\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\" class=\"dialog-footer\">\n        <el-button @click=\"showConttonQuotaDialog = false\">取 消</el-button>\n        <el-button type=\"primary\" @click=\"saveConttonQuota\" :disabled=\"saveConttonQuotaStatus\">确 定</el-button>\n      </div>\n    </el-dialog>\n\n    <!-- 企业信息对话框 -->\n    <company-detail :company=\"tmpCompany\" :show.sync=\"showCompanyDialog\"></company-detail>\n  </div>\n</template>\n\n<script>\n  require('./mock/company.js')\n  import companyAPI from './api/companyAPI.js';\n  import companyDetail from './components/companyDetail.vue';\n\n  export default {\n    data() {\n      return {\n        dataLoading: true,\n        companys: [],\n        companyName: '',\n        tmpCompany: {},\n        addOperate: true,\n        saveStatus: false,\n        showDialog: false,\n        showCompanyDialog: false,\n        showConttonQuotaDialog: false,\n        saveConttonQuotaStatus: false,\n        selectedRows: [],\n        total: 0,\n        pageSize: 15,\n        currentPage: 1,\n        pageSizes: [15, 20, 30, 40, 50]\n      }\n    },\n    methods: {\n      //设置棉花配额\n      setConttonQuotaClick() {\n        this.showConttonQuotaDialog = true;\n        this.tmpCompany = Object.assign({}, this.selectedRows[0]);\n        this.saveConttonQuotaStatus = false;\n      },\n      //保存棉花配额\n      saveConttonQuota() {\n        this.saveConttonQuotaStatus = true;\n        companyAPI.setConttonQuota(this.tmpCompany).then(data => {\n          if (data.status == 1) {\n            this.list();\n            this.$message.success(data.message);\n          } else {\n            this.$message.error(data.message);\n          }\n          this.saveConttonQuotaStatus = false;\n          this.showConttonQuotaDialog = false;\n        });\n      },\n      //单击一行选中当前行、单击多选框增加选中当前行\n      onCompanyTableRowClick(row, event, column) {\n        if (column.type != \"selection\") {\n          this.$refs.companyTable.clearSelection();\n        }\n        this.$refs.companyTable.toggleRowSelection(row);\n      },\n      //选择改变\n      onSelectionChange(selection) {\n        this.selectedRows = selection;\n      },\n      //分页大小改变\n      sizeChangeHandler(val) {\n        this.pageSize = val;\n        this.list();\n      },\n      //列表\n      list() {\n        this.dataLoading = true;\n        companyAPI.getCompany(this.companyName, this.currentPage, this.pageSize).then(data => {\n          this.companys = data.data;\n          this.total = data.total;\n          this.dataLoading = false;\n        })\n      },\n      //新增\n      addClick() {\n        this.addOperate = true;\n        this.tmpCompany = {};\n        this.saveStatus = false;\n        this.showDialog = true;\n      },\n      //编辑\n      editClick() {\n        this.addOperate = false;\n        this.tmpCompany = Object.assign({}, this.selectedRows[0]);;\n        this.saveStatus = false;\n        this.showDialog = true;\n      },\n      //删除\n      deleteClick() {\n        let rowIds = this.getSelectedIds().join(',');\n        this.$confirm(\"确认删除所选的数据?\", '提示', {\n          confirmButtonText: '确定',\n          cancelButtonText: '取消',\n          type: 'warning',\n          beforeClose: (action, instance, done) => {\n            if (action == 'confirm') {\n              instance.confirmButtonLoading = true;\n              return companyAPI.deleteCompany(rowIds).then(data => {\n                if (data.status == 1) {\n                  this.list();\n                  this.$notify({\n                    title: '成功',\n                    message: data.message,\n                    type: 'success',\n                    duration: 2000,\n                  });\n                } else {\n                  this.$alert(data.message);\n                }\n                instance.confirmButtonLoading = false;\n                done(data);\n              });\n            } else {\n              done();\n            }\n          }\n        }).catch(() => {\n          this.$notify.info({\n            title: '取消',\n            message: '操作取消！',\n            duration: 2000\n          });\n        });\n      },\n      //查看公司信息\n      viewCompanyClick(companyid) {\n        this.showCompanyDialog = true;\n        this.tmpCompany = this.companys.filter(row => row.companyid === companyid)[0];\n      },\n      //保存\n      save() {\n        this.saveStatus = true;\n        if (this.addOperate) {\n          companyAPI.addCompany(this.tmpCompany).then(data => {\n            if (data.status == 1) {\n              this.list();\n              this.$message.success(data.message);\n            } else {\n              this.$message.error(data.message);\n            }\n            this.saveStatus = false;\n            this.showDialog = false;\n          });\n        } else {\n          companyAPI.editCompany(this.tmpCompany).then(data => {\n            if (data.status == 1) {\n              this.list();\n              this.$message.success(data.message);\n            } else {\n              this.$message.error(data.message);\n            }\n            this.saveStatus = false;\n            this.showDialog = false;\n          });\n        }\n      },\n      //获取选中id数组\n      getSelectedIds() {\n        let rowIds = [];\n        this.selectedRows.forEach(function (row) {\n          rowIds.push(row.companyid);\n        });\n        return rowIds;\n      },\n    },\n    created() {\n      this.list();\n    },\n    components: {\n      'company-detail': companyDetail\n    }\n  }\n\n</script>\n\n<style scoped>\n  .main-content-wrap {\n    padding: 10px;\n  }\n\n  .search-bar {\n    padding: 5px 12px;\n  }\n\n  .company-table-expand {\n    font-size: 0;\n  }\n\n  .company-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n  }\n\n  .company-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n  }\n\n  .page-wrap {\n    margin-top: 20px;\n    margin-right: 20px;\n  }\n\n  .page-wrap .page {\n    float: right;\n  }\n\n  .red-color {\n    color: #FF4949;\n  }\n\n  .green-color {\n    color: #13CE66;\n  }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _companyAPI = __webpack_require__(11);

var _companyAPI2 = _interopRequireDefault(_companyAPI);

var _companyDetail = __webpack_require__(16);

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

__webpack_require__(12);
exports.default = {
  data: function data() {
    return {
      dataLoading: true,
      companys: [],
      companyName: '',
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
      pageSizes: [15, 20, 30, 40, 50]
    };
  },

  methods: {
    //设置棉花配额
    setConttonQuotaClick: function setConttonQuotaClick() {
      this.showConttonQuotaDialog = true;
      this.tmpCompany = Object.assign({}, this.selectedRows[0]);
      this.saveConttonQuotaStatus = false;
    },

    //保存棉花配额
    saveConttonQuota: function saveConttonQuota() {
      var _this = this;

      this.saveConttonQuotaStatus = true;
      _companyAPI2.default.setConttonQuota(this.tmpCompany).then(function (data) {
        if (data.status == 1) {
          _this.list();
          _this.$message.success(data.message);
        } else {
          _this.$message.error(data.message);
        }
        _this.saveConttonQuotaStatus = false;
        _this.showConttonQuotaDialog = false;
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
      var _this2 = this;

      this.dataLoading = true;
      _companyAPI2.default.getCompany(this.companyName, this.currentPage, this.pageSize).then(function (data) {
        _this2.companys = data.data;
        _this2.total = data.total;
        _this2.dataLoading = false;
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
      var _this3 = this;

      var rowIds = this.getSelectedIds().join(',');
      this.$confirm("确认删除所选的数据?", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          if (action == 'confirm') {
            instance.confirmButtonLoading = true;
            return _companyAPI2.default.deleteCompany(rowIds).then(function (data) {
              if (data.status == 1) {
                _this3.list();
                _this3.$notify({
                  title: '成功',
                  message: data.message,
                  type: 'success',
                  duration: 2000
                });
              } else {
                _this3.$alert(data.message);
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
    viewCompanyClick: function viewCompanyClick(companyid) {
      this.showCompanyDialog = true;
      this.tmpCompany = this.companys.filter(function (row) {
        return row.companyid === companyid;
      })[0];
    },

    //保存
    save: function save() {
      var _this4 = this;

      this.saveStatus = true;
      if (this.addOperate) {
        _companyAPI2.default.addCompany(this.tmpCompany).then(function (data) {
          if (data.status == 1) {
            _this4.list();
            _this4.$message.success(data.message);
          } else {
            _this4.$message.error(data.message);
          }
          _this4.saveStatus = false;
          _this4.showDialog = false;
        });
      } else {
        _companyAPI2.default.editCompany(this.tmpCompany).then(function (data) {
          if (data.status == 1) {
            _this4.list();
            _this4.$message.success(data.message);
          } else {
            _this4.$message.error(data.message);
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
        rowIds.push(row.companyid);
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
/* 116 */
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
  }), _vm._v(" 删除")]), _vm._v(" "), _c('el-button', {
    staticClass: "z-toolbar-btn",
    attrs: {
      "type": "primary",
      "plain": true,
      "disabled": _vm.selectedRows.length !== 1
    },
    on: {
      "click": _vm.setConttonQuotaClick
    }
  }, [_c('i', {
    staticClass: "fa fa-cog",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 设置棉花配额")])], 1), _vm._v(" "), _c('div', {
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
      value: (_vm.companyName),
      callback: function($$v) {
        _vm.companyName = $$v
      },
      expression: "companyName"
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
      "row-click": _vm.onCompanyTableRowClick
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
              _vm.viewCompanyClick(props.row.companyid)
            }
          }
        }, [_vm._v(_vm._s(props.row.companyname))])], 1), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "银行信用评级"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.bankcreditrating))])]), _vm._v(" "), _c('el-form-item', {
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
        }, [_c('span', [_vm._v(_vm._s(props.row.postcode))])]), _vm._v(" "), (props.row.allocation > 0) ? _c('el-form-item', {
          attrs: {
            "label": "棉花分配量"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.allocation))]), _vm._v("（吨）\n            ")]) : _vm._e(), _vm._v(" "), (props.row.allocation > 0) ? _c('el-form-item', {
          attrs: {
            "label": "棉花已进口"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.used))]), _vm._v("（吨）\n            ")]) : _vm._e(), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "添加时间"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.addtime))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "添加人"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.adduser))])])], 1)]
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
              _vm.viewCompanyClick(props.row.companyid)
            }
          }
        }, [_vm._v(_vm._s(props.row.companyname))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "银行信用评级",
      "prop": "bankcreditrating"
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
      "prop": "postcode"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "添加时间",
      "prop": "addtime"
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
      "model": _vm.tmpCompany
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "名称："
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入企业名称"
    },
    model: {
      value: (_vm.tmpCompany.companyname),
      callback: function($$v) {
        _vm.$set(_vm.tmpCompany, "companyname", $$v)
      },
      expression: "tmpCompany.companyname"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "银行信用评级："
    }
  }, [_c('el-input', {
    staticClass: "width-300",
    attrs: {
      "placeholder": "请输入银行信用评级"
    },
    model: {
      value: (_vm.tmpCompany.bankcreditrating),
      callback: function($$v) {
        _vm.$set(_vm.tmpCompany, "bankcreditrating", $$v)
      },
      expression: "tmpCompany.bankcreditrating"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "地址："
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
      "label": "电话："
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
      "label": "传真："
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
      "click": _vm.save
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "size": "tiny",
      "title": _vm.设置棉花配额,
      "visible": _vm.showConttonQuotaDialog
    },
    on: {
      "update:visible": function($event) {
        _vm.showConttonQuotaDialog = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "label-width": "160px",
      "model": _vm.tmpCompany
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "企业名称："
    }
  }, [_vm._v("\n        " + _vm._s(_vm.tmpCompany.companyname) + "\n      ")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "棉花分配量："
    }
  }, [_c('el-input-number', {
    staticClass: "width-300",
    attrs: {
      "min": 0,
      "placeholder": "请输入棉花分配量"
    },
    model: {
      value: (_vm.tmpCompany.allocation),
      callback: function($$v) {
        _vm.$set(_vm.tmpCompany, "allocation", $$v)
      },
      expression: "tmpCompany.allocation"
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
        _vm.showConttonQuotaDialog = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "disabled": _vm.saveConttonQuotaStatus
    },
    on: {
      "click": _vm.saveConttonQuota
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('company-detail', {
    attrs: {
      "company": _vm.tmpCompany,
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(118)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(120),
  /* template */
  __webpack_require__(121),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2b8384f3",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\system\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b8384f3", Component.options)
  } else {
    hotAPI.reload("data-v-2b8384f3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("8e6c373e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b8384f3\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b8384f3\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n@keyframes ani-demo-spin-data-v-2b8384f3 {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n.menu-wrap[data-v-2b8384f3] {\n  background-color: #F5F7FB;\n  position: absolute;\n  width: 100%;\n  top: 50px;\n  bottom: 0;\n  overflow: auto;\n}\n.el-menu[data-v-2b8384f3]{\n  background-color: #F5F7FB;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/system/index.vue?669554cb"],"names":[],"mappings":";AAqEA;AACA;IACA,wBAAA;CACA;AACA;IACA,0BAAA;CACA;AACA;IACA,0BAAA;CACA;CACA;AAEA;EACA,0BAAA;EACA,mBAAA;EACA,YAAA;EACA,UAAA;EACA,UAAA;EACA,eAAA;CACA;AACA;EACA,0BAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div class=\"layout\">\n    <div class=\"body-list\" style=\"background-color:white;\">\n      <el-toolbar>\n        <span><i class=\"fa fa-gears\"/> 系统</span>\n      </el-toolbar>\n      <div class=\"menu-wrap\">\n        <el-menu :default-active=\"activeMenu\" @select=\"onSelectMenu\">\n          <el-menu-item :index=\"menu.path\" v-for=\"menu in menus\" :key=\"menu.path\">\n            <i :class=\"menu.meta.icon\"></i>&nbsp;{{menu.meta.title}}\n          </el-menu-item>\n        </el-menu>\n      </div>\n\n    </div>\n    <div class=\"body-detail\">\n      <div class=\"layout-content-main\">\n        <router-view></router-view>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nconst menus = [\n      {\n        path: '/system/user',\n        meta: { title: '用户管理', icon: 'fa fa-users' },\n      },\n      {\n        path: '/system/role',\n        meta: { title: '角色管理', icon: 'fa fa-user-circle' },\n      }\n    ]\n\nexport default {\n  data() {\n    return {\n      menus,\n      activeMenu: this.$route.path\n    };\n  },\n  methods: {\n    onSelectMenu(path) {\n      let item = this.menus.find((val) => val.path === path)\n\n      if (item) {\n        this.$router.push({ path: item.path })\n      }\n    }\n  },\n  created() {\n    if(location.hash.split('/').length==2){\n      location.hash = this.activeMenu\n    }\n  },\n  beforeRouteUpdate(to, from, next) {\n    let path = to.path\n    let item = this.menus.find(val => val.path === path)\n\n    if (item) {\n      this.activeMenu = item.path\n    }\n    next()\n  }\n\n}\n</script>\n<style scoped>\n@keyframes ani-demo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.menu-wrap {\n  background-color: #F5F7FB;\n  position: absolute;\n  width: 100%;\n  top: 50px;\n  bottom: 0;\n  overflow: auto;\n}\n.el-menu{\n  background-color: #F5F7FB;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 120 */
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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b8384f3", module.exports)
  }
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(123)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(144),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-cfa92d8c",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\system\\user.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] user.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cfa92d8c", Component.options)
  } else {
    hotAPI.reload("data-v-cfa92d8c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(124);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("3419a8da", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cfa92d8c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cfa92d8c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.main-content-wrap[data-v-cfa92d8c] {\n  padding: 10px;\n}\n.search-bar[data-v-cfa92d8c] {\n  padding-bottom: 10px;\n}\n.pane-btns[data-v-cfa92d8c] {\n  text-align: right;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/system/user.vue?0f48544a"],"names":[],"mappings":";AAwdA;EACA,cAAA;CACA;AAEA;EACA,qBAAA;CACA;AACA;EACA,kBAAA;CACA","file":"user.vue","sourcesContent":["<template>\n<div>\n  <el-toolbar>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"plus\" @click=\"addClick\">添加</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"edit\" :disabled=\"selectedRows.length !== 1\" @click=\"editClick\">编辑</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"circle-cross\" :disabled=\"!(selectedRows.length === 1 && selectedRows[0].status)\" @click=\"disableOrEnableClickHandler\">停用</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"circle-check\" :disabled=\"!(selectedRows.length === 1 && !selectedRows[0].status)\" @click=\"disableOrEnableClickHandler\">启用</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"delete\" :disabled=\"selectedRows.length === 0\" @click=\"deleteClickHandler\">删除</el-button>\n      <el-button class=\"z-toolbar-btn\" :plain=\"true\" icon=\"setting\" :disabled=\"selectedRows.length !== 1\" @click=\"modifyPasswordClick\">修改密码</el-button>\n  </el-toolbar>\n  <div class=\"main-content-wrap\" v-loading=\"dataLoading\">\n      <div class=\"search-bar fr\">\n        用户名/真实姓名:\n        <el-input v-model=\"search.username\" size=\"small\" placeholder=\"请输入用户名/真实姓名\" style=\"width: 200px;\"></el-input>\n        公司：\n        <el-input v-model=\"search.company\" size=\"small\" placeholder=\"请输入公司名称\" style=\"width: 200px;\"></el-input>\n        <el-button size=\"small\" type=\"primary\" @click=\"handleSearchBtn\" style=\"width: 60px;\">搜索</el-button>\n      </div>\n    <el-table :data=\"users\" border tooltip-effect=\"dark\" @selection-change=\"onSelectionChange\"  highlight-current-row >\n      <el-table-column type=\"selection\" width=\"60\" align=\"center\"/>\n      <el-table-column prop=\"username\" label=\"用户名\"/>\n      <el-table-column prop=\"realname\" label=\"真实姓名\"/>\n      <el-table-column prop=\"status\"label=\"用户状态\"/>\n      </el-table-column>\n      <el-table-column prop=\"company\" label=\"单位\"/>\n      <el-table-column label=\"所属角色\">\n        <template slot-scope=\"scope\">\n          <span v-for=\"role in scope.row.roles\" :key=\"role.rolecode\">{{role.name}} </span>\n        </template>\n      </el-table-column>\n    </el-table>\n    <div class=\"page-wrap fr\">\n        <el-pagination class=\"page\" @size-change=\"sizeChangeHandler\" @current-change=\"currentChangeHandler\" :current-page.sync=\"currentPage\" :page-sizes=\"pageSizes\" :page-size=\"pageSize\" :total=\"total\" layout=\"total,sizes, prev, pager, next\">\n        </el-pagination>\n    </div>\n  </div>\n\n    <!--修改密码框-->\n  <el-dialog title=\"修改密码\" :visible.sync=\"modifyPasswordModal\">\n    <el-form :model=\"tmpUser\" :rules=\"userRules\" ref=\"modifyPasswordForm\" label-width=\"100px\">\n      <el-form-item label=\"用户名\" prop=\"username\">\n        <el-input type=\"text\" v-model=\"tmpUser.username\" :readonly=\"true\" auto-complete=\"off\"></el-input>\n      </el-form-item>\n      <el-form-item label=\"密码\" prop=\"password\">\n        <el-input type=\"password\" v-model=\"tmpUser.password\" auto-complete=\"off\"></el-input>\n      </el-form-item>\n      <el-form-item label=\"确认密码\" prop=\"repeatPassword\">\n        <el-input type=\"password\" v-model=\"tmpUser.repeatPassword\" auto-complete=\"off\"></el-input>\n      </el-form-item>\n    </el-form>\n    <div slot=\"footer\">\n      <el-button @click=\"modifyPasswordModal = false\">取 消</el-button>\n      <el-button type=\"primary\" @click=\"modifyPasswordHandler\" :loading=\"handlerLoading\">确 定</el-button>\n    </div>\n  </el-dialog>\n    <!--添加框-->\n  <el-dialog title=\"添加用户\" :visible.sync=\"addUserModal\">\n    <el-form :model=\"tmpUser\" :rules=\"userRules\" ref=\"addUserForm\" label-width=\"100px\">\n      <el-form-item label=\"用户名\" prop=\"username\">\n        <el-input type=\"text\" v-model=\"tmpUser.username\" auto-complete=\"off\"/>\n      </el-form-item>\n      <el-form-item label=\"真实姓名\" prop=\"realname\">\n        <el-input type=\"text\" v-model=\"tmpUser.realname\"/>\n      </el-form-item>\n      <el-form-item label=\"密码\" prop=\"password\">\n        <el-input type=\"password\" v-model=\"tmpUser.password\" auto-complete=\"off\"/>\n      </el-form-item>\n      <el-form-item label=\"确认密码\" prop=\"repeatPassword\">\n        <el-input type=\"password\" v-model=\"tmpUser.repeatPassword\" auto-complete=\"off\"/>\n      </el-form-item>\n      <el-form-item label=\"公司\" prop=\"company\">\n        <el-input type=\"company\" v-model=\"tmpUser.company\" auto-complete=\"off\"/>\n      </el-form-item>\n      <el-form-item prop=\"email\" label=\"邮箱\">\n        <el-input v-model=\"tmpUser.email\"/>\n      </el-form-item>\n      <el-form-item label=\"联系电话\">\n        <el-input v-model=\"tmpUser.tel\" placeholder=\"联系电话\"/>\n      </el-form-item>\n      <el-form-item label=\"手机号码\">\n        <el-input v-model=\"tmpUser.phone\" placeholder=\"手机号码\"/>\n      </el-form-item>\n      <el-form-item label=\"所属角色\" prop=\"roleIds\">\n        <el-select v-model=\"tmpUser.roleIds\" multiple placeholder=\"请选择所属角色\">\n          <el-option v-for=\"role in roles\" :key=\"role.rolecode\" :label=\"role.name\" :value=\"role.rolecode\">\n          </el-option>\n        </el-select>\n      </el-form-item>\n    </el-form>\n    <div slot=\"footer\">\n      <el-button @click=\"addUserModal = false\">取 消</el-button>\n      <el-button type=\"primary\" @click=\"addUserHandler\" :loading=\"handlerLoading\">确 定</el-button>\n    </div>\n  </el-dialog>\n    <!--编辑框-->\n  <el-dialog title=\"编辑用户\" :visible.sync=\"editUserModal\">\n    <el-tabs class=\"tabs-wrap\" v-model=\"editUserActiveNameTab\">\n     <el-tab-pane label=\"基本信息\" name=\"base\" key=\"base\">\n      <div class=\"modal-wrap\" v-loading=\"modalLoading\">\n        <el-form :model=\"tmpUser\" :rules=\"userRules\" ref=\"editUserForm\" style=\"margin-top: 20px;\" label-width=\"100px\">\n          <el-form-item label=\"用户名\" prop=\"username\">\n            <el-input type=\"text\" v-model=\"tmpUser.username\" auto-complete=\"off\"/>\n          </el-form-item>\n          <el-form-item label=\"真实姓名\" prop=\"realname\">\n            <el-input type=\"text\" v-model=\"tmpUser.realname\"/>\n          </el-form-item>\n          <el-form-item label=\"公司\" prop=\"company\">\n            <el-input type=\"company\" v-model=\"tmpUser.company\" auto-complete=\"off\"/>\n          </el-form-item>\n          <el-form-item prop=\"email\" label=\"邮箱\">\n            <el-input v-model=\"tmpUser.email\"/>\n          </el-form-item>\n          <el-form-item label=\"联系电话\">\n            <el-input v-model=\"tmpUser.tel\" placeholder=\"联系电话\"/>\n          </el-form-item>\n          <el-form-item label=\"手机号码\">\n            <el-input v-model=\"tmpUser.phone\" placeholder=\"手机号码\"/>\n          </el-form-item>\n          <el-form-item label=\"所属角色\" prop=\"roleIds\">\n            <el-select v-model=\"tmpUser.roleIds\" multiple placeholder=\"请选择所属角色\">\n              <el-option v-for=\"(role, index) in roles\" :key=\"index\" :label=\"role.name\" :value=\"role.rolecode\">\n              </el-option>\n            </el-select>\n          </el-form-item>\n          <div class=\"pane-btns\">\n            <el-button @click=\"editUserModal = false\">取 消</el-button>\n            <el-button type=\"primary\" @click=\"editUserHandler()\" :loading=\"handlerLoading\">保存基本信息</el-button>\n          </div>\n        </el-form>\n      </div>\n        </el-tab-pane>\n        <el-tab-pane :label=\"type.name\" :name=\"type.code\" v-for=\"type in userPermissionTypes\" :key=\"type.code\">\n          <div style=\"max-height: 350px;overflow-y: auto;overflow-x: hidden;\">\n            <component :is=\"type.code\" :id=\"tmpUser.username\" type=\"U\"></component>\n          </div>\n        </el-tab-pane>\n    </el-tabs>\n\n  </el-dialog>\n</div>\n</template>\n\n<script>\nimport userAPI from './api/userAPI.js'\nimport roleAPI from './api/roleAPI.js'\nimport TreeSelect from './components/TreeSelect.vue'\nimport MenuPermission from './components/MenuPermission.vue'\nimport util from './components/util.js'\nrequire('./mock/user.js')\nexport default {\n  data() {\n    return {\n      userPermissionTypes: [{code:'menuPermission',name:'菜单权限'}],\n      currentPage: 1,\n      total: 50,\n      pageSize: 5,\n      pageSizes: [5, 10, 15, 20],\n      search:{username:'',company:''},\n      dataLoading: true,\n      users: [],\n      selectedRows: [],\n      handlerLoading: false,\n      modifyPasswordModal: false,\n      addUserModal: false,\n      editUserModal: false,\n      editUserActiveNameTab: 'base',\n      tmpUser: {\n        username: '',\n        realname: '',\n        password: '',\n        repeatPassword: '',\n        status: true,\n        company: '',\n        roles: [],\n        roleIds: [],\n        lastChangePasswordDate: '',\n        email: '',\n        tel: '',\n        phone: '',\n        remark: ''\n      },\n      roles: [],\n      modalLoading: false,\n      userRules: {\n        username: [\n          { required: true, message: '请输入用户名', trigger: 'blur' }\n        ],\n        realname: [\n          { required: true, message: '请输入真实姓名', trigger: 'blur' }\n        ],\n        password: [\n          { required: true, message: '请输入密码', trigger: 'blur' },\n          { min: 6, max: 32, message: '密码最少6位，最多32位', trigger: 'blur' }\n        ],\n        repeatPassword: [\n          { required: true, message: '请重复输入一次密码', trigger: 'blur' },\n          {\n            validator: (rule, value, callback) => {\n              if (value !== this.tmpUser.password) {\n                callback(new Error('两次输入密码不一致!'))\n              } else {\n                callback()\n              }\n            }, trigger: 'blur'\n          }\n        ],\n        email: [\n          { required: true, message: '请输入邮箱地址', trigger: 'blur' },\n          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }\n        ],\n        roleIds: [\n          { type: 'array', required: true, message: '请选择所属角色', trigger: 'blur, change' }\n        ]\n      },\n\n    }\n  },\n  computed: {\n    disableOrEnable: function() {\n      if (this.selectedRows.length !== 1) {\n        return ''\n      }\n\n      return this.selectedRows[0].status ? '停用' : '启用'\n    }\n  },\n  methods: {\n    onSelectionChange(selection) {\n      this.selectedRows = selection\n    },\n    addClick() {\n      this.tmpUser = {\n        username: '',\n        realname: '',\n        password: '',\n        repeatPassword: '',\n        sate: true,\n        company: '',\n        roles: [],\n        roleIds: [],\n        lastChangePasswordDate: '',\n        email: '',\n        tel: '',\n        phone: '',\n        remark: ''\n      }\n      if ( !this.roles.length) {\n        Promise.all([\n        ]).then(datas => {\n          this.roles = datas[1].data\n        })\n      }\n\n      this.addUserModal = true\n    },\n    addUserHandler() {\n      util.validateForm(this.$refs['addUserForm']).then(() => {\n        this.handlerLoading = true\n        this.tmpUser.roles = this.roles.filter(val => {\n          return this.tmpUser.roleIds.includes(val.rolecode)\n        })\n\n        return userAPI.addUser(this.tmpUser).then(data => {\n          if (data.status !== 1) {\n            return data\n          }\n          this.users.push(this.tmpUser)\n          return data\n        })\n\n      }).then(data => {\n        this.addUserModal = false\n        this.handlerLoading = false\n        util.showNotification(data)\n\n      }).catch((e) => {\n        util.showErrorNotification(e)\n        this.handlerLoading = false\n      })\n\n\n    },\n    editClick() {\n      this.tmpUser = Object.assign({ roleIds: [] }, this.tmpUser, this.selectedRows[0])\n      this.tmpUser.roleIds = this.tmpUser.roles.map(val => {\n        return val.rolecode\n      })\n      this.editUserActiveNameTab = 'base'\n      this.modalLoading = true\n      this.editUserModal = true\n\n      Promise.all([\n        roleAPI.getRoles(),\n      ]).then(datas => {\n        this.roles = datas[0].data\n        this.modalLoading = false\n      })\n\n    },\n    editUserHandler() {\n      util.validateForm(this.$refs['editUserForm']).then(() => {\n        this.handlerLoading = true\n        return userAPI.editUser(this.tmpUser.username, this.tmpUser)\n      }).then(res => {\n        if (res.status === 1) {\n          return res\n        }\n        let index = this.users.findIndex(val => val.username === this.tmpUser.username)\n        this.tmpUser.roles = this.roles.filter(val => {\n          return this.tmpUser.roleIds.includes(val.rolecode)\n        })\n\n        this.users = [\n          ...this.users.slice(0, index),\n          this.tmpUser,\n          ...this.users.slice(index + 1)\n        ]\n        return res\n      }).then((data) => {\n        this.handlerLoading = false\n        this.editUserModal = false\n        util.showNotification(data)\n      }).catch(e => {\n        util.showErrorNotification(e)\n        this.handlerLoading = false\n      })\n\n    },\n    deleteClickHandler() {\n      let rowIds = []\n\n      this.selectedRows.forEach(function(row) {\n        rowIds.push(row.username)\n      })\n\n      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done()\n            return\n          }\n          instance.confirmButtonLoading = true\n\n          return userAPI.deleteUsers(rowIds).then(data => {\n            instance.confirmButtonLoading = false\n            return data\n          }).then(data => {\n            if (data.status !== 1) {\n              return data\n            }\n\n            this.users = this.users.filter(val => !rowIds.includes(val.username))\n\n            return data\n          }).then(data => {\n            util.showNotification(data)\n            done()\n          }).catch(e => {\n            util.showErrorNotification(e)\n            instance.confirmButtonLoading = false\n            done()\n          })\n        }\n      }).catch(e => {\n        util.showErrorNotification(e)\n      })\n\n    },\n    disableOrEnableClickHandler() {\n      let username = this.selectedRows[0].username\n\n      this.$confirm('确定' + this.disableOrEnable + '这个用户吗？', '确认' + this.disableOrEnable, {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning',\n        beforeClose: (action, instance, done) => {\n          if (action !== 'confirm') {\n            done()\n            return\n          }\n          instance.confirmButtonLoading = true\n          let handle\n          if (this.selectedRows[0].status) {\n            handle = userAPI.disableUser\n          } else {\n            handle = userAPI.enableUser\n          }\n\n          handle(username).then(data => {\n            instance.confirmButtonLoading = false\n            return data\n          }).then(data => {\n            if (data.status !== 1) {\n              return data\n            }\n            let index = this.users.findIndex(val => {\n              return val.username === username\n            })\n            this.users[index].status = !this.users[index].status\n\n            return data\n          }).then(data => {\n            util.showNotification(data)\n            done()\n          }).catch(e => {\n            util.showErrorNotification(e)\n            instance.confirmButtonLoading = false\n            done()\n          })\n        }\n      }).catch(e => {\n        util.showErrorNotification(e)\n      })\n    },\n    modifyPasswordClick() {\n      this.tmpUser.username = this.selectedRows[0].username\n      this.tmpUser.password = ''\n      this.tmpUser.repeatPassword = ''\n\n      this.modifyPasswordModal = true\n    },\n    modifyPasswordHandler() {\n\n      util.validateForm(this.$refs['modifyPasswordForm']).then(() => {\n        this.handlerLoading = true\n        return userAPI.updatePassword(this.tmpUser.username, this.tmpUser.password).then(data => {\n          this.modifyPasswordModal = false\n          this.handlerLoading = false\n          return data\n        })\n      }).then((data) => {\n        util.showNotification(data)\n      }).catch((e) => {\n        util.showErrorNotification(e)\n        this.handlerLoading = false\n      })\n\n    },\n    handleSearchBtn() {\n      if (this.search.username != '' || this.search.company != '') {\n        userAPI.getUsers(search).then(data =>{\n          this.users=data.data\n          })\n      }\n    },\n    sizeChangeHandler(val) {\n      this.pageSize = val;\n    },\n    currentChangeHandler(val) {\n      this.currentPage = val;\n    }\n  },\n  created() {\n    Promise.all([\n      userAPI.getUsers(),\n    ]).then(datas => {\n      console.info(datas)\n      this.users = datas[0].data\n      this.dataLoading = false\n    })\n  },\n  components: {\n    'menuPermission': MenuPermission,\n    'tree-select': TreeSelect\n  }\n}\n</script>\n\n<style scoped>\n.main-content-wrap {\n  padding: 10px;\n}\n\n.search-bar {\n  padding-bottom: 10px;\n}\n.pane-btns {\n  text-align: right;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userAPI = __webpack_require__(126);

var _userAPI2 = _interopRequireDefault(_userAPI);

var _roleAPI = __webpack_require__(17);

var _roleAPI2 = _interopRequireDefault(_roleAPI);

var _TreeSelect = __webpack_require__(18);

var _TreeSelect2 = _interopRequireDefault(_TreeSelect);

var _MenuPermission = __webpack_require__(19);

var _MenuPermission2 = _interopRequireDefault(_MenuPermission);

var _util = __webpack_require__(8);

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

__webpack_require__(143);
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
/* 126 */
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("5a83594f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e9d9894\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TreeSelect.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e9d9894\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TreeSelect.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.select-wrap[data-v-5e9d9894]{\n  position: relative;\n  cursor: pointer;\n}\n.select-wrap input[type='text'][data-v-5e9d9894]{\n}\n.select-wrap .tree-wrap[data-v-5e9d9894]{\n  position: absolute;\n  z-index: 10000;\n  top: 42px;\n  left: 1px;\n  right: 1px;\n  background-color: #fff;\n  border: 1px solid #d1dbe5;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/system/components/TreeSelect.vue?1f2d11b3"],"names":[],"mappings":";AAyFA;EACA,mBAAA;EACA,gBAAA;CACA;AACA;CAGA;AACA;EACA,mBAAA;EACA,eAAA;EACA,UAAA;EACA,UAAA;EACA,WAAA;EACA,uBAAA;EACA,0BAAA;EACA,mBAAA;EACA,+DAAA;CACA","file":"TreeSelect.vue","sourcesContent":["<template>\r\n  <div class=\"select-wrap\" @click.stop=\"wrapClickHandler\">\r\n    <el-input :value=\"inputValue\"\r\n              :placeholder=\"placeholder\"\r\n              :readonly=\"true\"\r\n              :disabled=\"disabled\"\r\n              :icon=\"isOpenTree ? 'caret-top' : 'caret-bottom'\"\r\n              @click.stop=\"inputClickHandler\">\r\n    </el-input>\r\n    <div class=\"tree-wrap\" v-show=\"isOpenTree\">\r\n      <el-tree :data=\"items\"\r\n               :node-key=\"itemsOptions.key\"\r\n               :current-node-key=\"currentNodeKey\"\r\n               :props=\"itemsOptions\"\r\n               :default-expand-all=\"true\"\r\n               :expand-on-click-node=\"false\"\r\n               :highlight-current=\"true\"\r\n               @node-click=\"treeNodeClickHandler\" >\r\n      </el-tree>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  // 树形选择器\r\n\r\n  export default {\r\n    data(){\r\n      return {\r\n        isOpenTree: false\r\n      };\r\n    },\r\n    methods: {\r\n      inputClickHandler(){\r\n        if(this.disabled){\r\n          return;\r\n        }\r\n        this.isOpenTree = !this.isOpenTree;\r\n      },\r\n      wrapClickHandler(){\r\n        if(this.disabled){\r\n          return;\r\n        }\r\n        if(!this.isOpenTree){\r\n          this.isOpenTree = true;\r\n        }\r\n      },\r\n      treeNodeClickHandler(data){\r\n        let val = {};\r\n        val[this.itemsOptions.label] = data[this.itemsOptions.label];\r\n        val[this.itemsOptions.key] = data[this.itemsOptions.key];\r\n\r\n        this.$emit('input', val);\r\n        this.isOpenTree = false;\r\n      }\r\n    },\r\n    computed:{\r\n      inputValue(){\r\n        if(!this.value || !this.itemsOptions || !this.itemsOptions.label){\r\n          return '';\r\n        }\r\n\r\n        return this.value[this.itemsOptions.label] || '';\r\n      },\r\n      currentNodeKey(){\r\n        if(!this.value || !this.itemsOptions || !this.itemsOptions.key){\r\n          return '';\r\n        }\r\n\r\n        return this.value[this.itemsOptions.key] || '';\r\n      }\r\n    },\r\n    props: [\r\n      'value',\r\n      'placeholder',\r\n      'items',\r\n      'itemsOptions',\r\n      'disabled'\r\n    ],\r\n    mounted(){\r\n      let that = this;\r\n      document.addEventListener('click', () => {\r\n        that.isOpenTree = false;\r\n      }, false)\r\n    }\r\n  };\r\n</script>\r\n\r\n<style scoped>\r\n  .select-wrap{\r\n    position: relative;\r\n    cursor: pointer;\r\n  }\r\n  .select-wrap input[type='text']{\r\n\r\n\r\n  }\r\n  .select-wrap .tree-wrap{\r\n    position: absolute;\r\n    z-index: 10000;\r\n    top: 42px;\r\n    left: 1px;\r\n    right: 1px;\r\n    background-color: #fff;\r\n    border: 1px solid #d1dbe5;\r\n    border-radius: 3px;\r\n    box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);\r\n  }\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 129 */
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
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5e9d9894", module.exports)
  }
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("d92fe98e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4617f830\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MenuPermission.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4617f830\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MenuPermission.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"MenuPermission.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TreePermission = __webpack_require__(134);

var _TreePermission2 = _interopRequireDefault(_TreePermission);

var _privAPI = __webpack_require__(141);

var _privAPI2 = _interopRequireDefault(_privAPI);

var _util = __webpack_require__(8);

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
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(135)
  __webpack_require__(137)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(139),
  /* template */
  __webpack_require__(140),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6c8bf032",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\system\\components\\TreePermission.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TreePermission.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c8bf032", Component.options)
  } else {
    hotAPI.reload("data-v-6c8bf032", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("cae8235e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c8bf032\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TreePermission.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c8bf032\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TreePermission.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.tree-wrap[data-v-6c8bf032]{\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/system/components/TreePermission.vue?531f369a"],"names":[],"mappings":";AAUA;CACA","file":"TreePermission.vue","sourcesContent":["<template>\n  <div class=\"tree-wrap\">\n    <el-checkbox-group :value=\"value\">\n      <el-tree class=\"permission-tree-wrap\" :data=\"permissions\" :props=\"props\" :default-expand-all=\"expand\" :render-content=\"renderContent\">\n      </el-tree>\n    </el-checkbox-group>\n  </div>\n</template>\n\n<style scoped>\n  .tree-wrap{\n  }\n</style>\n\n<script>\n  import util from './util.js';\n\n  export default {\n    data() {\n      return {};\n    },\n    props: {\n      'value': {\n        type: Array,\n        required: true\n      },\n      'permissions': {\n        type: Array,\n        required: true\n      },\n      'props': {\n        type: Object,\n        default: function () {\n          return {\n            children: 'children',\n            label: 'name',\n            permission: 'permissions'\n          };\n        }\n      },\n      'expand': {\n        type: Boolean,\n        default: true\n      }\n    },\n    computed: {\n    },\n    methods: {\n      checkBoxChangeHandler(event){\n        const {target} = event;\n\n        let val = Object.assign([], this.value);\n\n        if(target.checked){\n          val.push(target.value);\n        }else {\n          let index = val.findIndex(val => val === target.value);\n          val.splice(index, 1);\n        }\n\n        return this.$emit('input', val);\n\n      },\n      nodeCheckBoxChangeHandler(event){\n        const {target} = event;\n\n        let val = Object.assign([], this.value);\n        let node = util.findTreeNode(this.permissions, 'code', target.value, this.props.children);\n        let nodeValues = this.treeNodeAllPermissionItems([ node ]);\n\n        if(target.checked){ // 全选子节点\n          const unique = (array) => { // 去重\n            var a = {};\n            for(let i = 0; i < array.length; i++){\n              if(typeof a[array[i]] === 'undefined')\n                a[array[i]] = 1;\n            }\n\n            array.length = 0;\n            for(let i in a)\n              array[array.length] = i;\n            return array;\n          };\n\n          val = unique(val.concat(nodeValues));\n\n        }else { // 取消选择子节点\n          val = val.filter(val => !nodeValues.includes(val) );\n        }\n\n        return this.$emit('input', val);\n      },\n      renderContent(h, {node}){\n        const { data } = node;\n\n        let nodeContent = [];\n        nodeContent.push(h(\n          'div', {\n            'class': ['node-name'],\n            'style': {\n              'display': 'inline-block'\n            }\n          }, [\n            h(\n              'span', {\n                style: {\n                  display: 'inline-block',\n                  'marginRight': '20px'\n                }\n              }, data[this.props.label]\n            ),\n            h('el-checkbox', {\n              props: {\n                'label': data.code,\n                'disabled': data.disabled\n              },\n              on: {\n                'change': this.nodeCheckBoxChangeHandler\n              }\n            }, '')\n          ]\n        ));\n\n        if(data[this.props.permission] && data[this.props.permission].length){\n          let permissionCheckBoxs = data[this.props.permission].map((val) => {\n            return h('el-checkbox', {\n              props: {\n                'label': val.code,\n                'disabled': val.disabled\n              },\n              on: {\n                'change': this.checkBoxChangeHandler\n              }\n            }, val.name);\n          }, this);\n\n          nodeContent.push(h(\n            'div', {\n              style: {\n                'paddingLeft': '77px',\n                'paddingRight': '22px',\n                'whiteSpace': 'normal'\n              }\n            }, permissionCheckBoxs\n          ));\n        }\n\n        return h('div', {\n          style: {\n            display: 'inline-block'\n          }\n        }, nodeContent);\n      },\n      treeNodeAllPermissionItems(tree){\n        let result = [];\n\n        for(let i = 0; i < tree.length; i++){\n          if(tree[i].code){\n            result.push(tree[i].code);\n          }\n\n          if(tree[i][this.props.permission] && tree[i][this.props.permission].length){\n            let tmpItems = tree[i][this.props.permission].map(val => val.code);\n            result = result.concat(tmpItems);\n          }\n\n          if(tree[i][this.props.children] && tree[i][this.props.children].length){\n            let tmp = this.treeNodeAllPermissionItems(tree[i][this.props.children]);\n            result = result.concat(tmp);\n          }\n        }\n\n        return result;\n      }\n    },\n    created() {\n    }\n  };\n</script>\n<<style scoped>\n.permission-tree-wrap .el-tree-node__content{\n  height: auto;\n}\n</style>\n\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("3684f0dc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c8bf032\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./TreePermission.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c8bf032\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./TreePermission.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.permission-tree-wrap .el-tree-node__content[data-v-6c8bf032]{\n  height: auto;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/system/components/TreePermission.vue?531f369a"],"names":[],"mappings":";AAoLA;EACA,aAAA;CACA","file":"TreePermission.vue","sourcesContent":["<template>\n  <div class=\"tree-wrap\">\n    <el-checkbox-group :value=\"value\">\n      <el-tree class=\"permission-tree-wrap\" :data=\"permissions\" :props=\"props\" :default-expand-all=\"expand\" :render-content=\"renderContent\">\n      </el-tree>\n    </el-checkbox-group>\n  </div>\n</template>\n\n<style scoped>\n  .tree-wrap{\n  }\n</style>\n\n<script>\n  import util from './util.js';\n\n  export default {\n    data() {\n      return {};\n    },\n    props: {\n      'value': {\n        type: Array,\n        required: true\n      },\n      'permissions': {\n        type: Array,\n        required: true\n      },\n      'props': {\n        type: Object,\n        default: function () {\n          return {\n            children: 'children',\n            label: 'name',\n            permission: 'permissions'\n          };\n        }\n      },\n      'expand': {\n        type: Boolean,\n        default: true\n      }\n    },\n    computed: {\n    },\n    methods: {\n      checkBoxChangeHandler(event){\n        const {target} = event;\n\n        let val = Object.assign([], this.value);\n\n        if(target.checked){\n          val.push(target.value);\n        }else {\n          let index = val.findIndex(val => val === target.value);\n          val.splice(index, 1);\n        }\n\n        return this.$emit('input', val);\n\n      },\n      nodeCheckBoxChangeHandler(event){\n        const {target} = event;\n\n        let val = Object.assign([], this.value);\n        let node = util.findTreeNode(this.permissions, 'code', target.value, this.props.children);\n        let nodeValues = this.treeNodeAllPermissionItems([ node ]);\n\n        if(target.checked){ // 全选子节点\n          const unique = (array) => { // 去重\n            var a = {};\n            for(let i = 0; i < array.length; i++){\n              if(typeof a[array[i]] === 'undefined')\n                a[array[i]] = 1;\n            }\n\n            array.length = 0;\n            for(let i in a)\n              array[array.length] = i;\n            return array;\n          };\n\n          val = unique(val.concat(nodeValues));\n\n        }else { // 取消选择子节点\n          val = val.filter(val => !nodeValues.includes(val) );\n        }\n\n        return this.$emit('input', val);\n      },\n      renderContent(h, {node}){\n        const { data } = node;\n\n        let nodeContent = [];\n        nodeContent.push(h(\n          'div', {\n            'class': ['node-name'],\n            'style': {\n              'display': 'inline-block'\n            }\n          }, [\n            h(\n              'span', {\n                style: {\n                  display: 'inline-block',\n                  'marginRight': '20px'\n                }\n              }, data[this.props.label]\n            ),\n            h('el-checkbox', {\n              props: {\n                'label': data.code,\n                'disabled': data.disabled\n              },\n              on: {\n                'change': this.nodeCheckBoxChangeHandler\n              }\n            }, '')\n          ]\n        ));\n\n        if(data[this.props.permission] && data[this.props.permission].length){\n          let permissionCheckBoxs = data[this.props.permission].map((val) => {\n            return h('el-checkbox', {\n              props: {\n                'label': val.code,\n                'disabled': val.disabled\n              },\n              on: {\n                'change': this.checkBoxChangeHandler\n              }\n            }, val.name);\n          }, this);\n\n          nodeContent.push(h(\n            'div', {\n              style: {\n                'paddingLeft': '77px',\n                'paddingRight': '22px',\n                'whiteSpace': 'normal'\n              }\n            }, permissionCheckBoxs\n          ));\n        }\n\n        return h('div', {\n          style: {\n            display: 'inline-block'\n          }\n        }, nodeContent);\n      },\n      treeNodeAllPermissionItems(tree){\n        let result = [];\n\n        for(let i = 0; i < tree.length; i++){\n          if(tree[i].code){\n            result.push(tree[i].code);\n          }\n\n          if(tree[i][this.props.permission] && tree[i][this.props.permission].length){\n            let tmpItems = tree[i][this.props.permission].map(val => val.code);\n            result = result.concat(tmpItems);\n          }\n\n          if(tree[i][this.props.children] && tree[i][this.props.children].length){\n            let tmp = this.treeNodeAllPermissionItems(tree[i][this.props.children]);\n            result = result.concat(tmp);\n          }\n        }\n\n        return result;\n      }\n    },\n    created() {\n    }\n  };\n</script>\n<<style scoped>\n.permission-tree-wrap .el-tree-node__content{\n  height: auto;\n}\n</style>\n\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(8);

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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6c8bf032", module.exports)
  }
}

/***/ }),
/* 141 */
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
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4617f830", module.exports)
  }
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _axiosMockAdapter = __webpack_require__(5);

var _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.axiosMock = window.axiosMock || new _axiosMockAdapter2.default(_axios2.default, { delayResponse: 10 });

var users = [{
    "username": "jianghq",
    "realname": "jianghaiqun",
    "branchinnercode": "00010036",
    "lastmodifypasstime": null,
    "status": true,
    "email": "jhq@zving.com",
    "company": "上海公司",
    "roles": []
}, {
    "username": "audit",
    "realname": "审核",
    "branchinnercode": "0001",
    "lastmodifypasstime": "2016-10-28 19:13:31",
    "status": true,
    "email": "audit@zving.com",
    "company": "长沙泽元软件有限公司",
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
    "email": "edit@zving.com",
    "company": "北京泽元软件有限公司",
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
    "email": "admin@zving.com",
    "company": "泽西艾暮艾斯有限公司",
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
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cfa92d8c", module.exports)
  }
}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(146)
  __webpack_require__(148)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(150),
  /* template */
  __webpack_require__(159),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-cfac9f36",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\system\\role.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] role.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cfac9f36", Component.options)
  } else {
    hotAPI.reload("data-v-cfac9f36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("7c1282cc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cfac9f36\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./role.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cfac9f36\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./role.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.z-body-list[data-v-cfac9f36]{\n  flex-basis: 280px;\n  max-width: 280px;\n}\n.pane-wrap[data-v-cfac9f36]{\n  height: calc(100vh - 100px);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/system/role.vue?b40b6f9a"],"names":[],"mappings":";AAgIA;EACA,kBAAA;EACA,iBAAA;CACA;AACA;EACA,4BAAA;EACA,iBAAA;EACA,mBAAA;CACA","file":"role.vue","sourcesContent":["<template>\n  <div style=\"display: flex;\">\n    <div class=\"z-body-list z-main-height\">\n      <el-toolbar>\n        <el-button  @click=\"addRoleClickHandler\" >\n          <i class=\"fa fa-plus\"></i> 新建\n        </el-button>\n        <el-button @click=\"editRoleClickHandler\" :disabled=\"!currentRole\">\n          <i class=\"fa fa-pencil\"></i> 编辑\n        </el-button>\n        <el-button @click=\"deleteRoleClickHandler\" :disabled=\"!currentRole\">\n          <i class=\"fa fa-close\"></i> 删除\n        </el-button>\n      </el-toolbar>\n      <div v-loading=\"roleLoading\">\n        <el-tree :highlight-current=\"true\"\n                 :props=\"roleProps\"\n                 :data=\"roleTree\"\n                 @current-change=\"onRoleTreeCheckChange\">\n        </el-tree>\n      </div>\n    </div>\n    <div class=\"z-body-detail z-main-height\" >\n      <div>\n        <el-tabs class=\"tabs-wrap\" v-model=\"activeName\" @tab-click=\"onRoleTabsClick\">\n          <el-tab-pane label='基本信息' name='roleInfo'>\n            <div v-loading=\"roleInfoLoading\">\n              <div style=\"padding: 15px;\">\n                <table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" class=\"z-datagrid\">\n                  <tbody>\n                    <tr style=\"height: 24px; line-height: 24px;\">\n                      <td class=\"noellipsis\">&nbsp;</td>\n                      <td>角色名：</td>\n                      <td>{{currentRole && currentRole.name}}</td>\n                      <td>角色代码：</td>\n                      <td>{{currentRole && currentRole.rolecode}}</td>\n                    </tr>\n                    <tr style=\"height: 24px; line-height: 24px;\">\n                      <td class=\"noellipsis\">&nbsp;</td>\n                      <td>备注：</td>\n                      <td colspan=\"3\">{{currentRole && currentRole.memo}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <el-toolbar>\n                <el-button class=\"z-toolbar-btn\"\n                           :plain=\"true\"\n                           icon=\"plus\"\n                           size=\"small\"\n                           @click=\"addUsersToRoleClickHandler\"\n                           :disabled=\"!currentRole\">添加用户到角色</el-button>\n                <el-button class=\"z-toolbar-btn\"\n                           :plain=\"true\"\n                           icon=\"delete\"\n                           size=\"small\"\n                           @click=\"deleteUsersToRoleClickHandler\" :disabled=\"!currentRole\">从角色中删除用户\n                </el-button>\n              </el-toolbar>\n              <div class=\"main-content-wrap\">\n                <el-table style=\"width: 100%\" :data=\"userDataTableValues\">\n                  <el-table-column prop=\"username\" label=\"用户名\" min-width=\"150\"></el-table-column>\n                  <el-table-column prop=\"realname\" label=\"真实姓名\" min-width=\"150\"></el-table-column>\n                  <el-table-column label=\"所属角色\" min-width=\"150\">\n                    <template slot-scope=\"scope\">\n                      <span v-for=\"(role,index) in scope.row.roles\" :key=\"role.rolecode\">\n                        {{role.name}}{{index+1 < scope.row.roles.length ? ',':''}}\n                      </span>\n                    </template>\n                  </el-table-column>\n                </el-table>\n              </div>\n            </div>\n          </el-tab-pane>\n          <el-tab-pane :label=\"type.name\" :name=\"type.code\" v-for=\"type in rolePermissionTypes\" :key=\"type.code\">\n            <div class=\"pane-wrap main-content-wrap\">\n              <component :is=\"type.code\" :id=\"currentRole.rolecode\" :type=\"privType\"></component>\n            </div>\n          </el-tab-pane>\n        </el-tabs>\n      </div>\n    </div>\n    <!--添加编辑框-->\n    <el-dialog :title=\"editRoleMode === 1 ? '添加新角色' : '编辑角色'\" :visible.sync=\"roleDialog\">\n      <el-form :model=\"tmpRole\" :rules=\"roleRules\" ref=\"roleForm\" label-width=\"100px\">\n        <el-form-item label=\"角色名\" prop=\"rolename\">\n          <el-input v-model=\"tmpRole.rolename\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"角色代码\" prop=\"rolecode\">\n          <el-input v-model=\"tmpRole.rolecode\" :disabled=\"editRoleMode === 2\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"备注\">\n          <el-input v-model=\"tmpRole.memo\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"roleDialog = false\">取 消</el-button>\n        <el-button type=\"primary\" :loading=\"confirmLoading\" @click=\"okHandler\">确 定</el-button>\n      </div>\n    </el-dialog>\n    <!--用户选择框-->\n    <el-dialog :title=\"selectMode === 1 ? '添加用户到角色' : '从角色中删除用户'\" :visible.sync=\"selectDialog\">\n      <div class=\"select-user-wrap\" v-loading=\"selectLoading\">\n        <el-table :data=\"selectUsers\" @selection-change=\"usersSelectionChangeHandler\" style=\"width: 100%\" highlight-current-row>\n          <el-table-column type=\"selection\" width=\"40\"></el-table-column>\n          <el-table-column prop=\"username\" label=\"用户名\" min-width=\"150\"></el-table-column>\n          <el-table-column prop=\"realname\" label=\"真实姓名\" min-width=\"150\"></el-table-column>\n          <el-table-column label=\"所属角色\" min-width=\"150\">\n            <template slot-scope=\"scope\">\n              <span v-for=\"role in scope.row.roles\" :key=\"role.rolecode\">\n                {{role.name}}，\n              </span>\n            </template>\n          </el-table-column>\n        </el-table>\n      </div>\n      <div slot=\"footer\">\n        <el-button @click=\"selectDialog = false\">取 消</el-button>\n        <el-button type=\"primary\"\n                   :loading=\"confirmLoading\"\n                   :disabled=\"!selectedUsers.length\"\n                   @click=\"selectConfirmClickHandler\">确 定</el-button>\n      </div>\n    </el-dialog>\n  </div>\n</template>\n\n<style scoped>\n  .z-body-list{\n    flex-basis: 280px;\n    max-width: 280px;\n  }\n  .pane-wrap{\n    height: calc(100vh - 100px);\n    overflow-y: auto;\n    overflow-x: hidden;\n  }\n</style>\n\n<script>\n  import roleAPI from './api/roleAPI.js'\n  import TreeSelect from './components/TreeSelect.vue'\n  import TreeGrid from './components/TreeGrid.vue'\n  import MenuPermission from './components/MenuPermission.vue'\n  import util from './components/util.js'\n  require('./mock/role.js')\n  require('./mock/priv.js')\nexport default {\n  data() {\n    return {\n      rolePermissionTypes: [{code:'menuPermission',name:'菜单权限'}],\n      roleLoading: false,\n      roleTree: [],\n      currentRole:{},\n      activeName: 'roleInfo',\n      roleInfoLoading: false,\n      userDataTableValues: [],\n      menuPrivLoading: false,\n      privType: 'R',\n      roleProps: {\n        children: 'children',\n        label: 'name',\n        key: 'rolecode'\n      },\n\n      roleDialog: false,\n      editRoleMode: 1, // 1： 添加， 2：编辑\n      tmpRole: {},\n      roleRules: {\n        rolename: [\n          { required: true, message: '请输入角色名', trigger: 'blur' }\n        ],\n        rolecode: [\n          { required: true, message: '请输入角色代码', trigger: 'blur' }\n        ]\n      },\n      confirmLoading: false,\n      selectUsers: [],\n      selectMode: 1, // 1: 添加用户到角色，2: 从角色中删除用户\n      selectDialog: false,\n      selectLoading: false,\n      selectedUsers: [],\n      sidebarCollapsed: false //侧边栏是否为展开状态\n    }\n  },\n  created() {\n    roleAPI.getRoles().then(data =>{\n      this.roleTree = data.data\n       this.roleInfoLoading = false\n    })\n  },\n  methods: {\n    // 当在左下机构树上点击\n    onRoleTreeCheckChange(role) {\n      this.currentRole = role;\n      this.userDataTableValues = []\n      this.onRoleTabsClick()\n    },\n    // 当在右上页签上点击\n    onRoleTabsClick() {\n      if( !this.currentRole || !this.currentRole.rolecode){\n        return;\n      }\n\n      if (this.activeName === 'roleInfo' && !this.userDataTableValues.length) {\n        this.roleInfoLoading = true;\n        roleAPI.getUsersByRole(this.currentRole.rolecode).then(data => {\n          this.userDataTableValues = data.data\n          this.roleInfoLoading = false\n        });\n      }\n\n    },\n    addRoleClickHandler(){\n      this.editRoleMode = 1;\n      this.tmpRole = {\n        rolename: '',\n        rolecode: '',\n        memo: ''\n      };\n      this.roleDialog = true\n    },\n    editRoleClickHandler(){\n      this.editRoleMode = 2;\n      console.info(this.currentRole);\n      this.tmpRole = {\n        rolecode:  this.currentRole.rolecode,\n        memo: this.currentRole.memo,\n        rolename: this.currentRole.name\n      };\n\n      this.roleDialog = true;\n    },\n    deleteRoleClickHandler(){\n      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning'\n      }).then(() => {\n        return roleAPI.deleteRole(this.currentRole.rolecode);\n      }).then((data)=>{\n        if(data.status !== 1){\n          return data\n        }\n\n        let index = this.roleTree.findIndex(val => val.rolecode === this.currentRole.rolecode);\n\n        this.roleTree = [\n          ...this.roleTree.slice(0, index),\n          ...this.roleTree.slice(index + 1)\n        ];\n\n        this.currentRole = null\n        this.userDataTableValues = []\n\n        return data\n      }).then((data) => {\n        util.showNotification(data);\n      }).catch(e => {\n        util.showErrorNotification(e)\n      });\n    },\n    okHandler(){\n      let addForm = () => {\n        return roleAPI.addRole(this.tmpRole).then(data=>{\n          if(data.status !== 1){\n            return data;\n          }\n            this.roleTree.push({\n              name: this.tmpRole.rolename,\n              rolecode: this.tmpRole.rolecode,\n              memo: this.tmpRole.memo\n            });\n\n          return data;\n        })\n      };\n\n      let editForm = () => {\n        return roleAPI.editRole(this.tmpRole.rolecode, this.tmpRole).then( data => {\n          if(data.status !== 1){\n            return data;\n          }\n\n          let index = this.roleTree.findIndex(val => val.rolecode === this.tmpRole.rolecode);\n          this.tmpRole.name=this.tmpRole.rolename;\n          this.roleTree = [\n            ...this.roleTree.slice(0, index),\n            this.tmpRole,\n            ...this.roleTree.slice(index + 1)\n          ]\n          this.currentRole=this.tmpRole\n\n          return data;\n        })\n\n      };\n\n      util.validateForm(this.$refs['roleForm']).then(() => {\n        this.confirmLoading = true;\n        if(this.editRoleMode === 1){\n          return addForm();\n        }\n\n        if(this.editRoleMode === 2){\n          return editForm();\n        }\n      }).then((data)=> {\n        this.confirmLoading = false;\n        this.roleDialog = false;\n\n        util.showNotification(data);\n      }).catch((e)=>{\n        util.showErrorNotification(e);\n        this.confirmLoading = false;\n      });\n    },\n    addUsersToRoleClickHandler(){\n      this.selectUsers = [];\n      this.selectedUsers = [];\n      this.selectMode = 1;\n      this.selectLoading = true;\n      this.selectDialog = true;\n\n      roleAPI.getUsersNotRole(this.currentRole.rolecode).then(data=>{\n        this.selectUsers = data.data;\n        this.selectLoading = false;\n      });\n    },\n    deleteUsersToRoleClickHandler(){\n      this.selectUsers = Object.assign([], this.userDataTableValues);\n      this.selectedUsers = [];\n      this.selectMode = 2;\n      this.selectLoading = false;\n      this.selectDialog = true;\n    },\n    usersSelectionChangeHandler(selection){\n      this.selectedUsers = selection;\n    },\n    selectConfirmClickHandler(){\n      this.confirmLoading = true;\n\n      let deleteUsers = () => {\n        let ids = this.selectedUsers.map(val => val.username);\n\n        return roleAPI.removeUsers(ids,this.currentRole.rolecode).then(res => {\n          if(res.status !== 1){\n            return res;\n          }\n          this.userDataTableValues = this.userDataTableValues.filter(val => {\n            return !ids.includes(val.username);\n          });\n          return res;\n        });\n      };\n\n      let addUsers = () => {\n        let ids = this.selectedUsers.map(val => val.username);\n\n        return roleAPI.addUsers(ids, this.currentRole.rolecode).then(res => {\n          if(res.status !== 1){\n            return res;\n          }\n\n          this.userDataTableValues = [\n            ...this.userDataTableValues,\n            ...this.selectedUsers\n          ];\n\n          return res;\n        });\n      };\n\n      let handler = this.selectMode === 1 ? addUsers : deleteUsers;\n\n      handler().then((res)=>{\n        this.confirmLoading = false;\n        this.selectDialog = false;\n\n        util.showNotification(res);\n      }).catch(e => {\n        this.confirmLoading = false;\n        util.showErrorNotification(e);\n      });\n    },\n    toggleSidebar(){\n      this.sidebarCollapsed = !this.sidebarCollapsed\n    }\n  },\n  components: {\n    'menuPermission': MenuPermission,\n    'tree-select': TreeSelect,\n    'tree-grid': TreeGrid\n  }\n\n};\n</script>\n<style scoped>\n.z-body-detail {\n    background: #f9fbfc none;\n    box-shadow: inset 1px 0px 0px rgba(0, 0, 0, 0.04);\n    flex: 1;\n    position: relative;\n}\n\n.z-main-height {\n    height: calc(100vh - 50px);\n    position: relative;\n}\n.main-content-wrap {\n  padding: 10px;\n}\n</style>\n\n\n\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("6a95894d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cfac9f36\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./role.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cfac9f36\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./role.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.z-body-detail[data-v-cfac9f36] {\n    background: #f9fbfc none;\n    box-shadow: inset 1px 0px 0px rgba(0, 0, 0, 0.04);\n    flex: 1;\n    position: relative;\n}\n.z-main-height[data-v-cfac9f36] {\n    height: calc(100vh - 50px);\n    position: relative;\n}\n.main-content-wrap[data-v-cfac9f36] {\n  padding: 10px;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/system/role.vue?b40b6f9a"],"names":[],"mappings":";AA8YA;IACA,yBAAA;IACA,kDAAA;IACA,QAAA;IACA,mBAAA;CACA;AAEA;IACA,2BAAA;IACA,mBAAA;CACA;AACA;EACA,cAAA;CACA","file":"role.vue","sourcesContent":["<template>\n  <div style=\"display: flex;\">\n    <div class=\"z-body-list z-main-height\">\n      <el-toolbar>\n        <el-button  @click=\"addRoleClickHandler\" >\n          <i class=\"fa fa-plus\"></i> 新建\n        </el-button>\n        <el-button @click=\"editRoleClickHandler\" :disabled=\"!currentRole\">\n          <i class=\"fa fa-pencil\"></i> 编辑\n        </el-button>\n        <el-button @click=\"deleteRoleClickHandler\" :disabled=\"!currentRole\">\n          <i class=\"fa fa-close\"></i> 删除\n        </el-button>\n      </el-toolbar>\n      <div v-loading=\"roleLoading\">\n        <el-tree :highlight-current=\"true\"\n                 :props=\"roleProps\"\n                 :data=\"roleTree\"\n                 @current-change=\"onRoleTreeCheckChange\">\n        </el-tree>\n      </div>\n    </div>\n    <div class=\"z-body-detail z-main-height\" >\n      <div>\n        <el-tabs class=\"tabs-wrap\" v-model=\"activeName\" @tab-click=\"onRoleTabsClick\">\n          <el-tab-pane label='基本信息' name='roleInfo'>\n            <div v-loading=\"roleInfoLoading\">\n              <div style=\"padding: 15px;\">\n                <table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" class=\"z-datagrid\">\n                  <tbody>\n                    <tr style=\"height: 24px; line-height: 24px;\">\n                      <td class=\"noellipsis\">&nbsp;</td>\n                      <td>角色名：</td>\n                      <td>{{currentRole && currentRole.name}}</td>\n                      <td>角色代码：</td>\n                      <td>{{currentRole && currentRole.rolecode}}</td>\n                    </tr>\n                    <tr style=\"height: 24px; line-height: 24px;\">\n                      <td class=\"noellipsis\">&nbsp;</td>\n                      <td>备注：</td>\n                      <td colspan=\"3\">{{currentRole && currentRole.memo}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <el-toolbar>\n                <el-button class=\"z-toolbar-btn\"\n                           :plain=\"true\"\n                           icon=\"plus\"\n                           size=\"small\"\n                           @click=\"addUsersToRoleClickHandler\"\n                           :disabled=\"!currentRole\">添加用户到角色</el-button>\n                <el-button class=\"z-toolbar-btn\"\n                           :plain=\"true\"\n                           icon=\"delete\"\n                           size=\"small\"\n                           @click=\"deleteUsersToRoleClickHandler\" :disabled=\"!currentRole\">从角色中删除用户\n                </el-button>\n              </el-toolbar>\n              <div class=\"main-content-wrap\">\n                <el-table style=\"width: 100%\" :data=\"userDataTableValues\">\n                  <el-table-column prop=\"username\" label=\"用户名\" min-width=\"150\"></el-table-column>\n                  <el-table-column prop=\"realname\" label=\"真实姓名\" min-width=\"150\"></el-table-column>\n                  <el-table-column label=\"所属角色\" min-width=\"150\">\n                    <template slot-scope=\"scope\">\n                      <span v-for=\"(role,index) in scope.row.roles\" :key=\"role.rolecode\">\n                        {{role.name}}{{index+1 < scope.row.roles.length ? ',':''}}\n                      </span>\n                    </template>\n                  </el-table-column>\n                </el-table>\n              </div>\n            </div>\n          </el-tab-pane>\n          <el-tab-pane :label=\"type.name\" :name=\"type.code\" v-for=\"type in rolePermissionTypes\" :key=\"type.code\">\n            <div class=\"pane-wrap main-content-wrap\">\n              <component :is=\"type.code\" :id=\"currentRole.rolecode\" :type=\"privType\"></component>\n            </div>\n          </el-tab-pane>\n        </el-tabs>\n      </div>\n    </div>\n    <!--添加编辑框-->\n    <el-dialog :title=\"editRoleMode === 1 ? '添加新角色' : '编辑角色'\" :visible.sync=\"roleDialog\">\n      <el-form :model=\"tmpRole\" :rules=\"roleRules\" ref=\"roleForm\" label-width=\"100px\">\n        <el-form-item label=\"角色名\" prop=\"rolename\">\n          <el-input v-model=\"tmpRole.rolename\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"角色代码\" prop=\"rolecode\">\n          <el-input v-model=\"tmpRole.rolecode\" :disabled=\"editRoleMode === 2\"></el-input>\n        </el-form-item>\n        <el-form-item label=\"备注\">\n          <el-input v-model=\"tmpRole.memo\"></el-input>\n        </el-form-item>\n      </el-form>\n      <div slot=\"footer\">\n        <el-button @click=\"roleDialog = false\">取 消</el-button>\n        <el-button type=\"primary\" :loading=\"confirmLoading\" @click=\"okHandler\">确 定</el-button>\n      </div>\n    </el-dialog>\n    <!--用户选择框-->\n    <el-dialog :title=\"selectMode === 1 ? '添加用户到角色' : '从角色中删除用户'\" :visible.sync=\"selectDialog\">\n      <div class=\"select-user-wrap\" v-loading=\"selectLoading\">\n        <el-table :data=\"selectUsers\" @selection-change=\"usersSelectionChangeHandler\" style=\"width: 100%\" highlight-current-row>\n          <el-table-column type=\"selection\" width=\"40\"></el-table-column>\n          <el-table-column prop=\"username\" label=\"用户名\" min-width=\"150\"></el-table-column>\n          <el-table-column prop=\"realname\" label=\"真实姓名\" min-width=\"150\"></el-table-column>\n          <el-table-column label=\"所属角色\" min-width=\"150\">\n            <template slot-scope=\"scope\">\n              <span v-for=\"role in scope.row.roles\" :key=\"role.rolecode\">\n                {{role.name}}，\n              </span>\n            </template>\n          </el-table-column>\n        </el-table>\n      </div>\n      <div slot=\"footer\">\n        <el-button @click=\"selectDialog = false\">取 消</el-button>\n        <el-button type=\"primary\"\n                   :loading=\"confirmLoading\"\n                   :disabled=\"!selectedUsers.length\"\n                   @click=\"selectConfirmClickHandler\">确 定</el-button>\n      </div>\n    </el-dialog>\n  </div>\n</template>\n\n<style scoped>\n  .z-body-list{\n    flex-basis: 280px;\n    max-width: 280px;\n  }\n  .pane-wrap{\n    height: calc(100vh - 100px);\n    overflow-y: auto;\n    overflow-x: hidden;\n  }\n</style>\n\n<script>\n  import roleAPI from './api/roleAPI.js'\n  import TreeSelect from './components/TreeSelect.vue'\n  import TreeGrid from './components/TreeGrid.vue'\n  import MenuPermission from './components/MenuPermission.vue'\n  import util from './components/util.js'\n  require('./mock/role.js')\n  require('./mock/priv.js')\nexport default {\n  data() {\n    return {\n      rolePermissionTypes: [{code:'menuPermission',name:'菜单权限'}],\n      roleLoading: false,\n      roleTree: [],\n      currentRole:{},\n      activeName: 'roleInfo',\n      roleInfoLoading: false,\n      userDataTableValues: [],\n      menuPrivLoading: false,\n      privType: 'R',\n      roleProps: {\n        children: 'children',\n        label: 'name',\n        key: 'rolecode'\n      },\n\n      roleDialog: false,\n      editRoleMode: 1, // 1： 添加， 2：编辑\n      tmpRole: {},\n      roleRules: {\n        rolename: [\n          { required: true, message: '请输入角色名', trigger: 'blur' }\n        ],\n        rolecode: [\n          { required: true, message: '请输入角色代码', trigger: 'blur' }\n        ]\n      },\n      confirmLoading: false,\n      selectUsers: [],\n      selectMode: 1, // 1: 添加用户到角色，2: 从角色中删除用户\n      selectDialog: false,\n      selectLoading: false,\n      selectedUsers: [],\n      sidebarCollapsed: false //侧边栏是否为展开状态\n    }\n  },\n  created() {\n    roleAPI.getRoles().then(data =>{\n      this.roleTree = data.data\n       this.roleInfoLoading = false\n    })\n  },\n  methods: {\n    // 当在左下机构树上点击\n    onRoleTreeCheckChange(role) {\n      this.currentRole = role;\n      this.userDataTableValues = []\n      this.onRoleTabsClick()\n    },\n    // 当在右上页签上点击\n    onRoleTabsClick() {\n      if( !this.currentRole || !this.currentRole.rolecode){\n        return;\n      }\n\n      if (this.activeName === 'roleInfo' && !this.userDataTableValues.length) {\n        this.roleInfoLoading = true;\n        roleAPI.getUsersByRole(this.currentRole.rolecode).then(data => {\n          this.userDataTableValues = data.data\n          this.roleInfoLoading = false\n        });\n      }\n\n    },\n    addRoleClickHandler(){\n      this.editRoleMode = 1;\n      this.tmpRole = {\n        rolename: '',\n        rolecode: '',\n        memo: ''\n      };\n      this.roleDialog = true\n    },\n    editRoleClickHandler(){\n      this.editRoleMode = 2;\n      console.info(this.currentRole);\n      this.tmpRole = {\n        rolecode:  this.currentRole.rolecode,\n        memo: this.currentRole.memo,\n        rolename: this.currentRole.name\n      };\n\n      this.roleDialog = true;\n    },\n    deleteRoleClickHandler(){\n      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {\n        confirmButtonText: '确定',\n        cancelButtonText: '取消',\n        type: 'warning'\n      }).then(() => {\n        return roleAPI.deleteRole(this.currentRole.rolecode);\n      }).then((data)=>{\n        if(data.status !== 1){\n          return data\n        }\n\n        let index = this.roleTree.findIndex(val => val.rolecode === this.currentRole.rolecode);\n\n        this.roleTree = [\n          ...this.roleTree.slice(0, index),\n          ...this.roleTree.slice(index + 1)\n        ];\n\n        this.currentRole = null\n        this.userDataTableValues = []\n\n        return data\n      }).then((data) => {\n        util.showNotification(data);\n      }).catch(e => {\n        util.showErrorNotification(e)\n      });\n    },\n    okHandler(){\n      let addForm = () => {\n        return roleAPI.addRole(this.tmpRole).then(data=>{\n          if(data.status !== 1){\n            return data;\n          }\n            this.roleTree.push({\n              name: this.tmpRole.rolename,\n              rolecode: this.tmpRole.rolecode,\n              memo: this.tmpRole.memo\n            });\n\n          return data;\n        })\n      };\n\n      let editForm = () => {\n        return roleAPI.editRole(this.tmpRole.rolecode, this.tmpRole).then( data => {\n          if(data.status !== 1){\n            return data;\n          }\n\n          let index = this.roleTree.findIndex(val => val.rolecode === this.tmpRole.rolecode);\n          this.tmpRole.name=this.tmpRole.rolename;\n          this.roleTree = [\n            ...this.roleTree.slice(0, index),\n            this.tmpRole,\n            ...this.roleTree.slice(index + 1)\n          ]\n          this.currentRole=this.tmpRole\n\n          return data;\n        })\n\n      };\n\n      util.validateForm(this.$refs['roleForm']).then(() => {\n        this.confirmLoading = true;\n        if(this.editRoleMode === 1){\n          return addForm();\n        }\n\n        if(this.editRoleMode === 2){\n          return editForm();\n        }\n      }).then((data)=> {\n        this.confirmLoading = false;\n        this.roleDialog = false;\n\n        util.showNotification(data);\n      }).catch((e)=>{\n        util.showErrorNotification(e);\n        this.confirmLoading = false;\n      });\n    },\n    addUsersToRoleClickHandler(){\n      this.selectUsers = [];\n      this.selectedUsers = [];\n      this.selectMode = 1;\n      this.selectLoading = true;\n      this.selectDialog = true;\n\n      roleAPI.getUsersNotRole(this.currentRole.rolecode).then(data=>{\n        this.selectUsers = data.data;\n        this.selectLoading = false;\n      });\n    },\n    deleteUsersToRoleClickHandler(){\n      this.selectUsers = Object.assign([], this.userDataTableValues);\n      this.selectedUsers = [];\n      this.selectMode = 2;\n      this.selectLoading = false;\n      this.selectDialog = true;\n    },\n    usersSelectionChangeHandler(selection){\n      this.selectedUsers = selection;\n    },\n    selectConfirmClickHandler(){\n      this.confirmLoading = true;\n\n      let deleteUsers = () => {\n        let ids = this.selectedUsers.map(val => val.username);\n\n        return roleAPI.removeUsers(ids,this.currentRole.rolecode).then(res => {\n          if(res.status !== 1){\n            return res;\n          }\n          this.userDataTableValues = this.userDataTableValues.filter(val => {\n            return !ids.includes(val.username);\n          });\n          return res;\n        });\n      };\n\n      let addUsers = () => {\n        let ids = this.selectedUsers.map(val => val.username);\n\n        return roleAPI.addUsers(ids, this.currentRole.rolecode).then(res => {\n          if(res.status !== 1){\n            return res;\n          }\n\n          this.userDataTableValues = [\n            ...this.userDataTableValues,\n            ...this.selectedUsers\n          ];\n\n          return res;\n        });\n      };\n\n      let handler = this.selectMode === 1 ? addUsers : deleteUsers;\n\n      handler().then((res)=>{\n        this.confirmLoading = false;\n        this.selectDialog = false;\n\n        util.showNotification(res);\n      }).catch(e => {\n        this.confirmLoading = false;\n        util.showErrorNotification(e);\n      });\n    },\n    toggleSidebar(){\n      this.sidebarCollapsed = !this.sidebarCollapsed\n    }\n  },\n  components: {\n    'menuPermission': MenuPermission,\n    'tree-select': TreeSelect,\n    'tree-grid': TreeGrid\n  }\n\n};\n</script>\n<style scoped>\n.z-body-detail {\n    background: #f9fbfc none;\n    box-shadow: inset 1px 0px 0px rgba(0, 0, 0, 0.04);\n    flex: 1;\n    position: relative;\n}\n\n.z-main-height {\n    height: calc(100vh - 50px);\n    position: relative;\n}\n.main-content-wrap {\n  padding: 10px;\n}\n</style>\n\n\n\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _roleAPI = __webpack_require__(17);

var _roleAPI2 = _interopRequireDefault(_roleAPI);

var _TreeSelect = __webpack_require__(18);

var _TreeSelect2 = _interopRequireDefault(_TreeSelect);

var _TreeGrid = __webpack_require__(151);

var _TreeGrid2 = _interopRequireDefault(_TreeGrid);

var _MenuPermission = __webpack_require__(19);

var _MenuPermission2 = _interopRequireDefault(_MenuPermission);

var _util = __webpack_require__(8);

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

__webpack_require__(157);
__webpack_require__(158);
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
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(152)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(154),
  /* template */
  __webpack_require__(156),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-ccc30c44",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\system\\components\\TreeGrid.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TreeGrid.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ccc30c44", Component.options)
  } else {
    hotAPI.reload("data-v-ccc30c44", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(153);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("f0bb3652", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ccc30c44\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TreeGrid.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ccc30c44\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TreeGrid.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.ms-tree-space[data-v-ccc30c44] {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1;\n  width: 14px;\n  height: 14px;\n}\n.ms-tree-space[data-v-ccc30c44]::before {\n  content: \"\"\n}\ntable td[data-v-ccc30c44] {\n  line-height: 26px;\n}\n.tree-arrow[data-v-ccc30c44] {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/system/components/TreeGrid.vue?1be4dea4"],"names":[],"mappings":";AAuIA;EACA,mBAAA;EACA,SAAA;EACA,sBAAA;EACA,oCAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;CACA;AAEA;EACA,WAAA;CACA;AAEA;EACA,kBAAA;CACA;AAEA;EACA,gBAAA;CACA","file":"TreeGrid.vue","sourcesContent":["<template>\n  <el-table :data=\"data\" :height=\"height\" :row-style=\"showTr\" @selection-change=\"onSelectionChange\" style=\"width: 100%\" highlight-current-row>\n    <el-table-column type=\"selection\" width=\"50\" align=\"center\"></el-table-column>\n    <el-table-column v-for=\"(column, index) in columns\" :key=\"column.dataIndex\" :label=\"column.text\" :width=\"column.width\" :min-width=\"column.minWidth\">\n      <template slot-scope=\"scope\">\n        <span v-if=\"spaceIconShow(index)\" v-for=\"(space, levelIndex) in scope.row._level\" class=\"ms-tree-space\"></span>\n        <span v-if=\"toggleIconShow(index,scope.row)\" @click=\"toggle(scope.$index)\" class=\"tree-arrow\">\n          <i v-if=\"!scope.row._expanded\" class=\"el-icon-arrow-right\"></i>\n          <i v-if=\"scope.row._expanded\" class=\"el-icon-arrow-down\"></i>\n        </span>\n        <span v-else-if=\"index===0\" class=\"ms-tree-space\"></span>\n        {{cell(scope.row, column)}}\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n<script>\nimport Utils from './dataTranslate.js';\n\nexport default {\n  name: 'tree-grid',\n  props: {\n    // 该属性是确认父组件传过来的数据是否已经是树形结构了，如果是，则不需要进行树形格式化\n    treeStructure: {\n      type: Boolean,\n      default: function() {\n        return false\n      }\n    },\n    // 这是相应的字段展示\n    columns: {\n      type: Array,\n      default: function() {\n        return []\n      }\n    },\n    //表格高度\n    height: {\n      type: Number,\n      default: function() {\n        return 400\n      }\n    },\n    // 这是数据源\n    dataSource: {\n      type: Array,\n      default: function() {\n        return []\n      }\n    },\n    // 这个作用是根据自己需求来的，比如在操作中涉及相关按钮编辑，删除等，需要向服务端发送请求，则可以把url传过来\n    requestUrl: {\n      type: String,\n      default: function() {\n        return ''\n      }\n    },\n    // 这个是是否展示操作列\n    treeType: {\n      type: String,\n      default: function() {\n        return 'normal'\n      }\n    },\n    // 是否默认展开所有树\n    defaultExpandAll: {\n      type: Boolean,\n      default: function() {\n        return true\n      }\n    }\n  },\n  data() {\n    return {}\n  },\n  computed: {\n    // 格式化数据源\n    data: function() {\n      let me = this\n      if (me.treeStructure) {\n        let data = Utils.MSDataTransfer.treeToArray(me.dataSource, null, null, me.defaultExpandAll)\n        //          console.log(data)\n        return data\n      }\n      return me.dataSource\n    }\n  },\n  methods: {\n    // 单元格内容\n    cell(row, column) {\n      if (column.render) {\n        return column.render(row);\n      }\n\n      if (column.dataIndex) {\n        return row[column.dataIndex];\n      }\n\n      return '';\n    },\n    // 显示行\n    showTr: function(row, index) {\n      let show = (row._parent ? (row._parent._expanded && row._parent._show) : true)\n      row._show = show\n      return show ? '' : 'display:none;'\n    },\n    // 展开下级\n    toggle: function(trIndex) {\n      let me = this\n      let record = me.data[trIndex]\n      record._expanded = !record._expanded\n    },\n    // 显示层级关系的空格和图标\n    spaceIconShow(index) {\n      let me = this\n      if (me.treeStructure && index === 0) {\n        return true\n      }\n      return false\n    },\n    // 点击展开和关闭的时候，图标的切换\n    toggleIconShow(index, record) {\n      let me = this\n      if (me.treeStructure && index === 0 && record.children && record.children.length > 0) {\n        return true\n      }\n      return false\n    },\n    onSelectionChange(selection) {\n      this.$emit('selection-change', selection);\n    }\n  }\n}\n</script>\n<style scoped>\n.ms-tree-space {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1;\n  width: 14px;\n  height: 14px;\n}\n\n.ms-tree-space::before {\n  content: \"\"\n}\n\ntable td {\n  line-height: 26px;\n}\n\n.tree-arrow {\n  cursor: pointer;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dataTranslate = __webpack_require__(155);

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
/* 155 */
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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ccc30c44", module.exports)
  }
}

/***/ }),
/* 157 */
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
/* 158 */
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
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cfac9f36", module.exports)
  }
}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(161),
  /* template */
  __webpack_require__(162),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\error\\404.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] 404.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ff05e600", Component.options)
  } else {
    hotAPI.reload("data-v-ff05e600", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 161 */
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("notFound404.vue")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ff05e600", module.exports)
  }
}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(164)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(166),
  /* template */
  __webpack_require__(167),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-44e7873a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\git\\declarationForm\\mainUI\\source\\views\\main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44e7873a", Component.options)
  } else {
    hotAPI.reload("data-v-44e7873a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("677783f4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44e7873a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44e7873a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.app-wrap[data-v-44e7873a] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.navbar[data-v-44e7873a] {\n  height: 50px;\n  line-height: 50px;\n  box-shadow: 2px 0px 2px rgba(0, 0, 0, 1.05);\n  padding: 0;\n  background-color: #7386E6;\n  color: #DDE3FF;\n  border-radius: 0;\n}\n.navbar .el-menu--horizontal[data-v-44e7873a] {\n  background-color: transparent;\n}\n.navbar .el-menu--horizontal .el-menu-item[data-v-44e7873a] {\n  color: #fff;\n  height: 50px;\n  line-height: 50px;\n}\n.navbar .el-menu--horizontal .el-menu-item[data-v-44e7873a]:hover,\n.navbar .el-menu--horizontal .el-menu-item.is-active[data-v-44e7873a] {\n  background-color: #5C71CE;\n  border-bottom: 5px solid #3B51A8;\n}\n.logo[data-v-44e7873a] {\n  padding-left: 5px;\n  width: 200px;\n  max-width: 200px;\n  display: inline-block;\n  font-size: 16px;\n  color: #eeee99;\n  background-color: #667CDB;\n}\n.navbar-collapse[data-v-44e7873a] {\n  position: relative;\n}\n.other-buttons[data-v-44e7873a] {\n  text-align: right;\n  float: right;\n  -webkit-app-region: no-drag;\n  position: relative;\n  z-index: 103;\n}\n.other-buttons button[data-v-44e7873a] {\n  padding: 3px;\n  color: #fff;\n}\n.collapse.in[data-v-44e7873a] {\n  background-color: #31A66C;\n  padding: 0;\n}\n@media (max-width: 576px) {\n.navbar-collapse[data-v-44e7873a] {\n    z-index: 102;\n    transition: all 0.3s;\n}\n.logo[data-v-44e7873a] {\n    background-color: transparent;\n}\n.other-buttons[data-v-44e7873a] {\n    display: none;\n}\n.navbar-toggle[data-v-44e7873a] {\n    width: 55px;\n    line-height: 30px;\n}\n.collapse.in .el-menu--horizontal .el-menu-item[data-v-44e7873a] {\n    float: none;\n    border-bottom-width: 1px;\n}\n}\n@media (min-width: 576px) {\n.navbar-toggle[data-v-44e7873a] {\n    display: none;\n}\n}\n.visible-on-mobile.el-menu .el-menu-item[data-v-44e7873a] {\n  padding-left: 40px;\n}\n.el-menu-item .menu-title[data-v-44e7873a]{\n  font-size:12pt;\n}\n", "", {"version":3,"sources":["G:/git/declarationForm/mainUI/source/views/main.vue?12a4a827"],"names":[],"mappings":";AAiGA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;CACA;AAEA;EACA,aAAA;EACA,kBAAA;EACA,4CAAA;EACA,WAAA;EACA,0BAAA;EACA,eAAA;EACA,iBAAA;CACA;AACA;EACA,8BAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;CACA;AAEA;;EAEA,0BAAA;EACA,iCAAA;CACA;AAGA;EACA,kBAAA;EACA,aAAA;EACA,iBAAA;EACA,sBAAA;EACA,gBAAA;EACA,eAAA;EACA,0BAAA;CACA;AAEA;EACA,mBAAA;CACA;AACA;EACA,kBAAA;EACA,aAAA;EACA,4BAAA;EACA,mBAAA;EACA,aAAA;CACA;AAEA;EACA,aAAA;EACA,YAAA;CACA;AACA;EACA,0BAAA;EACA,WAAA;CACA;AAEA;AACA;IACA,aAAA;IACA,qBAAA;CACA;AACA;IACA,8BAAA;CACA;AACA;IACA,cAAA;CACA;AACA;IACA,YAAA;IACA,kBAAA;CACA;AACA;IACA,YAAA;IACA,yBAAA;CACA;CACA;AAEA;AACA;IACA,cAAA;CACA;CACA;AAEA;EACA,mBAAA;CACA;AAEA;EACA,eAAA;CACA","file":"main.vue","sourcesContent":["<template>\n  <div class=\"app-wrap\">\n    <div class=\"navbar navbar-color-bg select-disable\">\n      <div class=\"navbar-header\">\n        <el-button type=\"text\" @click=\"toggleNavbar\" class=\"navbar-toggle\">\n          <i class=\"fa fa-align-justify\"></i>\n        </el-button>\n        <a class=\"logo\">\n          <img src=\"assets/images/logo_zh-cn.png\" height=\"48\"/>海关通关系统 <sup> demo</sup>\n        </a>\n      </div>\n      <div class=\"other-buttons\">\n        <el-dropdown @command=\"handleCommand\" style=\"padding-right:20px;cursor:pointer;\">\n          <span class=\"el-dropdown-link\" style=\"color:white;\">\n            {{realname}}\n            <i class=\"el-icon-caret-bottom el-icon--right\"></i>\n          </span>\n          <el-dropdown-menu slot=\"dropdown\">\n            <el-dropdown-item command=\"passwd\">修改密码</el-dropdown-item>\n            <el-dropdown-item command=\"logout\">退出登录</el-dropdown-item>\n          </el-dropdown-menu>\n        </el-dropdown>\n      </div>\n\n      <div :class=\"'navbar-collapse collapse'+ (navbarCollapsed?' in':'')\">\n        <el-menu mode=\"horizontal\" theme=\"primary\" :default-active=\"activeMenu\">\n          <template v-for=\"menu in menus\">\n            <el-menu-item v-if=\"menu.meta && menu.meta.title\" :index=\"menu.path\" :key=\"menu.path\" @click=\"onSelectMenun(menu)\">\n              <i :class=\"menu.meta.icon\"></i> <span class=\"menu-title\">{{menu.meta.title}}</span></el-menu-item>\n          </template>\n        </el-menu>\n        <el-menu mode=\"horizontal\" theme=\"primary\" :default-active=\"activeMenu\" class=\"visible-on-mobile\">\n          <template v-for=\"menu in systemMenus\">\n            <el-menu-item v-if=\"menu.meta && menu.meta.title\" :key=\"menu.path\" @click=\"onSelectMenun(menu)\">\n              <i :class=\"menu.meta.icon\"></i> <span class=\"menu-title\">{{menu.meta.title}}</span></el-menu-item>\n          </template>\n        </el-menu>\n      </div>\n\n    </div>\n\n    <router-view :key=\"routerName\"></router-view>\n  </div>\n</template>\n<script>\nimport routes from '../router/'\nimport util from '../utils/'\n\nwindow.axiosMock = window.axiosMock || new AxiosMockAdapter(axios, { delayResponse: 1000 })\n\nconst menus = util.assign([], routes, 'component')\n\nexport default {\n  data() {\n    let routePath = this.$route.path\n    if(routePath && routePath.split('/').length>2){\n      routePath = routePath.split('/').slice(0,2).join('/')\n    }\n    return {\n      realname: localStorage.realname || 'demo',\n      routerName: this.$route.name || '/',\n      menus: menus,\n      activeMenu: routePath,\n      navbarCollapsed: false, // 导航是否展开\n    }\n  },\n  watch: {\n    '$route.name'(val, oldVal) {\n      this.routerName = this.$route.name || '/'\n    }\n  },\n  methods: {\n    onSelectMenun(menu) {\n      let hash = menu.children && ('/' + menu.children[0].path) || ''\n      hash = menu.path + hash\n      window.location.hash = hash\n      if (this.navbarCollapsed) {\n        this.navbarCollapsed = false\n      }\n      localStorage.lastRoutePath = hash\n    },\n    toggleNavbar() {\n      this.navbarCollapsed = !this.navbarCollapsed\n    },\n    handleCommand(cmd) {\n      if (cmd == 'logout') {\n        console.warn('todo: ')\n      }\n      if (cmd == 'passwd') {\n        console.warn('todo: ')\n      }\n    }\n  }\n}\n</script>\n\n<style scoped>\n.app-wrap {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.navbar {\n  height: 50px;\n  line-height: 50px;\n  box-shadow: 2px 0px 2px rgba(0, 0, 0, 1.05);\n  padding: 0;\n  background-color: #7386E6;\n  color: #DDE3FF;\n  border-radius: 0;\n}\n.navbar .el-menu--horizontal {\n  background-color: transparent;\n}\n.navbar .el-menu--horizontal .el-menu-item {\n  color: #fff;\n  height: 50px;\n  line-height: 50px;\n}\n\n.navbar .el-menu--horizontal .el-menu-item:hover,\n.navbar .el-menu--horizontal .el-menu-item.is-active {\n  background-color: #5C71CE;\n  border-bottom: 5px solid #3B51A8;\n}\n\n\n.logo {\n  padding-left: 5px;\n  width: 200px;\n  max-width: 200px;\n  display: inline-block;\n  font-size: 16px;\n  color: #eeee99;\n  background-color: #667CDB;\n}\n\n.navbar-collapse {\n  position: relative;\n}\n.other-buttons {\n  text-align: right;\n  float: right;\n  -webkit-app-region: no-drag;\n  position: relative;\n  z-index: 103;\n}\n\n.other-buttons button {\n  padding: 3px;\n  color: #fff;\n}\n.collapse.in {\n  background-color: #31A66C;\n  padding: 0;\n}\n\n@media (max-width: 576px) {\n  .navbar-collapse {\n    z-index: 102;\n    transition: all 0.3s;\n  }\n  .logo {\n    background-color: transparent;\n  }\n  .other-buttons {\n    display: none;\n  }\n  .navbar-toggle {\n    width: 55px;\n    line-height: 30px;\n  }\n  .collapse.in .el-menu--horizontal .el-menu-item {\n    float: none;\n    border-bottom-width: 1px;\n  }\n}\n\n@media (min-width: 576px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n\n.visible-on-mobile.el-menu .el-menu-item {\n  padding-left: 40px;\n}\n\n.el-menu-item .menu-title{\n  font-size:12pt;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = __webpack_require__(14);

var _router2 = _interopRequireDefault(_router);

var _utils = __webpack_require__(13);

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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

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
  }), _vm._v("海关通关系统 "), _c('sup', [_vm._v(" demo")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44e7873a", module.exports)
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map