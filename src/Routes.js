import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as AppPropTypes from './appPropTypes'
import ProductsList from './Components/ProductsList/ProductsList'
import HomeContainer from './Containers/HomeContainer/HomeContainer'
import AboutContainer from './Containers/AboutContainer/AboutContainer'

const Routes = (props) =>
  <Switch>
    <Route exact path='/home' component={HomeContainer} />
    <Route path='/about' component={AboutContainer} />
    <Route
      path='/products'
      render={() =>
        <ProductsList
          products={props.data.products}
          addProductToCart={props.data.addProductToCart}
        />
      }
    />
  </Switch>

Routes.propTypes = {
  data: AppPropTypes.data
}

export default Routes
