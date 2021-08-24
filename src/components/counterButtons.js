import {useState} from 'react';
import './counterButtons.css'
function Buttons(){
    const [count , setCount] = useState(0)

    function decrementClick(){
        setCount(prev => prev -1)
    }
    function incrementClick(){
        setCount(plus => plus +1)
    }
  return (
    <>
    <button className="btn-add" onClick={incrementClick} >+</button>
    <span className="count">{count}</span>
    <button className="btn-minus" onClick={decrementClick}>-</button>
    </>
  )
}
export default  Buttons

