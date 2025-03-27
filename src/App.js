import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import House from "./pages/House";
import LoginPage from "./pages/LoginPage";
import DashBoard from "./pages/DashBoard";








function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/" element={<House/>}/>
          <Route path="/LoginPage" element={ <LoginPage/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>

          
          
        </Routes>
      
      </BrowserRouter>
  


      
    
    </div>
  );
}

export default App;





