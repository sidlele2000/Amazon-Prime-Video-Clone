import "../../index.css"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import primelogo from "../../assets/prime-logo.png";
import "./Header.css";
import { Typography, Divider } from "@mui/material";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from '../UserLogin/UserLogin';

function Header() {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    // const [activeButton, setActiveButton] = useState('home');
    // const handleButtonClick = (buttonName) => {
    //     setActiveButton(buttonName);
    // };

    return (
        <Box sx={{ flex: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: "#00050d", py: 1 }} className="app-header">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box
                        sx={{ display: "flex", alignItems: "center", cursor: "pointer", justifyContent: "space-around", position: "relative" }}
                    >
                        <img
                            src={primelogo}
                            alt="prime-logo"
                            className="header-logo"
                        />

                        <Button
                            sx={{
                                textTransform: "none", fontSize: 18, gap: 20, margin: 4, color: "white",
                                '&:hover': { backgroundColor: 'white', color: 'black' },
                            }}
                        >
                            <Typography sx={{ fontSize: 18, fontStyle: "normal", fontWeight: 500 }}>Home</Typography>
                        </Button>

                        <Button
                            sx={{
                                textTransform: "none", fontSize: 18, gap: 20, color: 'white', '&:hover': { backgroundColor: 'white', color: 'black' },
                            }}
                        >
                            <Typography sx={{ fontSize: 18, fontStyle: "normal", fontWeight: 500 }} onClick={() => {
                                navigate('/movie');
                            }} >Movies</Typography>
                        </Button>

                        <Button
                            sx={{
                                textTransform: "none", fontSize: 18, gap: 20, margin: 3, color: 'white', '&:hover': { backgroundColor: 'white', color: 'black' },
                            }}
                        >
                            <Typography sx={{ fontSize: 18, fontStyle: "normal", fontWeight: 500 }} onClick={() => {
                                navigate('/series');
                            }}>TV shows</Typography>
                        </Button>

                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        {user ? (
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <Typography sx={{ fontSize: 16, color: 'white' }}>
                                    Welcome, {user.email}
                                </Typography>
                                <Button
                                    onClick={logout}
                                    sx={{
                                        textTransform: "none", fontSize: 16, backgroundColor: "#1A98FFCC", color: "#fff", p: 1, borderRadius: "8px",
                                        "&:hover": { backgroundColor: "#1A98FFCC" },
                                    }}
                                >
                                    Logout
                                </Button>
                            </Box>
                        ) : (
                            <Button
                                color="white"
                                sx={{ textTransform: "none", fontSize: 16, gap: 1, backgroundColor: "#1A98FFCC", p: 1.5, display: "flex", justifyContent: "center", width: 120, borderRadius: "8px" }}
                                onClick={() => {
                                    navigate('/login');
                                }}
                            >
                                <Typography sx={{ fontSize: 16, fontStyle: "normal", fontWeight: 500 }}>Join Prime</Typography>
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
