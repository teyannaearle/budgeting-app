import React from 'react'
import { Link } from "react-router-dom"

function Transaction({transaction}) {

    return (
        <div className="list-item">
            <p>
                {transaction.date} <br></br>
                <Link to={`transactions/${transaction.id}`}><button id="view">View Transaction</button></Link>
            </p> 
            <p>{transaction.name}</p> 
            <p className={!transaction.negative ? "positive" : "negative"}>
                {transaction.negative? `$-${transaction.amount}`: `$ ${transaction.amount}`}
            </p>
      
        </div>
    )
}

export default Transaction
