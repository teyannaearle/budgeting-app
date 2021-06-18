import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
       <nav id="nav">
           <Link to="/" id="navHome">Budget<span className="er">(er)</span></Link> <br></br>
           <Link to="/transactions" className="links">Transactions</Link> <br></br>
           <Link to="/transactions/new" className="links">New Transaction</Link>
       </nav>
    )
}

export default NavBar
