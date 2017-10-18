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

axiosMock.onGet(`/api/processingtrade`).reply(200, {
  data: processingtradelist,
  status: 1,
  message: ''
})
