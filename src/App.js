import './App.css';
import {Routes,Route} from "react-router-dom"
import { Home } from './Components/Home/Home';
import { ItemPage } from './Components/ItemPage/ItemPage';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { Cart } from './Components/Cart/Cart';
import { AdminHome } from './Components/Admin/AdminHome/AdminHome';
import { AdminAllProducts } from './Components/Admin/AdminAllProducts/AdminAllProducts';
import { AdminAddProduct } from './Components/Admin/AdminAddProduct/AdminAddProduct';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/item/:id" element={<ItemPage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/admin' element={<AdminHome/>}></Route>
      <Route path='/admin/allProducts' element={<AdminAllProducts/>}></Route>
      <Route path='/admin/addProduct' element={<AdminAddProduct/>}></Route>

    </Routes>
  );
}

export default App;
