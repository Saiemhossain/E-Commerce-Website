/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */

import { Navigate, useNavigate } from "react-router";
import { cartState } from "../context/Context"

// import { useNavigate } from "react-router";
// import { cartState } from "../context/Context"



// export default function Checkout() {
//   const { cart, setCart } = cartState();
//   const navigate = useNavigate();


//   const totalPrice = cart.reduce((total, item) => total + item.price, 0);

 

//   const handleRemove = (id) => {
//     setCart(cart.filter((item)=> item.id !==id))
//   }

//   const handleContinueShopping = () => {
//     navigate('/');
//   };

//   const handlePlaceOrder = () => {
//     alert('Order placed successfully!');
//     setCart([]); // Clear the cart
//     navigate('/');
//   };

  

//   return (
//     <div className="checkout wrapper">
//       <h4>Checkout Page</h4>
//       <div>
//         {cart.map(item => (
//           <div key={item.id} className="cart-item">
//             <img src={item.image} alt={item.name} />
//             <div>
//               <h2>{item.name}</h2>
//               <p>Price: ${item.price}</p>
//               <button onClick={() => handleRemove(item.id)}>Remove</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <h2>Total Price: ${totalPrice}</h2>
//       <button onClick={handlePlaceOrder}>Place Order</button>
//     </div>
//   );
// }




export default function CheckOut() {



  const { cart, setCart } = cartState();
    const navigate = useNavigate()

  const total = cart.reduce((total, item) => total + item.price, 0);

  function handlePlaceOrder() {
    alert('Form submitted successfully..')
    setCart([])
   navigate('/thankYou');
  }

  const handleRemove = (id) => {
    setCart(cart.filter((item)=>item.id !==id ))
  }


  return (
    <>
      <div className="cart-page wrapper">
        {cart.map(item => (
          <>
            <div>
              <img src={item.image} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <button onClick={() => handleRemove(item.id)}> Remove </button>
            </div>
          </>
        ))}
      </div>
      <div className="amount">
        <h4>Total : {total} </h4>
      

        <button onClick={handlePlaceOrder}>Place Order </button>
      </div>
    </>
  );
}





