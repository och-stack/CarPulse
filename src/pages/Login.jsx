import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

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
        <div
            style={{
                minHeight: "100vh",
                backgroundImage: "url('/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed"
            }}
        >
            <div
                style={{
                    minHeight: "100vh",
                    backgroundColor: "rgba(0, 0, 0, 0.55)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {/* Login Circle */}
                <div
                    className="shadow"
                    style={{
                        width: "450px",
                        height: "450px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(15, 23, 42, 0.9)",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    {/* Content */}
                    <div
                        style={{
                            width: "300px",
                            textAlign: "center"
                        }}
                    >
                        {/* Title */}
                        <div className="mb-4">
                            <h1 style={{ color: "white" }}>
                                iCarPulse
                            </h1>

                            <p style={{ color: "white" }}>
                                Smart Vehicle Monitoring
                            </p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleLogin}>
                            {/* Email */}
                            <div className="mb-3 d-flex align-items-center justify-content-center">
                                <label
                                    className="form-label mb-0 text-start"
                                    style={{
                                        color: "white",
                                        width: "80px"
                                    }}
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    required
                                    style={{
                                        width: "180px"
                                    }}
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-4 d-flex align-items-center justify-content-center">
                                <label
                                    className="form-label mb-0 text-start"
                                    style={{
                                        color: "white",
                                        width: "80px"
                                    }}
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                    style={{
                                        width: "180px"
                                    }}
                                />
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{
                                    width: "150px"
                                }}
                            >
                                Login
                            </button>

                            {/* Login Credential Hint */}
                            <p
                                className="mt-2 mb-0"
                                style={{
                                    color: "rgba(255, 255, 255, 0.7)",
                                    fontSize: "12px"
                                }}
                            >
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