import { useEffect, useState } from "react";
import axios from "axios";

const useGetDungeon = () => {
  const [dungeon, setDungeon] = useState([]);

  const fetchDungeon = () => {
    axios.get("/api/dungeon/").then(
      (response) => {
        let result = response.data;
        setDungeon(result);
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    fetchDungeon();
  }, []);

  return dungeon;
};

export default useGetDungeon;
