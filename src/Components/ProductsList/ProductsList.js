import PropTypes from 'prop-types'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductsList = (props) =>
  <div>
    {
      props.products.map((product, index) =>
        <div key={index}>
          <ProductCard
            product={product}
            addProductToCart={props.addProductToCart}
          />
        </div>
      )
    }
  </div>

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  addProductToCart: PropTypes.func.isRequired
}

export default ProductsList
