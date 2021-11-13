import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const Review = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://serene-badlands-78729.herokuapp.com/review', data)
            .then(res => {
                if(res.data.insertedId){
                    alert('review submitted');
                    reset();
                }
            })
    }

    return (
        <div className="form-style">
            <h1>Give a review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 100 })} placeholder="Your name" />
                <textarea {...register("description")} placeholder="Your review" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;
