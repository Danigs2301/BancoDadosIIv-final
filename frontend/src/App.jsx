import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './home';
import LoginPage from './login';
import login_user from './login_user';
import login_restaurant from './login_restaurant';
import ViewOrdersUsers from './view_user';
import ViewOrdersRestaurans from './view_restaurant';
import CreateUser from './CreateUser';
import CreateRestaurant from './CreateRestaurant';
import CreateOrder from './CreateOrder';
import ItemsOrder from './create_items_order';
import AddProductRestaurant from './restaurantAddProduct';
import AdminView from './AdminView';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login_user" element={<LoginPage function_controller={login_user} type_login={'_user'}/>} />
        <Route path='/login_restaurant' element={<LoginPage function_controller={login_restaurant} type_login={'_restaurant'}/>}/>
        <Route path='/orders_user' element={<ViewOrdersUsers/>}/>
        <Route path='/orders_restaurant' element={<ViewOrdersRestaurans/>}/>
        <Route path='/create_user' element={<CreateUser/>}/>
        <Route path='/create_restaurant' element={<CreateRestaurant/>}/>
        <Route path='/create_order' element={<CreateOrder/>}/>
        <Route path='/add_items_order' element={<ItemsOrder/>}/>
        <Route path='/add_product_restaurant' element={<AddProductRestaurant/>}/>
        <Route path='/add_items_order' element={<ItemsOrder/>}/>
        <Route path='/admin' element={<AdminView/>}/>
      </Routes>
    </Router>
  );
}

export default App;
