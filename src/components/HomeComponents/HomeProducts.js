import React from 'react';
import AllProductData from '../../hooks/AllProductData'
import ShowProducts from '../Products/ShowProducts';
import SectionTitle from '../Title/SectionTitle';

const HomeProducts = () => {
    
    const [products] = AllProductData();
    
    return (
      <div className="lg:px-12">
          <SectionTitle>New Parts</SectionTitle>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
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