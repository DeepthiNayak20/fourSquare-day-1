import { useEffect, useState } from "react";
import "./navBar.css";

const NavBar = (props: any) => {
  const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    props.searchFocus(focus, search);
  }, [focus, search]);

  const searchHandler = (e: any) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };
  console.log("search anvbar", search);
  return (
    <div>
      <div className="navBar">
        <div className="logo">
          <img src={require("../../assets/images/logo.png")} alt="logo" />
        </div>
        <form className="inputSearch" onSubmit={searchHandler}>
          <img
            src={require("../../assets/icons/Shape.png")}
            alt=""
            className="searchIcon"
          />
          <input
            type="text"
            className="searchBar"
            placeholder="Search"
            name="search"
            onFocus={() => {
              setFocus(true);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default NavBar;
