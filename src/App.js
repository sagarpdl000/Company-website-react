import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Foot from './components/Foot';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />
      
      


      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='Contact' element={<Contact us/>} ></Route>
      <Route path='About' element={<About us/>}></Route>

      </Routes>
      <Foot/>

     

      </BrowserRouter>

    </div>
  
  );
}

export default App;
