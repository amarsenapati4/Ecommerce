/*import logo from './logo.svg';*/
/*import './App.css';*/
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePgae/>}/>
      <Route path='/About' element={<About/>}/>  
      <Route path='/contact' element={<Contact/>}/>  
      <Route path='/policy' element={<Policy/>}/>
      <Route path='*' element={<Pagenotfound/>}/>    
      </Routes>
    
    </>
  );
}

export default App;
