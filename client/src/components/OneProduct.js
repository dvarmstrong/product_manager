import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import  axios from 'axios';
import {Link} from "react-router-dom";



const OneProduct = (props) => {

    const [oneProduct, setOneProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
             console.log(res.data);
             setOneProduct(res.data)
             })
        .catch(err => console.log(err));
    }, [id]);
        
    return (
        <div container className='products'>
            <h3>Title:{oneProduct.title}</h3>
            <h3>Description:{oneProduct.description}</h3>
            <Link to={"/"}>Home</Link>

        </div>
    )

    }



export default OneProduct;