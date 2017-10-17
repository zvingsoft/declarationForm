# declationFrom:海关报关单场景演示

### 1. 概述
declationFrom是一个使用微服务架构开发的针对海关报关、通关业务场景的演示系统，旨在展示FusionStage平台微服务相关的各项特性。

系统特点：
- 所有微服务皆使用ServiceComb框架
- 事务一致性使用ServiceComb Saga
- 用户界面Vue+ElementUI
- 数据均使用Mysql5.7
- 所有微服务均部署为无状态容器

系统组成：

|微服务名称  |代码         |描述                                |
|------------|-------------|------------------------------------|
|主界面      |mainUI       |系统的主界面，用于集成各个微服务的UI|
|报关单服务  |form         |报关单相关功能                      |
|计税服务    |tax          |计税相关API                         |
|许可证服务  |license      |许可证相关API                       |
|减免税服务  |taxCutting   |减免税相关API                       |
|舱单服务    |manifest     |舱单相关API                         |
|风险分析服务|riskAnalysis |风险分析API                         |
|棉花配额服务|cottonQuota  |棉花配额相关API                     |
|报关单UI    |formUI       |(纯静态页面)                        |
|计税管理UI  |taxUI        |(纯静态页面)                        |
|许可证管理UI|licenseUI    |(纯静态页面)                        |
|减免税管理UI|taxCuttingUI |(纯静态页面)                        |
|舱单管理UI  |manifestUI   |(纯静态页面)                        |
|棉花配额UI  |cottonQuotaUI|(纯静态页面)                        |


### 2. 主界面mainUI
主界面顶部为主导菜单，左侧为二级菜单：
|主菜单|二级菜单    |界面来源       |描述                                              |
|------|------------|-----------------|--------------------------------------------------|
|通关  |报关单      |formUI           |报关单记录显示及增删改查                          |
|      |审核        |formUI           |海关人工审核                                      |
|      |查询        |formUI           |报关单查询                                        |
|      |企业查询    |formUI           |按企业查询报关单                                  |
|配置  |税率管理    |taxUI            |进出口商品税率增删改查                            |
|      |许可证管理  |licenseUI        |许可证记录增删改查                                |
|      |减免税管理  |taxCuttingUI     |减免税记录增删改查                                |
|      |舱单管理    |manifestUI       |舱单记录增删改查                                  |
|      |加贸管理    |processingTradeUI|加贸记录增删改查                                  |
|      |棉花配额管理|cottonQuotaUI    |棉花配额记录增删改查                              |
|系统  |用户管理    |mainUI           |对系统中有用户包括企业和海关工作人员的账号进行管理|
|      |角色管理    |mainUI           |对系统中的角色进行管理                            |
注意：
- 主界面中除了用户和角色管理外，其他的界面由各个微服务提供，主界面负责动态装载。
- 企业查询和棉花配额管理默认没有，在演示快速开发响应需求变化环节添加新的微服务和功能后才显示。

### 3. 报关单服务
数据库表：

企业表Company
|字段名称|字段代码|
|--------|--------|
|ID      |企业ID  |
|Name    |企业名称|
|Address |地址    |
|Phone   |电话    |
|Fax     |传真    |
|PostCode|邮政编码|

报关单Form
|字段名称  |字段代码|
|----------|--------|
|ID        |报关单ID|
|CompanyID |企业ID  |
|FreightFee|运费    |
|Premium   |保费    |
|OtherFee  |杂费    |
|AddTime   |添加时间|

商品类型表GoodsType
|字段名称|字段代码|
|--------|--------|
|类型代码|Code    |
|类型名称|Name    |

单证表Document
|字段名称|字段代码|
|--------|--------|
|ID      |单证ID  |
|FormID  |报关单ID|
|Type    |单证类型|
|File    |文件位置|

商品清单表PackingList
|字段名称|字段代码 |
|--------|---------|
|报关单ID|FormID   |
|商品类型|GoodsType|
|商品名称|Name     |
|商品数量|Quantity |
|金额    |Price    |
|原产地  |Origin   |

审核信息表Audit
|字段名称|字段代码            |
|--------|--------------------|
|FormID  |报关单ID            |
|Data    |审核信息（JSON格式）|

API：

|路径      |方法  |描述          |
|----------|------|--------------|
|form      |GET   |报关单查询    |
|form/{ID} |GET   |获取报关单信息|
|form      |POST  |提交报关单    |
|form/{ID} |PUT   |修改报关单    |
|form/{ID} |DELETE|删除报关单    |
|audit/{ID}|POST  |人工审核      |
|check/{ID}|POST  |货物放行检查  |
|pass/{ID} |POST  |货物放行      |

### 4. 报关单界面formUI
- 报关单列表：以列表形式显示报关单记录
- 报关单详情界面，整个界面分成若干个小节：
    - 企业信息，从企业表中带入，但允许修改
    - 费用信息：运费，保费，杂费
    - 单证信息：显示单证清单
    - 商品清单：显示商品列表信息
    - 按钮区域：显示暂存、提交审核、删除三个按钮
- 电子审核界面：当用户在报关单详情界面点击提交审核后，进入电子审核界面，此界面调用各个微服务显示检查结构。
- 人工审核界面：和报关单详情界面类似，按钮改为退回、审核通过，审核通过后按钮变为放行检查通过，放行检查通过之后按钮变成货物放行
- 查询界面：按条件查询报关单
- 
### 3. 计税微服务tax
- 表结构：
    - 税率表：商品类型名称、类型代码、税率
- API：
    - /tax(GET)：计税计算
    - /tax(POST): 缴税确认

### 4. 许可证检查服务license
- 表结构：
    - 许可证表：企业名称、企业ID、许可证类型、许可证数量
- API：
    - /license(GET): 许可证检查
    - /license(POST): 许可证扣减
    - /license(PUT): 事务补偿，Saga事物失败时会调用此API恢复许可证数量

### 5. 减免税服务taxCutting
- 表结构：
    - 税收减免表：企业ID、商品类型代码、减免税数量
- API：
    - /taxCutting(GET)：减免税检查
    - /taxCutting(POST): 减免税数量扣减
    - /taxCutting(PUT): 事务补偿，Saga事物失败时会调用此API恢复减免税数量

### 6. 加贸检查服务processingTrade
- 表结构：
    - 加工贸易限额表：企业ID、加贸数量
- API：
    - /processingTrade(GET)：加贸检查
    - /processingTrade(POST): 加贸数量扣减
    - /processingTrade(PUT): 事务补偿，Saga事物失败时会调用此API恢复加贸数量

### 7. 舱单检查服务manifest
- 表结构：
    - 仓单表：仓单ID，仓单
- API：
    - /manifest(GET)：舱单核查查
    - /manifest(POST): 舱单状态改为己用
    - /manifest(PUT)：事务补偿，Saga事物失败时会调用此API将舱单状态改为未用

### 8. 风险分析服务riskAnalysis 
- 无数据库
- API：
    - riskAnalysis(GET)：获得分析评估结果

### 9. 棉花配额检查服务cottonQuota
- 表结构：
    - 加工贸易限额表：企业ID、加贸数量
- API：
    - /processingTrade(GET)：加贸检查
    - /processingTrade(POST): 加贸数量扣减
    - /processingTrade(PUT): 事务补偿，Saga事物失败时会调用此API恢复加贸数量

### 12. 其他界面微服务
- 包括taxUI，taxCuttingUI，licenseUI，manifestUI，cottonQuotaUI
- 都是静态页面，不带数据库，通过调用相应的API对数据进行增删改查
- 优先级低，前期先不实现
