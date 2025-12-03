import './Login.css'
import primeloginlogo from "../../assets/prime-login-logo.png";
import { Box, Typography, Button } from "@mui/material";
import LoginRegisterFooter from '../../Components/LoginRegisterFooter/LoginRegisterFooter';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from '../../Components/UserLogin/UserLogin';

function Login() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   const validateEmail=(email)=>{
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
   }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (email && password) {
            login(email);
            navigate("/movie");
        } else {
            alert("please enter email and password");
        }
    };
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 2
                }}
            >
                <img
                    src={primeloginlogo}
                    alt="prime-logo"
                    style={{ width: 120, marginBottom: 20 }}
                />

                <Box
                    className="login-form"
                    component="form"
                    sx={{
                        border: 1,
                        borderColor: "#ddd",
                        p: 3,
                        borderRadius: 2,
                        width: 320,
                        backgroundColor: "#fff",
                    }}
                    onSubmit={handleSubmit}
                >
                    <Typography variant="h6" gutterBottom>
                        Sign In
                    </Typography>

                    <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                        Enter your email
                    </Typography>
                    <input
                        required
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                        Enter your password
                    </Typography>
                    <input
                        required
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        sx={{
                            backgroundColor: "#ffce12",
                            color: "#000",
                            borderRadius: 4,
                            textTransform: 'none',
                            fontSize: 12,
                            "&:hover": { backgroundColor: " #f8bd19" },
                        }}
                    >
                        Continue
                    </Button>

                    <Typography sx={{ fontSize: 12, mt: 2 }}>
                        By continuing, you agree to Amazon’s <a>Conditions of Use and Privacy Notice.</a>
                    </Typography>
                </Box>
            </Box>
            <hr />
            <LoginRegisterFooter />
        </>
    );
}

export default Login;
