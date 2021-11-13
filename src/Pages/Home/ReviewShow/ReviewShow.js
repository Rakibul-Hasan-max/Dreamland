import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import Reviewss from '../Reviewss/Reviewss';

const ReviewShow = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <Container>
            <Box sx={{ flexGrow: 1, mt: 6 }} >
                <Typography  style={{fontSize: '30px', fontWeight: '500'}} variant="h3" component="div" gutterBottom>
                    Clients Review
                </Typography>
                <Typography style={{color: 'gray', marginBottom: '50px'}} variant="body1" gutterBottom>
                    Our Client's feedback here.
                </Typography>
                    <Grid>
                        {
                            reviews.map(review => <Reviewss
                                key={review._id}
                                review={review}
                            ></Reviewss>)
                        }
                    </Grid>
            </Box>
        </Container>
    );
};

export default ReviewShow;