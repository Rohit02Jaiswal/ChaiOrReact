import React, { useCallback, useEffect, useRef, useState } from 'react'

const Home = () => {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  // const passwordGenerator = useCallback(fn, [dependencies])
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(number) {
      str += '0123456789';
    }
    if(character) {
      str += '!@#$%^&*()_?';
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, number, character, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, setPassword])

  // useRef Hook 
  const passRef = useRef(null);
  const passwordCopy = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <div className="bg-gray-700 p-10 rounded-lg text-center w-1/2 h-auto">
        <h1>Password Generator</h1>
        <div className='mt-4 flex text-black'>
          <input type="text" 
          value={password}
          readOnly
          placeholder='Password'
          className='p-2 w-full rounded-l-lg outline-none'
          ref={passRef}
          />
          <button className='p-2 bg-blue-700 rounded-r-lg text-white' onClick={passwordCopy}>Copy</button>
        </div>
        <div className="mt-4 flex items-center justify-center gap-10">
          <div className="flex items-center justify-center">
            <input type="range" 
            min={4}
            max={16}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="">
            <input 
            type="checkbox"
            defaultChecked = {number} 
            onChange={() => {setNumber((prev) => !prev)}}
            />
            <label>Number</label>
          </div>
          <div className="">
            <input 
            type="checkbox"
            defaultChecked = {character} 
            onChange={() => {setCharacter((prev) => !prev)}}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
