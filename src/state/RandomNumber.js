import React, { useState } from 'react'

function RandomNumber() {

    const [number, setNumber] = useState();
    const ul = document.querySelector('ul');

    function addNumber () {
        let randomNumber = Math.floor(Math.random() * 100);
        setNumber(randomNumber);
        const li = document.createElement('li');
        li.innerHTML= randomNumber;
        

        ul.appendChild(li);


    }

    

    

  return (
  <>

  <button onClick={addNumber}>Add Random </button>
  <div></div>

  <ul>
    
  </ul>

  </>
    
  )
}

export default RandomNumber