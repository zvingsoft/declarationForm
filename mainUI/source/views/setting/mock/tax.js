import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
window.axiosMock =
  window.axiosMock || new AxiosMockAdapter(axios, { delayResponse: 10 })

const taxsData = [
  {
    id: 1,
    taxnum: '00001',
    taxgoodstype: '食品、饮料',
    unit: '-',
    range: '食品：包括乳制品、糖制品、调味品，冬虫夏草、高丽参、红参、西洋参、人参、鹿茸、阿胶、奶粉及其他保健品、补品等；饮料：包括矿泉水、汽水，咖啡、茶，其他无酒精饮料',
    taxrate: '15%',
    freemoney: 3000,
    modifydate: '2017-01-23'
  },
  {
    id: 2,
    taxnum: '0002',
    taxgoodstype: '酒',
    unit: '瓶',
    range: '包括啤酒、葡萄酒（香槟酒）、黄酒、果酒、清酒、米酒、白兰地、威士忌、伏特加、朗姆酒、金酒、白酒、药酒、保健酒、鸡尾酒、利口酒、龙舌兰、柯迪尔酒、梅子酒等用粮食、水果等含淀粉或糖的物质发酵或配制而制成的含乙醇的酒精饮料。',
    taxrate: '60%',
    freemoney: 2000,
    modifydate: '2016-10-12'
  },
  {
    id: 3,
    taxnum: '0003',
    taxgoodstype: '烟草',
    unit: '-',
    range: '包括卷烟、雪茄烟、再造烟草、均化烟草、其他烟草及烟草代用品的制品，烟丝、斗烟、水烟、烟末等。',
    taxrate: '80%',
    freemoney: 5000,
    modifydate: '2016-12-12'
  },
  {
    id: 4,
    taxnum: '0004',
    taxgoodstype: '厨卫用具',
    unit: '件',
    range: '包括各种材料制的餐具、刀具、炊具、灶具，锅、壶、杯、盘、碗、筷子、勺、铲、餐刀、餐叉、切菜刀、案板、削皮刀、绞肉机、食品研磨机、搅拌器、净水器、煤气灶、煤气点火器等；电饭煲、微波炉、电磁炉、抽油烟机、消毒碗柜、家用洗碗机、电烤箱、面包机、豆浆机、酸奶机、榨汁机、咖啡机、制冰机、饮水机、食品调理机、煮蛋器等厨房用具及配件、附件',
    taxrate: '12%',
    freemoney: 1200,
    modifydate: '2014-12-12'
  }
]

axiosMock.onGet('/api/taxs').reply(200, { data: taxsData })
axiosMock.onPost(/api\/taxs$/).reply(200, { status: 1, message: '新建成功！' })
axiosMock.onPut(/api\/taxs\/\d+$/).reply(200, { status: 1, message: '编辑成功！' })
axiosMock.onDelete(/api\/taxs\/.+$/).reply(200, { status: 1, message: '删除成功！' })
