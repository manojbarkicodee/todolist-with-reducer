import React from 'react' 
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/products">products</Link>
        
    </div>
  )
}

export default Navbar