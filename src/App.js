import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from './component/Home';
import LandingPage from './component/LandingPage';
import UserLogin from './component/UserLogin';
import PatientSignUp from './component/PatientSignUp';
import Contact from './component/Contact';
import About from './component/About';



function App() {
  return (

    <BrowserRouter>
      <Routes>


      
        <Route path="/" element={<LandingPage />} ></Route>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/patient-sign-up" element={<PatientSignUp />} />
        <Route path="/userlogin" element={<UserLogin />} />

        <Route path="/userlogin" element={<UserLogin />} />

      </Routes>


    </BrowserRouter>



  );
}

export default App;
