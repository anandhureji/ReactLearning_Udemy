
import { BrowserRouter,Link,Routes,Route ,NavLink} from 'react-router-dom';
import './App.css';
import Layout from './context/Layout';
import MainConten from './context/MainConten';
import UserList from './Hooks/UserList';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import UserInfo from './user/UserInfo';

function App() {
  return (
   <BrowserRouter>
   <div className='pages'>
   <div className='page-header'>
   <NavLink to="/" activeClassName="active" >HomePage</NavLink>{' '}
   <NavLink to="/product" activeClassName="active" >ProductPage</NavLink>{' '}
   <NavLink to="/about" activeClassName="active" >AboutPage</NavLink>{' '}
   </div>
   <div className='page-content'>
   <Routes>
   <Route path="/about" element={<AboutPage/>} />
   <Route path="/product" element={<ProductPage/>} />
   <Route path="/" element={<HomePage />} />
   <Route path="/product/:id" element={<ProductPage />} />
 
   </Routes>
   </div>
   </div>
   
   
   </BrowserRouter>
    
  );
}

export default App;
