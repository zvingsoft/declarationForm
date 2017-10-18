const licenseAPI = {
  getLicenseData () {
    return axios.get('/api/licenses').then(data => {
      return data.data
    })
  },
  addLicense (license) {
    return axios.post('/api/licenses', todo).then(res => res.data)
  },
  editLicense (id, todo) {
    return axios.put(`/api/licenses/${id}`, todo).then(res => res.data)
  },
  deleteLicenses (ids) {
    let strIds = ids.join(',')
    return axios.delete(`/api/licenses/${strIds}`).then(res => res.data)
  }
}

export default licenseAPI
