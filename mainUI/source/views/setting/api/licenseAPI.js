const licenseAPI = {
  getInlicenseList (search) {
    return axios
      .get('/api/inlicense', {
        params: {search}
      })
      .then(res => res.data)
  },

  getOutlicenseList (search) {
    return axios
      .get('/api/outlicense', {
        params: {search}
      })
      .then(res => res.data)
  },

  getfileList1 () {
    return axios.get(`/api/filelist1`).then(res => res.data)
  },

  getfileList2 () {
    return axios.get(`/api/filelist2`).then(res => res.data)
  }
}

export default licenseAPI
