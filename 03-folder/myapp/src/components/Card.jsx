import React from 'react'

const Card = (props) => {
  return (
    
    // <div className="card">
    //   <img src="https://tse2.mm.bing.net/th/id/OIP.BmrIzjaeghq1NlpapZFT4QHaJU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"></img>
    //   <h1>Bunty,21</h1>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sint iusto? Earum, unde. Sed, repellat?</p>
    //   <button>View Profile</button>
    // </div>
    <div className="card">
      <img src={props.img}></img>
      <h1>{props.user},{props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sint iusto? Earum, unde. Sed, repellat?</p>
      <button>View Profile</button>
    </div>
    
  )
}

export default Card
