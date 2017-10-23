const taxCuttingAPI = {
  getTaxCuttingData() {
    return axios.get( `/taxCutting/taxcutting`).then(res => res.data)
  },
 /*  getTaxCuttingData(pageindex,pagesize,largettype,smalltype,way,starttime,endtime) {
    return axios.get( `/taxCutting/taxcutting`,{
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
  }, */
 /*  getLargeTypesData() {
    return axios.get( `/api/taxcutting/largettypes`).then(res => res.data)
  },
  getSmallTypesData() {
    return axios.get( `/api/taxcutting/smalltypes`).then(res => res.data)
  },
  getWaysData() {
    return axios.get( `/api/taxcutting/ways`).then(res => res.data)
  }, */
  addTaxCuttingData(taxcutting) {
    return axios.post(`/taxCutting/taxcutting`,taxcutting).then(res => res.data)
  },
  editTaxCuttingData(taxcutting) {
    return axios.put(`/taxCutting/taxcutting`,taxcutting).then(res => res.data)
  },
  deleteTaxCuttingData(ids) {
    let strIds = ids.join(',')
    return axios.delete(`/taxCutting/taxcutting/${strIds}`).then(res => res.data)

  },
}
export default taxCuttingAPI
