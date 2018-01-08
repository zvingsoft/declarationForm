import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
window.axiosMock = window.axiosMock || new AxiosMockAdapter(axios, { delayResponse: 10 })

const users = [{
        "username": "huawei",
        "realname": "huawei",
        "branchinnercode": "00010036",
        "lastmodifypasstime": null,
        "status": true,
        "email": "huawei@huawei.com",
        "company": "上海公司",
        "roles": []
    },
    {
        "username": "audit",
        "realname": "审核",
        "branchinnercode": "0001",
        "lastmodifypasstime": "2016-10-28 19:13:31",
        "status": true,
        "email": "audit@huawei.com",
        "company": "华为",
        "roles": [{
            "rolecode": "audit",
            "name": "审核组"
        }]
    },
    {
        "username": "edit",
        "realname": "编辑",
        "branchinnercode": "0001",
        "lastmodifypasstime": "2016-10-28 19:13:17",
        "status": false,
        "email": "edit@huawei.com",
        "company": "huawei",
        "roles": [{
                "rolecode": "sanbu",
                "name": "三部"
            },
            {
                "rolecode": "edit",
                "name": "编辑组"
            }
        ]
    },
    {
        "username": "admin",
        "realname": "系统管理员",
        "branchinnercode": "0001",
        "lastmodifypasstime": null,
        "status": true,
        "email": "admin@huawei.com",
        "company": "华为",
        "roles": [{
            "rolecode": "admin",
            "name": "管理员组"
        }]
    }
];

axiosMock.onGet('/users').reply(200, { total: users.length, data: users, status: 1, message: '' })
axiosMock.onPost('/users').reply(204, { status: 1, message: '添加成功！' })
axiosMock.onPut(/\/users\/[^\/]+$/).reply(200, { status: 1, message: '修改成功！' })
axiosMock.onDelete(/\/users\/[^\/]+$/).reply(200, { status: 1, message: '删除成功！' })
axiosMock.onPut(/\/users\/[^\/]+\/state/).reply(200, { status: 1, message: '操作成功！' })
axiosMock.onDelete(/\/users\/[^\/]+\/state/).reply(200, { status: 1, message: '操作成功！' })
axiosMock.onPut(/\/users\/[^\/]+\/password/).reply(200, { status: 1, message: '操作成功！' })