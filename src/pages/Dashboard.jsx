import { Container, Card, Row, Col, Badge } from "react-bootstrap";

import devices from "../data/data.json";

export default function Dashboard() {
    return (
        <Container className="mt-5">
            <h1>eGuard Dashboard</h1>

            <p>Vehicle security monitoring</p>

            <Row>
                {devices.map((device) => (
                    <Col md={4} className="mb-3" key={device.id}>
                        <Card>
                            <Card.Body>
                                <img
                                    src={device.image}
                                    alt={device.name}
                                    width="80"
                                    height="80"
                                />

                                <Card.Title>
                                    {device.name}
                                </Card.Title>

                                <Badge
                                    bg={
                                        device.status === "Online"
                                            ? "success"
                                            : "danger"
                                    }
                                >
                                    {device.status}
                                </Badge>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}