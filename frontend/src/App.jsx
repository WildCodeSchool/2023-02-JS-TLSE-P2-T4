import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import Home from "@pages/Home";
// eslint-disable-next-line import/no-unresolved
import AboutUs from "@pages/AboutUs";
// eslint-disable-next-line import/no-unresolved
import Rules from "@pages/Rules";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/Rules" element={<Rules />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
