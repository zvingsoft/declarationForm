// http请求代理，在获得请求响应时缓存数据，在离线时从缓存中取历史数据
import axios from 'axios'

const Request = {
  async get (url, config) {
    try {
      let res = await axios.get(url, config)
      return res
    } catch (err) {
      this.checkAuth(err)
    }
  },

  async post (url, data, config) {
    try {
      let res = await axios.post(url, data, config)
      return res
    } catch (err) {
      this.checkAuth(err)
    }
  },

  async put (url, data, config) {
    try {
      let res = await axios.put(url, data, config)
      return res
    } catch (err) {
      this.checkAuth(err)
    }
  },

  async delete (url, config) {
    try {
      let res = await axios.delete(url, config)
      return res
    } catch (err) {
      this.checkAuth(err)
    }
  },

  checkAuth (err) {
    if (err.message.includes('code 401')) {
      location.href = '/login.html'
    }
  }
}

export default Request
