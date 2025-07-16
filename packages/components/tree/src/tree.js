export const TreeProps={
    data:{
        type:Array,
        default:()=>[]
    },
      // 是否显示可选择
  showCheckbox: {
    type: Boolean,
    default: false,
  },
}


export const TreeNodeEmit=['handleClickNode']
