const packinglistAPI = {
  getPackingList (declarationid) {
    console.log(declarationid)
    return axios
      .get('/api/declaration/packinglist/list/' + declarationid)
      .then(res => res.data)
  },
  getPackingListById (id) {
    return axios.get('/api/declaration/packinglist/' + id).then(res => res.data)
  },
  addPackingList (packinglist) {
    console.log(packinglist)
    return axios
      .post(
        '/api/declaration/packinglist',
        JSON.parse(JSON.stringify(packinglist))
      )
      .then(res => res.data)
  },
  updatePackingList (packinglist) {
    return axios
      .put(
        '/api/declaration/packinglist',
        JSON.parse(JSON.stringify(packinglist))
      )
      .then(res => res.data)
  },
  deletePackingList (ids) {
    let strIds = ids.join(',')
    return axios
      .delete('/api/declaration/packinglist/' + strIds)
      .then(res => res.data)
  }
}

export default packinglistAPI
