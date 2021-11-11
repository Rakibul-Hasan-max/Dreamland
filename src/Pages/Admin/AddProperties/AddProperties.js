import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProperties.css';

const AddProperties = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/properties', data)
            .then(res => {
                if(res.data.insertedId){
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="form-style">
            <h1>Add a Properties</h1>
            <p>Our distinctive buildings fill the skyline and street scapes of the city!</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 100 })} placeholder="name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProperties;
