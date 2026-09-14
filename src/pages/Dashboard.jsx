import { useContext, useState } from "react";
import { Container, Card, Button, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../components/AuthContext";
import devices from "../data/data.json";

function Dashboard() {
    const [filter, setFilter] = useState("all");

    const { setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout() {
        setIsLoggedIn(false);
        navigate("/login");
    }

    const filteredDevices = devices.filter((device) => {
        if (filter === "all") {
            return true;
        }

        if (filter === "alert") {
            return device.alert === true;
        }

        return device.status.toLowerCase() === filter;
    });

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
                    backgroundColor: "rgba(0, 0, 0, 0.55)"
                }}
            >
                {/* Navbar */}
                <Navbar
                    expand="lg"
                    bg="dark"
                    variant="dark"
                    className="px-4"
                >
                    <Container>
                        <Navbar.Brand
                            onClick={() => navigate("/dashboard")}
                            style={{
                                cursor: "pointer",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px"
                            }}
                        >
                            <img
                                src="/icarpulse.png"
                                alt="iCarPulse"
                                style={{
                                    width: "35px",
                                    height: "35px",
                                    objectFit: "contain"
                                }}
                            />

                            iCarPulse
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Button
                                    variant="outline-light"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* Dashboard Content */}
                <Container
                    style={{
                        paddingTop: "40px",
                        paddingBottom: "40px"
                    }}
                >
                    {/* Header */}
                    <div
                        className="mb-4"
                        style={{
                            textAlign: "center"
                        }}
                    >
                        <h1 style={{ color: "white" }}>
                            iCarPulse
                        </h1>

                        <p style={{ color: "white" }}>
                            Monitor your vehicle at a glance
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div
                        className="mb-4"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px",
                            flexWrap: "wrap"
                        }}
                    >
                        <Button
                            variant="primary"
                            onClick={() => setFilter("all")}
                        >
                            All
                        </Button>

                        <Button
                            variant="success"
                            onClick={() => setFilter("online")}
                        >
                            Online
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={() => setFilter("offline")}
                        >
                            Offline
                        </Button>

                        <Button
                            variant="danger"
                            onClick={() => setFilter("alert")}
                        >
                            Alert
                        </Button>
                    </div>

                    {/* Device Cards */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 260px)",
                            gap: "24px",
                            justifyContent: "center"
                        }}
                    >
                        {filteredDevices.map((device) => (
                            <Card
                                key={device.id}
                                style={{
                                    width: "260px",
                                    minHeight: "280px",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    backgroundColor:
                                        "rgba(15, 23, 42, 0.95)",
                                    border:
                                        "1px solid rgba(255, 255, 255, 0.2)"
                                }}
                            >
                                <Card.Img
                                    src={device.image}
                                    alt={device.name}
                                    style={{
                                        height: "120px",
                                        objectFit: "contain"
                                    }}
                                />

                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            color: "white",
                                            fontSize: "20px"
                                        }}
                                    >
                                        {device.name}
                                    </Card.Title>

                                    {/* Status */}
                                    <p style={{ color: "white" }}>
                                        Status:{" "}
                                        <Button
                                            variant={
                                                device.status === "Online"
                                                    ? "success"
                                                    : "secondary"
                                            }
                                            size="sm"
                                        >
                                            {device.status}
                                        </Button>
                                    </p>

                                    {/* Alert */}
                                    <p style={{ color: "white" }}>
                                        Alert:{" "}
                                        <Button
                                            variant={
                                                device.alert
                                                    ? "danger"
                                                    : "secondary"
                                            }
                                            size="sm"
                                        >
                                            {device.alert
                                                ? "Alert detected"
                                                : "No alert"}
                                        </Button>
                                    </p>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredDevices.length === 0 && (
                        <p
                            style={{
                                color: "white",
                                textAlign: "center",
                                marginTop: "30px"
                            }}
                        >
                            No devices found for this filter.
                        </p>
                    )}
                </Container>
            </div>
        </div>
    );
}

export default Dashboard;