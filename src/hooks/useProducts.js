import { useState, useEffect } from 'react';
import { getAllProducts } from '../services/productService';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [productForm, setProductForm] = useState({ nombre: '', precio: '', cantidad: '' });

    useEffect(() => {
        // const loadProducts = async () => {
        //     const response = await getProductById();
        //     setProducts(response.data);
        // };
        // loadProducts();
        getDataAllProducts()
    }, []);

    const getDataAllProducts = async () =>{
        setLoading(true);
        const resp = await getAllProducts()
        setProducts(resp.data);
        setLoading(false);
    }

    return {
        products,
        setProducts,
        productForm, 
        setProductForm,
        getDataAllProducts,loading, setLoading
    };
};

export default useProducts;
