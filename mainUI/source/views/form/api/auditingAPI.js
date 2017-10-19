const auditingAPI = {
  doAuditing (declarationid, opt) {
    return axios({
      method: 'put',
      url: '/api/declaration/auditing/' + declarationid,
      data: opt
    }).then(res => res.data)
  }
}

export default auditingAPI
