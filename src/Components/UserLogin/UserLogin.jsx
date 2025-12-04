import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const defaultUser = { email: "siddharthlele@gmail.com", password: "siddharth" }; //set default user credentials

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const login = (useremail, userpassword) => {
        if (
            useremail === defaultUser.email &&
            userpassword === defaultUser.password
        ) {
            setUser(defaultUser);
            localStorage.setItem("user", JSON.stringify(defaultUser));
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
