import React from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react'


export default function Balance() {

 const { transactions } = useContext(GlobalContext);
 const amounts = transactions.map(trans => trans.amount);
 const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

 return (
  <div>
   <p>Your balance</p>
   <h2>${total}</h2>
  </div>
 )
}
