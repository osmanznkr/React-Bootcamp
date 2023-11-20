import React, { useState } from 'react'

function RemoveRandom() {


    const [number, setNumber] = useState([2,9,7,4,6,2,5,12,54,21,87,25,96,96,32,78,45,24]);

    let randomIndex = Math.floor(Math.random() * number.length);
     
        function deleteNumber() {
            setNumber(number.filter((item) => item !== number[randomIndex]));
        }

  return (
    <>
    <button onClick={deleteNumber}>Remove Random</button>
    <ul>
        {number.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </>
  )
}

export default RemoveRandom