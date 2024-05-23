import "./App.css";
import Todos from "./app/components/Todos";
import Addtodos from "./app/components/Addtodos";
import Navbar from "./app/components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/components/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Addtodos />}></Route>
          <Route path="/todolist" element={<Todos />} />
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
