import React, { useState } from 'react'

function StatePractice() {

    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);

    const increase = () => {
        setWidth(width + 100);
        setHeight(height + 100);
    }

  return (
    <>
    <button onClick={increase} >Increase </button>

    <div id='box' style={{width: width, height: height, backgroundColor: 'black'}}></div>
    </>
    
  )
}

export default StatePractice