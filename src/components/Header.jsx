import React from 'react'
import {Link} from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
const Header = () => {
  return (
    <nav>
        <div className="container nav-container">
          <Link className="nav-logo" to={'/'}>
            <h3>BlogW<span>ebsit</span>E</h3>
          </Link>

          <ul className="nav-menu">
            <li><Link to={'/profile'}>Pooja Indulkar</Link></li>
            <li><Link to={'/create'}>Create Posts</Link></li>
            <li><Link to={'/author'}>Authors</Link></li>
            <li><Link to={'/logout'}>Logout</Link></li>
          </ul>
          <button className="nav-toogle-button">
          <FaBars />
          <IoMdClose />
          </button>
         
        </div>
    </nav>
  )
}

export default Header