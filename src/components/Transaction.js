import React,{useContext} from 'react'
import {GlobalConText} from '../context/GlobalState'

export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const {deleteTransaction} = useContext(GlobalConText)
    return (
        <>
             <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                    {transaction.text} <span>{sign}R${Math.abs(transaction.amount)}</span>
                   <button className="delete-btn"
                   onClick={()=>deleteTransaction(transaction.id)}
                   >x</button>
               </li>
        </>
    )
}
