import { useState } from "react";
import Maps from "../../components/maps/maps";

import SearchElements from "../../components/searchElements/searchElements";

import "./homePage.css";

const HomePage = (props: any) => {
  const [data, setData] = useState([]);

  const restData = (nearBy: any) => {
    setData(nearBy);
  };
  return (
    <div className="homeContainer">
      <SearchElements
        focus={props.focus}
        search={props.search}
        restData={restData}
      />

      <Maps nearBy={data} />
    </div>
  );
};

export default HomePage;
