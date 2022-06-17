import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import {fetchProducts} from "../Store/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  // console.log(products);
  const {data: product,status} = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
      
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
      dispatch(add (product));
  };
  return (
    <div className="productsWrapper">
      {product.map((product) => {
        return (
          <div className="cart" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button
              onClick={() => handleAdd(product)}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
