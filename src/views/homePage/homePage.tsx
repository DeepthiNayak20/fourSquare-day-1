import { useState } from "react";
import Maps from "../../components/maps/maps";

import SearchElements from "../../components/searchElements/searchElements";

import "./homePage.css";

const HomePage = (props: any) => {
  const [data, setData] = useState([]);
  const [place, setPlace] = useState([]);

  const restData = (nearBy: any) => {
    setData(nearBy);
  };

  const location = (data: any) => {
    setPlace(data);
  };
  return (
    <div className="homeContainer">
      <SearchElements
        focus={props.focus}
        search={props.search}
        restData={restData}
        location={location}
      />

      <Maps nearBy={data} place={place} />
    </div>
  );
};

export default HomePage;
