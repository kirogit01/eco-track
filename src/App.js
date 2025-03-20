import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home" ;







function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/register" element={<RegisterPage/>} />
          
             
             

             
          </Routes>
  
      </BrowserRouter>
      

      
      
      
      
      
      
    </div>
  );
}

export default App;





