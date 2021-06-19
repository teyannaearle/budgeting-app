import axios from "axios";
import React from "react";
import { apiURL } from "../util/apiURL";
import { useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";

const API = apiURL();

function Edit({ updateTransaction }) {
  let history = useHistory();
  let { id } = useParams();
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    from: "",
    amount: "",
    negative: false,
  });

  useEffect(() => {
    axios.get(`${API}/transactions/${id}`).then(
      (response) => {
        setTransaction(response.data);
      },
      (error) => history.push(`/not-found`)
    );
  }, [id, history]);

  const handleInput = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const handleNumInput = (e) => {
    setTransaction({ ...transaction, [e.target.id]: Number(e.target.value) });
  };

  const handleCheckBox = () => {
    if (transaction.amount) {
      setTransaction({ ...transaction, negative: !transaction.negative });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTransaction(transaction, id);
    history.push(`/transactions`);
  };

  const handleCancel = () => {
    history.push(`/transactions/${id}`);
  };

  return (
    <>
      <h1 className="header">Update</h1>
      <form onSubmit={handleSubmit} id="update" className="form">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" onChange={handleInput} required />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={transaction.name}
          onChange={handleInput}
          placeholder="Name"
          required
        />
        <label htmlFor="from">From</label>
        <input
          type="text"
          id="from"
          value={transaction.from}
          onChange={handleInput}
          placeholder="From"
          required
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={transaction.amount}
          onChange={handleNumInput}
          min="0"
          required
        />
        <span>
          <input
            type="checkbox"
            checked={transaction.negative}
            onChange={handleCheckBox}
          />
          <label htmlFor="checkbox">Check for negative dollar amount </label>
        </span>
        <input type="submit" className="button submit" />
      </form>
      <button className="button submit" onClick={handleCancel}>
        Cancel
      </button>
    </>
  );
}

export default Edit;
