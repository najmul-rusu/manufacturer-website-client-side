import { useEffect, useState } from 'react';

const AllProductData = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('https://shielded-retreat-18256.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return [products, setproducts]

};

export default AllProductData;