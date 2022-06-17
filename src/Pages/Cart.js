import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {remove} from '../Store/cartSlice'
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state=>state.cart);
  const handleRemove = (id) => {
    dispatch(remove(id))
  }
  return (
    <>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
         products.map((product=>{
           return(
             <div className="cartCard">
               <img src={product.image} alt=""/>
               <h5>{product.title}</h5>
               <h5>{product.price}</h5>
               <button className="btn btn-primary" onClick={()=>handleRemove(product.id)}>Remove</button>
             </div>
          )}))
        }
      </div>
    </>
  );
};

export default Cart;
