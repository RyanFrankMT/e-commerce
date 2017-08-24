import React from 'react'

const ProductCard = (props) =>
  <div>
    <h3>{props.product.name}</h3>
    <p>{props.product.price}</p>
    <img src={props.product.image} />
  </div>

export default ProductCard
