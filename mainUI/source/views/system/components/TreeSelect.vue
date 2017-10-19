<template>
  <div class="select-wrap" @click.stop="wrapClickHandler">
    <el-input :value="inputValue"
              :placeholder="placeholder"
              :readonly="true"
              :disabled="disabled"
              :icon="isOpenTree ? 'caret-top' : 'caret-bottom'"
              @click.stop="inputClickHandler">
    </el-input>
    <div class="tree-wrap" v-show="isOpenTree">
      <el-tree :data="items"
               :node-key="itemsOptions.key"
               :current-node-key="currentNodeKey"
               :props="itemsOptions"
               :default-expand-all="true"
               :expand-on-click-node="false"
               :highlight-current="true"
               @node-click="treeNodeClickHandler" >
      </el-tree>
    </div>
  </div>
</template>

<script>
  // 树形选择器

  export default {
    data(){
      return {
        isOpenTree: false
      };
    },
    methods: {
      inputClickHandler(){
        if(this.disabled){
          return;
        }
        this.isOpenTree = !this.isOpenTree;
      },
      wrapClickHandler(){
        if(this.disabled){
          return;
        }
        if(!this.isOpenTree){
          this.isOpenTree = true;
        }
      },
      treeNodeClickHandler(data){
        let val = {};
        val[this.itemsOptions.label] = data[this.itemsOptions.label];
        val[this.itemsOptions.key] = data[this.itemsOptions.key];

        this.$emit('input', val);
        this.isOpenTree = false;
      }
    },
    computed:{
      inputValue(){
        if(!this.value || !this.itemsOptions || !this.itemsOptions.label){
          return '';
        }

        return this.value[this.itemsOptions.label] || '';
      },
      currentNodeKey(){
        if(!this.value || !this.itemsOptions || !this.itemsOptions.key){
          return '';
        }

        return this.value[this.itemsOptions.key] || '';
      }
    },
    props: [
      'value',
      'placeholder',
      'items',
      'itemsOptions',
      'disabled'
    ],
    mounted(){
      let that = this;
      document.addEventListener('click', () => {
        that.isOpenTree = false;
      }, false)
    }
  };
</script>

<style scoped>
  .select-wrap{
    position: relative;
    cursor: pointer;
  }
  .select-wrap input[type='text']{


  }
  .select-wrap .tree-wrap{
    position: absolute;
    z-index: 10000;
    top: 42px;
    left: 1px;
    right: 1px;
    background-color: #fff;
    border: 1px solid #d1dbe5;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
  }
</style>
