import PropTypes from 'prop-types'
import React from 'react'

const ProductCard = (props) =>
  <div>
    <h3>{props.product.name}</h3>
    <p>{props.product.price}</p>
    <img
      src={props.product.image}
      alt={props.product.name}
    />
    <button onClick={() => props.addProductToCart(props.product.id)}>Add to Cart</button>
  </div>

ProductCard.propTypes = {
  addProductToCart: PropTypes.func.isRequired,
  product: PropTypes.array.isRequired
}

export default ProductCard
