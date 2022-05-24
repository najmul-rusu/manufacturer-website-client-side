import React from "react";
import { useNavigate } from "react-router-dom";

const ShowProducts = ({ product }) => {
  const { _id, picture, name, description, price, quantity, minimum_quantity } =
    product;
  const navigate = useNavigate();
  const handlenavigateToPurchase = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="" src={picture} alt="iPhone" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Quantity: {quantity}</p>
        <p className="card-text text-muted">
          Minimum Order Quantity: {minimum_quantity}
        </p>
        <p className="card-text">Price: ${price}</p>
        <p className="card-text pb-4">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-100" onClick={()=>handlenavigateToPurchase(_id)}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ShowProducts;
