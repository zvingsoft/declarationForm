<template>
<div style="width: 100%; text-align: center; margin: auto;">
	<div style="display: flex;">
		<div style="width:300px;margin-top:10px;margin-bottom:200px;">
			<el-form>
			<div>
				<div class="form-title">TCC事务</div>
				<div class="form-panel">
 					<el-form-item> <el-button style="width:200px;" @click="trySuccessConfirmSuccess" type="primary">Try成功Confirm成功</el-button> </el-form-item>
					<el-form-item> <el-button style="width:200px;" @click="trySuccessConfirmFail" type="primary">Try成功Confirm失败</el-button> </el-form-item>
					<el-form-item> <el-button style="width:200px;" @click="tryFailCancelSuccess" type="primary">Try失败Cancel成功</el-button> </el-form-item>
					<el-form-item> <el-button style="width:200px;" @click="tryFailCancelFail" type="primary">Try失败Cancel失败</el-button> </el-form-item>
				</div>
				<div class="form-title">负载均衡</div>
				<div class="form-panel">
					<el-form-item> <el-button style="width:200px;" @click="loadblanceRoundRobin" type="primary">轮询调用10次</el-button> </el-form-item>
					<el-form-item> <el-button style="width:200px;" @click="loadblanceRandom" type="primary">随机调用10次</el-button> </el-form-item>
					<el-form-item> <el-button style="width:200px;" @click="loadblanceWeight" type="primary">基于响应时间调用10次</el-button> </el-form-item>
					<el-form-item> <el-button style="width:200px;" @click="loadblanceSessionStick" type="primary">基于会话保持调用10次</el-button> </el-form-item>
					<el-form-item> <el-button style="width:200px;" @click="loadblanceIsolation" type="primary">随机故障</el-button> </el-form-item>
				</div>
				<div class="form-title">隔离、熔断、容错</div>
				<div class="form-panel">
					<el-form-item> <el-button style="width:200px;" @click="circuitBreakerFail" type="primary">失败熔断</el-button> </el-form-item>
					<el-form-item> <el-button style="width:200px;" @click="circuitBreakerConcurrent" type="primary">并发检测熔断</el-button> </el-form-item>
 				</div>
				<div class="form-title">QPS流控</div>
				<div class="form-panel">
					<el-form-item> <el-button style="width:200px;" @click="qps1" type="primary">每秒点击超过5次触发流控</el-button> </el-form-item>
				</div>
			</div>
			</el-form>
		</div>
		<div style="flex: 1; text-align:left;border-left:2px solid #ccc;border-radius: 4px;font-size:16px;margin-top:10px;">
				<div class="form-title">
          日志<el-button size="small" style="margin-right:10px;float:right;margin-bottom:5px;" @click="lines.splice(0,lines.length)" type="medium">清空</el-button>
          </div>
				<div class="form-panel">
          <p v-for="line in lines" :key="line.number" :style="{color:line.color}">{{line.message}}</p>
				</div>
     </div>
	</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            lines: [],
        };
    },
    methods: {
        trySuccessConfirmSuccess() {
            this.handlerChainCall('trySuccessConfirmSuccess');
        },
        trySuccessConfirmFail() {
            this.handlerChainCall('trySuccessConfirmFail');
        },
        tryFailCancelSuccess() {
            this.handlerChainCall('tryFailCancelSuccess');
        },
        tryFailCancelFail() {
            this.handlerChainCall('tryFailCancelFail');
        },
        loadblanceRoundRobin() {
            this.handlerChainCall('loadblanceRoundRobin');
        },
        loadblanceRandom() {
            this.handlerChainCall('loadblanceRandom');
        },
        loadblanceWeight() {
            this.handlerChainCall('loadblanceWeight');
        },
        loadblanceSessionStick() {
            this.handlerChainCall('loadblanceSessionStick');
        },
        loadblanceIsolation() {
            this.handlerChainCall('loadblanceIsolation');
        },
        circuitBreakerFail() {
            this.handlerChainCall('circuitBreakerFail');
        },
        circuitBreakerConcurrent() {
            this.handlerChainCall('circuitBreakerConcurrent');
        },
        qps1() {
            this.handlerChainCall('qps1');
        },
        qps10() {
            this.handlerChainCall('qps10');
        },
        handlerChainCall(name) {
            axios
                .get('/handlerChain/' + name)
                .then(res => {
                    this.lines.push({ color: this.getColor(res.data), message: res.data });
                })
                .catch(err => {
                    console.log(err.response);
                    this.lines.push({ color: this.getColor(err.response.data.message), message: err.response.data.message });
                });
        },
        getColor(message) {
            if (message.includes('xception') || message.includes('Fail') || message.includes('fail') || message.includes('失败')) {
                return 'red';
            }
            return '';
        },
    },
    created() {},
};
</script>

<style scoped>
.form-title {
    font-size: 24px;
    font-weight: bold;
    margin: 0 20px 0 20px;
    padding: 10px 0 0 10px;
}

.form-panel {
    margin: 0 20px 0 20px;
    padding: 10px 0 0 10px;
    border-top: 2px solid #ccc;
    border-radius: 4px;
}
</style>
