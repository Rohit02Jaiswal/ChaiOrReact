import React, {useState} from 'react'

const Counter = () => {
    const [value, setValue] = useState(0);

    const increase = () => {
        if(value > 9) {
            return;
        }
        setValue(value+1);
    }
    const decrease = () => {
        if(value < 1) {
            return;
        }
        setValue(value-1);
    }
  return (
    <div>
      <p>Value = {value}</p>
      <button onClick={increase}>Increment</button>
      <br />
      <button onClick={decrease}>Decrement</button>
    </div>
  )
}

export default Counter
