const processingTradeAPI = {
  getProcessingTradeList (pageIndex, pageSize) {
    return axios
      .get(`/api/processingtrade/${pageIndex}/${pageSize}`)
      .then(res => res.data)
  },
  getGoodsList () {
    return axios.get(`/api/goodslist`).then(res => res.data)
  }
}

export default processingTradeAPI
