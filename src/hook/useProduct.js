import React, { useEffect, useState } from 'react';

const useProduct = () => {
    const [product, setproduct] = useState([]);
  
    useEffect(() => {
        fetch('http://localhost:5000/product/')
            .then(res => res.json())
            .then(data => setproduct(data));
    }, []);
    return [product, setproduct]
  };

export default useProduct;