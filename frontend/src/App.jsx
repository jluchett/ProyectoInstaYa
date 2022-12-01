import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listado from "./components/Listado";
import Login from "./components/Login";
import Register from "./components/Register";
import Actualizar from "./components/Actualizar";
import Crear from "./components/Crear";
import Forgot from "./components/forgot";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Registro" element={<Register />}/>
          <Route path="/forgot" element={<Forgot/>} />
          <Route path="/listado" element={<Listado />}/>
          <Route path="/crear" element={<Crear />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
