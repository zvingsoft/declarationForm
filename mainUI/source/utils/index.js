import { Message, Notification } from 'element-ui'

const util = {
  title (title) {
    title = title ? title + ' - declation from' : 'declation from'
    window.document.title = title
  },
  showMessage (res) {
    Message({
      message: res.data.message,
      type: res.data.status === 1 ? 'success' : 'error'
    })
  },
  showSuccess (msg) {
    Message({
      message: msg,
      type: 'success'
    })
  },
  showError (msg) {
    Message({
      message: msg,
      type: 'error'
    })
  },
  showNotification (res) {
    Notification({
      title: res.status === 1 ? '操作成功' : '操作失败',
      message: res.message,
      type: res.status === 1 ? 'success' : 'error',
      duration: 2000
    })
  },
  showErrorNotification (error) {
    Notification({
      title: '错误',
      message: error.toString(),
      type: 'error',
      duration: 2000
    })
  },
  // 获取树的指定属性的值节点
  findTreeNode (tree, key, val, childName) {
    var result = null

    for (var i = 0; i < tree.length; i++) {
      if (tree[i][key] === val) {
        result = tree[i]
        break
      }

      if (tree[i][childName] && tree[i][childName].length) {
        var tmp = this.findTreeNode(tree[i][childName], key, val, childName)

        if (tmp) {
          result = tmp
          break
        }
      }
    }

    return result
  },
  // 获取树的指定属性的值节点的父节点
  findTreeParentNode (tree, key, val, childName) {
    let result = null

    for (var i = 0; i < tree.length; i++) {
      if (tree[i][key] === val) {
        result = tree[i]
        break
      }

      if (tree[i][childName] && tree[i][childName].length) {
        var tmp = this.findTreeParentNode(tree[i][childName], key, val, childName)

        if (tmp) {
          if (tmp[key] === val) {
            result = tree[i]
            console.log(result)
          } else {
            result = tmp
          }
          break
        }
      }
    }

    return result
  },
  // 树节点的数量
  treeNodeSize (tree, childName) {
    let result
    let child = []

    for (var i = 0; i < tree.length; i++) {
      if (tree[i][childName] && tree[i][childName].length) {
        let tmp = this.treeNodeSize(tree[i][childName], childName)

        child.push(tmp)
      }
    }

    let childTotal = child.reduce(function (sum, value) {
      return sum + value
    }, 0)

    result = i + childTotal

    return result
  },

  // dt转树形结构json
  toCatalogTreeJson (data) {
    if (!data) {
      return null
    }

    let tree = []
    try {
      // 删除所有children,防止多次调用
      data.forEach(function (item) {
        delete item.children
      })

      // 将数据存储为以id为key的map
      let map = {}
      data.forEach(function (item) {
        map[item.id] = item
      })
      // console.log(map);

      data.forEach(function (item) {
        // 以当前遍历项的pid,去map对象中找到索引的id
        let parent = map[item.parentid]

        // 好绕啊！ 如果找到了索引，那么此节点不是根节点,需要把此节点添加到他对应的父节点下
        if (parent) {
          (parent.children || (parent.children = [])).push(item)
        } else {
          // 如果在map中没有找到对应的索引ID,就直接把当前的item添加到val中，作为根节点
          tree.push(item)
        }
      })
    } catch (e) {
      console.log(e)
    }
    return tree
  },

  validateForm (formRef) {
    return new Promise((resolve, reject) => {
      formRef.validate((valid) => {
        if (valid) {
          return resolve(true)
        }
        return reject(false)
      })
    })
  },
  urlJoin (baseURL, path) {
    baseURL = baseURL.startsWith('http://') ? baseURL : `http://${baseURL}`
    baseURL = baseURL.endsWith('/') ? baseURL.substring(0, baseURL.length - 1) : baseURL
    path = path.startsWith('/') ? path : `/${path}`

    return `${baseURL}${path}`
  },
  loadCSS (url, insertBefore) {
    var l = document.createElement('link')
    l.setAttribute('rel', 'stylesheet')
    l.setAttribute('type', 'text/css')
    l.setAttribute('href', url)
    if (insertBefore) {
      if (insertBefore.nodeName && insertBefore.nodeType === 1) {
        return document.head.insertBefore(l, insertBefore)
      }
      document.head.insertBefore(l, document.head.firstElementChild)
    } else {
      document.head.appendChild(l)
    }
  },
  loadJS (url) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script')
      s.setAttribute('src', url)
      document.head.appendChild(s)
      s.onload = resolve
      s.onerror = reject
    })
  },
  // 简单的深度克隆，skip为要跳过的属性名
  assign (object, sources, skip) {
    for (let p in sources) {
      if (sources.hasOwnProperty(p) && p !== skip) {
        let o = sources[p]
        if (o && Array.isArray(o)) {
          object[p] = util.assign([], o, skip)
        } else if (o && typeof o === 'object' && o.constructor === Object) {
          object[p] = util.assign({}, o, skip)
        } else {
          object[p] = sources[p]
        }
      }
    }
    return object
  }

}

export default util
