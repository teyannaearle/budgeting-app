import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from "react-router-dom";
import { apiURL } from '../util/apiURL';

const API = apiURL()

function TransactionDetails({deleteTransaction}) {   
    const [transaction, setTransaction] = useState([]) 

    let history = useHistory();
    let { id } = useParams()

    useEffect(()=> {
        axios.get(`${API}/transactions/${id}`)
        .then((response) => {
            const { data } = response
            setTransaction(data)
        }).catch((error) => {
            history.push("/not-found")
        })
    }, [id, history])
    
    const handleDelete = () => {
        deleteTransaction(id)
        history.push("/transactions")
    }

    return (
        <div id="transaction-details">
            <div> 
            <p>{transaction.id}</p>
            <h3>{transaction.date}</h3>
            <p>{transaction.name} from {transaction.from}</p>
            <p>{transaction.amount}</p> 
            <Link to={`/transactions/${id}/update`}><button>Update Transaction</button></Link>
            <button onClick={handleDelete}>Delete Transaction</button>
            </div>
        </div>
    )
}

export default TransactionDetails
