import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Box  sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{backgroundColor: 'white'}}>
                    <Toolbar>
                    <Link to="/"><img style={{width: 250, height: 100, marginLeft: "150px"}} src={logo} alt="" /></Link>
                    <Box style={{marginLeft: "850px"}} >
                        <Link to="/login" style={{color: '#1A354A', textDecoration: 'none'}} ><Button color="inherit">Login</Button></Link>
                    </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;
