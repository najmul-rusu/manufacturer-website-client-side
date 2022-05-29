import React from 'react';
import { useNavigate } from 'react-router-dom';
import AllProductData from '../../../hooks/AllProductData';

const DeleteProduct = ({ product, refetch }) => {
    const [products, setProduct] = AllProductData();
    const navigate = useNavigate();

    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const url = `https://mighty-beach-10745.herokuapp.com/product/${id}`;
            console.log(url)
            fetch(url, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`

                }
            })

                .then(response => response.json())
                .then(data => {
                    console.log(data);

                    const remaining = products.filter(product => product._id !== id)
                    setProduct(remaining);
                    refetch();
                })

        }
    }
    // const { name, price, quantity, minimum_quantity } =
    //     product;
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