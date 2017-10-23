import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
window.axiosMock =
  window.axiosMock || new AxiosMockAdapter(axios, { delayResponse: 10 })

const inlicensesData = [
  {
    id: '1',
    licensekey: '0039237',
    importAndExportcode: '4401708383545',
    companyName: '华南信息产业集团有限公司',
    consignee: '华南信息产业集团有限公司',
    companyId: '1',
    exportingCountry: '香港',
    countryOfOrigin: '瑞士',
    portOfClearance: '大连海关',
    tradeMode: '一般贸易',
    shippingType: '海洋运输',
    goodsTypeIds: '2,3,4',
    goodsTypes: '',
    sku: '',
    count: '',
    companyAddress: '',
    companyType: '',
    legalrepresentative: '',
    competentDepartment: '',
    registeredCapital: '',
    certificationdate: '2010年02月5日',
    type: 'in',
    status: '核查无误'
  },
  {
    id: 2,
    licensekey: '0039238',
    importAndExportcode: '4401708383546',
    companyName: '青岛啤酒集团有限公司',
    consignee: '青岛啤酒集团有限公司',
    companyId: '2',
    exportingCountry: '香港',
    countryOfOrigin: '新加坡',
    portOfClearance: '青岛海关',
    tradeMode: '一般贸易',
    shippingType: '海洋运输',
    goodsTypeIds: '2,3,4',
    goodsTypes: '',
    sku: '',
    count: '',
    conmpanyaddress: '',
    companyType: '',
    legalrepresentative: '',
    competentDepartment: '',
    registeredCapital: '',
    certificationdate: '2012年02月15日',
    type: 'in',
    status: '待核查'
  },
  {
    id: 3,
    licensekey: '0039239',
    importAndExportcode: '4401708383547',
    companyName: '包钢集团国际经济贸易有限公司',
    consignee: '包钢集团国际经济贸易有限公司',
    companyId: '3',
    exportingCountry: '香港',
    countryOfOrigin: '法国',
    portOfClearance: '秦皇岛海关',
    tradeMode: '一般贸易',
    shippingType: '海洋运输',
    goodsTypeIds: '2,3,4',
    goodsTypes: '',
    sku: '',
    count: '',
    conmpanyaddress: '',
    companyType: '',
    legalrepresentative: '',
    competentDepartment: '',
    registeredCapital: '',
    certificationdate: '2012年12月5日',
    type: 'in',
    status: '核查无误'
  },
  {
    id: 4,
    licensekey: '0039240',
    importAndExportcode: '4401708383548',
    companyName: '广东万事泰集团有限公司',
    consignee: '广东万事泰集团有限公司',
    companyId: '4',
    exportingCountry: '香港',
    countryOfOrigin: '德国',
    portOfClearance: '上海海关',
    tradeMode: '一般贸易',
    shippingType: '海洋运输',
    goodsTypeIds: '2,3,4',
    goodsTypes: '',
    sku: '',
    count: '',
    conmpanyaddress: '',
    companyType: '',
    legalrepresentative: '',
    competentDepartment: '',
    registeredCapital: '',
    certificationdate: '2011年11月6日',
    type: 'in',
    status: '核查无误'
  },
  {
    id: 5,
    licensekey: '0039237',
    importAndExportcode: '4401708383549',
    companyName: '合肥鑫晟光电科技有限公司',
    consignee: '合肥鑫晟光电科技有限公司',
    companyId: '5',
    exportingCountry: '香港',
    countryOfOrigin: '瑞士',
    portOfClearance: '上海海关',
    tradeMode: '一般贸易',
    shippingType: '海洋运输',
    goodsTypeIds: '2,3,4',
    goodsTypes: '',
    sku: '',
    count: '',
    conmpanyaddress: '',
    companyType: '',
    legalrepresentative: '',
    competentDepartment: '',
    registeredCapital: '',
    certificationdate: '2009年11月6日',
    type: 'in',
    status: '核查不实'
  }
]

