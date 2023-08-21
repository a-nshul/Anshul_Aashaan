import React, {useEffect, useState } from "react";
import Table from "../../Component/Reusable/Table";
import Button from "../../Component/Reusable/Form/Button";
import useFetchDeviceList from "../../Apis/Device/fetchDeviceList";
import DeviceModal from "../../Component/Modals/DeviceModal";
import BackButton from "../../Component/Reusable/BackButton";
import Loader from "../../Component/Reusable/Loader";
import Header from "../../Component/Reusable/Header";

function Device() {
  const [show, setShow] = useState(false);
  // const [data, isLoading,error] = useFetchDeviceList();


  const [deviceData, setDeviceData] = useState([]);

  // Fetch data from the API endpoint
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/device-info");
      if (response.ok) {
        const data = await response.json();
        setDeviceData(data);
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


  // function handleTableData(data) {
  //   if (!Array.isArray(data)) {
  //     return [];
  //   }
  //   const processedData = data.map((item) => {
  //     return {
  //       hostname: item.hostname,
  //       ip: item.ip,
  //       mac: item.mac,
  //     };
  //   });
  //   return processedData;
  // }

  // console.log("data from useFetchDeviceList:", data); // Check if data is fetched correctly

  const showDeviceContent = () => {
    if (show) {
      return (
        <>
          <BackButton setShow={setShow} />
          <DeviceModal show={show} type={"DEVICES"} onHide={() => setShow(false)} />
        </>
      );
    } else {
      return (
        <>
          {/* {isLoading ? (
            <Loader />
            ) : error ? (
              <div>Error loading data.</div>
          ) : */}
           {/* ( */}
            <Table
              type={"DEVICES"}
              dataList={deviceData} // Pass processed data to Table
              isCheckbox={true}
              // result = {Array.isArray(data) ? data : [data]}

            />

          {/* )} */}
        </>
      );
    }
  };

  return (
    <div className={"privateBody"}>
      <div className="row">
        <div className="col-sm-10">
          <Header type={"DEVICES"} />
        </div>
        <div className="col-sm-2">
          <Button name={"Add Device"} onClick={() => setShow(true)} />
        </div>
      </div>
      {showDeviceContent()}
    </div>
  );

}
export default Device;