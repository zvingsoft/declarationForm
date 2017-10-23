const auditingAPI = {
  doAuditing (ids, statu) {
    console.log(ids);
    let strIds = ids.join(',')
    return axios.put('/form/audit', {
        ids: strIds,
        statu: statu
    })
  },
  getDeclaration (obj) {
    console.log(obj)
    return axios
      .get('form/audit', {
        params: {
          searchItem: obj
        }
      })
      .then(res => res.data)
  }
}

export default auditingAPI
