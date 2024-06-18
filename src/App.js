import Home from "./home";
import Pricelist from "./pricelist";
import Contact from "./contact";
import { Route, Routes } from "react-router-dom";





function App() {
  return (
    <div className="App">
      <header>
        <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pricelist" element={<Pricelist/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </>
      </header>

      
      
    </div>
  );
}

export default App;
