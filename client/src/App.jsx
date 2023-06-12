import { useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
//import { UserContextProvider } from '../context/userContext';
//import Dashboard from './pages/Dashboard';

axios.defaults.baseURL = 'http://localhost:8001'
axios.defaults.withCredentials = true

function App() {
  const [count, setCount] = useState(0)

  return (
     < > 
     <Navbar />
     <Toaster position='top-right' toastOptions={{duration: 2000}} />
     <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/register" element={< Register />} /> 
      <Route path="/login" element={< Login />} /> 
       
       </Routes>
     
         </>
  );
}

export default App
