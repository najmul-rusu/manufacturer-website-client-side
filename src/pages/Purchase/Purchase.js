/* import React, { useEffect, useState } from "react";
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

  const order = {
    productId: _id,
    product: name,
    productQuantity: quantity,
  }

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
              type="text" name="name"
              className="input input-bordered" readOnly
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
 */





import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useQuery } from 'react-query'
import useAdmin from '../../hook/useAdmin';
import Loading from '../Shared/Loading';
import OrderModal from './OrderModal';

const Purchase = () => {
  const { productId } = useParams();
  const [order, setOrder]= useState({});
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const { data: product, isLoading } = useQuery("product", () =>
      fetch(`http://localhost:5000/product/${productId}`, {
          method: "GET",
          headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
      }).then((res) => res.json())
  );
  if (isLoading) {
      return <Loading></Loading>;
  }
  return (
      <div>
          <div className="hero h-[90vh]">
              <div className="hero-content flex-col lg:flex-row lg:justify-center">
                  <div className="flex-1 flex justify-center">
                      <img
                          src={product?.img}
                          alt=""
                          className="max-w-sm rounded-lg"
                      />
                  </div>
                  <div className="flex-1">
                      <section className="text-left">
                          <h3 className="text-2xl font-bold">{product?.name}</h3>
                          <p className="py-3">{product?.description}</p>
                          <p><span className="font-semibold">Available Now: </span>{product?.quantity}</p>
                          <p className="py-2"><span className="font-semibold">Price: </span>{product?.price}$</p>
                          {
                              !admin && <label for="my-modal-6" className="btn btn-primary text-white mt-3 modal-button" onClick={()=>setOrder(product)}>Order Now</label>
                          }
                      </section>
                  </div>
              </div>
          </div>
          {
              order && <OrderModal product={product} setOrder={setOrder}></OrderModal>
          }
      </div>
  );
};

export default Purchase;