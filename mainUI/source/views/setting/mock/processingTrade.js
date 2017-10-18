import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
window.axiosMock =
  window.axiosMock || new AxiosMockAdapter(axios, { delayResponse: 10 })

const processingtradelist = [
  {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
    e: 'e',
    f: 'f',
    g: 'g',
    h: 'h'
  },
  {}
]

axiosMock.onGet(`/api/processingtrade`).reply(200, {
  data: processingtradelist,
  status: 1,
  message: ''
})
