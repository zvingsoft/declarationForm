const taxCuttingAPI = {
  getTaxCuttingData(pageindex,pagesize,largettype,smalltype,way,starttime,endtime) {
    return axios.get( `/api/taxcuttng`,{
        params: {
          pageindex,
          pagesize,
          largettype,
          smalltype,
          way,
          starttime,
          endtime,
          pageindex,
          pagesize
        }
      }
    ).then(res => res.data)
  },
  getLargeTypesData() {
    return axios.get( `/api/taxcuttng/largettypes`).then(res => res.data)
  },
  getSmallTypesData() {
    return axios.get( `/api/taxcuttng/smalltypes`).then(res => res.data)
  },
  getWaysData() {
    return axios.get( `/api/taxcuttng/ways`).then(res => res.data)
  },
  addTaxCuttingData(taxcuttng) {
    return axios.post(`/api/taxcuttng`,taxcuttng).then(res => res.data)
  },
  editTaxCuttingData(taxcuttng) {
    return axios.put(`/api/taxcuttng/${taxcuttng.id}`,taxcuttng).then(res => res.data)
  },
  deleteTaxCuttingData(ids) {
    let strIds = ids.join(',')
    return axios.delete(`/api/taxcuttng/${strIds}`).then(res => res.data)

  },
}
export default taxCuttingAPI
