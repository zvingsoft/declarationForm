const cottonQuotaAPI = {
  getCottonQuota (number, companyName, pageIndex, pageSize) {
    return axios
      .get('/cottonQuota/cottonQuota', {
        params: {
          number: number,
          companyName: companyName,
          pageIndex: pageIndex,
          pageSize: pageSize
        }
      })
      .then(res => res)
  },
  addCottonQuota (cottonquota) {
    return axios.post('/cottonQuota/cottonQuota', cottonquota).then(res => res)
  },
  editCottonQuota (cottonquota) {
    return axios.put(`/cottonQuota/cottonQuota/`, cottonquota).then(res => res)
  },
  deleteCottonQuota (ids) {
    return axios.delete(`/cottonQuota/cottonQuota/${ids}`).then(res => res)
  },
  auditCottonQuota (pass, ids) {
    return axios
      .patch(`/cottonQuota/cottonQuota/audit/${ids}/${pass}`)
      .then(res => res)
  }
}

export default cottonQuotaAPI
