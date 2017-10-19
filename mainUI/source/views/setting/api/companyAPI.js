const companyAPI = {
  getCompany (companyName, pageIndex, pageSize) {
    return axios
      .get('/api/company', {
        params: {
          companyName: companyName,
          pageIndex: pageIndex,
          pageSize: pageSize
        }
      })
      .then(res => res.data)
  },
  getCompanyForSelect () {
    return axios.get('/api/companyforselect').then(res => res.data)
  },
  getCompanyDetail (id) {
    return axios.get(`/api/company/${id}`).then(res => res.data)
  },
  addCompany (company) {
    return axios.post('/api/company', company).then(res => res.data)
  },
  editCompany (company) {
    return axios
      .put(`/api/company/${company.companyid}`, company)
      .then(res => res.data)
  },
  deleteCompany (ids) {
    return axios.delete(`/api/company/${ids}`).then(res => res.data)
  },
  setConttonQuota (company) {
    return axios
      .patch(`/api/company/${company.companyid}`, company)
      .then(res => res.data)
  }
}

export default companyAPI
