import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>iCarPulse Login</h1>

            <button onClick={() => navigate("/dashboard")}>
                Go to Dashboard
            </button>
        </div>
    );
}

export default Login;