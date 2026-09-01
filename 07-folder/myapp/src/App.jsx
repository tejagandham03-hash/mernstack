import React from 'react'

const App = () => {
  function btnclicked(){
      console.log("button clicked")
    }
    const mouseOver=(=>{
      console.log("mouse is working")
    })
  return (
    
    <div className='parent'>
      <h1>this is a function class</h1>
      <button className="btn"Click={btnclicked}>click</button>
      <button className="btn" onDoubleClick={()=>{
        console.log("thanks")
       }}>on double click</button>
       <button className="btn" onMouseOver={()=>{
        console.log("mouse is working")
       }}>on mouse over</button>
    </div>
  )
}

export default App


