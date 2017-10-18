# declarationForm:海关报关单场景演示

### 1. 概述
declarationForm是一个使用微服务架构开发的针对海关报关、通关业务场景的演示系统，旨在展示FusionStage平台微服务相关的各项特性。

系统特点：
- 所有微服务皆使用ServiceComb框架
- 事务一致性使用ServiceComb Saga开发
- 用户界面使用Vue+ElementUI开发
- 数据库均使用Mysql5.7
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


### 5. 计税微服务tax

税率表TaxRate
    
|字段名称    |字段代码     |
|------------|-------------|
|商品类型名称|GoodsTypeName|
|商品类型代码|GoodsType    |
|税率（%）   |Rate         |

API


|路径        |方法  |描述                  |
|------------|------|----------------------|
|tax/{ID}    |GET   |获取报关单计税计算结果|
|tax/{ID}    |PUT   |确认缴税              |
|taxRate     |GET   |获取税率清单          |
|taxRate     |POST  |增加商品税率          |
|taxRate/{ID}|PUT   |修改商品税率          |
|taxRate/{ID}|DELETE|删除商品税率          |
|taxRate/{ID}|GET   |获取某个商品类型税率  |


### 6. 许可证检查服务license
 

许可证表License


|字段名称  |字段代码   |
|----------|-----------|
|企业名称  |CompanyName|
|企业ID    |CompanyID  |
|商品类型  |GoodsType  |
|许可证数量|Quantity   |


API

|路径               |方法  |描述                                |
|-------------------|------|------------------------------------|
|license/check      |GET   |许可证核查                          |
|license/sumbit     |GET   |许可证扣减                          |
|license/compensate |PUT   |Saga事务失败后许可证回冲            |
|license            |GET   |获取许可证清单                      |
|license            |POST  |增加许可证                          |
|license/{GoodsType}|PUT   |修改许可证                          |
|license/{GoodsType}|DELETE|删除许可证                          |
|license/{GoodsType}|GET   |获取企业下的某个商品类型的许可证信息|


### 7 减免税服务taxCutting

税收减免表TaxCutting
    

|字段名称     |字段代码     |
|-------------|-------------|
|商品类型名称 |GoodsTypeName|
|商品类型代码 |GoodsType    |
|减免税率（%）|Rate         |
|减免税数量   |Quantity     |


API

|路径                 |方法  |描述                        |
|---------------------|------|----------------------------|
|taxcuttng/check      |GET   |减免税核查                  |
|taxcuttng/sumbit     |GET   |减免税数量扣减              |
|taxcuttng/compensate |PUT   |Saga事务失败后减免税数量回冲|
|taxcuttng            |GET   |获取减免税清单              |
|taxcuttng            |POST  |增加减免税记录              |
|taxcuttng/{GoodsType}|PUT   |修改减免税记录              |
|taxcuttng/{GoodsType}|DELETE|删除减免税记录              |
|taxcuttng/{GoodsType}|GET   |获取某个商品类型的减免税信息|


### 8. 加贸检查服务processingTrade


 加工贸易限额表 ProcessingTradeQuota 


|字段名称    |字段代码     |
|------------|-------------|
|商品类型名称|GoodsTypeName|
|商品类型代码|GoodsType    |
|加工贸易限额|Quantity     |

API

|路径                       |方法  |描述                      |
|---------------------------|------|--------------------------|
|processingtrade/check      |GET   |加贸数量核查              |
|processingtrade/sumbit     |GET   |加贸数量扣减              |
|processingtrade/compensate |PUT   |Saga事务失败后加贸数量回冲|
|processingtrade            |GET   |获取加贸限额清单          |
|processingtrade            |POST  |增加加贸限额记录          |
|processingtrade/{GoodsType}|PUT   |修改加贸限额记录          |
|processingtrade/{GoodsType}|DELETE|删除加贸限额记录          |
|processingtrade/{GoodsType}|GET   |获取某个商品类型的加贸限额|


### 9. 舱单检查服务manifest

舱单表Manifest

|字段名称|字段代码 |
|--------|---------|
|报关单ID|ID       |
|企业ID  |CompanyID|
|位置    |Location |
|报关单ID|FormID   |

舱单商品清单ManifestGoodsList


|字段名称|字段代码  |
|--------|----------|
|舱单ID  |ManifestID|
|商品类型|GoodsType |
|商品名称|Name      |
|商品数量|Quantity  |
|商品单位|Unit      |


API


|路径               |方法  |描述                            |
|-------------------|------|--------------------------------|
|manifest/check     |GET   |舱单核查                        |
|manifest/sumbit    |GET   |舱单状态改为己用                |
|manifest/compensate|PUT   |Saga事务失败后舱单状态回冲为未用|
|manifest           |GET   |获取舱单列表                    |
|manifest           |POST  |增加舱单                        |
|manifest/{ID}      |PUT   |修改舱单                        |
|manifest/{ID}      |DELETE|删除舱单                        |
|manifest/{ID}      |GET   |获取某个舱单的详细信息          |

### 10. 风险分析服务riskAnalysis 

无数据库

API

|路径             |方法|描述          |
|-----------------|----|--------------|
|riskanalysis/{ID}|GET |报关单风险分析|

### 11. 棉花配额检查服务cottonQuota

棉花配额表CottonQuota

|字段名称|字段代码|
|--------|--------|
|企业ID  |Company |
|配额数量|Quota   |

API


|路径                   |方法  |描述                      |
|-----------------------|------|--------------------------|
|cottonquota/check      |GET   |棉花配额核查              |
|cottonquota/sumbit     |GET   |棉花配额扣减              |
|cottonquota/compensate |PUT   |Saga事务失败后棉花配额回冲|
|cottonquota            |GET   |获取棉花配额清单          |
|cottonquota            |POST  |增加棉花配额记录          |
|cottonquota/{CompanyID}|PUT   |修改某个企业的棉花配额记录|
|cottonquota/{CompanyID}|DELETE|删除某个企业的棉花配额记录|
|cottonquota/{CompanyID}|GET   |获取某个企业的棉花配额    |


### 12. 其他界面微服务
- 包括taxUI，taxCuttingUI，licenseUI，manifestUI，cottonQuotaUI
- 都是静态页面，不带数据库，通过调用相应的API对数据进行增删改查
- 优先级低，前期先不实现