const outlicensesData = [
  {
    id: 11,
    licensekey: '0039237',
    importAndExportcode: '4401708383545',
    companyName: '华南信息产业集团有限公司',
    consignor: '华南信息产业集团有限公司',
    companyId: '1',
    importedCountry: '瑞士',
    conractno: 'RDDE142',
    portOfClearance: '大连海关',
    tradeMode: '一般贸易',
    shippingType: '海洋运输',
    goodsTypeIds: '2,3,4',
    goodsTypes: '',
    sku: '',
    count: '',
    conmpanyaddress: '',
    companyType: '',
    legalrepresentative: '',
    competentDepartment: '',
    registeredCapital: '',
    certificationdate: '2010年02月5日',
    type: 'out',
    status: '核查无误'
  },
  {
    id: 12,
    licensekey: '0039238',
    importAndExportcode: '4401708383546',
    companyName: '青岛啤酒集团有限公司',
    consignor: '青岛啤酒集团有限公司',
    companyId: '2',
    importedCountry: '新加坡',
    conractno: 'RFFE142',
    portOfClearance: '青岛海关',
    tradeMode: '一般贸易',
    shippingType: '海洋运输',
    goodsTypeIds: '2,3,4',
    goodsTypes: '',
    sku: '',
    count: '',
    conmpanyaddress: '',
    companyType: '',
    legalrepresentative: '',
    competentDepartment: '',
    registeredCapital: '',
    certificationdate: '2012年02月15日',
    type: 'out',
    status: '待核查'
  },
  {
    id: 13,
    licensekey: '0039239',
    importAndExportcode: '4401708383547',
    companyName: '包钢集团国际经济贸易有限公司',
    consignor: '包钢集团国际经济贸易有限公司',
    companyId: '3',
    importedCountry: '法国',
    conractno: 'TGGFFG142',
    portOfClearance: '秦皇岛海关',
    tradeMode: '一般贸易',
    shippingType: '海洋运输',
    goodsTypeIds: '2,3,4',
    goodsTypes: '',
    sku: '',
    count: '',
    conmpanyaddress: '',
    companyType: '',
    legalrepresentative: '',
    competentDepartment: '',
    registeredCapital: '',
    certificationdate: '2012年12月5日',
    type: 'out',
    status: '核查无误'
  },
  {
    id: 14,
    licensekey: '0039240',
    importAndExportcode: '4401708383548',
    companyName: '广东万事泰集团有限公司',
    consignor: '广东万事泰集团有限公司',
    companyId: '4',
    importedCountry: '德国',
    conractno: 'TFFG142',
    portOfClearance: '上海海关',
    tradeMode: '一般贸易',
    shippingType: '海洋运输',
    goodsTypeIds: '2,3,4',
    goodsTypes: '',
    sku: '',
    count: '',
    conmpanyaddress: '',
    companyType: '',
    legalrepresentative: '',
    competentDepartment: '',
    registeredCapital: '',
    certificationdate: '2011年11月6日',
    type: 'out',
    status: '核查无误'
  },
  {
    id: 15,
    licensekey: '0039237',
    importAndExportcode: '4401708383549',
    companyName: '合肥鑫晟光电科技有限公司',
    consignor: '合肥鑫晟光电科技有限公司',
    companyId: '5',
    importedCountry: '西班牙',
    conractno: 'TFFG442',
    portOfClearance: '上海海关',
    tradeMode: '一般贸易',
    shippingType: '海洋运输',
    goodsTypeIds: '2,3,4',
    goodsTypes: '',
    sku: '',
    count: '',
    conmpanyaddress: '',
    companyType: '',
    legalrepresentative: '',
    competentDepartment: '',
    registeredCapital: '',
    certificationdate: '2009年11月6日',
    type: 'out',
    status: '核查不实'
  }
]
const filelist1 = [
  {
    id: '1',
    name: '项目申报文件.doc'
  },
  {
    id: '2',
    name: '项目附件.doc',
    content: ''
  }
]

