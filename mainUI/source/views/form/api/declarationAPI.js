const declarationAPI = {
  getDeclaration (obj) {
    for(let i in obj){
      obj[i] = encodeURI(encodeURI(obj[i]))
    }
    return axios
      .get('/api/declaration/list/' + JSON.stringify(obj))
      .then(res => res.data)
  },
  getDeclarationById (id) {
    return axios.get('/api/declaration/' + id).then(res => res.data)
  },
  addDeclaration (declaration) {
    console.log(declaration)
    return axios
      .post('/api/declaration', JSON.parse(JSON.stringify(declaration)))
      .then(res => res.data)
  },
  updateDeclaration (declaration) {
    return axios
      .put('/api/declaration', JSON.parse(JSON.stringify(declaration)))
      .then(res => res.data)
  },
  deleteDeclaration (ids) {
    let strIds = ids.join(',')
    return axios.delete('/api/declaration/' + strIds).then(res => res.data)
  }
}

export default declarationAPI
