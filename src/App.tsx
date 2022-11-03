import { Route, Routes } from "react-router-dom";

import HomePage from "./views/homePage/homePage";
import "./style.css";
import NavBar from "./components/navBar/navBar";
import { useState } from "react";
import HotelDetails from "./components/hotelDetails/hotelDetails";

function App() {
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("");
  const searchFocus = (focusData: any, search: any) => {
    setFocus(focusData);
    setSearch(search);
  };

  console.log("search", search);

  return (
    <div className="App">
      <NavBar searchFocus={searchFocus} />{" "}
      <Routes>
        <Route path="/" element={<HomePage focus={focus} search={search} />} />
        <Route path="/hotel" element={<HotelDetails />} />
      </Routes>
    </div>
  );
}

export default App;
