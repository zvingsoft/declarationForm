const taxAPI = {
  getTaxData () {
    return axios.get('/api/taxs').then(res => {
      return res.data
    })
  },
  addTax (tax) {
    return axios.post('/api/taxs', tax).then(res => res.data)
  },
  editTax (id, tax) {
    return axios.put(`/api/taxs/${id}`, tax).then(res => res.data)
  },
  deleteTaxs (ids) {
    let strIds = ids.join(',')
    return axios.delete(`/api/taxs/${strIds}`).then(res => res.data)
  }
}

export default taxAPI
