import { Container, Grid } from '@mui/material';
import React from 'react';
import login from '../../../images/login.svg'

const Login = () => {
    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%', height: '600px'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;