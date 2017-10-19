var companys = {
  data: [
    {
      companyid: '100',
      companyname: '湖南顺风纺织厂',
      bankcreditrating: 'A+',
      allocation: '5000',
      used: '3000',
      address: '湖南省长沙市岳麓区麓谷企业广场',
      phone: '18887988987',
      fax: '86 519-85125379',
      postcode: '410000',
      addtime: '2017-10-18 19:23:23',
      adduser: '张三'
    },
    {
      companyid: '101',
      companyname: '河南顺风纺织厂',
      bankcreditrating: 'A+',
      allocation: '0',
      used: '0',
      address: '河南省长沙市岳麓区麓谷企业广场',
      phone: '13265748795',
      fax: '86 519-85125379',
      postcode: '488000',
      addtime: '2017-10-18 19:23:23',
      adduser: '张三'
    },
    {
      companyid: '102',
      companyname: '海南顺风纺织厂',
      bankcreditrating: 'B',
      allocation: '10000',
      used: '0',
      address: '海南省长沙市岳麓区麓谷企业广场',
      phone: '18779543209',
      fax: '86 519-85125379',
      postcode: '434000',
      addtime: '2017-10-18 19:23:23',
      adduser: '张三'
    }
  ],
  total: 3,
  status: 1,
  message: ''
}

var company = {
  data: {
    companyid: '100',
    companyname: '湖南顺风纺织厂',
    bankcreditrating: 'A+',
    allocation: '5000',
    used: '3000',
    address: '湖南省长沙市岳麓区麓谷企业广场',
    phone: '18887988987',
    fax: '86 519-85125379',
    postcode: '410000',
    addtime: '2017-10-18 19:23:23',
    adduser: '张三'
  },
  status: 1,
  message: '成功'
}

var companysforselect = {
  data: [
    {
      companyid: '100',
      companyname: '湖南顺风纺织厂'
    },
    {
      companyid: '101',
      companyname: '河南顺风纺织厂'
    },
    {
      companyid: '102',
      companyname: '海南顺风纺织厂'
    }
  ],
  status: 1,
  message: ''
}

axiosMock.onGet('/api/company').reply(200, companys)
axiosMock.onGet(/api\/company\/.+$/).reply(200, company)
axiosMock.onGet('/api/companyforselect').reply(200, companysforselect)
axiosMock.onPost(/api\/company$/).reply(200, { status: 1, message: '新建成功！' })
axiosMock
  .onPut(/api\/company\/\d+$/)
  .reply(200, { status: 1, message: '编辑成功！' })
axiosMock
  .onDelete(/api\/company\/.+$/)
  .reply(200, { status: 1, message: '删除成功！' })
axiosMock
  .onPatch(/api\/company\/.+$/)
  .reply(200, { status: 1, message: '设置成功！' })
