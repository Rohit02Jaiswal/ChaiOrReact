import React, { useState } from 'react'

const Form = () => {
  // const [input, setInput] = useState("");
  // console.log(input);

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     alert(`This is ${input} !`);
  // }

  // With multiple inputs---------------
  const [input, setInput] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input)
    alert(`${input.username} ${input.age}`);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]: value}))
  }

  return (
    <div>
      {/* <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name</label>
        <input type="text" id='name' value={input} onChange={(e) => {
            setInput(e.target.value)
        }
            
        }/>
      </form> */}

      {/* With multiple inputs */}
      <form action="#" onSubmit={handleSubmit}>
        <label>Enter Your name:
          <input type="text" id='name' name='username' value={input.username || ""} onChange={handleChange} />
        </label>
        <br />
        <label>Enter Your Age: 
          <input type="number" id='age' name='age' value={input.age || ""} onChange={handleChange} />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form
