import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
window.axiosMock =
  window.axiosMock || new AxiosMockAdapter(axios, { delayResponse: 10 })

const inlicensesData = [
  {
    id: '1',
    licensekey: '0039237',
    importandexportcode: '4401708383545',
    companyname: '华南信息产业集团有限公司',
    consignee: '华南信息产业集团有限公司',
    companyid: '1',
    exportingcountry: '香港',
    countryoforigin: '瑞士',
    portofclearance: '大连海关',
    trademode: '一般贸易',
    shippingtype: '海洋运输',
    goodstypeids: '2,3,4',
    goodstypes: '',
    conmpanyaddress: '',
    conmpanytype: '',
    legalrepresentative: '',
    competentdepartment: '',
    registeredcapital: '',
    certificationdate: '2010年02月5日',
    status: '核查无误'
  },
  {
    id: 2,
    licensekey: '0039238',
    importandexportcode: '4401708383546',
    companyname: '青岛啤酒集团有限公司',
    consignee: '青岛啤酒集团有限公司',
    companyid: '2',
    exportingcountry: '香港',
    countryoforigin: '新加坡',
    portofclearance: '青岛海关',
    trademode: '一般贸易',
    shippingtype: '海洋运输',
    goodstypeids: '2,3,4',
    goodstypes: '',
    conmpanyaddress: '',
    conmpanytype: '',
    legalrepresentative: '',
    competentdepartment: '',
    registeredcapital: '',
    certificationdate: '2012年02月15日',
    status: '待核查'
  },
  {
    id: 3,
    licensekey: '0039239',
    importandexportcode: '4401708383547',
    companyname: '包钢集团国际经济贸易有限公司',
    consignee: '包钢集团国际经济贸易有限公司',
    companyid: '3',
    exportingcountry: '香港',
    countryoforigin: '法国',
    portofclearance: '秦皇岛海关',
    trademode: '一般贸易',
    shippingtype: '海洋运输',
    goodstypeids: '2,3,4',
    goodstypes: '',
    conmpanyaddress: '',
    conmpanytype: '',
    legalrepresentative: '',
    competentdepartment: '',
    registeredcapital: '',
    certificationdate: '2012年12月5日',
    status: '核查无误'
  },
  {
    id: 4,
    licensekey: '0039240',
    importandexportcode: '4401708383548',
    companyname: '广东万事泰集团有限公司',
    consignee: '广东万事泰集团有限公司',
    companyid: '4',
    exportingcountry: '香港',
    countryoforigin: '德国',
    portofclearance: '上海海关',
    trademode: '一般贸易',
    shippingtype: '海洋运输',
    goodstypeids: '2,3,4',
    goodstypes: '',
    conmpanyaddress: '',
    conmpanytype: '',
    legalrepresentative: '',
    competentdepartment: '',
    registeredcapital: '',
    certificationdate: '2011年11月6日',
    status: '核查无误'
  },
  {
    id: 5,
    licensekey: '0039237',
    importandexportcode: '4401708383549',
    companyname: '合肥鑫晟光电科技有限公司',
    consignee: '合肥鑫晟光电科技有限公司',
    companyid: '5',
    exportingcountry: '香港',
    countryoforigin: '瑞士',
    portofclearance: '上海海关',
    trademode: '一般贸易',
    shippingtype: '海洋运输',
    goodstypeids: '2,3,4',
    goodstypes: '',
    conmpanyaddress: '',
    conmpanytype: '',
    legalrepresentative: '',
    competentdepartment: '',
    registeredcapital: '',
    certificationdate: '2009年11月6日',
    status: '核查不实'
  }
]

const outlicensesData = [
  {
    id: '1',
    licensekey: '0039237',
    importandexportcode: '4401708383545',
    companyname: '华南信息产业集团有限公司',
    consignor: '华南信息产业集团有限公司',
    companyid: '1',
    importedcountry: '瑞士',
    conractno: 'RDDE142',
    portofclearance: '大连海关',
    trademode: '一般贸易',
    shippingtype: '海洋运输',
    goodstypeids: '2,3,4',
    goodstypes: '',
    conmpanyaddress: '',
    conmpanytype: '',
    legalrepresentative: '',
    competentdepartment: '',
    registeredcapital: '',
    certificationdate: '2010年02月5日',
    status: '核查无误'
  },
  {
    id: 2,
    licensekey: '0039238',
    importandexportcode: '4401708383546',
    companyname: '青岛啤酒集团有限公司',
    consignor: '青岛啤酒集团有限公司',
    companyid: '2',
    importedcountry: '新加坡',
    conractno: 'RFFE142',
    portofclearance: '青岛海关',
    trademode: '一般贸易',
    shippingtype: '海洋运输',
    goodstypeids: '2,3,4',
    goodstypes: '',
    conmpanyaddress: '',
    conmpanytype: '',
    legalrepresentative: '',
    competentdepartment: '',
    registeredcapital: '',
    certificationdate: '2012年02月15日',
    status: '待核查'
  },
  {
    id: 3,
    licensekey: '0039239',
    importandexportcode: '4401708383547',
    companyname: '包钢集团国际经济贸易有限公司',
    consignor: '包钢集团国际经济贸易有限公司',
    companyid: '3',
    importedcountry: '法国',
    conractno: 'TGGFFG142',
    portofclearance: '秦皇岛海关',
    trademode: '一般贸易',
    shippingtype: '海洋运输',
    goodstypeids: '2,3,4',
    goodstypes: '',
    conmpanyaddress: '',
    conmpanytype: '',
    legalrepresentative: '',
    competentdepartment: '',
    registeredcapital: '',
    certificationdate: '2012年12月5日',
    status: '核查无误'
  },
  {
    id: 4,
    licensekey: '0039240',
    importandexportcode: '4401708383548',
    companyname: '广东万事泰集团有限公司',
    consignor: '广东万事泰集团有限公司',
    companyid: '4',
    importedcountry: '德国',
    conractno: 'TFFG142',
    portofclearance: '上海海关',
    trademode: '一般贸易',
    shippingtype: '海洋运输',
    goodstypeids: '2,3,4',
    goodstypes: '',
    conmpanyaddress: '',
    conmpanytype: '',
    legalrepresentative: '',
    competentdepartment: '',
    registeredcapital: '',
    certificationdate: '2011年11月6日',
    status: '核查无误'
  },
  {
    id: 5,
    licensekey: '0039237',
    importandexportcode: '4401708383549',
    companyname: '合肥鑫晟光电科技有限公司',
    consignor: '合肥鑫晟光电科技有限公司',
    companyid: '5',
    importedcountry: '西班牙',
    conractno: 'TFFG442',
    portofclearance: '上海海关',
    trademode: '一般贸易',
    shippingtype: '海洋运输',
    goodstypeids: '2,3,4',
    goodstypes: '',
    conmpanyaddress: '',
    conmpanytype: '',
    legalrepresentative: '',
    competentdepartment: '',
    registeredcapital: '',
    certificationdate: '2009年11月6日',
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

axiosMock.onGet(/api\/inlicense+$/).reply(res => {
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
axiosMock.onGet(/api\/outlicense+$/).reply(res => {
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

axiosMock.onGet(`/api/filelist1`).reply(200, {
  data: filelist1,
  status: 1,
  message: ''
})

axiosMock.onGet(`/api/filelist2`).reply(200, {
  data: filelist2,
  status: 1,
  message: ''
})

