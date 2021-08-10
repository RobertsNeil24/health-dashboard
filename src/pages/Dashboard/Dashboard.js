import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import SYSTEM_DATA from "../../system.data";

import HealthCardList from "../../components/HealthCard/HealthCardList";

const Dashboard = () => {
  const [healthApps, setHealthApps] = useState([]);

  useEffect(() => {
    //loadSocket();

    // Mocked out version
    setHealthApps(SYSTEM_DATA);
  }, [healthApps]);

  return (
    <div className="container">
      <HealthCardList applications={healthApps} />
    </div>
  );
};

const loadSocket = () => {
  const socket = socketIOClient(process.env.DEV_APP_URL);
  socket.on("data", (data) => {
    this.setHealthApps(data);
  });
};

export default Dashboard;
