import  { useEffect, useState } from 'react';

const ProductsData = () => {
    const [products , setproducts] = useState([])
    useEffect(()=>{
        fetch('data.json')
          .then(res => res.json())
          .then(data => setproducts(data))
    },[])
    return [products , setproducts]
}

export default ProductsData;