// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grandpa from './components/Grandpa/Grandpa';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Routes>
         <Route path='/' element = {<Home></Home>} ></Route>
         <Route path='/home' element = {<Home></Home>} ></Route>
         <Route path='/order' element={<OrderReview />}></Route>
         <Route path='/grandpa' element={<Grandpa />}></Route>
       </Routes>
    </div>
  );
}

export default App;
