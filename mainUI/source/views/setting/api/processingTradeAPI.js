const processingTradeAPI = {
  getProcessingTradeList (pageIndex, pageSize) {
    return axios
      .get(`/api/processingtrade/${pageIndex}/${pageSize}`)
      .then(res => res.data)
  },
  getGoodsList () {
    return axios.get(`/api/goodslist`).then(res => res.data)
  },
  addFormData (model) {
    return axios.post(`/api/processingtrade`, model).then(res => res.data)
  },
  editFormData (model) {
    return axios.put(`/api/processingtrade`, model).then(res => res.data)
  },
  deleteDataList (ids) {
    let strIds = ids.join(',')
    return axios.delete(`/api/processingtrade/${strIds}`).then(res => res.data)
  }
}

export default processingTradeAPI
