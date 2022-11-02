import { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://developers.zomato.com/api/v2.1/geocode?lat=13.3409&lon=74.7421`,
      {
        headers: {
          Accept: "application/json",
          "user-key": "5ffb698e3d9a8ea8d51fb8847c216058",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return data;
};

export default Api;
