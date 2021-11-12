import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Properties = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, mt: 6 }} >
                <Typography  style={{fontSize: '30px', fontWeight: '500'}} variant="h3" component="div" gutterBottom>
                    Latest Properties
                </Typography>
                <Typography style={{color: 'gray', marginBottom: '50px'}} variant="body1" gutterBottom>
                    Our distinctive buildings fill the skyline and streetscapes of the city
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item>xs=2</Item>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Properties;




/*
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://mighty-hamlet-29284.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our Services</h2>
            <p className="text-success mb-5">“Adventure is worthwhile”</p>
            {services.length===0 ? <Spinner animation="border" /> : 
                <div className="service-container  container">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            }
        </div>
    );
};

export default Services;

*/