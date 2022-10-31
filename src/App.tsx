import { Route, Routes } from "react-router-dom";
import HomePage from "./views/homePage/homePage";
import "./style.css";
function App() {
  return (
    <div className="App">
      {" "}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
