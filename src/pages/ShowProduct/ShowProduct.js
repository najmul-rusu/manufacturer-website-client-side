import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowProduct = ({ product }) => {
    const { _id, img, name, short_description, price, quantity, minimum_quantity } =
        product;
    const navigate = useNavigate();
    const handleNavigateToPurchase = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img className="" src={img} alt="iPhone" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className="card-text font-bold">Available Quantity : {quantity}</p>
                <p className="card-text font-bold">
                    Minimum Order Quantity : {minimum_quantity}
                </p>
                <p className="card-text font-bold">Price : ${price}</p>
                <p className="card-text pb-4">{short_description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-100" onClick={() => handleNavigateToPurchase(_id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;