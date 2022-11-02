import Maps from "../../components/maps/maps";

import SearchElements from "../../components/searchElements/searchElements";

import "./homePage.css";

const HomePage = (props: any) => {
  return (
    <div className="homeContainer">
      <SearchElements focus={props.focus} search={props.search}/>

      <Maps />
    </div>
  );
};

export default HomePage;
