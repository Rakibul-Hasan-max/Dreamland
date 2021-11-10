import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{backgroundColor: 'white'}}>
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/"><img style={{width: 250, height: 100}} src={logo} alt="" /></Link>
                    <Button style={{color: '#1A354A'}} color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;
