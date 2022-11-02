import React, { useEffect, useState } from "react";

const Coordinates = (props: any) => {
  const [location, setLocataion] = useState("");

  console.log("adas", props);

  const url = `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${
    props || "udupi"
  }&language=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "40adfff86amshae63704e562067ap186c63jsnff5b3c3286a4",
      "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setLocataion(json))
      .catch((err) => console.error("error:" + err));
  }, [props.search]);
  return location;
};

export default Coordinates;
