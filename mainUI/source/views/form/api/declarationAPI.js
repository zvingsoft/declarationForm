const declarationAPI = {
  getDeclaration (obj) {
    console.log(obj)
    return axios
      .get('form/form', {
        params: {
          searchItem: obj
        }
      })
      .then(res => res.data)
  },
  getDeclarationById (id) {
    return axios.get('/form/form/' + id).then(res => res.data)
  },
  addDeclaration (declaration) {
    console.log(declaration)
    return axios.post('/form/form', JSON.parse(JSON.stringify(declaration)))
  },
  updateDeclaration (declaration) {
    return axios.put('/form/form', JSON.parse(JSON.stringify(declaration)))
  },
  deleteDeclaration (ids) {
    let strIds = ids.join(',')
    return axios.delete('/form/form/' + strIds)
  },
  commitAudit (ids) {
    let strIds = ids.join(',')
    return axios.put('/form/audit', {
      ids: strIds,
      statu: 'W'
    })
  }
}

export default declarationAPI
