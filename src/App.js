import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import DataProvider from './DataProvider'

class App extends Component {
  render () {
    return (
      <Router>
        <DataProvider />
      </Router>
    )
  }
}

export default App
