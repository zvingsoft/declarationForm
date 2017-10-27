const taxRegisterAPI = {
  getTaxRegisterList (obj) {
    return axios
      .get('tax/taxRegister', {
        params: {
          searchItem: obj
        }
      })
      .then(res => res.data)
  },
  getTaxRegisterById (id) {
    return axios.get('/tax/taxRegister/' + id).then(res => res.data)
  },
  addTaxRegister (taxRegister) {
    console.log(taxRegister)
    return axios.post(
      '/tax/taxRegister',
      JSON.parse(JSON.stringify(taxRegister))
    )
  },
  updateTaxRegister (taxRegister) {
    return axios.put(
      '/tax/taxRegister',
      JSON.parse(JSON.stringify(taxRegister))
    )
  },
  deleteTaxRegister (ids) {
    let strIds = ids.join(',')
    console.log(strIds)
    console.log(ids)
    return axios.delete('/tax/taxRegister/' + strIds)
  },
  registerConfrim (ids) {
    let strIds = ids.join(',')
    console.log(strIds)
    console.log(ids)
    return axios.put('/tax/registerConfrim/' + strIds)
  },
  getUnregisterDeclaration (obj) {
    console.log(obj)
    return axios
      .get('form/unRegisterDeclaration', {
        params: {
          searchItem: obj
        }
      })
      .then(res => res.data)
  },
  getDeclarationByIds(ids){
    let strIds = ids.join(',')
    return axios.get('/form/taxRegister',{
      params:{
        ids:strIds
      }
    }).then(res => res.data)
  }
}

export default taxRegisterAPI
