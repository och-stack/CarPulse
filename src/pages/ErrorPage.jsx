import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div className="error-page">
            {/* Error Content */}
            <Container className="error-content">
                <h1 className="error-title">Page not found</h1>
                <p className="error-copy">
                    <strong>404</strong>. The requested URL not found.
                </p>

                <p className="error-copy">Why break the website: &#40;</p>

                <Button
                    className="error-button"
                    onClick={() => navigate("/login")}
                >
                    Back to Login
                </Button>
            </Container>

            {/* CarPulse Image */}
            <img
                src="/carpulse.png"
                alt="CarPulse"
                className="error-logo"
            />
        </div>
    );
}

export default ErrorPage;