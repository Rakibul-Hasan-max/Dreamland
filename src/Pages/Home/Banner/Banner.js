import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Box>
                        <Typography variant="h3" sx={{mb: 2, fontSize: 45, fontWeight: 500}}>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="body2" sx={{fontSize: 14, color: 'gray', mb: 5}}>
                            Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral health.
                        </Typography>
                        <Button variant="contained"style={{backgroundColor: '#14DDCF'}}>GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;