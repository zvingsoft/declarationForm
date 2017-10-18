import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
window.axiosMock =
  window.axiosMock || new AxiosMockAdapter(axios, { delayResponse: 10 })

const licensesData = [
  {
    id: '1',
    licensekey: '0039237',
    importandexportcode: '4401708383545',
    companyname: '华南信息产业集团有限公司',
    companyid: '1',
    goodstypeids: '2,3,4',
    goodstypes: '',
    conmpanyaddress: '',
    conmpanytype: '',
    legalrepresentative: '',
    competentdepartment: '',
    registeredcapital: '',
    status: '1'
  },
  {
    id: 2,
    licensekey: '0039238',
    importandexportcode: '4401708383546',
    companyname: '青岛啤酒集团有限公司',
    companyid: '2',
    goodstypeids: '2,3,4',
    goodstypes: '',
    conmpanyaddress: '',
    conmpanytype: '',
    legalrepresentative: '',
    competentdepartment: '',
    registeredcapital: '',
    status: '0'
  },
  {
    id: 3,
    licensekey: '0039239',
    importandexportcode: '4401708383547',
    companyname: '包钢集团国际经济贸易有限公司',
    companyid: '3',
    goodstypeids: '2,3,4',
    goodstypes: '',
    conmpanyaddress: '',
    conmpanytype: '',
    legalrepresentative: '',
    competentdepartment: '',
    registeredcapital: '',
    status: '1'
  },
  {
    id: 4,
    licensekey: '0039240',
    importandexportcode: '4401708383548',
    companyname: '广东万事泰集团有限公司',
    companyid: '4',
    goodstypeids: '2,3,4',
    goodstypes: '',
    conmpanyaddress: '',
    conmpanytype: '',
    legalrepresentative: '',
    competentdepartment: '',
    registeredcapital: '',
    status: '1'
  },
  {
    id: 5,
    licensekey: '0039237',
    importandexportcode: '4401708383549',
    companyname: '合肥鑫晟光电科技有限公司',
    companyid: '5',
    goodstypeids: '2,3,4',
    goodstypes: '',
    conmpanyaddress: '',
    conmpanytype: '',
    legalrepresentative: '',
    competentdepartment: '',
    registeredcapital: '',
    status: '0'
  }
]

axiosMock.onGet('/api/licenses').reply(200, { data: licensesData });
axiosMock.onPost(/api\/licenses$/).reply(200, { status: 1, message: '添加成功！' });
axiosMock.onPut(/api\/licenses\/\d+$/).reply(200, {status: 1,message: '修改成功！'});
axiosMock.onDelete(/api\/licenses\/.+$/).reply(200, {status: 1,message: '删除成功！'});
