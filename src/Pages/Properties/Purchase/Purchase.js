import { Box, Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Purchase.css';

const Purchase = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth();
    
    const onSubmit = data => {
        console.log(data);
        axios.post('https://serene-badlands-78729.herokuapp.com/purchase', data)
            .then(res => {
                if(res.data.insertedId){
                    alert('added successfully');
                    reset();
                }
            })
        }

    return (
        <Box>
            <Navigation></Navigation>
            <Container>
                <h2>Details of the properties and purchase</h2>
                <form className="purchase-form" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />                 <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Phone number" defaultValue="" {...register("phone")} />
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="Zip code" defaultValue="" {...register("zipCode")} />
                    <input className="submit" type="submit" />
                </form>
            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default Purchase;
