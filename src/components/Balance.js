import React,{useContext} from 'react'
import {GlobalConText } from '../context/GlobalState';

const Balance = () => {
  const {transactions} = useContext(GlobalConText);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item)=>(acc+=item),0).toFixed(2);
    return (
        <>
          <h1>Seu saldo</h1>  
          <h4>{total}</h4>
        </>
    )
}

export default Balance
