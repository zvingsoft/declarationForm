import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
window.axiosMock =
  window.axiosMock || new AxiosMockAdapter(axios, { delayResponse: 10 })

const manifestsData = [
  {
    id: 1,
    manifestnum: 'QWERT1',
    receivecompany: '优衣库',
    goodsname: '男士休闲裤,外套,针织衫等',
    sendaddress: '日本东京',
    receiveperson: '张三',
    telephone: '010-34235345'
  },
  {
    id: 2,
    manifestnum: 'TREWQ2',
    receivecompany: '金利来',
    goodsname: '男士商务正装、休闲服饰、内衣',
    sendaddress: '中国香港',
    receiveperson: '张三',
    telephone: '010-888888'
  },
  {
    id: 3,
    manifestnum: 'ASDFG3',
    receivecompany: '三星智能手机',
    goodsname: '电子、金融、机械、化学等',
    sendaddress: '韩国首页',
    receiveperson: '李四',
    telephone: '010-66666'
  },
  {
    id: 4,
    manifestnum: 'KJHFGFG4',
    receivecompany: 'H&M',
    goodsname: '服装等',
    sendaddress: '瑞典',
    receiveperson: '王五',
    telephone: '010-09824545'
  }
]

function random (items) {
  return items[parseInt(items.length * Math.random())]
}
axiosMock.onGet('/api/manifests').reply(200, { data: manifestsData })
axiosMock.onPost(/api\/manifests$/).reply(200, { status: 1, message: '新建成功！' })
axiosMock
  .onPut(/api\/manifests\/\d+$/)
  .reply(200, { status: 1, message: '编辑成功！' })
axiosMock
  .onDelete(/api\/manifests\/.+$/)
  .reply(200, { status: 1, message: '删除成功！' })

var manifestGoodsInfo = [
  '正装系列包括衬衫、T恤、西装、西裤、休闲裤、夹克、棉褛、毛衣及服饰(含领带、皮具、领带夹、礼盒等)。高尔夫系列运动休闲系列，包括衬衫、T恤、休闲裤、夹克、毛衣等；内衣系列 家居服及内衣系列，包括男女内衣、内裤、家居服、睡衣、浴袍等；皮具系列(特许经营)包括男女皮鞋、皮包(特许经营)。',
  '包括啤酒、葡萄酒（香槟酒）、黄酒、果酒、清酒、米酒、白兰地、威士忌、伏特加、朗姆酒、金酒、白酒、药酒、保健酒、鸡尾酒、利口酒、龙舌兰、柯迪尔酒、梅子酒等用粮食、水果等含淀粉或糖的物质发酵或配制而制成的含乙醇的酒精饮料',
  '三星手机、电视、数码影音、电脑办公及BSV液晶拼接屏.主要业务为制造电子零件装备、军用飞机零组件（与电子领域重复）三星火灾海上保险：主要业务为人寿保险和金融服务。',
  '洗护用品：包括清洁用品、护肤用品、护发用品和其他洗护用品。清洁用品：洗面奶（乳、皂）、洁面霜（露、蜜、粉、者哩）、卸妆水（乳、膏、液、油）、鼻贴膜、去黑头膏（液）、剃须膏（泡沫）、磨砂膏、按摩膏、去角质膏（粉），牙膏、牙粉、牙线、漱口水，香皂、浴液、洗手液；护肤用品：化妆水（含爽肤水、柔肤水、紧肤水、护肤水、收缩水）、须后水、面霜、眼霜、日霜、晚霜、冷霜、防晒霜（油）、晒黑油、祛斑霜、护肤膏（霜、露、乳液、喷雾）、精油、隔离霜、面膜、面膜膏（粉）、眼膜、颈膜、护手霜、润唇膏，痱子粉、爽身粉、防蚊液、皮肤护理软膏；护发用品：洗/护发液、发乳、发油、发蜡、焗油膏、发胶、发泥、定型水（啫哩、摩丝）、烫发剂、染发剂；其他用品：丰（美、健）乳霜、纤体霜（膏）、健美霜、紧致霜、除臭露（剂）'
]
axiosMock.onGet(/api\/manifests\/viewgoods\/\d+$/).reply(config => {
  let goodsInfo = random(manifestGoodsInfo)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        200,
        {
          data: goodsInfo
        }
      ])
    }, 500)
  })
})
