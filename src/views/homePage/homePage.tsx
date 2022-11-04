import { useState } from "react";
import Maps from "../../components/maps/maps";

import SearchElements from "../../components/searchElements/searchElements";

import "./homePage.css";

const HomePage = (props: any) => {
  const [data, setData] = useState([]);
  const [place, setPlace] = useState([]);
  const [currentPath, setCurrentPath] = useState({});
  const [indexHome, setIndexHome] = useState(0);
  console.log("currentPath", data);

  const restData = (nearBy: any) => {
    setData(nearBy);
  };

  const location = (data: any) => {
    setPlace(data);
  };
  const index = (ind: any) => {
    setIndexHome(ind);
  };
  const path = (path: any) => {
    setCurrentPath(path);
  };
  return (
    <div className="homeContainer">
      <SearchElements
        focus={props.focus}
        search={props.search}
        restData={restData}
        location={location}
        path={path}
        data={data && data[indexHome] && data[indexHome]}
      />

      <Maps nearBy={data} place={place} path={currentPath} index={index} />
    </div>
  );
};

export default HomePage;
