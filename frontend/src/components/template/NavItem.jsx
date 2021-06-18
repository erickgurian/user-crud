import './NavItem.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
  <Link to={`/${props.href ? props.href : ''}`}>
    <i className={`fa fa-${props.icon}`}></i> {props.description}
  </Link>