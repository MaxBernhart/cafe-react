function OrderItem({name, cost, oId, removeOrder}){
    
    function remove(){
        removeOrder(oId);
    }

    return(
        <div>
            <tr><td className = 'ordertd'>{name}</td><td className = 'ordertd'>{cost}</td><td className = 'ordertd'><button onClick={remove}>Remove</button></td></tr>
        </div>
    );
}

export default OrderItem