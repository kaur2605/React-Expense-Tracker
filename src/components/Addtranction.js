import React from 'react';
import { useState } from 'react';

export default function AddTranction() {

       const [Text, setText] = useState("cash");
       const [amount, setamount] = useState(0);

       return (
              <div>
                     <h3>Add new transaction</h3>
                     <form>
                            <div className="form-control">
                                   <label >Text</label>
                                   <input type="text" value={Text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
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
