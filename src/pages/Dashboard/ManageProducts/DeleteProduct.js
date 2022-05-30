import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct'

const DeleteProduct = ({ product, refetch }) => {

    
  const { _id, picture, name, description, price, quantity, minimum_quantity } =
  product;

const [products, setproducts] = useProduct();
const navigate = useNavigate();

const handleDelete = (id) => {
  const proceed = window.confirm("Are you Sure?");
  if (proceed) {
    const url = `https://shielded-retreat-18256.herokuapp.com/product/${id}`;
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
        <tr>

            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.minimum_quantity}</td>

            <td>{product.quantity}</td>


            <td><button onClick={() => handleDelete(product._id)} class="btn btn-xs">Delete Item</button></td>
        </tr>
    );
};

export default DeleteProduct;