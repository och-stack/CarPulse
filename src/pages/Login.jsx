import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        if (email === "john@mail.com" && password === "admin") {
            setIsLoggedIn(true);
            navigate("/dashboard");
        } else {
            setIsLoggedIn(false);
            alert("Invalid email or password");
        }
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;