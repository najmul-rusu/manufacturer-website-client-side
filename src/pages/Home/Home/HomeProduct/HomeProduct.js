import React from 'react';
import AllProductData from '../../../../hooks/AllProductData';
import ShowProduct from '../../../ShowProduct/ShowProduct';

const HomeProduct = () => {
    const [products] = AllProductData();
    return (
        <div className='py-12 px-12'>
            <div>
                <h3 className='m-10 text-primary text-center text-4xl font-bold'>Best Selling Products
                </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {products.map((product) => (
                    <ShowProduct
                        product={product}
                        key={product._id}
                    ></ShowProduct>
                ))}
            </div>
        </div>
    );
};

export default HomeProduct;