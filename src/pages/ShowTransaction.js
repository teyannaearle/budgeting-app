import React from 'react'
import TransactionDetails from '../components/TransactionDetails';

function ShowTransaction({deleteTransaction, updatePressed, completeUpdate}) {

    return (
        <TransactionDetails deleteTransaction={deleteTransaction} updatePressed={updatePressed} completeUpdate={completeUpdate}/>
    )
}

export default ShowTransaction
