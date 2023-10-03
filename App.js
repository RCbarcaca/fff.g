import Footer from "./components/utility/Footer";
import NavBarLogin from "./components/utility/NavBarLogin";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ShopProductPage from "./pages/Products/ShopProductPage";
import ProductsDetailsPage from "./pages/Products/ProductsDetailsPage";
function App() {
  return (
    <div className="font">
    <NavBarLogin/>
    <BrowserRouter>
     <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/Login" element={<LoginPage/>}/>
      <Route path="/AllProducts" element={<ShopProductPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/Products/:id" element={<ProductsDetailsPage/>}/>
      
     </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;