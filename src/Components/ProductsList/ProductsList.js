import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductsList = (props) =>
  <div>
    {
      props.products.map((product, index) =>
        <div key={index}>
          <ProductCard product={product} />
        </div>
      )
    }
  </div>

export default ProductsList
