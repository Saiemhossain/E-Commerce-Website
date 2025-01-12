/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState,  } from "react";
import products from "../../data"
import { Link } from "react-router-dom";




export default function ProductCard({product}) {

  return (
    <>
      <div>
        <img src={product.image} />
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        

        <Link to={`/product/${product.id}`}>
          {' '}
          <button>View More</button>{' '}
        </Link>
      </div>
    </>
  );
}
