import React,{useState, useContext} from 'react';
import {GlobalConText} from '../context/GlobalState'

const AddTransition = () => {
const [text, setText] = useState('');
const [amount, setAmount] = useState(0);
const {addTransaction} = useContext(GlobalConText);

const onSubmit = e =>{
    e.preventDefault();

    const newTransaction ={
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
    }
    addTransaction(newTransaction);
}

    return (
        <>
            <h3>Nova compra</h3>
            <form onSubmit={onSubmit}>
                 <div className="form-control">
                     <label htmlFor="text">Compra</label>
                     <input type="text" placeholder='digite sua compra ou renda'
                     value={text}
                     onChange={(e)=> setText(e.target.value)}
                     />
                 </div>
                 <div className="form-control">
                     <label htmlFor="amount">Amount <br/>
                     (negativo, - compra, positivo, salário)
                     </label>
                     <input type="number" placeholder='Enter amount...'
                     value={amount}
                     onChange={(e)=> setAmount(e.target.value)}
                     />
                 </div>
                 <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransition
