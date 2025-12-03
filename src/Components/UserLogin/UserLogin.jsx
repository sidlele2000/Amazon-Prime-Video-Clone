import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const login = (email) => {
        const defaultUser = { name: "siddharth", email:"siddharthlele@gmail.com" };
        setUser(defaultUser);
        localStorage.setItem("user", JSON.stringify(defaultUser));
    };

    // const logout = () => {
    //     setUser(null);
    //     localStorage.removeItem("user");
    // };

    return (
        <AuthContext.Provider value={{ user, login}}>
            {children}
        </AuthContext.Provider>
    );
}
