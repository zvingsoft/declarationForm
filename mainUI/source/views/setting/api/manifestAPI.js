const manifestAPI = {
  getManifestData () {
    return axios.get('/api/manifests').then(res => {
      return res.data
    })
  },
  addManifest (manifest) {
    return axios.post('/api/manifests', manifest).then(res => res.data)
  },
  editManifest (id, manifest) {
    return axios.put(`/api/manifests/${id}`, manifest).then(res => res.data)
  },
  deleteManifests (ids) {
    let strIds = ids.join(',')
    return axios.delete(`/api/manifests/${strIds}`).then(res => res.data)
  },
  viewManifestsGoods (id) {
    return axios.get(`/api/manifests/viewgoods/${id}`).then(res => res.data)
  }
}

export default manifestAPI
