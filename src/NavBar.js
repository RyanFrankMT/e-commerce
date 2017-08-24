import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) =>
  <div>
    <ul>
      {
        props.options.map((option, index) =>
          <div key={index}>
            <li><Link to={option}>{ option }</Link></li>
          </div>
        )
      }
    </ul>
  </div>

export default NavBar
