import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import Home from "@pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </Router>
  );
}

export default App;
