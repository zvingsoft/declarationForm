const declarationAPI = {
  getDeclaration (obj) {
    return axios
      .get('form/form', {
        params: {
          searchItem: obj
        }
      })
      .then(res => res.data)
  },
  getDeclarationById (id) {
    return axios.get('/form/form/'+ id).then(res => res.data)
  },
  addDeclaration (declaration) {
    console.log(declaration)
    return axios
      .post('/form/form', JSON.parse(JSON.stringify(declaration)))
      .then(res => res.data)
  },
  updateDeclaration (declaration) {
    return axios
      .put('/form/form', JSON.parse(JSON.stringify(declaration)))
      .then(res => res.data)
  },
  deleteDeclaration (ids) {
    let strIds = ids.join(',')
    return axios.delete('/form/form/' + strIds)
  }
}

export default declarationAPI
