import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
       <nav id="nav">
           <Link to="/" id="navHome">Budget<span className="er">(er)</span></Link> <br></br>
           <Link to="/transactions">Transactions</Link> <br></br>
           <Link to="/transactions/new">New Transaction</Link>
       </nav>
    )
}

export default NavBar