const filelist2 = [
  {
    id: '1',
    name: '审批文件.doc'
  },
  {
    id: '2',
    name: '附件.doc',
    content: ''
  }
]

axiosMock.onGet(/license\/inlicense+$/).reply(res => {
  let list = inlicensesData
  let total = inlicensesData.length
  let result = [
    200,
    {
      data: list,
      status: 1,
      message: '',
      total: total
    }
  ]
  return result
})

axiosMock.onPost('/license/license').reply(200, {
  status: 1,
  message: '添加成功'
})

axiosMock.onPut(/license\/license\/.+$/)
.reply(200, { status: 1, message: '修改成功' })

axiosMock
.onDelete(/license\/license\/.+$/)
.reply(200, { status: 1, message: '删除成功' })

axiosMock.onGet(/license\/outlicense+$/).reply(res => {
  let list = outlicensesData
  let total = outlicensesData.length
  let result = [
    200,
    {
      data: list,
      status: 1,
      message: '',
      total: total
    }
  ]
  return result
})

axiosMock.onGet(`/license/filelist1`).reply(200, {
  data: filelist1,
  status: 1,
  message: ''
})

axiosMock.onGet(`/license/filelist2`).reply(200, {
  data: filelist2,
  status: 1,
  message: ''
})

const licensegoods = [
  {
    id: '1',
    licenseid: '1',
    specification:'110CC',
    unit:'台',
    quantity:'*110.0',
    unitprice:'*200',
    amount:'*22 000',
    amountinusd:'$22 000'
  },
  {
    id: '2',
    licenseid: '1',
    specification:'110CC',
    unit:'台',
    quantity:'*100.0',
    unitprice:'*131.5000',
    amount:'*13 150',
    amountinusd:'$13 150'
  },
  {
    id: '3',
    licenseid: '2',
    specification:'110CC',
    unit:'台',
    quantity:'*110.0',
    unitprice:'*200',
    amount:'*22 000',
    amountinusd:'$22 000'
  },
  {
    id: '4',
    licenseid: '3',
    specification:'110CC',
    unit:'台',
    quantity:'*100.0',
    unitprice:'*131.5000',
    amount:'*13 150',
    amountinusd:'$13 150'
  },
  {
    id: '5',
    licenseid: '4',
    specification:'110CC',
    unit:'台',
    quantity:'*110.0',
    unitprice:'*200',
    amount:'*22 000',
    amountinusd:'$22 000'
  },
  {
    id: '6',
    licenseid: '4',
    specification:'110CC',
    unit:'台',
    quantity:'*100.0',
    unitprice:'*131.5000',
    amount:'*13 150',
    amountinusd:'$13 150'
  },
  {
    id: '7',
    licenseid: '4',
    specification:'110CC',
    unit:'台',
    quantity:'*110.0',
    unitprice:'*200',
    amount:'*22 000',
    amountinusd:'$22 000'
  },
  {
    id: '8',
    licenseid: '5',
    specification:'110CC',
    unit:'台',
    quantity:'*100.0',
    unitprice:'*131.5000',
    amount:'*13 150',
    amountinusd:'$13 150'
  }
]

axiosMock.onGet(/license\/license\/goods+$/).reply(res => {
  let list = licensegoods
  let result = [
    200,
    {
      data: '',
      status: 1,
      message: ''
    }
  ]

  if (
    typeof res.params.licenseid !== 'undefined' &&
    res.params.licenseid !== ''
  ) {
    list = list.filter(val => val.licenseid == res.params.licenseid)
    result[1].data = list
  }
  return result
})

axiosMock
  .onPut(/license\/license\/goods\/.+$/)
  .reply(200, { status: 1, message: '修改成功' })

axiosMock
  .onDelete(/license\/license\/goods\/.+$/)
  .reply(200, { status: 1, message: '删除成功' })

axiosMock.onPost('/license/license/goods').reply(200, {
  status: 1,
  message: '添加成功'
})
