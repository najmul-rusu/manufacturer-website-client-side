import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// stripe Promise
const stripePromise = loadStripe('pk_test_QOevMnSLL8eDpoje0ba2eje900gogsgu4N');

const Payment = () => {
    const { paymentId } = useParams();
    const [product, setProduct] = useState({});
    const [res, setRes] = useState({});

    useEffect(() => {
      const url = `http://localhost:5000/product/${paymentId}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, [paymentId, res]);
    const { name, picture, description, price, quantity, minimum_quantity } = product;
  
    return (
      <div className="px-12">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <figure>
              <img className="w-48" src={picture} alt="iPhone" />
            </figure>
            <h2 className="card-title text-2xl">{name}</h2>
            <p ><b>Order Quantity :</b> {quantity}</p>
            <p className=""><b>Price : $</b>{price}</p>
          </div>

          <div>
          <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
          </div>
          
        </div>
      </div>
    );
  };
  
export default Payment;