import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={2}>
                <Grid item xs={12} md={6}>
                    <Box item xs={6} style={{backgroundColor: '#19334A', paddingTop: '149.5px', paddingBottom: '196px', paddingLeft: '50px', textAlign: 'left'}}>
                        <Typography variant="h3" style={{color: 'white'}} sx={{mb: 2, fontSize: 40, fontWeight: 500}}>
                            Find Your Favourite<br />
                            Dream House
                        </Typography>
                        <Typography variant="body2" sx={{fontSize: 14, color: '#BBC2C8', mb: 5}}>
                            Build a new homeland in the dream house
                        </Typography>
                        <Button variant="contained"style={{backgroundColor: '#1D2829'}}>Rent</Button>
                        <Button variant="contained"style={{backgroundColor: 'white', color: '#19334A'}}>Buy</Button>
                        <Button variant="contained"style={{backgroundColor: '#1D2829'}}>Sell</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:"100%", height: "550px"}} src="https://images.unsplash.com/photo-1567247605657-1ae95170578f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=80" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;