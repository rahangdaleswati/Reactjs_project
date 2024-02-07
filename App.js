import './App.css';
import Navbar from './components/Layout/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Pages/Home";
import Gallery from "./components/Pages/Gallery";
import Register from "./components/Pages/Register";
import Show from "./components/Pages/Show";
import Edit from './components/Pages/Edit';
import Delete from './components/Pages/Delete';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/show' element={<Show/>}></Route>
        <Route path='/customer/update/:customerID' element={<Edit/>}></Route>
        <Route path='/customer/delete/:customerID' element={<Delete/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
