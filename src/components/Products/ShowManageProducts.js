import React from "react";
import { useNavigate } from "react-router-dom";
import useProduct from "../../hook/useProduct";

const ShowManageProducts = ({product}) => {
  const { _id, picture, name, description, price, quantity, minimum_quantity } =
    product;

    const [products, setproducts] = useProduct();
    const navigate = useNavigate();
        
        const handleDelete = id => {
    
            const proceed = window.confirm('Are you Sure?');
            if (proceed) {
                const url = `http://localhost:5000/product/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })

                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        const remaining = products.filter(product => product._id !== id)
                        setproducts(remaining)
                    })

            }
    }

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="" src={picture} alt="iPhone" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="card-text font-bold">Quantity : {quantity}</p>
        <p className="card-text font-bold">
          Minimum Order Quantity : {minimum_quantity}
        </p>
        <p className="card-text font-bold">Price : ${price}</p>
        <p className="card-text pb-4">{description}</p>
        <div className="card-actions ">
          <button
            className="btn btn-primary w-full"
            onClick={() => handleDelete(_id)}
          >
            DELETE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowManageProducts;
