import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.svg'

const Login = () => {

    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        alert('login successfully')
        // loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item sx={{ mt: 25 }} xs={12} md={6}>
                    <Typography variant="h6" gutterBottom component="div">
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%', height: '600px'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;