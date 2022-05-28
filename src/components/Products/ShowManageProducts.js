import React from "react";
import { useNavigate } from "react-router-dom";
import useProduct from "../../hook/useProduct";

const ShowManageProducts = ({ product, setManageProduct }) => {
  const { _id, picture, name, description, price, quantity, minimum_quantity } =
    product;

  const [products, setproducts] = useProduct();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you Sure?");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setproducts(remaining);
        });
    }
  };

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
        <label
          onClick={() => handleDelete(_id)}
          for="delete-modal"
          class="btn bg-primary font-bold border-none text-white"
        >
          DELETE PRODUCT
        </label>
      </div>
    </div>
  );
};

export default ShowManageProducts;
