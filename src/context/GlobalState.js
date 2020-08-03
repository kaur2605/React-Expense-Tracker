import { createContext, useReducer } from 'react';
import React from 'react';
import reducer from './reducer';

const initalState = {

 transactions: [
 ]

}

export const GlobalContext = createContext(initalState);

export const GlobalProvider = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, initalState)

 function deletetrans(id) {

  dispatch({ type: 'DELETE', payload: id })

 }
 function addtrans(trans) {

  dispatch({ type: 'ADD', payload: trans })

 }

 return (
  <GlobalContext.Provider value={{ transactions: state.transactions, deletetrans, addtrans }}>
   {children}
  </GlobalContext.Provider>
 )

}