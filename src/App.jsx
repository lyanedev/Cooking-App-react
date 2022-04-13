import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/cuisine/:type"} element={<Cuisine />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
