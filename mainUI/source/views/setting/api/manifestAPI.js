const manifestAPI = {
  getManifestData () {
    return axios.get('manifest/manifest').then(res => {
      return res
    })
  },
  addManifest (manifest) {
    this.cleanFields(manifest)
    return axios.post('manifest/manifest', manifest).then(res => res)
  },
  editManifest (id, manifest) {
    this.cleanFields(manifest)
    return axios.put('manifest/manifest', manifest).then(res => res)
  },
  deleteManifests (ids) {
    let strIds = ids.join(',')
    return axios.delete(`/manifest/manifest/${strIds}`).then(res => res)
  },
  viewManifestsGoods (id) {
    return axios.get(`/manifest/manifest/${id}`).then(res => res)
  },
  cleanFields (obj) {
    obj.items.forEach(item => delete item.id)
    let arr = [
      'items',
      'goodsName',
      'status',
      'telephone',
      'location',
      'manifestNum',
      'receivePerson',
      'receiveCompany',
      'id',
      'sendAddress'
    ]
    for (let prop in obj) {
      if (!arr.includes(prop)) {
        delete obj[prop]
      }
    }
  }
}

export default manifestAPI
