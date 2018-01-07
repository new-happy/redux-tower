import React from 'react'
import View from '../component/View'
import { connect } from 'react-redux'
import { addFabulous, addComment, removeFabulous } from '../actions/index'

const ViewContainer = props => <View {...props} />

const  mapStateToProps = state => ({
    comments:state.comments,
    views:state.view
})

export default connect(mapStateToProps, 
    {addFabulous, addComment, removeFabulous})(ViewContainer)