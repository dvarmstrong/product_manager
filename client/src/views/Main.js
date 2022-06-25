import React, {useState, useEffect} from "react";
import ProductForm from "../components/ProductForm";
import Display from "../components/Display";
import axios from "axios";





const Main = (props) => {

       

    const [productList, setProductList] = useState([]);
    const removeFromDom = (id) => {
        setProductList(productList.filter(product => product._id !== id));
    }


    return (
        <div>
            <ProductForm productList={productList} setProductList={setProductList}/>
            <Display productList={productList} setProductList={setProductList} removeFromDom={removeFromDom}/>
        </div>
    )
}



export default Main;