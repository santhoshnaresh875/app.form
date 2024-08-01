import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import{ BrowserRouter, Routes,Route}from'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Creat from './Components/Creat';
import Edit from './Components/Edit';




function App() {
  return (
    <div className="App">
     
      <ul>
        <li><a href='/home'>HOME PAGE</a></li>
        <li><a href='/About'>ABOUT PAGE</a></li>
        <li><a href='/Creat'>CREATE PAGE</a></li>
        <li><a href='/Edit'> EDEIT PAGE</a></li>
      </ul>
     
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="About" element={<About></About>}></Route>
      <Route path="Creat" element={<Creat></Creat>}></Route>
      <Route path="Edit" element={<Edit></Edit>}></Route>
     </Routes>
     </BrowserRouter>
     


    </div>
  );
}

export default App;
