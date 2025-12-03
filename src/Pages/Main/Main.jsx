import { Grid, Box, Typography, Button } from '@mui/material';
import backgroundimage from "../../assets/background-image.jpg";
import backgroundimage1 from "../../assets/background-image1.jpg";
import "./Main.css"
import MainSubscriptions from '../../Components/MainPageSubscriptions/MainSubscriptions';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    return (
        <div className='main-container'>
            <Grid container>
                <Grid item>
                    <Box sx={{ p: 2 }}>
                        <Typography variant="h3" component="h3" color='white' className='heading' fontWeight={700} gutterBottom>
                            Welcome to Prime Video
                        </Typography>
                        <Typography color='white' variant='body1' className='subheading' fontWeight={500} fontSize={20} gutterBottom>
                            Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals
                        </Typography>
                        <Button
                            color="white"
                            sx={{ textTransform: "none", fontSize: 18, gap: 20, mt: 4, p: 1.5, backgroundColor: 'white', width: 250 }}
                        >
                            <Typography sx={{ fontSize: 20, display: "flex", justifyContent: "space-between", maxWidth: 300, fontStyle: "normal", fontWeight: 500 }}
                            onClick={() => {
                                      navigate('/login');
                                    }}
                            >Sign In To Join Prime</Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid>
                <Box
                    component="img"
                    src={backgroundimage}
                    alt="background-image1"
                    sx={{
                        height: "680px",
                        objectFit: "cover",
                        maxWidth: "980px",
                        ml:6
                    }}
                />
                </Grid>
            </Grid>
            <Grid container>
                
                <Grid item>
                    <Box sx={{ p: 2 }}>
                        <Typography variant="h3" component="h3" color='white' className='heading' fontWeight={700} gutterBottom>
                            Movie Rental On Prime Video
                        </Typography>
                        <Typography color='white' variant='body1' className='subheading' fontWeight={500} fontSize={20} gutterBottom>
                            Early Access to new movies, before digital subscription
                        </Typography>
                        <Button
                            color="white"
                            sx={{ textTransform: "none", fontSize: 18, gap: 20, mt: 4, p: 1.5, backgroundColor: 'white', width: 250 }}
                        >
                            <Typography sx={{ fontSize: 20, display: "flex", justifyContent: "space-between", maxWidth: 340, fontStyle: "normal", fontWeight: 500 }}>Rent Now</Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid>
                <Box
                    component="img"
                    src={backgroundimage1}
                    alt="background-image2"
                    sx={{
                        height: "680px",
                        objectFit: "cover",
                        maxWidth: "965px",
                        ml:13
                    }}
                />
                </Grid>
            </Grid>
       <MainSubscriptions/>
        </div>
    );
}

export default Main;