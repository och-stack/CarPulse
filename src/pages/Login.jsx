import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../components/AuthContext";
import users from "../data/user.json";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        const user = users.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            setIsLoggedIn(true);
            navigate("/dashboard");
        } else {
            setIsLoggedIn(false);
            alert("Invalid email or password");
        }
    }

    return (
        <div className="app-background">
            <div className="app-overlay login-overlay">
                {/* Login Circle */}
                <div className="login-circle shadow">
                    {/* Content */}
                    <div className="login-content">
                        {/* Title */}
                        <div className="login-header">
                            <h1 className="white-text">iCarPulse</h1>
                            <p className="white-text">Smart Vehicle Monitoring</p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleLogin}>
                            {/* Email */}
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

                            {/* Password */}
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

                            {/* Login Button */}
                            <button type="submit" className="btn btn-primary login-button">
                                Login
                            </button>

                            {/* Login Credential Hint */}
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