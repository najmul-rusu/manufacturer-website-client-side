import React from 'react';
import ShowManageProducts from '../../components/Products/ShowManageProducts';
import PageTitle from '../../components/Title/PageTitle';
import useProduct from '../../hook/useProduct';

const AllProduct = () => {
    const [products] = useProduct();
    return (
      <div className="px-12">
          <PageTitle>All Products</PageTitle>
        <div className="grid grid-cols-3 gap-10">
            {products.map((product) => (
              <ShowManageProducts
                product={product}
                key={product._id}
              ></ShowManageProducts>
            ))}
        </div>
      </div>
    );
  };

export default AllProduct;