import Header from "../../Component/Reusable/Header";
import Table1 from "../../Component/Reusable/Table1";
import { useState, useEffect } from "react";

function Clients() {
  const [clientsData, setClientsData] = useState([]);

  // Fetch data from the API endpoint
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/connected-clients");
      if (response.ok) {
        const data = await response.json();
        setClientsData(data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const showDeviceContent = () => {
    return (
      <Table1
        type={"CLIENTS"}
        dataList={clientsData} 
        isCheckbox={true}
      />
    );
  };

  return (
    <div className={"privateBody"}>
      <div className="row">
        <div className="col-sm-10">
          <Header type={"CLIENTS"} />
        </div>
        <div className="col-sm-2"></div>
      </div>
      {showDeviceContent()}
    </div>
  );
}

export default Clients;

export const contentConstant = {
  "CLIENTS": {
    "TITLE": "Clients",
    "TABLE": [
        "Connected_Device",
        "IP_Address",
        "Mac_Address",
        "DHCP_Lease",
        // "Ip Address"
    ],
   // "TITLE": "Clients"
},
};
