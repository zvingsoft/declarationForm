<template>
<div style="width: 100%; text-align: center; margin: auto;">
	<div style="display: flex;">
		<div style="flex: 1;margin-top:10px;margin-bottom:200px;">
			<el-form label-position="left" label-width="200px" class="e-form">
			<div style="width: 100%; margin: auto; text-align: left; margin-left: 20px;">
				<div class="form-title">TCC事务</div>
				<div class="form-panel">
          <div></div>
					<el-form-item> <el-button style="width:220px;" @click="trySuccessConfirmSuccess" type="primary">Try成功Confirm成功</el-button> </el-form-item>
					<el-form-item> <el-button style="width:220px;" @click="trySuccessConfirmFail" type="primary">Try成功Confirm失败</el-button> </el-form-item>
					<el-form-item> <el-button style="width:220px;" @click="tryFailCancelSuccess" type="primary">Try失败Cancel成功</el-button> </el-form-item>
					<el-form-item> <el-button style="width:220px;" @click="tryFailCancelFail" type="primary">Try失败Cancel失败</el-button> </el-form-item>
				</div>
				<div class="form-title">负载均衡</div>
				<div class="form-panel">
					<el-form-item> <el-button style="width:220px;" @click="loadblanceRoundRobin" type="primary">轮询调用10次</el-button> </el-form-item>
					<el-form-item> <el-button style="width:220px;" @click="loadblanceRandom" type="primary">随机调用10次</el-button> </el-form-item>
					<el-form-item> <el-button style="width:220px;" @click="loadblanceWeight" type="primary">基于响应时间调用10次</el-button> </el-form-item>
					<el-form-item> <el-button style="width:220px;" @click="loadblanceSessionStick" type="primary">基于会话保持调用10次</el-button> </el-form-item>
					<el-form-item> <el-button style="width:220px;" @click="loadblanceIsolation" type="primary">随机故障</el-button> </el-form-item>
				</div>
				<div class="form-title">隔离、熔断、容错</div>
				<div class="form-panel">
					<el-form-item> <el-button style="width:220px;" @click="circuitBreakerFail" type="primary">失败熔断</el-button> </el-form-item>
					<el-form-item> <el-button style="width:220px;" @click="circuitBreakerConcurrent" type="primary">并发检测熔断</el-button> </el-form-item>
 				</div>
				<div class="form-title">QPS流控</div>
				<div class="form-panel">
					<el-form-item> <el-button style="width:220px;" @click="qps1" type="primary">单次调用</el-button> </el-form-item>
					<el-form-item> <el-button style="width:220px;" @click="qps10" type="primary">连续调用10次</el-button> </el-form-item>
				</div>
			</div>
			</el-form>
		</div>
		<div style="flex: 1; border-left:2px solid #ccc;border-radius: 4px;font-size:20px;margin-top:40px;">{{message}}</div>
	</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
        };
    },
    methods: {
        trySuccessConfirmSuccess() {
            axios.get('form/handlerChain/trySuccessConfirmSuccess');
            this.message = res.data;
        },
        trySuccessConfirmFail() {
            axios.get('form/handlerChain/trySuccessConfirmFail');
            this.message = res.data;
        },
        tryFailCancelSuccess() {
            axios.get('form/handlerChain/tryFailCancelSuccess');
            this.message = res.data;
        },
        tryFailCancelFail() {
            axios.get('form/handlerChain/tryFailCancelFail');
            this.message = res.data;
        },
        loadblanceRoundRobin() {
            axios.get('form/handlerChain/loadblanceRoundRobin');
            this.message = res.data;
        },
        loadblanceRandom() {
            axios.get('form/handlerChain/loadblanceRandom');
            this.message = res.data;
        },
        loadblanceWeight() {
            axios.get('form/handlerChain/loadblanceWeight');
            this.message = res.data;
        },
        loadblanceSessionStick() {
            axios.get('form/handlerChain/loadblanceSessionStick');
            this.message = res.data;
        },
        loadblanceIsolation() {
            axios.get('form/handlerChain/loadblanceIsolation');
            this.message = res.data;
        },
        circuitBreakerFail() {
            axios.get('form/handlerChain/circuitBreakerFail');
            this.message = res.data;
        },
        circuitBreakerConcurrent() {
            axios.get('form/handlerChain/circuitBreakerConcurrent');
            this.message = res.data;
        },
        qps1() {
            axios.get('form/handlerChain/qps1');
            this.message = res.data;
        },
        qps10() {
            axios.get('form/handlerChain/qps10');
            this.message = res.data;
        },
    },
    created() {},
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
    padding: 20px 0 0 20px;
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
