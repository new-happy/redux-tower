const initialState = [
    {
        id:'1',
        title:'Meteor-React 小鸟课程'
    },
    {
        id:'2',
        title:'Happypeter 的摩登 JS 王国'
    },
    {
        id:'3',
        title:'跟 Peter 学 HTTP'
    },
    {
        id:'4',
        title:'Webpack-React 鼹鼠'
    },
    {
        id:'5',
        title:'Gulp-Flexbox 响应式网站课程'
    },
    {
        id:'6',
        title:'驾驭命令行怪兽'
    }
]

const view = (state = initialState, action) => {
    return state
}

export default view