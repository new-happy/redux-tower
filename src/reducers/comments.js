import { combineReducers } from 'redux'

const initiaFabulous = {1:20,2:10,3:0,4:15,5:20,6:6}

const initialComment = [
    {
        id:'1',
        name:'peter',
        text:'用 React 配合上 Meteor 来制作成一个单页面应用（ SPA ） 架构的聊天室',
        postId:'1'
    },
    {
        id:'2',
        name:'billie',
        text:'学完课程之后，可以自己搭建一个网站了',
        postId:'1'
    },
    {
        id:'3',
        name:'peter',
        text:'React 框架的最佳入门课程',
        postId:'1'
    },
    {
        id:'4',
        name:'peter',
        text:'一个摩登 JS 开发者应该具备的知识大全',
        postId:'2'
    },
    {
        id:'5',
        name:'billie',
        text:'有视频，有文字，很棒',
        postId:'2'
    },
]

const fabulous = (state = initiaFabulous, action ) => {
    switch(action.type){
        case 'ADD_FABULOUS':
        const { postId } = action
        return { ...state,
            [postId]:state[postId] +1
        }
        default:
         return state
    }
}

const reply = (state = initialComment, action) => {
    switch(action.type){
        case 'ADD_COMMENT':
          return [...state,action.comment]
        case 'REMOVE_COMMENT':
          return action.newReply
        default:
          return state
    }
}

const comments = combineReducers({
    fabulous,
    reply
})

export default comments