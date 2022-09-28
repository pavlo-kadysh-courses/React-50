import { useEffect, useRef } from 'react';
import { useState } from 'react'

export default function RefExample() { 
  const [name, setName] = useState('');
  const renderedTimes = useRef(0);
  const myInput = useRef();
  console.log(myInput);

  useEffect(() => {
    renderedTimes.current = renderedTimes.current + 1;
  })

  return (
    <>
        <input ref={myInput} value={name} onChange={e => setName(e.target.value)} />
        <div>My name is {name}</div>
        <div>Rerenderd app: {renderedTimes.current}</div>
        <button onClick={() => myInput.current.focus()}>Focus please</button>
    </>
  )
}
