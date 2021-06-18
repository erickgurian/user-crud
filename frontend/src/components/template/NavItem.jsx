import './NavItem.css'
import React from 'react'

export default props =>
  <a href={`#/${props.href ? props.href : ''}`}>
    <i className={`fa fa-${props.icon}`}></i> {props.description}
  </a>