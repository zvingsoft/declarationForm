<template>
  <div class="tree-wrap">
    <el-checkbox-group :value="value">
      <el-tree class="permission-tree-wrap" :data="permissions" :props="props" :default-expand-all="expand" :render-content="renderContent">
      </el-tree>
    </el-checkbox-group>
  </div>
</template>

<style scoped>
  .tree-wrap{
  }
</style>

<script>
  import util from './util.js';

  export default {
    data() {
      return {};
    },
    props: {
      'value': {
        type: Array,
        required: true
      },
      'permissions': {
        type: Array,
        required: true
      },
      'props': {
        type: Object,
        default: function () {
          return {
            children: 'children',
            label: 'name',
            permission: 'permissions'
          };
        }
      },
      'expand': {
        type: Boolean,
        default: true
      }
    },
    computed: {
    },
    methods: {
      checkBoxChangeHandler(event){
        const {target} = event;

        let val = Object.assign([], this.value);

        if(target.checked){
          val.push(target.value);
        }else {
          let index = val.findIndex(val => val === target.value);
          val.splice(index, 1);
        }

        return this.$emit('input', val);

      },
      nodeCheckBoxChangeHandler(event){
        const {target} = event;

        let val = Object.assign([], this.value);
        let node = util.findTreeNode(this.permissions, 'code', target.value, this.props.children);
        let nodeValues = this.treeNodeAllPermissionItems([ node ]);

        if(target.checked){ // 全选子节点
          const unique = (array) => { // 去重
            var a = {};
            for(let i = 0; i < array.length; i++){
              if(typeof a[array[i]] === 'undefined')
                a[array[i]] = 1;
            }

            array.length = 0;
            for(let i in a)
              array[array.length] = i;
            return array;
          };

          val = unique(val.concat(nodeValues));

        }else { // 取消选择子节点
          val = val.filter(val => !nodeValues.includes(val) );
        }

        return this.$emit('input', val);
      },
      renderContent(h, {node}){
        const { data } = node;

        let nodeContent = [];
        nodeContent.push(h(
          'div', {
            'class': ['node-name'],
            'style': {
              'display': 'inline-block'
            }
          }, [
            h(
              'span', {
                style: {
                  display: 'inline-block',
                  'marginRight': '20px'
                }
              }, data[this.props.label]
            ),
            h('el-checkbox', {
              props: {
                'label': data.code,
                'disabled': data.disabled
              },
              on: {
                'change': this.nodeCheckBoxChangeHandler
              }
            }, '')
          ]
        ));

        if(data[this.props.permission] && data[this.props.permission].length){
          let permissionCheckBoxs = data[this.props.permission].map((val) => {
            return h('el-checkbox', {
              props: {
                'label': val.code,
                'disabled': val.disabled
              },
              on: {
                'change': this.checkBoxChangeHandler
              }
            }, val.name);
          }, this);

          nodeContent.push(h(
            'div', {
              style: {
                'paddingLeft': '77px',
                'paddingRight': '22px',
                'whiteSpace': 'normal'
              }
            }, permissionCheckBoxs
          ));
        }

        return h('div', {
          style: {
            display: 'inline-block'
          }
        }, nodeContent);
      },
      treeNodeAllPermissionItems(tree){
        let result = [];

        for(let i = 0; i < tree.length; i++){
          if(tree[i].code){
            result.push(tree[i].code);
          }

          if(tree[i][this.props.permission] && tree[i][this.props.permission].length){
            let tmpItems = tree[i][this.props.permission].map(val => val.code);
            result = result.concat(tmpItems);
          }

          if(tree[i][this.props.children] && tree[i][this.props.children].length){
            let tmp = this.treeNodeAllPermissionItems(tree[i][this.props.children]);
            result = result.concat(tmp);
          }
        }

        return result;
      }
    },
    created() {
    }
  };
</script>
<<style scoped>
.permission-tree-wrap .el-tree-node__content{
  height: auto;
}
</style>

