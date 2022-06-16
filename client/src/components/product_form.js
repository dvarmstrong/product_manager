import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = () => {
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
            
            })
            .catch(err=>console.log(err))
    }

    return (
        <div class="container">
            <h1>Product Manager</h1>
        
            <form onSubmit={onSubmitHandler}>
                <div class="inputs">
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div  class="inputs">
                    <label>Price</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div  class="inputs">
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
        
    )
}
export default ProductForm;