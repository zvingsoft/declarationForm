const declarationAPI = {
  getDeclaration (pageindex, pagesize) {
    return axios
      .get('/api/declaration', {
        params: {
          pageindex,
          pagesize
        }
      })
      .then(res => res.data)
  },
  addDeclaration (declaration) {
    return axios.post('/api/declaration', declaration).then(res => res.data)
  },
  updateDeclaration (declaration) {
    return axios({
      method: 'put',
      url: '/api/declaration/' + declaration.id,
      data: declaration
    }).then(res => res.data)
  },
  deleteDeclaration (ids) {
    let strIds = ids.join(',')
    return axios.delete('/api/declaration/' + strIds).then(res => res.data)
  }
}

export default declarationAPI
