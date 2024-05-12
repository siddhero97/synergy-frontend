import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import ListContact from "./components/ListContact/ListContact";
import AddContact from "./components/AddContact/AddContact";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listcontact" element={<ListContact />}></Route>
          <Route path="/addcontact" element={<AddContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
