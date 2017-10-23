const companyAPI = {
  getCompany (name, pageIndex, pageSize) {
    return axios
      .get('/baseData/company', {
        params: {
          name: name,
          pageIndex: pageIndex,
          pageSize: pageSize
        }
      })
      .then(res => res)
  },
  getCompanyForSelect () {
    return axios.get('/baseData/companyforselect').then(res => res)
  },
  getCompanyDetail (id) {
    return axios.get(`/baseData/company/${id}`).then(res => res)
  },
  addCompany (company) {
    return axios.post('/baseData/company', company).then(res => res)
  },
  editCompany (company) {
    return axios.put(`/baseData/company/`, company).then(res => res)
  },
  deleteCompany (ids) {
    return axios.delete(`/baseData/company/${ids}`).then(res => res)
  },
  setConttonQuota (company) {
    return axios
      .patch(`/baseData/company/${company.id}`, company)
      .then(res => res)
  }
}

export default companyAPI
