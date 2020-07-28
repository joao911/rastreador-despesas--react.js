import React,{useContext} from 'react'
import {GlobalConText } from '../context/GlobalState';
import {Transaction} from './Transaction'

const TransactionList = () => {
    const {transactions} = useContext(GlobalConText);
    
    return (
        <>
           <h3>Seus Gastos</h3> 
           <ul className="list">
               {transactions.map(transaction =>(
                  <Transaction transaction={transaction}
                  key={transaction.id}
                  />
               ))}
               
           </ul>
        </>
    )
}

export default TransactionList
