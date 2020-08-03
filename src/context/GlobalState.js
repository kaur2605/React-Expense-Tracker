import { createContext, useReducer } from 'react';
import React from 'react';
import reducer from './reducer';

const initalState = {

 transactions: [

  { id: 1, text: 'Toys', amount: -200 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Computer', amount: -1000 },
  { id: 4, text: 'TV', amount: 1500 }
 ]
}

export const GlobalContext = createContext(initalState);

export const GlobalProvider = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, initalState)

 return (
  <GlobalContext.Provider value={{ transactions: state.transactions }}>
   {children}
  </GlobalContext.Provider>
 )

}