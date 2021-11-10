import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import './About.css';

const About = () => {
    return (
        <Container>
            <Box style={{marginTop: "50px"}}>
                <Typography variant="h6" gutterBottom component="div" style={{fontSize: "30px", color: "#19334A", fontWeight: "600"}}>
                    ABOUT <span style={{color: "#71B100"}}>PROPERTY</span>
                </Typography>
                <Typography>
                    Real Estate agents are Property consisting of land and the buildings on it, along with its seds naturals resources such seds as crops, minerals, or water; immovable property of this nature.Since this was a limited seds unit auction, we had approached by Developers to release incremental units to fulfill the demands at a stepped up cut-off price.
                </Typography>
                <Box class="icon">
                    <div>
                        <i class="fas fa-bed"></i>
                        <h4>BEDROOMS</h4>
                        <h2>3</h2>
                    </div>
                    <div>
                        <i class="fas fa-bath"></i>
                        <h4>BATHS</h4>
                        <h2>2</h2>
                    </div>
                    <div>
                        <i class="fas fa-building"></i>
                        <h4>SQUARE FEET</h4>
                        <h2>2530</h2>
                    </div>
                    <div>
                        <i class="fas fa-hotel"></i>
                        <h4>APARTMENT</h4>
                        <h2>3</h2>
                    </div>
                    <div>
                        <i class="fas fa-swimming-pool"></i>
                        <h4>SWIMMING POOL</h4>
                        <h2>1</h2>
                    </div>
                </Box>
            </Box>
        </Container>
    );
};

export default About;