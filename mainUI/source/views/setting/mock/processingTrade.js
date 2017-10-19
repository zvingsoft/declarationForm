import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
window.axiosMock =
  window.axiosMock || new AxiosMockAdapter(axios, { delayResponse: 10 })

const processingtradelist = [
  {
    id: '1',
    number: 'PC-23-FE',
    processCorp: '天津富强机械厂',
    commissionedCorp: '法国努比尔仪器厂',
    contract: '',
    material: '',
    feclaration: ''
  },
  {
    id: '2',
    number: 'PC-23-FE',
    processCorp: '天津富强机械厂',
    commissionedCorp: '法国努比尔仪器厂',
    contract: '',
    material: '',
    feclaration: ''
  }
]

const goodslist = [
  {
    itemNum: '1',
    productNum: '22042100.00',
    nameAndSpecifications: '温比亚凯罗酒庄红葡萄酒RUMBIA\n温比亚凯罗酒庄红葡萄酒RUMBIA\nCHATEAU CAZEAU | 鲜葡萄酿',
    quantityAndUnit: '1350升\n1350千克（305）\n1800瓶',
    originCountry: '法国',
    unitPrice: '200',
    totalPrice: '360000',
    currency: '欧元(300)',
    levy: '照章征税(1)'
  },
  {
    itemNum: '2',
    productNum: '22042100.00',
    nameAndSpecifications: '温比亚凯罗酒庄红葡萄酒RUMBIA\n温比亚凯罗酒庄红葡萄酒RUMBIA\nCHATEAU CAZEAU | 鲜葡萄酿',
    quantityAndUnit: '4950升\n4950千克（305）\n6600瓶',
    originCountry: '法国',
    unitPrice: '500',
    totalPrice: '3300000',
    currency: '欧元(300)',
    levy: '照章征税(1)'
  },
  {
    itemNum: '3',
    productNum: '22042100.00',
    nameAndSpecifications: '温比亚凯罗酒庄白葡萄酒RUMBIA\n温比亚凯罗酒庄白葡萄酒RUMBIA\nCHATEAU CAZEAU | 鲜葡萄酿',
    quantityAndUnit: '1350升\n1350千克（305）\n1800瓶',
    originCountry: '法国',
    unitPrice: '220',
    totalPrice: '396000',
    currency: '欧元(300)',
    levy: '照章征税(1)'
  },
  {
    itemNum: '4',
    productNum: '22042100.00',
    nameAndSpecifications: '温比亚凯罗酒庄白葡萄酒RUMBIA\n温比亚凯罗酒庄白葡萄酒RUMBIA\nCHATEAU CAZEAU | 鲜葡萄酿',
    quantityAndUnit: '1350升\n1350千克（305）\n1800瓶',
    originCountry: '法国',
    unitPrice: '220',
    totalPrice: '396000',
    currency: '欧元(300)',
    levy: '照章征税(1)'
  },
  {
    itemNum: '5',
    productNum: '22042100.00',
    nameAndSpecifications: '温比亚酒庄红葡萄酒RUMBIA VIN DE\n温比亚酒庄红葡萄酒RUMBIA VIN DE\nLA COMMUNAUTE | 鲜葡萄酿',
    quantityAndUnit: '4950升\n4950千克（305）\n6600瓶',
    originCountry: '法国',
    unitPrice: '500',
    totalPrice: '3300000',
    currency: '欧元(300)',
    levy: '照章征税(1)'
  },
  {
    itemNum: '6',
    productNum: '22042100.00',
    nameAndSpecifications: '凯罗干红葡萄酒KARLO VIN DE<br>凯罗干红葡萄酒KARLO VIN DE\nCOMMUNAUTE | 鲜葡萄酿造 | 酒精浓',
    quantityAndUnit: '10800升\n10800千克（305）\n14400瓶',
    originCountry: '法国',
    unitPrice: '10000',
    totalPrice: '144000000',
    currency: '欧元(300)',
    levy: '照章征税(1)'
  },
  {
    itemNum: '7',
    productNum: '22042100.00',
    nameAndSpecifications: '凯罗朗格多克干红葡萄酒KARLO\n凯罗朗格多克干红葡萄酒KARLO\nAOC LANGUEDOC | 鲜葡萄酿造 | 酒精',
    quantityAndUnit: '4050升\n4050千克（305）\n5400瓶',
    originCountry: '法国',
    unitPrice: '500',
    totalPrice: '2700000',
    currency: '欧元(300)',
    levy: '照章征税(1)'
  },
]

axiosMock.onGet(`/api/processingtrade`).reply(200, {
  data: processingtradelist,
  status: 1,
  message: ''
})

axiosMock.onGet(`/api/goodslist`).reply(200, {
  data: goodslist,
  status: 1,
  message: ''
})
