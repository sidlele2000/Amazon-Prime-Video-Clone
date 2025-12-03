import { Box, Typography } from '@mui/material'
import primefooterlogo from "../../assets/prime-footer-logo.png";
import './LoginRegisterFooter.css'

function LoginRegisterFooter() {
    return (
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", flexDirection: "column", p: 2, justifyContent: "center", position: "relative" }}>
            <Typography sx={{ color: '#79b8f3' }}>
                <span><a className="footer-text">Terms and Privacy Notice</a></span>
                <span><a className='footer-text'>Send us feedback</a></span>
                <span><a className='footer-text'>Help</a></span>
            </Typography>
            <Typography sx={{ color: '#8197a4', mt: 1, p: 1, fontSize: 12 }}>
                © 1996-2025, Amazon.com, Inc. or its affiliates
            </Typography>
        </Box>
    )
}

export default LoginRegisterFooter