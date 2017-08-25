import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductsList from './Components/ProductsList/ProductsList'
import HomeContainer from './Containers/HomeContainer/HomeContainer'
import AboutContainer from './Containers/AboutContainer/AboutContainer'
import DataProvider from './DataProvider'

const Routes = (props) =>
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

export default Routes
