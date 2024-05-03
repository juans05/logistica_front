import React, { useEffect, useState } from 'react';
import {  deleteProduct } from '../services/productService';

const ProductList = ({setProductSelected, products,onRefresh,setLoading}) => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     loadProducts();
    // }, []);

    // const loadProducts = async () => {
    //     const response = await getAllProducts();
    //     setProducts(response.data);
    // };

    const handleDelete = async id => {
        setLoading(true);
        await deleteProduct(id);
        // await loadProducts();
        onRefresh();  // para recargar la lista después de eliminar
    };

    const onSelecotProduct = (product)=>{
        setProductSelected(product)
    }
    
    return (
        <div>
            <h2>Product List</h2>

            <table className="table">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.nombre}</td>
                        <td>${product.precio}</td>
                        <td>Cantidad: {product.cantidad}</td>
                        <td>
                        <button className="btn btn-primary btn-sm" onClick={() => onSelecotProduct(product)}>
                            Editar
                        </button>
                        {' '}
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product.id)}>
                            Eliminar
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>


           
        </div>
    );
};

export default ProductList;
