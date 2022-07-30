import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let removed = people.filter((person) => person.id !== id)
    setPeople(removed)
  }
  return (
    <>
      {people.map((person) => {
        const {id, name} = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )       
      })}

      <button className='btn' onClick={() => setPeople([])}>Clear</button>
    </>
  )
};

export default UseStateArray;
