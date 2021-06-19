import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from "react-router-dom";
import { apiURL } from '../util/apiURL';

const API = apiURL()

function TransactionDetails({deleteTransaction, updatePressed, completeUpdate}) {   
    const [transaction, setTransaction] = useState([]) 

    let history = useHistory();
    let { id } = useParams()

    useEffect(()=> {
        axios.get(`${API}/transactions/${id}`)
        .then((response) => {
            const { data } = response
            setTransaction(data)
            completeUpdate()
        }).catch((error) => {
            history.push("/not-found")
        })
    }, [id, history, updatePressed, completeUpdate])
    
    const handleDelete = () => {
        deleteTransaction(id)
        history.push("/transactions")
    }

    return (
        <div id="transaction-details">
            <div id="transaction-card"> 
            <p>Transaction I.D: {transaction.id}</p>
            <h3>Date: {transaction.date}</h3>
            <p>{transaction.name} from {transaction.from}</p>
            <p className={!transaction.negative ? "positive" : "negative"} id="transaction-amount"> 
                {transaction.negative? `$ -${transaction.amount}`: `$ ${transaction.amount}`}
            </p> 
            <span>
            <Link to={`/transactions`}><button className="button">Back to transactions</button></Link>
            <Link to={`/transactions/${id}/update`}><button className="button">Update Transaction</button></Link>
            </span>
            <button className="button" onClick={handleDelete}>Delete Transaction</button>
            </div>
        </div>
    )
}

export default TransactionDetails
