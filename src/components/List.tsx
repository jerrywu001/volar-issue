import { PropType } from "vue";

export interface ListComponentProp {
  data: Array<{ name: string }>;
  activeIndex: number;
  toggle: (index: number) => void;
}

/**
 * 实现该函数式组件 :
 * 1. 使用`list`数据渲染列表元素 (ul/li)
 * 2. 当点击列表子元素时,将其文本颜色更改为红色
*/
export const ListComponent = (props: ListComponentProp, { attrs, emit }) => {
  const items = props.data.map((v, idx) => {
    return (
      <li
        key={idx}
        class={`${idx === props.activeIndex ? 'active' : ''}`}
        onClick={() => { emit('toggle', idx) }}
      >
        {v.name}
      </li>
    );
  });

  return (
    <ul {...attrs}>{items}</ul>
  )
}

// const TestForTsx = () => (
//   <ListComponent
//     data={[]}
//     activeIndex={''}
//   />
// )

ListComponent.props = {
  data: {
    type: Array as PropType<Array<{ name: string; }>>,
  	default() {
      return []
    },
  },
  activeIndex: {
    type: Number,
    default: 0
  },
  // emit events
  toggle: {
    type: Function as PropType<(index: number) => void>,
    default: () => {},
  },
};