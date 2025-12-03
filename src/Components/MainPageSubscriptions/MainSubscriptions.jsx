import { Grid, Box, Typography } from '@mui/material';
import "./MainSubscriptions.css"
import apple from '../../assets/apple-tv.jpeg'
import anime from '../../assets/anime.jpeg'
import bbc from '../../assets/bbc.jpeg'
import chaupal from '../../assets/chaupal.jpeg'
import fancode from '../../assets/fancode.jpeg'
import liongate from '../../assets/liongate.jpeg'
import manorama from '../../assets/manorama.jpeg'
import discovery from '../../assets/discovery.jpeg'
import crunchroll from '../../assets/crunchroll.jpeg'

function MainSubscriptions() {
    return (
        <div className='container'>
            <Grid container maxWidth={800}>
                <Grid item>
                    <Box sx={{ p: 2 }}>
                        <Typography variant="h3" component="h3" color='white' className='heading' fontWeight={700} gutterBottom>
                            Your favorite subscriptions all in one place
                        </Typography>

                        <Typography color='white' variant='body1' className='subheading' fontWeight={500} fontSize={20} gutterBottom>
                            Customers can subscribe to get access to a variety of premium and specialty content, easily accessible within the Prime Video app
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid container justifyContent={'right'}>
                <Grid container spacing={2} sx={{ width: 300, mt: 0 }}>

                    <Grid item xs={6}>
                        <img
                            src={apple}
                            alt="img1"
                            style={{ width: "100%", borderRadius: 6 }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <img
                            src={crunchroll}
                            alt="img2"
                            style={{ width: "100%", borderRadius: 6 }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <img
                            src={liongate}
                            alt="img3"
                            style={{ width: "100%", borderRadius: 6 }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ width: 300 }}>

                    <Grid item xs={6}>
                        <img
                            src={discovery}
                            alt="img1"
                            style={{ width: "100%", borderRadius: 6 }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <img
                            src={anime}
                            alt="img2"
                            style={{ width: "100%", borderRadius: 6 }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <img
                            src={manorama}
                            alt="img3"
                            style={{ width: "100%", borderRadius: 6 }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ width: 300 }}>

                    <Grid item xs={6}>
                        <img
                            src={chaupal}
                            alt="img1"
                            style={{ width: "100%", borderRadius: 6 }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <img
                            src={bbc}
                            alt="img2"
                            style={{ width: "100%", borderRadius: 6 }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <img
                            src={fancode}
                            alt="img3"
                            style={{ width: "100%", borderRadius: 6 }}
                        />
                    </Grid>
                </Grid>
            </Grid>

        </div>
    );
}

export default MainSubscriptions;
