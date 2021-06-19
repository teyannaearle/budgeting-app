import React from 'react'
import { Link } from "react-router-dom"

function Transaction({transaction}) {
    // const [amount, setAmount] = useState(0)

    // useEffect(()=>{
    //     // let fixed = transaction.amount.toFixed(2)
    //     // setAmount(fixed)
    //     console.log(transaction.amount.toFixed(2))
    // }, [])

    return (
        <div className="list-item">
            <p>
                {transaction.date} <br></br>
                <Link to={`transactions/${transaction.id}`}><button id="view">View Transaction</button></Link>
            </p> 
            <p>{transaction.name}</p> 
            <p className={!transaction.negative ? "positive" : "negative"}>
                {transaction.negative? `$-${transaction.amount.toFixed(2)}`: `$ ${transaction.amount.toFixed(2)}`}
            </p>
      
        </div>
    )
}

export default Transaction
