import React, { Component } from 'react'

class Layout extends Component {
  render () {
    console.log("From Layout", this.props.products)
    return (
      <div>
        Hello from layout!
      </div>
    )
  }
}

export default Layout
