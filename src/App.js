import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import AddEmployees from "./pages/AddEmployees/AddEmployees";
import Employees from "./pages/Employees";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/addemployees" element={<AddEmployees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
