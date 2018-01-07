import { combineReducers } from 'redux'
import view from './view'
import comments from './comments'

const rootReducer = combineReducers({
    view,
    comments
})

export default rootReducer