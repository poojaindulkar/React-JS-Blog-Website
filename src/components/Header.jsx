import React from 'react'
import {Link} from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import { useState } from 'react'
const Header = () => {
  const [isNavShow,setIsNavShow]=useState(window.innerWidth>1024 ? true :false)

  const closeNavHandler=()=>{
    if(window.innerWidth<1024){
      setIsNavShow(false)
    }else{
      setIsNavShow(true)
    }
  }
  return (
    <nav>
        <div className="container nav-container">
          <Link className="nav-logo" to={'/'} onClick={closeNavHandler}>
            <h3>BlogW<span>ebsit</span>E</h3>
          </Link>

         {isNavShow && <ul className="nav-menu">
            <li><Link to={'/profile/:id'} onClick={closeNavHandler}>Pooja Indulkar</Link></li>
            <li><Link to={'/create'} onClick={closeNavHandler}>Create Posts</Link></li>
            <li><Link to={'/author'} onClick={closeNavHandler}>Authors</Link></li>
            <li><Link to={'/logout'} onClick={closeNavHandler}>Logout</Link></li>
          </ul>}
          <button className="nav-toogle-button" onClick={()=>setIsNavShow(!isNavShow)}>
            {
              isNavShow ?  <IoMdClose /> :<FaBars /> 
            }
          
          
          </button>
         
        </div>
    </nav>
  )
}

export default Header