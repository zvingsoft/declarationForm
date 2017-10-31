const declarationAPI = {
  getDeclaration (obj) {
    console.log(obj)
    return axios
            .get('form/form', {
              params: {
                searchItem: obj
              }
            })
            .then(res => res.data)
  },
  cleanFields (declaration) {
    let arr = [
      'settlementType',
      'telephone',
      'shippingType',
      'importOrExportDate',
      'customsNumber',
      'purposeOrManufacturer',
      'entryUnit',
      'id',
      'declarationUnit',
      'forwardingUnit',
      'startOrArrivalCountry',
      'taxStatusName',
      'loadingOrFingerPort',
      'containerNumber',
      'auditStatus',
      'zipCode',
      'documents',
      'taxpaidOrNot',
      'shippingNumbers',
      'goodsNumber',
      'entryDate',
      'freight',
      'declarationDate',
      'taxDue',
      'shippingTools',
      'exemptionNature',
      'declarationType',
      'premium',
      'preentryNumber',
      'grossWeight',
      'importOrExportPort',
      'licenseKey',
      'transactionMethod',
      'managementUnit',
      'approvalNumber',
      'agreementNumber',
      'shippingMarksAndRemarks',
      'netWeight',
      'companyId',
      'recordNumber',
      'tradingType',
      'incidental',
      'declarationTypeName',
      'entryClerk',
      'destinationOrConsignmentPlace',
      'documentSattached',
      'fillingDate',
      'unitAddress',
      'auditStatusName',
      'packagingType',
      'packingList',
      'taxStatus',
      'customsBroker'
    ]
    for (let prop in declaration) {
      if (!arr.includes(prop)) {
        delete declaration[prop]
      }
    }
  },
  getDeclarationById (id) {
    return axios.get('/form/form/' + id).then(res => res.data)
  },
  addDeclaration (declaration) {
    declaration.packingList.forEach(item => delete item.id)
    this.cleanFields(declaration)
    console.log(declaration)
    return axios.post('/form/form', JSON.parse(JSON.stringify(declaration)))
  },
  updateDeclaration (declaration) {
    declaration.packingList.forEach(item => delete item.id)
    this.cleanFields(declaration)
    return axios.put('/form/form', JSON.parse(JSON.stringify(declaration)))
  },
  deleteDeclaration (ids) {
    let strIds = ids.join(',')
    return axios.delete('/form/form/' + strIds)
  },
  commitAudit (ids) {
    let strIds = ids.join(',')
    return axios.put('/form/audit', {
      ids: strIds,
      statu: 'W'
    })
  },
  getManifestData () {
    return axios.get('/manifest/manifest').then(res => res.data)
  }
}

export default declarationAPI
