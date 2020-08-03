import React from 'react';
import { useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react'

export default function AddTranction() {
       const { addtrans } = useContext(GlobalContext);

       const [text, setText] = useState("");
       const [amount, setamount] = useState(0);

       function onSubmit(e) {
              e.preventDefault();

              const newTrans = {
                     id: Math.floor(Math.random() * 100000000),
                     text,
                     amount: +amount
              }

              addtrans(newTrans)




       }

       return (
              <div>
                     <h3>Add new transaction</h3>
                     <form onSubmit={onSubmit}>
                            <div className="form-control">
                                   <label >Text</label>
                                   <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                            </div>
                            <div className="form-control">
                                   <label  >Amount <br />
            (negative - expense, positive - income)</label
                                   >
                                   <input type="number" value={amount} onChange={(e) => setamount(e.target.value)} placeholder="Enter amount..." />
                            </div>
                            <button className="btn">Add transaction</button>
                     </form>
              </div>
       )
}
