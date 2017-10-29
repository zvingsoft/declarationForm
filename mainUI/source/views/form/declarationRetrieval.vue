<template>
  <div v-if="advancedSearchModal">
    <div style="width:100%;text-align:center; margin:auto;">
      <el-form label-position="left" :model="searchDeclaration" label-width="200px" class="e-form">
        <div style="padding-top:20px;width:100%; margin:auto;overflow:hidden;text-align:left;">
          <div style=" font-size: 30px; font-weight: bold; margin-left: 10%; padding: 20px 0 5px 0;">高级选项

            <el-button style="width:80px;float:right;margin-right:30%;" type="primary" @click="doAdvanceSearch">搜　索</el-button>
          </div>
          <div style=" width: 80%;margin-left: 10%;padding: 20px 0 0 0;border-top: 2px solid #ccc;border-radius: 4px;"></div>
        </div>
        <div style="width:70%;margin:auto;text-align:left;margin-left:15%;">
          <div class="form-title">基本信息</div>
          <div class="form-panel">
            <el-form-item label="报关单类型：">
              <el-select class="s-input" v-model="searchDeclaration.declarationType" placeholder="请选择">
                <el-option v-for="item in declarationTypeOptions" :key="item.key" :label="item.value" :value="item.key">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="预录入编号：">
              <el-input class="s-input" v-model="searchDeclaration.preentryNumber"></el-input>
            </el-form-item>
            <el-form-item label="海关编号：">
              <el-input class="s-input" v-model="searchDeclaration.customsNumber"></el-input>
            </el-form-item>
            <el-form-item label="贸易方式：">
              <el-select class="s-input" v-model="searchDeclaration.tradingType" placeholder="请选择">
                <el-option key="processingTrade" label="加工贸易" value="processingTrade">
                </el-option>
                <el-option key="general" label="普通贸易" value="general">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="searchDeclaration.declarationType == 'import'" label="进口口岸：">
              <el-input class="s-input" v-model="searchDeclaration.importOrExportPort"></el-input>
            </el-form-item>
            <el-form-item v-if="searchDeclaration.declarationType == 'import'" label="进口日期：">
              <el-date-picker v-model="searchDeclaration.importOrExportDate" @change="importOrExportDateChange" type="date" class="s-input" placeholder="选择进口日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item v-else label="出口日期：">
              <el-date-picker v-model="searchDeclaration.importOrExportDate" @change="importOrExportDateChange" type="date" class="s-input" placeholder="选择出口日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="申报日期：">
              <el-date-picker v-model="searchDeclaration.declarationDate" @change="declarationDateChange" type="date" class="s-input" placeholder="选择申报日期">
              </el-date-picker>
            </el-form-item>
          </div>
          <div class="form-title">单位信息</div>
          <div class="form-panel">
            <el-form-item label="申报单位：">
              <el-select class="s-input" filterable v-model="searchDeclaration.declarationUnit" placeholder="请选择" @change="selectUnitChange">
                <el-option v-for="item in unitOptions" :key="item.name" :label="item.name" :value="item.name">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="单位地址：">
              <el-input class="s-input" v-model="searchDeclaration.unitAddress" disabled></el-input>
            </el-form-item>
            <el-form-item label="邮编：">
              <el-input class="s-input" v-model="searchDeclaration.zipCode" disabled></el-input>
            </el-form-item>
            <el-form-item label="电话：">
              <el-input class="s-input" v-model="searchDeclaration.telephone" disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-title">货物信息</div>
          <div class="form-panel">
            <el-form-item label="许可证号：">
              <el-input class="s-input" v-model="searchDeclaration.licenseKey"></el-input>
            </el-form-item>
            <el-form-item label="舱单号：">
              <el-input class="s-input" v-model="searchDeclaration.shippingNumbers"></el-input>
            </el-form-item>
            <el-form-item label="运费：" prop="freight" :rules="[{ type: 'number', message: '必须为数字值', trigger: 'change'}]">
              <el-input class="s-input" v-model.number="searchDeclaration.freight"></el-input>
            </el-form-item>
            <el-form-item label="保费：" prop="premium" :rules="[{ type: 'number', message: '必须为数字值', trigger: 'change'}]">
              <el-input class="s-input" v-model.number="searchDeclaration.premium"></el-input>
            </el-form-item>
            <el-form-item label="杂费：" prop="incidental" :rules="[{ type: 'number', message: '必须为数字值', trigger: 'change'}]">
              <el-input class="s-input" v-model.number="searchDeclaration.incidental"></el-input>
            </el-form-item>
            <el-form-item label="合同协议号：">
              <el-input class="s-input" v-model="searchDeclaration.agreementNumber"></el-input>
            </el-form-item>
            <el-form-item label="标记唛码及备注：" style="width:90%">
              <el-input type="textarea" v-model="searchDeclaration.shippingMarksAndRemarks" :rows="3" style="width:450px;"></el-input>
            </el-form-item>
          </div>
          <div class="form-title">制单信息</div>
          <div class="form-panel">
            <el-form-item label="录入员：">
              <el-input class="s-input" v-model="searchDeclaration.entryClerk"></el-input>
            </el-form-item>
            <el-form-item label="录入单位：">
              <el-input class="s-input" v-model="searchDeclaration.entryUnit"></el-input>
            </el-form-item>
            <el-form-item label="报关员：">
              <el-input class="s-input" v-model="searchDeclaration.customsBroker"></el-input>
            </el-form-item>
            <el-form-item label="制填日期：">
              <el-date-picker v-model="searchDeclaration.fillingDate" @change="fillingDateChange" type="date" class="s-input" placeholder="选择制填日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="审核状态：">
              <el-select class="s-input" filterable v-model="searchDeclaration.auditStatus" @change="selectUnitChange">
                <el-option v-for="item in auditStatusOptions" :key="item.KEY" :label="item.value" :value="item.key">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="text-align:center;width:100%;">
            <el-button style="width:80px;" type="primary" size="large" @click="doAdvanceSearch">搜　索</el-button>
          </div>
          <div style="height:100px;"></div>

        </div>
      </el-form>
    </div>
  </div>
  <div v-else-if="!declarationDialogmodel" :style="{width:clientWidth+'px'}">
    <el-toolbar>
      <div style="width:100%;text-align:left;">
        <el-button class="z-toolbar-btn" :plain="true" @click="addClick">
          <i class="fa fa-plus"></i> 新建</el-button>
        <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0 || audited" @click="editClick">
          <i class="fa fa-edit"></i> 编辑</el-button>
        <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0" @click="deleteClick">
          <i class="fa fa-remove"></i> 删除</el-button>
        <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0 || audited" @click="commitAudit(true)">
          <i class="fa fa-check"></i>提交审核</el-button>
        <div style="float:right; margin-right:10px;">
          <el-button class="z-toolbar-btn" :plain="true" @click="advanceSearch">
            <i class="fa fa-search"></i> 高级搜索</el-button>
        </div>
      </div>
    </el-toolbar>
    <div class="main-content-wrap">
      <div class="search-bar">
        排序：
        <el-select size="small" v-model="sort" class="search-select">
          <el-option v-for="item in sortOptions" :key="item.key" :label="item.value" :value="item.key">
          </el-option>
        </el-select>
        检索字段：
        <el-select size="small" v-model="retrieval" class="search-select">
          <el-option v-for="item in retrievalOptions" :key="item.key" :label="item.value" :value="item.key">
          </el-option>
        </el-select>
        <el-input style="width:200px" size="small" v-model="searchWord"></el-input>
        <!--<el-select size="small" v-model="logic" class="search-select">
              <el-option v-for="item in logicOptions" :key="item.key" :label="item.value" :value="item.key">
              </el-option>
            </el-select>-->
        <el-button size="small" type="primary" @click="doSearch" style="width:60px;">搜索</el-button>
      </div>
      <el-table :data="declarationData" ref="declarationTable" v-loading="dataLoading" tooltip-effect="dark" style="width:100%" :height="clientHeight" highlight-current-row @selection-change="onSelectionChange" @expand="expandRow" @row-dblclick="rowDBClick">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand" label-width="160px">
              <el-form-item label="报关单类型：">
                <span>{{props.row.declarationTypeName}}</span>
              </el-form-item><br/>
              <el-form-item label="预录入编号：">
                <span>{{props.row.preentryNumber}}</span>
              </el-form-item>
              <el-form-item label="海关编号：">
                <span>{{props.row.customsNumber}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationType == 'import'" label="进口口岸：">
                <span>{{props.row.importOrExportPort}}</span>
              </el-form-item>
              <el-form-item v-else label="出口口岸：">
                <span>{{props.row.importOrExportPort}}</span>
              </el-form-item>
              <el-form-item label="备案号：">
                <span>{{props.row.recordNumber}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationType == 'import'" label="进口日期：">
                <span>{{props.row.importOrExportDate}}</span>
              </el-form-item>
              <el-form-item v-else label="出口日期：">
                <span>{{props.row.importOrExportDate}}</span>
              </el-form-item>
              <el-form-item label="申报日期：">
                <span>{{props.row.declarationDate}}</span>
              </el-form-item>
              <el-form-item label="经营单位：">
                <span>{{props.row.managementUnit}}</span>
              </el-form-item>
              <el-form-item label="运输方式：">
                <span>{{props.row.shippingType}}</span>
              </el-form-item>
              <el-form-item label="运输工具名称：">
                <span>{{props.row.shippingTools}}</span>
              </el-form-item>
              <el-form-item label="舱单号：">
                <span>{{props.row.shippingNumbers}}</span>
              </el-form-item>
              <el-form-item label="收货单位：">
                <span>{{props.row.forwardingUnit}}</span>
              </el-form-item>
              <el-form-item label="贸易方式：">
                <span>{{props.row.tradingType}}</span>
              </el-form-item>
              <el-form-item label="征免性质：">
                <span>{{props.row.exemptionNature}}</span>
              </el-form-item>
              <el-form-item label="征税比例：">
                <span>{{props.row.settlementType}}</span>
              </el-form-item>
              <el-form-item label="许可证号：">
                <span>{{props.row.licenseKey}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationType == 'import'" label="启运国：">
                <span>{{props.row.startOrArrivalCountry}}</span>
              </el-form-item>
              <el-form-item v-else label="运抵国：">
                <span>{{props.row.startOrArrivalCountry}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationType == 'import'" label="装货港：">
                <span>{{props.row.loadingOrFingerPort}}</span>
              </el-form-item>
              <el-form-item v-else label="指运港：">
                <span>{{props.row.loadingOrFingerPort}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationType == 'import'" label="境内目的地：">
                <span>{{props.row.destinationOrConsignmentPlace}}</span>
              </el-form-item>
              <el-form-item v-else label="境内货源地：">
                <span>{{props.row.destinationOrConsignmentPlace}}</span>
              </el-form-item>
              <el-form-item label="批准文号：">
                <span>{{props.row.approvalNumber}}</span>
              </el-form-item>
              <el-form-item label="成交方式：">
                <span>{{props.row.transactionMethod}}</span>
              </el-form-item>
              <el-form-item label="运费：">
                <span>{{props.row.freight}}</span>
              </el-form-item>
              <el-form-item label="保费：">
                <span>{{props.row.premium}}</span>
              </el-form-item>
              <el-form-item label="杂费：">
                <span>{{props.row.incidental}}</span>
              </el-form-item><br/>
              <el-form-item label="合同协议号：">
                <span>{{props.row.agreementNumber}}</span>
              </el-form-item>
              <el-form-item label="件数：">
                <span>{{props.row.goodsNumber}}</span>
              </el-form-item>
              <el-form-item label="包装种类：">
                <span>{{props.row.packagingType}}</span>
              </el-form-item>
              <el-form-item label="毛重（千克）：">
                <span>{{props.row.grossWeight}}</span>
              </el-form-item>
              <el-form-item label="净重（千克）：">
                <span>{{props.row.netWeight}}</span>
              </el-form-item>
              <el-form-item label="集装箱号：">
                <span>{{props.row.containerNumber}}</span>
              </el-form-item>
              <el-form-item label="随附单证：">
                <span>{{props.row.documentSattached}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationType == 'import'" label="用途：">
                <span>{{props.row.purposeOrManufacturer}}</span>
              </el-form-item>
              <el-form-item v-else label="生产厂家：">
                <span>{{props.row.purposeOrManufacturer}}</span>
              </el-form-item>
              <el-form-item label="标记唛码及备注：" style="width:90%">
                <span>{{props.row.shippingMarksAndRemarks}}</span>
              </el-form-item>
              <el-form-item label="商品：" label-width="60px" style="width:100%">
                <packing-item :packinglistData.sync="packingListData" :declarationType="declarationType" :onlyView="true">
                </packing-item>
              </el-form-item>
              <el-form-item label="税费征收情况：" style="width:90%">
                <span>{{props.row.taxpaidOrNot}}</span>
              </el-form-item>
              <el-form-item label="录入员：">
                <span>{{props.row.entryClerk}}</span>
              </el-form-item>
              <el-form-item label="录入单位：">
                <span>{{props.row.entryUnit}}</span>
              </el-form-item>
              <el-form-item label="报关员：">
                <span>{{props.row.customsBroker}}</span>
              </el-form-item>
              <el-form-item label="申报单位：">
                <span>{{props.row.declarationUnit}}</span>
              </el-form-item>
              <el-form-item label="单位地址：">
                <span>{{props.row.unitAddress}}</span>
              </el-form-item>
              <el-form-item label="邮编：">
                <span>{{props.row.zipCode}}</span>
              </el-form-item>
              <el-form-item label="电话：">
                <span>{{props.row.telephone}}</span>
              </el-form-item>
              <el-form-item label="制填日期：">
                <span>{{props.row.fillingDate}}</span>
              </el-form-item>
              <el-form-item label="录入日期：">
                <span>{{props.row.entryDate}}</span>
              </el-form-item>
              <el-form-item label="审核状态：">
                <span>{{props.row.auditStatusName}}</span>
              </el-form-item>
              <el-form-item label="应缴税额">
                <span>{{props.row.taxDue}}</span>
              </el-form-item>
              <el-form-item label="缴税状态">
                <span>{{props.row.taxStatusName}}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="customsNumber" show-overflow-tooltip min-width="20%" label="海关编号"></el-table-column>
        <el-table-column prop="declarationTypeName" show-overflow-tooltip min-width="20%" label="报关单类型"></el-table-column>
        <el-table-column prop="importOrExportPort" show-overflow-tooltip min-width="20%" label="海关口岸"></el-table-column>
        <el-table-column prop="declarationUnit" show-overflow-tooltip min-width="30%" label="申报单位"></el-table-column>
        <el-table-column min-width="20%" label="商品详情">
          <template slot-scope="scope">
            <el-button type="text">
              <span style="color:green;" @click="showPackinglist(scope.row.packingList,scope.row.declarationType)">查看商品</span>
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="declarationDate" show-overflow-tooltip min-width="15%" label="申报日期"></el-table-column>
        <el-table-column prop="auditStatusName" show-overflow-tooltip min-width="15%" label="审核状态"></el-table-column>
      </el-table>
      <div class="page-wrap">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next" :total="total">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="商品列表详情" :visible.sync="packinglistDialogModal" size="large">
      <packing-item :packinglistData.sync="packingListData" :declarationType="declarationType" :onlyView="true">
      </packing-item>
    </el-dialog>

  </div>
  <div v-else>
    <el-toolbar>
      <el-button class="z-toolbar-btn" :plain="true" @click="returnMain">
        <i class="fa fa-chevron-left"></i>返回</el-button>
      <span class="button-separator"></span>
      <el-button class="z-toolbar-btn" :plain="true" @click="confirm" :disabled="audited">
        <i class="fa fa-save"></i>
        <span v-if="editMode == 1">保存编辑</span>
        <span v-else>暂存</span>
      </el-button>
      <span class="button-separator"></span>
      <el-button class="z-toolbar-btn" :plain="true" @click="commitAudit(false)" :disabled="audited">
        <i class="fa fa-check"></i>提交审核</el-button>
    </el-toolbar>
    <div class="main-content-wrap" style="background-color:#f5f5f5">
      <el-form label-position="right" ref="declarationForm" :model="tmpDeclaration" label-width="160px" class="e-form">
        <div class="form-title">基本信息</div>
        <div class="form-panel">
          <el-form-item label="报关单类型：">
            <el-select class="e-input" v-model="tmpDeclaration.declarationType" placeholder="请选择">
              <el-option v-for="item in declarationTypeOptions" :key="item.key" :label="item.value" :value="item.key">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="预录入编号：" prop="preentryNumber" :rules="[{ required: true, message: '预录入编号不能为空', trigger: 'change' }]">
            <el-input class="e-input" v-model="tmpDeclaration.preentryNumber"></el-input>
          </el-form-item>
          <el-form-item label="海关编号：" prop="customsNumber" :rules="[{ required: true, message: '海关编号不能为空', trigger: 'change' }]">
            <el-input class="e-input" v-model="tmpDeclaration.customsNumber"></el-input>
          </el-form-item>
          <el-form-item label="贸易方式：">
            <el-select class="e-input" v-model="tmpDeclaration.tradingType" placeholder="请选择">
              <el-option key="processingTrade" label="加工贸易" value="processingTrade">
              </el-option>
              <el-option key="general" label="普通贸易" value="general">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="tmpDeclaration.declarationType == 'import'" label="进口口岸：">
            <el-input class="e-input" v-model="tmpDeclaration.importOrExportPort"></el-input>
          </el-form-item>
          <el-form-item v-if="tmpDeclaration.declarationType == 'import'" label="进口日期：">
            <el-date-picker v-model="tmpDeclaration.importOrExportDate" @change="importOrExportDateChange" type="date" class="e-input" placeholder="选择进口日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item v-else label="出口日期：">
            <el-date-picker v-model="tmpDeclaration.importOrExportDate" @change="importOrExportDateChange" type="date" class="e-input" placeholder="选择出口日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="申报日期：">
            <el-date-picker v-model="tmpDeclaration.declarationDate" @change="declarationDateChange" type="date" class="e-input" placeholder="选择申报日期">
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="form-title">单位信息</div>
        <div class="form-panel">
          <el-form-item label="申报单位：">
            <el-select class="e-input" filterable v-model="tmpDeclaration.declarationUnit" placeholder="请选择" @change="selectUnitChange">
              <el-option v-for="item in unitOptions" :key="item.name" :label="item.name" :value="item.name">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="单位地址：">
            <el-input class="e-input" v-model="tmpDeclaration.unitAddress" disabled></el-input>
          </el-form-item>
          <el-form-item label="邮编：">
            <el-input class="e-input" v-model="tmpDeclaration.zipCode" disabled></el-input>
          </el-form-item>
          <el-form-item label="电话：">
            <el-input class="e-input" v-model="tmpDeclaration.telephone" disabled></el-input>
          </el-form-item>
        </div>
        <div class="form-title">货物信息</div>
        <div class="form-panel">
          <el-form-item label="许可证号：">
            <el-input class="e-input" v-model="tmpDeclaration.licenseKey"></el-input>
          </el-form-item>
          <el-form-item label="舱单号：">
            <el-select class="e-input" filterable v-model="tmpDeclaration.shippingNumbers" placeholder="请选择">
              <el-option v-for="item in shippingNumbersOptions" :key="item.id" :label="item.manifestNum" :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="运费：" prop="freight" :rules="[{ type: 'number', message: '必须为数字值', trigger: 'change'}]">
            <el-input class="e-input" v-model="tmpDeclaration.freight"></el-input>
          </el-form-item>
          <el-form-item label="保费：" prop="premium" :rules="[{ type: 'number', message: '必须为数字值', trigger: 'change'}]">
            <el-input class="e-input" v-model="tmpDeclaration.premium"></el-input>
          </el-form-item>
          <el-form-item label="杂费：" prop="incidental" :rules="[{ type: 'number', message: '必须为数字值', trigger: 'change'}]">
            <el-input class="e-input" v-model="tmpDeclaration.incidental"></el-input>
          </el-form-item>
          <el-form-item label="合同协议号：">
            <el-input class="e-input" v-model="tmpDeclaration.agreementNumber"></el-input>
          </el-form-item>
          <el-form-item label="标记唛码及备注：" style="width:90%">
            <el-input type="textarea" v-model="tmpDeclaration.shippingMarksAndRemarks" :rows="3" style="width:450px;"></el-input>
          </el-form-item>
        </div>
        <div class="form-title">商品列表</div>
        <div class="packinglist-panel">
          <packing-item :packinglistData.sync="tmpDeclaration.packingList" :declarationType="tmpDeclaration.declarationType" :onlyView="false">
          </packing-item>
        </div>
        <div class="form-title">制单信息</div>
        <div class="form-panel">
          <el-form-item label="录入员：">
            <el-input class="e-input" v-model="tmpDeclaration.entryClerk"></el-input>
          </el-form-item>
          <el-form-item label="录入单位：">
            <el-input class="e-input" v-model="tmpDeclaration.entryUnit"></el-input>
          </el-form-item>
          <el-form-item label="报关员：">
            <el-input class="e-input" v-model="tmpDeclaration.customsBroker"></el-input>
          </el-form-item>
          <el-form-item label="制填日期：">
            <el-date-picker v-model="tmpDeclaration.fillingDate" @change="fillingDateChange" type="date" class="e-input" placeholder="选择制填日期">
            </el-date-picker>
          </el-form-item>
        </div>
        <div style="height:100px;"></div>
      </el-form>
    </div>

    <!-- 提交审核信息列表 -->
    <el-dialog size="tiny" title="审核信息列表" :visible.sync="showCheckDialog">
      <el-table ref="checkList" :data="checkList" style="width: 100%">
        <el-table-column label="状态" width="80">
          <template  slot-scope="scope">
            <span v-show="!scope.row.data.includes('失败')">
              <i style="color:green;font-size:18px;" class="fa fa-check" />
            </span>
            <span v-show="scope.row.data.includes('失败')">
              <i style="color:red;font-size:18px;" class="fa fa-close" />
            </span>
          </template>
        </el-table-column>
        <el-table-column label="结果">
          <template  slot-scope="scope">
            {{scope.row.data}}
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showCheckDialog = false">取 消</el-button>
        <el-button type="primary" @click="onSure" :disabled="!saveCheckStatus">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import declarationAPI from './api/declarationAPI.js';
import packinglistAPI from './api/packinglistAPI.js';
import companyAPI from '../setting/api/companyAPI.js';
//import './mock/declaration.js';
import packing from './components/packing.vue';

export default {
  data() {
    return {
      shippingNumbersOptions: [],
      audited: false,
      id: 0,
      saveCheckStatus: false,
      showCheckDialog: false,
      checkList: [],
      declarationDataCache: [],
      unitOptions: [],
      packingListData: [],
      searchDeclaration: {
        fillingDate: '',
        declarationDate: '',
        importOrExportDate: '',
      },
      advancedSearchModal: true,
      tmpPacking: {},
      packingdetailDialogModal: false,
      packinglistDialogModal: false,
      declarationType: '',
      declarationID: '',
      clientWidth: 0,
      clientHeight: 0,
      searchWord: '',
      selectedRows: [],
      selectedPackingRow: [],
      declarationData: [],
      currentPage: 1,
      pageSizes: [10, 20, 50],
      pageSize: 10,
      total: 0,
      editMode: 1,
      declarationDialogmodel: false,
      tmpDeclaration: {},
      dataLoading: false,
      confirmLoading: false,
      auditStatusOptions: [
        { key: '', value: '未提交' },
        { key: 'W', value: '未审核' },
        { key: 'N', value: '不通过' },
        { key: 'Y', value: '通过' },
        { key: 'P', value: '放行' },
      ],
      declarationTypeOptions: [
        { key: 'import', value: '进口报关单' },
        { key: 'export', value: '出口报关单' },
      ],
      sort: '',
      sortOptions: [
        { key: '', value: '请选择排序' },
        { key: 'declarationType', value: '报关单类型' },
        { key: 'customsNumber', value: '海关编号' },
        { key: 'importOrExportPort', value: '进口/出口口岸' },
        { key: 'declarationUnit', value: '申报单位' },
        { key: 'declarationDate', value: '申报日期' },
        { key: 'entryDate', value: '录入日期' },
      ],
      retrieval: '',
      retrievalOptions: [
        { key: '', value: '请选择检索字段' },
        { key: 'customsNumber', value: '海关编号' },
        { key: 'declarationUnit', value: '申报单位' },
      ],
      logic: '',
      logicOptions: [
        { key: '', value: '请选择逻辑' },
        { key: 'and', value: '与' },
        { key: 'or', value: '或' },
        { key: 'none', value: '非' },
      ],
    };
  },
  watch: {
    declarationDialogmodel(show) {
      if (show) {
        companyAPI.getCompany().then(res => {
          console.log(res);
          this.unitOptions = res.data;
        });
      }
    },
  },
  methods: {
    importOrExportDateChange(val) {
      this.tmpDeclaration.importOrExportDate = val;
    },
    declarationDateChange(val) {
      this.tmpDeclaration.declarationDate = val;
    },
    fillingDateChange(val) {
      this.tmpDeclaration.fillingDate = val;
    },
    selectUnitChange(val) {
      this.unitOptions.forEach(o => {
        if (o.name == val) {
          Vue.set(this.tmpDeclaration, 'unitAddress', o.address);
          Vue.set(this.tmpDeclaration, 'zipCode', o.postCode);
          Vue.set(this.tmpDeclaration, 'telephone', o.phone);
        }
      });
    },
    rowDBClick(row) {
      declarationAPI.getDeclarationById(row.id).then(data => {
        this.audited = false;
        this.editMode = 1;
        this.tmpDeclaration = data;
        if (data.auditStatus != 'C' && data.auditStatus != 'N') {
          this.audited = true;
        }
        console.log(this.tmpDeclaration);
        companyAPI
          .getCompany()
          .then(res => {
            console.log(res);
            this.unitOptions = res.data;
          })
          .then(() => {
            declarationAPI.getManifestData().then(data => {
              console.log(data);
              this.shippingNumbersOptions = data;
            });
          })
          .then(() => {
            this.declarationDialogmodel = true;
          });
        this.selectedPackingRow = [];
      });
    },
    doSearch() {
      this.filter();
    },
    filter() {
      let list = [];
      if (this.retrieval != '' && this.searchWord != '') {
        this.declarationDataCache.forEach(o => {
          console.log(o);
          if (o[this.retrieval] != 'null') {
            console.log(o[this.retrieval]);
            if (o[this.retrieval].indexOf(this.searchWord) != -1) {
              list.push(o);
            }
          }
        });
      } else {
        list = this.declarationDataCache.concat();
      }
      console.log(list);
      list = list.slice(
        (this.currentPage - 1) * this.pageSize,
        this.pageSize * this.currentPage
      );
      this.declarationData = list.concat();
    },
    checkOrConfirm(declarationForm, serviceId, method) {
      return axios
        .post('/' + serviceId + '/' + serviceId + '/' + method, declarationForm)
        .then(res => res);
    },
    checkOrConfirm2(declarationForm, serviceId, method) {
      return axios
        .post('/' + serviceId + '/' + method, declarationForm)
        .then(res => res);
    },
    commitAudit(commit) {
      this.id = commit;
      Promise.all([
        this.checkOrConfirm(this.tmpDeclaration, 'cottonQuota', 'check'),
        this.checkOrConfirm(this.tmpDeclaration, 'riskAnalysis', 'check'),
        this.checkOrConfirm2(this.tmpDeclaration, 'tax', 'check'),
        this.checkOrConfirm2(this.tmpDeclaration, 'taxCutting', 'check'),
        this.checkOrConfirm2(this.tmpDeclaration, 'manifest', 'check'),
        this.checkOrConfirm2(this.tmpDeclaration, 'processingTrade', 'check'),
      ]).then(datas => {
        let flag = true;
        console.log(datas);
        datas.forEach(data => {
          if (data.status != 200) {
            flag = false;
          }
        });
        this.saveCheckStatus = flag;
        this.checkList = datas;
        this.showCheckDialog = true;
      });
    },
    onSure() {
      if (this.saveCheckStatus) {
        let rowIds = [];
        this.selectedRows.forEach(function(row) {
          rowIds.push(row.id);
        });
        if (!this.id) {
          if (this.editMode == 0) {
            rowIds = [this.declarationID];
            this.declarationTypeOptions.forEach(o => {
              if (o.key == this.tmpDeclaration.declarationType) {
                Vue.set(this.tmpDeclaration, 'declarationTypeName', o.value);
                return;
              }
            });
            Vue.set(this.tmpDeclaration, 'id', this.declarationID);
            declarationAPI
              .addDeclaration(this.tmpDeclaration)
              .then(res => {
                this.tmpDeclaration = {
                  declarationType: this.tmpDeclaration.declarationType,
                };
              })
              .then(() => {
                declarationAPI.commitAudit(rowIds).then(res => {
                  if (res.status == 200) {
                    this.$notify({
                      title: '成功',
                      message: res.data,
                      type: 'success',
                      duration: 2000,
                    });
                  }
                  this.getDeclarationData();
                });
              });
          } else {
            rowIds = [this.tmpDeclaration.id];
            declarationAPI.commitAudit(rowIds).then(res => {
              if (res.status == 200) {
                this.$notify({
                  title: '成功',
                  message: res.data,
                  type: 'success',
                  duration: 2000,
                });
              }
              this.getDeclarationData();
            });
          }
        } else {
          declarationAPI.commitAudit(rowIds).then(res => {
            this.$notify({
              title: '成功',
              message: res.data,
              type: 'success',
              duration: 2000,
            });
            this.getDeclarationData();
          });
        }
        this.checkList = [];
        this.showCheckDialog = false;
        this.saveCheckStatus = false;
      } else {
        this.$message.error('审核失败');
      }
    },
    advanceSearch() {
      this.searchDeclaration = {
        fillingDate: '',
        declarationDate: '',
        importOrExportDate: '',
      };
      this.advancedSearchModal = true;
    },
    doAdvanceSearch() {
      this.advancedSearchModal = false;
      let list = [];
      console.log(this.searchDeclaration);
      if (this.searchDeclaration.length == 0) {
        list = this.declarationData;
      } else {
        this.declarationDataCache.forEach(o => {
          let dFlag = true;
          loop: for (let i in this.searchDeclaration) {
            if (
              this.searchDeclaration[i] == '' ||
              typeof this.searchDeclaration[i] == 'undefined'
            ) {
              console.log(this.searchDeclaration[i]);
            } else if (o[i].indexOf(this.searchDeclaration[i]) < 0) {
              dFlag = false;
              break loop;
            }
          }
          if (dFlag) {
            list.push(o);
          }
        });
      }
      console.log(list);
      list = list.slice(
        (this.currentPage - 1) * this.pageSize,
        this.pageSize * this.currentPage
      );
      this.declarationData = list.concat();
    },
    showPackinglist(packingList, type) {
      this.packingListData = packingList;
      this.declarationType = type;
      this.selectedPackingRow = [];
      this.packinglistDialogModal = true;
    },
    getDeclarationData() {
      let obj = {
        retrieval: this.retrieval,
        searchWord: this.searchWord,
        pageSize: this.pageSize,
        pageIndex: this.currentPage,
      };
      declarationAPI.getDeclaration(obj).then(data => {
        console.log(data);
        this.declarationDataCache = data;
        this.total = data.length;
        this.filter();
        this.dataLoading = false;
      });
    },
    onSelectionChange(selection) {
      this.selectedRows = selection;
      this.tmpDeclaration = Object.assign({}, this.selectedRows[0]);
      this.audited = false;
      selection.forEach(select => {
        if (select.auditStatus != 'C' && select.auditStatus != 'N') {
          this.audited = true;
          return;
        }
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getDeclarationData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getDeclarationData();
    },
    expandRow(row) {
      this.declarationType = row.declarationType;
      this.packingListData = row.packingList;
    },
    addClick() {
      this.editMode = 0;
      this.tmpDeclaration = {
        declarationType: 'import',
        packingList: [],
      };
      this.declarationID = Math.floor(Math.random() * 999999) + 1;
      companyAPI
        .getCompany()
        .then(res => {
          console.log(res);
          this.unitOptions = res.data;
        })
        .then(() => {
          declarationAPI.getManifestData().then(data => {
            console.log(data);
            this.shippingNumbersOptions = data;
          });
        })
        .then(() => {
          this.declarationDialogmodel = true;
        });
      this.selectedPackingRow = [];
    },
    editClick() {
      declarationAPI.getDeclarationById(this.selectedRows[0].id).then(data => {
        this.editMode = 1;
        this.tmpDeclaration = data;
        console.log(this.tmpDeclaration);
        companyAPI
          .getCompany()
          .then(res => {
            console.log(res);
            this.unitOptions = res.data;
          })
          .then(() => {
            declarationAPI.getManifestData().then(data => {
              console.log(data);
              this.shippingNumbersOptions = data;
            });
          })
          .then(() => {
            this.declarationDialogmodel = true;
          });
        this.selectedPackingRow = [];
      });
    },
    deleteClick() {
      let rowIds = [];
      this.selectedRows.forEach(function(row) {
        rowIds.push(row.id);
      });
      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          return declarationAPI.deleteDeclaration(rowIds).then(res => {
            if (res.status == 200) {
              this.$notify({
                title: '成功',
                message: res.data,
                type: 'success',
                duration: 2000,
              });
              this.getDeclarationData();
            }
          });
        })
        .catch(() => {
          this.$notify.error({
            title: '取消',
            message: '操作取消！',
            duration: 2000,
          });
        });
    },
    returnMain() {
      this.selectedRows = [];
      this.getDeclarationData();
      this.declarationDialogmodel = false;
    },
    confirm() {
      this.$refs['declarationForm'].validate(valid => {
        if (valid) {
          this.declarationTypeOptions.forEach(o => {
            if (o.key == this.tmpDeclaration.declarationType) {
              Vue.set(this.tmpDeclaration, 'declarationTypeName', o.value);
              return;
            }
          });
          if (this.editMode == 1) {
            declarationAPI.updateDeclaration(this.tmpDeclaration).then(res => {
              if (res.status == 200) {
                this.$notify({
                  title: '成功',
                  message: res.data,
                  type: 'success',
                  duration: 2000,
                });
                this.getDeclarationData();
              }
            });
          } else {
            Vue.set(this.tmpDeclaration, 'id', this.declarationID);
            declarationAPI.addDeclaration(this.tmpDeclaration).then(res => {
              if (res.status == 200) {
                this.$notify({
                  title: '成功',
                  message: res.data,
                  type: 'success',
                  duration: 2000,
                });
              }
              this.tmpDeclaration = {
                declarationType: this.tmpDeclaration.declarationType,
              };
              this.getDeclarationData();
            });
          }
        } else {
          this.$notify({
            title: '操作失败',
            message: '请正确填写表单项',
            type: 'error',
            duration: 2000,
          });
          return false;
        }
      });
    },
  },
  created() {
    this.clientWidth = document.documentElement.clientWidth - 200;
    this.clientHeight = document.documentElement.clientHeight - 200;
    this.getDeclarationData();
  },
  components: {
    'packing-item': packing,
  },
};
</script>

<style scoped>
.main-content-wrap {
  padding: 10px;
}

.search-bar {
  width: 100%;
  text-align: right;
  padding-bottom: 10px;
}

.demo-table-expand {
  font-size: 12px;
}

.demo-table-expand label {
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 45%;
}

.page-wrap {
  width: 100%;
  text-align: right;
  position: relative;
  top: 5px;
  padding-right: 10px;
}

.e-input {
  width: 270px;
}

.search-select {
  width: 150px;
}

.form-title {
  font-size: 24px;
  font-weight: bold;
  margin-left: 6%;
  padding: 20px 0 5px 0;
}

.form-panel {
  width: 80%;
  margin-left: 5%;
  padding: 20px 0 0 0;
  border-top: 2px solid #ccc;
  border-radius: 4px;
}

.s-input {
  width: 400px;
}

.search-form-title {
  padding: 20px 0;
}

.packinglist-panel {
  width: 80%;
  margin-left: 5%;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}
</style>
