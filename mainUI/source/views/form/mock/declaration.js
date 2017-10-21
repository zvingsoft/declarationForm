import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
window.axiosMock =
  window.axiosMock || new AxiosMockAdapter(axios, { delayResponse: 10 })

const declaration = [
  {
    id: 1,
    declarationtype: 'import',
    declarationtypename: '进口报关单',
    preentrynumber: '22182011180354730',
    customsnumber: '22182011180354730',
    importorexportport: '外高桥关',
    recordnumber: '',
    importorexportdate: '2011-08-31',
    declarationdate: '2011-09-05',
    managementunit: '开德阜国际贸易(上海)有限公司',
    shippingtype: '保税区',
    shippingtools: '',
    shippingnumbers: '',
    forwardingunit: '开德阜国际贸易(上海)有限公司',
    tradingtype: '一般贸易',
    exemptionnature: '一般征税',
    settlementtype: '0%',
    licensekey: '',
    startorarrivalcountry: '中国',
    loadingorfingerport: '中国境内',
    destinationorconsignmentplace: '上海外高桥保税',
    approvalnumber: '',
    transactionmethod: 'CIF',
    freight: '000//',
    premium: '000//',
    incidental: '142/4000/3',
    agreementnumber: 'CSH1109001-T',
    goodsnumber: '2392',
    packagingtype: '其它',
    grossweight: '60720',
    netweight: '60193.28',
    containernumber: '0(0)',
    documentsattached: '',
    purposeormanufacturer: '',
    shippingmarksandremarks: '/0476/共361004其它/G5:成分含量:Cu:57.75~59%,Sb:0.0033~0.02%,As:0.0102~0.1%,Bi:0.0007~0.0013%,随附单证号：At 310720111252761100',
    taxpaidornot: '',
    entryclerk: 'SPB1',
    entryunit: '',
    customsbroker: '苑雯',
    declarationunit: '上海华生国际货物运输代理有限公司',
    unitaddress: '',
    zipcode: '',
    telephone: '',
    fillingdate: '2011-09-05 11:09:18',
    auditstatus: 'W',
    auditstatusname: '未审核',
    entrydate: '2017-10-18'
  },
  {
    id: 2,
    declarationtype: 'export',
    declarationtypename: '出口报关单',
    preentrynumber: '077785026',
    customsnumber: '520120060516236674',
    importorexportport: '埔老港办',
    recordnumber: '',
    importorexportdate: '2006-11-24',
    declarationdate: '2006-11-22',
    managementunit: '北海市铁山港区泰康珍珠制品厂',
    shippingtype: '江海运输',
    shippingtools: '佳航28/061124000000',
    shippingnumbers: 'JT0615237*',
    forwardingunit: '北海市铁山港区泰康珍珠制品厂',
    tradingtype: '一般贸易',
    exemptionnature: '一般征税',
    settlementtype: '电汇',
    licensekey: '',
    startorarrivalcountry: '日本',
    loadingorfingerport: '大阪',
    destinationorconsignmentplace: '北海',
    approvalnumber: '039113633',
    transactionmethod: 'FOB',
    freight: '',
    premium: '',
    incidental: '',
    agreementnumber: '20060901',
    goodsnumber: '20',
    packagingtype: '其它',
    grossweight: '1002',
    netweight: '1000',
    containernumber: '2',
    documentsattached: 'B',
    purposeormanufacturer: '',
    shippingmarksandremarks: '随附单证号：442100206076841  ，  集装箱号：YML06172166',
    taxpaidornot: '',
    entryclerk: '',
    entryunit: '',
    customsbroker: '',
    declarationunit: '广州市运达报关行黄埔分部',
    unitaddress: '',
    zipcode: '',
    telephone: '',
    fillingdate: '',
    auditstatus: 'Y',
    auditstatusname: '通过',
    entrydate: '2017-10-18'
  }
]

axiosMock.onGet(/api\/declaration+$/).reply(res => {
  let list = declaration
  let total = declaration.length
  let result = [
    200,
    {
      data: list,
      status: 1,
      message: '',
      total: total
    }
  ]

  result[1].data = list
  return result
})

const packinglist = [
  {
    id: '9403300090',
    declarationid: '1',
    name: '展台（品牌：AQUATHERM）  产品展示：木质板材，不是办公用  1.5x0.8x1M',
    number: '2.000件  40.16千克',
    productcountry: '德国',
    singleprice: '200',
    totalprice: '400',
    currency: '美元',
    exemption: '照章征税  其它'
  },
  {
    id: '4421909090',
    declarationid: '1',
    name: '展板  木质，三聚氰胺板，CYANURAMIDE  BOARD，否',
    number: '7.000个  200.000千克',
    productcountry: '德国',
    singleprice: '1250',
    totalprice: '8750',
    currency: '美元',
    exemption: '照章征税  其它'
  },
  {
    id: '508001090',
    declarationid: '2',
    name: '珍珠贝壳粒',
    number: '1000.000千克 0.000',
    productcountry: '日本',
    singleprice: '0.1900',
    totalprice: '190.00',
    currency: '美元',
    exemption: '照章征税  用途：其它'
  }
]

axiosMock.onGet(/api\/declaration\/packinglist+$/).reply(res => {
  let list = packinglist
  let result = [
    200,
    {
      data: '',
      status: 1,
      message: ''
    }
  ]

  if (
    typeof res.params.declarationid !== 'undefined' &&
    res.params.declarationid !== ''
  ) {
    list = list.filter(val => val.declarationid == res.params.declarationid)
    result[1].data = list
  }
  return result
})

axiosMock
  .onPut(/api\/declaration\/packinglist\/.+$/)
  .reply(200, { status: 1, message: '修改成功' })

axiosMock
  .onDelete(/api\/declaration\/packinglist\/.+$/)
  .reply(200, { status: 1, message: '删除成功' })

axiosMock.onPost('/api/declaration/packinglist').reply(200, {
  status: 1,
  message: '添加成功'
})

axiosMock
  .onPut(/api\/declaration\/auditing\/.+$/)
  .reply(200, { status: 1, message: '审核成功' })

axiosMock
  .onPut(/api\/declaration\/.+$/)
  .reply(200, { status: 1, message: '修改成功' })

axiosMock
  .onDelete(/api\/declaration\/.+$/)
  .reply(200, { status: 1, message: '删除成功' })

axiosMock.onPost('/api/declaration').reply(200, {
  status: 1,
  message: '添加成功',
  declaration: {
    id: Math.round(Math.random() * 10000)
  }
})
