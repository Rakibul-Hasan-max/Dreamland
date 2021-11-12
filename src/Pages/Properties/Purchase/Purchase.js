import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Purchase.css';

const Purchase = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {console.log(data)};

    const { propertyId } = useParams();
    const [property, setProperty] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/properties`)
            .then(res => res.json())
            .then(data => setProperty(data));
    }, [])

    return (
        <Box>
            <Navigation></Navigation>
            <Container>
                <h2>Details of the properties and purchase {propertyId}</h2>
                <form className="purchase-form" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />                 <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Phone number" defaultValue="" {...register("phone")} />
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="Zip code" defaultValue="" {...register("zip code")} />
                    <input className="submit" type="submit" />
                </form>
            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default Purchase;
