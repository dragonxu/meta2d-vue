import { Component, defineComponent, h, PropType } from 'vue'
import { storeToRefs } from 'pinia'
import { Pen } from '@meta2d/core'
import { ElCol, ElRow } from 'element-plus'
import useMeta2dStore from '../../store'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    field: {
      // https://zhuanlan.zhihu.com/p/453154334
      // eslint-disable-next-line @typescript-eslint/ban-types
      type: String as PropType<keyof Pen>,
      required: true,
    },
  },
  setup(props, { slots }) {
    const { activePen } = storeToRefs(useMeta2dStore())
    // vnode需要是一个数据录入组件才能正常工作
    let vnode: Component | string = ''
    if (slots.default) {
      const vnodes = slots.default()
      vnode = vnodes[0] || ''
    }

    return () => {
      return h(
        'div',
        {
          class: 'pen-data-entry',
        },
        [
          h(
            ElRow,
            {
              gutter: 8,
            },
            () => [
              h(
                ElCol,
                {
                  span: 9,
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '14px',
                    color: '#606266',
                  },
                },
                () => [props.label]
              ),
              h(
                ElCol,
                {
                  span: 15,
                },
                () => [
                  h(vnode as any, {
                    modelValue: activePen.value?.[props.field],
                  }),
                ]
              ),
            ]
          ),
        ]
      )
    }
  },
})
