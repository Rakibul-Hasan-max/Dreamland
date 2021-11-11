import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {

    const { user, logout } = useAuth();

    return (
        <div>
            <Box  sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{backgroundColor: 'white'}}>
                    <Toolbar>
                        <Link to="/"><img style={{width: 250, height: 100, marginLeft: "150px"}} src={logo} alt="" /></Link>
                        <Box style={{marginLeft: "650px"}} >
                            <Link to="/properties" style={{color: '#1A354A', textDecoration: 'none'}} ><Button color="inherit">Properties</Button></Link>
                            {
                                user?.email ?
                                <Link to="/dashboard" style={{color: '#1A354A', textDecoration: 'none'}} ><Button color="inherit">Dashboard</Button></Link>
                                :
                                <Link to="/login" style={{color: '#1A354A', textDecoration: 'none'}} ><Button color="inherit">Login</Button></Link>
                            }
                            <span style={{color: "black"}}>{user.displayName}</span>
                            {
                                user?.email ?
                                <Button style={{backgroundColor: '#1A354A', color: 'white'}} onClick={logout} color="inherit">Logout</Button>
                                :
                                <Link to="/register" style={{color: '#1A354A', textDecoration: 'none'}} ><Button color="inherit">Register</Button></Link>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;
