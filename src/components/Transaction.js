import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transction = ({ trans }) => {
 const sign = trans.amount < 0 ? '-' : '+';

 const { deletetrans } = useContext(GlobalContext);

 return (
  <li className={trans.amount < 0 ? 'minus' : 'plus'}>
   {trans.text} <span>{sign}${Math.abs(trans.amount)}</span><button onClick={() => deletetrans(trans.id)} className="delete-btn">x</button>
  </li>


 )
}