import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LayoutPage from './pages/LayoutPage';
import Home from './pages/Home';
import About from './pages/About'
import BookingForm from './pages/BookingForm';
import Menu from './pages/Menu';
import ConfirmPage from './pages/ConfirmPage';
import Reservation from './pages/Reservation';
function App() {
  return (
    <div className='container-fluid'>
    <Router>
    <Routes>
     <Route path="/" element={<LayoutPage/>}>
      <Route index path="/" element={<Home/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/menu" element={<Menu/>}></Route>
     <Route path="/reserve" element={<BookingForm/>}></Route>
     <Route path="/confirm" element={<ConfirmPage/>}></Route>
     </Route>
    </Routes>
  </Router>
     
    </div>
  );
}

export default App;
