import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


const Display = (props) => {
    const {productList, setProductList} = props;
    useEffect(() => {

        axios.get('http://localhost:8000/api/product')
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setProductList(res.data);
           
        })
        .catch((err)=> console.log(err))
    }, []);

    // * delete a product from the database/
    const {removeFromDom, product, setProduct} = props;
    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/product/' + id)
        .then((res) => {
            removeFromDom(id);
        })
        .catch((err)=> console.log(err))
    }

    const containerStyle = {
        height: "150px",
        width: "400px",
        border: "1px solid black",
        margin: "10px",
        float: "left"
    }

    const divStyle = {
       
        margin: "5px",
    }


   
    return (
        <div>
            <h1><header>Product List</header></h1>
          
            {
                
                productList.map((productList, index) => {
                    return (
                    <div key={index} className="container" style={containerStyle}>
                         <h2>{productList.title}</h2>
                        <div>
                            <Link to ={`/product/update/${productList._id}`}>Edit:{productList.title}</Link>
                        </div>
                        <div style={divStyle}>
                            <Link to ={`/product/${productList._id}`}>View {productList.title}</Link>
                        </div>
                        <div>
                            <button class="btn btn-danger" onClick={() => deleteProduct(productList._id)}>Delete</button>
                        </div>



                       
                        
                       
                    </div>
                    )
                })}
                
        </div>



               
        
    
    )
};

export default Display;

