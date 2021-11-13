import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import Apartment from '../Apartment/Apartment';

const Apartments = () => {

    const [apartments, setApartments] = useState([])

    useEffect(() => {
        fetch('https://serene-badlands-78729.herokuapp.com/properties')
            .then(res => res.json())
            .then(data => setApartments(data));
    }, [])

    return (
        <Container>
            <Box sx={{ flexGrow: 1, mt: 6 }} >
                <Typography  style={{fontSize: '30px', fontWeight: '500'}} variant="h3" component="div" gutterBottom>
                    Latest Properties
                </Typography>
                <Typography style={{color: 'gray', marginBottom: '50px'}} variant="body1" gutterBottom>
                    Our distinctive buildings fill the skyline and street scapes of the city
                </Typography>
                    <Grid>
                        {
                            apartments.slice(0, 6).map(apartment => <Apartment
                                key={apartment._id}
                                apartment={apartment}
                            ></Apartment>)
                        }
                    </Grid>
            </Box>
        </Container>
    );
};

export default Apartments;
