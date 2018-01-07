import React, { Component } from 'react'
import HomeContainers from '../containers/HomeContainers'
import ViewContainers from '../containers/ViewContainers'
import { BrowserRouter as Router,Route} from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <Router>
            <div>
              <Route path='/' exact component={HomeContainers} />
              <Route path='/view/:id' component={ViewContainers} />
              </div>
            </Router>
        )
    }
}

export default Main;