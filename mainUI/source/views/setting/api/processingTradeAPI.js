const processingTradeAPI = {
  getProcessingTradeList (pageIndex, pageSize) {
    return axios
      .get(`/processingTrade/processingtrade`)
      .then(res => res.data)
  },
  getGoodsList () {
    return axios.get(`/processingTrade/goodslist`).then(res => res.data)
  },
  addFormData (model) {
    return axios.post(`/processingTrade/processingtrade`, model).then(res => res.data)
  },
  editFormData (model) {
    return axios.put(`/processingTrade/processingtrade`, model).then(res => res.data)
  },
  deleteDataList (ids) {
    let strIds = ids.join(',')
    return axios.delete(`/processingTrade/processingtrade/${strIds}`).then(res => res.data)
  }
}

export default processingTradeAPI
