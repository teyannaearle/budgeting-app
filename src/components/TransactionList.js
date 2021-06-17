import React, { useState, useEffect } from 'react'
import Transaction from './Transaction'

function TransactionList({transactions}) {
    // const [transactionArray, setTransactions] = useState([])

    // useEffect(() => {
    //     setTransactions(transactions)
    // }, [transactions])

    return (
        <ul id="chart">
        <li className="list-item chart-title">
            <p>Date <br></br> <span id="date">YYYY-MM-DD</span> </p>
            <p>Transaction</p>
            <p>Amount</p>
        </li>
        {transactions.map(transaction =><li key={transaction.id}><Transaction transaction={transaction}/></li> )}
        </ul>
    )
}

export default TransactionList
