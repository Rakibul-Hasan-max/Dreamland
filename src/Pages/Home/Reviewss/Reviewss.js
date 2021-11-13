import { Box, Container } from '@mui/material';
import React from 'react';

const Reviewss = ({ review }) => {
    const { _id, name, description } = review;
    return (
        <Container>
            <Box style={{backgroundColor:'aliceblue', marginBottom: '30px', padding: '30px'}}>
                <h2>{name}</h2>
                <p>{description}</p>
            </Box>
        </Container>
    );
};

export default Reviewss;
