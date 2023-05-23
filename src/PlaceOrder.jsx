import {useRef, useState} from 'react'

function PlaceOrder(ordersP){
    let nameField = useRef();
    let phoneField = useRef();
    let [confirmed,setConfirmed] = useState(false);

    function postOrder(){

        let ids = [];
        for(let i = 0; i < ordersP.length; i++){
            ids.push(ordersP[i].id);
        }

        var toPost = {customer:nameField.current.value,phone:phoneField.current.value,items:ids};
        fetch('https://cmsc106.net/cafe/purchase', {
            method: 'POST',
            body: JSON.stringify(toPost),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
          }).then(response => response.json()).then(response => showConfirm(response));
    }

    function showConfirm(data){
        setConfirmed(true);
    }

    if(confirmed == false){
        return(
            <div className='placer'>
                <p>Enter Name: <input type = "text" ref = {nameField} /></p>
                <p>Enter Phone: <input type = "text" ref = {phoneField} /></p>
                <button onClick = {postOrder}>Place Order</button>
            </div>
        );
    } else{
        return(        
        <div className='placer'>
            Order Placed
        </div>
    );
    }
}

export default PlaceOrder