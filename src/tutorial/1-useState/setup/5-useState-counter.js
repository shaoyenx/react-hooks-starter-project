import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increaseLater = () => {
    setTimeout(()=> {
      setValue((prevValue) => {
        return prevValue + 1
      })
    }, 2000)
  }
  return (
    <>
      <section>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value-1)}>decrease</button>
        <button className='btn' onClick={() => setValue(0)}>reset</button>
        <button className='btn' onClick={() => setValue(value + 1)}>increase</button>
      </section>

      <section style={{margin: '4rem'}}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={increaseLater}>increase later</button>
      </section>
    </>
  )
};

export default UseStateCounter;
