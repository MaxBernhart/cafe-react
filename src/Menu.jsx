import { useEffect } from "react";
import { useState } from 'react'
import './App.css'
import MenuItem from "./MenuItem";

function Menu({addItem}) {
    const [items,setItems] = useState([]);
    useEffect(() => {getItem()},[]);
    const [meal,setMeal] = useState('lunch');

    function getItem(){
        fetch('https://cmsc106.net/cafe/item').then(response => response.json()).then(response => { setItems(response);});
    }
    
    function add(n){
        for(let i = 0; i < items.length; i++){
            if(items[i].name == n){
                addItem(items[i]);
            }
        }
    }

    return (
        <div className = "menu">
        <div className = 'im'>
            <img className = 'banner'src="https://cdnimg.webstaurantstore.com/images/articles/353/different-types-of-restaurants-header.jpg" alt=""/>
            <p className = 'imgP'>Our Menu</p>
        </div>
            <tbody>
                <tr className="headT">
                    <th className = 'i'>Item</th>
                    <th className="c">Cost</th>
                    <th className="o"></th>
                </tr>
                {items.filter((e)=>{return e.meal==meal;}).map((e) => {return(<MenuItem name = {e.name} cost = {e.cost} doOrder = {add} id = {e.id} />)})}
            </tbody>
            <div className = 'buttons'>
                <button className = "menB" onClick={()=>setMeal('breakfast')}>Breakfast</button>
                <button className = "menB" onClick={()=>setMeal('lunch')}>Lunch</button>
                <button className = "menB" onClick={()=>setMeal('dinner')}>Dinner</button>
            </div>
        </div>
    );
}
export default Menu