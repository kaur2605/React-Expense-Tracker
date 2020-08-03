import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function Transctionlist() {

 let { transaction } = useContext(GlobalContext);
 console.log(transaction);

 return (
  <div>
   <h3>History</h3>
   <ul className="list">
    {transaction.map(item => {
     return <li className="minus">
      {item.text} <span>-{item.amount}</span><button className="delete-btn">x</button>
     </li>

    })}

   </ul>
  </div>
 )
}
