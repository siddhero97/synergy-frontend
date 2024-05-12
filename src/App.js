import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import ListContact from "./components/ListContact/ListContact";
import AddContact from "./components/AddContact/AddContact"
import Qr from "./components/QR/Qr";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listcontact" element={<ListContact />}></Route>
          <Route path="/addcontact" element={<AddContact />} />
          <Route path="/scan" element={<Qr/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
