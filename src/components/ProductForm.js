import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../services/productService';

const ProductForm = ({ value, setValue, onRefresh,setLoading }) => {
    // const [product, setProduct] = useState({ nombre: '', precio: '', cantidad: '' });

    useEffect(() => {
        if (value) {
            setValue(value);
            setLoading(true);
        }
    }, [value]);

    const handleChange = e => {
        const { name, value } = e.target;
        setValue(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        debugger;
        e.preventDefault();
        if (value.id) {
            await updateProduct(value.id, value);
        } else {
            console.log(value)
            await createProduct(value);
        }
        
        setValue({ nombre: '', precio: '', cantidad: '' });  // reset form
        onRefresh()
    };

    return (
        <form class="row g-3" style={{ marginTop: '10px' }} onSubmit={handleSubmit}>
            <div class="col-auto "  >
                <label for="staticEmail2" class="visually">Nombre</label>
                <input type="text"  name="nombre" value={value.nombre} onChange={handleChange} required class="form-control"  id="staticEmail2" placeholder="Nombre" />
            </div>
            <div class="col-auto">
                <label for="inputPassword2" class="visually">Precio</label>
                <input type="number" name="precio" value={value.precio} onChange={handleChange} required class="form-control" min={0} id="inputPassword2" placeholder="Precio"/>
            </div>
            <div class="col-auto">
                <label for="inputPassword2" class="visually">Cantidad</label>
                <input type="number" name="cantidad" value={value.cantidad} onChange={handleChange} required class="form-control" min={0} id="inputPassword2" placeholder="Cantidad"/>
            </div>            
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Agregar</button>
            </div>
        </form>
    );
};

export default ProductForm;
