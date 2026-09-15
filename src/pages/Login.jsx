import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../components/AuthContext";
import users from "../data/user.json";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setIsLoggedIn, setRole } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        const user = users.find(
            (user) => user.username === email && user.password === password
        );

        if (user) {
            setIsLoggedIn(true);
            setRole(user.role);
            navigate("/dashboard");
        } else {
            setIsLoggedIn(false);
            alert("Invalid email or password");
        }
    }

    return (
        <div className="app-background">
            <div className="app-overlay login-overlay">
                <div className="login-circle shadow">
                    <div className="login-content">

                        <div className="login-header">
                            <h1 className="white-text">CarPulse</h1>
                            <p className="white-text">Smart Vehicle Monitoring</p>
                        </div>

                        <form onSubmit={handleLogin}>

                            <div className="login-field">
                                <label className="login-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control login-input"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="login-field password-field">
                                <label className="login-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control login-input"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary login-button"
                            >
                                Login
                            </button>

                            <p className="login-hint">
                                Demo login: john@mail.com / admin
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
