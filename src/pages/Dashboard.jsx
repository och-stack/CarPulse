import devices from "../data/data.json";

function Dashboard() {
    return (
        <div className="container mt-5">
            <h1>Security Dashboard</h1>

            <div className="row mt-4">
                {devices.map((device) => (
                    <div className="col-md-4 mb-4" key={device.name}>
                        <div className="card h-100">

                            <img
                                src={device.image}
                                className="card-img-top"
                                alt={device.name}
                            />

                            <div className="card-body">
                                <h5 className="card-title">
                                    {device.name}
                                </h5>

                                <p className="card-text">
                                    Status: <strong>{device.status}</strong>
                                </p>

                                <p className="card-text">
                                    Alert:{" "}
                                    <strong>
                                        {device.alert
                                            ? "Alert detected"
                                            : "No alert"}
                                    </strong>
                                </p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;