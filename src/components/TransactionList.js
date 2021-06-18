import React from 'react'
import Transaction from './Transaction'

function TransactionList({transactions}) {
    
    return (
        <ul id="chart">
        <li className="list-item chart-title">
            <p>Date <br></br> <span id="date">YYYY-MM-DD</span> </p>
            <p>&nbsp; Transaction &nbsp;</p>
            <p>Amount</p>
        </li>
        {transactions.map(transaction =><li key={transaction.id}><Transaction transaction={transaction}/></li> )}
        </ul>
    )
}

export default TransactionList
