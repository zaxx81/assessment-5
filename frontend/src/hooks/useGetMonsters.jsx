import axios from "axios";
import { useEffect, useState } from "react";

const useGetMonsters = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/fetch/monsters");
        setData(response.data);
        setError(null);
        console.log("Successfully fetched monsters...");
        console.log(data);
      } catch (error) {
        setError(error.message);
        setData([]);
      }
    };
    getData();
  }, []);

  return { data, error };
};

export default useGetMonsters;
