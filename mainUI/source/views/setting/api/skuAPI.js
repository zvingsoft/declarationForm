const skuAPI = {
  getSKU (searchWord) {
    if (typeof searchWord === 'undefined') {
      searchWord = ''
    }
    return axios
      .get('baseData/sku', {
        params: {
          searchWord
        }
      })
      .then(res => res.data)
  },
  getSKUById (id) {
    return axios.get('/baseData/sku/' + id).then(res => res.data)
  },
  addSKU (sku) {
    console.log(sku)
    return axios.post('/baseData/sku', JSON.parse(JSON.stringify(sku)))
  },
  updateSKU (sku) {
    return axios.put('/baseData/sku', JSON.parse(JSON.stringify(sku)))
  },
  deleteSKU (ids) {
    let strIds = ids.join(',')
    return axios.delete('/baseData/sku/' + strIds)
  }
}

export default skuAPI
