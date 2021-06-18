import './App.css';
import New from "./pages/New"
import Home from "./pages/Home"
import Index from "./pages/Index"
import Edit from "./pages/Edit"
import NavBar from "./components/NavBar"
import NotFound from './pages/NotFound';
import ShowTransaction from './pages/ShowTransaction';
import axios from "axios"
import { apiURL} from "./util/apiURL"
import { useState, useEffect } from 'react';
import { Route, Switch} from "react-router-dom"

const API = apiURL()

function App() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    axios.get(`${API}/transactions`).then((response) => {
      const { data } = response 
      setTransactions(data)
    })
  }, []);

  const addTransaction = (newTransaction) => {
    let id = 0
    if (transactions[0]){
      id = transactions[transactions.length -1].id + 1
    }
    axios.post(`${API}/transactions`, {id: id, ...newTransaction})
    .then((response) => {
      setTransactions([...transactions, {id:id, ...newTransaction}])
    })
    .catch((error) => console.log(error))
  }

  const deleteTransaction = (id) =>{
    axios.delete(`${API}/transactions/${id}`)
    .then((response) => {
        setTransactions(response.data)
      })
      .catch((error) => {console.log(error)})
  } 



  const updateTransaction = (updatedTransaction, id) => {
    axios.put(`${API}/transactions/${id}`, updatedTransaction)
    .then(
      (response) => {
        setTransactions(response.data);
      })
    .catch((error) => {console.log(error)})

  };
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/transactions/new"> <New addTransaction={addTransaction} transactions={transactions}/> </Route>
        <Route path="/transactions/:id/update"> <Edit updateTransaction={updateTransaction} /></Route>
        <Route path="/transactions/:id"> <ShowTransaction transactions={transactions} deleteTransaction={deleteTransaction}/></Route>
        <Route path="/transactions"> <Index transactions={transactions}/> </Route>
        <Route exact path="/"> <Home /> </Route>
        <Route path="*"> <NotFound /> </Route>
      </Switch>
    </div>
  );
}

export default App;
