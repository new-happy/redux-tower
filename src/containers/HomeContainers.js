import React from 'react'
import Home from '../component/Home'
import { connect } from 'react-redux'
import { addFabulous } from '../actions/index'

const HomeContainer = props => <Home {...props} />

const mapStatetoProps = state => ({
    view:state.view,
    comments:state.comments
})

export default connect(mapStatetoProps, {addFabulous})(HomeContainer)