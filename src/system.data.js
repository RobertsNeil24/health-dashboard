
const SYSTEM_DATA = [
    {
        id: "3280b893-e49f-42c2-9868-f3e52ed86391",
        application: "PostGreSQL",
        name: "PostGres",
        source: "UAT",
        healthy: true,
        internal: true,
        incidentTime: "1571322600"
    },
    {
        id: "edbb0221-c71a-4b2d-a636-3b794a5814f3",
        application: "Redis",
        name: "Redis",
        source: "DEV",
        healthy: true,
        internal: true,
        incidentTime: "1571325300"
    },
    {
        id: "3d761605-6b17-4783-a83d-36bf115f0d74",
        application: "Open Shift",
        name: "Openshift",
        source: "PPE",
        healthy: true,
        internal: true,
        incidentTime: "1571326800"
    },

    {
        id: "7bec73c0-bb5e-4205-bba2-ccf2a4d5e62a",
        application: "RabbitMQ",
        name: "Rabbit",
        source: "UAT",
        healthy: false,
        internal: false,
        incidentTime: "1556116743",
        error: "Unauthorised access to the message queue kfkjdshkflhalkfsdf idhfisdkfyvdjlsfg uaigfiasgfgasuf uafiasugfsa"
    },
        {
        id: "629dea3c-a92e-4c50-82aa-c7a969809998",
        application: "Threshold",
        name: "Threshold",
        source: "DEV",
        healthy: false,
        internal: true,
        incidentTime: "1565910960",
        error: "The system is down"
    },
    {
        id: "a79adc41-13e7-43fd-a496-811ac2231cd1",
        application: "Makola",
        name: "Makola",
        source: "PPE",
        healthy: true,
        internal: false,
        incidentTime: "1566424925"
    }
    
  
]

export default SYSTEM_DATA;