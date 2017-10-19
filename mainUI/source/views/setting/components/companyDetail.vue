<template>
  <div>
    <el-dialog size="tiny" title="查看企业信息" :visible.sync="show" @close="esc">
      <el-form label-width="160px" :model="company">
        <el-form-item label="名称：">
          {{company.companyname}}
        </el-form-item>
        <el-form-item label="地址：">
          {{company.address}}
        </el-form-item>
        <el-form-item label="电话：">
          {{company.phone}}
        </el-form-item>
        <el-form-item label="传真：">
          {{company.fax}}
        </el-form-item>
        <el-form-item label="邮政编码：">
          {{company.postcode}}
        </el-form-item>
        <el-form-item label="银行信用评级：">
          {{company.bankcreditrating}}
        </el-form-item>
        <el-form-item label="棉花分配量" v-if="company.allocation>0">
          <span>{{ company.allocation }}</span>（吨）
        </el-form-item>
        <el-form-item label="棉花已进口" v-if="company.allocation>0">
          <span>{{ company.used }}</span>（吨）
        </el-form-item>
        <el-form-item label="添加人">
          <span>{{ company.adduser }}</span>
        </el-form-item>
        <el-form-item label="添加时间">
          <span>{{ company.addtime }}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="esc">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  require('../mock/company.js')
  import companyAPI from '../api/companyAPI.js';

  export default {
    data() {
      return {}
    },
    methods: {
      esc() {
        this.$emit('update:show', false);
      }
    },
    //由于有些列表已将企业数据获取完整，所以可以直接传值，减少请求接口次数
    //监听值，如果只传了企业id过来，则去请求接口获取数据
    watch: {
      company: function () {
        if (this.company.companyid > 0 && (this.company.companyname == undefined || this.company.companyname == '')) {
          companyAPI.getCompanyDetail(this.company.companyid).then(data => {
            if (data.status == 1) {
              this.company = data.data;
            } else {
              this.$message.error(data.message);
            }
          });
        }
      }
    },
    props: [
      'show',
      'company'
    ]
  }

</script>

<style scoped>


</style>
