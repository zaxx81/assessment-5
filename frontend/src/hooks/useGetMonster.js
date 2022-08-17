import { useEffect } from "react";
import axios from "axios";

const BASE_URL =
  "https://app.pixelencounter.com/api/basic/svgmonsters/image/png";

const useGetMonster = () => {
  const monsterUrl = () => {
    let url = new URL(BASE_URL);

    url.search = new URLSearchParams({
      primaryColor: "%231fce45",
      size: "100",
    });

    return url;
  };

  const fetchMonster = () => {
    axios({
      method: "get",
      url: monsterUrl(),
      withCredentials: false,
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then(
      (response) => {
        let result = response.data;
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    fetchMonster();
  });
};

export default useGetMonster;
