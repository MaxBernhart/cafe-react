import OrderItem from "./OrderItem"
import PlaceOrder from "./PlaceOrder"
import { useState } from 'react'

function Order({orders, removeItem}){
    const [update, setUpdate] = useState(0);

    function remove(n){
        for(let i = 0; i < orders.length; i++){
            if(orders[i].oID == n){
                removeItem(orders[i]);
                setUpdate(update + 1);
            }
        }
    }

    if(orders.length != 0){
        return(
            <div className = 'order'>
                <table>
                    {orders.map((e) => {return(<OrderItem name = {e.name} cost = {e.cost} oId = {e.oID} removeOrder={remove}/>)})}
                </table>
                <PlaceOrder ordersP = {orders}/>
            </div>
        );
    }
    else{
        return(
            <h1>Your Cart is Empty</h1>
        );
    }


}

export default Order