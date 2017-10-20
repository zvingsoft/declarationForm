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
  },
  getLicenseGoods (licenseid) {
    return axios
      .get('/api/license/goods', {
        params: {
          licenseid
        }
      })
      .then(res => res.data)
  },
  addLicenseGoods (licensegoods) {
    return axios
      .post('/api/license/goods', licensegoods)
      .then(res => res.data)
  },
  updateLicenseGoods (licensegoods) {
    return axios({
      method: 'put',
      url: '/api/license/goods/' + licensegoods.id,
      data: licensegoods
    }).then(res => res.data)
  },
  deleteLicenseGoods (ids) {
    let strIds = ids.join(',')
    return axios
      .delete('/api/license/goods/' + strIds)
      .then(res => res.data)
  }
}

export default licenseAPI
