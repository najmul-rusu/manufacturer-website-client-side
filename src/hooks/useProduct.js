import React, { useEffect, useState } from 'react';

const useProduct = () => {
    const [product, setProduct] = useState([]);
  
    useEffect(() => {
        fetch('https://shielded-retreat-18256.herokuapp.com/product/')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [product, setProduct]);
    return [product, setProduct]
  };

export default useProduct;