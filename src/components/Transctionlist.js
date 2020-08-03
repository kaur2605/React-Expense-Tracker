import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transction } from './Transaction';

export default function Transctionlist() {

 let { transactions } = useContext(GlobalContext);
 console.log(transactions);

 return (
  <div>
   <h3>History</h3>
   <ul className="list">
    {transactions.map(trans => {
     return <Transction key={trans.id} trans={trans}>

     </Transction>

    })}

   </ul>
  </div>
 )
}
