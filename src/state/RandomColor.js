import React, { useState } from 'react'

function RandomColor() {

    const colors= ["red", "yellow", "blue", "gray", "pink", "tomato", "black", "orange", "green"];

     const [color, setcolor] = useState(colors[0])

    const change = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setcolor(colors[randomIndex]);
    }



  return (

    <>
        <button onClick={change}>Change Color</button>
        <div style={{backgroundColor: color, width:200, height:200}}></div>
    </>

    
  )
}

export default RandomColor