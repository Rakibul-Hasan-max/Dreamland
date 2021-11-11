import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Properties = () => {
    return (
        <Box>
            <Navigation></Navigation>
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
        </Box>
    );
};

export default Properties;

{/* <Typography variant="h6" component="div" gutterBottom>
                                Luxury Villa in Richmond
                            </Typography> */}