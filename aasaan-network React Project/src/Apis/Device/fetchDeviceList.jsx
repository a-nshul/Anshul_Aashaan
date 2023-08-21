import { useState, useEffect } from "react";
import { fetchDeviceListApi } from "../../utils/urls";
import { toast } from "react-toastify";
/**
 *
 * @returns create custom hook for calling api for get devices list
 */
// const useFetchDeviceList = () => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:3000/device-info")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched data:", data);
//         setData(data);
//         setIsLoading(false);
//         console.log("res",data.ip);
//       })
//       .catch((err) => {
//         toast.success(err.message);
//       });
//   }, []);

//   return [data, isLoading];
// };
const useFetchDeviceList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/device-info")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
        toast.error(err.message);
      });
  }, []);

  return [data, isLoading, error];
};
export default useFetchDeviceList;
