import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Routes from './Routes'

class Layout extends Component {
  state = {
    options: []
  }
  componentDidMount = () => this.setState({ options: ['home', 'about', 'products'] })
  render () {
    return (
      <div>
        <Routes
          products={ this.props.products }
        />
        <NavBar options={this.state.options} />
      </div>
    )
  }
}

export default Layout
