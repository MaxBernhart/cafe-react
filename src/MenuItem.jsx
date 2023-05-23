import React from "react"

function MenuItem({name, cost, id, doOrder}){
    function orderItem() {
        doOrder(name);
    }
    return(
        <div>
            <tr>
                <td className = 'b'>{name}</td>
                <td className = 'b'>{cost}</td>
                <td className = 'b'><button onClick={orderItem}>Order</button></td>
            </tr>
        </div>
    );
}

export default MenuItem