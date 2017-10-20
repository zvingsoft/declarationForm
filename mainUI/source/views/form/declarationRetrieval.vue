<template>
  <div v-if="advancedSearchModal">
    <div style="width:100%;text-align:center; margin:auto;">
      <el-form label-position="left" :model="searchDeclaration" label-width="200px" class="e-form">
      <div style="padding-top:20px;width:900px; margin:auto;overflow:hidden;">
        <h3 style="float:left;width:200px;line-height:33px;text-align:left;">高级搜索</h3>
        <div>
          <el-input style="width:620px;padding-right:10px;" v-model="searchDeclaration.seachword"></el-input>
          <el-button style="width:70px;" @click="doAdvanceSearch">搜　索</el-button>
        </div>
      </div>
      <hr style="color:#CCC;width:100%;"></hr>
      <div style="width:900px;margin:auto;text-align:left;">
          <h3 class="search-form-title">高级选项</h3>
          <el-form-item label="报关单类型">
            <el-select class="s-input" v-model="searchDeclaration.declarationtype" placeholder="请选择">
              <el-option v-for="item in declarationTypeOptions" :key="item.key" :label="item.value" :value="item.key">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="预录入编号">
            <el-input class="s-input" v-model="searchDeclaration.preentrynumber"></el-input>
          </el-form-item>
          <el-form-item label="海关编号">
            <el-input class="s-input" v-model="searchDeclaration.customsnumber"></el-input>
          </el-form-item>
          <el-form-item v-if="searchDeclaration.declarationtype == 'import'" label="进口口岸">
            <el-input class="s-input" v-model="searchDeclaration.importorexportport"></el-input>
          </el-form-item>
          <el-form-item v-else label="出口口岸">
            <el-input class="s-input" v-model="searchDeclaration.importorexportport"></el-input>
          </el-form-item>
          <el-form-item label="备案号">
            <el-input class="s-input" v-model="searchDeclaration.recordnumber"></el-input>
          </el-form-item>
          <el-form-item v-if="searchDeclaration.declarationtype == 'import'" label="进口日期">
            <el-date-picker v-model="searchDeclaration.importorexportdate" type="date" class="s-input" placeholder="选择进口日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item v-else label="出口日期">
            <el-date-picker v-model="searchDeclaration.importorexportdate" type="date" class="s-input" placeholder="选择出口日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="申报日期">
            <el-date-picker v-model="searchDeclaration.declarationdate" type="date" class="s-input" placeholder="选择申报日期">
            </el-date-picker>
          </el-form-item>
          <h3 class="search-form-title">单位相关选项</h3>
          <el-form-item label="经营单位">
            <el-input class="s-input" v-model="searchDeclaration.managementunit"></el-input>
          </el-form-item>
          <el-form-item label="运输方式">
            <el-input class="s-input" v-model="searchDeclaration.shippingtype"></el-input>
          </el-form-item>
          <el-form-item label="运输工具名称">
            <el-input class="s-input" v-model="searchDeclaration.shippingtools"></el-input>
          </el-form-item>
          <el-form-item label="提运单号">
            <el-input class="s-input" v-model="searchDeclaration.shippingnumbers"></el-input>
          </el-form-item>
          <el-form-item label="收货单位">
            <el-input class="s-input" v-model="searchDeclaration.forwardingunit"></el-input>
          </el-form-item>
          <el-form-item label="贸易方式">
            <el-input class="s-input" v-model="searchDeclaration.tradingtype"></el-input>
          </el-form-item>
          <el-form-item label="征免性质">
            <el-input class="s-input" v-model="searchDeclaration.exemptionnature"></el-input>
          </el-form-item>
          <el-form-item label="征税比例">
            <el-input class="s-input" v-model="searchDeclaration.settlementtype"></el-input>
          </el-form-item>
          <h3 class="search-form-title">运输货物选项</h3>
          <el-form-item label="许可证号">
            <el-input class="s-input" v-model="searchDeclaration.licensekey"></el-input>
          </el-form-item>
          <el-form-item v-if="searchDeclaration.declarationtype == 'import'" label="启运国">
            <el-input class="s-input" v-model="searchDeclaration.startorarrivalcountry"></el-input>
          </el-form-item>
          <el-form-item v-else label="运抵国">
            <el-input class="s-input" v-model="searchDeclaration.startorarrivalcountry"></el-input>
          </el-form-item>
          <el-form-item v-if="searchDeclaration.declarationtype == 'import'" label="装货港">
            <el-input class="s-input" v-model="searchDeclaration.loadingorfingerport"></el-input>
          </el-form-item>
          <el-form-item v-else label="指运港">
            <el-input class="s-input" v-model="searchDeclaration.loadingorfingerport"></el-input>
          </el-form-item>
          <el-form-item v-if="searchDeclaration.declarationtype == 'import'" label="境内目的地">
            <el-input class="s-input" v-model="searchDeclaration.destinationorconsignmentplace"></el-input>
          </el-form-item>
          <el-form-item v-else label="境内货源地">
            <el-input class="s-input" v-model="searchDeclaration.destinationorconsignmentplace"></el-input>
          </el-form-item>
          <el-form-item label="批准文号">
            <el-input class="s-input" v-model="searchDeclaration.approvalnumber"></el-input>
          </el-form-item>
          <el-form-item label="成交方式">
            <el-input class="s-input" v-model="searchDeclaration.transactionmethod"></el-input>
          </el-form-item>
          <el-form-item label="运费">
            <el-input class="s-input" v-model="searchDeclaration.freight"></el-input>
          </el-form-item>
          <el-form-item label="保费">
            <el-input class="s-input" v-model="searchDeclaration.premium"></el-input>
          </el-form-item>
          <el-form-item label="杂费">
            <el-input class="s-input" v-model="searchDeclaration.incidental"></el-input>
          </el-form-item>
          <el-form-item label="合同协议号">
            <el-input class="s-input" v-model="searchDeclaration.agreementnumber"></el-input>
          </el-form-item>
          <el-form-item label="件数">
            <el-input class="s-input" v-model="searchDeclaration.goodsnumber"></el-input>
          </el-form-item>
          <el-form-item label="包装种类">
            <el-input class="s-input" v-model="searchDeclaration.packagingtype"></el-input>
          </el-form-item>
          <el-form-item label="毛重（千克）">
            <el-input class="s-input" v-model="searchDeclaration.grossweight"></el-input>
          </el-form-item>
          <el-form-item label="净重（千克）">
            <el-input class="s-input" v-model="searchDeclaration.netweight"></el-input>
          </el-form-item>
          <el-form-item label="集装箱号">
            <el-input class="s-input" v-model="searchDeclaration.containernumber"></el-input>
          </el-form-item>
          <el-form-item label="随附单证">
            <el-input class="s-input" v-model="searchDeclaration.documentsattached"></el-input>
          </el-form-item>
          <el-form-item v-if="searchDeclaration.declarationtype == 'import'" label="用途">
            <el-input class="s-input" v-model="searchDeclaration.purposeormanufacturer"></el-input>
          </el-form-item>
          <el-form-item v-else label="生产厂家">
            <el-input class="s-input" v-model="searchDeclaration.purposeormanufacturer"></el-input>
          </el-form-item>
          <el-form-item label="标记唛码及备注" style="width:90%">
            <el-input type="textarea" v-model="searchDeclaration.shippingmarksandremarks" :rows="3" style="width:450px;"></el-input>
          </el-form-item>
          <el-form-item label="税费征收情况" style="width:90%">
            <el-input type="textarea" v-model="searchDeclaration.taxpaidornot" :rows="3" style="width:450px;"></el-input>
          </el-form-item>
          <h3 class="search-form-title">相关信息选项</h3>
          <el-form-item label="录入员：">
            <el-input class="s-input" v-model="searchDeclaration.entryclerk"></el-input>
          </el-form-item>
          <el-form-item label="录入单位：">
            <el-input class="s-input" v-model="searchDeclaration.entryunit"></el-input>
          </el-form-item>
          <el-form-item label="报关员：">
            <el-input class="s-input" v-model="searchDeclaration.customsbroker"></el-input>
          </el-form-item>
          <el-form-item label="申报单位：">
            <el-input class="s-input" v-model="searchDeclaration.declarationunit"></el-input>
          </el-form-item>
          <el-form-item label="单位地址：">
            <el-input class="s-input" v-model="searchDeclaration.unitaddress"></el-input>
          </el-form-item>
          <el-form-item label="邮编：">
            <el-input class="s-input" v-model="searchDeclaration.zipcode"></el-input>
          </el-form-item>
          <el-form-item label="电话：">
            <el-input class="s-input" v-model="searchDeclaration.telephone"></el-input>
          </el-form-item>
          <el-form-item label="制填日期：">
            <el-date-picker v-model="searchDeclaration.fillingdate" type="date" class="s-input" placeholder="选择制填日期">
            </el-date-picker>
          </el-form-item>
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
      <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length !== 1" @click="editClick">
        <i class="fa fa-edit"></i> 编辑</el-button>
      <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedRows.length === 0" @click="deleteClick">
        <i class="fa fa-remove"></i> 删除</el-button>
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
        <el-input style="width:200px" size="small" v-model="searchword"></el-input>
       <!-- <el-select size="small" v-model="logic" class="search-select">
          <el-option v-for="item in logicOptions" :key="item.key" :label="item.value" :value="item.key">
          </el-option>
        </el-select>-->
        <el-button size="small" type="primary" @click="getDeclarationData" style="width:60px;">搜索</el-button>
      </div>
      <el-table :data="declarationData" ref="declarationTable" v-loading="dataLoading" tooltip-effect="dark" style="width:100%" :height="clientHeight" highlight-current-row @selection-change="onSelectionChange" @expand="expandRow">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand" label-width="160px">
              <el-form-item label="报关单类型：">
                <span>{{props.row.declarationtypename}}</span>
              </el-form-item><br/>
              <el-form-item label="预录入编号：">
                <span>{{props.row.preentrynumber}}</span>
              </el-form-item>
              <el-form-item label="海关编号：">
                <span>{{props.row.customsnumber}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationtype == 'import'" label="进口口岸：">
                <span>{{props.row.importorexportport}}</span>
              </el-form-item>
              <el-form-item v-else label="出口口岸：">
                <span>{{props.row.importorexportport}}</span>
              </el-form-item>
              <el-form-item label="备案号：">
                <span>{{props.row.recordnumber}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationtype == 'import'" label="进口日期：">
                <span>{{props.row.importorexportdate}}</span>
              </el-form-item>
              <el-form-item v-else label="出口日期：">
                <span>{{props.row.importorexportdate}}</span>
              </el-form-item>
              <el-form-item label="申报日期：">
                <span>{{props.row.declarationdate}}</span>
              </el-form-item>
              <el-form-item label="经营单位：">
                <span>{{props.row.managementunit}}</span>
              </el-form-item>
              <el-form-item label="运输方式：">
                <span>{{props.row.shippingtype}}</span>
              </el-form-item>
              <el-form-item label="运输工具名称：">
                <span>{{props.row.shippingtools}}</span>
              </el-form-item>
              <el-form-item label="提运单号：">
                <span>{{props.row.shippingnumbers}}</span>
              </el-form-item>
              <el-form-item label="收货单位：">
                <span>{{props.row.forwardingunit}}</span>
              </el-form-item>
              <el-form-item label="贸易方式：">
                <span>{{props.row.tradingtype}}</span>
              </el-form-item>
              <el-form-item label="征免性质：">
                <span>{{props.row.exemptionnature}}</span>
              </el-form-item>
              <el-form-item label="征税比例：">
                <span>{{props.row.settlementtype}}</span>
              </el-form-item>
              <el-form-item label="许可证号：">
                <span>{{props.row.licensekey}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationtype == 'import'" label="启运国：">
                <span>{{props.row.startorarrivalcountry}}</span>
              </el-form-item>
              <el-form-item v-else label="运抵国：">
                <span>{{props.row.startorarrivalcountry}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationtype == 'import'" label="装货港：">
                <span>{{props.row.loadingorfingerport}}</span>
              </el-form-item>
              <el-form-item v-else label="指运港：">
                <span>{{props.row.loadingorfingerport}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationtype == 'import'" label="境内目的地：">
                <span>{{props.row.destinationorconsignmentplace}}</span>
              </el-form-item>
              <el-form-item v-else label="境内货源地：">
                <span>{{props.row.destinationorconsignmentplace}}</span>
              </el-form-item>
              <el-form-item label="批准文号：">
                <span>{{props.row.approvalnumber}}</span>
              </el-form-item>
              <el-form-item label="成交方式：">
                <span>{{props.row.transactionmethod}}</span>
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
                <span>{{props.row.agreementnumber}}</span>
              </el-form-item>
              <el-form-item label="件数：">
                <span>{{props.row.goodsnumber}}</span>
              </el-form-item>
              <el-form-item label="包装种类：">
                <span>{{props.row.packagingtype}}</span>
              </el-form-item>
              <el-form-item label="毛重（千克）：">
                <span>{{props.row.grossweight}}</span>
              </el-form-item>
              <el-form-item label="净重（千克）：">
                <span>{{props.row.netweight}}</span>
              </el-form-item>
              <el-form-item label="集装箱号：">
                <span>{{props.row.containernumber}}</span>
              </el-form-item>
              <el-form-item label="随附单证：">
                <span>{{props.row.documentsattached}}</span>
              </el-form-item>
              <el-form-item v-if="props.row.declarationtype == 'import'" label="用途：">
                <span>{{props.row.purposeormanufacturer}}</span>
              </el-form-item>
              <el-form-item v-else label="生产厂家：">
                <span>{{props.row.purposeormanufacturer}}</span>
              </el-form-item>
              <el-form-item label="标记唛码及备注：" style="width:90%">
                <span>{{props.row.shippingmarksandremarks}}</span>
              </el-form-item>
              <el-form-item label="商品：" label-width="60px" style="width:100%">
                <packinglist-table :declarationID="declarationID" :declarationType="declarationType">
                </packinglist-table>
              </el-form-item>
              <el-form-item label="税费征收情况：" style="width:90%">
                <span>{{props.row.taxpaidornot}}</span>
              </el-form-item>
              <el-form-item label="录入员：">
                <span>{{props.row.entryclerk}}</span>
              </el-form-item>
              <el-form-item label="录入单位：">
                <span>{{props.row.entryunit}}</span>
              </el-form-item>
              <el-form-item label="报关员：">
                <span>{{props.row.customsbroker}}</span>
              </el-form-item>
              <el-form-item label="申报单位：">
                <span>{{props.row.declarationunit}}</span>
              </el-form-item>
              <el-form-item label="单位地址：">
                <span>{{props.row.unitaddress}}</span>
              </el-form-item>
              <el-form-item label="邮编：">
                <span>{{props.row.zipcode}}</span>
              </el-form-item>
              <el-form-item label="电话：">
                <span>{{props.row.telephone}}</span>
              </el-form-item>
              <el-form-item label="制填日期：">
                <span>{{props.row.fillingdate}}</span>
              </el-form-item>
              <el-form-item label="录入日期：">
                <span>{{props.row.entrydate}}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="customsnumber" show-overflow-tooltip min-width="20%" label="海关编号"></el-table-column>
        <el-table-column prop="declarationtypename" show-overflow-tooltip min-width="20%" label="报关单类型"></el-table-column>
        <el-table-column prop="importorexportport" show-overflow-tooltip min-width="20%" label="进口/出口口岸"></el-table-column>
        <el-table-column min-width="20%" label="商品详情">
          <template slot-scope="scope">
            <el-button type="text">
              <span style="color:green;" @click="showPackinglist(scope.row.id,scope.row.declarationtype)">查看商品</span>
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="declarationunit" show-overflow-tooltip min-width="30%" label="申报单位"></el-table-column>
        <el-table-column prop="declarationdate" show-overflow-tooltip min-width="15%" label="申报日期"></el-table-column>
        <el-table-column prop="entrydate" show-overflow-tooltip min-width="15%" label="录入日期"></el-table-column>
      </el-table>
      <div class="page-wrap">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next" :total="total">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="商品列表详情" :visible.sync="packinglistDialogModal" size="large">
      <el-toolbar style="margin-bottom:20px;">
        <el-button class="z-toolbar-btn" :plain="true" @click="addPackingClick" style="margin-left:10px;">
          <i class="fa fa-plus"></i>添加</el-button>
        <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedPackingRow.length === 0" @click="editPackingClick">
          <i class="fa fa-edit"></i>编辑</el-button>
        <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedPackingRow.length === 0" @click="deletePackingClick">
          <i class="fa fa-remove"></i>删除</el-button>
      </el-toolbar>
      <packinglist-table :declarationID="declarationID" :declarationType="declarationType" @row-click="packingRowClick">
      </packinglist-table>
    </el-dialog>
    <el-dialog :title="editMode==1? '编辑商品信息': '添加商品'" :visible.sync="packingdetailDialogModal" :close-on-click-modal="false">
      <el-form label-position="right" :model="tmpPacking" inline label-width="200px">
        <el-form-item label="商品编号：">
          <el-input class="e-input" v-model="tmpPacking.id"></el-input>
        </el-form-item>
        <el-form-item label="商品名称、规格型号：">
          <el-input class="e-input" type="textarea" :rows="3" v-model="tmpPacking.name"></el-input>
        </el-form-item>
        <el-form-item label="数量及单位：">
          <el-input class="e-input" v-model="tmpPacking.number"></el-input>
        </el-form-item>
        <el-form-item label="单价：">
          <el-input class="e-input" v-model="tmpPacking.singleprice"></el-input>
        </el-form-item>
        <el-form-item label="总价：">
          <el-input class="e-input" v-model="tmpPacking.totalprice"></el-input>
        </el-form-item>
        <el-form-item v-if="this.declarationType == 'import'" label="原产国：">
          <el-input class="e-input" v-model="tmpPacking.productcountry"></el-input>
        </el-form-item>
        <el-form-item v-else label="最终目的国：">
          <el-input class="e-input" v-model="tmpPacking.productcountry"></el-input>
        </el-form-item>
        <el-form-item label="币制：">
          <el-input class="e-input" v-model="tmpPacking.currency"></el-input>
        </el-form-item>
        <el-form-item label="征免：">
          <el-input class="e-input" v-model="tmpPacking.exemption"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="packingdetailDialogModal = false">取 消</el-button>
        <el-button type="primary" @click="packingdetailConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
  <div v-else>
    <el-toolbar>
      <el-button class="z-toolbar-btn" :plain="true" @click="returnMain">
        <i class="fa fa-chevron-left"></i>返回</el-button>
        <span class="button-separator"></span>
      <el-button class="z-toolbar-btn" :plain="true" @click="confirm">
        <i class="fa fa-save"></i>
        <span v-if="editMode == 1">保存编辑</span>
        <span v-else>确认新建</span>
      </el-button>
    </el-toolbar>
    <div class="main-content-wrap" style="background-color:#f5f5f5">
      <el-form label-position="right" :model="tmpDeclaration" label-width="160px" class="e-form">
        <div class="form-title">基本信息</div>
        <div class="form-panel">
        <el-form-item label="报关单类型：">
          <el-select class="e-input" v-model="tmpDeclaration.declarationtype" placeholder="请选择">
            <el-option v-for="item in declarationTypeOptions" :key="item.key" :label="item.value" :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预录入编号：">
          <el-input class="e-input" v-model="tmpDeclaration.preentrynumber"></el-input>
        </el-form-item>
        <el-form-item label="海关编号：">
          <el-input class="e-input" v-model="tmpDeclaration.customsnumber"></el-input>
        </el-form-item>
        <el-form-item v-if="tmpDeclaration.declarationtype == 'import'" label="进口口岸：">
          <el-input class="e-input" v-model="tmpDeclaration.importorexportport"></el-input>
        </el-form-item>
        <el-form-item v-else label="出口口岸：">
          <el-input class="e-input" v-model="tmpDeclaration.importorexportport"></el-input>
        </el-form-item>
        <el-form-item label="备案号：">
          <el-input class="e-input" v-model="tmpDeclaration.recordnumber"></el-input>
        </el-form-item>
        <el-form-item v-if="tmpDeclaration.declarationtype == 'import'" label="进口日期：">
          <el-date-picker v-model="tmpDeclaration.importorexportdate" type="date" class="e-input" placeholder="选择进口日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item v-else label="出口日期：">
          <el-date-picker v-model="tmpDeclaration.importorexportdate" type="date" class="e-input" placeholder="选择出口日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="申报日期：">
          <el-date-picker v-model="tmpDeclaration.declarationdate" type="date" class="e-input" placeholder="选择申报日期">
          </el-date-picker>
        </el-form-item>
        </div>
        <div class="form-title">单位信息</div>
        <div class="form-panel">
        <el-form-item label="经营单位：">
          <el-input class="e-input" v-model="tmpDeclaration.managementunit"></el-input>
        </el-form-item>
        <el-form-item label="运输方式：">
          <el-input class="e-input" v-model="tmpDeclaration.shippingtype"></el-input>
        </el-form-item>
        <el-form-item label="运输工具名称：">
          <el-input class="e-input" v-model="tmpDeclaration.shippingtools"></el-input>
        </el-form-item>
        <el-form-item label="提运单号：">
          <el-input class="e-input" v-model="tmpDeclaration.shippingnumbers"></el-input>
        </el-form-item>
        <el-form-item label="收货单位：">
          <el-input class="e-input" v-model="tmpDeclaration.forwardingunit"></el-input>
        </el-form-item>
        <el-form-item label="贸易方式：">
          <el-input class="e-input" v-model="tmpDeclaration.tradingtype"></el-input>
        </el-form-item>
        <el-form-item label="征免性质：">
          <el-input class="e-input" v-model="tmpDeclaration.exemptionnature"></el-input>
        </el-form-item>
        <el-form-item label="征税比例：">
          <el-input class="e-input" v-model="tmpDeclaration.settlementtype"></el-input>
        </el-form-item>
        </div>
        <div class="form-title">货物信息</div>
        <div class="form-panel">
        <el-form-item label="许可证号：">
          <el-input class="e-input" v-model="tmpDeclaration.licensekey"></el-input>
        </el-form-item>
        <el-form-item v-if="tmpDeclaration.declarationtype == 'import'" label="启运国：">
          <el-input class="e-input" v-model="tmpDeclaration.startorarrivalcountry"></el-input>
        </el-form-item>
        <el-form-item v-else label="运抵国：">
          <el-input class="e-input" v-model="tmpDeclaration.startorarrivalcountry"></el-input>
        </el-form-item>
        <el-form-item v-if="tmpDeclaration.declarationtype == 'import'" label="装货港：">
          <el-input class="e-input" v-model="tmpDeclaration.loadingorfingerport"></el-input>
        </el-form-item>
        <el-form-item v-else label="指运港：">
          <el-input class="e-input" v-model="tmpDeclaration.loadingorfingerport"></el-input>
        </el-form-item>
        <el-form-item v-if="tmpDeclaration.declarationtype == 'import'" label="境内目的地：">
          <el-input class="e-input" v-model="tmpDeclaration.destinationorconsignmentplace"></el-input>
        </el-form-item>
        <el-form-item v-else label="境内货源地：">
          <el-input class="e-input" v-model="tmpDeclaration.destinationorconsignmentplace"></el-input>
        </el-form-item>
        <el-form-item label="批准文号：">
          <el-input class="e-input" v-model="tmpDeclaration.approvalnumber"></el-input>
        </el-form-item>
        <el-form-item label="成交方式：">
          <el-input class="e-input" v-model="tmpDeclaration.transactionmethod"></el-input>
        </el-form-item>
        <el-form-item label="运费：">
          <el-input class="e-input" v-model="tmpDeclaration.freight"></el-input>
        </el-form-item>
        <el-form-item label="保费：">
          <el-input class="e-input" v-model="tmpDeclaration.premium"></el-input>
        </el-form-item>
        <el-form-item label="杂费：">
          <el-input class="e-input" v-model="tmpDeclaration.incidental"></el-input>
        </el-form-item>
        <el-form-item label="合同协议号：">
          <el-input class="e-input" v-model="tmpDeclaration.agreementnumber"></el-input>
        </el-form-item>
        <el-form-item label="件数：">
          <el-input class="e-input" v-model="tmpDeclaration.goodsnumber"></el-input>
        </el-form-item>
        <el-form-item label="包装种类：">
          <el-input class="e-input" v-model="tmpDeclaration.packagingtype"></el-input>
        </el-form-item>
        <el-form-item label="毛重（千克）：">
          <el-input class="e-input" v-model="tmpDeclaration.grossweight"></el-input>
        </el-form-item>
        <el-form-item label="净重（千克）：">
          <el-input class="e-input" v-model="tmpDeclaration.netweight"></el-input>
        </el-form-item>
        <el-form-item label="集装箱号：">
          <el-input class="e-input" v-model="tmpDeclaration.containernumber"></el-input>
        </el-form-item>
        <el-form-item label="随附单证：">
          <el-input class="e-input" v-model="tmpDeclaration.documentsattached"></el-input>
        </el-form-item>
        <el-form-item v-if="tmpDeclaration.declarationtype == 'import'" label="用途：">
          <el-input class="e-input" v-model="tmpDeclaration.purposeormanufacturer"></el-input>
        </el-form-item>
        <el-form-item v-else label="生产厂家：">
          <el-input class="e-input" v-model="tmpDeclaration.purposeormanufacturer"></el-input>
        </el-form-item>
        <el-form-item label="标记唛码及备注：" style="width:90%">
          <el-input type="textarea" v-model="tmpDeclaration.shippingmarksandremarks" :rows="3" style="width:450px;"></el-input>
        </el-form-item>
        <el-form-item label="税费征收情况：" style="width:90%">
          <el-input type="textarea" v-model="tmpDeclaration.taxpaidornot" :rows="3" style="width:450px;"></el-input>
        </el-form-item>
        </div>
        <div class="form-title">商品列表</div>
        <div class="packinglist-panel">
            <div style="height:50px;background-color:#f5f5f5; padding:5px;">
              <el-button class="z-toolbar-btn" :plain="true" @click="addPackingClick" style="margin-left:10px;">
                <i class="fa fa-plus"></i>添加</el-button>
              <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedPackingRow.length === 0" @click="editPackingClick">
                <i class="fa fa-edit"></i>编辑</el-button>
              <el-button class="z-toolbar-btn" :plain="true" :disabled="selectedPackingRow.length === 0" @click="deletePackingClick">
                <i class="fa fa-remove"></i>删除</el-button>
            </div>
            <packinglist-table :declarationID="tmpDeclaration.id" :declarationType="tmpDeclaration.declarationtype" @row-click="packingRowClick">
            </packinglist-table>
        </div>
        <div class="form-title">操作相关</div>
        <div class="form-panel">
        <el-form-item label="录入员：">
          <el-input class="e-input" v-model="tmpDeclaration.entryclerk"></el-input>
        </el-form-item>
        <el-form-item label="录入单位：">
          <el-input class="e-input" v-model="tmpDeclaration.entryunit"></el-input>
        </el-form-item>
        <el-form-item label="报关员：">
          <el-input class="e-input" v-model="tmpDeclaration.customsbroker"></el-input>
        </el-form-item>
        <el-form-item label="申报单位：">
          <el-input class="e-input" v-model="tmpDeclaration.declarationunit"></el-input>
        </el-form-item>
        <el-form-item label="单位地址：">
          <el-input class="e-input" v-model="tmpDeclaration.unitaddress"></el-input>
        </el-form-item>
        <el-form-item label="邮编：">
          <el-input class="e-input" v-model="tmpDeclaration.zipcode"></el-input>
        </el-form-item>
        <el-form-item label="电话：">
          <el-input class="e-input" v-model="tmpDeclaration.telephone"></el-input>
        </el-form-item>
        <el-form-item label="制填日期：">
          <el-date-picker v-model="tmpDeclaration.fillingdate" type="date" class="e-input" placeholder="选择制填日期">
          </el-date-picker>
        </el-form-item>
        </div>
        <div style="height:100px;"></div>
      </el-form>
    </div>
    <el-dialog :title="editMode==1? '编辑商品信息': '添加商品'" :visible.sync="packingdetailDialogModal" :close-on-click-modal="false">
      <el-form label-position="right" :model="tmpPacking" inline label-width="200px">
        <el-form-item label="商品编号：">
          <el-input class="e-input" v-model="tmpPacking.id"></el-input>
        </el-form-item>
        <el-form-item label="商品名称、规格型号：">
          <el-input class="e-input" type="textarea" :rows="3" v-model="tmpPacking.name"></el-input>
        </el-form-item>
        <el-form-item label="数量及单位：">
          <el-input class="e-input" v-model="tmpPacking.number"></el-input>
        </el-form-item>
        <el-form-item label="单价：">
          <el-input class="e-input" v-model="tmpPacking.singleprice"></el-input>
        </el-form-item>
        <el-form-item label="总价：">
          <el-input class="e-input" v-model="tmpPacking.totalprice"></el-input>
        </el-form-item>
        <el-form-item v-if="this.declarationType == 'import'" label="原产国：">
          <el-input class="e-input" v-model="tmpPacking.productcountry"></el-input>
        </el-form-item>
        <el-form-item v-else label="最终目的国：">
          <el-input class="e-input" v-model="tmpPacking.productcountry"></el-input>
        </el-form-item>
        <el-form-item label="币制：">
          <el-input class="e-input" v-model="tmpPacking.currency"></el-input>
        </el-form-item>
        <el-form-item label="征免：">
          <el-input class="e-input" v-model="tmpPacking.exemption"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="packingdetailDialogModal = false">取 消</el-button>
        <el-button type="primary" @click="packingdetailConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import declarationAPI from './api/declarationAPI.js';
import packinglistAPI from './api/packinglistAPI.js';
import './mock/declaration.js';
import packinglistTable from './components/packinglistTable.vue';

export default {
  data() {
    return {
      searchDeclaration: {},
      advancedSearchModal: true,
      tmpPacking: {},
      packingdetailDialogModal: false,
      packinglistDialogModal: false,
      declarationType: '',
      declarationID: '',
      clientWidth: 0,
      clientHeight: 0,
      searchword: '',
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
      declarationTypeOptions: [
        { key: 'import', value: '进口报关单' },
        { key: 'export', value: '出口报关单' },
      ],
      sort: '',
      sortOptions: [
        { key: '', value: '请选择排序' },
        { key: 'declarationtype', value: '报关单类型' },
        { key: 'customsnumber', value: '海关编号' },
        { key: 'importorexportport', value: '进口/出口口岸' },
        { key: 'declarationunit', value: '申报单位' },
        { key: 'declarationdate', value: '申报日期' },
        { key: 'entrydate', value: '录入日期' },
      ],
      retrieval: '',
      retrievalOptions: [
        { key: '', value: '请选择检索字段' },
        { key: 'customsnumber', value: '海关编号' },
        { key: 'declarationunit', value: '申报单位' },
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
  methods: {
    advanceSearch() {
      this.advancedSearchModal = true;
    },
    doAdvanceSearch() {
      this.advancedSearchModal = false;
    },
    addPackingClick() {
      this.editMode = 0;
      this.tmpPacking = {};
      this.packingdetailDialogModal = true;
    },
    editPackingClick() {
      this.editMode = 1;
      this.tmpPacking = Object.assign({}, this.selectedPackingRow);
      this.packingdetailDialogModal = true;
    },
    deletePackingClick() {
      this.$confirm('确定删除吗？删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action !== 'confirm') {
            done();
          }
          instance.confirmButtonLoading = true;

          return packinglistAPI
            .deletePackingList(this.selectedPackingRow.id)
            .then(data => {
              instance.confirmButtonLoading = false;
              console.log(data);
              done(data);
            });
        },
      })
        .then(data => {
          this.selectedPackingRow = [];
          this.$notify({
            title: '提示',
            message: '删除成功！',
            type: 'success',
            duration: 2000,
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
    packingdetailConfirm() {
      if (this.editMode == 1) {
        packinglistAPI.updatePackingList(this.tmpPacking).then(data => {
          if (data.status == 1) {
            this.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000,
            });
          }
          this.packingdetailDialogModal = false;
        });
      } else {
        packinglistAPI.addPackingList(this.tmpPacking).then(data => {
          if (data.status == 1) {
            this.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000,
            });
          }
          this.packingdetailDialogModal = false;
        });
      }
    },
    packingRowClick(row) {
      console.log(row);
      this.selectedPackingRow = row;
    },
    showPackinglist(id, type) {
      console.log(id);
      console.log(type);
      this.declarationID = id;
      this.declarationType = type;
      this.selectedPackingRow = [];
      this.packinglistDialogModal = true;
    },
    getDeclarationData() {
      this.dataLoading = true;
      declarationAPI
        .getDeclaration(this.currentPage, this.pageSize)
        .then(data => {
          console.log(data);
          this.declarationData = data.data;
          this.total = data.total;
          this.dataLoading = false;
        });
    },
    onSelectionChange(selection) {
      this.selectedRows = selection;
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
      this.declarationType = row.declarationtype;
      this.declarationID = row.id;
    },
    addClick() {
      this.editMode = 0;
      this.tmpDeclaration = {
        declarationtype: 'import',
      };
      this.declarationDialogmodel = true;
      this.selectedPackingRow = [];
    },
    editClick() {
      this.editMode = 1;
      this.tmpDeclaration = Object.assign({}, this.selectedRows[0]);
      this.declarationDialogmodel = true;
      this.selectedPackingRow = [];
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
        beforeClose: (action, instance, done) => {
          if (action !== 'confirm') {
            done();
          }
          instance.confirmButtonLoading = true;

          return declarationAPI.deleteDeclaration(rowIds).then(data => {
            instance.confirmButtonLoading = false;
            done(data);
          });
        },
      })
        .then(data => {
          this.declarationData = this.declarationData.filter(
            val => !rowIds.includes(val.id)
          );
          this.selectedRows = [];
          this.$notify({
            title: '提示',
            message: '删除成功！',
            type: 'success',
            duration: 2000,
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
      this.declarationDialogmodel = false;
    },
    confirm() {
      if (this.editMode == 1) {
        declarationAPI.updateDeclaration(this.tmpDeclaration).then(data => {
          if (data.status == 1) {
            this.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000,
            });
          }
          let index = this.declarationData.findIndex(
            val => val.id === this.tmpDeclaration.id
          );
          this.declarationData = [
            ...this.declarationData.slice(0, index),
            Object.assign({}, this.tmpDeclaration),
            ...this.declarationData.slice(index + 1),
          ];
        });
      } else {
        declarationAPI.addDeclaration(this.tmpDeclaration).then(data => {
          if (data.status == 1) {
            this.$notify({
              title: '成功',
              message: data.message,
              type: 'success',
              duration: 2000,
            });
          }
          this.declarationData = [
            ...this.declarationData,
            Object.assign({}, this.tmpDeclaration, { id: data.declaration.id }),
          ];

          this.tmpDeclaration = {
            declarationtype: 'import',
          };
        });
      }
    },
  },
  created() {
    this.clientWidth = document.documentElement.clientWidth - 200;
    this.clientHeight = document.documentElement.clientHeight - 200;
    this.getDeclarationData();
  },
  components: {
    'packinglist-table': packinglistTable,
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
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
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
