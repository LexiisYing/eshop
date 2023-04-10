import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
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






// import React from "react";
// import "./Subtotal.css";
// import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./Reducer";

// // need to fix issue here.
 
// function Subtotal() {
//     const [{basket}, dispatch] = useStateValue();
//     return (
//         <div className="subtotal">
//             <>
//                 renderText = {(value) => (
//                     <>
//                         <p>
//                             Subtotal ({basket.length} items): <strong>${value}</strong>
//                         </p>
//                         <small className="subtotal__gift">
//                             <input type="checkbox" /> This order contains a gift
//                         </small>
//                     </>
//                 )}

//                 decimalScale={2}
//                 value={getBasketTotal(basket)}
//                 displayType={"text"}
//                 thousandSeparator={true}
                
//             </>


//             <button>Proceed to Checkout</button>
//         </div>
//     )
// }

// export default Subtotal;