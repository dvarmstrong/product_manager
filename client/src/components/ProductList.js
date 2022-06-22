import React, {useState, useEffect} from "react";
import axios from "axios";


const ProductList = () => {
    const[product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api')
        .then((res) => {
            console.log(res.data);
            console.log(res.data.title);
            setProduct([...product, res.data]);
           
        })
        .catch((err)=> console.log(err));
    }, [])
   
    return (
        <div>
            <h2>Product List</h2><hr/>
            {product.map((product, index) => {
                return(
                    <ul key={index}>
                        <li>{product.title}</li>
                        <li>{product.description}</li>
                        <li>{product.price}</li>
                    </ul>
                )}
            )}
        </div>
        
    
    )
};

export default ProductList;

