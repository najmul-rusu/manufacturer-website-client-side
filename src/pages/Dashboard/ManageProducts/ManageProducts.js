import React from 'react';
import AllProductData from '../../../hooks/AllProductData';
import DeleteProduct from './DeleteProduct';

const ManageProducts = ({ refetch }) => {
    const [products] = AllProductData();

    return (
        <div>
            <h2 className="text-2xl">All Products</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>

                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Minimum Quantity</th>
                            <th>Available Quantity</th>

                            <th>Remove Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <DeleteProduct
                                product={product}
                                key={product._id}
                                refetch={refetch}
                            ></DeleteProduct>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;