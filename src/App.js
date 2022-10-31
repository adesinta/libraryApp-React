import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Detailreact from "./components/detail/Detailreact"
import Detaildilan from "./components/detail/Detaildilan";
import Detailseni from "./components/detail/Detailseni";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/> 
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/detaildilan" element={<Detaildilan/>}/>
          <Route path="/detailseni" element={<Detailseni/>}/>
          <Route path="/detailreact" element={<Detailreact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
