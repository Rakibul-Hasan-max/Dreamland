import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';
import Property from '../Property/Property';

const Properties = () => {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/properties')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, [])
    
    return (
        <Box>
            <Navigation></Navigation>
            <Container>
                <Box sx={{ flexGrow: 1, mt: 6 }} >
                    <Typography  style={{fontSize: '30px', fontWeight: '500'}} variant="h3" component="div" gutterBottom>
                        Latest Properties
                    </Typography>
                    <Typography style={{color: 'gray', marginBottom: '50px'}} variant="body1" gutterBottom>
                        Our distinctive buildings fill the skyline and streets capes of the city
                    </Typography>
                    {
                        properties.map(property => <Property
                            key={property._id}
                            property={property}
                        ></Property>)
                    }
                </Box>
            </Container>
        </Box>
    );
};

export default Properties;
