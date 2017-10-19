const cottonQuotaAPI = {
  getCottonQuota (number, companyName, pageIndex, pageSize) {
    return axios
      .get('/api/cottonquota', {
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
    return axios.post('/api/cottonquota', cottonquota).then(res => res.data)
  },
  editCottonQuota (cottonquota) {
    return axios
      .put(`/api/cottonquota/${cottonquota.id}`, cottonquota)
      .then(res => res.data)
  },
  deleteCottonQuota (ids) {
    return axios.delete(`/api/cottonquota/${ids}`).then(res => res.data)
  },
  auditCottonQuota (pass, ids) {
    return axios
      .patch(`/api/cottonquota/${ids}`, {
        params: {
          pass: pass
        }
      })
      .then(res => res.data)
  }
}

export default cottonQuotaAPI
