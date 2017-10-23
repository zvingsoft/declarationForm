const taxAPI = {
  getTaxData () {
    return axios.get('/tax/taxrate').then(res => {
      return res
    })
  },
  addTax (tax) {
    return axios.post('/tax/taxrate', tax).then(res => res.data)
  },
  editTax (id, tax) {
    return axios.put('/tax/taxrate', tax).then(res => res.data)
  },
  deleteTaxs (ids) {
    let strIds = ids.join(',')
    return axios.delete(`/tax/taxrate/${strIds}`).then(res => res.data)
  }
}

export default taxAPI
