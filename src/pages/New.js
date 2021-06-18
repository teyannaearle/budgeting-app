import React from 'react'
import NewTransactionForm from '../components/NewTransactionForm'

function New({addTransaction}) {
    return (
        <div id="new">
            <h1 className="header">New Transaction</h1>
            <NewTransactionForm addTransaction={addTransaction} />
        </div>
    )
}

export default New
