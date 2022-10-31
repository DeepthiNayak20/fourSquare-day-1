import "./navBar.css";
import GoogleMapReact from "google-map-react";

const NavBar = () => {
  return (
    <div>
      <div className="navBar">
        <div className="logo">
          <img src={require("../../assets/images/logo.png")} alt="logo" />
        </div>
        <div className="inputSearch">
          <img
            src={require("../../assets/icons/Shape.png")}
            alt=""
            className="searchIcon"
          />
          <input type="text" className="searchBar" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
