const taxAPI = {
  getTaxData (taxnum,taxgoodstype,pageSize,pageIndex) {
    return axios.get('/api/taxs', {
      params: {
        taxnum: taxnum,
        taxgoodstype: taxgoodstype,
        pageSize:pageSize,
        pageIndex:pageIndex,
      }
    }).then(res => {
      return res.data
    })
  },
  addTax (tax) {
    return axios.post('/api/taxs', tax).then(res => res.data)
  },
  editTax (id, tax) {
    return axios.put('/api/taxs', tax).then(res => res.data)
  },
  deleteTaxs (ids) {
    let strIds = ids.join(',')
    return axios.delete(`/api/taxs/${strIds}`).then(res => res.data)
  }
}

export default taxAPI
