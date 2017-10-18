const processingTradeAPI = {
  getProcessingTradeList () {
    return axios.get(`/api/processingtrade`).then(res => res.data)
  }
}

export default processingTradeAPI
