import './Nav.css'
import React from 'react'

import NavItem from './NavItem'

export default props =>
  <aside className="menu-area">
    <nav className="menu">
      <NavItem icon="home" description="Início"/>
      <NavItem href="users" icon="home" description="Usuários"/>
    </nav>
  </aside>