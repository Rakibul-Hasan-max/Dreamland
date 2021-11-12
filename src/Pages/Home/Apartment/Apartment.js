import { Box, Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Apartment = ({ apartment }) => {
    const { _id, name, description, price, img } = apartment;
    return (
        <Container>
            <Box style={{backgroundColor:'aliceblue', marginBottom: '30px', padding: '30px'}}>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <h3>$ {price}</h3>
                <Link to={`/purchase/${_id}`} style={{textDecoration: 'none'}}>
                    <Button variant="contained">Purchase</Button>
                </Link>
            </Box>
        </Container>
    );
};

export default Apartment;
