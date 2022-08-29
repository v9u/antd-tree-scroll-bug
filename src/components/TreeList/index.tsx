import { TreeProps } from 'ant-design-vue';
import { ref, defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: String,
    expand:Boolean
  },

  setup(props) {
    const expandedKeys = ref<string[]>(props.expand ? ['0-0', '0-1']:[] );
    const selectedKeys = ref<string[]>([]);
    const treeData: TreeProps['treeData'] = [
      {
        title: props.name,
        key: '0-0',
        children: [
          {
            title: 'leaf 0-0',
            key: '0-0-0',
            isLeaf: true,
          },
          {
            title: 'leaf 0-1',
            key: '0-0-1',
            isLeaf: true,
          },
          {
            title: 'parent 1',
            key: '0-1',
            children: [
              {
                title: 'leaf 1-0',
                key: '0-1-0',
                isLeaf: true,
              },
              {
                title: 'leaf 1-1',
                key: '0-1-1',
                isLeaf: true,
              },
            ],
          },
        ]
      }
    ];


    return () => (
      <a-directory-tree      
      style={{wideth:'100%'}}
      v-model:expandedKeys={expandedKeys.value}
      v-model:selectedKeys={selectedKeys.value}
      multiple
      treeData={treeData}
    ></a-directory-tree>
    )
  }
})