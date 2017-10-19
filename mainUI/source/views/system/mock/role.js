import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
window.axiosMock = window.axiosMock || new AxiosMockAdapter(axios, { delayResponse: 10 })

const roles = [{
        "rolecode": "admin",
        "name": "管理员组",
    },
    {
        "rolecode": "everyone",
        "name": "所有用户组",
    },
    {
        "rolecode": "edit",
        "name": "编辑组",
    },
    {
        "rolecode": "audit",
        "name": "审核组",
    },
    {
        "rolecode": "yibu",
        "name": "一部",
    },
    {
        "rolecode": "erbu",
        "name": "二部",
    },
    {
        "rolecode": "sanbu",
        "name": "三部",
    }
]

const usersInAdmin = [{
        "username": "admin",
        "realname": "系统管理员",
        "roles": [{
                "name": "管理员组",
                "rolecode": "admin"
            },
            {
                "name": "编辑组组",
                "rolecode": "edit"
            }
        ]
    },
    {
        "username": "zhangshan",
        "realname": "张珊",
        "roles": [{
                "name": "管理员组",
                "rolecode": "admin"
            },
            {
                "name": "编辑组组",
                "rolecode": "edit"
            }
        ]
    },
    {
        "username": "lisi",
        "realname": "黎思",
        "roles": [{
                "name": "管理员组",
                "rolecode": "admin"
            },
            {
                "name": "编辑组组",
                "rolecode": "edit"
            }
        ]
    }
]

const usersInEdit = [{
    "username": "admin",
    "realname": "系统管理员",
    "roles": [{
        "name": "管理员组",
        "rolecode": "admin"
    }]
}, {
    "username": "lisi",
    "realname": "黎思",
    "roles": [{
            "name": "管理员组",
            "rolecode": "admin"
        },
        {
            "name": "编辑组组",
            "rolecode": "edit"
        }
    ]
}]

const map = { "admin": usersInAdmin, "edit": usersInEdit };



axiosMock.onGet('/roles').reply(200, { total: roles.length, data: roles, status: 1, message: '' })
axiosMock.onGet(/\/roles\/.+\/users/).reply(200, { total: map["admin"].length, data: map["admin"], status: 1, message: '' })
axiosMock.onPost('/roles').reply(204, { status: 1, message: '添加成功！' })
axiosMock.onPut(/\/roles\/[^\/]+$/).reply(200, { status: 1, message: '修改成功！' })
axiosMock.onDelete(/\/roles\/[^\/]+$/).reply(200, { status: 1, message: '删除成功！' })
axiosMock.onPut(/\/roles\/[^\/]+\/users/).reply(200, { status: 1, message: '操作成功！' })
axiosMock.onDelete(/\/roles\/[^\/]+\/users/).reply(200, { status: 1, message: '操作成功！' })