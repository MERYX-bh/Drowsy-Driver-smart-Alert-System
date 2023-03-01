import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import { useRouter } from 'next/router'

function NavBar() {
  const router = useRouter()
  const isActive = (r) => {
    if(r === router.pathname)
    {
      return " active"
    }
    else
    {
      return ""
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link href="/">
  <p className="navbar-brand">E-commerce</p>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link href="/cart">
          <span className={"nav-link" + isActive('/cart')}>
          <FontAwesomeIcon icon={faCartShopping} /> Cart</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/signin">
          <span className={"nav-link" + isActive('/signin')}>
          <FontAwesomeIcon icon={faUser} /> Sign in</span>
        </Link>
      </li>
      
      { /*<li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          UserName
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Profile</a>
          <a className="dropdown-item" href="#">Login</a>
        </div>
  </li> */}
    </ul>
  </div>
</nav>
  )
}

export default NavBar