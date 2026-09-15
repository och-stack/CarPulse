import { useContext, useState } from "react";
import { Container, Card, Button, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import devices from "../data/device.json";

function Dashboard() {
    const [filter, setFilter] = useState("all");
    const [deviceStatus, setDeviceStatus] = useState(
        devices.reduce(
            (status, device) => ({
                ...status,
                [device.id]: device.status === "Online"
            }),
            {}
        )
    );

    const { setIsLoggedIn, role } = useContext(AuthContext);
    const navigate = useNavigate();

    const allCount = devices.length;
    const onlineCount = devices.filter(
        device => device.status === "Online"
    ).length;
    const offlineCount = devices.filter(
        device => device.status === "Offline"
    ).length;
    const alertCount = devices.filter(
        device => device.alert === true
    ).length;

    function handleLogout() {
        setIsLoggedIn(false);
        navigate("/login");
    }

    function toggleDevice(id) {
        setDeviceStatus({
            ...deviceStatus,
            [id]: !deviceStatus[id]
        });
    }

    const filteredDevices = devices.filter(device => {
        if (filter === "all") return true;
        if (filter === "alert") return device.alert === true;

        return device.status.toLowerCase() === filter;
    });

    return (
        <div className="app-background">
            <div className="app-overlay">

                <Navbar expand="lg" bg="dark" variant="dark" className="px-4">
                    <Container>
                        <Navbar.Brand
                            onClick={() => navigate("/dashboard")}
                            className="brand"
                        >
                            <img
                                src="/icarpulse.png"
                                alt="iCarPulse"
                                className="brand-logo"
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

                <Container className="dashboard-container">

                    <div className="dashboard-header">
                        <h1 className="white-text">iCarPulse</h1>
                        <p className="white-text">
                            Monitor your vehicle at a glance
                        </p>
                    </div>

                    <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
                        <Button
                            variant="primary"
                            onClick={() => setFilter("all")}
                        >
                            All ({allCount})
                        </Button>

                        <Button
                            variant="success"
                            onClick={() => setFilter("online")}
                        >
                            Online ({onlineCount})
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={() => setFilter("offline")}
                        >
                            Offline ({offlineCount})
                        </Button>

                        <Button
                            variant="danger"
                            onClick={() => setFilter("alert")}
                        >
                            Alert ({alertCount})
                        </Button>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {filteredDevices.map(device => (
                            <div
                                key={device.id}
                                className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
                            >
                                <Card className="device-card">
                                    <Card.Img
                                        src={device.image}
                                        alt={device.name}
                                        className="device-image"
                                    />

                                    <Card.Body>
                                        <Card.Title className="device-title">
                                            {device.name}
                                        </Card.Title>

                                        <p className="white-text">
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

                                        <p className="white-text">
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

                                        <p className="white-text">
                                            Monitoring:{" "}
                                            <Button
                                                variant={
                                                    deviceStatus[device.id]
                                                        ? "success"
                                                        : "secondary"
                                                }
                                                size="sm"
                                                disabled={role !== "admin"}
                                                onClick={() =>
                                                    toggleDevice(device.id)
                                                }
                                            >
                                                {deviceStatus[device.id]
                                                    ? "On"
                                                    : "Off"}
                                            </Button>
                                        </p>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {filteredDevices.length === 0 && (
                        <p className="no-results">
                            No devices found for this filter.
                        </p>
                    )}

                </Container>
            </div>
        </div>
    );
}

export default Dashboard;
