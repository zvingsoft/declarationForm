<template>
  <div :style="{width:clientWidth+'px'}">
    <el-tabs v-model="activeName" class="projPage">
      <!-- 进口 -->
      <el-tab-pane label='进口' name='inlicense'>
        <el-toolbar>
          <el-button class="z-toolbar-btn" :plain="true" @click="inAddClick">
            <i class="fa fa-plus"></i>添加</el-button>
          <el-button class="z-toolbar-btn" :plain="true" :disabled="inSelectedRows.length !== 1" @click="inEditClick">
            <i class="fa fa-edit"></i>编辑</el-button>
          <el-button class="z-toolbar-btn" :plain="true" :disabled="inSelectedRows.length < 1" @click="inDeleteClick">
            <i class="fa fa-trash-o"></i>删除</el-button>
        </el-toolbar>
        <div class="main-content-wrap">
          <div class="search-bar fr">
            许可证号:
            <el-input v-model="insearch.licensekey" size="small" placeholder="请输入许可证号" style="width: 200px;"></el-input>
            进口商：
            <el-input v-model="insearch.companyname" size="small" placeholder="请输入进口商" style="width: 200px;"></el-input>
            报关口岸:
            <el-input v-model="insearch.portofclearance" size="small" placeholder="请输入报关口岸" style="width: 200px;"></el-input>
            <el-button size="small" type="primary" @click="loadInlicenseList"> 搜 索 </el-button>
          </div>
          <el-table ref="myTabelRef" :data="myTableData" tooltip-effect="dark" style="width: 100%" :height="clientHeight" @selection-change="myOnSelectionChange">
            <el-table-column type="selection" width="55" align="center"></el-table-column>
            <el-table-column prop="licensekey" show-overflow-tooltip min-width="15%" label="许可证号"></el-table-column>
            <el-table-column prop="companyname" show-overflow-tooltip min-width="20%" label="进口商"></el-table-column>
            <el-table-column prop="consignee" show-overflow-tooltip min-width="15%" label="收货人"></el-table-column>
            <el-table-column prop="trademode" show-overflow-tooltip min-width="10%" label="贸易方式"></el-table-column>
            <el-table-column prop="exportingcountry" show-overflow-tooltip min-width="10%" label="出口国"></el-table-column>
            <el-table-column prop="countryoforigin" show-overflow-tooltip min-width="10%" label="原产国家"></el-table-column>
            <el-table-column prop="portofclearance" show-overflow-tooltip min-width="10%" label="报关口岸"></el-table-column>
            <el-table-column prop="shippingtype" show-overflow-tooltip min-width="10%" label="运输方式"></el-table-column>
          </el-table>
          <div class="fr" style="margin-top:5px;">
            <el-pagination @size-change="myHandleSizeChange" @current-change="myHandleCurrentChange" :current-page="myCurrentPage" :page-sizes="myPageSizes" :page-size="myPageSize" :total="myTotal" layout="total, sizes, prev, pager, next">
            </el-pagination>
          </div>
        </div>
      </el-tab-pane>
      <!-- 出口 -->
      <el-tab-pane label='出口' name='outlicense'>
        <el-toolbar>
          <el-button class="z-toolbar-btn" :plain="true" @click="outAddClick">
            <i class="fa fa-plus"></i>添加</el-button>
          <el-button class="z-toolbar-btn" :plain="true" :disabled="outSelectedRows.length !== 1" @click="outEditClick">
            <i class="fa fa-edit"></i>编辑</el-button>
          <el-button class="z-toolbar-btn" :plain="true" :disabled="outSelectedRows.length < 1" @click="outDeleteClick">
            <i class="fa fa-trash-o"></i>删除</el-button>
        </el-toolbar>
        <div class="main-content-wrap">
          <div class="search-bar fr">
            许可证号:
            <el-input v-model="outsearch.licensekey" size="small" placeholder="请输入许可证号" style="width: 200px;"></el-input>
            进口商：
            <el-input v-model="outsearch.companyname" size="small" placeholder="请输入进口商" style="width: 200px;"></el-input>
            报关口岸:
            <el-input v-model="outsearch.portofclearance" size="small" placeholder="请输入报关口岸" style="width: 200px;"></el-input>
            <el-button size="small" type="primary" @click="apSearch"> 搜 索 </el-button>
          </div>
          <el-table ref="apTabelRef" :data="apTableData" tooltip-effect="dark" style="width: 100%" :height="clientHeight" @selection-change="apOnSelectionChange">
            <el-table-column type="selection" width="55" align="center"></el-table-column>
            <el-table-column prop="licensekey" show-overflow-tooltip min-width="15%" label="许可证号"></el-table-column>
            <el-table-column prop="companyname" show-overflow-tooltip min-width="15%" label="进口商"></el-table-column>
            <el-table-column prop="consignee" show-overflow-tooltip min-width="15%" label="收货人"></el-table-column>
            <el-table-column prop="trademode" show-overflow-tooltip min-width="10%" label="贸易方式"></el-table-column>
            <el-table-column prop="exportingcountry" show-overflow-tooltip min-width="12%" label="出口国"></el-table-column>
            <el-table-column prop="countryoforigin" show-overflow-tooltip min-width="12%" label="原产国家"></el-table-column>
            <el-table-column prop="portofclearance" show-overflow-tooltip min-width="10%" label="报关口岸"></el-table-column>
            <el-table-column prop="certificationdate" show-overflow-tooltip min-width="10%" label="发证日期"></el-table-column>
          </el-table>
          <div class="fr" style="margin-top:5px;">
            <el-pagination @size-change="apHandleSizeChange" @current-change="apHandleCurrentChange" :current-page="apCurrentPage" :page-sizes="apPageSizes" :page-size="apPageSize" :total="apTotal" layout="total, sizes, prev, pager, next">
            </el-pagination>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 添加、编辑进口许可证 -->
    <el-dialog :title="editMode===1?'添加进口许可证':'编辑进口许可证'" :visible.sync="inLicenseShow"  size="large" >
      <el-form :model="inLicenseModel" :rules="inLicenseRules" inline ref="inLicenseRef" label-width="120px" style="height:400px;overflow-y:scroll;overflow-x:hidden;">
        <el-form-item label="进口商" prop="companyname">
          <el-input type="text" v-model="inLicenseModel.companyname" auto-complete="off" style="width:350px"></el-input>
        </el-form-item>
        <el-form-item label="收货人" prop="consignee">
          <el-input type="text" v-model="inLicenseModel.consignee" auto-complete="off" style="width:350px"></el-input>
        </el-form-item>
        <el-form-item label="许可证号" prop="licensekey">
          <el-input type="text" v-model="inLicenseModel.licensekey" auto-complete="off" class="input-230"></el-input>
        </el-form-item>
        <el-form-item label="贸易方式" prop="trademode">
          <el-input type="text" v-model="inLicenseModel.trademode" auto-complete="off" class="input-230"></el-input>
        </el-form-item>
        <el-form-item label="出口国" prop="exportingcountry">
          <el-input type="text" v-model="inLicenseModel.exportingcountry" auto-complete="off" class="input-230"></el-input>
        </el-form-item>
        <el-form-item label="原产国家" prop="countryoforigin">
          <el-input type="text" v-model="inLicenseModel.countryoforigin" auto-complete="off" class="input-230"></el-input>
        </el-form-item>
        <el-form-item label="报关口岸" prop="portofclearance">
          <el-input type="text" v-model="inLicenseModel.portofclearance" auto-complete="off" class="input-230"></el-input>
        </el-form-item>
        <el-form-item label="外汇来源" prop="sourceofforeignexchange">
          <el-input type="text" v-model="inLicenseModel.sourceofforeignexchange" auto-complete="off" class="input-230"></el-input>
        </el-form-item>
        <el-form-item label="付款方式" prop="paymentmethod">
          <el-input type="text" v-model="inLicenseModel.paymentmethod" auto-complete="off" class="input-230"></el-input>
        </el-form-item>
        <el-form-item label="最终用户" prop="enduser">
          <el-input type="text" v-model="inLicenseModel.enduser" auto-complete="off" class="input-230"></el-input>
        </el-form-item>
        <el-form-item label="最终用途" prop="finalpurpose">
          <el-input type="text" v-model="inLicenseModel.finalpurpose" auto-complete="off" class="input-230"></el-input>
        </el-form-item>
        <el-form-item label="商品名称" prop="goodsname">
          <el-input type="text" v-model="inLicenseModel.goodsname" auto-complete="off" class="input-230"></el-input>
        </el-form-item>
        <el-form-item label="商品编号" prop="goodscode">
          <el-input type="text" v-model="inLicenseModel.goodscode" auto-complete="off" class="input-230"></el-input>
        </el-form-item>
        <el-form-item label="运输方式" prop="shippingtype">
          <el-input type="text" v-model="inLicenseModel.shippingtype" auto-complete="off" class="input-230"></el-input>
        </el-form-item>
        <el-form-item label="许可证截止日期" prop="expirationdateoflicense">
          <el-date-picker v-model="inLicenseModel.expirationdateoflicense" type="date" placeholder="选择日期" class="input-230"></el-date-picker>
        </el-form-item>
        <el-form-item label="发证日期" prop="certificationdate">
          <el-date-picker v-model="inLicenseModel.certificationdate" type="date" placeholder="选择日期" class="input-230"></el-date-picker>
        </el-form-item>
        <el-form-item label="许可证文件" prop="declarationfile" v-show="editMode===1">
          <el-upload :on-success="onUploadSuccess" class="upload-file" accept=".jpg,.png" action="" :multiple="false" :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="备注" prop="memo">
          <el-input type="text" v-model="inLicenseModel.memo" auto-complete="off" style="width:800px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="inLicenseShow=false">取消</el-button>
        <el-button type="primary" @click="myOkHandler" :loading="confirmLoading">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 文件列表查看、编辑框 -->
    <el-dialog :title="fileType===1?'申报文件':'审批文件'" :visible.sync="myFileDialogIsShow">
      <el-toolbar class="filelist-toolbar">
        <el-button class="z-toolbar-btn" :plain="true" @click="fileUpload">
          <i class="fa fa-upload"></i>上传</el-button>
        <el-button class="z-toolbar-btn" :disabled="fileSelectedRows.length < 1" :plain="true" @click="fileDownload">
          <i class="fa fa-download"></i>下载</el-button>
        <el-button class="z-toolbar-btn" :disabled="fileSelectedRows.length !== 1" :plain="true" @click="fileView">
          <i class="fa fa-search"></i>预览</el-button>
        <el-button class="z-toolbar-btn" :plain="true" :disabled="fileSelectedRows.length < 1" @click="fileDelete">
          <i class="fa fa-trash-o"></i>删除</el-button>
      </el-toolbar>
      <el-table ref="fileTabelRef" :data="fileTableData" tooltip-effect="dark" style="width: 100%;margin-top:5px;" @selection-change="fileOnSelectionChange">
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column prop="name" label="文件名"></el-table-column>
      </el-table>
    </el-dialog>
    <!-- 文件上传 -->
    <el-dialog :title="'文件上传'" :visible.sync="fileUploadDialogIsShow">
      <el-upload :on-success="onUploadSuccess" class="upload-file" accept=".jpg,.png" action="" :multiple="false" :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <div slot="footer">
        <el-button @click="fileUploadDialogIsShow=false">取消</el-button>
        <el-button type="primary" @click="fileUploadOkHandler">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 文件预览框 -->
    <el-dialog :title="'文件预览'" :visible.sync="fileViewDialogIsShow">
      <div class="fileView-content">
        <h4 style="text-align:center;width:100%">关于要求核准×××项目申请报告的请示（范本）</h4>
        <br>**发展和改革委员会：  ×××××××××××××××（综合表述项目建设的必要性）。
        <br>　　我公司拟在**×××投资建设×××项目，该项目××××××（建设规模与主要建设内容，工业项目还需写明工艺技术流程、产品产量等），
        <br>总投资×××万元，资金来源××××××。该项目的规划选址、用地预审、环评审批、节能审查等前期工作均已完成，现将项目申请报告及相关附件材料随文呈报你委，请予以核准。
        <br>附件：
        <br>　1、城市规划行政主管部门出具的该项目城市规划意见（项目选址意见书）
        <br>　2、国土资源行政主管部门出具的该项目用地预审意见（项目用地预审文件）
        <br>　3、环境保护行政主管部门出具的该项目环境影响评价文件的审批意见（项目环评审批文件）
        <br>　4、水土保持行政主管部门出具的项目水保方案评价文件审批意见（水保方案审批文件，视项目建设地点决定是否需要）
        <br>　5、发展改革部门出具的项目节能评价文件的审批意见（项目节能审查文件）<br/><br/>
        <div style="width:100%; text-align:right;">××××公司（签章） ××年××月××日</div>
      </div>
    </el-dialog>
    <!-- 审批进度框未通过 -->
    <el-dialog :title="'审批进度：审批未通过'" :visible.sync="failDialogIsShow">
      <el-button @click="recommit">重新提交</el-button>
    </el-dialog>

    <!-- 审批进度框通过 -->
    <el-dialog :title="'审批进度：审批通过'" :visible.sync="passDialogIsShow">
      <el-toolbar class="filelist-toolbar">
        <el-button class="z-toolbar-btn" :disabled="fileSelectedRows.length < 1" :plain="true" @click="fileDownload">
          <i class="fa fa-download"></i>下载</el-button>
        <el-button class="z-toolbar-btn" :disabled="fileSelectedRows.length !== 1" :plain="true" @click="fileView">
          <i class="fa fa-search"></i>预览</el-button>
      </el-toolbar>
      <el-table ref="fileTabelRef" :data="fileTableData" tooltip-effect="dark" style="width: 100%;margin-top:5px;" @selection-change="fileOnSelectionChange">
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column prop="name" label="文件名"></el-table-column>
      </el-table>
    </el-dialog>

    <!-- 审批进度框审批中 -->
    <el-dialog :title="'审批进度：审批中'" :visible.sync="loadDialogIsShow">
      <el-button @click="cancelCommit">取消申报</el-button>
    </el-dialog>
  </div>
