import React, { useContext } from "react";
import "./Subtotal.css";
import { StateContext, useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";

function Subtotal() {
    // const [{basket}, dispatch] = useStateValue();
    const [{basket}, dispatch] = useContext(StateContext);
    console.log({basket})
    return (
        <div className="subtotal">
            <p>
                Subtotal ({basket.length} items): <strong>${getBasketTotal(basket)}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;