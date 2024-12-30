import React, { useState } from 'react'

const Form = () => {
    const [input, setInput] = useState("");
    console.log(input);
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`This is ${name} !`);
    }
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name</label>
        <input type="text" id='name' value={input.name || ""} onChange={(e) => {
            const name = e.target.name;
            setInput(value => ({...values, [name]: value}))
        }
            
        }/>
      </form>
    </div>
  )
}

export default Form
