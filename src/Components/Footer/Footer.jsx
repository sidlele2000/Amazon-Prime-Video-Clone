import { Box, Typography } from '@mui/material'
import primefooterlogo from "../../assets/prime-footer-logo.png";
import './Footer.css'

function Footer() {
    return (
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", flexDirection: "column", p: 2, justifyContent: "center", position: "relative", backgroundColor: "#222222" }}>
            {<img
                src={primefooterlogo}
                alt="prime-logo"
                className="footer-logo"
            />}
            <Typography sx={{ color: '#79b8f3' }}>
                <span><a className='footer-text'>Terms and Privacy Notice</a></span>
                <span><a className='footer-text'>Send us feedback</a></span>
                <span><a className='footer-text'>Help</a></span>
            </Typography>
            <Typography sx={{ color: '#8197a4', mt: 1, p: 1 }}>
                © 1996-2025, Amazon.com, Inc. or its affiliates
            </Typography>
        </Box>
    )
}

export default Footer