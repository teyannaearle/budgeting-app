import React from 'react'
import TransactionDetails from '../components/TransactionDetails';

function ShowTransaction({deleteTransaction}) {

    return (
        <TransactionDetails deleteTransaction={deleteTransaction}/>
    )
}

export default ShowTransaction
