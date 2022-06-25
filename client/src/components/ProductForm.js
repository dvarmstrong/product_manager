import React, { useState,useEffect } from 'react'
import axios from 'axios';

const ProductForm = (props) => {
    const {productList, setProductList} = props;
    const[title, setTitle] = useState('');
    const[price, setPrice] = useState('');
    const[description, setDescription] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
    })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setProductList([...productList, res.data]);
                setTitle('');
                setPrice('');
                setDescription('');
            
            })
            .catch(err=>console.log(err))
    }


    return (
        <div className="container-md">
            <header>Product Manager</header>
        
            <form className='form ' onSubmit={onSubmitHandler}>
                <div className="form-control ">
                    <label>Title</label>
                    <input type="text" value={title} name="title"
                    onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div  className="form-field">
                    <label>Price</label>
                    <input type="text" value={price} name="price"
                    onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div  className="form-field">
                    <label>Description</label>
                    <input type="text" value={description}name="description"
                    onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form><hr/>
            
            

        </div>
        
    )
};
export default ProductForm;