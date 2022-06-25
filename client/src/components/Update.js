import React, { useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



const Update = (props) => {
    const {id} = useParams();
    const[title, setTitle] = useState('');
    const[price, setPrice] = useState('');
    const[description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch((err)=> console.log(err))
    }, [])


    //* update person form/
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/update/' + id,{
            title,
            price,
            description
        })
            .then(res=> {
                console.log(res);
                navigate('/');
            })
            .catch(err=>console.log(err))
        }

        return (
            <>
            <h1>Update Product</h1>
            <form className='form ' onSubmit={onSubmitHandler}>
                <div className="form-control ">
                    <label>Title</label><br />
                    <input type ="text"
                    value={title}
                    name="title"
                    onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div  className="form-control">
                    <label>Price</label><br />
                    <input type ="text"
                    value={price}
                    name="price"
                    onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div  className="form-control">
                    <label>Description</label><br />
                    <input type ="text"
                    value={description}
                    name="description"
                    onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-warning">Submit</button>


            </form>
            
            </>
        )
    }

    export default Update;