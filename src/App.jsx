import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react'
import './App.css'
import { Routes, Route, HashRouter, Link} from "react-router-dom";
import Menu from './Menu'
import Order from './Order'

function App() {
  const [order,setOrder] = useState([]);
  const [orderID, setOrderID] = useState(0);

  function addItem(item) {
    let newOrder = order;
    let newItem = {name:item.name, cost:item.cost,iditem:item.iditem,oID:orderID};
    setOrderID(orderID + 1);
    newOrder.push(newItem);
    setOrder(newOrder);
  }

  function removeFromOrder(item){
    let newOrder2 = order;
    let index = newOrder2.indexOf(item);
    newOrder2.splice(index,1);
    setOrder(newOrder2);
  }

  return (
    <div className = 'main'>

        <HashRouter>
          <nav>
            <Link to="/" style = {linkStyle}>Menu</Link>{' '}
            <li>Cafe</li>
            <Link to="/order">Cart</Link>{' '}
          </nav>
        
          <Routes>
            <Route path= {"/"} element={<Menu addItem={addItem}/>} />
            <Route path= {"/order"} element={<Order orders={order} removeItem = {removeFromOrder}/>} />
          </Routes>
        </HashRouter>
    </div>
  )
}

const linkStyle = {
  margin: "20px"
}



export default App
