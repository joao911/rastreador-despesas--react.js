import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//estado inicial
const initialState ={
    transactions :[] 
}
// Criando contexto
export const GlobalConText = createContext(initialState);
// componente provider
export const GlobalProvider =({children}) =>{
    const[state, dispatch] = useReducer(AppReducer, initialState);
    // ações
    function deleteTransaction(id) {
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
        });
    }
    function addTransaction(transaction){
          dispatch({
              type: 'ADD_TRANSACTION',
              payload: transaction
          });
    }
    return(
        <GlobalConText.Provider
        value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}
        >
            {children}
        </GlobalConText.Provider>
    )
}
 