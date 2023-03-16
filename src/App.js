import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Card from './Card';
import React from 'react';

function App() {
  const [cart, setCart]= React.useState([]);

  const handleClick= (itme)=>{
       console.log(itme)
      if(cart.indexOf(itme) !== -1) return;
      setCart([...cart, itme]);
  }
  const handleChange= (item, d)=>{
      const ind = cart.indexOf(item);
      const arr = cart;
      arr[ind].amount +=d;

      if(arr[ind].amount ===0) arr[ind].amount =1;
      setCart([...arr]);
  }
  return (
    <div className="App">
      <Home handleClick={handleClick}/>
      <Card cart={cart} handleChange={handleChange} setCart={setCart}/>
    </div>
  );
}

export default App;
