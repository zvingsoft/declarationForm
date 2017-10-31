const manifestAPI = {
  getManifestData () {
    return axios.get('manifest/manifest').then(res => {
      return res
    })
  },
  addManifest (manifest) {
    manifest.items.forEach(item => delete item.id)
    return axios.post('manifest/manifest', manifest).then(res => res)
  },
  editManifest (id, manifest) {
    manifest.items.forEach(item => delete item.id)
    return axios.put('manifest/manifest', manifest).then(res => res)
  },
  deleteManifests (ids) {
    let strIds = ids.join(',')
    return axios.delete(`/manifest/manifest/${strIds}`).then(res => res)
  },
  viewManifestsGoods (id) {
    return axios.get(`/manifest/manifest/${id}`).then(res => res)
  }
}

export default manifestAPI
