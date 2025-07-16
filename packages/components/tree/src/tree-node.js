
export const TreeNodeProps={
    node:{
        type:Object,
        default:()=>({
            id:"",
            label:"",
            showChild:false,
            children:[]
        })
    }
}

export const TreeNodeEmit=['handleClickNode']