</template>

<script>
import './mock/license.js'
import licenseAPI from './api/licenseAPI.js';
export default {
  data() {
    return {
      clientHeight: 0,
      clientWidth: 0,
      /*我的申请表格*/
      myTableData: [],
      /*待我审批表格*/
      apTableData: [],
      /*我的申请数据模型*/
      inLicenseModel: {
        name: '',
        manager: '',
        description: '',
        starttime: '',
        endtime: '',
      },
      /*进口搜索*/
      insearch: {
        licensekey: '',
        importandexportcode: '',
        companyname: '',
      },
      /*出口搜索*/
      outsearch: {
        licensekey: '',
        importandexportcode: '',
        companyname: '',
      },
      /*激活的tab页 */
      activeName: 'inlicense',
      /*我的申请表单校验规则 */
      inLicenseRules: {
        name: [
          { required: true, message: '请输入项目名称', trigger: 'blur' }
        ],
        manager: [
          { required: true, message: '请输入项目负责人', trigger: 'blur' }
        ],
      },
      /*编辑添加框是否可见 */
      inLicenseShow: false,
      /*文件列表查看、编辑框是否可见 */
      myFileDialogIsShow: false,
      /*文件上传框是否可见 */
      fileUploadDialogIsShow: false,
      /*文件预览框是否显示 */
      fileViewDialogIsShow: false,
      /*审批进度 */
      failDialogIsShow: false,
      passDialogIsShow: false,
      loadDialogIsShow: false,
      /*编辑模式：1添加，2编辑*/
      editMode: 1,
      /*文件类型：1申报文件，2审批文件 */
      fileType: 1,
      /*表单提交等待动画*/
      confirmLoading: false,
      /*我的申请表格选中行*/
      inSelectedRows: [],
      /*待我审核表格选中行*/
      outSelectedRows: [],
      /*文件表格选中行 */
      fileSelectedRows: [],
      /*开始日期初始化 */
      startdatepicker: '',
      /*结束日期初始化 */
      enddatepicker: '',
      /*我的申请当前页 */
      myCurrentPage: 1,
      /*我的申请表格可选页面大小*/
      myPageSizes: [5, 10, 15, 20],
      /*我的申请表格当前页面大小 */
      myPageSize: 10,
      /*我的申请表格数据总条数 */
      myTotal: 16,
      /*待我审核当前页 */
      apCurrentPage: 1,
      /*待我审核表格可选页面大小*/
      apPageSizes: [5, 10, 15, 20],
      /*待我审核表格当前页面大小 */
      apPageSize: 10,
      /*待我审核表格数据总条数 */
      apTotal: 21,
      /*文件列表数据 */
      fileTableData: [],
      /*文件上传初始化 */
      fileList: [],
      /*进度条百分比 */
      percentage: 0,
      // i: 0,
    }
  },
  methods: {
    /*添加申请*/
    inAddClick() {
      this.editMode = 1;
      this.inLicenseModel = {
        name: '',
        manager: '',
        description: '',
        starttime: '',
        endtime: '',
      };
      this.inLicenseShow = true;
    },
    /*编辑申请*/
    inEditClick() {
      this.editMode = 2;
      this.inLicenseModel = Object.assign({}, this.inLicenseModel, this.inSelectedRows[0]);
      this.inLicenseShow = true;
    },
    /*删除申请*/
    inDeleteClick() {
      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let ids = [];
        this.inSelectedRows.forEach(function(row) {
          ids.push(row.id);
        });
        return ids;
      }).then(ids => {
        this.myTableData = this.myTableData.filter(val => !ids.includes(val.id));
        this.$notify.success({ title: '成功', message: "删除成功", duration: 2000 });
      })
    },
    /*点击待我审查搜索按钮 */
    apSearch() {
      this.loadOutlicenseList();
    },
    /*表格选中行改变*/
    myOnSelectionChange(selection) {
      this.inSelectedRows = selection
    },
    /*保存我的申请表单 */
    myOkHandler() {
      let validateForm = () => {
        return new Promise((resolve, reject) => {
          this.$refs['inLicenseRef'].validate((valid) => {
            if (valid) { return resolve(true); }
            return reject(false);
          });
        });
      };
      let addForm = () => {
        this.myTableData = [
          ...this.myTableData.slice(0),
          this.inLicenseModel,
        ];
      };

      let editForm = () => {
        let index = this.myTableData.findIndex(val => val.id === this.inLicenseModel.id);
        this.myTableData = [
          ...this.myTableData.slice(0, index),
          this.inLicenseModel,
          ...this.myTableData.slice(index + 1),
        ];
      };

      validateForm().then(() => {
        this.confirmLoading = true;
        if (this.editMode === 1) { addForm(); }
        if (this.editMode === 2) { editForm(); }
      }).then(res => {
        this.confirmLoading = false;
        this.inLicenseShow = false;
        this.$notify({ title: '成功', message: "保存成功", type: 'success', duration: 2000 });
      })
    },
    /*审核通过*/
    apPassClick() {
      let ids = [];
      this.outSelectedRows.forEach(function(row) {
        let index = this.apTableData.findIndex(val => val.id === row.id);
        let tempdata = JSON.parse(JSON.stringify(row));
        tempdata.status = '审核通过';
        this.apTableData = [
          ...this.apTableData.slice(0, index),
          tempdata,
          ...this.apTableData.slice(index + 1),
        ];
      }, this);
      this.$notify({ title: '成功', message: "操作成功", type: 'success', duration: 2000 });
    },
    /*审核不予通过*/
    apFailClick() {
      let ids = [];
      this.outSelectedRows.forEach(function(row) {
        let index = this.apTableData.findIndex(val => val.id === row.id);
        let tempdata = JSON.parse(JSON.stringify(row));
        tempdata.status = '不予通过';
        this.apTableData = [
          ...this.apTableData.slice(0, index),
          tempdata,
          ...this.apTableData.slice(index + 1),
        ];
      }, this);
      this.$notify({ title: '成功', message: "操作成功", type: 'success', duration: 2000 });
    },
    /*表格选中行改变*/
    apOnSelectionChange(selection) {
      this.outSelectedRows = selection;
    },
    /*查看申报文件列表 */
    viewDeclarationList() {
      this.fileType = 1;
      this.myFileDialogIsShow = true;
      licenseAPI.getfileList1().then(data => {
        this.fileTableData = data.data;
      });
    },
    /*查看审批文件列表 */
    viewApprovalList() {
      this.fileType = 2;
      this.myFileDialogIsShow = true;
    },
    /*文件选中行改变 */
    fileOnSelectionChange(selection) {
      this.fileSelectedRows = selection
    },
    /*文件上传 */
    fileUpload() {
      this.fileUploadDialogIsShow = true;
    },
    /*点击确定文件上传 */
    fileUploadOkHandler() {
      this.$notify({ title: '成功', message: "上传成功", type: 'success', duration: 2000 });
      this.fileUploadDialogIsShow = false;
    },
    /*文件上传成功 */
    onUploadSuccess(response, file) {
      this.$notify({ title: file.name, message: "上传成功", type: 'success', duration: 2000 });
    },
    /*文件下载 */
    fileDownload() {
      this.$notify({ title: '成功', message: "下载成功", type: 'success', duration: 2000 });
    },
    /*文件预览 */
    fileView() {
      this.fileViewDialogIsShow = true;
    },
    /*文件删除 */
    fileDelete() {
      this.$confirm('确定删除吗，删除后无法恢复。是否继续删除？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let ids = [];
        this.fileSelectedRows.forEach(function(row) {
          ids.push(row.id);
        });
        return ids;
      }).then(ids => {
        this.fileTableData =this.fileTableData.filter(val => !ids.includes(val.id));
        this.$notify.success({ title: '成功', message: "删除成功", duration: 2000 });
      })
    },
    /*加载我的申请表格数据 */
    loadInlicenseList() {
      let pagedata = {pageindex:this.myCurrentPage, pagesize:this.myPageSize};
      let search = Object.assign({}, this.insearch, pagedata);
      licenseAPI.getInlicenseList(search).then(data => {
        this.myTableData = data.data;
        this.myTotal = data.total;
      });
    },
    /*加载待我审核表格数据 */
    loadOutlicenseList() {
      let pagedata = {pageindex:this.myCurrentPage, pagesize:this.myPageSize};
      let search = Object.assign({}, this.outsearch, pagedata);
      licenseAPI.getOutlicenseList(search).then(data => {
        this.apTableData = data.data;
        this.apTotal = data.total;
      });
    },
    /*提交申报、查看进度操作 */
    option(tag, progress) {
      if (tag === "提交申报") {
        this.$notify.success({ title: '成功', message: "提交成功", duration: 2000 });
      } else {
        if (progress === '1') {
          this.passDialogIsShow = true;
          licenseAPI.getfileList2().then(data => {
            this.fileTableData = data.data;
          });
        } else if (progress === '2') {
          this.failDialogIsShow = true;
        } else if (progress === '3') {
          this.loadDialogIsShow = true;
        }
      }
    },
    /*再次提交 */
    recommit() {
      this.$notify.success({ title: '成功', message: "提交成功", duration: 2000 });
      this.failDialogIsShow = false;
    },
    /*取消申报 */
    cancelCommit() {
      this.$notify.success({ title: '成功', message: "取消申报", duration: 2000 });
      this.loadDialogIsShow = false;
    },
    /*加载项目文件列表数据 */
    // loadFileList() {
    //   licenseAPI.getloadFileList(this.filetype).then(data => {
    //     this.fileTableData = data.data;
    //   });
    // },
    /*改变我的申请表格大小 */
    myHandleSizeChange(val) {
      this.myPageSize = val;
      this.loadInlicenseList();
    },
    /*改变我的申请表格当前页 */
    myHandleCurrentChange(val) {
      this.myCurrentPage = val;
      this.loadInlicenseList();
    },
    /*改变待我审核表格大小 */
    apHandleSizeChange(val) {
      this.apPageSize = val;
      this.loadOutlicenseList();
    },
    /*改变待我审核表格当前页 */
    apHandleCurrentChange(val) {
      this.apCurrentPage = val;
      this.loadOutlicenseList();
    },

  },
  created() {
    this.clientHeight = document.documentElement.clientHeight - 270;
    this.clientWidth = document.documentElement.clientWidth - 250;
    let num = Math.floor(this.clientHeight / 40) - 1;
    this.apPageSize = Math.floor(num / 5) * 5;
    this.apPageSizes = [this.apPageSize, this.apPageSize * 2, this.apPageSize * 4];
    this.myPageSize = Math.floor(num / 5) * 5;
    this.myPageSizes = [this.myPageSize, this.myPageSize * 2, this.myPageSize * 4];
    this.loadInlicenseList();
    this.loadOutlicenseList();
    // this.loadFileList();
  }
}
</script>
<style>
.projPage .el-tabs__header {
  margin-bottom: 0;
}

input[type=file].el-upload__input {
  display: none !important;
  margin-bottom: -20px;
}
</style>

<style scoped>
.search-bar {
  padding-top: 10px;
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
  width: 47%;
}

.e-form .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 45%;
}

.filelist-toolbar {
  margin-left: 1px;
}

.fileView-content {
  width: 100%;
  border: 1px solid #CCC;
  padding: 5px;
  line-height: 20px;
}

.input-230 {
  width: 230px;
}
</style>
