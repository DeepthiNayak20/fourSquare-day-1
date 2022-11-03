import { useEffect, useState } from "react";

const Api = (place: any) => {
  const [data, setData] = useState([]);
  console.log("x", place && place.results && place.results[0].location.lng);

  useEffect(() => {
    fetch(
      `https://developers.zomato.com/api/v2.1/geocode?lat=${
        place && place.results && place.results[0].location.lat
      }&lon=${place && place.results && place.results[0].location.lng}`,
      {
        headers: {
          Accept: "application/json",
          "user-key": "c470e80941290e8b35355d10dcfb3e36",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [place]);

  return data;
};

export default Api;


