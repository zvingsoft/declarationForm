import { Message, Loading, MessageBox, Notification } from 'element-ui';

const util = {
  title (title) {
    title = title ? title + ' - Slimdoc' : 'Slimdoc纤云文档'
    window.document.title = title
  },
  showMessage (res) {
    Message({
      message: res.data.message,
      type: res.data.status == 1 ? 'success' : 'error'
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
    let result, child = []

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
  // 验证表单
  validateForm (formRef) {
    return new Promise((resolve, reject) => {
      formRef.validate((valid) => {
        if (valid) {
          return resolve(true)
        }
        return reject('没有正确填写表单项！')
      })
    })
  },
  // 下载文件
  downloadFile (fileURL, filename) {
    return window.axios.get(fileURL, {
      responseType: 'blob'
    }).then(res => res.data).then(blob => {
      let link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      // URL.revokeObjectURL(url);
    });
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
  }
}

export default util
