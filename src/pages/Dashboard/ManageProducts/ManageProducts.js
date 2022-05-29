import React from 'react';
import ProductsData from '../../../hook/ProductsData';
import DeleteProduct from './DeleteProduct'

const ManageProducts = ({ refetch }) => {
    const [products] = ProductsData();

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