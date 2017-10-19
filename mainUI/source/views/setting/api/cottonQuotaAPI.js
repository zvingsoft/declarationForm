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
    let strIds = ids.join(',')
    return axios.delete(`/api/cottonquota/${strIds}`).then(res => res.data)
  }
}

export default cottonQuotaAPI
