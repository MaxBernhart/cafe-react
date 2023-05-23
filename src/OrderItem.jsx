function OrderItem({name, cost, oId, removeOrder}){
    
    function remove(){
        removeOrder(oId);
    }

    return(
        <div>
            <tr><td>{name}</td><td>{cost}</td><td><button onClick={remove}>Remove</button></td></tr>
        </div>
    );
}

export default OrderItem