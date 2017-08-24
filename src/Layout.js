import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductsList from './Components/ProductsList/ProductsList'
import HomeContainer from './Containers/HomeContainer/HomeContainer'
import AboutContainer from './Containers/AboutContainer/AboutContainer'
import NavBar from './NavBar'

class Layout extends Component {
  state = {
    options: []
  }
  componentDidMount = () => this.setState({ options: ['home', 'about', 'products'] })
  render () {
    return (
      <div>
        <NavBar options={this.state.options} />
        <Switch>
          <Route exact path='/home' component={HomeContainer} />
          <Route path='/about' component={AboutContainer} />
          <Route
            path='/products'
            render={() =>
              <ProductsList products={this.props.products} />
            }
          />
        </Switch>
      </div>
    )
  }
}

export default Layout
