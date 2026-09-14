import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <Container className="af-error">
            <h1 className="af-page-title">
                Page not found
            </h1>

            <p className="af-empty-copy">
                Why break the website: &#40;
            </p>

            <Button
                className="af-cta"
                onClick={() => navigate("/")}
            >
                Back to Home
            </Button>
        </Container>
    );
}

export default ErrorPage;