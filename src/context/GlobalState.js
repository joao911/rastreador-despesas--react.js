import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//estado inicial
const initialState ={
    transactions :[
        {id:1, text:'Vodk', amount:-12},
        {id:2, text:'frutas', amount:-15},
        {id:3, text:'uber', amount:-10},
        {id:4, text:'lanche', amount:10}
    ]
}
// Criando contexto
export const GlobalConText = createContext(initialState);
// componente provider
export const GlobalProvider =({children}) =>{
    const[state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <GlobalConText.Provider
        value={{transactions: state.transactions}}
        >
            {children}
        </GlobalConText.Provider>
    )
}
 