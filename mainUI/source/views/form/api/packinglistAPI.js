const packinglistAPI = {
  getPackingList (declarationid) {
    return axios
      .get('/api/declaration/packinglist', {
        params: {
          declarationid
        }
      })
      .then(res => res.data)
  },
  addPackingList (packinglist) {
    return axios
      .post('/api/declaration/packinglist', packinglist)
      .then(res => res.data)
  },
  updatePackingList (packinglist) {
    return axios({
      method: 'put',
      url: '/api/declaration/packinglist/' + packinglist.id,
      data: packinglist
    }).then(res => res.data)
  },
  deletePackingList (ids) {
    let strIds = ids.join(',')
    return axios
      .delete('/api/declaration/packinglist/' + strIds)
      .then(res => res.data)
  }
}

export default packinglistAPI
