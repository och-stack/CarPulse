import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "40px"
            }}
        >
            {/* Error Content */}
            <Container
                className="af-error"
                style={{
                    margin: 0,
                    maxWidth: "500px"
                }}
            >
                <h1
                    className="af-page-title"
                    style={{
                        fontWeight: "bold",
                        marginBottom: "10px"
                    }}
                >
                    Page not found
                </h1>

                <p
                    className="af-empty-copy"
                    style={{
                        marginBottom: "5px"
                    }}
                >
                    <strong>404</strong>. The requested URL not found.
                </p>

                <p
                    className="af-empty-copy"
                    style={{
                        marginBottom: "15px"
                    }}
                >
                    Why break the website: &#40;
                </p>

                <Button
                    className="af-cta"
                    onClick={() => navigate("/login")}
                >
                    Back to Login
                </Button>
            </Container>

            {/* iCarPulse Image */}
            <img
                src="/icarpulse.png"
                alt="iCarPulse"
                style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "contain"
                }}
            />
        </div>
    );
}

export default ErrorPage;