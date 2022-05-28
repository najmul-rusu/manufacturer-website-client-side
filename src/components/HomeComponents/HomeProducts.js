import React from 'react';
import ProductsData from '../../hook/ProductsData';
import ShowProducts from '../Products/ShowProducts';
import SectionTitle from '../Title/SectionTitle';

const HomeProducts = () => {
    
    const [products] = ProductsData();
    
    return (
      <div className="px-12">
          <SectionTitle>Parts</SectionTitle>
        <div className="grid grid-cols-3 gap-10">
            {products.map((product) => (
              <ShowProducts
                product={product}
                key={product._id}
              ></ShowProducts>
            ))}
        </div>
      </div>
    );
  };

export default HomeProducts;