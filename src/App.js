import './App.css';

import { Route , Routes } from 'react-router-dom';

import Header from './components/HeaderComponent/Header';
import Banner from './components/BannerComponent/Banner';
import Nav from './components/NavComponent/Nav';
import Home from './components/HomeComponent/Home';
import Footer from './components/FooterComponent/Footer';
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';
import Service from './components/ServiceComponent/Service';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import AdminHome from './components/AdminHomeComponent/AdminHome';
import UserHome from './components/UserHomeComponent/UserHome';
import Logout from './components/LogoutComponent/Logout';
import Manageusers from './components/ManageusersComponent/Manageusers';
import Verifyuser from './components/VerifyuserComponent/Verifyuser';
import EPAdmin from './components/EPAdminComponent/EPAdmin';
import CPAdmin from './components/CPAdminComponent/CPAdmin';
import AddCategory from './components/AddCategoryComponent/AddCategory';
import AddSubCategory from './components/AddSubCategoryComponent/AddSubCategory';
import ViewCategory from './components/ViewCategoryComponent/ViewCategory';
import ViewSubCategory from './components/ViewSubCategoryComponent/ViewSubCategory';
import Charity from './components/CharityComponent/Charity';
import Payment from './components/PaymentComponent/Payment';
import Success from './components/SuccessComponent/Success';
import Cancel from './components/CancelComponent/Cancel';
import AIClient from './components/AIClientComponent/AIClient';

function App() {
  return (
<>    

  <Header />


  <Banner /> 


  <Nav />


  <Routes>
      <Route path="" element={<Home />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/service" element={<Service />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/vemail/:email" element={<Verifyuser />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/logout" element={<Logout />} ></Route>
      <Route path="/admin" element={<AdminHome />} ></Route>
      <Route path="/manageusers" element={<Manageusers />} ></Route>
      <Route path="/epadmin" element={<EPAdmin />} ></Route>
      <Route path="/cpadmin" element={<CPAdmin />} ></Route>
      <Route path="/addcategory" element={<AddCategory />} ></Route>
      <Route path="/addsubcategory" element={<AddSubCategory />} ></Route>
      <Route path="/user" element={<UserHome />} ></Route>
      <Route path="/viewcategory" element={<ViewCategory />} ></Route>
      <Route path="/searchsc/:cnm" element={<ViewSubCategory />} ></Route>
      <Route path="/charity" element={<Charity />} ></Route>
      <Route path='/payment/:uid/:amt' element={<Payment />} ></Route>
      <Route path='/success' element={<Success />} ></Route>
      <Route path='/cancel' element={<Cancel />} ></Route>
      <Route path='/aiclient' element={<AIClient />} ></Route>    
  </Routes>    


  <Footer />    

</>
  );
}

export default App;
