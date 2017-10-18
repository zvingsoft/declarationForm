/* global localStorage*/
import Vue from 'vue'
import axios from 'axios'
import ELEMENT from 'element-ui'

axios.defaults.baseURL = localStorage.serverhost || ''
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCredentials = true

Vue.use(ELEMENT)
new Vue({
  el: '#app',
  data: {
    username: localStorage.username || '',
    password: '',
    executing: false
  },
  methods: {
    async login () {
      if (!this.username) {
        this.$message({
          message: '用户名必须填写!',
          type: 'warning'
        })
        return
      }
      if (!this.password) {
        this.$message({
          message: '密码必须填写!',
          type: 'warning'
        })
        return
      }
      localStorage.username = this.username
      let data = { UserName: this.username, Password: this.password }
      this.executing = true
      try {
        let res = await axios.post('login', data)
        if (res.data.status === 1) {
          localStorage.logined = '1'
          window.location = 'index.html'
        } else {
          this.$message({
            message: res.data.message,
            type: 'error'
          })
          this.executing = false
        }
      } catch (err) {
        this.$message({
          message: err.message,
          type: 'error'
        })
        this.executing = false
      }
    }
  }
})
