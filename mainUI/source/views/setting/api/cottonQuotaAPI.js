const cottonQuotaAPI = {
  getCottonQuota (number, companyName, pageIndex, pageSize) {
    return axios
      .get('/api/cottonQuota', {
        params: {
          number: number,
          companyName: companyName,
          pageIndex: pageIndex,
          pageSize: pageSize
        }
      })
      .then(res => res.data)
  },
  addCottonQuota (cottonquota) {
    return axios.post('/api/cottonQuota', cottonquota).then(res => res.data)
  },
  editCottonQuota (cottonquota) {
    return axios.put(`/api/cottonQuota/`, cottonquota).then(res => res.data)
  },
  deleteCottonQuota (ids) {
    return axios.delete(`/api/cottonQuota/${ids}`).then(res => res.data)
  },
  auditCottonQuota (pass, ids) {
    return axios
      .patch(`/api/cottonQuota/audit/${ids}/${pass}`)
      .then(res => res.data)
  }
}

export default cottonQuotaAPI
