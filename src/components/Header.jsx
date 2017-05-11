import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <h1>{ 'hello redux' }</h1>
    <p><Link to={'/note'}>note</Link></p>
    <p><Link to={'/counter'}>counter</Link></p>
  </div>
)

export default Header
