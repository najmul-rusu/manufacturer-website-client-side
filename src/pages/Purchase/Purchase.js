import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../components/Title/PageTitle";

const Purchase = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [res, setRes] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, res]);
  const {_id, name, picture, price, quantity, minimum_quantity } = product;

  const handleNavigateToPurchase = (id) => {
    navigate(`/payment/${id}`);
  };

  return (
    <div className="px-12">
      <PageTitle>Purchase</PageTitle>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Address</span>
            </label>
            <input
              type="text"
              placeholder="Type Your Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Customer Note</span>
            </label>
            <input
              type="text"
              placeholder="Type here..."
              className="input input-bordered py-10"
            />
          </div>
          
          
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={()=>handleNavigateToPurchase(_id)}>Purchase</button>
          </div>
        </div>
        <div>
          <figure>
            <img className="w-48" src={picture} alt="iPhone" />
          </figure>
          <h2 className="card-title text-2xl">{name}</h2>
          <p ><b>Quantity :</b> {quantity}</p>
          <div className="form-control">
            <label className="label">
              <p className=""><b>Minimum Order Quantity :</b></p>
            </label>
            <input
              type="number"
              placeholder={minimum_quantity}
              className="input input-bordered w-48"
            />
          </div>
          <p className=""><b>Price : $</b>{price}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Purchase;
