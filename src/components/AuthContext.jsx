import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState(null);

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, setIsLoggedIn, role, setRole }}
        >
            {children}
        </AuthContext.Provider>
    );
}
