import React from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import useProducts from '../hooks/useProducts';
import { Spinner } from 'react-bootstrap';

const ProductPage = () => {

    const { products, setProducts, productForm, setProductForm, getDataAllProducts,loading, setLoading } = useProducts() 

    
    return (
        <div className='container-fluid'>
            <h1>Manage Products</h1>
            <ProductForm onRefresh={getDataAllProducts} value={productForm} setValue={setProductForm} setLoading={setLoading} />
            <div>
                {loading ? (
                    <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    </div>
                ) : products.length > 0 ? (
                    <ProductList setProductSelected={setProductForm}  products= {products} setProducts={setProducts}  onRefresh={getDataAllProducts} setLoading={setLoading} />
                ) : (
                    <div className="alert alert-info" style={{ marginTop: '10px' }} role="alert">
                        No hay productos disponibles.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
