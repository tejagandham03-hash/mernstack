import React from 'react'
import Card from './components/Card.jsx'  
const App = () => {
  return (
    <div className="parent">
    <Card user='Bunty'age={18} img={'https://wallpaperaccess.com/full/374467.jpg'}/>
     <Card user='Alice'age={20} img={'https://png.pngtree.com/png-clipart/20240515/original/pngtree-cute-bird-cartoon-character-png-image_15098932.png'}/>
      <Card user='Bob'age={21} img={'https://wallpaperbat.com/img/247319-cartoon-hd-wallpaper-background-wallpaper-1600x1200.jpg'}/>
       <Card user='Charlie'age={24} img={'https://cdn.pixabay.com/photo/2022/09/11/17/34/dog-7447595_1280.png'}/>
    </div>
  )
}

export default App
