import React from 'react'
import NewTransactionForm from '../components/NewTransactionForm'

function New({addTransaction}) {
    return (
        <div>
            <h1>New Transaction</h1>
            <NewTransactionForm addTransaction={addTransaction} />
        </div>
    )
}

export default New
