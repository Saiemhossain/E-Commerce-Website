/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useNavigate, useParams } from "react-router";
import products from "../../data";
import { cartState } from "../../context/Context";




export default function SingleProduct() {

  const { cart, setCart } = cartState();

  const navigate = useNavigate();


  const addToCart = () => {
    setCart([...cart, product])
    navigate('/checkout');
  }

  const { id } = useParams();
  console.log(id);

  const product = products.find(item => item.id === parseInt(id));
 if (!product) {
   return <h1>Product not found</h1>; 
 }
  return (
    <div className="single-product wrapper">
      <img src={product.image} />
      <h2>{product.name}</h2>
      <h4>{ product.description}</h4>
      <h3> Price:  {product.price}</h3>
      <button onClick={addToCart}>Buy Now</button>
    </div>
  )
}


