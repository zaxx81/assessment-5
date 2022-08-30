import axios from "axios";
import { useEffect, useState } from "react";

const useGetMonsters = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/fetch/monsters");
        // console.log(response.data);
        setData(response.data);
        setError(null);
        console.log("Successfully fetched monsters...");
      } catch (error) {
        setError(error.message);
        setData([]);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(`Data Changed`);
    data.forEach((monster) => {
      console.log(monster);
    });
  }, [data]);

  return { data, error };
};

export default useGetMonsters;
