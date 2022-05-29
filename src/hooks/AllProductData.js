import { useEffect, useState } from 'react';

const AllProductData = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [products, setproducts])
    return [products, setproducts]

};

export default AllProductData;