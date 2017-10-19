import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
window.axiosMock = window.axiosMock || new AxiosMockAdapter(axios, { delayResponse: 10 })

const privs = {
    "value": [
        "Platform.Role",
        "Platform.Role.Add",
        "Platform.Role.Edit",
        "Platform.Role.Delete",
        "Platform.Role.SetPriv",
        "Platform.Role.AddUser",
        "Platform.Role.RemoveUser",
        "Platform.User",
        "Platform.User.Add",
        "Platform.User.Edit",
        "Platform.User.Delete",
        "Platform.User.SetPriv",
        "Platform.User.ChangePassword",
        "Platform.User.Disable",
        "Platform.User.Enable",
        "Platform.User.LastLoginUpdatePwd"
    ],
    "tree": [{
        "code": "Platform.System",
        "name": "系统管理",
        "items": [],
        "children": [{
                "code": "Platform.Role",
                "name": "角色管理",
                "items": [{
                        "code": "Platform.Role.Add",
                        "name": "添加"
                    },
                    {
                        "code": "Platform.Role.Edit",
                        "name": "编辑"
                    },
                    {
                        "code": "Platform.Role.Delete",
                        "name": "删除"
                    },
                    {
                        "code": "Platform.Role.SetPriv",
                        "name": "设置权限"
                    },
                    {
                        "code": "Platform.Role.AddUser",
                        "name": "添加用户到角色"
                    },
                    {
                        "code": "Platform.Role.RemoveUser",
                        "name": "从角色中删除用户"
                    }
                ]
            },
            {
                "code": "Platform.User",
                "name": "用户管理",
                "items": [{
                        "code": "Platform.User.Add",
                        "name": "添加"
                    },
                    {
                        "code": "Platform.User.Edit",
                        "name": "编辑"
                    },
                    {
                        "code": "Platform.User.Delete",
                        "name": "删除"
                    },
                    {
                        "code": "Platform.User.SetPriv",
                        "name": "设置权限"
                    },
                    {
                        "code": "Platform.User.ChangePassword",
                        "name": "修改密码"
                    },
                    {
                        "code": "Platform.User.Disable",
                        "name": "停用"
                    },
                    {
                        "code": "Platform.User.Enable",
                        "name": "启用"
                    },
                    {
                        "code": "Platform.User.LastLoginUpdatePwd",
                        "name": "通知修改密码"
                    }
                ]
            }
        ]
    }]
}

axiosMock.onGet(/\/permissions\/id\/[^\/]+\/type\/[^\/]+\/menus/).reply(200, { data: privs, status: 1, message: '' })
axiosMock.onPut(/\/permissions\/id\/[^\/]+\/type\/[^\/]+\/menus/).reply(200, { status: 1, message: '修改成功！' })